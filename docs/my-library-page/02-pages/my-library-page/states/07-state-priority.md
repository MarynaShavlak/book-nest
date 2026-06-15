### 14.7. State priority

Якщо одночасно можливі кілька states, застосовується такий порядок:

```text
1. Loading
2. Error
3. Empty library
4. No search results
5. No filtered results
6. Default books list
```

Important:

* loading має найвищий пріоритет;
* empty library показується тільки коли в користувача взагалі немає активних книг;
* no search results і no filtered results показуються тільки тоді, коли бібліотека не порожня.

---
