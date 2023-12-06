import{_ as t,o as e,c as a,R as s}from"./chunks/framework.-3ULgdun.js";const u=JSON.parse('{"title":"padZero","description":"","frontmatter":{},"headers":[],"relativePath":"api/padZero.md","filePath":"api/padZero.md"}'),i={name:"api/padZero.md"},l=s(`<h1 id="padzero" tabindex="-1">padZero <a class="header-anchor" href="#padzero" aria-label="Permalink to &quot;padZero&quot;">​</a></h1><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="padzero-1" tabindex="-1">padZero() <a class="header-anchor" href="#padzero-1" aria-label="Permalink to &quot;padZero()&quot;">​</a></h3><blockquote><p><strong>padZero</strong>(<code>num</code>, <code>targetLength</code>): <code>string</code></p></blockquote><p>根据目标长度对数值前置补 0</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>num</code></td><td style="text-align:left;"><code>string</code> | <code>number</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">数值</td></tr><tr><td style="text-align:left;"><code>targetLength</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>2</code></td><td style="text-align:left;">目标长度</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code></p><h4 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">padZero</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;01&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">padZero</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;10&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">padZero</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;00100&#39;</span></span></code></pre></div>`,11),n=[l];function r(d,h,o,p,c,k){return e(),a("div",null,n)}const y=t(i,[["render",r]]);export{u as __pageData,y as default};