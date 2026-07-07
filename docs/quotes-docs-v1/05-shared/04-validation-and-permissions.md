# Validation and Permissions

## Permissions

User can only read, create, update and delete their own quotes.

All quote queries must be scoped by:

```ts
userId
```

## Required validation

Quote text is required.

```ts
text.trim().length > 0
```

## Max lengths

Recommended limits:

```ts
text: 1000
comment: 500
chapter: 80
```

## Page validation

If page is provided:

```ts
Number.isInteger(page) && page > 0
```

If book has page count:

```ts
page <= book.pages
```

## Spoiler validation

`isSpoiler` must be boolean.

Default:

```ts
false
```

## Favorite validation

`isFavorite` must be boolean.

Default:

```ts
false
```

## Delete permissions

Only quote owner can delete quote.

## Book deletion

If book is deleted, quotes should not remain visible as broken records.

Recommended behaviour:

- cascade delete quotes; or
- cleanup quotes in delete book flow.
