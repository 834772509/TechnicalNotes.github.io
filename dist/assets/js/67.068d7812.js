(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{269:function(t,s,a){"use strict";a.r(s);var r=a(0),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"router-路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#router-路由"}},[t._v("#")]),t._v(" Router 路由")]),t._v(" "),a("h2",{attrs:{id:"基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),a("h3",{attrs:{id:"路由的由来"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由的由来"}},[t._v("#")]),t._v(" 路由的由来")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("说起路由你想起了什么？")]),t._v(" "),a("ul",[a("li",[t._v("路由是一个网络工程里面的术语。")]),t._v(" "),a("li",[t._v("路由（routing）就是通过互联的网络把信息从源地址传输到目的地址的活动. --- 维基百科")])])]),t._v(" "),a("li",[a("p",[t._v("路由器提供了两种机制: 路由和转送.")]),t._v(" "),a("ul",[a("li",[t._v("路由是决定数据包从来源到目的地的路径.")]),t._v(" "),a("li",[t._v("转送将输入端的数据转移到合适的输出端.")])])]),t._v(" "),a("li",[a("p",[t._v("路由中有一个非常重要的概念叫路由表.")]),t._v(" "),a("ul",[a("li",[t._v("路由表本质上就是一个映射表, 决定了数据包的指向.")])])]),t._v(" "),a("li",[a("p",[t._v("路由的概念出现最早是在后端路由中实现的，原因是web的发展主要经历了这样一些阶段：")]),t._v(" "),a("ul",[a("li",[t._v("后端路由阶段；")]),t._v(" "),a("li",[t._v("前后端分离阶段；")]),t._v(" "),a("li",[t._v("单页面富应用（SPA）；")])])])]),t._v(" "),a("h3",{attrs:{id:"阶段一：后端路由阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阶段一：后端路由阶段"}},[t._v("#")]),t._v(" 阶段一：后端路由阶段")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("早期的网站开发整个HTML页面是由服务器来渲染的.")]),t._v(" "),a("ul",[a("li",[t._v("服务器直接生产渲染好对应的HTML页面, 返回给客户端进行展示.")])])]),t._v(" "),a("li",[a("p",[t._v("但是, 一个网站, 这么多页面服务器如何处理呢?")]),t._v(" "),a("ul",[a("li",[t._v("一个页面有自己对应的网址, 也就是URL.")]),t._v(" "),a("li",[t._v("URL会发送到服务器, 服务器会通过正则对该URL进行匹配, 并且最后交给一个Controller进行处理.")]),t._v(" "),a("li",[t._v("Controller进行各种处理, 最终生成HTML或者数据, 返回给前端.")]),t._v(" "),a("li",[t._v("这就完成了一个IO操作.")])])]),t._v(" "),a("li",[a("p",[t._v("上面的这种操作, 就是后端路由.")]),t._v(" "),a("ul",[a("li",[t._v("当我们页面中需要请求不同的路径内容时, 交给服务器来进行处理, 服务器渲染好整个页面, 并且将页面返回给客户顿.")]),t._v(" "),a("li",[t._v("这种情况下渲染好的页面, 不需要单独加载任何的js和css, 可以直接交给浏览器展示, 这样也有利于SEO的优化.")])])]),t._v(" "),a("li",[a("p",[t._v("后端路由的缺点:")]),t._v(" "),a("ul",[a("li",[t._v("一种情况是整个页面的模块由后端人员来编写和维护的.")]),t._v(" "),a("li",[t._v("另一种情况是前端开发人员如果要开发页面, 需要通过PHP和Java等语言来编写页面代码.")]),t._v(" "),a("li",[t._v("而且通常情况下HTML代码和数据以及对应的逻辑会混在一起, 编写和维护都是非常糟糕的事情.")])])])]),t._v(" "),a("h3",{attrs:{id:"阶段二：前后端分离阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阶段二：前后端分离阶段"}},[t._v("#")]),t._v(" 阶段二：前后端分离阶段")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("前端渲染的理解：")]),t._v(" "),a("ul",[a("li",[t._v("每次请求涉及到的静态资源都会从静态资源服务器获取；")]),t._v(" "),a("li",[t._v("这些资源包括HTML+CSS+JS，然后在前端对这些请求回来的资源进行渲染；")]),t._v(" "),a("li",[t._v("需要注意的是，客户端的每一次请求，都会从静态资源服务器请求文件；")]),t._v(" "),a("li",[t._v("同时可以看到，和之前的后断路由不同，这时后端只是负责提供API了；")])])]),t._v(" "),a("li",[a("p",[t._v("前后端分离阶段：")]),t._v(" "),a("ul",[a("li",[t._v("随着Ajax的出现, 有了前后端分离的开发模式；")]),t._v(" "),a("li",[t._v("后端只提供API来返回数据，前端通过Ajax获取数据，并且可以通过JavaScript将数据渲染到页面中；")]),t._v(" "),a("li",[t._v("这样做最大的优点就是前后端责任的清晰，后端专注于数据上，前端专注于交互和可视化上；")]),t._v(" "),a("li",[t._v("并且当移动端(iOS/Android)出现后，后端不需要进行任何处理，依然使用之前的一套API即可；")]),t._v(" "),a("li",[t._v("目前很多的网站依然采用这种模式开发（jQuery开发模式）；")])])])]),t._v(" "),a("h3",{attrs:{id:"阶段三：单页面富应用（spa）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阶段三：单页面富应用（spa）"}},[t._v("#")]),t._v(" 阶段三：单页面富应用（SPA）")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("单页面富应用的理解：")]),t._v(" "),a("ul",[a("li",[t._v("单页面富应用的英文是single-page application，简称SPA；")]),t._v(" "),a("li",[t._v("整个Web应用只有实际上只有一个页面，当URL发生改变时，并不会从服务器请求新的静态资源；")]),t._v(" "),a("li",[t._v("而是通过JavaScript监听URL的改变，并且根据URL的不同去渲染新的页面；")])])]),t._v(" "),a("li",[a("p",[t._v("如何可以应用URL和渲染的页面呢？前端路由")]),t._v(" "),a("ul",[a("li",[t._v("前端路由维护着URL和渲染页面的映射关系；")]),t._v(" "),a("li",[t._v("路由可以根据不同的URL，最终让我们的框架（比如Vue、React、Angular）去渲染不同的组件；")]),t._v(" "),a("li",[t._v("最终我们在页面上看到的实际就是渲染的一个个组件页面；")])])])]),t._v(" "),a("h3",{attrs:{id:"前端路由的原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端路由的原理"}},[t._v("#")]),t._v(" 前端路由的原理")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("前端路由是如何做到URL和内容进行映射呢？监听URL的改变。")])]),t._v(" "),a("li",[a("p",[t._v("URL发生变化，同时不引起页面的刷新有两个办法：")]),t._v(" "),a("ul",[a("li",[t._v("通过URL的hash改变URL；")]),t._v(" "),a("li",[t._v("通过HTML5中的history模式修改URL；")])])]),t._v(" "),a("li",[a("p",[t._v("当监听到URL发生变化时，我们可以通过自己判断当前的URL，决定到底渲染什么样的内容。")])])]),t._v(" "),a("h2",{attrs:{id:"react-router"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-router"}},[t._v("#")]),t._v(" React-Router")]),t._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[a("code",[t._v("npm install react-router-dom --save")])]),t._v(" "),a("h3",{attrs:{id:"基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),a("p",[t._v("\\src\\App.js")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" PureComponent "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  BrowserRouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  HashRouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Link"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Route\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react-router-dom'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" 组件名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./pages/组件名'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" 组件名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./pages/组件名'")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("App")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PureComponent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("BrowserRouter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Link to"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("首页"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Link to"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/路径"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("跳转"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Route exact path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),t._v(" component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("组件名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Route"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Route path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/路径"')]),t._v(" component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("组件名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Route"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("BrowserRouter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);