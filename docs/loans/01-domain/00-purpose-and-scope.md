# Purpose and Scope

## Purpose

Фіча **Позичені книги** дозволяє користувачу відстежувати книги, які він:

* взяв у когось;
* дав комусь.

Це допомагає не забувати:

* кому треба повернути книгу;
* хто має повернути книгу користувачу;
* коли очікується повернення;
* які повернення прострочені;
* які книги фізично зараз не у власника.

---

## MVP scope

У MVP входить:

* два ownership statuses:
  * `borrowed_from_someone`;
  * `lent_to_someone`;
* entity `BookLoan`;
* сторінка **Позичені книги**;
* tabs:
  * **Взяла у когось**;
  * **Дала комусь**;
* модалка **Позначити як позичену**;
* edit loan;
* mark as returned;
* search;
* filters;
* sorting;
* loan badges;
* right sidebar;
* Book Details integration;
* Book Form integration;
* My Library integration;
* Dashboard integration contract.

---

## Not included in MVP

Не входить у MVP:

* повна історія всіх позик як окрема сторінка;
* сторінка людей / контактна книга;
* автоматичні push / email reminders;
* Google Calendar integration;
* фото стану книги;
* рейтинг надійності людей;
* статистика по позиках;
* масові нагадування;
* архів повернених книг як окрема сторінка.
