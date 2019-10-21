(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{293:function(s,a,t){"use strict";t.r(a);var e=t(0),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("这篇文章源于自己近来使用 vultr 折腾 ShadowSocks 而做的记录\n"),t("strong",[s._v("科学上网，请合法参考、使用本文")])]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/wangjian92",target:"_blank",rel:"noopener noreferrer"}},[s._v("本文地址-GitHub"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.jianshu.com/p/216885c33ed8",target:"_blank",rel:"noopener noreferrer"}},[s._v("本文地址-简书"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"prepare"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prepare"}},[s._v("#")]),s._v(" PREPARE")]),s._v(" "),t("p",[s._v("大体流程是需要在 vultr 官网上使用邮箱注册登录，购买并设置服务器，在服务器上安装并搭建 shadowsocks，本地安装 shadowsocks 客户端，按照服务器上设置的端口密码与服务器建立连接，完成。")]),s._v(" "),t("h3",{attrs:{id:"实现原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现原理"}},[s._v("#")]),s._v(" 实现原理")]),s._v(" "),t("blockquote",[t("p",[s._v("下面摘自 wikipedia\nShadowsocks 的运行原理与其他代理工具基本相同，使用特定的中转服务器完成数据传输。\n在服务器端部署完成后，用户需要按照指定的密码、加密方式和端口，使用客户端软件与其连接。在成功连接到服务器后，客户端会在本机上构建一个本地 Socks5 代理（或 VPN、透明代理）。浏览网络时，网络流量会被分到本地 Socks5 代理，客户端将其加密之后发送到服务器，服务器以同样的加密方式将流量回传给客户端，以此实现代理上网。")])]),s._v(" "),t("h3",{attrs:{id:"提前准备好这些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提前准备好这些"}},[s._v("#")]),s._v(" 提前准备好这些")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/shadowsocks/shadowsocks-windows/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("ShadowSocks"),t("OutboundLink")],1),s._v("——我选用的是比较老的 2.5.8 版本\n"),t("a",{attrs:{href:"https://xshell.en.softonic.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("xshell"),t("OutboundLink")],1),s._v("——用于操作远程服务\n还有购买 vultr 服务需要准备至少$10...土豪请忽略这行")]),s._v(" "),t("h2",{attrs:{id:"begin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#begin"}},[s._v("#")]),s._v(" BEGIN")]),s._v(" "),t("h3",{attrs:{id:"一、充值-vultr-服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、充值-vultr-服务"}},[s._v("#")]),s._v(" 一、充值 VULTR 服务")]),s._v(" "),t("p",[s._v("VULTR 官方地址："),t("a",{attrs:{href:"https://www.vultr.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.vultr.com/"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/6177162-6176ab5c45ecfe40.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"VULTR首页"}})]),s._v(" "),t("p",[s._v("需要输入邮箱及密码进行注册，登录之后进入下图，点击左侧 "),t("strong",[s._v("Billing")]),s._v(" 后，选择支付方式，编者使用的是 Alipay 支付宝，选好后会显示出二维码，用支付宝扫描后扣款，支付宝会计算费率。这里最少需要购买$10，扣款规则是会根据之后选择的服务器类型进行扣款，10 刀如果选便宜的类型的话够用 2~3 个月。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/6177162-2b634a90b57a21c0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"付款页面"}})]),s._v(" "),t("p",[s._v("顺利完成上面的步骤就充值成功了，再次回到 "),t("strong",[s._v("Billing")]),s._v(" 页面会在右上角看到余额。")]),s._v(" "),t("h3",{attrs:{id:"二、配置-vultr-服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、配置-vultr-服务"}},[s._v("#")]),s._v(" 二、配置 VULTR 服务")]),s._v(" "),t("p",[s._v("完成步骤一后，就可以在 "),t("strong",[s._v("Servers")]),s._v(" 中实例服务了，进入"),t("strong",[s._v("Servers")]),s._v("，点击右上角的加号新建，进入下图页面：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/6177162-7067d3545d2d67e3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"Servers实例服务页面"}})]),s._v(" "),t("p",[s._v("在这里选择自己想要的配置，编者这里选择的地址是洛杉矶节点，类型是 CentOS 7 x64，因为我只搭建 ShadowSocks 所以服务大小是 20GB SSD，$3.50/mo，其他选项选填，点击"),t("strong",[s._v("Deploy Now")]),s._v("，就完成一个配置了，可在 Server 中查看配置的信息。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/6177162-d837b631258f48ff.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"服务列表"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/6177162-becde0684e99aabe.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"服务详情"}})]),s._v(" "),t("p",[s._v("至这里便完成了服务的购买充值并配置的准备工作。")]),s._v(" "),t("h3",{attrs:{id:"三、连接配置好的远程服务器（windows-环境）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、连接配置好的远程服务器（windows-环境）"}},[s._v("#")]),s._v(" 三、连接配置好的远程服务器（windows 环境）")]),s._v(" "),t("p",[s._v("使用 XShell 连接配置好的远程服务器，使用的参数有步骤二详情中的 IP Address，Username，Password，都可以在页面上复制\n"),t("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/6177162-7126630e94f9f7a5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"Xshell连接配置"}}),s._v("\n之后输入用户名和密码进行连接，连接成功后会进入 shell 界面，之后就可以在其中操作，进行下一步：搭建 ShadowSocks 服务。")]),s._v(" "),t("h3",{attrs:{id:"四、搭建-shadowsocks-服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、搭建-shadowsocks-服务"}},[s._v("#")]),s._v(" 四、搭建 ShadowSocks 服务")]),s._v(" "),t("p",[s._v("在服务器上安装 shadowsocks，顺序执行下面操作")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" m2crypto python-setuptools\neasy_install pip\npip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" shadowsocks\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("配置 shadowsocks")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v("  /etc/shadowsocks.json\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("写入如下配置")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"server"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.0.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//这里写入IP Address")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"server_port"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//端口")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"local_address"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//这里写入IP Address")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"local_port"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"password"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123456"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//客户端shadowsocks连接服务器的密码")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"timeout"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"method"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aes-256-cfb"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"fast_open"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("配置防火墙")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装防火墙")]),s._v("\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" firewalld\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动防火墙")]),s._v("\nsystemctl start firewalld\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("开启防火墙相应的端口")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 端口号是你自己设置的端口")]),s._v("\nfirewall-cmd --permanent --zone"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public --add-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v("/tcp\nfirewall-cmd --reload\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("启动 Shadowsocks 服务")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 后台运行")]),s._v("\nssserver -c /etc/shadowsocks.json -d start\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 调试时使用下面命令，实时查看日志")]),s._v("\nssserver -c /etc/shadowsocks.json\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"五、本地-shadowsocks-连接服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、本地-shadowsocks-连接服务器"}},[s._v("#")]),s._v(" 五、本地 ShadowSocks 连接服务器")]),s._v(" "),t("p",[s._v("找到准备工作中下载的 ShadowSocks 安装包，解压双击 exe 文件，结合步骤四中的配置信息，进行配置")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/6177162-3eabb0713f057fdc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"shadowsocks配置"}})]),s._v(" "),t("p",[s._v("桌面托盘中右键 Shadowsocks"),t("strong",[s._v("启用系统代理")]),s._v("\n这个时候再试试访问外网")]),s._v(" "),t("p",[s._v("Just enjoy it！")])])}),[],!1,null,null,null);a.default=r.exports}}]);