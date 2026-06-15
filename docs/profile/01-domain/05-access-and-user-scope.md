# Access and User Scope

## Current user only

Profile data belongs only to the authenticated user.

A user can:

- view own profile;
- edit own profile;
- manage own social links;
- manage own settings.

## Not allowed

A user must not:

- view private profile data of another user;
- edit another user's profile;
- read another user's settings;
- modify another user's social links.

## Auth requirement

Profile routes require authentication.

If user is not authenticated:

- redirect to login;
- do not fetch profile data;
- do not show partial private data.

## Data queries

Every profile query must be scoped by `userId`.
