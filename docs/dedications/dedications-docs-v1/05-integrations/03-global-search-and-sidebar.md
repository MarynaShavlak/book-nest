# Integration: Global Search and Sidebar

## Sidebar

Add item:

```txt
Присвяти
```

Route:

```txt
/dedications
```

Active state:

```txt
/dedications
/dedications/:dedicationId
```

---

## Global Search

Global search can include dedication results.

Result type label:

```txt
Присвята
```

Search result should show:

```txt
Book title
Author
Dedication preview
```

Click result:

- open Book Details and scroll to dedication block;
- or open `/dedications?bookId=...`;
- or open dedication modal.

Recommended MVP:

```txt
navigate to book details
```

---

## URL query support

Dedications page can support:

```txt
/dedications?filter=favorites
/dedications?search=мрія
/dedications?genre=romance
/dedications?bookId=book_123
```

This is useful for deep links from other pages.
