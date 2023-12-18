import{_ as t,o as e,c as d,R as a}from"./chunks/framework.KXHDQ-dn.js";const x=JSON.parse('{"title":"tree","description":"","frontmatter":{},"headers":[],"relativePath":"api/tree.md","filePath":"api/tree.md"}'),r={name:"api/tree.md"},l=a('<h1 id="tree" tabindex="-1">tree <a class="header-anchor" href="#tree" aria-label="Permalink to &quot;tree&quot;">​</a></h1><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><h3 id="basictreeoptions-key-parentkey-childrenkey-datakey-strict" tabindex="-1">BasicTreeOptions&lt;Key, ParentKey, ChildrenKey, DataKey, Strict&gt; <a class="header-anchor" href="#basictreeoptions-key-parentkey-childrenkey-datakey-strict" aria-label="Permalink to &quot;BasicTreeOptions\\&lt;Key, ParentKey, ChildrenKey, DataKey, Strict\\&gt;&quot;">​</a></h3><h4 id="extended-by" tabindex="-1">Extended By <a class="header-anchor" href="#extended-by" aria-label="Permalink to &quot;Extended By&quot;">​</a></h4><ul><li><a href="./toArrayTree.html#toarraytreeoptionst-key-parentkey-childrenkey-datakey-strict"><code>ToArrayTreeOptions</code></a></li></ul><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>Key</code> extends <code>string</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>ParentKey</code> extends <code>string</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>ChildrenKey</code> extends <code>string</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>DataKey</code> extends <code>string</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>Strict</code> extends <code>boolean</code></td><td style="text-align:left;"><code>false</code></td></tr></tbody></table><h4 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Property</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>childrenKey?</code></td><td style="text-align:left;"><code>ChildrenKey</code></td><td style="text-align:left;">子节点键<br><br><strong>Default</strong><br><code>&#39;children&#39;</code></td></tr><tr><td style="text-align:left;"><code>dataKey?</code></td><td style="text-align:left;"><code>DataKey</code></td><td style="text-align:left;">数据存放键，未设置时将平铺在节点上</td></tr><tr><td style="text-align:left;"><code>key?</code></td><td style="text-align:left;"><code>Key</code></td><td style="text-align:left;">节点键<br><br><strong>Default</strong><br><code>&#39;id&#39;</code></td></tr><tr><td style="text-align:left;"><code>parentKey?</code></td><td style="text-align:left;"><code>ParentKey</code></td><td style="text-align:left;">父节点键<br><br><strong>Default</strong><br><code>&#39;parentId&#39;</code></td></tr><tr><td style="text-align:left;"><code>strict?</code></td><td style="text-align:left;"><code>Strict</code></td><td style="text-align:left;">严格模式，如果设为 <code>true</code>，会去掉父子关联不存在数据，当子节点为空时将没有 <code>childrenKey</code> 和 <code>keyMap.childrenKey</code> 属性<br><br><strong>Default</strong><br><code>false</code></td></tr></tbody></table><h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="treeiterator-t-r" tabindex="-1">TreeIterator&lt;T, R&gt; <a class="header-anchor" href="#treeiterator-t-r" aria-label="Permalink to &quot;TreeIterator\\&lt;T, R\\&gt;&quot;">​</a></h3><blockquote><p><strong>TreeIterator</strong>&lt;<code>T</code>, <code>R</code>&gt;: (<code>node</code>, <code>index</code>, <code>parent</code>, <code>paths</code>, <code>nodes</code>, <code>tree</code>) =&gt; <code>R</code></p></blockquote><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>R</code></td><td style="text-align:left;"><code>void</code></td></tr></tbody></table><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>node</code></td><td style="text-align:left;"><code>T</code></td></tr><tr><td style="text-align:left;"><code>index</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>parent</code></td><td style="text-align:left;"><code>MaybeNullish</code>&lt;<code>T</code>&gt;</td></tr><tr><td style="text-align:left;"><code>paths</code></td><td style="text-align:left;"><code>string</code>[]</td></tr><tr><td style="text-align:left;"><code>nodes</code></td><td style="text-align:left;"><code>T</code>[]</td></tr><tr><td style="text-align:left;"><code>tree</code></td><td style="text-align:left;"><code>T</code>[]</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>R</code></p>',18),o=[l];function c(n,s,i,y,h,f){return e(),d("div",null,o)}const p=t(r,[["render",c]]);export{x as __pageData,p as default};