# Editable vs Read-only Fields

## Editable

| Field | Required | Notes |
| --- | ---: | --- |
| avatar | No | upload/remove flow |
| name | Yes | trim before save |
| lastName | Yes | trim before save |
| nickname | No | no spaces |
| dateOfBirth | No | cannot be future date |
| bio | No | max 300 chars |
| favoriteBookQuote | No | max 200 chars |
| favoriteGenres | No | max 10 |
| socialLinks | No | max 10 |

## Read-only

| Field | Reason |
| --- | --- |
| email | controlled by auth/security |
| emailVerified | controlled by auth provider |
| authProvider | controlled by auth provider |
| createdAt | system field |
| updatedAt | system field |
| profile stats | calculated automatically |

## Implementation rule

Do not allow editing read-only fields via the profile form.
