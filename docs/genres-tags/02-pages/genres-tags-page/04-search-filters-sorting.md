# Search, Filters and Sorting

## Purpose

Search, filters and sorting help users navigate genres and tags when the library becomes large.

The controls should adapt to the active tab.

## Tab-specific search

Search placeholder should change depending on active tab.

| Active tab | Placeholder |
| ---------- | ----------- |
| Genres | `Пошук жанру...` |
| Tags | `Пошук тегу...` |
| Global / mixed mode | `Пошук жанру або тегу...` |

## Search behavior

### Genres tab

Search should match:

- genre label;
- genre group if available;
- books inside this genre by title or author if extended search is enabled.

For MVP, matching by genre label is enough.

### Tags tab

Search should match:

- tag name;
- tag description;
- tag type;
- books that use this tag if extended search is enabled.

For MVP, matching by tag name is enough.

## Search normalization

Search should:

- ignore leading/trailing spaces;
- be case-insensitive;
- support partial matching;
- handle Ukrainian and English tag names;
- not create new tags automatically.

Recommended helper:

```ts
const normalizeSearch = (value: string) =>
  value.trim().toLowerCase().replace(/\s+/g, " ");
```

## Toolbar

The page should have a toolbar with:

```text
Search input
Sort select
Filters button
```

Recommended desktop layout:

```text
[Search input]                         [Sort select] [Filters]
```

Recommended mobile layout:

```text
[Search input]
[Sort select] [Filters]
```

## Sorting options — Genres tab

Recommended sorting options:

| Option | Value | Description |
| ------ | ----- | ----------- |
| За назвою | `name_asc` | Alphabetical by genre label |
| За кількістю книг | `books_count_desc` | Most used genres first |
| За кількістю прочитаних | `read_count_desc` | Genres with most finished books first |
| За кількістю у черзі | `queue_count_desc` | Genres with most queued books first |
| За середнім рейтингом | `rating_desc` | Highest rated genres first |

Default:

```ts
sort = "books_count_desc";
```

Alternative default:

```ts
sort = "name_asc";
```

If the page is positioned as an overview dashboard, `books_count_desc` is recommended.

If the page is positioned as a directory, `name_asc` is recommended.

## Sorting options — Tags tab

Recommended sorting options:

| Option | Value | Description |
| ------ | ----- | ----------- |
| За назвою | `name_asc` | Alphabetical by tag name |
| За кількістю книг | `books_count_desc` | Most used tags first |
| За типом тегу | `type_asc` | Group or sort by tag type |
| За датою створення | `created_at_desc` | Newest tags first |
| За останнім використанням | `last_used_desc` | Recently used tags first |

Default:

```ts
sort = "books_count_desc";
```

## Filters — Genres tab

Recommended filters:

- all genres;
- fiction;
- non-fiction;
- genres with unread books;
- genres with books in reading queue;
- genres with finished books;
- genres with wishlist books;
- genres with high average rating.

For MVP, recommended minimum:

```text
All / With unread books / In queue / Finished
```

## Filters — Tags tab

Recommended filters:

- all tags;
- tropes;
- atmosphere;
- themes;
- characters;
- format;
- custom;
- unused tags;
- recently used tags.

For MVP, recommended minimum:

```text
All / By tag type / Unused tags
```

## Empty filtered state

If search or filters return no results, show a filtered empty state.

Genres example:

```text
Нічого не знайдено за цим запитом.
Спробуйте змінити пошук або фільтри.
```

Tags example:

```text
Тегів за цим запитом не знайдено.
Спробуйте іншу назву або створіть новий тег.
```

Action for Tags tab:

```text
Додати тег
```

## URL/query behavior

The page may store active tab, search, sort and filters in URL query params.

Example:

```text
/genres-tags?tab=genres&sort=books_count_desc&filter=in_queue
/genres-tags?tab=tags&search=slow%20burn&sort=books_count_desc
```

This is optional for MVP but useful for shareable and restorable state.

## Acceptance criteria

- Search placeholder changes depending on active tab.
- Search works without case sensitivity.
- Search trims extra spaces.
- Genres tab has genre-specific sorting options.
- Tags tab has tag-specific sorting options.
- Filters do not modify book/tag data.
- Filtered empty state appears when no items match.
- Mobile layout keeps search, sorting and filters usable.
