# Tag Color Palette

## Main idea

Tags are user-created entities, but tag colors are not fully custom in MVP.

In MVP, users can select a tag color only from the predefined BookNest tag color palette. Users cannot enter arbitrary HEX/RGB/OKLCH values and cannot use a free color picker.

This keeps the UI visually consistent, readable, theme-friendly, and aligned with the warm BookNest design system.

## Why predefined colors are used

A predefined color palette is used because:

- tags are shown in many places: Tags tab, Book Form, Book Details, My Library filters, and search results;
- random custom colors can break visual consistency;
- some custom colors can have poor contrast;
- a fixed palette is easier to support in both light and dark themes;
- tag chips/cards should feel like part of the BookNest interface, not like unrelated user-generated labels.

## Stored value

The app should not store raw color values like `#C05B3C` in the `UserTag` entity.

Instead, the app stores a semantic color key.

Recommended type:

```ts
export type TagColor =
  | "parchment"
  | "terracotta"
  | "honey"
  | "sage"
  | "forest"
  | "sky"
  | "lavender"
  | "rose";
```

Recommended `UserTag` field:

```ts
color: TagColor;
```

Default value:

```ts
color = "parchment";
```

If the user does not select a color when creating a tag, the system automatically uses `parchment`.

## Available tag colors

| UI Label | Value | Purpose |
| -------- | ----- | ------- |
| Пергамент | `parchment` | Default neutral tag color |
| Теракота | `terracotta` | Important tags, favorite tropes, strong accents |
| Медовий | `honey` | Warm, cozy, light, comforting tags |
| Шавлія | `sage` | Calm, nature, healing, soft emotional tags |
| Лісовий | `forest` | Mystery, nature, dark academia, deep themes |
| Небесний | `sky` | Sci-fi, adventure, calm, open-world feeling |
| Лаванда | `lavender` | Magic, whimsical, fantasy, soft romance |
| Пудрова троянда | `rose` | Romance, drama, emotional, relationship-focused tags |

## Tag color options

Recommended constant:

```ts
export const TAG_COLOR_OPTIONS = [
  {
    value: "parchment",
    label: "Пергамент",
    bg: "var(--tag)",
    text: "var(--tag-foreground)",
    border: "var(--border)",
  },
  {
    value: "terracotta",
    label: "Теракота",
    bg: "oklch(0.93 0.035 53.5)",
    text: "oklch(0.42 0.085 53.5)",
    border: "oklch(0.78 0.07 53.5)",
  },
  {
    value: "honey",
    label: "Медовий",
    bg: "var(--warning-soft)",
    text: "var(--warning)",
    border: "oklch(0.86 0.06 70)",
  },
  {
    value: "sage",
    label: "Шавлія",
    bg: "var(--success-soft)",
    text: "var(--success)",
    border: "oklch(0.82 0.055 145)",
  },
  {
    value: "forest",
    label: "Лісовий",
    bg: "oklch(0.91 0.032 130)",
    text: "oklch(0.36 0.07 135)",
    border: "oklch(0.76 0.06 135)",
  },
  {
    value: "sky",
    label: "Небесний",
    bg: "var(--info-soft)",
    text: "var(--info)",
    border: "oklch(0.82 0.045 250)",
  },
  {
    value: "lavender",
    label: "Лаванда",
    bg: "oklch(0.94 0.028 305)",
    text: "oklch(0.45 0.075 305)",
    border: "oklch(0.82 0.05 305)",
  },
  {
    value: "rose",
    label: "Пудрова троянда",
    bg: "var(--error-soft)",
    text: "var(--error)",
    border: "oklch(0.84 0.055 25)",
  },
] as const;
```

## UI behavior

### Add Tag modal

The Add Tag modal should show the color field as a predefined palette selector, not as a free color picker.

Recommended UI:

```text
Колір тегу

[● Пергамент] [● Теракота] [● Медовий] [● Шавлія]
[● Лісовий]   [● Небесний] [● Лаванда] [● Троянда]
```

The selected color should be visually highlighted.

If no color is selected manually, `parchment` is selected by default.

### Edit Tag modal

The Edit Tag modal should allow changing the tag color using the same predefined palette.

Changing the color of a tag should update the tag everywhere it is displayed:

- Tags tab;
- Book Form;
- Book Details;
- My Library filters;
- search/filter chips;
- any future dashboard widgets that display tags.

Changing the tag color must not affect books linked to this tag.

## Display rules

A tag chip/card should use the selected color palette option:

```ts
backgroundColor: color.bg;
color: color.text;
borderColor: color.border;
```

If a tag has no color value because it was created before this rule existed, the UI should fallback to:

```ts
color = "parchment";
```

## Validation rules

Allowed values:

```ts
const allowedTagColors = [
  "parchment",
  "terracotta",
  "honey",
  "sage",
  "forest",
  "sky",
  "lavender",
  "rose",
];
```

Validation rule:

```text
color must be one of allowedTagColors
```

Invalid or missing color values should not break the UI.

Fallback rule:

```ts
if (!color || !allowedTagColors.includes(color)) {
  color = "parchment";
}
```

## MVP rule

In MVP:

- users can choose a color from the predefined BookNest palette;
- users cannot create custom colors;
- users cannot enter HEX/RGB/OKLCH values manually;
- users cannot upload color presets;
- users cannot create different palettes;
- color is optional in the UI, but the system always stores or resolves a default color.

## Future scope

Later, the app may support a more advanced tag color system:

- custom user palettes;
- automatic color suggestions by tag type;
- separate light/dark color tuning;
- tag icons;
- color grouping;
- accessibility contrast checker.

These features are not part of MVP.
