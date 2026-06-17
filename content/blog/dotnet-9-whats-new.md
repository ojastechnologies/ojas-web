---
title: ".NET 9: What's New and Why It Should Matter for Your Next Project"
description: "Explore the most impactful new features in .NET 9 — performance gains, Blazor improvements, AOT compilation, and what they mean for your development projects."
date: "2026-05-20"
author: "Ojas Technologies"
tags: [".NET", ".NET 9", "Microsoft", "C#", "Technology"]
readingTime: "7 min read"
---

## .NET 9 Is Here — What's Worth Getting Excited About?

Microsoft released .NET 9 in November 2025, and it's one of the most impactful releases in recent memory. While every .NET release brings incremental improvements, .NET 9 delivers **genuinely meaningful advances** in performance, developer experience, and deployment options.

Here's what matters for your next project — from a practical engineering perspective.

## 1. Major Performance Improvements

Performance has been a focus of every .NET release, but .NET 9 takes it further:

- **20-40% faster JSON serialization** — Newtonsoft.Json and System.Text.Json both see major throughput gains
- **ARM64 optimizations** — Native performance improvements on Apple Silicon and other ARM processors
- **Reduced memory allocation** — Garbage collection improvements reduce pause times
- **Regex source generator improvements** — Compile-time regex that's even faster than before

**What this means:** Your existing applications get faster just by upgrading the runtime — no code changes required.

## 2. Blazor United: Saying Goodbye to the Blazor Split

The biggest news for web developers is **Blazor United** — Microsoft's unification of Blazor Server, Blazor WASM, and Blazor SSR into a single model. You can now:

- Start with server-side rendering for fast initial load
- Transition to WebAssembly for rich interactivity when needed
- Use the same components regardless of rendering mode
- Let the framework decide the best rendering strategy automatically

| Feature | .NET 8 | .NET 9 |
|---------|--------|--------|
| Rendering modes | Separate (Server/WASM/SSR) | **Unified (Blazor United)** |
| Component reuse | Manual per mode | **Automatic** |
| Initial load | Wasm: slow, Server: fast | **Fast always, then enhanced** |
| Offline support | WASM only | **Built into unified model** |

## 3. Native AOT Goes Mainstream

Native Ahead-of-Time (AOT) compilation was previewed in .NET 8 and is now production-ready in .NET 9:

- **Instant startup** — Applications launch in milliseconds
- **Smaller deployments** — Self-contained executables as small as 5-10 MB
- **No runtime dependencies** — No need to install the .NET runtime on target machines
- **Better for containers** — Smaller, faster containers that start instantly

**Perfect for:** Microservices, serverless functions, CLI tools, and containerized deployments.

## 4. C# 13 Language Features

.NET 9 ships with C# 13, bringing several quality-of-life improvements:

- **Collection expressions** — Simpler syntax for creating and manipulating collections
- **`field` keyword in properties** — Auto-accessor support without backing fields
- **Ref struct interfaces** — Ref structs can now implement interfaces
- **Params collections** — More flexible `params` parameter support

These aren't revolutionary, but they make everyday C# coding cleaner and less error-prone.

## 5. ASP.NET Core 9 Enhancements

For web API developers:

- **OpenAPI improvements** — Better automatic API documentation generation
- **Faster minimal APIs** — Further reduced overhead for high-throughput APIs
- **Time provider abstraction** — Easier testing and time-dependent logic
- **Improved rate limiting** — More flexible middleware for API protection

## 6. MAUI Improvements

.NET MAUI in .NET 9 addresses many of the pain points from earlier releases:

- **Performance parity** with native Android/iOS for common scenarios
- **Hybrid caching** for Blazor Hybrid apps
- **Desktop improvements** — Better Windows and macOS support
- **Maps control** — Native maps without third-party dependencies

## Should You Upgrade?

### Upgrade Now (.NET 8 → .NET 9)

- **New projects** — Absolutely. Start all new projects on .NET 9
- **Existing apps with Blazor** — Upgrade for Blazor United benefits
- **Microservices needing fast startup** — Native AOT is worth the migration cost

### Stay on .NET 8 (for now)

- **Large enterprise apps** — Major upgrades need thorough testing
- **Dependency-heavy projects** — Ensure all third-party libraries support .NET 9
- **Production-critical systems** — Let the first few minor patches arrive

## What We're Excited About at Ojas

As a .NET-focused development shop, we've been building with .NET 9 since its preview releases. **Blazor United is a game-changer** for our healthcare and enterprise clients — it lets us build rich interactive UIs without the traditional trade-offs of WASM vs. server-side rendering.

Native AOT is already making our containerized microservices deploy faster and run more efficiently. We're seeing 3-5x faster cold starts in our Kubernetes deployments.

## Build Your Next Project on .NET 9

**Ready to build with .NET 9?** Our team has been working with .NET 9 since preview — we know the ins and outs of what works and what to watch for.

→ [Hire .NET developers](/hire-developers) experienced with .NET 9
→ [Read more about our .NET projects](/blog)
