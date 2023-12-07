import{_ as s,o as i,c as a,R as n}from"./chunks/framework.KXHDQ-dn.js";const E=JSON.parse('{"title":"安装","description":"","frontmatter":{},"headers":[],"relativePath":"guide/installation.md","filePath":"guide/installation.md"}'),t={name:"guide/installation.md"},l=n(`<h1 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h1><h2 id="环境支持" tabindex="-1">环境支持 <a class="header-anchor" href="#环境支持" aria-label="Permalink to &quot;环境支持&quot;">​</a></h2><p>Nice Fns 可以在支持 ESNext 的浏览器上运行。 如果您确实需要支持旧版本的浏览器，请自行添加 Babel 和相应的 Polyfill。</p><h2 id="使用包管理器" tabindex="-1">使用包管理器 <a class="header-anchor" href="#使用包管理器" aria-label="Permalink to &quot;使用包管理器&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 选择一个你喜欢的包管理器</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># NPM</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nice-fns</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Yarn</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nice-fns</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># pnpm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nice-fns</span></span></code></pre></div><h2 id="浏览器直接引入" tabindex="-1">浏览器直接引入 <a class="header-anchor" href="#浏览器直接引入" aria-label="Permalink to &quot;浏览器直接引入&quot;">​</a></h2><p>直接通过浏览器的 Script 标签导入 Nice Fns，然后就可以使用全局变量 NiceFns 了。</p><p>根据不同的 CDN 提供商有不同的引入方式，我们在这里以 <a href="https://unpkg.com/" target="_blank" rel="noreferrer">unpkg</a> 举例。你也可以使用其它的 CDN 供应商。</p><h3 id="unpkg" tabindex="-1">unpkg <a class="header-anchor" href="#unpkg" aria-label="Permalink to &quot;unpkg&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- Import Lodash --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;//unpkg.com/lodash&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- Import NiceFns --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;//unpkg.com/nice-fns&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><blockquote><p>建议使用 CDN 引入 NiceFns 的用户在链接地址上锁定版本，以免将来 Nice Fns 升级时受到非兼容性更新的影响。锁定版本的方法请查看 <a href="https://unpkg.com/" target="_blank" rel="noreferrer">unpkg.com</a>。</p></blockquote>`,11),h=[l];function e(p,k,r,d,c,o){return i(),a("div",null,h)}const F=s(t,[["render",e]]);export{E as __pageData,F as default};
