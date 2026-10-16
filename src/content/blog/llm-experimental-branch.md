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

### A bit History with LLM

Somewhere mid 2025 when my skepticism is all time high of coding agents, hence for duration I coded manually; day job or side projects. Just classic workflow of visiting chatgpt, gemini on the web then copy pasting codes, asking know-how of particular API or concepts. Tedious but I consider that the peak of what I think AI will influence an engineer workflow for forseeable future.

That changes mid 2026, where I tried Claude after chatgpt and gemini model cannot find me a nasty windows timer bug that causes my FPS to tank on my thinkpad AMD from 1000+ fps down to mere 60fps after few seconds the program was running, a reproducible bug forunately. I tested this on my intel thinkpad and it never causes any problem. Turns out during my observation, these two produces different result. Something about how compiler treat direct argument like follow makes a slight precision error that acumulates the thread sleep. Finally switched to sleep + spin so that any remaining time will be exhausted properly.

```
// auto duration = std::chrono::duration<double, std::milli>(sl);               // didnt tank
// auto duration = std::chrono::duration<double, std::milli>(sleeptime - 1.0);  // tanks fps
```

LLM solved it with minimal context from chat based debugging. At the moment it was solved by claude, but nowadays any model is powerful enough to spot this kind of problem. At that point I've started to see how deep LLM capability has become since 2025. A Deep understanding on system level code was genuinely not an easy task during gpt-4o era, it can't do these kind of problem properly without hallucinating after few rounds.

Then few months after, I came to know Claude Code and Codex. A much radical way of AI assisted coding. It sits on your computer and read your codebase aggresively. From these context, it offers you to write the solution by itself directly into the file with a tight loop system. It's all bunch of API calls to the antrophic backend, but it feels integrated and somehow cheaper. 

### The Engine has Become A Burden

Montwig is a 2.5+ yrs project by now, developed with crumbs of sparetime from day job. It started to demand results after a year passed and It's still not ready; a game with new engine from scratch is truly not easy, my body and brain can't keep up! then the excitement when everything was just lean win32 and single fat d3d layer is no longer there. I thought, this has to be a sign of burnout. However, my ego says that's a weakness, pushing constantly regardless of your wellbeing is the only way things get done. So I pushed on, but reality after experimentation shows otherwise - system getting complex, I'm getting older and I haven't touched paper and gouache for months it's getting dry. The engine become the burden than an asset.



### Approach

