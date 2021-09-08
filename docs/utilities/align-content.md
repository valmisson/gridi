# Align Content

Utilities for controlling how rows are positioned in multi-row flex and grid containers.


| Class         | Properties                    |
| :------------ | :---------------------------- |
| align-center  | align-content: center;        |
| align-start   | align-content: flex-start;    |
| align-end     | align-content: flex-end;      |
| align-between | align-content: space-between; |
| align-around  | align-content: space-around;  |
| align-evenly  | align-content: space-evenly;  |

## Center

Use `align-center` to pack rows in a container in the center of the cross axis:

```html
<div class="flex flex-wrap align-center">
  <!-- ... -->
</div>
```

## Start

Use `align-start` to pack rows in a container against the start of the cross axis:

```html
<div class="flex flex-wrap align-start">
  <!-- ... -->
</div>
```

## End

Use `align-end` to pack rows in a container against the end of the cross axis:

```html
<div class="flex flex-wrap align-end">
  <!-- ... -->
</div>
```


## Space between

Use `align-between` to distribute rows in a container such that there is an equal amount of space between each line:

```html
<div class="flex flex-wrap align-between">
  <!-- ... -->
</div>
```

## Space around

Use `align-around` to distribute rows in a container such that there is an equal amount of space around each line:

```html
<div class="flex flex-wrap align-around">
  <!-- ... -->
</div>
```

## Space evenly

Use `align-evenly` to distribute rows in a container such that there is an equal amount of space around each item, but also accounting for the doubling of space you would normally see between each item when using `align-around`:


```html
<div class="flex flex-wrap align-evenly">
  <!-- ... -->
</div>
```


## Responsive

To control the alignment of flex content at a specific breakpoint, add a `{screen}:` prefix to any existing utility class. For example, use `md:align-around` to apply the `align-around` utility at only medium screen sizes and above.


```html
<div class="align-start md:align-around">
  <!-- ... -->
</div>
```

For more information about Gridi responsive design features, check out the [Responsive Design](/guide/responsive-design) documentation.
