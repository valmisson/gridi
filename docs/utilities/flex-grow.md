# Flex Grow

Utilities for controlling how flex items grow.

| Class       | Properties    |
| :---------- | :------------ |
| flex-grow   | flex-grow: 1; |
| flex-grow-0 | flex-grow: 0; |

## Grow

Use `flex-grow `to allow a flex item to grow to fill any available space:

```html
<div class="flex">
  <div class="flex-grow">
    <!-- This item will grow -->
  </div>
</div>
```

## Don't grow

Use `flex-grow-0` to prevent a flex item from growing:

```html
<div class="flex">
  <div class="flex-grow-0">
    <!-- This item will not grow -->
  </div>
</div>
```

## Responsive

To control how a flex item grows at a specific breakpoint, add a `{screen}:` prefix to any existing utility class. For example, use `md:flex-grow-0` to apply the `flex-grow-0` utility at only medium screen sizes and above.

```html
<div class="flex">
  <!-- ... -->
  <div class="flex-grow md:flex-grow-0">
    Responsive flex item
  </div>
  <!-- ... -->
</div>
```

For more information about Gridi responsive design features, check out the [Responsive Design](/guide/responsive-design) documentation.
