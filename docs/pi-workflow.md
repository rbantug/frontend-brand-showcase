# Pi Development Workflow

## Purpose

Use Pi with local language models for focused implementation and verification tasks.

The goal is controlled, incremental development. Pi must not independently reinterpret the project architecture, expand task scope, or proceed beyond the instructions provided.

The user supplies the specific ticket and task instructions directly in each prompt. Pi must work from those instructions rather than retrieving tickets from the implementation backlog.

## 1. Before Starting a Task

The user will provide:

- The original ticket, including its objective, scope, acceptance criteria, and dependencies.
- Specific task instructions and implementation boundaries.
- Any additional context or documents required.

The user decides whether a ticket should be divided into smaller tasks. Pi must not independently split tickets or create additional tasks unless explicitly instructed.

Pi must:

1. Read `/workspace/AGENTS.md` first.
2. Read `docs/pi-workflow.md`.
3. Read `docs/project-context.md` when relevant or requested.
4. Read only the additional documents explicitly referenced in the prompt.
5. Treat the ticket supplied in the prompt as the authoritative task definition.
6. Inspect relevant existing files before making changes.
7. Check whether requirements conflict with existing implementation or project decisions.
8. Ask for clarification rather than guessing when requirements are ambiguous.

**Do not read `docs/implementation-backlog.md`.**

Do not ask Pi to retrieve, interpret, or implement tickets directly from the backlog.

## 2. Choosing the Task Approach

Pi can perform two types of work.

### A. Implementation Tasks

Use Pi for small, straightforward, well-defined coding tasks.

Pi must:

- Implement only the explicitly authorized task.
- Follow the established architecture and conventions.
- Make the smallest reasonable set of changes.
- Avoid unnecessary abstractions, dependencies, and refactoring.
- Avoid changing unrelated files.
- Never install, uninstall, or upgrade dependencies without explicit authorization.
- Never commit changes unless explicitly instructed.
- Stop and report if the task cannot be completed within its scope.

For complex implementation work, the user may choose to implement the changes with guidance from ChatGPT instead.

### B. Acceptance Verification Tasks

For complex tickets or tasks implemented by the user, Pi may be assigned to verify the acceptance criteria.

The prompt must include the original ticket and its acceptance criteria.

Pi must:

1. Inspect the relevant implementation.
2. Identify appropriate verification methods.
3. Run relevant build, test, and verification commands.
4. Evaluate each acceptance criterion individually.
5. Report PASS, FAIL, or BLOCKED with supporting evidence.
6. Identify implementation issues and missing verification.

During verification-only tasks, Pi must not:

- Modify source files or configuration.
- Fix implementation issues.
- Install, uninstall, or upgrade dependencies.
- Change test expectations merely to obtain passing results.
- Commit changes or modify Git history.

If a criterion cannot be verified, Pi must explain why rather than claiming it passed.

## 3. During Execution

Regardless of task type, Pi must:

- Work exclusively within `/workspace`.
- Follow `AGENTS.md` and established project decisions.
- Stay within the authorized scope.
- Inspect files before modifying them.
- Avoid unrelated changes.
- Preserve existing documentation and project files.
- Never make architectural decisions independently.
- Stop and report if an action requires authorization outside the task scope.

If Pi identifies a necessary change outside the task's scope, it must explain the issue and wait for approval.

## 4. Handling Unexpected Behavior

Stop Pi if it:

- Repeats the same tool calls without making progress.
- Gets stuck in a tool-use loop.
- Starts creating files outside the expected scope.
- Attempts unrelated refactoring or additional tasks.
- Makes assumptions that contradict the project specification.

Press `Ctrl+C` to interrupt a stuck session.

After interruption:

1. Run `git status --short`.
2. Inspect the affected files and changes.
3. Review the output before deciding what to keep or revert.
4. Do not use destructive cleanup commands such as `git reset --hard` or `git clean -fd` as a routine recovery method.

Never assume that an interrupted task left the workspace unchanged.

## 5. Completion Report

Pi must provide a completion report appropriate to the task.

### For implementation tasks

Include:

- **Implementation summary:** What was accomplished.
- **Files changed:** Every created, modified, or deleted file.
- **Dependencies:** Any additions or changes, or confirmation that none were made.
- **Commands executed:** Include build, test, and verification commands.
- **Test results:** Report actual results; do not claim tests passed without running them.
- **Outstanding issues:** Incomplete requirements, known limitations, or decisions requiring approval.

### For acceptance verification tasks

Include:

- **Verification summary:** What was inspected and tested.
- **Acceptance criteria:** Individual PASS, FAIL, or BLOCKED results.
- **Evidence:** Commands executed, relevant output, and inspected files.
- **Files changed:** Confirm that no implementation files were modified.
- **Outstanding issues:** Failed criteria, unverified behavior, and recommended follow-up actions.

Pi must not automatically proceed to another task.

## 6. Review and Verification

After Pi finishes:

1. Inspect `git status --short`.
2. Review changes using `git diff` and inspect new files separately.
3. Compare implementation against the supplied ticket's acceptance criteria.
4. Run relevant tests and verification commands when necessary.
5. Review Pi's completion report for unsupported claims or missing checks.

Use ChatGPT for architecture, code review, debugging, and deciding whether the task or ticket is genuinely complete.

If changes are needed, prepare a focused follow-up prompt. Do not ask Pi to redo the entire project or broadly "fix everything."

## 7. Completing a Ticket

A ticket is complete only when:

- Its acceptance criteria are satisfied.
- The implementation follows `AGENTS.md` and the project specification.
- Relevant verification has passed.
- Changes have been reviewed.
- Outstanding issues have been resolved or explicitly accepted.

Only then should the ticket be marked complete in `docs/implementation-backlog.md`.

The user controls when a ticket is committed. Pi must never create commits unless explicitly authorized.

## 8. Working with Local Models

Local models are primarily used for focused implementation and verification tasks.

Prefer:

- One clearly defined task per session.
- Clear, concrete requirements.
- Small changes with observable outcomes.
- Explicit file and scope constraints.
- Short feedback loops.
- Fresh sessions for independent tasks.

Avoid:

- Broad architectural reviews.
- Large multi-task implementation requests.
- Unbounded autonomous tasks.
- Loading the entire implementation backlog.
- Repeatedly asking the model to summarize every project document.
- Assuming that a plausible explanation or completion report proves the implementation is correct.

When a task requires broader reasoning, use ChatGPT to prepare the implementation plan and review the result.

## Guiding Principle

**ChatGPT helps plan and review. The user decides, implements complex changes, and controls the workflow. Pi assists with small implementations and acceptance verification.**

No ticket is considered complete merely because Pi says it is complete.