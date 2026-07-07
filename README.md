# Card Summary / カードサマリ

長いGPT出力、Markdown、設計文書、PRFAQ、判例集などを、
読みやすいカード型アコーディオンHTMLに整理するための再利用パッケージです。

![Card Summary screenshot](docs/screenshot-card-summary.png)

## What It Creates

- 単体で開けるHTML
- タイトル、タグ、一文要約、要点、扱い方を持つカード
- カテゴリ絞り込み
- 必要に応じたタブ切り替え
- 軽いグラレコ風ミニフロー
- ポップ型、研究メモ型、ドキュメント型などのスタイル選択

## Demos

- [Session note demo](docs/demo-session-note.html)
- [Research note demo](docs/demo-research-note.html)
- [Example sources and outputs](examples/README.md)

If GitHub Pages is enabled for `docs/`, these demo HTML files can be opened directly from the published site.

## Repository Layout

```text
.
├── .claude/commands/card-summary.md          # Claude Code slash command
├── docs/                                     # screenshot and demo HTML for GitHub Pages
├── examples/                                 # sample inputs and outputs
├── plugins/card-summary/                     # Codex plugin package
├── scripts/check-template.mjs                # template/example validation
├── scripts/sync-plugin-skill.mjs             # sync standalone skill into plugin copy
├── skills/card-summary/                      # source-of-truth Codex/Claude skill
├── package.json
└── README.md
```

## Source of Truth

`skills/card-summary/` is the source of truth.

`plugins/card-summary/skills/card-summary/` is a synced copy used for Codex Plugin packaging.

After editing the skill, run:

```bash
node scripts/sync-plugin-skill.mjs
```

or:

```bash
npm run sync
```

## Codex Skill Install

### macOS / Linux

Run from this repository root:

```bash
mkdir -p ~/.codex/skills
cp -R ./skills/card-summary ~/.codex/skills/card-summary
```

### Windows PowerShell

Run from this repository root:

```powershell
New-Item -ItemType Directory -Force $env:USERPROFILE\.codex\skills
Copy-Item -Recurse -Force .\skills\card-summary $env:USERPROFILE\.codex\skills\card-summary
```

Then start a new Codex thread and ask:

```text
カードサマリで、この資料をカード型アコーディオンHTMLにして
```

## Codex Plugin Install

The plugin package is in:

```text
plugins/card-summary
```

Install or import it through your Codex plugin workflow. The plugin exposes the same `card-summary` skill.

## Claude Code Install

Claude Code can use either the slash command or the skill folder.

### Route A: Slash command

macOS / Linux:

```bash
mkdir -p .claude/commands
cp <path-to-this-repo>/.claude/commands/card-summary.md .claude/commands/card-summary.md
```

Windows PowerShell:

```powershell
New-Item -ItemType Directory -Force .\.claude\commands
Copy-Item -Force <path-to-this-repo>\.claude\commands\card-summary.md .\.claude\commands\card-summary.md
```

Then use:

```text
/card-summary
```

### Route B: Skill install

macOS / Linux:

```bash
mkdir -p ~/.claude/skills
cp -R <path-to-this-repo>/skills/card-summary ~/.claude/skills/card-summary
```

Windows PowerShell:

```powershell
New-Item -ItemType Directory -Force $env:USERPROFILE\.claude\skills
Copy-Item -Recurse -Force <path-to-this-repo>\skills\card-summary $env:USERPROFILE\.claude\skills\card-summary
```

## Usage Examples

```text
カードサマリで、この資料をポップなカード型アコーディオンHTMLにして
```

```text
このPRFAQを研究メモ風のカードサマリにして
```

```text
この判断OSをドキュメント型カードにして。確定/未確定を混ぜないで
```

```text
このセッションメモを advice-summary プリセットでクライアント向けにして
```

## Recommended Styles

### ポップ型

Use for: セッションメモ、一般向けアドバイス、軽く読ませたいGPT出力。

Card grain: 1アクション / 1感覚 / 1注意点。

Avoid: 専門語だけの見出し、抽象概念の羅列、暗すぎる配色。

### 研究メモ型

Use for: PRFAQ、思想整理、仮説、判断ログ、裁定記録。

Card grain: 1論点 / 1仮説 / 1裁定。

Avoid: かわいい絵文字、過度な励まし文、装飾過多。

### ドキュメント型

Use for: 正本、仕様書、判断OS、プロンプト。

Card grain: 1章 / 1役割 / 1決定事項。

Avoid: source-of-truthと実行手順の混在、確定/未確定の混同。

### ダッシュボード型

Use for: 複数ファイル横断、知識ベース、比較ビュー。

Card grain: 1文書 / 1カテゴリ / 1ワークフロー。

Avoid: スマホで読めない多カラム固定レイアウト。

### グラレコ型

Use for: 概念関係、因果の背骨、初見説明。

Card grain: 1概念 / 1関係 / 1因果ステップ。

Avoid: 本格イラスト前提、意味のない絵文字、文字入り画像。

## Preset: advice-summary

Use when the source is a bodywork session recap, exercise explanation, or client-facing advice.

Rules:

- 体感語を消さない
- 動作手順、狙い、注意点、日常での使い方を分ける
- 医療断定に寄せない
- 「できていない」ではなく「試す入口」として書く
- クライアントがそのまま読める文体にする
- 1カード1動作または1感覚を基本粒度にする

## Template Notes

`skills/card-summary/assets/card-summary-template.html` is a standalone HTML template.

It uses:

- `<details>/<summary>` for accordion cards
- DOM visibility toggles for filters
- `esc()` for generated text escaping
- 6-digit hex `tagColor` values such as `#4f46e5`
- mobile-first CSS

Do not use named colors like `red` or short hex like `#f66` for `tagColor`.

## Verification

Run:

```bash
npm run sync
npm run check
```

The check script verifies that templates and demos:

- contain a complete HTML document
- expose a data replacement surface such as `cardData`
- include an escape function
- pass `node --check` for embedded JavaScript

## Manual Verification Checklist

- Open the generated HTML in a browser
- Confirm the first card is open
- Confirm accordion toggle works
- Confirm filter chips work
- Confirm body text can be selected
- Confirm keyboard focus is visible
- Confirm mobile width remains readable

## GitHub Repo Settings Suggestions

Description:

```text
Reusable Codex/Claude skill for turning long notes and GPT outputs into card-style accordion HTML summaries.
```

Topics:

```text
codex
claude-code
llm-tools
summarization
html
accordion
markdown
knowledge-management
```

Website:

Use the GitHub Pages URL for `docs/` after Pages is enabled.

## License

MIT
