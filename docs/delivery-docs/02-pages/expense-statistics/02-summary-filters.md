# Expense Statistics: Summary and Filters

## Summary cards

Recommended cards:

| Card | Calculation |
| --- | --- |
| Загальна сума | sum active + received, excluding cancelled by default |
| Активні замовлення | sum `ordered` + `in_transit` |
| Отримані замовлення | sum `received` |
| Скасовані замовлення | sum `cancelled`, shown separately |
| Середня ціна | average of included records |
| Замовлень з ціною | count records with price |

## Filters

Recommended filters:

```text
Period
Status
Store
Currency
Include cancelled orders
```

## Include cancelled toggle

Label:

```text
Включити скасовані замовлення
```

Default:

```text
off
```

When enabled, cancelled orders are included in main total and charts.
