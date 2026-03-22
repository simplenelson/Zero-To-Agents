# Zero To Agents — GitHub Copilot Enablement

> **Duration:** 1.5 – 2 hours | **Level:** Beginner → 200 | **Format:** Presentation + Live Demo

A hands-on enablement session that takes you from your first autocomplete suggestion to orchestrating autonomous AI agents — all with GitHub Copilot.

> **📽️ [View the Slide Deck →](https://simplenelson.github.io/Zero-To-Agents/)**
> The presentation is auto-built with [Marp](https://marp.app) and published to GitHub Pages on every push. You can also [view the source Markdown](presentation.md).

---

## Pre-requisites

- GitHub account with GitHub Copilot access
- Visual Studio Code (latest) with the **GitHub Copilot** and **GitHub Copilot Chat** extensions installed
- (Optional) Node.js or Python installed locally for demo follow-along

---

## Agenda

| # | Module | Format | Time |
|---|--------|--------|------|
| 1 | [Introduction to GitHub Copilot](#module-1-introduction-to-github-copilot) | Presentation | ~10 min |
| 2 | [GitHub Copilot on GitHub.com](#module-2-github-copilot-on-githubcom) | Presentation + Demo | ~15 min |
| 3 | [GitHub Copilot in VS Code — Foundations](#module-3-github-copilot-in-vs-code--foundations) | Presentation + Demo | ~20 min |
| 4 | [Modes of Interaction](#module-4-modes-of-interaction) | Presentation + Demo | ~15 min |
| 5 | [Instruction Files & Reusable Prompts](#module-5-instruction-files--reusable-prompts) | Presentation + Demo | ~15 min |
| 6 | [MCP — Model Context Protocol](#module-6-mcp--model-context-protocol) | Presentation + Demo | ~15 min |
| 7 | [Custom Agents](#module-7-custom-agents) | Presentation + Demo | ~15 min |
| 8 | [Putting It All Together — Zero to Agent](#module-8-putting-it-all-together--zero-to-agent) | Presentation | ~10 min |

---

## Module 1: Introduction to GitHub Copilot

**~10 min · Presentation**

- What is GitHub Copilot?
- How it works — LLM-powered, context-aware code assistant
- Supported platforms & IDEs overview
- Licensing & plans (Individual, Business, Enterprise)

---

## Module 2: GitHub Copilot on GitHub.com

**~15 min · Presentation + Demo**

- Copilot in pull requests — automated summaries & code review
- Copilot Chat on GitHub.com
- **GitHub Copilot Coding Agent**
  - What it is — autonomous agent that turns issues into pull requests
  - Assigning issues to Copilot
  - Reviewing and iterating on agent-generated PRs

### Demo

> Trigger the Coding Agent from an issue and walk through the generated PR.

---

## Module 3: GitHub Copilot in VS Code — Foundations

**~20 min · Presentation + Demo**

- **Autocomplete / Ghost Text**
  - Inline suggestions — accept, reject, partial accept
  - Next Edit Suggestions (NES)
- **Copilot Chat Panel**
  - Natural language Q&A
  - Context references — `#file`, `#selection`, `#codebase`, `#terminalLastCommand`, etc.
- **Slash Commands**
  - `/explain` · `/fix` · `/tests` · `/doc` · `/new` · `/clear` and more

### Demo

> Autocomplete a function, use Chat to iterate on it, apply slash commands to explain and test it.

---

## Module 4: Modes of Interaction

**~15 min · Presentation + Demo**

- **Ask Mode** — read-only Q&A; Copilot answers but doesn't modify files
- **Edit Mode** — targeted file edits with a preview diff
- **Agent Mode** — autonomous multi-step execution with tool use & terminal access
- When to use which mode

### Demo

> Tackle the same task using Ask → Edit → Agent mode to illustrate the progression.

---

## Module 5: Instruction Files & Reusable Prompts

**~15 min · Presentation + Demo**

- **Always-on Instruction Files**
  - `.github/copilot-instructions.md` — repo-level conventions, style, guardrails
- **File-based / Scoped Instructions**
  - `.instructions.md` with `applyTo` globs — per-folder or per-pattern guidance
- **Reusable Prompts**
  - `.prompt.md` files — shareable, parameterized prompt templates
  - Invoking prompts from Chat

### Demo

> Add an instruction file and a reusable prompt to the repo, then show how Copilot's output changes.

---

## Module 6: MCP — Model Context Protocol

**~15 min · Presentation + Demo**

- What is MCP and why it matters
- MCP servers as tool providers (databases, APIs, documentation, etc.)
- Configuring MCP servers in VS Code (`mcp.json`)
- Security considerations

### Demo

> Connect an MCP server and use its tools from Agent mode.

---

## Module 7: Custom Agents

**~15 min · Presentation + Demo**

- What are custom agents — chat participants via extensions or `agents.json`
- Configuring a custom agent — instructions, tools, model selection
- Use cases — domain-specific agents, workflow automation agents

### Demo

> Invoke a custom agent in Chat and walk through its configuration.

---

## Module 8: Putting It All Together — Zero to Agent

**~10 min · Presentation**

- Recap — the spectrum from autocomplete → chat → edits → full autonomous agent
- Best practices & prompting tips
- Responsible AI considerations & limitations
- Resources & next steps

---

## Resources

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [VS Code Copilot Documentation](https://code.visualstudio.com/docs/copilot/overview)
- [Model Context Protocol Specification](https://modelcontextprotocol.io)
- [GitHub Copilot Trust Center](https://resources.github.com/copilot-trust-center/)
