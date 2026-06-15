# Mark Book as In Transit: Entry and Visibility

## Entry points

```text
Book Details Page
Books to Buy Page
My Library Page
Create / Edit Book Form
```

## Show action when

```ts
book.ownershipStatus === "want_to_buy" ||
book.ownershipStatus === "none"
```

## Do not show action when

```text
book.ownershipStatus = in_transit
book.ownershipStatus = owned
book.ownershipStatus = borrowed_from_someone
book.ownershipStatus = lent_to_someone
```

## Duplicate protection

Before opening or submitting, check whether active delivery already exists.

If active delivery exists:

```text
This book is already in transit.
```

Offer:

```text
Edit delivery info
Go to Books in Transit
```
