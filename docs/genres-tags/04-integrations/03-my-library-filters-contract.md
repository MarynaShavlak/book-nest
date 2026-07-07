# My Library Filters Contract — Genres and Tags

## Purpose

Genres and tags should work as navigation entry points to `My Library`.

When the user clicks a genre card or tag chip, the app should open the library with the relevant filter already applied.

## Navigation from genre

Clicking a genre card opens My Library filtered by genre.

Example:

```text
/my-library?genre=fantasy
```

Expected result:

- My Library opens;
- genre filter is active;
- only books with selected genre are visible;
- user can clear the filter manually.

## Navigation from tag

Clicking a tag chip opens My Library filtered by tag id.

Example:

```text
/my-library?tagId=tag_123
```

Expected result:

- My Library opens;
- tag filter is active;
- only books connected to this tag are visible;
- user can clear the filter manually.

## Why tag id is used instead of tag name

Tags should be filtered by `tagId`, not by name.

Reason:

- user can rename a tag;
- different users can have tags with the same name;
- tag names may contain spaces, emojis, or different casing;
- `tagId` is stable.

## Filter chip display in My Library

When a filter is applied from `Genres / Tags`, My Library should show active filter chips.

Examples:

```text
Жанр: Фентезі ×
Тег: slow burn ×
```

## Combined filters

If the user already has filters applied in My Library, opening from a genre/tag may either:

1. replace current filters;
2. add the new filter to existing filters.

Recommended MVP behavior:

```text
Opening from Genres / Tags replaces the genre/tag-related filter and preserves unrelated filters only if it does not create confusing results.
```

Simpler MVP behavior:

```text
Opening from Genres / Tags applies only the selected genre/tag filter and resets other library filters.
```

## Books without genres

If the summary card `Книги без жанрів` is used, it should open My Library with a special filter.

Example:

```text
/my-library?withoutGenres=true
```

Expected result:

- show books where `genres` is empty or missing;
- help user clean up book metadata.

## Books with genres

If the summary card `Книг з жанрами` is clickable, it may open:

```text
/my-library?withGenres=true
```

Expected result:

- show books that have at least one selected genre.

## Acceptance criteria

- Clicking a genre card opens My Library filtered by that genre.
- Clicking a tag chip opens My Library filtered by that tag id.
- Tag filtering uses `tagId`, not tag name.
- Active filters are visible in My Library.
- User can clear genre/tag filters.
- Navigation does not modify book data.
