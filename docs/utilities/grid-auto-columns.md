---
sidebarDepth: 2
---

# Grid Auto Columns

Utilities for controlling the size of implicitly-created grid columns.

| Class          | Properties                         |
| :------------- | :--------------------------------- |
| auto-cols-auto | 	grid-auto-columns: auto;          |
| auto-cols-min  | grid-auto-columns: min-content;    |
| auto-cols-max  | grid-auto-columns: max-content;    |
| auto-cols-fr   | grid-auto-columns: minmax(0, 1fr); |

## Usage

Use the `auto-cols-{size}` utilities to control the size implicitly-created grid columns.

```html
<div class="grid grid-flow-col auto-cols-max">
  <!-- ... -->
</div>
```

### Responsive

To control the grid-auto-columns property at a specific breakpoint, add a {screen}: prefix to any existing grid-auto-columns utility. For example, use md:auto-cols-min to apply the auto-cols-min utility at only medium screen sizes and above.

```html
<div class="grid grid-flow-col auto-cols-max md:auto-cols-min">
  <!-- ... -->
</div>
```

For more information about Gridi responsive design features, check out the [Responsive Design](/guide/responsive-design) documentation.
