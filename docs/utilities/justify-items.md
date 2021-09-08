# Justify Items

Utilities for controlling how grid items are aligned along their inline axis.

| Class                 | Properties              |
| :-------------------- | :---------------------- |
| justify-items-start   | justify-items: start;   |
| justify-items-end     | justify-items: end;     |
| justify-items-center  | justify-items: center;  |
| justify-items-stretch | justify-items: stretch; |

## Start

Use `justify-items-start` to justify grid items against the start of their inline axis:

```html
<div class="grid justify-items-start">
  <!-- ... -->
</div>
```

## End

Use `justify-items-end` to justify grid items against the end of their inline axis:

```html
<div class="grid justify-items-end">
  <!-- ... -->
</div>
```

## Center

Use `justify-items-center` to justify grid items along their inline axis:


```html
<div class="grid justify-items-center">
  <!-- ... -->
</div>
```

## Stretch

Use `justify-items-stretch` to stretch items along their inline axis:

```html
<div class="grid justify-items-stretch">
  <!-- ... -->
</div>
```

## Responsive

To justify flex items at a specific breakpoint, add a `{screen}:` prefix to any existing utility class. For example, use `md:justify-items-center` to apply the `justify-items-center` utility at only medium screen sizes and above.

```html
<div class="justify-items-start md:justify-items-center">
  <!-- ... -->
</div>
```

For more information about Gridi responsive design features, check out the [Responsive Design](/guide/responsive-design) documentation.
