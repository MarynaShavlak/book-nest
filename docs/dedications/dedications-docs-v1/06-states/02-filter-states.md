# Filter States

## Active filter visual

Active chip:

- filled terracotta/brown background;
- cream text;
- icon optional.

Inactive chip:

- cream background;
- beige border;
- brown text.

---

## Filter combinations

Allowed combinations:

```txt
filter + search + genre + sort
```

Example:

```txt
Улюблені + search="любов" + genre="Романтика" + sort="За автором"
```

---

## Clear filters

Clear filters should reset:

```ts
{
  search: '',
  filter: 'all',
  genreId: undefined,
  sort: 'newest',
  page: 1,
}
```

---

## Query persistence

Recommended full version:

- store filters in URL query;
- restore filters on reload;
- allow sharing filtered view.

MVP can keep filters in component state.
