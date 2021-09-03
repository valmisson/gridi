# Justify Content

Utilities for controlling how flex and grid items are positioned along a container's main axis.

| Class           | Properties                      |
| :-------------- | :------------------------------ |
| justify-start   | justify-content: flex-start;    |
| justify-end     | justify-content: flex-end;      |
| justify-center  | justify-content: center;        |
| justify-between | justify-content: space-between; |
| justify-around  | justify-content: space-around;  |
| justify-evenly  | justify-content: space-evenly;  |

## Start

Use `justify-start` to justify items against the start of the container’s main axis:

```html
<div class="flex justify-start">
  <!-- ... -->
</div>
```

## Center

Use `justify-center` to justify items along the center of the container’s main axis:

```html
<div class="flex justify-center">
  <!-- ... -->
</div>
```

## End

Use `justify-end` to justify items against the end of the container’s main axis:

```html
<div class="flex justify-end">
  <!-- ... -->
</div>
```

## Space between

Use `justify-between` to justify items along the container’s main axis such that there is an equal amount of space between each item:

```html
<div class="flex justify-between">
  <!-- ... -->
</div>
```

## Space around

Use `justify-around` to justify items along the container’s main axis such that there is an equal amount of space on each side of each item:

```html
<div class="flex justify-around">
  <!-- ... -->
</div>
```

## Space evenly

Use `justify-evenly` to justify items along the container’s main axis such that there is an equal amount of space around each item, but also accounting for the doubling of space you would normally see between each item when using `justify-around`:

```html
<div class="flex justify-evenly">
  <!-- ... -->
</div>
```

## Responsive

To justify flex items at a specific breakpoint, add a `{screen}:` prefix to any existing utility class. For example, use `md:justify-between` to apply the `justify-between` utility at only medium screen sizes and above.

```html
<div class="justify-start md:justify-between">
  <!-- ... -->
</div>
```
