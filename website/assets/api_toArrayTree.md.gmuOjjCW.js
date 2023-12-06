import{_ as t,o as e,c as s,R as a}from"./chunks/framework.-3ULgdun.js";const y=JSON.parse('{"title":"toArrayTree","description":"","frontmatter":{},"headers":[],"relativePath":"api/toArrayTree.md","filePath":"api/toArrayTree.md"}'),i={name:"api/toArrayTree.md"},l=a(`<h1 id="toarraytree" tabindex="-1">toArrayTree <a class="header-anchor" href="#toarraytree" aria-label="Permalink to &quot;toArrayTree&quot;">​</a></h1><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="toarraytree-1" tabindex="-1">toArrayTree() <a class="header-anchor" href="#toarraytree-1" aria-label="Permalink to &quot;toArrayTree()&quot;">​</a></h3><blockquote><p><strong>toArrayTree</strong>&lt;<code>T</code>, <code>DataKey</code>&gt;(<code>array</code>, <code>options</code>?): <code>T</code> &amp; <code>Record</code>&lt;<code>DataKey</code>, <code>T</code>&gt; &amp; <code>Object</code>[]</p></blockquote><p>将一个层级关系的数据列表转成树结构列表</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code> extends <code>object</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>DataKey</code> extends <code>string</code></td><td style="text-align:left;"><code>never</code></td></tr></tbody></table><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>array</code></td><td style="text-align:left;"><code>T</code>[]</td><td style="text-align:left;">包含父子级关系的数组列表</td></tr><tr><td style="text-align:left;"><code>options</code>?</td><td style="text-align:left;"><a href="./toArrayTree.html#toarraytreeoptionst-datakey"><code>ToArrayTreeOptions</code></a>&lt;<code>T</code>, <code>DataKey</code>&gt;</td><td style="text-align:left;">配置项</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>T</code> &amp; <code>Record</code>&lt;<code>DataKey</code>, <code>T</code>&gt; &amp; <code>Object</code>[]</p><h4 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 默认树结构</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> list</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;111&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, parentId: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;222&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;333&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, parentId: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;444&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tree</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> toArrayTree</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(list)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;111&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    children: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;222&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        parentId: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        children: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;444&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            parentId: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            children: []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;333&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    children: []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><h3 id="toarraytreeoptions-t-datakey" tabindex="-1">ToArrayTreeOptions&lt;T, DataKey&gt; <a class="header-anchor" href="#toarraytreeoptions-t-datakey" aria-label="Permalink to &quot;ToArrayTreeOptions\\&lt;T, DataKey\\&gt;&quot;">​</a></h3><h4 id="extends" tabindex="-1">Extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;Extends&quot;">​</a></h4><ul><li><a href="./tree.html#basictreeoptionsdatakey"><code>BasicTreeOptions</code></a>&lt;<code>DataKey</code>&gt;</li></ul><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code> extends <code>object</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>DataKey</code> extends <code>string</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Property</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th><th style="text-align:left;">Inheritance</th></tr></thead><tbody><tr><td style="text-align:left;"><code>childrenKey?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">子节点键<br><br><strong>Default</strong><br><code>&#39;children&#39;</code></td><td style="text-align:left;"><a href="./tree.html#basictreeoptionsdatakey"><code>tree.BasicTreeOptions.childrenKey</code></a></td></tr><tr><td style="text-align:left;"><code>dataKey?</code></td><td style="text-align:left;"><code>DataKey</code></td><td style="text-align:left;">数据存放键，未设置时将平铺在节点上</td><td style="text-align:left;"><a href="./tree.html#basictreeoptionsdatakey"><code>tree.BasicTreeOptions.dataKey</code></a></td></tr><tr><td style="text-align:left;"><code>key?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">节点键<br><br><strong>Default</strong><br><code>&#39;id&#39;</code></td><td style="text-align:left;"><a href="./tree.html#basictreeoptionsdatakey"><code>tree.BasicTreeOptions.key</code></a></td></tr><tr><td style="text-align:left;"><code>keyMap?</code></td><td style="text-align:left;"><code>Pick</code>&lt;<a href="./tree.html#basictreeoptionsdatakey"><code>BasicTreeOptions</code></a>&lt;<code>string</code>&gt;, <code>&quot;key&quot;</code> | <code>&quot;parentKey&quot;</code> | <code>&quot;childrenKey&quot;</code>&gt;</td><td style="text-align:left;">键映射，映射后节点将必定包含映射键</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>orderBy?</code></td><td style="text-align:left;">[<code>MaybeArray</code>&lt;keyof <code>T</code>&gt;, <code>MaybeArray</code>&lt;<code>&quot;asc&quot;</code> | <code>&quot;desc&quot;</code>&gt;]</td><td style="text-align:left;">排序数组，依赖于 <code>orderBy()</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>parentKey?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">父节点键<br><br><strong>Default</strong><br><code>&#39;parentId&#39;</code></td><td style="text-align:left;"><a href="./tree.html#basictreeoptionsdatakey"><code>tree.BasicTreeOptions.parentKey</code></a></td></tr><tr><td style="text-align:left;"><code>strict?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">严格模式，如果设为 <code>true</code>，会去掉父子关联不存在数据，当子节点为空时将没有 <code>childrenKey</code> 和 <code>keyMap.childrenKey</code> 属性<br><br><strong>Default</strong><br><code>false</code></td><td style="text-align:left;"><a href="./tree.html#basictreeoptionsdatakey"><code>tree.BasicTreeOptions.strict</code></a></td></tr></tbody></table>`,21),n=[l];function d(r,h,p,o,k,c){return e(),s("div",null,n)}const g=t(i,[["render",d]]);export{y as __pageData,g as default};
