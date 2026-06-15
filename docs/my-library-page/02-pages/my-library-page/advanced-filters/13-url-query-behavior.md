### 7.13. URL query behavior

Advanced filters мають зберігатися в URL query params.

Examples:

```text
/library?readingStatus=reading
/library?ownershipStatus=in_transit
/library?format=ebook
/library?genreIds=fantasy,romance
/library?tagIds=slow-burn,dark-academia
/library?authorId=author_123
/library?publisherId=publisher_456
/library?bookType=series_part
/library?ratingFrom=4
/library?publicationYearFrom=2020&publicationYearTo=2026
/library?pagesCountFrom=300&pagesCountTo=700
/library?cover=without_cover
```

Після reload сторінки вибрані фільтри мають відновлюватися з URL.

---
