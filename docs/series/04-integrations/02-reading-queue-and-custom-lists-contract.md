# Reading Queue and Custom Lists Contract

## Reading Queue

A book can be in the reading queue independently from its series relation.

Series module may suggest adding the next book to the reading queue, but removing a series relation must not automatically remove the book from the queue unless the user explicitly chooses that behavior.

## Custom Lists

Custom lists store books independently from series relation.

Deleting a series or unlinking a book from a series should not remove the book from custom lists.

## Favorites

Favorite state belongs to the book, not the series relation.
