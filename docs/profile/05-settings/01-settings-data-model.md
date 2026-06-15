# UserProfileSettings Data Model

```ts
type ThemeMode = 'light' | 'dark' | 'system';

type AccentColor =
  | 'brown'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'purple';

type InterfaceLanguage = 'uk' | 'en';

type DateFormat =
  | 'DD.MM.YYYY'
  | 'MM/DD/YYYY'
  | 'YYYY-MM-DD';

type WeekStartDay = 'monday' | 'sunday';

type LibraryViewMode = 'grid' | 'list';

type UserProfileSettings = {
  userId: string;

  themeMode: ThemeMode;
  accentColor: AccentColor;
  language: InterfaceLanguage;

  dateFormat: DateFormat;
  weekStartDay: WeekStartDay;
  timezone: string;

  libraryViewMode: LibraryViewMode;
  confirmBeforeDelete: boolean;

  emailNotifications: UserEmailNotificationSettings;

  createdAt: string;
  updatedAt: string;
};
```
