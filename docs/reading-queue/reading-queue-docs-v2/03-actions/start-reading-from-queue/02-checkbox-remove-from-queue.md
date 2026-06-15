# Checkbox: Remove from Queue After Start

## Checkbox label

```text
Прибрати книгу з черги після початку читання
```

Default:

```text
checked = true
```

## If checked

```text
readingStatus → reading
book removed from queue
positions recalculated
```

## If unchecked

```text
readingStatus → reading
book stays in queue
item shows badge “Читаю зараз”
```

## Reason for checked by default

Черга — це план того, що читати далі. Якщо книга вже почата, найчастіше її потрібно прибрати з плану наступних книг.
