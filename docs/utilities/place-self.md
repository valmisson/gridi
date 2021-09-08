# Place Self

Utilities for controlling how an individual item is justified and aligned at the same time.

| Class              | Properties           |
| :----------------- | :------------------- |
| place-self-auto    | place-self: auto;    |
| place-self-start   | place-self: start;   |
| place-self-end     | place-self: end;     |
| place-self-center  | place-self: center;  |
| place-self-stretch | place-self: stretch; |

## Auto

Use `place-self-auto` to align an item based on the value of the container’s `place-items` property:

```html
<div class="grid grid-cols-3 gap-2">
  <div class="place-self-auto">
    <!-- ... -->
  </div>
</div>
```

## Start

Use `place-self-start` to align an item to the start on both axes:

```html
<div class="grid grid-cols-3 gap-2">
  <div class="place-self-start">
    <!-- ... -->
  </div>
</div>
```

## Center

Use `place-self-center` to align an item at the center on both axes:

```html
<div class="grid grid-cols-3 gap-2">
  <div class="place-self-center">
    <!-- ... -->
  </div>
</div>
```

## End

Use `place-self-end` to align an item to the end on both axes:

```html
<div class="grid grid-cols-3 gap-2">
  <div class="place-self-end">
    <!-- ... -->
  </div>
</div>
```

## Stretch

Use `place-self-stretch` to stretch an item on both axes:

```html
<div class="grid grid-cols-3 gap-2">
  <div class="place-self-stretch">
    <!-- ... -->
  </div>
</div>
```

## Responsive

To place an item at a specific breakpoint, add a `{screen}:` prefix to any existing place-self utility. For example, use `md:place-self-end` to apply the `place-self-end` utility at only medium screen sizes and above.

```html
<div class="place-self-start md:place-self-end">
  <!-- ... -->
</div>
```

For more information about Gridi responsive design features, check out the <a href="/gridi/guide/responsive-design.html">Responsive Design</a> documentation.
