# Book Details Series Block Contract

## Purpose

This file defines the minimum contract between Book Details Page and the Series module.

## Visibility

Show the Series block on Book Details Page only when the book has a series relation.

## Required data

| Field | Required | Purpose |
|---|---:|---|
| `seriesId` | yes | Link to Series Details Page. |
| `seriesTitle` | yes | Display title. |
| `partNumber` | yes for new data | Display book position in series. |
| `seriesStatus` | optional | Status badge if available. |
| `seriesProgress` | optional | Compact progress preview. |
| `nextBook` | optional | Continue-series hint. |

## Actions

- Open Series Details Page.
- Remove book from series, using `03-actions/remove-unlink-book-from-series/`.
- Edit book series relation through Book Form, using `04-integrations/book-form-series-section/`.

## Data safety

Book Details Page should not implement its own series mutation logic. It should call shared Series module actions or helpers.
