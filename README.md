# The Role of Counterfactual Salience in the Subjective Experience of Regret
------------------------------------------------------------------------

## Contents

1. [Overview](#overview)
2. [Experiments](#experiments)
3. [Repository structure](#repository-structure)
4. [CRediT author statement](#credit-author-statement)

------------------------------------------------------------------------

## Overview {#overview}

This repository contains materials, experiment code, and analysis scripts for a set of behavioral experiments examining how **counterfactual salience**—-the degree to which unchosen alternatives capture attention-—shapes the subjective experience of regret. Across 3 studies, we test the hypothesis that regret is driven not only by the outcomes, but by how decision makers allocate attention across the choice set. By selectively highlighting subsets of options, we manipulate the salience of specific counterfactuals and examine how this alters regret for chosen versus unchosen alternatives.

------------------------------------------------------------------------

## Studies {#experiments}

### Study 1a: Roulette-style choice task (24 trials)

Participants completed a multi-round choice task in which they selected one option from a grid of 36 options on each trial. Outcomes were pre-determined such that most trials resulted in losses, with a small number of evenly spaced wins.

On a subset of loss trials, a banner highlighted a set of options labeled as "hot"—described as having been successful in the past. The size of this hot set varied (1, 2, 3, 8, or 16 options), allowing us to manipulate the salience of specific counterfactual alternatives by varying how narrowly attention was drawn to a subset of options.

After each outcome, participants reported:
- regret for the chosen option (commission regret), and
- regret for not choosing the winning option (omission regret)

---

### Study 1b: Roulette-style choice task (4 trials)

Study 1b replicated the central contrast of Study 1a. Participants completed a shortened task consisting of four trial types:
- loss with no highlighted options,
- loss with a small hot set (2 options),
- loss with a large hot set (16 options), and
- a no-banner win trial.

This design allowed us to isolate the role of counterfactual salience by contrasting conditions in which attention was narrowly focused on a small set of alternatives versus broadly distributed across many plausible options. 

---

### 2: Minecraft-style mining task (24 trials)

Experiment 2 re-framed Study 1a as a Minecraft-style mining game.

Participants chose blocks to mine from a 6×6 grid rendered using stone textures. Some blocks yielded emeralds (wins), while most yielded nothing (losses). The underlying structure of the task was identical to previous experiments.

------------------------------------------------------------------------

## Repository structure {#repository-structure}

```
├── code/            # data processing, visualization, and analysis scripts
│   ├── R/
│   ├── python/
│   └── bash/
├── data/            # raw and processed behavioral data
├── experiments/     # jsPsych experiments and associated materials
│   ├── img/
│   └── jspsych/
├── figures/         # figures used in analyses and manuscripts
├── papers/          # related papers and drafts
├── presentation/    # slides and presentation materials
└── writeup/         # manuscript text and supplementary materials
```

All paths in code use relative references to ensure portability and reproducibility.

------------------------------------------------------------------------
## DE-ANONYMIZED FOR PEER REVIEW
## CRediT author statement {#credit-author-statement}

*What is a [CRediT author statement](https://www.elsevier.com/authors/policies-and-guidelines/credit-author-statement)?*

| Role | Contribution |
|----------------------|--------------------------------------------------|
| **Author A** | Conceptualization; Methodology; Software; Formal analysis; Investigation; Data curation; Writing – original draft; Visualization |
| **Author B** | Conceptualization; Methodology; Writing – review & editing; Supervision |
| **Author C** | Conceptualization; Writing – review & editing; Supervision; Funding acquisition |

------------------------------------------------------------------------

*Questions or issues?*  
Please open a GitHub issue for questions or suggestions.