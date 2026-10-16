---
title: "Building a RAG Pipeline on Azure with .NET and Azure AI Search"
description: "A practical architecture for retrieval-augmented generation in the Microsoft ecosystem: ingestion, hybrid search with Azure AI Search, grounded answers with Azure OpenAI, and the C# that ties it together."
date: "2026-09-08"
author: "Ojas Technologies"
tags: ["RAG", ".NET", "Azure", "Azure OpenAI"]
readingTime: "5 min read"
---

## Why Build RAG on Azure?

If your organization already runs on Microsoft — Azure, Entra ID, SharePoint, SQL Server, .NET — building retrieval-augmented generation (RAG) on the same platform has real advantages:

- Your documents and the AI services can live in **your own Azure tenant and region**.
- Identity and access can reuse **Entra ID** groups you already manage.
- Your existing **.NET teams** can build and maintain it without adopting a new stack.

This post walks through an architecture we use as a starting point, with simplified C# examples.

## The Architecture at a Glance

A RAG system has two halves:

**Ingestion (runs when documents change)**

1. Pull documents from their sources — SharePoint, Blob Storage, SQL, ticketing systems.
2. Extract text while keeping structure (headings, tables, page numbers).
3. Split into chunks, attach metadata (source, section, last modified, allowed groups).
4. Generate an embedding for each chunk.
5. Write chunks, metadata, and vectors to an **Azure AI Search** index.

**Query (runs on every question)**

1. Embed the user's question.
2. Run a **hybrid search** — vector similarity plus keyword search — filtered to what the user is allowed to see.
3. Optionally rerank results with semantic ranking.
4. Send the top passages and the question to an **Azure OpenAI** chat model with instructions to answer only from the sources and cite them.
5. Stream the answer back with citations.

## Designing the Index

A minimal chunk record might look like this:

```csharp
public record Chunk
{
    public string Id { get; init; } = default!;
    public string Content { get; init; } = default!;
    public string Source { get; init; } = default!;      // file or URL
    public string Section { get; init; } = default!;     // heading path
    public string[] AllowedGroups { get; init; } = [];   // Entra ID group IDs
    public DateTimeOffset LastModified { get; init; }
    public ReadOnlyMemory<float> ContentVector { get; init; }
}
```

The fields that matter most in practice are the **metadata**: `AllowedGroups` for security trimming, `Source` and `Section` for citations, and `LastModified` for keeping the index current.

## Chunking: Where Quality Is Won or Lost

Chunking has more impact on answer quality than almost any other choice. A few rules of thumb:

- **Split on structure first** (headings, sections, table boundaries), then on size.
- Keep chunks small enough to be specific — a few hundred words is a common starting point — with a little overlap so sentences aren't cut in half.
- **Prefix each chunk with its heading path** (e.g. "Billing Policy › Refunds › Annual plans") so the chunk still makes sense out of context.
- Never split tables row by row; keep each table with its header.

## Retrieval: Hybrid Search With Security Filters

Pure vector search misses exact terms like product codes and policy numbers. Pure keyword search misses paraphrases. Hybrid search covers both. Here's a simplified query using the `Azure.Search.Documents` SDK:

```csharp
var embedding = await embeddings.GenerateEmbeddingAsync(question);

var options = new SearchOptions
{
    Size = 8,
    // Only return chunks the current user is allowed to see
    Filter = $"AllowedGroups/any(g: search.in(g, '{string.Join(",", userGroupIds)}'))",
    VectorSearch = new()
    {
        Queries =
        {
            new VectorizedQuery(embedding.Value.ToFloats())
            {
                KNearestNeighborsCount = 50,
                Fields = { "ContentVector" }
            }
        }
    },
    QueryType = SearchQueryType.Semantic,
    SemanticSearch = new() { SemanticConfigurationName = "default" }
};

SearchResults<Chunk> results = await searchClient.SearchAsync<Chunk>(question, options);
```

Passing the question text *and* a vector query makes Azure AI Search run keyword and vector search together and merge the results; semantic ranking then reorders the top results by relevance.

## Generation: Grounded Answers With Citations

With the passages in hand, the prompt does two jobs: give the model the sources, and set firm rules about using them.

```csharp
var sources = new StringBuilder();
var n = 1;
await foreach (var result in results.GetResultsAsync())
{
    sources.AppendLine($"[{n++}] ({result.Document.Source} — {result.Document.Section})");
    sources.AppendLine(result.Document.Content);
    sources.AppendLine();
}

ChatCompletion completion = await chatClient.CompleteChatAsync(
[
    new SystemChatMessage(
        "Answer using only the numbered sources provided. " +
        "Cite sources like [1]. If the sources do not contain the answer, say you don't know."),
    new UserChatMessage($"Sources:\n{sources}\nQuestion: {question}")
]);

var answer = completion.Content[0].Text;
```

In production you would stream the response, validate that the citations refer to real sources, and log the question, retrieved chunk IDs, and answer for evaluation and auditing.

## Keeping the Index Current

A RAG system is only as good as its freshest document. Plan for:

- **Incremental indexing** — re-process only documents whose `LastModified` changed.
- **Deletions** — remove chunks when source documents are deleted or access changes.
- **Permission sync** — when a document's sharing changes, update `AllowedGroups` so search filters stay correct.

Azure Functions or a background worker on a schedule handles this well for most organizations.

## What to Add Before Going to Production

The code above is the core loop. A production system also needs:

- An **evaluation set** of real questions with expected answers, run on every change.
- **Monitoring** of latency, cost per answer, and user feedback.
- **Guardrails**: PII handling, prompt-injection defenses for content coming from documents, and rate limits.
- **Model flexibility**: keep the model behind an interface so you can switch deployments or providers without rewriting the pipeline.

## Getting Started

If your team works in .NET and Azure, you can stand up a first version of this pipeline on a slice of your documents quickly, then measure it against real questions before scaling up.

Ojas Technologies builds production RAG systems on Azure for teams in the Microsoft ecosystem — from ingestion and security trimming to evaluation and handover. [Book a 30-minute AI call](/contact) to discuss your data and use case.
