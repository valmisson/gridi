---
sidebarDepth: 2
---

# Grid Auto Rows

Utilities for controlling the size of implicitly-created grid rows.

| Class          | Properties                      |
| :------------- | :------------------------------ |
| auto-rows-auto | grid-auto-rows: auto;           |
| auto-rows-min  | grid-auto-rows: min-content;    |
| auto-rows-max  | grid-auto-rows: max-content;    |
| auto-rows-fr   | grid-auto-rows: minmax(0, 1fr); |

## Usage

Use the `auto-rows-{size}` utilities to control the size implicitly-created grid rows.

```html
<div class="grid grid-flow-row auto-rows-max">
  <!-- ... -->
</div>
```

## Responsive

To control the grid-auto-rows property at a specific breakpoint, add a `{screen}:` prefix to any existing grid-auto-rows utility. For example, use `md:auto-rows-min` to apply the `auto-rows-min` utility at only medium screen sizes and above.

```html
<div class="grid grid-flow-row auto-rows-max md:auto-rows-min">
  <!-- ... -->
</div>
```

For more information about Gridi responsive design features, check out the <a href="/gridi/guide/responsive-design.html">Responsive Design</a> documentation.
