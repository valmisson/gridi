---
home: true
---

<h1 class="title">
  A modern utility Grid System
</h1>

<p class="description">
  A utility-first CSS framework, build to quickly design and structure responsive sites with classes like <strong>flex, flex-column, justify-center, grid, col-span-2</strong>...
</p>

<a href="/guide/getting-started" class="btn">Getting Started</a>

Currently v{{ pkg.version }}, Code Licensed [MIT](https://github.com/valmisson/docs-theme/blob/main/LICENSE)

<script setup>
  import pkg from '../package.json'
</script>

<style>
  .title {
    font-size: 2.5rem;
    margin-top: 3rem;
  }

  .description {
    font-size: 1.125rem;
  }

  .btn {
    background-color: var(--c-brand);
    border-radius: 8px;
    color: white;
    display: inline-block;
    font-weight: 600;
    font-size: 1.125rem;
    margin-top: 1.125rem;
    min-width: 100%;
    padding: .875rem 1.5rem;
    text-align: center;
  }

  .btn.outiline {
    background-color: transparent;
    border: 1px solid var(--c-brand);
    color: var(--c-brand);
    font-size: 1rem
  }

  a.btn:hover {
    text-decoration: none;
  }

  @media (min-width: 576px) {
    .btn {
      min-width: auto;
    }
  }

  @media (min-width: 768px) {
    .title {
      font-size: 3rem;
      max-width: 80%;
    }

    .description {
      font-size: 1.125rem;
      max-width: 80%;
    }
  }

  @media (min-width: 992px) {
    .title {
      max-width: 60%;
    }

    .description {
      max-width: 60%;
    }

    .home-content [class^="language-"] {
      max-width: 70% !important;
    }
  }
</style>
