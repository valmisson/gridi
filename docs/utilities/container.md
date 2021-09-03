# Container

A component for fixing an element's width to the current breakpoint.

| Class     | Breakpoint   | Properties      |
| :-------- | :----------- | :-------------- |
| container | None         | 	width: 100%;   |
|           | sm (576px)   | 	width: 540px;  |
|           | md (768px)   | 	width: 720px;  |
|           | lg (992px)   | 	width: 960px;  |
|           | xl (1200px)  | 	width: 1140px; |
|           | xxl (1400px) | 	width: 1320px; |

### Usage

To center a container, use the mx-auto utility:

```html
<div class="container mx-auto">
  <!-- ... -->
</div>
```

To add horizontal padding, use the `px-{size}` utilities:

```html
<div class="container mx-auto px-4">
  <!-- ... -->
</div>
```
