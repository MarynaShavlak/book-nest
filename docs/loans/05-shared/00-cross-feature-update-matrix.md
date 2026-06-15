# Cross Feature Update Matrix

| Action | Borrowed Books Page | Book Details | My Library | Dashboard |
| ------ | ------------------- | ------------ | ---------- | --------- |
| Create loan | add row | show loan block | update badge | update widget |
| Edit loan | update row | update block | update badge if needed | update widget |
| Mark returned | remove active row | update block | update ownership | update widget |
| Change ownership in Book Form | update list | update status | update filters | update widget |

---

## Create loan updates

After creating loan:

* correct tab receives new record;
* Book Details shows Loan Block;
* My Library shows loan badge;
* Dashboard summary updates.

---

## Edit loan updates

After editing loan:

* current row updates;
* badge recalculates;
* due dates and reminders update;
* filters/sorting can move row.

---

## Mark returned updates

After completing loan:

* row disappears from active loans;
* ownership status updates;
* returned loan is preserved;
* summary cards recalculate.
