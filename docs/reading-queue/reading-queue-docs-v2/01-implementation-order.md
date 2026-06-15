# Recommended Implementation Order

## 1. Domain model and query rules

Start with:

```text
01-domain/01-reading-queue-data-model.md
01-domain/02-queue-item-fields.md
01-domain/03-access-and-user-scope.md
01-domain/04-position-and-order-rules.md
01-domain/05-duplicate-prevention-rules.md
```

## 2. Basic page skeleton

Then implement:

```text
02-pages/reading-queue-page/00-page-overview-route-access.md
02-pages/reading-queue-page/01-page-header.md
02-pages/reading-queue-page/02-toolbar.md
02-pages/reading-queue-page/06-queue-list.md
02-pages/reading-queue-page/states/
```

## 3. Add to queue

Then implement:

```text
03-actions/add-to-reading-queue/
04-integrations/01-book-details-contract.md
```

## 4. Remove from queue

Then implement:

```text
03-actions/remove-from-reading-queue/
05-shared/02-optimistic-update-and-rollback.md
```

## 5. Reorder

Then implement drag-and-drop:

```text
03-actions/reorder-reading-queue/
01-domain/04-position-and-order-rules.md
```

## 6. Start reading

Then implement:

```text
03-actions/start-reading-from-queue/
04-integrations/04-dashboard-contract.md
```

## 7. Polish

Finish with:

```text
05-shared/accessibility-rules.md
05-shared/responsive-rules.md
05-shared/master-acceptance-criteria/
```
