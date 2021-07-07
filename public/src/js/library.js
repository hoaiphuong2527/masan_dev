/*!
  Javascript library:
  - Popper.min.js
  - Bootstrap v4.1.0
  - Clipboard.js v2.0.0
  - Holder v2.9.4
  - JavaScript for Bootstrap's docs
  - slick
  - Waypoints - 4.0.0
*/

/*
 Popper.min.js
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
*/
(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=getComputedStyle(e,null);return t?o[t]:o}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}function r(e){return 11===e?re:10===e?pe:re||pe}function p(e){if(!e)return document.documentElement;for(var o=r(10)?document.body:null,n=e.offsetParent;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function s(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||p(e.firstElementChild)===e)}function d(e){return null===e.parentNode?e:d(e.parentNode)}function a(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var l=r.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return s(l)?l:p(l);var f=d(e);return f.host?a(f.host,t):a(e,d(t).host)}function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=l(t,'top'),i=l(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function m(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+n+'Width'],10)}function h(e,t,o,n){return $(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],r(10)?o['offset'+e]+n['margin'+('Height'===e?'Top':'Left')]+n['margin'+('Height'===e?'Bottom':'Right')]:0)}function c(){var e=document.body,t=document.documentElement,o=r(10)&&getComputedStyle(t);return{height:h('Height',e,t,o),width:h('Width',e,t,o)}}function g(e){return le({},e,{right:e.left+e.width,bottom:e.top+e.height})}function u(e){var o={};try{if(r(10)){o=e.getBoundingClientRect();var n=l(e,'top'),i=l(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}else o=e.getBoundingClientRect()}catch(t){}var p={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},s='HTML'===e.nodeName?c():{},d=s.width||e.clientWidth||p.right-p.left,a=s.height||e.clientHeight||p.bottom-p.top,f=e.offsetWidth-d,h=e.offsetHeight-a;if(f||h){var u=t(e);f-=m(u,'x'),h-=m(u,'y'),p.width-=f,p.height-=h}return g(p)}function b(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],p=r(10),s='HTML'===o.nodeName,d=u(e),a=u(o),l=n(e),m=t(o),h=parseFloat(m.borderTopWidth,10),c=parseFloat(m.borderLeftWidth,10);i&&'HTML'===o.nodeName&&(a.top=$(a.top,0),a.left=$(a.left,0));var b=g({top:d.top-a.top-h,left:d.left-a.left-c,width:d.width,height:d.height});if(b.marginTop=0,b.marginLeft=0,!p&&s){var y=parseFloat(m.marginTop,10),w=parseFloat(m.marginLeft,10);b.top-=h-y,b.bottom-=h-y,b.left-=c-w,b.right-=c-w,b.marginTop=y,b.marginLeft=w}return(p&&!i?o.contains(l):o===l&&'BODY'!==l.nodeName)&&(b=f(b,o)),b}function y(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=b(e,o),i=$(o.clientWidth,window.innerWidth||0),r=$(o.clientHeight,window.innerHeight||0),p=t?0:l(o),s=t?0:l(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r};return g(d)}function w(e){var n=e.nodeName;return'BODY'===n||'HTML'===n?!1:'fixed'===t(e,'position')||w(o(e))}function E(e){if(!e||!e.parentElement||r())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}function v(e,t,i,r){var p=4<arguments.length&&void 0!==arguments[4]&&arguments[4],s={top:0,left:0},d=p?E(e):a(e,t);if('viewport'===r)s=y(d,p);else{var l;'scrollParent'===r?(l=n(o(t)),'BODY'===l.nodeName&&(l=e.ownerDocument.documentElement)):'window'===r?l=e.ownerDocument.documentElement:l=r;var f=b(l,d,p);if('HTML'===l.nodeName&&!w(d)){var m=c(),h=m.height,g=m.width;s.top+=f.top-f.marginTop,s.bottom=h+f.top,s.left+=f.left-f.marginLeft,s.right=g+f.left}else s=f}return s.left+=i,s.top+=i,s.right-=i,s.bottom-=i,s}function x(e){var t=e.width,o=e.height;return t*o}function O(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=v(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return le({key:e},s[e],{area:x(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function L(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,i=n?E(t):a(t,o);return b(o,i,n)}function S(e){var t=getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),n=parseFloat(t.marginLeft)+parseFloat(t.marginRight),i={width:e.offsetWidth+n,height:e.offsetHeight+o};return i}function T(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function C(e,t,o){o=o.split('-')[0];var n=S(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[T(s)],i}function D(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=D(e,function(e){return e[t]===o});return e.indexOf(n)}function P(t,o,n){var i=void 0===n?t:t.slice(0,N(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=g(o.offsets.popper),o.offsets.reference=g(o.offsets.reference),o=n(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=C(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=P(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function H(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function A(e){var t=e.ownerDocument;return t?t.defaultView:window}function M(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||M(n(p.parentNode),t,o,i),i.push(p)}function I(e,t,o,i){o.updateBound=i,A(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return M(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function F(){this.state.eventsEnabled||(this.state=I(this.reference,this.options,this.state,this.scheduleUpdate))}function R(e,t){return A(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function Y(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function j(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&Y(t[o])&&(n='px'),e.style[o]=t[o]+n})}function K(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function q(e,t,o){var n=D(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function G(e){return'end'===e?'start':'start'===e?'end':e}function z(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=me.indexOf(e),n=me.slice(o+1).concat(me.slice(0,o));return t?n.reverse():n}function V(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n;}var d=g(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?$(document.documentElement.clientHeight,window.innerHeight||0):$(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function _(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(D(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return V(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){Y(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function X(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=Y(+n)?[+n,0]:_(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var J=Math.min,Q=Math.round,Z=Math.floor,$=Math.max,ee='undefined'!=typeof window&&'undefined'!=typeof document,te=['Edge','Trident','Firefox'],oe=0,ne=0;ne<te.length;ne+=1)if(ee&&0<=navigator.userAgent.indexOf(te[ne])){oe=1;break}var i=ee&&window.Promise,ie=i?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},oe))}},re=ee&&!!(window.MSInputMethodContext&&document.documentMode),pe=ee&&/MSIE 10/.test(navigator.userAgent),se=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},de=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),ae=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},le=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},fe=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],me=fe.slice(3),he={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},ce=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};se(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=ie(this.update.bind(this)),this.options=le({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(le({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=le({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return le({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return de(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return H.call(this)}},{key:'enableEventListeners',value:function(){return F.call(this)}},{key:'disableEventListeners',value:function(){return U.call(this)}}]),t}();return ce.Utils=('undefined'==typeof window?global:window).PopperUtils,ce.placements=fe,ce.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:ae({},d,r[d]),end:ae({},d,r[d]+r[a]-p[a])};e.offsets.popper=le({},p,l[n])}return e}},offset:{order:200,enabled:!0,fn:X,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||p(e.instance.popper);e.instance.reference===o&&(o=p(o));var n=B('transform'),i=e.instance.popper.style,r=i.top,s=i.left,d=i[n];i.top='',i.left='',i[n]='';var a=v(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=s,i[n]=d,t.boundaries=a;var l=t.priority,f=e.offsets.popper,m={primary:function(e){var o=f[e];return f[e]<a[e]&&!t.escapeWithReference&&(o=$(f[e],a[e])),ae({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=f[o];return f[e]>a[e]&&!t.escapeWithReference&&(n=J(f[o],a[e]-('right'===e?f.width:f.height))),ae({},o,n)}};return l.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';f=le({},f,m[t](e))}),e.offsets.popper=f,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Z,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!q(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',c=a?'bottom':'right',u=S(i)[l];d[c]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[c]-u)),d[m]+u>s[c]&&(e.offsets.popper[m]+=d[m]+u-s[c]),e.offsets.popper=g(e.offsets.popper);var b=d[m]+d[l]/2-u/2,y=t(e.instance.popper),w=parseFloat(y['margin'+f],10),E=parseFloat(y['border'+f+'Width'],10),v=b-e.offsets.popper[m]-w-E;return v=$(J(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={},ae(n,m,Q(v)),ae(n,h,''),n),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=T(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case he.FLIP:p=[n,i];break;case he.CLOCKWISE:p=z(n);break;case he.COUNTERCLOCKWISE:p=z(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=T(n);var a=e.offsets.popper,l=e.offsets.reference,f=Z,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,y=-1!==['top','bottom'].indexOf(n),w=!!t.flipVariations&&(y&&'start'===r&&h||y&&'end'===r&&c||!y&&'start'===r&&g||!y&&'end'===r&&u);(m||b||w)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),w&&(r=G(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=le({},e.offsets.popper,C(e.instance.popper,e.offsets.reference,e.placement)),e=P(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=T(t),e.offsets.popper=g(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!q(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=D(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=D(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===r?t.gpuAcceleration:r,l=p(e.instance.popper),f=u(l),m={position:i.position},h={left:Z(i.left),top:Q(i.top),bottom:Q(i.bottom),right:Z(i.right)},c='bottom'===o?'top':'bottom',g='right'===n?'left':'right',b=B('transform');if(d='bottom'==c?-f.height+h.bottom:h.top,s='right'==g?-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[g]=0,m.willChange='transform';else{var y='bottom'==c?-1:1,w='right'==g?-1:1;m[c]=d*y,m[g]=s*w,m.willChange=c+', '+g}var E={"x-placement":e.placement};return e.attributes=le({},E,e.attributes),e.styles=le({},m,e.styles),e.arrowStyles=le({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return j(e.instance.popper,e.styles),K(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&j(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,i){var r=L(i,t,e,o.positionFixed),p=O(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),j(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}},ce});

/*!
  * Bootstrap v4.1.0 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e(t.bootstrap={},t.jQuery,t.Popper)}(this,function(t,e,c){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function h(r){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},e=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),e.forEach(function(t){var e,n,i;e=r,i=s[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return r}e=e&&e.hasOwnProperty("default")?e.default:e,c=c&&c.hasOwnProperty("default")?c.default:c;var r,n,s,a,l,u,f,d,_,g,m,p,v,E,y,T,C,I,A,D,b,S,w,N,O,k,P,L,j,R,H,W,M,x,U,K,F,V,Q,B,Y,G,q,z,X,J,Z,$,tt,et,nt,it,rt,st,ot,at,lt,ht,ct,ut,ft,dt,_t,gt,mt,pt,vt,Et,yt,Tt,Ct,It,At,Dt,bt,St,wt,Nt,Ot,kt,Pt,Lt,jt,Rt,Ht,Wt,Mt,xt,Ut,Kt,Ft,Vt,Qt,Bt,Yt,Gt,qt,zt,Xt,Jt,Zt,$t,te,ee,ne,ie,re,se,oe,ae,le,he,ce,ue,fe,de,_e,ge,me,pe,ve,Ee,ye,Te,Ce,Ie,Ae,De,be,Se,we,Ne,Oe,ke,Pe,Le,je,Re,He,We,Me,xe,Ue,Ke,Fe,Ve,Qe,Be,Ye,Ge,qe,ze,Xe,Je,Ze,$e,tn,en,nn,rn,sn,on,an,ln,hn,cn,un,fn,dn,_n,gn,mn,pn,vn,En,yn,Tn,Cn=function(i){var e="transitionend";function t(t){var e=this,n=!1;return i(this).one(l.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||l.triggerTransitionEnd(e)},t),this}var l={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");e&&"#"!==e||(e=t.getAttribute("href")||"");try{return 0<i(document).find(e).length?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=i(t).css("transition-duration");return parseFloat(e)?(e=e.split(",")[0],1e3*parseFloat(e)):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){i(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var r=n[i],s=e[i],o=s&&l.isElement(s)?"element":(a=s,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(r).test(o))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+o+'" but expected type "'+r+'".')}var a}};return i.fn.emulateTransitionEnd=t,i.event.special[l.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(i(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}},l}(e),In=(n="alert",a="."+(s="bs.alert"),l=(r=e).fn[n],u={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},f="alert",d="fade",_="show",g=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){r.removeData(this._element,s),this._element=null},t._getRootElement=function(t){var e=Cn.getSelectorFromElement(t),n=!1;return e&&(n=r(e)[0]),n||(n=r(t).closest("."+f)[0]),n},t._triggerCloseEvent=function(t){var e=r.Event(u.CLOSE);return r(t).trigger(e),e},t._removeElement=function(e){var n=this;if(r(e).removeClass(_),r(e).hasClass(d)){var t=Cn.getTransitionDurationFromElement(e);r(e).one(Cn.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){r(t).detach().trigger(u.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=r(this),e=t.data(s);e||(e=new i(this),t.data(s,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},o(i,null,[{key:"VERSION",get:function(){return"4.1.0"}}]),i}(),r(document).on(u.CLICK_DATA_API,'[data-dismiss="alert"]',g._handleDismiss(new g)),r.fn[n]=g._jQueryInterface,r.fn[n].Constructor=g,r.fn[n].noConflict=function(){return r.fn[n]=l,g._jQueryInterface},g),An=(p="button",E="."+(v="bs.button"),y=".data-api",T=(m=e).fn[p],C="active",I="btn",D='[data-toggle^="button"]',b='[data-toggle="buttons"]',S="input",w=".active",N=".btn",O={CLICK_DATA_API:"click"+E+y,FOCUS_BLUR_DATA_API:(A="focus")+E+y+" blur"+E+y},k=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=m(this._element).closest(b)[0];if(n){var i=m(this._element).find(S)[0];if(i){if("radio"===i.type)if(i.checked&&m(this._element).hasClass(C))t=!1;else{var r=m(n).find(w)[0];r&&m(r).removeClass(C)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!m(this._element).hasClass(C),m(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!m(this._element).hasClass(C)),t&&m(this._element).toggleClass(C)},t.dispose=function(){m.removeData(this._element,v),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=m(this).data(v);t||(t=new n(this),m(this).data(v,t)),"toggle"===e&&t[e]()})},o(n,null,[{key:"VERSION",get:function(){return"4.1.0"}}]),n}(),m(document).on(O.CLICK_DATA_API,D,function(t){t.preventDefault();var e=t.target;m(e).hasClass(I)||(e=m(e).closest(N)),k._jQueryInterface.call(m(e),"toggle")}).on(O.FOCUS_BLUR_DATA_API,D,function(t){var e=m(t.target).closest(N)[0];m(e).toggleClass(A,/^focus(in)?$/.test(t.type))}),m.fn[p]=k._jQueryInterface,m.fn[p].Constructor=k,m.fn[p].noConflict=function(){return m.fn[p]=T,k._jQueryInterface},k),Dn=(L="carousel",R="."+(j="bs.carousel"),H=".data-api",W=(P=e).fn[L],M={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},x={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},U="next",K="prev",F="left",V="right",Q={SLIDE:"slide"+R,SLID:"slid"+R,KEYDOWN:"keydown"+R,MOUSEENTER:"mouseenter"+R,MOUSELEAVE:"mouseleave"+R,TOUCHEND:"touchend"+R,LOAD_DATA_API:"load"+R+H,CLICK_DATA_API:"click"+R+H},B="carousel",Y="active",G="slide",q="carousel-item-right",z="carousel-item-left",X="carousel-item-next",J="carousel-item-prev",Z={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},$=function(){function s(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(e),this._element=P(t)[0],this._indicatorsElement=P(this._element).find(Z.INDICATORS)[0],this._addEventListeners()}var t=s.prototype;return t.next=function(){this._isSliding||this._slide(U)},t.nextWhenVisible=function(){!document.hidden&&P(this._element).is(":visible")&&"hidden"!==P(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(K)},t.pause=function(t){t||(this._isPaused=!0),P(this._element).find(Z.NEXT_PREV)[0]&&(Cn.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=P(this._element).find(Z.ACTIVE_ITEM)[0];var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)P(this._element).one(Q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?U:K;this._slide(i,this._items[t])}},t.dispose=function(){P(this._element).off(R),P.removeData(this._element,j),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=h({},M,t),Cn.typeCheckConfig(L,t,x),t},t._addEventListeners=function(){var e=this;this._config.keyboard&&P(this._element).on(Q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(P(this._element).on(Q.MOUSEENTER,function(t){return e.pause(t)}).on(Q.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&P(this._element).on(Q.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=P.makeArray(P(t).parent().find(Z.ITEM)),this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===U,i=t===K,r=this._getItemIndex(e),s=this._items.length-1;if((i&&0===r||n&&r===s)&&!this._config.wrap)return e;var o=(r+(t===K?-1:1))%this._items.length;return-1===o?this._items[this._items.length-1]:this._items[o]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(P(this._element).find(Z.ACTIVE_ITEM)[0]),r=P.Event(Q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return P(this._element).trigger(r),r},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){P(this._indicatorsElement).find(Z.ACTIVE).removeClass(Y);var e=this._indicatorsElement.children[this._getItemIndex(t)];e&&P(e).addClass(Y)}},t._slide=function(t,e){var n,i,r,s=this,o=P(this._element).find(Z.ACTIVE_ITEM)[0],a=this._getItemIndex(o),l=e||o&&this._getItemByDirection(t,o),h=this._getItemIndex(l),c=Boolean(this._interval);if(t===U?(n=z,i=X,r=F):(n=q,i=J,r=V),l&&P(l).hasClass(Y))this._isSliding=!1;else if(!this._triggerSlideEvent(l,r).isDefaultPrevented()&&o&&l){this._isSliding=!0,c&&this.pause(),this._setActiveIndicatorElement(l);var u=P.Event(Q.SLID,{relatedTarget:l,direction:r,from:a,to:h});if(P(this._element).hasClass(G)){P(l).addClass(i),Cn.reflow(l),P(o).addClass(n),P(l).addClass(n);var f=Cn.getTransitionDurationFromElement(o);P(o).one(Cn.TRANSITION_END,function(){P(l).removeClass(n+" "+i).addClass(Y),P(o).removeClass(Y+" "+i+" "+n),s._isSliding=!1,setTimeout(function(){return P(s._element).trigger(u)},0)}).emulateTransitionEnd(f)}else P(o).removeClass(Y),P(l).addClass(Y),this._isSliding=!1,P(this._element).trigger(u);c&&this.cycle()}},s._jQueryInterface=function(i){return this.each(function(){var t=P(this).data(j),e=h({},M,P(this).data());"object"==typeof i&&(e=h({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new s(this,e),P(this).data(j,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&(t.pause(),t.cycle())})},s._dataApiClickHandler=function(t){var e=Cn.getSelectorFromElement(this);if(e){var n=P(e)[0];if(n&&P(n).hasClass(B)){var i=h({},P(n).data(),P(this).data()),r=this.getAttribute("data-slide-to");r&&(i.interval=!1),s._jQueryInterface.call(P(n),i),r&&P(n).data(j).to(r),t.preventDefault()}}},o(s,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return M}}]),s}(),P(document).on(Q.CLICK_DATA_API,Z.DATA_SLIDE,$._dataApiClickHandler),P(window).on(Q.LOAD_DATA_API,function(){P(Z.DATA_RIDE).each(function(){var t=P(this);$._jQueryInterface.call(t,t.data())})}),P.fn[L]=$._jQueryInterface,P.fn[L].Constructor=$,P.fn[L].noConflict=function(){return P.fn[L]=W,$._jQueryInterface},$),bn=(et="collapse",it="."+(nt="bs.collapse"),rt=(tt=e).fn[et],st={toggle:!0,parent:""},ot={toggle:"boolean",parent:"(string|element)"},at={SHOW:"show"+it,SHOWN:"shown"+it,HIDE:"hide"+it,HIDDEN:"hidden"+it,CLICK_DATA_API:"click"+it+".data-api"},lt="show",ht="collapse",ct="collapsing",ut="collapsed",ft="width",dt="height",_t={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},gt=function(){function a(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=tt.makeArray(tt('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=tt(_t.DATA_TOGGLE),i=0;i<n.length;i++){var r=n[i],s=Cn.getSelectorFromElement(r);null!==s&&0<tt(s).filter(t).length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){tt(this._element).hasClass(lt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!tt(this._element).hasClass(lt)&&(this._parent&&0===(t=tt.makeArray(tt(this._parent).find(_t.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(t=null),!(t&&(e=tt(t).not(this._selector).data(nt))&&e._isTransitioning))){var i=tt.Event(at.SHOW);if(tt(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(tt(t).not(this._selector),"hide"),e||tt(t).data(nt,null));var r=this._getDimension();tt(this._element).removeClass(ht).addClass(ct),(this._element.style[r]=0)<this._triggerArray.length&&tt(this._triggerArray).removeClass(ut).attr("aria-expanded",!0),this.setTransitioning(!0);var s="scroll"+(r[0].toUpperCase()+r.slice(1)),o=Cn.getTransitionDurationFromElement(this._element);tt(this._element).one(Cn.TRANSITION_END,function(){tt(n._element).removeClass(ct).addClass(ht).addClass(lt),n._element.style[r]="",n.setTransitioning(!1),tt(n._element).trigger(at.SHOWN)}).emulateTransitionEnd(o),this._element.style[r]=this._element[s]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&tt(this._element).hasClass(lt)){var e=tt.Event(at.HIDE);if(tt(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();if(this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",Cn.reflow(this._element),tt(this._element).addClass(ct).removeClass(ht).removeClass(lt),0<this._triggerArray.length)for(var i=0;i<this._triggerArray.length;i++){var r=this._triggerArray[i],s=Cn.getSelectorFromElement(r);if(null!==s)tt(s).hasClass(lt)||tt(r).addClass(ut).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var o=Cn.getTransitionDurationFromElement(this._element);tt(this._element).one(Cn.TRANSITION_END,function(){t.setTransitioning(!1),tt(t._element).removeClass(ct).addClass(ht).trigger(at.HIDDEN)}).emulateTransitionEnd(o)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){tt.removeData(this._element,nt),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=h({},st,t)).toggle=Boolean(t.toggle),Cn.typeCheckConfig(et,t,ot),t},t._getDimension=function(){return tt(this._element).hasClass(ft)?ft:dt},t._getParent=function(){var n=this,t=null;Cn.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=tt(this._config.parent)[0];var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return tt(t).find(e).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){if(t){var n=tt(t).hasClass(lt);0<e.length&&tt(e).toggleClass(ut,!n).attr("aria-expanded",n)}},a._getTargetFromElement=function(t){var e=Cn.getSelectorFromElement(t);return e?tt(e)[0]:null},a._jQueryInterface=function(i){return this.each(function(){var t=tt(this),e=t.data(nt),n=h({},st,t.data(),"object"==typeof i&&i);if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(nt,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},o(a,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return st}}]),a}(),tt(document).on(at.CLICK_DATA_API,_t.DATA_TOGGLE,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=tt(this),e=Cn.getSelectorFromElement(this);tt(e).each(function(){var t=tt(this),e=t.data(nt)?"toggle":n.data();gt._jQueryInterface.call(t,e)})}),tt.fn[et]=gt._jQueryInterface,tt.fn[et].Constructor=gt,tt.fn[et].noConflict=function(){return tt.fn[et]=rt,gt._jQueryInterface},gt),Sn=(pt="dropdown",Et="."+(vt="bs.dropdown"),yt=".data-api",Tt=(mt=e).fn[pt],Ct=new RegExp("38|40|27"),It={HIDE:"hide"+Et,HIDDEN:"hidden"+Et,SHOW:"show"+Et,SHOWN:"shown"+Et,CLICK:"click"+Et,CLICK_DATA_API:"click"+Et+yt,KEYDOWN_DATA_API:"keydown"+Et+yt,KEYUP_DATA_API:"keyup"+Et+yt},At="disabled",Dt="show",bt="dropup",St="dropright",wt="dropleft",Nt="dropdown-menu-right",Ot="position-static",kt='[data-toggle="dropdown"]',Pt=".dropdown form",Lt=".dropdown-menu",jt=".navbar-nav",Rt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Ht="top-start",Wt="top-end",Mt="bottom-start",xt="bottom-end",Ut="right-start",Kt="left-start",Ft={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Vt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Qt=function(){function l(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=l.prototype;return t.toggle=function(){if(!this._element.disabled&&!mt(this._element).hasClass(At)){var t=l._getParentFromElement(this._element),e=mt(this._menu).hasClass(Dt);if(l._clearMenus(),!e){var n={relatedTarget:this._element},i=mt.Event(It.SHOW,n);if(mt(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof c)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var r=this._element;"parent"===this._config.reference?r=t:Cn.isElement(this._config.reference)&&(r=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(r=this._config.reference[0])),"scrollParent"!==this._config.boundary&&mt(t).addClass(Ot),this._popper=new c(r,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===mt(t).closest(jt).length&&mt(document.body).children().on("mouseover",null,mt.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),mt(this._menu).toggleClass(Dt),mt(t).toggleClass(Dt).trigger(mt.Event(It.SHOWN,n))}}}},t.dispose=function(){mt.removeData(this._element,vt),mt(this._element).off(Et),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;mt(this._element).on(It.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=h({},this.constructor.Default,mt(this._element).data(),t),Cn.typeCheckConfig(pt,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=l._getParentFromElement(this._element);this._menu=mt(t).find(Lt)[0]}return this._menu},t._getPlacement=function(){var t=mt(this._element).parent(),e=Mt;return t.hasClass(bt)?(e=Ht,mt(this._menu).hasClass(Nt)&&(e=Wt)):t.hasClass(St)?e=Ut:t.hasClass(wt)?e=Kt:mt(this._menu).hasClass(Nt)&&(e=xt),e},t._detectNavbar=function(){return 0<mt(this._element).closest(".navbar").length},t._getPopperConfig=function(){var e=this,t={};"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=h({},t.offsets,e._config.offset(t.offsets)||{}),t}:t.offset=this._config.offset;var n={placement:this._getPlacement(),modifiers:{offset:t,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(n.modifiers.applyStyle={enabled:!1}),n},l._jQueryInterface=function(e){return this.each(function(){var t=mt(this).data(vt);if(t||(t=new l(this,"object"==typeof e?e:null),mt(this).data(vt,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},l._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=mt.makeArray(mt(kt)),n=0;n<e.length;n++){var i=l._getParentFromElement(e[n]),r=mt(e[n]).data(vt),s={relatedTarget:e[n]};if(r){var o=r._menu;if(mt(i).hasClass(Dt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&mt.contains(i,t.target))){var a=mt.Event(It.HIDE,s);mt(i).trigger(a),a.isDefaultPrevented()||("ontouchstart"in document.documentElement&&mt(document.body).children().off("mouseover",null,mt.noop),e[n].setAttribute("aria-expanded","false"),mt(o).removeClass(Dt),mt(i).removeClass(Dt).trigger(mt.Event(It.HIDDEN,s)))}}}},l._getParentFromElement=function(t){var e,n=Cn.getSelectorFromElement(t);return n&&(e=mt(n)[0]),e||t.parentNode},l._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||mt(t.target).closest(Lt).length)):Ct.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!mt(this).hasClass(At))){var e=l._getParentFromElement(this),n=mt(e).hasClass(Dt);if((n||27===t.which&&32===t.which)&&(!n||27!==t.which&&32!==t.which)){var i=mt(e).find(Rt).get();if(0!==i.length){var r=i.indexOf(t.target);38===t.which&&0<r&&r--,40===t.which&&r<i.length-1&&r++,r<0&&(r=0),i[r].focus()}}else{if(27===t.which){var s=mt(e).find(kt)[0];mt(s).trigger("focus")}mt(this).trigger("click")}}},o(l,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return Ft}},{key:"DefaultType",get:function(){return Vt}}]),l}(),mt(document).on(It.KEYDOWN_DATA_API,kt,Qt._dataApiKeydownHandler).on(It.KEYDOWN_DATA_API,Lt,Qt._dataApiKeydownHandler).on(It.CLICK_DATA_API+" "+It.KEYUP_DATA_API,Qt._clearMenus).on(It.CLICK_DATA_API,kt,function(t){t.preventDefault(),t.stopPropagation(),Qt._jQueryInterface.call(mt(this),"toggle")}).on(It.CLICK_DATA_API,Pt,function(t){t.stopPropagation()}),mt.fn[pt]=Qt._jQueryInterface,mt.fn[pt].Constructor=Qt,mt.fn[pt].noConflict=function(){return mt.fn[pt]=Tt,Qt._jQueryInterface},Qt),wn=(Yt="modal",qt="."+(Gt="bs.modal"),zt=(Bt=e).fn[Yt],Xt={backdrop:!0,keyboard:!0,focus:!0,show:!0},Jt={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},Zt={HIDE:"hide"+qt,HIDDEN:"hidden"+qt,SHOW:"show"+qt,SHOWN:"shown"+qt,FOCUSIN:"focusin"+qt,RESIZE:"resize"+qt,CLICK_DISMISS:"click.dismiss"+qt,KEYDOWN_DISMISS:"keydown.dismiss"+qt,MOUSEUP_DISMISS:"mouseup.dismiss"+qt,MOUSEDOWN_DISMISS:"mousedown.dismiss"+qt,CLICK_DATA_API:"click"+qt+".data-api"},$t="modal-scrollbar-measure",te="modal-backdrop",ee="modal-open",ne="fade",ie="show",re={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},se=function(){function r(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=Bt(t).find(re.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._scrollbarWidth=0}var t=r.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isTransitioning&&!this._isShown){Bt(this._element).hasClass(ne)&&(this._isTransitioning=!0);var n=Bt.Event(Zt.SHOW,{relatedTarget:t});Bt(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),Bt(document.body).addClass(ee),this._setEscapeEvent(),this._setResizeEvent(),Bt(this._element).on(Zt.CLICK_DISMISS,re.DATA_DISMISS,function(t){return e.hide(t)}),Bt(this._dialog).on(Zt.MOUSEDOWN_DISMISS,function(){Bt(e._element).one(Zt.MOUSEUP_DISMISS,function(t){Bt(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var n=Bt.Event(Zt.HIDE);if(Bt(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=Bt(this._element).hasClass(ne);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),Bt(document).off(Zt.FOCUSIN),Bt(this._element).removeClass(ie),Bt(this._element).off(Zt.CLICK_DISMISS),Bt(this._dialog).off(Zt.MOUSEDOWN_DISMISS),i){var r=Cn.getTransitionDurationFromElement(this._element);Bt(this._element).one(Cn.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(r)}else this._hideModal()}}},t.dispose=function(){Bt.removeData(this._element,Gt),Bt(window,document,this._element,this._backdrop).off(qt),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=h({},Xt,t),Cn.typeCheckConfig(Yt,t,Jt),t},t._showElement=function(t){var e=this,n=Bt(this._element).hasClass(ne);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,n&&Cn.reflow(this._element),Bt(this._element).addClass(ie),this._config.focus&&this._enforceFocus();var i=Bt.Event(Zt.SHOWN,{relatedTarget:t}),r=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,Bt(e._element).trigger(i)};if(n){var s=Cn.getTransitionDurationFromElement(this._element);Bt(this._dialog).one(Cn.TRANSITION_END,r).emulateTransitionEnd(s)}else r()},t._enforceFocus=function(){var e=this;Bt(document).off(Zt.FOCUSIN).on(Zt.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===Bt(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?Bt(this._element).on(Zt.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||Bt(this._element).off(Zt.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?Bt(window).on(Zt.RESIZE,function(t){return e.handleUpdate(t)}):Bt(window).off(Zt.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){Bt(document.body).removeClass(ee),t._resetAdjustments(),t._resetScrollbar(),Bt(t._element).trigger(Zt.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(Bt(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=Bt(this._element).hasClass(ne)?ne:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=te,n&&Bt(this._backdrop).addClass(n),Bt(this._backdrop).appendTo(document.body),Bt(this._element).on(Zt.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&Cn.reflow(this._backdrop),Bt(this._backdrop).addClass(ie),!t)return;if(!n)return void t();var i=Cn.getTransitionDurationFromElement(this._backdrop);Bt(this._backdrop).one(Cn.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){Bt(this._backdrop).removeClass(ie);var r=function(){e._removeBackdrop(),t&&t()};if(Bt(this._element).hasClass(ne)){var s=Cn.getTransitionDurationFromElement(this._backdrop);Bt(this._backdrop).one(Cn.TRANSITION_END,r).emulateTransitionEnd(s)}else r()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var r=this;if(this._isBodyOverflowing){Bt(re.FIXED_CONTENT).each(function(t,e){var n=Bt(e)[0].style.paddingRight,i=Bt(e).css("padding-right");Bt(e).data("padding-right",n).css("padding-right",parseFloat(i)+r._scrollbarWidth+"px")}),Bt(re.STICKY_CONTENT).each(function(t,e){var n=Bt(e)[0].style.marginRight,i=Bt(e).css("margin-right");Bt(e).data("margin-right",n).css("margin-right",parseFloat(i)-r._scrollbarWidth+"px")}),Bt(re.NAVBAR_TOGGLER).each(function(t,e){var n=Bt(e)[0].style.marginRight,i=Bt(e).css("margin-right");Bt(e).data("margin-right",n).css("margin-right",parseFloat(i)+r._scrollbarWidth+"px")});var t=document.body.style.paddingRight,e=Bt(document.body).css("padding-right");Bt(document.body).data("padding-right",t).css("padding-right",parseFloat(e)+this._scrollbarWidth+"px")}},t._resetScrollbar=function(){Bt(re.FIXED_CONTENT).each(function(t,e){var n=Bt(e).data("padding-right");"undefined"!=typeof n&&Bt(e).css("padding-right",n).removeData("padding-right")}),Bt(re.STICKY_CONTENT+", "+re.NAVBAR_TOGGLER).each(function(t,e){var n=Bt(e).data("margin-right");"undefined"!=typeof n&&Bt(e).css("margin-right",n).removeData("margin-right")});var t=Bt(document.body).data("padding-right");"undefined"!=typeof t&&Bt(document.body).css("padding-right",t).removeData("padding-right")},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=$t,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},r._jQueryInterface=function(n,i){return this.each(function(){var t=Bt(this).data(Gt),e=h({},r.Default,Bt(this).data(),"object"==typeof n&&n);if(t||(t=new r(this,e),Bt(this).data(Gt,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},o(r,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return Xt}}]),r}(),Bt(document).on(Zt.CLICK_DATA_API,re.DATA_TOGGLE,function(t){var e,n=this,i=Cn.getSelectorFromElement(this);i&&(e=Bt(i)[0]);var r=Bt(e).data(Gt)?"toggle":h({},Bt(e).data(),Bt(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var s=Bt(e).one(Zt.SHOW,function(t){t.isDefaultPrevented()||s.one(Zt.HIDDEN,function(){Bt(n).is(":visible")&&n.focus()})});se._jQueryInterface.call(Bt(e),r,this)}),Bt.fn[Yt]=se._jQueryInterface,Bt.fn[Yt].Constructor=se,Bt.fn[Yt].noConflict=function(){return Bt.fn[Yt]=zt,se._jQueryInterface},se),Nn=(ae="tooltip",he="."+(le="bs.tooltip"),ce=(oe=e).fn[ae],ue="bs-tooltip",fe=new RegExp("(^|\\s)"+ue+"\\S+","g"),ge={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!(_e={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"}),selector:!(de={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"}),placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},pe="out",ve={HIDE:"hide"+he,HIDDEN:"hidden"+he,SHOW:(me="show")+he,SHOWN:"shown"+he,INSERTED:"inserted"+he,CLICK:"click"+he,FOCUSIN:"focusin"+he,FOCUSOUT:"focusout"+he,MOUSEENTER:"mouseenter"+he,MOUSELEAVE:"mouseleave"+he},Ee="fade",ye="show",Te=".tooltip-inner",Ce=".arrow",Ie="hover",Ae="focus",De="click",be="manual",Se=function(){function i(t,e){if("undefined"==typeof c)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=oe(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),oe(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(oe(this.getTipElement()).hasClass(ye))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),oe.removeData(this.element,this.constructor.DATA_KEY),oe(this.element).off(this.constructor.EVENT_KEY),oe(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&oe(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===oe(this.element).css("display"))throw new Error("Please use show on visible elements");var t=oe.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){oe(this.element).trigger(t);var n=oe.contains(this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!n)return;var i=this.getTipElement(),r=Cn.getUID(this.constructor.NAME);i.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&oe(i).addClass(Ee);var s="function"==typeof this.config.placement?this.config.placement.call(this,i,this.element):this.config.placement,o=this._getAttachment(s);this.addAttachmentClass(o);var a=!1===this.config.container?document.body:oe(this.config.container);oe(i).data(this.constructor.DATA_KEY,this),oe.contains(this.element.ownerDocument.documentElement,this.tip)||oe(i).appendTo(a),oe(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new c(this.element,i,{placement:o,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:Ce},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),oe(i).addClass(ye),"ontouchstart"in document.documentElement&&oe(document.body).children().on("mouseover",null,oe.noop);var l=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,oe(e.element).trigger(e.constructor.Event.SHOWN),t===pe&&e._leave(null,e)};if(oe(this.tip).hasClass(Ee)){var h=Cn.getTransitionDurationFromElement(this.tip);oe(this.tip).one(Cn.TRANSITION_END,l).emulateTransitionEnd(h)}else l()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=oe.Event(this.constructor.Event.HIDE),r=function(){e._hoverState!==me&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),oe(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(oe(this.element).trigger(i),!i.isDefaultPrevented()){if(oe(n).removeClass(ye),"ontouchstart"in document.documentElement&&oe(document.body).children().off("mouseover",null,oe.noop),this._activeTrigger[De]=!1,this._activeTrigger[Ae]=!1,this._activeTrigger[Ie]=!1,oe(this.tip).hasClass(Ee)){var s=Cn.getTransitionDurationFromElement(n);oe(n).one(Cn.TRANSITION_END,r).emulateTransitionEnd(s)}else r();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){oe(this.getTipElement()).addClass(ue+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||oe(this.config.template)[0],this.tip},t.setContent=function(){var t=oe(this.getTipElement());this.setElementContent(t.find(Te),this.getTitle()),t.removeClass(Ee+" "+ye)},t.setElementContent=function(t,e){var n=this.config.html;"object"==typeof e&&(e.nodeType||e.jquery)?n?oe(e).parent().is(t)||t.empty().append(e):t.text(oe(e).text()):t[n?"html":"text"](e)},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getAttachment=function(t){return _e[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)oe(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==be){var e=t===Ie?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===Ie?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;oe(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}oe(i.element).closest(".modal").on("hide.bs.modal",function(){return i.hide()})}),this.config.selector?this.config=h({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||oe(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),oe(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Ae:Ie]=!0),oe(e.getTipElement()).hasClass(ye)||e._hoverState===me?e._hoverState=me:(clearTimeout(e._timeout),e._hoverState=me,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===me&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||oe(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),oe(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Ae:Ie]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=pe,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===pe&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){return"number"==typeof(t=h({},this.constructor.Default,oe(this.element).data(),t)).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),Cn.typeCheckConfig(ae,t,this.constructor.DefaultType),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=oe(this.getTipElement()),e=t.attr("class").match(fe);null!==e&&0<e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(oe(t).removeClass(Ee),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=oe(this).data(le),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),oe(this).data(le,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},o(i,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return ge}},{key:"NAME",get:function(){return ae}},{key:"DATA_KEY",get:function(){return le}},{key:"Event",get:function(){return ve}},{key:"EVENT_KEY",get:function(){return he}},{key:"DefaultType",get:function(){return de}}]),i}(),oe.fn[ae]=Se._jQueryInterface,oe.fn[ae].Constructor=Se,oe.fn[ae].noConflict=function(){return oe.fn[ae]=ce,Se._jQueryInterface},Se),On=(Ne="popover",ke="."+(Oe="bs.popover"),Pe=(we=e).fn[Ne],Le="bs-popover",je=new RegExp("(^|\\s)"+Le+"\\S+","g"),Re=h({},Nn.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),He=h({},Nn.DefaultType,{content:"(string|element|function)"}),We="fade",xe=".popover-header",Ue=".popover-body",Ke={HIDE:"hide"+ke,HIDDEN:"hidden"+ke,SHOW:(Me="show")+ke,SHOWN:"shown"+ke,INSERTED:"inserted"+ke,CLICK:"click"+ke,FOCUSIN:"focusin"+ke,FOCUSOUT:"focusout"+ke,MOUSEENTER:"mouseenter"+ke,MOUSELEAVE:"mouseleave"+ke},Fe=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var r=i.prototype;return r.isWithContent=function(){return this.getTitle()||this._getContent()},r.addAttachmentClass=function(t){we(this.getTipElement()).addClass(Le+"-"+t)},r.getTipElement=function(){return this.tip=this.tip||we(this.config.template)[0],this.tip},r.setContent=function(){var t=we(this.getTipElement());this.setElementContent(t.find(xe),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(Ue),e),t.removeClass(We+" "+Me)},r._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},r._cleanTipClass=function(){var t=we(this.getTipElement()),e=t.attr("class").match(je);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=we(this).data(Oe),e="object"==typeof n?n:null;if((t||!/destroy|hide/.test(n))&&(t||(t=new i(this,e),we(this).data(Oe,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},o(i,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return Re}},{key:"NAME",get:function(){return Ne}},{key:"DATA_KEY",get:function(){return Oe}},{key:"Event",get:function(){return Ke}},{key:"EVENT_KEY",get:function(){return ke}},{key:"DefaultType",get:function(){return He}}]),i}(Nn),we.fn[Ne]=Fe._jQueryInterface,we.fn[Ne].Constructor=Fe,we.fn[Ne].noConflict=function(){return we.fn[Ne]=Pe,Fe._jQueryInterface},Fe),kn=(Qe="scrollspy",Ye="."+(Be="bs.scrollspy"),Ge=(Ve=e).fn[Qe],qe={offset:10,method:"auto",target:""},ze={offset:"number",method:"string",target:"(string|element)"},Xe={ACTIVATE:"activate"+Ye,SCROLL:"scroll"+Ye,LOAD_DATA_API:"load"+Ye+".data-api"},Je="dropdown-item",Ze="active",$e={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},tn="offset",en="position",nn=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+$e.NAV_LINKS+","+this._config.target+" "+$e.LIST_ITEMS+","+this._config.target+" "+$e.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,Ve(this._scrollElement).on(Xe.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?tn:en,r="auto"===this._config.method?t:this._config.method,s=r===en?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),Ve.makeArray(Ve(this._selector)).map(function(t){var e,n=Cn.getSelectorFromElement(t);if(n&&(e=Ve(n)[0]),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[Ve(e)[r]().top+s,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){Ve.removeData(this._element,Be),Ve(this._scrollElement).off(Ye),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=h({},qe,t)).target){var e=Ve(t.target).attr("id");e||(e=Cn.getUID(Qe),Ve(t.target).attr("id",e)),t.target="#"+e}return Cn.typeCheckConfig(Qe,t,ze),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var r=this._offsets.length;r--;){this._activeTarget!==this._targets[r]&&t>=this._offsets[r]&&("undefined"==typeof this._offsets[r+1]||t<this._offsets[r+1])&&this._activate(this._targets[r])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",");t=t.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var n=Ve(t.join(","));n.hasClass(Je)?(n.closest($e.DROPDOWN).find($e.DROPDOWN_TOGGLE).addClass(Ze),n.addClass(Ze)):(n.addClass(Ze),n.parents($e.NAV_LIST_GROUP).prev($e.NAV_LINKS+", "+$e.LIST_ITEMS).addClass(Ze),n.parents($e.NAV_LIST_GROUP).prev($e.NAV_ITEMS).children($e.NAV_LINKS).addClass(Ze)),Ve(this._scrollElement).trigger(Xe.ACTIVATE,{relatedTarget:e})},t._clear=function(){Ve(this._selector).filter($e.ACTIVE).removeClass(Ze)},n._jQueryInterface=function(e){return this.each(function(){var t=Ve(this).data(Be);if(t||(t=new n(this,"object"==typeof e&&e),Ve(this).data(Be,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},o(n,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return qe}}]),n}(),Ve(window).on(Xe.LOAD_DATA_API,function(){for(var t=Ve.makeArray(Ve($e.DATA_SPY)),e=t.length;e--;){var n=Ve(t[e]);nn._jQueryInterface.call(n,n.data())}}),Ve.fn[Qe]=nn._jQueryInterface,Ve.fn[Qe].Constructor=nn,Ve.fn[Qe].noConflict=function(){return Ve.fn[Qe]=Ge,nn._jQueryInterface},nn),Pn=(on="."+(sn="bs.tab"),an=(rn=e).fn.tab,ln={HIDE:"hide"+on,HIDDEN:"hidden"+on,SHOW:"show"+on,SHOWN:"shown"+on,CLICK_DATA_API:"click"+on+".data-api"},hn="dropdown-menu",cn="active",un="disabled",fn="fade",dn="show",_n=".dropdown",gn=".nav, .list-group",mn=".active",pn="> li > .active",vn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',En=".dropdown-toggle",yn="> .dropdown-menu .active",Tn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&rn(this._element).hasClass(cn)||rn(this._element).hasClass(un))){var t,i,e=rn(this._element).closest(gn)[0],r=Cn.getSelectorFromElement(this._element);if(e){var s="UL"===e.nodeName?pn:mn;i=(i=rn.makeArray(rn(e).find(s)))[i.length-1]}var o=rn.Event(ln.HIDE,{relatedTarget:this._element}),a=rn.Event(ln.SHOW,{relatedTarget:i});if(i&&rn(i).trigger(o),rn(this._element).trigger(a),!a.isDefaultPrevented()&&!o.isDefaultPrevented()){r&&(t=rn(r)[0]),this._activate(this._element,e);var l=function(){var t=rn.Event(ln.HIDDEN,{relatedTarget:n._element}),e=rn.Event(ln.SHOWN,{relatedTarget:i});rn(i).trigger(t),rn(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){rn.removeData(this._element,sn),this._element=null},t._activate=function(t,e,n){var i=this,r=("UL"===e.nodeName?rn(e).find(pn):rn(e).children(mn))[0],s=n&&r&&rn(r).hasClass(fn),o=function(){return i._transitionComplete(t,r,n)};if(r&&s){var a=Cn.getTransitionDurationFromElement(r);rn(r).one(Cn.TRANSITION_END,o).emulateTransitionEnd(a)}else o()},t._transitionComplete=function(t,e,n){if(e){rn(e).removeClass(dn+" "+cn);var i=rn(e.parentNode).find(yn)[0];i&&rn(i).removeClass(cn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(rn(t).addClass(cn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),Cn.reflow(t),rn(t).addClass(dn),t.parentNode&&rn(t.parentNode).hasClass(hn)){var r=rn(t).closest(_n)[0];r&&rn(r).find(En).addClass(cn),t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=rn(this),e=t.data(sn);if(e||(e=new i(this),t.data(sn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},o(i,null,[{key:"VERSION",get:function(){return"4.1.0"}}]),i}(),rn(document).on(ln.CLICK_DATA_API,vn,function(t){t.preventDefault(),Tn._jQueryInterface.call(rn(this),"show")}),rn.fn.tab=Tn._jQueryInterface,rn.fn.tab.Constructor=Tn,rn.fn.tab.noConflict=function(){return rn.fn.tab=an,Tn._jQueryInterface},Tn);!function(t){if("undefined"==typeof t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||4<=e[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=Cn,t.Alert=In,t.Button=An,t.Carousel=Dn,t.Collapse=bn,t.Dropdown=Sn,t.Modal=wn,t.Popover=On,t.Scrollspy=kn,t.Tab=Pn,t.Tooltip=Nn,Object.defineProperty(t,"__esModule",{value:!0})});


/*!
 * Clipboard.js v2.0.0
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ClipboardJS=t():e.ClipboardJS=t()}(this,function(){return function(n){function r(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}var i={};return r.m=n,r.c=i,r.i=function(e){return e},r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(n,r,i){var o,a,s;!function(e,t){a=[n,i(7)],o=t,void 0!==(s="function"==typeof o?o.apply(r,a):o)&&(n.exports=s)}(0,function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(e){return e&&e.__esModule?e:{default:e}}(t),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),a=function(){function t(e){n(this,t),this.resolveOptions(e),this.initSelection()}return o(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,r.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,r.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":i(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),t}();e.exports=a})},function(e,t,n){function r(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!s.string(t))throw new TypeError("Second argument must be a String");if(!s.fn(n))throw new TypeError("Third argument must be a Function");if(s.node(e))return i(e,t,n);if(s.nodeList(e))return o(e,t,n);if(s.string(e))return a(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function i(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function o(e,t,n){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}function a(e,t,n){return l(document.body,e,t,n)}var s=n(6),l=n(5);e.exports=r},function(e,t){function n(){}n.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){function r(){i.off(e,r),t.apply(n,arguments)}var i=this;return r._=t,this.on(e,r,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,i=n.length;for(r;r<i;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],i=[];if(r&&t)for(var o=0,a=r.length;o<a;o++)r[o].fn!==t&&r[o].fn._!==t&&i.push(r[o]);return i.length?n[e]=i:delete n[e],this}},e.exports=n},function(n,r,i){var o,a,s;!function(e,t){a=[n,i(0),i(2),i(1)],o=t,void 0!==(s="function"==typeof o?o.apply(r,a):o)&&(n.exports=s)}(0,function(e,t,n,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}var c=i(t),u=i(n),h=i(r),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),A=function(e){function r(e,t){o(this,r);var n=a(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return n.resolveOptions(t),n.listenClick(e),n}return s(r,e),f(r,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===d(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=(0,h.default)(e,"click",function(e){return t.onClick(e)})}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new c.default({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return l("action",e)}},{key:"defaultTarget",value:function(e){var t=l("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return l("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach(function(e){n=n&&!!document.queryCommandSupported(e)}),n}}]),r}(u.default);e.exports=A})},function(e,t){function n(e,t){for(;e&&e.nodeType!==r;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}var r=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var i=Element.prototype;i.matches=i.matchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector||i.webkitMatchesSelector}e.exports=n},function(e,t,n){function o(e,t,n,r,i){var o=a.apply(this,arguments);return e.addEventListener(n,o,i),{destroy:function(){e.removeEventListener(n,o,i)}}}function r(e,t,n,r,i){return"function"==typeof e.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,function(e){return o(e,t,n,r,i)}))}function a(t,n,e,r){return function(e){e.delegateTarget=i(e.target,n),e.delegateTarget&&r.call(t,e)}}var i=n(4);e.exports=r},function(e,n){n.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},n.nodeList=function(e){var t=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===t||"[object HTMLCollection]"===t)&&"length"in e&&(0===e.length||n.node(e[0]))},n.string=function(e){return"string"==typeof e||e instanceof String},n.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},function(e,t){function n(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var r=window.getSelection(),i=document.createRange();i.selectNodeContents(e),r.removeAllRanges(),r.addRange(i),t=r.toString()}return t}e.exports=n}])});

/*!

Holder - client side image placeholders
Version 2.9.4+cabil
© 2016 Ivan Malopinsky - http://imsky.co

Site:     http://holderjs.com
Issues:   https://github.com/imsky/holder/issues
License:  MIT

*/
!function(i){if(i.document){var o=i.document;o.querySelectorAll||(o.querySelectorAll=function(e){var t,n=o.createElement("style"),r=[];for(o.documentElement.firstChild.appendChild(n),o._qsa=[],n.styleSheet.cssText=e+"{x-qsa:expression(document._qsa && document._qsa.push(this))}",i.scrollBy(0,0),n.parentNode.removeChild(n);o._qsa.length;)t=o._qsa.shift(),t.style.removeAttribute("x-qsa"),r.push(t);return o._qsa=null,r}),o.querySelector||(o.querySelector=function(e){var t=o.querySelectorAll(e);return t.length?t[0]:null}),o.getElementsByClassName||(o.getElementsByClassName=function(e){return e=String(e).replace(/^|\s+/g,"."),o.querySelectorAll(e)}),Object.keys||(Object.keys=function(e){if(e!==Object(e))throw TypeError("Object.keys called on non-object");var t,n=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.push(t);return n}),Array.prototype.forEach||(Array.prototype.forEach=function(e){if(void 0===this||null===this)throw TypeError();var t=Object(this),n=t.length>>>0;if("function"!=typeof e)throw TypeError();var r,i=arguments[1];for(r=0;r<n;r++)r in t&&e.call(i,t[r],r,t)}),function(e){var u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";e.atob=e.atob||function(e){e=String(e);var t,n=0,r=[],i=0,o=0;if(e=e.replace(/\s/g,""),e.length%4===0&&(e=e.replace(/=+$/,"")),e.length%4===1)throw Error("InvalidCharacterError");if(/[^+\/0-9A-Za-z]/.test(e))throw Error("InvalidCharacterError");for(;n<e.length;)t=u.indexOf(e.charAt(n)),i=i<<6|t,o+=6,24===o&&(r.push(String.fromCharCode(i>>16&255)),r.push(String.fromCharCode(i>>8&255)),r.push(String.fromCharCode(255&i)),o=0,i=0),n+=1;return 12===o?(i>>=4,r.push(String.fromCharCode(255&i))):18===o&&(i>>=2,r.push(String.fromCharCode(i>>8&255)),r.push(String.fromCharCode(255&i))),r.join("")},e.btoa=e.btoa||function(e){e=String(e);var t,n,r,i,o,a,s,l=0,c=[];if(/[^\x00-\xFF]/.test(e))throw Error("InvalidCharacterError");for(;l<e.length;)t=e.charCodeAt(l++),n=e.charCodeAt(l++),r=e.charCodeAt(l++),i=t>>2,o=(3&t)<<4|n>>4,a=(15&n)<<2|r>>6,s=63&r,l===e.length+2?(a=64,s=64):l===e.length+1&&(s=64),c.push(u.charAt(i),u.charAt(o),u.charAt(a),u.charAt(s));return c.join("")}}(i),Object.prototype.hasOwnProperty||(Object.prototype.hasOwnProperty=function(e){var t=this.__proto__||this.constructor.prototype;return e in this&&(!(e in t)||t[e]!==this[e])}),function(){if("performance"in i==!1&&(i.performance={}),Date.now=Date.now||function(){return(new Date).getTime()},"now"in i.performance==!1){var e=Date.now();performance.timing&&performance.timing.navigationStart&&(e=performance.timing.navigationStart),i.performance.now=function(){return Date.now()-e}}}(),i.requestAnimationFrame||(i.webkitRequestAnimationFrame&&i.webkitCancelAnimationFrame?!function(t){t.requestAnimationFrame=function(e){return webkitRequestAnimationFrame(function(){e(t.performance.now())})},t.cancelAnimationFrame=t.webkitCancelAnimationFrame}(i):i.mozRequestAnimationFrame&&i.mozCancelAnimationFrame?!function(t){t.requestAnimationFrame=function(e){return mozRequestAnimationFrame(function(){e(t.performance.now())})},t.cancelAnimationFrame=t.mozCancelAnimationFrame}(i):!function(t){t.requestAnimationFrame=function(e){return t.setTimeout(e,1e3/60)},t.cancelAnimationFrame=t.clearTimeout}(i))}}(this),function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Holder=t():e.Holder=t()}(this,function(){return function(n){function r(e){if(i[e])return i[e].exports;var t=i[e]={exports:{},id:e,loaded:!1};return n[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}var i={};return r.m=n,r.c=i,r.p="",r(0)}([function(e,t,n){e.exports=n(1)},function(L,e,F){(function(h){function o(e,t,n,r){var i=d(n.substr(n.lastIndexOf(e.domain)),e);i&&f({mode:null,el:r,flags:i,engineSettings:t})}function d(e,t){var n={theme:E(O.settings.themes.gray,null),stylesheets:t.stylesheets,instanceOptions:t},r=e.indexOf("?"),i=[e];r!==-1&&(i=[e.slice(0,r),e.slice(r+1)]);var o=i[0].split("/");n.holderURL=e;var a=o[1],s=a.match(/([\d]+p?)x([\d]+p?)/);if(!s)return!1;if(n.fluid=a.indexOf("p")!==-1,n.dimensions={width:s[1].replace("p","%"),height:s[2].replace("p","%")},2===i.length){var l=A.parse(i[1]);if(b.truthy(l.ratio)){n.fluid=!0;var c=parseFloat(n.dimensions.width.replace("%","")),u=parseFloat(n.dimensions.height.replace("%",""));u=Math.floor(100*(u/c)),c=100,n.dimensions.width=c+"%",n.dimensions.height=u+"%"}if(n.auto=b.truthy(l.auto),l.bg&&(n.theme.bg=b.parseColor(l.bg)),l.fg&&(n.theme.fg=b.parseColor(l.fg)),l.bg&&!l.fg&&(n.autoFg=!0),l.theme&&n.instanceOptions.themes.hasOwnProperty(l.theme)&&(n.theme=E(n.instanceOptions.themes[l.theme],null)),l.text&&(n.text=l.text),l.textmode&&(n.textmode=l.textmode),l.size&&(n.size=l.size),l.font&&(n.font=l.font),l.align&&(n.align=l.align),l.lineWrap&&(n.lineWrap=l.lineWrap),n.nowrap=b.truthy(l.nowrap),n.outline=b.truthy(l.outline),b.truthy(l.random)){O.vars.cache.themeKeys=O.vars.cache.themeKeys||Object.keys(n.instanceOptions.themes);var h=O.vars.cache.themeKeys[0|Math.random()*O.vars.cache.themeKeys.length];n.theme=E(n.instanceOptions.themes[h],null)}}return n}function f(e){var t=e.mode,n=e.el,r=e.flags,i=e.engineSettings,o=r.dimensions,a=r.theme,s=o.width+"x"+o.height;t=null==t?r.fluid?"fluid":"image":t;var l=/holder_([a-z]+)/g,c=!1;if(null!=r.text&&(a.text=r.text,"object"===n.nodeName.toLowerCase())){for(var u=a.text.split("\\n"),h=0;h<u.length;h++)u[h]=b.encodeHtmlEntity(u[h]);a.text=u.join("\\n")}if(a.text){var d=a.text.match(l);null!==d&&d.forEach(function(e){"holder_dimensions"===e&&(a.text=a.text.replace(e,s))})}var f=r.holderURL,A=E(i,null);if(r.font&&(a.font=r.font,!A.noFontFallback&&"img"===n.nodeName.toLowerCase()&&O.setup.supportsCanvas&&"svg"===A.renderer&&(A=E(A,{renderer:"canvas"}))),r.font&&"canvas"==A.renderer&&(A.reRender=!0),"background"==t)null==n.getAttribute("data-background-src")&&x.setAttr(n,{"data-background-src":f});else{var p={};p[O.vars.dataAttr]=f,x.setAttr(n,p)}r.theme=a,n.holderData={flags:r,engineSettings:A},"image"!=t&&"fluid"!=t||x.setAttr(n,{alt:a.text?c?a.text:a.text+" ["+s+"]":s});var g={mode:t,el:n,holderSettings:{dimensions:o,theme:a,flags:r},engineSettings:A};"image"==t?(r.auto||(n.style.width=o.width+"px",n.style.height=o.height+"px"),"html"==A.renderer?n.style.backgroundColor=a.bg:(m(g),"exact"==r.textmode&&(n.holderData.resizeUpdate=!0,O.vars.resizableImages.push(n),v(n)))):"background"==t&&"html"!=A.renderer?m(g):"fluid"==t&&(n.holderData.resizeUpdate=!0,"%"==o.height.slice(-1)?n.style.height=o.height:null!=r.auto&&r.auto||(n.style.height=o.height+"px"),"%"==o.width.slice(-1)?n.style.width=o.width:null!=r.auto&&r.auto||(n.style.width=o.width+"px"),"inline"!=n.style.display&&""!==n.style.display&&"none"!=n.style.display||(n.style.display="block"),y(n),"html"==A.renderer?n.style.backgroundColor=a.bg:(O.vars.resizableImages.push(n),v(n)))}function m(t){function n(){var e=null;switch(a.renderer){case"canvas":e=g(l,t);break;case"svg":e=p(l,t);break;default:throw"Holder: invalid renderer: "+a.renderer}return e}var e=null,r=t.mode,i=t.el,o=t.holderSettings,a=t.engineSettings;switch(a.renderer){case"svg":if(!O.setup.supportsSVG)return;break;case"canvas":if(!O.setup.supportsCanvas)return;break;default:return}var s={width:o.dimensions.width,height:o.dimensions.height,theme:o.theme,flags:o.flags},l=c(s);if(e=n(),null==e)throw"Holder: couldn't render placeholder";"background"==r?(i.style.backgroundImage="url("+e+")",a.noBackgroundSize||(i.style.backgroundSize=s.width+"px "+s.height+"px")):("img"===i.nodeName.toLowerCase()?x.setAttr(i,{src:e}):"object"===i.nodeName.toLowerCase()&&x.setAttr(i,{data:e,type:"image/svg+xml"}),a.reRender&&h.setTimeout(function(){var e=n();if(null==e)throw"Holder: couldn't render placeholder";"img"===i.nodeName.toLowerCase()?x.setAttr(i,{src:e}):"object"===i.nodeName.toLowerCase()&&x.setAttr(i,{data:e,type:"image/svg+xml"})},150)),x.setAttr(i,{"data-holder-rendered":!0})}function c(e){function t(e,t,n,r){t.width=n,t.height=r,e.width=Math.max(e.width,t.width),e.height+=t.height}var n=O.defaults.size;switch(parseFloat(e.theme.size)?n=e.theme.size:parseFloat(e.flags.size)&&(n=e.flags.size),e.font={family:e.theme.font?e.theme.font:"Arial, Helvetica, Open Sans, sans-serif",size:C(e.width,e.height,n,O.defaults.scale),units:e.theme.units?e.theme.units:O.defaults.units,weight:e.theme.fontweight?e.theme.fontweight:"bold"},e.text=e.theme.text||Math.floor(e.width)+"x"+Math.floor(e.height),e.noWrap=e.theme.nowrap||e.flags.nowrap,e.align=e.theme.align||e.flags.align||"center",e.flags.textmode){case"literal":e.text=e.flags.dimensions.width+"x"+e.flags.dimensions.height;break;case"exact":if(!e.flags.exactDimensions)break;e.text=Math.floor(e.flags.exactDimensions.width)+"x"+Math.floor(e.flags.exactDimensions.height)}var r=e.flags.lineWrap||O.setup.lineWrapRatio,i=e.width*r,o=i,a=new k({width:e.width,height:e.height}),s=a.Shape,l=new s.Rect("holderBg",{fill:e.theme.bg});if(l.resize(e.width,e.height),a.root.add(l),e.flags.outline){var c=new T(l.properties.fill);c=c.lighten(c.lighterThan("7f7f7f")?-.1:.1),l.properties.outline={fill:c.toHex(!0),width:2}}var u=e.theme.fg;if(e.flags.autoFg){var h=new T(l.properties.fill),d=new T("fff"),f=new T("000",{alpha:.285714});u=h.blendAlpha(h.lighterThan("7f7f7f")?f:d).toHex(!0)}var A=new s.Group("holderTextGroup",{text:e.text,align:e.align,font:e.font,fill:u});A.moveTo(null,null,1),a.root.add(A);var p=A.textPositionData=M(a);if(!p)throw"Holder: staging fallback not supported yet.";A.properties.leading=p.boundingBox.height;var g=null,m=null;if(p.lineCount>1){var v,y=0,b=0,w=0;m=new s.Group("line"+w),"left"!==e.align&&"right"!==e.align||(o=e.width*(1-2*(1-r)));for(var x=0;x<p.words.length;x++){var E=p.words[x];g=new s.Text(E.text);var S="\\n"==E.text;!e.noWrap&&(y+E.width>=o||S===!0)&&(t(A,m,y,A.properties.leading),A.add(m),y=0,b+=A.properties.leading,w+=1,m=new s.Group("line"+w),m.y=b),S!==!0&&(g.moveTo(y,0),y+=p.spaceWidth+E.width,m.add(g))}if(t(A,m,y,A.properties.leading),A.add(m),"left"===e.align)A.moveTo(e.width-i,null,null);else if("right"===e.align){for(v in A.children)m=A.children[v],m.moveTo(e.width-m.width,null,null);A.moveTo(0-(e.width-i),null,null)}else{for(v in A.children)m=A.children[v],m.moveTo((A.width-m.width)/2,null,null);A.moveTo((e.width-A.width)/2,null,null)}A.moveTo(null,(e.height-A.height)/2,null),(e.height-A.height)/2<0&&A.moveTo(null,0,null)}else g=new s.Text(e.text),m=new s.Group("line0"),m.add(g),A.add(m),"left"===e.align?A.moveTo(e.width-i,null,null):"right"===e.align?A.moveTo(0-(e.width-i),null,null):A.moveTo((e.width-p.boundingBox.width)/2,null,null),A.moveTo(null,(e.height-p.boundingBox.height)/2,null);return a}function C(e,t,n,r){var i=parseInt(e,10),o=parseInt(t,10),a=Math.max(i,o),s=Math.min(i,o),l=.8*Math.min(s,a*r);return Math.round(Math.max(n,l))}function v(e){var t;t=null==e||null==e.nodeType?O.vars.resizableImages:[e];for(var n=0,r=t.length;n<r;n++){var i=t[n];if(i.holderData){var o=i.holderData.flags,a=S(i);if(a){if(!i.holderData.resizeUpdate)continue;if(o.fluid&&o.auto){var s=i.holderData.fluidConfig;switch(s.mode){case"width":a.height=a.width/s.ratio;break;case"height":a.width=a.height*s.ratio}}var l={mode:"image",holderSettings:{dimensions:a,theme:o.theme,flags:o},el:i,engineSettings:i.holderData.engineSettings};"exact"==o.textmode&&(o.exactDimensions=a,l.holderSettings.dimensions=o.dimensions),m(l)}else u(i)}}}function y(e){if(e.holderData){var t=S(e);if(t){var n=e.holderData.flags,r={fluidHeight:"%"==n.dimensions.height.slice(-1),fluidWidth:"%"==n.dimensions.width.slice(-1),mode:null,initialDimensions:t};r.fluidWidth&&!r.fluidHeight?(r.mode="width",r.ratio=r.initialDimensions.width/parseFloat(n.dimensions.height)):!r.fluidWidth&&r.fluidHeight&&(r.mode="height",r.ratio=parseFloat(n.dimensions.width)/r.initialDimensions.height),e.holderData.fluidConfig=r}else u(e)}}function r(){var t,n=[],e=Object.keys(O.vars.invisibleImages);e.forEach(function(e){t=O.vars.invisibleImages[e],S(t)&&"img"==t.nodeName.toLowerCase()&&(n.push(t),delete O.vars.invisibleImages[e])}),n.length&&s.run({images:n}),setTimeout(function(){h.requestAnimationFrame(r)},10)}function e(){O.vars.visibilityCheckStarted||(h.requestAnimationFrame(r),O.vars.visibilityCheckStarted=!0)}function u(e){e.holderData.invisibleId||(O.vars.invisibleId+=1,O.vars.invisibleImages["i"+O.vars.invisibleId]=e,e.holderData.invisibleId=O.vars.invisibleId)}function t(e){O.vars.debounceTimer||e.call(this),O.vars.debounceTimer&&h.clearTimeout(O.vars.debounceTimer),O.vars.debounceTimer=h.setTimeout(function(){O.vars.debounceTimer=null,e.call(this)},O.setup.debounce)}function n(){t(function(){v(null)})}var i=F(2),A=F(3),k=F(6),b=F(7),w=F(8),x=F(9),T=F(10),a=F(11),p=F(12),g=F(15),E=b.extend,S=b.dimensionCheck,j=a.svg_ns,s={version:a.version,addTheme:function(e,t){return null!=e&&null!=t&&(O.settings.themes[e]=t),delete O.vars.cache.themeKeys,this},addImage:function(r,e){var t=x.getNodeArray(e);return t.forEach(function(e){var t=x.newEl("img"),n={};n[O.setup.dataAttr]=r,x.setAttr(t,n),e.appendChild(t)}),this},setResizeUpdate:function(e,t){e.holderData&&(e.holderData.resizeUpdate=!!t,e.holderData.resizeUpdate&&v(e))},run:function(e){e=e||{};var c={},u=E(O.settings,e);O.vars.preempted=!0,O.vars.dataAttr=u.dataAttr||O.setup.dataAttr,c.renderer=u.renderer?u.renderer:O.setup.renderer,O.setup.renderers.join(",").indexOf(c.renderer)===-1&&(c.renderer=O.setup.supportsSVG?"svg":O.setup.supportsCanvas?"canvas":"html");var t=x.getNodeArray(u.images),n=x.getNodeArray(u.bgnodes),r=x.getNodeArray(u.stylenodes),i=x.getNodeArray(u.objects);return c.stylesheets=[],c.svgXMLStylesheet=!0,c.noFontFallback=!!u.noFontFallback,c.noBackgroundSize=!!u.noBackgroundSize,r.forEach(function(e){if(e.attributes.rel&&e.attributes.href&&"stylesheet"==e.attributes.rel.value){var t=e.attributes.href.value,n=x.newEl("a");n.href=t;var r=n.protocol+"//"+n.host+n.pathname+n.search;c.stylesheets.push(r)}}),n.forEach(function(e){if(h.getComputedStyle){var t=h.getComputedStyle(e,null).getPropertyValue("background-image"),n=e.getAttribute("data-background-src"),r=n||t,i=null,o=u.domain+"/",a=r.indexOf(o);if(0===a)i=r;else if(1===a&&"?"===r[0])i=r.slice(1);else{var s=r.substr(a).match(/([^\"]*)"?\)/);if(null!==s)i=s[1];else if(0===r.indexOf("url("))throw"Holder: unable to parse background URL: "+r}if(i){var l=d(i,u);l&&f({mode:"background",el:e,flags:l,engineSettings:c})}}}),i.forEach(function(e){var t={};try{t.data=e.getAttribute("data"),t.dataSrc=e.getAttribute(O.vars.dataAttr)}catch(e){}var n=null!=t.data&&0===t.data.indexOf(u.domain),r=null!=t.dataSrc&&0===t.dataSrc.indexOf(u.domain);n?o(u,c,t.data,e):r&&o(u,c,t.dataSrc,e)}),t.forEach(function(e){var t={};try{t.src=e.getAttribute("src"),t.dataSrc=e.getAttribute(O.vars.dataAttr),t.rendered=e.getAttribute("data-holder-rendered")}catch(e){}var n=null!=t.src,r=null!=t.dataSrc&&0===t.dataSrc.indexOf(u.domain),i=null!=t.rendered&&"true"==t.rendered;n?0===t.src.indexOf(u.domain)?o(u,c,t.src,e):r&&(i?o(u,c,t.dataSrc,e):!function(e,t,n,r,i){b.imageExists(e,function(e){e||o(t,n,r,i)})}(t.src,u,c,t.dataSrc,e)):r&&o(u,c,t.dataSrc,e)}),this}},O={settings:{domain:"holder.js",images:"img",objects:"object",bgnodes:"body .holderjs",stylenodes:"head link.holderjs",themes:{gray:{bg:"#EEEEEE",fg:"#AAAAAA"},social:{bg:"#3a5a97",fg:"#FFFFFF"},industrial:{bg:"#434A52",fg:"#C2F200"},sky:{bg:"#0D8FDB",fg:"#FFFFFF"},vine:{bg:"#39DBAC",fg:"#1E292C"},lava:{bg:"#F8591A",fg:"#1C2846"}}},defaults:{size:10,units:"pt",scale:1/16}},M=function(){var g=null,m=null,v=null;return function(e){var t=e.root;if(O.setup.supportsSVG){var n=!1,r=function(e){return document.createTextNode(e)};null!=g&&g.parentNode===document.body||(n=!0),g=w.initSVG(g,t.properties.width,t.properties.height),g.style.display="block",n&&(m=x.newEl("text",j),v=r(null),x.setAttr(m,{x:0}),m.appendChild(v),g.appendChild(m),document.body.appendChild(g),g.style.visibility="hidden",g.style.position="absolute",g.style.top="-100%",g.style.left="-100%");var i=t.children.holderTextGroup,o=i.properties;x.setAttr(m,{y:o.font.size,style:b.cssProps({"font-weight":o.font.weight,"font-size":o.font.size+o.font.units,"font-family":o.font.family})}),v.nodeValue=o.text;var a=m.getBBox(),s=Math.ceil(a.width/t.properties.width),l=o.text.split(" "),c=o.text.match(/\\n/g);s+=null==c?0:c.length,v.nodeValue=o.text.replace(/[ ]+/g,"");var u=m.getComputedTextLength(),h=a.width-u,d=Math.round(h/Math.max(1,l.length-1)),f=[];if(s>1){v.nodeValue="";for(var A=0;A<l.length;A++)if(0!==l[A].length){v.nodeValue=b.decodeHtmlEntity(l[A]);var p=m.getBBox();f.push({text:l[A],width:p.width})}}return g.style.display="none",{spaceWidth:d,lineCount:s,boundingBox:a,words:f}}return!1}}();for(var l in O.flags)O.flags.hasOwnProperty(l)&&(O.flags[l].match=function(e){return e.match(this.regex)});O.setup={renderer:"html",debounce:100,ratio:1,supportsCanvas:!1,supportsSVG:!1,lineWrapRatio:.9,dataAttr:"data-src",renderers:["html","canvas","svg"]},O.vars={preempted:!1,resizableImages:[],invisibleImages:{},invisibleId:0,visibilityCheckStarted:!1,debounceTimer:null,cache:{}},function(){var e=x.newEl("canvas");e.getContext&&e.toDataURL("image/png").indexOf("data:image/png")!=-1&&(O.setup.renderer="canvas",O.setup.supportsCanvas=!0),document.createElementNS&&document.createElementNS(j,"svg").createSVGRect&&(O.setup.renderer="svg",O.setup.supportsSVG=!0)}(),e(),i&&i(function(){O.vars.preempted||s.run(),h.addEventListener?(h.addEventListener("resize",n,!1),h.addEventListener("orientationchange",n,!1)):h.attachEvent("onresize",n),"object"==typeof h.Turbolinks&&h.document.addEventListener("page:change",function(){s.run()})}),L.exports=s}).call(e,function(){return this}())},function(e,t){function n(e){function n(e){if(!w){if(!a.body)return i(n);for(w=!0;e=x.shift();)i(e)}}function t(e){(y||e.type===l||a[d]===h)&&(r(),n())}function r(){y?(a[v](g,t,c),e[v](l,t,c)):(a[A](m,t),e[A](u,t))}function i(e,t){setTimeout(e,+t>=0?t:1)}function o(e){w?i(e):x.push(e)}null==document.readyState&&document.addEventListener&&(document.addEventListener("DOMContentLoaded",function e(){document.removeEventListener("DOMContentLoaded",e,!1),document.readyState="complete"},!1),document.readyState="loading");var a=e.document,s=a.documentElement,l="load",c=!1,u="on"+l,h="complete",d="readyState",f="attachEvent",A="detachEvent",p="addEventListener",g="DOMContentLoaded",m="onreadystatechange",v="removeEventListener",y=p in a,b=c,w=c,x=[];if(a[d]===h)i(n);else if(y)a[p](g,t,c),e[p](l,t,c);else{a[f](m,t),e[f](u,t);try{b=null==e.frameElement&&s}catch(e){}b&&b.doScroll&&!function t(){if(!w){try{b.doScroll("left")}catch(e){return i(t,50)}r(),n()}}()}return o.version="1.4.0",o.isReady=function(){return w},o}e.exports="undefined"!=typeof window&&n(window)},function(e,t,n){var o=encodeURIComponent,c=decodeURIComponent,u=n(4),a=n(5),h=/(\w+)\[(\d+)\]/,d=/\w+\.\w+/;t.parse=function(e){if("string"!=typeof e)return{};if(e=u(e),""===e)return{};"?"===e.charAt(0)&&(e=e.slice(1));for(var t={},n=e.split("&"),r=0;r<n.length;r++){var i,o,a,s=n[r].split("="),l=c(s[0]);if(i=h.exec(l))t[i[1]]=t[i[1]]||[],t[i[1]][i[2]]=c(s[1]);else if(i=d.test(l)){for(i=l.split("."),o=t;i.length;)if(a=i.shift(),a.length){if(o[a]){if(o[a]&&"object"!=typeof o[a])break}else o[a]={};i.length||(o[a]=c(s[1])),o=o[a]}}else t[s[0]]=null==s[1]?"":c(s[1])}return t},t.stringify=function(e){if(!e)return"";var t=[];for(var n in e){var r=e[n];if("array"!=a(r))t.push(o(n)+"="+o(e[n]));else for(var i=0;i<r.length;++i)t.push(o(n+"["+i+"]")+"="+o(r[i]))}return t.join("&")}},function(e,t){function n(e){return e.replace(/^\s*|\s*$/g,"")}t=e.exports=n,t.left=function(e){return e.replace(/^\s*/,"")},t.right=function(e){return e.replace(/\s*$/,"")}},function(e,t){function n(e){return!(null==e||!(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)))}var r=Object.prototype.toString;e.exports=function(e){switch(r.call(e)){case"[object Date]":return"date";case"[object RegExp]":return"regexp";case"[object Arguments]":return"arguments";case"[object Array]":return"array";case"[object Error]":return"error"}return null===e?"null":void 0===e?"undefined":e!==e?"nan":e&&1===e.nodeType?"element":n(e)?"buffer":(e=e.valueOf?e.valueOf():Object.prototype.valueOf.apply(e),typeof e)}},function(e,t){var n=function(e){function n(e,t){for(var n in t)e[n]=t[n];return e}var t=1,r=function(e){t++,this.parent=null,this.children={},this.id=t,this.name="n"+t,"undefined"!=typeof e&&(this.name=e),this.x=this.y=this.z=0,this.width=this.height=0};r.prototype.resize=function(e,t){null!=e&&(this.width=e),null!=t&&(this.height=t)},r.prototype.moveTo=function(e,t,n){this.x=null!=e?e:this.x,this.y=null!=t?t:this.y,this.z=null!=n?n:this.z},r.prototype.add=function(e){var t=e.name;if("undefined"!=typeof this.children[t])throw"SceneGraph: child already exists: "+t;this.children[t]=e,e.parent=this};var i=function(){r.call(this,"root"),this.properties=e};i.prototype=new r;var o=function(e,t){if(r.call(this,e),this.properties={fill:"#000000"},"undefined"!=typeof t)n(this.properties,t);else if("undefined"!=typeof e&&"string"!=typeof e)throw"SceneGraph: invalid node name"};o.prototype=new r;var a=function(){o.apply(this,arguments),this.type="group"};a.prototype=new o;var s=function(){o.apply(this,arguments),this.type="rect"};s.prototype=new o;var l=function(e){o.call(this),this.type="text",this.properties.text=e};l.prototype=new o;var c=new i;return this.Shape={Rect:s,Text:l,Group:a},this.root=c,this};e.exports=n},function(e,t){(function(i){t.extend=function(e,t){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=e[r]);if(null!=t)for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);return n},t.cssProps=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n+":"+e[n]);return t.join(";")},t.encodeHtmlEntity=function(e){for(var t=[],n=0,r=e.length-1;r>=0;r--)n=e.charCodeAt(r),n>128?t.unshift(["&#",n,";"].join("")):t.unshift(e[r]);return t.join("")},t.imageExists=function(e,t){var n=new Image;n.onerror=function(){t.call(this,!1)},n.onload=function(){t.call(this,!0)},n.src=e},t.decodeHtmlEntity=function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(t)})},t.dimensionCheck=function(e){var t={height:e.clientHeight,width:e.clientWidth};return!(!t.height||!t.width)&&t},t.truthy=function(e){return"string"==typeof e?"true"===e||"yes"===e||"1"===e||"on"===e||"✓"===e:!!e},t.parseColor=function(e){var t,n=/(^(?:#?)[0-9a-f]{6}$)|(^(?:#?)[0-9a-f]{3}$)/i,r=/^rgb\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,i=/^rgba\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0\.\d{1,}|1)\)$/,o=e.match(n);return null!==o?(t=o[1]||o[2],"#"!==t[0]?"#"+t:t):(o=e.match(r),null!==o?t="rgb("+o.slice(1).join(",")+")":(o=e.match(i),null!==o?t="rgba("+o.slice(1).join(",")+")":null))},t.canvasRatio=function(){var e=1,t=1;if(i.document){var n=i.document.createElement("canvas");if(n.getContext){var r=n.getContext("2d");e=i.devicePixelRatio||1,t=r.webkitBackingStorePixelRatio||r.mozBackingStorePixelRatio||r.msBackingStorePixelRatio||r.oBackingStorePixelRatio||r.backingStorePixelRatio||1}}return e/t}}).call(t,function(){return this}())},function(e,t,n){(function(c){var u=n(9),s="http://www.w3.org/2000/svg",l=8;t.initSVG=function(e,t,n){var r,i,o=!1;e&&e.querySelector?(i=e.querySelector("style"),null===i&&(o=!0)):(e=u.newEl("svg",s),o=!0),o&&(r=u.newEl("defs",s),i=u.newEl("style",s),u.setAttr(i,{type:"text/css"}),r.appendChild(i),e.appendChild(r)),e.webkitMatchesSelector&&e.setAttribute("xmlns",s);for(var a=0;a<e.childNodes.length;a++)e.childNodes[a].nodeType===l&&e.removeChild(e.childNodes[a]);for(;i.childNodes.length;)i.removeChild(i.childNodes[0]);return u.setAttr(e,{width:t,height:n,viewBox:"0 0 "+t+" "+n,preserveAspectRatio:"none"}),e},t.svgStringToDataURI=function(){var n="data:image/svg+xml;charset=UTF-8,",r="data:image/svg+xml;charset=UTF-8;base64,";return function(e,t){return t?r+btoa(c.unescape(encodeURIComponent(e))):n+encodeURIComponent(e)}}(),t.serializeSVG=function(e,t){if(c.XMLSerializer){var n=new XMLSerializer,r="",i=t.stylesheets;if(t.svgXMLStylesheet){for(var o=u.createXML(),a=i.length-1;a>=0;a--){var s=o.createProcessingInstruction("xml-stylesheet",'href="'+i[a]+'" rel="stylesheet"');o.insertBefore(s,o.firstChild)}o.removeChild(o.documentElement),r=n.serializeToString(o)}var l=n.serializeToString(e);return l=l.replace(/\&amp;(\#[0-9]{2,}\;)/g,"&$1"),r+l}}}).call(t,function(){return this}())},function(e,t){(function(n){t.newEl=function(e,t){if(n.document)return null==t?n.document.createElement(e):n.document.createElementNS(t,e)},t.setAttr=function(e,t){for(var n in t)e.setAttribute(n,t[n])},t.createXML=function(){if(n.DOMParser)return(new DOMParser).parseFromString("<xml />","application/xml")},t.getNodeArray=function(e){var t=null;return"string"==typeof e?t=document.querySelectorAll(e):n.NodeList&&e instanceof n.NodeList?t=e:n.Node&&e instanceof n.Node?t=[e]:n.HTMLCollection&&e instanceof n.HTMLCollection?t=e:e instanceof Array?t=e:null===e&&(t=[]),t=Array.prototype.slice.call(t)}}).call(t,function(){return this}())},function(e,t){var s=function(e,t){"string"==typeof e&&(this.original=e,"#"===e.charAt(0)&&(e=e.slice(1)),/[^a-f0-9]+/i.test(e)||(3===e.length&&(e=e.replace(/./g,"$&$&")),6===e.length&&(this.alpha=1,t&&t.alpha&&(this.alpha=t.alpha),this.set(parseInt(e,16)))))};s.rgb2hex=function(e,t,n){function r(e){var t=(0|e).toString(16);return e<16&&(t="0"+t),t}return[e,t,n].map(r).join("")},s.hsl2rgb=function(e,t,n){var r=e/60,i=(1-Math.abs(2*n-1))*t,o=i*(1-Math.abs(parseInt(r)%2-1)),a=n-i/2,s=0,l=0,c=0;return r>=0&&r<1?(s=i,l=o):r>=1&&r<2?(s=o,l=i):r>=2&&r<3?(l=i,c=o):r>=3&&r<4?(l=o,c=i):r>=4&&r<5?(s=o,c=i):r>=5&&r<6&&(s=i,c=o),s+=a,l+=a,c+=a,s=parseInt(255*s),l=parseInt(255*l),c=parseInt(255*c),[s,l,c]},s.prototype.set=function(e){this.raw=e;var t=(16711680&this.raw)>>16,n=(65280&this.raw)>>8,r=255&this.raw,i=.2126*t+.7152*n+.0722*r,o=-.09991*t-.33609*n+.436*r,a=.615*t-.55861*n-.05639*r;return this.rgb={r:t,g:n,b:r},this.yuv={y:i,u:o,v:a},this},s.prototype.lighten=function(e){var t=Math.min(1,Math.max(0,Math.abs(e)))*(e<0?-1:1),n=255*t|0,r=Math.min(255,Math.max(0,this.rgb.r+n)),i=Math.min(255,Math.max(0,this.rgb.g+n)),o=Math.min(255,Math.max(0,this.rgb.b+n)),a=s.rgb2hex(r,i,o);return new s(a)},s.prototype.toHex=function(e){return(e?"#":"")+this.raw.toString(16)},s.prototype.lighterThan=function(e){return e instanceof s||(e=new s(e)),this.yuv.y>e.yuv.y},s.prototype.blendAlpha=function(e){e instanceof s||(e=new s(e));var t=e,n=this,r=t.alpha*t.rgb.r+(1-t.alpha)*n.rgb.r,i=t.alpha*t.rgb.g+(1-t.alpha)*n.rgb.g,o=t.alpha*t.rgb.b+(1-t.alpha)*n.rgb.b;return new s(s.rgb2hex(r,i,o))},e.exports=s},function(e,t){e.exports={version:"2.9.4",svg_ns:"http://www.w3.org/2000/svg"}},function(e,t,n){function w(e,t){return T.element({tag:t,width:e.width,height:e.height,fill:e.properties.fill})}function x(e){return i.cssProps({fill:e.fill,"font-weight":e.font.weight,"font-family":e.font.family+", monospace","font-size":e.font.size+e.font.units})}function E(e,t,n){var r=n/2;return["M",r,r,"H",e-r,"V",t-r,"H",r,"V",0,"M",0,r,"L",e,t-r,"M",0,t-r,"L",e,r].join(" ")}var S=n(13),C=n(8),r=n(11),i=n(7),k=r.svg_ns,T={element:function(e){var t=e.tag,n=e.content||"";return delete e.tag,delete e.content,[t,n,e]}};e.exports=function(e,t){var n=t.engineSettings,r=n.stylesheets,i=r.map(function(e){return'<?xml-stylesheet rel="stylesheet" href="'+e+'"?>'}).join("\n"),o="holder_"+Number(new Date).toString(16),a=e.root,s=a.children.holderTextGroup,l="#"+o+" text { "+x(s.properties)+" } ";s.y+=.8*s.textPositionData.boundingBox.height;var c=[];Object.keys(s.children).forEach(function(e){var o=s.children[e];Object.keys(o.children).forEach(function(e){var t=o.children[e],n=s.x+o.x+t.x,r=s.y+o.y+t.y,i=T.element({tag:"text",content:t.properties.text,x:n,y:r});c.push(i)})});var u=T.element({tag:"g",content:c}),h=null;if(a.children.holderBg.properties.outline){var d=a.children.holderBg.properties.outline;h=T.element({tag:"path",d:E(a.children.holderBg.width,a.children.holderBg.height,d.width),"stroke-width":d.width,stroke:d.fill,fill:"none"})}var f=w(a.children.holderBg,"rect"),A=[];A.push(f),d&&A.push(h),A.push(u);var p=T.element({tag:"g",id:o,content:A}),g=T.element({tag:"style",content:l,type:"text/css"}),m=T.element({tag:"defs",content:g}),v=T.element({tag:"svg",content:[m,p],width:a.properties.width,height:a.properties.height,xmlns:k,viewBox:[0,0,a.properties.width,a.properties.height].join(" "),preserveAspectRatio:"none"}),y=S(v);y=i+y[0];var b=C.svgStringToDataURI(y,"background"===t.mode);return b}},function(e,t,n){n(14);e.exports=function e(t,n,a){"use strict";function r(e){var t=e.match(/^[\w-]+/),n={tag:t?t[0]:"div",attr:{},children:[]},r=e.match(/#([\w-]+)/),i=e.match(/\$([\w-]+)/),o=e.match(/\.[\w-]+/g);return r&&(n.attr.id=r[1],a[r[1]]=n),i&&(a[i[1]]=n),o&&(n.attr["class"]=o.join(" ").replace(/\./g,"")),e.match(/&$/g)&&(f=!1),n}function i(e,t){if(null!==t&&t!==!1&&void 0!==t)return"string"!=typeof t&&"object"!=typeof t?String(t):t}function o(e){return e||0===e?String(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;"):""}function s(e){return String(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}var l,c,u,h,d=1,f=!0;if(a=a||{},"string"==typeof t[0])t[0]=r(t[0]);else{if(!Array.isArray(t[0]))throw new Error("First element of array must be a string, or an array and not "+JSON.stringify(t[0]));d=0}for(;d<t.length;d++){if(t[d]===!1||null===t[d]){t[0]=!1;break}if(void 0!==t[d]&&t[d]!==!0)if("string"==typeof t[d])f&&(t[d]=s(t[d])),t[0].children.push(t[d]);else if("number"==typeof t[d])t[0].children.push(t[d]);else if(Array.isArray(t[d])){if(Array.isArray(t[d][0])){if(t[d].reverse().forEach(function(e){t.splice(d+1,0,e)}),0!==d)continue;d++}e(t[d],n,a),t[d][0]&&t[0].children.push(t[d][0])}else if("function"==typeof t[d])u=t[d];else{if("object"!=typeof t[d])throw new TypeError('"'+t[d]+'" is not allowed as a value.');for(c in t[d])t[d].hasOwnProperty(c)&&null!==t[d][c]&&t[d][c]!==!1&&("style"===c&&"object"==typeof t[d][c]?t[0].attr[c]=JSON.stringify(t[d][c],i).slice(2,-2).replace(/","/g,";").replace(/":"/g,":").replace(/\\"/g,"'"):t[0].attr[c]=t[d][c])}}if(t[0]!==!1){l="<"+t[0].tag;for(h in t[0].attr)t[0].attr.hasOwnProperty(h)&&(l+=" "+h+'="'+o(t[0].attr[h])+'"');l+=">",t[0].children.forEach(function(e){l+=e}),l+="</"+t[0].tag+">",t[0]=l}return a[0]=t[0],u&&u(t[0]),a}},function(e,t){"use strict";function n(e){var t=""+e,n=s.exec(t);if(!n)return t;var r,i="",o=0,a=0;for(o=n.index;o<t.length;o++){switch(t.charCodeAt(o)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 39:r="&#39;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}a!==o&&(i+=t.substring(a,o)),a=o+1,i+=r}return a!==o?i+t.substring(a,o):i}var s=/["'&<>]/;e.exports=n},function(e,t,n){var r=n(9),m=n(7);e.exports=function(){var p=r.newEl("canvas"),g=null;return function(e){null==g&&(g=p.getContext("2d"));var t=m.canvasRatio(),n=e.root;p.width=t*n.properties.width,p.height=t*n.properties.height,g.textBaseline="middle";var r=n.children.holderBg,i=t*r.width,o=t*r.height,a=2,s=a/2;g.fillStyle=r.properties.fill,g.fillRect(0,0,i,o),r.properties.outline&&(g.strokeStyle=r.properties.outline.fill,g.lineWidth=r.properties.outline.width,g.moveTo(s,s),g.lineTo(i-s,s),g.lineTo(i-s,o-s),g.lineTo(s,o-s),g.lineTo(s,s),g.moveTo(0,s),g.lineTo(i,o-s),g.moveTo(0,o-s),g.lineTo(i,s),g.stroke());var l=n.children.holderTextGroup;g.font=l.properties.font.weight+" "+t*l.properties.font.size+l.properties.font.units+" "+l.properties.font.family+", monospace",g.fillStyle=l.properties.fill;for(var c in l.children){var u=l.children[c];for(var h in u.children){var d=u.children[h],f=t*(l.x+u.x+d.x),A=t*(l.y+u.y+d.y+l.properties.leading/2);g.fillText(d.properties.text,f,A)}}return p.toDataURL("image/png")}}()}])}),function(e,t){t&&(Holder=e.Holder)}(this,"undefined"!=typeof Meteor&&"undefined"!=typeof Package);

//slick
//Slick version 1.8.1
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
      define(['jquery'], factory);
  } else if (typeof exports !== 'undefined') {
      module.exports = factory(require('jquery'));
  } else {
      factory(jQuery);
  }

}(function($) {
  'use strict';
  var Slick = window.Slick || {};

  Slick = (function() {

      var instanceUid = 0;

      function Slick(element, settings) {

          var _ = this, dataSettings;

          _.defaults = {
              accessibility: true,
              adaptiveHeight: false,
              appendArrows: $(element),
              appendDots: $(element),
              arrows: true,
              asNavFor: null,
              prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
              nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
              autoplay: false,
              autoplaySpeed: 3000,
              centerMode: false,
              centerPadding: '50px',
              cssEase: 'ease',
              customPaging: function(slider, i) {
                  return $('<button type="button" />').text(i + 1);
              },
              dots: false,
              dotsClass: 'slick-dots',
              draggable: true,
              easing: 'linear',
              edgeFriction: 0.35,
              fade: false,
              focusOnSelect: false,
              focusOnChange: false,
              infinite: true,
              initialSlide: 0,
              lazyLoad: 'ondemand',
              mobileFirst: false,
              pauseOnHover: true,
              pauseOnFocus: true,
              pauseOnDotsHover: false,
              respondTo: 'window',
              responsive: null,
              rows: 1,
              rtl: false,
              slide: '',
              slidesPerRow: 1,
              slidesToShow: 1,
              slidesToScroll: 1,
              speed: 500,
              swipe: true,
              swipeToSlide: false,
              touchMove: true,
              touchThreshold: 5,
              useCSS: true,
              useTransform: true,
              variableWidth: false,
              vertical: false,
              verticalSwiping: false,
              waitForAnimate: true,
              zIndex: 1000
          };

          _.initials = {
              animating: false,
              dragging: false,
              autoPlayTimer: null,
              currentDirection: 0,
              currentLeft: null,
              currentSlide: 0,
              direction: 1,
              $dots: null,
              listWidth: null,
              listHeight: null,
              loadIndex: 0,
              $nextArrow: null,
              $prevArrow: null,
              scrolling: false,
              slideCount: null,
              slideWidth: null,
              $slideTrack: null,
              $slides: null,
              sliding: false,
              slideOffset: 0,
              swipeLeft: null,
              swiping: false,
              $list: null,
              touchObject: {},
              transformsEnabled: false,
              unslicked: false
          };

          $.extend(_, _.initials);

          _.activeBreakpoint = null;
          _.animType = null;
          _.animProp = null;
          _.breakpoints = [];
          _.breakpointSettings = [];
          _.cssTransitions = false;
          _.focussed = false;
          _.interrupted = false;
          _.hidden = 'hidden';
          _.paused = true;
          _.positionProp = null;
          _.respondTo = null;
          _.rowCount = 1;
          _.shouldClick = true;
          _.$slider = $(element);
          _.$slidesCache = null;
          _.transformType = null;
          _.transitionType = null;
          _.visibilityChange = 'visibilitychange';
          _.windowWidth = 0;
          _.windowTimer = null;

          dataSettings = $(element).data('slick') || {};

          _.options = $.extend({}, _.defaults, settings, dataSettings);

          _.currentSlide = _.options.initialSlide;

          _.originalSettings = _.options;

          if (typeof document.mozHidden !== 'undefined') {
              _.hidden = 'mozHidden';
              _.visibilityChange = 'mozvisibilitychange';
          } else if (typeof document.webkitHidden !== 'undefined') {
              _.hidden = 'webkitHidden';
              _.visibilityChange = 'webkitvisibilitychange';
          }

          _.autoPlay = $.proxy(_.autoPlay, _);
          _.autoPlayClear = $.proxy(_.autoPlayClear, _);
          _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
          _.changeSlide = $.proxy(_.changeSlide, _);
          _.clickHandler = $.proxy(_.clickHandler, _);
          _.selectHandler = $.proxy(_.selectHandler, _);
          _.setPosition = $.proxy(_.setPosition, _);
          _.swipeHandler = $.proxy(_.swipeHandler, _);
          _.dragHandler = $.proxy(_.dragHandler, _);
          _.keyHandler = $.proxy(_.keyHandler, _);

          _.instanceUid = instanceUid++;

          // A simple way to check for HTML strings
          // Strict HTML recognition (must start with <)
          // Extracted from jQuery v1.11 source
          _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


          _.registerBreakpoints();
          _.init(true);

      }

      return Slick;

  }());

  Slick.prototype.activateADA = function() {
      var _ = this;

      _.$slideTrack.find('.slick-active').attr({
          'aria-hidden': 'false'
      }).find('a, input, button, select').attr({
          'tabindex': '0'
      });

  };

  Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

      var _ = this;

      if (typeof(index) === 'boolean') {
          addBefore = index;
          index = null;
      } else if (index < 0 || (index >= _.slideCount)) {
          return false;
      }

      _.unload();

      if (typeof(index) === 'number') {
          if (index === 0 && _.$slides.length === 0) {
              $(markup).appendTo(_.$slideTrack);
          } else if (addBefore) {
              $(markup).insertBefore(_.$slides.eq(index));
          } else {
              $(markup).insertAfter(_.$slides.eq(index));
          }
      } else {
          if (addBefore === true) {
              $(markup).prependTo(_.$slideTrack);
          } else {
              $(markup).appendTo(_.$slideTrack);
          }
      }

      _.$slides = _.$slideTrack.children(this.options.slide);

      _.$slideTrack.children(this.options.slide).detach();

      _.$slideTrack.append(_.$slides);

      _.$slides.each(function(index, element) {
          $(element).attr('data-slick-index', index);
      });

      _.$slidesCache = _.$slides;

      _.reinit();

  };

  Slick.prototype.animateHeight = function() {
      var _ = this;
      if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
          var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
          _.$list.animate({
              height: targetHeight
          }, _.options.speed);
      }
  };

  Slick.prototype.animateSlide = function(targetLeft, callback) {

      var animProps = {},
          _ = this;

      _.animateHeight();

      if (_.options.rtl === true && _.options.vertical === false) {
          targetLeft = -targetLeft;
      }
      if (_.transformsEnabled === false) {
          if (_.options.vertical === false) {
              _.$slideTrack.animate({
                  left: targetLeft
              }, _.options.speed, _.options.easing, callback);
          } else {
              _.$slideTrack.animate({
                  top: targetLeft
              }, _.options.speed, _.options.easing, callback);
          }

      } else {

          if (_.cssTransitions === false) {
              if (_.options.rtl === true) {
                  _.currentLeft = -(_.currentLeft);
              }
              $({
                  animStart: _.currentLeft
              }).animate({
                  animStart: targetLeft
              }, {
                  duration: _.options.speed,
                  easing: _.options.easing,
                  step: function(now) {
                      now = Math.ceil(now);
                      if (_.options.vertical === false) {
                          animProps[_.animType] = 'translate(' +
                              now + 'px, 0px)';
                          _.$slideTrack.css(animProps);
                      } else {
                          animProps[_.animType] = 'translate(0px,' +
                              now + 'px)';
                          _.$slideTrack.css(animProps);
                      }
                  },
                  complete: function() {
                      if (callback) {
                          callback.call();
                      }
                  }
              });

          } else {

              _.applyTransition();
              targetLeft = Math.ceil(targetLeft);

              if (_.options.vertical === false) {
                  animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
              } else {
                  animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
              }
              _.$slideTrack.css(animProps);

              if (callback) {
                  setTimeout(function() {

                      _.disableTransition();

                      callback.call();
                  }, _.options.speed);
              }

          }

      }

  };

  Slick.prototype.getNavTarget = function() {

      var _ = this,
          asNavFor = _.options.asNavFor;

      if ( asNavFor && asNavFor !== null ) {
          asNavFor = $(asNavFor).not(_.$slider);
      }

      return asNavFor;

  };

  Slick.prototype.asNavFor = function(index) {

      var _ = this,
          asNavFor = _.getNavTarget();

      if ( asNavFor !== null && typeof asNavFor === 'object' ) {
          asNavFor.each(function() {
              var target = $(this).slick('getSlick');
              if(!target.unslicked) {
                  target.slideHandler(index, true);
              }
          });
      }

  };

  Slick.prototype.applyTransition = function(slide) {

      var _ = this,
          transition = {};

      if (_.options.fade === false) {
          transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
      } else {
          transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
      }

      if (_.options.fade === false) {
          _.$slideTrack.css(transition);
      } else {
          _.$slides.eq(slide).css(transition);
      }

  };

  Slick.prototype.autoPlay = function() {

      var _ = this;

      _.autoPlayClear();

      if ( _.slideCount > _.options.slidesToShow ) {
          _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
      }

  };

  Slick.prototype.autoPlayClear = function() {

      var _ = this;

      if (_.autoPlayTimer) {
          clearInterval(_.autoPlayTimer);
      }

  };

  Slick.prototype.autoPlayIterator = function() {

      var _ = this,
          slideTo = _.currentSlide + _.options.slidesToScroll;

      if ( !_.paused && !_.interrupted && !_.focussed ) {

          if ( _.options.infinite === false ) {

              if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                  _.direction = 0;
              }

              else if ( _.direction === 0 ) {

                  slideTo = _.currentSlide - _.options.slidesToScroll;

                  if ( _.currentSlide - 1 === 0 ) {
                      _.direction = 1;
                  }

              }

          }

          _.slideHandler( slideTo );

      }

  };

  Slick.prototype.buildArrows = function() {

      var _ = this;

      if (_.options.arrows === true ) {

          _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
          _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

          if( _.slideCount > _.options.slidesToShow ) {

              _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
              _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

              if (_.htmlExpr.test(_.options.prevArrow)) {
                  _.$prevArrow.prependTo(_.options.appendArrows);
              }

              if (_.htmlExpr.test(_.options.nextArrow)) {
                  _.$nextArrow.appendTo(_.options.appendArrows);
              }

              if (_.options.infinite !== true) {
                  _.$prevArrow
                      .addClass('slick-disabled')
                      .attr('aria-disabled', 'true');
              }

          } else {

              _.$prevArrow.add( _.$nextArrow )

                  .addClass('slick-hidden')
                  .attr({
                      'aria-disabled': 'true',
                      'tabindex': '-1'
                  });

          }

      }

  };

  Slick.prototype.buildDots = function() {

      var _ = this,
          i, dot;

      if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

          _.$slider.addClass('slick-dotted');

          dot = $('<ul />').addClass(_.options.dotsClass);

          for (i = 0; i <= _.getDotCount(); i += 1) {
              dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
          }

          _.$dots = dot.appendTo(_.options.appendDots);

          _.$dots.find('li').first().addClass('slick-active');

      }

  };

  Slick.prototype.buildOut = function() {

      var _ = this;

      _.$slides =
          _.$slider
              .children( _.options.slide + ':not(.slick-cloned)')
              .addClass('slick-slide');

      _.slideCount = _.$slides.length;

      _.$slides.each(function(index, element) {
          $(element)
              .attr('data-slick-index', index)
              .data('originalStyling', $(element).attr('style') || '');
      });

      _.$slider.addClass('slick-slider');

      _.$slideTrack = (_.slideCount === 0) ?
          $('<div class="slick-track"/>').appendTo(_.$slider) :
          _.$slides.wrapAll('<div class="slick-track"/>').parent();

      _.$list = _.$slideTrack.wrap(
          '<div class="slick-list"/>').parent();
      _.$slideTrack.css('opacity', 0);

      if (_.options.centerMode === true || _.options.swipeToSlide === true) {
          _.options.slidesToScroll = 1;
      }

      $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

      _.setupInfinite();

      _.buildArrows();

      _.buildDots();

      _.updateDots();


      _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

      if (_.options.draggable === true) {
          _.$list.addClass('draggable');
      }

  };

  Slick.prototype.buildRows = function() {

      var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

      newSlides = document.createDocumentFragment();
      originalSlides = _.$slider.children();

      if(_.options.rows > 0) {

          slidesPerSection = _.options.slidesPerRow * _.options.rows;
          numOfSlides = Math.ceil(
              originalSlides.length / slidesPerSection
          );

          for(a = 0; a < numOfSlides; a++){
              var slide = document.createElement('div');
              for(b = 0; b < _.options.rows; b++) {
                  var row = document.createElement('div');
                  for(c = 0; c < _.options.slidesPerRow; c++) {
                      var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                      if (originalSlides.get(target)) {
                          row.appendChild(originalSlides.get(target));
                      }
                  }
                  slide.appendChild(row);
              }
              newSlides.appendChild(slide);
          }

          _.$slider.empty().append(newSlides);
          _.$slider.children().children().children()
              .css({
                  'width':(100 / _.options.slidesPerRow) + '%',
                  'display': 'inline-block'
              });

      }

  };

  Slick.prototype.checkResponsive = function(initial, forceUpdate) {

      var _ = this,
          breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
      var sliderWidth = _.$slider.width();
      var windowWidth = window.innerWidth || $(window).width();

      if (_.respondTo === 'window') {
          respondToWidth = windowWidth;
      } else if (_.respondTo === 'slider') {
          respondToWidth = sliderWidth;
      } else if (_.respondTo === 'min') {
          respondToWidth = Math.min(windowWidth, sliderWidth);
      }

      if ( _.options.responsive &&
          _.options.responsive.length &&
          _.options.responsive !== null) {

          targetBreakpoint = null;

          for (breakpoint in _.breakpoints) {
              if (_.breakpoints.hasOwnProperty(breakpoint)) {
                  if (_.originalSettings.mobileFirst === false) {
                      if (respondToWidth < _.breakpoints[breakpoint]) {
                          targetBreakpoint = _.breakpoints[breakpoint];
                      }
                  } else {
                      if (respondToWidth > _.breakpoints[breakpoint]) {
                          targetBreakpoint = _.breakpoints[breakpoint];
                      }
                  }
              }
          }

          if (targetBreakpoint !== null) {
              if (_.activeBreakpoint !== null) {
                  if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                      _.activeBreakpoint =
                          targetBreakpoint;
                      if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                          _.unslick(targetBreakpoint);
                      } else {
                          _.options = $.extend({}, _.originalSettings,
                              _.breakpointSettings[
                                  targetBreakpoint]);
                          if (initial === true) {
                              _.currentSlide = _.options.initialSlide;
                          }
                          _.refresh(initial);
                      }
                      triggerBreakpoint = targetBreakpoint;
                  }
              } else {
                  _.activeBreakpoint = targetBreakpoint;
                  if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                      _.unslick(targetBreakpoint);
                  } else {
                      _.options = $.extend({}, _.originalSettings,
                          _.breakpointSettings[
                              targetBreakpoint]);
                      if (initial === true) {
                          _.currentSlide = _.options.initialSlide;
                      }
                      _.refresh(initial);
                  }
                  triggerBreakpoint = targetBreakpoint;
              }
          } else {
              if (_.activeBreakpoint !== null) {
                  _.activeBreakpoint = null;
                  _.options = _.originalSettings;
                  if (initial === true) {
                      _.currentSlide = _.options.initialSlide;
                  }
                  _.refresh(initial);
                  triggerBreakpoint = targetBreakpoint;
              }
          }

          // only trigger breakpoints during an actual break. not on initialize.
          if( !initial && triggerBreakpoint !== false ) {
              _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
          }
      }

  };

  Slick.prototype.changeSlide = function(event, dontAnimate) {

      var _ = this,
          $target = $(event.currentTarget),
          indexOffset, slideOffset, unevenOffset;

      // If target is a link, prevent default action.
      if($target.is('a')) {
          event.preventDefault();
      }

      // If target is not the <li> element (ie: a child), find the <li>.
      if(!$target.is('li')) {
          $target = $target.closest('li');
      }

      unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
      indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

      switch (event.data.message) {

          case 'previous':
              slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
              if (_.slideCount > _.options.slidesToShow) {
                  _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
              }
              break;

          case 'next':
              slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
              if (_.slideCount > _.options.slidesToShow) {
                  _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
              }
              break;

          case 'index':
              var index = event.data.index === 0 ? 0 :
                  event.data.index || $target.index() * _.options.slidesToScroll;

              _.slideHandler(_.checkNavigable(index), false, dontAnimate);
              $target.children().trigger('focus');
              break;

          default:
              return;
      }

  };

  Slick.prototype.checkNavigable = function(index) {

      var _ = this,
          navigables, prevNavigable;

      navigables = _.getNavigableIndexes();
      prevNavigable = 0;
      if (index > navigables[navigables.length - 1]) {
          index = navigables[navigables.length - 1];
      } else {
          for (var n in navigables) {
              if (index < navigables[n]) {
                  index = prevNavigable;
                  break;
              }
              prevNavigable = navigables[n];
          }
      }

      return index;
  };

  Slick.prototype.cleanUpEvents = function() {

      var _ = this;

      if (_.options.dots && _.$dots !== null) {

          $('li', _.$dots)
              .off('click.slick', _.changeSlide)
              .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
              .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

          if (_.options.accessibility === true) {
              _.$dots.off('keydown.slick', _.keyHandler);
          }
      }

      _.$slider.off('focus.slick blur.slick');

      if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
          _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
          _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

          if (_.options.accessibility === true) {
              _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
              _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
          }
      }

      _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
      _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
      _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
      _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

      _.$list.off('click.slick', _.clickHandler);

      $(document).off(_.visibilityChange, _.visibility);

      _.cleanUpSlideEvents();

      if (_.options.accessibility === true) {
          _.$list.off('keydown.slick', _.keyHandler);
      }

      if (_.options.focusOnSelect === true) {
          $(_.$slideTrack).children().off('click.slick', _.selectHandler);
      }

      $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

      $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

      $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

      $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

  };

  Slick.prototype.cleanUpSlideEvents = function() {

      var _ = this;

      _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
      _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

  };

  Slick.prototype.cleanUpRows = function() {

      var _ = this, originalSlides;

      if(_.options.rows > 0) {
          originalSlides = _.$slides.children().children();
          originalSlides.removeAttr('style');
          _.$slider.empty().append(originalSlides);
      }

  };

  Slick.prototype.clickHandler = function(event) {

      var _ = this;

      if (_.shouldClick === false) {
          event.stopImmediatePropagation();
          event.stopPropagation();
          event.preventDefault();
      }

  };

  Slick.prototype.destroy = function(refresh) {

      var _ = this;

      _.autoPlayClear();

      _.touchObject = {};

      _.cleanUpEvents();

      $('.slick-cloned', _.$slider).detach();

      if (_.$dots) {
          _.$dots.remove();
      }

      if ( _.$prevArrow && _.$prevArrow.length ) {

          _.$prevArrow
              .removeClass('slick-disabled slick-arrow slick-hidden')
              .removeAttr('aria-hidden aria-disabled tabindex')
              .css('display','');

          if ( _.htmlExpr.test( _.options.prevArrow )) {
              _.$prevArrow.remove();
          }
      }

      if ( _.$nextArrow && _.$nextArrow.length ) {

          _.$nextArrow
              .removeClass('slick-disabled slick-arrow slick-hidden')
              .removeAttr('aria-hidden aria-disabled tabindex')
              .css('display','');

          if ( _.htmlExpr.test( _.options.nextArrow )) {
              _.$nextArrow.remove();
          }
      }


      if (_.$slides) {

          _.$slides
              .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
              .removeAttr('aria-hidden')
              .removeAttr('data-slick-index')
              .each(function(){
                  $(this).attr('style', $(this).data('originalStyling'));
              });

          _.$slideTrack.children(this.options.slide).detach();

          _.$slideTrack.detach();

          _.$list.detach();

          _.$slider.append(_.$slides);
      }

      _.cleanUpRows();

      _.$slider.removeClass('slick-slider');
      _.$slider.removeClass('slick-initialized');
      _.$slider.removeClass('slick-dotted');

      _.unslicked = true;

      if(!refresh) {
          _.$slider.trigger('destroy', [_]);
      }

  };

  Slick.prototype.disableTransition = function(slide) {

      var _ = this,
          transition = {};

      transition[_.transitionType] = '';

      if (_.options.fade === false) {
          _.$slideTrack.css(transition);
      } else {
          _.$slides.eq(slide).css(transition);
      }

  };

  Slick.prototype.fadeSlide = function(slideIndex, callback) {

      var _ = this;

      if (_.cssTransitions === false) {

          _.$slides.eq(slideIndex).css({
              zIndex: _.options.zIndex
          });

          _.$slides.eq(slideIndex).animate({
              opacity: 1
          }, _.options.speed, _.options.easing, callback);

      } else {

          _.applyTransition(slideIndex);

          _.$slides.eq(slideIndex).css({
              opacity: 1,
              zIndex: _.options.zIndex
          });

          if (callback) {
              setTimeout(function() {

                  _.disableTransition(slideIndex);

                  callback.call();
              }, _.options.speed);
          }

      }

  };

  Slick.prototype.fadeSlideOut = function(slideIndex) {

      var _ = this;

      if (_.cssTransitions === false) {

          _.$slides.eq(slideIndex).animate({
              opacity: 0,
              zIndex: _.options.zIndex - 2
          }, _.options.speed, _.options.easing);

      } else {

          _.applyTransition(slideIndex);

          _.$slides.eq(slideIndex).css({
              opacity: 0,
              zIndex: _.options.zIndex - 2
          });

      }

  };

  Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

      var _ = this;

      if (filter !== null) {

          _.$slidesCache = _.$slides;

          _.unload();

          _.$slideTrack.children(this.options.slide).detach();

          _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

          _.reinit();

      }

  };

  Slick.prototype.focusHandler = function() {

      var _ = this;

      _.$slider
          .off('focus.slick blur.slick')
          .on('focus.slick blur.slick', '*', function(event) {

          event.stopImmediatePropagation();
          var $sf = $(this);

          setTimeout(function() {

              if( _.options.pauseOnFocus ) {
                  _.focussed = $sf.is(':focus');
                  _.autoPlay();
              }

          }, 0);

      });
  };

  Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

      var _ = this;
      return _.currentSlide;

  };

  Slick.prototype.getDotCount = function() {

      var _ = this;

      var breakPoint = 0;
      var counter = 0;
      var pagerQty = 0;

      if (_.options.infinite === true) {
          if (_.slideCount <= _.options.slidesToShow) {
               ++pagerQty;
          } else {
              while (breakPoint < _.slideCount) {
                  ++pagerQty;
                  breakPoint = counter + _.options.slidesToScroll;
                  counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
              }
          }
      } else if (_.options.centerMode === true) {
          pagerQty = _.slideCount;
      } else if(!_.options.asNavFor) {
          pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
      }else {
          while (breakPoint < _.slideCount) {
              ++pagerQty;
              breakPoint = counter + _.options.slidesToScroll;
              counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
          }
      }

      return pagerQty - 1;

  };

  Slick.prototype.getLeft = function(slideIndex) {

      var _ = this,
          targetLeft,
          verticalHeight,
          verticalOffset = 0,
          targetSlide,
          coef;

      _.slideOffset = 0;
      verticalHeight = _.$slides.first().outerHeight(true);

      if (_.options.infinite === true) {
          if (_.slideCount > _.options.slidesToShow) {
              _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
              coef = -1

              if (_.options.vertical === true && _.options.centerMode === true) {
                  if (_.options.slidesToShow === 2) {
                      coef = -1.5;
                  } else if (_.options.slidesToShow === 1) {
                      coef = -2
                  }
              }
              verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
          }
          if (_.slideCount % _.options.slidesToScroll !== 0) {
              if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                  if (slideIndex > _.slideCount) {
                      _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                      verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                  } else {
                      _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                      verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                  }
              }
          }
      } else {
          if (slideIndex + _.options.slidesToShow > _.slideCount) {
              _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
              verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
          }
      }

      if (_.slideCount <= _.options.slidesToShow) {
          _.slideOffset = 0;
          verticalOffset = 0;
      }

      if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
          _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
      } else if (_.options.centerMode === true && _.options.infinite === true) {
          _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
      } else if (_.options.centerMode === true) {
          _.slideOffset = 0;
          _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
      }

      if (_.options.vertical === false) {
          targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
      } else {
          targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
      }

      if (_.options.variableWidth === true) {

          if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
              targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
          } else {
              targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
          }

          if (_.options.rtl === true) {
              if (targetSlide[0]) {
                  targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
              } else {
                  targetLeft =  0;
              }
          } else {
              targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
          }

          if (_.options.centerMode === true) {
              if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                  targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
              } else {
                  targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
              }

              if (_.options.rtl === true) {
                  if (targetSlide[0]) {
                      targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                  } else {
                      targetLeft =  0;
                  }
              } else {
                  targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
              }

              targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
          }
      }

      return targetLeft;

  };

  Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

      var _ = this;

      return _.options[option];

  };

  Slick.prototype.getNavigableIndexes = function() {

      var _ = this,
          breakPoint = 0,
          counter = 0,
          indexes = [],
          max;

      if (_.options.infinite === false) {
          max = _.slideCount;
      } else {
          breakPoint = _.options.slidesToScroll * -1;
          counter = _.options.slidesToScroll * -1;
          max = _.slideCount * 2;
      }

      while (breakPoint < max) {
          indexes.push(breakPoint);
          breakPoint = counter + _.options.slidesToScroll;
          counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
      }

      return indexes;

  };

  Slick.prototype.getSlick = function() {

      return this;

  };

  Slick.prototype.getSlideCount = function() {

      var _ = this,
          slidesTraversed, swipedSlide, centerOffset;

      centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

      if (_.options.swipeToSlide === true) {
          _.$slideTrack.find('.slick-slide').each(function(index, slide) {
              if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                  swipedSlide = slide;
                  return false;
              }
          });

          slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

          return slidesTraversed;

      } else {
          return _.options.slidesToScroll;
      }

  };

  Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

      var _ = this;

      _.changeSlide({
          data: {
              message: 'index',
              index: parseInt(slide)
          }
      }, dontAnimate);

  };

  Slick.prototype.init = function(creation) {

      var _ = this;

      if (!$(_.$slider).hasClass('slick-initialized')) {

          $(_.$slider).addClass('slick-initialized');

          _.buildRows();
          _.buildOut();
          _.setProps();
          _.startLoad();
          _.loadSlider();
          _.initializeEvents();
          _.updateArrows();
          _.updateDots();
          _.checkResponsive(true);
          _.focusHandler();

      }

      if (creation) {
          _.$slider.trigger('init', [_]);
      }

      if (_.options.accessibility === true) {
          _.initADA();
      }

      if ( _.options.autoplay ) {

          _.paused = false;
          _.autoPlay();

      }

  };

  Slick.prototype.initADA = function() {
      var _ = this,
              numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
              tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                  return (val >= 0) && (val < _.slideCount);
              });

      _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
          'aria-hidden': 'true',
          'tabindex': '-1'
      }).find('a, input, button, select').attr({
          'tabindex': '-1'
      });

      if (_.$dots !== null) {
          _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
              var slideControlIndex = tabControlIndexes.indexOf(i);

              $(this).attr({
                  'role': 'tabpanel',
                  'id': 'slick-slide' + _.instanceUid + i,
                  'tabindex': -1
              });

              if (slideControlIndex !== -1) {
                 var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                 if ($('#' + ariaButtonControl).length) {
                   $(this).attr({
                       'aria-describedby': ariaButtonControl
                   });
                 }
              }
          });

          _.$dots.attr('role', 'tablist').find('li').each(function(i) {
              var mappedSlideIndex = tabControlIndexes[i];

              $(this).attr({
                  'role': 'presentation'
              });

              $(this).find('button').first().attr({
                  'role': 'tab',
                  'id': 'slick-slide-control' + _.instanceUid + i,
                  'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                  'aria-label': (i + 1) + ' of ' + numDotGroups,
                  'aria-selected': null,
                  'tabindex': '-1'
              });

          }).eq(_.currentSlide).find('button').attr({
              'aria-selected': 'true',
              'tabindex': '0'
          }).end();
      }

      for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
        if (_.options.focusOnChange) {
          _.$slides.eq(i).attr({'tabindex': '0'});
        } else {
          _.$slides.eq(i).removeAttr('tabindex');
        }
      }

      _.activateADA();

  };

  Slick.prototype.initArrowEvents = function() {

      var _ = this;

      if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
          _.$prevArrow
             .off('click.slick')
             .on('click.slick', {
                  message: 'previous'
             }, _.changeSlide);
          _.$nextArrow
             .off('click.slick')
             .on('click.slick', {
                  message: 'next'
             }, _.changeSlide);

          if (_.options.accessibility === true) {
              _.$prevArrow.on('keydown.slick', _.keyHandler);
              _.$nextArrow.on('keydown.slick', _.keyHandler);
          }
      }

  };

  Slick.prototype.initDotEvents = function() {

      var _ = this;

      if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
          $('li', _.$dots).on('click.slick', {
              message: 'index'
          }, _.changeSlide);

          if (_.options.accessibility === true) {
              _.$dots.on('keydown.slick', _.keyHandler);
          }
      }

      if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

          $('li', _.$dots)
              .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
              .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

      }

  };

  Slick.prototype.initSlideEvents = function() {

      var _ = this;

      if ( _.options.pauseOnHover ) {

          _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
          _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

      }

  };

  Slick.prototype.initializeEvents = function() {

      var _ = this;

      _.initArrowEvents();

      _.initDotEvents();
      _.initSlideEvents();

      _.$list.on('touchstart.slick mousedown.slick', {
          action: 'start'
      }, _.swipeHandler);
      _.$list.on('touchmove.slick mousemove.slick', {
          action: 'move'
      }, _.swipeHandler);
      _.$list.on('touchend.slick mouseup.slick', {
          action: 'end'
      }, _.swipeHandler);
      _.$list.on('touchcancel.slick mouseleave.slick', {
          action: 'end'
      }, _.swipeHandler);

      _.$list.on('click.slick', _.clickHandler);

      $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

      if (_.options.accessibility === true) {
          _.$list.on('keydown.slick', _.keyHandler);
      }

      if (_.options.focusOnSelect === true) {
          $(_.$slideTrack).children().on('click.slick', _.selectHandler);
      }

      $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

      $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

      $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

      $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
      $(_.setPosition);

  };

  Slick.prototype.initUI = function() {

      var _ = this;

      if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

          _.$prevArrow.show();
          _.$nextArrow.show();

      }

      if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

          _.$dots.show();

      }

  };

  Slick.prototype.keyHandler = function(event) {

      var _ = this;
       //Dont slide if the cursor is inside the form fields and arrow keys are pressed
      if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
          if (event.keyCode === 37 && _.options.accessibility === true) {
              _.changeSlide({
                  data: {
                      message: _.options.rtl === true ? 'next' :  'previous'
                  }
              });
          } else if (event.keyCode === 39 && _.options.accessibility === true) {
              _.changeSlide({
                  data: {
                      message: _.options.rtl === true ? 'previous' : 'next'
                  }
              });
          }
      }

  };

  Slick.prototype.lazyLoad = function() {

      var _ = this,
          loadRange, cloneRange, rangeStart, rangeEnd;

      function loadImages(imagesScope) {

          $('img[data-lazy]', imagesScope).each(function() {

              var image = $(this),
                  imageSource = $(this).attr('data-lazy'),
                  imageSrcSet = $(this).attr('data-srcset'),
                  imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                  imageToLoad = document.createElement('img');

              imageToLoad.onload = function() {

                  image
                      .animate({ opacity: 0 }, 100, function() {

                          if (imageSrcSet) {
                              image
                                  .attr('srcset', imageSrcSet );

                              if (imageSizes) {
                                  image
                                      .attr('sizes', imageSizes );
                              }
                          }

                          image
                              .attr('src', imageSource)
                              .animate({ opacity: 1 }, 200, function() {
                                  image
                                      .removeAttr('data-lazy data-srcset data-sizes')
                                      .removeClass('slick-loading');
                              });
                          _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                      });

              };

              imageToLoad.onerror = function() {

                  image
                      .removeAttr( 'data-lazy' )
                      .removeClass( 'slick-loading' )
                      .addClass( 'slick-lazyload-error' );

                  _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

              };

              imageToLoad.src = imageSource;

          });

      }

      if (_.options.centerMode === true) {
          if (_.options.infinite === true) {
              rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
              rangeEnd = rangeStart + _.options.slidesToShow + 2;
          } else {
              rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
              rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
          }
      } else {
          rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
          rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
          if (_.options.fade === true) {
              if (rangeStart > 0) rangeStart--;
              if (rangeEnd <= _.slideCount) rangeEnd++;
          }
      }

      loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

      if (_.options.lazyLoad === 'anticipated') {
          var prevSlide = rangeStart - 1,
              nextSlide = rangeEnd,
              $slides = _.$slider.find('.slick-slide');

          for (var i = 0; i < _.options.slidesToScroll; i++) {
              if (prevSlide < 0) prevSlide = _.slideCount - 1;
              loadRange = loadRange.add($slides.eq(prevSlide));
              loadRange = loadRange.add($slides.eq(nextSlide));
              prevSlide--;
              nextSlide++;
          }
      }

      loadImages(loadRange);

      if (_.slideCount <= _.options.slidesToShow) {
          cloneRange = _.$slider.find('.slick-slide');
          loadImages(cloneRange);
      } else
      if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
          cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
          loadImages(cloneRange);
      } else if (_.currentSlide === 0) {
          cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
          loadImages(cloneRange);
      }

  };

  Slick.prototype.loadSlider = function() {

      var _ = this;

      _.setPosition();

      _.$slideTrack.css({
          opacity: 1
      });

      _.$slider.removeClass('slick-loading');

      _.initUI();

      if (_.options.lazyLoad === 'progressive') {
          _.progressiveLazyLoad();
      }

  };

  Slick.prototype.next = Slick.prototype.slickNext = function() {

      var _ = this;

      _.changeSlide({
          data: {
              message: 'next'
          }
      });

  };

  Slick.prototype.orientationChange = function() {

      var _ = this;

      _.checkResponsive();
      _.setPosition();

  };

  Slick.prototype.pause = Slick.prototype.slickPause = function() {

      var _ = this;

      _.autoPlayClear();
      _.paused = true;

  };

  Slick.prototype.play = Slick.prototype.slickPlay = function() {

      var _ = this;

      _.autoPlay();
      _.options.autoplay = true;
      _.paused = false;
      _.focussed = false;
      _.interrupted = false;

  };

  Slick.prototype.postSlide = function(index) {

      var _ = this;

      if( !_.unslicked ) {

          _.$slider.trigger('afterChange', [_, index]);

          _.animating = false;

          if (_.slideCount > _.options.slidesToShow) {
              _.setPosition();
          }

          _.swipeLeft = null;

          if ( _.options.autoplay ) {
              _.autoPlay();
          }

          if (_.options.accessibility === true) {
              _.initADA();

              if (_.options.focusOnChange) {
                  var $currentSlide = $(_.$slides.get(_.currentSlide));
                  $currentSlide.attr('tabindex', 0).focus();
              }
          }

      }

  };

  Slick.prototype.prev = Slick.prototype.slickPrev = function() {

      var _ = this;

      _.changeSlide({
          data: {
              message: 'previous'
          }
      });

  };

  Slick.prototype.preventDefault = function(event) {

      event.preventDefault();

  };

  Slick.prototype.progressiveLazyLoad = function( tryCount ) {

      tryCount = tryCount || 1;

      var _ = this,
          $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
          image,
          imageSource,
          imageSrcSet,
          imageSizes,
          imageToLoad;

      if ( $imgsToLoad.length ) {

          image = $imgsToLoad.first();
          imageSource = image.attr('data-lazy');
          imageSrcSet = image.attr('data-srcset');
          imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
          imageToLoad = document.createElement('img');

          imageToLoad.onload = function() {

              if (imageSrcSet) {
                  image
                      .attr('srcset', imageSrcSet );

                  if (imageSizes) {
                      image
                          .attr('sizes', imageSizes );
                  }
              }

              image
                  .attr( 'src', imageSource )
                  .removeAttr('data-lazy data-srcset data-sizes')
                  .removeClass('slick-loading');

              if ( _.options.adaptiveHeight === true ) {
                  _.setPosition();
              }

              _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
              _.progressiveLazyLoad();

          };

          imageToLoad.onerror = function() {

              if ( tryCount < 3 ) {

                  /**
                   * try to load the image 3 times,
                   * leave a slight delay so we don't get
                   * servers blocking the request.
                   */
                  setTimeout( function() {
                      _.progressiveLazyLoad( tryCount + 1 );
                  }, 500 );

              } else {

                  image
                      .removeAttr( 'data-lazy' )
                      .removeClass( 'slick-loading' )
                      .addClass( 'slick-lazyload-error' );

                  _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                  _.progressiveLazyLoad();

              }

          };

          imageToLoad.src = imageSource;

      } else {

          _.$slider.trigger('allImagesLoaded', [ _ ]);

      }

  };

  Slick.prototype.refresh = function( initializing ) {

      var _ = this, currentSlide, lastVisibleIndex;

      lastVisibleIndex = _.slideCount - _.options.slidesToShow;

      // in non-infinite sliders, we don't want to go past the
      // last visible index.
      if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
          _.currentSlide = lastVisibleIndex;
      }

      // if less slides than to show, go to start.
      if ( _.slideCount <= _.options.slidesToShow ) {
          _.currentSlide = 0;

      }

      currentSlide = _.currentSlide;

      _.destroy(true);

      $.extend(_, _.initials, { currentSlide: currentSlide });

      _.init();

      if( !initializing ) {

          _.changeSlide({
              data: {
                  message: 'index',
                  index: currentSlide
              }
          }, false);

      }

  };

  Slick.prototype.registerBreakpoints = function() {

      var _ = this, breakpoint, currentBreakpoint, l,
          responsiveSettings = _.options.responsive || null;

      if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

          _.respondTo = _.options.respondTo || 'window';

          for ( breakpoint in responsiveSettings ) {

              l = _.breakpoints.length-1;

              if (responsiveSettings.hasOwnProperty(breakpoint)) {
                  currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                  // loop through the breakpoints and cut out any existing
                  // ones with the same breakpoint number, we don't want dupes.
                  while( l >= 0 ) {
                      if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                          _.breakpoints.splice(l,1);
                      }
                      l--;
                  }

                  _.breakpoints.push(currentBreakpoint);
                  _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

              }

          }

          _.breakpoints.sort(function(a, b) {
              return ( _.options.mobileFirst ) ? a-b : b-a;
          });

      }

  };

  Slick.prototype.reinit = function() {

      var _ = this;

      _.$slides =
          _.$slideTrack
              .children(_.options.slide)
              .addClass('slick-slide');

      _.slideCount = _.$slides.length;

      if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
          _.currentSlide = _.currentSlide - _.options.slidesToScroll;
      }

      if (_.slideCount <= _.options.slidesToShow) {
          _.currentSlide = 0;
      }

      _.registerBreakpoints();

      _.setProps();
      _.setupInfinite();
      _.buildArrows();
      _.updateArrows();
      _.initArrowEvents();
      _.buildDots();
      _.updateDots();
      _.initDotEvents();
      _.cleanUpSlideEvents();
      _.initSlideEvents();

      _.checkResponsive(false, true);

      if (_.options.focusOnSelect === true) {
          $(_.$slideTrack).children().on('click.slick', _.selectHandler);
      }

      _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

      _.setPosition();
      _.focusHandler();

      _.paused = !_.options.autoplay;
      _.autoPlay();

      _.$slider.trigger('reInit', [_]);

  };

  Slick.prototype.resize = function() {

      var _ = this;

      if ($(window).width() !== _.windowWidth) {
          clearTimeout(_.windowDelay);
          _.windowDelay = window.setTimeout(function() {
              _.windowWidth = $(window).width();
              _.checkResponsive();
              if( !_.unslicked ) { _.setPosition(); }
          }, 50);
      }
  };

  Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

      var _ = this;

      if (typeof(index) === 'boolean') {
          removeBefore = index;
          index = removeBefore === true ? 0 : _.slideCount - 1;
      } else {
          index = removeBefore === true ? --index : index;
      }

      if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
          return false;
      }

      _.unload();

      if (removeAll === true) {
          _.$slideTrack.children().remove();
      } else {
          _.$slideTrack.children(this.options.slide).eq(index).remove();
      }

      _.$slides = _.$slideTrack.children(this.options.slide);

      _.$slideTrack.children(this.options.slide).detach();

      _.$slideTrack.append(_.$slides);

      _.$slidesCache = _.$slides;

      _.reinit();

  };

  Slick.prototype.setCSS = function(position) {

      var _ = this,
          positionProps = {},
          x, y;

      if (_.options.rtl === true) {
          position = -position;
      }
      x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
      y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

      positionProps[_.positionProp] = position;

      if (_.transformsEnabled === false) {
          _.$slideTrack.css(positionProps);
      } else {
          positionProps = {};
          if (_.cssTransitions === false) {
              positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
              _.$slideTrack.css(positionProps);
          } else {
              positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
              _.$slideTrack.css(positionProps);
          }
      }

  };

  Slick.prototype.setDimensions = function() {

      var _ = this;

      if (_.options.vertical === false) {
          if (_.options.centerMode === true) {
              _.$list.css({
                  padding: ('0px ' + _.options.centerPadding)
              });
          }
      } else {
          _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
          if (_.options.centerMode === true) {
              _.$list.css({
                  padding: (_.options.centerPadding + ' 0px')
              });
          }
      }

      _.listWidth = _.$list.width();
      _.listHeight = _.$list.height();


      if (_.options.vertical === false && _.options.variableWidth === false) {
          _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
          _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

      } else if (_.options.variableWidth === true) {
          _.$slideTrack.width(5000 * _.slideCount);
      } else {
          _.slideWidth = Math.ceil(_.listWidth);
          _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
      }

      var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
      if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

  };

  Slick.prototype.setFade = function() {

      var _ = this,
          targetLeft;

      _.$slides.each(function(index, element) {
          targetLeft = (_.slideWidth * index) * -1;
          if (_.options.rtl === true) {
              $(element).css({
                  position: 'relative',
                  right: targetLeft,
                  top: 0,
                  zIndex: _.options.zIndex - 2,
                  opacity: 0
              });
          } else {
              $(element).css({
                  position: 'relative',
                  left: targetLeft,
                  top: 0,
                  zIndex: _.options.zIndex - 2,
                  opacity: 0
              });
          }
      });

      _.$slides.eq(_.currentSlide).css({
          zIndex: _.options.zIndex - 1,
          opacity: 1
      });

  };

  Slick.prototype.setHeight = function() {

      var _ = this;

      if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
          var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
          _.$list.css('height', targetHeight);
      }

  };

  Slick.prototype.setOption =
  Slick.prototype.slickSetOption = function() {

      /**
       * accepts arguments in format of:
       *
       *  - for changing a single option's value:
       *     .slick("setOption", option, value, refresh )
       *
       *  - for changing a set of responsive options:
       *     .slick("setOption", 'responsive', [{}, ...], refresh )
       *
       *  - for updating multiple values at once (not responsive)
       *     .slick("setOption", { 'option': value, ... }, refresh )
       */

      var _ = this, l, item, option, value, refresh = false, type;

      if( $.type( arguments[0] ) === 'object' ) {

          option =  arguments[0];
          refresh = arguments[1];
          type = 'multiple';

      } else if ( $.type( arguments[0] ) === 'string' ) {

          option =  arguments[0];
          value = arguments[1];
          refresh = arguments[2];

          if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

              type = 'responsive';

          } else if ( typeof arguments[1] !== 'undefined' ) {

              type = 'single';

          }

      }

      if ( type === 'single' ) {

          _.options[option] = value;


      } else if ( type === 'multiple' ) {

          $.each( option , function( opt, val ) {

              _.options[opt] = val;

          });


      } else if ( type === 'responsive' ) {

          for ( item in value ) {

              if( $.type( _.options.responsive ) !== 'array' ) {

                  _.options.responsive = [ value[item] ];

              } else {

                  l = _.options.responsive.length-1;

                  // loop through the responsive object and splice out duplicates.
                  while( l >= 0 ) {

                      if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                          _.options.responsive.splice(l,1);

                      }

                      l--;

                  }

                  _.options.responsive.push( value[item] );

              }

          }

      }

      if ( refresh ) {

          _.unload();
          _.reinit();

      }

  };

  Slick.prototype.setPosition = function() {

      var _ = this;

      _.setDimensions();

      _.setHeight();

      if (_.options.fade === false) {
          _.setCSS(_.getLeft(_.currentSlide));
      } else {
          _.setFade();
      }

      _.$slider.trigger('setPosition', [_]);

  };

  Slick.prototype.setProps = function() {

      var _ = this,
          bodyStyle = document.body.style;

      _.positionProp = _.options.vertical === true ? 'top' : 'left';

      if (_.positionProp === 'top') {
          _.$slider.addClass('slick-vertical');
      } else {
          _.$slider.removeClass('slick-vertical');
      }

      if (bodyStyle.WebkitTransition !== undefined ||
          bodyStyle.MozTransition !== undefined ||
          bodyStyle.msTransition !== undefined) {
          if (_.options.useCSS === true) {
              _.cssTransitions = true;
          }
      }

      if ( _.options.fade ) {
          if ( typeof _.options.zIndex === 'number' ) {
              if( _.options.zIndex < 3 ) {
                  _.options.zIndex = 3;
              }
          } else {
              _.options.zIndex = _.defaults.zIndex;
          }
      }

      if (bodyStyle.OTransform !== undefined) {
          _.animType = 'OTransform';
          _.transformType = '-o-transform';
          _.transitionType = 'OTransition';
          if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
      }
      if (bodyStyle.MozTransform !== undefined) {
          _.animType = 'MozTransform';
          _.transformType = '-moz-transform';
          _.transitionType = 'MozTransition';
          if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
      }
      if (bodyStyle.webkitTransform !== undefined) {
          _.animType = 'webkitTransform';
          _.transformType = '-webkit-transform';
          _.transitionType = 'webkitTransition';
          if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
      }
      if (bodyStyle.msTransform !== undefined) {
          _.animType = 'msTransform';
          _.transformType = '-ms-transform';
          _.transitionType = 'msTransition';
          if (bodyStyle.msTransform === undefined) _.animType = false;
      }
      if (bodyStyle.transform !== undefined && _.animType !== false) {
          _.animType = 'transform';
          _.transformType = 'transform';
          _.transitionType = 'transition';
      }
      _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
  };


  Slick.prototype.setSlideClasses = function(index) {

      var _ = this,
          centerOffset, allSlides, indexOffset, remainder;

      allSlides = _.$slider
          .find('.slick-slide')
          .removeClass('slick-active slick-center slick-current')
          .attr('aria-hidden', 'true');

      _.$slides
          .eq(index)
          .addClass('slick-current');

      if (_.options.centerMode === true) {

          var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

          centerOffset = Math.floor(_.options.slidesToShow / 2);

          if (_.options.infinite === true) {

              if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                  _.$slides
                      .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                      .addClass('slick-active')
                      .attr('aria-hidden', 'false');

              } else {

                  indexOffset = _.options.slidesToShow + index;
                  allSlides
                      .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                      .addClass('slick-active')
                      .attr('aria-hidden', 'false');

              }

              if (index === 0) {

                  allSlides
                      .eq(allSlides.length - 1 - _.options.slidesToShow)
                      .addClass('slick-center');

              } else if (index === _.slideCount - 1) {

                  allSlides
                      .eq(_.options.slidesToShow)
                      .addClass('slick-center');

              }

          }

          _.$slides
              .eq(index)
              .addClass('slick-center');

      } else {

          if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

              _.$slides
                  .slice(index, index + _.options.slidesToShow)
                  .addClass('slick-active')
                  .attr('aria-hidden', 'false');

          } else if (allSlides.length <= _.options.slidesToShow) {

              allSlides
                  .addClass('slick-active')
                  .attr('aria-hidden', 'false');

          } else {

              remainder = _.slideCount % _.options.slidesToShow;
              indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

              if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                  allSlides
                      .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                      .addClass('slick-active')
                      .attr('aria-hidden', 'false');

              } else {

                  allSlides
                      .slice(indexOffset, indexOffset + _.options.slidesToShow)
                      .addClass('slick-active')
                      .attr('aria-hidden', 'false');

              }

          }

      }

      if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
          _.lazyLoad();
      }
  };

  Slick.prototype.setupInfinite = function() {

      var _ = this,
          i, slideIndex, infiniteCount;

      if (_.options.fade === true) {
          _.options.centerMode = false;
      }

      if (_.options.infinite === true && _.options.fade === false) {

          slideIndex = null;

          if (_.slideCount > _.options.slidesToShow) {

              if (_.options.centerMode === true) {
                  infiniteCount = _.options.slidesToShow + 1;
              } else {
                  infiniteCount = _.options.slidesToShow;
              }

              for (i = _.slideCount; i > (_.slideCount -
                      infiniteCount); i -= 1) {
                  slideIndex = i - 1;
                  $(_.$slides[slideIndex]).clone(true).attr('id', '')
                      .attr('data-slick-index', slideIndex - _.slideCount)
                      .prependTo(_.$slideTrack).addClass('slick-cloned');
              }
              for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                  slideIndex = i;
                  $(_.$slides[slideIndex]).clone(true).attr('id', '')
                      .attr('data-slick-index', slideIndex + _.slideCount)
                      .appendTo(_.$slideTrack).addClass('slick-cloned');
              }
              _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                  $(this).attr('id', '');
              });

          }

      }

  };

  Slick.prototype.interrupt = function( toggle ) {

      var _ = this;

      if( !toggle ) {
          _.autoPlay();
      }
      _.interrupted = toggle;

  };

  Slick.prototype.selectHandler = function(event) {

      var _ = this;

      var targetElement =
          $(event.target).is('.slick-slide') ?
              $(event.target) :
              $(event.target).parents('.slick-slide');

      var index = parseInt(targetElement.attr('data-slick-index'));

      if (!index) index = 0;

      if (_.slideCount <= _.options.slidesToShow) {

          _.slideHandler(index, false, true);
          return;

      }

      _.slideHandler(index);

  };

  Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

      var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
          _ = this, navTarget;

      sync = sync || false;

      if (_.animating === true && _.options.waitForAnimate === true) {
          return;
      }

      if (_.options.fade === true && _.currentSlide === index) {
          return;
      }

      if (sync === false) {
          _.asNavFor(index);
      }

      targetSlide = index;
      targetLeft = _.getLeft(targetSlide);
      slideLeft = _.getLeft(_.currentSlide);

      _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

      if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
          if (_.options.fade === false) {
              targetSlide = _.currentSlide;
              if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                  _.animateSlide(slideLeft, function() {
                      _.postSlide(targetSlide);
                  });
              } else {
                  _.postSlide(targetSlide);
              }
          }
          return;
      } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
          if (_.options.fade === false) {
              targetSlide = _.currentSlide;
              if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                  _.animateSlide(slideLeft, function() {
                      _.postSlide(targetSlide);
                  });
              } else {
                  _.postSlide(targetSlide);
              }
          }
          return;
      }

      if ( _.options.autoplay ) {
          clearInterval(_.autoPlayTimer);
      }

      if (targetSlide < 0) {
          if (_.slideCount % _.options.slidesToScroll !== 0) {
              animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
          } else {
              animSlide = _.slideCount + targetSlide;
          }
      } else if (targetSlide >= _.slideCount) {
          if (_.slideCount % _.options.slidesToScroll !== 0) {
              animSlide = 0;
          } else {
              animSlide = targetSlide - _.slideCount;
          }
      } else {
          animSlide = targetSlide;
      }

      _.animating = true;

      _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

      oldSlide = _.currentSlide;
      _.currentSlide = animSlide;

      _.setSlideClasses(_.currentSlide);

      if ( _.options.asNavFor ) {

          navTarget = _.getNavTarget();
          navTarget = navTarget.slick('getSlick');

          if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
              navTarget.setSlideClasses(_.currentSlide);
          }

      }

      _.updateDots();
      _.updateArrows();

      if (_.options.fade === true) {
          if (dontAnimate !== true) {

              _.fadeSlideOut(oldSlide);

              _.fadeSlide(animSlide, function() {
                  _.postSlide(animSlide);
              });

          } else {
              _.postSlide(animSlide);
          }
          _.animateHeight();
          return;
      }

      if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(targetLeft, function() {
              _.postSlide(animSlide);
          });
      } else {
          _.postSlide(animSlide);
      }

  };

  Slick.prototype.startLoad = function() {

      var _ = this;

      if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

          _.$prevArrow.hide();
          _.$nextArrow.hide();

      }

      if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

          _.$dots.hide();

      }

      _.$slider.addClass('slick-loading');

  };

  Slick.prototype.swipeDirection = function() {

      var xDist, yDist, r, swipeAngle, _ = this;

      xDist = _.touchObject.startX - _.touchObject.curX;
      yDist = _.touchObject.startY - _.touchObject.curY;
      r = Math.atan2(yDist, xDist);

      swipeAngle = Math.round(r * 180 / Math.PI);
      if (swipeAngle < 0) {
          swipeAngle = 360 - Math.abs(swipeAngle);
      }

      if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
          return (_.options.rtl === false ? 'left' : 'right');
      }
      if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
          return (_.options.rtl === false ? 'left' : 'right');
      }
      if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
          return (_.options.rtl === false ? 'right' : 'left');
      }
      if (_.options.verticalSwiping === true) {
          if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
              return 'down';
          } else {
              return 'up';
          }
      }

      return 'vertical';

  };

  Slick.prototype.swipeEnd = function(event) {

      var _ = this,
          slideCount,
          direction;

      _.dragging = false;
      _.swiping = false;

      if (_.scrolling) {
          _.scrolling = false;
          return false;
      }

      _.interrupted = false;
      _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

      if ( _.touchObject.curX === undefined ) {
          return false;
      }

      if ( _.touchObject.edgeHit === true ) {
          _.$slider.trigger('edge', [_, _.swipeDirection() ]);
      }

      if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

          direction = _.swipeDirection();

          switch ( direction ) {

              case 'left':
              case 'down':

                  slideCount =
                      _.options.swipeToSlide ?
                          _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                          _.currentSlide + _.getSlideCount();

                  _.currentDirection = 0;

                  break;

              case 'right':
              case 'up':

                  slideCount =
                      _.options.swipeToSlide ?
                          _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                          _.currentSlide - _.getSlideCount();

                  _.currentDirection = 1;

                  break;

              default:


          }

          if( direction != 'vertical' ) {

              _.slideHandler( slideCount );
              _.touchObject = {};
              _.$slider.trigger('swipe', [_, direction ]);

          }

      } else {

          if ( _.touchObject.startX !== _.touchObject.curX ) {

              _.slideHandler( _.currentSlide );
              _.touchObject = {};

          }

      }

  };

  Slick.prototype.swipeHandler = function(event) {

      var _ = this;

      if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
          return;
      } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
          return;
      }

      _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
          event.originalEvent.touches.length : 1;

      _.touchObject.minSwipe = _.listWidth / _.options
          .touchThreshold;

      if (_.options.verticalSwiping === true) {
          _.touchObject.minSwipe = _.listHeight / _.options
              .touchThreshold;
      }

      switch (event.data.action) {

          case 'start':
              _.swipeStart(event);
              break;

          case 'move':
              _.swipeMove(event);
              break;

          case 'end':
              _.swipeEnd(event);
              break;

      }

  };

  Slick.prototype.swipeMove = function(event) {

      var _ = this,
          edgeWasHit = false,
          curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

      touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

      if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
          return false;
      }

      curLeft = _.getLeft(_.currentSlide);

      _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
      _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

      _.touchObject.swipeLength = Math.round(Math.sqrt(
          Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

      verticalSwipeLength = Math.round(Math.sqrt(
          Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

      if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
          _.scrolling = true;
          return false;
      }

      if (_.options.verticalSwiping === true) {
          _.touchObject.swipeLength = verticalSwipeLength;
      }

      swipeDirection = _.swipeDirection();

      if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
          _.swiping = true;
          event.preventDefault();
      }

      positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
      if (_.options.verticalSwiping === true) {
          positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
      }


      swipeLength = _.touchObject.swipeLength;

      _.touchObject.edgeHit = false;

      if (_.options.infinite === false) {
          if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
              swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
              _.touchObject.edgeHit = true;
          }
      }

      if (_.options.vertical === false) {
          _.swipeLeft = curLeft + swipeLength * positionOffset;
      } else {
          _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
      }
      if (_.options.verticalSwiping === true) {
          _.swipeLeft = curLeft + swipeLength * positionOffset;
      }

      if (_.options.fade === true || _.options.touchMove === false) {
          return false;
      }

      if (_.animating === true) {
          _.swipeLeft = null;
          return false;
      }

      _.setCSS(_.swipeLeft);

  };

  Slick.prototype.swipeStart = function(event) {

      var _ = this,
          touches;

      _.interrupted = true;

      if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
          _.touchObject = {};
          return false;
      }

      if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
          touches = event.originalEvent.touches[0];
      }

      _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
      _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

      _.dragging = true;

  };

  Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

      var _ = this;

      if (_.$slidesCache !== null) {

          _.unload();

          _.$slideTrack.children(this.options.slide).detach();

          _.$slidesCache.appendTo(_.$slideTrack);

          _.reinit();

      }

  };

  Slick.prototype.unload = function() {

      var _ = this;

      $('.slick-cloned', _.$slider).remove();

      if (_.$dots) {
          _.$dots.remove();
      }

      if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
          _.$prevArrow.remove();
      }

      if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
          _.$nextArrow.remove();
      }

      _.$slides
          .removeClass('slick-slide slick-active slick-visible slick-current')
          .attr('aria-hidden', 'true')
          .css('width', '');

  };

  Slick.prototype.unslick = function(fromBreakpoint) {

      var _ = this;
      _.$slider.trigger('unslick', [_, fromBreakpoint]);
      _.destroy();

  };

  Slick.prototype.updateArrows = function() {

      var _ = this,
          centerOffset;

      centerOffset = Math.floor(_.options.slidesToShow / 2);

      if ( _.options.arrows === true &&
          _.slideCount > _.options.slidesToShow &&
          !_.options.infinite ) {

          _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
          _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

          if (_.currentSlide === 0) {

              _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
              _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

          } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

              _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
              _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

          } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

              _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
              _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

          }

      }

  };

  Slick.prototype.updateDots = function() {

      var _ = this;

      if (_.$dots !== null) {

          _.$dots
              .find('li')
                  .removeClass('slick-active')
                  .end();

          _.$dots
              .find('li')
              .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
              .addClass('slick-active');

      }

  };

  Slick.prototype.visibility = function() {

      var _ = this;

      if ( _.options.autoplay ) {

          if ( document[_.hidden] ) {

              _.interrupted = true;

          } else {

              _.interrupted = false;

          }

      }

  };

  $.fn.slick = function() {
      var _ = this,
          opt = arguments[0],
          args = Array.prototype.slice.call(arguments, 1),
          l = _.length,
          i,
          ret;
      for (i = 0; i < l; i++) {
          if (typeof opt == 'object' || typeof opt == 'undefined')
              _[i].slick = new Slick(_[i], opt);
          else
              ret = _[i].slick[opt].apply(_[i].slick, args);
          if (typeof ret != 'undefined') return ret;
      }
      return _;
  };

}));

/*!
 * Bootstrap-select v1.13.2 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2018 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */

!function(e,t){void 0===e&&void 0!==window&&(e=window),"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery")):t(e.jQuery)}(this,function(e){!function(F){"use strict";var e,a,t,i=document.createElement("_");if(i.classList.toggle("c3",!1),i.classList.contains("c3")){var s=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(e,t){return 1 in arguments&&!this.contains(e)==!t?t:s.call(this,e)}}function S(e){var t,i=[],s=e&&e.options;if(e.multiple)for(var n=0,o=s.length;n<o;n++)(t=s[n]).selected&&i.push(t.value||t.text);else i=e.value;return i}String.prototype.startsWith||(e=function(){try{var e={},t=Object.defineProperty,i=t(e,e,e)&&t}catch(e){}return i}(),a={}.toString,t=function(e){if(null==this)throw new TypeError;var t=String(this);if(e&&"[object RegExp]"==a.call(e))throw new TypeError;var i=t.length,s=String(e),n=s.length,o=1<arguments.length?arguments[1]:void 0,l=o?Number(o):0;l!=l&&(l=0);var r=Math.min(Math.max(l,0),i);if(i<n+r)return!1;for(var c=-1;++c<n;)if(t.charCodeAt(r+c)!=s.charCodeAt(c))return!1;return!0},e?e(String.prototype,"startsWith",{value:t,configurable:!0,writable:!0}):String.prototype.startsWith=t),Object.keys||(Object.keys=function(e,t,i){for(t in i=[],e)i.hasOwnProperty.call(e,t)&&i.push(t);return i});var n={useDefault:!1,_set:F.valHooks.select.set};F.valHooks.select.set=function(e,t){return t&&!n.useDefault&&F(e).data("selected",!0),n._set.apply(this,arguments)};var y=null,o=function(){try{return new Event("change"),!0}catch(e){return!1}}();function $(e,t,i,s){for(var n=["content","subtext","tokens"],o=!1,l=0;l<n.length;l++){var r=n[l],c=e[r];if(c&&(c=c.toString(),"content"===r&&(c=c.replace(/<[^>]+>/g,"")),s&&(c=d(c)),c=c.toUpperCase(),o="contains"===i?0<=c.indexOf(t):c.startsWith(t)))break}return o}function O(e){return parseInt(e,10)||0}function d(e){return F.each([{re:/[\xC0-\xC6]/g,ch:"A"},{re:/[\xE0-\xE6]/g,ch:"a"},{re:/[\xC8-\xCB]/g,ch:"E"},{re:/[\xE8-\xEB]/g,ch:"e"},{re:/[\xCC-\xCF]/g,ch:"I"},{re:/[\xEC-\xEF]/g,ch:"i"},{re:/[\xD2-\xD6]/g,ch:"O"},{re:/[\xF2-\xF6]/g,ch:"o"},{re:/[\xD9-\xDC]/g,ch:"U"},{re:/[\xF9-\xFC]/g,ch:"u"},{re:/[\xC7-\xE7]/g,ch:"c"},{re:/[\xD1]/g,ch:"N"},{re:/[\xF1]/g,ch:"n"}],function(){e=e?e.replace(this.re,this.ch):""}),e}F.fn.triggerNative=function(e){var t,i=this[0];i.dispatchEvent?(o?t=new Event(e,{bubbles:!0}):(t=document.createEvent("Event")).initEvent(e,!0,!1),i.dispatchEvent(t)):i.fireEvent?((t=document.createEventObject()).eventType=e,i.fireEvent("on"+e,t)):this.trigger(e)};var l=function(t){var i=function(e){return t[e]},e="(?:"+Object.keys(t).join("|")+")",s=RegExp(e),n=RegExp(e,"g");return function(e){return e=null==e?"":""+e,s.test(e)?e.replace(n,i):e}},G=l({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"}),f=l({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#x27;":"'","&#x60;":"`"}),E={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"},C=27,z=13,T=32,D=9,H=38,L=40,_={success:!1,major:"3"};try{_.full=(F.fn.dropdown.Constructor.VERSION||"").split(" ")[0].split("."),_.major=_.full[0],_.success=!0}catch(e){console.warn("There was an issue retrieving Bootstrap's version. Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.",e)}var q={DISABLED:"disabled",DIVIDER:"divider",SHOW:"open",DROPUP:"dropup",MENU:"dropdown-menu",MENURIGHT:"dropdown-menu-right",MENULEFT:"dropdown-menu-left",BUTTONCLASS:"btn-default",POPOVERHEADER:"popover-title"},N={MENU:"."+q.MENU};"4"===_.major&&(q.DIVIDER="dropdown-divider",q.SHOW="show",q.BUTTONCLASS="btn-light",q.POPOVERHEADER="popover-header");var A=new RegExp(H+"|"+L),P=new RegExp("^"+D+"$|"+C),c=(new RegExp(z+"|"+T),function(e,t){var i=this;n.useDefault||(F.valHooks.select.set=n._set,n.useDefault=!0),this.$element=F(e),this.$newElement=null,this.$button=null,this.$menu=null,this.options=t,this.selectpicker={main:{map:{newIndex:{},originalIndex:{}}},current:{map:{}},search:{map:{}},view:{},keydown:{keyHistory:"",resetKeyHistory:{start:function(){return setTimeout(function(){i.selectpicker.keydown.keyHistory=""},800)}}}},null===this.options.title&&(this.options.title=this.$element.attr("title"));var s=this.options.windowPadding;"number"==typeof s&&(this.options.windowPadding=[s,s,s,s]),this.val=c.prototype.val,this.render=c.prototype.render,this.refresh=c.prototype.refresh,this.setStyle=c.prototype.setStyle,this.selectAll=c.prototype.selectAll,this.deselectAll=c.prototype.deselectAll,this.destroy=c.prototype.destroy,this.remove=c.prototype.remove,this.show=c.prototype.show,this.hide=c.prototype.hide,this.init()});function r(e){var o,l=arguments,r=e;if([].shift.apply(l),!_.success){try{_.full=(F.fn.dropdown.Constructor.VERSION||"").split(" ")[0].split(".")}catch(e){_.full=c.BootstrapVersion.split(" ")[0].split(".")}_.major=_.full[0],_.success=!0,"4"===_.major&&(q.DIVIDER="dropdown-divider",q.SHOW="show",q.BUTTONCLASS="btn-light",c.DEFAULTS.style=q.BUTTONCLASS="btn-light",q.POPOVERHEADER="popover-header")}var t=this.each(function(){var e=F(this);if(e.is("select")){var t=e.data("selectpicker"),i="object"==typeof r&&r;if(t){if(i)for(var s in i)i.hasOwnProperty(s)&&(t.options[s]=i[s])}else{var n=F.extend({},c.DEFAULTS,F.fn.selectpicker.defaults||{},e.data(),i);n.template=F.extend({},c.DEFAULTS.template,F.fn.selectpicker.defaults?F.fn.selectpicker.defaults.template:{},e.data().template,i.template),e.data("selectpicker",t=new c(this,n))}"string"==typeof r&&(o=t[r]instanceof Function?t[r].apply(t,l):t.options[r])}});return void 0!==o?o:t}c.VERSION="1.13.2",c.BootstrapVersion=_.major,c.DEFAULTS={noneSelectedText:"Nothing selected",noneResultsText:"No results matched {0}",countSelectedText:function(e,t){return 1==e?"{0} item selected":"{0} items selected"},maxOptionsText:function(e,t){return[1==e?"Limit reached ({n} item max)":"Limit reached ({n} items max)",1==t?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)"]},selectAllText:"Select All",deselectAllText:"Deselect All",doneButton:!1,doneButtonText:"Close",multipleSeparator:", ",styleBase:"btn",style:q.BUTTONCLASS,size:"auto",title:null,selectedTextFormat:"values",width:!1,container:!1,hideDisabled:!1,showSubtext:!1,showIcon:!0,showContent:!0,dropupAuto:!0,header:!1,liveSearch:!1,liveSearchPlaceholder:null,liveSearchNormalize:!1,liveSearchStyle:"contains",actionsBox:!1,iconBase:"glyphicon",tickIcon:"glyphicon-ok",showTick:!1,template:{caret:'<span class="caret"></span>'},maxOptions:!1,mobile:!1,selectOnTab:!1,dropdownAlignRight:!1,windowPadding:0,virtualScroll:600,display:!1},"4"===_.major&&(c.DEFAULTS.style="btn-light",c.DEFAULTS.iconBase="",c.DEFAULTS.tickIcon="bs-ok-default"),c.prototype={constructor:c,init:function(){var i=this,e=this.$element.attr("id");this.$element.addClass("bs-select-hidden"),this.multiple=this.$element.prop("multiple"),this.autofocus=this.$element.prop("autofocus"),this.$newElement=this.createDropdown(),this.createLi(),this.$element.after(this.$newElement).prependTo(this.$newElement),this.$button=this.$newElement.children("button"),this.$menu=this.$newElement.children(N.MENU),this.$menuInner=this.$menu.children(".inner"),this.$searchbox=this.$menu.find("input"),this.$element.removeClass("bs-select-hidden"),!0===this.options.dropdownAlignRight&&this.$menu.addClass(q.MENURIGHT),void 0!==e&&this.$button.attr("data-id",e),this.checkDisabled(),this.clickListener(),this.options.liveSearch&&this.liveSearchListener(),this.render(),this.setStyle(),this.setWidth(),this.options.container?this.selectPosition():this.$element.on("hide.bs.select",function(){if(i.isVirtual()){var e=i.$menuInner[0],t=e.firstChild.cloneNode(!1);e.replaceChild(t,e.firstChild),e.scrollTop=0}}),this.$menu.data("this",this),this.$newElement.data("this",this),this.options.mobile&&this.mobile(),this.$newElement.on({"hide.bs.dropdown":function(e){i.$menuInner.attr("aria-expanded",!1),i.$element.trigger("hide.bs.select",e)},"hidden.bs.dropdown":function(e){i.$element.trigger("hidden.bs.select",e)},"show.bs.dropdown":function(e){i.$menuInner.attr("aria-expanded",!0),i.$element.trigger("show.bs.select",e)},"shown.bs.dropdown":function(e){i.$element.trigger("shown.bs.select",e)}}),i.$element[0].hasAttribute("required")&&this.$element.on("invalid",function(){i.$button.addClass("bs-invalid"),i.$element.on({"shown.bs.select":function(){i.$element.val(i.$element.val()).off("shown.bs.select")},"rendered.bs.select":function(){this.validity.valid&&i.$button.removeClass("bs-invalid"),i.$element.off("rendered.bs.select")}}),i.$button.on("blur.bs.select",function(){i.$element.focus().blur(),i.$button.off("blur.bs.select")})}),setTimeout(function(){i.$element.trigger("loaded.bs.select")})},createDropdown:function(){var e=this.multiple||this.options.showTick?" show-tick":"",t=this.autofocus?" autofocus":"",i=this.options.header?'<div class="'+q.POPOVERHEADER+'"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>":"",s=this.options.liveSearch?'<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"'+(null===this.options.liveSearchPlaceholder?"":' placeholder="'+G(this.options.liveSearchPlaceholder)+'"')+' role="textbox" aria-label="Search"></div>':"",n=this.multiple&&this.options.actionsBox?'<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn '+q.BUTTONCLASS+'">'+this.options.selectAllText+'</button><button type="button" class="actions-btn bs-deselect-all btn '+q.BUTTONCLASS+'">'+this.options.deselectAllText+"</button></div></div>":"",o=this.multiple&&this.options.doneButton?'<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm '+q.BUTTONCLASS+'">'+this.options.doneButtonText+"</button></div></div>":"",l='<div class="dropdown bootstrap-select'+e+'"><button type="button" class="'+this.options.styleBase+' dropdown-toggle" '+("static"===this.options.display?'data-display="static"':"")+'data-toggle="dropdown"'+t+' role="button"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner"></div></div> </div>'+("4"===_.major?"":'<span class="bs-caret">'+this.options.template.caret+"</span>")+'</button><div class="'+q.MENU+" "+("4"===_.major?"":q.SHOW)+'" role="combobox">'+i+s+n+'<div class="inner '+q.SHOW+'" role="listbox" aria-expanded="false" tabindex="-1"><ul class="'+q.MENU+" inner "+("4"===_.major?q.SHOW:"")+'"></ul></div>'+o+"</div></div>";return F(l)},setPositionData:function(){this.selectpicker.view.canHighlight=[];for(var e=0;e<this.selectpicker.current.data.length;e++){var t=this.selectpicker.current.data[e],i=!0;"divider"===t.type?(i=!1,t.height=this.sizeInfo.dividerHeight):"optgroup-label"===t.type?(i=!1,t.height=this.sizeInfo.dropdownHeaderHeight):t.height=this.sizeInfo.liHeight,t.disabled&&(i=!1),this.selectpicker.view.canHighlight.push(i),t.position=(0===e?0:this.selectpicker.current.data[e-1].position)+t.height}},isVirtual:function(){return!1!==this.options.virtualScroll&&this.selectpicker.main.elements.length>=this.options.virtualScroll||!0===this.options.virtualScroll},createView:function(C,e){e=e||0;var O=this;this.selectpicker.current=C?this.selectpicker.search:this.selectpicker.main;var z,T,D=[];function i(e,t){var i,s,n,o,l,r,c,a,d,h=O.selectpicker.current.elements.length,p=[],u=void 0,f=!0,m=O.isVirtual();O.selectpicker.view.scrollTop=e,!0===m&&O.sizeInfo.hasScrollBar&&O.$menu[0].offsetWidth>O.sizeInfo.totalMenuWidth&&(O.sizeInfo.menuWidth=O.$menu[0].offsetWidth,O.sizeInfo.totalMenuWidth=O.sizeInfo.menuWidth+O.sizeInfo.scrollBarWidth,O.$menu.css("min-width",O.sizeInfo.menuWidth)),i=Math.ceil(O.sizeInfo.menuInnerHeight/O.sizeInfo.liHeight*1.5),s=Math.round(h/i)||1;for(var v=0;v<s;v++){var g=(v+1)*i;if(v===s-1&&(g=h),p[v]=[v*i+(v?1:0),g],!h)break;void 0===u&&e<=O.selectpicker.current.data[g-1].position-O.sizeInfo.menuInnerHeight&&(u=v)}if(void 0===u&&(u=0),l=[O.selectpicker.view.position0,O.selectpicker.view.position1],n=Math.max(0,u-1),o=Math.min(s-1,u+1),O.selectpicker.view.position0=Math.max(0,p[n][0])||0,O.selectpicker.view.position1=Math.min(h,p[o][1])||0,r=l[0]!==O.selectpicker.view.position0||l[1]!==O.selectpicker.view.position1,void 0!==O.activeIndex&&(T=O.selectpicker.current.elements[O.selectpicker.current.map.newIndex[O.prevActiveIndex]],D=O.selectpicker.current.elements[O.selectpicker.current.map.newIndex[O.activeIndex]],z=O.selectpicker.current.elements[O.selectpicker.current.map.newIndex[O.selectedIndex]],t&&(O.activeIndex!==O.selectedIndex&&(D.classList.remove("active"),D.firstChild&&D.firstChild.classList.remove("active")),O.activeIndex=void 0),O.activeIndex&&O.activeIndex!==O.selectedIndex&&z&&z.length&&(z.classList.remove("active"),z.firstChild&&z.firstChild.classList.remove("active"))),void 0!==O.prevActiveIndex&&O.prevActiveIndex!==O.activeIndex&&O.prevActiveIndex!==O.selectedIndex&&T&&T.length&&(T.classList.remove("active"),T.firstChild&&T.firstChild.classList.remove("active")),(t||r)&&(c=O.selectpicker.view.visibleElements?O.selectpicker.view.visibleElements.slice():[],O.selectpicker.view.visibleElements=O.selectpicker.current.elements.slice(O.selectpicker.view.position0,O.selectpicker.view.position1),O.setOptionStatus(),(C||!1===m&&t)&&(a=c,d=O.selectpicker.view.visibleElements,f=!(a.length===d.length&&a.every(function(e,t){return e===d[t]}))),(t||!0===m)&&f)){var b,w,x=O.$menuInner[0],I=document.createDocumentFragment(),k=x.firstChild.cloneNode(!1),$=!0===m?O.selectpicker.view.visibleElements:O.selectpicker.current.elements;x.replaceChild(k,x.firstChild);v=0;for(var E=$.length;v<E;v++)I.appendChild($[v]);!0===m&&(b=0===O.selectpicker.view.position0?0:O.selectpicker.current.data[O.selectpicker.view.position0-1].position,w=O.selectpicker.view.position1>h-1?0:O.selectpicker.current.data[h-1].position-O.selectpicker.current.data[O.selectpicker.view.position1-1].position,x.firstChild.style.marginTop=b+"px",x.firstChild.style.marginBottom=w+"px"),x.firstChild.appendChild(I)}if(O.prevActiveIndex=O.activeIndex,O.options.liveSearch){if(C&&t){var S,y=0;O.selectpicker.view.canHighlight[y]||(y=1+O.selectpicker.view.canHighlight.slice(1).indexOf(!0)),S=O.selectpicker.view.visibleElements[y],O.selectpicker.view.currentActive&&(O.selectpicker.view.currentActive.classList.remove("active"),O.selectpicker.view.currentActive.firstChild&&O.selectpicker.view.currentActive.firstChild.classList.remove("active")),S&&(S.classList.add("active"),S.firstChild&&S.firstChild.classList.add("active")),O.activeIndex=O.selectpicker.current.map.originalIndex[y]}}else O.$menuInner.focus()}this.setPositionData(),i(e,!0),this.$menuInner.off("scroll.createView").on("scroll.createView",function(e,t){O.noScroll||i(this.scrollTop,t),O.noScroll=!1}),F(window).off("resize.createView").on("resize.createView",function(){i(O.$menuInner[0].scrollTop)})},createLi:function(){var z,T=this,D=[],H=0,L=0,N=[],A=0,P=0,R=-1;this.selectpicker.view.titleOption||(this.selectpicker.view.titleOption=document.createElement("option"));var W={span:document.createElement("span"),subtext:document.createElement("small"),a:document.createElement("a"),li:document.createElement("li"),whitespace:document.createTextNode(" ")},e=W.span.cloneNode(!1),B=document.createDocumentFragment();e.className=T.options.iconBase+" "+T.options.tickIcon+" check-mark",W.a.appendChild(e),W.a.setAttribute("role","option"),W.subtext.className="text-muted",W.text=W.span.cloneNode(!1),W.text.className="text";var M=function(e,t,i,s){var n=W.li.cloneNode(!1);return e&&(1===e.nodeType||11===e.nodeType?n.appendChild(e):n.innerHTML=e),void 0!==i&&""!==i&&(n.className=i),null!=s&&n.classList.add("optgroup-"+s),n},U=function(e,t,i){var s=W.a.cloneNode(!0);return e&&(11===e.nodeType?s.appendChild(e):s.insertAdjacentHTML("beforeend",e)),void 0!==t&""!==t&&(s.className=t),"4"===_.major&&s.classList.add("dropdown-item"),i&&s.setAttribute("style",i),s},V=function(e){var t,i,s=W.text.cloneNode(!1);if(e.optionContent)s.innerHTML=e.optionContent;else{if(s.textContent=e.text,e.optionIcon){var n=W.whitespace.cloneNode(!1);(i=W.span.cloneNode(!1)).className=T.options.iconBase+" "+e.optionIcon,B.appendChild(i),B.appendChild(n)}e.optionSubtext&&((t=W.subtext.cloneNode(!1)).innerHTML=e.optionSubtext,s.appendChild(t))}return B.appendChild(s),B};if(this.options.title&&!this.multiple){R--;var t=this.$element[0],i=!1,s=!this.selectpicker.view.titleOption.parentNode;if(s)this.selectpicker.view.titleOption.className="bs-title-option",this.selectpicker.view.titleOption.value="",i=void 0===F(t.options[t.selectedIndex]).attr("selected")&&void 0===this.$element.data("selected");(s||0!==this.selectpicker.view.titleOption.index)&&t.insertBefore(this.selectpicker.view.titleOption,t.firstChild),i&&(t.selectedIndex=0)}var j=this.$element.find("option");j.each(function(e){var t=F(this);if(R++,!t.hasClass("bs-title-option")){var i,s,n=t.data(),o=this.className||"",l=G(this.style.cssText),r=n.content,c=this.textContent,a=n.tokens,d=n.subtext,h=n.icon,p=t.parent(),u=p[0],f="OPTGROUP"===u.tagName,m=f&&u.disabled,v=this.disabled||m,g=this.previousElementSibling&&"OPTGROUP"===this.previousElementSibling.tagName,b=p.data();if(!0===n.hidden||T.options.hideDisabled&&(v&&!f||m)){i=n.prevHiddenIndex,t.next().data("prevHiddenIndex",void 0!==i?i:e),R--,g||void 0!==i&&(y=j[i].previousElementSibling)&&"OPTGROUP"===y.tagName&&!y.disabled&&(g=!0),g&&"divider"!==N[N.length-1].type&&(R++,D.push(M(!1,0,q.DIVIDER,A+"div")),N.push({type:"divider",optID:A}))}else{if(f&&!0!==n.divider){if(T.options.hideDisabled&&v){if(void 0===b.allOptionsDisabled){var w=p.children();p.data("allOptionsDisabled",w.filter(":disabled").length===w.length)}if(p.data("allOptionsDisabled"))return void R--}var x=" "+u.className||"";if(!this.previousElementSibling){A+=1;var I=u.label,k=G(I),$=b.subtext,E=b.icon;0!==e&&0<D.length&&(R++,D.push(M(!1,0,q.DIVIDER,A+"div")),N.push({type:"divider",optID:A})),R++;var S=function(e){var t,i,s=W.text.cloneNode(!1);if(s.innerHTML=e.labelEscaped,e.labelIcon){var n=W.whitespace.cloneNode(!1);(i=W.span.cloneNode(!1)).className=T.options.iconBase+" "+e.labelIcon,B.appendChild(i),B.appendChild(n)}return e.labelSubtext&&((t=W.subtext.cloneNode(!1)).textContent=e.labelSubtext,s.appendChild(t)),B.appendChild(s),B}({labelEscaped:k,labelSubtext:$,labelIcon:E});D.push(M(S,0,"dropdown-header"+x,A)),N.push({content:k,subtext:$,type:"optgroup-label",optID:A}),P=R-1}if(T.options.hideDisabled&&v||!0===n.hidden)return void R--;s=V({text:c,optionContent:r,optionSubtext:d,optionIcon:h}),D.push(M(U(s,"opt "+o+x,l),0,"",A)),N.push({content:r||c,subtext:d,tokens:a,type:"option",optID:A,headerIndex:P,lastIndex:P+u.childElementCount,originalIndex:e,data:n}),H++}else if(!0===n.divider)D.push(M(!1,0,q.DIVIDER)),N.push({type:"divider",originalIndex:e,data:n});else{var y;if(!g&&T.options.hideDisabled)if(void 0!==(i=n.prevHiddenIndex))(y=j[i].previousElementSibling)&&"OPTGROUP"===y.tagName&&!y.disabled&&(g=!0);g&&"divider"!==N[N.length-1].type&&(R++,D.push(M(!1,0,q.DIVIDER,A+"div")),N.push({type:"divider",optID:A})),s=V({text:c,optionContent:r,optionSubtext:d,optionIcon:h}),D.push(M(U(s,o,l))),N.push({content:r||c,subtext:d,tokens:a,type:"option",originalIndex:e,data:n}),H++}T.selectpicker.main.map.newIndex[e]=R,T.selectpicker.main.map.originalIndex[R]=e;var C=N[N.length-1];C.disabled=v;var O=0;C.content&&(O+=C.content.length),C.subtext&&(O+=C.subtext.length),h&&(O+=1),L<O&&(L=O,z=D[D.length-1])}}}),this.selectpicker.main.elements=D,this.selectpicker.main.data=N,this.selectpicker.current=this.selectpicker.main,this.selectpicker.view.widestOption=z,this.selectpicker.view.availableOptionsCount=H},findLis:function(){return this.$menuInner.find(".inner > li")},render:function(){var e=this,t=this.$element.find("option"),i=[],s=[];this.togglePlaceholder(),this.tabIndex();for(var n=0,o=this.selectpicker.main.elements.length;n<o;n++){var l=t[this.selectpicker.main.map.originalIndex[n]];if(l&&l.selected&&(i.push(l),s.length<100&&"count"!==e.options.selectedTextFormat||1===i.length)){if(e.options.hideDisabled&&(l.disabled||"OPTGROUP"===l.parentNode.tagName&&l.parentNode.disabled))return;var r,c,a=this.selectpicker.main.data[n].data,d=a.icon&&e.options.showIcon?'<i class="'+e.options.iconBase+" "+a.icon+'"></i> ':"";r=e.options.showSubtext&&a.subtext&&!e.multiple?' <small class="text-muted">'+a.subtext+"</small>":"",c=l.title?l.title:a.content&&e.options.showContent?a.content.toString():d+l.innerHTML.trim()+r,s.push(c)}}var h=this.multiple?s.join(this.options.multipleSeparator):s[0];if(50<i.length&&(h+="..."),this.multiple&&-1!==this.options.selectedTextFormat.indexOf("count")){var p=this.options.selectedTextFormat.split(">");if(1<p.length&&i.length>p[1]||1===p.length&&2<=i.length){var u=this.selectpicker.view.availableOptionsCount;h=("function"==typeof this.options.countSelectedText?this.options.countSelectedText(i.length,u):this.options.countSelectedText).replace("{0}",i.length.toString()).replace("{1}",u.toString())}}null==this.options.title&&(this.options.title=this.$element.attr("title")),"static"==this.options.selectedTextFormat&&(h=this.options.title),h||(h=void 0!==this.options.title?this.options.title:this.options.noneSelectedText),this.$button[0].title=f(h.replace(/<[^>]*>?/g,"").trim()),this.$button.find(".filter-option-inner-inner")[0].innerHTML=h,this.$element.trigger("rendered.bs.select")},setStyle:function(e,t){this.$element.attr("class")&&this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,""));var i=e||this.options.style;"add"==t?this.$button.addClass(i):"remove"==t?this.$button.removeClass(i):(this.$button.removeClass(this.options.style),this.$button.addClass(i))},liHeight:function(e){if(e||!1!==this.options.size&&!this.sizeInfo){this.sizeInfo||(this.sizeInfo={});var t=document.createElement("div"),i=document.createElement("div"),s=document.createElement("div"),n=document.createElement("ul"),o=document.createElement("li"),l=document.createElement("li"),r=document.createElement("li"),c=document.createElement("a"),a=document.createElement("span"),d=this.options.header&&0<this.$menu.find("."+q.POPOVERHEADER).length?this.$menu.find("."+q.POPOVERHEADER)[0].cloneNode(!0):null,h=this.options.liveSearch?document.createElement("div"):null,p=this.options.actionsBox&&this.multiple&&0<this.$menu.find(".bs-actionsbox").length?this.$menu.find(".bs-actionsbox")[0].cloneNode(!0):null,u=this.options.doneButton&&this.multiple&&0<this.$menu.find(".bs-donebutton").length?this.$menu.find(".bs-donebutton")[0].cloneNode(!0):null;if(this.sizeInfo.selectWidth=this.$newElement[0].offsetWidth,a.className="text",c.className="dropdown-item "+this.$element.find("option")[0].className,t.className=this.$menu[0].parentNode.className+" "+q.SHOW,t.style.width=this.sizeInfo.selectWidth+"px","auto"===this.options.width&&(i.style.minWidth=0),i.className=q.MENU+" "+q.SHOW,s.className="inner "+q.SHOW,n.className=q.MENU+" inner "+("4"===_.major?q.SHOW:""),o.className=q.DIVIDER,l.className="dropdown-header",a.appendChild(document.createTextNode("Inner text")),c.appendChild(a),r.appendChild(c),l.appendChild(a.cloneNode(!0)),this.selectpicker.view.widestOption&&n.appendChild(this.selectpicker.view.widestOption.cloneNode(!0)),n.appendChild(r),n.appendChild(o),n.appendChild(l),d&&i.appendChild(d),h){var f=document.createElement("input");h.className="bs-searchbox",f.className="form-control",h.appendChild(f),i.appendChild(h)}p&&i.appendChild(p),s.appendChild(n),i.appendChild(s),u&&i.appendChild(u),t.appendChild(i),document.body.appendChild(t);var m,v=c.offsetHeight,g=l?l.offsetHeight:0,b=d?d.offsetHeight:0,w=h?h.offsetHeight:0,x=p?p.offsetHeight:0,I=u?u.offsetHeight:0,k=F(o).outerHeight(!0),$=!!window.getComputedStyle&&window.getComputedStyle(i),E=i.offsetWidth,S=$?null:F(i),y={vert:O($?$.paddingTop:S.css("paddingTop"))+O($?$.paddingBottom:S.css("paddingBottom"))+O($?$.borderTopWidth:S.css("borderTopWidth"))+O($?$.borderBottomWidth:S.css("borderBottomWidth")),horiz:O($?$.paddingLeft:S.css("paddingLeft"))+O($?$.paddingRight:S.css("paddingRight"))+O($?$.borderLeftWidth:S.css("borderLeftWidth"))+O($?$.borderRightWidth:S.css("borderRightWidth"))},C={vert:y.vert+O($?$.marginTop:S.css("marginTop"))+O($?$.marginBottom:S.css("marginBottom"))+2,horiz:y.horiz+O($?$.marginLeft:S.css("marginLeft"))+O($?$.marginRight:S.css("marginRight"))+2};s.style.overflowY="scroll",m=i.offsetWidth-E,document.body.removeChild(t),this.sizeInfo.liHeight=v,this.sizeInfo.dropdownHeaderHeight=g,this.sizeInfo.headerHeight=b,this.sizeInfo.searchHeight=w,this.sizeInfo.actionsHeight=x,this.sizeInfo.doneButtonHeight=I,this.sizeInfo.dividerHeight=k,this.sizeInfo.menuPadding=y,this.sizeInfo.menuExtras=C,this.sizeInfo.menuWidth=E,this.sizeInfo.totalMenuWidth=this.sizeInfo.menuWidth,this.sizeInfo.scrollBarWidth=m,this.sizeInfo.selectHeight=this.$newElement[0].offsetHeight,this.setPositionData()}},getSelectPosition:function(){var e,t=F(window),i=this.$newElement.offset(),s=F(this.options.container);this.options.container&&!s.is("body")?((e=s.offset()).top+=parseInt(s.css("borderTopWidth")),e.left+=parseInt(s.css("borderLeftWidth"))):e={top:0,left:0};var n=this.options.windowPadding;this.sizeInfo.selectOffsetTop=i.top-e.top-t.scrollTop(),this.sizeInfo.selectOffsetBot=t.height()-this.sizeInfo.selectOffsetTop-this.sizeInfo.selectHeight-e.top-n[2],this.sizeInfo.selectOffsetLeft=i.left-e.left-t.scrollLeft(),this.sizeInfo.selectOffsetRight=t.width()-this.sizeInfo.selectOffsetLeft-this.sizeInfo.selectWidth-e.left-n[1],this.sizeInfo.selectOffsetTop-=n[0],this.sizeInfo.selectOffsetLeft-=n[3]},setMenuSize:function(e){this.getSelectPosition();var t,i,s,n,o,l,r,c=this.sizeInfo.selectWidth,a=this.sizeInfo.liHeight,d=this.sizeInfo.headerHeight,h=this.sizeInfo.searchHeight,p=this.sizeInfo.actionsHeight,u=this.sizeInfo.doneButtonHeight,f=this.sizeInfo.dividerHeight,m=this.sizeInfo.menuPadding,v=0;if(this.options.dropupAuto&&(r=a*this.selectpicker.current.elements.length+m.vert,this.$newElement.toggleClass(q.DROPUP,this.sizeInfo.selectOffsetTop-this.sizeInfo.selectOffsetBot>this.sizeInfo.menuExtras.vert&&r+this.sizeInfo.menuExtras.vert+50>this.sizeInfo.selectOffsetBot)),"auto"===this.options.size)n=3<this.selectpicker.current.elements.length?3*this.sizeInfo.liHeight+this.sizeInfo.menuExtras.vert-2:0,i=this.sizeInfo.selectOffsetBot-this.sizeInfo.menuExtras.vert,s=n+d+h+p+u,l=Math.max(n-m.vert,0),this.$newElement.hasClass(q.DROPUP)&&(i=this.sizeInfo.selectOffsetTop-this.sizeInfo.menuExtras.vert),t=(o=i)-d-h-p-u-m.vert;else if(this.options.size&&"auto"!=this.options.size&&this.selectpicker.current.elements.length>this.options.size){for(var g=0;g<this.options.size;g++)"divider"===this.selectpicker.current.data[g].type&&v++;t=(i=a*this.options.size+v*f+m.vert)-m.vert,o=i+d+h+p+u,s=l=""}"auto"===this.options.dropdownAlignRight&&this.$menu.toggleClass(q.MENURIGHT,this.sizeInfo.selectOffsetLeft>this.sizeInfo.selectOffsetRight&&this.sizeInfo.selectOffsetRight<this.$menu[0].offsetWidth-c),this.$menu.css({"max-height":o+"px",overflow:"hidden","min-height":s+"px"}),this.$menuInner.css({"max-height":t+"px","overflow-y":"auto","min-height":l+"px"}),this.sizeInfo.menuInnerHeight=t,this.selectpicker.current.data.length&&this.selectpicker.current.data[this.selectpicker.current.data.length-1].position>this.sizeInfo.menuInnerHeight&&(this.sizeInfo.hasScrollBar=!0,this.sizeInfo.totalMenuWidth=this.sizeInfo.menuWidth+this.sizeInfo.scrollBarWidth,this.$menu.css("min-width",this.sizeInfo.totalMenuWidth)),this.dropdown&&this.dropdown._popper&&this.dropdown._popper.update()},setSize:function(e){if(this.liHeight(e),this.options.header&&this.$menu.css("padding-top",0),!1!==this.options.size){var t,i=this,s=F(window),n=0;this.setMenuSize(),"auto"===this.options.size?(this.$searchbox.off("input.setMenuSize propertychange.setMenuSize").on("input.setMenuSize propertychange.setMenuSize",function(){return i.setMenuSize()}),s.off("resize.setMenuSize scroll.setMenuSize").on("resize.setMenuSize scroll.setMenuSize",function(){return i.setMenuSize()})):this.options.size&&"auto"!=this.options.size&&this.selectpicker.current.elements.length>this.options.size&&(this.$searchbox.off("input.setMenuSize propertychange.setMenuSize"),s.off("resize.setMenuSize scroll.setMenuSize")),e?n=this.$menuInner[0].scrollTop:i.multiple||"number"==typeof(t=i.selectpicker.main.map.newIndex[i.$element[0].selectedIndex])&&!1!==i.options.size&&(n=(n=i.sizeInfo.liHeight*t)-i.sizeInfo.menuInnerHeight/2+i.sizeInfo.liHeight/2),i.createView(!1,n)}},setWidth:function(){var i=this;"auto"===this.options.width?requestAnimationFrame(function(){i.$menu.css("min-width","0"),i.liHeight(),i.setMenuSize();var e=i.$newElement.clone().appendTo("body"),t=e.css("width","auto").children("button").outerWidth();e.remove(),i.sizeInfo.selectWidth=Math.max(i.sizeInfo.totalMenuWidth,t),i.$newElement.css("width",i.sizeInfo.selectWidth+"px")}):"fit"===this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width","").addClass("fit-width")):this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width",this.options.width)):(this.$menu.css("min-width",""),this.$newElement.css("width","")),this.$newElement.hasClass("fit-width")&&"fit"!==this.options.width&&this.$newElement.removeClass("fit-width")},selectPosition:function(){this.$bsContainer=F('<div class="bs-container" />');var s,n,o,l=this,r=F(this.options.container),e=function(e){var t={},i=l.options.display||F.fn.dropdown.Constructor.Default.display;l.$bsContainer.addClass(e.attr("class").replace(/form-control|fit-width/gi,"")).toggleClass(q.DROPUP,e.hasClass(q.DROPUP)),s=e.offset(),r.is("body")?n={top:0,left:0}:((n=r.offset()).top+=parseInt(r.css("borderTopWidth"))-r.scrollTop(),n.left+=parseInt(r.css("borderLeftWidth"))-r.scrollLeft()),o=e.hasClass(q.DROPUP)?0:e[0].offsetHeight,(_.major<4||"static"===i)&&(t.top=s.top-n.top+o,t.left=s.left-n.left),t.width=e[0].offsetWidth,l.$bsContainer.css(t)};this.$button.on("click.bs.dropdown.data-api",function(){l.isDisabled()||(e(l.$newElement),l.$bsContainer.appendTo(l.options.container).toggleClass(q.SHOW,!l.$button.hasClass(q.SHOW)).append(l.$menu))}),F(window).on("resize scroll",function(){e(l.$newElement)}),this.$element.on("hide.bs.select",function(){l.$menu.data("height",l.$menu.height()),l.$bsContainer.detach()})},setOptionStatus:function(){var e=this,t=this.$element.find("option");if(e.noScroll=!1,e.selectpicker.view.visibleElements&&e.selectpicker.view.visibleElements.length)for(var i=0;i<e.selectpicker.view.visibleElements.length;i++){var s=e.selectpicker.current.map.originalIndex[i+e.selectpicker.view.position0],n=t[s];if(n){var o=this.selectpicker.main.map.newIndex[s],l=this.selectpicker.main.elements[o];e.setDisabled(s,n.disabled||"OPTGROUP"===n.parentNode.tagName&&n.parentNode.disabled,o,l),e.setSelected(s,n.selected,o,l)}}},setSelected:function(e,t,i,s){var n,o,l,r=void 0!==this.activeIndex,c=this.activeIndex===e||t&&!this.multiple&&!r;i||(i=this.selectpicker.main.map.newIndex[e]),s||(s=this.selectpicker.main.elements[i]),l=s.firstChild,t&&(this.selectedIndex=e),s.classList.toggle("selected",t),s.classList.toggle("active",c),c&&(this.selectpicker.view.currentActive=s,this.activeIndex=e),l&&(l.classList.toggle("selected",t),l.classList.toggle("active",c),l.setAttribute("aria-selected",t)),c||!r&&t&&void 0!==this.prevActiveIndex&&(n=this.selectpicker.main.map.newIndex[this.prevActiveIndex],(o=this.selectpicker.main.elements[n]).classList.toggle("selected",t),o.classList.remove("active"),o.firstChild&&(o.firstChild.classList.toggle("selected",t),o.firstChild.classList.remove("active")))},setDisabled:function(e,t,i,s){var n;i||(i=this.selectpicker.main.map.newIndex[e]),s||(s=this.selectpicker.main.elements[i]),n=s.firstChild,s.classList.toggle(q.DISABLED,t),n&&("4"===_.major&&n.classList.toggle(q.DISABLED,t),n.setAttribute("aria-disabled",t),t?n.setAttribute("tabindex",-1):n.setAttribute("tabindex",0))},isDisabled:function(){return this.$element[0].disabled},checkDisabled:function(){var e=this;this.isDisabled()?(this.$newElement.addClass(q.DISABLED),this.$button.addClass(q.DISABLED).attr("tabindex",-1).attr("aria-disabled",!0)):(this.$button.hasClass(q.DISABLED)&&(this.$newElement.removeClass(q.DISABLED),this.$button.removeClass(q.DISABLED).attr("aria-disabled",!1)),-1!=this.$button.attr("tabindex")||this.$element.data("tabindex")||this.$button.removeAttr("tabindex")),this.$button.click(function(){return!e.isDisabled()})},togglePlaceholder:function(){var e=this.$element[0],t=e.selectedIndex,i=-1===t;i||e.options[t].value||(i=!0),this.$button.toggleClass("bs-placeholder",i)},tabIndex:function(){this.$element.data("tabindex")!==this.$element.attr("tabindex")&&-98!==this.$element.attr("tabindex")&&"-98"!==this.$element.attr("tabindex")&&(this.$element.data("tabindex",this.$element.attr("tabindex")),this.$button.attr("tabindex",this.$element.data("tabindex"))),this.$element.attr("tabindex",-98)},clickListener:function(){var E=this,t=F(document);function e(){E.options.liveSearch?E.$searchbox.focus():E.$menuInner.focus()}function i(){E.dropdown&&E.dropdown._popper&&E.dropdown._popper.state.isCreated?e():requestAnimationFrame(i)}t.data("spaceSelect",!1),this.$button.on("keyup",function(e){/(32)/.test(e.keyCode.toString(10))&&t.data("spaceSelect")&&(e.preventDefault(),t.data("spaceSelect",!1))}),this.$newElement.on("show.bs.dropdown",function(){3<_.major&&!E.dropdown&&(E.dropdown=E.$button.data("bs.dropdown"),E.dropdown._menu=E.$menu[0])}),this.$button.on("click.bs.dropdown.data-api",function(){E.$newElement.hasClass(q.SHOW)||E.setSize()}),this.$element.on("shown.bs.select",function(){E.$menuInner[0].scrollTop!==E.selectpicker.view.scrollTop&&(E.$menuInner[0].scrollTop=E.selectpicker.view.scrollTop),3<_.major?requestAnimationFrame(i):e()}),this.$menuInner.on("click","li a",function(e,t){var i=F(this),s=E.isVirtual()?E.selectpicker.view.position0:0,n=E.selectpicker.current.map.originalIndex[i.parent().index()+s],o=S(E.$element[0]),l=E.$element.prop("selectedIndex"),r=!0;if(E.multiple&&1!==E.options.maxOptions&&e.stopPropagation(),e.preventDefault(),!E.isDisabled()&&!i.parent().hasClass(q.DISABLED)){var c=E.$element.find("option"),a=c.eq(n),d=a.prop("selected"),h=a.parent("optgroup"),p=h.find("option"),u=E.options.maxOptions,f=h.data("maxOptions")||!1;if(n===E.activeIndex&&(t=!0),t||(E.prevActiveIndex=E.activeIndex,E.activeIndex=void 0),E.multiple){if(a.prop("selected",!d),E.setSelected(n,!d),i.blur(),!1!==u||!1!==f){var m=u<c.filter(":selected").length,v=f<h.find("option:selected").length;if(u&&m||f&&v)if(u&&1==u){c.prop("selected",!1),a.prop("selected",!0);for(var g=0;g<c.length;g++)E.setSelected(g,!1);E.setSelected(n,!0)}else if(f&&1==f){h.find("option:selected").prop("selected",!1),a.prop("selected",!0);for(g=0;g<p.length;g++){var b=p[g];E.setSelected(c.index(b),!1)}E.setSelected(n,!0)}else{var w="string"==typeof E.options.maxOptionsText?[E.options.maxOptionsText,E.options.maxOptionsText]:E.options.maxOptionsText,x="function"==typeof w?w(u,f):w,I=x[0].replace("{n}",u),k=x[1].replace("{n}",f),$=F('<div class="notify"></div>');x[2]&&(I=I.replace("{var}",x[2][1<u?0:1]),k=k.replace("{var}",x[2][1<f?0:1])),a.prop("selected",!1),E.$menu.append($),u&&m&&($.append(F("<div>"+I+"</div>")),r=!1,E.$element.trigger("maxReached.bs.select")),f&&v&&($.append(F("<div>"+k+"</div>")),r=!1,E.$element.trigger("maxReachedGrp.bs.select")),setTimeout(function(){E.setSelected(n,!1)},10),$.delay(750).fadeOut(300,function(){F(this).remove()})}}}else c.prop("selected",!1),a.prop("selected",!0),E.setSelected(n,!0);!E.multiple||E.multiple&&1===E.options.maxOptions?E.$button.focus():E.options.liveSearch&&E.$searchbox.focus(),r&&(o!=S(E.$element[0])&&E.multiple||l!=E.$element.prop("selectedIndex")&&!E.multiple)&&(y=[n,a.prop("selected"),o],E.$element.triggerNative("change"))}}),this.$menu.on("click","li."+q.DISABLED+" a, ."+q.POPOVERHEADER+", ."+q.POPOVERHEADER+" :not(.close)",function(e){e.currentTarget==this&&(e.preventDefault(),e.stopPropagation(),E.options.liveSearch&&!F(e.target).hasClass("close")?E.$searchbox.focus():E.$button.focus())}),this.$menuInner.on("click",".divider, .dropdown-header",function(e){e.preventDefault(),e.stopPropagation(),E.options.liveSearch?E.$searchbox.focus():E.$button.focus()}),this.$menu.on("click","."+q.POPOVERHEADER+" .close",function(){E.$button.click()}),this.$searchbox.on("click",function(e){e.stopPropagation()}),this.$menu.on("click",".actions-btn",function(e){E.options.liveSearch?E.$searchbox.focus():E.$button.focus(),e.preventDefault(),e.stopPropagation(),F(this).hasClass("bs-select-all")?E.selectAll():E.deselectAll()}),this.$element.on({change:function(){E.render(),E.$element.trigger("changed.bs.select",y),y=null},focus:function(){E.$button.focus()}})},liveSearchListener:function(){var u=this,f=document.createElement("li");this.$button.on("click.bs.dropdown.data-api",function(){u.$searchbox.val()&&u.$searchbox.val("")}),this.$searchbox.on("click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api",function(e){e.stopPropagation()}),this.$searchbox.on("input propertychange",function(){var e=u.$searchbox.val();if(u.selectpicker.search.map.newIndex={},u.selectpicker.search.map.originalIndex={},u.selectpicker.search.elements=[],u.selectpicker.search.data=[],e){var t=[],i=e.toUpperCase(),s={},n=[],o=u._searchStyle(),l=u.options.liveSearchNormalize;u._$lisSelected=u.$menuInner.find(".selected");for(var r=0;r<u.selectpicker.main.data.length;r++){var c=u.selectpicker.main.data[r];s[r]||(s[r]=$(c,i,o,l)),s[r]&&void 0!==c.headerIndex&&-1===n.indexOf(c.headerIndex)&&(0<c.headerIndex&&(s[c.headerIndex-1]=!0,n.push(c.headerIndex-1)),s[c.headerIndex]=!0,n.push(c.headerIndex),s[c.lastIndex+1]=!0),s[r]&&"optgroup-label"!==c.type&&n.push(r)}r=0;for(var a=n.length;r<a;r++){var d=n[r],h=n[r-1],p=(c=u.selectpicker.main.data[d],u.selectpicker.main.data[h]);("divider"!==c.type||"divider"===c.type&&p&&"divider"!==p.type&&a-1!==r)&&(u.selectpicker.search.data.push(c),t.push(u.selectpicker.main.elements[d]),c.hasOwnProperty("originalIndex")&&(u.selectpicker.search.map.newIndex[c.originalIndex]=t.length-1,u.selectpicker.search.map.originalIndex[t.length-1]=c.originalIndex))}u.activeIndex=void 0,u.noScroll=!0,u.$menuInner.scrollTop(0),u.selectpicker.search.elements=t,u.createView(!0),t.length||(f.className="no-results",f.innerHTML=u.options.noneResultsText.replace("{0}",'"'+G(e)+'"'),u.$menuInner[0].firstChild.appendChild(f))}else u.$menuInner.scrollTop(0),u.createView(!1)})},_searchStyle:function(){return this.options.liveSearchStyle||"contains"},val:function(e){return void 0!==e?(this.$element.val(e).triggerNative("change"),this.$element):this.$element.val()},changeAll:function(e){if(this.multiple){void 0===e&&(e=!0);var t=this.$element.find("option"),i=0,s=0,n=S(this.$element[0]);this.$element.addClass("bs-select-hidden");for(var o=0;o<this.selectpicker.current.elements.length;o++){var l=this.selectpicker.current.data[o],r=t[this.selectpicker.current.map.originalIndex[o]];r&&!r.disabled&&"divider"!==l.type&&(r.selected&&i++,r.selected=e,r.selected&&s++)}this.$element.removeClass("bs-select-hidden"),i!==s&&(this.setOptionStatus(),this.togglePlaceholder(),y=[null,null,n],this.$element.triggerNative("change"))}},selectAll:function(){return this.changeAll(!0)},deselectAll:function(){return this.changeAll(!1)},toggle:function(e){(e=e||window.event)&&e.stopPropagation(),this.$button.trigger("click.bs.dropdown.data-api")},keydown:function(e){var t,i,s,n,o,l=F(this),r=l.hasClass("dropdown-toggle"),c=(r?l.closest(".dropdown"):l.closest(N.MENU)).data("this"),a=c.findLis(),d=!1,h=e.which===D&&!r&&!c.options.selectOnTab,p=A.test(e.which)||h,u=c.$menuInner[0].scrollTop,f=c.isVirtual(),m=!0===f?c.selectpicker.view.position0:0;if(!(i=c.$newElement.hasClass(q.SHOW))&&(p||48<=e.which&&e.which<=57||96<=e.which&&e.which<=105||65<=e.which&&e.which<=90)&&c.$button.trigger("click.bs.dropdown.data-api"),e.which===C&&i&&(e.preventDefault(),c.$button.trigger("click.bs.dropdown.data-api").focus()),p){if(!a.length)return;void 0===(t=!0===f?a.index(a.filter(".active")):c.selectpicker.current.map.newIndex[c.activeIndex])&&(t=-1),-1!==t&&((s=c.selectpicker.current.elements[t+m]).classList.remove("active"),s.firstChild&&s.firstChild.classList.remove("active")),e.which===H?(-1!==t&&t--,t+m<0&&(t+=a.length),c.selectpicker.view.canHighlight[t+m]||-1===(t=c.selectpicker.view.canHighlight.slice(0,t+m).lastIndexOf(!0)-m)&&(t=a.length-1)):(e.which===L||h)&&(++t+m>=c.selectpicker.view.canHighlight.length&&(t=0),c.selectpicker.view.canHighlight[t+m]||(t=t+1+c.selectpicker.view.canHighlight.slice(t+m+1).indexOf(!0))),e.preventDefault();var v=m+t;e.which===H?0===m&&t===a.length-1?(c.$menuInner[0].scrollTop=c.$menuInner[0].scrollHeight,v=c.selectpicker.current.elements.length-1):d=(o=(n=c.selectpicker.current.data[v]).position-n.height)<u:(e.which===L||h)&&(0===t?v=c.$menuInner[0].scrollTop=0:d=u<(o=(n=c.selectpicker.current.data[v]).position-c.sizeInfo.menuInnerHeight)),(s=c.selectpicker.current.elements[v])&&(s.classList.add("active"),s.firstChild&&s.firstChild.classList.add("active")),c.activeIndex=c.selectpicker.current.map.originalIndex[v],c.selectpicker.view.currentActive=s,d&&(c.$menuInner[0].scrollTop=o),c.options.liveSearch?c.$searchbox.focus():l.focus()}else if(!l.is("input")&&!P.test(e.which)||e.which===T&&c.selectpicker.keydown.keyHistory){var g,b,w=[];e.preventDefault(),c.selectpicker.keydown.keyHistory+=E[e.which],c.selectpicker.keydown.resetKeyHistory.cancel&&clearTimeout(c.selectpicker.keydown.resetKeyHistory.cancel),c.selectpicker.keydown.resetKeyHistory.cancel=c.selectpicker.keydown.resetKeyHistory.start(),b=c.selectpicker.keydown.keyHistory,/^(.)\1+$/.test(b)&&(b=b.charAt(0));for(var x=0;x<c.selectpicker.current.data.length;x++){var I=c.selectpicker.current.data[x];$(I,b,"startsWith",!0)&&c.selectpicker.view.canHighlight[x]&&(I.index=x,w.push(I.originalIndex))}if(w.length){var k=0;a.removeClass("active").find("a").removeClass("active"),1===b.length&&(-1===(k=w.indexOf(c.activeIndex))||k===w.length-1?k=0:k++),g=c.selectpicker.current.map.newIndex[w[k]],0<u-(n=c.selectpicker.current.data[g]).position?(o=n.position-n.height,d=!0):(o=n.position-c.sizeInfo.menuInnerHeight,d=n.position>u+c.sizeInfo.menuInnerHeight),(s=c.selectpicker.current.elements[g]).classList.add("active"),s.firstChild&&s.firstChild.classList.add("active"),c.activeIndex=w[k],s.firstChild.focus(),d&&(c.$menuInner[0].scrollTop=o),l.focus()}}i&&(e.which===T&&!c.selectpicker.keydown.keyHistory||e.which===z||e.which===D&&c.options.selectOnTab)&&(e.which!==T&&e.preventDefault(),c.options.liveSearch&&e.which===T||(c.$menuInner.find(".active a").trigger("click",!0),l.focus(),c.options.liveSearch||(e.preventDefault(),F(document).data("spaceSelect",!0))))},mobile:function(){this.$element.addClass("mobile-device")},refresh:function(){var e=F.extend({},this.options,this.$element.data());this.options=e,this.selectpicker.main.map.newIndex={},this.selectpicker.main.map.originalIndex={},this.createLi(),this.checkDisabled(),this.render(),this.setStyle(),this.setWidth(),this.setSize(!0),this.$element.trigger("refreshed.bs.select")},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},remove:function(){this.$newElement.remove(),this.$element.remove()},destroy:function(){this.$newElement.before(this.$element).remove(),this.$bsContainer?this.$bsContainer.remove():this.$menu.remove(),this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")}};var h=F.fn.selectpicker;F.fn.selectpicker=r,F.fn.selectpicker.Constructor=c,F.fn.selectpicker.noConflict=function(){return F.fn.selectpicker=h,this},F(document).off("keydown.bs.dropdown.data-api").on("keydown.bs.select",'.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bs-searchbox input',c.prototype.keydown).on("focusin.modal",'.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bs-searchbox input',function(e){e.stopPropagation()}),F(window).on("load.bs.select.data-api",function(){F(".selectpicker").each(function(){var e=F(this);r.call(e,e.data())})})}(e)});
//# sourceMappingURL=bootstrap-select.js.map

/*! jQuery Validation Plugin - v1.17.0 - 7/29/2017
 * https://jqueryvalidation.org/
 * Copyright (c) 2017 JÃ¶rn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.submitButton=b.currentTarget,a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.submitButton&&(c.settings.submitHandler||c.formSubmitted)&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),!c.settings.submitHandler||(e=c.settings.submitHandler.call(c,c.currentForm,b),d&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(null!=j&&(!j.form&&j.hasAttribute("contenteditable")&&(j.form=this.closest("form")[0],j.name=this.attr("name")),null!=j.form)){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(a,b){i[b]=f[b],delete f[b]}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g)),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}}),a.extend(a.expr.pseudos||a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){var c=a(b).val();return null!==c&&!!a.trim(""+c)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){!this.form&&this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0],this.name=a(this).attr("name"));var c=a.data(this.form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!a(this).is(e.ignore)&&e[d].call(c,this,b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)void 0!==a[b]&&null!==a[b]&&a[b]!==!1&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0],this.name=d),!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type;return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=b.hasAttribute("contenteditable")?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f,g=a(b).rules(),h=a.map(g,function(a,b){return b}).length,i=!1,j=this.elementValue(b);if("function"==typeof g.normalizer?f=g.normalizer:"function"==typeof this.settings.normalizer&&(f=this.settings.normalizer),f){if(j=f.call(b,j),"string"!=typeof j)throw new TypeError("The normalizer should return a string value.");delete g.normalizer}for(d in g){e={method:d,parameters:g[d]};try{if(c=a.validator.methods[d].call(this,j,b,e.parameters),"dependency-mismatch"===c&&1===h){i=!0;continue}if(i=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(k){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",k),k instanceof TypeError&&(k.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),k}}if(!i)return this.objectLength(g)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.submitButton&&a("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e<=d},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var b,c={};return a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a});

/*! jQuery Validation Plugin - v1.17.0 - 7/29/2017
 * https://jqueryvalidation.org/
 * Copyright (c) 2017 JÃ¶rn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./jquery.validate.min"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){return function(){function b(a){return a.replace(/<.[^<>]*?>/g," ").replace(/&nbsp;|&#160;/gi," ").replace(/[.(),;:!?%#$'\"_+=\/\-â€œâ€â€™]*/g,"")}a.validator.addMethod("maxWords",function(a,c,d){return this.optional(c)||b(a).match(/\b\w+\b/g).length<=d},a.validator.format("Please enter {0} words or less.")),a.validator.addMethod("minWords",function(a,c,d){return this.optional(c)||b(a).match(/\b\w+\b/g).length>=d},a.validator.format("Please enter at least {0} words.")),a.validator.addMethod("rangeWords",function(a,c,d){var e=b(a),f=/\b\w+\b/g;return this.optional(c)||e.match(f).length>=d[0]&&e.match(f).length<=d[1]},a.validator.format("Please enter between {0} and {1} words."))}(),a.validator.addMethod("accept",function(b,c,d){var e,f,g,h="string"==typeof d?d.replace(/\s/g,""):"image/*",i=this.optional(c);if(i)return i;if("file"===a(c).attr("type")&&(h=h.replace(/[\-\[\]\/\{\}\(\)\+\?\.\\\^\$\|]/g,"\\$&").replace(/,/g,"|").replace(/\/\*/g,"/.*"),c.files&&c.files.length))for(g=new RegExp(".?("+h+")$","i"),e=0;e<c.files.length;e++)if(f=c.files[e],!f.type.match(g))return!1;return!0},a.validator.format("Please enter a value with a valid mimetype.")),a.validator.addMethod("alphanumeric",function(a,b){return this.optional(b)||/^\w+$/i.test(a)},"Letters, numbers, and underscores only please"),a.validator.addMethod("bankaccountNL",function(a,b){if(this.optional(b))return!0;if(!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(a))return!1;var c,d,e,f=a.replace(/ /g,""),g=0,h=f.length;for(c=0;c<h;c++)d=h-c,e=f.substring(c,c+1),g+=d*e;return g%11===0},"Please specify a valid bank account number"),a.validator.addMethod("bankorgiroaccountNL",function(b,c){return this.optional(c)||a.validator.methods.bankaccountNL.call(this,b,c)||a.validator.methods.giroaccountNL.call(this,b,c)},"Please specify a valid bank or giro account number"),a.validator.addMethod("bic",function(a,b){return this.optional(b)||/^([A-Z]{6}[A-Z2-9][A-NP-Z1-9])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(a.toUpperCase())},"Please specify a valid BIC code"),a.validator.addMethod("cifES",function(a,b){"use strict";function c(a){return a%2===0}if(this.optional(b))return!0;var d,e,f,g,h=new RegExp(/^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/gi),i=a.substring(0,1),j=a.substring(1,8),k=a.substring(8,9),l=0,m=0,n=0;if(9!==a.length||!h.test(a))return!1;for(d=0;d<j.length;d++)e=parseInt(j[d],10),c(d)?(e*=2,n+=e<10?e:e-9):m+=e;return l=m+n,f=(10-l.toString().substr(-1)).toString(),f=parseInt(f,10)>9?"0":f,g="JABCDEFGHI".substr(f,1).toString(),i.match(/[ABEH]/)?k===f:i.match(/[KPQS]/)?k===g:k===f||k===g},"Please specify a valid CIF number."),a.validator.addMethod("cpfBR",function(a){if(a=a.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g,""),11!==a.length)return!1;var b,c,d,e,f=0;if(b=parseInt(a.substring(9,10),10),c=parseInt(a.substring(10,11),10),d=function(a,b){var c=10*a%11;return 10!==c&&11!==c||(c=0),c===b},""===a||"00000000000"===a||"11111111111"===a||"22222222222"===a||"33333333333"===a||"44444444444"===a||"55555555555"===a||"66666666666"===a||"77777777777"===a||"88888888888"===a||"99999999999"===a)return!1;for(e=1;e<=9;e++)f+=parseInt(a.substring(e-1,e),10)*(11-e);if(d(f,b)){for(f=0,e=1;e<=10;e++)f+=parseInt(a.substring(e-1,e),10)*(12-e);return d(f,c)}return!1},"Please specify a valid CPF number"),a.validator.addMethod("creditcard",function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 \-]+/.test(a))return!1;var c,d,e=0,f=0,g=!1;if(a=a.replace(/\D/g,""),a.length<13||a.length>19)return!1;for(c=a.length-1;c>=0;c--)d=a.charAt(c),f=parseInt(d,10),g&&(f*=2)>9&&(f-=9),e+=f,g=!g;return e%10===0},"Please enter a valid credit card number."),a.validator.addMethod("creditcardtypes",function(a,b,c){if(/[^0-9\-]+/.test(a))return!1;a=a.replace(/\D/g,"");var d=0;return c.mastercard&&(d|=1),c.visa&&(d|=2),c.amex&&(d|=4),c.dinersclub&&(d|=8),c.enroute&&(d|=16),c.discover&&(d|=32),c.jcb&&(d|=64),c.unknown&&(d|=128),c.all&&(d=255),1&d&&/^(5[12345])/.test(a)?16===a.length:2&d&&/^(4)/.test(a)?16===a.length:4&d&&/^(3[47])/.test(a)?15===a.length:8&d&&/^(3(0[012345]|[68]))/.test(a)?14===a.length:16&d&&/^(2(014|149))/.test(a)?15===a.length:32&d&&/^(6011)/.test(a)?16===a.length:64&d&&/^(3)/.test(a)?16===a.length:64&d&&/^(2131|1800)/.test(a)?15===a.length:!!(128&d)},"Please enter a valid credit card number."),a.validator.addMethod("currency",function(a,b,c){var d,e="string"==typeof c,f=e?c:c[0],g=!!e||c[1];return f=f.replace(/,/g,""),f=g?f+"]":f+"]?",d="^["+f+"([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$",d=new RegExp(d),this.optional(b)||d.test(a)},"Please specify a valid currency"),a.validator.addMethod("dateFA",function(a,b){return this.optional(b)||/^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test(a)},a.validator.messages.date),a.validator.addMethod("dateITA",function(a,b){var c,d,e,f,g,h=!1,i=/^\d{1,2}\/\d{1,2}\/\d{4}$/;return i.test(a)?(c=a.split("/"),d=parseInt(c[0],10),e=parseInt(c[1],10),f=parseInt(c[2],10),g=new Date(Date.UTC(f,e-1,d,12,0,0,0)),h=g.getUTCFullYear()===f&&g.getUTCMonth()===e-1&&g.getUTCDate()===d):h=!1,this.optional(b)||h},a.validator.messages.date),a.validator.addMethod("dateNL",function(a,b){return this.optional(b)||/^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(a)},a.validator.messages.date),a.validator.addMethod("extension",function(a,b,c){return c="string"==typeof c?c.replace(/,/g,"|"):"png|jpe?g|gif",this.optional(b)||a.match(new RegExp("\\.("+c+")$","i"))},a.validator.format("Please enter a value with a valid extension.")),a.validator.addMethod("giroaccountNL",function(a,b){return this.optional(b)||/^[0-9]{1,7}$/.test(a)},"Please specify a valid giro account number"),a.validator.addMethod("iban",function(a,b){if(this.optional(b))return!0;var c,d,e,f,g,h,i,j,k,l=a.replace(/ /g,"").toUpperCase(),m="",n=!0,o="",p="",q=5;if(l.length<q)return!1;if(c=l.substring(0,2),h={AL:"\\d{8}[\\dA-Z]{16}",AD:"\\d{8}[\\dA-Z]{12}",AT:"\\d{16}",AZ:"[\\dA-Z]{4}\\d{20}",BE:"\\d{12}",BH:"[A-Z]{4}[\\dA-Z]{14}",BA:"\\d{16}",BR:"\\d{23}[A-Z][\\dA-Z]",BG:"[A-Z]{4}\\d{6}[\\dA-Z]{8}",CR:"\\d{17}",HR:"\\d{17}",CY:"\\d{8}[\\dA-Z]{16}",CZ:"\\d{20}",DK:"\\d{14}",DO:"[A-Z]{4}\\d{20}",EE:"\\d{16}",FO:"\\d{14}",FI:"\\d{14}",FR:"\\d{10}[\\dA-Z]{11}\\d{2}",GE:"[\\dA-Z]{2}\\d{16}",DE:"\\d{18}",GI:"[A-Z]{4}[\\dA-Z]{15}",GR:"\\d{7}[\\dA-Z]{16}",GL:"\\d{14}",GT:"[\\dA-Z]{4}[\\dA-Z]{20}",HU:"\\d{24}",IS:"\\d{22}",IE:"[\\dA-Z]{4}\\d{14}",IL:"\\d{19}",IT:"[A-Z]\\d{10}[\\dA-Z]{12}",KZ:"\\d{3}[\\dA-Z]{13}",KW:"[A-Z]{4}[\\dA-Z]{22}",LV:"[A-Z]{4}[\\dA-Z]{13}",LB:"\\d{4}[\\dA-Z]{20}",LI:"\\d{5}[\\dA-Z]{12}",LT:"\\d{16}",LU:"\\d{3}[\\dA-Z]{13}",MK:"\\d{3}[\\dA-Z]{10}\\d{2}",MT:"[A-Z]{4}\\d{5}[\\dA-Z]{18}",MR:"\\d{23}",MU:"[A-Z]{4}\\d{19}[A-Z]{3}",MC:"\\d{10}[\\dA-Z]{11}\\d{2}",MD:"[\\dA-Z]{2}\\d{18}",ME:"\\d{18}",NL:"[A-Z]{4}\\d{10}",NO:"\\d{11}",PK:"[\\dA-Z]{4}\\d{16}",PS:"[\\dA-Z]{4}\\d{21}",PL:"\\d{24}",PT:"\\d{21}",RO:"[A-Z]{4}[\\dA-Z]{16}",SM:"[A-Z]\\d{10}[\\dA-Z]{12}",SA:"\\d{2}[\\dA-Z]{18}",RS:"\\d{18}",SK:"\\d{20}",SI:"\\d{15}",ES:"\\d{20}",SE:"\\d{20}",CH:"\\d{5}[\\dA-Z]{12}",TN:"\\d{20}",TR:"\\d{5}[\\dA-Z]{17}",AE:"\\d{3}\\d{16}",GB:"[A-Z]{4}\\d{14}",VG:"[\\dA-Z]{4}\\d{16}"},g=h[c],"undefined"!=typeof g&&(i=new RegExp("^[A-Z]{2}\\d{2}"+g+"$",""),!i.test(l)))return!1;for(d=l.substring(4,l.length)+l.substring(0,4),j=0;j<d.length;j++)e=d.charAt(j),"0"!==e&&(n=!1),n||(m+="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(e));for(k=0;k<m.length;k++)f=m.charAt(k),p=""+o+f,o=p%97;return 1===o},"Please specify a valid IBAN"),a.validator.addMethod("integer",function(a,b){return this.optional(b)||/^-?\d+$/.test(a)},"A positive or negative non-decimal number please"),a.validator.addMethod("ipv4",function(a,b){return this.optional(b)||/^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(a)},"Please enter a valid IP v4 address."),a.validator.addMethod("ipv6",function(a,b){return this.optional(b)||/^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(a)},"Please enter a valid IP v6 address."),a.validator.addMethod("lettersonly",function(a,b){return this.optional(b)||/^[a-z]+$/i.test(a)},"Letters only please"),a.validator.addMethod("letterswithbasicpunc",function(a,b){return this.optional(b)||/^[a-z\-.,()'"\s]+$/i.test(a)},"Letters or punctuation only please"),a.validator.addMethod("mobileNL",function(a,b){return this.optional(b)||/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(a)},"Please specify a valid mobile number"),a.validator.addMethod("mobileUK",function(a,b){return a=a.replace(/\(|\)|\s+|-/g,""),this.optional(b)||a.length>9&&a.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/)},"Please specify a valid mobile number"),a.validator.addMethod("netmask",function(a,b){return this.optional(b)||/^(254|252|248|240|224|192|128)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(254|252|248|240|224|192|128|0)/i.test(a)},"Please enter a valid netmask."),a.validator.addMethod("nieES",function(a,b){"use strict";if(this.optional(b))return!0;var c,d=new RegExp(/^[MXYZ]{1}[0-9]{7,8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/gi),e="TRWAGMYFPDXBNJZSQVHLCKET",f=a.substr(a.length-1).toUpperCase();return a=a.toString().toUpperCase(),!(a.length>10||a.length<9||!d.test(a))&&(a=a.replace(/^[X]/,"0").replace(/^[Y]/,"1").replace(/^[Z]/,"2"),c=9===a.length?a.substr(0,8):a.substr(0,9),e.charAt(parseInt(c,10)%23)===f)},"Please specify a valid NIE number."),a.validator.addMethod("nifES",function(a,b){"use strict";return!!this.optional(b)||(a=a.toUpperCase(),!!a.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)")&&(/^[0-9]{8}[A-Z]{1}$/.test(a)?"TRWAGMYFPDXBNJZSQVHLCKE".charAt(a.substring(8,0)%23)===a.charAt(8):!!/^[KLM]{1}/.test(a)&&a[8]==="TRWAGMYFPDXBNJZSQVHLCKE".charAt(a.substring(8,1)%23)))},"Please specify a valid NIF number."),a.validator.addMethod("nipPL",function(a){"use strict";if(a=a.replace(/[^0-9]/g,""),10!==a.length)return!1;for(var b=[6,5,7,2,3,4,5,6,7],c=0,d=0;d<9;d++)c+=b[d]*a[d];var e=c%11,f=10===e?0:e;return f===parseInt(a[9],10)},"Please specify a valid NIP number."),a.validator.addMethod("notEqualTo",function(b,c,d){return this.optional(c)||!a.validator.methods.equalTo.call(this,b,c,d)},"Please enter a different value, values must not be the same."),a.validator.addMethod("nowhitespace",function(a,b){return this.optional(b)||/^\S+$/i.test(a)},"No white space please"),a.validator.addMethod("pattern",function(a,b,c){return!!this.optional(b)||("string"==typeof c&&(c=new RegExp("^(?:"+c+")$")),c.test(a))},"Invalid format."),a.validator.addMethod("phoneNL",function(a,b){return this.optional(b)||/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(a)},"Please specify a valid phone number."),a.validator.addMethod("phonesUK",function(a,b){return a=a.replace(/\(|\)|\s+|-/g,""),this.optional(b)||a.length>9&&a.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/)},"Please specify a valid uk phone number"),a.validator.addMethod("phoneUK",function(a,b){return a=a.replace(/\(|\)|\s+|-/g,""),this.optional(b)||a.length>9&&a.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/)},"Please specify a valid phone number"),a.validator.addMethod("phoneUS",function(a,b){return a=a.replace(/\s+/g,""),this.optional(b)||a.length>9&&a.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/)},"Please specify a valid phone number"),a.validator.addMethod("postalcodeBR",function(a,b){return this.optional(b)||/^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test(a)},"Informe um CEP vÃ¡lido."),a.validator.addMethod("postalCodeCA",function(a,b){return this.optional(b)||/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ] *\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i.test(a)},"Please specify a valid postal code"),a.validator.addMethod("postalcodeIT",function(a,b){return this.optional(b)||/^\d{5}$/.test(a)},"Please specify a valid postal code"),a.validator.addMethod("postalcodeNL",function(a,b){return this.optional(b)||/^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(a)},"Please specify a valid postal code"),a.validator.addMethod("postcodeUK",function(a,b){return this.optional(b)||/^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(a)},"Please specify a valid UK postcode"),a.validator.addMethod("require_from_group",function(b,c,d){var e=a(d[1],c.form),f=e.eq(0),g=f.data("valid_req_grp")?f.data("valid_req_grp"):a.extend({},this),h=e.filter(function(){return g.elementValue(this)}).length>=d[0];return f.data("valid_req_grp",g),a(c).data("being_validated")||(e.data("being_validated",!0),e.each(function(){g.element(this)}),e.data("being_validated",!1)),h},a.validator.format("Please fill at least {0} of these fields.")),a.validator.addMethod("skip_or_fill_minimum",function(b,c,d){var e=a(d[1],c.form),f=e.eq(0),g=f.data("valid_skip")?f.data("valid_skip"):a.extend({},this),h=e.filter(function(){return g.elementValue(this)}).length,i=0===h||h>=d[0];return f.data("valid_skip",g),a(c).data("being_validated")||(e.data("being_validated",!0),e.each(function(){g.element(this)}),e.data("being_validated",!1)),i},a.validator.format("Please either skip these fields or fill at least {0} of them.")),a.validator.addMethod("stateUS",function(a,b,c){var d,e="undefined"==typeof c,f=!e&&"undefined"!=typeof c.caseSensitive&&c.caseSensitive,g=!e&&"undefined"!=typeof c.includeTerritories&&c.includeTerritories,h=!e&&"undefined"!=typeof c.includeMilitary&&c.includeMilitary;return d=g||h?g&&h?"^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$":g?"^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$":"^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$":"^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$",d=f?new RegExp(d):new RegExp(d,"i"),this.optional(b)||d.test(a)},"Please specify a valid state"),a.validator.addMethod("strippedminlength",function(b,c,d){return a(b).text().length>=d},a.validator.format("Please enter at least {0} characters")),a.validator.addMethod("time",function(a,b){return this.optional(b)||/^([01]\d|2[0-3]|[0-9])(:[0-5]\d){1,2}$/.test(a)},"Please enter a valid time, between 00:00 and 23:59"),a.validator.addMethod("time12h",function(a,b){return this.optional(b)||/^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(a)},"Please enter a valid time in 12-hour am/pm format"),a.validator.addMethod("url2",function(a,b){return this.optional(b)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},a.validator.messages.url),a.validator.addMethod("vinUS",function(a){if(17!==a.length)return!1;var b,c,d,e,f,g,h=["A","B","C","D","E","F","G","H","J","K","L","M","N","P","R","S","T","U","V","W","X","Y","Z"],i=[1,2,3,4,5,6,7,8,1,2,3,4,5,7,9,2,3,4,5,6,7,8,9],j=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2],k=0;for(b=0;b<17;b++){if(e=j[b],d=a.slice(b,b+1),8===b&&(g=d),isNaN(d)){for(c=0;c<h.length;c++)if(d.toUpperCase()===h[c]){d=i[c],d*=e,isNaN(g)&&8===c&&(g=h[c]);break}}else d*=e;k+=d}return f=k%11,10===f&&(f="X"),f===g},"The specified vehicle identification number (VIN) is invalid."),a.validator.addMethod("zipcodeUS",function(a,b){return this.optional(b)||/^\d{5}(-\d{4})?$/.test(a)},"The specified US ZIP Code is invalid"),a.validator.addMethod("ziprange",function(a,b){return this.optional(b)||/^90[2-5]\d\{2\}-\d{4}$/.test(a)},"Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx"),a});
/*!
Waypoints - 4.0.0
Copyright Â© 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=y+l-f,h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();

/*!
 * Parallax: paroller.js
 * Version : 1.4.3
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */
!function(r){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=r(require("jquery")):r(jQuery)}(function(r){"use strict";var t=!1,o=function(){t=!1},n={bgVertical:function(r,t){return r.css({"background-position":"center "+-t+"px"})},bgHorizontal:function(r,t){return r.css({"background-position":-t+"px center"})},vertical:function(r,t,o){return"none"!==o||(o=""),r.css({"-webkit-transform":"translateY("+t+"px)"+o,"-moz-transform":"translateY("+t+"px)"+o,transform:"translateY("+t+"px)"+o,transition:"transform linear","will-change":"transform"})},horizontal:function(r,t,o){return"none"!==o||(o=""),r.css({"-webkit-transform":"translateX("+t+"px)"+o,"-moz-transform":"translateX("+t+"px)"+o,transform:"translateX("+t+"px)"+o,transition:"transform linear","will-change":"transform"})}},a={factor:function(r,t,o){var n=r.data("paroller-factor"),a=n||o.factor;if(t<576){var e=r.data("paroller-factor-xs"),i=e||o.factorXs;return i||a}if(t<=768){var c=r.data("paroller-factor-sm"),f=c||o.factorSm;return f||a}if(t<=1024){var l=r.data("paroller-factor-md"),u=l||o.factorMd;return u||a}if(t<=1200){var s=r.data("paroller-factor-lg"),d=s||o.factorLg;return d||a}if(t<=1920){var g=r.data("paroller-factor-xl"),h=g||o.factorXl;return h||a}return a},bgOffset:function(r,t){return Math.round(r*t)},transform:function(r,t,o,n){return Math.round((r-o/2+n)*t)}},e={background:function(r){return r.css({"background-position":"unset"})},foreground:function(r){return r.css({transform:"unset",transition:"unset"})}};r.fn.paroller=function(i){var c=r(window).height(),f=r(document).height(),i=r.extend({factor:0,factorXs:0,factorSm:0,factorMd:0,factorLg:0,factorXl:0,type:"background",direction:"vertical"},i);return this.each(function(){var l=r(this),u=r(window).width(),s=l.offset().top,d=l.outerHeight(),g=l.data("paroller-type"),h=l.data("paroller-direction"),p=l.css("transform"),m=g||i.type,b=h||i.direction,v=a.factor(l,u,i),w=a.bgOffset(s,v),z=a.transform(s,v,c,d);"background"===m?"vertical"===b?n.bgVertical(l,w):"horizontal"===b&&n.bgHorizontal(l,w):"foreground"===m&&("vertical"===b?n.vertical(l,z,p):"horizontal"===b&&n.horizontal(l,z,p)),r(window).on("resize",function(){var g=r(this).scrollTop();u=r(window).width(),s=l.offset().top,d=l.outerHeight(),v=a.factor(l,u,i),w=Math.round(s*v),z=Math.round((s-c/2+d)*v),t||(window.requestAnimationFrame(o),t=!0),"background"===m?(e.background(l),"vertical"===b?n.bgVertical(l,w):"horizontal"===b&&n.bgHorizontal(l,w)):"foreground"===m&&g<=f&&(e.foreground(l),"vertical"===b?n.vertical(l,z):"horizontal"===b&&n.horizontal(l,z))}),r(window).on("scroll",function(){var a=r(this).scrollTop();f=r(document).height(),w=Math.round((s-a)*v),z=Math.round((s-c/2+d-a)*v),t||(window.requestAnimationFrame(o),t=!0),"background"===m?"vertical"===b?n.bgVertical(l,w):"horizontal"===b&&n.bgHorizontal(l,w):"foreground"===m&&a<=f&&("vertical"===b?n.vertical(l,z,p):"horizontal"===b&&n.horizontal(l,z,p))})})}});

// Sticky Plugin v1.0.4 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 02/14/2011
// Date: 07/20/2015
// Website: http://stickyjs.com/
// Description: Makes an element on the page stick on the screen as you scroll
//              It will only set the 'top' and 'position' of your element, you
//              might need to adjust the width in some cases.

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    var slice = Array.prototype.slice; // save ref to original slice()
    var splice = Array.prototype.splice; // save ref to original slice()

  var defaults = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: 'is-sticky',
      wrapperClassName: 'sticky-wrapper',
      center: false,
      getWidthFrom: '',
      widthFromWrapper: true, // works only when .getWidthFrom is empty
      responsiveWidth: false,
      zIndex: 'inherit'
    },
    $window = $(window),
    $document = $(document),
    sticked = [],
    windowHeight = $window.height(),
    scroller = function() {
      var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

      for (var i = 0, l = sticked.length; i < l; i++) {
        var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;

        //update height in case of dynamic content
        s.stickyWrapper.css('height', s.stickyElement.outerHeight());

        if (scrollTop <= etse) {
          if (s.currentTop !== null) {
            s.stickyElement
              .css({
                'width': '',
                'position': '',
                'top': '',
                'z-index': ''
              });
            s.stickyElement.parent().removeClass(s.className);
            s.stickyElement.trigger('sticky-end', [s]);
            s.currentTop = null;
          }
        }
        else {
          var newTop = documentHeight - s.stickyElement.outerHeight()
            - s.topSpacing - s.bottomSpacing - scrollTop - extra;
          if (newTop < 0) {
            newTop = newTop + s.topSpacing;
          } else {
            newTop = s.topSpacing;
          }
          if (s.currentTop !== newTop) {
            var newWidth;
            if (s.getWidthFrom) {
                padding =  s.stickyElement.innerWidth() - s.stickyElement.width();
                newWidth = $(s.getWidthFrom).width() - padding || null;
            } else if (s.widthFromWrapper) {
                newWidth = s.stickyWrapper.width();
            }
            if (newWidth == null) {
                newWidth = s.stickyElement.width();
            }
            s.stickyElement
              .css('width', newWidth)
              .css('position', 'fixed')
              .css('top', newTop)
              .css('z-index', s.zIndex);

            s.stickyElement.parent().addClass(s.className);

            if (s.currentTop === null) {
              s.stickyElement.trigger('sticky-start', [s]);
            } else {
              // sticky is started but it have to be repositioned
              s.stickyElement.trigger('sticky-update', [s]);
            }

            if (s.currentTop === s.topSpacing && s.currentTop > newTop || s.currentTop === null && newTop < s.topSpacing) {
              // just reached bottom || just started to stick but bottom is already reached
              s.stickyElement.trigger('sticky-bottom-reached', [s]);
            } else if(s.currentTop !== null && newTop === s.topSpacing && s.currentTop < newTop) {
              // sticky is started && sticked at topSpacing && overflowing from top just finished
              s.stickyElement.trigger('sticky-bottom-unreached', [s]);
            }

            s.currentTop = newTop;
          }

          // Check if sticky has reached end of container and stop sticking
          var stickyWrapperContainer = s.stickyWrapper.parent();
          var unstick = (s.stickyElement.offset().top + s.stickyElement.outerHeight() >= stickyWrapperContainer.offset().top + stickyWrapperContainer.outerHeight()) && (s.stickyElement.offset().top <= s.topSpacing);

          if( unstick ) {
            s.stickyElement
              .css('position', 'absolute')
              .css('top', '')
              .css('bottom', 0)
              .css('z-index', '');
          } else {
            s.stickyElement
              .css('position', 'fixed')
              .css('top', newTop)
              .css('bottom', '')
              .css('z-index', s.zIndex);
          }
        }
      }
    },
    resizer = function() {
      windowHeight = $window.height();

      for (var i = 0, l = sticked.length; i < l; i++) {
        var s = sticked[i];
        var newWidth = null;
        if (s.getWidthFrom) {
            if (s.responsiveWidth) {
                newWidth = $(s.getWidthFrom).width();
            }
        } else if(s.widthFromWrapper) {
            newWidth = s.stickyWrapper.width();
        }
        if (newWidth != null) {
            s.stickyElement.css('width', newWidth);
        }
      }
    },
    methods = {
      init: function(options) {
        return this.each(function() {
          var o = $.extend({}, defaults, options);
          var stickyElement = $(this);

          var stickyId = stickyElement.attr('id');
          var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName;
          var wrapper = $('<div></div>')
            .attr('id', wrapperId)
            .addClass(o.wrapperClassName);

          stickyElement.wrapAll(function() {
            if ($(this).parent("#" + wrapperId).length == 0) {
                    return wrapper;
            }
});

          var stickyWrapper = stickyElement.parent();

          if (o.center) {
            stickyWrapper.css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
          }

          if (stickyElement.css("float") === "right") {
            stickyElement.css({"float":"none"}).parent().css({"float":"right"});
          }

          o.stickyElement = stickyElement;
          o.stickyWrapper = stickyWrapper;
          o.currentTop    = null;

          sticked.push(o);

          methods.setWrapperHeight(this);
          methods.setupChangeListeners(this);
        });
      },

      setWrapperHeight: function(stickyElement) {
        var element = $(stickyElement);
        var stickyWrapper = element.parent();
        if (stickyWrapper) {
          stickyWrapper.css('height', element.outerHeight());
        }
      },

      setupChangeListeners: function(stickyElement) {
        if (window.MutationObserver) {
          var mutationObserver = new window.MutationObserver(function(mutations) {
            if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
              methods.setWrapperHeight(stickyElement);
            }
          });
          mutationObserver.observe(stickyElement, {subtree: true, childList: true});
        } else {
          if (window.addEventListener) {
            stickyElement.addEventListener('DOMNodeInserted', function() {
              methods.setWrapperHeight(stickyElement);
            }, false);
            stickyElement.addEventListener('DOMNodeRemoved', function() {
              methods.setWrapperHeight(stickyElement);
            }, false);
          } else if (window.attachEvent) {
            stickyElement.attachEvent('onDOMNodeInserted', function() {
              methods.setWrapperHeight(stickyElement);
            });
            stickyElement.attachEvent('onDOMNodeRemoved', function() {
              methods.setWrapperHeight(stickyElement);
            });
          }
        }
      },
      update: scroller,
      unstick: function(options) {
        return this.each(function() {
          var that = this;
          var unstickyElement = $(that);

          var removeIdx = -1;
          var i = sticked.length;
          while (i-- > 0) {
            if (sticked[i].stickyElement.get(0) === that) {
                splice.call(sticked,i,1);
                removeIdx = i;
            }
          }
          if(removeIdx !== -1) {
            unstickyElement.unwrap();
            unstickyElement
              .css({
                'width': '',
                'position': '',
                'top': '',
                'float': '',
                'z-index': ''
              })
            ;
          }
        });
      }
    };

  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }

  $.fn.sticky = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };

  $.fn.unstick = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.unstick.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };
  $(function() {
    setTimeout(scroller, 0);
  });
}));


/**
 * simplyScroll 2 - a scroll-tastic jQuery plugin
 *
 */
!function(s){"object"==typeof module&&"object"==typeof module.exports?module.exports=s(require("jquery"),window,document):s(jQuery,window,document)}(function($,n,l,t){var h={customClass:"simply-scroll",frameRate:24,speed:1,orientation:"horizontal",auto:!0,autoMode:"loop",manualMode:"end",direction:"forwards",pauseOnHover:!0,pauseOnTouch:!0,pauseButton:!($.fn.simplyScroll=function(t){return this.each(function(){if(void 0===$(this).data("simplyScroll")){var s=new $.simplyScroll(this,t);$(this).data("simplyScroll",s)}})}),startOnLoad:!1,initialOffset:0};$.simplyScroll=function(s,t){var i=this;this.o=$.extend({},h,t||{}),this.isAuto=!1!==this.o.auto&&null!==this.o.autoMode.match(/^loop|bounce$/),this.isHorizontal=null!==this.o.orientation.match(/^horizontal|vertical$/)&&this.o.orientation===h.orientation,this.isRTL=this.isHorizontal&&"rtl"===$("html").attr("dir"),this.isForwards=!this.isAuto&&!this.isRTL||this.isAuto&&null!==this.o.direction.match(/^forwards|backwards$/)&&this.o.direction===h.direction,this.isLoop=this.isAuto&&"loop"===this.o.autoMode||!this.isAuto&&"loop"===this.o.manualMode,this.supportsTouch="createTouch"in l,this.events=this.supportsTouch?{start:"touchstart MozTouchDown",move:"touchmove MozTouchMove",end:"touchend touchcancel MozTouchRelease"}:{start:"mouseenter",end:"mouseleave"},this.$list=$(s);var o=this.$list.children();if(this.$list.addClass("simply-scroll-list").wrap('<div class="simply-scroll-clip"></div>').parent().wrap('<div class="'+this.o.customClass+' simply-scroll-container"></div>'),this.isAuto?this.o.pauseButton&&(this.$list.parent().parent().prepend('<div class="simply-scroll-btn simply-scroll-btn-pause"></div>'),this.o.pauseOnHover=!1):this.$list.parent().parent().prepend('<div class="simply-scroll-forward"></div>').prepend('<div class="simply-scroll-back"></div>'),1<o.length){var e=!1,a=0;this.isHorizontal?(o.each(function(){a+=$(this).outerWidth(!0)}),e=o.eq(0).outerWidth(!0)*o.length!==a):(o.each(function(){a+=$(this).outerHeight(!0)}),e=o.eq(0).outerHeight(!0)*o.length!==a),e&&(this.$list=this.$list.wrap("<div></div>").parent().addClass("simply-scroll-list"),this.isHorizontal?this.$list.children().css({float:"left",width:a+"px"}):this.$list.children().css({height:a+"px"}))}this.o.startOnLoad?$(n).load(function(){i.init()}):this.init()},$.simplyScroll.fn=$.simplyScroll.prototype={},$.simplyScroll.fn.extend=$.extend,$.simplyScroll.fn.extend({init:function(){var e=this;this.$items=this.$list.children(),this.$clip=this.$list.parent(),this.$container=this.$clip.parent(),this.$btnBack=$(".simply-scroll-back",this.$container),this.$btnForward=$(".simply-scroll-forward",this.$container),this.isHorizontal?(this.itemMax=this.$items.eq(0).outerWidth(!0),this.clipMax=this.$clip.width(),this.dimension="width",this.moveBackClass="simply-scroll-btn-left",this.moveForwardClass="simply-scroll-btn-right",this.scrollPos="Left"):(this.itemMax=this.$items.eq(0).outerHeight(!0),this.clipMax=this.$clip.height(),this.dimension="height",this.moveBackClass="simply-scroll-btn-up",this.moveForwardClass="simply-scroll-btn-down",this.scrollPos="Top"),this.posMin=0,this.posMax=this.$items.length*this.itemMax;var s=Math.ceil(this.clipMax/this.itemMax);if(this.isAuto&&"loop"===this.o.autoMode?(this.$list.css(this.dimension,this.posMax+this.itemMax*s+"px"),this.posMax+=this.clipMax-this.o.speed,this.isForwards?(this.$items.slice(0,s).clone(!0).appendTo(this.$list),this.resetPosition=0):(this.$items.slice(-s).clone(!0).prependTo(this.$list),this.resetPosition=this.$items.length*this.itemMax,this.isRTL&&(this.$clip[0].dir="ltr",this.$items.css("float","right")))):this.isAuto||"loop"!==this.o.manualMode?(this.$list.css(this.dimension,this.posMax+"px"),this.isForwards?this.resetPosition=0:(this.resetPosition=this.$items.length*this.itemMax,this.isRTL&&(this.$clip[0].dir="ltr",this.$items.css("float","right")))):(this.posMax+=this.itemMax*s,this.$list.css(this.dimension,this.posMax+this.itemMax*s+"px"),this.posMax+=this.clipMax-this.o.speed,this.$items.slice(0,s).clone(!0).appendTo(this.$list),this.$items.slice(-s).clone(!0).prependTo(this.$list),this.resetPositionForwards=this.resetPosition=s*this.itemMax,this.resetPositionBackwards=this.$items.length*this.itemMax,this.$btnBack.bind(this.events.start,function(){e.isForwards=!1,e.resetPosition=e.resetPositionBackwards}),this.$btnForward.bind(this.events.start,function(){e.isForwards=!0,e.resetPosition=e.resetPositionForwards})),this.resetPos(this.o.initialOffset),this.timestamp=null,this.interval=null,this.isAuto||"end"!==this.o.manualMode)for(;this.itemMax%this.o.speed!=0;)if(this.o.speed--,0===this.o.speed){this.o.speed=1;break}if(this.trigger=null,this.funcMoveBack=function(s){s!==t&&s.preventDefault(),e.trigger=e.isAuto||"end"!==e.o.manualMode?null:this,e.isAuto?e.isForwards?e.moveBack():e.moveForward():e.moveBack()},this.funcMoveForward=function(s){s!==t&&s.preventDefault(),e.trigger=e.isAuto||"end"!==e.o.manualMode?null:this,e.isAuto?e.isForwards?e.moveForward():e.moveBack():e.moveForward()},this.funcMovePause=function(){e.movePause()},this.funcMoveStop=function(){e.moveStop()},this.funcMoveResume=function(){e.moveResume()},this.isAuto){function i(){return!1===e.paused?(e.paused=!0,e.funcMovePause()):(e.paused=!1,e.funcMoveResume()),e.paused}if(this.paused=!1,this.supportsTouch&&this.$items.find("a").length&&(this.supportsTouch=!1),this.isAuto&&this.o.pauseOnHover&&!this.supportsTouch)this.$clip.bind(this.events.start,this.funcMovePause).bind(this.events.end,this.funcMoveResume);else if(this.isAuto&&this.o.pauseOnTouch&&!this.o.pauseButton&&this.supportsTouch){var a,n;this.$clip.bind(this.events.start,function(s){i();var t=s.originalEvent.touches[0];a=e.isHorizontal?t.pageX:t.pageY,n=e.$clip[0]["scroll"+e.scrollPos],s.stopPropagation(),s.preventDefault()}).bind(this.events.move,function(s){s.stopPropagation(),s.preventDefault();var t=s.originalEvent.touches[0],i=e.isHorizontal?t.pageX:t.pageY,o=a-i+n;o<0?o=0:o>e.posMax&&(o=e.posMax),e.$clip[0]["scroll"+e.scrollPos]=o,e.funcMovePause(),e.paused=!0})}else this.o.pauseButton&&(this.$btnPause=$(".simply-scroll-btn-pause",this.$container).bind("click",function(s){s.preventDefault(),i()?$(this).addClass("active"):$(this).removeClass("active")}));this.funcMoveForward()}else this.$btnBack.addClass("simply-scroll-btn "+this.moveBackClass).bind(this.events.start,this.funcMoveBack).bind(this.events.end,this.funcMoveStop),this.$btnForward.addClass("simply-scroll-btn "+this.moveForwardClass).bind(this.events.start,this.funcMoveForward).bind(this.events.end,this.funcMoveStop),"end"===this.o.manualMode&&(this.isRTL?this.$btnForward.addClass("disabled"):this.$btnBack.addClass("disabled"))},moveForward:function(){var i=this;this.movement="forward",null!==this.trigger&&this.$btnBack.removeClass("disabled");var o=function(s){if(i.$clip[0]["scroll"+i.scrollPos]<i.posMax-i.clipMax){var t=(s-(i.timestamp||s))*i.o.speed/i.o.frameRate;i.$clip[0]["scroll"+i.scrollPos]+=Math.ceil(t)}else i.isLoop?i.resetPos():i.moveStop(i.movement);i.timestamp=s,i.interval=requestAnimationFrame(o)};requestAnimationFrame(o)},moveBack:function(){var i=this;this.movement="back",null!==this.trigger&&this.$btnForward.removeClass("disabled");var o=function(s){if(i.$clip[0]["scroll"+i.scrollPos]>i.posMin){var t=(s-(i.timestamp||s))*i.o.speed/i.o.frameRate;i.$clip[0]["scroll"+i.scrollPos]-=Math.ceil(t)}else i.isLoop?i.resetPos():i.moveStop(i.movement);i.timestamp=s,i.interval=requestAnimationFrame(o)};requestAnimationFrame(o)},movePause:function(){cancelAnimationFrame(this.interval),this.timestamp=null},moveStop:function(s){this.movePause(),(this.timestamp=null)!==this.trigger&&(void 0!==s&&$(this.trigger).addClass("disabled"),this.trigger=null),this.isAuto&&"bounce"===this.o.autoMode&&("forward"===s?this.moveBack():this.moveForward())},moveResume:function(){"forward"===this.movement?this.moveForward():this.moveBack()},resetPos:function(s){this.$clip[0]["scroll"+this.scrollPos]=s||this.resetPosition}})});

 /*global jQuery */
/*!
 * jQuery Scrollbox
 * (c) 2009-2013 Hunter Wu <hunter.wu@gmail.com>
 * MIT Licensed.
 *
 * http://github.com/wmh/jquery-scrollbox
 */

(function($) {

    $.fn.scrollbox = function(config) {
      //default config
      var defConfig = {
        linear: false,          // Scroll method
        startDelay: 2,          // Start delay (in seconds)
        delay: 3,               // Delay after each scroll event (in seconds)
        step: 5,                // Distance of each single step (in pixels)
        speed: 32,              // Delay after each single step (in milliseconds)
        switchItems: 1,         // Items to switch after each scroll event
        direction: 'vertical',
        distance: 'auto',
        autoPlay: true,
        onMouseOverPause: true,
        paused: false,
        queue: null,
        listElement: 'ul',
        listItemElement:'li',
        infiniteLoop: true,     // Infinite loop or not
        switchAmount: 0,        // Give a number if you don't want to have infinite loop
        afterForward: null,     // Callback function after each forward action
        afterBackward: null,    // Callback function after each backward action
        triggerStackable: false // Allow triggers when action is not finish yet
      };
      config = $.extend(defConfig, config);
      config.scrollOffset = config.direction === 'vertical' ? 'scrollTop' : 'scrollLeft';
      if (config.queue) {
        config.queue = $('#' + config.queue);
      }
    
      return this.each(function() {
        var container = $(this),
            containerUL,
            scrollingId = null,
            nextScrollId = null,
            paused = false,
            releaseStack,
            backward,
            forward,
            resetClock,
            scrollForward,
            scrollBackward,
            forwardHover,
            pauseHover,
            switchCount = 0,
            stackedTriggerIndex = 0;
    
        if (config.onMouseOverPause) {
          container.bind('mouseover', function() { paused = true; });
          container.bind('mouseout', function() { paused = false; });
        }
        containerUL = container.children(config.listElement + ':first-child');
    
        // init default switchAmount
        if (config.infiniteLoop === false && config.switchAmount === 0) {
          config.switchAmount = containerUL.children().length;
        }
    
        scrollForward = function() {
          if (paused) {
            return;
          }
          var curLi,
              i,
              newScrollOffset,
              scrollDistance,
              theStep;
    
          curLi = containerUL.children(config.listItemElement + ':first-child');
    
          scrollDistance = config.distance !== 'auto' ? config.distance :
            config.direction === 'vertical' ? curLi.outerHeight(true) : curLi.outerWidth(true);
    
          // offset
          if (!config.linear) {
            theStep = Math.max(3, parseInt((scrollDistance - container[0][config.scrollOffset]) * 0.3, 10));
            newScrollOffset = Math.min(container[0][config.scrollOffset] + theStep, scrollDistance);
          } else {
            newScrollOffset = Math.min(container[0][config.scrollOffset] + config.step, scrollDistance);
          }
          container[0][config.scrollOffset] = newScrollOffset;
    
          if (newScrollOffset >= scrollDistance) {
            for (i = 0; i < config.switchItems; i++) {
              if (config.queue && config.queue.find(config.listItemElement).length > 0) {
                containerUL.append(config.queue.find(config.listItemElement)[0]);
                containerUL.children(config.listItemElement + ':first-child').remove();
              } else {
                containerUL.append(containerUL.children(config.listItemElement + ':first-child'));
              }
              ++switchCount;
            }
            container[0][config.scrollOffset] = 0;
            clearInterval(scrollingId);
            scrollingId = null;
    
            if ($.isFunction(config.afterForward)) {
              config.afterForward.call(container, {
                switchCount: switchCount,
                currentFirstChild: containerUL.children(config.listItemElement + ':first-child')
              });
            }
            if (config.triggerStackable && stackedTriggerIndex !== 0) {
              releaseStack();
              return;
            }
            if (config.infiniteLoop === false && switchCount >= config.switchAmount) {
              return;
            }
            if (config.autoPlay) {
              nextScrollId = setTimeout(forward, config.delay * 1000);
            }
          }
        };
    
        // Backward
        // 1. If forwarding, then reverse
        // 2. If stoping, then backward once
        scrollBackward = function() {
          if (paused) {
            return;
          }
          var curLi,
              i,
              newScrollOffset,
              scrollDistance,
              theStep;
    
          // init
          if (container[0][config.scrollOffset] === 0) {
            for (i = 0; i < config.switchItems; i++) {
              containerUL.children(config.listItemElement + ':last-child').insertBefore(containerUL.children(config.listItemElement+':first-child'));
            }
    
            curLi = containerUL.children(config.listItemElement + ':first-child');
            scrollDistance = config.distance !== 'auto' ?
                config.distance :
                config.direction === 'vertical' ? curLi.height() : curLi.width();
            container[0][config.scrollOffset] = scrollDistance;
          }
    
          // new offset
          if (!config.linear) {
            theStep = Math.max(3, parseInt(container[0][config.scrollOffset] * 0.3, 10));
            newScrollOffset = Math.max(container[0][config.scrollOffset] - theStep, 0);
          } else {
            newScrollOffset = Math.max(container[0][config.scrollOffset] - config.step, 0);
          }
          container[0][config.scrollOffset] = newScrollOffset;
    
          if (newScrollOffset === 0) {
            --switchCount;
            clearInterval(scrollingId);
            scrollingId = null;
    
            if ($.isFunction(config.afterBackward)) {
              config.afterBackward.call(container, {
                switchCount: switchCount,
                currentFirstChild: containerUL.children(config.listItemElement + ':first-child')
              });
            }
            if (config.triggerStackable && stackedTriggerIndex !== 0) {
              releaseStack();
              return;
            }
            if (config.autoPlay) {
              nextScrollId = setTimeout(forward, config.delay * 1000);
            }
          }
        };
    
        releaseStack = function () {
          if (stackedTriggerIndex === 0) {
            return;
          }
          if (stackedTriggerIndex > 0) {
            stackedTriggerIndex--;
            nextScrollId = setTimeout(forward, 0);
          } else {
            stackedTriggerIndex++;
            nextScrollId = setTimeout(backward, 0);
          }
        };
    
        forward = function() {
          clearInterval(scrollingId);
          scrollingId = setInterval(scrollForward, config.speed);
        };
    
        backward = function() {
          clearInterval(scrollingId);
          scrollingId = setInterval(scrollBackward, config.speed);
        };
    
        // Implements mouseover function.
        forwardHover = function() {
            config.autoPlay = true;
            paused = false;
            clearInterval(scrollingId);
            scrollingId = setInterval(scrollForward, config.speed);
        };
        pauseHover = function() {
            paused = true;
        };
    
        resetClock = function(delay) {
          config.delay = delay || config.delay;
          clearTimeout(nextScrollId);
          if (config.autoPlay) {
            nextScrollId = setTimeout(forward, config.delay * 1000);
          }
        };
    
        if (config.autoPlay) {
          nextScrollId = setTimeout(forward, config.startDelay * 1000);
        }
    
        // bind events for container
        container.bind('resetClock', function(delay) { resetClock(delay); });
        container.bind('forward', function() {
          if (config.triggerStackable) {
            if (scrollingId !== null) {
              stackedTriggerIndex++;
            } else {
              forward();
            }
          } else {
            clearTimeout(nextScrollId);
            forward();
          }
        });
        container.bind('backward', function() {
          if (config.triggerStackable) {
            if (scrollingId !== null) {
              stackedTriggerIndex--;
            } else {
              backward();
            }
          } else {
            clearTimeout(nextScrollId);
            backward();
          }
        });
        container.bind('pauseHover', function() { pauseHover(); });
        container.bind('forwardHover', function() { forwardHover(); });
        container.bind('speedUp', function(event, speed) {
          if (speed === 'undefined') {
            speed = Math.max(1, parseInt(config.speed / 2, 10));
          }
          config.speed = speed;
        });
    
        container.bind('speedDown', function(event, speed) {
          if (speed === 'undefined') {
            speed = config.speed * 2;
          }
          config.speed = speed;
        });
    
        container.bind('updateConfig', function (event, options) {
            config = $.extend(config, options);
        });
    
      });
    };
    
    }(jQuery));
    
    /**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g>0;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i,g-=1;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],e.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+">",{class:this.settings.stageClass}).wrap(a("<div/>",{class:this.settings.stageOuterClass})),this.$element.append(this.$stage.parent()))},e.prototype.initializeItems=function(){var b=this.$element.find(".owl-item");if(b.length)return this._items=b.get().map(function(b){return a(b)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var a,b,c;a=this.$element.find("img"),b=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,c=this.$element.children(b).width(),a.length&&c<=0&&this.preloadAutoWidthImages(a)}this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var e=-1,f=30,g=this.width(),h=this.coordinates();return this.settings.freeDrag||a.each(h,a.proxy(function(a,i){return"left"===c&&b>i-f&&b<i+f?e=a:"right"===c&&b>i-g-f&&b<i-g+f?e=a+1:this.op(b,"<",i)&&this.op(b,">",h[a+1]!==d?h[a+1]:i-g)&&(e="left"===c?a+1:a),-1===e},this)),this.settings.loop||(this.op(b,">",h[this.minimum()])?e=b=this.minimum():this.op(b,"<",h[this.maximum()])&&(e=b=this.maximum())),e},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){(a=this.normalize(a))!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){if(b=this._items.length)for(c=this._items[--b].width(),d=this.$element.width();b--&&!((c+=this._items[b].width()+this.settings.margin)>d););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2==0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,(d=((a-h)%g+g)%g+h)!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.isVisible()&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){(a=this.normalize(a,!0))!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),!1!==this.settings.responsive&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type)){var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&-1*e||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);for(c.lazyLoadEager>0&&(e+=c.lazyLoadEager,c.loop&&(g-=c.lazyLoadEager,e++));f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1,lazyLoadEager:0},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src")||f.attr("data-srcset");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):f.is("source")?f.one("load.owl.lazy",a.proxy(function(){this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("srcset",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(c){this._core=c,this._previousHeight=null,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"===a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var d=this;a(b).on("load",function(){d._core.settings.autoHeight&&d.update()}),a(b).resize(function(){d._core.settings.autoHeight&&(null!=d._intervalId&&clearTimeout(d._intervalId),d._intervalId=setTimeout(function(){d.update()},250))})};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.settings.lazyLoad,e=this._core.$stage.children().toArray().slice(b,c),f=[],g=0;a.each(e,function(b,c){f.push(a(c).height())}),g=Math.max.apply(null,f),g<=1&&d&&this._previousHeight&&(g=this._previousHeight),this._previousHeight=g,this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?"width:"+c.width+"px;height:"+c.height+"px;":"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(c){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?a("<div/>",{class:"owl-video-tn "+j,srcType:c}):a("<div/>",{class:"owl-video-tn",style:"opacity:1;background-image:url("+c+")"}),b.after(d),b.after(e)};if(b.wrap(a("<div/>",{class:"owl-video-wrapper",style:g})),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),c=a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),c.attr("height",h),c.attr("width",g),"youtube"===f.type?c.attr("src","//www.youtube.com/embed/"+f.id+"?autoplay=1&rel=0&v="+f.id):"vimeo"===f.type?c.attr("src","//player.vimeo.com/video/"+f.id+"?autoplay=1"):"vzaar"===f.type&&c.attr("src","//view.vzaar.com/"+f.id+"/player?autoplay=true"),a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,
animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype._next=function(d){this._call=b.setTimeout(a.proxy(this._next,this,d),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||c.hidden||this._core.next(d||this._core.settings.autoplaySpeed)},e.prototype.read=function(){return(new Date).getTime()-this._time},e.prototype.play=function(c,d){var e;this._core.is("rotating")||this._core.enter("rotating"),c=c||this._core.settings.autoplayTimeout,e=Math.min(this._time%(this._timeout||c),c),this._paused?(this._time=this.read(),this._paused=!1):b.clearTimeout(this._call),this._time+=this.read()%c-e,this._timeout=c,this._call=b.setTimeout(a.proxy(this._next,this,d),c-e)},e.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,b.clearTimeout(this._call),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,b.clearTimeout(this._call))},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d,e;e=this._core.settings;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)"$relative"===b&&e.navContainer?this._controls[b].html(""):this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);



