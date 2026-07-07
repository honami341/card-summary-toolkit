---
name: card-summary
description: >
  Create compact, readable card-style accordion summaries from long text,
  Markdown, pasted GPT outputs, ZIP/document contents, or structured notes.
  Use when the user asks for 「カードサマリ」, 「カード型アコーディオン」,
  「アコーディオンサマリ」, 「React風カード」, 「HTMLで要約」,
  「グラレコ風に読みやすく」, or wants long outputs reorganized
  into clickable title/summary/detail cards with optional filters,
  mini visual flows, and standalone HTML.
---

# Card Summary

## Output Goal

Turn dense source material into a standalone, browser-openable HTML file with card-style accordion summaries. Optimize for quick scanning first, then expandable detail.

Prefer a single self-contained `.html` file unless the user asks for React, TSX, or integration into an existing app.

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
   - `id`: stable number.
   - `mark`: short visual label such as `01`, `Q1`, `CC1`.
   - `tag`: category label.
   - `group`: filter category.
   - `tagColor`: 6-digit hex color such as `#4f46e5`. Do not use named colors like `red` or short hex like `#f66`.
   - `title`: short title.
   - `summary`: one-sentence gist.
   - `visual`: optional `{ symbol, flow, caption }` object.
   - `points`: 3-5 concrete bullets.
   - `tip`: one practical reading/use note.

4. Add light visual structure.
   - Use tags, colors, numbered dots, short flow chips, and mini maps.
   - Use symbols only when they clarify the content; avoid decorative clutter.
   - For technical or philosophical documents, prefer abstract symbols and flow chips over cute emoji.

5. Generate a single HTML file.
   - Include all CSS and JS inline.
   - Use `<details>/<summary>` or a header-only button. Do not make the whole card a button.
   - Escape dynamic text before inserting into HTML.
   - Keep mobile layout readable.
   - Keep body text selectable.
   - Avoid re-rendering all cards on accordion toggle. Render once, then use native `<details>` or DOM visibility toggles.

6. Verify before reporting done.
   - Extract embedded script and run `node --check` when Node is available.
   - Confirm the file exists and report its absolute path.
   - If visual browser verification is available, open the HTML and check card toggle/filter behavior.

## React Wording

- 「React風」 means the visual and structural feel of a React UI. Output should still default to standalone HTML.
- 「React形式」, 「Reactコンポーネント」, 「JSX」, or 「TSX」 means actual React/JSX/TSX output.

## Layout Pattern

Use this hierarchy:

- Header: label, title, short lead.
- Optional summary box: source position or reading axis.
- Optional document tabs: when multiple files are combined.
- Filter chips: `すべて` plus 3-6 meaningful groups.
- Card list: collapsed by default except the first or most central card.
- Footer note: the core reading axis.

Card body order:

1. summary sentence
2. optional mini visual flow
3. numbered point list
4. “扱い方”, “研究メモ”, or “ワンポイント” box

## Recommended Styles

### ポップ型

Use for: セッションメモ、一般向けアドバイス、軽く読ませたいGPT出力.

Card grain: 1アクション / 1感覚 / 1注意点.

Avoid: 専門語だけの見出し、抽象概念の羅列、暗すぎる配色.

### 研究メモ型

Use for: PRFAQ、思想整理、仮説、判断ログ、裁定記録.

Card grain: 1論点 / 1仮説 / 1裁定.

Avoid: かわいい絵文字、過度な励まし文、装飾過多.

### ドキュメント型

Use for: 正本、仕様書、判断OS、プロンプト.

Card grain: 1章 / 1役割 / 1決定事項.

Avoid: source-of-truthと実行手順の混在、確定/未確定の混同.

### ダッシュボード型

Use for: 複数ファイル横断、知識ベース、比較ビュー.

Card grain: 1文書 / 1カテゴリ / 1ワークフロー.

Avoid: スマホで読めない多カラム固定レイアウト.

### グラレコ型

Use for: 概念関係、因果の背骨、初見説明.

Card grain: 1概念 / 1関係 / 1因果ステップ.

Avoid: 本格イラスト前提、意味のない絵文字、文字入り画像.

## Preset: advice-summary

Use when the source is a bodywork session recap, exercise explanation, or client-facing advice.

Rules:

- 体感語を消さない。
- 動作手順、狙い、注意点、日常での使い方を分ける。
- 医療断定に寄せない。
- 「できていない」ではなく「試す入口」として書く。
- クライアントがそのまま読める文体にする。
- 1カード1動作または1感覚を基本粒度にする。

## Summarization Rules

- Preserve the source's conceptual hierarchy and vocabulary.
- Do not flatten confirmed/uncertain distinctions.
- Do not turn dense source text into vague motivational copy.
- Prefer user-ready labels over internal filenames, but keep version names when useful.
- When the source is a 正本, 仕様, 判例集, or プロンプト, distinguish source-of-truth, execution, test, and unresolved queues.
- If the source has multiple roles, make tabs or filters instead of mixing everything into one long card list.

## Reusable Asset

Use `assets/card-summary-template.html` as a reference template when creating a new standalone HTML. Copy the pattern and replace `pageMeta` and `cardData` with task-specific content.
