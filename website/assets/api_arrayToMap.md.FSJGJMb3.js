import{_ as a,o as t,c as e,R as s}from"./chunks/framework.KXHDQ-dn.js";const g=JSON.parse('{"title":"arrayToMap","description":"","frontmatter":{},"headers":[],"relativePath":"api/arrayToMap.md","filePath":"api/arrayToMap.md"}'),i={name:"api/arrayToMap.md"},r=s(`<h1 id="arraytomap" tabindex="-1">arrayToMap <a class="header-anchor" href="#arraytomap" aria-label="Permalink to &quot;arrayToMap&quot;">​</a></h1><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="arraytomap-1" tabindex="-1">arrayToMap() <a class="header-anchor" href="#arraytomap-1" aria-label="Permalink to &quot;arrayToMap()&quot;">​</a></h3><h4 id="arraytomap-array-options" tabindex="-1">arrayToMap(array, options) <a class="header-anchor" href="#arraytomap-array-options" aria-label="Permalink to &quot;arrayToMap(array, options)&quot;">​</a></h4><blockquote><p><strong>arrayToMap</strong>&lt;<code>T</code>, <code>PrimaryKey</code>, <code>UseMap</code>&gt;(<code>array</code>, <code>options</code>): <code>ArrayToMapResult</code>&lt;<code>T</code>[<code>PrimaryKey</code>], <code>T</code>, <code>UseMap</code>&gt;</p></blockquote><p>对象数组转映射对象</p><h5 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code> extends <code>Object</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>PrimaryKey</code> extends <code>string</code> | <code>number</code> | <code>symbol</code></td><td style="text-align:left;">keyof <code>T</code></td></tr><tr><td style="text-align:left;"><code>UseMap</code> extends <code>boolean</code></td><td style="text-align:left;"><code>false</code></td></tr></tbody></table><h5 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>array</code></td><td style="text-align:left;"><code>T</code>[]</td><td style="text-align:left;">对象数组</td></tr><tr><td style="text-align:left;"><code>options</code></td><td style="text-align:left;"><a href="./arrayToMap.html#arraytomapoptionsusemap-primarykey"><code>ArrayToMapOptions</code></a>&lt;<code>UseMap</code>, <code>PrimaryKey</code> extends <code>string</code> ? <code>PrimaryKey</code> : <code>never</code>&gt;</td><td style="text-align:left;">配置项</td></tr></tbody></table><h5 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>ArrayToMapResult</code>&lt;<code>T</code>[<code>PrimaryKey</code>], <code>T</code>, <code>UseMap</code>&gt;</p><h5 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h5><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> array</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [{ id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, { id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">arrayToMap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(array, { primaryKey: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;id&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; Object { &#39;1&#39;: { id: 1, text: &#39;a&#39; }, &#39;2&#39;: { id: 2, text: &#39;b&#39; } }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">arrayToMap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(array, { primaryKey: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;id&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, useMap: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; Map [[1, { id: 1, text: &#39;a&#39; }], [2, { id: 2, text: &#39;b&#39; }]]</span></span></code></pre></div><h4 id="arraytomap-array-options-1" tabindex="-1">arrayToMap(array, options) <a class="header-anchor" href="#arraytomap-array-options-1" aria-label="Permalink to &quot;arrayToMap(array, options)&quot;">​</a></h4><blockquote><p><strong>arrayToMap</strong>&lt;<code>T</code>, <code>UseMap</code>&gt;(<code>array</code>, <code>options</code>?): <code>ArrayToMapResult</code>&lt;<code>T</code>, <code>T</code>, <code>UseMap</code>&gt;</p></blockquote><p>原始值数组转映射对象</p><h5 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code> extends <code>Primitive</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>UseMap</code> extends <code>boolean</code></td><td style="text-align:left;"><code>false</code></td></tr></tbody></table><h5 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>array</code></td><td style="text-align:left;"><code>T</code>[]</td><td style="text-align:left;">原始值数组</td></tr><tr><td style="text-align:left;"><code>options</code>?</td><td style="text-align:left;"><code>Omit</code>&lt;<a href="./arrayToMap.html#arraytomapoptionsusemap-primarykey"><code>ArrayToMapOptions</code></a>&lt;<code>UseMap</code>, <code>string</code>&gt;, <code>&quot;primaryKey&quot;</code>&gt;</td><td style="text-align:left;">配置项</td></tr></tbody></table><h5 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>ArrayToMapResult</code>&lt;<code>T</code>, <code>T</code>, <code>UseMap</code>&gt;</p><h5 id="example-1" tabindex="-1">Example <a class="header-anchor" href="#example-1" aria-label="Permalink to &quot;Example&quot;">​</a></h5><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> array</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;c&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">arrayToMap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(array)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; Object { &#39;a&#39;: &#39;a&#39;, &#39;b&#39;: &#39;b&#39;, &#39;c&#39;: &#39;c&#39; }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">arrayToMap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(array, { useMap: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; Map [[&#39;a&#39;, &#39;a&#39;], [&#39;b&#39;, &#39;b&#39;], [&#39;c&#39;, &#39;c&#39;]]</span></span></code></pre></div><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><h3 id="arraytomapoptions-usemap-primarykey" tabindex="-1">ArrayToMapOptions&lt;UseMap, PrimaryKey&gt; <a class="header-anchor" href="#arraytomapoptions-usemap-primarykey" aria-label="Permalink to &quot;ArrayToMapOptions\\&lt;UseMap, PrimaryKey\\&gt;&quot;">​</a></h3><h4 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>UseMap</code> extends <code>boolean</code></td><td style="text-align:left;"><code>false</code></td></tr><tr><td style="text-align:left;"><code>PrimaryKey</code> extends <code>string</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Property</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>primaryKey</code></td><td style="text-align:left;"><code>PrimaryKey</code></td><td style="text-align:left;">对象数组转映射的主键</td></tr><tr><td style="text-align:left;"><code>useMap?</code></td><td style="text-align:left;"><code>UseMap</code></td><td style="text-align:left;">使用 <code>Map</code> 类型进行映射，设为 <code>false</code> 时使用 <code>Object</code> 类型映射<br><br><strong>Default</strong><br><code>false</code></td></tr></tbody></table>`,31),l=[r];function o(d,n,p,h,c,y){return t(),e("div",null,l)}const m=a(i,[["render",o]]);export{g as __pageData,m as default};
