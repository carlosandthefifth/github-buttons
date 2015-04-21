(function(){var t,e,n,r,a,o,i,s,c,l,u,h,d,f,p,g,b,m,y,w,v,_,k=[].slice,C=function(t,e){function n(){this.constructor=t}for(var r in e)x.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},x={}.hasOwnProperty;for(_=this,b=_.document,o={api:"https://api.github.com",anchorClass:"github-button",iconClass:"octicon",icon:"octicon-mark-github",scriptId:"github-bjs",styles:["default","mega"]},(o.script=b.getElementById(o.scriptId))&&(o.url=o.script.src.replace(/buttons\.js([?#].*)?$/,"")),c=function(){function t(){}var e;return t.flatten=function(t){var e,n;return e=function(t,r){var a,o,i,s,c,l;switch(Object.prototype.toString.call(t)){case"[object Object]":for(s in t)l=t[s],e(l,r?r+"."+s:s);break;case"[object Array]":for(a=i=0,c=t.length;c>i;a=++i)o=t[a],e(o,r+"["+a+"]");break;default:n[r]=t}},n={},e(t,""),n},t.expand=function(t){var n,r,a,o,i,s;o=[];for(n in t){for(s=t[n],a=n.match(/((?!\[\d+\])[^.])+|\[\d+\]/g),i=o,r=0;a.length;)null==i[r]&&(i[r]=a[0]===e(a[0])?{}:[]),i=i[r],r=e(a.shift());i[r]=s}return o[0]},e=function(t){var e;return(e=t.match(/^\[(\d+)\]$/))?Number(e[1]):t},t}(),g=function(){function t(){}return t.stringify=function(t){var e,n,r;n=[];for(e in t)r=t[e],n.push(e+"="+(null!=r?r:""));return n.join("&")},t.parse=function(t){var e,n,r,a,o,i,s,c;for(a={},i=t.split("&"),e=0,r=i.length;r>e;e++)o=i[e],""!==o&&(s=o.split("="),n=s[0],c=2<=s.length?k.call(s,1):[],""!==n&&(a[n]=c.join("=")));return a},t}(),d=function(){function t(){}return t.encode=function(t){return"#"+encodeURIComponent(g.stringify(c.flatten(t)))},t.decode=function(t){return null==t&&(t=b.location.hash),c.expand(g.parse(decodeURIComponent(t.replace(/^#/,""))))||{}},t}(),s=function(){function t(t,e){this.$=t&&1===t.nodeType?t:b.createElement(t),e&&e.call(this,this.$)}var e,n,r,a,o,i;return t.prototype.get=function(){return this.$},t.prototype.on=function(){var t,e,r,a,o,i,s;for(r=2<=arguments.length?k.call(arguments,0,o=arguments.length-1):(o=0,[]),a=arguments[o++],t=function(t){return function(e){return a.call(t,e||_.event)}}(this),i=0,s=r.length;s>i;i++)e=r[i],n(this.$,e,t)},t.prototype.once=function(){var t,e,r,a,o,s,c;for(r=2<=arguments.length?k.call(arguments,0,o=arguments.length-1):(o=0,[]),a=arguments[o++],t=function(e){return function(n){var o,s,c;for(s=0,c=r.length;c>s;s++)o=r[s],i(e.$,o,t);return a.call(e,n||_.event)}}(this),s=0,c=r.length;c>s;s++)e=r[s],n(this.$,e,t)},t.prototype.addClass=function(t){r(this.$,t)||e(this.$,t)},t.prototype.removeClass=function(t){r(this.$,t)&&o(this.$,t)},t.prototype.hasClass=function(t){return r(this.$,t)},n=function(t,e,n){t.addEventListener?t.addEventListener(""+e,n):t.attachEvent("on"+e,n)},i=function(t,e,n){t.removeEventListener?t.removeEventListener(""+e,n):t.detachEvent("on"+e,n)},a=/[ \t\n\f\r]+/g,e=function(t,e){t.className+=" "+e},o=function(t,e){t.className=(" "+t.className+" ").replace(a," ").replace(" "+e+" ","").replace(/^ | $/,"")},r=function(t,e){return(" "+t.className+" ").replace(a," ").indexOf(" "+e+" ")>=0},t}(),u=function(t){function e(t){e.__super__.constructor.call(this,"iframe",function(e){var n,r,a,o;r={allowtransparency:!0,scrolling:"no",frameBorder:0};for(n in r)o=r[n],e.setAttribute(n,o);a={border:"none",height:"0",width:"1px"};for(n in a)o=a[n],e.style[n]=o;t&&t.call(this,e)})}var n,r;return C(e,t),e.prototype.html=function(t){var e;try{e=this.$.contentWindow.document,e.open(),e.write(t),e.close()}catch(n){}},e.prototype.load=function(t){this.$.src=t},e.prototype.size=function(){var t,e,a,o,i,s;try{return a=this.$.contentWindow.document,i=a.documentElement,t=a.body,i.style.overflow=t.style.overflow=_.opera?"scroll":"visible",s=t.scrollWidth,o=t.scrollHeight,1!==n&&(t.style.display="inline-block",e=t.getBoundingClientRect(),s=Math.max(s,r(e.width)),o=Math.max(o,r(e.height)),t.style.display=""),i.style.overflow=t.style.overflow="",{width:s+"px",height:o+"px"}}catch(c){return{}}},e.prototype.resize=function(t){var e,n,r;return n=null!=t?t:this.size(),r=n.width,e=n.height,r&&(this.$.style.width=r),e?this.$.style.height=e:void 0},n=_.devicePixelRatio||1,r=function(t){return Math.ceil(Math.round(t*n)/n*2)/2||0},e}(s),t=function(){function t(){}var e;return t.parse=function(t){var n,r,a,o;return{href:e(t.href),text:t.getAttribute("data-text")||t.textContent||t.innerText,data:{count:{api:(n=t.getAttribute("data-count-api"))&&~n.indexOf("#")?n.replace(/^(?!\/)/,"/"):void 0,href:e(t.getAttribute("data-count-href"))||e(t.href),aria:{label:(a=t.getAttribute("data-count-aria-label"))?a:void 0}},style:(o=t.getAttribute("data-style"))?o:void 0,icon:(r=t.getAttribute("data-icon"))?r:void 0},aria:{label:(a=t.getAttribute("aria-label"))?a:void 0}}},e=function(t){return/^\s*javascript:/i.test(t)?"":t},t}(),n=function(t){function e(t,n,r){var a;e.__super__.constructor.call(this,n),a=function(e){return function(){var n;n=e.size(),e.once("load",function(){this.resize(n),r&&r.call(this,this.$)}),e.load(o.url+"buttons.html"+t)}}(this),this.once("load",function(){var t;(n=this.$.contentWindow.callback)?(t=n.script,t.readyState?new s(t).on("readystatechange",function(){/loaded|complete/.test(t.readyState)&&a()}):new s(t).on("load","error",function(){a()})):a()}),this.html('<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8">\n<title></title>\n<base target="_blank"><!--[if lte IE 6]></base><![endif]-->\n<link rel="stylesheet" href="'+o.url+'assets/css/buttons.css">\n<script>document.location.hash = "'+t+'";</script>\n</head>\n<body>\n<script src="'+o.script.src+'"></script>\n</body>\n</html>')}return C(e,t),e}(u),r=function(){function t(t){t&&t.data&&(b.body.className=function(){var e,n,r,a;for(r=o.styles,e=0,n=r.length;n>e;e++)if(a=r[e],a===t.data.style)return a}()||o.styles[0],t.href&&(b.getElementsByTagName("base")[0].href=t.href),new e(t,function(t){b.body.appendChild(t)}),new n(t.data.count,function(t){b.body.appendChild(t)}))}var e,n;return e=function(t){function e(t,n){e.__super__.constructor.call(this,"a",function(e){e.className="button",t.href&&(e.href=t.href),t.aria.label&&e.setAttribute("aria-label",t.aria.label),new s("i",function(n){n=b.createElement("i"),n.className=(t.data.icon||o.icon)+(o.iconClass?" "+o.iconClass:""),n.setAttribute("aria-hidden","true"),e.appendChild(n)}),new s("span",function(t){t.appendChild(b.createTextNode(" ")),e.appendChild(t)}),new s("span",function(n){t.text&&n.appendChild(b.createTextNode(t.text)),e.appendChild(n)}),n&&n(e)})}return C(e,t),e}(s),n=function(t){function e(t,n){t&&t.api&&e.__super__.constructor.call(this,"a",function(e){e.className="count",t.href&&(e.href=t.href),new s("b",function(t){e.appendChild(t)}),new s("i",function(t){e.appendChild(t)}),new s("span",function(r){var a;e.appendChild(r),a=function(){var e,n;return n=t.api.split("#")[0],e=g.parse(n.split("?").slice(1).join("?")),e.callback="callback",n.split("?")[0]+"?"+g.stringify(e)}(),new s("script",function(i){var s;i.async=!0,i.src=""+o.api+a,_.callback=function(a){var o;_.callback=null,200===a.meta.status&&(o=c.flatten(a.data)[t.api.split("#").slice(1).join("#")],"[object Number]"===Object.prototype.toString.call(o)&&(o=(""+o).replace(/\B(?=(\d{3})+(?!\d))/g,",")),r.appendChild(b.createTextNode(" "+o+" ")),t.aria.label&&e.setAttribute("aria-label",t.aria.label.replace("#",o)),n&&n(e))},_.callback.script=i,this.on("error",function(){_.callback=null}),i.readyState&&this.on("readystatechange",function(){"loaded"===i.readyState&&i.children&&"loading"===i.readyState&&(_.callback=null)}),s=b.getElementsByTagName("head")[0],s.insertBefore(i,s.firstChild)})})})}return C(e,t),e}(s),t}(),h=function(){function t(){}return t.low_rate_limit=!1,_.callback=function(e){t.rate_limit=e.data,t.low_rate_limit=t.rate_limit.resources.core.remaining<16},t.update=function(){_.callback.script||new s("script",function(t){var e;t.async=!0,t.src="https://api.github.com/rate_limit?callback=callback",_.callback.script=t,this.on("readystatechange","load","error",function(){(!t.readyState||/loaded|complete/.test(t.readyState))&&(t.parentNode.removeChild(t),_.callback.script=null)}),e=b.getElementsByTagName("head")[0],e.insertBefore(t,e.firstChild)})},t.update(),t}(),l=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return C(e,t),e.prototype.on=function(){var t,n,r,a,o,i,c,l;if(r=2<=arguments.length?k.call(arguments,0,o=arguments.length-1):(o=0,[]),a=arguments[o++],r.indexOf("change")>=0)for(t=function(t){return function(e){return a.call(t,e||_.event)}}(this),l=this.get().elements,i=0,c=l.length;c>i;i++)n=l[i],new s(n).on("change","input",t);return e.__super__.on.apply(this,arguments)},e.prototype.serialize=function(){var t,e,n,r,a;for(t={},a=this.get().elements,e=0,n=a.length;n>e;e++)if(r=a[e],r.name)switch(r.type){case"radio":case"checkbox":r.checked&&(t[r.name]=r.value);break;default:t[r.name]=r.value}return t},e}(s),i=function(t){function e(){e.__super__.constructor.apply(this,arguments),this.on("load",function(){var t,e,n,r;for(r=this.get().contentWindow.document.getElementsByTagName("a"),e=0,n=r.length;n>e;e++)t=r[e],new s(t).on("click",function(t){return t.preventDefault(),!1});new s(this.get().contentWindow.document.body).on("click",function(t){return function(){t.get().parentNode.click()}}(this))})}return C(e,t),e}(s),f=function(t){function e(t,n){var r,a,i,s;i=t.href,s=t.text,a=t.data,r=t.aria,e.__super__.constructor.call(this,"a",function(t){var e,c;t.className=o.anchorClass,t.href=i,t.appendChild(b.createTextNode(""+s));for(e in a)c=a[e],t.setAttribute("data-"+e,c);for(e in r)c=r[e],t.setAttribute("aria-"+e,c);n&&n(t)})}return C(e,t),e}(s),p=function(t){function e(t){this.$=t,this.on("load",function(){var t,e;(t=this.get().contentWindow.callback)?(e=t.script,e.readyState?new s(e).on("readystatechange",function(){/loaded|complete/.test(e.readyState)&&this.resize()}):new s(e).on("load","error",function(){this.resize()})):this.resize()})}return C(e,t),e.prototype.load=function(t){this.get().parentNode.style.height=("mega"===t.data.style?28:20)+2+"px",this.get().style.width="1px",this.get().style.height="0",this.get().src="buttons.html"+d.encode(t),this.get().contentWindow.document.location.reload()},e}(u),a=function(t){function e(){e.__super__.constructor.apply(this,arguments),this.on("focus",function(){this.get().select()}),this.on("click",function(){this.get().select()}),this.on("mouseup",function(t){return t.preventDefault(),!1})}return C(e,t),e}(s),e=function(e){function n(e,n){var r,a,o,i,s,c,l,u,p;this.$=e,i=n.content,c=n.preview,r=c.button,s=c.frame,o=c.code,p=c.warning,l=n.snippet,u=n.user_repo,l.get().value='<!-- Place this tag right after the last button or just before your close body tag. -->\n<script async defer id="github-bjs" src="https://buttons.github.io/buttons.js"></script>',a=function(e){return function(n){var a,c,l,g,b,m,y,w,v,_;if(c=n.force,w=e.serialize(),w.type){for(i.removeClass("hidden"),v=["repo","standard-icon"],l=0,b=v.length;b>l;l++)y=v[l],e.get().elements[y].disabled="follow"===w.type;for(_=["show-count"],g=0,m=_.length;m>g;g++)y=_[g],e.get().elements[y].disabled="download"===w.type;w.user&&!/^[a-z0-9][a-z0-9-]*$/i.test(w.user)||"follow"!==w.type&&w.repo&&(!/^[\w.-]+$/.test(w.repo)||/^\.\.?$/.test(w.repo))?u.addClass("has-error"):(u.removeClass("has-error"),""===w.user||"follow"!==w.type&&""===w.repo?u.addClass("has-warning"):u.removeClass("has-warning")),(u.hasClass("has-error")||u.hasClass("has-warning"))&&(w.user="ntkme",w.repo="github-buttons"),(e.cache!==(a=d.encode(w))||c)&&(e.cache=a,new f(e.parse(w),function(n){var a;o.get().value="<!-- Place this tag where you want the button to render. -->\n"+n.outerHTML,r.addClass("hidden"),null!=w["show-count"]&&"download"!==w.type&&(h.update(),h.low_rate_limit&&(r.removeClass("hidden"),a=new Date(1e3*h.rate_limit.resources.core.reset),(!e.reset||a>e.reset)&&(e.reset=a,p.removeClass("hidden")),c?p.addClass("hidden"):n.removeAttribute("data-count-api"))),s.load(t.parse(n)),n=null}))}}}(this),r.on("click",function(t){return t.preventDefault(),a({force:!0}),!1}),this.on("change",a)}return C(n,e),n.prototype.parse=function(t){var e,n,r,a;if(null==t&&(t=this.serialize()),r=t.type,a=t.user,n=t.repo,e={className:"github-button",href:function(){switch(r){case"follow":return"https://github.com/"+a;case"watch":case"star":return"https://github.com/"+a+"/"+n;case"fork":return"https://github.com/"+a+"/"+n+"/fork";case"issue":return"https://github.com/"+a+"/"+n+"/issues";case"download":return"https://github.com/"+a+"/"+n+"/archive/master.zip";default:return"https://github.com/"}}(),text:function(){switch(r){case"follow":return"Follow @"+a;default:return r.charAt(0).toUpperCase()+r.slice(1).toLowerCase()}}(),data:{icon:function(){switch(r){case"watch":return"octicon-eye";case"star":return"octicon-star";case"fork":return"octicon-git-branch";case"issue":return"octicon-issue-opened";case"download":return"octicon-cloud-download";default:return"octicon-mark-github"}}()},aria:{label:function(){switch(r){case"follow":return"Follow @"+a+" on GitHub";case"watch":case"star":case"fork":case"issue":case"download":return r.charAt(0).toUpperCase()+r.slice(1).toLowerCase()+" "+a+"/"+n+" on GitHub";default:return"GitHub"}}()}},null!=t["large-button"]&&(e.data.style="mega"),null!=t["show-count"])switch(r){case"follow":e.data["count-href"]="/"+a+"/followers",e.data["count-api"]="/users/"+a+"#followers",e.data["count-aria-label"]="# followers on GitHub";break;case"watch":e.data["count-href"]="/"+a+"/"+n+"/watchers",e.data["count-api"]="/repos/"+a+"/"+n+"#subscribers_count",e.data["count-aria-label"]="# watchers on GitHub";break;case"star":e.data["count-href"]="/"+a+"/"+n+"/stargazers",e.data["count-api"]="/repos/"+a+"/"+n+"#stargazers_count",e.data["count-aria-label"]="# stargazers on GitHub";break;case"fork":e.data["count-href"]="/"+a+"/"+n+"/network",e.data["count-api"]="/repos/"+a+"/"+n+"#forks_count",e.data["count-aria-label"]="# forks on GitHub";break;case"issue":e.data["count-api"]="/repos/"+a+"/"+n+"#open_issues_count",e.data["count-aria-label"]="# issues on GitHub"}return(null!=t["standard-icon"]||"octicon-mark-github"===e.data.icon)&&delete e.data.icon,e},n}(l),v=b.getElementsByTagName("iframe"),y=0,w=v.length;w>y;y++)m=v[y],"preview"!==m.parentNode.id&&new i(m);new e(b.getElementById("button-config"),{content:new s(b.getElementById("content")),user_repo:new s(b.getElementById("user-repo")),preview:{button:new s(b.getElementById("preview-button")),frame:new p(b.getElementById("preview").getElementsByTagName("iframe")[0]),code:new a(b.getElementById("code")),warning:new s(b.getElementById("preview-warning"))},snippet:new a(b.getElementById("snippet"))}),this.onbeforeunload=function(){}}).call(this);
//# sourceMappingURL=main.js.map