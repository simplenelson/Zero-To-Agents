---
marp: true
theme: default
paginate: true
backgroundColor: #0d1117
color: #e6edf3
style: |
  section {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
    font-size: 28px;
  }
  h1 {
    color: #58a6ff;
  }
  h2 {
    color: #58a6ff;
  }
  h3 {
    color: #3fb950;
  }
  blockquote {
    border-left: 4px solid #3fb950;
    padding: 0.5em 1em;
    background: #161b22;
    color: #e6edf3;
  }
  code {
    background: #161b22;
    color: #79c0ff;
    padding: 2px 6px;
    border-radius: 4px;
  }
  pre {
    background: #161b22 !important;
  }
  table {
    font-size: 0.85em;
  }
  table th {
    background: #161b22;
    color: #58a6ff;
  }
  table td {
    background: #0d1117;
  }
  a {
    color: #58a6ff;
  }
  strong {
    color: #e6edf3;
  }
  footer {
    color: #484f58;
  }
---

<!-- _paginate: false -->
<!-- _backgroundColor: #161b22 -->
<!-- _color: #e6edf3 -->

# Zero To Agents

## GitHub Copilot Enablement

**Beginner → 200 Level** · 1.5 – 2 Hours · Presentation + Live Demo

---

## Agenda

| # | Module | Time |
|---|--------|------|
| 1 | Introduction to GitHub Copilot | ~10 min |
| 2 | GitHub Copilot on GitHub.com | ~15 min |
| 3 | GitHub Copilot in VS Code — Foundations | ~20 min |
| 4 | Modes of Interaction | ~15 min |
| 5 | Instruction Files & Reusable Prompts | ~15 min |
| 6 | MCP — Model Context Protocol | ~15 min |
| 7 | Custom Agents | ~15 min |
| 8 | Putting It All Together | ~10 min |

---

<!-- _backgroundColor: #161b22 -->
<!-- _color: #e6edf3 -->

# Module 1
## Introduction to GitHub Copilot
**~10 min · Presentation**

---

## What Is GitHub Copilot?

- An **AI-powered coding assistant** built into your development workflow
- Powered by large language models (LLMs) trained on public code
- **Context-aware** — understands your codebase, open files, and conversation history
- More than autocomplete — it's a platform of AI capabilities

---

## How It Works

```
Your Code & Context  ──►  GitHub Copilot  ──►  Suggestions, Answers, Actions
     (editor, files,          (LLM +              (completions, chat,
      terminal, chat)         tools)                edits, agent tasks)
```

- Sends relevant context (not your entire codebase) to the model
- Returns suggestions grounded in your project
- Runs locally in your IDE + cloud-powered models

---

## Where Does It Run?

- **IDEs** — VS Code, Visual Studio, JetBrains, Xcode, Eclipse
- **GitHub.com** — Chat, PRs, Coding Agent
- **Terminal** — `gh copilot` in any terminal
- **Mobile** — GitHub Mobile app

---

## Plans & Pricing

| | **Business** | **Enterprise** |
|---|---|---|
| **Price** | $19 / user / month | $39 / user / month |
| **Premium Requests** | 300 PRU / user / month | 1,000 PRU / user / month |

> **PRU** = Premium Request Unit — consumed by premium models, Agent mode, and Coding Agent

---

<!-- _backgroundColor: #161b22 -->
<!-- _color: #e6edf3 -->

# Module 2
## GitHub Copilot on GitHub.com
**~15 min · Presentation + Demo**

---

## Copilot on GitHub.com — Overview

GitHub Copilot is embedded directly into **github.com**:

- 💬 **Copilot Chat** — ask questions about repos, code, and docs right from the browser
- 📝 **PR Summaries** — auto-generated pull request descriptions
- 🔍 **Code Review** — AI-assisted review comments on diffs
- 🤖 **Coding Agent** — autonomous issue-to-PR workflow

---

## Copilot Chat on GitHub.com

- Available on any repository page — click the Copilot icon
- Ask questions about the codebase:
  - *"How does authentication work in this repo?"*
  - *"What does this function do?"*
- Understands the repo context without cloning locally

---

## Pull Request Summaries & Review

**Summaries**
- Auto-generate a PR description from your diff
- Click **"Copilot"** when creating a PR → instant summary

**Code Review**
- Request Copilot as a reviewer on your PR
- Receives review comments with suggestions and explanations
- Great for a first pass before human reviewers

---

## GitHub Copilot Coding Agent

The **Coding Agent** turns issues into pull requests — autonomously.

### How it works:
1. **Assign an issue to Copilot** (or `@github-copilot` in a comment)
2. Copilot spins up a **cloud dev environment**
3. It plans, writes code, runs tests, and iterates
4. Opens a **draft PR** for your review
5. You review, request changes, or merge

---

## Coding Agent — Key Details

- Runs in a **sandboxed environment** (Codespace)
- Can install dependencies, run tests, lint code
- Respects your repo's `copilot-instructions.md`
- Iterates based on PR review feedback
- Best for: well-scoped issues with clear acceptance criteria

---

### 🧪 Demo: Coding Agent

> 1. Open a GitHub repository
> 2. Create or find an issue with clear requirements
> 3. Assign the issue to **Copilot**
> 4. Watch the agent plan and open a PR
> 5. Walk through the generated code and review comments

---

<!-- _backgroundColor: #161b22 -->
<!-- _color: #e6edf3 -->

# Module 3
## GitHub Copilot in VS Code — Foundations
**~20 min · Presentation + Demo**

---

## Autocomplete / Ghost Text

The original Copilot experience — **inline suggestions as you type**.

- **Ghost text** appears in gray as you code
- `Tab` to accept, `Esc` to dismiss
- `Ctrl+→` for **partial accept** (word by word)
- Suggests single lines, multi-line blocks, or entire functions
- Context-aware: uses open files, imports, and comments as signals

---

## Next Edit Suggestions (NES)

Copilot **predicts your next edit location** — not just the current line.

- After accepting a suggestion, Copilot may highlight the **next place** you should edit
- Press `Tab` to jump to the suggested edit and accept it
- Enables a **flow state** — Tab, Tab, Tab through a series of related changes
- Great for repetitive patterns, refactors, and boilerplate

---

## Copilot Chat Panel

A **conversational AI assistant** embedded in VS Code.

- Open with `Ctrl+Shift+I` or click the Chat icon
- Ask anything: *"How do I connect to a database in this project?"*
- Copilot has access to your workspace context

---

## Chat — Context References

Give Copilot the right context with **`#` references**:

| Reference | What it provides |
|-----------|------------------|
| `#file` | Contents of a specific file |
| `#selection` | Currently selected code |
| `#codebase` | Workspace-wide semantic search |
| `#terminalLastCommand` | Output of the last terminal command |

Combine them: *"Using `#file:schema.prisma`, generate types for `#selection`"*

---

## Slash Commands

**Shortcuts** for common tasks — type `/` in Chat:

| Command | What it does |
|---------|-------------|
| `/explain` | Explain the selected code |
| `/fix` | Suggest a fix for errors or issues |
| `/tests` | Generate unit tests |
| `/doc` | Add documentation / comments |
| `/new` | Scaffold a new project or file |
| `/clear` | Clear the chat history |

Slash commands provide **structured intent** so Copilot knows exactly what you need.

---

### 🧪 Demo: VS Code Foundations

> 1. Start typing a function — see **autocomplete** in action
> 2. Use `Tab` and **NES** to flow through edits
> 3. Open Chat — ask Copilot to extend the function
> 4. Use `#file` and `#selection` to provide context
> 5. Apply `/explain`, `/tests`, and `/doc` slash commands

---

<!-- _backgroundColor: #161b22 -->
<!-- _color: #e6edf3 -->

# Module 4
## Modes of Interaction
**~15 min · Presentation + Demo**

---

## Three Modes

GitHub Copilot Chat in VS Code operates in **three distinct modes**:

| Mode | What it does | Modifies files? |
|------|-------------|----------------|
| **Ask** | Read-only Q&A | ❌ No |
| **Plan** | Generates a step-by-step plan | ❌ No (plan only) |
| **Agent** | Autonomous multi-step execution | ✅ Yes (+ terminal, tools) |

Switch modes using the **dropdown** at the top of the Chat panel.

---

## Ask Mode

**Read-only Q&A** — Copilot answers but never touches your files.

- Best for: understanding code, exploring approaches, learning
- *"What does this regex do?"*
- *"What's the best way to handle auth in Express?"*
- *"Explain the architecture of this project"*

Safe to use anytime — nothing changes.

---

## Plan Mode

**Step-by-step planning** — Copilot outlines an approach without modifying files.

- Best for: breaking down complex tasks, thinking through architecture
- Generates a structured plan you can review before executing
- Hand off the plan to Agent mode to implement it
- *"Plan how to add authentication to this Express app"*
- *"Plan a refactor of the data layer to use the repository pattern"*

Think first, act later — plan before you build.

---

## Agent Mode

**Autonomous execution** — Copilot plans, acts, and iterates.

- Best for: multi-step tasks, scaffolding, complex changes across files
- Can **read & write files**, **run terminal commands**, **use tools**
- Iterates: runs code → sees errors → fixes them
- *"Create a REST API with Express, add tests, and make sure they pass"*
- *"Find and fix all accessibility issues in the components folder"*

Maximum productivity — Copilot drives, you supervise.

---

### The Progression

```
  Ask Mode          Plan Mode          Agent Mode
  ─────────────────────────────────────────────────►
  
  "Explain this"    "Plan this"        "Build this feature"
  Read-only         Structured plan    Multi-step autonomy
  Safe exploration  Think before act   Full AI agency
```

**Start with Ask → Plan your approach → Unleash Agent** as your confidence grows.

---

### 🧪 Demo: Modes in Action

> **The same task, three ways:**
>
> 1. **Ask Mode** — *"How would I add error handling to this API endpoint?"*
> 2. **Plan Mode** — *"Plan how to add error handling across all API endpoints"*
> 3. **Agent Mode** — *"Add error handling to all API endpoints, create an error middleware, and add tests"**

---

<!-- _backgroundColor: #161b22 -->
<!-- _color: #e6edf3 -->

# Module 5
## Instruction Files & Reusable Prompts
**~15 min · Presentation + Demo**

---

## Why Instructions Matter

Without guidance, Copilot uses **generic best practices**.

With instruction files, you teach Copilot **your team's conventions**:

- Coding style and patterns
- Preferred libraries and frameworks
- Architecture decisions
- Testing standards
- What to avoid

Instructions make Copilot a **team-aware** assistant.

---

## Always-On Instructions

### `.github/copilot-instructions.md`

A single file at the repo root that **always** feeds into Copilot's context.

```markdown
<!-- .github/copilot-instructions.md -->

## Code Style
- Use TypeScript strict mode
- Prefer functional components with hooks
- Use Zod for runtime validation

## Testing
- Use Vitest for unit tests
- Minimum 80% coverage on new code
- Use `describe`/`it` blocks, not `test`

## Architecture
- Follow the repository pattern for data access
- All API routes go in `src/routes/`
```

---

## File-Based / Scoped Instructions

### `.instructions.md` with `applyTo` globs

Target instructions to **specific files or folders**:

```markdown
---
applyTo: "src/components/**"
---

- Use React functional components only
- Every component must have a corresponding `.test.tsx` file
- Use CSS Modules for styling (not inline styles)
- Export components as named exports
```

You can have **multiple** `.instructions.md` files scoped to different parts of your codebase.

---

## Reusable Prompts

### `.prompt.md` files — shareable, version-controlled prompt templates

```markdown
<!-- .github/prompts/new-api-endpoint.prompt.md -->

Create a new REST API endpoint with the following:
- Route handler in `src/routes/`
- Input validation with Zod
- Unit tests with Vitest
- Error handling following our middleware pattern
```

- Invoke from Chat — type `/` and select the prompt
- Standardizes how the team interacts with Copilot
- Great for onboarding and repeatable workflows

---

### 🧪 Demo: Instructions & Prompts

> 1. Add `.github/copilot-instructions.md` with team conventions
> 2. Add a scoped `.instructions.md` for a specific folder
> 3. Create a `.prompt.md` reusable prompt
> 4. Show Copilot's output **before** and **after** — see the difference

---

<!-- _backgroundColor: #161b22 -->
<!-- _color: #e6edf3 -->

# Module 6
## MCP — Model Context Protocol
**~15 min · Presentation + Demo**

---

## What Is MCP?

**Model Context Protocol** — an open standard for connecting AI models to external tools and data.

```
  Copilot (Agent Mode)  ──►  MCP Client  ──►  MCP Servers
                                               ├── Database
                                               ├── REST API
                                               └── Docs / Search
```

- **MCP Servers** expose tools, resources, and prompts
- **Copilot** is an MCP client — discovers and calls these tools
- Think of it as **USB-C for AI** — a universal connector

---

## Why MCP Matters

Without MCP, Copilot only knows what's in your editor.

With MCP, Copilot can:

- 🗄️ **Query databases** — read schemas, run queries
- 📡 **Call APIs** — interact with external services
- 📚 **Search documentation** — pull in relevant docs at runtime
- 🔧 **Run specialized tools** — linters, analyzers, deployment scripts
- 🌐 **Browse the web** — fetch pages and extract content

MCP turns Copilot from a **code assistant** into a **workflow assistant**.

---

## Configuring MCP in VS Code

Add a `.vscode/mcp.json` to your project:

```json
{
  "servers": {
    "fetch": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-fetch"]
    }
  }
}
```

Copilot auto-discovers the tools and makes them available in **Agent mode**.

---

## Security Considerations

- MCP servers run **locally** or connect to **remote services**
- Review server code / packages before trusting them
- Scope credentials narrowly — use read-only access where possible
- Copilot asks for **user confirmation** before executing tool calls
- Keep `mcp.json` in version control so the team can review it

---

### 🧪 Demo: MCP in Action

> 1. Add an MCP server config to `.vscode/mcp.json`
> 2. Open Agent mode — see the tools become available
> 3. Ask Copilot a question that requires the MCP tool
> 4. Watch Copilot call the tool and use the results
> 5. Discuss the confirmation prompt and security model

---

<!-- _backgroundColor: #161b22 -->
<!-- _color: #e6edf3 -->

# Module 7
## Custom Agents
**~15 min · Presentation + Demo**

---

## What Are Custom Agents?

Custom agents are **specialized AI participants** you can invoke in Copilot Chat.

- Defined as **Markdown files** in `.github/agents/`
- Each agent has its own **instructions, tools, and model configuration**
- Invoked via the **mode dropdown** at the top of Chat
- Think of them as **expert coworkers** — each focused on a specific domain

---

## Anatomy of a Custom Agent

### `.github/agents/api-expert.md`

```markdown
---
description: Expert on our REST API conventions
tools:
  - mcp: fetch
---

You are an API expert for our Node.js backend.
- Follow RESTful conventions
- Use Zod for input validation
- Always include error handling middleware
```

- **Filename** → agent name shown in dropdown: `api-expert`
- **YAML front matter** → description & tools
- **Markdown body** → system prompt (personality & expertise)

---

## Use Cases for Custom Agents

| Agent | What it does |
|-------|-------------|
| `api-expert` | Helps design & implement API endpoints following team patterns |
| `db-admin` | Writes migrations, optimizes queries, explains schemas |
| `reviewer` | Reviews code against team standards, suggests improvements |
| `onboarding` | Helps new team members understand the codebase |
| `deployer` | Guides through deployment steps, checks environment configs |

Custom agents let you **encode team knowledge** into reusable AI personas.

---

### 🧪 Demo: Custom Agents

> 1. Create a `.github/agents/api-expert.md` file
> 2. Select **api-expert** from the Chat mode dropdown
> 3. Show how the agent uses its specialized instructions
> 4. Demonstrate tool access scoped to the agent
> 5. Compare output to unscoped Copilot Chat

---

<!-- _backgroundColor: #161b22 -->
<!-- _color: #e6edf3 -->

# Module 8
## Putting It All Together — Zero to Agent
**~10 min · Presentation**

---

## The Journey

```
Autocomplete ► Chat ► Slash Cmds ► Modes ► Instructions ► MCP ► Agents
```

| Stage | What you unlock |
|-------|----------------|
| **Autocomplete** | Ghost text — Tab to accept |
| **Chat** | Q&A in your IDE |
| **Slash Commands** | `/fix`, `/tests`, `/doc` |
| **Modes** | Ask → Edit → Agent |
| **Instructions & Prompts** | Team conventions & reusable workflows |
| **MCP** | External tools & data |
| **Custom & Coding Agents** | Specialized AI personas, issue → PR |

From **zero** (your first Tab-complete) to **agents** (autonomous coding).

---

## Best Practices

- **Start small** — use autocomplete and Chat before jumping to Agent mode
- **Be specific** — clear prompts get better results
- **Provide context** — use `#file`, `#selection`, `#codebase` references
- **Use instruction files** — teach Copilot your team's way
- **Review everything** — AI is a copilot, not an autopilot
- **Iterate** — Copilot gets better with feedback and refinement

---

## Responsible AI

- **Always review** generated code before committing
- **Understand** what the code does — don't ship code you can't explain
- **Test** AI-generated code like any other code
- **Sensitive data** — don't paste secrets or PII into prompts
- **License awareness** — enable Copilot's public code filter if needed
- **Human accountability** — you own the code, not the AI

---

## Resources

| Resource | Link |
|----------|------|
| GitHub Copilot Docs | [docs.github.com/en/copilot](https://docs.github.com/en/copilot) |
| VS Code Copilot Docs | [code.visualstudio.com/docs/copilot](https://code.visualstudio.com/docs/copilot/overview) |
| MCP Specification | [modelcontextprotocol.io](https://modelcontextprotocol.io) |
| Copilot Trust Center | [resources.github.com/copilot-trust-center](https://resources.github.com/copilot-trust-center/) |

---

<!-- _backgroundColor: #161b22 -->
<!-- _color: #e6edf3 -->

# Thank You!

## Questions?

**Zero To Agents** — GitHub Copilot Enablement

---

<!-- _paginate: false -->
<!-- _backgroundColor: #0d1117 -->

## Appendix: Quick Reference

| Feature | Where | How |
|---------|-------|-----|
| Autocomplete | VS Code | Just type — `Tab` to accept |
| Chat | VS Code / GitHub.com | `Ctrl+Shift+I` |
| Slash Commands | VS Code Chat | `/explain`, `/fix`, `/tests`, `/doc` |
| Ask Mode | VS Code Chat | Dropdown → Ask |
| Plan Mode | VS Code Chat | Dropdown → Plan |
| Agent Mode | VS Code Chat | Dropdown → Agent |
| Instructions | Repo | `.github/copilot-instructions.md` |
| Scoped Instructions | Repo | `.instructions.md` + `applyTo` |
| Reusable Prompts | Repo | `.prompt.md` files |
| MCP | VS Code | `.vscode/mcp.json` |
| Custom Agents | Repo | `.github/agents/*.md` — select from Chat dropdown |
| Coding Agent | GitHub.com | Assign issue to Copilot |
