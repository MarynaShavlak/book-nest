# Master Acceptance Criteria

## Page structure

- User can open the `Genres / Tags` page from the main navigation.
- Page has two tabs: `Жанри` and `Теги`.
- Active tab is visually clear.
- Page layout is responsive on desktop, tablet, and mobile.

## Add Tag / Add Genre rules

- Page has `Додати тег` action.
- Page does not have `Додати жанр` action in MVP.
- Users can create tags manually.
- Users cannot create custom genres in MVP.

## Summary cards

- Page shows top statistics summary cards.
- Summary cards use only current user's data.
- Summary cards can show:
  - used genres count;
  - user-created tags count;
  - books with genres count;
  - books without genres count;
  - average rating by genres.
- If `Книги без жанрів` card is clickable, it opens My Library filtered to books without genres.
- Summary values are recalculated after book/tag changes.

## Genres tab

- Genres tab shows only genres used in current user's books.
- Genre card shows genre name and total books count.
- Genre card may show icon, read count, queue count, average rating, reading progress and cover preview.
- Queue count is calculated from the current user's reading queue.
- Average rating ignores books without rating.
- Cover preview shows only books that belong to the selected genre.
- User can click a genre card to open My Library filtered by this genre.
- User can expand collapsed list using `Показати всі жанри`.
- There is no create/edit/delete genre action in MVP.

## Tags tab

- Tags tab shows only tags created by the current user.
- Popular tags block shows most used user-created tags.
- Tag chip shows tag name and books count.
- Tag chip uses predefined BookNest tag color.
- User can click a tag chip to open My Library filtered by this tag.
- Tag filtering uses `tagId`, not tag name.
- User can expand collapsed list using `Показати всі теги` or `Показати більше`.
- Empty state explains that tags are created manually.

## Tag colors

- User can select a tag color only from the predefined BookNest palette.
- User cannot enter arbitrary HEX/RGB/OKLCH color values.
- If user does not select a color, the tag receives `parchment` color by default.
- Tag color is stored as a semantic key, not as a raw color value.
- Available color keys are:
  - `parchment`
  - `terracotta`
  - `honey`
  - `sage`
  - `forest`
  - `sky`
  - `lavender`
  - `rose`
- Tag chips/cards use the selected color consistently across the app.
- Changing tag color updates the tag display everywhere.
- Changing tag color does not affect linked books.
- Old tags without color are displayed with `parchment`.
- Invalid color values fallback to `parchment` in UI rendering.

## Search

- Search placeholder changes depending on active tab:
  - `Пошук жанру...` for Genres tab;
  - `Пошук тегу...` for Tags tab;
  - `Пошук жанру або тегу...` for global/mixed mode.
- Search is case-insensitive.
- Search trims extra spaces.
- Search supports partial matching.
- Search does not create new tags automatically.

## Sorting and filters

- Genres tab has genre-specific sorting options.
- Tags tab has tag-specific sorting options.
- User can sort genres by name, books count, read count, queue count, or average rating.
- User can sort tags by name, books count, type, creation date, or last used date.
- Filters do not modify book or tag data.
- Filtered empty state appears when no items match.

## Info hint

- Page shows a hint explaining the difference between genres and tags.
- Recommended text:

```text
Жанри додаються з книг автоматично, а теги ви можете створювати самостійно.
```

## My Library navigation

- Clicking a genre opens My Library filtered by this genre.
- Clicking a tag opens My Library filtered by this tag id.
- Active filters are visible in My Library.
- User can clear genre/tag filters.
- Navigation does not modify book data.

## Data safety

- Users can see only their own user-created tags.
- Tag deletion never deletes books.
- Genre and tag filters only change visible book list.
- Renaming a tag does not break book connections if books store `tagIds`.
