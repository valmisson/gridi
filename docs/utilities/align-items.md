# Align Items

Utilities for controlling how flex and grid items are positioned along a container's cross axis.


| Class                | Properties               |
| :------------------- | :----------------------- |
| align-items-start    | align-items: flex-start; |
| align-items-end      | align-items: flex-end;   |
| align-items-center   | align-items: center;     |
| align-items-baseline | align-items: baseline;   |
| align-items-stretch  | align-items: stretch;    |

## Start

Use `align-items-start` to align items to the start of the container’s cross axis:

```html
<div class="flex align-items-start">
  <!-- ... -->
</div>
```

## End

Use `align-items-end` to align items to the end of the container’s cross axis:

```html
<div class="flex align-items-end">
  <!-- ... -->
</div>
```

## Center

Use `align-items-center` to align items along the center of the container’s cross axis:

```html
<div class="flex align-items-center">
  <!-- ... -->
</div>
```

## Baseline

Use `align-items-baseline` to align items along the container’s cross axis such that all of their baselines align:

```html
<div class="flex align-items-baseline">
  <!-- ... -->
</div>
```

## Stretch

Use `align-items-stretch` to stretch items to fill the container’s cross axis:

```html
<div class="flex align-items-stretch">
  <!-- ... -->
</div>
```

## Responsive

To control the alignment of flex items at a specific breakpoint, add a `{screen}:` prefix to any existing utility class. For example, use `md:align-items-center` to apply the `align-items-center` utility at only medium screen sizes and above.

```html
<div class="align-items-stretch md:align-items-center">
  <!-- ... -->
</div>
```

For more information about Gridi responsive design features, check out the [Responsive Design](/guide/responsive-design) documentation.
