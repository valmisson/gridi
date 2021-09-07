---
sidebarDepth: 2
---

# Gap

Utilities for controlling gutters between grid and flexbox items.

| Class        | Properties        |
| :----------- | :---------------- |
| gap-{0-16}   | gap: {0 - 6rem}; |
| gap-x-{0-16} | column-gap: {0 - 6rem};; |
| gap-y-{0-16} | row-gap: {0 - 6rem};;    |

## Usage

Use `gap-{size}` to change the gap between both rows and columns in grid and flexbox layouts.

```html
<div class="grid gap-4 grid-cols-2">
  <!-- ... -->
</div>
```

## Changing row and column gaps independently

Use `gap-x-{size}` and `gap-y-{size}` to change the gap between rows and columns independently.

```html
<div class="grid gap-x-8 gap-y-4 grid-cols-3">
  <!-- ... -->
</div>
```

## Responsive

To control the gap at a specific breakpoint, add a `{screen}:` prefix to any existing gap utility. For example, use `md:gap-6` to apply the `gap-6` utility at only medium screen sizes and above.

```html
<div class="grid gap-4 md:gap-6">
  <!-- ... -->
</div>
```
