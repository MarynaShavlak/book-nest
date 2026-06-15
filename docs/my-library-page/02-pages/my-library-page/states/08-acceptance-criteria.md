### 14.8. Acceptance Criteria

* Під час завантаження користувач бачить loading state.
* Empty library state показується тільки якщо в користувача немає активних книг.
* Empty library state має action **+ Додати книгу**.
* No search results state показується, якщо search активний і результатів немає.
* No search results state має action **Очистити пошук**.
* No filtered results state показується, якщо filters активні і результатів немає.
* No filtered results state має actions **Очистити фільтри** і **Очистити все**.
* Error state показується, якщо дані не вдалося завантажити.
* Error state має action **Спробувати ще раз**.
* Loading, empty, no results і error states не конфліктують між собою.
