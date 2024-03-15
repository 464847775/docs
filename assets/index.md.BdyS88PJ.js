import{_ as a,c as s,o as n,a2 as p}from"./chunks/framework.CbPyf0Of.js";const m=JSON.parse('{"title":"项目介绍","description":"","frontmatter":{},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),l={name:"index.md"},i=p(`<h1 id="项目介绍" tabindex="-1">项目介绍 <a class="header-anchor" href="#项目介绍" aria-label="Permalink to &quot;项目介绍&quot;">​</a></h1><h2 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h2><p>前端组的系统往往都存在多端实现，如 城一代 iOS/微信公众号/城一代 Android 基础功能都类似，但是目前开发需要多端独立开发，逻辑无法复用，一个需求的开发周期过长。且存在可能业务实现有差异的情况，较难去管理。</p><h2 id="目标" tabindex="-1">目标 <a class="header-anchor" href="#目标" aria-label="Permalink to &quot;目标&quot;">​</a></h2><p>实现一套代码能够编译到以下平台，一次开发多端使用保持多端一致：</p><ul><li>iOS</li><li>Android</li><li>Harmony：鸿蒙</li><li>weapp：小程序</li><li>web：网页</li></ul><h2 id="技术选型" tabindex="-1">技术选型 <a class="header-anchor" href="#技术选型" aria-label="Permalink to &quot;技术选型&quot;">​</a></h2><p>目前前端的跨端方案较流行的有以下几种：</p><ul><li>❌ uniapp：不支持鸿蒙</li><li>✅ taro: 都支持</li><li>❌ react-native：不支持鸿蒙/小程序</li><li>❌ flutter：不支持鸿蒙/小程序</li></ul><p>故最终选择了 taro</p><h2 id="taro-相关技术栈" tabindex="-1">Taro 相关技术栈 <a class="header-anchor" href="#taro-相关技术栈" aria-label="Permalink to &quot;Taro 相关技术栈&quot;">​</a></h2><ol><li>Taro v4.x</li><li>React</li><li>typescript</li><li>Taro-ui</li><li>Taro-hooks</li><li>zustand</li><li>ReactNative</li><li>axios</li><li>classnames</li></ol><h2 id="文件结构" tabindex="-1">文件结构 <a class="header-anchor" href="#文件结构" aria-label="Permalink to &quot;文件结构&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ .vscode # vscode编辑器配置</span></span>
<span class="line"><span>├─ android # android 壳文件</span></span>
<span class="line"><span>├─ ios # ios 壳文件</span></span>
<span class="line"><span>├─ scripts # 自定义的npm脚本</span></span>
<span class="line"><span>├─ config # taro项目各环境配置文件</span></span>
<span class="line"><span>├─ dist # h5产物</span></span>
<span class="line"><span>├─ docs # 文档</span></span>
<span class="line"><span>├─ src</span></span>
<span class="line"><span>│  ├─ http  # 请求工具类</span></span>
<span class="line"><span>│  ├─ components  # 全局组件</span></span>
<span class="line"><span>│  ├─ pages  # 页面</span></span>
<span class="line"><span>|     ├─ index.scss # 页面样式</span></span>
<span class="line"><span>|     ├─ index.tsx # 页面代码</span></span>
<span class="line"><span>|     ├─ index.config.ts # 页面配置</span></span>
<span class="line"><span>│     └─ components # 页面级组件</span></span>
<span class="line"><span>│  ├─ services  # 接口请求</span></span>
<span class="line"><span>│  ├─ store  # 全局状态管理</span></span>
<span class="line"><span>│  ├─ styles  # 公共样式</span></span>
<span class="line"><span>│  ├─ utils  # 公共工具函数</span></span>
<span class="line"><span>│  ├─ app.config.ts # 项目页面配置</span></span>
<span class="line"><span>│  ├─ app.ts # 页面渲染入口</span></span>
<span class="line"><span>│  └─ index.html</span></span>
<span class="line"><span>├─ typings # 全局ts类型</span></span>
<span class="line"><span>├─ .env.[mode] # mode环境的环境变量</span></span>
<span class="line"><span>├─ .env # 默认环境变量</span></span>
<span class="line"><span>├─ tsconfig.json</span></span>
<span class="line"><span>├─ .eslintrc</span></span>
<span class="line"><span>├─ .gitignore</span></span>
<span class="line"><span>├─ .watchmanconfig</span></span>
<span class="line"><span>├─ project.config.json  # 微信配置文件</span></span>
<span class="line"><span>├─ .prettier.config.js</span></span>
<span class="line"><span>├─ babel.config.js</span></span>
<span class="line"><span>└─ package.json</span></span></code></pre></div>`,14),e=[i];function t(c,o,r,d,h,u){return n(),s("div",null,e)}const f=a(l,[["render",t]]);export{m as __pageData,f as default};