---
sidebarDepth: 2
---

# Grid Template Rows

Utilities for specifying the rows in a grid layout.

| Class          | Properties                                     |
| :------------- | :--------------------------------------------- |
| grid-rows-1    | grid-template-rows: repeat(1, minmax(0, 1fr)); |
| grid-rows-2    | grid-template-rows: repeat(2, minmax(0, 1fr)); |
| grid-rows-3    | grid-template-rows: repeat(3, minmax(0, 1fr)); |
| grid-rows-4    | grid-template-rows: repeat(4, minmax(0, 1fr)); |
| grid-rows-5    | grid-template-rows: repeat(5, minmax(0, 1fr)); |
| grid-rows-6    | grid-template-rows: repeat(6, minmax(0, 1fr)); |
| grid-rows-none | grid-template-rows: none;                      |

## Usage

Use the `grid-rows-{n}` utilities to create grids with n equally sized rows.

```html
<div class="grid grid-rows-3 grid-flow-col gap-4">
  <!-- ... -->
</div>
```

## Responsive

To control the rows of a grid at a specific breakpoint, add a `{screen}:` prefix to any existing grid-template-rows utility. For example, use `md:grid-rows-6` to apply the `grid-rows-6` utility at only medium screen sizes and above.

```html
<div class="grid grid-rows-2 md:grid-rows-6">
  <!-- ... -->
</div>
```

For more information about Gridi responsive design features, check out the <a href="/gridi/guide/responsive-design.html">Responsive Design</a> documentation.
