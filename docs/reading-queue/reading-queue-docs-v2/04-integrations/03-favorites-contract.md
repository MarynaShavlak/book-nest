# Favorites Contract

## Favorites page relation

If a favorite book is added to or removed from queue, Favorites page can show updated queue badge if this UI exists.

Reading Queue actions must not change favorite state.

## What changes

- queue membership;
- queue position;
- possibly reading status after **Почати читати**.

## What does not change

- favorite flag;
- favorite added date;
- favorite filters/sorting, unless they include queue state in the future.
