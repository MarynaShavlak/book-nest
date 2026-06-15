# Recommended Implementation Order

## 1. Domain first

Start with:

```text
01-domain/01-favorite-book-data-model.md
01-domain/02-favorite-state-rules.md
01-domain/03-inclusion-exclusion-rules.md
01-domain/04-access-and-user-scope.md
```

## 2. Favorite toggle

Then implement the reusable heart toggle:

```text
03-actions/favorite-toggle/
```

This should be independent from the Favorites page.

## 3. Integrations

Connect toggle to:

```text
04-integrations/01-book-details-contract.md
04-integrations/02-my-library-contract.md
04-integrations/03-search-results-contract.md
04-integrations/04-list-queue-series-contract.md
```

## 4. Favorites page

Implement page shell, then filters/search/sorting, then cards and states:

```text
02-pages/favorites-page/
```

## 5. Shared behavior

Use shared rules for states, filters, sorting and acceptance criteria:

```text
05-shared/
```
