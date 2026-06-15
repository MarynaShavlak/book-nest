# My Library documentation v2

Це перероблена структура документації для сторінки **Моя бібліотека**.

Стара документація була в одному великому файлі `my-library-page.md`, через що Claude Code міг втрачати контекст під час реалізації.

## Що змінилося

- Було: 1 markdown-файл.
- Старий файл мав приблизно **2494 рядків**.
- Стало: **223 markdown-файлів**.
- Найбільший змістовий файл: `01-domain/04-library-query-and-result-rules.md` — **137 рядків**. Технічний `FILE_TREE.md` має **254 рядки**.

## Як користуватися

Не передавай Claude Code всю документацію одразу. Для конкретної задачі бери:

1. `00-module-map.md`;
2. 1–2 domain-файли з `01-domain/`;
3. конкретну секцію сторінки з `02-pages/my-library-page/` або action з `03-actions/`;
4. shared-файл зі станами, filters/sorting або pagination, якщо треба.

## Основні папки

- `01-domain/` — правила даних, inclusion, URL state, summaries, actions availability;
- `02-pages/` — UI секції сторінки My Library;
- `03-actions/` — book card actions і bulk actions;
- `04-integrations/` — контракти з іншими модулями;
- `05-shared/` — shared filters, sorting, states, pagination, acceptance criteria.
