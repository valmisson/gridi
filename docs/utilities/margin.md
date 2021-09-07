# Margin

Utilities for controlling an element's margin.

| Class     | Properties                                              |
| :-------- | :------------------------------------------------------ |
| mt-{0-16} | margin-top: {0 - 6rem};                                 |
| mb-{0-16} | margin-bottom: {0 - 6rem};                              |
| mr-{0-16} | margin-right: {0 - 6rem};                               |
| ml-{0-16} | margin-left: {0 - 6rem};                                |
| mx-{0-16} | margin-left: {0 - 6rem}; <br> margin-right: {0 - 6rem}; |
| my-{0-16} | margin-top: {0 - 6rem}; <br> margin-bottom: {0 - 6rem}; |
| mx-auto   | margin-left: auto; <br> margin-right: auto;             |
| my-auto   | margin-top: auto; <br> margin-bottom: auto;             |
| m-{0-16}  | margin: {0 - 6rem};                                     |

## Add margin to a single side

Control the margin on one side of an element using the `m{t|r|b|l}-{size}` utilities.

For example, `mt-6` would add `1.5rem` of margin to the top of an element, `mr-4` would add `1rem` of margin to the right of an element, `mb-8` would add `2rem` of margin to the bottom of an element, and `ml-2` would add `0.5rem` of margin to the left of an element.

```html
<div class="mt-8">mt-8</div>
<div class="mr-8">mr-8</div>
<div class="mb-8">mb-8</div>
<div class="ml-8">ml-8</div>
```

## Add horizontal margin

Control the horizontal margin of an element using the `mx-{size}` utilities.

```html
<div class="mx-8">mx-8</div>
```

## Add vertical margin

Control the vertical margin of an element using the `my-{size}` utilities.

```html
<div class="my-8">my-8</div>
```

## Add margin to all sides

Control the margin on all sides of an element using the `m-{size}` utilities.

```html
<div class="m-8">m-8</div>
```

## Responsive

To control the margin of an element at a specific breakpoint, add a `{screen}:` prefix to any existing margin utility. For example, adding the class `md:my-8` to an element would apply the `my-8` utility at medium screen sizes and above.

```html
<div class="mt-8 md:my-8">
  <!-- ... -->
</div>
```
