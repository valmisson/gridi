# Flex Shrink

Utilities for controlling how flex items shrink.

| Class         | Properties      |
| :------------ | :-------------- |
| flex-shrink   | flex-shrink: 1; |
| flex-shrink-0 | flex-shrink: 0; |

## Shrink

Use `flex-shrink` to allow a flex item to shrink if needed:

```html
<div class="flex">
  <div class="flex-shrink">
    <!-- This item will shrink -->
  </div>
</div>
```

## Don't shrink

Use `flex-shrink-0` to prevent a flex item from shrinking:

```html
<div class="flex">
  <div class="flex-shrink-0">
    <!-- This item will not shrink below its initial size-->
  </div>
</div>
```

## Responsive

To control how a flex item shrinks at a specific breakpoint, add a `{screen}:` prefix to any existing utility class. For example, use `md:flex-shrink-0` to apply the `flex-shrink-0` utility at only medium screen sizes and above.

```html
<div class="flex">
  <!-- ... -->
  <div class="flex-shrink md:flex-shrink-0">
    Responsive flex item
  </div>
  <!-- ... -->
</div>
```
