(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{312:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"写在前面的话"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在前面的话"}},[s._v("#")]),s._v(" 写在前面的话")]),s._v(" "),t("p",[s._v("原本在 vultr 上面购买的 VPS 上面搭建的 shadowsocks 不能用了，具体原因就是 GTW 经过一波加强，可以通过 TCP 阻断来封锁一些用于搭建 VPN 的 VPS。TCP 阻断的结果就是在国内无法通过 tcp 来连接访问国外的 vps，从而在国内无法 ssh 登录 vps，但是使用 ping 工具却能 ping 通被 tcp 阻断的服务器，因为 ping 是基于 ICMP 的。这样给人一种 vps 没被封的错觉。")]),s._v(" "),t("p",[s._v("当 vps 被 TCP 阻断时，原本基于 shadowsocks 的科学上网方式就不能使用了，本文就是针对被 TCP 阻断的 vps，通过 v2ray 来实现科学上网。当然对于没有被 TCP 阻断的 vps 使用该方法来搭梯子也不容易被封。")]),s._v(" "),t("p",[s._v("本文分为两个部分：服务端篇和客户端篇。服务端篇的主要内容是在vps上搭建v2ray+nginx环境（因为服务器在海外，所以需要nginx做代理）；客户端篇则介绍v2ray客户端的安装及配置方法。")]),s._v(" "),t("blockquote",[t("p",[s._v("特别感谢 "),t("a",{attrs:{href:"https://github.com/xuxihai123",target:"_blank",rel:"noopener noreferrer"}},[s._v("xuxihai123"),t("OutboundLink")],1),s._v(" 的技术指导。")])]),s._v(" "),t("h2",{attrs:{id:"服务端篇"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务端篇"}},[s._v("#")]),s._v(" 服务端篇")]),s._v(" "),t("p",[s._v("主要流程是，先准备自己的vps，dns，cdn，之后在服务器上搭建v2ray环境以及nginx代理，下面一步一步来：")]),s._v(" "),t("h3",{attrs:{id:"_1-vps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-vps"}},[s._v("#")]),s._v(" 1.vps")]),s._v(" "),t("p",[s._v("vps这里我选用的是 "),t("a",{attrs:{href:"https://www.vultr.com",target:"_blank",rel:"noopener noreferrer"}},[s._v("vultr"),t("OutboundLink")],1),s._v("，关于vultr的购买和配置可以参考我的另一篇文档"),t("a",{attrs:{href:"https://github.com/wangjian92/ShadowSocks",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/wangjian92/ShadowSocks"),t("OutboundLink")],1),s._v("的第一、二章部分。")]),s._v(" "),t("p",[s._v("这里最好选择CentOS7的服务，之前我在CentOS8上遇到了一些因系统版本太高而导致的问题。")]),s._v(" "),t("h3",{attrs:{id:"_2-dns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-dns"}},[s._v("#")]),s._v(" 2.dns")]),s._v(" "),t("p",[s._v("域名我选择的是"),t("a",{attrs:{href:"https://cloud.tencent.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("腾讯云"),t("OutboundLink")],1),s._v("，选择自己想要的域名之后进行购买，这里是传送门："),t("a",{attrs:{href:"https://dnspod.cloud.tencent.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://dnspod.cloud.tencent.com/"),t("OutboundLink")],1),s._v("，可能需要几分钟时间进行实名认证等操作，一切准备就绪后，进入腾讯云的域名管理"),t("a",{attrs:{href:"https://console.cloud.tencent.com/domain",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://console.cloud.tencent.com/domain"),t("OutboundLink")],1),s._v("，查看服务状态是否为正常。")]),s._v(" "),t("p",[s._v("之后可以在自己域名后的"),t("code",[s._v("操作")]),s._v("一栏，进入"),t("code",[s._v("管理")]),s._v("，在"),t("code",[s._v("基本信息")]),s._v("中有一条"),t("code",[s._v("DNS服务器")]),s._v("，这里有两个地址需要修改，可以先记着不用管，待第3步cdn配置好之后填入。")]),s._v(" "),t("h3",{attrs:{id:"_3-cdn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-cdn"}},[s._v("#")]),s._v(" 3.cdn")]),s._v(" "),t("p",[s._v("cdn加速，我这里选用的是"),t("a",{attrs:{href:"https://dash.cloudflare.com",target:"_blank",rel:"noopener noreferrer"}},[s._v("CloudFlare"),t("OutboundLink")],1),s._v(",这是美国的一家IT企业，这里利用它来进行cdn加速，并"),t("strong",[s._v("隐藏你的网站")]),s._v("，这是可以让我们看到外面的世界的很重要的一步，进入CloudFlare官网也就是刚才的链接之后，使用自己的邮箱进行注册，注册成功后需要一些配置：")]),s._v(" "),t("ul",[t("li",[s._v("点击右上角的"),t("code",[s._v("Add Site")]),s._v("，这里会让你输入一个地址，这个地址就是第2步骤中申请好的dns域名，比如"),t("code",[s._v("example.com")])]),s._v(" "),t("li",[s._v("进入你添加好的Site(左上角可以选择并进入)")]),s._v(" "),t("li",[s._v("进入DNS的配置界面，这里点击"),t("code",[s._v("Add record")]),s._v("，添加一条子域名，type就选"),t("code",[s._v("A")]),s._v("，name我写的"),t("code",[s._v("sky")]),s._v("（这里可以自由发挥），IPv4 address填入步骤1中配置好的vps的ip地址，其他选项不用动，Save就好，这样完成了一条子域名的配置，这里了我配置了两条，分别是"),t("code",[s._v("sky")]),s._v("和"),t("code",[s._v("www")])]),s._v(" "),t("li",[s._v("紧接着下面有一栏是"),t("code",[s._v("Cloudflare nameservers")]),s._v("，也就是域名服务器，可以看到有两条"),t("code",[s._v("NS")]),s._v("，将这两个地址分别填入第2步域名的"),t("code",[s._v("DNS服务器")]),s._v("配置中去。")]),s._v(" "),t("li",[s._v("之后进入"),t("code",[s._v("SSL/TLS")]),s._v("，设置SSL/TLS加密方式为"),t("code",[s._v("Full")])])]),s._v(" "),t("p",[s._v("配置完成过后，可任选其一检测自己的cdn是否配置成功：")]),s._v(" "),t("ul",[t("li",[s._v("打开本地cmd，ping一下自己刚才建好的子域名是否可以ping通，这里拿我的配置举例：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" sky.wangjian92.top\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" www.wangjian92.top\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("我这里看到ip是"),t("code",[s._v("104.24")]),s._v("开头的，是正确的")]),s._v(" "),t("ul",[t("li",[s._v("或者可以打开本地浏览器，在地址栏直接输入这两个地址，看是否有页面")]),s._v(" "),t("li",[s._v("或者进入"),t("a",{attrs:{href:"http://ip.tool.chinaz.com/sky.wangjian92.top",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://ip.tool.chinaz.com/sky.wangjian92.top"),t("OutboundLink")],1),s._v("，"),t("a",{attrs:{href:"http://whois.chinaz.com/wangjian92.top",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://whois.chinaz.com/wangjian92.top"),t("OutboundLink")],1),s._v("这两个网站输入自己的域名看是否展示详细信息")])]),s._v(" "),t("p",[s._v("如果可以ping通或者可以看到自己域名的信息，则进行之后的服务器端操作，如果不行，可以检查一下之前的配置步骤。")]),s._v(" "),t("h3",{attrs:{id:"_4-服务器端nginx和v2ray的安装及配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-服务器端nginx和v2ray的安装及配置"}},[s._v("#")]),s._v(" 4.服务器端nginx和v2ray的安装及配置")]),s._v(" "),t("p",[s._v("完成了之前三步的准备工作，即可通过ssh或者xshell工具链接服务器，安装及配置nginx和v2ray代理。")]),s._v(" "),t("h4",{attrs:{id:"_4-1-nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-nginx"}},[s._v("#")]),s._v(" 4.1 nginx")]),s._v(" "),t("p",[s._v("Nginx (engine x) 是一个高性能的 HTTP 和反向代理服务器，Nginx 不在默认的 yum 源中，可以使用 epel 或者官网的 yum 源，这里使用 yum 源")]),s._v(" "),t("p",[s._v("方法一：直接添加nginx源")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("方法二：安装epel额外软件包（涵盖了常用的软件包）")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" epel-release -y\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("安装完 yum 源之后，可以查看一下（这里以nginx源为例，如果选择方法二安装epel成功后，查看仓库多了一行，有一万多个包。）")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@vultr v2ray"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum repolist")]),s._v("\nLoaded plugins: fastestmirror\nLoading mirror speeds from cached hostfile\n * base: centos.mirror.constant.com\n * epel: fedora-epel.mirrors.tds.net\n * extras: centos.mirror.constant.com\n * updates: centos.mirror.constant.com\nrepo "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v("                                             repo name                                                                        status\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("base/7/x86_64                                      CentOS-7 - Base                                                                  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10,097")]),s._v("\n*"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("epel/x86_64                                       Extra Packages "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Enterprise Linux "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" - x86_64                                   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13,447")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("extras/7/x86_64                                    CentOS-7 - Extras                                                                   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("305")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("mongodb-org-4.0/7                                  MongoDB Repository                                                                   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("70")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("nginx/x86_64                                       nginx repo                                                                          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("168")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("updates/7/x86_64                                   CentOS-7 - Updates                                                                  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("711")]),s._v("\nrepolist: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24,798")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[s._v("可以发现 nginx repo 已经安装到本机了，接下来使用 yum 安装 Nginx。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nginx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("启动服务")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("systemctl start nginx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("（可跳过）这里有一个websocket服务"),t("code",[s._v("websocket-starter")]),s._v("，用于启动websocket测试nginx代理是否成功，默认在3000端口，可在"),t("code",[s._v("server.js")]),s._v("中修改")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/wangjian92/websocket-starter.git\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ./websocket-starter\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" start\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("配置nginx (配置目录在/etc/nginx/conf.d目录)，在conf.d目录下新建文件v2ray.conf，写入以下配置")]),s._v(" "),t("div",{staticClass:"language-conf line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('server {\n  listen  443 ssl;\n  ssl_certificate     /usr/local/server/cloudflare.crt;  ## cloudflare.crt 下载\n  ssl_certificate_key     /usr/local/server/cloudflare.key; ## cloudflare.crt 下载\n\n  ssl_protocols         TLSv1 TLSv1.1 TLSv1.2;\n  ssl_ciphers           HIGH:!aNULL:!MD5;\n  server_name           sky.wangjian92.com;\n# 测试websocket静态页面\n  location /{ \n    proxy_pass http://127.0.0.1:3000;\n  }\n# 测试 服务器跟浏览器的联通\n  location /echo{\n    proxy_redirect off;\n    proxy_pass  http://127.0.0.1:3000;  \n    proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "upgrade";\n        proxy_set_header Host $http_host;\n        # Show realip in v2ray access.log\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_connect_timeout 60;\n        proxy_read_timeout 600;\n        proxy_send_timeout 600;\n  }\n# 真实的代理websocket请求到v2ray  websocket服务。\n  location /ray{ # 与 V2Ray 配置中的 path 保持一致\n        proxy_redirect off;\n        proxy_pass http://127.0.0.1:31523;#假设WebSocket监听在环回地址的10000端口上\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "upgrade";\n        proxy_set_header Host $http_host;\n        proxy_set_header Origin "";\n\n        # Show realip in v2ray access.log\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_connect_timeout 60;\n    proxy_read_timeout 600;\n    proxy_send_timeout 600;\n  }\n  error_page   500 502 503 504  /50x.html;\n  location = /50x.html {\n        root   /usr/share/nginx/html;\n  }\n}\n\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br")])]),t("ul",[t("li",[s._v("其中有几点注意的地方，ssl_certificate和ssl_certificate_key需要在 "),t("code",[s._v("cloudflare")]),s._v(" -> "),t("code",[s._v("SSL/TLS")]),s._v(" -> "),t("code",[s._v("Origin Server")]),s._v("中Create Certificate并下载，"),t("code",[s._v("ssl_certificate_key")]),s._v(" 需要配置到 "),t("code",[s._v("PRIVATE KEY")]),s._v("以"),t("code",[s._v(".key")]),s._v("为后缀，"),t("code",[s._v("ssl_certificate")]),s._v("配置到"),t("code",[s._v("CERTIFICATE")]),s._v("和"),t("code",[s._v("PRIVATE KEY")]),s._v("以"),t("code",[s._v(".crt")]),s._v("为后缀。")]),s._v(" "),t("li",[t("code",[s._v("server_name")]),s._v("指向自己的子域名")]),s._v(" "),t("li",[t("code",[s._v("proxy_pass")]),s._v("分别配置到本地 "),t("code",[s._v("websocket-starter")]),s._v(" 的启动端口，和v2ray的端口（这个端口可在"),t("code",[s._v("4.2 v2ray")]),s._v("配置结束后再配，端口可在"),t("code",[s._v("/etc/v2ray/config.json")]),s._v("中查询）")]),s._v(" "),t("li",[s._v("在浏览器打开自己的地址，"),t("a",{attrs:{href:"https://sky.wangjian92.top",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://sky.wangjian92.top"),t("OutboundLink")],1),s._v("，看是否出现一个websocket链接测试的页面，点击进行测试（注意要改为wss协议）")])]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("vultr需要开放端口或者关闭防火墙才能连接")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 防火墙相关操作")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看防火状态")]),s._v("\nsystemctl status firewalld\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v("  iptables status\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 暂时关闭防火墙")]),s._v("\nsystemctl stop firewalld\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v("  iptables stop\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 永久关闭防火墙")]),s._v("\nsystemctl disable firewalld\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" iptables off\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启防火墙")]),s._v("\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" firewalld\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" iptables restart\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("h4",{attrs:{id:"_4-2-v2ray"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-v2ray"}},[s._v("#")]),s._v(" 4.2 v2ray")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/v2ray/v2ray-core",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[s._v("v2ray")]),t("OutboundLink")],1),s._v("是 Project V 下的一个工具。Project V 是一个包含一系列构建特定网络环境工具的项目，而 V2Ray 属于最核心的一个。简单地说，V2Ray 是一个与 Shadowsocks 类似的代理软件，用于构建代理绕过网络限制的平台，但它俩还是有区别的，Shadowsocks 只是一个简单的代理工具，而 V2Ray 定位为一个平台，任何开发者都可以利用 V2Ray 提供的模块开发出新的代理软件。")]),s._v(" "),t("p",[s._v("在 Linux 操作系统， V2Ray 的安装有脚本安装、手动安装、编译安装 3 种方式，选择其中一种即可，本指南仅提供使用使用脚本安装的方法，并仅推荐使用脚本安装，该脚本由 V2Ray 官方提供。该脚本仅可以在 Debian 系列或者支持 Systemd 的 Linux 操作系统使用。有兴趣的朋友可以进入官网文档"),t("a",{attrs:{href:"https://www.v2ray.com/chapter_00/install.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.v2ray.com/chapter_00/install.html"),t("OutboundLink")],1),s._v("查看其他安装方式及文档。")]),s._v(" "),t("p",[s._v("首先下载脚本：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://install.direct/go.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后执行脚本安装 V2Ray")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" go.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("安装顺利的话会看到"),t("code",[s._v("V2Ray is installed")]),s._v("的类似信息，如果安装不成功脚本会有红色的提示语句，这个时候应当按照提示除错，除错后再重新执行一遍脚本安装 V2Ray。在安装结果中会看到"),t("code",[s._v("PORT")]),s._v("和"),t("code",[s._v("UUID")]),s._v("的信息，这两个都是随机生成的，不用担心与别人重复。可以暂且记下在之后的步骤中用，不过没记住也能在"),t("code",[s._v("/etc/v2ray/config.json")]),s._v("中找到。")]),s._v(" "),t("p",[s._v("安装完之后，使用以下命令启动 V2Ray")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start v2ray\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("在首次安装完成之后，V2Ray 不会自动启动，需要手动运行上述启动命令。而在已经运行 V2Ray 的 VPS 上再次执行安装脚本，安装脚本会自动停止 V2Ray 进程，升级 V2Ray 程序，然后自动运行 V2Ray。在升级过程中，配置文件不会被修改。")]),s._v(" "),t("p",[s._v("对于安装脚本，还有更多用法，在此不多说了，可以执行 "),t("code",[s._v("bash go.sh -h")]),s._v(" 看帮助。")]),s._v(" "),t("p",[s._v("查看v2ray默认配置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/v2ray/config.json\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("修改配置")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"inbounds"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"port"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31523")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"protocol"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vmess"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"settings"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"clients"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"id"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*****"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 和谐掉")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"level"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"alterId"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用websocket传输必须设置 (为nginx代理websocket做铺垫)，需要添加")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"streamSettings"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"network"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ws"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"wsSettings"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \t    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"path"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/ray"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这里要配nginx中配置的代理")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"outbounds"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"protocol"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"freedom"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"settings"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"protocol"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"blackhole"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"settings"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"tag"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"blocked"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"routing"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"rules"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"field"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ip"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"geoip:private"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"outboundTag"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"blocked"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br")])]),t("p",[s._v("修改配置文件之后需要重启v2ray")]),s._v(" "),t("p",[s._v("v2ray常用操作：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 启动")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start v2ray\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 停止")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl stop v2ray\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 重启")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart v2ray\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("在浏览器打开自己的地址，"),t("a",{attrs:{href:"https://sky.wangjian92.top",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://sky.wangjian92.top"),t("OutboundLink")],1),s._v("，看是否出现一个websocket链接测试的页面，点击进行测试（注意要改为wss协议，切换/echo和/ray分别发请求看是否都成功），如果成功，进入客户端篇。")]),s._v(" "),t("h2",{attrs:{id:"客户端篇"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#客户端篇"}},[s._v("#")]),s._v(" 客户端篇")]),s._v(" "),t("p",[s._v("v2ray官网客户端下载地址："),t("a",{attrs:{href:"https://github.com/v2ray/v2ray-core/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/v2ray/v2ray-core/releases"),t("OutboundLink")],1),s._v("，下载适合自己系统的安装包安装")]),s._v(" "),t("p",[s._v("配置服务器ip地址、端口、uuid")]),s._v(" "),t("p",[s._v("// TODO 持续更新")])])}),[],!1,null,null,null);a.default=e.exports}}]);