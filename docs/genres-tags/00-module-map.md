# Genres / Tags Module Map

## Module purpose

The `Genres / Tags` module helps users organize, browse and filter their personal BookNest library by predefined genres and user-created tags.

## Core concepts

### Genres

Genres are predefined system categories.

Users can select genres for books, but cannot create, edit, delete or merge genres in MVP.

### Tags

Tags are user-created labels.

Users can create, edit and delete their own tags.

Tags can represent:

- tropes;
- atmosphere;
- themes;
- characters;
- format;
- custom personal labels.

### Tag colors

Tags use a predefined BookNest color palette.

Users select colors from available semantic color keys. Arbitrary custom colors are not supported in MVP.

## Main page

```text
Genres / Tags Page
├─ Header
├─ Add Tag CTA
├─ Search / Sort / Filters toolbar
├─ Top statistics summary cards
├─ Genres tab
├─ Tags tab
└─ Info hint
```

## Sketch-based MVP additions

The module includes the following documented UI/product improvements:

1. Top statistics summary cards.
2. Advanced genre cards with icon, counts, reading progress, rating and cover preview.
3. Queue count inside genre cards.
4. Popular tags block with tag chips and book counters.
5. Show all / show more behavior.
6. Tab-specific search.
7. Sorting and filters toolbar.
8. Info hint explaining the difference between genres and tags.
9. Add Tag CTA only.
10. Navigation from genre/tag to filtered My Library.

## Integrations

This module integrates with:

- Book Form;
- Book Details;
- My Library filters;
- Reading Queue;
- Dashboard / Statistics.

## MVP boundaries

Included in MVP:

- predefined genres;
- user-created tags;
- Add/Edit/Delete Tag;
- predefined tag color palette;
- genres/tags page;
- popular tags;
- genre cards with statistics;
- navigation to filtered My Library.

Not included in MVP:

- custom genres;
- predefined tags;
- automatic tag suggestions;
- automatic genre detection;
- merge tags;
- detailed genre page;
- detailed tag page;
- advanced tag color system;
- custom user color palettes.
