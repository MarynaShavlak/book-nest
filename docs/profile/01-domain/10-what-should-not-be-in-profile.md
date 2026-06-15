# What Should Not Be in Profile

## Not profile data

The following should not be stored as `UserProfile` fields:

- theme mode;
- accent color;
- interface language;
- date format;
- week start day;
- default library view mode;
- email notification preferences;
- confirm before delete.

These belong to `UserProfileSettings`.

## Not MVP

Do not add to MVP profile:

- public followers;
- profile comments;
- public activity feed;
- book clubs;
- profile privacy levels;
- account deletion;
- email change flow.

## Rule

Keep `UserProfile` focused on personal reading identity, not full application preferences.
