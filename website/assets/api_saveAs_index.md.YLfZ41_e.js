import{_ as s,o as e,c as a,R as t}from"./chunks/framework.KXHDQ-dn.js";const E=JSON.parse('{"title":"saveAs","description":"","frontmatter":{},"headers":[],"relativePath":"api/saveAs/index.md","filePath":"api/saveAs/index.md"}'),i={name:"api/saveAs/index.md"},n=t(`<h1 id="saveas" tabindex="-1">saveAs <a class="header-anchor" href="#saveas" aria-label="Permalink to &quot;saveAs&quot;">​</a></h1><h2 id="namespaces" tabindex="-1">Namespaces <a class="header-anchor" href="#namespaces" aria-label="Permalink to &quot;Namespaces&quot;">​</a></h2><ul><li><a href="./namespaces/saveAs.html">saveAs</a></li></ul><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="saveas-1" tabindex="-1">saveAs() <a class="header-anchor" href="#saveas-1" aria-label="Permalink to &quot;saveAs()&quot;">​</a></h3><blockquote><p><strong>saveAs</strong>(<code>data</code>, <code>filenameOrOptions</code>, <code>options</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><p>FileSaver 现代版，支持通过 <code>fetcher</code> 获取文件流</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><code>string</code> | <code>Blob</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">文件下载地址或 <code>Blob</code> 数据</td></tr><tr><td style="text-align:left;"><code>filenameOrOptions</code></td><td style="text-align:left;"><code>string</code> | <a href="./#saveasoptions"><code>SaveAsOptions</code></a></td><td style="text-align:left;"><code>&#39;&#39;</code></td><td style="text-align:left;">文件名或配置项</td></tr><tr><td style="text-align:left;"><code>options</code></td><td style="text-align:left;"><a href="./#saveasoptions"><code>SaveAsOptions</code></a></td><td style="text-align:left;"><code>{}</code></td><td style="text-align:left;">配置项</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 默认配置 fetcher</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">saveAs.defaults.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fetcher</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(url, { method: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;GET&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> filename</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> parseContentDisposition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res.headers.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Content-Disposition&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)).filename</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 如果附件存在文件名，则设置下载文件名为附件名称</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (filename) options.filename </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> filename</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 返回 Blob 数据</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">blob</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 调用接口下载文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">saveAs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/api/example&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用原 FileSaver.saveAs</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">saveAs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;http://example.com/example.img&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;测试.img&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { fetcher: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })</span></span></code></pre></div><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><h3 id="saveasoptions" tabindex="-1">SaveAsOptions <a class="header-anchor" href="#saveasoptions" aria-label="Permalink to &quot;SaveAsOptions&quot;">​</a></h3><h4 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Property</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fetcher?</code></td><td style="text-align:left;"><code>PromiseFn</code>&lt;[<code>string</code>, <a href="./#saveasoptions"><code>SaveAsOptions</code></a>], <code>any</code>&gt;</td><td style="text-align:left;">通过 <code>url</code> 查询获取文件流，支持动态修改 <code>options</code>，最终返回非 <code>Blob</code> 数据时将停止后续操作<br><br><strong>Param</strong><br>文件下载地址<br><br><strong>Param</strong><br><code>saveAs()</code> 配置项<br><br><strong>Example</strong><br>\`</td></tr><tr><td style="text-align:left;">saveAs(&#39;/api/example&#39;, {</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">fetcher: async (url, options) =&gt; {</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr></tbody></table><pre><code> const res = await fetch(url, { method: &#39;GET&#39; })
 const filename = parseContentDisposition(res.headers.get(&#39;Content-Disposition&#39;)).filename
 if (filename) options.filename = filename
 return res.blob()
</code></pre><p>} }) <code>| |</code>filename?<code>|</code>string\` | 下载文件名称 |</p>`,19),l=[n];function h(r,d,o,p,k,c){return e(),a("div",null,l)}const y=s(i,[["render",h]]);export{E as __pageData,y as default};