# Card Summary

Create a card-style accordion summary from the selected/pasted text, Markdown, or referenced file.

Default output: a standalone `.html` file.

Use the repository skill rules in `skills/card-summary/SKILL.md` as the source of truth when available.

## Quick Rules

- Preserve the source hierarchy and vocabulary.
- Use one card per section, action, question, decision, or concept depending on the source.
- Include title, tag, one-sentence summary, 3-5 points, and a practical note.
- Add filters and light visual flow chips when useful.
- Choose style by source type:
  - ポップ型: session notes and friendly advice.
  - 研究メモ型: PRFAQ, strategy notes, hypotheses, decisions.
  - ドキュメント型: specs, 正本, 判断OS, prompts.
- Do not make the whole card a button. Prefer `<details>/<summary>` or a header-only button.
- Escape generated text in HTML.
- If possible, run a syntax check on embedded JavaScript before finishing.
