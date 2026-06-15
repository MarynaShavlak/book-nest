# Implementation Order

## Recommended implementation order

1. **Domain model and helpers**
   - `01-domain/01-series-data-model.md`
   - `01-domain/02-series-fields.md`
   - `01-domain/06-part-number-core-rules.md`
   - `01-domain/07-part-number-field-and-default.md`
   - `01-domain/04-progress-calculation.md`
   - `01-domain/05-next-book-logic.md`

2. **Create / Edit Series**
   - `03-actions/create-edit-series/`

3. **Book Form integration**
   - `04-integrations/book-form-series-section/`

4. **Add book to series**
   - `03-actions/add-book-to-series/`

5. **Series Details Page**
   - `02-pages/series-details-page/`

6. **All Series Page**
   - `02-pages/all-series-page/`

7. **Remove / unlink book from series**
   - `03-actions/remove-unlink-book-from-series/`

8. **Delete Series**
   - `03-actions/delete-series/`

9. **Refinement and shared states**
   - `05-shared/`

## Why this order

The pages depend on domain helpers. The add/remove/delete actions depend on the same relation and recalculation rules. Building helpers first prevents each page from reimplementing progress, next-book, and order logic differently.
