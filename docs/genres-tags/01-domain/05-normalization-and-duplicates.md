# Normalization and Duplicate Rules

## Purpose

Normalization prevents duplicates like:

```text
Slow Burn
slow burn
 slow burn 
SLOW BURN
```

## Normalized name

Recommended function:

```ts
export const normalizeTagName = (name: string) =>
  name.trim().toLowerCase().replace(/\s+/g, " ");
```

## Duplicate rule

User cannot create two tags with the same normalized name.

Check:

```ts
tag.userId === currentUser.id && tag.normalizedName === normalizeTagName(input)
```

Error:

```text
Такий тег уже існує
```

## Display rule

Store and display original user-entered name:

```ts
name = "Slow Burn"
normalizedName = "slow burn"
```

## Merge duplicates

Merge duplicates is not included in MVP.

Future flow:

```text
Select duplicate tags → choose main tag → move all book relations → delete duplicates
```
