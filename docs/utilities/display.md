# Display

Utilities for controlling the display box type of an element.

| Class              | Properties                   |
| :----------------- | :--------------------------- |
| flex               | display: flex;               |
| grid               | display: grid;               |
| block              | display: block;              |
| hidden             | display: none;               |
| table              | display: table;              |
| table-caption      | display: table-caption;      |
| table-cell         | display: table-cell;         |
| table-column       | display: table-column;       |
| table-column-group | display: table-column-group; |
| table-footer-group | display: table-footer-group; |
| table-header-group | display: table-header-group; |
| table-row-group    | display: table-row-group;    |
| table-row          | display: table-row;          |
| flow-root          | display: flow-root;          |
| contents           | display: contents;           |
| list-item          | display: list-item;          |
| inline-flex        | display: inline-flex;        |
| inline-grid        | display: inline-grid;        |
| inline-block       | display: inline-block;       |
| inline-table       | display: inline-table;       |

## Flex

Use `flex` to create a block-level flex container.

```html
<div class="flex">
  <!-- ... -->
</div>
```

## Grid

Use `grid` to create a grid container.

```html
<div class="grid">
  <!-- ... -->
</div>
```

## Block

Use `block` to create a block-level element.

```html
<div class="block">
  <!-- ... -->
</div>
```

## Hidden

Use `hidden` to set an element to `display: none` and remove it from the page layout

```html
<div class="hidden">
  <!-- ... -->
</div>
```

## Table

Use the `table`, `.table-row`, `.table-cell`, `.table-caption`, `.table-column`, `.table-column-group`, `.table-header-group`, `table-row-group`, and `.table-footer-group` utilities to create elements that behave like their respective table elements.

```html
<div class="table">
  <div class="table-row-group">
    <div class="table-row">
      <div class="table-cell">
        <!-- ... -->
      </div>
    </div>
  </div>
</div>
```

## Flow-Root

Use `flow-root` to create a block-level element with its own [block formatting context](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context).

```html
<div class="flow-root">
  <!-- ... -->
</div>
```

## Contents

Use `contents` to create a "phantom" container whose children act like direct children of the parent.

```html
<div class="contents">
  <!-- ... -->
</div>
```

## Inline

Use `inline`, `inline-flex`, `inline-grid`, `inline-block`, `inline-table` to create an inline element.

```html
<div class="inline-block">
  <!-- ... -->
</div>
```

## Responsive

To control the display property of an element at a specific breakpoint, add a `{screen}:` prefix to any existing display utility class. For example, use `md:inline-flex` to apply the `inline-flex` utility at only medium screen sizes and above.

```html
<div class="flex md:inline-flex">
  <!-- ... -->
</div>
```

For more information about Gridi responsive design features, check out the <a href="/gridi/guide/responsive-design.html">Responsive Design</a> documentation.
