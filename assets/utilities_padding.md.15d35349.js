import{_ as s,o as a,c as l,Q as t}from"./chunks/framework.bd115ae6.js";const h=JSON.parse('{"title":"Padding","description":"","frontmatter":{},"headers":[],"relativePath":"utilities/padding.md","filePath":"utilities/padding.md","lastUpdated":1635373989000}'),o={name:"utilities/padding.md"},n=t(`<h1 id="padding" tabindex="-1">Padding <a class="header-anchor" href="#padding" aria-label="Permalink to &quot;Padding&quot;">​</a></h1><p>Utilities for controlling an element&#39;s padding.</p><table><thead><tr><th style="text-align:left;">Class</th><th style="text-align:left;">Properties</th></tr></thead><tbody><tr><td style="text-align:left;">pt-<code>[0-30]</code></td><td style="text-align:left;">padding-top: 0 - 24rem;</td></tr><tr><td style="text-align:left;">pb-<code>[0-30]</code></td><td style="text-align:left;">padding-bottom: 0 - 24rem;</td></tr><tr><td style="text-align:left;">pr-<code>[0-30]</code></td><td style="text-align:left;">padding-right: 0 - 24rem;</td></tr><tr><td style="text-align:left;">pl-<code>[0-30]</code></td><td style="text-align:left;">padding-left: 0 - 24rem;</td></tr><tr><td style="text-align:left;">px-<code>[0-30]</code></td><td style="text-align:left;">padding-left: 0 - 24rem; <br> padding-right: 0 - 24rem;</td></tr><tr><td style="text-align:left;">py-<code>[0-30]</code></td><td style="text-align:left;">padding-top: 0 - 24rem; <br> padding-bottom: 0 - 24rem;</td></tr><tr><td style="text-align:left;">p-<code>[0-30]</code></td><td style="text-align:left;">padding: 0 - 24rem;</td></tr></tbody></table><h2 id="add-padding-to-a-single-side" tabindex="-1">Add padding to a single side <a class="header-anchor" href="#add-padding-to-a-single-side" aria-label="Permalink to &quot;Add padding to a single side&quot;">​</a></h2><p>Control the padding on one side of an element using the <code>p{t|r|b|l}-{size}</code> utilities.</p><p>For example, <code>pt-6</code> would add <code>1.5rem</code> of padding to the top of an element, <code>pr-4</code> would add <code>1rem</code> of padding to the right of an element, <code>pb-8</code> would add <code>2rem</code> of padding to the bottom of an element, and <code>pl-2</code> would add <code>0.5rem</code> of padding to the left of an element.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;pt-6&quot;</span><span style="color:#E1E4E8;">&gt;pt-6&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;pr-4&quot;</span><span style="color:#E1E4E8;">&gt;pr-4&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;pb-8&quot;</span><span style="color:#E1E4E8;">&gt;pb-8&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;pl-2&quot;</span><span style="color:#E1E4E8;">&gt;pl-2&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;pt-6&quot;</span><span style="color:#24292E;">&gt;pt-6&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;pr-4&quot;</span><span style="color:#24292E;">&gt;pr-4&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;pb-8&quot;</span><span style="color:#24292E;">&gt;pb-8&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;pl-2&quot;</span><span style="color:#24292E;">&gt;pl-2&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="add-horizontal-padding" tabindex="-1">Add horizontal padding <a class="header-anchor" href="#add-horizontal-padding" aria-label="Permalink to &quot;Add horizontal padding&quot;">​</a></h2><p>Control the horizontal padding of an element using the <code>px-{size}</code> utilities.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;px-8&quot;</span><span style="color:#E1E4E8;">&gt;px-8&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;px-8&quot;</span><span style="color:#24292E;">&gt;px-8&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="add-vertical-padding" tabindex="-1">Add vertical padding <a class="header-anchor" href="#add-vertical-padding" aria-label="Permalink to &quot;Add vertical padding&quot;">​</a></h2><p>Control the vertical padding of an element using the <code>py-{size}</code> utilities.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;py-8&quot;</span><span style="color:#E1E4E8;">&gt;py-8&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;py-8&quot;</span><span style="color:#24292E;">&gt;py-8&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="add-padding-to-all-sides" tabindex="-1">Add padding to all sides <a class="header-anchor" href="#add-padding-to-all-sides" aria-label="Permalink to &quot;Add padding to all sides&quot;">​</a></h2><p>Control the padding on all sides of an element using the <code>p-{size}</code> utilities.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;p-8&quot;</span><span style="color:#E1E4E8;">&gt;p-8&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;p-8&quot;</span><span style="color:#24292E;">&gt;p-8&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="responsive" tabindex="-1">Responsive <a class="header-anchor" href="#responsive" aria-label="Permalink to &quot;Responsive&quot;">​</a></h2><p>To control the padding of an element at a specific breakpoint, add a <code>{screen}:</code> prefix to any existing padding utility. For example, adding the class <code>md:py-8</code> to an element would apply the <code>py-8</code> utility at medium screen sizes and above.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;py-4 md:py-8&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">&lt;!-- ... --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;py-4 md:py-8&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">&lt;!-- ... --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>For more information about Gridi responsive design features, check out the <a href="/gridi/guide/responsive-design.html">Responsive Design</a> documentation.</p>`,20),e=[n];function p(d,c,r,i,y,E){return a(),l("div",null,e)}const u=s(o,[["render",p]]);export{h as __pageData,u as default};
