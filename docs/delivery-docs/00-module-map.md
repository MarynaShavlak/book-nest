# Delivery Module Map

## Main folders

| Folder | Responsibility |
| --- | --- |
| `01-domain/` | Data model, statuses, transitions, validation, safety rules. |
| `02-pages/` | Full pages: Books in Transit, Order History, Expense Statistics. |
| `03-actions/` | User actions and modals: mark in transit, edit, receive, cancel. |
| `04-integrations/` | How Delivery connects to Book Form, Book Details, Books to Buy, Dashboard, My Library. |
| `05-shared/` | Shared calculations, filters, states, responsive rules, master acceptance criteria. |

## Recommended context packages

### Implement data model and status helpers

Use:

```text
01-domain/README.md
01-domain/01-book-delivery-model.md
01-domain/04-stored-delivery-status.md
01-domain/05-calculated-ui-status.md
01-domain/06-status-transitions.md
```

### Implement Books in Transit page

Use:

```text
02-pages/books-in-transit/README.md
02-pages/books-in-transit/*.md
01-domain/05-calculated-ui-status.md
05-shared/01-summary-calculation-rules.md
05-shared/02-filter-sort-rules.md
```

### Implement Mark Book as In Transit modal

Use:

```text
03-actions/mark-book-as-in-transit/README.md
03-actions/mark-book-as-in-transit/*.md
01-domain/02-delivery-fields.md
01-domain/08-validation-rules.md
```

### Implement Book Form delivery section

Use:

```text
04-integrations/02-book-form-delivery-section.md
01-domain/02-delivery-fields.md
01-domain/06-status-transitions.md
03-actions/mark-book-as-in-transit/02-submit-data-updates.md
03-actions/mark-book-as-received/03-data-updates-errors-acceptance.md
03-actions/cancel-delivery-order/02-submit-data-updates.md
```

## Dependency direction

```text
Domain → Actions → Pages → Integrations
```

Pages may use actions.
Actions may use domain rules.
Domain must not depend on pages.

## Important normalized decisions

- `delivery.status` has only four stored values: `ordered`, `in_transit`, `received`, `cancelled`.
- `arriving_soon`, `delayed`, and `no_delivery_date` are calculated UI badges.
- Only one active delivery record is allowed per book.
- Received and cancelled records stay in history.
- Bulk actions must require confirmation.
- Cancelled orders are visible in statistics but excluded from the main spending total by default.
