---
sidebarDepth: 2
---

# Installation

Looking to quickly add Gridi to your project? Use npm or unpkg.

**Install Gridi via npm**

```bash
$ npm install gridi
```

**Install Gridi via unpkg**

```html
<link href="https://unpkg.com/gridi@^2/dist/gridi.min.css" rel="stylesheet">
```

## HTML starter template

For Gridi styles to work as expected, you’ll want to use the HTML5 doctype and include the responsive viewport meta tag to properly handle responsive styles on all devices.

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="/path/to/gridi.css" rel="stylesheet">
  <!-- ... -->
</head>
<body>
  <!-- ... -->
</body>
</html>
```

Many front-end frameworks like Next.js, vue-cli and others do all this for you behind the scenes automatically, so depending on what you’re building you might not need to set this up.
