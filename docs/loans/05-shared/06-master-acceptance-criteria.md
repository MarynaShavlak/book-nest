# Master Acceptance Criteria

## General

* System supports two separate loan scenarios.
* One generic “Позичено” status is not used.
* User can create borrowed_from_someone loan.
* User can create lent_to_someone loan.
* Book ownershipStatus updates correctly.
* Active loan record is created.
* Returned loan record is preserved.

---

## Borrowed Books Page

* User can open Позичені книги page.
* Page shows active loans only.
* Page has summary cards.
* Page has tabs.
* User can search loans.
* User can filter loans.
* User can sort loans.
* User sees loan badges.
* User can go to Book Details.
* User can edit loan.
* User can mark loan as returned.

---

## Mark as Loaned modal

* Modal shows book preview.
* User can select loan type.
* Correct fields are shown for selected type.
* Required fields are validated.
* Return date cannot be earlier than loan date.
* Reminder requires return date.
* Submit creates active loan.
* Submit updates book ownershipStatus.
* New loan appears in correct tab.

---

## Edit Loan

* User can edit active loan.
* Values are prefilled.
* User cannot change loan type in MVP.
* Save updates loan.
* UI status recalculates.
* Returned loans are read-only in MVP.

---

## Mark as Returned

* Borrowed_from_someone return changes ownershipStatus to `none`.
* Lent_to_someone return changes ownershipStatus to `owned`.
* Loan status becomes `returned`.
* returnedAt is set.
* Loan disappears from active page.
* Loan history is not deleted.

---

## Integrations

* Book Details shows Loan Block for active loan.
* Book Form shows Loan Section for loan ownership statuses.
* My Library supports loan filters.
* Dashboard can show loan summary.
* Cross-page data updates after create/edit/return.

---

## Data safety

* Loan actions do not delete book.
* Loan actions do not delete loan history.
* Loan actions do not change readingStatus.
* Loan actions do not change formats.
* Loan actions do not change rating.
* Loan actions do not change notes.
* Loan actions do not change quotes.
* Loan actions do not change characters.
* Loan actions do not change series relation.
* Loan actions do not remove book from Reading Queue.
* Loan actions do not remove book from Custom Lists.
* Loan actions do not change delivery data.
* Loan actions do not change purchase links.
