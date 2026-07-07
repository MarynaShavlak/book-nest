# Future Relations

For MVP, quote is connected only to book.

Post-MVP relations can be added later.

## Character relation

A quote can be linked to a character who said it.

```ts
characterId?: string;
```

Then Character Details can show:

```text
Цитати персонажа
```

## Author relation

A quote can be linked to an author.

```ts
authorId?: string;
```

This can be useful for author-level quote archive.

## Series relation

A quote can be linked to a series.

```ts
seriesId?: string;
```

Series Details can show:

```text
Цитати з серії
```

## Notes relation

A quote can later be connected to a note.

Possible use:

```text
Цитата + власна нотатка / розбір сцени
```

## Tags for quotes

Future field:

```ts
quoteTags?: string[];
```

Examples:

- кохання;
- дружба;
- мотивація;
- болісний момент;
- красива фраза.

This is not required for MVP.
