# Start Reading Logic

Після підтвердження:

1. reading status книги змінюється на `reading`;
2. книга з’являється на Dashboard у блоці **Читаю зараз**;
3. якщо checkbox увімкнений, книга прибирається з черги;
4. якщо checkbox вимкнений, книга залишається в черзі з badge **Читаю зараз**;
5. UI сторінки оновлюється.

### If checkbox is checked

```text
readingStatus → reading
book removed from queue
positions recalculated
```

### If checkbox is unchecked

```text
readingStatus → reading
book stays in queue
item shows badge “Читаю зараз”
```

Recommended default:

```text
Прибрати книгу з черги після початку читання = checked
```

Reason:

Черга — це план того, що читати далі. Якщо книга вже почата, найчастіше її потрібно прибрати з плану наступних книг.

---
