# Place Items

Utilities for controlling how items are justified and aligned at the same time.

| Class               | Properties             |
| :------------------ | :--------------------- |
| place-items-start   | place-items: start;    |
| place-items-end     | place-items: end;      |
| place-items-center  | place-items: center;   |
| place-items-stretch | place-items: stretch;  |

## Start

Use `place-items-start` to place grid items on the start of their grid areas on both axis:

```html
<div class="grid grid-cols-3 gap-2 place-items-start">
  <!-- ... -->
</div>
```

## End

Use `place-items-end` to place grid items on the end of their grid areas on both axis:

```html
6
<div class="grid grid-cols-3 gap-2 place-items-end">
  <!-- ... -->
</div>
```

## Center

Use `place-items-center` to place grid items on the center of their grid areas on both axis:

```html
<div class="grid grid-cols-3 gap-2 place-items-center">
  <!-- ... -->
</div>
```

## Stretch

Use place-items-stretch to stretch items along their grid areas on both axis:

```html
<div class="grid grid-cols-3 gap-2 place-items-stretch">
  <!-- ... -->
</div>
```

## Responsive

To place items at a specific breakpoint, add a `{screen}:` prefix to any existing place-items utility. For example, use `md:place-items-center` to apply the `place-items-center` utility at only medium screen sizes and above.

```html
<div class="place-items-start md:place-items-center">
  <!-- ... -->
</div>
```
