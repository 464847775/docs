import{_ as a,c as s,o as e,a2 as n}from"./chunks/framework.B16sCCuK.js";const b=JSON.parse('{"title":"原生接入","description":"","frontmatter":{},"headers":[],"relativePath":"native.md","filePath":"native.md"}'),p={name:"native.md"},i=n(`<h1 id="原生接入" tabindex="-1">原生接入 <a class="header-anchor" href="#原生接入" aria-label="Permalink to &quot;原生接入&quot;">​</a></h1><h2 id="ios" tabindex="-1">iOS <a class="header-anchor" href="#ios" aria-label="Permalink to &quot;iOS&quot;">​</a></h2><h3 id="环境搭建" tabindex="-1">环境搭建 <a class="header-anchor" href="#环境搭建" aria-label="Permalink to &quot;环境搭建&quot;">​</a></h3><ul><li>苹果官网下载最新的 xcode （当前使用的版本为 15.2）</li><li>安装包管理工具 cocoapod</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>brew install cocoapods</span></span></code></pre></div><ul><li>安装项目依赖</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>yarn upgradePeerdeps</span></span></code></pre></div><ul><li>安装调试工具</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>brew install --cask flipper</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install -g ios-deploy</span></span></code></pre></div><ul><li>运行项目</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>yarn dev:rn --mode uat</span></span></code></pre></div><ul><li>打包项目</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>yarn upgradePeerdeps</span></span>
<span class="line"><span></span></span>
<span class="line"><span>yarn build:rn --platform ios</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export SKIP_BUNDLING=1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd ios &amp;&amp; bundle update &amp;&amp; bundle exec fastlane build_release method</span></span></code></pre></div><h2 id="android" tabindex="-1">android <a class="header-anchor" href="#android" aria-label="Permalink to &quot;android&quot;">​</a></h2><h3 id="环境搭建-1" tabindex="-1">环境搭建 <a class="header-anchor" href="#环境搭建-1" aria-label="Permalink to &quot;环境搭建&quot;">​</a></h3><ul><li><p>下载最新的 android studio （当前使用的版本为 Hedgehog）</p></li><li><p>安装 jdk （当前使用的版本为 17）并设置环境变量</p></li><li><p>安装项目依赖</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>yarn upgradePeerdeps</span></span></code></pre></div><ul><li>安装调试工具</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>brew install --cask flipper</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install -g ios-deploy</span></span></code></pre></div><ul><li>运行项目</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>yarn dev:rn --mode uat</span></span></code></pre></div><ul><li>打包项目</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>yarn upgradePeerdeps</span></span>
<span class="line"><span></span></span>
<span class="line"><span>yarn build:rn --platform android</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd android</span></span>
<span class="line"><span></span></span>
<span class="line"><span>./gradlew assembleRelease</span></span></code></pre></div>`,25),l=[i];function t(d,o,c,r,h,u){return e(),s("div",null,l)}const v=a(p,[["render",t]]);export{b as __pageData,v as default};
