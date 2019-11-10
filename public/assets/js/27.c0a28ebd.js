(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{306:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"wkwebview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wkwebview"}},[t._v("#")]),t._v(" WKWebView")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.apple.com/documentation/webkit/wkwebview",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("WKWebView")]),a("OutboundLink")],1),t._v(" 是 WKWebView 是 ios 8 出现的一个显示交互式 Web 内容的对象，类似应用程序里的浏览器，是为了解决 "),a("a",{attrs:{href:"https://developer.apple.com/documentation/uikit/uiwebview",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("UIWebView")]),a("OutboundLink")],1),t._v(" 卡慢，占用内存过大的问题。")]),t._v(" "),a("p",[t._v("以往用 UIWebView 加载加载网页的时候，卡慢现象会很严重，有时候往往会卡到一个页面无法动弹，空白屏时间过长，加载大图片或者视屏的时候可能还会出现长时间白屏甚至崩溃导致应用推出的情况，影响体验。")]),t._v(" "),a("p",[t._v("WebKit 中的 WKWebView 控件的新特性和使用方法，较好的解决了卡、慢、占用内存过大的问题。而且支持了更多 HTML5 的特性，还有 JS 库的加载和使用，功能比 UIWebView 强大了很多。")]),t._v(" "),a("h3",{attrs:{id:"定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),a("p",[t._v("官网中对于 WKWebView 的定义如下：")]),t._v(" "),a("blockquote",[a("p",[t._v("An object that displays interactive web content, such as for an in-app browser.")])]),t._v(" "),a("h3",{attrs:{id:"sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sdk"}},[t._v("#")]),t._v(" SDK")]),t._v(" "),a("p",[t._v("从 iOS 8.0 和 OS X 10.10 开始，官网建议使用 WKWebView 在 app 中展示 web 内容，不要用 UIWebView 或 WebView：")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",[a("strong",[t._v("Important")])]),t._v(" "),a("p",[t._v("Starting in iOS 8.0 and OS X 10.10, use WKWebView to add web content to your app. Do not use UIWebView or WebView.")])]),t._v(" "),a("p",[t._v("使用 WKWebView 类在您的应用程序中嵌入 Web 内容。可以创建一个 WKWebView 对象，将其设置为视图，并向其发送加载 Web 内容的请求。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[a("strong",[t._v("Note")])]),t._v(" "),a("p",[t._v("You can make POST requests with httpBody content in a WKWebView.")])]),t._v(" "),a("h2",{attrs:{id:"uiwebview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uiwebview"}},[t._v("#")]),t._v(" UIWebView")]),t._v(" "),a("p",[t._v("在应用程序中嵌入 web content 的视图，目前官网已将 UIWebView 置成了"),a("code",[t._v("Deprecated")]),t._v("状态。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("A view that embeds web content in your app.")]),t._v(" "),a("p",[a("strong",[t._v("Note")])]),t._v(" "),a("p",[t._v("In apps that run in iOS 8 and later, use the WKWebView class instead of using UIWebView.")])]),t._v(" "),a("h2",{attrs:{id:"wkwebview-vs-uiwebview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wkwebview-vs-uiwebview"}},[t._v("#")]),t._v(" WKWebView vs UIWebView")]),t._v(" "),a("p",[t._v("iOS8 之后 WKWebView 相较于 UIWebView 更具有优势")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("更多的支持 HTML5 的特性")])]),t._v(" "),a("li",[a("p",[t._v("高达 60fps 的滚动刷新率以及内置手势")])]),t._v(" "),a("li",[a("p",[t._v("Safari 相同的 JavaScript 引擎")])]),t._v(" "),a("li",[a("p",[t._v("占用更少的内存等")])])]),t._v(" "),a("h2",{attrs:{id:"已知问题和解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#已知问题和解决方案"}},[t._v("#")]),t._v(" 已知问题和解决方案")]),t._v(" "),a("p",[t._v("WKWebView与前端页面交互的主要问题包括：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("支持离线包时，ajax body 就会丢失")])]),t._v(" "),a("li",[a("p",[t._v("cookie 同步问题")])])]),t._v(" "),a("h3",{attrs:{id:"_1、wkwebview-cookie-问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、wkwebview-cookie-问题"}},[t._v("#")]),t._v(" 1、WKWebView Cookie 问题")]),t._v(" "),a("p",[t._v("Cookie 问题是目前 WKWebView 的一大短板")]),t._v(" "),a("h4",{attrs:{id:"_1-1、wkwebview-cookie存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1、wkwebview-cookie存储"}},[t._v("#")]),t._v(" 1.1、WKWebView Cookie存储")]),t._v(" "),a("p",[t._v("业界普遍认为 WKWebView 拥有自己的私有存储，不会将 Cookie 存入到标准的 Cookie 容器 NSHTTPCookieStorage 中。")]),t._v(" "),a("p",[t._v("实践发现 WKWebView 实例其实也会将 Cookie 存储于 NSHTTPCookieStorage 中，但存储时机有延迟，在iOS 8上，当页面跳转的时候，当前页面的 Cookie 会写入 NSHTTPCookieStorage 中，而在 iOS 10 上，JS 执行 document.cookie 或服务器 set-cookie 注入的 Cookie 会很快同步到 NSHTTPCookieStorage 中，FireFox 工程师曾建议通过 reset WKProcessPool 来触发 Cookie 同步到 NSHTTPCookieStorage 中，实践发现不起作用，并可能会引发当前页面 session cookie 丢失等问题。")]),t._v(" "),a("p",[t._v("WKWebView Cookie 问题在于 WKWebView 发起的请求不会自动带上存储于 NSHTTPCookieStorage 容器中的 Cookie。")]),t._v(" "),a("p",[t._v("比如，NSHTTPCookieStorage 中存储了一个 Cookie:")]),t._v(" "),a("p",[a("code",[t._v("name=Nicholas;value=test;domain=y.qq.com;expires=Sat, 02 May 2019 23:38:25 GMT；")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("通过 UIWebView 发起请求http://y.qq.com， 则请求头会自动带上 cookie: Nicholas=test；")])]),t._v(" "),a("li",[a("p",[t._v("而通过 WKWebView发起请求http://y.qq.com， 请求头不会自动带上 cookie: Nicholas=test。")])])]),t._v(" "),a("h4",{attrs:{id:"_1-2、wkprocesspool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2、wkprocesspool"}},[t._v("#")]),t._v(" 1.2、WKProcessPool")]),t._v(" "),a("p",[t._v("苹果开发者文档对 WKProcessPool 的定义是："),a("code",[t._v("A WKProcessPool object represents a pool of Web Content process.")]),t._v(" 通过让所有 WKWebView 共享同一个 WKProcessPool 实例，可以实现多个 WKWebView 之间共享 Cookie（session Cookie and persistent Cookie）数据。不过 WKWebView WKProcessPool 实例在 app 杀进程重启后会被重置，导致 WKProcessPool 中的 Cookie、session Cookie 数据丢失，目前也无法实现 WKProcessPool 实例本地化保存。")]),t._v(" "),a("h4",{attrs:{id:"_1-3、workaround"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3、workaround"}},[t._v("#")]),t._v(" 1.3、Workaround")]),t._v(" "),a("p",[t._v("由于许多 H5 业务都依赖于 Cookie 作登录态校验，而 WKWebView 上请求不会自动携带 Cookie, 目前的主要解决方案是：")]),t._v(" "),a("p",[t._v("a. WKWebView loadRequest 前，在 request header 中设置 Cookie, 解决首个请求 Cookie 带不上的问题；")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("WKWebView "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" webView "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("WKWebView "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nNSMutableURLRequest "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" request "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSMutableURLRequest requestWithURL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NSURL")]),t._v(" URLWithString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://h5.qzone.qq.com/mqzone/index"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("request addValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"skey=skeyValue"')]),t._v(" forHTTPHeaderField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Cookie"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("webView loadRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("b. 通过 document.cookie 设置 Cookie 解决后续页面(同域)Ajax、iframe 请求的 Cookie 问题；\n注意：document.cookie()无法跨域设置 cookie")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("WKUserContentController"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" userContentController "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("WKUserContentController "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nWKUserScript "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" cookieScript "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("WKUserScript alloc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" initWithSource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"document.cookie = 'skey=skeyValue';\"")]),t._v(" injectionTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("WKUserScriptInjectionTimeAtDocumentStart forMainFrameOnly"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("userContentController addUserScript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("cookieScript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("这种方案无法解决302请求的 Cookie 问题，比如，第一个请求是 www.a.com，我们通过在 request header 里带上 Cookie 解决该请求的 Cookie 问题，接着页面302跳转到 www.b.com，这个时候 www.b.com 这个请求就可能因为没有携带 cookie 而无法访问。当然，由于每一次页面跳转前都会调用回调函数：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("webView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("WKWebView "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("webView decidePolicyForNavigationAction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("WKNavigationAction "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("navigationAction decisionHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("WKNavigationActionPolicy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("decisionHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("可以在该回调函数里拦截302请求，copy request，在 request header 中带上 cookie 并重新 loadRequest。不过这种方法依然解决不了页面 iframe 跨域请求的 Cookie 问题，毕竟-[WKWebView loadRequest:]只适合加载 mainFrame 请求。")]),t._v(" "),a("h3",{attrs:{id:"_2、wkwebview-nsurlprotocol问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、wkwebview-nsurlprotocol问题"}},[t._v("#")]),t._v(" 2、WKWebView NSURLProtocol问题")]),t._v(" "),a("p",[t._v("WKWebView 在独立于 app 进程之外的进程中执行网络请求，请求数据不经过主进程，因此，在 WKWebView 上直接使用 NSURLProtocol 无法拦截请求。苹果开源的 webKit2 源码暴露了私有API：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("WKBrowsingContextController registerSchemeForCustomProtocol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("通过注册 http(s) scheme 后 WKWebView 将可以使用 NSURLProtocol 拦截 http(s) 请求：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Class cls "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSClassFromString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v('@"WKBrowsingContextController”'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SEL")]),t._v(" sel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSSelectorFromString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"registerSchemeForCustomProtocol:"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("cls respondsToSelector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("sel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注册http(s) scheme, 把 http和https请求交给 NSURLProtocol处理")]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("cls performSelector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("sel withObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("cls performSelector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("sel withObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("但是这种方案目前存在两个严重缺陷：")]),t._v(" "),a("h4",{attrs:{id:"a-post-请求-body-数据被清空"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-post-请求-body-数据被清空"}},[t._v("#")]),t._v(" a. post 请求 body 数据被清空")]),t._v(" "),a("p",[t._v("由于 WKWebView 在独立进程里执行网络请求。一旦注册 http(s) scheme 后，网络请求将从 Network Process 发送到 App Process，这样 NSURLProtocol 才能拦截网络请求。在 webkit2 的设计里使用 MessageQueue 进行进程之间的通信，Network Process 会将请求 encode 成一个 Message,然后通过 IPC 发送给 App Process。出于性能的原因，encode 的时候 HTTPBody 和 HTTPBodyStream 这两个字段被丢弃掉了")]),t._v(" "),a("p",[t._v("参考苹果源码：")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/WebKit/webkit/blob/fe39539b83d28751e86077b173abd5b7872ce3f9/Source/WebKit2/Shared/mac/WebCoreArgumentCodersMac.mm#L61-L88",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/WebKit/webkit/blob/fe39539b83d28751e86077b173abd5b7872ce3f9/Source/WebKit2/Shared/mac/WebCoreArgumentCodersMac.mm#L61-L88"),a("OutboundLink")],1),t._v("（复制链接到浏览器中打开）")])]),t._v(" "),a("p",[t._v("及bug report:")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://bugs.webkit.org/show_bug.cgi?id=138169",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://bugs.webkit.org/show_bug.cgi?id=138169"),a("OutboundLink")],1),t._v("（复制链接到浏览器中打开）")])]),t._v(" "),a("p",[t._v("因此，如果通过 registerSchemeForCustomProtocol 注册了 http(s) scheme, 那么由 WKWebView 发起的所有 http(s)请求都会通过 IPC 传给主进程 NSURLProtocol 处理，导致 post 请求 body 被清空；")]),t._v(" "),a("h4",{attrs:{id:"b-对ats支持不足"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b-对ats支持不足"}},[t._v("#")]),t._v(" b. 对ATS支持不足")]),t._v(" "),a("p",[t._v("测试发现一旦打开ATS开关：Allow Arbitrary Loads 选项设置为NO，同时通过 registerSchemeForCustomProtocol 注册了 http(s) scheme，WKWebView 发起的所有 http 网络请求将被阻塞（即便将Allow Arbitrary Loads in Web Content 选项设置为YES）；")]),t._v(" "),a("p",[t._v("WKWebView 可以注册 customScheme, 比如 dynamic://, 因此希望使用离线功能又不使用 post 方式的请求可以通过 customScheme 发起请求，比如 dynamic://www.dynamicalbumlocalimage.com/，然后在 app 进程 NSURLProtocol 拦截这个请求并加载离线数据。不足：使用 post 方式的请求该方案依然不适用，同时需要 H5 侧修改请求 scheme 以及 CSP 规则；")]),t._v(" "),a("h3",{attrs:{id:"_3、wkwebview-loadrequest-问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、wkwebview-loadrequest-问题"}},[t._v("#")]),t._v(" 3、WKWebView loadRequest 问题")]),t._v(" "),a("p",[t._v("在 WKWebView 上通过 loadRequest 发起的 post 请求 body 数据会丢失：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//同样是由于进程间通信性能问题，HTTPBody字段被丢弃")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("request setHTTPMethod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"POST"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("request setHTTPBody"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bodyData"')]),t._v(" dataUsingEncoding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("NSUTF8StringEncoding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("wkwebview loadRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h4",{attrs:{id:"workaround"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workaround"}},[t._v("#")]),t._v(" workaround:")]),t._v(" "),a("p",[t._v("假如想通过-[WKWebView loadRequest:]加载 post 请求 request1: http://h5.qzone.qq.com/mqzone/index,可以通过以下步骤实现：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("替换请求 scheme，生成新的 post 请求 request2: post://h5.qzone.qq.com/mqzone/index, 同时将 request1 的 body 字段复制到 request2 的 header 中（WebKit 不会丢弃 header 字段）;")])]),t._v(" "),a("li",[a("p",[t._v("通过-[WKWebView loadRequest:]加载新的 post 请求 request2;")])]),t._v(" "),a("li",[a("p",[t._v("通过 +[WKBrowsingContextController registerSchemeForCustomProtocol:]注册 scheme: post://;")])]),t._v(" "),a("li",[a("p",[t._v("注册 NSURLProtocol 拦截请求post://h5.qzone.qq.com/mqzone/index ,替换请求 scheme, 生成新的请求 request3: http://h5.qzone.qq.com/mqzone/index，将 request2 header的body 字段复制到 request3 的 body 中，并使用 NSURLConnection 加载 request3，最后通过 NSURLProtocolClient 将加载结果返回 WKWebView;")])])]),t._v(" "),a("h2",{attrs:{id:"webviewjavascriptbridge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webviewjavascriptbridge"}},[t._v("#")]),t._v(" WebViewJavascriptBridge")]),t._v(" "),a("p",[t._v("在 iOS 开发 Hybrid App 的时候，有两个 WebView 可以选择。\nUIWebView & WKWebView。")]),t._v(" "),a("p",[t._v("这两个 WebView 控件，可以完全只借助 iOS 自带的框架进行 OC & JS 交互。")]),t._v(" "),a("ul",[a("li",[t._v("UIWebView 使用 javaScriptCore.")]),t._v(" "),a("li",[t._v("WKWebView 使用 WKUserContentController.")])]),t._v(" "),a("p",[t._v("而 WebViewJavaScriptBridge 用于 WKWebView & UIWebView 中 OC 和 JS 交互。\n它的基本原理是：")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("ul",[a("li",[t._v("把 OC 的方法注册到桥梁中，让 JS 去调用。")]),t._v(" "),a("li",[t._v("把 JS 的方法注册在桥梁中，让 OC 去调用。")])])]),t._v(" "),a("h3",{attrs:{id:"为什么使用-webviewjavascriptbridge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用-webviewjavascriptbridge"}},[t._v("#")]),t._v(" 为什么使用 WebViewJavascriptBridge")]),t._v(" "),a("p",[t._v("目前项目上的解决OC与JS交互使用的是WebViewJavascriptBridge，原因如下：")]),t._v(" "),a("ul",[a("li",[t._v("老版本的UIWebView项目使用了jsBridge，改造WkWebView的话使用jsBridge更方便")]),t._v(" "),a("li",[t._v("客户端请求需要一些验签/加密操作，原生可以更方便的处理")]),t._v(" "),a("li",[t._v("可以更方便的调用原生方法进行交互")]),t._v(" "),a("li",[t._v("兼容性，不需要前端对ios和Android分别单独处理交互")]),t._v(" "),a("li",[t._v("ios本身也发请求，通过jsBridge让原生发请求可以统一维护")])]),t._v(" "),a("h3",{attrs:{id:"前端jsbridge解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端jsbridge解决方案"}},[t._v("#")]),t._v(" 前端jsBridge解决方案")]),t._v(" "),a("p",[t._v("前端基础代码如下")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setupWebViewJavascriptBridge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第一次调用这个方法的时候，为false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WebViewJavascriptBridge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("WebViewJavascriptBridge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isAndroid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'WebViewJavascriptBridgeReady'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("WebViewJavascriptBridge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第一次调用的时候，也是false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WVJBCallbacks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WVJBCallbacks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把callback对象赋值给对象。")]),t._v("\n    window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WVJBCallbacks "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这段代码的意思就是执行加载WebViewJavascriptBridge_JS.js中代码的作用")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" WVJBIframe "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'iframe'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    WVJBIframe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("display "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'none'")]),t._v("\n    WVJBIframe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://__bridge_loaded__'")]),t._v("\n    document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("WVJBIframe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("WVJBIframe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br")])]),a("p",[t._v("配置交互方法:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// JS调用客户端")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callhandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setupWebViewJavascriptBridge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("bridge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    bridge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注册方法给客户端调用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerhandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setupWebViewJavascriptBridge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("bridge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    bridge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" responseCallback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" responseCallback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developer.apple.com/documentation/webkit/wkwebview",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("developer.apple")]),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/karosLi/KKJSBridge",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("KKJSBridge")]),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);