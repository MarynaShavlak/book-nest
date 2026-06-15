# UserProfile Data Model

## Type

```ts
type AuthProvider = 'PASSWORD' | 'GOOGLE' | 'APPLE';

type UserProfile = {
  userId: string;

  name: string;
  lastName: string;
  email: string;
  emailVerified: boolean;

  nickname?: string;
  bio?: string;
  avatarUrl?: string;

  dateOfBirth?: string | null;
  favoriteBookQuote?: string;
  favoriteGenres: string[];

  socialLinks: UserSocialLink[];

  authProvider: AuthProvider;

  createdAt: string;
  updatedAt: string;
};
```

## Notes

- `userId` привʼязує профіль до поточного користувача.
- `email` приходить з auth layer і є read-only.
- `dateOfBirth` не є обовʼязковим.
- `favoriteGenres` за замовчуванням порожній масив.
- `socialLinks` за замовчуванням порожній масив.
- `authProvider` потрібен для security logic.
