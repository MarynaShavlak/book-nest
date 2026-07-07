# Genres / Tags Page — Layout Overview

## Purpose

The `Genres / Tags` page helps users understand and organize their personal library by book genres and user-created tags.

The page should not work as a static dictionary only. It should give users a quick overview of their reading patterns and provide fast navigation to filtered books.

## Main page structure

Recommended page structure:

```text
Genres / Tags Page
├─ Header
│  ├─ Page title
│  ├─ Page subtitle
│  ├─ Search input
│  ├─ Filters button
│  └─ Add Tag button
│
├─ Tabs
│  ├─ Genres
│  └─ Tags
│
├─ Top statistics summary
│  ├─ Used genres count
│  ├─ User-created tags count
│  ├─ Books with genres count
│  └─ Average genre rating / books without genres
│
├─ Active tab content
│  ├─ Genres tab content
│  └─ Tags tab content
│
└─ Info hint
   └─ Difference between genres and tags
```

## Header

The page header contains:

- title: `Жанри / Теги`;
- subtitle: short explanation of the page purpose;
- global or tab-specific search input;
- filters button;
- primary action: `Додати тег`.

Recommended subtitle:

```text
Керуйте жанрами, тегами й атмосферою вашої бібліотеки.
```

## Primary action

The main action on this page is:

```text
+ Додати тег
```

There is no `Add Genre` action in MVP.

Reason:

- genres are predefined by the system;
- users can only select genres for books;
- tags are created manually by the user.

## Tabs

The page has two tabs:

```text
Жанри
Теги
```

The active tab controls:

- visible content;
- search placeholder;
- available filters;
- available sorting options;
- empty state text.

## Top statistics summary cards

The page should show a compact statistics summary above the main tab content.

Recommended cards:

| Card | Description | Click behavior |
| ---- | ----------- | -------------- |
| `Жанри` | Number of genres currently used in user books | Opens / focuses Genres tab |
| `Теги` | Number of user-created tags | Opens / focuses Tags tab |
| `Книг з жанрами` | Number of books that have at least one genre | Opens My Library filtered to books with genres |
| `Середній рейтинг` | Average rating across books that have genres | No required action |

Alternative fourth card:

| Card | Description | Click behavior |
| ---- | ----------- | -------------- |
| `Книги без жанрів` | Number of books without selected genres | Opens My Library filtered to books without genres |

For MVP, `Книги без жанрів` is especially useful because it gives the user an actionable cleanup entry point.

## Summary card data contract

Recommended type:

```ts
export type GenresTagsSummary = {
  usedGenresCount: number;
  userTagsCount: number;
  booksWithGenresCount: number;
  booksWithoutGenresCount: number;
  averageRatingByGenres: number | null;
};
```

## Summary card display rules

- Use compact cards.
- Use icons that match the BookNest visual style.
- Values should be prominent.
- Labels should be short.
- Cards should not take too much vertical space on mobile.
- If value is unavailable, show `—` instead of `0` only when the value truly cannot be calculated.

## Optional decorative quote block

The page may include a small decorative quote/tip card on desktop.

Example:

```text
Книги — це мандрівки, які можна починати знову і знову.
```

This block is decorative and not required for MVP.

It should not replace functional page content.

## Info hint

The page should include a small explanatory hint that clarifies the difference between genres and tags.

Recommended text:

```text
Жанри додаються з книг автоматично, а теги ви можете створювати самостійно.
```

Alternative text:

```text
Жанри — це системні категорії книг. Теги — це ваші власні мітки для настрою, тем, тропів і швидкого пошуку.
```

The hint may be displayed:

- below popular tags;
- inside empty state;
- as an info banner;
- as a tooltip near the page title.

## Responsive behavior

### Desktop

- Sidebar is visible.
- Header can display search and actions in one row.
- Summary cards are displayed in 4 columns.
- Genre cards are displayed in 3–4 columns.
- Popular tags are displayed in multiple rows.

### Tablet

- Summary cards can use 2 columns.
- Genre cards can use 2 columns.
- Filters may collapse into a popover.

### Mobile

- Header actions stack vertically or collapse.
- Search input takes full width.
- Summary cards use 1–2 columns.
- Genre cards use 1 column.
- Filters open in a bottom sheet.
- Tabs should be horizontally scrollable if needed.

## Acceptance criteria

- Page has `Genres` and `Tags` tabs.
- Page has `Add Tag` CTA.
- Page does not have `Add Genre` CTA in MVP.
- Page shows top summary statistics.
- Summary cards use current user library data only.
- Search placeholder changes depending on active tab.
- Info hint explains the difference between genres and tags.
- Layout remains readable on desktop, tablet, and mobile.
