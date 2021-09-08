---
sidebarDepth: 2
---

# Responsive Design

Using responsive utility variants to build adaptive user interfaces.

Every utility class in Gridi can be applied conditionally at different breakpoints, which makes it a piece of cake to build complex responsive interfaces without ever leaving your HTML.

There are five breakpoints by default, inspired by common device resolutions:

| Breakpoint prefix | Minimum width | CSS                                  |
| :---------------- | :------------ | :----------------------------------- |
| `sm`              | 576px         | `@media (min-width: 576px) { ... }`  |
| `md`              | 768px         | `@media (min-width: 768px) { ... }`  |
| `lg`              | 992px         | `@media (min-width: 992px) { ... }`  |
| `xl`              | 1200px        | `@media (min-width: 1200px) { ... }` |
| `xxl`             | 1400px        | `@media (min-width: 1400px) { ... }` |

To add a utility but only have it take effect at a certain breakpoint, all you need to do is prefix the utility with the breakpoint name, followed by the : character:

```html
<div class="md:flex">
  <!-- ... -->
</div>
```

This works for every utility class in the framework, which means you can change literally anything at a given breakpoint

Here’s how the example above works:

- By default, the outer div is display: block, but by adding the md:flex utility, it becomes display: flex on medium screens and larger.

We’ve only used one breakpoint in this example, but you could easily customize this component at other sizes using the sm, lg, xl, or 2xl responsive prefixes as well.

## Mobile First

By default, Tailwind uses a mobile first breakpoint system, similar to what you might be used to in other frameworks like Bootstrap.

What this means is that unprefixed utilities (like `uppercase`) take effect on all screen sizes, while prefixed utilities (like `md:uppercase`) only take effect at the specified breakpoint *and above*.

### Targeting mobile screens

Where this approach surprises people most often is that to style something for mobile, you need to use the unprefixed version of a utility, not the `sm:` prefixed version. Don't think of `sm:` as meaning "on small screens", think of it as "at the small *breakpoint*".

::: danger Wrong
Don't use `sm:` to target mobile devices
:::

```html
<!-- This will only add gap 6 on screens 576px and wider, not on small screens -->
<div class="sm:gap-6"></div>
```

::: tip
Use unprefixed utilities to target mobile, and override them at larger breakpoints
:::

```html
<!-- This will add gap 4 on mobile, and gap 6 on screens 576px and wider -->
<div class="gap-4 sm:gap-6"></div>
```

For this reason, it's often a good idea to implement the mobile layout for a design first, then layer on any changes that make sense for `sm` screens, followed by `md` screens, etc.

### Targeting a single breakpoint

Tailwind's breakpoints only include a `min-width` and don't include a `max-width`, which means any utilities you add at a smaller breakpoint will also be applied at larger breakpoints.

If you'd like to apply a utility at one breakpoint only, the solution is to *undo* that utility at larger sizes by adding another utility that counteracts it.

Here is an example where the background color is red at the `md` breakpoint, but teal at every other breakpoint:

```html
<div class="gap-4 sm:gap-6 lg:gap-10"></div>
```

Notice that **we did not** have to specify a background color for the `sm` breakpoint or the `xl` breakpoint — you only need to specify when a utility should *start* taking effect, not when it should stop.
