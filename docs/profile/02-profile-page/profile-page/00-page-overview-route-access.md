# Profile Page Overview, Route and Access

## Route

Recommended route:

```txt
/profile
```

## Purpose

Profile Page shows personal user information and reading overview.

## Access

Only authenticated user can open the page.

If user is not authenticated:

- redirect to login;
- do not render profile data;
- do not start protected profile queries.

## Main sections

- profile header;
- avatar / initials placeholder;
- personal info;
- favorite quote;
- favorite genres;
- social links block;
- short reading statistics;
- profile actions;
- settings/security entry points if used in layout.
