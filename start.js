!function(e,t,n){function o(e){return"[object Function]"==g.call(e)}function r(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=y.shift();v=1,e?e.t?m(function(){("c"==e.t?f.injectCss:f.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):v=0}function s(e,n,o,r,i,s,l){function p(t){if(!d&&a(u.readyState)&&(j.r=d=1,!v&&c(),u.onload=u.onreadystatechange=null,t)){"img"!=e&&m(function(){w.removeChild(u)},50);for(var o in C[n])C[n].hasOwnProperty(o)&&C[n][o].onload()}}var l=l||f.errorTimeout,u=t.createElement(e),d=0,g=0,j={t:o,s:n,e:i,a:s,x:l};1===C[n]&&(g=1,C[n]=[]),"object"==e?u.data=n:(u.src=n,u.type=e),u.width=u.height="0",u.onerror=u.onload=u.onreadystatechange=function(){p.call(this,g)},y.splice(r,0,j),"img"!=e&&(g||2===C[n]?(w.insertBefore(u,b?null:h),m(p,l)):C[n].push(u))}function l(e,t,n,o,i){return v=0,t=t||"j",r(e)?s("c"==t?E:x,e,t,this.i++,n,o,i):(y.splice(this.i++,0,e),1==y.length&&c()),this}function p(){var e=f;return e.loader={load:l,i:0},e}var u,f,d=t.documentElement,m=e.setTimeout,h=t.getElementsByTagName("script")[0],g={}.toString,y=[],v=0,j="MozAppearance"in d.style,b=j&&!!t.createRange().compareNode,w=b?d:h.parentNode,d=e.opera&&"[object Opera]"==g.call(e.opera),d=!!t.attachEvent&&!d,x=j?"object":d?"script":"img",E=d?"script":x,O=Array.isArray||function(e){return"[object Array]"==g.call(e)},S=[],C={},P={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};f=function(e){function t(e){var t,n,o,e=e.split("!"),r=S.length,i=e.pop(),a=e.length,i={url:i,origUrl:i,prefixes:e};for(n=0;a>n;n++)o=e[n].split("="),(t=P[o.shift()])&&(i=t(i,o));for(n=0;r>n;n++)i=S[n](i);return i}function a(e,r,i,a,c){var s=t(e),l=s.autoCallback;s.url.split(".").pop().split("?").shift(),s.bypass||(r&&(r=o(r)?r:r[e]||r[a]||r[e.split("/").pop().split("?")[0]]),s.instead?s.instead(e,r,i,a,c):(C[s.url]?s.noexec=!0:C[s.url]=1,i.load(s.url,s.forceCSS||!s.forceJS&&"css"==s.url.split(".").pop().split("?").shift()?"c":n,s.noexec,s.attrs,s.timeout),(o(r)||o(l))&&i.load(function(){p(),r&&r(s.origUrl,c,a),l&&l(s.origUrl,c,a),C[s.url]=2})))}function c(e,t){function n(e,n){if(e){if(r(e))n||(u=function(){var e=[].slice.call(arguments);f.apply(this,e),d()}),a(e,u,t,0,l);else if(Object(e)===e)for(s in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(s)&&(!n&&!--c&&(o(u)?u=function(){var e=[].slice.call(arguments);f.apply(this,e),d()}:u[s]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),d()}}(f[s])),a(e[s],u,t,s,l))}else!n&&d()}var c,s,l=!!e.test,p=e.load||e.both,u=e.callback||i,f=u,d=e.complete||i;n(l?e.yep:e.nope,!!p),p&&n(p)}var s,l,u=this.yepnope.loader;if(r(e))a(e,0,u,0);else if(O(e))for(s=0;s<e.length;s++)l=e[s],r(l)?a(l,0,u,0):O(l)?f(l):Object(l)===l&&c(l,u);else Object(e)===e&&c(e,u)},f.addPrefix=function(e,t){P[e]=t},f.addFilter=function(e){S.push(e)},f.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",u=function(){t.removeEventListener("DOMContentLoaded",u,0),t.readyState="complete"},0)),e.yepnope=p(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,o,r,s,l){var p,u,d=t.createElement("script"),r=r||f.errorTimeout;d.src=e;for(u in o)d.setAttribute(u,o[u]);n=l?c:n||i,d.onreadystatechange=d.onload=function(){!p&&a(d.readyState)&&(p=1,n(),d.onload=d.onreadystatechange=null)},m(function(){p||(p=1,n(1))},r),s?d.onload():h.parentNode.insertBefore(d,h)},e.yepnope.injectCss=function(e,n,o,r,a,s){var l,r=t.createElement("link"),n=s?c:n||i;r.href=e,r.rel="stylesheet",r.type="text/css";for(l in o)r.setAttribute(l,o[l]);a||(h.parentNode.insertBefore(r,h),m(n,0))}}(this,document),function(){"use strict";var e=document.getElementById("webplate-content"),t=document.getElementById("webplate").getAttribute("src").replace("start.js",""),n=t+"engine/",o=t+"project/",r={component:o+"component/",config:o+"config.json",engine:{css:n+"css/",js:n+"js/"},project:{css:o+"css/",iconFont:{fontAwesome:o+"font-awesome/css/font-awesome.min.css",icoMoon:o+"icomoon/style.css"},js:o+"js/"},root:t},i="",a=[],c=[],s=[],l=[],p=[r.engine.js+"scripts.min.js",r.engine.css+"styles.min.css"];if(null!==e){var u=document.createElement("div"),f="Loading",d=0;e.style.display="none",u.id="web-page-loader",u.style.margin="0px auto",u.style.paddingTop="150px",u.style.color="#ccd1d9",u.style.fontSize="20px",u.style.fontFamily="Arial, Helvetica, sans-serif",u.style.textAlign="center",document.getElementsByTagName("body")[0].appendChild(u);var m=setInterval(function(){d++,null!==document.getElementById("web-page-loader")?document.getElementById("web-page-loader").innerHTML=f+new Array(d%5).join("."):clearInterval(m)},300)}var h={init:function(){yepnope([{load:p,complete:function(){Modernizr.touchevents&&yepnope({load:r.engine.js+"touch.min.js",complete:function(){"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){FastClick.attach(document.body)},!1)}}),Web.overlay.add(),Web.inject=Web.injectplateExecute();Web.url();Web.request.get({url:r.config,onSuccess:h.loadProject})}}])},loadComponents:function(e,t,n){for(var o=0,i=e.length;i>o;o++)!function(i){var a=e[i++];h.loadJSON(r.component+a+"/.bower.json",function(){if(4==this.readyState&&200==this.status){var s=JSON.parse(this.responseText);if("object"==typeof s.main)for(o=0;o<s.main.length;o++)c.push(r.component+a+"/"+s.main[o]);else c.push(r.component+a+"/"+s.main);i==e.length&&yepnope({load:c,complete:function(){h.loadProjectFiles(t,n)}})}})}(o)},loadComponentsFirst:function(e,t,n,o){for(var i=0,c=e.length;c>i;i++)!function(i){var c=e[i++];h.loadJSON(r.component+c+"/.bower.json",function(){if(4==this.readyState&&200==this.status){var s=JSON.parse(this.responseText);if("object"==typeof s.main)for(var l=0,p=s.main.length;p>l;l++)a.push(r.component+c+"/"+s.main[l]);else a.push(r.component+c+"/"+s.main);i==e.length&&yepnope({load:a,complete:function(){t.length>0?h.loadComponents(t,n,o):h.loadProjectFiles(n,o)}})}})}(i)},loadProject:function(e){var t=!1;if(e.cache&&e.cache.bust&&(i="?ts="+e.cache.bust),e.project){var n=e.project["component-first"]||[],o=e.project.component||[],a=e.project["icon-font"]||!1,c=e.project.css||[],s=e.project.js||[];if(e.project.page)for(var l=e.project.page.length-1;l>=0;l--){var p=e.project.page[l];if(p.url.indexOf("*")>-1?urlData.currentUrl.indexOf(p.url.substring(0,p.url.length-1))>-1&&(t=!0):urlData.currentUrl===urlData.baseUrl+p.url&&(t=!0),t===!0){var u=p["config-type"]||"merge";if("new"==u)n=p["component-first"]||[],o=p.component||[],a=p["icon-font"]||!1,c=p.css||[],s=p.js||[];else{if(a=p["icon-font"]?p["icon-font"]:a,p["component-first"])for(var l=0,f=p["component-first"].length;f>l;l++){var d=p["component-first"][l];-1==n.indexOf(d)&&n.push(d)}if(p.component)for(var l=0,f=p.component.length;f>l;l++){var m=p.component[l];-1==o.indexOf(m)&&o.push(m)}if(p.css)for(var l=0,f=p.css.length;f>l;l++){var g=p.css[l];-1===c.indexOf(g)&&c.push(g)}if(p.js)for(var l=0,f=p.js.length;f>l;l++){var y=p.js[l];-1===s.indexOf(y)&&s.push(y)}}break}}"icomoon"==a?yepnope({load:r.project.iconFont.icoMoon}):"font-awesome"==a&&yepnope({load:r.project.iconFont.fontAwesome}),n.length>0?h.loadComponentsFirst(n,o,c,s):o.length>0?h.loadComponents(o,c,s):h.loadProjectFiles(c,s)}else h.showPage()},loadProjectFiles:function(e,t){for(var n=0,o=e.length;o>n;n++){var a=e[n].trim();"css"===Web.get.extension(a)&&s.push(r.project.css+a+i)}for(n=0;n<t.length;n++){var a=t[n].trim();"js"===Web.get.extension(a)&&l.push(r.project.js+a+i)}s.length>0?yepnope({load:s,complete:function(){h.showPage(),setTimeout(function(){yepnope({load:l})},50)}}):l.length>0?(h.showPage(),setTimeout(function(){yepnope({load:l})},50)):h.showPage()},showPage:function(){null!==e?(e.removeAttribute("style"),document.getElementById("web-page-loader").parentNode.removeChild(document.getElementById("web-page-loader"))):Web.element.body.removeAttribute("style"),Web.form()}};h.init()}();