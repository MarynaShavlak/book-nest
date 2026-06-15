# Summary Calculation Rules

## Genres count

```ts
count(unique genres used in current user's books)
```

## Tags count

```ts
count(UserTag where userId = currentUser.id)
```

## Books with genres

```ts
count(books where genres.length > 0)
```

## Books with tags

```ts
count(books where tagIds.length > 0)
```

## Genre books count

```ts
count(books where book.genres includes genre.value)
```

## Tag books count

```ts
count(books where book.tagIds includes tag.id)
```

## Last used at

Update `UserTag.lastUsedAt` when tag is added to a book or when book with this tag is saved.
