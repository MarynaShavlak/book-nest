# Module map: My Library Page

## Module responsibility

**My Library Page** — головна сторінка керування всіма книгами користувача в BookNest.

Сторінка відповідає за:

- показ усіх активних книг поточного користувача;
- search/filter/sort/view mode;
- quick overview через cards або rows;
- navigation до Book Details;
- quick actions на книзі;
- bulk actions над вибраними книгами;
- summary cards і summary sidebar;
- loading, empty, no results, error states;
- pagination / load more.

Сторінка не має дублювати повну логіку:

- Book Details;
- Delivery;
- Loaned Books;
- Custom Lists;
- Reading Queue;
- Series;
- Statistics.

Для цих модулів є integration contracts у `04-integrations/`.

## Recommended Claude Code context packs

### Реалізація базової сторінки

```text
00-module-map.md
01-domain/00-purpose-and-scope.md
01-domain/01-book-inclusion-rules.md
02-pages/my-library-page/page-entry/
02-pages/my-library-page/header/
02-pages/my-library-page/toolbar/
```

### Search + filters + sorting

```text
00-module-map.md
01-domain/03-url-query-state-rules.md
01-domain/04-library-query-and-result-rules.md
02-pages/my-library-page/search/
02-pages/my-library-page/quick-filters/
02-pages/my-library-page/advanced-filters/
02-pages/my-library-page/active-filters-bar/
02-pages/my-library-page/sorting/
05-shared/filter-search-sort-rules/
```

### Book card actions

```text
00-module-map.md
01-domain/06-book-card-action-availability-rules.md
03-actions/book-card-actions/
04-integrations/01-book-details-contract.md
05-shared/00-cross-feature-update-matrix.md
```

### Bulk actions

```text
00-module-map.md
01-domain/07-bulk-selection-and-action-rules.md
01-domain/08-delete-safety-rules.md
03-actions/bulk-actions/
05-shared/00-cross-feature-update-matrix.md
```

### States + pagination

```text
00-module-map.md
01-domain/09-state-priority-rules.md
02-pages/my-library-page/states/
02-pages/my-library-page/pagination/
05-shared/states/
05-shared/02-pagination-rules.md
```
