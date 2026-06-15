# Master Acceptance Criteria

## General

- User can open **Жанри / Теги** page.
- Page has tabs **Жанри** and **Теги**.
- Genres and tags are not mixed into one list.
- Genres are predefined.
- Tags are created manually by user.
- No predefined tags are shown.
- User sees only own tags.

## Genres

- User can select genres in Book Form.
- User cannot create custom genre in MVP.
- Genres tab shows genres used by user's books.
- Genre card shows books count.
- Genre card can show read count, queue count and cover previews.
- Clicking genre opens My Library filtered by genre.

## Tags

- User can create tag manually.
- User can select own tags in Book Form.
- If user has no tags, tag autocomplete is empty and offers create action.
- Tags tab shows current user's tags only.
- Tag item shows name, type and books count.
- User can edit own tag.
- User can delete own tag.
- Clicking tag opens My Library filtered by tag.

## Add Tag

- Add Tag modal has name field.
- Name is required.
- Duplicate normalized tag name is blocked per user.
- Type is optional and defaults to custom.
- Created tag appears in Tags tab.
- Created tag appears in Book Form autocomplete.

## Edit Tag

- User can edit own tag name/type/description/color.
- User cannot edit another user's tag.
- Renamed tag updates everywhere.
- Duplicate normalized name is blocked.

## Delete Tag

- User can delete own tag.
- If tag is used, confirmation explains it will be removed from books.
- Deleting tag does not delete books.
- Deleted tag disappears from autocomplete and filters.

## Search / Filters / Sorting

- User can search genres by name.
- User can search own tags by name.
- User can filter genres.
- User can filter tags by type and usage.
- User can sort by name and books count.

## Integrations

- Book Form has Genres field.
- Book Form has Tags field.
- Book Details shows selected genres and tags.
- My Library supports genre filter.
- My Library supports tag filter.
- Dashboard / Statistics can use aggregated data.

## States

- Loading state exists.
- Empty genres/tags state exists.
- Empty tags state explains that user must create tags manually.
- Empty filtered state exists.
- Error state exists.

## Data safety

- Genre/tag actions do not delete books.
- Genre/tag actions do not change readingStatus.
- Genre/tag actions do not change ownershipStatus.
- Genre/tag actions do not change delivery data.
- Genre/tag actions do not change loan data.
- Genre/tag actions do not remove books from Reading Queue.
- Genre/tag actions do not remove books from Custom Lists.
- Genre/tag actions do not delete notes, quotes or characters.

## Scope

- Predefined genres are included in MVP.
- User-created tags are included in MVP.
- Predefined tags are not included.
- Custom genres are not included.
- Detailed genre/tag pages are not included.
- Merge duplicate tags is not included.
