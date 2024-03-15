import{_ as s,c as a,o as n,a2 as p}from"./chunks/framework.CbPyf0Of.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"lint.md","filePath":"lint.md"}'),e={name:"lint.md"},t=p(`<p>规则：</p><p>html</p><blockquote><p>通过编辑器插件来实现</p></blockquote><ol><li>标签都需要闭合，单标签都要闭合</li><li>html标签都需要小写</li><li>link script 不带type属性</li><li>元素属性双引号</li><li>块级元素独占1行，h1,p 元素只能嵌套内联元素</li></ol><p>css</p><ol><li>首行写charset</li><li>导入不使用 @import url()</li><li>类名不使用大写</li><li>选择器和大括号中间接空格</li></ol><p>js</p><ol><li>使用const let 而非 var</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>no-var: &quot;error&quot;</span></span></code></pre></div><ol start="2"><li>推荐字面量方式创建对象</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;no-new-object&quot;: &quot;error&quot;</span></span></code></pre></div><ol start="3"><li>推荐对象方法属性用简写</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;object-shorthand&quot;: &quot;warn&quot;,</span></span></code></pre></div><ol start="4"><li>推荐使用push、rest运算符</li><li>字符串单引号，链接字符串用模板字符串</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>  &quot;prefer-template&quot;: &quot;error&quot;</span></span>
<span class="line"><span>  &quot;quotes&quot;: [&quot;error&quot;, &quot;single&quot;]</span></span></code></pre></div><ol start="6"><li><p>单行代码块不使用大括号</p></li><li><p>One True Brace Style</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>  &quot;brace-style&quot;: &quot;error&quot;,</span></span></code></pre></div><ol start="8"><li>在逗号后面使用空格，逗号前面不加空格</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>  &quot;comma-spacing&quot;: [&quot;warn&quot;, {&quot;before&quot;: false, &quot;after&quot;: true}],</span></span></code></pre></div><ol start="9"><li>禁止使用链式赋值： 如const a = b = c = 1</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;no-multi-assign&quot;: &quot;error&quot;</span></span></code></pre></div><ol start="10"><li>禁止使用非三等号比较</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>eqeqeq: &quot;error&quot;</span></span></code></pre></div><ol start="11"><li>import 按三方模块和内部模块的顺序按序引入</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>plugins: [</span></span>
<span class="line"><span>  &#39;@trivago/prettier-plugin-sort-imports&#39;</span></span>
<span class="line"><span>],</span></span>
<span class="line"><span>rules: [</span></span>
<span class="line"><span>  importOrderSeparation: false,</span></span>
<span class="line"><span>  importOrderSortSpecifiers: true,</span></span>
<span class="line"><span>]</span></span></code></pre></div><ol start="12"><li>html 中 script 代码段也需校验</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 通过eslint-plugin-html</span></span>
<span class="line"><span>&quot;plugins&quot;: [&quot;html&quot;],</span></span></code></pre></div><p>React</p><ol><li>禁止直接修改 props</li><li>调用 props 时尽量使用扩展符</li><li>不要直接修改 state</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;no-direct-state-mutation&quot;: {</span></span>
<span class="line"><span>      &quot;severity&quot;: &quot;error&quot;,</span></span>
<span class="line"><span>      &quot;code&quot;: function (source, options) {</span></span>
<span class="line"><span>        const ast = source.getAST();</span></span>
<span class="line"><span>        const scopeManager = source.getScopeManager();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        function checkStateAssignments(node) {</span></span>
<span class="line"><span>          if (node.type === &#39;AssignmentExpression&#39;) {</span></span>
<span class="line"><span>            const { left, right } = node;</span></span>
<span class="line"><span>            if (left.type === &#39;MemberExpression&#39;) {</span></span>
<span class="line"><span>              const { name } = left.object;</span></span>
<span class="line"><span>              if (scopeManager.isVarDeclared(name, &#39;useState&#39;)) {</span></span>
<span class="line"><span>                source.report({</span></span>
<span class="line"><span>                  node: node,</span></span>
<span class="line"><span>                  message: &#39;Direct mutation of the state is not allowed. Use the updater function provided by useState.&#39;</span></span>
<span class="line"><span>                });</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        traverse(ast, {</span></span>
<span class="line"><span>          VariableDeclarator: {</span></span>
<span class="line"><span>            enter(path) {</span></span>
<span class="line"><span>              const { id } = path.node;</span></span>
<span class="line"><span>              if (id.type === &#39;Identifier&#39; &amp;&amp; scopeManager.isVarDeclared(id.name, &#39;useState&#39;)) {</span></span>
<span class="line"><span>                path.traverse({</span></span>
<span class="line"><span>                  AssignmentExpression: checkStateAssignments</span></span>
<span class="line"><span>                });</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span></code></pre></div>`,30),l=[t];function i(o,c,r,u,d,h){return n(),a("div",null,l)}const m=s(e,[["render",i]]);export{v as __pageData,m as default};
