# Flex

Utilities for controlling how flex items both grow and shrink.

| Class        | Properties      |
| :----------- | :-------------- |
| flex         | display: flex;  |
| flex-1       | flex: 1 1 0%;   |
| flex-auto    | flex: 1 1 auto; |
| flex-initial | flex: 0 1 auto; |
| flex-none    | flex: none;     |

### Flex

Use `flex` to create a block-level flex container.

```html
<div class="flex">
  <!-- ... -->
</div>
```

### Flex 1

Use `flex-1` to allow a flex item to grow and shrink as needed, ignoring its initial size:

```html
<div class="flex">
  <div class="flex-1">
    <!-- Will grow and shrink as needed without taking initial size into account -->
  </div>
</div>
```

### Auto

Use `flex-auto` to allow a flex item to grow and shrink, taking into account its initial size:

```html
<div class="flex">
  <div class="flex-auto">
    <!-- Will grow and shrink as needed without taking initial size into account -->
  </div>
</div>
```

### Initial

Use `flex-initial` to allow a flex item to shrink but not grow, taking into account its initial size:

```html
<div class="flex">
  <div class="flex-initial">
    <!-- Won't grow, but will shrink if needed -->
  </div>
</div>
```

### None

Use `flex-none` to prevent a flex item from growing or shrinking:

```html
<div class="flex">
  <div class="flex-none">
    <!-- Will not grow or shrink -->
  </div>
</div>
```
