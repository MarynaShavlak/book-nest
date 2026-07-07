# Functional Test Cases

## Page visibility

### TC-001: User opens Dedications page

Given user is authenticated  
When user opens `/dedications`  
Then page title `Присвяти` is visible.

---

### TC-002: Only books with dedication are shown

Given user has books with and without `authorDedication`  
When page loads  
Then only books with non-empty dedication are displayed.

---

### TC-003: Empty dedication is ignored

Given book has `authorDedication = "   "`  
When page loads  
Then this book is not displayed.

---

## Search

### TC-004: Search by dedication text

Given dedication contains word `мрія`  
When user searches `мрія`  
Then matching card is displayed.

### TC-005: Search by book title

Given book title is `Один світанок влітку`  
When user searches `світанок`  
Then matching card is displayed.

### TC-006: Search by author

Given author is `Шарі Лоу`  
When user searches `Шарі`  
Then matching card is displayed.

---

## Filters

### TC-007: Favorites filter

Given some dedications are favorite  
When user selects `Улюблені`  
Then only favorite dedications are displayed.

### TC-008: Finished filter

Given some books are finished  
When user selects `Прочитані`  
Then only dedications from finished books are displayed.

### TC-009: Unfinished filter

Given some books are not finished  
When user selects `Непрочитані`  
Then only dedications from unfinished books are displayed.

---

## Actions

### TC-010: Copy dedication

Given dedication card is visible  
When user clicks copy  
Then dedication text is copied  
And success toast is shown.

### TC-011: Favorite dedication

Given dedication is not favorite  
When user clicks heart  
Then dedication becomes favorite  
And filled heart is shown.

### TC-012: Open book

Given dedication card is visible  
When user clicks book action  
Then user navigates to book details.


### TC-014: Favorite dedication does not favorite book

Given book is not favorite  
And book has a dedication  
When user marks dedication as favorite  
Then `isFavoriteDedication` becomes `true`  
And `isFavorite` remains `false`  
And the book does not appear in favorite books only because of the dedication.

---

### TC-015: Favorite book does not favorite dedication

Given book has a dedication  
And dedication is not favorite  
When user marks book as favorite  
Then `isFavorite` becomes `true`  
And `isFavoriteDedication` remains `false`  
And the dedication does not appear in “Улюблені присвяти”.

---

### TC-016: Both favorite states can coexist

Given book has a dedication  
When user marks both book and dedication as favorite  
Then `isFavorite === true`  
And `isFavoriteDedication === true`  
And book appears in favorite books  
And dedication appears in favorite dedications.
