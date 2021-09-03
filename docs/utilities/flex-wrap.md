# Flex Wrap

Utilities for controlling how flex items wrap.

| Class             | Properties               |
| :---------------- | :----------------------- |
| flex-wrap         | flex-wrap: wrap;         |
| flex-wrap-reverse | flex-wrap: wrap-reverse; |
| flex-nowrap       | flex-wrap: nowrap;       |

### Wrap normally

Use `flex-wrap` to allow flex items to wrap:

```html
<div class="flex flex-wrap">
  <!-- ... -->
</div>
```

### Wrap reversed

Use `flex-wrap-reverse` to wrap flex items in the reverse direction:

```html
<div class="flex flex-wrap-reverse">
  <!-- ... -->
</div>
```

### Don't wrap

Use `flex-nowrap` to prevent flex items from wrapping, causing inflexible items to overflow the container if necessary:

```html
<div class="flex flex-nowrap">
  <!-- ... -->
</div>
```
