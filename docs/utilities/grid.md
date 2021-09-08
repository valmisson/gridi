---
sidebarDepth: 2
---

# Grid

Utilities for controlling display grid

| Class | Properties     |
| :---- | :------------- |
| grid  | display: grid; |

## Usage

Use `grid` to create a grid container.

```html
<div class="grid">
  <!-- ... -->
</div>
```

## Responsive

To control the display property of an element at a specific breakpoint, add a `{screen}:` prefix to any existing display utility class. For example, use `md:grid` to apply the `grid` utility at only medium screen sizes and above.

```html
<div class="flex md:grid">
  <!-- ... -->
</div>
```

For more information about Gridi responsive design features, check out the [Responsive Design](/guide/responsive-design) documentation.
