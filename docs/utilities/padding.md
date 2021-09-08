# Padding

Utilities for controlling an element's padding.

| Class     | Properties                                                |
| :-------- | :-------------------------------------------------------- |
| pt-{0-16} | padding-top: {0 - 6rem};                                  |
| pb-{0-16} | padding-bottom: {0 - 6rem};                               |
| pr-{0-16} | padding-right: {0 - 6rem};                                |
| pl-{0-16} | padding-left: {0 - 6rem};                                 |
| px-{0-16} | padding-left: {0 - 6rem}; <br> padding-right: {0 - 6rem}; |
| py-{0-16} | padding-top: {0 - 6rem}; <br> padding-bottom: {0 - 6rem}; |
| p-{0-16}  | padding: {0 - 6rem};                                      |

## Add padding to a single side

Control the padding on one side of an element using the `p{t|r|b|l}-{size}` utilities.

For example, `pt-6` would add `1.5rem` of padding to the top of an element, `pr-4` would add `1rem` of padding to the right of an element, `pb-8` would add `2rem` of padding to the bottom of an element, and `pl-2` would add `0.5rem` of padding to the left of an element.

```html
<div class="pt-6">pt-6</div>
<div class="pr-4">pr-4</div>
<div class="pb-8">pb-8</div>
<div class="pl-2">pl-2</div>
```

## Add horizontal padding

Control the horizontal padding of an element using the `px-{size}` utilities.

```html
<div class="px-8">px-8</div>
```

## Add vertical padding

Control the vertical padding of an element using the `py-{size}` utilities.

```html
<div class="py-8">py-8</div>
```

## Add padding to all sides

Control the padding on all sides of an element using the `p-{size}` utilities.

```html
<div class="p-8">p-8</div>
```

## Responsive

To control the padding of an element at a specific breakpoint, add a `{screen}:` prefix to any existing padding utility. For example, adding the class `md:py-8` to an element would apply the `py-8` utility at medium screen sizes and above.

```html
<div class="py-4 md:py-8">
  <!-- ... -->
</div>
```

For more information about Gridi responsive design features, check out the <a href="/gridi/guide/responsive-design.html">Responsive Design</a> documentation.
