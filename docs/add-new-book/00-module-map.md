# Module map

## Module purpose

Форма Create / Edit Book відповідає за створення нового запису книги в BookNest або оновлення вже існуючої книги.

## Main responsibilities

- create mode і edit mode;
- submit flow;
- shared normalization / validation;
- basic information;
- classification;
- reading / ownership / format statuses;
- book type and series relation;
- edition details;
- library organization;
- book cover;
- preview panel;
- integration contracts з іншими модулями.

## Directory responsibilities

| Folder | Responsibility |
| ------ | -------------- |
| `01-domain/` | Загальні правила, які впливають на всю форму |
| `02-form-shell/` | Route, layout, create/edit behavior, submit shell, preview shell |
| `03-form-blocks/` | Окремі блоки форми |
| `04-actions/` | Submit/create/edit/actions навколо форми |
| `05-integrations/` | Контракти з іншими модулями BookNest |
| `06-shared/` | Повторювані правила для UI, validation, states, accessibility |

## Form blocks

1. Basic Information
2. Classification
3. Status
4. Book Type / Series
5. Edition Details
6. Library Organization
7. Book Cover
