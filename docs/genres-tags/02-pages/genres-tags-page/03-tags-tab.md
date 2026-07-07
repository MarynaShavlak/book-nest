# Tags Tab

## Purpose

The `Tags` tab shows user-created tags used to describe books by tropes, mood, themes, characters, format, or any custom personal meaning.

Unlike genres, tags are created manually by users.

## Main behavior

The tab should help users:

- see their most used tags;
- quickly find books by trope, mood, theme, or custom label;
- create a new tag;
- edit or delete existing tags;
- understand which tags are not used in any book yet.

## Popular tags block

The page should include a `Popular tags` section.

Recommended title:

```text
Популярні теги
```

The section shows the most used user-created tags.

Important rule:

```text
Popular tags are calculated only from the current user's tags.
```

There are no predefined tags in MVP.

## Tag chip structure

Recommended chip content:

```text
Tag Chip
├─ optional tag icon
├─ tag name
├─ books count badge
└─ selected tag color
```

Example:

```text
slow burn 12
```

Recommended type:

```ts
export type TagChipItem = {
  tagId: string;
  name: string;
  normalizedName: string;
  type: TagType;
  color: TagColor;
  booksCount: number;
  lastUsedAt?: string | null;
};
```

## Tag color display

Each tag chip should use the selected predefined BookNest tag color.

The color is stored as a semantic key, not as a raw HEX value.

Example:

```ts
color: "terracotta"
```

See:

```text
01-domain/08-tag-color-palette.md
```

## Books count badge

Each tag chip should show how many books use this tag.

Rules:

- count only books of the current user;
- count books where `tagIds` contains current `tagId`;
- if `booksCount = 0`, the tag may still be shown in the full Tags tab;
- popular tags should normally prioritize tags with `booksCount > 0`.

## Popular tags sorting

Recommended default sorting for popular tags:

1. by `booksCount` descending;
2. by `lastUsedAt` descending;
3. by `name` ascending.

## Show all tags behavior

By default, the page may show only a limited number of popular tags.

Recommended collapsed state:

```text
Show first 12–16 tags
```

Button:

```text
Показати всі теги (86)
```

Expanded behavior:

- show all user-created tags;
- button text changes to `Показати менше`;
- preserve selected sorting and filters.

## Add Tag CTA

The Tags tab should include a visible `Add Tag` action.

Possible placements:

- page header;
- Popular Tags section header;
- empty state;
- Tags tab toolbar.

Main button label:

```text
+ Додати тег
```

There should be no `Add Genre` button.

## Edit and delete actions

For full tag list, each tag item may expose actions:

- edit tag;
- delete tag.

For compact popular tag chips, actions may be hidden and available only from expanded/full tag list.

## Empty state

If user has no tags yet:

```text
У вас ще немає тегів.
Створіть власні теги, щоб позначати книги за настроєм, тропами, темами або улюбленими сюжетами.
```

Action:

```text
Додати тег
```

## Info hint

Recommended hint:

```text
Теги створюєте ви самостійно. Вони допомагають швидко знаходити книги за тропами, настроєм, темами або власними позначками.
```

## Click behavior

Clicking on a tag chip opens My Library with tag filter applied.

Example route:

```text
/my-library?tagId=tag_123
```

If the app uses filter state instead of URL query params, the same behavior should be preserved through app state.

## Acceptance criteria

- Tags tab shows only tags created by the current user.
- Popular tags are sorted by usage count by default.
- Tag chips show tag name and books count.
- Tag chips use predefined BookNest tag colors.
- User can open Add Tag modal from the page.
- User can expand the section to see all tags.
- Clicking a tag opens My Library filtered by this tag.
- Empty state clearly explains that tags are created manually.
