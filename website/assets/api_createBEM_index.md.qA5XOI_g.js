import{_ as e,o as t,c as a,R as s}from"./chunks/framework.KXHDQ-dn.js";const b=JSON.parse('{"title":"createBEM","description":"","frontmatter":{},"headers":[],"relativePath":"api/createBEM/index.md","filePath":"api/createBEM/index.md"}'),l={name:"api/createBEM/index.md"},i=s(`<h1 id="createbem" tabindex="-1">createBEM <a class="header-anchor" href="#createbem" aria-label="Permalink to &quot;createBEM&quot;">​</a></h1><h2 id="namespaces" tabindex="-1">Namespaces <a class="header-anchor" href="#namespaces" aria-label="Permalink to &quot;Namespaces&quot;">​</a></h2><ul><li><a href="./namespaces/createBEM.html">createBEM</a></li></ul><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="createbem-1" tabindex="-1">createBEM() <a class="header-anchor" href="#createbem-1" aria-label="Permalink to &quot;createBEM()&quot;">​</a></h3><blockquote><p><strong>createBEM</strong>(<code>block</code>, <code>namespaceOverrides</code>): <code>Object</code></p></blockquote><p>创建 <code>BEM</code> 格式的 <code>CSS</code> 类名辅助工具</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>block</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">块级名称</td></tr><tr><td style="text-align:left;"><code>namespaceOverrides</code></td><td style="text-align:left;"><code>MaybeGetter</code>&lt;<code>string</code>&gt;</td><td style="text-align:left;"><code>createBEM.defaults.namespace</code></td><td style="text-align:left;">覆盖默认命名空间名称</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Object</code></p><blockquote><h5 id="b" tabindex="-1">b <a class="header-anchor" href="#b" aria-label="Permalink to &quot;b&quot;">​</a></h5><blockquote><p><strong>b</strong>: (<code>blockSuffix</code>) =&gt; <code>string</code></p></blockquote><h6 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h6><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>blockSuffix</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>&#39;&#39;</code></td></tr></tbody></table><h6 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h6><p><code>string</code></p><h5 id="be" tabindex="-1">be <a class="header-anchor" href="#be" aria-label="Permalink to &quot;be&quot;">​</a></h5><blockquote><p><strong>be</strong>: (<code>blockSuffix</code>, <code>element</code>) =&gt; <code>string</code></p></blockquote><h6 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h6><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>blockSuffix</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>&#39;&#39;</code></td></tr><tr><td style="text-align:left;"><code>element</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>&#39;&#39;</code></td></tr></tbody></table><h6 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h6><p><code>string</code></p><h5 id="bem" tabindex="-1">bem <a class="header-anchor" href="#bem" aria-label="Permalink to &quot;bem&quot;">​</a></h5><blockquote><p><strong>bem</strong>: (<code>blockSuffix</code>, <code>element</code>, <code>modifier</code>) =&gt; <code>string</code></p></blockquote><h6 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h6><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>blockSuffix</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>&#39;&#39;</code></td></tr><tr><td style="text-align:left;"><code>element</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>&#39;&#39;</code></td></tr><tr><td style="text-align:left;"><code>modifier</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>&#39;&#39;</code></td></tr></tbody></table><h6 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h6><p><code>string</code></p><h5 id="bm" tabindex="-1">bm <a class="header-anchor" href="#bm" aria-label="Permalink to &quot;bm&quot;">​</a></h5><blockquote><p><strong>bm</strong>: (<code>blockSuffix</code>, <code>modifier</code>) =&gt; <code>string</code></p></blockquote><h6 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h6><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>blockSuffix</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>&#39;&#39;</code></td></tr><tr><td style="text-align:left;"><code>modifier</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>&#39;&#39;</code></td></tr></tbody></table><h6 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h6><p><code>string</code></p><h5 id="e" tabindex="-1">e <a class="header-anchor" href="#e" aria-label="Permalink to &quot;e&quot;">​</a></h5><blockquote><p><strong>e</strong>: (<code>element</code>) =&gt; <code>string</code></p></blockquote><h6 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h6><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>element</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>&#39;&#39;</code></td></tr></tbody></table><h6 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h6><p><code>string</code></p><h5 id="em" tabindex="-1">em <a class="header-anchor" href="#em" aria-label="Permalink to &quot;em&quot;">​</a></h5><blockquote><p><strong>em</strong>: (<code>element</code>, <code>modifier</code>) =&gt; <code>string</code></p></blockquote><h6 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h6><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>element</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>&#39;&#39;</code></td></tr><tr><td style="text-align:left;"><code>modifier</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>&#39;&#39;</code></td></tr></tbody></table><h6 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h6><p><code>string</code></p><h5 id="m" tabindex="-1">m <a class="header-anchor" href="#m" aria-label="Permalink to &quot;m&quot;">​</a></h5><blockquote><p><strong>m</strong>: (<code>modifier</code>) =&gt; <code>string</code></p></blockquote><h6 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h6><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>modifier</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>&#39;&#39;</code></td></tr></tbody></table><h6 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h6><p><code>string</code></p><h5 id="namespace" tabindex="-1">namespace <a class="header-anchor" href="#namespace" aria-label="Permalink to &quot;namespace&quot;">​</a></h5><blockquote><p><strong>namespace</strong>: <code>string</code></p></blockquote></blockquote><h4 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ns</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createBEM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;block&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;el&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ns.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; &#39;el-block&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ns.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">be</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;header&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;span&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; &#39;el-block-header__span&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ns.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;header&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;span&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;empty&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; &#39;el-block-header__span--empty&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ns.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;header&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; &#39;el-block__header&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ns.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">em</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;span&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;empty&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; &#39;el-block__span--empty&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ns.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">m</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;empty&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; &#39;el-block--empty&#39;</span></span></code></pre></div><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><h3 id="createbemoptions" tabindex="-1">CreateBEMOptions <a class="header-anchor" href="#createbemoptions" aria-label="Permalink to &quot;CreateBEMOptions&quot;">​</a></h3><h4 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Property</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>namespace</code></td><td style="text-align:left;"><code>MaybeGetter</code>&lt;<code>string</code>&gt;</td><td style="text-align:left;">命名空间<br><br><strong>Default</strong><br><code>&#39;&#39;</code></td></tr></tbody></table>`,18),r=[i];function n(d,o,h,c,p,k){return t(),a("div",null,r)}const y=e(l,[["render",n]]);export{b as __pageData,y as default};
