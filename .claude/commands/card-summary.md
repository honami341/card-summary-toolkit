# Card Summary

Turn the selected text, pasted content, Markdown file, or document notes into a standalone card-style accordion HTML summary.

## Instructions

Use this command when the user asks for:

- カードサマリ
- カード型アコーディオン
- アコーディオンサマリ
- HTMLで要約
- グラレコ風に読みやすく
- long GPT output reorganized into clickable cards

## Output

Create a single `.html` file unless the user asks for another format.

Use this structure:

1. Header with label, title, and short lead.
2. Optional note box explaining the source position or reading axis.
3. Optional tabs when multiple files are summarized.
4. Filter chips for 3-6 meaningful categories.
5. Cards with:
   - short mark such as `01`, `Q1`, `CC1`
   - category tag
   - title
   - one-sentence summary
   - optional mini flow chips
   - 3-5 numbered points
   - one practical note named `扱い方`, `研究メモ`, or `ワンポイント`

## Style Guidance

Choose style by source type:

- General advice or session notes: pop, colorful, friendly.
- 正本, 仕様書, 判断OS, PRFAQ: restrained research-note style.
- Cross-file knowledge base: dashboard or tabbed style.
- Concept explanation: add light graph-recording elements such as flow chips and simple symbols.

Avoid overusing emoji for formal material. Prefer restrained colors, line accents, section marks, and short visual flows.

## Summary Rules

- Preserve the source hierarchy and vocabulary.
- Do not flatten confirmed, inferred, and unresolved items.
- Do not turn dense source text into vague motivational copy.
- Preserve role distinctions such as source-of-truth, execution prompt, test, decision log, and unresolved queue.
- Prefer readable cards over exhaustive transcription.

## Verification

If tools are available, check the embedded JavaScript with `node --check` before reporting completion.
