!function(e,t,n){function o(e){return"[object Function]"==y.call(e)}function i(e){return"string"==typeof e}function r(){}function s(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=g.shift();j=1,e?e.t?m(function(){("c"==e.t?f.injectCss:f.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):j=0}function a(e,n,o,i,r,a,l){function p(t){if(!d&&s(u.readyState)&&(v.r=d=1,!j&&c(),u.onload=u.onreadystatechange=null,t)){"img"!=e&&m(function(){w.removeChild(u)},50);for(var o in E[n])E[n].hasOwnProperty(o)&&E[n][o].onload()}}var l=l||f.errorTimeout,u=t.createElement(e),d=0,y=0,v={t:o,s:n,e:r,a:a,x:l};1===E[n]&&(y=1,E[n]=[]),"object"==e?u.data=n:(u.src=n,u.type=e),u.width=u.height="0",u.onerror=u.onload=u.onreadystatechange=function(){p.call(this,y)},g.splice(i,0,v),"img"!=e&&(y||2===E[n]?(w.insertBefore(u,b?null:h),m(p,l)):E[n].push(u))}function l(e,t,n,o,r){return j=0,t=t||"j",i(e)?a("c"==t?S:O,e,t,this.i++,n,o,r):(g.splice(this.i++,0,e),1==g.length&&c()),this}function p(){var e=f;return e.loader={load:l,i:0},e}var u,f,d=t.documentElement,m=e.setTimeout,h=t.getElementsByTagName("script")[0],y={}.toString,g=[],j=0,v="MozAppearance"in d.style,b=v&&!!t.createRange().compareNode,w=b?d:h.parentNode,d=e.opera&&"[object Opera]"==y.call(e.opera),d=!!t.attachEvent&&!d,O=v?"object":d?"script":"img",S=d?"script":O,x=Array.isArray||function(e){return"[object Array]"==y.call(e)},A=[],E={},C={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};f=function(e){function t(e){var t,n,o,e=e.split("!"),i=A.length,r=e.pop(),s=e.length,r={url:r,origUrl:r,prefixes:e};for(n=0;s>n;n++)o=e[n].split("="),(t=C[o.shift()])&&(r=t(r,o));for(n=0;i>n;n++)r=A[n](r);return r}function s(e,i,r,s,c){var a=t(e),l=a.autoCallback;a.url.split(".").pop().split("?").shift(),a.bypass||(i&&(i=o(i)?i:i[e]||i[s]||i[e.split("/").pop().split("?")[0]]),a.instead?a.instead(e,i,r,s,c):(E[a.url]?a.noexec=!0:E[a.url]=1,r.load(a.url,a.forceCSS||!a.forceJS&&"css"==a.url.split(".").pop().split("?").shift()?"c":n,a.noexec,a.attrs,a.timeout),(o(i)||o(l))&&r.load(function(){p(),i&&i(a.origUrl,c,s),l&&l(a.origUrl,c,s),E[a.url]=2})))}function c(e,t){function n(e,n){if(e){if(i(e))n||(u=function(){var e=[].slice.call(arguments);f.apply(this,e),d()}),s(e,u,t,0,l);else if(Object(e)===e)for(a in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(a)&&(!n&&!--c&&(o(u)?u=function(){var e=[].slice.call(arguments);f.apply(this,e),d()}:u[a]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),d()}}(f[a])),s(e[a],u,t,a,l))}else!n&&d()}var c,a,l=!!e.test,p=e.load||e.both,u=e.callback||r,f=u,d=e.complete||r;n(l?e.yep:e.nope,!!p),p&&n(p)}var a,l,u=this.yepnope.loader;if(i(e))s(e,0,u,0);else if(x(e))for(a=0;a<e.length;a++)l=e[a],i(l)?s(l,0,u,0):x(l)?f(l):Object(l)===l&&c(l,u);else Object(e)===e&&c(e,u)},f.addPrefix=function(e,t){C[e]=t},f.addFilter=function(e){A.push(e)},f.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",u=function(){t.removeEventListener("DOMContentLoaded",u,0),t.readyState="complete"},0)),e.yepnope=p(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,o,i,a,l){var p,u,d=t.createElement("script"),i=i||f.errorTimeout;d.src=e;for(u in o)d.setAttribute(u,o[u]);n=l?c:n||r,d.onreadystatechange=d.onload=function(){!p&&s(d.readyState)&&(p=1,n(),d.onload=d.onreadystatechange=null)},m(function(){p||(p=1,n(1))},i),a?d.onload():h.parentNode.insertBefore(d,h)},e.yepnope.injectCss=function(e,n,o,i,s,a){var l,i=t.createElement("link"),n=a?c:n||r;i.href=e,i.rel="stylesheet",i.type="text/css";for(l in o)i.setAttribute(l,o[l]);s||(h.parentNode.insertBefore(i,h),m(n,0))}}(this,document),function(){"use strict";var e=document.getElementById("webplate").getAttribute("src").replace("start.js",""),t=e+"engine/",n=e+"project/",o={component:n+"component/",config:n+"config.json",engine:{css:t+"css/",js:t+"js/",jsMin:t+"js/min/"},project:{css:n+"css/",iconFont:{fontAwesome:n+"font-awesome/css/font-awesome.min.css",icoMoon:n+"icon-font/icomoon/style.css"},js:n+"js/",jsMin:n+"js/min/",ui:n+"ui/"},root:e},i=[],r=[],s=[],c=[],a=[o.engine.jsMin+"scripts.min.js",o.engine.css+"styles.css"],l={init:function(){yepnope([{load:a,complete:function(){Modernizr.touchevents&&yepnope({load:o.engine.jsMin+"touch.min.js",complete:function(){"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){FastClick.attach(document.body)},!1)}}),web.overlayAdd(),web.scrollWatch(),web.windowWatch(),l.loadJSON(o.config,function(){if(4==this.readyState&&200==this.status){var e=this.responseText,t=JSON.parse(e),n=!1,i=web.getUrl(),r=t.project["body-class"]||!1,a=t.project["component-first"]||[],p=t.project.component||[],u=t.project["form-colour"]||"blue",f=t.project["icon-font"]||!1,d=t.project.css||[],m=t.project.js||[],h=t.project.ui||!1;if(t.project.page)for(var y=t.project.page.length-1;y>=0;y--){var g=t.project.page[y];if(g.url.indexOf("*")>-1?i.postScriptPath.indexOf(g.url.substring(0,g.url.length-1))>-1&&(n=!0):i.sitePath===i.scriptPath+g.url&&(n=!0),n===!0){var j=g["config-type"]||"merge";if("new"==j)r=g["body-class"]||!1,a=g["component-first"]||[],p=g.component||[],u=g["form-colour"]||"blue",f=g["icon-font"]||!1,d=g.css||[],m=g.js||[],h=g.ui||!1;else{if(r=g["body-class"]?g["body-class"]:r,u=g["form-colour"]?g["form-colour"]:u,f=g["form-colour"]?g["icon-font"]:f,h=g.ui?g.ui:h,g["component-first"])for(var y=0,v=g["component-first"].length;v>y;y++){var b=g["component-first"][y];-1==a.indexOf(b)&&a.push(b)}if(g.component)for(var y=0,v=g.component.length;v>y;y++){var w=g.component[y];-1==p.indexOf(w)&&p.push(w)}if(g.css)for(var y=0,v=g.css.length;v>y;y++){var O=g.css[y];-1===d.indexOf(O)&&d.push(O)}if(g.js)for(var y=0,v=g.js.length;v>y;y++){var S=g.js[y];-1===m.indexOf(S)&&m.push(S)}}break}}r!==!1&&web.classAdd(web.element.body,r.trim()),e.indexOf("formplate")>-1&&web.element.body.setAttribute("data-formplate-colour",u),"icomoon"==f?yepnope({load:o.project.iconFont.icoMoon}):"font-awesome"==f&&yepnope({load:o.project.iconFont.fontAwesome}),0!=h&&(s.push(o.project.ui+h+"/style.css"),c.push(o.project.ui+h+"/script.min.js")),a.length>0?l.loadComponentsFirst(a,p,d,m):p.length>0?l.loadComponents(p,d,m):l.loadProjectFiles(d,m)}})}}])},loadComponents:function(e,t,n){for(var i=0,s=e.length;s>i;i++)!function(s){var c=e[s++];l.loadJSON(o.component+c+"/.bower.json",function(){if(4==this.readyState&&200==this.status){var a=JSON.parse(this.responseText);if("object"==typeof a.main)for(i=0;i<a.main.length;i++)r.push(o.component+c+"/"+a.main[i]);else r.push(o.component+c+"/"+a.main);s==e.length&&yepnope({load:r,complete:function(){l.loadProjectFiles(t,n)}})}})}(i)},loadComponentsFirst:function(e,t,n,r){for(var s=0,c=e.length;c>s;s++)!function(s){var c=e[s++];l.loadJSON(o.component+c+"/.bower.json",function(){if(4==this.readyState&&200==this.status){var a=JSON.parse(this.responseText);if("object"==typeof a.main)for(var p=0,u=a.main.length;u>p;p++)i.push(o.component+c+"/"+a.main[p]);else i.push(o.component+c+"/"+a.main);s==e.length&&yepnope({load:i,complete:function(){t.length>0?l.loadComponents(t,n,r):l.loadProjectFiles(n,r)}})}})}(s)},loadJSON:function(e,t){var n=new XMLHttpRequest;n.onreadystatechange=t,n.open("GET",e,!0),n.send()},loadProjectFiles:function(e,t){for(var n=0,i=e.length;i>n;n++){var r=e[n].trim();"css"===web.getExtension(r)&&s.push(o.project.css+r)}for(n=0;n<t.length;n++){var r=t[n].trim();"js"===web.getExtension(r)&&c.push(o.project.js+r)}s.length>0?yepnope({load:s,complete:function(){setTimeout(function(){yepnope({load:c}),setTimeout(function(){web.element.body.removeAttribute("style")},50)},50)}}):c.length>0?setTimeout(function(){yepnope({load:c}),setTimeout(function(){web.element.body.removeAttribute("style")},50)},50):setTimeout(function(){web.element.body.removeAttribute("style")},50)}};l.init()}();