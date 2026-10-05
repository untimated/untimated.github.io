---
title: "Status Line Of the Dream"
description: "The pain might be real, so is the freedom"
pubDate: '2026-10-05'
draft: false
---

This week I've decided to redesign the old status bar/line that's still lacking in function. It's a truly useful section for placing non-distractive information such as fps, file names, or unity like logger.

The region is divided into three sections:
```
    struct StatusLine {
        ...
        struct{..} region_a; // render stats
        struct{..} region_b; // log
        struct{..} region_c; // cmd
    }
```

![default state](../../assets/okt/status-line-normal.png)

### Log Region
It's compact and relatively easy to skim, won't distract you, but still be able to if it wants. 
For example, on error or standard info, this region will flash us with attention grabbing visual.

![status info](../../assets/okt/status-line-info.png)
![status error](../../assets/okt/status-line-error.png)

### Command Region
One of the upsides of having customized tools, -
is that nothing get in the way of me building _vim-like_ command interface or the famous __VSCode__/__Sublime__ *command palettes* `ctrl-alt-p` 
(except for spending the night agonizing on how to build it)
![status error](../../assets/okt/status-line-cmd.png)

**Next goalpost are debug panels for shadow textures and gamepad inputs.**
