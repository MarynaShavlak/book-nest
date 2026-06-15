# Cross-feature update matrix

Цей файл описує, які зміни на сторінці **Моя бібліотека** мають оновлювати інші частини застосунку.

| Дія | Що оновити на My Library | Що може оновитися в інших модулях |
|---|---|---|
| Add book | список книг, summary cards, pagination | Dashboard, Statistics, Authors, Genres |
| Edit book | card/list row, filters, sorting, summary | Book Details, Series, Custom Lists |
| Delete book | список, counters, empty/no results states | Favorites, Custom Lists, Reading Queue, Series |
| Change reading status | card badge, quick filters, summary | Dashboard, Goals, Calendar, Series progress |
| Change ownership status | ownership badge, quick filters, summary | Delivery, Books to Buy, Loaned Books |
| Add/remove favorite | card action state | Favorites Page, Dashboard summary |
| Add to custom list | no visual change required except toast | Custom Lists module |
| Add to reading queue | card action state if shown | Reading Queue module |
| Bulk update | selected rows, counters, filters, state priority | Depends on selected bulk action |

Основне правило: після будь-якої дії My Library не має показувати stale state.
