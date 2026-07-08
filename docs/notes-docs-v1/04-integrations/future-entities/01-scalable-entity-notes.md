# Scalable Entity Notes

## Purpose

Функціонал нотаток має бути побудований так, щоб у майбутньому можна було додати нотатки до нових сутностей без повного переписування фічі.

## Current entity types

- Book
- Series

## Future entity types

- Character
- Author
- Quote
- Timeline event
- Map location
- Publisher
- Genre
- Tag
- Custom list

## UI principle

Create/Edit Note Modal має приймати related entity context.

UI має вміти показати preview різних типів сутностей:

### Book preview

- cover;
- title;
- author.

### Series preview

- series visual;
- title;
- authors;
- books count.

### Character preview — future

- avatar;
- name;
- book / series;
- role.

### Author preview — future

- name;
- books count;
- favorite status.

## Product rule

Нотатка має бути прив’язана до однієї основної сутності.

Не потрібно в MVP робити одну нотатку одночасно до книги і персонажа.

У майбутньому можна додати secondary relations, але це окрема фіча.

## Navigation rule

На загальній сторінці `Нотатки` action має залежати від типу сутності:

- До книги
- До серії
- До персонажа
- До автора
- До цитати

## Filtering rule

Сторінка `Нотатки` має мати фільтр за типом сутності.

У MVP:

- Усі
- Книги
- Серії

У майбутньому додати нові типи.
