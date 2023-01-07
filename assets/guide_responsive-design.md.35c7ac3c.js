import{_ as e,o as t,c as s,d as a}from"./app.023e1d6b.js";const m=JSON.parse('{"title":"Responsive Design","description":"","frontmatter":{"sidebarDepth":2},"headers":[],"relativePath":"guide/responsive-design.md","lastUpdated":1631069774000}'),l={name:"guide/responsive-design.md"},n=a(`<h1 id="responsive-design" tabindex="-1">Responsive Design <a class="header-anchor" href="#responsive-design" aria-hidden="true">#</a></h1><p>Using responsive utility variants to build adaptive user interfaces.</p><p>Every utility class in Gridi can be applied conditionally at different breakpoints, which makes it a piece of cake to build complex responsive interfaces without ever leaving your HTML.</p><p>There are five breakpoints by default, inspired by common device resolutions:</p><table><thead><tr><th style="text-align:left;">Breakpoint prefix</th><th style="text-align:left;">Minimum width</th><th style="text-align:left;">CSS</th></tr></thead><tbody><tr><td style="text-align:left;"><code>sm</code></td><td style="text-align:left;">576px</td><td style="text-align:left;"><code>@media (min-width: 576px) { ... }</code></td></tr><tr><td style="text-align:left;"><code>md</code></td><td style="text-align:left;">768px</td><td style="text-align:left;"><code>@media (min-width: 768px) { ... }</code></td></tr><tr><td style="text-align:left;"><code>lg</code></td><td style="text-align:left;">992px</td><td style="text-align:left;"><code>@media (min-width: 992px) { ... }</code></td></tr><tr><td style="text-align:left;"><code>xl</code></td><td style="text-align:left;">1200px</td><td style="text-align:left;"><code>@media (min-width: 1200px) { ... }</code></td></tr><tr><td style="text-align:left;"><code>xxl</code></td><td style="text-align:left;">1400px</td><td style="text-align:left;"><code>@media (min-width: 1400px) { ... }</code></td></tr></tbody></table><p>To add a utility but only have it take effect at a certain breakpoint, all you need to do is prefix the utility with the breakpoint name, followed by the : character:</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">md:flex</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- ... --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>This works for every utility class in the framework, which means you can change literally anything at a given breakpoint</p><p>Here’s how the example above works:</p><ul><li>By default, the outer div is display: block, but by adding the md:flex utility, it becomes display: flex on medium screens and larger.</li></ul><p>We’ve only used one breakpoint in this example, but you could easily customize this component at other sizes using the sm, lg, xl, or 2xl responsive prefixes as well.</p><h2 id="mobile-first" tabindex="-1">Mobile First <a class="header-anchor" href="#mobile-first" aria-hidden="true">#</a></h2><p>By default, Tailwind uses a mobile first breakpoint system, similar to what you might be used to in other frameworks like Bootstrap.</p><p>What this means is that unprefixed utilities (like <code>uppercase</code>) take effect on all screen sizes, while prefixed utilities (like <code>md:uppercase</code>) only take effect at the specified breakpoint <em>and above</em>.</p><h3 id="targeting-mobile-screens" tabindex="-1">Targeting mobile screens <a class="header-anchor" href="#targeting-mobile-screens" aria-hidden="true">#</a></h3><p>Where this approach surprises people most often is that to style something for mobile, you need to use the unprefixed version of a utility, not the <code>sm:</code> prefixed version. Don&#39;t think of <code>sm:</code> as meaning &quot;on small screens&quot;, think of it as &quot;at the small <em>breakpoint</em>&quot;.</p><div class="danger custom-block"><p class="custom-block-title">Wrong</p><p>Don&#39;t use <code>sm:</code> to target mobile devices</p></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- This will only add gap 6 on screens 576px and wider, not on small screens --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sm:gap-6</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Use unprefixed utilities to target mobile, and override them at larger breakpoints</p></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- This will add gap 4 on mobile, and gap 6 on screens 576px and wider --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">gap-4 sm:gap-6</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>For this reason, it&#39;s often a good idea to implement the mobile layout for a design first, then layer on any changes that make sense for <code>sm</code> screens, followed by <code>md</code> screens, etc.</p><h3 id="targeting-a-single-breakpoint" tabindex="-1">Targeting a single breakpoint <a class="header-anchor" href="#targeting-a-single-breakpoint" aria-hidden="true">#</a></h3><p>Gridi breakpoints only include a <code>min-width</code> and don&#39;t include a <code>max-width</code>, which means any utilities you add at a smaller breakpoint will also be applied at larger breakpoints.</p><p>If you&#39;d like to apply a utility at one breakpoint only, the solution is to <em>undo</em> that utility at larger sizes by adding another utility that counteracts it.</p><p>Here is an example where the background color is red at the <code>md</code> breakpoint, but teal at every other breakpoint:</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">gap-4 sm:gap-6 lg:gap-10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>Notice that <strong>we did not</strong> have to specify a background color for the <code>sm</code> breakpoint or the <code>xl</code> breakpoint — you only need to specify when a utility should <em>start</em> taking effect, not when it should stop.</p>`,27),o=[n];function i(p,r,d,c,y,h){return t(),s("div",null,o)}const u=e(l,[["render",i]]);export{m as __pageData,u as default};
