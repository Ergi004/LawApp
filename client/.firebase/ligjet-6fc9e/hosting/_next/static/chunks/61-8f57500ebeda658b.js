"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{5218:function(e,t,r){r.r(t),r.d(t,{boxClasses:function(){return i.Z},default:function(){return n.Z}});var n=r(7999),i=r(7126)},4374:function(e,t){let r="function"==typeof Symbol&&Symbol.for;t.Z=r?Symbol.for("mui.nested"):"__THEME_NESTED__"},6950:function(e,t,r){let n=r(2265).createContext(null);t.Z=n},9397:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(2265),i=r(6950);function s(){return n.useContext(i.Z)}},6021:function(e,t,r){r.d(t,{Z:function(){return tP}});var n,i,s,o,a,u=r(3950),l=r(2988),c=r(2265),f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h=("undefined"==typeof window?"undefined":f(window))==="object"&&("undefined"==typeof document?"undefined":f(document))==="object"&&9===document.nodeType;function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,function(e){var t=function(e,t){if("object"!=d(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=d(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==d(t)?t:t+""}(n.key),n)}}function y(e,t,r){return t&&p(e.prototype,t),r&&p(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var v=r(7802),g=r(1088),m={}.constructor;function b(e,t,r){void 0===e&&(e="unnamed");var n=r.jss,i=function e(t){if(null==t||"object"!=typeof t)return t;if(Array.isArray(t))return t.map(e);if(t.constructor!==m)return t;var r={};for(var n in t)r[n]=e(t[n]);return r}(t);return n.plugins.onCreateRule(e,i,r)||(e[0],null)}var S=function(e,t){for(var r="",n=0;n<e.length&&"!important"!==e[n];n++)r&&(r+=t),r+=e[n];return r},x=function(e){if(!Array.isArray(e))return e;var t="";if(Array.isArray(e[0]))for(var r=0;r<e.length&&"!important"!==e[r];r++)t&&(t+=", "),t+=S(e[r]," ");else t=S(e,", ");return"!important"===e[e.length-1]&&(t+=" !important"),t};function k(e){return e&&!1===e.format?{linebreak:"",space:""}:{linebreak:"\n",space:" "}}function w(e,t){for(var r="",n=0;n<t;n++)r+="  ";return r+e}function R(e,t,r){void 0===r&&(r={});var n="";if(!t)return n;var i=r.indent,s=void 0===i?0:i,o=t.fallbacks;!1===r.format&&(s=-1/0);var a=k(r),u=a.linebreak,l=a.space;if(e&&s++,o){if(Array.isArray(o))for(var c=0;c<o.length;c++){var f=o[c];for(var h in f){var d=f[h];null!=d&&(n&&(n+=u),n+=w(h+":"+l+x(d)+";",s))}}else for(var p in o){var y=o[p];null!=y&&(n&&(n+=u),n+=w(p+":"+l+x(y)+";",s))}}for(var v in t){var g=t[v];null!=g&&"fallbacks"!==v&&(n&&(n+=u),n+=w(v+":"+l+x(g)+";",s))}return(n||r.allowEmpty)&&e?(s--,n&&(n=""+u+n+u),w(""+e+l+"{"+n,s)+w("}",s)):n}var P=/([[\].#*$><+~=|^:(),"'`\s])/g,C="undefined"!=typeof CSS&&CSS.escape,j=function(e){return C?C(e):e.replace(P,"\\$1")},Z=function(){function e(e,t,r){this.type="style",this.isProcessed=!1;var n=r.sheet,i=r.Renderer;this.key=e,this.options=r,this.style=t,n?this.renderer=n.renderer:i&&(this.renderer=new i)}return e.prototype.prop=function(e,t,r){if(void 0===t)return this.style[e];var n=!!r&&r.force;if(!n&&this.style[e]===t)return this;var i=t;r&&!1===r.process||(i=this.options.jss.plugins.onChangeValue(t,e,this));var s=null==i||!1===i,o=e in this.style;if(s&&!o&&!n)return this;var a=s&&o;if(a?delete this.style[e]:this.style[e]=i,this.renderable&&this.renderer)return a?this.renderer.removeProperty(this.renderable,e):this.renderer.setProperty(this.renderable,e,i),this;var u=this.options.sheet;return u&&u.attached,this},e}(),O=function(e){function t(t,r,n){i=e.call(this,t,r,n)||this;var i,s=n.selector,o=n.scoped,a=n.sheet,u=n.generateId;return s?i.selectorText=s:!1!==o&&(i.id=u((0,g.Z)((0,g.Z)(i)),a),i.selectorText="."+j(i.id)),i}(0,v.Z)(t,e);var r=t.prototype;return r.applyTo=function(e){var t=this.renderer;if(t){var r=this.toJSON();for(var n in r)t.setProperty(e,n,r[n])}return this},r.toJSON=function(){var e={};for(var t in this.style){var r=this.style[t];"object"!=typeof r?e[t]=r:Array.isArray(r)&&(e[t]=x(r))}return e},r.toString=function(e){var t=this.options.sheet,r=t&&t.options.link?(0,l.Z)({},e,{allowEmpty:!0}):e;return R(this.selectorText,this.style,r)},y(t,[{key:"selector",set:function(e){if(e!==this.selectorText){this.selectorText=e;var t=this.renderer,r=this.renderable;r&&t&&!t.setSelector(r,e)&&t.replaceRule(r,this)}},get:function(){return this.selectorText}}]),t}(Z),A={indent:1,children:!0},E=/@([\w-]+)/,I=function(){function e(e,t,r){this.type="conditional",this.isProcessed=!1,this.key=e;var n=e.match(E);for(var i in this.at=n?n[1]:"unknown",this.query=r.name||"@"+this.at,this.options=r,this.rules=new K((0,l.Z)({},r,{parent:this})),t)this.rules.add(i,t[i]);this.rules.process()}var t=e.prototype;return t.getRule=function(e){return this.rules.get(e)},t.indexOf=function(e){return this.rules.indexOf(e)},t.addRule=function(e,t,r){var n=this.rules.add(e,t,r);return n?(this.options.jss.plugins.onProcessRule(n),n):null},t.replaceRule=function(e,t,r){var n=this.rules.replace(e,t,r);return n&&this.options.jss.plugins.onProcessRule(n),n},t.toString=function(e){void 0===e&&(e=A);var t=k(e).linebreak;if(null==e.indent&&(e.indent=A.indent),null==e.children&&(e.children=A.children),!1===e.children)return this.query+" {}";var r=this.rules.toString(e);return r?this.query+" {"+t+r+t+"}":""},e}(),N=/@container|@media|@supports\s+/,M={indent:1,children:!0},T=/@keyframes\s+([\w-]+)/,$=function(){function e(e,t,r){this.type="keyframes",this.at="@keyframes",this.isProcessed=!1;var n=e.match(T);n&&n[1]?this.name=n[1]:this.name="noname",this.key=this.type+"-"+this.name,this.options=r;var i=r.scoped,s=r.sheet,o=r.generateId;for(var a in this.id=!1===i?this.name:j(o(this,s)),this.rules=new K((0,l.Z)({},r,{parent:this})),t)this.rules.add(a,t[a],(0,l.Z)({},r,{parent:this}));this.rules.process()}return e.prototype.toString=function(e){void 0===e&&(e=M);var t=k(e).linebreak;if(null==e.indent&&(e.indent=M.indent),null==e.children&&(e.children=M.children),!1===e.children)return this.at+" "+this.id+" {}";var r=this.rules.toString(e);return r&&(r=""+t+r+t),this.at+" "+this.id+" {"+r+"}"},e}(),q=/@keyframes\s+/,V=/\$([\w-]+)/g,z=function(e,t){return"string"==typeof e?e.replace(V,function(e,r){return r in t?t[r]:e}):e},G=function(e,t,r){var n=e[t],i=z(n,r);i!==n&&(e[t]=i)},W=function(e){function t(){return e.apply(this,arguments)||this}return(0,v.Z)(t,e),t.prototype.toString=function(e){var t=this.options.sheet,r=t&&t.options.link?(0,l.Z)({},e,{allowEmpty:!0}):e;return R(this.key,this.style,r)},t}(Z),U=function(){function e(e,t,r){this.type="font-face",this.at="@font-face",this.isProcessed=!1,this.key=e,this.style=t,this.options=r}return e.prototype.toString=function(e){var t=k(e).linebreak;if(Array.isArray(this.style)){for(var r="",n=0;n<this.style.length;n++)r+=R(this.at,this.style[n]),this.style[n+1]&&(r+=t);return r}return R(this.at,this.style,e)},e}(),_=/@font-face/,J=function(){function e(e,t,r){this.type="viewport",this.at="@viewport",this.isProcessed=!1,this.key=e,this.style=t,this.options=r}return e.prototype.toString=function(e){return R(this.key,this.style,e)},e}(),L=function(){function e(e,t,r){this.type="simple",this.isProcessed=!1,this.key=e,this.value=t,this.options=r}return e.prototype.toString=function(e){if(Array.isArray(this.value)){for(var t="",r=0;r<this.value.length;r++)t+=this.key+" "+this.value[r]+";",this.value[r+1]&&(t+="\n");return t}return this.key+" "+this.value+";"},e}(),B={"@charset":!0,"@import":!0,"@namespace":!0},D=[{onCreateRule:function(e,t,r){return"@"===e[0]||r.parent&&"keyframes"===r.parent.type?null:new O(e,t,r)}},{onCreateRule:function(e,t,r){return N.test(e)?new I(e,t,r):null}},{onCreateRule:function(e,t,r){return"string"==typeof e&&q.test(e)?new $(e,t,r):null},onProcessStyle:function(e,t,r){return"style"===t.type&&r&&("animation-name"in e&&G(e,"animation-name",r.keyframes),"animation"in e&&G(e,"animation",r.keyframes)),e},onChangeValue:function(e,t,r){var n=r.options.sheet;if(!n)return e;switch(t){case"animation":case"animation-name":return z(e,n.keyframes);default:return e}}},{onCreateRule:function(e,t,r){return r.parent&&"keyframes"===r.parent.type?new W(e,t,r):null}},{onCreateRule:function(e,t,r){return _.test(e)?new U(e,t,r):null}},{onCreateRule:function(e,t,r){return"@viewport"===e||"@-ms-viewport"===e?new J(e,t,r):null}},{onCreateRule:function(e,t,r){return e in B?new L(e,t,r):null}}],H={process:!0},F={force:!0,process:!0},K=function(){function e(e){this.map={},this.raw={},this.index=[],this.counter=0,this.options=e,this.classes=e.classes,this.keyframes=e.keyframes}var t=e.prototype;return t.add=function(e,t,r){var n=this.options,i=n.parent,s=n.sheet,o=n.jss,a=n.Renderer,u=n.generateId,c=n.scoped,f=(0,l.Z)({classes:this.classes,parent:i,sheet:s,jss:o,Renderer:a,generateId:u,scoped:c,name:e,keyframes:this.keyframes,selector:void 0},r),h=e;e in this.raw&&(h=e+"-d"+this.counter++),this.raw[h]=t,h in this.classes&&(f.selector="."+j(this.classes[h]));var d=b(h,t,f);if(!d)return null;this.register(d);var p=void 0===f.index?this.index.length:f.index;return this.index.splice(p,0,d),d},t.replace=function(e,t,r){var n=this.get(e),i=this.index.indexOf(n);n&&this.remove(n);var s=r;return -1!==i&&(s=(0,l.Z)({},r,{index:i})),this.add(e,t,s)},t.get=function(e){return this.map[e]},t.remove=function(e){this.unregister(e),delete this.raw[e.key],this.index.splice(this.index.indexOf(e),1)},t.indexOf=function(e){return this.index.indexOf(e)},t.process=function(){var e=this.options.jss.plugins;this.index.slice(0).forEach(e.onProcessRule,e)},t.register=function(e){this.map[e.key]=e,e instanceof O?(this.map[e.selector]=e,e.id&&(this.classes[e.key]=e.id)):e instanceof $&&this.keyframes&&(this.keyframes[e.name]=e.id)},t.unregister=function(e){delete this.map[e.key],e instanceof O?(delete this.map[e.selector],delete this.classes[e.key]):e instanceof $&&delete this.keyframes[e.name]},t.update=function(){if("string"==typeof(arguments.length<=0?void 0:arguments[0])?(e=arguments.length<=0?void 0:arguments[0],t=arguments.length<=1?void 0:arguments[1],r=arguments.length<=2?void 0:arguments[2]):(t=arguments.length<=0?void 0:arguments[0],r=arguments.length<=1?void 0:arguments[1],e=null),e)this.updateOne(this.get(e),t,r);else for(var e,t,r,n=0;n<this.index.length;n++)this.updateOne(this.index[n],t,r)},t.updateOne=function(t,r,n){void 0===n&&(n=H);var i=this.options,s=i.jss.plugins,o=i.sheet;if(t.rules instanceof e){t.rules.update(r,n);return}var a=t.style;if(s.onUpdate(r,t,o,n),n.process&&a&&a!==t.style){for(var u in s.onProcessStyle(t.style,t,o),t.style){var l=t.style[u];l!==a[u]&&t.prop(u,l,F)}for(var c in a){var f=t.style[c],h=a[c];null==f&&f!==h&&t.prop(c,null,F)}}},t.toString=function(e){for(var t="",r=this.options.sheet,n=!!r&&r.options.link,i=k(e).linebreak,s=0;s<this.index.length;s++){var o=this.index[s].toString(e);(o||n)&&(t&&(t+=i),t+=o)}return t},e}(),Q=function(){function e(e,t){for(var r in this.attached=!1,this.deployed=!1,this.classes={},this.keyframes={},this.options=(0,l.Z)({},t,{sheet:this,parent:this,classes:this.classes,keyframes:this.keyframes}),t.Renderer&&(this.renderer=new t.Renderer(this)),this.rules=new K(this.options),e)this.rules.add(r,e[r]);this.rules.process()}var t=e.prototype;return t.attach=function(){return this.attached||(this.renderer&&this.renderer.attach(),this.attached=!0,this.deployed||this.deploy()),this},t.detach=function(){return this.attached&&(this.renderer&&this.renderer.detach(),this.attached=!1),this},t.addRule=function(e,t,r){var n=this.queue;this.attached&&!n&&(this.queue=[]);var i=this.rules.add(e,t,r);return i?((this.options.jss.plugins.onProcessRule(i),this.attached)?this.deployed&&(n?n.push(i):(this.insertRule(i),this.queue&&(this.queue.forEach(this.insertRule,this),this.queue=void 0))):this.deployed=!1,i):null},t.replaceRule=function(e,t,r){var n=this.rules.get(e);if(!n)return this.addRule(e,t,r);var i=this.rules.replace(e,t,r);return(i&&this.options.jss.plugins.onProcessRule(i),this.attached)?this.deployed&&this.renderer&&(i?n.renderable&&this.renderer.replaceRule(n.renderable,i):this.renderer.deleteRule(n)):this.deployed=!1,i},t.insertRule=function(e){this.renderer&&this.renderer.insertRule(e)},t.addRules=function(e,t){var r=[];for(var n in e){var i=this.addRule(n,e[n],t);i&&r.push(i)}return r},t.getRule=function(e){return this.rules.get(e)},t.deleteRule=function(e){var t="object"==typeof e?e:this.rules.get(e);return!!t&&(!this.attached||!!t.renderable)&&(this.rules.remove(t),!this.attached||!t.renderable||!this.renderer||this.renderer.deleteRule(t.renderable))},t.indexOf=function(e){return this.rules.indexOf(e)},t.deploy=function(){return this.renderer&&this.renderer.deploy(),this.deployed=!0,this},t.update=function(){var e;return(e=this.rules).update.apply(e,arguments),this},t.updateOne=function(e,t,r){return this.rules.updateOne(e,t,r),this},t.toString=function(e){return this.rules.toString(e)},e}(),X=function(){function e(){this.plugins={internal:[],external:[]},this.registry={}}var t=e.prototype;return t.onCreateRule=function(e,t,r){for(var n=0;n<this.registry.onCreateRule.length;n++){var i=this.registry.onCreateRule[n](e,t,r);if(i)return i}return null},t.onProcessRule=function(e){if(!e.isProcessed){for(var t=e.options.sheet,r=0;r<this.registry.onProcessRule.length;r++)this.registry.onProcessRule[r](e,t);e.style&&this.onProcessStyle(e.style,e,t),e.isProcessed=!0}},t.onProcessStyle=function(e,t,r){for(var n=0;n<this.registry.onProcessStyle.length;n++)t.style=this.registry.onProcessStyle[n](t.style,t,r)},t.onProcessSheet=function(e){for(var t=0;t<this.registry.onProcessSheet.length;t++)this.registry.onProcessSheet[t](e)},t.onUpdate=function(e,t,r,n){for(var i=0;i<this.registry.onUpdate.length;i++)this.registry.onUpdate[i](e,t,r,n)},t.onChangeValue=function(e,t,r){for(var n=e,i=0;i<this.registry.onChangeValue.length;i++)n=this.registry.onChangeValue[i](n,t,r);return n},t.use=function(e,t){void 0===t&&(t={queue:"external"});var r=this.plugins[t.queue];-1===r.indexOf(e)&&(r.push(e),this.registry=[].concat(this.plugins.external,this.plugins.internal).reduce(function(e,t){for(var r in t)r in e&&e[r].push(t[r]);return e},{onCreateRule:[],onProcessRule:[],onProcessStyle:[],onProcessSheet:[],onChangeValue:[],onUpdate:[]}))},e}(),Y=new(function(){function e(){this.registry=[]}var t=e.prototype;return t.add=function(e){var t=this.registry,r=e.options.index;if(-1===t.indexOf(e)){if(0===t.length||r>=this.index){t.push(e);return}for(var n=0;n<t.length;n++)if(t[n].options.index>r){t.splice(n,0,e);return}}},t.reset=function(){this.registry=[]},t.remove=function(e){var t=this.registry.indexOf(e);this.registry.splice(t,1)},t.toString=function(e){for(var t=void 0===e?{}:e,r=t.attached,n=(0,u.Z)(t,["attached"]),i=k(n).linebreak,s="",o=0;o<this.registry.length;o++){var a=this.registry[o];(null==r||a.attached===r)&&(s&&(s+=i),s+=a.toString(n))}return s},y(e,[{key:"index",get:function(){return 0===this.registry.length?0:this.registry[this.registry.length-1].options.index}}]),e}()),ee="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window&&window.Math===Math?window:"undefined"!=typeof self&&self.Math===Math?self:Function("return this")(),et="2f1acc6c3a606b082e5eef5e54414ffb";null==ee[et]&&(ee[et]=0);var er=ee[et]++,en=function(e){void 0===e&&(e={});var t=0;return function(r,n){t+=1;var i="",s="";return(n&&(n.options.classNamePrefix&&(s=n.options.classNamePrefix),null!=n.options.jss.id&&(i=String(n.options.jss.id))),e.minify)?""+(s||"c")+er+i+t:s+r.key+"-"+er+(i?"-"+i:"")+"-"+t}},ei=function(e){var t;return function(){return t||(t=e()),t}},es=function(e,t){try{if(e.attributeStyleMap)return e.attributeStyleMap.get(t);return e.style.getPropertyValue(t)}catch(e){return""}},eo=function(e,t,r){try{var n=r;if(Array.isArray(r)&&(n=x(r)),e.attributeStyleMap)e.attributeStyleMap.set(t,n);else{var i=n?n.indexOf("!important"):-1,s=i>-1?n.substr(0,i-1):n;e.style.setProperty(t,s,i>-1?"important":"")}}catch(e){return!1}return!0},ea=function(e,t){try{e.attributeStyleMap?e.attributeStyleMap.delete(t):e.style.removeProperty(t)}catch(e){}},eu=function(e,t){return e.selectorText=t,e.selectorText===t},el=ei(function(){return document.querySelector("head")}),ec=ei(function(){var e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}),ef=function(e,t,r){try{"insertRule"in e?e.insertRule(t,r):"appendRule"in e&&e.appendRule(t)}catch(e){return!1}return e.cssRules[r]},eh=function(e,t){var r=e.cssRules.length;return void 0===t||t>r?r:t},ed=function(){var e=document.createElement("style");return e.textContent="\n",e},ep=function(){function e(e){this.getPropertyValue=es,this.setProperty=eo,this.removeProperty=ea,this.setSelector=eu,this.hasInsertedRules=!1,this.cssRules=[],e&&Y.add(e),this.sheet=e;var t=this.sheet?this.sheet.options:{},r=t.media,n=t.meta,i=t.element;this.element=i||ed(),this.element.setAttribute("data-jss",""),r&&this.element.setAttribute("media",r),n&&this.element.setAttribute("data-meta",n);var s=ec();s&&this.element.setAttribute("nonce",s)}var t=e.prototype;return t.attach=function(){if(!this.element.parentNode&&this.sheet){!function(e,t){var r=t.insertionPoint,n=function(e){var t=Y.registry;if(t.length>0){var r=function(e,t){for(var r=0;r<e.length;r++){var n=e[r];if(n.attached&&n.options.index>t.index&&n.options.insertionPoint===t.insertionPoint)return n}return null}(t,e);if(r&&r.renderer)return{parent:r.renderer.element.parentNode,node:r.renderer.element};if((r=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.attached&&n.options.insertionPoint===t.insertionPoint)return n}return null}(t,e))&&r.renderer)return{parent:r.renderer.element.parentNode,node:r.renderer.element.nextSibling}}var n=e.insertionPoint;if(n&&"string"==typeof n){var i=function(e){for(var t=el(),r=0;r<t.childNodes.length;r++){var n=t.childNodes[r];if(8===n.nodeType&&n.nodeValue.trim()===e)return n}return null}(n);if(i)return{parent:i.parentNode,node:i.nextSibling}}return!1}(t);if(!1!==n&&n.parent){n.parent.insertBefore(e,n.node);return}if(r&&"number"==typeof r.nodeType){var i=r.parentNode;i&&i.insertBefore(e,r.nextSibling);return}el().appendChild(e)}(this.element,this.sheet.options);var e=!!(this.sheet&&this.sheet.deployed);this.hasInsertedRules&&e&&(this.hasInsertedRules=!1,this.deploy())}},t.detach=function(){if(this.sheet){var e=this.element.parentNode;e&&e.removeChild(this.element),this.sheet.options.link&&(this.cssRules=[],this.element.textContent="\n")}},t.deploy=function(){var e=this.sheet;if(e){if(e.options.link){this.insertRules(e.rules);return}this.element.textContent="\n"+e.toString()+"\n"}},t.insertRules=function(e,t){for(var r=0;r<e.index.length;r++)this.insertRule(e.index[r],r,t)},t.insertRule=function(e,t,r){if(void 0===r&&(r=this.element.sheet),e.rules){var n=r;if("conditional"===e.type||"keyframes"===e.type){var i=eh(r,t);if(!1===(n=ef(r,e.toString({children:!1}),i)))return!1;this.refCssRule(e,i,n)}return this.insertRules(e.rules,n),n}var s=e.toString();if(!s)return!1;var o=eh(r,t),a=ef(r,s,o);return!1!==a&&(this.hasInsertedRules=!0,this.refCssRule(e,o,a),a)},t.refCssRule=function(e,t,r){e.renderable=r,e.options.parent instanceof Q&&this.cssRules.splice(t,0,r)},t.deleteRule=function(e){var t=this.element.sheet,r=this.indexOf(e);return -1!==r&&(t.deleteRule(r),this.cssRules.splice(r,1),!0)},t.indexOf=function(e){return this.cssRules.indexOf(e)},t.replaceRule=function(e,t){var r=this.indexOf(e);return -1!==r&&(this.element.sheet.deleteRule(r),this.cssRules.splice(r,1),this.insertRule(t,r))},t.getRules=function(){return this.element.sheet.cssRules},e}(),ey=0,ev=function(){function e(e){this.id=ey++,this.version="10.10.0",this.plugins=new X,this.options={id:{minify:!1},createGenerateId:en,Renderer:h?ep:null,plugins:[]},this.generateId=en({minify:!1});for(var t=0;t<D.length;t++)this.plugins.use(D[t],{queue:"internal"});this.setup(e)}var t=e.prototype;return t.setup=function(e){return void 0===e&&(e={}),e.createGenerateId&&(this.options.createGenerateId=e.createGenerateId),e.id&&(this.options.id=(0,l.Z)({},this.options.id,e.id)),(e.createGenerateId||e.id)&&(this.generateId=this.options.createGenerateId(this.options.id)),null!=e.insertionPoint&&(this.options.insertionPoint=e.insertionPoint),"Renderer"in e&&(this.options.Renderer=e.Renderer),e.plugins&&this.use.apply(this,e.plugins),this},t.createStyleSheet=function(e,t){void 0===t&&(t={});var r=t.index;"number"!=typeof r&&(r=0===Y.index?0:Y.index+1);var n=new Q(e,(0,l.Z)({},t,{jss:this,generateId:t.generateId||this.generateId,insertionPoint:this.options.insertionPoint,Renderer:this.options.Renderer,index:r}));return this.plugins.onProcessSheet(n),n},t.removeStyleSheet=function(e){return e.detach(),Y.remove(e),this},t.createRule=function(e,t,r){if(void 0===t&&(t={}),void 0===r&&(r={}),"object"==typeof e)return this.createRule(void 0,e,t);var n=(0,l.Z)({},r,{name:e,jss:this,Renderer:this.options.Renderer});n.generateId||(n.generateId=this.generateId),n.classes||(n.classes={}),n.keyframes||(n.keyframes={});var i=b(e,t,n);return i&&this.plugins.onProcessRule(i),i},t.use=function(){for(var e=this,t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return r.forEach(function(t){e.plugins.use(t)}),this},e}(),eg=function(e){return new ev(e)},em="object"==typeof CSS&&null!=CSS&&"number"in CSS;function eb(e={}){let{baseClasses:t,newClasses:r,Component:n}=e;if(!r)return t;let i=(0,l.Z)({},t);return Object.keys(r).forEach(e=>{r[e]&&(i[e]=`${t[e]} ${r[e]}`)}),i}eg();var eS={set:(e,t,r,n)=>{let i=e.get(t);i||(i=new Map,e.set(t,i)),i.set(r,n)},get:(e,t,r)=>{let n=e.get(t);return n?n.get(r):void 0},delete:(e,t,r)=>{e.get(t).delete(r)}},ex=r(9397),ek=r(4374);let ew=["checked","disabled","error","focused","focusVisible","required","expanded","selected"];var eR=Date.now(),eP="fnValues"+eR,eC="fnStyle"+ ++eR,ej="@global",eZ="@global ",eO=function(){function e(e,t,r){for(var n in this.type="global",this.at=ej,this.isProcessed=!1,this.key=e,this.options=r,this.rules=new K((0,l.Z)({},r,{parent:this})),t)this.rules.add(n,t[n]);this.rules.process()}var t=e.prototype;return t.getRule=function(e){return this.rules.get(e)},t.addRule=function(e,t,r){var n=this.rules.add(e,t,r);return n&&this.options.jss.plugins.onProcessRule(n),n},t.replaceRule=function(e,t,r){var n=this.rules.replace(e,t,r);return n&&this.options.jss.plugins.onProcessRule(n),n},t.indexOf=function(e){return this.rules.indexOf(e)},t.toString=function(e){return this.rules.toString(e)},e}(),eA=function(){function e(e,t,r){this.type="global",this.at=ej,this.isProcessed=!1,this.key=e,this.options=r;var n=e.substr(eZ.length);this.rule=r.jss.createRule(n,t,(0,l.Z)({},r,{parent:this}))}return e.prototype.toString=function(e){return this.rule?this.rule.toString(e):""},e}(),eE=/\s*,\s*/g;function eI(e,t){for(var r=e.split(eE),n="",i=0;i<r.length;i++)n+=t+" "+r[i].trim(),r[i+1]&&(n+=", ");return n}var eN=/\s*,\s*/g,eM=/&/g,eT=/\$([\w-]+)/g,e$=/[A-Z]/g,eq=/^ms-/,eV={};function ez(e){return"-"+e.toLowerCase()}var eG=function(e){if(eV.hasOwnProperty(e))return eV[e];var t=e.replace(e$,ez);return eV[e]=eq.test(t)?"-"+t:t};function eW(e){var t={};for(var r in e)t[0===r.indexOf("--")?r:eG(r)]=e[r];return e.fallbacks&&(Array.isArray(e.fallbacks)?t.fallbacks=e.fallbacks.map(eW):t.fallbacks=eW(e.fallbacks)),t}var eU=em&&CSS?CSS.px:"px",e_=em&&CSS?CSS.ms:"ms",eJ=em&&CSS?CSS.percent:"%";function eL(e){var t=/(-[a-z])/g,r=function(e){return e[1].toUpperCase()},n={};for(var i in e)n[i]=e[i],n[i.replace(t,r)]=e[i];return n}var eB=eL({"animation-delay":e_,"animation-duration":e_,"background-position":eU,"background-position-x":eU,"background-position-y":eU,"background-size":eU,border:eU,"border-bottom":eU,"border-bottom-left-radius":eU,"border-bottom-right-radius":eU,"border-bottom-width":eU,"border-left":eU,"border-left-width":eU,"border-radius":eU,"border-right":eU,"border-right-width":eU,"border-top":eU,"border-top-left-radius":eU,"border-top-right-radius":eU,"border-top-width":eU,"border-width":eU,"border-block":eU,"border-block-end":eU,"border-block-end-width":eU,"border-block-start":eU,"border-block-start-width":eU,"border-block-width":eU,"border-inline":eU,"border-inline-end":eU,"border-inline-end-width":eU,"border-inline-start":eU,"border-inline-start-width":eU,"border-inline-width":eU,"border-start-start-radius":eU,"border-start-end-radius":eU,"border-end-start-radius":eU,"border-end-end-radius":eU,margin:eU,"margin-bottom":eU,"margin-left":eU,"margin-right":eU,"margin-top":eU,"margin-block":eU,"margin-block-end":eU,"margin-block-start":eU,"margin-inline":eU,"margin-inline-end":eU,"margin-inline-start":eU,padding:eU,"padding-bottom":eU,"padding-left":eU,"padding-right":eU,"padding-top":eU,"padding-block":eU,"padding-block-end":eU,"padding-block-start":eU,"padding-inline":eU,"padding-inline-end":eU,"padding-inline-start":eU,"mask-position-x":eU,"mask-position-y":eU,"mask-size":eU,height:eU,width:eU,"min-height":eU,"max-height":eU,"min-width":eU,"max-width":eU,bottom:eU,left:eU,top:eU,right:eU,inset:eU,"inset-block":eU,"inset-block-end":eU,"inset-block-start":eU,"inset-inline":eU,"inset-inline-end":eU,"inset-inline-start":eU,"box-shadow":eU,"text-shadow":eU,"column-gap":eU,"column-rule":eU,"column-rule-width":eU,"column-width":eU,"font-size":eU,"font-size-delta":eU,"letter-spacing":eU,"text-decoration-thickness":eU,"text-indent":eU,"text-stroke":eU,"text-stroke-width":eU,"word-spacing":eU,motion:eU,"motion-offset":eU,outline:eU,"outline-offset":eU,"outline-width":eU,perspective:eU,"perspective-origin-x":eJ,"perspective-origin-y":eJ,"transform-origin":eJ,"transform-origin-x":eJ,"transform-origin-y":eJ,"transform-origin-z":eJ,"transition-delay":e_,"transition-duration":e_,"vertical-align":eU,"flex-basis":eU,"shape-margin":eU,size:eU,gap:eU,grid:eU,"grid-gap":eU,"row-gap":eU,"grid-row-gap":eU,"grid-column-gap":eU,"grid-template-rows":eU,"grid-template-columns":eU,"grid-auto-rows":eU,"grid-auto-columns":eU,"box-shadow-x":eU,"box-shadow-y":eU,"box-shadow-blur":eU,"box-shadow-spread":eU,"font-line-height":eU,"text-shadow-x":eU,"text-shadow-y":eU,"text-shadow-blur":eU});function eD(e,t,r){if(null==t)return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)t[n]=eD(e,t[n],r);else if("object"==typeof t){if("fallbacks"===e)for(var i in t)t[i]=eD(i,t[i],r);else for(var s in t)t[s]=eD(e+"-"+s,t[s],r)}else if("number"==typeof t&&!1===isNaN(t)){var o=r[e]||eB[e];return o&&!(0===t&&o===eU)?"function"==typeof o?o(t).toString():""+t+o:t.toString()}return t}function eH(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var eF="",eK="",eQ="",eX="",eY=h&&"ontouchstart"in document.documentElement;if(h){var e0={Moz:"-moz-",ms:"-ms-",O:"-o-",Webkit:"-webkit-"},e1=document.createElement("p").style;for(var e2 in e0)if(e2+"Transform" in e1){eF=e2,eK=e0[e2];break}"Webkit"===eF&&"msHyphens"in e1&&(eF="ms",eK=e0.ms,eX="edge"),"Webkit"===eF&&"-apple-trailing-word"in e1&&(eQ="apple")}var e9={js:eF,css:eK,vendor:eQ,browser:eX,isTouch:eY},e6=/[-\s]+(.)?/g;function e5(e,t){return t?t.toUpperCase():""}function e8(e){return e.replace(e6,e5)}function e7(e){return e8("-"+e)}var e3={"flex-grow":"flex-positive","flex-shrink":"flex-negative","flex-basis":"flex-preferred-size","justify-content":"flex-pack",order:"flex-order","align-items":"flex-align","align-content":"flex-line-pack"},e4={flex:"box-flex","flex-grow":"box-flex","flex-direction":["box-orient","box-direction"],order:"box-ordinal-group","align-items":"box-align","flex-flow":["box-orient","box-direction"],"justify-content":"box-pack"},te=Object.keys(e4),tt=function(e){return e9.css+e},tr=[{noPrefill:["appearance"],supportedProperty:function(e){return"appearance"===e&&("ms"===e9.js?"-webkit-"+e:e9.css+e)}},{noPrefill:["color-adjust"],supportedProperty:function(e){return"color-adjust"===e&&("Webkit"===e9.js?e9.css+"print-"+e:e)}},{noPrefill:["mask"],supportedProperty:function(e,t){if(!/^mask/.test(e))return!1;if("Webkit"===e9.js){var r="mask-image";if(e8(r) in t)return e;if(e9.js+e7(r) in t)return e9.css+e}return e}},{noPrefill:["text-orientation"],supportedProperty:function(e){return"text-orientation"===e&&("apple"!==e9.vendor||e9.isTouch?e:e9.css+e)}},{noPrefill:["transform"],supportedProperty:function(e,t,r){return"transform"===e&&(r.transform?e:e9.css+e)}},{noPrefill:["transition"],supportedProperty:function(e,t,r){return"transition"===e&&(r.transition?e:e9.css+e)}},{noPrefill:["writing-mode"],supportedProperty:function(e){return"writing-mode"===e&&("Webkit"===e9.js||"ms"===e9.js&&"edge"!==e9.browser?e9.css+e:e)}},{noPrefill:["user-select"],supportedProperty:function(e){return"user-select"===e&&("Moz"===e9.js||"ms"===e9.js||"apple"===e9.vendor?e9.css+e:e)}},{supportedProperty:function(e,t){return!!/^break-/.test(e)&&("Webkit"===e9.js?"WebkitColumn"+e7(e) in t&&e9.css+"column-"+e:"Moz"===e9.js&&"page"+e7(e) in t&&"page-"+e)}},{supportedProperty:function(e,t){if(!/^(border|margin|padding)-inline/.test(e))return!1;if("Moz"===e9.js)return e;var r=e.replace("-inline","");return e9.js+e7(r) in t&&e9.css+r}},{supportedProperty:function(e,t){return e8(e) in t&&e}},{supportedProperty:function(e,t){var r=e7(e);return"-"===e[0]||"-"===e[0]&&"-"===e[1]?e:e9.js+r in t?e9.css+e:"Webkit"!==e9.js&&"Webkit"+r in t&&"-webkit-"+e}},{supportedProperty:function(e){return"scroll-snap"===e.substring(0,11)&&("ms"===e9.js?""+e9.css+e:e)}},{supportedProperty:function(e){return"overscroll-behavior"===e&&("ms"===e9.js?e9.css+"scroll-chaining":e)}},{supportedProperty:function(e,t){var r=e3[e];return!!r&&e9.js+e7(r) in t&&e9.css+r}},{supportedProperty:function(e,t,r){var n=r.multiple;if(te.indexOf(e)>-1){var i=e4[e];if(!Array.isArray(i))return e9.js+e7(i) in t&&e9.css+i;if(!n)return!1;for(var s=0;s<i.length;s++)if(!(e9.js+e7(i[0]) in t))return!1;return i.map(tt)}return!1}}],tn=tr.filter(function(e){return e.supportedProperty}).map(function(e){return e.supportedProperty}),ti=tr.filter(function(e){return e.noPrefill}).reduce(function(e,t){var r;return e.push.apply(e,function(e){if(Array.isArray(e))return eH(e)}(r=t.noPrefill)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return eH(e,void 0);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return eH(e,void 0)}}(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),e},[]),ts={};if(h){o=document.createElement("p");var to=window.getComputedStyle(document.documentElement,"");for(var ta in to)isNaN(ta)||(ts[to[ta]]=to[ta]);ti.forEach(function(e){return delete ts[e]})}function tu(e,t){if(void 0===t&&(t={}),!o)return e;if(null!=ts[e])return ts[e];("transition"===e||"transform"===e)&&(t[e]=e in o.style);for(var r=0;r<tn.length&&(ts[e]=tn[r](e,o.style,t),!ts[e]);r++);try{o.style[e]=""}catch(e){return!1}return ts[e]}var tl={},tc={transition:1,"transition-property":1,"-webkit-transition":1,"-webkit-transition-property":1},tf=/(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;function th(e,t,r){return"var"===t?"var":"all"===t?"all":"all"===r?", all":(t?tu(t):", "+tu(r))||t||r}function td(e,t){var r=t;if(!a||"content"===e)return t;if("string"!=typeof r||!isNaN(parseInt(r,10)))return r;var n=e+r;if(null!=tl[n])return tl[n];try{a.style[e]=r}catch(e){return tl[n]=!1,!1}if(tc[e])r=r.replace(tf,th);else if(""===a.style[e]&&("-ms-flex"===(r=e9.css+r)&&(a.style[e]="-ms-flexbox"),a.style[e]=r,""===a.style[e]))return tl[n]=!1,!1;return a.style[e]="",tl[n]=r,tl[n]}h&&(a=document.createElement("p")),r(7437);let tp=eg({plugins:[{onCreateRule:function(e,t,r){if("function"!=typeof t)return null;var n=b(e,{},r);return n[eC]=t,n},onProcessStyle:function(e,t){if(eP in t||eC in t)return e;var r={};for(var n in e){var i=e[n];"function"==typeof i&&(delete e[n],r[n]=i)}return t[eP]=r,e},onUpdate:function(e,t,r,n){var i=t[eC];i&&(t.style=i(e)||{});var s=t[eP];if(s)for(var o in s)t.prop(o,s[o](e),n)}},{onCreateRule:function(e,t,r){if(!e)return null;if(e===ej)return new eO(e,t,r);if("@"===e[0]&&e.substr(0,eZ.length)===eZ)return new eA(e,t,r);var n=r.parent;return n&&("global"===n.type||n.options.parent&&"global"===n.options.parent.type)&&(r.scoped=!1),r.selector||!1!==r.scoped||(r.selector=e),null},onProcessRule:function(e,t){"style"===e.type&&t&&(!function(e,t){var r=e.options,n=e.style,i=n?n[ej]:null;if(i){for(var s in i)t.addRule(s,i[s],(0,l.Z)({},r,{selector:eI(s,e.selector)}));delete n[ej]}}(e,t),function(e,t){var r=e.options,n=e.style;for(var i in n)if("@"===i[0]&&i.substr(0,ej.length)===ej){var s=eI(i.substr(ej.length),e.selector);t.addRule(s,n[i],(0,l.Z)({},r,{selector:s})),delete n[i]}}(e,t))}},{onProcessStyle:function(e,t,r){if("style"!==t.type)return e;var n,i,s=t.options.parent;for(var o in e){var a=-1!==o.indexOf("&"),u="@"===o[0];if(a||u){if(n=function(e,t,r){if(r)return(0,l.Z)({},r,{index:r.index+1});var n=e.options.nestingLevel;n=void 0===n?1:n+1;var i=(0,l.Z)({},e.options,{nestingLevel:n,index:t.indexOf(e)+1});return delete i.name,i}(t,s,n),a){var c=function(e,t){for(var r=t.split(eN),n=e.split(eN),i="",s=0;s<r.length;s++)for(var o=r[s],a=0;a<n.length;a++){var u=n[a];i&&(i+=", "),i+=-1!==u.indexOf("&")?u.replace(eM,o):o+" "+u}return i}(o,t.selector);i||(i=function(e,t){return function(r,n){var i=e.getRule(n)||t&&t.getRule(n);return i?i.selector:n}}(s,r)),c=c.replace(eT,i);var f=t.key+"-"+o;"replaceRule"in s?s.replaceRule(f,e[o],(0,l.Z)({},n,{selector:c})):s.addRule(f,e[o],(0,l.Z)({},n,{selector:c}))}else u&&s.addRule(o,{},n).addRule(t.key,e[o],{selector:t.selector});delete e[o]}}return e}},{onProcessStyle:function(e){if(Array.isArray(e)){for(var t=0;t<e.length;t++)e[t]=eW(e[t]);return e}return eW(e)},onChangeValue:function(e,t,r){if(0===t.indexOf("--"))return e;var n=eG(t);return t===n?e:(r.prop(n,e),null)}},(void 0===n&&(n={}),i=eL(n),{onProcessStyle:function(e,t){if("style"!==t.type)return e;for(var r in e)e[r]=eD(r,e[r],i);return e},onChangeValue:function(e,t){return eD(t,e,i)}}),"undefined"==typeof window?null:{onProcessRule:function(e){if("keyframes"===e.type){var t;e.at="-"===(t=e.at)[1]||"ms"===e9.js?t:"@"+e9.css+"keyframes"+t.substr(10)}},onProcessStyle:function(e,t){return"style"!==t.type?e:function e(t){for(var r in t){var n=t[r];if("fallbacks"===r&&Array.isArray(n)){t[r]=n.map(e);continue}var i=!1,s=tu(r);s&&s!==r&&(i=!0);var o=!1,a=td(s,x(n));a&&a!==n&&(o=!0),(i||o)&&(i&&delete t[r],t[s||r]=a||n)}return t}(e)},onChangeValue:function(e,t){return td(t,x(e))||e}},(s=function(e,t){return e.length===t.length?e>t?1:-1:e.length-t.length},{onProcessStyle:function(e,t){if("style"!==t.type)return e;for(var r={},n=Object.keys(e).sort(s),i=0;i<n.length;i++)r[n[i]]=e[n[i]];return r}})]}),ty=function(e={}){let{disableGlobal:t=!1,productionPrefix:r="jss",seed:n=""}=e,i=""===n?"":`${n}-`,s=0,o=()=>s+=1;return(e,s)=>{let a=s.options.name;if(a&&0===a.indexOf("Mui")&&!s.options.link&&!t){if(-1!==ew.indexOf(e.key))return`Mui-${e.key}`;let t=`${i}${a}-${e.key}`;return s.options.theme[ek.Z]&&""===n?`${t}-${o()}`:t}return`${i}${r}${o()}`}}(),tv=new Map,tg=c.createContext({disableGeneration:!1,generateClassName:ty,jss:tp,sheetsCache:null,sheetsManager:tv,sheetsRegistry:null}),tm=-1e9;var tb=r(6529),tS=r(1259);let tx=["variant"];function tk(e){return 0===e.length}var tw={};let tR=["name","classNamePrefix","Component","defaultTheme"];function tP(e,t={}){let{name:r,classNamePrefix:n,Component:i,defaultTheme:s=tw}=t,o=(0,u.Z)(t,tR),a=function(e){let t="function"==typeof e;return{create:(r,n)=>{let i;try{i=t?e(r):e}catch(e){throw e}if(!n||!r.components||!r.components[n]||!r.components[n].styleOverrides&&!r.components[n].variants)return i;let s=r.components[n].styleOverrides||{},o=r.components[n].variants||[],a=(0,l.Z)({},i);return Object.keys(s).forEach(e=>{a[e]=(0,tb.Z)(a[e]||{},s[e])}),o.forEach(e=>{let t=function(e){let{variant:t}=e,r=(0,u.Z)(e,tx),n=t||"";return Object.keys(r).sort().forEach(t=>{"color"===t?n+=tk(n)?e[t]:(0,tS.Z)(e[t]):n+=`${tk(n)?t:(0,tS.Z)(t)}${(0,tS.Z)(e[t].toString())}`}),n}(e.props);a[t]=(0,tb.Z)(a[t]||{},e.style)}),a},options:{}}}(e),f=r||n||"makeStyles";return a.options={index:tm+=1,name:r,meta:f,classNamePrefix:f},(e={})=>{let t=function(){var e;let t=(0,ex.Z)();return null!=(e=null==t?void 0:t.$$material)?e:t}()||s,n=(0,l.Z)({},c.useContext(tg),o),u=c.useRef(),f=c.useRef();return function(e,t){let r;let n=c.useRef([]),i=c.useMemo(()=>({}),t);n.current!==i&&(n.current=i,r=e()),c.useEffect(()=>()=>{r&&r()},[i])}(()=>{let i={name:r,state:{},stylesCreator:a,stylesOptions:n,theme:t};return function({state:e,theme:t,stylesOptions:r,stylesCreator:n,name:i},s){if(r.disableGeneration)return;let o=eS.get(r.sheetsManager,n,t);o||(o={refs:0,staticSheet:null,dynamicStyles:null},eS.set(r.sheetsManager,n,t,o));let a=(0,l.Z)({},n.options,r,{theme:t,flip:"boolean"==typeof r.flip?r.flip:"rtl"===t.direction});a.generateId=a.serverGenerateClassName||a.generateClassName;let u=r.sheetsRegistry;if(0===o.refs){let e;r.sheetsCache&&(e=eS.get(r.sheetsCache,n,t));let s=n.create(t,i);!e&&((e=r.jss.createStyleSheet(s,(0,l.Z)({link:!1},a))).attach(),r.sheetsCache&&eS.set(r.sheetsCache,n,t,e)),u&&u.add(e),o.staticSheet=e,o.dynamicStyles=function e(t){var r=null;for(var n in t){var i=t[n],s=typeof i;if("function"===s)r||(r={}),r[n]=i;else if("object"===s&&null!==i&&!Array.isArray(i)){var o=e(i);o&&(r||(r={}),r[n]=o)}}return r}(s)}if(o.dynamicStyles){let t=r.jss.createStyleSheet(o.dynamicStyles,(0,l.Z)({link:!0},a));t.update(s),t.attach(),e.dynamicSheet=t,e.classes=eb({baseClasses:o.staticSheet.classes,newClasses:t.classes}),u&&u.add(t)}else e.classes=o.staticSheet.classes;o.refs+=1}(i,e),f.current=!1,u.current=i,()=>{!function({state:e,theme:t,stylesOptions:r,stylesCreator:n}){if(r.disableGeneration)return;let i=eS.get(r.sheetsManager,n,t);i.refs-=1;let s=r.sheetsRegistry;0===i.refs&&(eS.delete(r.sheetsManager,n,t),r.jss.removeStyleSheet(i.staticSheet),s&&s.remove(i.staticSheet)),e.dynamicSheet&&(r.jss.removeStyleSheet(e.dynamicSheet),s&&s.remove(e.dynamicSheet))}(i)}},[t,a]),c.useEffect(()=>{f.current&&function({state:e},t){e.dynamicSheet&&e.dynamicSheet.update(t)}(u.current,e),f.current=!0}),function({state:e,stylesOptions:t},r,n){if(t.disableGeneration)return r||{};e.cacheClasses||(e.cacheClasses={value:null,lastProp:null,lastJSS:{}});let i=!1;return e.classes!==e.cacheClasses.lastJSS&&(e.cacheClasses.lastJSS=e.classes,i=!0),r!==e.cacheClasses.lastProp&&(e.cacheClasses.lastProp=r,i=!0),i&&(e.cacheClasses.value=eb({baseClasses:e.cacheClasses.lastJSS,newClasses:r,Component:n})),e.cacheClasses.value}(u.current,e.classes,i)}}}}]);