# Block behavior

### 8.13. Block-specific behavior

#### Create mode

У create mode:

* `readingStatus` має default `not_started`;
* reading conditional blocks не показуються, поки користувач не вибере статус, який потребує додаткових полів;
* `ownershipStatus` має default `none`;
* ownership conditional blocks не показуються, поки користувач не вибере відповідний ownership status;
* `formats` відкривається порожнім;
* якщо користувач змінив статус, попередній conditional block приховується;
* у submit потрапляють тільки дані активних conditional blocks.

#### Edit mode

У edit mode:

* усі статуси відкриваються з поточними значеннями книги;
* користувач може змінити reading status;
* користувач може змінити ownership status;
* користувач може змінити формати;
* якщо зміна статусу приховує conditional block, потрібно показати confirmation modal;
* не очищати conditional data автоматично без підтвердження;
* якщо користувач переводить книгу з `in_transit` у `owned`, книга має зникнути з розділу **“Книги в дорозі”**;
* якщо користувач переводить позику в `returned`, книга має перестати бути активною у списку позичених.

---
