# State Priority Rules

When rendering profile-related screens, use this priority:

1. unauthorized;
2. loading;
3. global fetch error;
4. empty profile fallback / missing profile document;
5. normal content;
6. partial section empty states.

## Examples

If profile is loading, do not show empty state.

If profile fetch failed, show error state instead of form.

If social links list is empty but profile loaded successfully, show only social links empty state.

If stats cannot be calculated, show stats fallback without blocking the whole profile page.
