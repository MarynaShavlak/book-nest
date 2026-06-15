# Access and User Scope

## Page access

Reading Queue Page is available only to an authenticated user.

If the user is not authenticated:

```text
redirect to login page
```

## Data scope

The user can see only their own queue items.

Do not display:

- books from other users;
- deleted books;
- books that are not in the queue;
- queue items owned by another user.

## Book Details action availability

Action **Додати в чергу читання** is available if:

- the book belongs to the current user;
- the book is not deleted;
- the book is not already in the queue.

The action is not blocked by reading status or ownership status.

Reason:

```text
Черга читання — це план користувача, а не автоматична залежність від статусів.
```
