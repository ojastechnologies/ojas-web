---
title: "Permission-Aware RAG: Keeping Enterprise AI Assistants From Leaking Data"
description: "An internal AI assistant should never show someone a document they couldn't open themselves. Here's how to design retrieval-augmented generation that respects existing access controls."
date: "2026-10-06"
author: "Ojas Technologies"
tags: ["RAG", "AI Security", "Enterprise AI"]
readingTime: "4 min read"
---

## The Question Every Security Team Asks

When a company plans an internal AI assistant, the first serious question usually comes from security or compliance: *"Can it show people things they're not supposed to see?"*

It's the right question. A retrieval-augmented generation (RAG) assistant reads from the same document stores your organization already protects — HR files, contracts, financial reports, patient or client records. If retrieval ignores those protections, the assistant becomes the easiest way around them.

The principle is simple: **the assistant should never retrieve a passage the user couldn't open themselves.** Getting there takes deliberate design.

## Where Leaks Actually Happen

Data exposure in RAG systems rarely comes from the language model "deciding" to reveal something. It comes from the pipeline:

- **Indexing everything into one bucket** with no record of who can see what.
- **Filtering after generation** — retrieving restricted passages, then trying to strip them from the answer. By then the model has already seen them.
- **Stale permissions** — a document's sharing was tightened last month, but the search index still carries the old access list.
- **Shared caches** — caching answers by question text, so one user's answer is served to another user with different access.
- **Logs and traces** that store full retrieved passages where more people can read them than the original documents allowed.

## Design Principle 1: Carry Permissions Into the Index

At ingestion time, record who can access each chunk alongside the content — typically the groups or roles from your identity provider (for example, Entra ID group IDs). Store it as a filterable field on every chunk.

Inherit permissions from the source document. If the source system has folder- or item-level permissions, resolve them to the effective set of groups when indexing.

## Design Principle 2: Filter Before Retrieval, Not After

At query time, look up the signed-in user's groups and apply them as a **filter in the search query itself**, so restricted chunks are never returned. The model only ever sees passages the user is allowed to read.

This is different from — and much safer than — asking the model to "not mention confidential information."

## Design Principle 3: Keep Permissions in Sync

Permissions change: people move teams, documents get re-shared, projects end. Your sync process needs to handle more than new content:

- Re-index a document's access list when its sharing changes, even if the text didn't.
- Remove chunks promptly when documents are deleted or archived.
- Run periodic full reconciliations to catch anything incremental sync missed.

Decide on an acceptable delay between a permission change and the index reflecting it, and monitor against it.

## Design Principle 4: Scope Everything Else to the User

Retrieval isn't the only path for data to travel:

- **Caches** should be keyed by user (or by the user's effective permission set), never by question alone.
- **Conversation history** belongs to the user who created it.
- **Logs and analytics** should store references (chunk IDs, document IDs) rather than full passages where possible, with access limited to people who need it.
- **Feedback tools** that let reviewers read conversations need their own access rules.

## Design Principle 5: Treat Documents as Untrusted Input

Documents can contain text that tries to steer the model — "ignore previous instructions and…" — whether planted deliberately or pasted in innocently. Defend against it:

- Keep system instructions separate from retrieved content, and tell the model that sources are data, not instructions.
- Don't give the assistant tools or actions that could exfiltrate data without a person approving them.
- Include prompt-injection cases in your evaluation set.

## Test It Like a Security Feature

Permission-aware retrieval should be tested as rigorously as any access-control code:

- Create **test users in different groups** and confirm each one only retrieves what they should.
- Add evaluation questions whose answers exist *only* in restricted documents, and verify that unauthorized users get "I don't know."
- Re-run these tests whenever the indexing pipeline, filters, or identity integration change.

## Why This Matters Beyond Security

Getting permissions right isn't only about avoiding incidents. It's what lets organizations put one assistant in front of everyone instead of building separate, limited tools per department — and it's often what gets an AI project approved in regulated industries like healthcare, legal, and finance.

At Ojas Technologies, permission-aware retrieval is part of every enterprise RAG system we build, alongside evaluation, monitoring, and deployment inside the client's own cloud. If you're planning an internal assistant and want to get access control right from day one, [let's talk](/contact).
