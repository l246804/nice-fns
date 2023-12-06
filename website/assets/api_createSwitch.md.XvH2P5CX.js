import{_ as t,o as e,c as a,R as s}from"./chunks/framework.-3ULgdun.js";const y=JSON.parse('{"title":"createSwitch","description":"","frontmatter":{},"headers":[],"relativePath":"api/createSwitch.md","filePath":"api/createSwitch.md"}'),i={name:"api/createSwitch.md"},l=s(`<h1 id="createswitch" tabindex="-1">createSwitch <a class="header-anchor" href="#createswitch" aria-label="Permalink to &quot;createSwitch&quot;">​</a></h1><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="createswitch-1" tabindex="-1">createSwitch() <a class="header-anchor" href="#createswitch-1" aria-label="Permalink to &quot;createSwitch()&quot;">​</a></h3><blockquote><p><strong>createSwitch</strong>&lt;<code>T</code>&gt;(<code>options</code>): [<code>Getter</code>&lt;<code>T</code>&gt;, <a href="./createSwitch.html#switchcontrolst"><code>SwitchControls</code></a>&lt;<code>T</code>&gt;]</p></blockquote><p>创建开关和控制器</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;"><code>boolean</code></td></tr></tbody></table><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>options</code></td><td style="text-align:left;"><a href="./createSwitch.html#createswitchoptionst"><code>CreateSwitchOptions</code></a>&lt;<code>T</code>&gt;</td><td style="text-align:left;">配置项</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p>[<code>Getter</code>&lt;<code>T</code>&gt;, <a href="./createSwitch.html#switchcontrolst"><code>SwitchControls</code></a>&lt;<code>T</code>&gt;]</p><h4 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">isCanceled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cancelControls</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createSwitch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onToggle</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">val</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`当前是\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">val</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;开启&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;关闭&#39;}状态\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 注册回调句柄</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cancelControls.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(onToggle)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isCanceled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cancelControls.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toggle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isCanceled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 控制台：当前是开启状态</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 移除回调句柄</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cancelControls.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">off</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(onToggle)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cancelControls.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toggle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isCanceled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cancelControls.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isCanceled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cancelControls.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">close</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isCanceled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cancelControls.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 还原为初始状态</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cancelControls.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isCanceled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; false</span></span></code></pre></div><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><h3 id="createswitchoptions-t" tabindex="-1">CreateSwitchOptions&lt;T&gt; <a class="header-anchor" href="#createswitchoptions-t" aria-label="Permalink to &quot;CreateSwitchOptions\\&lt;T\\&gt;&quot;">​</a></h3><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;"><code>boolean</code></td></tr></tbody></table><h4 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Property</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>closeValue?</code></td><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">关闭时的值<br><br><strong>Default</strong><br><code>false</code></td></tr><tr><td style="text-align:left;"><code>initialValue?</code></td><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">初始值<br><br><strong>Default</strong><br><code>false</code></td></tr><tr><td style="text-align:left;"><code>once?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">一次性开关，如果设为 <code>true</code>，则在第一次切换之后切换无效，直到 <code>reset</code> 被调用。<br><br><strong>Default</strong><br><code>false</code></td></tr><tr><td style="text-align:left;"><code>openValue?</code></td><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">打开时的值<br><br><strong>Default</strong><br><code>true</code></td></tr></tbody></table><hr><h3 id="switchcontrols-t" tabindex="-1">SwitchControls&lt;T&gt; <a class="header-anchor" href="#switchcontrols-t" aria-label="Permalink to &quot;SwitchControls\\&lt;T\\&gt;&quot;">​</a></h3><h4 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h4><h5 id="close" tabindex="-1">close() <a class="header-anchor" href="#close" aria-label="Permalink to &quot;close()&quot;">​</a></h5><blockquote><p><strong>close</strong>(): <code>void</code></p></blockquote><p>关闭开关</p><h6 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h6><p><code>void</code></p><h5 id="off" tabindex="-1">off() <a class="header-anchor" href="#off" aria-label="Permalink to &quot;off()&quot;">​</a></h5><blockquote><p><strong>off</strong>(<code>callback</code>): <code>void</code></p></blockquote><p>移除回调句柄</p><h6 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h6><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;"><code>SwitchCallback</code>&lt;<code>T</code>&gt;</td><td style="text-align:left;">回调句柄</td></tr></tbody></table><h6 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h6><p><code>void</code></p><h5 id="offall" tabindex="-1">offAll() <a class="header-anchor" href="#offall" aria-label="Permalink to &quot;offAll()&quot;">​</a></h5><blockquote><p><strong>offAll</strong>(): <code>void</code></p></blockquote><p>重置回调句柄</p><h6 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h6><p><code>void</code></p><h5 id="on" tabindex="-1">on() <a class="header-anchor" href="#on" aria-label="Permalink to &quot;on()&quot;">​</a></h5><blockquote><p><strong>on</strong>(<code>callback</code>): <code>NoopFn</code></p></blockquote><p>注册回调句柄，返回移除回调句柄函数</p><h6 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h6><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;"><code>SwitchCallback</code>&lt;<code>T</code>&gt;</td></tr></tbody></table><h6 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h6><p><code>NoopFn</code></p><h5 id="open" tabindex="-1">open() <a class="header-anchor" href="#open" aria-label="Permalink to &quot;open()&quot;">​</a></h5><blockquote><p><strong>open</strong>(): <code>void</code></p></blockquote><p>打开开关</p><h6 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h6><p><code>void</code></p><h5 id="reset" tabindex="-1">reset() <a class="header-anchor" href="#reset" aria-label="Permalink to &quot;reset()&quot;">​</a></h5><blockquote><p><strong>reset</strong>(): <code>void</code></p></blockquote><p>重置开关</p><h6 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h6><p><code>void</code></p><h5 id="toggle" tabindex="-1">toggle() <a class="header-anchor" href="#toggle" aria-label="Permalink to &quot;toggle()&quot;">​</a></h5><blockquote><p><strong>toggle</strong>(<code>value</code>?): <code>void</code></p></blockquote><p>切换开关状态</p><h6 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h6><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value</code>?</td><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h6 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h6><p><code>void</code></p>`,65),n=[l];function r(h,o,d,c,p,k){return e(),a("div",null,n)}const E=t(i,[["render",r]]);export{y as __pageData,E as default};
