---
sidebarDepth: 2
---

# Grid Template Columns

Utilities for specifying the columns in a grid layout.

| Class          | Properties                                         |
| :------------- | :------------------------------------------------- |
| grid-cols-1    | grid-template-columns: repeat(1, minmax(0, 1fr));  |
| grid-cols-2    | grid-template-columns: repeat(2, minmax(0, 1fr));  |
| grid-cols-3    | grid-template-columns: repeat(3, minmax(0, 1fr));  |
| grid-cols-4    | grid-template-columns: repeat(4, minmax(0, 1fr));  |
| grid-cols-5    | grid-template-columns: repeat(5, minmax(0, 1fr));  |
| grid-cols-6    | grid-template-columns: repeat(6, minmax(0, 1fr));  |
| grid-cols-7    | grid-template-columns: repeat(7, minmax(0, 1fr));  |
| grid-cols-8    | grid-template-columns: repeat(8, minmax(0, 1fr));  |
| grid-cols-9    | grid-template-columns: repeat(9, minmax(0, 1fr));  |
| grid-cols-10   | grid-template-columns: repeat(10, minmax(0, 1fr)); |
| grid-cols-11   | grid-template-columns: repeat(11, minmax(0, 1fr)); |
| grid-cols-12   | grid-template-columns: repeat(12, minmax(0, 1fr)); |
| grid-cols-none | grid-template-columns: none;                       |

## Usage

Use the `grid-cols-{n}` utilities to create grids with n equally sized columns.

```html
<div class="grid grid-cols-3 gap-4">
  <!-- ... -->
</div>
```

## Responsive

To control the columns of a grid at a specific breakpoint, add a `{screen}:` prefix to any existing grid-template-columns utility. For example, use `md:grid-cols-6` to apply the `grid-cols-6` utility at only medium screen sizes and above.

```html
<div class="grid grid-cols-1 md:grid-cols-6">
  <!-- ... -->
</div>
```
