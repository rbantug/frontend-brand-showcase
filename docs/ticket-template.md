# Pi Task Prompt Template

Use this template when preparing a task for Pi. The user supplies the original backlog ticket directly; Pi must not retrieve tickets from the implementation backlog.

Choose the appropriate task type: **Implementation** or **Acceptance Verification**.

---

# [TICKET-ID]: [TASK TITLE]

## 1. Project Instructions

Before starting, read and follow:

1. `/workspace/AGENTS.md`
2. `/workspace/docs/pi-workflow.md`
3. `/workspace/docs/project-context.md` (when relevant or explicitly requested)

Do not read `docs/implementation-backlog.md`.

The ticket and task instructions below are the authoritative instructions for this task.

Follow all project safety, architecture, and workflow rules.

## 2. Original Ticket

**Ticket:** [TICKET-ID — TITLE]

**Objective:**
[Original ticket objective]

**Scope:**
- [Original scope item]
- [Original scope item]

**Acceptance Criteria:**
- [Acceptance criterion]
- [Acceptance criterion]

**Dependencies:** [Completed dependencies or None]

## 3. Task Type

[Choose one]

### A. Implementation

**Task objective:**

[Describe the specific implementation task.]

**Requirements:**
- [Specific requirement]
- [Specific requirement]

**Permitted files:**
- [File path]
- [File path]

**Restrictions:**
- Modify only files necessary for this task.
- Do not expand the task scope.
- Do not install, uninstall, or upgrade dependencies unless explicitly authorized.
- Do not commit changes.

**Verification:**

- [Relevant command or expected behavior]
- [Additional verification, if applicable]

Stop after completing this task and provide the implementation completion report.

### B. Acceptance Verification

**Verification objective:**

Verify the original ticket's acceptance criteria against the existing implementation.

**Instructions:**

1. Inspect the relevant implementation.
2. Identify appropriate verification methods.
3. Run relevant build, test, and verification commands.
4. Evaluate every acceptance criterion individually.
5. Provide supporting evidence for each result.

Use these statuses:

- **PASS:** Verified successfully with supporting evidence.
- **FAIL:** Verification was performed and the criterion was not satisfied.
- **BLOCKED:** Verification could not be completed, with the reason explained.

**Restrictions:**

- Do not modify source files or configuration.
- Do not fix implementation issues.
- Do not install, uninstall, or upgrade dependencies.
- Do not change test expectations to obtain passing results.
- Do not commit changes.

Report failures and recommended follow-up actions. Stop after verification.

## 4. Completion Report

For implementation tasks, report:

- Implementation summary.
- Files created, modified, or deleted.
- Dependencies added or changed.
- Commands executed and actual results.
- Outstanding issues.

For verification tasks, report:

- Verification summary.
- Individual acceptance criteria and PASS/FAIL/BLOCKED status.
- Commands executed and actual results.
- Supporting evidence.
- Confirmation that implementation files were not modified.
- Outstanding issues and recommended follow-up actions.

Do not claim success without evidence.

**Do not proceed to another task without authorization.**