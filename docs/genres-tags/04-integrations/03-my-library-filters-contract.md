# My Library Filters Contract

## Required filters

My Library should support filtering by:

```text
Genre
Tag
```

## Genre filter

Source:

```text
Predefined genres used by user's books
```

Query example:

```text
/my-library?genre=fantasy
```

## Tag filter

Source:

```text
Current user's UserTag records
```

Query example:

```text
/my-library?tagId=tag_123
```

## Results

Filtering by genre/tag should not change book data.

It only narrows visible books in library.
