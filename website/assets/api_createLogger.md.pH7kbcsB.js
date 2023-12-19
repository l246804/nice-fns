import{_ as e,o as t,c as a,R as s}from"./chunks/framework.KXHDQ-dn.js";const u=JSON.parse('{"title":"createLogger","description":"","frontmatter":{},"headers":[],"relativePath":"api/createLogger.md","filePath":"api/createLogger.md"}'),l={name:"api/createLogger.md"},r=s(`<h1 id="createlogger" tabindex="-1">createLogger <a class="header-anchor" href="#createlogger" aria-label="Permalink to &quot;createLogger&quot;">​</a></h1><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="createlogger-1" tabindex="-1">createLogger() <a class="header-anchor" href="#createlogger-1" aria-label="Permalink to &quot;createLogger()&quot;">​</a></h3><blockquote><p><strong>createLogger</strong>(<code>module</code>): <code>Object</code></p></blockquote><p>基于 <code>console</code> 创建简单的信息输出工具</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>module</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">模块名</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Object</code></p><p>信息输出工具</p><blockquote><h5 id="error" tabindex="-1">error <a class="header-anchor" href="#error" aria-label="Permalink to &quot;error&quot;">​</a></h5><blockquote><p><strong>error</strong>: (<code>msg</code>, ...<code>args</code>) =&gt; <code>void</code></p></blockquote><p>输出一条错误信息，同 <code>console.error</code></p><h6 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h6><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>msg</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">消息内容</td></tr><tr><td style="text-align:left;">...<code>args</code></td><td style="text-align:left;"><code>any</code>[]</td><td style="text-align:left;">额外参数</td></tr></tbody></table><h6 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h6><p><code>void</code></p><h5 id="format" tabindex="-1">format <a class="header-anchor" href="#format" aria-label="Permalink to &quot;format&quot;">​</a></h5><blockquote><p><strong>format</strong>: (<code>msg</code>, <code>type</code>?) =&gt; <code>string</code></p></blockquote><p>格式化消息内容</p><h6 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h6><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>msg</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">消息内容</td></tr><tr><td style="text-align:left;"><code>type</code>?</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">消息类型</td></tr></tbody></table><h6 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h6><p><code>string</code></p><p>格式化后的消息内容</p><h6 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h6><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> logger</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createLogger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Module&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">logger.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;这是一个普通消息&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; &#39;[Module]: 这是一个普通消息&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">logger.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;这是一个警告&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;warn&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; &#39;[Module warn]: 这是一个警告&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">logger.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;这是一个错误&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;error&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; &#39;[Module error]: 这是一个错误&#39;</span></span></code></pre></div><h5 id="info" tabindex="-1">info <a class="header-anchor" href="#info" aria-label="Permalink to &quot;info&quot;">​</a></h5><blockquote><p><strong>info</strong>: (<code>msg</code>, ...<code>args</code>) =&gt; <code>void</code></p></blockquote><p>输出一条普通信息，同 <code>console.log</code></p><h6 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h6><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>msg</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">消息内容</td></tr><tr><td style="text-align:left;">...<code>args</code></td><td style="text-align:left;"><code>any</code>[]</td><td style="text-align:left;">额外参数</td></tr></tbody></table><h6 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h6><p><code>void</code></p><h5 id="warn" tabindex="-1">warn <a class="header-anchor" href="#warn" aria-label="Permalink to &quot;warn&quot;">​</a></h5><blockquote><p><strong>warn</strong>: (<code>msg</code>, ...<code>args</code>) =&gt; <code>void</code></p></blockquote><p>输出一条警告信息，同 <code>console.warn</code></p><h6 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h6><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>msg</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">消息内容</td></tr><tr><td style="text-align:left;">...<code>args</code></td><td style="text-align:left;"><code>any</code>[]</td><td style="text-align:left;">额外参数</td></tr></tbody></table><h6 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h6><p><code>void</code></p></blockquote><h4 id="example-1" tabindex="-1">Example <a class="header-anchor" href="#example-1" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const logger = createLogger(&#39;Module A&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>logger.info(&#39;这是一条普通消息&#39;)</span></span>
<span class="line"><span>// =&gt; &#39;[Module A]: 这是一条普通消息&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>logger.warn(&#39;这是一条警告&#39;)</span></span>
<span class="line"><span>// =&gt; &#39;[Module A warn]: 这是一条警告&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>logger.error(&#39;这是一条错误&#39;)</span></span>
<span class="line"><span>// =&gt; &#39;[Module A error]: 这是一条错误&#39;</span></span></code></pre></div>`,13),n=[r];function i(o,d,h,c,p,g){return t(),a("div",null,n)}const y=e(l,[["render",i]]);export{u as __pageData,y as default};