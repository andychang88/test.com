(function(e){var s="c"+(new Date).getTime()+Math.floor(65536*Math.random()),t=0,d,h,j,k,n,p,q=document.getElementsByTagName("script"),r=[650,600],u=function(a){var b={};a||(a=e.event);b.target=a.target||a.srcElement;3===b.target.nodeType&&(b.target=b.target.parentNode);b.preventDefault=a.preventDefault?function(){this.originalEvent.preventDefault()}:function(){this.originalEvent.returnValue=!1};b.originalEvent=a;return b},l=function(a,b){return function(c){return b.call(a,u(c))}},g={"goto":function(a){e.location=a},popup:function(a,b,c){return e.open(a,b,c)},createElement:function(a){return document.createElement(a)},getElementsByTagName:function(a){return document.getElementsByTagName(a)},registerEvent:e.addEventListener?function(a,b,c,f){a.addEventListener(b,l(a,c),!!f)}:e.attachEvent?function(a,b,c){a.attachEvent("on"+b,l(a,c))}:function(a,b,c){var f=a["on"+b];f&&(c=function(){l(a,c).call(this);f.call(this)});a["on"+b]=c}},m=function(a){var b=g.createElement("script");b.async="true";b.src=a;this.el=b;this.attach();};e.__PP=e.__PP||{};m.prototype={constructor:m,attach:function(){var a=g.getElementsByTagName("script")[0];a.parentNode.insertBefore(this.el,a);this.attach=function(){}},destroy:function(){this.el.parentNode.removeChild(this.el);delete this.el}};d=function(a){this.el=a};d.prototype={constructor:d,getKVs:function(){for(var a=this.el.attributes,b=a.length,c={},f,d;b--;)f=a[b],d=f.name.indexOf("data-pp-"),0===d&&(c[f.name]=f.value);return c},injectAd:function(){this.el.parentNode.insertBefore(this.ad.container,this.el)},registerListeners:function(){var a=this;g.registerEvent(this.ad.container,"click",function(){a.ad.clickHandler.apply(a.ad,arguments)})},destroyDom:function(){this.el.parentNode.removeChild(this.el);delete this.el}};h=function(a){this.idx=t++;this.namespace=s+this.idx;this.kvs=a;this.initContainer();this.initCallback();this.initQueryString()};h.prototype={constructor:h,initContainer:function(){this.container=g.createElement("span")},injectScripts:function(s){var div=document.createElement('div');div.innerHTML=s;var scripts=div.getElementsByTagName('script');var i=scripts.length;while(i--){var scr=document.createElement("script");scr.text=scripts[i].text;this.container.appendChild(scr);scripts[i].parentNode.removeChild(scripts[i]);}
return div.innerHTML;},setContent:function(a){this.container.innerHTML=a},callback:function(a){a=this.injectScripts(a);this.setContent(a);this.script.destroy();delete e.__PP[this.namespace];delete this.script},initCallback:function(){this.callbackName="__PP."+this.namespace;var a=this;e.__PP[this.namespace]=function(){a.callback.apply(a,arguments)}},clickHandler:function(a){var b=a.target,c=this.kvs["data-pp-popup"],d=["width="+r[0],"height="+r[1],"scrollbars=yes,resizable=no,location=no,toolbar=no,menubar=no,dependent=no,dialog=yes,minimizable=no"].join();if("img"===b.nodeName.toLowerCase()&&(b=b.parentNode,!c||"true"===c))g.popup(b.href,this.namespace,d),a.preventDefault()},request:function(){var a=this.kvs["data-pp-boost"];if(a==="true"){this.script=new m("//ad.paypal.com/jin/spotlight/ads"+this.queryString)}else{this.script=new m("//upstream.where.com/jin/spotlight/ads"+this.queryString)}},initQueryString:function(){var a="?",b=["callback="+this.callbackName,"format=js","v=2.4","vtag=3.1","rand="+(new Date).getTime()],c,d;for(c in this.kvs)Object.prototype.hasOwnProperty.call(this.kvs,c)&&(d=c.substr(8),b.push(d+"="+encodeURIComponent(this.kvs[c])));this.queryString=a+=b.join("&")}};for(j=0;j<q.length;j++)
if(k=q[j],n=k.getAttribute("data-pp-pubid"),p=k.getAttribute("data-pp-placementtype"),n&&p){d=new d(k);d.ad=new h(d.getKVs());d.injectAd();d.registerListeners();d.destroyDom();d.ad.request();break;}})(this);