# Delivery Domain: Purpose and Scope

## Purpose

The Delivery module tracks books that the user ordered and has not received yet.

It supports the lifecycle:

```text
want_to_buy / none → in_transit → owned
```

It also keeps historical records for received and cancelled orders.

## In MVP scope

- create delivery record when a book is marked as in transit;
- edit active delivery info;
- mark one or many active deliveries as received;
- cancel an active delivery;
- list active deliveries;
- show order history;
- show delivery expense statistics;
- support delivery fields in Book Form;
- support action from Books to Buy page.

## Not in MVP scope

- automatic tracking through carrier APIs;
- payment tracking;
- refunds;
- real-time shipping updates;
- multiple packages for one book;
- one order containing many books;
- currency conversion;
- shop integrations.

## Main user-facing pages

| Page | Route | Purpose |
| --- | --- | --- |
| Books in Transit | `/delivery/in-transit` | Active deliveries only. |
| Delivery Order History | `/delivery/history` | All delivery records. |
| Delivery Expense Statistics | `/delivery/statistics` | Spending analytics for delivery records with price. |
