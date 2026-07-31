# Frontend Layout Fix Plan

## Overview

The Report page feels stretched because the outer container uses `max-w-[1650px]` — nearly full-viewport-width on most monitors — while the inner components use generous padding (`p-10`) and large font sizes designed for narrower, focused layouts. The fix narrows the container and tightens spacing/type so the page reads comfortably.

**Scope:** Frontend only. No backend changes. No new features or abstractions.

---

## Sub-Task 1 — Narrow the page container width

**Status:** `[ ] pending`

**Intent**
The `max-w-[1650px]` in `Report.tsx` is the root cause. Reducing it to `max-w-6xl` (1152px) immediately pulls all content into a centered, readable column on any screen size.

**Expected Outcomes**
- All content sits in a comfortable centered column with visible dark background on both sides.
- Nothing overflows or wraps unexpectedly.

**Todo List**
1. In `Report.tsx` line 24, change `max-w-[1650px]` → `max-w-6xl`.
2. Optionally increase `px-8` → `px-6` (already reasonable, no change needed).

**Relevant Context**
- File: `frontend/src/pages/Report.tsx`, line 24
- Class before: `mx-auto w-full max-w-[1650px] px-8 space-y-10`
- Class after:  `mx-auto w-full max-w-6xl px-6 space-y-10`

---

## Sub-Task 2 — Fix CommitTable column stretching

**Status:** `[ ] pending`

**Intent**
The table's SHA, Author, and Tier columns have no width constraints so they sprawl across the full container width. Adding fixed `w-` classes to those columns makes the table compact and readable.

**Expected Outcomes**
- SHA column is narrow (mono font, short text).
- Author column has a moderate fixed width.
- Tier badge column hugs its content.
- Commit Message column takes the remaining space and truncates long text.

**Todo List**
1. In `CommitTable.tsx`, add `w-28` to the SHA `<th>` and its `<td>`.
2. Add `w-40` to the Author `<th>` and its `<td>`.
3. Add `w-28` to the Tier `<th>` and its `<td>`.
4. The Message column already has `max-w-md truncate` — keep it, no changes needed there.
5. Add `table-fixed` to the `<table>` element so column widths are respected.

**Relevant Context**
- File: `frontend/src/components/report/CommitTable.tsx`, lines 35–91
- Current table class: `w-full` → change to `w-full table-fixed`

---

## Sub-Task 3 — Reduce oversized padding and font sizes

**Status:** `[ ] pending`

**Intent**
Cards use `p-10` padding which was designed for a very wide layout. With the container narrowed, `p-6` or `p-8` gives better proportion. Similarly `text-3xl` headings inside cards can drop to `text-2xl`.

**Expected Outcomes**
- Cards feel proportional — content doesn't float in large white space.
- Heading sizes feel appropriate for the narrower card widths.

**Todo List**
1. `RepositoryHeader.tsx` line 22: `p-10` → `p-8`. Line 24: `text-4xl` → `text-3xl`.
2. `CommitTable.tsx` line 27: `p-10` → `p-8`. Line 29: `text-3xl` → `text-2xl`.
3. `ScoreBreakdown.tsx` line 45: `p-10` → `p-8`. Line 46: `text-3xl` → `text-2xl`.
4. `TierDistribution.tsx` line 34: `p-10` → `p-8`. Line 35: `text-3xl` → `text-2xl`.
5. `StatisticsGrid.tsx` line 37: `text-3xl` → `text-2xl` on stat values.
6. `AISummaryCard.tsx` line 14: `p-8` is already fine — no change.
7. `HealthScoreCard.tsx` line 40: `p-7` is already fine — no change.

**Relevant Context**
- Files: `RepositoryHeader.tsx`, `CommitTable.tsx`, `ScoreBreakdown.tsx`, `TierDistribution.tsx`, `StatisticsGrid.tsx`
