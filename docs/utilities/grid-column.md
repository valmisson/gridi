# Grid Column Start / End

Utilities for controlling how elements are sized and placed across grid columns.

| Class          | Properties                      |
| :------------- | :------------------------------ |
| col-auto       | grid-column: auto;              |
| col-span-1     | grid-column: span 1 / span 1;   |
| col-span-2     | grid-column: span 2 / span 2;   |
| col-span-3     | grid-column: span 3 / span 3;   |
| col-span-4     | grid-column: span 4 / span 4;   |
| col-span-5     | grid-column: span 5 / span 5;   |
| col-span-6     | grid-column: span 6 / span 6;   |
| col-span-7     | grid-column: span 7 / span 7;   |
| col-span-8     | grid-column: span 8 / span 8;   |
| col-span-9     | grid-column: span 9 / span 9;   |
| col-span-10    | grid-column: span 10 / span 10; |
| col-span-11    | grid-column: span 11 / span 11; |
| col-span-12    | grid-column: span 12 / span 12; |
| col-span-full  | grid-column: 1 / -1;            |
| col-start-1    | grid-column-start: 1;           |
| col-start-2    | grid-column-start: 2;           |
| col-start-3    | grid-column-start: 3;           |
| col-start-4    | grid-column-start: 4;           |
| col-start-5    | grid-column-start: 5;           |
| col-start-6    | grid-column-start: 6;           |
| col-start-7    | grid-column-start: 7;           |
| col-start-8    | grid-column-start: 8;           |
| col-start-9    | grid-column-start: 9;           |
| col-start-10   | grid-column-start: 10;          |
| col-start-11   | grid-column-start: 11;          |
| col-start-12   | grid-column-start: 12;          |
| col-start-auto | grid-column-start: auto;        |
| col-end-1      | grid-column-end: 1;             |
| col-end-2      | grid-column-end: 2;             |
| col-end-3      | grid-column-end: 3;             |
| col-end-4      | grid-column-end: 4;             |
| col-end-5      | grid-column-end: 5;             |
| col-end-6      | grid-column-end: 6;             |
| col-end-7      | grid-column-end: 7;             |
| col-end-8      | grid-column-end: 8;             |
| col-end-9      | grid-column-end: 9;             |
| col-end-10     | grid-column-end: 10;            |
| col-end-11     | grid-column-end: 11;            |
| col-end-12     | grid-column-end: 12;            |
| col-end-13     | grid-column-end: 13;            |
| col-end-auto   | grid-column-end: auto;          |

## Spanning columns

Use the `col-span-{n}` utilities to make an element span n columns.

```html
<div class="grid grid-cols-3 gap-4">
  <div class="col-span-2">
    <!-- ... -->
  </div>
</div>
```

## Starting and ending lines

Use the `col-start-{n}` and `col-end-{n}` utilities to make an element start or end at the nth grid line. These can also be combined with the `col-span-{n}` utilities to span a specific number of columns.

Note that CSS grid lines start at 1, not 0, so a full-width element in a 6-column grid would start at line 1 and end at line 7.

```html
<div class="grid grid-cols-6 gap-4">
  <div class="col-start-2 col-span-4">1</div>
  <div class="col-start-1 col-end-3">2</div>
  <div class="col-end-7 col-span-2">3</div>
  <div class="col-start-1 col-end-7">4</div>
</div>
```

## Responsive

To control the column placement of an element at a specific breakpoint, add a `{screen}:` prefix to any existing grid-column utility. For example, use `md:col-span-6` to apply the `col-span-6` utility at only medium screen sizes and above.

```html
<div class="col-span-2 md:col-span-6">
  <!-- ... -->
</div>
```

For more information about Gridi responsive design features, check out the [Responsive Design](/guide/responsive-design) documentation.
