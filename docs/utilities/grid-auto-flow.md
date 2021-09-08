---
sidebarDepth: 2
---

# Grid Auto Flow

Utilities for controlling how elements in a grid are auto-placed.

| Class               | Properties                    |
| :------------------ | :---------------------------- |
| grid-flow-row       | grid-auto-flow: row;          |
| grid-flow-col       | grid-auto-flow: column;       |
| grid-flow-row-dense | grid-auto-flow: row dense;    |
| grid-flow-col-dense | grid-auto-flow: column dense; |

## Usage

Use the `grid-flow-{keyword}` utilities to control how the auto-placement algorithm works for a grid layout.

```html
<div class="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4">
  <!-- ... -->
</div>
```

## Responsive

To control the grid-auto-flow property at a specific breakpoint, add a `{screen}:` prefix to any existing grid-auto-flow utility. For example, use `md:grid-flow-col` to apply the `grid-flow-col` utility at only medium screen sizes and above.

```html
<div class="grid md:grid-flow-col">
  <!-- ... -->
</div>
```

For more information about Gridi responsive design features, check out the <a href="/gridi/guide/responsive-design.html">Responsive Design</a> documentation.
