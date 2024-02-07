import{_ as e,o as t,c as a,R as s}from"./chunks/framework.KXHDQ-dn.js";const g=JSON.parse('{"title":"mapTree","description":"","frontmatter":{},"headers":[],"relativePath":"api/mapTree.md","filePath":"api/mapTree.md"}'),i={name:"api/mapTree.md"},n=s(`<h1 id="maptree" tabindex="-1">mapTree <a class="header-anchor" href="#maptree" aria-label="Permalink to &quot;mapTree&quot;">​</a></h1><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="maptree-1" tabindex="-1">mapTree() <a class="header-anchor" href="#maptree-1" aria-label="Permalink to &quot;mapTree()&quot;">​</a></h3><blockquote><p><strong>mapTree</strong>&lt;<code>T</code>, <code>U</code>, <code>ChildrenKey</code>, <code>MappingChildrenKey</code>&gt;(<code>array</code>, <code>iterator</code>, <code>options</code>?): <code>{ [KeyType in string | number | symbol]: (({ [KeyType in keyof Omit&lt;U, ChildrenKey | MappingChildrenKey&gt;]: Omit&lt;U, ChildrenKey | MappingChildrenKey&gt;[KeyType]; }) &amp; Record&lt;ChildrenKey | MappingChildrenKey, ({ [KeyType in keyof Omit&lt;U, ChildrenKey | MappingChildrenKey&gt;]: Omit&lt;U, ChildrenKey | MappingChildrenKey&gt;[KeyType]; })[]&gt;)[KeyType] }</code>[]</p></blockquote><p>根据迭代器映射子节点生成新的树列表</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code> extends <code>Object</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>U</code> extends <code>Object</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>ChildrenKey</code> extends <code>string</code></td><td style="text-align:left;"><code>&quot;children&quot;</code></td></tr><tr><td style="text-align:left;"><code>MappingChildrenKey</code> extends <code>string</code></td><td style="text-align:left;"><code>never</code></td></tr></tbody></table><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>array</code></td><td style="text-align:left;"><code>T</code>[]</td><td style="text-align:left;">树列表</td></tr><tr><td style="text-align:left;"><code>iterator</code></td><td style="text-align:left;"><a href="./tree.html#treeiteratort-r"><code>TreeIterator</code></a>&lt;<code>T</code>, <code>U</code>&gt;</td><td style="text-align:left;">迭代器</td></tr><tr><td style="text-align:left;"><code>options</code>?</td><td style="text-align:left;"><a href="./mapTree.html#maptreeoptionschildrenkey-mappingchildrenkey"><code>MapTreeOptions</code></a>&lt;<code>ChildrenKey</code>, <code>MappingChildrenKey</code>&gt;</td><td style="text-align:left;">配置项</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>{ [KeyType in string | number | symbol]: (({ [KeyType in keyof Omit&lt;U, ChildrenKey | MappingChildrenKey&gt;]: Omit&lt;U, ChildrenKey | MappingChildrenKey&gt;[KeyType]; }) &amp; Record&lt;ChildrenKey | MappingChildrenKey, ({ [KeyType in keyof Omit&lt;U, ChildrenKey | MappingChildrenKey&gt;]: Omit&lt;U, ChildrenKey | MappingChildrenKey&gt;[KeyType]; })[]&gt;)[KeyType] }</code>[]</p><h4 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mapTree</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      children: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">node</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (node.id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      node.text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;22&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> node</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; [{...}, { id: 2, text: &#39;22&#39;, }]</span></span></code></pre></div><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><h3 id="maptreeoptions-childrenkey-mappingchildrenkey" tabindex="-1">MapTreeOptions&lt;ChildrenKey, MappingChildrenKey&gt; <a class="header-anchor" href="#maptreeoptions-childrenkey-mappingchildrenkey" aria-label="Permalink to &quot;MapTreeOptions\\&lt;ChildrenKey, MappingChildrenKey\\&gt;&quot;">​</a></h3><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>ChildrenKey</code> extends <code>string</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>MappingChildrenKey</code> extends <code>string</code></td><td style="text-align:left;"><code>never</code></td></tr></tbody></table><h4 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Property</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>childrenKey?</code></td><td style="text-align:left;"><code>ChildrenKey</code></td><td style="text-align:left;">子节点键<br><br><strong>Default</strong><br><code>&#39;children&#39;</code></td></tr><tr><td style="text-align:left;"><code>mapChildrenKey?</code></td><td style="text-align:left;"><code>MappingChildrenKey</code></td><td style="text-align:left;">映射后的子节点键，设置后则必定存在于节点上</td></tr></tbody></table>`,19),l=[n];function d(r,p,h,o,y,c){return t(),a("div",null,l)}const E=e(i,[["render",d]]);export{g as __pageData,E as default};
