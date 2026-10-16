---
title: "How to Evaluate a RAG System Before It Reaches Your Users"
description: "A practical guide to testing retrieval-augmented generation: building a question set, measuring retrieval and answer quality, and catching regressions before they ship."
date: "2026-08-11"
author: "Ojas Technologies"
tags: ["RAG", "AI Evaluation", "AI Quality"]
readingTime: "4 min read"
---

## "It Looked Great in the Demo"

Almost every RAG prototype looks impressive the first time someone asks it a question. The trouble starts later: an answer that cites the wrong policy, a confident reply built on an outdated document, or a change to the chunking strategy that quietly makes half the answers worse.

The fix is not a better model. It's **evaluation** — a repeatable way to measure whether the system is giving good answers, run every time something changes.

## Step 1: Build a Question Set From Reality

Your evaluation set is the foundation. Make it from real material, not invented examples:

- Questions from support tickets, internal chat channels, and search logs.
- Questions subject-matter experts *know* are tricky.
- Questions the system **should refuse** or answer with "I don't know" because the documents don't cover them.

For each question, record the expected answer (or the key facts it must contain) and the document(s) where that answer lives. Fifty well-chosen questions beat five hundred generic ones.

Keep the set versioned alongside your code. When users report a bad answer in production, add that question to the set so it never regresses again.

## Step 2: Measure Retrieval Separately

A RAG answer can only be as good as the passages retrieved for it. Evaluate retrieval on its own before looking at generated answers:

- **Hit rate (recall@k):** for what fraction of questions does the correct source appear in the top *k* retrieved passages?
- **Ranking quality:** is the correct passage near the top, or buried at position eight?
- **Noise:** how many irrelevant passages are being sent to the model alongside the right one?

Retrieval problems are usually fixed with better chunking, hybrid search (combining vector and keyword search), metadata filters, or a reranking step — not with prompt changes.

## Step 3: Measure the Answers

Once retrieval is solid, score the generated answers. The dimensions that matter most:

- **Faithfulness:** is every claim in the answer supported by the retrieved sources? This is the main defense against made-up answers.
- **Correctness:** does the answer match the expected answer from your question set?
- **Citation accuracy:** do the cited sources actually contain the cited claims?
- **Appropriate refusal:** when the sources don't cover the question, does the system say so instead of guessing?

These can be scored by people, by an LLM acting as a grader with a clear rubric, or both. LLM grading scales well, but calibrate it: have a person score a sample and check that the automated scores agree.

## Step 4: Make It Part of Every Change

Evaluation only helps if it runs routinely. Treat it like a test suite:

1. Run the full question set whenever you change chunking, embeddings, prompts, models, or retrieval settings.
2. Compare scores against the previous version, question by question.
3. Block the change if important questions got worse, even if the average improved.

This turns "the new model feels better" into evidence you can show to stakeholders.

## Step 5: Keep Watching in Production

Offline evaluation won't catch everything. In production, track:

- **User feedback** (thumbs up/down, "this didn't help").
- **Questions with no good retrieval results** — often a sign of missing documents.
- **Latency and cost per answer**, so quality improvements don't quietly double your bill.

Review a sample of real conversations regularly and feed the interesting failures back into the evaluation set.

## A Simple Scorecard to Start With

| Metric | What it tells you | Typical fix when it's low |
|---|---|---|
| Retrieval hit rate | Right sources are being found | Chunking, hybrid search, metadata filters |
| Faithfulness | Answers stay grounded in sources | Stricter prompts, better context, citations |
| Correctness | Answers match expectations | Retrieval fixes, prompt and model tuning |
| Refusal accuracy | System admits what it doesn't know | Explicit "answer only from sources" rules |
| Cost & latency | Answers are affordable and fast | Smaller models, caching, fewer passages |

## The Payoff

Teams that invest in evaluation early move faster later. They can try a new model in an afternoon and know whether it helps. They can explain to compliance teams exactly how answer quality is measured. And they catch problems before users do.

Every RAG system we build at Ojas Technologies ships with an evaluation suite and dashboards as part of the handover. If you're running a RAG pilot and aren't sure how good it really is, [get in touch](/contact) — we're happy to help you set up a first scorecard.
