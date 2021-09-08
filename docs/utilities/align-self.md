# Align Self

Utilities for controlling how an individual flex or grid item is positioned along its container's cross axis.

| Class              | Properties              |
| :----------------- | :---------------------- |
| align-self-auto    | align-self: auto;       |
| align-self-start   | align-self: flex-start; |
| align-self-end     | align-self: flex-end;   |
| align-self-center  | align-self: center;     |
| align-self-stretch | align-self: stretch;    |

## Auto

Use `align-self-auto` to align an item based on the value of the container’s `align-items` property:


```html
<div class="flex align-items-stretch">
  <div class="align-self-auto">
    <!-- ... -->
  </div>
</div>
```

## Start

Use `align-self-start` to align an item to the start of the container’s cross axis, despite the container’s `align-items` value:

```html
<div class="flex align-items-stretch">
  <div class="align-self-start">
    <!-- ... -->
  </div>
</div>
```

## End

Use `align-self-end` to align an item to the end of the container’s cross axis, despite the container’s `align-items` value:

```html
<div class="flex align-items-stretch">
  <div class="align-self-end">
    <!-- ... -->
  </div>
</div>
```

## Center

Use `align-self-center` to align an item along the center of the container’s cross axis, despite the container’s `align-items` value:

```html
<div class="flex align-items-stretch">
  <div class="align-self-center">
    <!-- ... -->
  </div>
</div>
```

## Stretch

Use `align-self-stretch` to stretch an item to fill the container’s cross axis, despite the container’s `align-items` value:

```html
<div class="flex align-items-stretch">
  <div class="align-self-stretch">
    <!-- ... -->
  </div>
</div>
```

## Responsive

To control the alignment of a flex item at a specific breakpoint, add a `{screen}:` prefix to any existing utility class. For example, use `md:align-self-end` to apply the `align-self-end` utility at only medium screen sizes and above.

```html
<div class="flex align-items-stretch">
  <div class="align-self-auto md:align-self-end">
    <!-- ... -->
  </div>
</div>
```

For more information about Gridi responsive design features, check out the [Responsive Design](/guide/responsive-design) documentation.
