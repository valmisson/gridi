# Justify Self

Utilities for controlling how an individual grid item is aligned along its inline axis.

| Class                | Properties             |
| :------------------- | :--------------------- |
| justify-self-auto    | justify-self: auto;    |
| justify-self-start   | justify-self: start;   |
| justify-self-end     | justify-self: end;     |
| justify-self-center  | justify-self: center;  |
| justify-self-stretch | justify-self: stretch; |

## Auto

Use `justify-self-auto` to align an item based on the value of the grid’s `justify-items` property:

```html
<div class="grid justify-items-stretch">
  <div class="justify-self-auto">1</div>
</div>
```

## Start

Use `justify-self-start` to align a grid item to the start its inline axis:

```html
<div class="grid justify-items-stretch">
  <div class="justify-self-start">1</div>
</div>
```

## Center

Use `justify-self-center` to align a grid item along the center its inline axis:

```html
<div class="grid justify-items-stretch">
  <div class="justify-self-center">1</div>
</div>
```

## End

Use `justify-self-end` to align a grid item to the end its inline axis:

```html
<div class="grid justify-items-stretch">
  <div class="justify-self-end">1</div>
</div>
```

## Stretch

Use `justify-self-stretch` to stretch a grid item to fill the grid area on its inline axis:

```html
<div class="grid justify-items-start">
  <div class="justify-self-stretch">1</div>
</div>
```

## Responsive

To control the alignment of a grid item inside its grid area at a specific breakpoint, add a `{screen}:` prefix to any existing utility class. For example, use `md:justify-self-end` to apply the `justify-self-end` utility at only medium screen sizes and above.

```html
<div class="grid justify-items-stretch">
  <div class="justify-self-auto md:justify-self-center">1</div>
</div>
```

For more information about Gridi responsive design features, check out the [Responsive Design](/guide/responsive-design) documentation.
