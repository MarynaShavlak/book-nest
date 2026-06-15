# UserSocialLink Data Model

```ts
type SocialPlatform =
  | 'INSTAGRAM'
  | 'TIKTOK'
  | 'TWITTER'
  | 'THREADS'
  | 'YOUTUBE'
  | 'GOODREADS'
  | 'STORYGRAPH'
  | 'TELEGRAM'
  | 'WEBSITE'
  | 'OTHER';

type UserSocialLink = {
  id: string;
  platform: SocialPlatform;
  username?: string;
  url?: string;
  label?: string;
  createdAt: string;
  updatedAt: string;
};
```

## Rule

Each social link belongs only to current user profile.
