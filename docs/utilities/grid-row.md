# Grid Row Start / End

Utilities for controlling how elements are sized and placed across grid rows.

| Class          | Properties                 |
| :------------- | :------------------------- |
| row-auto       | grid-row: auto;            |
| row-span-1     | grid-row: span 1 / span 1; |
| row-span-2     | grid-row: span 2 / span 2; |
| row-span-3     | grid-row: span 3 / span 3; |
| row-span-4     | grid-row: span 4 / span 4; |
| row-span-5     | grid-row: span 5 / span 5; |
| row-span-6     | grid-row: span 6 / span 6; |
| row-span-full  | grid-row: 1 / -1;          |
| row-start-1    | grid-row-start: 1;         |
| row-start-2    | grid-row-start: 2;         |
| row-start-3    | grid-row-start: 3;         |
| row-start-4    | grid-row-start: 4;         |
| row-start-5    | grid-row-start: 5;         |
| row-start-6    | grid-row-start: 6;         |
| row-start-7    | grid-row-start: 7;         |
| row-start-auto | grid-row-start: auto;      |
| row-end-1      | grid-row-end: 1;           |
| row-end-2      | grid-row-end: 2;           |
| row-end-3      | grid-row-end: 3;           |
| row-end-4      | grid-row-end: 4;           |
| row-end-5      | grid-row-end: 5;           |
| row-end-6      | grid-row-end: 6;           |
| row-end-7      | grid-row-end: 7;           |
| row-end-auto   | grid-row-end: auto;        |

## Spanning rows

Use the `row-span-{n}` utilities to make an element span n rows.

```html
<div class="grid grid-rows-3 grid-flow-col gap-4">
  <div class="row-span-2 col-span-2">
    <!-- ... -->
  </div>
</div>
```

## Starting and ending lines

Use the `row-start-{n}` and `row-end-{n}` utilities to make an element start or end at the nth grid line. These can also be combined with the `row-span-{n}` utilities to span a specific number of rows.

Note that CSS grid lines start at 1, not 0, so a full-height element in a 3-row grid would start at line 1 and end at line 4.

```html
<div class="grid grid-rows-3 grid-flow-col gap-4">
  <div class="row-start-2 row-span-2 ">1</div>
  <div class="row-end-3 row-span-2 ">2</div>
</div>
```

## Responsive

To control the row placement of an element at a specific breakpoint, add a `{screen}:` prefix to any existing grid-row utility. For example, use `md:row-span-3` to apply the `row-span-3` utility at only medium screen sizes and above.

```html
<div class="grid grid-rows-3">
  <div class="row-span-3 md:row-span-3">
    <!-- ... -->
  </div>
</div>
```

For more information about Gridi responsive design features, check out the <a href="/gridi/guide/responsive-design.html">Responsive Design</a> documentation.
