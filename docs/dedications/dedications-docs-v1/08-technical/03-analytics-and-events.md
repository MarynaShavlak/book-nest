# Analytics and Events

Optional analytics events for full version.

```ts
type DedicationAnalyticsEvent =
  | 'dedications_page_opened'
  | 'dedication_search_used'
  | 'dedication_filter_changed'
  | 'dedication_sort_changed'
  | 'dedication_card_opened'
  | 'dedication_copied'
  | 'dedication_favorited'
  | 'dedication_unfavorited'
  | 'dedication_book_opened';
```

---

## Event examples

```ts
track('dedication_copied', {
  bookId,
  dedicationLength: text.length,
});
```

```ts
track('dedication_filter_changed', {
  filter: 'favorites',
});
```

---

## Privacy

Do not send full dedication text to analytics.

Allowed:

- dedication length;
- bookId;
- filter type;
- sort type;
- count of results.

Not allowed:

- full dedication text;
- private user notes;
- personal comments.
