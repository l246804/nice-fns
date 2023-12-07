import{_ as a,o as s,c as i,R as t}from"./chunks/framework.KXHDQ-dn.js";const E=JSON.parse('{"title":"addUnit","description":"","frontmatter":{},"headers":[],"relativePath":"api/addUnit/index.md","filePath":"api/addUnit/index.md"}'),n={name:"api/addUnit/index.md"},e=t(`<h1 id="addunit" tabindex="-1">addUnit <a class="header-anchor" href="#addunit" aria-label="Permalink to &quot;addUnit&quot;">​</a></h1><h2 id="namespaces" tabindex="-1">Namespaces <a class="header-anchor" href="#namespaces" aria-label="Permalink to &quot;Namespaces&quot;">​</a></h2><ul><li><a href="./namespaces/addUnit.html">addUnit</a></li></ul><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="addunit-1" tabindex="-1">addUnit() <a class="header-anchor" href="#addunit-1" aria-label="Permalink to &quot;addUnit()&quot;">​</a></h3><blockquote><p><strong>addUnit</strong>(<code>value</code>, <code>unit</code>): <code>string</code></p></blockquote><p>为数字或字符串数字添加单位，若为 <code>null</code> 或 <code>undefined</code>，则返回空字符串，其他类型则强转为字符串</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">数值</td></tr><tr><td style="text-align:left;"><code>unit</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>addUnit.defaultUnit</code></td><td style="text-align:left;">单位</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code></p><h4 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addUnit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">123</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; &#39;123px&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addUnit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;vw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; &#39;100vw&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addUnit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100vh&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; &#39;100vh&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">addUnit.defaultUnit </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vw&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addUnit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; &#39;100vw&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addUnit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addUnit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; &#39;true&#39;</span></span></code></pre></div>`,13),l=[e];function d(h,p,r,k,c,o){return s(),i("div",null,l)}const u=a(n,[["render",d]]);export{E as __pageData,u as default};