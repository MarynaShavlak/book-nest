# Master Acceptance Criteria

## Domain

- Delivery records store only `ordered`, `in_transit`, `received`, `cancelled` as status.
- UI statuses `arriving_soon`, `delayed`, `no_delivery_date` are calculated.
- Only one active delivery record exists per book.
- User can access only own delivery records.

## Actions

- Mark as In Transit creates delivery and sets book ownership to `in_transit`.
- Edit Delivery updates only active delivery fields.
- Mark as Received sets book ownership to `owned` and delivery status to `received`.
- Cancel Delivery sets delivery status to `cancelled` and moves book to `want_to_buy` or `none`.
- Bulk receive actions require confirmation.

## Pages

- Books in Transit shows only active deliveries.
- Order History shows all delivery records.
- Expense Statistics uses only delivery records with price.
- Cancelled orders are excluded from main spending total by default.

## Validation

- `storeName` and `orderDate` are required.
- `orderDate` cannot be in the future.
- `expectedDeliveryDate` cannot be earlier than `orderDate`.
- URL and price validation are applied consistently.
- Text max lengths are respected.

## Cross-feature updates

- Related pages update after every delivery action.
- Received and cancelled records remain in history.
- Delivery actions do not change unrelated book data.

## States

- Loading, empty, empty-filtered, error, and responsive states are implemented for all pages.
