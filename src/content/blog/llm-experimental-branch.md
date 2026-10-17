---
title: My Shifting Paradigm on Programming
description: Time shifted, we ought to be cautious with the unknown but be open
  to positive change
pubDate: 2026-10-16
updatedDate: 2026-10-16
draft: true
comments: false
---
LLMs of late 2026 are no longer the same tool as a year ago. Until now I simply relied on AI chat to explain concepts and architectural decisions. It wasn't a pleasant experience back then. They hallucinated, making up confident remarks. Yet I admit it was still a tremendous productivity multiplier compared to manual information gathering from books, docs or videos.

In this post I would like to go through the reasons why that's no longer the case, and how I'll use this month to deeply integrate coding agents into my most intimate side project. Something I consider a strict *no AI generated code zone*.

### Faction Split

I observed something interesting recently: AI is now clustering people into three kinds of groups, the Pro-AI, the Anti-AI and the Skeptics (some of them an influx of new folks from outside tech).

The **Pro-AI** folks keep tabs on progress, promote and benchmark LLMs on social media. At the radical end, when arguing with the Anti-AIs, their usual catchphrases are **"Cope"** or **"Replaced"**.

The **Anti-AI** are trickier to spot because some of them are not completely convinced that AI is garbage. They demand answers around ethical topics like IP concerns, economics and environmental impact. At the radical end, their catchphrases revolve around **"Slop"** or **"Bubble"**.

The *Skeptics* include people like Linus Torvalds and Terence Tao. They acknowledge the use of AI and how transformative it is, but hold back from excessive celebration until the idea of "proper use" reaches consensus, or until AI proves it lives up to the hype. Usually these people work in niches, or are the 99th percentile of talent working on cutting-edge problems that are not solved in a day or two, but in decades. Lateral problem solving that requires a complex interchange of domains.  
[Case of a physicist working with AI on something that could otherwise take months](https://x.com/Fabien_Mikol/status/2111066043288261091?s=20)

### My History with LLMs

Around mid 2025, when my skepticism of coding agents was at an all-time high, I coded manually for both my day job and side projects. Just the classic workflow of visiting **ChatGPT** and **Gemini** on the web and copy-pasting code back and forth. The process was tedious, but I considered it the peak of how AI would influence the software engineering discipline.

That changed in mid 2026. I tried **Claude** after the **ChatGPT** and **Gemini** models could not find a nasty Windows timer bug that tanked my FPS on my AMD ThinkPad, from 1000+ fps down to a mere 60 fps a few seconds after the program started. Fortunately it was reproducible. I tested it on my Intel ThinkPad and it never caused any problem. After some back and forth with **Claude**, we found that how the compiler handles a direct argument like the one below makes a slight precision error that accumulates in `thread::sleep`. In the end I switched to a sleep-and-spin approach so any remaining time gets exhausted properly.

```
// auto duration = std::chrono::duration<double, std::milli>(sl);               // didn't tank
// auto duration = std::chrono::duration<double, std::milli>(sleeptime - 1.0);  // tanks fps
```

The LLM solved it with minimal context from chat-based debugging. I believe nowadays any decent commercial model is powerful enough to spot this kind of problem, but at that point I started to see how far LLM capability had evolved since 2025. Deep understanding of system-level code was genuinely not easy in the *gpt-4o* era. It couldn't handle this kind of problem without hallucinating after a few rounds.

Then a few months later, I came to know **Claude Code** and **Codex**, a much more radical way of AI-assisted coding. It sits on your computer and reads your codebase holistically. From that context, it helps you by writing the solution directly into the files in a tight loop. It's all a bunch of API calls to the *Anthropic* API, but it feels integrated and somehow cheaper with their caching.

### A Burden To Pay

Montwig is a 2.5+ year project by now, developed with crumbs of spare time from my day job. It started to demand results after a year passed, and yet it's still not ready. A game with a new engine from scratch is truly not a feat for one person. My body and brain can't keep up! Nobody should tell you it's a great idea.

The excitement plummeted when everything was no longer just lean *Win32* and *D3D*. I thought this had to be a sign of burnout, and the symptoms checked out. However, my ego said that's a weakness, and that constantly pushing is the only way things get done. So I pushed on, but reality showed otherwise. The system is getting complex, coding is getting harder, not easier, I'm getting older, and I haven't touched paper and gouache for months. It's getting dry. The engine had become a burden rather than a pride. Pushing didn't change anything for the better, it did the opposite.

That said, the journey isn't all lost either. Dipping your hand into a complex and tough long-term challenge like this gives you not just skills but illumination of wisdom in programming as a craft. It felt like the secrets of the deeper craft were revealed to me day by day, and while everyone around us still lived within that thick fog, we stood on top of it.

Nevertheless, it came with a price that you may not be prepared or able to pay. Your circumstances matter. I would advise you to go with a commercial engine and start making the game of your dreams, but don't shy away from the desire to understand something deeper when you have the time and energy. Tradeoffs are real, so make sure you reason them out against your situation and expectations.

### Switching Paradigm

Last week I made a radical compromise: using AI not just as a chat tool but as agents that write code directly in the source code. Why?

First, I noticed LLMs have grown so smart that using them as a code reviewer and advisor only made me slower at producing code. Every edge case is analyzed meticulously within seconds. They would tell me many different things that could go wrong, and I would go one by one fixing them for hours! Truthfully, it's not a great experience... we humans usually only keep track of a few issues at a time and let future tests reveal the bugs.

Second, I ran a pilot experiment at my day job, having agents write almost 70% of the Golang code for our corporate backend. I still did some scaffolding, like directing which APIs to build, how they should behave, and how the code should look, and my trust only deepened with that kind of workflow. Not only did they write complex logic that would otherwise have been in my blind spots, they also respected my code structure and aesthetics very well. It almost looked like code I would write if I had an extra 50 IQ points.

### What's Next

For this month going forward, I'm going to make an experimental branch `master-llm` from `master`, where I can freely explore the profit and the loss of using an agentic approach on a game engine codebase. First with a tight grip, which I'll release over time until I have reliable proof for myself that the workflow works and is balanced. It's like pitching to my own skeptical self.

The side goal is to free up my time and energy from implementing the engine editor so I can prepare the pre-production materials. There is plenty of work on the prototyping side: gameplay prototype, aesthetic prototype, concept art, world building and screenwriting.

Technically, I'll be using **Claude Code CLI** in manual mode, reviewing each chunk it proposes and making sure the structure adheres to my standards and taste. I'm aware that reading does not equate to writing your own. I might read, understand and approve the code, but by not coding it myself, **I'm prepared to pay the price of skill atrophy.**

I'll post more updates on how it goes in the coming weeks. For a while now I've seen a glimpse of tremendous commit output and features made in these past few days with this workflow.

### Artist Pride and Purity

If the pride is to pick the hardest and purest technique possible, then I should throw it away, because it's the wrong pride to keep in the first place.

Does using LLMs make you a bad artist? Even if refusing to use them grants you extra credibility and fame, I'm sure it won't give you a free ticket to success. A good game still needs to be designed, thought through and felt until the experiences glue together. The struggle just shifted. For a solo developer, the benefits outweigh the cost.

Players want game developers to own the best tools available to deliver the best results for them. Everyone is aware that art is a path of tribulation, yet it's not in their interest to see artists suffer. The transaction is where it matters.

So this whole experiment exists to prove what LLMs give and what they take, and to what extent before they stop giving benefits. In essence, to find **the right use of AI**.

> The artist who has the habitus of  
> art and a trembling hand,  
> produces an imperfect work,  
> but retains a faultless virtue.  
>      *C'ha l'habito de l'arte e man che trema,*
>
> - Jacques Maritain - Art and Scholasticism