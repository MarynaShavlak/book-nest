# Route and entry points

- Create mode can be opened from My Library, Dashboard empty state, Reading Queue, Custom Lists, Series, Books to Buy and other feature pages.
- Edit mode is usually opened from Book Details or a book card action menu.
- The same form component can serve both modes if initial values and submit action are mode-aware.
- After successful create, navigation should usually go to Book Details or My Library.
- After successful edit, the user should stay on the current context or return to Book Details.
