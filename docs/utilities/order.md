---
sidebarDepth: 2
---

# Order

Utilities for controlling the order of flex and grid items.

| Class       | Properties    |
| :---------- | :------------ |
| order-first | order: -9999; |
| order-last  | order: 9999;  |
| order-none  | order: 0;     |
| order-1     | order: 1;     |
| order-2     | order: 2;     |
| order-3     | order: 3;     |
| order-4     | order: 4;     |
| order-5     | order: 5;     |
| order-6     | order: 6;     |
| order-7     | order: 7;     |
| order-8     | order: 8;     |
| order-9     | order: 9;     |
| order-10    | order: 10;    |
| order-11    | order: 11;    |
| order-12    | order: 12;    |

## Usage

Use `order-{order}` to render flex and grid items in a different order than they appear in the DOM.

```html
<div class="flex justify-between">
  <div class="order-last">
    <!-- ... -->
  </div>
</div>
```

## Responsive

To apply an order utility only at a specific breakpoint, add a `{screen}:` prefix to the existing class name. For example, adding the class `md:order-last` to an element would apply the `order-last` utility at medium screen sizes and above.

```html
<div class="flex">
  <div class="order-first md:order-last">
    <!-- ... -->
  </div>
</div>
```

For more information about Gridi responsive design features, check out the <a href="/gridi/guide/responsive-design.html">Responsive Design</a> documentation.
