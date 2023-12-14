import{_ as e,o as t,c as a,R as o}from"./chunks/framework.KXHDQ-dn.js";const g=JSON.parse('{"title":"toTreeArray","description":"","frontmatter":{},"headers":[],"relativePath":"api/toTreeArray.md","filePath":"api/toTreeArray.md"}'),d={name:"api/toTreeArray.md"},r=o('<h1 id="totreearray" tabindex="-1">toTreeArray <a class="header-anchor" href="#totreearray" aria-label="Permalink to &quot;toTreeArray&quot;">​</a></h1><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="totreearray-1" tabindex="-1">toTreeArray() <a class="header-anchor" href="#totreearray-1" aria-label="Permalink to &quot;toTreeArray()&quot;">​</a></h3><blockquote><p><strong>toTreeArray</strong>&lt;<code>T</code>, <code>DataKey</code>, <code>DropKeys</code>&gt;(<code>array</code>, <code>options</code>?): <code>IfNever</code>&lt;<code>DataKey</code>, <code>Omit</code>&lt;<code>T</code>, <code>DropKeys</code>&gt;, <code>Omit</code>&lt;<code>T</code>, <code>DropKeys</code>&gt; &amp; <code>Record</code>&lt;<code>DataKey</code>, <code>T</code>&gt;&gt;[]</p></blockquote><p>将一个树结构列表转成数组列表</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code> extends <code>object</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>DataKey</code> extends <code>string</code></td><td style="text-align:left;"><code>never</code></td></tr><tr><td style="text-align:left;"><code>DropKeys</code> extends <code>string</code></td><td style="text-align:left;"><code>KeyOf</code>&lt;<code>T</code>&gt;</td></tr></tbody></table><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>array</code></td><td style="text-align:left;"><code>T</code>[]</td><td style="text-align:left;">树结构数组列表</td></tr><tr><td style="text-align:left;"><code>options</code>?</td><td style="text-align:left;"><a href="./toTreeArray.html#totreearrayoptionsdatakey-dropkeys"><code>ToTreeArrayOptions</code></a>&lt;<code>DataKey</code>, <code>DropKeys</code>&gt;</td><td style="text-align:left;">配置项</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>IfNever</code>&lt;<code>DataKey</code>, <code>Omit</code>&lt;<code>T</code>, <code>DropKeys</code>&gt;, <code>Omit</code>&lt;<code>T</code>, <code>DropKeys</code>&gt; &amp; <code>Record</code>&lt;<code>DataKey</code>, <code>T</code>&gt;&gt;[]</p><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><h3 id="totreearrayoptions-datakey-dropkeys" tabindex="-1">ToTreeArrayOptions&lt;DataKey, DropKeys&gt; <a class="header-anchor" href="#totreearrayoptions-datakey-dropkeys" aria-label="Permalink to &quot;ToTreeArrayOptions\\&lt;DataKey, DropKeys\\&gt;&quot;">​</a></h3><h4 id="extends" tabindex="-1">Extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;Extends&quot;">​</a></h4><ul><li><code>Pick</code>&lt;<a href="./tree.html#basictreeoptionsdatakey"><code>BasicTreeOptions</code></a>&lt;<code>DataKey</code>&gt;, <code>&quot;childrenKey&quot;</code> | <code>&quot;dataKey&quot;</code>&gt;</li></ul><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>DataKey</code> extends <code>string</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>DropKeys</code> extends <code>string</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Property</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th><th style="text-align:left;">Inheritance</th></tr></thead><tbody><tr><td style="text-align:left;"><code>childrenKey?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">子节点键<br><br><strong>Default</strong><br><code>&#39;children&#39;</code></td><td style="text-align:left;"><code>Pick.childrenKey</code></td></tr><tr><td style="text-align:left;"><code>dataKey?</code></td><td style="text-align:left;"><code>DataKey</code></td><td style="text-align:left;">数据存放键，未设置时将平铺在节点上</td><td style="text-align:left;"><code>Pick.dataKey</code></td></tr><tr><td style="text-align:left;"><code>dropKeys?</code></td><td style="text-align:left;"><code>DropKeys</code>[]</td><td style="text-align:left;">需要放弃的键，设置后将会移除对应键，例如节点上的 <code>children</code> 或其他。</td><td style="text-align:left;">-</td></tr></tbody></table>',19),l=[r];function c(s,i,n,y,h,p){return t(),a("div",null,l)}const x=e(d,[["render",c]]);export{g as __pageData,x as default};
