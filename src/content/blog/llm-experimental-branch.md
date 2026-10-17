---
title: LLM Experimental Branch
description: Finding out a good use of LLM that balances productivity with
  quality and control
pubDate: 2026-10-16
updatedDate: 2026-10-16
draft: true
comments: false
---
LLM of late 2026 is no longer the same tool as it was a year ago. Until now I simply relied on AI chat to explain concepts and architectural decision. 
It wasn't a pleasant experience back then, they hallucinates, making up confident remarks. Yet I admit It's still a tremendously a productivity multiplier compare to what manual information gathering from books, docs or videos.

In this post I would like to go through reasons of why that's no longer the case, and how I'll use this month to deeply integrate coding agents into my most intimate side project. Something that I consider, a strict *no AI generated code zone*.

### Faction Split

I observed something interesting recently that AI are now clustering people into three kind of groups, the Pro-AI, Anti-AI and the Skeptics (Some of are influx of new folks outside tech)

The **Pro AI** on the social media keeping tab of progress, promoting and benchmarking LLMs. At the radical spectrum, when arguing with the Anti-AIs their usual catchphrase are: **"Cope"** or **"Replaced"**.

The **Anti AI** is trickier to spot because some of them are not completely convinced that AI is garbage. They demand answer around ethical topics like IP concern, economics and environmental impact. At the radical spectrum, their catchphrase revolved around : **"Slop"** or **"Bubble"**. 

*Skeptics* which includes people like Linus Trovalds and Terence Tao acknowledged the use of AI and how transformative it is; but held back of excess celebration until the idea of "proper use" of AI reached consensus or until it has proven itself to live up to its hype. Usually these people are working on the niches, or the 99th percentile of talents that truly working on cutting edge problems where problems are not solve in a day or two, but decades. A lateral problem solving that requires complex interchange of domains.  
[Case Of Physicist working with AI which otherwise could take months](https://x.com/Fabien_Mikol/status/2111066043288261091?s=20)

### My History with LLM

Somewhere mid 2025 when my skepticism is all time high of coding agents, I coded manually for both day job and side projects. Just classic workflow of visiting **ChatGPT**, **Gemini** on the web doing copy pasting codes back and forth. Process is tedious but I considered that as the peak of what I thought how AI will influence software engineering discipline.

That changes mid 2026, where I tried **Claude** after **ChatGPT** and **Gemini** model cannot find me a nasty windows timer bug that causes my FPS to tank on my thinkpad AMD from 1000+ fps down to mere 60fps after few seconds the program was running, a reproducible bug fortunately. I tested this on my intel thinkpad and it never causes any problem. After observation, back and forth with **Claude**, we found something about how compiler treat direct argument like follow makes a slight precision error that acumulates the `thread::sleep`. Finally switched to sleep and spin approach so that any remaining time will be exhausted properly.

```
// auto duration = std::chrono::duration<double, std::milli>(sl);               // didnt tank
// auto duration = std::chrono::duration<double, std::milli>(sleeptime - 1.0);  // tanks fps
```

LLM solved it with minimal context from chat based debugging. At that moment, the bug is spotted through **Claude**, but I believe nowadays any decent commercial model is powerful enough to spot this kind of problem. At that point I've started to see how deep LLM capability has evolved since 2025. A Deep understanding of system level code was genuinely not an easy task during *gpt-4o* era, It can't do these kind of problem properly without hallucinating after few rounds.

Then few months after, I came to know **Claude Code** and **Codex**. A much radical way of AI assisted coding. It sits on your computer and read your codebase wholistically. From these context, It offers you help to write the solution directly into the file within a tight loop system. It's all bunch of API calls to the *Antrophic* API, but it feels integrated and somehow cheaper with their caching. 

### A Burden To Pay

Montwig is a 2.5+ yrs project by now, developed with crumbs of sparetime from my day job. It started to demand results after a year passed, and yet It's still not ready. A game with new engine from scratch is truly not a feat of single man, my body and brain can't keep up! Nobody should tell you that it's a great idea.

The excitement plummets, when everything was no longer just lean *Win32* and *D3D*. I thought this has to be a sign of burnout, the symptoms checked. However, my ego says that's a weakness, constantly pushing is the only way things get done. So I pushed on, but reality after experimentation shows otherwise - the system is getting complex, coding is harder not easier, I'm getting older and I haven't touched paper and gouache for months it's getting dry. The engine had become the burden than a pride. Pushing doesn't change any for the better, instead the opposite.

That said, the journey isn't all lost either. Dipping your hand on complex and tough long term challenge like this gives you not just skills but illumination of wisdom in programming as a craft. It felt like the secrets of the deepr craft is revealed to you day by day, and when everyone around us still lived within that thick fog, we've stand on top of it. 

Nevertheless It came with a price that you may not prepared to or ability to pay. Your circumstances matters. I would advice you to go with commercial engine and start making the game of your dream, but do not shy away from the desire to understand something deeper when you have the time and energy. Tradeoffs is real but make sure you reason it out against your situation and expectations.

### Switching Paradigm

Last week I made radical compromise to use AI not just as chat tool but agents that write code directly at the source code. Why ? 

First, I noticed LLM has grown smarter in a way that using it as code reviewer and advisor only made me slower at producing code. Every edge cases are analyzed meticulously within seconds. They would tell me many different things that could go wrong, and I would go one by one to fixed it for hours! It's not great experience truthfully... we human usually only keep track few issues at a time and let the future test reveals those bugs. 

Second, A pilot experiment with my day job by almost having agent write 70% of the golang code for our corporate backend. I still do it in some scaffold code like directing what API to be built, how should they behave, and how the code should look like only to find my trust deepens with that kind of workflow. Not only they wrote complex logic that will otherwise got in my blind spots, they also respected my code structure and aesthetics very well. Almost looked like code that I will write if I have extra 50 IQ points.

### What's Next

For this month, I'm going to make an experimental branch `master-llm` from `master` where I can freely explores the profit as well the loss of using Agentic approach with AI, with me increasingly will relieve the tight grip overtime I have proof that this is the right balance to use this awesome technology. 

The Goal is to free up my time and energy from implementing engine editor as I prepare for the pre-production plan. There are plenty work in prototyping side : gameplay, aesthetics, concept art, world building and screen writing. Then we will move on to end-to-end engine test with semi-serious art. In short : I need to go back to my art board quickly.

### Artist Pride and Purity

If the pride is to pick the hardest and purest technique as possible, then I should throw it away. Because it's the wrong pride to keep in the first place.

Is using LLM makes you bad artist ? I'm sure even if that grants you extra credibility and fame, it won't give you a free ticket to fun. A good game still needs to be designed, thought and felt over until the experiences glued together. 

Players want Game Developers to own the best tools available to deliver the best results for them. They know art is back breaking life path but it's not in their interest either to see the suffering of the artist. The transaction is where it matters.

So this whole experiment exist to prove what LLM gives and what it takes. To what extend before it stops giving benefits. **The right use of AI**.



&nbsp;

&nbsp;

&nbsp;