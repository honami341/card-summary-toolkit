# Card Summary / カードサマリ

長いGPT出力、Markdown、設計文書、PRFAQ、判例集などを、読みやすいカード型アコーディオンHTMLに整理するための再利用パッケージです。

このリポジトリには、以下を同梱しています。

- Codex skill: `skills/card-summary`
- Codex plugin: `plugins/card-summary`
- Claude Code slash command: `.claude/commands/card-summary.md`

## What It Creates

- 単体で開けるHTML
- タイトル、タグ、一文要約、要点、扱い方を持つカード
- カテゴリ絞り込み
- 必要に応じたタブ切り替え
- 軽いグラレコ風ミニフロー
- ポップ型、研究メモ型、ドキュメント型などのスタイル選択

## Codex Skill Install

Copy the skill folder into your Codex skills directory:

```powershell
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

## Claude Code Usage

Copy the command into a Claude Code project:

```powershell
# Run this from the Claude Code project where you want the command available.
New-Item -ItemType Directory -Force .\.claude\commands
Copy-Item -Force <path-to-this-repo>\.claude\commands\card-summary.md .\.claude\commands\card-summary.md
```

Then use:

```text
/card-summary
```

Paste or reference the source material, and ask for the preferred style:

```text
研究メモ風でカード型アコーディオンHTMLにして
```

## Recommended Styles

- ポップ型: セッションメモ、一般向けアドバイス
- 研究メモ型: PRFAQ、思想整理、仮説整理
- ドキュメント型: 正本、仕様書、判断OS、プロンプト
- ダッシュボード型: 複数ファイル横断
- グラレコ型: 概念関係や因果の説明

## License

MIT

