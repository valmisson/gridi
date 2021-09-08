# Place Content

Utilities for controlling how content is justified and aligned at the same time.

| Class                 | Properties                    |
| :-------------------- | :---------------------------- |
| place-content-center  | place-content: center;        |
| place-content-start   | place-content: start;         |
| place-content-end     | place-content: end;           |
| place-content-between | place-content: space-between; |
| place-content-around  | place-content: space-around;  |
| place-content-evenly  | place-content: space-evenly;  |
| place-content-stretch | place-content: stretch;       |

## Center

Use `place-content-center` to pack items in the center of the block axis:

```html
<div class="grid grid-cols-3 gap-2 place-content-center">
  <!-- ... -->
</div>
```

## Start

Use `place-content-start` to pack items against the start of the block axis:

```html
<div class="grid grid-cols-3 gap-2 place-content-start">
  <!-- ... -->
</div>
```

## End

Use `place-content-end` to to pack items against the end of the block axis:

```html
<div class="grid grid-cols-3 gap-2 place-content-end">
  <!-- ... -->
</div>
```

## Space between

Use `place-content-between` to distribute grid items along the block axis so that that there is an equal amount of space between each row on the block axis.

```html
<div class="grid grid-cols-3 gap-2 place-content-between">
  <!-- ... -->
</div>
```

## Space around

Use `place-content-around` distribute grid items such that there is an equal amount of space around each row on the block axis:

```html
<div class="grid grid-cols-3 gap-2 place-content-around">
  <!-- ... -->
</div>
```
## Space evenly

Use `place-content-evenly` to distribute grid items such that they are evenly spaced on the block axis:

```html
<div class="grid grid-cols-3 gap-2 place-content-evenly">
  <!-- ... -->
</div>
```

## Stretch

Use `place-content-stretch` to stretch grid items along their grid areas on the block axis:

```html
<div class="grid grid-cols-3 gap-2 place-content-stretch">
  <!-- ... -->
</div>
```

## Responsive

To place content at a specific breakpoint, add a `{screen}:` prefix to any existing place-content utility. For example, use `md:place-content-center` to apply the `place-content-center` utility at only medium screen sizes and above.

```html
<div class="place-content-start md:place-content-center">
  <!-- ... -->
</div>
```

For more information about Gridi responsive design features, check out the <a href="/gridi/guide/responsive-design.html">Responsive Design</a> documentation.
