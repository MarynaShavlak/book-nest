# Sketch-Based MVP Updates

## Purpose

This document summarizes the functional ideas taken from the Genres / Tags page sketches and defines which ones should be added to the MVP documentation.

The goal is not to copy the visual design literally, but to capture the useful product behavior.

## Recommended additions

### 1. Top statistics summary cards

Add compact summary cards at the top of the page.

Recommended cards:

- used genres count;
- user-created tags count;
- books with genres count;
- average rating or books without genres.

These cards give users an immediate overview of their library organization.

### 2. Advanced genre cards

Genre cards should contain more than just genre name and count.

Recommended content:

- icon;
- genre name;
- total books count;
- read books count;
- queue books count;
- average rating;
- reading progress;
- cover preview.

### 3. Queue count inside genre cards

Show how many books from a genre are currently in the reading queue.

Example:

```text
82 прочитано · 46 у черзі
```

This connects Genres / Tags with the Reading Queue feature.

### 4. Popular tags block

Show a compact list of the most used user-created tags.

Each tag chip should include:

- tag name;
- books count;
- selected tag color;
- click action to filtered My Library.

### 5. Show all / show more behavior

When there are many genres or tags, show only the most important items by default.

Recommended actions:

```text
Показати всі жанри (24)
Показати всі теги (86)
Показати більше
Показати менше
```

### 6. Tab-specific search

Search placeholder should depend on active tab.

Examples:

```text
Пошук жанру...
Пошук тегу...
Пошук жанру або тегу...
```

### 7. Sorting and filters toolbar

The page should have clear controls for sorting and filtering.

Recommended controls:

- search input;
- sort select;
- filters button.

### 8. Info hint explaining genres vs tags

Add a small hint explaining the main logic.

Recommended text:

```text
Жанри додаються з книг автоматично, а теги ви можете створювати самостійно.
```

### 9. Add Tag CTA only

The page should have `Add Tag`, but not `Add Genre`.

Reason:

- genres are predefined;
- tags are user-created.

### 10. Navigation to filtered My Library

Every genre card and tag chip should work as a navigation shortcut.

Examples:

```text
/my-library?genre=fantasy
/my-library?tagId=tag_123
```

## MVP priority

Recommended priority:

| Priority | Feature |
| -------- | ------- |
| Must have | Add Tag CTA only |
| Must have | Navigation to filtered My Library |
| Must have | Popular tags with counters |
| Must have | Genre cards with counts |
| Should have | Summary cards |
| Should have | Reading progress in genre cards |
| Should have | Queue count in genre cards |
| Should have | Show all / show more |
| Could have | Average rating in genre cards |
| Could have | Cover previews |

## Not required for MVP

The following sketch elements are decorative and not required for MVP:

- quote block;
- large sidebar illustration;
- decorative branches;
- complex card hover animations.

They can be implemented as part of UI polish later.
