# Flex Direction

Utilities for controlling the direction of flex items.

| Class            | Properties                      |
| :--------------- | :------------------------------ |
| flex-row         | flex-direction: row;            |
| flex-row-reverse | flex-direction: row-reverse;    |
| flex-col         | flex-direction: column;         |
| flex-col-reverse | flex-direction: column-reverse; |

## Row

Use `flex-row` to position flex items horizontally in the same direction as text:

```html
<div class="flex flex-row">
  <!-- ... -->
</div>
```

## Row reversed

Use `flex-row-reverse` to position flex items horizontally in the opposite direction:

```html
<div class="flex flex-row-reverse">
  <!-- ... -->
</div>
```

## Column

Use `flex-col` to position flex items vertically:

```html
<div class="flex flex-col">
  <!-- ... -->
</div>
```

## Column reversed

Use `flex-col-reverse` to position flex items vertically in the opposite direction:

```html
<div class="flex flex-col-reverse">
  <!-- ... -->
</div>
```

## Responsive

To apply a flex direction utility only at a specific breakpoint, add a `{screen}:` prefix to the existing class name. For example, adding the class `md:flex-row` to an element would apply the `flex-row` utility at medium screen sizes and above.

```html
<div class="flex flex-col md:flex-row ...">
  <!-- ... -->
</div>
```
