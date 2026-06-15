# Create / Edit Book Form Docs v2

Це перероблена структура документації для форми створення нової книги та редагування існуючої книги.

Стара документація була в одному файлі `new-book(2).md`, де разом зберігалися create/edit behavior, submit flow, shared rules, preview behavior, 7 великих блоків форми, conditional data, інтеграції з серіями, доставкою, позиками, списками, улюбленими та обкладинкою.

Нова структура розділяє документацію на маленькі логічні файли, щоб Claude Code міг відкривати тільки потрібний контекст.

## Як користуватися

1. Починай з `00-module-map.md`.
2. Для реалізації конкретного блоку форми відкривай тільки відповідну папку в `03-form-blocks/`.
3. Для submit / create / edit логіки відкривай `04-actions/`.
4. Для звʼязків з іншими модулями відкривай `05-integrations/`.
5. Старий файл `new-book(2).md` не потрібно давати Claude Code разом із цією структурою.

## Key context packs

### Basic form shell

```text
00-module-map.md
01-domain/01-form-modes-create-edit.md
01-domain/02-submit-flow.md
02-form-shell/
```

### Status block

```text
00-module-map.md
03-form-blocks/03-status/
05-integrations/06-delivery-contract.md
05-integrations/07-loan-contract.md
05-integrations/08-purchase-contract.md
```

### Series block

```text
00-module-map.md
03-form-blocks/04-book-type-series/
05-integrations/05-series-contract.md
```

### Cover upload

```text
00-module-map.md
03-form-blocks/07-cover/
04-actions/upload-replace-remove-cover/
```
