---
title: LLM Experimental Branch
description: Finding out a good use of LLM that balances productivity with
  quality and control
pubDate: 2026-10-16
updatedDate: 2026-10-16
draft: true
comments: false
---
I know LLM of late 2026 is no longer the same tool as it was a year ago. Uptil now I was just simply relying on AI chat to ask some stuffs, concepts and architectural decision. 
It wasn't a pleasant experience back then, they hallucinates, making up confident remarks. Yet I admit It's still a tremendously a productivity multiplier compare to what manual information gathering from books, docs or videos cost on you.

In this post I would like to go through reasons of why that's no longer the case, and how I'll use this month to deeply integrate coding agents into my most intimate side project. Something that I consider, no strict-cold AI written code should ever be here. 

## Reasons

Somewhere mid 2025 when my skepticism is all time high of coding agents, hence for duration I coded manually; day job or side projects. Just classic visiting chatgpt, gemini web copy pasting bugs, asking know-how of particular API or concepts. Tedious but I consider that the peak of what I think AI will influence an engineer workflow.

That changes mid 2026, where I tried Claude after no chatgpt or gemini model can fix a nasty windows timer bug that causes my FPS to tank on AMD chip from 1000+ fps down to mere 60fps after few seconds the program was running.  I tested this on my intel thinkpad and it never causes any problem. Turns out during my observation, these two produces different result. Something about how compiler treat direct calculation on argument like follow makes a slight precision error that acumulates the thread sleep. So even if this is fix the problem,  I feel this is too flimsy. Switched to sleep + spin so that any remaining time will be exhausted properly.

```
// auto duration = std::chrono::duration<double, std::milli>(sl);               // didnt tank
// auto duration = std::chrono::duration<double, std::milli>(sleeptime - 1.0);  // tanks fps
```

Back to LLM involvement here, and yes the LLM solves it with very minimal chat based debugging (I just copy-pasted bunch of contexts); at that time it was claude but perhaps nowadays any model is powerful enough to solve this type of bugs. At that point I started to see how deep LLM capability had become. Deep understanding on system level code is really not easy back then during gpt-4o era, it can't do these kind of problem properly without hallucinating.

The next 4 months after that, I was introduced to agents harness like CC / Codex. A completely new way of of coding for me. It sits on your computer and read your codebase aggresively. From these context, it offers you to write the solution by itself directly. 



## Approach

