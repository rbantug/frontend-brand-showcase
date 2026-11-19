# Pi Development Workflow

## Purpose

Use Pi with the local Gemma model to implement small, well-defined tasks from the implementation backlog.

The goal is controlled, incremental development. Pi must not independently reinterpret the project architecture, expand ticket scope, or proceed through multiple tickets.

## 1. Before Starting a Ticket

1. Choose one ticket from `docs/implementation-backlog.md`.
2. Prepare a focused implementation prompt using `docs/ticket-template.md`.
3. Include only the context relevant to that ticket.
4. Explicitly authorize Pi to implement that ticket.

Pi must:

- Read `/workspace/AGENTS.md` first.
- Read the specific ticket and any documents explicitly referenced in the prompt.
- Inspect relevant existing files before making changes.
- Check whether the ticket's requirements conflict with existing implementation or project decisions.
- Ask for clarification rather than guessing when requirements are ambiguous.

Do not ask Pi to review or implement the entire backlog in one session.

## 2. During Implementation

Pi must:

- Implement only the authorized ticket.
- Follow the established architecture and conventions.
- Make the smallest reasonable set of changes.
- Avoid unnecessary abstractions, dependencies, and refactoring.
- Avoid changing unrelated files.
- Never install, uninstall, or upgrade dependencies without explicit authorization.
- Never commit changes unless explicitly instructed.
- Stop and report if the task cannot be completed within its scope.

If Pi identifies a necessary change outside the ticket's scope, it must explain the issue and wait for approval.

## 3. Handling Unexpected Behavior

Stop Pi if it:

- Repeats the same tool calls without making progress.
- Gets stuck in a tool-use loop.
- Starts creating files outside the expected scope.
- Attempts unrelated refactoring or additional tickets.
- Makes assumptions that contradict the project specification.

Press `Ctrl+C` to interrupt a stuck session.

After interruption:

1. Run `git status --short`.
2. Inspect the affected files and changes.
3. Review the output before deciding what to keep or revert.
4. Do not use destructive cleanup commands such as `git reset --hard` or `git clean -fd` as a routine recovery method.

Never assume that an interrupted task left the workspace unchanged.

## 4. After Implementation

Pi must provide a completion report containing:

- **Implementation summary:** What was accomplished.
- **Files changed:** Every created, modified, or deleted file.
- **Dependencies:** Any additions or changes, or confirmation that none were made.
- **Commands executed:** Include build, test, and verification commands.
- **Test results:** Report actual results; do not claim tests passed without running them.
- **Outstanding issues:** Incomplete requirements, known limitations, or decisions requiring approval.

Pi must not automatically proceed to another ticket.

## 5. Review and Verification

After Pi finishes:

1. Inspect `git status --short`.
2. Review the changes using `git diff` and inspect new files separately.
3. Compare the implementation against the ticket's acceptance criteria.
4. Run the relevant tests and verification commands.
5. Review the completion report for unsupported claims or missing checks.

Use ChatGPT for architecture, code review, debugging, and deciding whether the ticket is genuinely complete.

If changes are needed, prepare a focused follow-up prompt. Do not ask Pi to redo the entire project or broadly "fix everything."

## 6. Completing a Ticket

A ticket is complete only when:

- Its acceptance criteria are satisfied.
- The implementation follows `AGENTS.md` and the project specification.
- Relevant verification has passed.
- Changes have been reviewed.
- Outstanding issues have been resolved or explicitly accepted.

Only then should the ticket be marked complete in the backlog.

Commit the changes only after review and with explicit authorization.

## 7. Working with the Local Model

The local Gemma model is used primarily for focused implementation tasks.

Prefer:

- One ticket per session.
- Clear, concrete requirements.
- Small changes with observable outcomes.
- Explicit file and scope constraints.
- Short feedback loops.

Avoid:

- Broad architectural reviews.
- Large multi-ticket implementation requests.
- Unbounded autonomous tasks.
- Repeatedly asking the model to summarize every project document.
- Assuming that a plausible explanation or completion report proves the implementation is correct.

When a task requires broader reasoning, use ChatGPT to prepare the implementation plan and review the result.

## Guiding Principle

**Pi implements. ChatGPT helps plan and review. The user approves decisions and controls the workflow.**

No ticket is considered complete merely because Pi says it is complete.