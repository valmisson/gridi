# Gridi

> A simple and flexible grid system created with flexbox using scss.

[![npm][npm-shields]][npm-package]
[![license][license-shields]][license-file]


## Features

* Powerful grid system made with flexbox and over the mobile-first concept.
* Create layouts of all shapes and sizes with a 12-column system and five standard responsive levels.
* Easy to customize and adapt to your layout with scss.
* Based on the bootstrap 4 grid system

## Install

```sh
yarn add gridi
```

Or [download this repository][download-zip]


## Example

```html
<div class="container">
  <div class="row">
    <div class="col">1 of 3</div>
    <div class="col">2 of 3</div>
    <div class="col">3 of 3</div>
  </div>
</div>
```

## Grid options

| | Extra small <576px  | Small ≥576px | Medium ≥768px | Large ≥992px | Extra large ≥1200px | xxLarge ≥1400px |
| --- | --- | --- | --- | --- | --- | --- |
| Max container width | None (auto) | 540px | 720px | 960px | 1140px | 1320px |
| Class prefix | .col- | .col-sm- | .col-md- | .col-lg- | .col-xl- | .col-xxl- |
| Auto-sizing | .col-auto | .col-sm-auto | .col-md-auto | .col-lg-auto | .col-xl-auto | .col-xxl-auto |
| Offset classes | .offset- | .offset-sm- | .offset-md- | .offset-lg- | .offset-xl- | .offset-xxl- |
| `.container` | 100% | 540px | 720px | 960px | 1140px | 1320px |
| `.container-fluid` | 100% | 100% | 100% | 100% | 100% | 100% |
| Column numbers | 12
| Gutter width | 30px (15px on each side of a column)

## License

[MIT](LICENSE)

Copyright (c) 2019-present, Valmisson Grizorte

[npm-shields]: https://img.shields.io/npm/v/gridi.svg
[license-shields]: https://img.shields.io/badge/license-MIT-green
[download-zip]: https://github.com/valmisson/gridi/archive/refs/heads/master.zip
[npm-package]: https://www.npmjs.com/package/gridi
[license-file]: https://github.com/valmisson/gridi/blob/master/LICENSE
