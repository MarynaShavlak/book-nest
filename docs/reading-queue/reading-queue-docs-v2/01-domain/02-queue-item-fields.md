# Queue Item Fields

## Queue item on page

Each queue item should display:

| Element | Required | Description |
| --- | ---: | --- |
| Drag handle | Так | Element for reordering |
| Position | Так | Number in queue |
| Cover | Так | Cover or placeholder |
| Title | Так | Book title |
| Author | Так | Book author |
| Reading status | Так | Current reading status |
| Ownership status | Так | Current ownership status |
| Series info | Ні | If book belongs to a series |
| Pages count | Ні | If available |
| Start reading | Так | Primary item action |
| View book | Так | Opens Book Details |
| More actions | Так | Contains remove from queue |

## Recommended item layout

```text
[drag] [position] [cover] [book info] [meta info] [actions]
```

## Book info

- title;
- author;
- reading status badge;
- ownership status badge;
- genre/tag chips;
- series info, якщо є.

## Meta info

- pages count;
- optional estimated reading time, only if this logic already exists.

## More actions

```text
Прибрати з черги
```
