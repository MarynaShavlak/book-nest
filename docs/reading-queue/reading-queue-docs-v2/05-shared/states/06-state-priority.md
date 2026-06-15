# State Priority

Якщо одночасно можливі кілька states, застосовується такий порядок:

```text
1. Loading
2. Error
3. Empty queue
4. No search results
5. Default queue list
```

Important:

* loading має найвищий пріоритет;
* empty queue показується тільки коли в черзі немає жодної книги;
* no search results показується тільки тоді, коли черга не порожня.

---
