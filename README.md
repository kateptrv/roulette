# What You See is What You Regret
Kate Petrova\*, Nick Madibekov, Tobias Gerstenberg, James J. Gross\
48th Annual Meeting of the Cognitive Science Society (CogSci 2026, Rio de Janeiro, Brazil)


``` bibtex
@inproceedings{petrova2026youseeyouregret,
  title     = {What You See is What You Regret},
  booktitle = {Proceedings of the 48th {Annual} {Conference} of the {Cognitive} {Science} {Society}},
  author    = {Petrova, Kate and Madibekov, Nick and Gerstenberg, Tobias and Gross, James J.},
  year      = {2026}
}
```

------------------------------------------------------------------------

## Contents

1.  [Overview](#overview)
2.  [Studies](#studies)
3.  [Experiment demos](#experiment-demos)
4.  [Repository structure](#repository-structure)
5.  [CRediT author statement](#credit-author-statement)

------------------------------------------------------------------------

## Overview {#overview}

This repository contains materials, experiment code, behavioral data,
and analysis scripts for a series of behavioral experiments examining
how **counterfactual salience**—the degree to which unchosen
alternatives capture attention—shapes the subjective experience of
regret. Across three studies, we test the hypothesis that regret is
driven not only by outcomes, but by how decision-makers allocate
attention across the choice set. By manipulating which subsets of
options are made salient (externally in Studies 1a and 1b, and
endogenously in Study 2), we examine how counterfactual salience alters
both omission and commission regret.

------------------------------------------------------------------------

## Studies {#studies}

### Study 1a: Roulette task with externally cued counterfactuals (4 trials)

Participants (*N* = 52) completed a short roulette-style choice task in
which they selected one number from a 6×6 grid of 36 options on each
trial. Outcomes were pre-determined.

On counterfactually salient trials (CF+), a banner above the grid
highlighted a set of "hot" (lucky) numbers. The hot set was either small
(2 options) or large (16 options). On non-salient (CF-) trials, no
banner was shown. Participants completed four trials in total: two CF+
loss trials (one with a 2-number hot set and one with a 16-number hot
set), one CF- loss trial, and one win trial.

After each outcome, participants reported:

-   regret for the chosen option (commission regret), and
-   regret for not choosing the winning option (omission regret).

------------------------------------------------------------------------

### Study 1b: Roulette task with externally cued counterfactuals (24 trials)

Study 1b extended Study 1a by varying hot-set size more finely.
Participants (*N* = 98) completed 24 trials of the same roulette-style
task. Of the 20 loss trials, 10 were CF+ (with hot sets of size 1, 2, 3,
8, or 16) and 10 were CF- (no banner). Four winning trials were evenly
distributed across the task.

This design lets us test whether expanding the size of the salient
counterfactual set *attenuates* regret intensity across both omission
and commission regret.

------------------------------------------------------------------------

### Study 2: Minecraft-style task with endogenously constructed consideration sets (24 trials)

Study 2 (*N* = 48) tested whether the salience effects observed in
Studies 1a and 1b generalize when consideration sets are not externally
cued but instead **endogenously constructed** by the decision-maker.

Participants completed a Minecraft-style mining game on a 6×6 grid of
stone-textured blocks. On 10 of the 20 loss trials, participants first
selected a subset of 1, 2, 3, 8, or 16 blocks to consider before
choosing one to mine. On the remaining trials, participants chose
directly without an explicit consideration step. Some blocks yielded
emeralds (wins); most yielded nothing (losses).

------------------------------------------------------------------------

## Experiment demos {#experiment-demos}

Live, browser-playable demos of the tasks (hosted via GitHub Pages from
`docs/`):

-   **Studies 1a & 1b (roulette task):**
    <https://kateptrv.github.io/roulette/index_roulette.html>
-   **Study 2 (Minecraft-style task):**
    <https://kateptrv.github.io/roulette/index_minecraft.html>
-   **Landing page:** <https://kateptrv.github.io/roulette/>

------------------------------------------------------------------------

## Repository structure {#repository-structure}

```         
├── code/             # data processing, visualization, and analysis scripts
│   ├── R/            # RMarkdown files for processing, analysis, OSF download
│   ├── python/       # auxiliary Python scripts
│   ├── bash/         # shell utilities
│   └── experiments/  # notes on experiment implementation
├── data/             # raw and processed behavioral data (per-participant + cleaned)
├── docs/             # hosted jsPsych experiments
│   ├── index.html            # landing / dispatcher
│   ├── index_roulette.html   # Studies 1a / 1b task
│   ├── index_minecraft.html  # Study 2 task
│   ├── img/                  # task images (roulette, minecraft, feedback screens)
│   └── jspsych/              # consent and demographic plugins
├── figures/          # figures used in analyses and manuscripts
├── papers/           # related papers and drafts
├── presentation/     # slides and presentation materials
└── writeup/          # manuscript text and supplementary materials
```

All paths in code use relative references to ensure portability and
reproducibility.

------------------------------------------------------------------------

## CRediT author statement {#credit-author-statement}

*What is a [CRediT author
statement](https://www.elsevier.com/authors/policies-and-guidelines/credit-author-statement)?*

| Role | Contribution |
|-----------------------|------------------------------------------------|
| **Kate Petrova** | Conceptualization; Methodology; Software; Formal analysis; Investigation; Data curation; Writing – original draft; Visualization |
| **Nick Madibekov** | Conceptualization; Software; Writing - review & editing |
| **Tobias Gerstenberg** | Conceptualization; Methodology; Writing – review & editing; Supervision |
| **James J. Gross** | Conceptualization; Methodology; Writing – review & editing; Supervision; Funding acquisition |

------------------------------------------------------------------------

*Questions or issues?*\
Please open a GitHub issue for questions or suggestions.
