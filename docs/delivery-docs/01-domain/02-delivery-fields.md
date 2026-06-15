# Delivery Fields

## MVP fields

| Field | Required | Description |
| --- | --- | --- |
| `storeName` | yes | Store where the book was ordered. |
| `orderDate` | yes | Date when the order was created. |
| `expectedDeliveryDate` | no | Expected delivery date. |
| `orderNumber` | no | Store/order number. |
| `trackingUrl` | no | Link to order or tracking page. |
| `price` | no | Book/order price. |
| `currency` | no | Default `UAH`. |
| `deliveryService` | no | Delivery carrier/service. |
| `customDeliveryService` | no | Used when service is `other`. |
| `trackingNumber` | no | TTN / tracking number. |
| `note` | no | User note. |
| `cancelReason` | no | Only for cancelled records. |
| `status` | yes | Stored delivery status. |

## Delivery service options

```ts
export const deliveryServices = [
  { value: "nova_poshta", label: "Нова пошта" },
  { value: "ukrposhta", label: "Укрпошта" },
  { value: "meest", label: "Meest" },
  { value: "dhl", label: "DHL" },
  { value: "amazon_delivery", label: "Amazon Delivery" },
  { value: "other", label: "Інше" },
] as const;
```

If `deliveryService = "other"`, the UI may show `customDeliveryService`.

## Currency options

```ts
export const currencies = [
  { value: "UAH", label: "грн" },
  { value: "USD", label: "$" },
  { value: "EUR", label: "€" },
] as const;
```

Default currency:

```text
UAH
```

## Important distinction

`orderNumber` and `trackingNumber` are different fields.

Example:

```text
orderNumber = 482915
trackingNumber = 20450780123456
```
