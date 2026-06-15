# Remove from Queue on Reading Queue Page

Користувач може прибрати книгу з черги через More actions menu.

Action label:

```text
Прибрати з черги
```

Behavior:

* книга видаляється тільки з черги;
* книга залишається в бібліотеці;
* reading status не змінюється;
* ownership status не змінюється;
* format не змінюється;
* позиції інших книг перераховуються.

Confirmation modal для MVP не потрібна.

Reason:

```text
Це не destructive action, бо книга не видаляється з бібліотеки.
```

---
