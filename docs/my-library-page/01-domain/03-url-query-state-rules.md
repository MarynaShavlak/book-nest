# URL query state rules

Цей файл є коротким індексом URL query state для сторінки **Моя бібліотека**.

## Query params, які можуть бути потрібні

```text
q          — search query
status     — reading status filter
owner      — ownership status filter
format     — book format filter
genre      — genre filter
tag        — tag filter
author     — author filter
publisher  — publisher filter
sort       — selected sorting option
view       — grid або list
page/cursor — pagination або load more state
```

## Детальні правила

Детальні source sections винесені в `01-domain/url-query-rules/`.

Claude Code зазвичай потребує тільки один із цих файлів, залежно від задачі.
