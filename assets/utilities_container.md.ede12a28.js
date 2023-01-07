import{_ as t,o as s,c as e,d as a}from"./app.023e1d6b.js";const g=JSON.parse('{"title":"Container","description":"","frontmatter":{"sidebarDepth":2},"headers":[],"relativePath":"utilities/container.md","lastUpdated":1630679197000}'),l={name:"utilities/container.md"},n=a(`<h1 id="container" tabindex="-1">Container <a class="header-anchor" href="#container" aria-hidden="true">#</a></h1><p>A component for fixing an element&#39;s width to the current breakpoint.</p><table><thead><tr><th style="text-align:left;">Class</th><th style="text-align:left;">Breakpoint</th><th style="text-align:left;">Properties</th></tr></thead><tbody><tr><td style="text-align:left;">container</td><td style="text-align:left;">None</td><td style="text-align:left;">width: 100%;</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">sm (576px)</td><td style="text-align:left;">max-width: 540px;</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">md (768px)</td><td style="text-align:left;">max-width: 720px;</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">lg (992px)</td><td style="text-align:left;">max-width: 960px;</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">xl (1200px)</td><td style="text-align:left;">max-width: 1140px;</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">xxl (1400px)</td><td style="text-align:left;">max-width: 1320px;</td></tr></tbody></table><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><p>To center a container, use the mx-auto utility:</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">container mx-auto</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- ... --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>To add horizontal padding, use the <code>px-{size}</code> utilities:</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">container mx-auto px-4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- ... --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,8),o=[n];function p(i,r,d,c,y,x){return s(),e("div",null,o)}const D=t(l,[["render",p]]);export{g as __pageData,D as default};
