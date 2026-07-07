---
name: card-summary
description: Create compact, readable card-style accordion summaries from long text, Markdown, pasted GPT outputs, ZIP/document contents, or structured notes. Use when the user asks for 「カードサマリ」, 「カード型アコーディオン」, 「アコーディオンサマリ」, 「React風カード」, 「HTMLで要約」, 「グラレコ風に読みやすく」, or wants long outputs reorganized into clickable title/summary/detail cards with optional filters, mini visual flows, and standalone HTML.
---

# Card Summary

## Output Goal

Turn dense source material into a standalone, browser-openable HTML file with card-style accordion summaries. Optimize for quick scanning first, then expandable detail.

Prefer a single self-contained `.html` file unless the user asks for React or integration into an existing app.

## Workflow

1. Read the source material directly.
   - For ZIPs, inspect the entry list first and select the requested file(s).
   - For Markdown, use headings as the first candidate card boundaries.
   - For GPT/chat text, infer cards from argument structure, not paragraph count.

2. Decide the card grain.
   - One major section per card for formal documents.
   - One advice/action item per card for session notes.
   - One test/question per card for test suites.
   - One document tab plus cards for multiple files.

3. Normalize each card to this shape:
   - `id`: stable number
   - `mark`: short visual label such as `01`, `Q1`, `CC1`
   - `tag`: category label
   - `group`: filter category
   - `tagColor`: distinct color
   - `title`: short title
   - `summary`: one-sentence gist
   - `points`: 3-5 concrete bullets
   - `tip`: one practical reading/use note

4. Add light visual structure.
   - Use tags, colors, numbered dots, short flow chips, and mini maps.
   - Use symbols only when they clarify the content; avoid decorative clutter.
   - For technical or philosophical documents, prefer abstract symbols and flow chips over cute emoji.

5. Generate a single HTML file.
   - Include all CSS and JS inline.
   - Use accessible buttons for cards and filters.
   - Escape dynamic text before inserting into HTML.
   - Keep mobile layout readable.

6. Verify before reporting done.
   - Extract embedded script and run `node --check` when Node is available.
   - Confirm the file exists and report its absolute path.
   - If visual browser verification is available, open the HTML and check card toggle/filter behavior.

## Layout Pattern

Use this hierarchy:

- Header: label, title, short lead
- Optional summary box: source position or reading axis
- Optional document tabs: when multiple source files are combined
- Filter chips: `すべて` plus 3-5 meaningful groups
- Card list: collapsed by default except the first or most central card
- Footer note: the core reading axis

Card body order:

1. summary sentence
2. optional mini visual flow
3. numbered point list
4. “扱い方” or “ワンポイント” box

## Summarization Rules

- Preserve the source's conceptual hierarchy and vocabulary.
- Do not flatten confirmed/uncertain distinctions.
- Do not turn dense source text into vague motivational copy.
- Prefer user-ready labels over internal filenames, but keep version names when useful.
- When the source is a正本,仕様,判例集,orプロンプト, distinguish source-of-truth, execution, test, and unresolved queues.
- If the source has multiple roles, make tabs or filters instead of mixing everything into one long card list.

## Visual Guidance

Good lightweight visual elements:

- flow chips: `体操 → スイッチ → シャーシ → ラグ減 → 伝導率`
- section marks: `01`, `Q1`, `CC3`
- short category tags: `正本`, `判例`, `会話`, `評価`
- restrained color accents per card
- simple symbols: `→`, `↓`, `◎`, `?`, `+`, `−`

Avoid:

- Large hero illustrations for document summaries.
- Full custom illustration sets unless explicitly requested.
- Overuse of emoji in formal material.
- Tiny low-contrast text inside decorative shapes.

## Reusable Asset

Use `assets/card-summary-template.html` as a reference template when creating a new standalone HTML. Copy the pattern and replace `docs` or `cardData` with task-specific content.
