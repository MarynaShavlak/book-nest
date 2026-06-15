# Calculated Delivery UI Status

Calculated UI status is used for badges, filters, summary cards, and donut chart segments.

It must not be persisted as `delivery.status`.

## Type

```ts
type DeliveryUiStatus = "arriving_soon" | "delayed" | "no_delivery_date";
```

## Recommended helper

```ts
export const getDeliveryUiStatus = (
  expectedDeliveryDate?: string | null,
): DeliveryUiStatus | null => {
  if (!expectedDeliveryDate) return "no_delivery_date";

  const today = new Date();
  const expectedDate = new Date(expectedDeliveryDate);

  today.setHours(0, 0, 0, 0);
  expectedDate.setHours(0, 0, 0, 0);

  const diffInMs = expectedDate.getTime() - today.getTime();
  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays < 0) return "delayed";
  if (diffInDays <= 7) return "arriving_soon";

  return null;
};
```

## Rules

| Condition | UI status |
| --- | --- |
| `expectedDeliveryDate` is empty | `no_delivery_date` |
| `expectedDeliveryDate < today` | `delayed` |
| `expectedDeliveryDate` is today or within next 7 days | `arriving_soon` |
| `expectedDeliveryDate` is more than 7 days away | `null` |

## Badge priority

Use this priority for active records:

```text
1. delayed
2. arriving_soon
3. no_delivery_date
4. stored delivery.status
```

Example:

If `delivery.status = "ordered"`, but `expectedDeliveryDate` was yesterday, show:

```text
Затримується
```
