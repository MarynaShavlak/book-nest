# Edge Cases

## Long dedication

Given dedication is longer than 1000 characters  
Then card shows truncated preview  
And modal shows full text.

---

## Book without cover

Given book has no cover  
Then dedication card shows default cover placeholder.

---

## Book without author

Given book has no author  
Then card shows:

```txt
Автор невідомий
```

---

## Deleted book

Given book was deleted  
Then its dedication is not displayed.

---

## Favorite dedication after text removal

Given dedication is favorite  
When user removes dedication text in Edit Book form  
Then dedication disappears from page  
And favorite flag can be reset.

---

## Clipboard unavailable

Given browser blocks clipboard  
When user clicks copy  
Then show error toast:

```txt
Не вдалося скопіювати присвяту
```

---

## No matching filters

Given filters return zero results  
Then no-results state is shown  
And user can clear filters.
