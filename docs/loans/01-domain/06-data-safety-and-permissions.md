# Data Safety and Permissions

## Permissions

Rules:

* user can see only own loan records;
* user can create loan only for own books;
* user can edit only own active loan records;
* user can mark returned only own loan records;
* if loan does not belong to current user, show safe error.

Safe errors:

```text
Позику не знайдено
Книгу не знайдено
```

---

## Data safety

Loan actions must not change:

```text
title
author
cover
description
readingStatus
formats
rating
progress
notes
quotes
characters
series relation
reading queue state
custom lists
favorite state
delivery data
purchase links
```

Loan actions can change:

```text
ownershipStatus
BookLoan record
```

---

## User data privacy

Loan records can contain private names and contacts.

Do not expose:

* personName;
* contact;
* notes;
* loan dates;
* reminder settings;
* another user's loan data.
