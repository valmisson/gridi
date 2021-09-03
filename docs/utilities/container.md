---
sidebarDepth: 2
---

# Container

A component for fixing an element's width to the current breakpoint.

| Class     | Breakpoint   | Properties      |
| :-------- | :----------- | :-------------- |
| container | None         | 	width: 100%;   |
|           | sm (576px)   | 	max-width: 540px;  |
|           | md (768px)   | 	max-width: 720px;  |
|           | lg (992px)   | 	max-width: 960px;  |
|           | xl (1200px)  | 	max-width: 1140px; |
|           | xxl (1400px) | 	max-width: 1320px; |

## Usage

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
