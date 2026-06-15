# Default Settings

```ts
const defaultUserProfileSettings = {
  themeMode: 'system',
  accentColor: 'brown',
  language: 'uk',

  dateFormat: 'DD.MM.YYYY',
  weekStartDay: 'monday',
  timezone: 'Europe/Kyiv',

  libraryViewMode: 'grid',
  confirmBeforeDelete: true,

  emailNotifications: {
    readingReminders: false,
    readingGoalReminders: false,
    borrowedBookReminders: true,
    deliveryReminders: true,
    weeklyReadingSummary: false,
    monthlyReadingReport: false,
  },
};
```

## Rule

If user has no settings document yet, use defaults and create settings on first save.
