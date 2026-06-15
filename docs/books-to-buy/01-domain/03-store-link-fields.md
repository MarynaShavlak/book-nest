# Store Link Fields

## Store name

Label:

```text
Магазин
```

Required: yes.

Rules:

- select / autocomplete / custom value;
- trim spaces;
- max 100 symbols;
- if `Інше` is selected, allow custom store name.

Recommended options:

```ts
export const bookStores = [
  { value: "yakaboo", label: "Yakaboo" },
  { value: "knyharnia_ye", label: "Книгарня Є" },
  { value: "ksd", label: "КСД" },
  { value: "vivat", label: "Vivat" },
  { value: "nash_format", label: "Наш Формат" },
  { value: "bookchef", label: "BookChef" },
  { value: "laboratory", label: "Лабораторія" },
  { value: "amazon", label: "Amazon" },
  { value: "other", label: "Інше" },
] as const;
```

## URL

Label:

```text
Посилання
```

Required: yes.

Rules:

- must be a valid URL;
- opens in new tab from book row;
- belongs only to current user.

## Price

Label:

```text
Ціна
```

Required: no.

Rules:

- number if filled;
- cannot be negative;
- can be `0` only if intentionally allowed, but normal UI should treat empty as unknown price.

## Currency

Default:

```text
UAH
```

Options:

```ts
export const currencies = [
  { value: "UAH", label: "грн" },
  { value: "USD", label: "$" },
  { value: "EUR", label: "€" },
] as const;
```

If price exists and currency is empty, use `UAH`.

Do not auto-convert currencies in MVP.
