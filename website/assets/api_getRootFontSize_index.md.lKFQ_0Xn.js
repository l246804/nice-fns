import{_ as e,o as t,c as a,R as s}from"./chunks/framework.KXHDQ-dn.js";const u=JSON.parse('{"title":"getRootFontSize","description":"","frontmatter":{},"headers":[],"relativePath":"api/getRootFontSize/index.md","filePath":"api/getRootFontSize/index.md"}'),i={name:"api/getRootFontSize/index.md"},o=s(`<h1 id="getrootfontsize" tabindex="-1">getRootFontSize <a class="header-anchor" href="#getrootfontsize" aria-label="Permalink to &quot;getRootFontSize&quot;">​</a></h1><h2 id="namespaces" tabindex="-1">Namespaces <a class="header-anchor" href="#namespaces" aria-label="Permalink to &quot;Namespaces&quot;">​</a></h2><ul><li><a href="./namespaces/getRootFontSize.html">getRootFontSize</a></li></ul><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="getrootfontsize-1" tabindex="-1">getRootFontSize() <a class="header-anchor" href="#getrootfontsize-1" aria-label="Permalink to &quot;getRootFontSize()&quot;">​</a></h3><blockquote><p><strong>getRootFontSize</strong>(<code>forceUpdate</code>): <code>number</code></p></blockquote><p>获取根元素字体大小</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>forceUpdate</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>false</code></td><td style="text-align:left;">由于会缓存根元素字体大小，若需更新则设置 <code>forceUpdate</code> 为 <code>true</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>number</code></p><h4 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 初始获取，数值将被缓存</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getRootFontSize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; 16</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 强制更新缓存</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getRootFontSize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; 14</span></span></code></pre></div>`,13),n=[o];function l(r,h,d,c,p,g){return t(),a("div",null,n)}const f=e(i,[["render",l]]);export{u as __pageData,f as default};
