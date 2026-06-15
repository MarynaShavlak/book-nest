# Settings Save Flow

## Flow

1. User changes one or more settings.
2. Frontend validates values.
3. Settings are saved for current user.
4. UI applies changed settings.
5. Settings persist after page reload.

## Error

If save fails:

- show error notification;
- do not visually pretend setting is permanently saved.
