import{_ as t,o as e,c as l,d as s}from"./app.023e1d6b.js";const f=JSON.parse('{"title":"Grid Template Columns","description":"","frontmatter":{"sidebarDepth":2},"headers":[],"relativePath":"utilities/grid-template-columns.md","lastUpdated":1631073853000}'),a={name:"utilities/grid-template-columns.md"},n=s(`<h1 id="grid-template-columns" tabindex="-1">Grid Template Columns <a class="header-anchor" href="#grid-template-columns" aria-hidden="true">#</a></h1><p>Utilities for specifying the columns in a grid layout.</p><table><thead><tr><th style="text-align:left;">Class</th><th style="text-align:left;">Properties</th></tr></thead><tbody><tr><td style="text-align:left;">grid-cols-1</td><td style="text-align:left;">grid-template-columns: repeat(1, minmax(0, 1fr));</td></tr><tr><td style="text-align:left;">grid-cols-2</td><td style="text-align:left;">grid-template-columns: repeat(2, minmax(0, 1fr));</td></tr><tr><td style="text-align:left;">grid-cols-3</td><td style="text-align:left;">grid-template-columns: repeat(3, minmax(0, 1fr));</td></tr><tr><td style="text-align:left;">grid-cols-4</td><td style="text-align:left;">grid-template-columns: repeat(4, minmax(0, 1fr));</td></tr><tr><td style="text-align:left;">grid-cols-5</td><td style="text-align:left;">grid-template-columns: repeat(5, minmax(0, 1fr));</td></tr><tr><td style="text-align:left;">grid-cols-6</td><td style="text-align:left;">grid-template-columns: repeat(6, minmax(0, 1fr));</td></tr><tr><td style="text-align:left;">grid-cols-7</td><td style="text-align:left;">grid-template-columns: repeat(7, minmax(0, 1fr));</td></tr><tr><td style="text-align:left;">grid-cols-8</td><td style="text-align:left;">grid-template-columns: repeat(8, minmax(0, 1fr));</td></tr><tr><td style="text-align:left;">grid-cols-9</td><td style="text-align:left;">grid-template-columns: repeat(9, minmax(0, 1fr));</td></tr><tr><td style="text-align:left;">grid-cols-10</td><td style="text-align:left;">grid-template-columns: repeat(10, minmax(0, 1fr));</td></tr><tr><td style="text-align:left;">grid-cols-11</td><td style="text-align:left;">grid-template-columns: repeat(11, minmax(0, 1fr));</td></tr><tr><td style="text-align:left;">grid-cols-12</td><td style="text-align:left;">grid-template-columns: repeat(12, minmax(0, 1fr));</td></tr><tr><td style="text-align:left;">grid-cols-none</td><td style="text-align:left;">grid-template-columns: none;</td></tr></tbody></table><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><p>Use the <code>grid-cols-{n}</code> utilities to create grids with n equally sized columns.</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">grid grid-cols-3 gap-4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- ... --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="responsive" tabindex="-1">Responsive <a class="header-anchor" href="#responsive" aria-hidden="true">#</a></h2><p>To control the columns of a grid at a specific breakpoint, add a <code>{screen}:</code> prefix to any existing grid-template-columns utility. For example, use <code>md:grid-cols-6</code> to apply the <code>grid-cols-6</code> utility at only medium screen sizes and above.</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">grid grid-cols-1 md:grid-cols-6</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- ... --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>For more information about Gridi responsive design features, check out the <a href="/gridi/guide/responsive-design.html">Responsive Design</a> documentation.</p>`,10),i=[n];function r(o,d,p,c,g,m){return e(),l("div",null,i)}const u=t(a,[["render",r]]);export{f as __pageData,u as default};
