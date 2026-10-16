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

Montwig is a 2.5+ yrs project by now, developed with crumbs of sparetime from my day job. It started to demand results after a year passed and It's still not ready; a game with new engine from scratch is truly not easy, my body and brain can't keep up! then the excitement when everything was just lean win32 and single fat d3d layer is no longer there. I thought, this has to be a sign of burnout. However, my ego says that's a weakness, pushing constantly regardless of your wellbeing is the only way things get done. So I pushed on, but reality after experimentation shows otherwise - the system is getting complex, coding is harder not easier, I'm getting older and I haven't touched paper and gouache for months it's getting dry. The engine had become the burden than a pride.

The journey is not for naught, dipping your feet on complex and tough challenge like this gives you not just skills but illumination of wisdom in programming as a craft. It felt like that the secrets are revealed one by one to you, and when everyone around us still lived within that thick fog, we've stand on top of it. Nevertheless It came with a price that you may not prepared to or ability to pay.

### Rescue

In my observation in AI people are now splitted to three kind of groups, the Pro-AI, Anti-AI and the Skeptics.

The Pro AI are easier to identify as they are always on the social media following, criticizing and benchmarking LLM from top labs. Their usual catchphrase was "Cope" or "Replaced". Many of them, not all, became *vibe coders*.

The Anti AI is harder to spot because some of them are just skeptical of AI rather than complete rejection of the technology. At the far spectrum, the Anti AI usually brings up ethical topic like IP concern or AI Ban itself. 

Skeptics group which includes people like me, acknowledges the use of AI and how transformative it is but held back to celebrate until the idea of "proper use" of AI reached consensus. They use and not use AI at the same time. For example corporation that I work on uses Claude enterprise only expecting 30% of development speed ups. Very conservative if were viewed from X tech/AI bro standpoint.

