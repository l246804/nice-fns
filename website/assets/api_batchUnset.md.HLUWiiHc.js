import{_ as t,o as e,c as a,R as s}from"./chunks/framework.KXHDQ-dn.js";const u=JSON.parse('{"title":"batchUnset","description":"","frontmatter":{},"headers":[],"relativePath":"api/batchUnset.md","filePath":"api/batchUnset.md"}'),i={name:"api/batchUnset.md"},n=s(`<h1 id="batchunset" tabindex="-1">batchUnset <a class="header-anchor" href="#batchunset" aria-label="Permalink to &quot;batchUnset&quot;">​</a></h1><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="batchunset-1" tabindex="-1">batchUnset() <a class="header-anchor" href="#batchunset-1" aria-label="Permalink to &quot;batchUnset()&quot;">​</a></h3><blockquote><p><strong>batchUnset</strong>(<code>object</code>, <code>keys</code>): <code>boolean</code>[]</p></blockquote><p>批量执行 <code>lodash.unset</code></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>object</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">目标对象</td></tr><tr><td style="text-align:left;"><code>keys</code></td><td style="text-align:left;"><code>PropertyPath</code>[]</td><td style="text-align:left;"><code>[]</code></td><td style="text-align:left;">属性列表</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code>[]</p><h4 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">batchUnset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ a: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, b: { c: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, d: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, e: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } }, [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;b.e&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; { b: { c: 2, d: 4 } }</span></span></code></pre></div>`,11),l=[n];function h(d,o,r,c,p,k){return e(),a("div",null,l)}const g=t(i,[["render",h]]);export{u as __pageData,g as default};