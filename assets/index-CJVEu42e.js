var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.provider`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.iterator;function p(e){return typeof e!=`object`||!e?null:(e=f&&e[f]||e[`@@iterator`],typeof e==`function`?e:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`setState(...): takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function v(){}v.prototype=_.prototype;function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}var b=y.prototype=new v;b.constructor=y,h(b,_.prototype),b.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,C={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function T(e,n,r){var i,a={},o=null,s=null;if(n!=null)for(i in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=``+n.key),n)S.call(n,i)&&!w.hasOwnProperty(i)&&(a[i]=n[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:t,type:e,key:o,ref:s,props:a,_owner:C.current}}function E(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ee(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function te(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ne=/\/+/g;function D(e,t){return typeof e==`object`&&e&&e.key!=null?te(``+e.key):t.toString(36)}function O(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0}}if(c)return c=e,o=o(c),e=a===``?`.`+D(c,0):a,x(o)?(i=``,e!=null&&(i=e.replace(ne,`$&/`)+`/`),O(o,r,i,``,function(e){return e})):o!=null&&(ee(o)&&(o=E(o,i+(!o.key||c&&c.key===o.key?``:(``+o.key).replace(ne,`$&/`)+`/`)+e)),r.push(o)),1;if(c=0,a=a===``?`.`:a+`:`,x(e))for(var l=0;l<e.length;l++){s=e[l];var u=a+D(s,l);c+=O(s,r,i,u,o)}else if(u=p(e),typeof u==`function`)for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=a+D(s,l++),c+=O(s,r,i,u,o);else if(s===`object`)throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`);return c}function re(e,t,n){if(e==null)return e;var r=[],i=0;return O(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ie(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var k={current:null},A={transition:null},ae={ReactCurrentDispatcher:k,ReactCurrentBatchConfig:A,ReactCurrentOwner:C};function j(){throw Error(`act(...) is not supported in production builds of React.`)}e.Children={map:re,forEach:function(e,t,n){re(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return re(e,function(){t++}),t},toArray:function(e){return re(e,function(e){return e})||[]},only:function(e){if(!ee(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}},e.Component=_,e.Fragment=r,e.Profiler=a,e.PureComponent=y,e.StrictMode=i,e.Suspense=l,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,e.act=j,e.cloneElement=function(e,n,r){if(e==null)throw Error(`React.cloneElement(...): The argument must be a React element, but you passed `+e+`.`);var i=h({},e.props),a=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=C.current),n.key!==void 0&&(a=``+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)S.call(n,l)&&!w.hasOwnProperty(l)&&(i[l]=n[l]===void 0&&c!==void 0?c[l]:n[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:t,type:e.type,key:a,ref:o,props:i,_owner:s}},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o,_context:e},e.Consumer=e},e.createElement=T,e.createFactory=function(e){var t=T.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ee,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ie}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=A.transition;A.transition={};try{e()}finally{A.transition=t}},e.unstable_act=j,e.useCallback=function(e,t){return k.current.useCallback(e,t)},e.useContext=function(e){return k.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return k.current.useDeferredValue(e)},e.useEffect=function(e,t){return k.current.useEffect(e,t)},e.useId=function(){return k.current.useId()},e.useImperativeHandle=function(e,t,n){return k.current.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return k.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return k.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return k.current.useMemo(e,t)},e.useReducer=function(e,t,n){return k.current.useReducer(e,t,n)},e.useRef=function(e){return k.current.useRef(e)},e.useState=function(e){return k.current.useState(e)},e.useSyncExternalStore=function(e,t,n){return k.current.useSyncExternalStore(e,t,n)},e.useTransition=function(){return k.current.useTransition()},e.version=`18.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=typeof setTimeout==`function`?setTimeout:null,_=typeof clearTimeout==`function`?clearTimeout:null,v=typeof setImmediate<`u`?setImmediate:null;typeof navigator<`u`&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function b(e){if(h=!1,y(e),!m){if(n(c)!==null)m=!0,re(x);else{var t=n(l);t!==null&&ie(b,t.startTime-e)}}}function x(t,i){m=!1,h&&(h=!1,_(w),w=-1),p=!0;var a=f;try{for(y(i),d=n(c);d!==null&&(!(d.expirationTime>i)||t&&!ee());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?d.callback=s:d===n(c)&&r(c),y(i)}else r(c);d=n(c)}if(d!==null)var u=!0;else{var g=n(l);g!==null&&ie(b,g.startTime-i),u=!1}return u}finally{d=null,f=a,p=!1}}var S=!1,C=null,w=-1,T=5,E=-1;function ee(){return!(e.unstable_now()-E<T)}function te(){if(C!==null){var t=e.unstable_now();E=t;var n=!0;try{n=C(!0,t)}finally{n?ne():(S=!1,C=null)}}else S=!1}var ne;if(typeof v==`function`)ne=function(){v(te)};else if(typeof MessageChannel<`u`){var D=new MessageChannel,O=D.port2;D.port1.onmessage=te,ne=function(){O.postMessage(null)}}else ne=function(){g(te,0)};function re(e){C=e,S||(S=!0,ne())}function ie(t,n){w=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,re(x))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):T=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(_(w),w=-1):h=!0,ie(b,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,re(x))),r},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u(),n=f();function r(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var i=new Set,a={};function o(e,t){s(e,t),s(e+`Capture`,t)}function s(e,t){for(a[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),l=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function h(e){return l.call(m,e)?!0:l.call(p,e)?!1:d.test(e)?m[e]=!0:(p[e]=!0,!1)}function g(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case`function`:case`symbol`:return!0;case`boolean`:return r?!1:n===null?(e=e.toLowerCase().slice(0,5),e!==`data-`&&e!==`aria-`):!n.acceptsBooleans;default:return!1}}function _(e,t,n,r){if(t==null||g(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function v(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var y={};`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e){y[e]=new v(e,0,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(function(e){var t=e[0];y[t]=new v(t,1,!1,e[1],null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(function(e){y[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(function(e){y[e]=new v(e,2,!1,e,null,!1,!1)}),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e){y[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(function(e){y[e]=new v(e,3,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(function(e){y[e]=new v(e,4,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(function(e){y[e]=new v(e,6,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(function(e){y[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,null,!1,!1)}),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)}),y.xlinkHref=new v(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});function S(e,t,n,r){var i=y.hasOwnProperty(t)?y[t]:null;(i===null?r||!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`:i.type!==0)&&(_(t,n,i,r)&&(n=null),r||i===null?h(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,``+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type!==3&&``:n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&!0===n?``:``+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var C=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for(`react.element`),T=Symbol.for(`react.portal`),E=Symbol.for(`react.fragment`),ee=Symbol.for(`react.strict_mode`),te=Symbol.for(`react.profiler`),ne=Symbol.for(`react.provider`),D=Symbol.for(`react.context`),O=Symbol.for(`react.forward_ref`),re=Symbol.for(`react.suspense`),ie=Symbol.for(`react.suspense_list`),k=Symbol.for(`react.memo`),A=Symbol.for(`react.lazy`),ae=Symbol.for(`react.offscreen`),j=Symbol.iterator;function M(e){return typeof e!=`object`||!e?null:(e=j&&e[j]||e[`@@iterator`],typeof e==`function`?e:null)}var N=Object.assign,oe;function P(e){if(oe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);oe=t&&t[1]||``}return`
`+oe+e}var se=!1;function ce(e,t){if(!e||se)return``;se=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t){if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&typeof t.stack==`string`){for(var i=t.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(` at new `,` at `);return e.displayName&&c.includes(`<anonymous>`)&&(c=c.replace(`<anonymous>`,e.displayName)),c}while(1<=o&&0<=s);break}}}finally{se=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?P(e):``}function le(e){switch(e.tag){case 5:return P(e.type);case 16:return P(`Lazy`);case 13:return P(`Suspense`);case 19:return P(`SuspenseList`);case 0:case 2:case 15:return e=ce(e.type,!1),e;case 11:return e=ce(e.type.render,!1),e;case 1:return e=ce(e.type,!0),e;default:return``}}function ue(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case E:return`Fragment`;case T:return`Portal`;case te:return`Profiler`;case ee:return`StrictMode`;case re:return`Suspense`;case ie:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case D:return(e.displayName||`Context`)+`.Consumer`;case ne:return(e._context.displayName||`Context`)+`.Provider`;case O:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case k:return t=e.displayName||null,t===null?ue(e.type)||`Memo`:t;case A:t=e._payload,e=e._init;try{return ue(e(t))}catch{}}return null}function de(e){var t=e.type;switch(e.tag){case 24:return`Cache`;case 9:return(t.displayName||`Context`)+`.Consumer`;case 10:return(t._context.displayName||`Context`)+`.Provider`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return ue(t);case 8:return t===ee?`StrictMode`:`Mode`;case 22:return`Offscreen`;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t}return null}function fe(e){switch(typeof e){case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function pe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function me(e){var t=pe(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function he(e){e._valueTracker||=me(e)}function ge(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=pe(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function F(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function _e(e,t){var n=t.checked;return N({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ve(e,t){var n=t.defaultValue==null?``:t.defaultValue,r=t.checked==null?t.defaultChecked:t.checked;n=fe(t.value==null?n:t.value),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type===`checkbox`||t.type===`radio`?t.checked!=null:t.value!=null}}function ye(e,t){t=t.checked,t!=null&&S(e,`checked`,t,!1)}function be(e,t){ye(e,t);var n=fe(t.value),r=t.type;if(n!=null)r===`number`?(n===0&&e.value===``||e.value!=n)&&(e.value=``+n):e.value!==``+n&&(e.value=``+n);else if(r===`submit`||r===`reset`){e.removeAttribute(`value`);return}t.hasOwnProperty(`value`)?Se(e,t.type,n):t.hasOwnProperty(`defaultValue`)&&Se(e,t.type,fe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xe(e,t,n){if(t.hasOwnProperty(`value`)||t.hasOwnProperty(`defaultValue`)){var r=t.type;if(!(r!==`submit`&&r!==`reset`||t.value!==void 0&&t.value!==null))return;t=``+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==``&&(e.name=``),e.defaultChecked=!!e._wrapperState.initialChecked,n!==``&&(e.name=n)}function Se(e,t,n){(t!==`number`||F(e.ownerDocument)!==e)&&(n==null?e.defaultValue=``+e._wrapperState.initialValue:e.defaultValue!==``+n&&(e.defaultValue=``+n))}var I=Array.isArray;function Ce(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+fe(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function we(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return N({},t,{value:void 0,defaultValue:void 0,children:``+e._wrapperState.initialValue})}function Te(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(r(92));if(I(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}t??=``,n=t}e._wrapperState={initialValue:fe(n)}}function Ee(e,t){var n=fe(t.value),r=fe(t.defaultValue);n!=null&&(n=``+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=``+r)}function De(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==``&&t!==null&&(e.value=t)}function L(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`math`:return`http://www.w3.org/1998/Math/MathML`;default:return`http://www.w3.org/1999/xhtml`}}function Oe(e,t){return e==null||e===`http://www.w3.org/1999/xhtml`?L(t):e===`http://www.w3.org/2000/svg`&&t===`foreignObject`?`http://www.w3.org/1999/xhtml`:e}var ke,Ae=function(e){return typeof MSApp<`u`&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==`http://www.w3.org/2000/svg`||`innerHTML`in e)e.innerHTML=t;else{for(ke||=document.createElement(`div`),ke.innerHTML=`<svg>`+t.valueOf().toString()+`</svg>`,t=ke.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function je(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ne=[`Webkit`,`ms`,`Moz`,`O`];Object.keys(Me).forEach(function(e){Ne.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Me[t]=Me[e]})});function Pe(e,t,n){return t==null||typeof t==`boolean`||t===``?``:n||typeof t!=`number`||t===0||Me.hasOwnProperty(e)&&Me[e]?(``+t).trim():t+`px`}function Fe(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=n.indexOf(`--`)===0,i=Pe(n,t[n],r);n===`float`&&(n=`cssFloat`),r?e.setProperty(n,i):e[n]=i}}var Ie=N({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Le(e,t){if(t){if(Ie[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!=`object`||!(`__html`in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!=`object`)throw Error(r(62))}}function Re(e,t){if(e.indexOf(`-`)===-1)return typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var ze=null;function Be(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ve=null,He=null,Ue=null;function We(e){if(e=Bi(e)){if(typeof Ve!=`function`)throw Error(r(280));var t=e.stateNode;t&&(t=Hi(t),Ve(e.stateNode,e.type,t))}}function Ge(e){He?Ue?Ue.push(e):Ue=[e]:He=e}function Ke(){if(He){var e=He,t=Ue;if(Ue=He=null,We(e),t)for(e=0;e<t.length;e++)We(t[e])}}function qe(e,t){return e(t)}function Je(){}var Ye=!1;function Xe(e,t,n){if(Ye)return e(t,n);Ye=!0;try{return qe(e,t,n)}finally{Ye=!1,(He!==null||Ue!==null)&&(Je(),Ke())}}function Ze(e,t){var n=e.stateNode;if(n===null)return null;var i=Hi(n);if(i===null)return null;n=i[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(i=!i.disabled)||(e=e.type,i=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!i;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(r(231,t,typeof n));return n}var Qe=!1;if(c)try{var $e={};Object.defineProperty($e,"passive",{get:function(){Qe=!0}}),window.addEventListener(`test`,$e,$e),window.removeEventListener(`test`,$e,$e)}catch{Qe=!1}function et(e,t,n,r,i,a,o,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var tt=!1,nt=null,rt=!1,it=null,at={onError:function(e){tt=!0,nt=e}};function ot(e,t,n,r,i,a,o,s,c){tt=!1,nt=null,et.apply(at,arguments)}function st(e,t,n,i,a,o,s,c,l){if(ot.apply(this,arguments),tt){if(tt){var u=nt;tt=!1,nt=null}else throw Error(r(198));rt||(rt=!0,it=u)}}function ct(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function lt(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ut(e){if(ct(e)!==e)throw Error(r(188))}function dt(e){var t=e.alternate;if(!t){if(t=ct(e),t===null)throw Error(r(188));return t===e?e:null}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return ut(a),e;if(o===i)return ut(a),t;o=o.sibling}throw Error(r(188))}if(n.return!==i.return)n=a,i=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,i=o;break}if(c===i){s=!0,i=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,i=a;break}if(c===i){s=!0,i=o,n=a;break}c=c.sibling}if(!s)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function ft(e){return e=dt(e),e===null?null:pt(e)}function pt(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=pt(e);if(t!==null)return t;e=e.sibling}return null}var mt=n.unstable_scheduleCallback,ht=n.unstable_cancelCallback,gt=n.unstable_shouldYield,_t=n.unstable_requestPaint,vt=n.unstable_now,yt=n.unstable_getCurrentPriorityLevel,bt=n.unstable_ImmediatePriority,xt=n.unstable_UserBlockingPriority,St=n.unstable_NormalPriority,Ct=n.unstable_LowPriority,wt=n.unstable_IdlePriority,Tt=null,Et=null;function Dt(e){if(Et&&typeof Et.onCommitFiberRoot==`function`)try{Et.onCommitFiberRoot(Tt,e,void 0,(e.current.flags&128)==128)}catch{}}var Ot=Math.clz32?Math.clz32:jt,kt=Math.log,At=Math.LN2;function jt(e){return e>>>=0,e===0?32:31-(kt(e)/At|0)|0}var Mt=64,Nt=4194304;function Pt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ft(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s===0?(a&=o,a!==0&&(r=Pt(a))):r=Pt(s)}else o=n&~i,o===0?a!==0&&(r=Pt(a)):r=Pt(o);if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&a&4194240))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ot(t),i=1<<n,r|=e[n],t&=~i;return r}function It(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lt(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Ot(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=It(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function Rt(e){return e=e.pendingLanes&-1073741825,e===0?e&1073741824?1073741824:0:e}function zt(){var e=Mt;return Mt<<=1,!(Mt&4194240)&&(Mt=64),e}function Bt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vt(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ot(t),e[t]=n}function Ht(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ot(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Ut(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var R=0;function Wt(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Gt,Kt,qt,Jt,Yt,Xt=!1,Zt=[],Qt=null,$t=null,en=null,tn=new Map,nn=new Map,rn=[],an=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);function on(e,t){switch(e){case`focusin`:case`focusout`:Qt=null;break;case`dragenter`:case`dragleave`:$t=null;break;case`mouseover`:case`mouseout`:en=null;break;case`pointerover`:case`pointerout`:tn.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:nn.delete(t.pointerId)}}function sn(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Bi(t),t!==null&&Kt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function cn(e,t,n,r,i){switch(t){case`focusin`:return Qt=sn(Qt,e,t,n,r,i),!0;case`dragenter`:return $t=sn($t,e,t,n,r,i),!0;case`mouseover`:return en=sn(en,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return tn.set(a,sn(tn.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,nn.set(a,sn(nn.get(a)||null,e,t,n,r,i)),!0}return!1}function ln(e){var t=zi(e.target);if(t!==null){var n=ct(t);if(n!==null){if(t=n.tag,t===13){if(t=lt(n),t!==null){e.blockedOn=t,Yt(e.priority,function(){qt(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function un(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ze=r,n.target.dispatchEvent(r),ze=null}else return t=Bi(n),t!==null&&Kt(t),e.blockedOn=n,!1;t.shift()}return!0}function dn(e,t,n){un(e)&&n.delete(t)}function fn(){Xt=!1,Qt!==null&&un(Qt)&&(Qt=null),$t!==null&&un($t)&&($t=null),en!==null&&un(en)&&(en=null),tn.forEach(dn),nn.forEach(dn)}function pn(e,t){e.blockedOn===t&&(e.blockedOn=null,Xt||(Xt=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,fn)))}function mn(e){function t(t){return pn(t,e)}if(0<Zt.length){pn(Zt[0],e);for(var n=1;n<Zt.length;n++){var r=Zt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Qt!==null&&pn(Qt,e),$t!==null&&pn($t,e),en!==null&&pn(en,e),tn.forEach(t),nn.forEach(t),n=0;n<rn.length;n++)r=rn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rn.length&&(n=rn[0],n.blockedOn===null);)ln(n),n.blockedOn===null&&rn.shift()}var hn=C.ReactCurrentBatchConfig,gn=!0;function _n(e,t,n,r){var i=R,a=hn.transition;hn.transition=null;try{R=1,yn(e,t,n,r)}finally{R=i,hn.transition=a}}function vn(e,t,n,r){var i=R,a=hn.transition;hn.transition=null;try{R=4,yn(e,t,n,r)}finally{R=i,hn.transition=a}}function yn(e,t,n,r){if(gn){var i=xn(e,t,n,r);if(i===null)di(e,t,r,bn,n),on(e,r);else if(cn(i,e,t,n,r))r.stopPropagation();else if(on(e,r),t&4&&-1<an.indexOf(e)){for(;i!==null;){var a=Bi(i);if(a!==null&&Gt(a),a=xn(e,t,n,r),a===null&&di(e,t,r,bn,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else di(e,t,r,null,n)}}var bn=null;function xn(e,t,n,r){if(bn=null,e=Be(r),e=zi(e),e!==null){if(t=ct(e),t===null)e=null;else if(n=t.tag,n===13){if(e=lt(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}return bn=e,null}function Sn(e){switch(e){case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 1;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`toggle`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 4;case`message`:switch(yt()){case bt:return 1;case xt:return 4;case St:case Ct:return 16;case wt:return 536870912;default:return 16}default:return 16}}var Cn=null,wn=null,Tn=null;function En(){if(Tn)return Tn;var e,t=wn,n=t.length,r,i=`value`in Cn?Cn.value:Cn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Tn=i.slice(e,1<r?1-r:void 0)}function Dn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function On(){return!0}function kn(){return!1}function An(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?On:kn,this.isPropagationStopped=kn,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=On)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=On)},persist:function(){},isPersistent:On}),t}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mn=An(jn),Nn=N({},jn,{view:0,detail:0}),Pn=An(Nn),Fn,In,Ln,Rn=N({},Nn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Ln&&(Ln&&e.type===`mousemove`?(Fn=e.screenX-Ln.screenX,In=e.screenY-Ln.screenY):In=Fn=0,Ln=e),Fn)},movementY:function(e){return`movementY`in e?e.movementY:In}}),zn=An(Rn),Bn=An(N({},Rn,{dataTransfer:0})),Vn=An(N({},Nn,{relatedTarget:0})),Hn=An(N({},jn,{animationName:0,elapsedTime:0,pseudoElement:0})),Un=An(N({},jn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),z=An(N({},jn,{data:0})),Wn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Gn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},B={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=B[e])?!!t[e]:!1}function qn(){return Kn}var Jn=An(N({},Nn,{key:function(e){if(e.key){var t=Wn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Dn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Gn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(e){return e.type===`keypress`?Dn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Dn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Yn=An(N({},Rn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Xn=An(N({},Nn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn})),Zn=An(N({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Qn=An(N({},Rn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),$n=[9,13,27,32],er=c&&`CompositionEvent`in window,tr=null;c&&`documentMode`in document&&(tr=document.documentMode);var nr=c&&`TextEvent`in window&&!tr,rr=c&&(!er||tr&&8<tr&&11>=tr),ir=` `,ar=!1;function or(e,t){switch(e){case`keyup`:return $n.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function sr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var cr=!1;function lr(e,t){switch(e){case`compositionend`:return sr(t);case`keypress`:return t.which===32?(ar=!0,ir):null;case`textInput`:return e=t.data,e===ir&&ar?null:e;default:return null}}function ur(e,t){if(cr)return e===`compositionend`||!er&&or(e,t)?(e=En(),Tn=wn=Cn=null,cr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return rr&&t.locale!==`ko`?null:t.data;default:return null}}var dr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function V(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!dr[e.type]:t===`textarea`}function fr(e,t,n,r){Ge(r),t=pi(t,`onChange`),0<t.length&&(n=new Mn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var pr=null,mr=null;function hr(e){ai(e,0)}function gr(e){if(ge(Vi(e)))return e}function _r(e,t){if(e===`change`)return t}var vr=!1;if(c){var yr;if(c){var br=`oninput`in document;if(!br){var xr=document.createElement(`div`);xr.setAttribute(`oninput`,`return;`),br=typeof xr.oninput==`function`}yr=br}else yr=!1;vr=yr&&(!document.documentMode||9<document.documentMode)}function Sr(){pr&&(pr.detachEvent(`onpropertychange`,Cr),mr=pr=null)}function Cr(e){if(e.propertyName===`value`&&gr(mr)){var t=[];fr(t,mr,e,Be(e)),Xe(hr,t)}}function wr(e,t,n){e===`focusin`?(Sr(),pr=t,mr=n,pr.attachEvent(`onpropertychange`,Cr)):e===`focusout`&&Sr()}function Tr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return gr(mr)}function Er(e,t){if(e===`click`)return gr(t)}function Dr(e,t){if(e===`input`||e===`change`)return gr(t)}function Or(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var kr=typeof Object.is==`function`?Object.is:Or;function Ar(e,t){if(kr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!l.call(t,i)||!kr(e[i],t[i]))return!1}return!0}function jr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mr(e,t){var n=jr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=jr(n)}}function Nr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pr(){for(var e=window,t=F();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=F(e.document)}return t}function Fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function Ir(e){var t=Pr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Nr(n.ownerDocument.documentElement,n)){if(r!==null&&Fr(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),`selectionStart`in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Mr(n,a);var o=Mr(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus==`function`&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lr=c&&`documentMode`in document&&11>=document.documentMode,Rr=null,zr=null,Br=null,Vr=!1;function Hr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vr||Rr==null||Rr!==F(r)||(r=Rr,`selectionStart`in r&&Fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&Ar(Br,r)||(Br=r,r=pi(zr,`onSelect`),0<r.length&&(t=new Mn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Wr={animationend:Ur(`Animation`,`AnimationEnd`),animationiteration:Ur(`Animation`,`AnimationIteration`),animationstart:Ur(`Animation`,`AnimationStart`),transitionend:Ur(`Transition`,`TransitionEnd`)},Gr={},Kr={};c&&(Kr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),`TransitionEvent`in window||delete Wr.transitionend.transition);function qr(e){if(Gr[e])return Gr[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kr)return Gr[e]=t[n];return e}var Jr=qr(`animationend`),Yr=qr(`animationiteration`),Xr=qr(`animationstart`),Zr=qr(`transitionend`),Qr=new Map,$r=`abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);function ei(e,t){Qr.set(e,t),o(t,[e])}for(var ti=0;ti<$r.length;ti++){var H=$r[ti];ei(H.toLowerCase(),`on`+(H[0].toUpperCase()+H.slice(1)))}ei(Jr,`onAnimationEnd`),ei(Yr,`onAnimationIteration`),ei(Xr,`onAnimationStart`),ei(`dblclick`,`onDoubleClick`),ei(`focusin`,`onFocus`),ei(`focusout`,`onBlur`),ei(Zr,`onTransitionEnd`),s(`onMouseEnter`,[`mouseout`,`mouseover`]),s(`onMouseLeave`,[`mouseout`,`mouseover`]),s(`onPointerEnter`,[`pointerout`,`pointerover`]),s(`onPointerLeave`,[`pointerout`,`pointerover`]),o(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),o(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),o(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),o(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var ni=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),ri=new Set(`cancel close invalid load scroll toggle`.split(` `).concat(ni));function ii(e,t,n){var r=e.type||`unknown-event`;e.currentTarget=n,st(r,t,void 0,e),e.currentTarget=null}function ai(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;ii(i,s,l),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;ii(i,s,l),a=c}}}if(rt)throw e=it,rt=!1,it=null,e}function oi(e,t){var n=t[Ii];n===void 0&&(n=t[Ii]=new Set);var r=e+`__bubble`;n.has(r)||(ui(t,e,2,!1),n.add(r))}function si(e,t,n){var r=0;t&&(r|=4),ui(n,e,r,t)}var ci=`_reactListening`+Math.random().toString(36).slice(2);function li(e){if(!e[ci]){e[ci]=!0,i.forEach(function(t){t!==`selectionchange`&&(ri.has(t)||si(t,!1,e),si(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ci]||(t[ci]=!0,si(`selectionchange`,!1,t))}}function ui(e,t,n,r){switch(Sn(t)){case 1:var i=_n;break;case 4:i=vn;break;default:i=yn}n=i.bind(null,t,n,e),i=void 0,!Qe||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function di(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=zi(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue a}s=s.parentNode}}r=r.return}Xe(function(){var r=a,i=Be(n),o=[];a:{var s=Qr.get(e);if(s!==void 0){var c=Mn,l=e;switch(e){case`keypress`:if(Dn(n)===0)break a;case`keydown`:case`keyup`:c=Jn;break;case`focusin`:l=`focus`,c=Vn;break;case`focusout`:l=`blur`,c=Vn;break;case`beforeblur`:case`afterblur`:c=Vn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=zn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Bn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Xn;break;case Jr:case Yr:case Xr:c=Hn;break;case Zr:c=Zn;break;case`scroll`:c=Pn;break;case`wheel`:c=Qn;break;case`copy`:case`cut`:case`paste`:c=Un;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Yn}var u=!!(t&4),d=!u&&e===`scroll`,f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){m=p;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,f!==null&&(h=Ze(p,f),h!=null&&u.push(fi(p,h,m)))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==ze&&(l=n.relatedTarget||n.fromElement)&&(zi(l)||l[Fi]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?zi(l):null,l!==null&&(d=ct(l),l!==d||l.tag!==5&&l.tag!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=zn,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=Yn,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:Vi(c),m=l==null?s:Vi(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,zi(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=c,f=l,p=0,m=u;m;m=mi(m))p++;for(m=0,h=f;h;h=mi(h))m++;for(;0<p-m;)u=mi(u),p--;for(;0<m-p;)f=mi(f),m--;for(;p--;){if(u===f||f!==null&&u===f.alternate)break b;u=mi(u),f=mi(f)}u=null}else u=null;c!==null&&hi(o,s,c,u,!1),l!==null&&d!==null&&hi(o,d,l,u,!0)}}a:{if(s=r?Vi(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=_r;else if(V(s)){if(vr)g=Dr;else{g=Tr;var _=wr}}else(c=s.nodeName)&&c.toLowerCase()===`input`&&(s.type===`checkbox`||s.type===`radio`)&&(g=Er);if(g&&=g(e,r)){fr(o,g,n,i);break a}_&&_(e,s,r),e===`focusout`&&(_=s._wrapperState)&&_.controlled&&s.type===`number`&&Se(s,`number`,s.value)}switch(_=r?Vi(r):window,e){case`focusin`:(V(_)||_.contentEditable===`true`)&&(Rr=_,zr=r,Br=null);break;case`focusout`:Br=zr=Rr=null;break;case`mousedown`:Vr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Vr=!1,Hr(o,n,i);break;case`selectionchange`:if(Lr)break;case`keydown`:case`keyup`:Hr(o,n,i)}var v;if(er)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else cr?or(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(y=`onCompositionStart`);y&&(rr&&n.locale!==`ko`&&(cr||y!==`onCompositionStart`?y===`onCompositionEnd`&&cr&&(v=En()):(Cn=i,wn=`value`in Cn?Cn.value:Cn.textContent,cr=!0)),_=pi(r,y),0<_.length&&(y=new z(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=sr(n),v!==null&&(y.data=v)))),(v=nr?lr(e,n):ur(e,n))&&(r=pi(r,`onBeforeInput`),0<r.length&&(i=new z(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:i,listeners:r}),i.data=v))}ai(o,t)})}function fi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function pi(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Ze(e,n),a!=null&&r.unshift(fi(e,a,i)),a=Ze(e,t),a!=null&&r.push(fi(e,a,i))),e=e.return}return r}function mi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hi(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,i?(c=Ze(n,a),c!=null&&o.unshift(fi(n,c,s))):i||(c=Ze(n,a),c!=null&&o.push(fi(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var gi=/\r\n?/g,_i=/\u0000|\uFFFD/g;function vi(e){return(typeof e==`string`?e:``+e).replace(gi,`
`).replace(_i,``)}function yi(e,t,n){if(t=vi(t),vi(e)!==t&&n)throw Error(r(425))}function bi(){}var xi=null,Si=null;function Ci(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wi=typeof setTimeout==`function`?setTimeout:void 0,Ti=typeof clearTimeout==`function`?clearTimeout:void 0,Ei=typeof Promise==`function`?Promise:void 0,Di=typeof queueMicrotask==`function`?queueMicrotask:Ei===void 0?wi:function(e){return Ei.resolve(null).then(e).catch(Oi)};function Oi(e){setTimeout(function(){throw e})}function ki(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`){if(r===0){e.removeChild(i),mn(t);return}r--}else n!==`$`&&n!==`$?`&&n!==`$!`||r++}n=i}while(n);mn(t)}function Ai(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`)break;if(t===`/$`)return null}}return e}function ji(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}var Mi=Math.random().toString(36).slice(2),Ni=`__reactFiber$`+Mi,Pi=`__reactProps$`+Mi,Fi=`__reactContainer$`+Mi,Ii=`__reactEvents$`+Mi,Li=`__reactListeners$`+Mi,Ri=`__reactHandles$`+Mi;function zi(e){var t=e[Ni];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Fi]||n[Ni]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ji(e);e!==null;){if(n=e[Ni])return n;e=ji(e)}return t}e=n,n=e.parentNode}return null}function Bi(e){return e=e[Ni]||e[Fi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function Hi(e){return e[Pi]||null}var Ui=[],Wi=-1;function Gi(e){return{current:e}}function U(e){0>Wi||(e.current=Ui[Wi],Ui[Wi]=null,Wi--)}function W(e,t){Wi++,Ui[Wi]=e.current,e.current=t}var Ki={},qi=Gi(Ki),Ji=Gi(!1),Yi=Ki;function Xi(e,t){var n=e.type.contextTypes;if(!n)return Ki;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Zi(e){return e=e.childContextTypes,e!=null}function Qi(){U(Ji),U(qi)}function $i(e,t,n){if(qi.current!==Ki)throw Error(r(168));W(qi,t),W(Ji,n)}function ea(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!=`function`)return n;for(var a in i=i.getChildContext(),i)if(!(a in t))throw Error(r(108,de(e)||`Unknown`,a));return N({},n,i)}function ta(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ki,Yi=qi.current,W(qi,e),W(Ji,Ji.current),!0}function na(e,t,n){var i=e.stateNode;if(!i)throw Error(r(169));n?(e=ea(e,t,Yi),i.__reactInternalMemoizedMergedChildContext=e,U(Ji),U(qi),W(qi,e)):U(Ji),W(Ji,n)}var ra=null,ia=!1,aa=!1;function oa(e){ra===null?ra=[e]:ra.push(e)}function sa(e){ia=!0,oa(e)}function ca(){if(!aa&&ra!==null){aa=!0;var e=0,t=R;try{var n=ra;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ra=null,ia=!1}catch(t){throw ra!==null&&(ra=ra.slice(e+1)),mt(bt,ca),t}finally{R=t,aa=!1}}return null}var la=[],ua=0,da=null,fa=0,pa=[],ma=0,ha=null,ga=1,_a=``;function va(e,t){la[ua++]=fa,la[ua++]=da,da=e,fa=t}function ya(e,t,n){pa[ma++]=ga,pa[ma++]=_a,pa[ma++]=ha,ha=e;var r=ga;e=_a;var i=32-Ot(r)-1;r&=~(1<<i),n+=1;var a=32-Ot(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ga=1<<32-Ot(t)+i|n<<i|r,_a=a+e}else ga=1<<a|n<<i|r,_a=e}function ba(e){e.return!==null&&(va(e,1),ya(e,1,0))}function xa(e){for(;e===da;)da=la[--ua],la[ua]=null,fa=la[--ua],la[ua]=null;for(;e===ha;)ha=pa[--ma],pa[ma]=null,_a=pa[--ma],pa[ma]=null,ga=pa[--ma],pa[ma]=null}var Sa=null,Ca=null,wa=!1,G=null;function Ta(e,t){var n=Jl(5,null,null,0);n.elementType=`DELETED`,n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ea(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null&&(e.stateNode=t,Sa=e,Ca=Ai(t.firstChild),!0);case 6:return t=e.pendingProps===``||t.nodeType!==3?null:t,t!==null&&(e.stateNode=t,Sa=e,Ca=null,!0);case 13:return t=t.nodeType===8?t:null,t!==null&&(n=ha===null?null:{id:ga,overflow:_a},e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Jl(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Sa=e,Ca=null,!0);default:return!1}}function Da(e){return!!(e.mode&1)&&!(e.flags&128)}function Oa(e){if(wa){var t=Ca;if(t){var n=t;if(!Ea(e,t)){if(Da(e))throw Error(r(418));t=Ai(n.nextSibling);var i=Sa;t&&Ea(e,t)?Ta(i,n):(e.flags=e.flags&-4097|2,wa=!1,Sa=e)}}else{if(Da(e))throw Error(r(418));e.flags=e.flags&-4097|2,wa=!1,Sa=e}}}function ka(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Sa=e}function Aa(e){if(e!==Sa)return!1;if(!wa)return ka(e),wa=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!==`head`&&t!==`body`&&!Ci(e.type,e.memoizedProps)),t&&=Ca){if(Da(e))throw ja(),Error(r(418));for(;t;)Ta(e,t),t=Ai(t.nextSibling)}if(ka(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(r(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`){if(t===0){Ca=Ai(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++}e=e.nextSibling}Ca=null}}else Ca=Sa?Ai(e.stateNode.nextSibling):null;return!0}function ja(){for(var e=Ca;e;)e=Ai(e.nextSibling)}function Ma(){Ca=Sa=null,wa=!1}function Na(e){G===null?G=[e]:G.push(e)}var Pa=C.ReactCurrentBatchConfig;function Fa(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(r(309));var i=n.stateNode}if(!i)throw Error(r(147,e));var a=i,o=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;e===null?delete t[o]:t[o]=e},t._stringRef=o,t)}if(typeof e!=`string`)throw Error(r(284));if(!n._owner)throw Error(r(290,e))}return e}function Ia(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e))}function La(e){var t=e._init;return t(e._payload)}function Ra(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function i(e,t){for(e=new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function a(e,t){return e=Zl(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=2,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=2),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=tu(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===E?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===A&&La(i)===t.type)?(r=a(t,n.props),r.ref=Fa(e,t,n),r.return=e,r):(r=Ql(n.type,n.key,n.props,null,e.mode,r),r.ref=Fa(e,t,n),r.return=e,r)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=nu(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=$l(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`)return t=tu(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case w:return n=Ql(t.type,t.key,t.props,null,e.mode,n),n.ref=Fa(e,null,t),n.return=e,n;case T:return t=nu(t,e.mode,n),t.return=e,t;case A:var r=t._init;return f(e,r(t._payload),n)}if(I(t)||M(t))return t=$l(t,e.mode,n,null),t.return=e,t;Ia(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case w:return n.key===i?l(e,t,n,r):null;case T:return n.key===i?u(e,t,n,r):null;case A:return i=n._init,p(e,t,i(n._payload),r)}if(I(n)||M(n))return i===null?d(e,t,n,r,null):null;Ia(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case w:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case T:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case A:var a=r._init;return m(e,t,n,a(r._payload),i)}if(I(r)||M(r))return e=e.get(n)||null,d(t,e,r,i,null);Ia(t,r)}return null}function h(r,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(r,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(r,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(r,d),wa&&va(r,h),l;if(d===null){for(;h<s.length;h++)d=f(r,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return wa&&va(r,h),l}for(d=i(r,d);h<s.length;h++)g=m(d,r,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(r,e)}),wa&&va(r,h),l}function g(a,s,c,l){var u=M(c);if(typeof u!=`function`)throw Error(r(150));if(c=u.call(c),c==null)throw Error(r(151));for(var d=u=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),wa&&va(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return wa&&va(a,g),u}for(h=i(a,h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),wa&&va(a,g),u}function _(e,r,i,o){if(typeof i==`object`&&i&&i.type===E&&i.key===null&&(i=i.props.children),typeof i==`object`&&i){switch(i.$$typeof){case w:a:{for(var c=i.key,l=r;l!==null;){if(l.key===c){if(c=i.type,c===E){if(l.tag===7){n(e,l.sibling),r=a(l,i.props.children),r.return=e,e=r;break a}}else if(l.elementType===c||typeof c==`object`&&c&&c.$$typeof===A&&La(c)===l.type){n(e,l.sibling),r=a(l,i.props),r.ref=Fa(e,l,i),r.return=e,e=r;break a}n(e,l);break}t(e,l),l=l.sibling}i.type===E?(r=$l(i.props.children,e.mode,o,i.key),r.return=e,e=r):(o=Ql(i.type,i.key,i.props,null,e.mode,o),o.ref=Fa(e,r,i),o.return=e,e=o)}return s(e);case T:a:{for(l=i.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===i.containerInfo&&r.stateNode.implementation===i.implementation){n(e,r.sibling),r=a(r,i.children||[]),r.return=e,e=r;break a}n(e,r);break}t(e,r),r=r.sibling}r=nu(i,e.mode,o),r.return=e,e=r}return s(e);case A:return l=i._init,_(e,r,l(i._payload),o)}if(I(i))return h(e,r,i,o);if(M(i))return g(e,r,i,o);Ia(e,i)}return typeof i==`string`&&i!==``||typeof i==`number`?(i=``+i,r!==null&&r.tag===6?(n(e,r.sibling),r=a(r,i),r.return=e,e=r):(n(e,r),r=tu(i,e.mode,o),r.return=e,e=r),s(e)):n(e,r)}return _}var za=Ra(!0),Ba=Ra(!1),Va=Gi(null),Ha=null,Ua=null,Wa=null;function Ga(){Wa=Ua=Ha=null}function Ka(e){var t=Va.current;U(Va),e._currentValue=t}function qa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Ja(e,t){Ha=e,Wa=Ua=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ls=!0),e.firstContext=null)}function Ya(e){var t=e._currentValue;if(Wa!==e){if(e={context:e,memoizedValue:t,next:null},Ua===null){if(Ha===null)throw Error(r(308));Ua=e,Ha.dependencies={lanes:0,firstContext:e}}else Ua=Ua.next=e}return t}var Xa=null;function Za(e){Xa===null?Xa=[e]:Xa.push(e)}function Qa(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Za(t)):(n.next=i.next,i.next=n),t.interleaved=n,$a(e,r)}function $a(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var eo=!1;function to(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function no(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ro(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function io(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,$a(e,n)}return i=r.interleaved,i===null?(t.next=t,Za(r)):(t.next=i.next,i.next=t),r.interleaved=t,$a(e,n)}function K(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194240)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ut(e,n)}}function ao(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function oo(e,t,n,r){var i=e.updateQueue;eo=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});a:{var m=e,h=s;switch(f=t,p=n,h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(p,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(p,d,f):m,f==null)break a;d=N({},d,f);break a;case 2:eo=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Zc|=o,e.lanes=o,e.memoizedState=d}}function so(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!=`function`)throw Error(r(191,a));a.call(i)}}}var co={},lo=Gi(co),uo=Gi(co),fo=Gi(co);function po(e){if(e===co)throw Error(r(174));return e}function mo(e,t){switch(W(fo,t),W(uo,e),W(lo,co),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Oe(null,``);break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Oe(t,e)}U(lo),W(lo,t)}function ho(){U(lo),U(uo),U(fo)}function go(e){po(fo.current);var t=po(lo.current),n=Oe(t,e.type);t!==n&&(W(uo,e),W(lo,n))}function _o(e){uo.current===e&&(U(lo),U(uo))}var vo=Gi(0);function yo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bo=[];function xo(){for(var e=0;e<bo.length;e++)bo[e]._workInProgressVersionPrimary=null;bo.length=0}var So=C.ReactCurrentDispatcher,Co=C.ReactCurrentBatchConfig,wo=0,To=null,Eo=null,Do=null,Oo=!1,ko=!1,Ao=0,jo=0;function Mo(){throw Error(r(321))}function No(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kr(e[n],t[n]))return!1;return!0}function Po(e,t,n,i,a,o){if(wo=o,To=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,So.current=e===null||e.memoizedState===null?_s:vs,e=n(i,a),ko){o=0;do{if(ko=!1,Ao=0,25<=o)throw Error(r(301));o+=1,Do=Eo=null,t.updateQueue=null,So.current=ys,e=n(i,a)}while(ko)}if(So.current=gs,t=Eo!==null&&Eo.next!==null,wo=0,Do=Eo=To=null,Oo=!1,t)throw Error(r(300));return e}function Fo(){var e=Ao!==0;return Ao=0,e}function Io(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Do===null?To.memoizedState=Do=e:Do=Do.next=e,Do}function Lo(){if(Eo===null){var e=To.alternate;e=e===null?null:e.memoizedState}else e=Eo.next;var t=Do===null?To.memoizedState:Do.next;if(t!==null)Do=t,Eo=e;else{if(e===null)throw Error(r(310));Eo=e,e={memoizedState:Eo.memoizedState,baseState:Eo.baseState,baseQueue:Eo.baseQueue,queue:Eo.queue,next:null},Do===null?To.memoizedState=Do=e:Do=Do.next=e}return Do}function Ro(e,t){return typeof t==`function`?t(e):t}function zo(e){var t=Lo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=Eo,a=i.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,i=i.baseState;var c=s=null,l=null,u=o;do{var d=u.lane;if((wo&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=f,s=i):l=l.next=f,To.lanes|=d,Zc|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=c,kr(i,t.memoizedState)||(Ls=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){a=e;do o=a.lane,To.lanes|=o,Zc|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bo(e){var t=Lo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);kr(o,t.memoizedState)||(Ls=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function Vo(){}function Ho(e,t){var n=To,i=Lo(),a=t(),o=!kr(i.memoizedState,a);if(o&&(i.memoizedState=a,Ls=!0),i=i.queue,es(Go.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||Do!==null&&Do.memoizedState.tag&1){if(n.flags|=2048,Yo(9,Wo.bind(null,n,i,a,t),void 0,null),Gc===null)throw Error(r(349));wo&30||Uo(n,t,a)}return a}function Uo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=To.updateQueue,t===null?(t={lastEffect:null,stores:null},To.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wo(e,t,n,r){t.value=n,t.getSnapshot=r,Ko(t)&&qo(e)}function Go(e,t,n){return n(function(){Ko(t)&&qo(e)})}function Ko(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kr(e,n)}catch{return!0}}function qo(e){var t=$a(e,1);t!==null&&_l(t,e,1,-1)}function Jo(e){var t=Io();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:e},t.queue=e,e=e.dispatch=fs.bind(null,To,e),[t.memoizedState,e]}function Yo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=To.updateQueue,t===null?(t={lastEffect:null,stores:null},To.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Xo(){return Lo().memoizedState}function Zo(e,t,n,r){var i=Io();To.flags|=e,i.memoizedState=Yo(1|t,n,void 0,r===void 0?null:r)}function Qo(e,t,n,r){var i=Lo();r=r===void 0?null:r;var a=void 0;if(Eo!==null){var o=Eo.memoizedState;if(a=o.destroy,r!==null&&No(r,o.deps)){i.memoizedState=Yo(t,n,a,r);return}}To.flags|=e,i.memoizedState=Yo(1|t,n,a,r)}function $o(e,t){return Zo(8390656,8,e,t)}function es(e,t){return Qo(2048,8,e,t)}function ts(e,t){return Qo(4,2,e,t)}function ns(e,t){return Qo(4,4,e,t)}function rs(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function is(e,t,n){return n=n==null?null:n.concat([e]),Qo(4,4,rs.bind(null,t,e),n)}function as(){}function os(e,t){var n=Lo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&No(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ss(e,t){var n=Lo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&No(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function cs(e,t,n){return wo&21?(kr(n,t)||(n=zt(),To.lanes|=n,Zc|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ls=!0),e.memoizedState=n)}function ls(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=Co.transition;Co.transition={};try{e(!1),t()}finally{R=n,Co.transition=r}}function us(){return Lo().memoizedState}function ds(e,t,n){var r=gl(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ps(e))ms(t,n);else if(n=Qa(e,t,n,r),n!==null){var i=hl();_l(n,e,r,i),hs(n,t,r)}}function fs(e,t,n){var r=gl(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ps(e))ms(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,kr(s,o)){var c=t.interleaved;c===null?(i.next=i,Za(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}n=Qa(e,t,i,r),n!==null&&(i=hl(),_l(n,e,r,i),hs(n,t,r))}}function ps(e){var t=e.alternate;return e===To||t!==null&&t===To}function ms(e,t){ko=Oo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hs(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ut(e,n)}}var gs={readContext:Ya,useCallback:Mo,useContext:Mo,useEffect:Mo,useImperativeHandle:Mo,useInsertionEffect:Mo,useLayoutEffect:Mo,useMemo:Mo,useReducer:Mo,useRef:Mo,useState:Mo,useDebugValue:Mo,useDeferredValue:Mo,useTransition:Mo,useMutableSource:Mo,useSyncExternalStore:Mo,useId:Mo,unstable_isNewReconciler:!1},_s={readContext:Ya,useCallback:function(e,t){return Io().memoizedState=[e,t===void 0?null:t],e},useContext:Ya,useEffect:$o,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),Zo(4194308,4,rs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zo(4,2,e,t)},useMemo:function(e,t){var n=Io();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Io();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ds.bind(null,To,e),[r.memoizedState,e]},useRef:function(e){var t=Io();return e={current:e},t.memoizedState=e},useState:Jo,useDebugValue:as,useDeferredValue:function(e){return Io().memoizedState=e},useTransition:function(){var e=Jo(!1),t=e[0];return e=ls.bind(null,e[1]),Io().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=To,a=Io();if(wa){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),Gc===null)throw Error(r(349));wo&30||Uo(i,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,$o(Go.bind(null,i,o,e),[e]),i.flags|=2048,Yo(9,Wo.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=Io(),t=Gc.identifierPrefix;if(wa){var n=_a,r=ga;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,t=`:`+t+`R`+n,n=Ao++,0<n&&(t+=`H`+n.toString(32)),t+=`:`}else n=jo++,t=`:`+t+`r`+n.toString(32)+`:`;return e.memoizedState=t},unstable_isNewReconciler:!1},vs={readContext:Ya,useCallback:os,useContext:Ya,useEffect:es,useImperativeHandle:is,useInsertionEffect:ts,useLayoutEffect:ns,useMemo:ss,useReducer:zo,useRef:Xo,useState:function(){return zo(Ro)},useDebugValue:as,useDeferredValue:function(e){return cs(Lo(),Eo.memoizedState,e)},useTransition:function(){return[zo(Ro)[0],Lo().memoizedState]},useMutableSource:Vo,useSyncExternalStore:Ho,useId:us,unstable_isNewReconciler:!1},ys={readContext:Ya,useCallback:os,useContext:Ya,useEffect:es,useImperativeHandle:is,useInsertionEffect:ts,useLayoutEffect:ns,useMemo:ss,useReducer:Bo,useRef:Xo,useState:function(){return Bo(Ro)},useDebugValue:as,useDeferredValue:function(e){var t=Lo();return Eo===null?t.memoizedState=e:cs(t,Eo.memoizedState,e)},useTransition:function(){return[Bo(Ro)[0],Lo().memoizedState]},useMutableSource:Vo,useSyncExternalStore:Ho,useId:us,unstable_isNewReconciler:!1};function bs(e,t){if(e&&e.defaultProps){for(var n in t=N({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function xs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:N({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ss={isMounted:function(e){return(e=e._reactInternals)?ct(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=hl(),i=gl(e),a=ro(r,i);a.payload=t,n!=null&&(a.callback=n),t=io(e,a,i),t!==null&&(_l(t,e,i,r),K(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=hl(),i=gl(e),a=ro(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=io(e,a,i),t!==null&&(_l(t,e,i,r),K(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=hl(),r=gl(e),i=ro(n,r);i.tag=2,t!=null&&(i.callback=t),t=io(e,i,r),t!==null&&(_l(t,e,r,n),K(t,e,r))}};function Cs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(i,a):!0}function ws(e,t,n){var r=!1,i=Ki,a=t.contextType;return typeof a==`object`&&a?a=Ya(a):(i=Zi(t)?Yi:qi.current,r=t.contextTypes,a=(r=r!=null)?Xi(e,i):Ki),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ss,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Ts(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ss.enqueueReplaceState(t,t.state,null)}function Es(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},to(e);var a=t.contextType;typeof a==`object`&&a?i.context=Ya(a):(a=Zi(t)?Yi:qi.current,i.context=Xi(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(xs(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&Ss.enqueueReplaceState(i,i.state,null),oo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4194308)}function Ds(e,t){try{var n=``,r=t;do n+=le(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i,digest:null}}function Os(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ks(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var As=typeof WeakMap==`function`?WeakMap:Map;function js(e,t,n){n=ro(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){al||(al=!0,ol=r),ks(e,t)},n}function Ms(e,t,n){n=ro(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ks(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){ks(e,t),typeof r!=`function`&&(sl===null?sl=new Set([this]):sl.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}function Ns(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new As;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Vl.bind(null,e,t,n),t.then(e,e))}function Ps(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t===null||t.dehydrated!==null),t)return e;e=e.return}while(e!==null);return null}function Fs(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ro(-1,1),t.tag=2,io(n,t,1))),n.lanes|=1),e)}var Is=C.ReactCurrentOwner,Ls=!1;function Rs(e,t,n,r){t.child=e===null?Ba(t,null,n,r):za(t,e.child,n,r)}function zs(e,t,n,r,i){n=n.render;var a=t.ref;return Ja(t,i),r=Po(e,t,n,r,a,i),n=Fo(),e!==null&&!Ls?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ic(e,t,i)):(wa&&n&&ba(t),t.flags|=1,Rs(e,t,r,i),t.child)}function Bs(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Yl(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Vs(e,t,a,r,i)):(e=Ql(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n===null?Ar:n,n(o,r)&&e.ref===t.ref)return ic(e,t,i)}return t.flags|=1,e=Zl(a,r),e.ref=t.ref,e.return=t,t.child=e}function Vs(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ar(a,r)&&e.ref===t.ref){if(Ls=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Ls=!0);else return t.lanes=e.lanes,ic(e,t,i)}}return Ws(e,t,n,r,i)}function Hs(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`){if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Jc,qc),qc|=n;else{if(!(n&1073741824))return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Jc,qc),qc|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a===null?n:a.baseLanes,W(Jc,qc),qc|=r}}else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),W(Jc,qc),qc|=r;return Rs(e,t,i,n),t.child}function Us(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ws(e,t,n,r,i){var a=Zi(n)?Yi:qi.current;return a=Xi(t,a),Ja(t,i),n=Po(e,t,n,r,a,i),r=Fo(),e!==null&&!Ls?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ic(e,t,i)):(wa&&r&&ba(t),t.flags|=1,Rs(e,t,n,i),t.child)}function Gs(e,t,n,r,i){if(Zi(n)){var a=!0;ta(t)}else a=!1;if(Ja(t,i),t.stateNode===null)rc(e,t),ws(t,n,r),Es(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=Ya(l):(l=Zi(n)?Yi:qi.current,l=Xi(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&Ts(t,o,r,l),eo=!1;var f=t.memoizedState;o.state=f,oo(t,r,o,i),c=t.memoizedState,s!==r||f!==c||Ji.current||eo?(typeof u==`function`&&(xs(t,n,u,r),c=t.memoizedState),(s=eo||Cs(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4194308)):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,no(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:bs(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=Ya(c):(c=Zi(n)?Yi:qi.current,c=Xi(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&Ts(t,o,r,c),eo=!1,f=t.memoizedState,o.state=f,oo(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||Ji.current||eo?(typeof p==`function`&&(xs(t,n,p,r),m=t.memoizedState),(l=eo||Cs(t,n,l,r,f,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Ks(e,t,n,r,a,i)}function Ks(e,t,n,r,i,a){Us(e,t);var o=!!(t.flags&128);if(!r&&!o)return i&&na(t,n,!1),ic(e,t,a);r=t.stateNode,Is.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=za(t,e.child,null,a),t.child=za(t,null,s,a)):Rs(e,t,s,a),t.memoizedState=r.state,i&&na(t,n,!0),t.child}function qs(e){var t=e.stateNode;t.pendingContext?$i(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$i(e,t.context,!1),mo(e,t.containerInfo)}function Js(e,t,n,r,i){return Ma(),Na(i),t.flags|=256,Rs(e,t,n,r),t.child}var Ys={dehydrated:null,treeContext:null,retryLane:0};function q(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xs(e,t,n){var r=t.pendingProps,i=vo.current,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(i&2)),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(vo,i&1),e===null)return Oa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.lanes=t.mode&1?e.data===`$!`?8:1073741824:1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:`hidden`,children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=eu(o,r,0,null),e=$l(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=q(n),t.memoizedState=Ys,e):Zs(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return $s(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:`hidden`,children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Zl(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s===null?(a=$l(a,o,n,null),a.flags|=2):a=Zl(s,a),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?q(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Ys,r}return a=e.child,e=a.sibling,r=Zl(a,{mode:`visible`,children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Zs(e,t){return t=eu({mode:`visible`,children:t},e.mode,0,null),t.return=e,e.child=t}function Qs(e,t,n,r){return r!==null&&Na(r),za(t,e.child,null,n),e=Zs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $s(e,t,n,i,a,o,s){if(n)return t.flags&256?(t.flags&=-257,i=Os(Error(r(422))),Qs(e,t,s,i)):t.memoizedState===null?(o=i.fallback,a=t.mode,i=eu({mode:`visible`,children:i.children},a,0,null),o=$l(o,a,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&za(t,e.child,null,s),t.child.memoizedState=q(s),t.memoizedState=Ys,o):(t.child=e.child,t.flags|=128,null);if(!(t.mode&1))return Qs(e,t,s,null);if(a.data===`$!`){if(i=a.nextSibling&&a.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(r(419)),i=Os(o,i,void 0),Qs(e,t,s,i)}if(c=(s&e.childLanes)!==0,Ls||c){if(i=Gc,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|s))===0?a:0,a!==0&&a!==o.retryLane&&(o.retryLane=a,$a(e,a),_l(i,e,a,-1))}return Z(),i=Os(Error(r(421))),Qs(e,t,s,i)}return a.data===`$?`?(t.flags|=128,t.child=e.child,t=Ul.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Ca=Ai(a.nextSibling),Sa=t,wa=!0,G=null,e!==null&&(pa[ma++]=ga,pa[ma++]=_a,pa[ma++]=ha,ga=e.id,_a=e.overflow,ha=t),t=Zs(t,i.children),t.flags|=4096,t)}function ec(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),qa(e.return,t,n)}function tc(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function nc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Rs(e,t,r.children,n),r=vo.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ec(e,n,t);else if(e.tag===19)ec(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(vo,r),!(t.mode&1))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&yo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),tc(t,!1,i,n,a);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&yo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}tc(t,!0,n,null,a);break;case`together`:tc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function rc(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ic(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Zc|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=Zl(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zl(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ac(e,t,n){switch(t.tag){case 3:qs(t),Ma();break;case 5:go(t);break;case 1:Zi(t.type)&&ta(t);break;case 4:mo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(Va,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(W(vo,vo.current&1),e=ic(e,t,n),e===null?null:e.sibling):Xs(e,t,n):(W(vo,vo.current&1),t.flags|=128,null);W(vo,vo.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return nc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(vo,vo.current),r)break;return null;case 22:case 23:return t.lanes=0,Hs(e,t,n)}return ic(e,t,n)}var oc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},sc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,po(lo.current);var o=null;switch(n){case`input`:i=_e(e,i),r=_e(e,r),o=[];break;case`select`:i=N({},i,{value:void 0}),r=N({},r,{value:void 0}),o=[];break;case`textarea`:i=we(e,i),r=we(e,r),o=[];break;default:typeof i.onClick!=`function`&&typeof r.onClick==`function`&&(e.onclick=bi)}Le(n,r);var s;for(u in n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null){if(u===`style`){var c=i[u];for(s in c)c.hasOwnProperty(s)&&(n||={},n[s]=``)}else u!==`dangerouslySetInnerHTML`&&u!==`children`&&u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&u!==`autoFocus`&&(a.hasOwnProperty(u)?o||=[]:(o||=[]).push(u,null))}for(u in r){var l=r[u];if(c=i?.[u],r.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null)){if(u===`style`){if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||={},n[s]=``);for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||={},n[s]=l[s])}else n||(o||=[],o.push(u,n)),n=l}else u===`dangerouslySetInnerHTML`?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o||=[]).push(u,l)):u===`children`?typeof l!=`string`&&typeof l!=`number`||(o||=[]).push(u,``+l):u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&(a.hasOwnProperty(u)?(l!=null&&u===`onScroll`&&oi(`scroll`,e),o||c===l||(o=[])):(o||=[]).push(u,l))}}n&&(o||=[]).push(`style`,n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},cc=function(e,t,n,r){n!==r&&(t.flags|=4)};function lc(e,t){if(!wa)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function uc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function dc(e,t,n){var i=t.pendingProps;switch(xa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return uc(t),null;case 1:return Zi(t.type)&&Qi(),uc(t),null;case 3:return i=t.stateNode,ho(),U(Ji),U(qi),xo(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Aa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,G!==null&&(xl(G),G=null))),uc(t),null;case 5:_o(t);var o=po(fo.current);if(n=t.type,e!==null&&t.stateNode!=null)sc(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(r(166));return uc(t),null}if(e=po(lo.current),Aa(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[Ni]=t,i[Pi]=s,e=!!(t.mode&1),n){case`dialog`:oi(`cancel`,i),oi(`close`,i);break;case`iframe`:case`object`:case`embed`:oi(`load`,i);break;case`video`:case`audio`:for(o=0;o<ni.length;o++)oi(ni[o],i);break;case`source`:oi(`error`,i);break;case`img`:case`image`:case`link`:oi(`error`,i),oi(`load`,i);break;case`details`:oi(`toggle`,i);break;case`input`:ve(i,s),oi(`invalid`,i);break;case`select`:i._wrapperState={wasMultiple:!!s.multiple},oi(`invalid`,i);break;case`textarea`:Te(i,s),oi(`invalid`,i)}for(var c in Le(n,s),o=null,s)if(s.hasOwnProperty(c)){var l=s[c];c===`children`?typeof l==`string`?i.textContent!==l&&(!0!==s.suppressHydrationWarning&&yi(i.textContent,l,e),o=[`children`,l]):typeof l==`number`&&i.textContent!==``+l&&(!0!==s.suppressHydrationWarning&&yi(i.textContent,l,e),o=[`children`,``+l]):a.hasOwnProperty(c)&&l!=null&&c===`onScroll`&&oi(`scroll`,i)}switch(n){case`input`:he(i),xe(i,s,!0);break;case`textarea`:he(i),De(i);break;case`select`:case`option`:break;default:typeof s.onClick==`function`&&(i.onclick=bi)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e===`http://www.w3.org/1999/xhtml`&&(e=L(n)),e===`http://www.w3.org/1999/xhtml`?n===`script`?(e=c.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild)):typeof i.is==`string`?e=c.createElement(n,{is:i.is}):(e=c.createElement(n),n===`select`&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,n),e[Ni]=t,e[Pi]=i,oc(e,t,!1,!1),t.stateNode=e;a:{switch(c=Re(n,i),n){case`dialog`:oi(`cancel`,e),oi(`close`,e),o=i;break;case`iframe`:case`object`:case`embed`:oi(`load`,e),o=i;break;case`video`:case`audio`:for(o=0;o<ni.length;o++)oi(ni[o],e);o=i;break;case`source`:oi(`error`,e),o=i;break;case`img`:case`image`:case`link`:oi(`error`,e),oi(`load`,e),o=i;break;case`details`:oi(`toggle`,e),o=i;break;case`input`:ve(e,i),o=_e(e,i),oi(`invalid`,e);break;case`option`:o=i;break;case`select`:e._wrapperState={wasMultiple:!!i.multiple},o=N({},i,{value:void 0}),oi(`invalid`,e);break;case`textarea`:Te(e,i),o=we(e,i),oi(`invalid`,e);break;default:o=i}for(s in Le(n,o),l=o,l)if(l.hasOwnProperty(s)){var u=l[s];s===`style`?Fe(e,u):s===`dangerouslySetInnerHTML`?(u=u?u.__html:void 0,u!=null&&Ae(e,u)):s===`children`?typeof u==`string`?(n!==`textarea`||u!==``)&&je(e,u):typeof u==`number`&&je(e,``+u):s!==`suppressContentEditableWarning`&&s!==`suppressHydrationWarning`&&s!==`autoFocus`&&(a.hasOwnProperty(s)?u!=null&&s===`onScroll`&&oi(`scroll`,e):u!=null&&S(e,s,u,c))}switch(n){case`input`:he(e),xe(e,i,!1);break;case`textarea`:he(e),De(e);break;case`option`:i.value!=null&&e.setAttribute(`value`,``+fe(i.value));break;case`select`:e.multiple=!!i.multiple,s=i.value,s==null?i.defaultValue!=null&&Ce(e,!!i.multiple,i.defaultValue,!0):Ce(e,!!i.multiple,s,!1);break;default:typeof o.onClick==`function`&&(e.onclick=bi)}switch(n){case`button`:case`input`:case`select`:case`textarea`:i=!!i.autoFocus;break a;case`img`:i=!0;break a;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return uc(t),null;case 6:if(e&&t.stateNode!=null)cc(e,t,e.memoizedProps,i);else{if(typeof i!=`string`&&t.stateNode===null)throw Error(r(166));if(n=po(fo.current),po(lo.current),Aa(t)){if(i=t.stateNode,n=t.memoizedProps,i[Ni]=t,(s=i.nodeValue!==n)&&(e=Sa,e!==null))switch(e.tag){case 3:yi(i.nodeValue,n,!!(e.mode&1));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&yi(i.nodeValue,n,!!(e.mode&1))}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ni]=t,t.stateNode=i}return uc(t),null;case 13:if(U(vo),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(wa&&Ca!==null&&t.mode&1&&!(t.flags&128))ja(),Ma(),t.flags|=98560,s=!1;else if(s=Aa(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(r(318));if(s=t.memoizedState,s=s===null?null:s.dehydrated,!s)throw Error(r(317));s[Ni]=t}else Ma(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;uc(t),s=!1}else G!==null&&(xl(G),G=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||vo.current&1?Yc===0&&(Yc=3):Z())),t.updateQueue!==null&&(t.flags|=4),uc(t),null);case 4:return ho(),e===null&&li(t.stateNode.containerInfo),uc(t),null;case 10:return Ka(t.type._context),uc(t),null;case 17:return Zi(t.type)&&Qi(),uc(t),null;case 19:if(U(vo),s=t.memoizedState,s===null)return uc(t),null;if(i=!!(t.flags&128),c=s.rendering,c===null){if(i)lc(s,!1);else{if(Yc!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=yo(e),c!==null){for(t.flags|=128,lc(s,!1),i=c.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(vo,vo.current&1|2),t.child}e=e.sibling}s.tail!==null&&vt()>rl&&(t.flags|=128,i=!0,lc(s,!1),t.lanes=4194304)}}else{if(!i){if(e=yo(c),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),lc(s,!0),s.tail===null&&s.tailMode===`hidden`&&!c.alternate&&!wa)return uc(t),null}else 2*vt()-s.renderingStartTime>rl&&n!==1073741824&&(t.flags|=128,i=!0,lc(s,!1),t.lanes=4194304)}s.isBackwards?(c.sibling=t.child,t.child=c):(n=s.last,n===null?t.child=c:n.sibling=c,s.last=c)}return s.tail===null?(uc(t),null):(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=vt(),t.sibling=null,n=vo.current,W(vo,i?n&1|2:n&1),t);case 22:case 23:return Dl(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?qc&1073741824&&(uc(t),t.subtreeFlags&6&&(t.flags|=8192)):uc(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function fc(e,t){switch(xa(t),t.tag){case 1:return Zi(t.type)&&Qi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ho(),U(Ji),U(qi),xo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return _o(t),null;case 13:if(U(vo),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Ma()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(vo),null;case 4:return ho(),null;case 10:return Ka(t.type._context),null;case 22:case 23:return Dl(),null;case 24:return null;default:return null}}var pc=!1,mc=!1,hc=typeof WeakSet==`function`?WeakSet:Set,J=null;function gc(e,t){var n=e.ref;if(n!==null){if(typeof n==`function`)try{n(null)}catch(n){Bl(e,t,n)}else n.current=null}}function _c(e,t,n){try{n()}catch(n){Bl(e,t,n)}}var vc=!1;function yc(e,t){if(xi=gn,e=Pr(),Fr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Si={focusedElem:e,selectionRange:n},gn=!1,J=t;J!==null;)if(t=J,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,J=e;else for(;J!==null;){t=J;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var g=h.memoizedProps,_=h.memoizedState,v=t.stateNode;v.__reactInternalSnapshotBeforeUpdate=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:bs(t.type,g),_)}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent=``:y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(e){Bl(t,t.return,e)}if(e=t.sibling,e!==null){e.return=t.return,J=e;break}J=t.return}return h=vc,vc=!1,h}function bc(e,t,n){var r=t.updateQueue;if(r=r===null?null:r.lastEffect,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&_c(t,n,a)}i=i.next}while(i!==r)}}function xc(e,t){if(t=t.updateQueue,t=t===null?null:t.lastEffect,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Sc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t==`function`?t(e):t.current=e}}function Cc(e){var t=e.alternate;t!==null&&(e.alternate=null,Cc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ni],delete t[Pi],delete t[Ii],delete t[Li],delete t[Ri])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wc(e){return e.tag===5||e.tag===3||e.tag===4}function Tc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||wc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ec(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=bi));else if(r!==4&&(e=e.child,e!==null))for(Ec(e,t,n),e=e.sibling;e!==null;)Ec(e,t,n),e=e.sibling}function Dc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Dc(e,t,n),e=e.sibling;e!==null;)Dc(e,t,n),e=e.sibling}var Oc=null,kc=!1;function Ac(e,t,n){for(n=n.child;n!==null;)jc(e,t,n),n=n.sibling}function jc(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount==`function`)try{Et.onCommitFiberUnmount(Tt,n)}catch{}switch(n.tag){case 5:mc||gc(n,t);case 6:var r=Oc,i=kc;Oc=null,Ac(e,t,n),Oc=r,kc=i,Oc!==null&&(kc?(e=Oc,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Oc.removeChild(n.stateNode));break;case 18:Oc!==null&&(kc?(e=Oc,n=n.stateNode,e.nodeType===8?ki(e.parentNode,n):e.nodeType===1&&ki(e,n),mn(e)):ki(Oc,n.stateNode));break;case 4:r=Oc,i=kc,Oc=n.stateNode.containerInfo,kc=!0,Ac(e,t,n),Oc=r,kc=i;break;case 0:case 11:case 14:case 15:if(!mc&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&_c(n,t,o),i=i.next}while(i!==r)}Ac(e,t,n);break;case 1:if(!mc&&(gc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){Bl(n,t,e)}Ac(e,t,n);break;case 21:Ac(e,t,n);break;case 22:n.mode&1?(mc=(r=mc)||n.memoizedState!==null,Ac(e,t,n),mc=r):Ac(e,t,n);break;default:Ac(e,t,n)}}function Mc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hc),t.forEach(function(t){var r=Wl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function Nc(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 5:Oc=c.stateNode,kc=!1;break a;case 3:Oc=c.stateNode.containerInfo,kc=!0;break a;case 4:Oc=c.stateNode.containerInfo,kc=!0;break a}c=c.return}if(Oc===null)throw Error(r(160));jc(o,s,a),Oc=null,kc=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(e){Bl(a,t,e)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pc(t,e),t=t.sibling}function Pc(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Nc(t,e),Fc(e),i&4){try{bc(3,e,e.return),xc(3,e)}catch(t){Bl(e,e.return,t)}try{bc(5,e,e.return)}catch(t){Bl(e,e.return,t)}}break;case 1:Nc(t,e),Fc(e),i&512&&n!==null&&gc(n,n.return);break;case 5:if(Nc(t,e),Fc(e),i&512&&n!==null&&gc(n,n.return),e.flags&32){var a=e.stateNode;try{je(a,``)}catch(t){Bl(e,e.return,t)}}if(i&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=n===null?o:n.memoizedProps,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c===`input`&&o.type===`radio`&&o.name!=null&&ye(a,o),Re(c,s);var u=Re(c,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d===`style`?Fe(a,f):d===`dangerouslySetInnerHTML`?Ae(a,f):d===`children`?je(a,f):S(a,d,f,u)}switch(c){case`input`:be(a,o);break;case`textarea`:Ee(a,o);break;case`select`:var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m==null?p!==!!o.multiple&&(o.defaultValue==null?Ce(a,!!o.multiple,o.multiple?[]:``,!1):Ce(a,!!o.multiple,o.defaultValue,!0)):Ce(a,!!o.multiple,m,!1)}a[Pi]=o}catch(t){Bl(e,e.return,t)}}break;case 6:if(Nc(t,e),Fc(e),i&4){if(e.stateNode===null)throw Error(r(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(t){Bl(e,e.return,t)}}break;case 3:if(Nc(t,e),Fc(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{mn(t.containerInfo)}catch(t){Bl(e,e.return,t)}break;case 4:Nc(t,e),Fc(e);break;case 13:Nc(t,e),Fc(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(nl=vt())),i&4&&Mc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(mc=(u=mc)||d,Nc(t,e),mc=u):Nc(t,e),Fc(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(J=e,d=e.child;d!==null;){for(f=J=d;J!==null;){switch(p=J,m=p.child,p.tag){case 0:case 11:case 14:case 15:bc(4,p,p.return);break;case 1:gc(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount==`function`){i=p,n=p.return;try{t=i,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){Bl(i,n,e)}}break;case 5:gc(p,p.return);break;case 22:if(p.memoizedState!==null){zc(f);continue}}m===null?zc(f):(m.return=p,J=m)}d=d.sibling}a:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`):(c=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty(`display`)?l.display:null,c.style.display=Pe(`display`,s))}catch(t){Bl(e,e.return,t)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?``:f.memoizedProps}catch(t){Bl(e,e.return,t)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break a;for(;f.sibling===null;){if(f.return===null||f.return===e)break a;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Nc(t,e),Fc(e),i&4&&Mc(e);break;case 21:break;default:Nc(t,e),Fc(e)}}function Fc(e){var t=e.flags;if(t&2){try{a:{for(var n=e.return;n!==null;){if(wc(n)){var i=n;break a}n=n.return}throw Error(r(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(je(a,``),i.flags&=-33),Dc(e,Tc(e),a);break;case 3:case 4:var o=i.stateNode.containerInfo;Ec(e,Tc(e),o);break;default:throw Error(r(161))}}catch(t){Bl(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ic(e,t,n){J=e,Lc(e,t,n)}function Lc(e,t,n){for(var r=!!(e.mode&1);J!==null;){var i=J,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||pc;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||mc;s=pc;var l=mc;if(pc=o,(mc=c)&&!l)for(J=i;J!==null;)o=J,c=o.child,o.tag===22&&o.memoizedState!==null||c===null?Bc(i):(c.return=o,J=c);for(;a!==null;)J=a,Lc(a,t,n),a=a.sibling;J=i,pc=s,mc=l}Rc(e,t,n)}else i.subtreeFlags&8772&&a!==null?(a.return=i,J=a):Rc(e,t,n)}}function Rc(e){for(;J!==null;){var t=J;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:mc||xc(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!mc){if(n===null)i.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:bs(t.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}}var o=t.updateQueue;o!==null&&so(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}so(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case`button`:case`input`:case`select`:case`textarea`:l.autoFocus&&n.focus();break;case`img`:l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&mn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}mc||t.flags&512&&Sc(t)}catch(e){Bl(t,t.return,e)}}if(t===e){J=null;break}if(n=t.sibling,n!==null){n.return=t.return,J=n;break}J=t.return}}function zc(e){for(;J!==null;){var t=J;if(t===e){J=null;break}var n=t.sibling;if(n!==null){n.return=t.return,J=n;break}J=t.return}}function Bc(e){for(;J!==null;){var t=J;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xc(4,t)}catch(e){Bl(t,n,e)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount==`function`){var i=t.return;try{r.componentDidMount()}catch(e){Bl(t,i,e)}}var a=t.return;try{Sc(t)}catch(e){Bl(t,a,e)}break;case 5:var o=t.return;try{Sc(t)}catch(e){Bl(t,o,e)}}}catch(e){Bl(t,t.return,e)}if(t===e){J=null;break}var s=t.sibling;if(s!==null){s.return=t.return,J=s;break}J=t.return}}var Vc=Math.ceil,Hc=C.ReactCurrentDispatcher,Uc=C.ReactCurrentOwner,Wc=C.ReactCurrentBatchConfig,Y=0,Gc=null,Kc=null,X=0,qc=0,Jc=Gi(0),Yc=0,Xc=null,Zc=0,Qc=0,$c=0,el=null,tl=null,nl=0,rl=1/0,il=null,al=!1,ol=null,sl=null,cl=!1,ll=null,ul=0,dl=0,fl=null,pl=-1,ml=0;function hl(){return Y&6?vt():pl===-1?pl=vt():pl}function gl(e){return e.mode&1?Y&2&&X!==0?X&-X:Pa.transition===null?(e=R,e===0?(e=window.event,e=e===void 0?16:Sn(e.type),e):e):(ml===0&&(ml=zt()),ml):1}function _l(e,t,n,i){if(50<dl)throw dl=0,fl=null,Error(r(185));Vt(e,n,i),(!(Y&2)||e!==Gc)&&(e===Gc&&(!(Y&2)&&(Qc|=n),Yc===4&&Cl(e,X)),vl(e,i),n===1&&Y===0&&!(t.mode&1)&&(rl=vt()+500,ia&&ca()))}function vl(e,t){var n=e.callbackNode;Lt(e,t);var r=Ft(e,e===Gc?X:0);if(r===0)n!==null&&ht(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ht(n),t===1)e.tag===0?sa(wl.bind(null,e)):oa(wl.bind(null,e)),Di(function(){!(Y&6)&&ca()}),n=null;else{switch(Wt(r)){case 1:n=bt;break;case 4:n=xt;break;case 16:n=St;break;case 536870912:n=wt;break;default:n=St}n=Kl(n,yl.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function yl(e,t){if(pl=-1,ml=0,Y&6)throw Error(r(327));var n=e.callbackNode;if(Rl()&&e.callbackNode!==n)return null;var i=Ft(e,e===Gc?X:0);if(i===0)return null;if(i&30||(i&e.expiredLanes)!==0||t)t=jl(e,i);else{t=i;var a=Y;Y|=2;var o=Al();(Gc!==e||X!==t)&&(il=null,rl=vt()+500,Ol(e,t));do try{Nl();break}catch(t){kl(e,t)}while(1);Ga(),Hc.current=o,Y=a,Kc===null?(Gc=null,X=0,t=Yc):t=0}if(t!==0){if(t===2&&(a=Rt(e),a!==0&&(i=a,t=bl(e,a))),t===1)throw n=Xc,Ol(e,0),Cl(e,i),vl(e,vt()),n;if(t===6)Cl(e,i);else{if(a=e.current.alternate,!(i&30)&&!Sl(a)&&(t=jl(e,i),t===2&&(o=Rt(e),o!==0&&(i=o,t=bl(e,o))),t===1))throw n=Xc,Ol(e,0),Cl(e,i),vl(e,vt()),n;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(r(345));case 2:Il(e,tl,il);break;case 3:if(Cl(e,i),(i&130023424)===i&&(t=nl+500-vt(),10<t)){if(Ft(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){hl(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=wi(Il.bind(null,e,tl,il),t);break}Il(e,tl,il);break;case 4:if(Cl(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-Ot(i);o=1<<s,s=t[s],s>a&&(a=s),i&=~o}if(i=a,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Vc(i/1960))-i,10<i){e.timeoutHandle=wi(Il.bind(null,e,tl,il),i);break}Il(e,tl,il);break;case 5:Il(e,tl,il);break;default:throw Error(r(329))}}}return vl(e,vt()),e.callbackNode===n?yl.bind(null,e):null}function bl(e,t){var n=el;return e.current.memoizedState.isDehydrated&&(Ol(e,t).flags|=256),e=jl(e,t),e!==2&&(t=tl,tl=n,t!==null&&xl(t)),e}function xl(e){tl===null?tl=e:tl.push.apply(tl,e)}function Sl(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!kr(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Cl(e,t){for(t&=~$c,t&=~Qc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ot(t),r=1<<n;e[n]=-1,t&=~r}}function wl(e){if(Y&6)throw Error(r(327));Rl();var t=Ft(e,0);if(!(t&1))return vl(e,vt()),null;var n=jl(e,t);if(e.tag!==0&&n===2){var i=Rt(e);i!==0&&(t=i,n=bl(e,i))}if(n===1)throw n=Xc,Ol(e,0),Cl(e,t),vl(e,vt()),n;if(n===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Il(e,tl,il),vl(e,vt()),null}function Tl(e,t){var n=Y;Y|=1;try{return e(t)}finally{Y=n,Y===0&&(rl=vt()+500,ia&&ca())}}function El(e){ll!==null&&ll.tag===0&&!(Y&6)&&Rl();var t=Y;Y|=1;var n=Wc.transition,r=R;try{if(Wc.transition=null,R=1,e)return e()}finally{R=r,Wc.transition=n,Y=t,!(Y&6)&&ca()}}function Dl(){qc=Jc.current,U(Jc)}function Ol(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ti(n)),Kc!==null)for(n=Kc.return;n!==null;){var r=n;switch(xa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qi();break;case 3:ho(),U(Ji),U(qi),xo();break;case 5:_o(r);break;case 4:ho();break;case 13:U(vo);break;case 19:U(vo);break;case 10:Ka(r.type._context);break;case 22:case 23:Dl()}n=n.return}if(Gc=e,Kc=e=Zl(e.current,null),X=qc=t,Yc=0,Xc=null,$c=Qc=Zc=0,tl=el=null,Xa!==null){for(t=0;t<Xa.length;t++)if(n=Xa[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Xa=null}return e}function kl(e,t){do{var n=Kc;try{if(Ga(),So.current=gs,Oo){for(var i=To.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}Oo=!1}if(wo=0,Do=Eo=To=null,ko=!1,Ao=0,Uc.current=null,n===null||n.return===null){Yc=1,Xc=t,Kc=null;break}a:{var o=e,s=n.return,c=n,l=t;if(t=X,c.flags|=32768,typeof l==`object`&&l&&typeof l.then==`function`){var u=l,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Ps(s);if(m!==null){m.flags&=-257,Fs(m,s,c,o,t),m.mode&1&&Ns(o,u,t),t=m,l=u;var h=t.updateQueue;if(h===null){var g=new Set;g.add(l),t.updateQueue=g}else h.add(l);break a}if(!(t&1)){Ns(o,u,t),Z();break a}l=Error(r(426))}else if(wa&&c.mode&1){var _=Ps(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Fs(_,s,c,o,t),Na(Ds(l,c));break a}}o=l=Ds(l,c),Yc!==4&&(Yc=2),el===null?el=[o]:el.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=js(o,l,t);ao(o,v);break a;case 1:c=l;var y=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError==`function`||b!==null&&typeof b.componentDidCatch==`function`&&(sl===null||!sl.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Ms(o,c,t);ao(o,x);break a}}o=o.return}while(o!==null)}Fl(n)}catch(e){t=e,Kc===n&&n!==null&&(Kc=n=n.return);continue}break}while(1)}function Al(){var e=Hc.current;return Hc.current=gs,e===null?gs:e}function Z(){(Yc===0||Yc===3||Yc===2)&&(Yc=4),Gc===null||!(Zc&268435455)&&!(Qc&268435455)||Cl(Gc,X)}function jl(e,t){var n=Y;Y|=2;var i=Al();(Gc!==e||X!==t)&&(il=null,Ol(e,t));do try{Ml();break}catch(t){kl(e,t)}while(1);if(Ga(),Y=n,Hc.current=i,Kc!==null)throw Error(r(261));return Gc=null,X=0,Yc}function Ml(){for(;Kc!==null;)Pl(Kc)}function Nl(){for(;Kc!==null&&!gt();)Pl(Kc)}function Pl(e){var t=Gl(e.alternate,e,qc);e.memoizedProps=e.pendingProps,t===null?Fl(e):Kc=t,Uc.current=null}function Fl(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=fc(n,t),n!==null){n.flags&=32767,Kc=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Yc=6,Kc=null;return}}else if(n=dc(n,t,qc),n!==null){Kc=n;return}if(t=t.sibling,t!==null){Kc=t;return}Kc=t=e}while(t!==null);Yc===0&&(Yc=5)}function Il(e,t,n){var r=R,i=Wc.transition;try{Wc.transition=null,R=1,Ll(e,t,n,r)}finally{Wc.transition=i,R=r}return null}function Ll(e,t,n,i){do Rl();while(ll!==null);if(Y&6)throw Error(r(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ht(e,o),e===Gc&&(Kc=Gc=null,X=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||cl||(cl=!0,Kl(St,function(){return Rl(),null})),o=!!(n.flags&15990),n.subtreeFlags&15990||o){o=Wc.transition,Wc.transition=null;var s=R;R=1;var c=Y;Y|=4,Uc.current=null,yc(e,n),Pc(n,e),Ir(Si),gn=!!xi,Si=xi=null,e.current=n,Ic(n,e,a),_t(),Y=c,R=s,Wc.transition=o}else e.current=n;if(cl&&(cl=!1,ll=e,ul=a),o=e.pendingLanes,o===0&&(sl=null),Dt(n.stateNode,i),vl(e,vt()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(al)throw al=!1,e=ol,ol=null,e;return ul&1&&e.tag!==0&&Rl(),o=e.pendingLanes,o&1?e===fl?dl++:(dl=0,fl=e):dl=0,ca(),null}function Rl(){if(ll!==null){var e=Wt(ul),t=Wc.transition,n=R;try{if(Wc.transition=null,R=16>e?16:e,ll===null)var i=!1;else{if(e=ll,ll=null,ul=0,Y&6)throw Error(r(331));var a=Y;for(Y|=4,J=e.current;J!==null;){var o=J,s=o.child;if(J.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(J=u;J!==null;){var d=J;switch(d.tag){case 0:case 11:case 15:bc(8,d,o)}var f=d.child;if(f!==null)f.return=d,J=f;else for(;J!==null;){d=J;var p=d.sibling,m=d.return;if(Cc(d),d===u){J=null;break}if(p!==null){p.return=m,J=p;break}J=m}}}var h=o.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}J=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,J=s;else b:for(;J!==null;){if(o=J,o.flags&2048)switch(o.tag){case 0:case 11:case 15:bc(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,J=v;break b}J=o.return}}var y=e.current;for(J=y;J!==null;){s=J;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,J=b;else b:for(s=y;J!==null;){if(c=J,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:xc(9,c)}}catch(e){Bl(c,c.return,e)}if(c===s){J=null;break b}var x=c.sibling;if(x!==null){x.return=c.return,J=x;break b}J=c.return}}if(Y=a,ca(),Et&&typeof Et.onPostCommitFiberRoot==`function`)try{Et.onPostCommitFiberRoot(Tt,e)}catch{}i=!0}return i}finally{R=n,Wc.transition=t}}return!1}function zl(e,t,n){t=Ds(n,t),t=js(e,t,1),e=io(e,t,1),t=hl(),e!==null&&(Vt(e,1,t),vl(e,t))}function Bl(e,t,n){if(e.tag===3)zl(e,e,n);else for(;t!==null;){if(t.tag===3){zl(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(sl===null||!sl.has(r))){e=Ds(n,e),e=Ms(t,e,1),t=io(t,e,1),e=hl(),t!==null&&(Vt(t,1,e),vl(t,e));break}}t=t.return}}function Vl(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=hl(),e.pingedLanes|=e.suspendedLanes&n,Gc===e&&(X&n)===n&&(Yc===4||Yc===3&&(X&130023424)===X&&500>vt()-nl?Ol(e,0):$c|=n),vl(e,t)}function Hl(e,t){t===0&&(e.mode&1?(t=Nt,Nt<<=1,!(Nt&130023424)&&(Nt=4194304)):t=1);var n=hl();e=$a(e,t),e!==null&&(Vt(e,t,n),vl(e,n))}function Ul(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Hl(e,n)}function Wl(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(r(314))}i!==null&&i.delete(t),Hl(e,n)}var Gl=function(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps||Ji.current)Ls=!0;else{if((e.lanes&n)===0&&!(t.flags&128))return Ls=!1,ac(e,t,n);Ls=!!(e.flags&131072)}}else Ls=!1,wa&&t.flags&1048576&&ya(t,fa,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;rc(e,t),e=t.pendingProps;var a=Xi(t,qi.current);Ja(t,n),a=Po(null,t,i,e,a,n);var o=Fo();return t.flags|=1,typeof a==`object`&&a&&typeof a.render==`function`&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Zi(i)?(o=!0,ta(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,to(t),a.updater=Ss,t.stateNode=a,a._reactInternals=t,Es(t,i,e,n),t=Ks(null,t,i,!0,o,n)):(t.tag=0,wa&&o&&ba(t),Rs(null,t,a,n),t=t.child),t;case 16:i=t.elementType;a:{switch(rc(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=Xl(i),e=bs(i,e),a){case 0:t=Ws(null,t,i,e,n);break a;case 1:t=Gs(null,t,i,e,n);break a;case 11:t=zs(null,t,i,e,n);break a;case 14:t=Bs(null,t,i,bs(i.type,e),n);break a}throw Error(r(306,i,``))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:bs(i,a),Ws(e,t,i,a,n);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:bs(i,a),Gs(e,t,i,a,n);case 3:a:{if(qs(t),e===null)throw Error(r(387));i=t.pendingProps,o=t.memoizedState,a=o.element,no(e,t),oo(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated){if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Ds(Error(r(423)),t),t=Js(e,t,i,n,a);break a}if(i!==a){a=Ds(Error(r(424)),t),t=Js(e,t,i,n,a);break a}for(Ca=Ai(t.stateNode.containerInfo.firstChild),Sa=t,wa=!0,G=null,n=Ba(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ma(),i===a){t=ic(e,t,n);break a}Rs(e,t,i,n)}t=t.child}return t;case 5:return go(t),e===null&&Oa(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,s=a.children,Ci(i,a)?s=null:o!==null&&Ci(i,o)&&(t.flags|=32),Us(e,t),Rs(e,t,s,n),t.child;case 6:return e===null&&Oa(t),null;case 13:return Xs(e,t,n);case 4:return mo(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=za(t,null,i,n):Rs(e,t,i,n),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:bs(i,a),zs(e,t,i,a,n);case 7:return Rs(e,t,t.pendingProps,n),t.child;case 8:return Rs(e,t,t.pendingProps.children,n),t.child;case 12:return Rs(e,t,t.pendingProps.children,n),t.child;case 10:a:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,W(Va,i._currentValue),i._currentValue=s,o!==null){if(kr(o.value,s)){if(o.children===a.children&&!Ji.current){t=ic(e,t,n);break a}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var l=c.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=ro(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),qa(o.return,n,t),c.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(r(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),qa(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}}Rs(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,Ja(t,n),a=Ya(a),i=i(a),t.flags|=1,Rs(e,t,i,n),t.child;case 14:return i=t.type,a=bs(i,t.pendingProps),a=bs(i.type,a),Bs(e,t,i,a,n);case 15:return Vs(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:bs(i,a),rc(e,t),t.tag=1,Zi(i)?(e=!0,ta(t)):e=!1,Ja(t,n),ws(t,i,a),Es(t,i,a,n),Ks(null,t,i,!0,e,n);case 19:return nc(e,t,n);case 22:return Hs(e,t,n)}throw Error(r(156,t.tag))};function Kl(e,t){return mt(e,t)}function ql(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jl(e,t,n,r){return new ql(e,t,n,r)}function Yl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xl(e){if(typeof e==`function`)return+!!Yl(e);if(e!=null){if(e=e.$$typeof,e===O)return 11;if(e===k)return 14}return 2}function Zl(e,t){var n=e.alternate;return n===null?(n=Jl(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ql(e,t,n,i,a,o){var s=2;if(i=e,typeof e==`function`)Yl(e)&&(s=1);else if(typeof e==`string`)s=5;else a:switch(e){case E:return $l(n.children,a,o,t);case ee:s=8,a|=8;break;case te:return e=Jl(12,n,t,a|2),e.elementType=te,e.lanes=o,e;case re:return e=Jl(13,n,t,a),e.elementType=re,e.lanes=o,e;case ie:return e=Jl(19,n,t,a),e.elementType=ie,e.lanes=o,e;case ae:return eu(n,a,o,t);default:if(typeof e==`object`&&e)switch(e.$$typeof){case ne:s=10;break a;case D:s=9;break a;case O:s=11;break a;case k:s=14;break a;case A:s=16,i=null;break a}throw Error(r(130,e==null?e:typeof e,``))}return t=Jl(s,n,t,a),t.elementType=e,t.type=i,t.lanes=o,t}function $l(e,t,n,r){return e=Jl(7,e,r,t),e.lanes=n,e}function eu(e,t,n,r){return e=Jl(22,e,r,t),e.elementType=ae,e.lanes=n,e.stateNode={isHidden:!1},e}function tu(e,t,n){return e=Jl(6,e,null,t),e.lanes=n,e}function nu(e,t,n){return t=Jl(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ru(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bt(0),this.expirationTimes=Bt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function iu(e,t,n,r,i,a,o,s,c){return e=new ru(e,t,n,s,c),t===1?(t=1,!0===a&&(t|=8)):t=0,a=Jl(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},to(a),e}function au(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:T,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}function ou(e){if(!e)return Ki;e=e._reactInternals;a:{if(ct(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break a;case 1:if(Zi(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break a}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var n=e.type;if(Zi(n))return ea(e,n,t)}return t}function su(e,t,n,r,i,a,o,s,c){return e=iu(n,r,!0,e,i,a,o,s,c),e.context=ou(null),n=e.current,r=hl(),i=gl(n),a=ro(r,i),a.callback=t??null,io(n,a,i),e.current.lanes=i,Vt(e,i,r),vl(e,r),e}function cu(e,t,n,r){var i=t.current,a=hl(),o=gl(i);return n=ou(n),t.context===null?t.context=n:t.pendingContext=n,t=ro(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=io(i,t,o),e!==null&&(_l(e,i,o,a),K(e,i,o)),o}function lu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function uu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function du(e,t){uu(e,t),(e=e.alternate)&&uu(e,t)}function fu(){return null}var pu=typeof reportError==`function`?reportError:function(e){console.error(e)};function mu(e){this._internalRoot=e}hu.prototype.render=mu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));cu(e,t,null,null)},hu.prototype.unmount=mu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;El(function(){cu(null,e,null,null)}),t[Fi]=null}};function hu(e){this._internalRoot=e}hu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Jt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rn.length&&t!==0&&t<rn[n].priority;n++);rn.splice(n,0,e),n===0&&ln(e)}};function gu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==` react-mount-point-unstable `))}function vu(){}function yu(e,t,n,r,i){if(i){if(typeof r==`function`){var a=r;r=function(){var e=lu(o);a.call(e)}}var o=su(t,r,e,0,null,!1,!1,``,vu);return e._reactRootContainer=o,e[Fi]=o.current,li(e.nodeType===8?e.parentNode:e),El(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r==`function`){var s=r;r=function(){var e=lu(c);s.call(e)}}var c=iu(e,0,!1,null,null,!1,!1,``,vu);return e._reactRootContainer=c,e[Fi]=c.current,li(e.nodeType===8?e.parentNode:e),El(function(){cu(t,c,n,r)}),c}function bu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i==`function`){var s=i;i=function(){var e=lu(o);s.call(e)}}cu(t,o,e,i)}else o=yu(n,t,e,i,r);return lu(o)}Gt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pt(t.pendingLanes);n!==0&&(Ut(t,n|1),vl(t,vt()),!(Y&6)&&(rl=vt()+500,ca()))}break;case 13:El(function(){var t=$a(e,1);t!==null&&_l(t,e,1,hl())}),du(e,1)}},Kt=function(e){if(e.tag===13){var t=$a(e,134217728);t!==null&&_l(t,e,134217728,hl()),du(e,134217728)}},qt=function(e){if(e.tag===13){var t=gl(e),n=$a(e,t);n!==null&&_l(n,e,t,hl()),du(e,t)}},Jt=function(){return R},Yt=function(e,t){var n=R;try{return R=e,t()}finally{R=n}},Ve=function(e,t,n){switch(t){case`input`:if(be(e,n),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name=`+JSON.stringify(``+t)+`][type="radio"]`),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=Hi(i);if(!a)throw Error(r(90));ge(i),be(i,a)}}}break;case`textarea`:Ee(e,n);break;case`select`:t=n.value,t!=null&&Ce(e,!!n.multiple,t,!1)}},qe=Tl,Je=El;var xu={usingClientEntryPoint:!1,Events:[Bi,Vi,Hi,Ge,Ke,Tl]},Su={findFiberByHostInstance:zi,bundleType:0,version:`18.3.1`,rendererPackageName:`react-dom`},Cu={bundleType:Su.bundleType,version:Su.version,rendererPackageName:Su.rendererPackageName,rendererConfig:Su.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ft(e),e===null?null:e.stateNode},findFiberByHostInstance:Su.findFiberByHostInstance||fu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:`18.3.1-next-f1338f8080-20240426`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var wu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wu.isDisabled&&wu.supportsFiber)try{Tt=wu.inject(Cu),Et=wu}catch{}}e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xu,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gu(t))throw Error(r(200));return au(e,t,null,n)},e.createRoot=function(e,t){if(!gu(e))throw Error(r(299));var n=!1,i=``,a=pu;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=iu(e,1,!1,null,null,n,!1,i,a),e[Fi]=t.current,li(e.nodeType===8?e.parentNode:e),new mu(t)},e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(r(188)):(e=Object.keys(e).join(`,`),Error(r(268,e)));return e=ft(t),e=e===null?null:e.stateNode,e},e.flushSync=function(e){return El(e)},e.hydrate=function(e,t,n){if(!_u(t))throw Error(r(200));return bu(null,e,t,!0,n)},e.hydrateRoot=function(e,t,n){if(!gu(e))throw Error(r(405));var i=n!=null&&n.hydratedSources||null,a=!1,o=``,s=pu;if(n!=null&&(!0===n.unstable_strictMode&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=su(t,null,e,1,n??null,a,!1,o,s),e[Fi]=t.current,li(e),i)for(e=0;e<i.length;e++)n=i[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new hu(t)},e.render=function(e,t,n){if(!_u(t))throw Error(r(200));return bu(null,e,t,!1,n)},e.unmountComponentAtNode=function(e){if(!_u(e))throw Error(r(40));return e._reactRootContainer?(El(function(){bu(null,null,e,!1,function(){e._reactRootContainer=null,e[Fi]=null})}),!0):!1},e.unstable_batchedUpdates=Tl,e.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!_u(n))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return bu(e,t,n,!1,i)},e.version=`18.3.1-next-f1338f8080-20240426`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=m();e.createRoot=t.createRoot,e.hydrateRoot=t.hydrateRoot})),g=c(u(),1);function _(){return!!(typeof window<`u`&&window.document&&window.document.createElement)}var v=_()?g.useLayoutEffect:g.useEffect,y=!1,b=0;function x(){return++b}var S=g.useId;function C(e){if(S!==void 0){let t=S();return e??t}let t=e??(y?x():null),[n,r]=g.useState(t);return v(()=>{n===null&&r(x())},[]),g.useEffect(()=>{y===!1&&(y=!0)},[]),e??n??void 0}function w(...e){return(t,...n)=>e.some(e=>(e&&e(t,...n),t&&t.defaultPrevented))}function T(...e){for(let t of e)if(t!==void 0)return t}var E={ALT:`Alt`,ASTERISK:`*`,BACKSPACE:`Backspace`,COMMA:`,`,DELETE:`Delete`,DOWN:`ArrowDown`,END:`End`,ENTER:`Enter`,ESCAPE:`Escape`,HOME:`Home`,LEFT:`ArrowLeft`,NUMPAD_ADD:`Add`,NUMPAD_DECIMAL:`Decimal`,NUMPAD_DIVIDE:`Divide`,NUMPAD_ENTER:`Enter`,NUMPAD_MULTIPLY:`Multiply`,NUMPAD_SUBTRACT:`Subtract`,PAGE_DOWN:`PageDown`,PAGE_UP:`PageUp`,PERIOD:`.`,RIGHT:`ArrowRight`,SHIFT:`Shift`,SPACE:` `,TAB:`Tab`,UNIDENTIFIED:`Unidentified`,UP:`ArrowUp`},ee=0,te=e=>{let t=C(e);return t=t==null?`id:${ee++}`:`${t}`,t},ne=o(((e,t)=>{t.exports=`SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`})),D=o(((e,t)=>{var n=ne();function r(){}function i(){}i.resetWarningCache=r,t.exports=function(){function e(e,t,r,i,a,o){if(o!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name=`Invariant Violation`,s}}e.isRequired=e;function t(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return a.PropTypes=a,a}})),O=c(o(((e,t)=>{t.exports=D()()}))());function re({idPrefix:e,sections:t=[],expandedSections:n,defaultExpandedSections:r,onChange:i=()=>void 0,expandable:a=!0,collapsible:o=!0}){let s=te(e),c=`${s}--trigger`,l=`${s}--panel`,u=n!=null,[d,f]=(0,g.useState)(r||t.slice(0,1)),[p,m]=(0,g.useState)(o?[]:d),h=T(n,d),_=(0,g.useCallback)(e=>{let n=[],r=[];t.forEach(t=>{let i=!1;t===e?i=!o||h.includes(t)===!1:a&&(i=h.includes(t)),i&&(n.push(t),o||r.push(t))}),i(e),u===!1&&f(n),m(r)},[t,h,o,a,u,i]),v=(0,g.useCallback)(({role:e=`heading`,"aria-level":t,...n})=>({role:e===null?void 0:e,"aria-level":t,"data-garden-container-id":`containers.accordion`,"data-garden-container-version":`3.0.15`,...n}),[]),y=(0,g.useCallback)(({value:e,role:t=`button`,tabIndex:n=0,...r})=>({id:`${c}:${e}`,role:t===null?void 0:t,tabIndex:n,"aria-controls":`${l}:${e}`,"aria-disabled":p.includes(e)||void 0,"aria-expanded":h.includes(e),onClick:w(r.onClick,()=>_(e)),onKeyDown:w(r.onKeyDown,t=>{(t.key===E.SPACE||t.key===E.ENTER)&&(_(e),t.preventDefault())}),...r}),[l,c,h,p,_]),b=(0,g.useCallback)(({value:e,role:t=`region`,...n})=>({id:`${l}:${e}`,role:t===null?void 0:t,"aria-hidden":!h.includes(e),"aria-labelledby":`${c}:${e}`,...n}),[l,c,h]);return(0,g.useMemo)(()=>({getHeaderProps:v,getTriggerProps:y,getPanelProps:b,expandedSections:h,disabledSections:p}),[v,y,b,h,p])}O.default.func,O.default.func,O.default.array.isRequired,O.default.array,O.default.array,O.default.bool,O.default.bool,O.default.string,O.default.func;var ie=h(),k=function(){return k=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},k.apply(this,arguments)};function A(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||=Array.prototype.slice.call(t,0,r),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var ae=o(((e,t)=>{t.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(i!==void 0)return!!i;if(e===t)return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!s(l))return!1;var u=e[l],d=t[l];if(i=n?n.call(r,u,d,l):void 0,i===!1||i===void 0&&u!==d)return!1}return!0}})),j=`-ms-`,M=`-moz-`,N=`-webkit-`,oe=`comm`,P=`rule`,se=`decl`,ce=`@import`,le=`@keyframes`,ue=`@layer`,de=Math.abs,fe=String.fromCharCode,pe=Object.assign;function me(e,t){return ve(e,0)^45?(((t<<2^ve(e,0))<<2^ve(e,1))<<2^ve(e,2))<<2^ve(e,3):0}function he(e){return e.trim()}function ge(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function _e(e,t,n){return e.indexOf(t,n)}function ve(e,t){return e.charCodeAt(t)|0}function ye(e,t,n){return e.slice(t,n)}function be(e){return e.length}function xe(e){return e.length}function Se(e,t){return t.push(e),e}function I(e,t){return e.map(t).join(``)}function Ce(e,t){return e.filter(function(e){return!ge(e,t)})}var we=1,Te=1,Ee=0,De=0,L=0,Oe=``;function ke(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:we,column:Te,length:o,return:``,siblings:s}}function Ae(e,t){return pe(ke(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function je(e){for(;e.root;)e=Ae(e.root,{children:[e]});Se(e,e.siblings)}function Me(){return L}function Ne(){return L=De>0?ve(Oe,--De):0,Te--,L===10&&(Te=1,we--),L}function Pe(){return L=De<Ee?ve(Oe,De++):0,Te++,L===10&&(Te=1,we++),L}function Fe(){return ve(Oe,De)}function Ie(){return De}function Le(e,t){return ye(Oe,e,t)}function Re(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ze(e){return we=Te=1,Ee=be(Oe=e),De=0,[]}function Be(e){return Oe=``,e}function Ve(e){return he(Le(De-1,We(e===91?e+2:e===40?e+1:e)))}function He(e){for(;(L=Fe())&&L<33;)Pe();return Re(e)>2||Re(L)>3?``:` `}function Ue(e,t){for(;--t&&Pe()&&!(L<48||L>102||L>57&&L<65||L>70&&L<97););return Le(e,Ie()+(t<6&&Fe()==32&&Pe()==32))}function We(e){for(;Pe();)switch(L){case e:return De;case 34:case 39:e!==34&&e!==39&&We(L);break;case 40:e===41&&We(e);break;case 92:Pe()}return De}function Ge(e,t){for(;Pe()&&e+L!==57&&(e+L!==84||Fe()!==47););return`/*`+Le(t,De-1)+`*`+fe(e===47?e:Pe())}function Ke(e){for(;!Re(Fe());)Pe();return Le(e,De)}function qe(e){return Be(Je(``,null,null,null,[``],e=ze(e),0,[0],e))}function Je(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=Pe()){case 40:if(m!=108&&ve(C,d-1)==58){_e(C+=F(Ve(v),`&`,`&\f`),`&\f`,de(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=Ve(v);break;case 9:case 10:case 13:case 32:C+=He(m);break;case 92:C+=Ue(Ie()-1,7);continue;case 47:switch(Fe()){case 42:case 47:Se(Xe(Ge(Pe(),Ie()),t,n,c),c);break;default:C+=`/`}break;case 123*h:s[l++]=be(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=F(C,/\f/g,``)),p>0&&be(C)-d&&Se(p>32?Ze(C+`;`,r,n,d-1,c):Ze(F(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(Se(S=Ye(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123){if(u===0)Je(C,t,S,S,b,a,d,s,x);else switch(f===99&&ve(C,3)===110?100:f){case 100:case 108:case 109:case 115:Je(e,S,S,r&&Se(Ye(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x);break;default:Je(C,S,S,S,[``],x,0,s,x)}}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+be(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&Ne()==125)continue}switch(C+=fe(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(be(C)-1)*_,_=1;break;case 64:Fe()===45&&(C+=Ve(Pe())),f=Fe(),u=d=be(y=C+=Ke(Ie())),v++;break;case 45:m===45&&be(C)==2&&(h=0)}}return a}function Ye(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=xe(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=ye(e,f+1,f=de(g=o[h])),b=e;v<m;++v)(b=he(g>0?p[v]+` `+y:F(y,/&\f/g,p[v])))&&(c[_++]=b);return ke(e,t,n,i===0?P:s,c,l,u,d)}function Xe(e,t,n,r){return ke(e,t,n,oe,fe(Me()),ye(e,2,-2),0,r)}function Ze(e,t,n,r,i){return ke(e,t,n,se,ye(e,0,r),ye(e,r+1,-1),r,i)}function Qe(e,t,n){switch(me(e,t)){case 5103:return N+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return N+e+e;case 4789:return M+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return N+e+M+e+j+e+e;case 5936:switch(ve(e,t+11)){case 114:return N+e+j+F(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return N+e+j+F(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return N+e+j+F(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return N+e+j+e+e;case 6165:return N+e+j+`flex-`+e+e;case 5187:return N+e+F(e,/(\w+).+(:[^]+)/,N+`box-$1$2`+j+`flex-$1$2`)+e;case 5443:return N+e+j+`flex-item-`+F(e,/flex-|-self/g,``)+(ge(e,/flex-|baseline/)?``:j+`grid-row-`+F(e,/flex-|-self/g,``))+e;case 4675:return N+e+j+`flex-line-pack`+F(e,/align-content|flex-|-self/g,``)+e;case 5548:return N+e+j+F(e,`shrink`,`negative`)+e;case 5292:return N+e+j+F(e,`basis`,`preferred-size`)+e;case 6060:return N+`box-`+F(e,`-grow`,``)+N+e+j+F(e,`grow`,`positive`)+e;case 4554:return N+F(e,/([^-])(transform)/g,`$1`+N+`$2`)+e;case 6187:return F(F(F(e,/(zoom-|grab)/,N+`$1`),/(image-set)/,N+`$1`),e,``)+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,N+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,N+`box-pack:$3`+j+`flex-pack:$3`),/s.+-b[^;]+/,`justify`)+N+e+e;case 4200:if(!ge(e,/flex-|baseline/))return j+`grid-column-align`+ye(e,t)+e;break;case 2592:case 3360:return j+F(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,ge(e.props,/grid-\w+-end/)})?~_e(e+(n=n[t].value),`span`,0)?e:j+F(e,`-start`,``)+e+j+`grid-row-span:`+(~_e(n,`span`,0)?ge(n,/\d+/):+ge(n,/\d+/)-ge(e,/\d+/))+`;`:j+F(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return ge(e.props,/grid-\w+-start/)})?e:j+F(F(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,N+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(be(e)-1-t>6)switch(ve(e,t+1)){case 109:if(ve(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,`$1`+N+`$2-$3$1`+M+(ve(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~_e(e,`stretch`,0)?Qe(F(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return F(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return j+n+`:`+r+s+(i?j+n+`-span:`+(a?o:+o-r)+s:``)+e});case 4949:if(ve(e,t+6)===121)return F(e,`:`,`:`+N)+e;break;case 6444:switch(ve(e,ve(e,14)===45?18:11)){case 120:return F(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+N+(ve(e,14)===45?`inline-`:``)+`box$3$1`+N+`$2$3$1`+j+`$2box$3`)+e;case 100:return F(e,`:`,`:`+j)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return F(e,`scroll-`,`scroll-snap-`)+e}return e}function $e(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function et(e,t,n,r){switch(e.type){case ue:if(e.children.length)break;case ce:case se:return e.return=e.return||e.value;case oe:return``;case le:return e.return=e.value+`{`+$e(e.children,r)+`}`;case P:if(!be(e.value=e.props.join(`,`)))return``}return be(n=$e(e.children,r))?e.return=e.value+`{`+n+`}`:``}function tt(e){var t=xe(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function nt(e){return function(t){t.root||(t=t.return)&&e(t)}}function rt(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case se:e.return=Qe(e.value,e.length,n);return;case le:return $e([Ae(e,{value:F(e.value,`@`,`@`+N)})],r);case P:if(e.length)return I(n=e.props,function(t){switch(ge(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:je(Ae(e,{props:[F(t,/:(read-\w+)/,`:`+M+`$1`)]})),je(Ae(e,{props:[t]})),pe(e,{props:Ce(n,r)});break;case`::placeholder`:je(Ae(e,{props:[F(t,/:(plac\w+)/,`:`+N+`input-$1`)]})),je(Ae(e,{props:[F(t,/:(plac\w+)/,`:`+M+`$1`)]})),je(Ae(e,{props:[F(t,/:(plac\w+)/,j+`input-$1`)]})),je(Ae(e,{props:[t]})),pe(e,{props:Ce(n,r)})}return``})}}var it=c(ae()),at={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ot=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,st=`active`,ct=`data-styled-version`,lt=`6.1.16`,ut=`/*!sc*/
`,dt=typeof window<`u`&&`HTMLElement`in window,ft=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:typeof process<`u`&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==``?{}.REACT_APP_SC_DISABLE_SPEEDY!==`false`&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<`u`&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==``&&{}.SC_DISABLE_SPEEDY!==`false`&&{}.SC_DISABLE_SPEEDY),pt=Object.freeze([]),mt=Object.freeze({});function ht(e,t,n){return n===void 0&&(n=mt),e.theme!==n.theme&&e.theme||t||n.theme}var gt=new Set(`a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.tr.track.u.ul.use.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(`.`)),_t=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,vt=/(^-|-$)/g;function yt(e){return e.replace(_t,`-`).replace(vt,``)}var bt=/(a)(d)/gi,xt=52,St=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ct(e){var t,n=``;for(t=Math.abs(e);t>xt;t=t/xt|0)n=St(t%xt)+n;return(St(t%xt)+n).replace(bt,`$1-$2`)}var wt,Tt=5381,Et=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Dt=function(e){return Et(Tt,e)};function Ot(e){return Ct(Dt(e)>>>0)}function kt(e){return e.displayName||e.name||`Component`}function At(e){return typeof e==`string`&&!0}var jt=typeof Symbol==`function`&&Symbol.for,Mt=jt?Symbol.for(`react.memo`):60115,Nt=jt?Symbol.for(`react.forward_ref`):60112,Pt={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ft={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},It={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Lt=((wt={})[Nt]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},wt[Mt]=It,wt);function Rt(e){return(`type`in(t=e)&&t.type.$$typeof)===Mt?It:`$$typeof`in e?Lt[e.$$typeof]:Pt;var t}var zt=Object.defineProperty,Bt=Object.getOwnPropertyNames,Vt=Object.getOwnPropertySymbols,Ht=Object.getOwnPropertyDescriptor,Ut=Object.getPrototypeOf,R=Object.prototype;function Wt(e,t,n){if(typeof t!=`string`){if(R){var r=Ut(t);r&&r!==R&&Wt(e,r,n)}var i=Bt(t);Vt&&(i=i.concat(Vt(t)));for(var a=Rt(e),o=Rt(t),s=0;s<i.length;++s){var c=i[s];if(!(c in Ft||n&&n[c]||o&&c in o||a&&c in a)){var l=Ht(t,c);try{zt(e,c,l)}catch{}}}}return e}function Gt(e){return typeof e==`function`}function Kt(e){return typeof e==`object`&&`styledComponentId`in e}function qt(e,t){return e&&t?`${e} ${t}`:e||t||``}function Jt(e,t){if(e.length===0)return``;for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Yt(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function Xt(e,t,n){if(n===void 0&&(n=!1),!n&&!Yt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Xt(e[r],t[r]);else if(Yt(t))for(var r in t)e[r]=Xt(e[r],t[r]);return e}function Zt(e,t){Object.defineProperty(e,"toString",{value:t})}function Qt(e){var t=[...arguments].slice(1);return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var $t=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw Qt(16,`${e}`);this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=r;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=(a=0,t.length);a<s;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t=``;if(e>=this.length||this.groupSizes[e]===0)return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,a=r;a<i;a++)t+=`${this.tag.getRule(a)}${ut}`;return t},e}(),en=new Map,tn=new Map,nn=1,rn=function(e){if(en.has(e))return en.get(e);for(;tn.has(nn);)nn++;var t=nn++;return en.set(e,t),tn.set(t,e),t},an=function(e,t){nn=t+1,en.set(e,t),tn.set(t,e)},on=`style[${ot}][${ct}="${lt}"]`,sn=RegExp(`^${ot}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),cn=function(e,t,n){for(var r,i=n.split(`,`),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},ln=function(e,t){for(var n=(t.textContent??``).split(ut),r=[],i=0,a=n.length;i<a;i++){var o=n[i].trim();if(o){var s=o.match(sn);if(s){var c=0|parseInt(s[1],10),l=s[2];c!==0&&(an(l,c),cn(e,l,s[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(o)}}},un=function(e){for(var t=document.querySelectorAll(on),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(ot)!==st&&(ln(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function dn(){return typeof __webpack_nonce__<`u`?__webpack_nonce__:null}var fn=function(e){var t=document.head,n=e||t,r=document.createElement(`style`),i=function(e){var t=Array.from(e.querySelectorAll(`style[${ot}]`));return t[t.length-1]}(n),a=i===void 0?null:i.nextSibling;r.setAttribute(ot,st),r.setAttribute(ct,lt);var o=dn();return o&&r.setAttribute(`nonce`,o),n.insertBefore(r,a),r},pn=function(){function e(e){this.element=fn(e),this.element.appendChild(document.createTextNode(``)),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw Qt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``},e}(),mn=function(){function e(e){this.element=fn(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:``},e}(),hn=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:``},e}(),gn=dt,_n={isServer:!dt,useCSSOMInjection:!ft},vn=function(){function e(e,t,n){e===void 0&&(e=mt),t===void 0&&(t={});var r=this;this.options=k(k({},_n),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&dt&&gn&&(gn=!1,un(this)),Zt(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r=``,i=function(n){var i=function(e){return tn.get(e)}(n);if(i===void 0)return`continue`;var a=e.names.get(i),o=t.getGroup(n);if(a===void 0||!a.size||o.length===0)return`continue`;var s=`${ot}.g${n}[id="${i}"]`,c=``;a!==void 0&&a.forEach(function(e){e.length>0&&(c+=`${e},`)}),r+=`${o}${s}{content:"${c}"}${ut}`},a=0;a<n;a++)i(a);return r}(r)})}return e.registerId=function(e){return rn(e)},e.prototype.rehydrate=function(){!this.server&&dt&&un(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(k(k({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new hn(n):t?new pn(n):new mn(n)}(this.options),new $t(e));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(rn(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(rn(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(rn(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),yn=/&/g,bn=/^\s*\/\/.*$/gm;function xn(e,t){return e.map(function(e){return e.type===`rule`&&(e.value=`${t} ${e.value}`,e.value=e.value.replaceAll(`,`,`,${t} `),e.props=e.props.map(function(e){return`${t} ${e}`})),Array.isArray(e.children)&&e.type!==`@keyframes`&&(e.children=xn(e.children,t)),e})}function Sn(e){var t,n,r,i=e===void 0?mt:e,a=i.options,o=a===void 0?mt:a,s=i.plugins,c=s===void 0?pt:s,l=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,``).length>0?`.${t}`:e},u=c.slice();u.push(function(e){e.type===`rule`&&e.value.includes(`&`)&&(e.props[0]=e.props[0].replace(yn,n).replace(r,l))}),o.prefix&&u.push(rt),u.push(et);var d=function(e,i,a,s){i===void 0&&(i=``),a===void 0&&(a=``),s===void 0&&(s=`&`),t=s,n=i,r=RegExp(`\\${n}\\b`,`g`);var c=e.replace(bn,``),l=qe(a||i?`${a} ${i} { ${c} }`:c);o.namespace&&(l=xn(l,o.namespace));var d=[];return $e(l,tt(u.concat(nt(function(e){return d.push(e)})))),d};return d.hash=c.length?c.reduce(function(e,t){return t.name||Qt(15),Et(e,t.name)},Tt).toString():``,d}var Cn=new vn,wn=Sn(),Tn=g.createContext({shouldForwardProp:void 0,styleSheet:Cn,stylis:wn});Tn.Consumer;var En=g.createContext(void 0);function Dn(){return(0,g.useContext)(Tn)}function On(e){var t=(0,g.useState)(e.stylisPlugins),n=t[0],r=t[1],i=Dn().styleSheet,a=(0,g.useMemo)(function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,i]),o=(0,g.useMemo)(function(){return Sn({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})},[e.enableVendorPrefixes,e.namespace,n]);(0,g.useEffect)(function(){(0,it.default)(n,e.stylisPlugins)||r(e.stylisPlugins)},[e.stylisPlugins]);var s=(0,g.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:o}},[e.shouldForwardProp,a,o]);return g.createElement(Tn.Provider,{value:s},g.createElement(En.Provider,{value:o},e.children))}var kn=function(){function e(e,t){var n=this;this.inject=function(e,t){t===void 0&&(t=wn);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,`@keyframes`))},this.name=e,this.id=`sc-keyframes-${e}`,this.rules=t,Zt(this,function(){throw Qt(12,String(n.name))})}return e.prototype.getName=function(e){return e===void 0&&(e=wn),this.name+e.hash},e}(),An=function(e){return e>=`A`&&e<=`Z`};function jn(e){for(var t=``,n=0;n<e.length;n++){var r=e[n];if(n===1&&r===`-`&&e[0]===`-`)return e;An(r)?t+=`-`+r.toLowerCase():t+=r}return t.startsWith(`ms-`)?`-`+t:t}var Mn=function(e){return e==null||!1===e||e===``},Nn=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!Mn(a)&&(Array.isArray(a)&&a.isCss||Gt(a)?r.push(`${jn(i)}:`,a,`;`):Yt(a)?r.push.apply(r,A(A([`${i} {`],Nn(a),!1),[`}`],!1)):r.push(`${jn(i)}: ${t=i,(n=a)==null||typeof n==`boolean`||n===``?``:typeof n!=`number`||n===0||t in at||t.startsWith(`--`)?String(n).trim():`${n}px`};`))}return r};function Pn(e,t,n,r){if(Mn(e))return[];if(Kt(e))return[`.${e.styledComponentId}`];if(Gt(e))return!Gt(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:Pn(e(t),t,n,r);var i;return e instanceof kn?n?(e.inject(n,r),[e.getName(r)]):[e]:Yt(e)?Nn(e):Array.isArray(e)?Array.prototype.concat.apply(pt,e.map(function(e){return Pn(e,t,n,r)})):[e.toString()]}function Fn(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Gt(n)&&!Kt(n))return!1}return!0}var In=Dt(lt),Ln=function(){function e(e,t,n){this.rules=e,this.staticRulesId=``,this.isStatic=(n===void 0||n.isStatic)&&Fn(e),this.componentId=t,this.baseHash=Et(In,t),this.baseStyle=n,vn.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;if(this.isStatic&&!n.hash){if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=qt(r,this.staticRulesId);else{var i=Jt(Pn(this.rules,e,t,n)),a=Ct(Et(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=n(i,`.${a}`,void 0,this.componentId);t.insertRules(this.componentId,a,o)}r=qt(r,a),this.staticRulesId=a}}else{for(var s=Et(this.baseHash,n.hash),c=``,l=0;l<this.rules.length;l++){var u=this.rules[l];if(typeof u==`string`)c+=u;else if(u){var d=Jt(Pn(u,e,t,n));s=Et(s,d+l),c+=d}}if(c){var f=Ct(s>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(c,`.${f}`,void 0,this.componentId)),r=qt(r,f)}}return r},e}(),Rn=g.createContext(void 0);Rn.Consumer;function zn(e){var t=g.useContext(Rn),n=(0,g.useMemo)(function(){return function(e,t){if(!e)throw Qt(14);if(Gt(e))return e(t);if(Array.isArray(e)||typeof e!=`object`)throw Qt(8);return t?k(k({},t),e):e}(e.theme,t)},[e.theme,t]);return e.children?g.createElement(Rn.Provider,{value:n},e.children):null}var Bn={};function Vn(e,t,n){var r=Kt(e),i=e,a=!At(e),o=t.attrs,s=o===void 0?pt:o,c=t.componentId,l=c===void 0?function(e,t){var n=typeof e==`string`?yt(e):`sc`;Bn[n]=(Bn[n]||0)+1;var r=`${n}-${Ot(lt+n+Bn[n])}`;return t?`${t}-${r}`:r}(t.displayName,t.parentComponentId):c,u=t.displayName,d=u===void 0?function(e){return At(e)?`styled.${e}`:`Styled(${kt(e)})`}(e):u,f=t.displayName&&t.componentId?`${yt(t.displayName)}-${t.componentId}`:t.componentId||l,p=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var h=i.shouldForwardProp;if(t.shouldForwardProp){var _=t.shouldForwardProp;m=function(e,t){return h(e,t)&&_(e,t)}}else m=h}var v=new Ln(n,f,r?i.componentStyle:void 0);function y(e,t){return function(e,t,n){var r=e.attrs,i=e.componentStyle,a=e.defaultProps,o=e.foldedComponentIds,s=e.styledComponentId,c=e.target,l=g.useContext(Rn),u=Dn(),d=e.shouldForwardProp||u.shouldForwardProp,f=ht(t,l,a)||mt,p=function(e,t,n){for(var r,i=k(k({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var o=Gt(r=e[a])?r(i):r;for(var s in o)i[s]=s===`className`?qt(i[s],o[s]):s===`style`?k(k({},i[s]),o[s]):o[s]}return t.className&&(i.className=qt(i.className,t.className)),i}(r,t,f),m=p.as||c,h={};for(var _ in p)p[_]===void 0||_[0]===`$`||_===`as`||_===`theme`&&p.theme===f||(_===`forwardedAs`?h.as=p.forwardedAs:d&&!d(_,m)||(h[_]=p[_]));var v=function(e,t){var n=Dn();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,p),y=qt(o,s);return v&&(y+=` `+v),p.className&&(y+=` `+p.className),h[At(m)&&!gt.has(m)?`class`:`className`]=y,n&&(h.ref=n),(0,g.createElement)(m,h)}(b,e,t)}y.displayName=d;var b=g.forwardRef(y);return b.attrs=p,b.componentStyle=v,b.displayName=d,b.shouldForwardProp=m,b.foldedComponentIds=r?qt(i.foldedComponentIds,i.styledComponentId):``,b.styledComponentId=f,b.target=r?i.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=r?function(e){for(var t=[...arguments].slice(1),n=0,r=t;n<r.length;n++)Xt(e,r[n],!0);return e}({},i.defaultProps,e):e}}),Zt(b,function(){return`.${b.styledComponentId}`}),a&&Wt(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function Hn(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Un=function(e){return Object.assign(e,{isCss:!0})};function z(e){var t=[...arguments].slice(1);if(Gt(e)||Yt(e))return Un(Pn(Hn(pt,A([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?Pn(n):Un(Pn(Hn(n,t)))}function Wn(e,t,n){if(n===void 0&&(n=mt),!t)throw Qt(1,t);var r=function(r){var i=[...arguments].slice(1);return e(t,n,z.apply(void 0,A([r],i,!1)))};return r.attrs=function(r){return Wn(e,t,k(k({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Wn(e,t,k(k({},n),r))},r}var Gn=function(e){return Wn(Vn,e)},B=Gn;gt.forEach(function(e){B[e]=Gn(e)}),function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Fn(e),vn.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(Jt(Pn(this.rules,t,n,r)),``),a=this.componentId+e;n.insertRules(a,a,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&vn.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function Kn(e){var t=[...arguments].slice(1),n=Jt(z.apply(void 0,A([e],t,!1)));return new kn(Ot(n),n)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return``;var n=dn();return`<style ${Jt([n&&`nonce="${n}"`,`${ot}="true"`,`${ct}="${lt}"`].filter(Boolean),` `)}>${t}</style>`},this.getStyleTags=function(){if(e.sealed)throw Qt(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw Qt(2);var n=e.instance.toString();if(!n)return[];var r=((t={})[ot]=``,t[ct]=lt,t.dangerouslySetInnerHTML={__html:n},t),i=dn();return i&&(r.nonce=i),[g.createElement(`style`,k({},r,{key:`sc-0-0`}))]},this.seal=function(){e.sealed=!0},this.instance=new vn({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(e){if(this.sealed)throw Qt(2);return g.createElement(On,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Qt(3)},e})(),`${ot}`;var qn={black:`#000`,white:`#fff`,product:{support:`#00a656`,explore:`#30aabc`,gather:`#f6c8be`,guide:`#eb4962`,chat:`#f79a3e`,talk:`#efc93d`,sell:`#c38f00`},grey:{100:`#f8f9f9`,200:`#e8eaec`,300:`#d8dcde`,400:`#b0b8be`,500:`#919ca5`,600:`#848f99`,700:`#5c6970`,800:`#39434b`,900:`#293239`,1e3:`#1c2227`,1100:`#151a1e`,1200:`#0a0d0e`},blue:{100:`#edf7ff`,200:`#ddecf8`,300:`#cce0f1`,400:`#93bcdc`,500:`#66a0cd`,600:`#2694d6`,700:`#1f73b7`,800:`#13456d`,900:`#0f3655`,1e3:`#0a2338`,1100:`#061420`,1200:`#040d15`},red:{100:`#fff2f3`,200:`#fee3e5`,300:`#f5d5d8`,400:`#f2a1a8`,500:`#ea7881`,600:`#eb5c69`,700:`#cd3642`,800:`#7e1d25`,900:`#671219`,1e3:`#3d1418`,1100:`#1d1011`,1200:`#100b0c`},yellow:{100:`#fff3e4`,200:`#ffe6cb`,300:`#fed6a9`,400:`#fca347`,500:`#e38215`,600:`#d67305`,700:`#ac5918`,800:`#673515`,900:`#4c2c17`,1e3:`#2d1e15`,1100:`#18120f`,1200:`#0e0c0b`},green:{100:`#eef8f4`,200:`#daeee6`,300:`#cae3d9`,400:`#94c1b0`,500:`#4eab89`,600:`#26a178`,700:`#037f52`,800:`#104b35`,900:`#0b3b29`,1e3:`#0c261c`,1100:`#0a1511`,1200:`#080d0c`},kale:{100:`#ecf9f9`,200:`#daeded`,300:`#cbe2e1`,400:`#97bfbf`,500:`#6ba4a5`,600:`#4a9999`,700:`#40787a`,800:`#16494f`,900:`#063940`,1e3:`#03252a`,1100:`#061517`,1200:`#060e0e`},fuschia:{100:`#fbf3f8`,200:`#f7e6f1`,300:`#f2d5e7`,400:`#e3a4cc`,500:`#d77db7`,600:`#d16aac`,700:`#b34496`,800:`#78116c`,900:`#5a0d51`,1e3:`#3f0939`,1100:`#31072c`,1200:`#1b0418`},pink:{100:`#fcf3f4`,200:`#f7e5e8`,300:`#f3d6dc`,400:`#e5a6b4`,500:`#d98193`,600:`#d96b81`,700:`#d62054`,800:`#75263d`,900:`#561d2e`,1e3:`#3c141f`,1100:`#2e0f18`,1200:`#17080c`},crimson:{100:`#fbf3f2`,200:`#f7e7e4`,300:`#f1d7d2`,400:`#e2aaa0`,500:`#d58678`,600:`#cf7464`,700:`#be4938`,800:`#811b12`,900:`#61140d`,1e3:`#440e09`,1100:`#340b07`,1200:`#1c0604`},orange:{100:`#fdf3ed`,200:`#fae7d8`,300:`#f7d7be`,400:`#eda875`,500:`#e58035`,600:`#d57428`,700:`#af5626`,800:`#693317`,900:`#4d2711`,1e3:`#361a0c`,1100:`#291409`,1200:`#150a04`},lemon:{100:`#fff7d4`,200:`#ffea97`,300:`#ffdc4f`,400:`#efab00`,500:`#c79100`,600:`#b68500`,700:`#8f6900`,800:`#563e00`,900:`#3f2e00`,1e3:`#2b2000`,1100:`#221800`,1200:`#110c00`},lime:{100:`#ecfae7`,200:`#d1f3c7`,300:`#b3eda3`,400:`#4fd12b`,500:`#45b025`,600:`#509f2d`,700:`#3d7e19`,800:`#2c491b`,900:`#203614`,1e3:`#16250e`,1100:`#111d0a`,1200:`#090e05`},mint:{100:`#d6ffeb`,200:`#9affce`,300:`#0afe89`,400:`#00d26d`,500:`#01b15c`,600:`#16a260`,700:`#2d7e55`,800:`#1b4b33`,900:`#143726`,1e3:`#0e261a`,1100:`#0b1d14`,1200:`#050e0a`},teal:{100:`#d4fefa`,200:`#88fdf1`,300:`#0bf8e1`,400:`#03cdb8`,500:`#02ad9c`,600:`#2a9d8f`,700:`#367a74`,800:`#254846`,900:`#1b3534`,1e3:`#122423`,1100:`#0e1c1a`,1200:`#070d0d`},azure:{100:`#eff7fe`,200:`#d9ecfc`,300:`#c4e0fa`,400:`#82bcf4`,500:`#4b9fee`,600:`#3191ea`,700:`#2770c3`,800:`#23446b`,900:`#1a3250`,1e3:`#122238`,1100:`#0e1a2a`,1200:`#070d14`},royal:{100:`#f4f5fc`,200:`#e7e9f8`,300:`#d8dcf4`,400:`#acb4e7`,500:`#8a96dd`,600:`#7a88d9`,700:`#4c67d3`,800:`#1833ab`,900:`#122680`,1e3:`#0d1a5a`,1100:`#0a1445`,1200:`#050a25`},purple:{100:`#f9f3fb`,200:`#f2e7f6`,300:`#e9d8f1`,400:`#d0a9e0`,500:`#bb86d3`,600:`#b276cd`,700:`#9256b1`,800:`#58209a`,900:`#411973`,1e3:`#2e1150`,1100:`#230d3f`,1200:`#120720`}},Jn=4,Yn={sm:`${Jn/2}px`,md:`${Jn}px`,lg:`8px`},Xn={solid:`solid`},Zn={sm:`1px`,md:`3px`},Qn={sm:`${Zn.sm} ${Xn.solid}`,md:`${Zn.md} ${Xn.solid}`},$n={xs:`0px`,sm:`576px`,md:`768px`,lg:`992px`,xl:`${Jn*300}px`},er={primaryHue:`blue`,dangerHue:`red`,warningHue:`yellow`,successHue:`green`,neutralHue:`grey`,chromeHue:`kale`,variables:{dark:{background:{default:`neutralHue.1100`,raised:`neutralHue.1000`,recessed:`neutralHue.1200`,subtle:`neutralHue.1000`,emphasis:`neutralHue.600`,success:`successHue.1000`,warning:`warningHue.1000`,danger:`dangerHue.1000`,primaryEmphasis:`primaryHue.600`,successEmphasis:`successHue.600`,warningEmphasis:`warningHue.600`,dangerEmphasis:`dangerHue.600`,disabled:`rgba(white, 100)`},border:{default:`neutralHue.800`,emphasis:`neutralHue.600`,subtle:`neutralHue.900`,success:`successHue.900`,warning:`warningHue.900`,danger:`dangerHue.900`,primaryEmphasis:`primaryHue.600`,successEmphasis:`successHue.600`,warningEmphasis:`warningHue.600`,dangerEmphasis:`dangerHue.600`,disabled:`neutralHue.800`},foreground:{default:`neutralHue.300`,subtle:`neutralHue.500`,onEmphasis:`neutralHue.1100`,primary:`primaryHue.600`,success:`successHue.400`,warning:`warningHue.400`,danger:`dangerHue.400`,successEmphasis:`successHue.300`,warningEmphasis:`warningHue.300`,dangerEmphasis:`dangerHue.300`,disabled:`neutralHue.700`},shadow:{small:`rgba(neutralHue.1200, 1100)`,medium:`rgba(neutralHue.1200, 800)`,large:`rgba(neutralHue.1200, 1000)`}},light:{background:{default:`palette.white`,raised:`palette.white`,recessed:`neutralHue.100`,subtle:`neutralHue.100`,emphasis:`neutralHue.700`,success:`successHue.100`,warning:`warningHue.100`,danger:`dangerHue.100`,primaryEmphasis:`primaryHue.700`,successEmphasis:`successHue.700`,warningEmphasis:`warningHue.700`,dangerEmphasis:`dangerHue.700`,disabled:`rgba(neutralHue.700, 100)`},border:{default:`neutralHue.300`,emphasis:`neutralHue.600`,subtle:`neutralHue.200`,success:`successHue.300`,warning:`warningHue.300`,danger:`dangerHue.300`,primaryEmphasis:`primaryHue.700`,successEmphasis:`successHue.700`,warningEmphasis:`warningHue.700`,dangerEmphasis:`dangerHue.700`,disabled:`neutralHue.300`},foreground:{default:`neutralHue.900`,subtle:`neutralHue.700`,onEmphasis:`palette.white`,primary:`primaryHue.700`,success:`successHue.700`,warning:`warningHue.700`,danger:`dangerHue.700`,successEmphasis:`successHue.900`,warningEmphasis:`warningHue.900`,dangerEmphasis:`dangerHue.900`,disabled:`neutralHue.600`},shadow:{small:`rgba(neutralHue.1200, 200)`,medium:`rgba(neutralHue.1200, 200)`,large:`rgba(neutralHue.1200, 200)`}}}},tr={mono:[`SFMono-Regular`,`Consolas`,`"Liberation Mono"`,`Menlo`,`Courier`,`monospace`].join(`,`),system:[`system-ui`,`-apple-system`,`BlinkMacSystemFont`,`"Segoe UI"`,`Roboto`,`Oxygen-Sans`,`Ubuntu`,`Cantarell`,`"Helvetica Neue"`,`Arial`,`sans-serif`].join(`,`)},nr={xs:`10px`,sm:`12px`,md:`14px`,lg:`18px`,xl:`22px`,xxl:`26px`,xxxl:`36px`},rr={thin:100,extralight:200,light:300,regular:400,medium:500,semibold:600,bold:700,extrabold:800,black:900},ir={sm:`12px`,md:`16px`,lg:`26px`},ar={sm:`16px`,md:`20px`,lg:`24px`,xl:`28px`,xxl:`32px`,xxxl:`44px`},or={100:.08,200:.16,300:.24,400:.32,500:.4,600:.48,700:.56,800:.64,900:.72,1e3:.8,1100:.88,1200:.96},sr={...qn};delete sr.product;var cr={xs:`1px`,sm:`2px`,md:`3px`},lr={xs:e=>`0 0 0 ${cr.xs} ${e}`,sm:e=>`0 0 0 ${cr.sm} ${e}`,md:e=>`0 0 0 ${cr.md} ${e}`,lg:(e,t,n)=>`0 ${e} ${t} 0 ${n}`},ur={base:Jn,xxs:`${Jn}px`,xs:`8px`,sm:`12px`,md:`20px`,lg:`32px`,xl:`40px`,xxl:`48px`},dr={borders:Qn,borderRadii:Yn,borderStyles:Xn,borderWidths:Zn,breakpoints:$n,colors:{base:`light`,...er},components:{},fonts:tr,fontSizes:nr,fontWeights:rr,iconSizes:ir,lineHeights:ar,opacity:or,palette:sr,rtl:!1,shadowWidths:cr,shadows:lr,space:ur},V=e=>{let t,n=e.theme.components,r=e.componentId||e[`data-garden-id`];return n&&r&&(t=n[r],typeof t==`function`&&(t=t(e))),t};function fr(e,t,n){return Math.min(Math.max(e,n),t)}var pr=class extends Error{constructor(e){super(`Failed to parse color: "${e}"`)}};function mr(e){if(typeof e!=`string`)throw new pr(e);if(e.trim().toLowerCase()===`transparent`)return[0,0,0,0];let t=e.trim();t=wr.test(e)?vr(e):e;let n=br.exec(t);if(n){let e=Array.from(n).slice(1);return[...e.slice(0,3).map(e=>parseInt(yr(e,2),16)),parseInt(yr(e[3]||`f`,2),16)/255]}let r=xr.exec(t);if(r){let e=Array.from(r).slice(1);return[...e.slice(0,3).map(e=>parseInt(e,16)),parseInt(e[3]||`ff`,16)/255]}let i=Sr.exec(t);if(i){let e=Array.from(i).slice(1);return[...e.slice(0,3).map(e=>parseInt(e,10)),parseFloat(e[3]||`1`)]}let a=Cr.exec(t);if(a){let[t,n,r,i]=Array.from(a).slice(1).map(parseFloat);if(fr(0,100,n)!==n||fr(0,100,r)!==r)throw new pr(e);return[...Er(t,n,r),Number.isNaN(i)?1:i]}throw new pr(e)}function hr(e){let t=5381,n=e.length;for(;n;)t=t*33^e.charCodeAt(--n);return(t>>>0)%2341}var gr=e=>parseInt(e.replace(/_/g,``),36),_r=`1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm`.split(` `).reduce((e,t)=>{let n=gr(t.substring(0,3)),r=gr(t.substring(3)).toString(16),i=``;for(let e=0;e<6-r.length;e++)i+=`0`;return e[n]=`${i}${r}`,e},{});function vr(e){let t=_r[hr(e.toLowerCase().trim())];if(!t)throw new pr(e);return`#${t}`}var yr=(e,t)=>Array.from(Array(t)).map(()=>e).join(``),br=RegExp(`^#${yr(`([a-f0-9])`,3)}([a-f0-9])?$`,`i`),xr=RegExp(`^#${yr(`([a-f0-9]{2})`,3)}([a-f0-9]{2})?$`,`i`),Sr=RegExp(`^rgba?\\(\\s*(\\d+)\\s*${yr(`,\\s*(\\d+)\\s*`,2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,`i`),Cr=/^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,wr=/^[a-z]+$/i,Tr=e=>Math.round(e*255),Er=(e,t,n)=>{let r=n/100;if(t===0)return[r,r,r].map(Tr);let i=(e%360+360)%360/60,a=(1-Math.abs(2*r-1))*(t/100),o=a*(1-Math.abs(i%2-1)),s=0,c=0,l=0;i>=0&&i<1?(s=a,c=o):i>=1&&i<2?(s=o,c=a):i>=2&&i<3?(c=a,l=o):i>=3&&i<4?(c=o,l=a):i>=4&&i<5?(s=o,l=a):i>=5&&i<6&&(s=a,l=o);let u=r-a/2;return[s+u,c+u,l+u].map(Tr)};function Dr(e,t,n,r){return`rgba(${fr(0,255,e).toFixed()}, ${fr(0,255,t).toFixed()}, ${fr(0,255,n).toFixed()}, ${parseFloat(fr(0,1,r).toFixed(3))})`}function Or(e,t,n){let r=(e,t)=>t===3?e:e/255,[i,a,o,s]=mr(e).map(r),[c,l,u,d]=mr(t).map(r),f=d-s,p=n*2-1,m=((p*f===-1?p:p+f/(1+p*f))+1)/2,h=1-m;return Dr((i*h+c*m)*255,(a*h+l*m)*255,(o*h+u*m)*255,d*n+s*(1-n))}function kr(...e){return t=>{let n=e.length-1,r=fr(0,n,Math.floor(t*n)),i=fr(0,n,Math.ceil(t*n)),a=e[r],o=e[i],s=1/n;return Or(a,o,(t-s*r)/s)}}function Ar(e){let[t,n,r,i]=mr(e),a=e=>{let t=fr(0,255,e).toString(16);return t.length===1?`0${t}`:t};return`#${a(t)}${a(n)}${a(r)}${i<1?a(Math.round(i*255)):``}`}function jr(){return jr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jr.apply(null,arguments)}function Mr(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function Nr(e,t){return Nr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Nr(e,t)}function Pr(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Nr(e,t)}function Fr(e){return Fr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Fr(e)}function Ir(e){try{return Function.toString.call(e).indexOf(`[native code]`)!==-1}catch{return typeof e==`function`}}function Lr(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Lr=function(){return!!e})()}function Rr(e,t,n){if(Lr())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,t);var i=new(e.bind.apply(e,r));return n&&Nr(i,n.prototype),i}function zr(e){var t=typeof Map==`function`?new Map:void 0;return zr=function(e){if(e===null||!Ir(e))return e;if(typeof e!=`function`)throw TypeError(`Super expression must either be null or a function`);if(t!==void 0){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return Rr(e,arguments,Fr(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),Nr(n,e)},zr(e)}function Br(){var e;return e=arguments.length-1,e<0||arguments.length<=e?void 0:arguments[e]}function Vr(e){return-e}function Hr(e,t){return e+t}function Ur(e,t){return e-t}function Wr(e,t){return e*t}function Gr(e,t){return e/t}function Kr(){return Math.max.apply(Math,arguments)}function qr(){return Math.min.apply(Math,arguments)}function Jr(){return Array.of.apply(Array,arguments)}var Yr={symbols:{"*":{infix:{symbol:`*`,f:Wr,notation:`infix`,precedence:4,rightToLeft:0,argCount:2},symbol:`*`,regSymbol:`\\*`},"/":{infix:{symbol:`/`,f:Gr,notation:`infix`,precedence:4,rightToLeft:0,argCount:2},symbol:`/`,regSymbol:`/`},"+":{infix:{symbol:`+`,f:Hr,notation:`infix`,precedence:2,rightToLeft:0,argCount:2},prefix:{symbol:`+`,f:Br,notation:`prefix`,precedence:3,rightToLeft:0,argCount:1},symbol:`+`,regSymbol:`\\+`},"-":{infix:{symbol:`-`,f:Ur,notation:`infix`,precedence:2,rightToLeft:0,argCount:2},prefix:{symbol:`-`,f:Vr,notation:`prefix`,precedence:3,rightToLeft:0,argCount:1},symbol:`-`,regSymbol:`-`},",":{infix:{symbol:`,`,f:Jr,notation:`infix`,precedence:1,rightToLeft:0,argCount:2},symbol:`,`,regSymbol:`,`},"(":{prefix:{symbol:`(`,f:Br,notation:`prefix`,precedence:0,rightToLeft:0,argCount:1},symbol:`(`,regSymbol:`\\(`},")":{postfix:{symbol:`)`,f:void 0,notation:`postfix`,precedence:0,rightToLeft:0,argCount:1},symbol:`)`,regSymbol:`\\)`},min:{func:{symbol:`min`,f:qr,notation:`func`,precedence:0,rightToLeft:0,argCount:1},symbol:`min`,regSymbol:`min\\b`},max:{func:{symbol:`max`,f:Kr,notation:`func`,precedence:0,rightToLeft:0,argCount:1},symbol:`max`,regSymbol:`max\\b`}}},Xr=function(e){Pr(t,e);function t(t){return Mr(e.call(this,`An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#`+t+` for more information.`)||this)}return t}(zr(Error)),Zr=/((?!\w)a|na|hc|mc|dg|me[r]?|xe|ni(?![a-zA-Z])|mm|cp|tp|xp|q(?!s)|hv|xamv|nimv|wv|sm|s(?!\D|$)|ged|darg?|nrut)/g;function Qr(e){var t={};return t.symbols=e?jr({},Yr.symbols,e.symbols):jr({},Yr.symbols),t}function $r(e,t){var n,r=e.pop();return t.push(r.f.apply(r,(n=[]).concat.apply(n,t.splice(-r.argCount)))),r.precedence}function ei(e,t){var n=Qr(t),r,i=[n.symbols[`(`].prefix],a=[],o=RegExp(`\\d+(?:\\.\\d+)?|`+Object.keys(n.symbols).map(function(e){return n.symbols[e]}).sort(function(e,t){return t.symbol.length-e.symbol.length}).map(function(e){return e.regSymbol}).join(`|`)+`|(\\S)`,`g`);o.lastIndex=0;var s=!1;do{r=o.exec(e);var c=r||[`)`,void 0],l=c[0],u=c[1],d=n.symbols[l],f=d&&!d.prefix&&!d.func,p=!d||!d.postfix&&!d.infix;if(u||(s?p:f))throw new Xr(37,r?r.index:e.length,e);if(s){var m=d.postfix||d.infix;do{var h=i[i.length-1];if((m.precedence-h.precedence||h.rightToLeft)>0)break}while($r(i,a));s=m.notation===`postfix`,m.symbol!==`)`&&(i.push(m),s&&$r(i,a))}else if(d){if(i.push(d.prefix||d.func),d.func&&(r=o.exec(e),!r||r[0]!==`(`))throw new Xr(38,r?r.index:e.length,e)}else a.push(+l),s=!0}while(r&&i.length);if(i.length)throw new Xr(39,r?r.index:e.length,e);if(r)throw new Xr(40,r?r.index:e.length,e);return a.pop()}function ti(e){return e.split(``).reverse().join(``)}function H(e,t){var n=ti(e),r=n.match(Zr);if(r&&!r.every(function(e){return e===r[0]}))throw new Xr(41);return``+ei(ti(n.replace(Zr,``)),t)+(r?ti(r[0]):``)}function ni(e,t){return e.substr(-t.length)===t}var ri=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;function ii(e){return typeof e==`string`&&e.match(ri)?parseFloat(e):e}var ai=function(e){return function(t,n){n===void 0&&(n=`16px`);var r=t,i=n;if(typeof t==`string`){if(!ni(t,`px`))throw new Xr(69,e,t);r=ii(t)}if(typeof n==`string`){if(!ni(n,`px`))throw new Xr(70,e,n);i=ii(n)}if(typeof r==`string`)throw new Xr(71,t,e);if(typeof i==`string`)throw new Xr(72,n,e);return``+r/i+e}}(`em`),oi=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;function si(e){if(typeof e!=`string`)return[e,``];var t=e.match(oi);return t?[parseFloat(e),t[2]]:[e,void 0]}function ci(){return{border:`0`,clip:`rect(0 0 0 0)`,height:`1px`,margin:`-1px`,overflow:`hidden`,padding:`0`,position:`absolute`,whiteSpace:`nowrap`,width:`1px`}}function li(e){return Math.round(e*255)}function ui(e,t,n){return li(e)+`,`+li(t)+`,`+li(n)}function di(e,t,n,r){if(r===void 0&&(r=ui),t===0)return r(n,n,n);var i=(e%360+360)%360/60,a=(1-Math.abs(2*n-1))*t,o=a*(1-Math.abs(i%2-1)),s=0,c=0,l=0;i>=0&&i<1?(s=a,c=o):i>=1&&i<2?(s=o,c=a):i>=2&&i<3?(c=a,l=o):i>=3&&i<4?(c=o,l=a):i>=4&&i<5?(s=o,l=a):i>=5&&i<6&&(s=a,l=o);var u=n-a/2,d=s+u,f=c+u,p=l+u;return r(d,f,p)}var fi={aliceblue:`f0f8ff`,antiquewhite:`faebd7`,aqua:`00ffff`,aquamarine:`7fffd4`,azure:`f0ffff`,beige:`f5f5dc`,bisque:`ffe4c4`,black:`000`,blanchedalmond:`ffebcd`,blue:`0000ff`,blueviolet:`8a2be2`,brown:`a52a2a`,burlywood:`deb887`,cadetblue:`5f9ea0`,chartreuse:`7fff00`,chocolate:`d2691e`,coral:`ff7f50`,cornflowerblue:`6495ed`,cornsilk:`fff8dc`,crimson:`dc143c`,cyan:`00ffff`,darkblue:`00008b`,darkcyan:`008b8b`,darkgoldenrod:`b8860b`,darkgray:`a9a9a9`,darkgreen:`006400`,darkgrey:`a9a9a9`,darkkhaki:`bdb76b`,darkmagenta:`8b008b`,darkolivegreen:`556b2f`,darkorange:`ff8c00`,darkorchid:`9932cc`,darkred:`8b0000`,darksalmon:`e9967a`,darkseagreen:`8fbc8f`,darkslateblue:`483d8b`,darkslategray:`2f4f4f`,darkslategrey:`2f4f4f`,darkturquoise:`00ced1`,darkviolet:`9400d3`,deeppink:`ff1493`,deepskyblue:`00bfff`,dimgray:`696969`,dimgrey:`696969`,dodgerblue:`1e90ff`,firebrick:`b22222`,floralwhite:`fffaf0`,forestgreen:`228b22`,fuchsia:`ff00ff`,gainsboro:`dcdcdc`,ghostwhite:`f8f8ff`,gold:`ffd700`,goldenrod:`daa520`,gray:`808080`,green:`008000`,greenyellow:`adff2f`,grey:`808080`,honeydew:`f0fff0`,hotpink:`ff69b4`,indianred:`cd5c5c`,indigo:`4b0082`,ivory:`fffff0`,khaki:`f0e68c`,lavender:`e6e6fa`,lavenderblush:`fff0f5`,lawngreen:`7cfc00`,lemonchiffon:`fffacd`,lightblue:`add8e6`,lightcoral:`f08080`,lightcyan:`e0ffff`,lightgoldenrodyellow:`fafad2`,lightgray:`d3d3d3`,lightgreen:`90ee90`,lightgrey:`d3d3d3`,lightpink:`ffb6c1`,lightsalmon:`ffa07a`,lightseagreen:`20b2aa`,lightskyblue:`87cefa`,lightslategray:`789`,lightslategrey:`789`,lightsteelblue:`b0c4de`,lightyellow:`ffffe0`,lime:`0f0`,limegreen:`32cd32`,linen:`faf0e6`,magenta:`f0f`,maroon:`800000`,mediumaquamarine:`66cdaa`,mediumblue:`0000cd`,mediumorchid:`ba55d3`,mediumpurple:`9370db`,mediumseagreen:`3cb371`,mediumslateblue:`7b68ee`,mediumspringgreen:`00fa9a`,mediumturquoise:`48d1cc`,mediumvioletred:`c71585`,midnightblue:`191970`,mintcream:`f5fffa`,mistyrose:`ffe4e1`,moccasin:`ffe4b5`,navajowhite:`ffdead`,navy:`000080`,oldlace:`fdf5e6`,olive:`808000`,olivedrab:`6b8e23`,orange:`ffa500`,orangered:`ff4500`,orchid:`da70d6`,palegoldenrod:`eee8aa`,palegreen:`98fb98`,paleturquoise:`afeeee`,palevioletred:`db7093`,papayawhip:`ffefd5`,peachpuff:`ffdab9`,peru:`cd853f`,pink:`ffc0cb`,plum:`dda0dd`,powderblue:`b0e0e6`,purple:`800080`,rebeccapurple:`639`,red:`f00`,rosybrown:`bc8f8f`,royalblue:`4169e1`,saddlebrown:`8b4513`,salmon:`fa8072`,sandybrown:`f4a460`,seagreen:`2e8b57`,seashell:`fff5ee`,sienna:`a0522d`,silver:`c0c0c0`,skyblue:`87ceeb`,slateblue:`6a5acd`,slategray:`708090`,slategrey:`708090`,snow:`fffafa`,springgreen:`00ff7f`,steelblue:`4682b4`,tan:`d2b48c`,teal:`008080`,thistle:`d8bfd8`,tomato:`ff6347`,turquoise:`40e0d0`,violet:`ee82ee`,wheat:`f5deb3`,white:`fff`,whitesmoke:`f5f5f5`,yellow:`ff0`,yellowgreen:`9acd32`};function pi(e){if(typeof e!=`string`)return e;var t=e.toLowerCase();return fi[t]?`#`+fi[t]:e}var mi=/^#[a-fA-F0-9]{6}$/,hi=/^#[a-fA-F0-9]{8}$/,gi=/^#[a-fA-F0-9]{3}$/,_i=/^#[a-fA-F0-9]{4}$/,vi=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,yi=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,bi=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,xi=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function Si(e){if(typeof e!=`string`)throw new Xr(3);var t=pi(e);if(t.match(mi))return{red:parseInt(``+t[1]+t[2],16),green:parseInt(``+t[3]+t[4],16),blue:parseInt(``+t[5]+t[6],16)};if(t.match(hi)){var n=parseFloat((parseInt(``+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(``+t[1]+t[2],16),green:parseInt(``+t[3]+t[4],16),blue:parseInt(``+t[5]+t[6],16),alpha:n}}if(t.match(gi))return{red:parseInt(``+t[1]+t[1],16),green:parseInt(``+t[2]+t[2],16),blue:parseInt(``+t[3]+t[3],16)};if(t.match(_i)){var r=parseFloat((parseInt(``+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(``+t[1]+t[1],16),green:parseInt(``+t[2]+t[2],16),blue:parseInt(``+t[3]+t[3],16),alpha:r}}var i=vi.exec(t);if(i)return{red:parseInt(``+i[1],10),green:parseInt(``+i[2],10),blue:parseInt(``+i[3],10)};var a=yi.exec(t.substring(0,50));if(a)return{red:parseInt(``+a[1],10),green:parseInt(``+a[2],10),blue:parseInt(``+a[3],10),alpha:parseFloat(``+a[4])>1?parseFloat(``+a[4])/100:parseFloat(``+a[4])};var o=bi.exec(t);if(o){var s=`rgb(`+di(parseInt(``+o[1],10),parseInt(``+o[2],10)/100,parseInt(``+o[3],10)/100)+`)`,c=vi.exec(s);if(!c)throw new Xr(4,t,s);return{red:parseInt(``+c[1],10),green:parseInt(``+c[2],10),blue:parseInt(``+c[3],10)}}var l=xi.exec(t.substring(0,50));if(l){var u=`rgb(`+di(parseInt(``+l[1],10),parseInt(``+l[2],10)/100,parseInt(``+l[3],10)/100)+`)`,d=vi.exec(u);if(!d)throw new Xr(4,t,u);return{red:parseInt(``+d[1],10),green:parseInt(``+d[2],10),blue:parseInt(``+d[3],10),alpha:parseFloat(``+l[4])>1?parseFloat(``+l[4])/100:parseFloat(``+l[4])}}throw new Xr(5)}function Ci(e){var t=e.red/255,n=e.green/255,r=e.blue/255,i=Math.max(t,n,r),a=Math.min(t,n,r),o=(i+a)/2;if(i===a)return e.alpha===void 0?{hue:0,saturation:0,lightness:o}:{hue:0,saturation:0,lightness:o,alpha:e.alpha};var s,c=i-a,l=o>.5?c/(2-i-a):c/(i+a);switch(i){case t:s=(n-r)/c+(n<r?6:0);break;case n:s=(r-t)/c+2;break;default:s=(t-n)/c+4}return s*=60,e.alpha===void 0?{hue:s,saturation:l,lightness:o}:{hue:s,saturation:l,lightness:o,alpha:e.alpha}}function wi(e){return Ci(Si(e))}var Ti=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?`#`+e[1]+e[3]+e[5]:e};function Ei(e){var t=e.toString(16);return t.length===1?`0`+t:t}function Di(e){return Ei(Math.round(e*255))}function Oi(e,t,n){return Ti(`#`+Di(e)+Di(t)+Di(n))}function ki(e,t,n){return di(e,t,n,Oi)}function Ai(e,t,n){if(typeof e==`number`&&typeof t==`number`&&typeof n==`number`)return ki(e,t,n);if(typeof e==`object`&&t===void 0&&n===void 0)return ki(e.hue,e.saturation,e.lightness);throw new Xr(1)}function ji(e,t,n,r){if(typeof e==`number`&&typeof t==`number`&&typeof n==`number`&&typeof r==`number`)return r>=1?ki(e,t,n):`rgba(`+di(e,t,n)+`,`+r+`)`;if(typeof e==`object`&&t===void 0&&n===void 0&&r===void 0)return e.alpha>=1?ki(e.hue,e.saturation,e.lightness):`rgba(`+di(e.hue,e.saturation,e.lightness)+`,`+e.alpha+`)`;throw new Xr(2)}function Mi(e,t,n){if(typeof e==`number`&&typeof t==`number`&&typeof n==`number`)return Ti(`#`+Ei(e)+Ei(t)+Ei(n));if(typeof e==`object`&&t===void 0&&n===void 0)return Ti(`#`+Ei(e.red)+Ei(e.green)+Ei(e.blue));throw new Xr(6)}function Ni(e,t,n,r){if(typeof e==`string`&&typeof t==`number`){var i=Si(e);return`rgba(`+i.red+`,`+i.green+`,`+i.blue+`,`+t+`)`}if(typeof e==`number`&&typeof t==`number`&&typeof n==`number`&&typeof r==`number`)return r>=1?Mi(e,t,n):`rgba(`+e+`,`+t+`,`+n+`,`+r+`)`;if(typeof e==`object`&&t===void 0&&n===void 0&&r===void 0)return e.alpha>=1?Mi(e.red,e.green,e.blue):`rgba(`+e.red+`,`+e.green+`,`+e.blue+`,`+e.alpha+`)`;throw new Xr(7)}var Pi=function(e){return typeof e.red==`number`&&typeof e.green==`number`&&typeof e.blue==`number`&&(typeof e.alpha!=`number`||e.alpha===void 0)},Fi=function(e){return typeof e.red==`number`&&typeof e.green==`number`&&typeof e.blue==`number`&&typeof e.alpha==`number`},Ii=function(e){return typeof e.hue==`number`&&typeof e.saturation==`number`&&typeof e.lightness==`number`&&(typeof e.alpha!=`number`||e.alpha===void 0)},Li=function(e){return typeof e.hue==`number`&&typeof e.saturation==`number`&&typeof e.lightness==`number`&&typeof e.alpha==`number`};function Ri(e){if(typeof e!=`object`)throw new Xr(8);if(Fi(e))return Ni(e);if(Pi(e))return Mi(e);if(Li(e))return ji(e);if(Ii(e))return Ai(e);throw new Xr(8)}function zi(e,t,n){return function(){var r=n.concat(Array.prototype.slice.call(arguments));return r.length>=t?e.apply(this,r):zi(e,t,r)}}function Bi(e){return zi(e,e.length,[])}function Vi(e,t){if(t===`transparent`)return t;var n=wi(t);return Ri(jr({},n,{hue:n.hue+parseFloat(e)}))}Bi(Vi);function Hi(e,t,n){return Math.max(e,Math.min(t,n))}function Ui(e,t){if(t===`transparent`)return t;var n=wi(t);return Ri(jr({},n,{lightness:Hi(0,1,n.lightness-parseFloat(e))}))}var Wi=Bi(Ui);function Gi(e,t){if(t===`transparent`)return t;var n=wi(t);return Ri(jr({},n,{saturation:Hi(0,1,n.saturation-parseFloat(e))}))}Bi(Gi);function U(e){if(e===`transparent`)return 0;var t=Si(e),n=Object.keys(t).map(function(e){var n=t[e]/255;return n<=.03928?n/12.92:((n+.055)/1.055)**2.4}),r=n[0],i=n[1],a=n[2];return parseFloat((.2126*r+.7152*i+.0722*a).toFixed(3))}function W(e,t){var n=U(e),r=U(t);return parseFloat((n>r?(n+.05)/(r+.05):(r+.05)/(n+.05)).toFixed(2))}function Ki(e,t){if(t===`transparent`)return t;var n=wi(t);return Ri(jr({},n,{lightness:Hi(0,1,n.lightness+parseFloat(e))}))}var qi=Bi(Ki);function Ji(e,t,n){if(t===`transparent`)return n;if(n===`transparent`)return t;if(e===0)return n;var r=Si(t),i=jr({},r,{alpha:typeof r.alpha==`number`?r.alpha:1}),a=Si(n),o=jr({},a,{alpha:typeof a.alpha==`number`?a.alpha:1}),s=i.alpha-o.alpha,c=parseFloat(e)*2-1,l=((c*s===-1?c:c+s)/(1+c*s)+1)/2,u=1-l;return Ni({red:Math.floor(i.red*l+o.red*u),green:Math.floor(i.green*l+o.green*u),blue:Math.floor(i.blue*l+o.blue*u),alpha:i.alpha*parseFloat(e)+o.alpha*(1-parseFloat(e))})}var Yi=Bi(Ji);function Xi(e,t){if(t===`transparent`)return t;var n=Si(t),r=typeof n.alpha==`number`?n.alpha:1;return Ni(jr({},n,{alpha:Hi(0,1,(r*100+parseFloat(e)*100)/100)}))}Bi(Xi);var Zi=`#000`,Qi=`#fff`;function $i(e,t,n,r){t===void 0&&(t=Zi),n===void 0&&(n=Qi),r===void 0&&(r=!0);var i=U(e)>.179,a=i?t:n;return!r||W(e,a)>=4.5?a:i?Zi:Qi}function ea(e,t){if(t===`transparent`)return t;var n=wi(t);return Ri(jr({},n,{saturation:Hi(0,1,n.saturation+parseFloat(e))}))}Bi(ea);function ta(e,t){return t===`transparent`?t:Ri(jr({},wi(t),{hue:parseFloat(e)}))}Bi(ta);function na(e,t){return t===`transparent`?t:Ri(jr({},wi(t),{lightness:parseFloat(e)}))}Bi(na);function ra(e,t){return t===`transparent`?t:Ri(jr({},wi(t),{saturation:parseFloat(e)}))}Bi(ra);function ia(e,t){return t===`transparent`?t:Yi(parseFloat(e),`rgb(0, 0, 0)`,t)}Bi(ia);function aa(e,t){return t===`transparent`?t:Yi(parseFloat(e),`rgb(255, 255, 255)`,t)}Bi(aa);function oa(e,t){if(t===`transparent`)return t;var n=Si(t),r=typeof n.alpha==`number`?n.alpha:1;return Ni(jr({},n,{alpha:Hi(0,1,(r*100-parseFloat(e)*100).toFixed(2)/100)}))}Bi(oa);var sa=o(((e,t)=>{var n=`__lodash_hash_undefined__`,r=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/,a=/^\./,o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,s=/[\\^$.*+?()[\]{}|]/g,c=/\\(\\)?/g,l=/^\[object .+?Constructor\]$/,u=typeof global==`object`&&global&&global.Object===Object&&global,d=typeof self==`object`&&self&&self.Object===Object&&self,f=u||d||Function(`return this`)();function p(e,t){return e?.[t]}function m(e){var t=!1;if(e!=null&&typeof e.toString!=`function`)try{t=!!(e+``)}catch{}return t}var h=Array.prototype,g=Function.prototype,_=Object.prototype,v=f[`__core-js_shared__`],y=function(){var e=/[^.]+$/.exec(v&&v.keys&&v.keys.IE_PROTO||``);return e?`Symbol(src)_1.`+e:``}(),b=g.toString,x=_.hasOwnProperty,S=_.toString,C=RegExp(`^`+b.call(x).replace(s,`\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,`$1.*?`)+`$`),w=f.Symbol,T=h.splice,E=ve(f,`Map`),ee=ve(Object,`create`),te=w?w.prototype:void 0,ne=te?te.toString:void 0;function D(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function O(){this.__data__=ee?ee(null):{}}function re(e){return this.has(e)&&delete this.__data__[e]}function ie(e){var t=this.__data__;if(ee){var r=t[e];return r===n?void 0:r}return x.call(t,e)?t[e]:void 0}function k(e){var t=this.__data__;return ee?t[e]!==void 0:x.call(t,e)}function A(e,t){var r=this.__data__;return r[e]=ee&&t===void 0?n:t,this}D.prototype.clear=O,D.prototype.delete=re,D.prototype.get=ie,D.prototype.has=k,D.prototype.set=A;function ae(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function j(){this.__data__=[]}function M(e){var t=this.__data__,n=pe(t,e);return n<0?!1:(n==t.length-1?t.pop():T.call(t,n,1),!0)}function N(e){var t=this.__data__,n=pe(t,e);return n<0?void 0:t[n][1]}function oe(e){return pe(this.__data__,e)>-1}function P(e,t){var n=this.__data__,r=pe(n,e);return r<0?n.push([e,t]):n[r][1]=t,this}ae.prototype.clear=j,ae.prototype.delete=M,ae.prototype.get=N,ae.prototype.has=oe,ae.prototype.set=P;function se(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function ce(){this.__data__={hash:new D,map:new(E||ae),string:new D}}function le(e){return _e(this,e).delete(e)}function ue(e){return _e(this,e).get(e)}function de(e){return _e(this,e).has(e)}function fe(e,t){return _e(this,e).set(e,t),this}se.prototype.clear=ce,se.prototype.delete=le,se.prototype.get=ue,se.prototype.has=de,se.prototype.set=fe;function pe(e,t){for(var n=e.length;n--;)if(Te(e[n][0],t))return n;return-1}function me(e,t){t=ye(t,e)?[t]:F(t);for(var n=0,r=t.length;e!=null&&n<r;)e=e[I(t[n++])];return n&&n==r?e:void 0}function he(e){return!L(e)||xe(e)?!1:(De(e)||m(e)?C:l).test(Ce(e))}function ge(e){if(typeof e==`string`)return e;if(ke(e))return ne?ne.call(e):``;var t=e+``;return t==`0`&&1/e==-1/0?`-0`:t}function F(e){return Ee(e)?e:Se(e)}function _e(e,t){var n=e.__data__;return be(t)?n[typeof t==`string`?`string`:`hash`]:n.map}function ve(e,t){var n=p(e,t);return he(n)?n:void 0}function ye(e,t){if(Ee(e))return!1;var n=typeof e;return n==`number`||n==`symbol`||n==`boolean`||e==null||ke(e)?!0:i.test(e)||!r.test(e)||t!=null&&e in Object(t)}function be(e){var t=typeof e;return t==`string`||t==`number`||t==`symbol`||t==`boolean`?e!==`__proto__`:e===null}function xe(e){return!!y&&y in e}var Se=we(function(e){e=Ae(e);var t=[];return a.test(e)&&t.push(``),e.replace(o,function(e,n,r,i){t.push(r?i.replace(c,`$1`):n||e)}),t});function I(e){if(typeof e==`string`||ke(e))return e;var t=e+``;return t==`0`&&1/e==-1/0?`-0`:t}function Ce(e){if(e!=null){try{return b.call(e)}catch{}try{return e+``}catch{}}return``}function we(e,t){if(typeof e!=`function`||t&&typeof t!=`function`)throw TypeError(`Expected a function`);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o),o};return n.cache=new(we.Cache||se),n}we.Cache=se;function Te(e,t){return e===t||e!==e&&t!==t}var Ee=Array.isArray;function De(e){var t=L(e)?S.call(e):``;return t==`[object Function]`||t==`[object GeneratorFunction]`}function L(e){var t=typeof e;return!!e&&(t==`object`||t==`function`)}function Oe(e){return!!e&&typeof e==`object`}function ke(e){return typeof e==`symbol`||Oe(e)&&S.call(e)==`[object Symbol]`}function Ae(e){return e==null?``:ge(e)}function je(e,t,n){var r=e==null?void 0:me(e,t);return r===void 0?n:r}t.exports=je})),ca=o(((e,t)=>{var n=`__lodash_hash_undefined__`,r=/[\\^$.*+?()[\]{}|]/g,i=/^\[object .+?Constructor\]$/,a=typeof global==`object`&&global&&global.Object===Object&&global,o=typeof self==`object`&&self&&self.Object===Object&&self,s=a||o||Function(`return this`)();function c(e,t){return e?.[t]}function l(e){var t=!1;if(e!=null&&typeof e.toString!=`function`)try{t=!!(e+``)}catch{}return t}var u=Array.prototype,d=Function.prototype,f=Object.prototype,p=s[`__core-js_shared__`],m=function(){var e=/[^.]+$/.exec(p&&p.keys&&p.keys.IE_PROTO||``);return e?`Symbol(src)_1.`+e:``}(),h=d.toString,g=f.hasOwnProperty,_=f.toString,v=RegExp(`^`+h.call(g).replace(r,`\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,`$1.*?`)+`$`),y=u.splice,b=ce(s,`Map`),x=ce(Object,`create`);function S(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function C(){this.__data__=x?x(null):{}}function w(e){return this.has(e)&&delete this.__data__[e]}function T(e){var t=this.__data__;if(x){var r=t[e];return r===n?void 0:r}return g.call(t,e)?t[e]:void 0}function E(e){var t=this.__data__;return x?t[e]!==void 0:g.call(t,e)}function ee(e,t){var r=this.__data__;return r[e]=x&&t===void 0?n:t,this}S.prototype.clear=C,S.prototype.delete=w,S.prototype.get=T,S.prototype.has=E,S.prototype.set=ee;function te(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function ne(){this.__data__=[]}function D(e){var t=this.__data__,n=oe(t,e);return n<0?!1:(n==t.length-1?t.pop():y.call(t,n,1),!0)}function O(e){var t=this.__data__,n=oe(t,e);return n<0?void 0:t[n][1]}function re(e){return oe(this.__data__,e)>-1}function ie(e,t){var n=this.__data__,r=oe(n,e);return r<0?n.push([e,t]):n[r][1]=t,this}te.prototype.clear=ne,te.prototype.delete=D,te.prototype.get=O,te.prototype.has=re,te.prototype.set=ie;function k(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function A(){this.__data__={hash:new S,map:new(b||te),string:new S}}function ae(e){return se(this,e).delete(e)}function j(e){return se(this,e).get(e)}function M(e){return se(this,e).has(e)}function N(e,t){return se(this,e).set(e,t),this}k.prototype.clear=A,k.prototype.delete=ae,k.prototype.get=j,k.prototype.has=M,k.prototype.set=N;function oe(e,t){for(var n=e.length;n--;)if(pe(e[n][0],t))return n;return-1}function P(e){return!he(e)||ue(e)?!1:(me(e)||l(e)?v:i).test(de(e))}function se(e,t){var n=e.__data__;return le(t)?n[typeof t==`string`?`string`:`hash`]:n.map}function ce(e,t){var n=c(e,t);return P(n)?n:void 0}function le(e){var t=typeof e;return t==`string`||t==`number`||t==`symbol`||t==`boolean`?e!==`__proto__`:e===null}function ue(e){return!!m&&m in e}function de(e){if(e!=null){try{return h.call(e)}catch{}try{return e+``}catch{}}return``}function fe(e,t){if(typeof e!=`function`||t&&typeof t!=`function`)throw TypeError(`Expected a function`);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o),o};return n.cache=new(fe.Cache||k),n}fe.Cache=k;function pe(e,t){return e===t||e!==e&&t!==t}function me(e){var t=he(e)?_.call(e):``;return t==`[object Function]`||t==`[object GeneratorFunction]`}function he(e){var t=typeof e;return!!e&&(t==`object`||t==`function`)}t.exports=fe})),la=c(sa()),ua=c(ca()),da=(e,t,n)=>{if(t!==n){let r=Math.abs(t-n)/100*.05;return t>n?Wi(r,e):qi(r,e)}return e},fa=(e,t,n,r)=>{let i;if(e===void 0)i=r===`dark`?n===void 0?600:500:700;else if(i=parseInt(e.toString(),10),isNaN(i))throw TypeError(`Error: unexpected '${typeof e}' type for color shade "${e}"`);return i+(t||0)},pa=(e,t,n,r,i)=>{let a=fa(t,n,r,i),o=e[a];if(!o){let t=Object.keys(e).map(e=>parseInt(e,10)).reduce((e,t)=>Math.abs(t-a)<Math.abs(e-a)?t:e);o=da(e[t],a,t)}return o},ma=e=>{let t=[`currentcolor`,`inherit`,`transparent`].includes(e);if(!t)try{t=!!mr(e)}catch{t=!1}return t};function ha(e,t,n=0){if(typeof e!=`number`||isNaN(e))throw Error(`Target must be a number.`);if(!Array.isArray(t))throw Error(`Second argument must be an array.`);let r=n,i=t.length-1;if(e<t[r])return r;if(e>t[i])return i;for(;r<=i;){let n=Math.floor((r+i)/2);if(t[n]===e)return n;t[n]<e?r=n+1:i=n-1}return t[r]-e<e-t[i]?r:i}var ga={100:1.08,200:1.2,300:1.35,400:2,500:2.8,600:3.3,700:5,800:10,900:13,1e3:16,1100:17.5,1200:19},_a=(0,ua.default)(e=>{let t=kr(`#FFF`,e,`#000`),n=e=>t(e/200),r=[],i=[];for(let e=0;e<=200;e++){let t=Ar(n(e));r.push(t),i.push(W(`#FFF`,t))}let a={},o=0;for(let e in ga)if(Object.prototype.hasOwnProperty.call(ga,e)){let t=ga[e],n=ha(t,i,o);o=n+1,a[e]=r[n]}return a}),va=(e,t,n,r,i,a,o,s)=>{let c,l=e[i]||i;if(Object.prototype.hasOwnProperty.call(t,l)&&(l=t[l]),typeof l==`object`?c=pa(l,a,o,s,r):ma(l)&&(a===void 0?c=l:(l=_a(l),c=pa(l,a,o,s,r))),c&&s){let e=s>1?n[s]:s;if(e===void 0)throw Error("Error: invalid `transparency` parameter");c=Ni(c,e)}return c},ya=(e,t)=>{let n=(0,la.default)(e,t);if(typeof n==`string`)return n;throw n===void 0?ReferenceError(`Error: color variable '${t}' is not defined`):TypeError(`Error: unexpected '${typeof n}' type for color variable "${t}"`)},ba=e=>{let t;try{let[n,r,i,a]=mr(e);t={property:Ar(`rgb(${n}, ${r}, ${i})`),transparency:a}}catch{let n=/rgba\s*\(\s*(?<property>[#\w.]+)\s*,\s*(?<alpha>[\w.]+)\s*\)/gu.exec(e);if(n&&n.groups)t={property:n.groups.property,transparency:parseFloat(n.groups.alpha)};else throw Error(`Error: invalid \`rgba\` value "${e}"`)}return t},xa=(e,t,n)=>{let r={},i=ya(t,e);if(i.startsWith(`rgba`)){let e=ba(i);i=e.property,r.transparency=e.transparency}let[a,o]=i.split(/\.(?<value>.*)/u);return a===`palette`?r.hue=ya(n,o):(r.hue=a,o!==void 0&&(r.shade=parseInt(o,10))),r},Sa=new WeakMap,Ca={colors:0,palette:0,opacity:0};Sa.set(dr.colors,Ca.colors),Sa.set(dr.palette,Ca.palette),Sa.set(dr.opacity,Ca.opacity);var wa=({dark:e,hue:t,light:n,offset:r,shade:i,theme:a,transparency:o,variable:s})=>{let c;a.colors&&(c=Sa.get(a.colors),c===void 0&&(c=++Ca.colors,Sa.set(a.colors,c)));let l;a.opacity&&(l=Sa.get(a.opacity),l===void 0&&(l=++Ca.opacity,Sa.set(a.opacity,l)));let u;a.palette&&(u=Sa.get(a.palette),u===void 0&&(u=++Ca.palette,Sa.set(a.palette,u)));let d=`{${c},${u},${l}}`;return s!==void 0&&(d+=`,${s}`),t!==void 0&&(d+=`,${t}`),i!==void 0&&(d+=`,${i}`),r!==void 0&&(d+=`,${r}`),o!==void 0&&(d+=`,${o}`),e!==void 0&&(d+=`,${JSON.stringify(e)}`),n!==void 0&&(d+=`,${JSON.stringify(n)}`),d},G=(0,ua.default)(({dark:e,hue:t,light:n,offset:r,shade:i,theme:a,transparency:o,variable:s})=>{let c,l=a.palette&&Object.keys(a.palette).length>0?a.palette:dr.palette,{base:u,variables:d,...f}=a.colors&&Object.keys(a.colors).length>0?a.colors:dr.colors,p=u===`dark`?`dark`:`light`,m=p===`dark`?e:n,h=m?.hue||t,g=m?.shade===void 0?i:m.shade,_=m?.offset===void 0?r:m.offset,v=m?.transparency===void 0?o:m.transparency;if(s){let e=xa(s,d?.[p]?d[p]:dr.colors.variables[p],l);h=e.hue,g=e.shade,v=v===void 0?e.transparency:v}if(h&&(c=va(f,l,a.opacity&&Object.keys(a.opacity).length>0?a.opacity:dr.opacity,p,h,g,_,v)),c===void 0)throw Error("Error: invalid `getColor` parameters");return c},({dark:e,hue:t,light:n,offset:r,shade:i,theme:a,transparency:o,variable:s})=>wa({dark:e,hue:t,light:n,offset:r,shade:i,theme:a,transparency:o,variable:s})),Ta={black:`#000`,white:`#fff`,product:{support:`#00a656`,message:`#37b8af`,explore:`#30aabc`,gather:`#f6c8be`,guide:`#eb4962`,connect:`#ff6224`,chat:`#f79a3e`,talk:`#efc93d`,sell:`#c38f00`},grey:{100:`#f8f9f9`,200:`#e9ebed`,300:`#d8dcde`,400:`#c2c8cc`,500:`#87929d`,600:`#68737d`,700:`#49545c`,800:`#2f3941`},blue:{100:`#edf7ff`,200:`#cee2f2`,300:`#adcce4`,400:`#5293c7`,500:`#337fbd`,600:`#1f73b7`,700:`#144a75`,800:`#0f3554`},red:{100:`#fff0f1`,200:`#f5d5d8`,300:`#f5b5ba`,400:`#e35b66`,500:`#d93f4c`,600:`#cc3340`,700:`#8c232c`,800:`#681219`},yellow:{100:`#fff7ed`,200:`#ffeedb`,300:`#fed6a8`,400:`#ffb057`,500:`#f79a3e`,600:`#ed8f1c`,700:`#ad5918`,800:`#703815`},green:{100:`#edf8f4`,200:`#d1e8df`,300:`#aecfc2`,400:`#5eae91`,500:`#228f67`,600:`#038153`,700:`#186146`,800:`#0b3b29`},kale:{100:`#f5fcfc`,200:`#daeded`,300:`#bdd9d7`,400:`#90bbbb`,500:`#498283`,600:`#17494d`,700:`#03363d`,800:`#012b30`},fuschia:{400:`#d653c2`,600:`#a81897`,M400:`#cf62a8`,M600:`#a8458c`},pink:{400:`#ec4d63`,600:`#d42054`,M400:`#d57287`,M600:`#b23a5d`},crimson:{400:`#e34f32`,600:`#c72a1c`,M400:`#cc6c5b`,M600:`#b24a3c`},orange:{400:`#de701d`,600:`#bf5000`,M400:`#d4772c`,M600:`#b35827`},lemon:{400:`#ffd424`,600:`#ffbb10`,M400:`#e7a500`,M600:`#c38f00`},lime:{400:`#43b324`,600:`#2e8200`,M400:`#519e2d`,M600:`#47782c`},mint:{400:`#00a656`,600:`#058541`,M400:`#299c66`,M600:`#2e8057`},teal:{400:`#02a191`,600:`#028079`,M400:`#2d9e8f`,M600:`#3c7873`},azure:{400:`#3091ec`,600:`#1371d6`,M400:`#5f8dcf`,M600:`#3a70b2`},royal:{400:`#5d7df5`,600:`#3353e2`,M400:`#7986d8`,M600:`#4b61c3`},purple:{400:`#b552e2`,600:`#6a27b8`,M400:`#b072cc`,M600:`#9358b0`}},Ea=(e,t,n)=>{if(t!==n){let r=Math.abs(t-n)/100*.05;return t>n?Wi(r,e):qi(r,e)}return e},Da=new WeakMap,Oa={colors:0,palette:0};Da.set(dr.colors,Oa.colors),Da.set(dr.palette,Oa.palette);var ka=({hue:e,shade:t,theme:n,transparency:r})=>{let i=`${typeof e==`object`?JSON.stringify(e):e}`;if(t!==void 0&&(i+=`,${t}`),n!==void 0){let e;n.colors&&(e=Da.get(n.colors),e===void 0&&(e=++Oa.colors,Da.set(n.colors,e)));let t;n.palette&&(t=Da.get(n.palette),t===void 0&&(t=++Oa.palette,Da.set(n.palette,t))),i+=`,{${e},${t}}`}return r!==void 0&&(i+=`,${r}`),i},Aa=(0,ua.default)((e,t=600,n,r)=>{let i;if(isNaN(t))return;let a={background:Ta.white,foreground:Ta.grey[800],...n&&n.palette?{...n.palette,...Ta}:{...dr.palette,...Ta}},o=n&&n.colors?n.colors:dr.colors,s;if(s=typeof e==`string`&&o[e]||e,Object.prototype.hasOwnProperty.call(a,s)&&(s=a[s]),typeof s==`object`){if(i=s[t],!i){let e=Object.keys(s).map(e=>parseInt(e,10)).reduce((e,n)=>Math.abs(n-t)<Math.abs(e-t)?n:e);i=Ea(s[e],t,e)}}else i=Ea(s,t,600);return r&&(i=Ni(i,r)),i},(e,t,n,r)=>ka({hue:e,shade:t,theme:n,transparency:r})),ja=({boxShadow:e,inset:t=!1,color:n={variable:`border.primaryEmphasis`},shadowWidth:r=`md`,spacerColor:i={variable:`background.default`},spacerWidth:a=`xs`,theme:o=dr,...s})=>{let c=s,l=c.hue?Aa(c.hue,c.shade,o):G({...n,theme:o}),u=o.shadows[r](l);if(a===null)return`${t?`inset`:``} ${u}`;let d=c.spacerHue?Aa(c.spacerHue,c.spacerShade,o):G({...i,theme:o}),f=`
    ${t?`inset`:``} ${o.shadows[a](d)},
    ${t?`inset`:``} ${u}`;return e?`${f}, ${e}`:f},Ma=({theme:e,value:t})=>G(/^[a-z]+\.[a-z]+$/giu.test(t)?{variable:t,theme:e}:{hue:t,theme:e});function Na(e,t){let[n,r]=si(e.toString()),[i,a]=si(t.toString());if(r&&r!==`px`)throw Error(`Unexpected \`height\` with '${r}' units.`);if(a&&a!==`px`)throw Error(`Unexpected \`fontSize\` with '${a}' units.`);return n/i}var Pa=(e,t,n,r,i=!0)=>{let a=i?t[n]:void 0;return(0,g.useMemo)(()=>{if(i){if(n===`children`)throw Error("Error: `children` is not a valid `useText` prop.");if(a===null||a===``)throw Error(e.displayName?`Error: you must provide a valid \`${n}\` text value for <${e.displayName}>.`:`Error: you must provide a valid \`${n}\` text value.`);if(a===void 0)return r}return a},[e.displayName,a,n,r,i])},Fa=`&:focus-visible`,Ia=({condition:e=!0,selector:t=Fa,shadowWidth:n=`md`,spacerWidth:r=`xs`,styles:{boxShadow:i,...a}={},theme:o,...s})=>{let c=e?ja({boxShadow:i,shadowWidth:n,spacerWidth:r,theme:o,...s}):i,l,u;return r===null?l=o.shadowWidths[n]:(l=`${H(`${o.shadowWidths[n]} - ${o.shadowWidths[r]}`)} solid transparent`,u=o.shadowWidths[r]),z([`&:focus{outline:none;}`,`{outline:`,`;outline-offset:`,`;box-shadow:`,`;`,`}`],t,l,u,c,a)},La=B(({children:e,theme:t,...n})=>(0,g.cloneElement)(g.Children.only(e),n)).withConfig({displayName:`StyledBaseIcon`,componentId:`sc-1moykgb-0`})([``]),Ra=B.div.attrs({"data-garden-id":`accordions.accordion`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledAccordion`,componentId:`sc-niv9ic-0`})([``,`;`],V),za=(0,g.createContext)(void 0),Ba=()=>{let e=(0,g.useContext)(za);if(e===void 0)throw Error(`This component must be rendered within a Accordion component`);return e},Va=(0,g.createContext)(void 0),Ha=()=>{let e=(0,g.useContext)(Va);if(e===void 0)throw Error(`This component must be rendered within an Accordion component`);return e},Ua=`accordions.panel`,Wa=B.section.attrs(()=>({"data-garden-id":Ua,"data-garden-version":`9.15.8`})).withConfig({displayName:`StyledPanel`,componentId:`sc-1piryze-0`})([`display:grid;transition:`,`;overflow:hidden;`,` `,` `,`;`],e=>(e.$isAnimated??!0)&&`padding 0.25s ease-in-out, grid-template-rows 0.25s ease-in-out`,e=>{let{theme:t,$isCompact:n,$isExpanded:r}=e,{base:i}=t.space,a=i*2,o=i*5,s=i*8;return n&&(a=i*2,o=i*3,s=i*4),r===!1&&(a=0,s=0),z([`grid-template-rows:`,`fr;border-bottom:`,`;padding:`,`px `,`px `,`px;line-height:`,`;font-size:`,`;`],+!!r,t.borders.sm,a,o,s,Na(i*5,t.fontSizes.md),t.fontSizes.md)},({theme:e,$isBare:t})=>z([`border-bottom-color:`,`;`],t?`transparent`:G({theme:e,variable:`border.default`})),V),Ga=B.div.attrs({"data-garden-id":`accordions.section`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledSection`,componentId:`sc-v2t9bd-0`})([`&:last-child `,`{border:none;}`,`;`],Wa,V),Ka=B.button.attrs({"data-garden-id":`accordions.button`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledButton`,componentId:`sc-xj3hy7-0`})([`transition:color 0.1s ease-in-out;outline:none;border:none;background:transparent;padding:`,`;width:100%;text-align:`,`;line-height:`,`;font-family:inherit;font-size:`,`;font-weight:`,`;`,` &::-moz-focus-inner{border:0;}&:hover{cursor:`,`;}`,`;`],e=>e.$isCompact?`${e.theme.space.base*2}px ${e.theme.space.base*3}px`:`${e.theme.space.base*5}px`,e=>e.theme.rtl?`right`:`left`,e=>Na(e.theme.space.base*5,e.theme.fontSizes.md),e=>e.theme.fontSizes.md,e=>e.theme.fontWeights.semibold,({$isCollapsible:e,$isExpanded:t,$isHovered:n,theme:r})=>{let i=e||!t,a=G({theme:r,variable:i&&n?`foreground.primary`:`foreground.default`});return z([`color:`,`;&:hover{cursor:`,`;color:`,`;}`],a,i&&`pointer`,i&&a)},e=>(e.$isCollapsible||!e.$isExpanded)&&`pointer`,V),qa=B.div.attrs({"data-garden-id":`accordions.header`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledHeader`,componentId:`sc-2c6rbr-0`})([`display:flex;align-items:center;transition:box-shadow 0.1s ease-in-out;font-size:`,`;&:hover{cursor:`,`;}`,` `,`;`],e=>e.theme.fontSizes.md,e=>(e.$isCollapsible||!e.$isExpanded)&&`pointer`,e=>Ia({theme:e.theme,inset:!0,selector:`&:has(${Ka}:focus-visible)`}),V),Ja=B.div.attrs({"data-garden-id":`accordions.step_inner_panel`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledInnerPanel`,componentId:`sc-8nbueg-0`})([`overflow:hidden;line-height:inherit;font-size:inherit;`,`[aria-hidden='true'] > &{transition:`,`;visibility:hidden;}`,`[aria-hidden='false'] > &{visibility:visible;}`,`;`],Wa,e=>e.$isAnimated&&`visibility 0s 0.25s`,Wa,V),Ya=B(La).attrs({"data-garden-id":`accordions.rotate_icon`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledRotateIcon`,componentId:`sc-hp435q-0`})([`transform:`,`;transition:transform 0.25s ease-in-out,color 0.1s ease-in-out;box-sizing:content-box;padding:`,`;width:`,`;min-width:`,`;height:`,`;vertical-align:middle;`,` `,`;`],e=>e.$isRotated&&`rotate(${e.theme.rtl?`-`:`+`}180deg)`,e=>e.$isCompact?`${e.theme.space.base*1.5}px ${e.theme.space.base*3}px`:`${e.theme.space.base*5}px`,e=>e.theme.iconSizes.md,e=>e.theme.iconSizes.md,e=>e.theme.iconSizes.md,({$isCollapsible:e,$isHovered:t,$isRotated:n,theme:r})=>{let i=e||!n,a=G({theme:r,variable:i&&t?`foreground.primary`:`foreground.subtle`});return z([`color:`,`;&:hover{color:`,`;}`],a,i&&a)},V),Xa=(0,g.createContext)(void 0),Za=()=>{let e=(0,g.useContext)(Xa);if(e===void 0)throw Error(`This component must be rendered within a Accordion.Header component`);return e},Qa=(0,g.forwardRef)((e,t)=>{let n=Ha(),{isCompact:r,isCollapsible:i,expandedSections:a}=Ba(),o=a.includes(n),{isHovered:s,otherTriggerProps:c}=Za();return g.createElement(Ka,Object.assign({ref:t,$isCompact:r,$isHovered:s,$isExpanded:o,$isCollapsible:i},c,e))});Qa.displayName=`Accordion.Label`;var $a=Qa,eo=(0,g.forwardRef)(({role:e,children:t,...n},r)=>{let{isAnimated:i,isBare:a,isCompact:o,expandedSections:s,getPanelProps:c}=Ba(),l=Ha(),u=s.includes(l);return g.createElement(Wa,Object.assign({inert:u?void 0:``,$isAnimated:i,$isBare:a,$isCompact:o,$isExpanded:u},c({role:e===void 0?null:`region`,ref:r,value:l,...n})),g.createElement(Ja,{$isAnimated:i},t))});eo.displayName=`Accordion.Panel`;var to=eo,no=(0,g.forwardRef)((e,t)=>g.createElement(Ga,Object.assign({ref:t},e)));no.displayName=`Accordion.Section`;var ro=no,io=o((e=>{var t=u(),n=Symbol.for(`react.element`),r=Symbol.for(`react.fragment`),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var s,c={},l=null,u=null;for(s in r!==void 0&&(l=``+r),t.key!==void 0&&(l=``+t.key),t.ref!==void 0&&(u=t.ref),t)i.call(t,s)&&!o.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)c[s]===void 0&&(c[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:u,props:c,_owner:a.current}}e.Fragment=r,e.jsx=s,e.jsxs=s})),K=o(((e,t)=>{t.exports=io()}))(),ao=(0,g.forwardRef)((e,t)=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,focusable:`false`,viewBox:`0 0 20 20`,ref:t,...e,children:(0,K.jsx)(`path`,{fill:`currentColor`,d:`M16.077 6.91a.834.834 0 0 1 1.179 1.18l-5.488 5.488a2.5 2.5 0 0 1-3.536 0L2.744 8.089a.834.834 0 0 1 1.179-1.178l5.487 5.488a.834.834 0 0 0 1.179 0z`})})),oo=(e,t=!1)=>t?e.iconSizes.md:e.space.md,so=(e,t=!1)=>B(e)`
  width: ${e=>oo(e.theme,t)};
  height: ${e=>oo(e.theme,t)};
`,co=so(ao),lo=(0,g.forwardRef)((e,t)=>{let{onClick:n,onMouseOver:r,onMouseOut:i,role:a,children:o,...s}=e,{level:c,isCompact:l,isCollapsible:u,getHeaderProps:d,getTriggerProps:f,expandedSections:p}=Ba(),m=Ha(),[h,_]=(0,g.useState)(!1),v=p.includes(m),{onClick:y,onKeyDown:b,...x}=f({type:`button`,value:m}),S=(0,g.useMemo)(()=>({isHovered:h,otherTriggerProps:x}),[h,x]);return(0,K.jsx)(Xa.Provider,{value:S,children:(0,K.jsxs)(qa,{$isCollapsible:u,$isExpanded:v,...d({ref:t,"aria-level":c,role:a==null?a:`heading`,onClick:w(n,y),onMouseOver:w(r,()=>_(!0)),onMouseOut:w(i,()=>_(!1)),...s}),children:[o,(0,K.jsx)(Ya,{$isCompact:l,$isHovered:h,$isRotated:v,$isCollapsible:u,onMouseOver:w(r,()=>_(!0)),onMouseOut:w(i,()=>_(!1)),children:(0,K.jsx)(co,{})})]})})});lo.displayName=`Accordion.Header`;var uo=lo,fo=(0,g.forwardRef)(({children:e,isBare:t,isCompact:n,isAnimated:r=!0,isExpandable:i,isCollapsible:a=!0,level:o,onChange:s,defaultExpandedSections:c,expandedSections:l,...u},d)=>{let{sections:f,sectionChildren:p}=(0,g.useMemo)(()=>g.Children.toArray(e).filter(g.isValidElement).map((e,t)=>(0,K.jsx)(Va.Provider,{value:t,children:e},t)).reduce((e,t,n)=>(e.sectionChildren.push(t),e.sections.push(n),e),{sectionChildren:[],sections:[]}),[e]),{expandedSections:m,getHeaderProps:h,getTriggerProps:_,getPanelProps:v}=re({sections:f,defaultExpandedSections:c,expandedSections:l,collapsible:a,expandable:i||!1,onChange:s}),y=(0,g.useMemo)(()=>({level:o,isBare:t,isCompact:n,isAnimated:r,isCollapsible:a,getPanelProps:v,getHeaderProps:h,getTriggerProps:_,expandedSections:m}),[o,t,n,r,a,v,h,_,m]);return(0,K.jsx)(za.Provider,{value:y,children:(0,K.jsx)(Ra,{ref:d,...u,children:p})})});fo.displayName=`Accordion`;var po=fo;po.Header=uo,po.Label=$a,po.Panel=to,po.Section=ro;var mo=(0,g.forwardRef)((e,t)=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,focusable:`false`,viewBox:`0 0 20 20`,ref:t,...e,children:(0,K.jsx)(`path`,{fill:`currentColor`,d:`M14.827 5.244a.834.834 0 0 1 1.179 1.179l-7.917 7.916a.833.833 0 0 1-1.178 0l-2.917-2.916a.834.834 0 0 1 1.179-1.179L7.5 12.571z`})})),ho=[`small`,`medium`,`large`];[...ho];var go=`typography.font`;[...ho];var _o={small:`sm`,medium:`md`,large:`lg`,extralarge:`xl`,"2xlarge":`xxl`,"3xlarge":`xxxl`},vo=({$hue:e,$isBold:t,$isMonospace:n,$size:r,theme:i})=>{let a=r??`inherit`,o=n&&[`inherit`,`small`,`medium`,`large`].indexOf(a)!==-1,s=o&&i.fonts.mono,c=i.rtl?`rtl`:`ltr`,l=e?Ma({theme:i,value:e}):void 0,u,d,f;if(o){if(a===`inherit`)u=`calc(1em - 1px)`,f=`normal`;else{let e=_o[a];u=H(`${i.fontSizes[e]} - 1px`),f=H(`${i.lineHeights[e]} - 1px`)}}else if(a!==`inherit`){let e=_o[a];u=i.fontSizes[e],f=i.lineHeights[e]}return t===!0?d=i.fontWeights.semibold:(t===!1||a!==`inherit`)&&(d=i.fontWeights.regular),z([`transition:color 0.1s ease-in-out;line-height:`,`;color:`,`;font-family:`,`;font-size:`,`;font-weight:`,`;direction:`,`;`],f,l,s,u,d,c)},yo=B.div.attrs(()=>({"data-garden-id":go,"data-garden-version":`9.15.8`})).withConfig({displayName:`StyledFont`,componentId:`sc-1iildbo-0`})([``,`;&[hidden]{display:inline;`,`;}`,`;`],e=>!e.hidden&&vo(e),ci(),V),bo=`typography.icon`,xo=e=>{let t=e.$isStart&&`${e.theme.space.base*2}px`,n=e.theme.iconSizes.md;return z([`margin-`,`:`,`;width:`,`;height:`,`;`],e.theme.rtl?`left`:`right`,t,n,n)},So=B(La).attrs({"data-garden-id":bo,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledIcon`,componentId:`sc-10rfb5b-0`})([`position:relative;top:-1px;vertical-align:middle;`,`;`,`;`],e=>xo(e),V),Co=e=>g.createElement(So,Object.assign({$isStart:!0},e));Co.displayName=`Span.StartIcon`;var wo=Co,To=e=>g.createElement(So,e);To.displayName=`Span.Icon`;var Eo=To,Do=(0,g.forwardRef)(({hue:e,isBold:t,isMonospace:n,tag:r=`span`,...i},a)=>g.createElement(yo,Object.assign({$hue:e,$isBold:t,$isMonospace:n,$size:`inherit`,as:r,ref:a},i)));Do.displayName=`Span`,Do.propTypes={tag:O.default.any,isBold:O.default.bool,isMonospace:O.default.bool,hue:O.default.string};var Oo=Do;Oo.Icon=Eo,Oo.StartIcon=wo;var ko;function Ao(){return Ao=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ao.apply(null,arguments)}var jo=function(e){return g.createElement(`svg`,Ao({xmlns:`http://www.w3.org/2000/svg`,width:12,height:12,focusable:`false`,viewBox:`0 0 12 12`,"aria-hidden":`true`},e),ko||=g.createElement(`g`,{fill:`none`,stroke:`currentColor`},g.createElement(`circle`,{cx:6,cy:6,r:5.5}),g.createElement(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M5.5 3v3.5H8`})))},Mo;function No(){return No=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},No.apply(null,arguments)}var Po=function(e){return g.createElement(`svg`,No({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),Mo||=g.createElement(`g`,{fill:`none`,stroke:`currentColor`},g.createElement(`circle`,{cx:8,cy:8,r:7.5}),g.createElement(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M7.5 3v5.5H11`})))},Fo;function Io(){return Io=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Io.apply(null,arguments)}var Lo=function(e){return g.createElement(`svg`,Io({xmlns:`http://www.w3.org/2000/svg`,width:12,height:12,focusable:`false`,viewBox:`0 0 12 12`,"aria-hidden":`true`},e),Fo||=g.createElement(`path`,{fill:`currentColor`,d:`M2.146 6.854a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L3.707 6H9.5a.5.5 0 0 1 0 1H3.707l1.147 1.146a.5.5 0 1 1-.708.708l-2-2Z`}))},Ro;function zo(){return zo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zo.apply(null,arguments)}var Bo=function(e){return g.createElement(`svg`,zo({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),Ro||=g.createElement(`path`,{fill:`currentColor`,d:`M3.146 8.854a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L4.707 8H12.5a.5.5 0 0 1 0 1H4.707l2.147 2.146a.5.5 0 1 1-.708.707l-3-3Z`}))},Vo=[`extraextrasmall`,`extrasmall`,`small`,`medium`,`large`],Ho=[`available`,`away`,`transfers`,`offline`],Uo=B.span.attrs({"data-garden-id":`avatars.text`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledText`,componentId:`sc-1a6hivh-0`})([`overflow:hidden;text-align:center;white-space:nowrap;`,`;`],V),[Wo,Go,Ko,qo,Jo]=Vo,Yo=.25,Xo={active:{hue:`crimson`,light:{shade:700},dark:{shade:600}},available:{hue:`mint`,light:{shade:500},dark:{shade:400}},away:{hue:`orange`,light:{shade:500},dark:{shade:400}},transfers:{hue:`azure`,light:{shade:500},dark:{shade:400}},offline:{hue:`grey`,light:{shade:500},dark:{shade:400}}};function Zo(e,t){if(t===void 0)return`transparent`;let n=Xo[t];return n?G({...n,theme:e}):`transparent`}function Qo(e){return e.$size===Wo?H(`${e.theme.shadowWidths.sm} - 1`):e.theme.shadowWidths.sm}function $o(e,t){let n=e.$type===`active`;switch(e.$size){case Wo:return H(`${e.theme.space.base}px - ${t}`);case Go:return H(`${e.theme.space.base*2}px - (${t} * 2)`);case Ko:return H(`${e.theme.space.base*3}px ${n?``:`- (${t} * 2)`}`);case qo:case Jo:return H(`${e.theme.space.base*4}px ${n?``:`- (${t} * 2)`}`);default:return`0`}}function es(e,t){return e.includes(t)}var ts=`avatars.status-indicator.base`,ns=Kn([`0%{opacity:0;}100%{opacity:1;}`]),rs=B.div.attrs({"data-garden-id":ts,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledStatusIndicatorBase`,componentId:`sc-1rininy-0`})([`transition:inherit;`,` `,` `,`;`],e=>{let t={...e,$size:e.$size??`medium`},n=Qo(t),r=$o(t,n);return z([`border:`,` `,`;border-radius:`,`;min-width:`,`;height:`,`;line-height:`,`;& > svg{position:absolute;top:-`,`;inset-inline-start:-`,`;transform-origin:50% 50%;animation:`,` `,`s;max-height:unset;&[data-icon-status='transfers']{transform:scale(`,`,1);inset-inline-start:`,`;}&[data-icon-status='away'] circle{display:none;}}`],n,e.theme.borderStyles.solid,r,r,r,r,n,n,ns,Yo,e.theme.rtl?-1:1,e.$size===`extrasmall`?`-1px`:void 0)},({theme:e,$type:t})=>{let n=G({variable:`foreground.onEmphasis`,theme:e}),r,i;return t===`offline`?(i=Zo(e,t),r=G({variable:`background.default`,theme:e})):(r=Zo(e,t),i=r),z([`border-color:`,`;background-color:`,`;color:`,`;`],i,r,n)},V),is=`avatars.status_indicator`,[as,os,ss,cs,ls]=Vo,us=B(rs).attrs(()=>({"data-garden-id":is,"data-garden-version":`9.15.8`})).withConfig({displayName:`StyledStatusIndicator`,componentId:`sc-16t9if3-0`})([``,` `,` `,`;`],e=>{let t=e.$size??`medium`,n=t!==as,r=t===os?`${e.theme.space.base*2}px`:void 0,i=Qo(e),a=`0`;return t===ss?a=H(`${e.theme.space.base+1}px - (${i} * 2)`):es([cs,ls],t)&&(a=H(`${e.theme.space.base+3}px - (${i} * 2)`)),z([`max-width:calc(2em + (`,` * 3));box-sizing:content-box;overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap;font-size:`,`;font-weight:`,`;& > span{display:`,`;padding:0 `,`;max-width:2em;overflow:inherit;text-align:inherit;text-overflow:inherit;white-space:inherit;}& > svg{`,` width:`,`;height:`,`;}`],i,e.theme.fontSizes.xs,e.theme.fontWeights.semibold,n?`inline-block`:`none`,a,!n&&`display: none;`,r,r)},({theme:e,$type:t,$size:n,$borderColor:r,$surfaceColor:i})=>{let a=n===as?`xs`:`sm`,o,s=i?.includes(`.`)?G({variable:i,theme:e}):i;return o=t?e.shadows[a](s||G({theme:e,variable:`background.default`})):e.shadows[a](s||e.palette.white),z([`border-color:`,`;box-shadow:`,`;`],r,o)},V),ds=`avatars.avatar`,fs=e=>{let[t,n,r,i,a]=Vo,o=e.$size??`medium`,s=`${e.theme.space.base*-1}px`;switch(o){case t:case n:s=H(`${s}  + 3`);break;case r:case i:case a:s=H(`${s}  + 2`)}let c=Kn([`0%{transform:scale(.1);}`]);return z([`position:absolute;`,`:`,`;bottom:`,`;transition:all `,`s ease-in-out;`,``],e.theme.rtl?`left`:`right`,s,s,Yo,e.$status===`active`&&z([`animation:`,` `,`s ease-in-out;`],c,.375))},ps=({theme:e,$foregroundColor:t=e.palette.white,$surfaceColor:n=`background.default`,$backgroundColor:r=`transparent`,$status:i})=>{let a=Zo(e,i),o=Ma({theme:e,value:r}),s=Ma({theme:e,value:t}),c=i?Ma({theme:e,value:n}):`transparent`;return z([`box-shadow:`,`;background-color:`,`;&&{color:`,`;}& > svg,& `,`{color:`,`;}`],e.shadows.sm(a),o,c,Uo,s)},ms=e=>{let t,n,r,i,a;return e.$size===`extraextrasmall`?(t=`0 0 0 ${H(`${e.theme.shadowWidths.sm} - 1`)}`,n=e.$isSystem?H(`${e.theme.borderRadii.md} - 1`):`50%`,r=`${e.theme.space.base*4}px`,i=0,a=`${e.theme.space.base*3}px`):e.$size===`extrasmall`?(t=`inset 0 0 0 ${e.theme.shadowWidths.sm}`,n=e.$isSystem?H(`${e.theme.borderRadii.md} - 1`):`50%`,r=`${e.theme.space.base*6}px`,i=e.theme.fontSizes.sm,a=`${e.theme.space.base*3}px`):e.$size===`small`?(t=`inset 0 0 0 ${e.theme.shadowWidths.sm}`,n=e.$isSystem?H(`${e.theme.borderRadii.md} - 1`):`50%`,r=`${e.theme.space.base*8}px`,i=e.theme.fontSizes.md,a=`${e.theme.space.base*3}px`):e.$size===`large`?(t=`inset 0 0 0 ${e.theme.shadowWidths.sm}`,n=e.$isSystem?H(`${e.theme.borderRadii.md} + 1`):`50%`,r=`${e.theme.space.base*12}px`,i=e.theme.fontSizes.xl,a=`${e.theme.space.base*6}px`):(t=`inset 0 0 0 ${e.theme.shadowWidths.sm}`,n=e.$isSystem?e.theme.borderRadii.md:`50%`,r=`${e.theme.space.base*10}px`,i=e.theme.fontSizes.lg,a=`${e.theme.space.base*4}px`),z([`border-radius:`,`;width:`,` !important;height:`,` !important;&::before{box-shadow:`,`;}& > svg{font-size:`,`;}& `,`{line-height:`,`;font-size:`,`;}`],n,r,r,t,a,Uo,r,i)},hs=B.figure.attrs(()=>({"data-garden-id":ds,"data-garden-version":`9.15.8`})).withConfig({displayName:`StyledAvatar`,componentId:`sc-608m04-0`})([`display:inline-flex;position:relative;align-items:center;justify-content:center;transition:box-shadow `,`s ease-in-out,color 0.1s ease-in-out;margin:0;vertical-align:middle;box-sizing:border-box;`,`;`,`;&::before{position:absolute;top:0;left:0;transition:box-shadow `,`s ease-in-out;content:'';}&::before,&& > img{border-radius:inherit;width:100%;height:100%;}&& > img{box-sizing:inherit;vertical-align:bottom;object-fit:cover;}&& > svg{width:1em;height:1em;}& > `,`{`,`;}`,`;`],Yo,e=>ms(e),e=>ps(e),Yo,us,fs,V),gs=(0,g.forwardRef)((e,t)=>g.createElement(Uo,Object.assign({ref:t},e)));gs.displayName=`Avatar.Text`;var _s=gs,vs=(0,g.forwardRef)(({"aria-hidden":e,backgroundColor:t,badge:n,children:r,foregroundColor:i,isSystem:a,size:o=`medium`,status:s,statusLabel:c,surfaceColor:l,...u},d)=>{let f=n===void 0?s:`active`,p=jo,m=Lo;[`large`,`medium`].includes(o)&&(p=Po,m=Bo);let h=(0,g.useMemo)(()=>{let e=f;if(f===`active`){let t=typeof n==`string`?parseInt(n,10):n;e=`active. ${t>0?`${t} notification${t>1?`s`:``}`:`no notifications`}`}return[`status`].concat(e||[]).join(`: `)},[f,n]),_=Pa(vs,{statusLabel:c},`statusLabel`,h,f!==void 0&&e!==!0);return g.createElement(hs,Object.assign({ref:d,$isSystem:a,$size:o,$status:f,$surfaceColor:l,$backgroundColor:t,$foregroundColor:i,"aria-atomic":`true`,"aria-hidden":e,"aria-live":`polite`},u),g.Children.only(r),!!f&&g.createElement(us,{$size:o,$type:f,$surfaceColor:l,as:`figcaption`},e!==!0&&g.createElement(Oo,{hidden:!0},_),f===`active`?g.createElement(`span`,{"aria-hidden":!0},n):g.createElement(g.Fragment,null,f===`away`?g.createElement(p,{"data-icon-status":f}):null,f===`transfers`?g.createElement(m,{"data-icon-status":f}):null)))});vs.displayName=`Avatar`,vs.propTypes={backgroundColor:O.default.string,foregroundColor:O.default.string,surfaceColor:O.default.string,isSystem:O.default.bool,badge:O.default.oneOfType([O.default.string,O.default.number]),size:O.default.oneOf(Vo),status:O.default.oneOf(Ho),statusLabel:O.default.string};var ys=vs;ys.Text=_s;var bs=ys,xs=B.div.attrs({"data-garden-id":`buttons.button_group_view`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledSplitButton`,componentId:`sc-1u4v04v-0`})([`display:inline-flex;position:relative;z-index:0;direction:`,`;white-space:nowrap;`,`;`],e=>e.theme.rtl&&`rtl`,V),Ss=`buttons.icon`,Cs=e=>{let t;return e.$position===`start`?t=`margin-${e.theme.rtl?`left`:`right`}`:e.$position===`end`&&(t=`margin-${e.theme.rtl?`right`:`left`}`),t&&z([``,`:`,`px;`],t,e.theme.space.base*2)},ws=B(La).attrs({"data-garden-id":Ss,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledIcon`,componentId:`sc-19meqgg-0`})([`transform:`,`;transition:transform 0.25s ease-in-out,color 0.25s ease-in-out;`,`;`,`;`],e=>e.$isRotated&&`rotate(${e.theme.rtl?`-`:`+`}180deg)`,e=>Cs(e),V),Ts=e=>e.$isPill?`100px`:e.theme.borderRadii.md,Es=e=>e.$size===`small`?`${e.theme.space.base*8}px`:e.$size===`large`?`${e.theme.space.base*12}px`:`${e.theme.space.base*10}px`,Ds=({theme:e,$isLink:t,$isBasic:n,$isDanger:r,$isNeutral:i,$isPrimary:a,$focusInset:o})=>{let s,c=G({theme:e,variable:`background.disabled`}),l=G({theme:e,variable:`foreground.disabled`}),u={dark:{offset:-100},light:{offset:100}},d={dark:{offset:-200},light:{offset:200}};if(t){let t={theme:e,variable:r?`foreground.danger`:`foreground.primary`},n=G(t),i=G({...t,...u}),a=G({...t,...d});s=z([`outline-color:transparent;background-color:transparent;color:`,`;`,` &:hover{color:`,`;}&:active,&[aria-pressed='true'],&[aria-pressed='mixed']{color:`,`;}&:disabled{color:`,`;}`],n,Ia({theme:e,condition:!1,styles:{color:n,outlineColor:G({theme:e,variable:`border.primaryEmphasis`})}}),i,a,l)}else if(a){let t;t=r?`background.dangerEmphasis`:i?`background.emphasis`:`background.primaryEmphasis`;let n={theme:e,variable:t},a=G(n),f=G({...n,...u}),p=G({...n,...d});s=z([`outline-color:transparent;background-color:`,`;color:`,`;&:hover{background-color:`,`;}`,` &:active,&[aria-pressed='true'],&[aria-pressed='mixed']{background-color:`,`;}&:disabled{background-color:`,`;color:`,`;}`],a,G({theme:e,variable:`foreground.onEmphasis`}),f,Ia({theme:e,inset:o,shadowWidth:o?`sm`:`md`,spacerWidth:o?`sm`:`xs`,styles:(r||i)&&o?{borderColor:G({theme:e,variable:`border.primaryEmphasis`})}:void 0}),p,c,l)}else{let t,a,f,p,m,h;if(r){if(!n){let n={theme:e,variable:`border.dangerEmphasis`};t=G(n),a=G({...n,...u}),f=G({...n,...d}),i&&(p=G(n))}m=`background.dangerEmphasis`,h=i?`foreground.default`:`foreground.danger`}else{if(!n){let n={theme:e,variable:`border.primaryEmphasis`};i?(t=G({theme:e,variable:`border.default`,...u}),a=G(n),p=a,f=G({...n,...u})):(t=G(n),a=G({...n,...u}),f=G({...n,...d}))}m=`background.primaryEmphasis`,h=i?`foreground.default`:`foreground.primary`}let g=G({theme:e,variable:m,transparency:e.opacity[100]}),_=G({theme:e,variable:m,transparency:e.opacity[200]}),v={theme:e,variable:h},y=G(v),b,x,S,C,w;if(i){let t={theme:e,variable:`foreground.subtle`};S=G(t),C=G({...t,...u}),w=G({...t,...d})}else b=G({...v,...u}),x=G({...v,...d});s=z([`outline-color:transparent;border-color:`,`;background-color:transparent;color:`,`;&:hover{border-color:`,`;background-color:`,`;color:`,`;}`,` &:active,&[aria-pressed='true'],&[aria-pressed='mixed']{border-color:`,`;background-color:`,`;color:`,`;}&:disabled{border-color:transparent;background-color:`,`;color:`,`;}& `,`{color:`,`;}&:hover `,`,&:focus-visible `,`{color:`,`;}&:active `,`{color:`,`;}&:disabled `,`{color:`,`;}`],t,y,a,g,b,Ia({theme:e,inset:o,styles:{borderColor:p}}),f,_,x,c,l,ws,S,ws,ws,C,ws,w,ws,l)}return s},Os=({theme:e,$isPrimary:t,$isBasic:n,$isPill:r,$focusInset:i})=>{let{rtl:a,borderWidths:o,borders:s}=e,c=a?`right`:`left`,l=a?`left`:`right`,u=o.sm,d=`${t||n?``:`-`}${u}`,f=r&&`-2px`,p=!t&&G({theme:e,variable:`background.disabled`}),m=n?`transparent`:`revert`,h=G({theme:e,variable:`border.primaryEmphasis`}),g=n&&!t&&ja({theme:e,inset:i,spacerColor:{hue:h},color:{hue:`transparent`}});return z([`position:relative;transition:border-color 0.1s ease-in-out,background-color 0.1s ease-in-out,box-shadow 0.1s ease-in-out,color 0.1s ease-in-out,margin-`,` 0.1s ease-in-out,outline-color 0.1s ease-in-out,z-index 0.25s ease-in-out;border:`,` `,`;`,`{border-color:`,`;box-shadow:`,`;}&:hover,&:active,`,`{z-index:1;}&:disabled{z-index:-1;background-color:`,`;}&:not(:first-of-type){margin-`,`:`,`;}&:not(:first-of-type):disabled{margin-`,`:`,`;}&:not(:first-of-type):not(:last-of-type){border-radius:0;}&:first-of-type:not(:last-of-type){border-top-`,`-radius:0;border-bottom-`,`-radius:0;}&:last-of-type:not(:first-of-type){border-top-`,`-radius:0;border-bottom-`,`-radius:0;}&:first-of-type:not(:last-of-type) `,`{margin-`,`:`,`;}&:last-of-type:not(:first-of-type) `,`{margin-`,`:`,`;}`],c,s.sm,m,Fa,h,g,Fa,p,c,d,c,u,l,l,c,c,ws,l,f,ws,c,f)},ks=e=>{let t=e.$size===`small`?e.theme.iconSizes.sm:e.theme.iconSizes.md;return z([`width:`,`;min-width:`,`;height:`,`;vertical-align:`,`;`],t,t,t,e.$isLink&&`middle`)},As=e=>{let t;if(e.$isLink)t=z([`padding:0;font-size:inherit;`]);else{let n=Es(e),r=H(`${n} - (${e.theme.borderWidths.sm} * 2)`),i,a;e.$size===`small`?(a=e.theme.fontSizes.sm,i=`${e.theme.space.base*3}px`):(a=e.theme.fontSizes.md,i=e.$size===`large`?`${e.theme.space.base*5}px`:`${e.theme.space.base*4}px`),t=z([`padding:0 `,`;height:`,`;line-height:`,`;font-size:`,`;`],ai(H(`${i} - ${e.theme.borderWidths.sm}`),a),n,r,a)}return t},js=B.button.attrs(e=>({"data-garden-id":e[`data-garden-id`]||`buttons.button`,"data-garden-version":`9.15.8`})).withConfig({displayName:`StyledButton`,componentId:`sc-qe3ace-0`})([`display:`,`;align-items:`,`;justify-content:`,`;transition:border-color 0.25s ease-in-out,box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out,outline-color 0.1s ease-in-out,z-index 0.25s ease-in-out;margin:0;border:`,`;border-radius:`,`;cursor:pointer;width:`,`;overflow:hidden;text-decoration:`,`;text-overflow:ellipsis;white-space:`,`;font-family:inherit;font-weight:`,`;-webkit-font-smoothing:subpixel-antialiased;box-sizing:border-box;user-select:`,`;-webkit-touch-callout:none;`,`;&::-moz-focus-inner{border:0;padding:0;}`,`{text-decoration:none;}&:hover{text-decoration:`,`;}&:active,&[aria-pressed='true'],&[aria-pressed='mixed']{transition:border-color 0.1s ease-in-out,background-color 0.1s ease-in-out,box-shadow 0.1s ease-in-out,color 0.1s ease-in-out,outline-color 0.1s ease-in-out,z-index 0.25s ease-in-out;text-decoration:`,`;}`,`;&:disabled{cursor:default;text-decoration:`,`;}& `,`{`,`}`,` &&{`,`}`,``],e=>e.$isLink?`inline`:`inline-flex`,e=>!e.$isLink&&`center`,e=>!e.$isLink&&`center`,e=>`${e.$isLink?`0px solid`:e.theme.borders.sm} transparent`,e=>Ts(e),e=>e.$isStretched?`100%`:``,e=>e.$isUnderlined?`underline`:`none`,e=>!e.$isLink&&`nowrap`,e=>e.$isLink?`inherit`:e.theme.fontWeights.regular,e=>!e.$isLink&&`none`,e=>As(e),Fa,e=>e.$isLink?`underline`:`none`,e=>e.$isLink?`underline`:`none`,e=>Ds(e),e=>e.$isLink&&`none`,ws,e=>ks(e),xs,e=>Os(e),V),Ms=`buttons.anchor`,Ns=B(js).attrs(e=>({"data-garden-id":Ms,"data-garden-version":`9.15.8`,as:e.as||`a`,dir:e.theme.rtl?`rtl`:void 0,$isLink:!0,type:void 0})).withConfig({displayName:`StyledAnchor`,componentId:`sc-xshgmo-0`})([`direction:`,`;`,`;`],e=>e.theme.rtl&&`rtl`,V),Ps=B((0,g.forwardRef)((e,t)=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,focusable:`false`,viewBox:`0 0 20 20`,ref:t,...e,children:[(0,K.jsx)(`path`,{fill:`currentColor`,d:`M7.585 2.505a.834.834 0 0 1 0 1.658l-.085.004H6c-.48 0-.791.001-1.027.02-.226.019-.31.05-.352.07a.84.84 0 0 0-.364.365c-.021.041-.052.126-.07.352-.02.236-.021.547-.021 1.027v8c0 .48.001.79.02 1.026.019.226.05.31.07.352.06.117.148.219.254.296l.111.068.107.036c.054.013.132.026.245.036.236.019.547.019 1.027.019h8c.48 0 .79 0 1.026-.02.226-.018.31-.05.352-.07a.84.84 0 0 0 .364-.365c.021-.041.053-.126.071-.352.02-.236.02-.546.02-1.026v-1.5a.834.834 0 0 1 1.667 0v1.5c0 .453 0 .843-.025 1.162-.027.33-.087.658-.248.973-.24.47-.622.853-1.092 1.093-.315.16-.644.22-.973.247-.32.026-.71.025-1.162.025H6c-.453 0-.843 0-1.163-.025-.33-.027-.658-.087-.973-.247a2.5 2.5 0 0 1-1.092-1.093c-.16-.315-.22-.644-.247-.973-.026-.32-.025-.71-.025-1.162v-8c0-.453 0-.843.025-1.163.027-.33.087-.658.247-.973.24-.47.622-.852 1.092-1.092.315-.16.644-.22.973-.247.32-.026.71-.025 1.163-.025h1.5z`}),(0,K.jsx)(`path`,{fill:`currentColor`,d:`M16.666 2.501c.46 0 .834.373.834.833v5a.834.834 0 0 1-1.667 0V5.346l-6.077 6.077-.064.057a.834.834 0 0 1-1.115-1.235l6.078-6.078h-2.989a.834.834 0 0 1 0-1.666z`})]})))`
  transform: ${e=>e.theme.rtl&&`scaleX(-1)`};
  margin-bottom: -0.085em;
  padding-left: 0.25em;
  box-sizing: content-box;
  width: 0.85em;
  height: 0.85em;

  ${V};
`,Fs=(0,g.forwardRef)(({children:e,externalIconLabel:t,isDanger:n,isExternal:r,isUnderlined:i=!0,...a},o)=>{let s=a;r&&(s={target:`_blank`,rel:`noopener noreferrer`,...s});let c=Pa(Fs,r?{externalIconLabel:t}:{noIconLabel:`true`},r?`externalIconLabel`:`noIconLabel`,`(opens in a new tab)`);return(0,K.jsxs)(Ns,{ref:o,$isDanger:n,$isUnderlined:i,...s,children:[e,!!r&&(0,K.jsx)(Ps,{role:`img`,"aria-label":c,"aria-hidden":void 0})]})});Fs.displayName=`Anchor`;var Is=[`small`,`medium`,`large`],Ls=`buttons.icon_button`,Rs=({theme:e})=>{let t={theme:e,variable:`foreground.subtle`};return z([`color:`,`;&:hover{color:`,`;}&:active,&[aria-pressed='true'],&[aria-pressed='mixed']{color:`,`;}`],G(t),G({...t,dark:{offset:-100},light:{offset:100}}),G({...t,dark:{offset:-200},light:{offset:200}}))},zs=B(js).attrs(e=>{let t=e[`data-garden-id`];return{"data-garden-id":t&&t!==`buttons.button`?t:Ls,"data-garden-version":`9.15.8`}}).withConfig({displayName:`StyledIconButton`,componentId:`sc-1t0ughp-0`})([``,`;& `,`{`,`}`,`;`],e=>{let t=Es(e);return z([`border:`,`;padding:0;width:`,`;min-width:`,`;`,`;&:disabled{background-color:`,`;}`],e.$isBasic&&`none`,t,t,e.$isBasic&&!(e.$isPrimary||e.$isDanger||e.disabled)&&Rs(e),!e.$isPrimary&&`transparent`)},ws,e=>{let t=e.theme.iconSizes.md;return z([`width:`,`;height:`,`;& > svg{transition:opacity 0.15s ease-in-out;}`],t,t)},V),Bs=(0,g.createContext)(void 0),Vs=()=>(0,g.useContext)(Bs),Hs=({isRotated:e,...t})=>g.createElement(ws,Object.assign({$position:`start`,$isRotated:e},t));Hs.displayName=`Button.StartIcon`;var Us=Hs,Ws=({isRotated:e,...t})=>g.createElement(ws,Object.assign({$position:`end`,$isRotated:e},t));Ws.displayName=`Button.EndIcon`;var Gs=Ws,Ks=(0,g.forwardRef)(({focusInset:e,isBasic:t,isDanger:n,isLink:r,isNeutral:i,isPill:a,isPrimary:o,isStretched:s,size:c=`medium`,type:l=`button`,...u},d)=>{let f=Vs();return g.createElement(js,Object.assign({},u,{type:l,$focusInset:e||f,$isBasic:t,$isDanger:n,$isLink:r,$isNeutral:i,$isPill:a,$isPrimary:o,$isStretched:s,$isUnderlined:r,$size:c,ref:d}))});Ks.displayName=`Button`,Ks.propTypes={focusInset:O.default.bool,isBasic:O.default.bool,isDanger:O.default.bool,isLink:O.default.bool,isNeutral:O.default.bool,isPill:O.default.bool,isPrimary:O.default.bool,isStretched:O.default.bool,size:O.default.oneOf(Is)};var qs=Ks;qs.EndIcon=Gs,qs.StartIcon=Us;var Js=(0,g.forwardRef)(({children:e,focusInset:t,isBasic:n=!0,isDanger:r,isNeutral:i,isPill:a=!0,isPrimary:o,isRotated:s,size:c=`medium`,type:l=`button`,...u},d)=>{let f=Vs();return g.createElement(zs,Object.assign({},u,{type:l,$isBasic:n,$isDanger:r,$isNeutral:i,$isPill:a,$isPrimary:o,$size:c,$focusInset:t||f,ref:d}),g.createElement(ws,{$isRotated:s},e))});Js.displayName=`IconButton`,Js.propTypes={focusInset:O.default.bool,isBasic:O.default.bool,isDanger:O.default.bool,isNeutral:O.default.bool,isPill:O.default.bool,isPrimary:O.default.bool,isRotated:O.default.bool,size:O.default.oneOf(Is)};var Ys=(0,g.forwardRef)(({isPressed:e,size:t=`medium`,...n},r)=>g.createElement(qs,Object.assign({"aria-pressed":e,size:t,ref:r},n)));Ys.displayName=`ToggleButton`,Ys.propTypes={...qs.propTypes,isPressed:O.default.oneOf([!0,!1,`mixed`])};var q=qs,Xs=Js,Zs=Ys,Qs=({idPrefix:e,hasHint:t,hasMessage:n})=>{let r=te(e),i=`${r}--input`,a=`${r}--label`,o=`${r}--hint`,s=`${r}--message`,c=(0,g.useCallback)(({id:e=a,htmlFor:t=i,...n}={})=>({"data-garden-container-id":`containers.field.label`,"data-garden-container-version":`3.0.22`,id:e,htmlFor:t,...n}),[a,i]),l=(0,g.useCallback)(({id:e=o,...t}={})=>({"data-garden-container-id":`containers.field.hint`,"data-garden-container-version":`3.0.22`,id:e,...t}),[o]),u=(0,g.useCallback)(({id:e=i,"aria-describedby":r,...c}={})=>({"data-garden-container-id":`containers.field.input`,"data-garden-container-version":`3.0.22`,id:e,"aria-labelledby":a,"aria-describedby":(()=>{if(r)return r;let e=[];return t&&e.push(o),n&&e.push(s),e.length>0?e.join(` `):void 0})(),...c}),[i,a,o,s,t,n]),d=(0,g.useCallback)(({id:e=s,role:t=`alert`,...n}={})=>({"data-garden-container-id":`containers.field.message`,"data-garden-container-version":`3.0.22`,role:t===null?void 0:t,id:e,...n}),[s]);return(0,g.useMemo)(()=>({getLabelProps:c,getHintProps:l,getInputProps:u,getMessageProps:d}),[c,l,u,d])};O.default.func,O.default.func,O.default.string,O.default.bool,O.default.bool;var $s=[`small`,`medium`,`large`],ec=B(La).attrs({"data-garden-id":`tags.avatar`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledAvatar`,componentId:`sc-3kdmgt-0`})([`flex-shrink:0;font-size:0;`,`;`],V),tc=B.button.attrs({"data-garden-id":`tags.close`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledClose`,componentId:`sc-d6lrpn-0`})([`display:flex;flex-shrink:0;align-items:center;justify-content:center;transition:opacity 0.25s ease-in-out;opacity:`,`;border:0;background:transparent;cursor:pointer;padding:0;color:inherit;font-size:0;appearance:none;&:hover{opacity:`,`;}&:focus{outline:none;}&:active{opacity:`,`;}`,`;`],e=>e.theme.opacity[1e3],e=>e.theme.opacity[1100],e=>e.theme.opacity[1200],V),nc=`tags.tag_view`,rc=({theme:e,$hue:t})=>{let n,r;if(t)switch(r=G({theme:e,variable:`foreground.onEmphasis`}),t){case`grey`:case`neutralHue`:n=G({theme:e,variable:`background.emphasis`,dark:{offset:-300}});break;case`blue`:case`primaryHue`:n=G({theme:e,variable:`background.primaryEmphasis`});break;case`red`:case`dangerHue`:n=G({theme:e,variable:`background.dangerEmphasis`});break;case`green`:case`successHue`:n=G({theme:e,variable:`background.successEmphasis`});break;case`yellow`:case`warningHue`:n=G({theme:e,hue:`warningHue`,shade:400}),e.colors.base===`light`&&(r=G({theme:e,variable:`foreground.warningEmphasis`}));break;case`kale`:case`chromeHue`:n=G({theme:e,hue:`chromeHue`,dark:{shade:500},light:{shade:800}});break;default:{let i={...e,colors:{...e.colors,base:`light`}},a={...e,colors:{...e.colors,base:`dark`}},o=`foreground.onEmphasis`;n=G({theme:e,hue:t}),r=$i(n,G({theme:a,variable:o}),G({theme:i,variable:o}),!1);break}}else n=G({theme:e,hue:`neutralHue`,dark:{shade:800},light:{shade:200}}),r=G({theme:e,variable:`foreground.default`});return z([`background-color:`,`;color:`,`;&:hover{color:`,`;}`,``],n,r,r,Ia({theme:e,shadowWidth:`sm`,selector:`&:focus`}))},ic=({$isPill:e,$isRound:t,$size:n,theme:r})=>{let i,a,o,s,c,l;n===`small`?(i=r.borderRadii.sm,a=r.space.base,o=r.space.base*4,s=r.fontSizes.xs,l=0):n===`large`?(i=r.borderRadii.md,a=r.space.base*3,o=r.space.base*8,s=r.fontSizes.sm,l=r.space.base*6):(i=r.borderRadii.sm,a=r.space.base*2,o=r.space.base*5,s=r.fontSizes.sm,l=r.space.base*4);let u=n===`large`?H(`${i} - 1`):i,d=(o-l)/2,f=t?d:d*2;return t?(i=`50%`,a=0,c=o,u=`50%`):e&&(i=`100px`,u=`50%`,n===`small`?(a=r.space.base*1.5,c=r.space.base*6):c=n===`large`?r.space.base*12:r.space.base*7.5),z([`border-radius:`,`;padding:0 `,`px;min-width:`,`;height:`,`px;line-height:`,`;font-size:`,`;& > *{width:100%;min-width:`,`;}& `,`{margin-`,`:-`,`px;margin-`,`:`,`px;border-radius:`,`;width:`,`px;min-width:`,`px;height:`,`px;}& `,`{margin-`,`:-`,`px;border-radius:`,`;width:`,`px;height:`,`px;}`],i,a,c?`${c}px`:`calc(${a*2}px + 1ch)`,o,Na(o,s),s,c?`${c-a*2}px`:`1ch`,ec,r.rtl?`right`:`left`,a-d,r.rtl?`left`:`right`,f,u,l,l,l,tc,r.rtl?`left`:`right`,a,i,o,o)},ac=B.div.attrs(()=>({"data-garden-id":nc,"data-garden-version":`9.15.8`})).withConfig({displayName:`StyledTag`,componentId:`sc-1jvbe03-0`})([`display:inline-flex;flex-wrap:nowrap;align-items:center;justify-content:`,`;transition:box-shadow 0.1s ease-in-out;box-sizing:border-box;border:0;max-width:100%;overflow:hidden;vertical-align:middle;text-decoration:none;white-space:nowrap;font-weight:`,`;direction:`,`;`,`;&:hover{cursor:default;text-decoration:none;}&:link:hover,&:visited:hover{cursor:pointer;}&:any-link:hover{cursor:pointer;}`,`{text-decoration:none;}`,`;& > *{overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap;}& b{font-weight:`,`;}& `,`{display:`,`;}& `,`{display:`,`;}`,`;`],e=>e.$isRound&&`center`,e=>!e.$isRegular&&e.theme.fontWeights.semibold,e=>e.theme.rtl?`rtl`:`ltr`,e=>ic(e),Fa,e=>rc(e),e=>e.theme.fontWeights.semibold,ec,e=>(e.$isRound||e.$size===`small`)&&`none`,tc,e=>e.$isRound&&`none`,V),oc;function sc(){return sc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sc.apply(null,arguments)}var cc=function(e){return g.createElement(`svg`,sc({xmlns:`http://www.w3.org/2000/svg`,width:12,height:12,focusable:`false`,viewBox:`0 0 12 12`,"aria-hidden":`true`},e),oc||=g.createElement(`path`,{stroke:`currentColor`,strokeLinecap:`round`,d:`M3 9l6-6m0 6L3 3`}))},lc=(0,g.forwardRef)((e,t)=>{let n=Pa(lc,e,`aria-label`,`Remove`);return g.createElement(tc,Object.assign({ref:t,"aria-label":n},e,{type:`button`,tabIndex:-1}),g.createElement(cc,null))});lc.displayName=`Tag.Close`;var uc=lc,dc=e=>g.createElement(ec,e);dc.displayName=`Tag.Avatar`;var fc=dc,pc=(0,g.forwardRef)(({isPill:e,isRound:t,isRegular:n,size:r=`medium`,hue:i,...a},o)=>g.createElement(ac,Object.assign({$hue:i,$isPill:e,$isRegular:n,$isRound:t,$size:r,ref:o},a)));pc.displayName=`Tag`,pc.propTypes={size:O.default.oneOf($s),hue:O.default.string,isPill:O.default.bool,isRound:O.default.bool,isRegular:O.default.bool};var mc=pc;mc.Avatar=fc,mc.Close=uc;var hc=(e,t)=>{switch(t.type){case`END`:case`HOME`:case`FOCUS`:case`INCREMENT`:case`DECREMENT`:return{...e,focusedValue:t.payload};case`MOUSE_SELECT`:return{...e,selectedValue:t.payload,focusedValue:void 0};case`KEYBOARD_SELECT`:return{...e,selectedValue:t.payload};case`EXIT_WIDGET`:return{...e,focusedValue:void 0};default:return e}},J=({values:e,direction:t=`horizontal`,defaultFocusedValue:n=e[0],defaultSelectedValue:r,rtl:i,selectedValue:a,focusedValue:o,allowDefaultOnSelect:s=!1,onSelect:c,onFocus:l})=>{let u=a!==void 0,d=o!==void 0,f=(0,g.useMemo)(()=>e.reduce((e,t)=>(e[t]=(0,g.createRef)(),e),{}),[e]),[p,m]=(0,g.useReducer)(hc,{selectedValue:a,focusedValue:o}),h=T(o,p.focusedValue),_=T(a,p.selectedValue);return(0,g.useEffect)(()=>{if(h!==void 0){let e=f[h];e?.current&&e.current.focus()}},[h]),(0,g.useEffect)(()=>{a===void 0&&r!==void 0&&(c&&c(r),u||m({type:`KEYBOARD_SELECT`,payload:r}))},[]),{focusedValue:h,selectedValue:_,getElementProps:({selectedAriaKey:r=`aria-selected`,onFocus:a,onKeyDown:g,onClick:v,value:y,...b})=>{let x=_===y,S=(h===void 0?x:h===y)||_===void 0&&h===void 0&&y===n?0:-1,C=t===`vertical`||t===`both`,T=t===`horizontal`||t===`both`,ee=()=>{l&&l(y),!d&&m({type:`FOCUS`,payload:y})},te=()=>{c&&c(y),l&&l(y),!u&&m({type:`MOUSE_SELECT`,payload:y})},ne=t=>{let n,r;r=d?e.find(e=>o===e):e.find(e=>p.focusedValue===e);let a=()=>{n=e[e.indexOf(r)+1],n||=e[0],!d&&m({type:`INCREMENT`,payload:n}),l&&l(n)},f=()=>{n=e[e.indexOf(r)-1],n||=e[e.length-1],!d&&m({type:`DECREMENT`,payload:n}),l&&l(n)};if(!(t.ctrlKey||t.metaKey||t.shiftKey||t.altKey)){if(t.key===E.UP&&C||t.key===E.LEFT&&T)i&&T?a():f(),t.preventDefault();else if(t.key===E.DOWN&&C||t.key===E.RIGHT&&T)i&&T?f():a(),t.preventDefault();else if(t.key===E.HOME){let n=e[0];!d&&m({type:`HOME`,payload:n}),l&&l(n),t.preventDefault()}else if(t.key===E.END){let n=e[e.length-1];!d&&m({type:`END`,payload:n}),l&&l(n),t.preventDefault()}else(t.key===E.SPACE||t.key===E.ENTER)&&(c&&c(y),!u&&m({type:`KEYBOARD_SELECT`,payload:y}),!s&&t.preventDefault())}},D=e=>{e.target.tabIndex===0&&(m({type:`EXIT_WIDGET`}),l&&l())};return{tabIndex:S,[r]:r?x:void 0,ref:f[y],onFocus:w(a,ee),onClick:w(v,te),onKeyDown:w(g,ne),onBlur:D,...b}},getGroupProps:(0,g.useCallback)(({role:e=`group`,...t}={})=>({role:e===null?void 0:e,"data-garden-container-id":`containers.selection`,"data-garden-container-version":`3.1.5`,...t}),[])}};O.default.func,O.default.func,O.default.arrayOf(O.default.any).isRequired,O.default.bool,O.default.oneOf([`horizontal`,`vertical`,`both`]),O.default.string,O.default.string,O.default.any,O.default.any,O.default.func,O.default.func;var gc=(0,g.createContext)(void 0),_c=()=>(0,g.useContext)(gc),vc=(0,g.createContext)(void 0),yc=()=>(0,g.useContext)(vc),bc=`forms.input_label`,xc=B.label.attrs(e=>({"data-garden-id":e[`data-garden-id`]||bc}))`
  direction: ${e=>e.theme.rtl&&`rtl`};
  vertical-align: middle; /* support label inline with input layout */
  line-height: ${e=>Na(e.theme.space.base*5,e.theme.fontSizes.md)};
  color: ${e=>G({theme:e.theme,variable:`foreground.default`})};
  font-size: ${e=>e.theme.fontSizes.md};
  font-weight: ${e=>e.$isRegular?e.theme.fontWeights.regular:e.theme.fontWeights.semibold};

  &[hidden] {
    display: ${e=>e.$isRadio?`inline-block`:`inline`}; /* [1] */
    vertical-align: ${e=>e.$isRadio&&`top`};
    text-indent: ${e=>e.$isRadio&&`-100%`};
    font-size: ${e=>e.$isRadio&&`0`};

    ${e=>!e.$isRadio&&ci()};
  }

  ${V};
`,Sc=`forms.radio_label`,Cc=e=>{let t=e.theme.space.base*4,n=t+e.theme.space.base*2,r=e.theme.space.base*5;return z`
    padding-${e.theme.rtl?`right`:`left`}: ${n}px;

    &[hidden] {
      padding-${e.theme.rtl?`right`:`left`}: ${t}px;
      height: ${r}px;
      line-height: ${r}px;
    }
  `},wc=B(xc).attrs({"data-garden-id":Sc,$isRadio:!0})`
  display: inline-block; /* [1] */
  position: relative;
  cursor: pointer;

  ${e=>Cc(e)};

  ${V};
`,Tc=B(La).attrs({"data-garden-id":`forms.input_message_icon`})`
  width: ${e=>e.theme.iconSizes.md};
  height: ${e=>e.theme.iconSizes.md};

  ${V};
`,Ec=`forms.input_message`,Dc=B.div.attrs(e=>({"data-garden-id":e[`data-garden-id`]||Ec}))`
  direction: ${e=>e.theme.rtl&&`rtl`};
  display: inline-block;
  position: relative;
  vertical-align: middle; /* support message inline with input layout */

  ${({theme:e,$validation:t})=>{let n=e.fontSizes.sm,r=Na(e.iconSizes.md,e.fontSizes.sm),i=`${e.space.base}px`,a=t?H(`${e.space.base*2} + ${e.iconSizes.md}`):void 0;return z`
    padding-${e.rtl?`right`:`left`}: ${a};
    line-height: ${r};
    font-size: ${n};

    ${xc}:not([hidden]) + & {
      margin-top: ${i};
    }
  `}};

  ${({theme:e,$validation:t})=>{let n;return n=t===`error`?`foreground.danger`:t===`success`?`foreground.success`:t===`warning`?`foreground.warning`:`foreground.subtle`,z`
    color: ${G({theme:e,variable:n})};
  `}};

  & ${Tc} {
    position: absolute;
    top: -1px;
    ${e=>e.theme.rtl?`right`:`left`}: 0;
  }

  ${xc}:not([hidden]) + & {
    display: block;
  }

  ${V};
`,Oc=B.input.attrs({"data-garden-id":`forms.radio`,type:`radio`})`
  /* hide <input> but retain accessiblity */
  position: absolute;
  opacity: 0;
  margin: 0;

  & ~ ${wc}::before {
    position: absolute;
    ${e=>e.theme.rtl?`right`:`left`}: 0;
    /* prettier-ignore */
    transition:
      border-color .25s ease-in-out,
      box-shadow .1s ease-in-out,
      background-color .25s ease-in-out,
      color .25s ease-in-out;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center;
    content: '';
  }

  & ~ ${wc} > svg {
    position: absolute;
  }

  ${({theme:e,$isCompact:t})=>{let n=`${e.space.base*5}px`,r=`${e.space.base*4}px`,i=H(`(${n} - ${r}) / 2`),a=e.iconSizes.sm,o=H(`(${r} - ${a}) / 2`),s=H(`${o} + ${i}`),c=`${e.space.base*(t?1:2)}px`;return z`
    top: ${i};
    width: ${r};
    height: ${r};

    & ~ ${wc}::before {
      top: ${i};
      border: ${e.borders.sm};
      background-size: ${e.iconSizes.sm};
      width: ${r};
      height: ${r};
      box-sizing: border-box;
    }

    & ~ ${wc} > svg {
      top: ${s};
      ${e.rtl?`right`:`left`}: ${o};
      width: ${a};
      height: ${a};
    }

    && ~ ${wc} ~ ${Dc} {
      margin-top: ${c};
    }
  `}};

  &:focus ~ ${wc}::before {
    outline: none;
  }

  & ~ ${wc}:active::before {
    /* prettier-ignore */
    transition:
      border-color 0.1s ease-in-out,
      background-color 0.1s ease-in-out,
      color 0.1s ease-in-out;
  }

  ${({theme:e})=>{let t=G({theme:e,variable:`border.emphasis`}),n=G({theme:e,variable:`background.default`}),r=G({theme:e,variable:`foreground.onEmphasis`}),i={theme:e,variable:`background.primaryEmphasis`},a={theme:e,variable:`border.primaryEmphasis`},o=G({...i,transparency:e.opacity[100]}),s=G(a),c=s,l=G({...i,transparency:e.opacity[200]}),u=c,d=G(i),f=c,p={dark:{offset:-100},light:{offset:100}},m={dark:{offset:-200},light:{offset:200}},h=G({...i,...p}),g=G({...a,...p}),_=G({...i,...m}),v=G({...a,...m}),y=G({theme:e,variable:`background.disabled`,transparency:e.opacity[300]});return z`
    & ~ ${wc}::before {
      border-color: ${t};
      background-color: ${n};
    }

    & ~ ${wc} > svg {
      color: ${r};
    }

    & ~ ${wc}:hover::before {
      border-color: ${s};
      background-color: ${o};
    }

    ${Ia({theme:e,styles:{borderColor:c},selector:`&:focus-visible ~ ${wc}::before`})}

    & ~ ${wc}:active::before {
      border-color: ${u};
      background-color: ${l};
    }

    &:checked ~ ${wc}::before {
      border-color: ${f};
      background-color: ${d};
    }

    &:enabled:checked ~ ${wc}:hover::before {
      border-color: ${g};
      background-color: ${h};
    }

    &:enabled:checked ~ ${wc}:active::before {
      border-color: ${v};
      background-color: ${_};
    }

    &:disabled ~ ${wc}::before {
      border-color: transparent;
      background-color: ${y};
    }
  `}};

  &:disabled ~ ${wc} {
    cursor: default;
  }

  ${V};
`,kc=B(wc).attrs({"data-garden-id":`forms.checkbox_label`})`
  ${V};
`,Ac=B(Oc).attrs({"data-garden-id":`forms.checkbox`,type:`checkbox`})`
  & ~ ${kc}::before {
    border-radius: ${e=>e.theme.borderRadii.md};
  }

  ${({theme:e})=>{let t={theme:e,variable:`background.primaryEmphasis`},n={theme:e,variable:`border.primaryEmphasis`},r=G(t),i=G(n),a={dark:{offset:-100},light:{offset:100}},o={dark:{offset:-200},light:{offset:200}},s=G({...t,...a}),c=G({...n,...a}),l=G({...t,...o});return z`
    &:indeterminate ~ ${kc}::before {
      border-color: ${i};
      background-color: ${r};
    }

    &:enabled:indeterminate ~ ${kc}:hover::before {
      border-color: ${c};
      background-color: ${s};
    }

    &:enabled:indeterminate ~ ${kc}:active::before {
      border-color: ${G({...n,...o})};
      background-color: ${l};
    }

    &:disabled:indeterminate ~ ${kc}::before {
      border-color: transparent;
      background-color: ${G({theme:e,variable:`background.disabled`,transparency:e.opacity[300]})};
    }
  `}};

  ${V};
`,jc=(0,g.createContext)(void 0),Mc=()=>(0,g.useContext)(jc),Nc=g.forwardRef(({indeterminate:e,children:t,isCompact:n,...r},i)=>{let a=Mc(),o=_c(),s=t=>{t&&(t.indeterminate=!!e)},c={$isCompact:a?a.isCompact:n,ref:e=>{[s,i].forEach(t=>{t&&(typeof t==`function`?t(e):t.current=e)})},...r};return o&&(c=o.getInputProps(c)),(0,K.jsxs)(vc.Provider,{value:`checkbox`,children:[(0,K.jsx)(Ac,{...c}),t]})});Nc.displayName=`Checkbox`;var Pc=`forms.input_hint`,Fc=B.div.attrs(e=>({"data-garden-id":e[`data-garden-id`]||Pc}))`
  direction: ${e=>e.theme.rtl&&`rtl`};
  display: block;
  vertical-align: middle; /* support hint inline with input layout */
  line-height: ${e=>Na(e.theme.space.base*5,e.theme.fontSizes.md)};
  color: ${e=>G({theme:e.theme,variable:`foreground.subtle`})};
  font-size: ${e=>e.theme.fontSizes.md};

  ${V};
`,Ic=`forms.input`,Lc=e=>e===`warning`||e===`error`,Rc=B.input.attrs(e=>({"data-garden-id":Ic,"aria-invalid":Lc(e.$validation)}))`
  appearance: none;
  /* prettier-ignore */
  transition:
    border-color 0.25s ease-in-out,
    box-shadow 0.1s ease-in-out,
    background-color 0.25s ease-in-out,
    color 0.25s ease-in-out,
    z-index 0.25s ease-in-out;
  direction: ${e=>e.theme.rtl&&`rtl`};
  border: ${e=>e.$isBare?`none`:e.theme.borders.sm};
  border-radius: ${e=>e.$isBare?`0`:e.theme.borderRadii.md};
  width: 100%; /* vs. display: block to limit mouse interaction area */
  box-sizing: border-box;
  vertical-align: middle; /* support inline label */
  font-family: inherit;

  &::-ms-browse {
    border-radius: ${e=>e.theme.borderRadii.sm};
  }

  &::-ms-clear,
  &::-ms-reveal {
    display: none; /* remove clear button and password reveal in IE */
  }

  &::-moz-color-swatch {
    border: none;
    border-radius: ${e=>e.theme.borderRadii.sm};
  }

  &::-webkit-color-swatch {
    border: none;
    border-radius: ${e=>e.theme.borderRadii.sm};
  }

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  &::-webkit-clear-button,
  &::-webkit-inner-spin-button,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button {
    display: none; /* remove non-standard browser features */
  }

  &::-webkit-datetime-edit {
    direction: ${e=>e.theme.rtl&&`rtl`};
    line-height: 1;
  }

  &::-webkit-calendar-picker-indicator {
    border-radius: 100%;
  }

  &:invalid {
    box-shadow: none; /* prevent FireFox validation styling */
  }

  &[type='file']::-ms-value {
    display: none; /* remove file entry in IE */
  }

  /* stylelint-disable-next-line */
  @media screen and (min--moz-device-pixel-ratio: 0) {
    &[type='number'] {
      appearance: textfield; /* remove number spinner in FireFox */
    }
  }

  ${({theme:e,$isBare:t,$isCompact:n})=>{let r=e.fontSizes.md,i=`${e.space.base*3}px`,a,o,s,c;n?(a=`${e.space.base*8}px`,o=`${e.space.base*1.5}px`,s=H(`${e.fontSizes.sm} - 1`),c=`${e.space.base*6}px`):(a=`${e.space.base*10}px`,o=`${e.space.base*2.5}px`,s=e.fontSizes.sm,c=`${e.space.base*7}px`);let l=H(`${a} - (${o} * 2) - (${e.borderWidths.sm} * 2)`),u=t?`0`:`${ai(o,r)} ${ai(i,r)}`,d=H(`(${l} - ${c}) / 2`),f=H(`${o} + ${d} - ${i}`),p=`${e.space.base*5}px`,m=e.iconSizes.md;return z`
    padding: ${u};
    min-height: ${t?`1em`:a};
    line-height: ${Na(l,r)};
    font-size: ${r};

    &::-ms-browse {
      font-size: ${s};
    }

    &[type='date'],
    &[type='datetime-local'],
    &[type='file'],
    &[type='month'],
    &[type='time'],
    &[type='week'] {
      max-height: ${a};
    }

    &[type='file'] {
      line-height: 1; /* align file prompt text */
    }

    @supports (-ms-ime-align: auto) {
      &[type='color'] {
        padding: ${n?`0 2px`:`1px 3px`}; /* correct color swatch size for Edge */
      }
    }

    &::-moz-color-swatch {
      margin-top: ${d};
      margin-left: ${f};
      width: calc(100% + ${H(`${f} * -2`)});
      height: ${c};
    }

    &::-webkit-calendar-picker-indicator {
      background-position: center;
      background-size: ${m};
      padding: 0;
      width: ${p};
      height: ${p};
    }

    &::-webkit-color-swatch {
      margin: ${d} ${f};
    }

    ${xc}:not([hidden]) + &&,
    ${Fc} + &&,
    ${Dc} + &&,
    && + ${Fc},
    && ~ ${Dc} {
      margin-top: ${e.space.base*(n?1:2)}px;
    }
  `}};

  ${({theme:e,$isBare:t,$isHovered:n,$focusInset:r,$validation:i})=>{let a=G({theme:e,variable:`foreground.default`}),o=t?`transparent`:G({theme:e,variable:`background.default`}),s,c,l,u;i?(i===`success`?l=`border.successEmphasis`:i===`warning`?l=`border.warningEmphasis`:i===`error`&&(l=`border.dangerEmphasis`),s=G({theme:e,variable:l}),c=s,u=s):(s=G({theme:e,variable:`border.default`,dark:{offset:-100},light:{offset:100}}),l=`border.primaryEmphasis`,c=G({theme:e,variable:l}),u=c);let d=t?void 0:G({theme:e,variable:`background.disabled`}),f=G({theme:e,variable:`border.disabled`}),p=G({theme:e,variable:`foreground.disabled`}),m=p,h=d,g=`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" focusable="false" viewBox="0 0 16 16" aria-hidden="true" color="${G({theme:e,variable:`foreground.subtle`})}">
      <path fill="currentColor" d="M12.688 5.61a.5.5 0 01.69.718l-.066.062-5 4a.5.5 0 01-.542.054l-.082-.054-5-4a.5.5 0 01.55-.83l.074.05L8 9.359l4.688-3.75z"/>
    </svg>`,_=`url("data:image/svg+xml,${encodeURIComponent(g)}")`;return z`
    border-color: ${n?c:s};
    background-color: ${o};
    color: ${a};

    &::placeholder {
      opacity: 1;
      color: ${m};
    }

    &::-webkit-datetime-edit {
      color: ${m};
    }

    &::-webkit-calendar-picker-indicator {
      background-image: ${_};
    }

    &[readonly],
    &[aria-readonly='true'] {
      background-color: ${h};
    }

    &:hover {
      border-color: ${c};
    }

    ${Ia({theme:e,inset:r,color:{variable:l},styles:{borderColor:u},condition:!t})}

    &::-webkit-calendar-picker-indicator:focus-visible {
      ${Ia({theme:e})}
    }

    &:disabled,
    &[aria-disabled='true'] {
      border-color: ${f};
      background-color: ${d};
      color: ${p};
    }
  `}};

  &:disabled {
    cursor: default;
  }

  ${V};
`,zc=B(xc).attrs({as:`legend`,"data-garden-id":`forms.fieldset_legend`})`
  padding: 0; /* [1] */

  ${V};
`,Bc=(0,g.forwardRef)((e,t)=>(0,K.jsx)(zc,{...e,ref:t}));Bc.displayName=`Fieldset.Legend`;var Vc=Bc,Hc=B.div.attrs({"data-garden-id":`forms.field`})`
  position: relative; /* [1] */
  direction: ${e=>e.theme.rtl?`rtl`:`ltr`};
  margin: 0; /* [2] */
  border: 0; /* [2] */
  padding: 0; /* [2] */
  font-size: 0; /* [3] */

  ${V};
`,Uc=B(Hc).attrs({as:`fieldset`,"data-garden-id":`forms.fieldset`})`
  ${Hc} {
    margin-top: ${e=>e.theme.space.base*(e.$isCompact?1:2)}px;
  }
  ${V};
`,Wc=(0,g.forwardRef)(({isCompact:e,...t},n)=>{let r=(0,g.useMemo)(()=>({isCompact:e}),[e]);return(0,K.jsx)(jc.Provider,{value:r,children:(0,K.jsx)(Uc,{...t,ref:n,$isCompact:e})})});Wc.displayName=`Fieldset`;var Y=Wc;Y.Legend=Vc;var Gc=(0,g.createContext)(void 0),Kc=()=>(0,g.useContext)(Gc),X=g.forwardRef(({onSelect:e,isBare:t,isCompact:n,focusInset:r,validation:i,...a},o)=>{let s=_c(),c=Kc(),l=a;s&&(l=s.getInputProps(l));let u=a.readOnly?w(e,e=>{e.currentTarget.select()}):e;return(0,K.jsx)(Rc,{ref:o,onSelect:u,...l,$isBare:t,$isCompact:c?c.isCompact:n,$focusInset:c&&r===void 0?!0:r,$validation:i})});X.displayName=`Input`;var qc=`forms.input_group`,Jc=e=>z`
    ${xc}:not([hidden]) + &&,
    ${Fc} + &&,
    ${Dc} + &&,
    && + ${Fc},
    && + ${Dc} {
      margin-top: ${`${e.theme.space.base*(e.$isCompact?1:2)}px`};
    }

    & > ${Rc} {
      position: relative;
      flex: 1 1 auto;
      margin-top: 0;
      margin-bottom: 0;
      width: auto; /* [1] */
      min-width: 0;
    }
  `,Yc=e=>{let t=e.theme.rtl?`right`:`left`,n=e.theme.rtl?`left`:`right`;return z`
    & > * {
      z-index: -1;
    }

    & > ${Rc} {
      z-index: 0; /* [2] */
    }

    & > ${Rc}:disabled {
      z-index: -2;
    }

    & > ${Rc}:hover,
    & > button:hover,
    & > ${Rc}:focus-visible,
    & > button:focus-visible,
    & > ${Rc}:active,
    & > button:active,
    & > button[aria-pressed='true'],
    & > button[aria-pressed='mixed'] {
      z-index: 1;
    }

    & > button:disabled {
      border-top-width: 0;
      border-bottom-width: 0;
    }

    & > *:not(:first-child) {
      margin-${t}: -${e.theme.borderWidths.sm}; /* [1] */
    }

    & > *:first-child:not(:last-child) {
      border-top-${n}-radius: 0;
      border-bottom-${n}-radius: 0;
    }

    & > *:last-child:not(:first-child) {
      border-top-${t}-radius: 0;
      border-bottom-${t}-radius: 0;
    }

    & > *:not(:first-child):not(:last-child) {
      border-radius: 0;
    }
  `},Xc=B.div.attrs({"data-garden-id":qc})`
  display: inline-flex;
  position: relative;
  flex-wrap: nowrap;
  align-items: stretch;
  z-index: 0;
  width: 100%;

  ${e=>Jc(e)};
  ${e=>Yc(e)};

  ${V};
`,Zc=g.forwardRef(({isCompact:e,...t},n)=>{let r=(0,g.useMemo)(()=>({isCompact:e}),[e]);return(0,K.jsx)(Gc.Provider,{value:r,children:(0,K.jsx)(Xc,{ref:n,$isCompact:e,...t})})});Zc.displayName=`InputGroup`;function Qc(e){return t=>{for(let n of e)el(n,t)}}function $c(e){return t=>{let n=[];for(let r of e){let e=el(r,t),i=typeof e==`function`;n.push(i?e:()=>el(r,null))}return()=>{for(let e of n)e()}}}function el(e,t){if(typeof e==`function`)return e(t);e&&(e.current=t)}var tl=parseInt(g.version.split(`.`)[0],10)>=19?$c:Qc,nl=`forms.textarea`,rl=`
  visibility: hidden;
  position: absolute;
  overflow: hidden;
  height: 0;
  top: 0;
  left: 0;
  transform: translateZ(0);
`,il=B(Rc).attrs({as:`textarea`,"data-garden-id":nl})`
  resize: ${e=>e.$isResizable?`vertical`:`none`};
  overflow: auto;
  ${e=>e.$isHidden&&rl};

  ${V};
`,al=e=>parseInt(e,10)||0,ol=g.forwardRef(({isCompact:e,isBare:t,focusInset:n,isResizable:r,minRows:i,maxRows:a,style:o,validation:s,onChange:c,onSelect:l,...u},d)=>{let f=_c(),p=(0,g.useRef)(),m=(0,g.useRef)(null),[h,_]=(0,g.useState)({overflow:!1,height:0}),v=u.value!==null&&u.value!==void 0,y=(i!==void 0||a!==void 0)&&!r,b=(0,g.useCallback)(()=>{if(!y)return;let e=p.current,t=window.getComputedStyle(e),n=m.current;n.style.width=t.width,n.value=e.value||e.placeholder||` `;let r=t.boxSizing,o=al(t.paddingBottom)+al(t.paddingTop),s=al(t.borderTopWidth)+al(t.borderBottomWidth),c=n.scrollHeight-o;n.value=`x`;let l=n.scrollHeight-o,u=c;i&&(u=Math.max(Number(i)*l,u)),a&&(u=Math.min(Number(a)*l,u)),u=Math.max(u,l);let d=u+(r===`border-box`?o+s:0),f=Math.abs(u-c)<=1;_(e=>d>0&&Math.abs((e.height||0)-d)>1||e.overflow!==f?{overflow:f,height:d}:e)},[a,i,p,y]),x=(0,g.useCallback)(e=>{v||b(),c&&c(e)},[b,v,c]);(0,g.useLayoutEffect)(()=>{b()});let S={};y&&(S.height=h.height,S.overflow=h.overflow?`hidden`:void 0);let C={$focusInset:n,$isBare:t,$isCompact:e,$isResizable:r,$validation:s,onChange:x,onSelect:u.readOnly?w(l,e=>{e.currentTarget.select()}):l,ref:tl([p,d]),rows:i,style:{...S,...o},...u};return f&&(C=f.getInputProps(C)),(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(il,{...C}),!!y&&(0,K.jsx)(il,{$isBare:t,$isCompact:e,$isHidden:!0,"aria-hidden":!0,className:u.className,readOnly:!0,ref:m,style:o,tabIndex:-1})]})});ol.displayName=`Textarea`;var sl=`forms.toggle_label`,cl=e=>{let t=e.theme.space.base*10,n=t+e.theme.space.base*2;return z`
    padding-${e.theme.rtl?`right`:`left`}: ${n}px;

    &[hidden] {
      padding-${e.theme.rtl?`right`:`left`}: ${t}px;
    }
  `},ll=B(kc).attrs({"data-garden-id":sl})`
  ${e=>cl(e)};

  ${V};
`,ul=B(Ac).attrs({"data-garden-id":`forms.toggle`})`
  & ~ ${ll}::before {
    top: 0;
    /* prettier-ignore */
    transition:
      box-shadow .1s ease-in-out,
      background-color .15s ease-in-out,
      color .25s ease-in-out;
    border: none;
    border-radius: 100px;
  }

  ${({theme:e})=>{let t=`${e.space.base*5}px`,n=`${e.space.base*10}px`,r=e.iconSizes.md,i=H(`(${t} - ${r}) / 2`),a=H(`${n} - ${r} - ${i}`);return z`
    top: 0;
    width: ${n};
    height: ${t};

    & ~ ${ll}::before {
      width: ${n};
      height: ${t};
    }

    & ~ ${ll} > svg {
      top: ${i};
      ${e.rtl?`right`:`left`}: ${i};
      width: ${r};
      height: ${r};
    }

    &:checked ~ ${ll} > svg {
      ${e.rtl?`right`:`left`}: ${a};
    }
  `}};

  ${({theme:e})=>{let t={theme:e,variable:`background.emphasis`};return z`
    & ~ ${ll}::before {
      background-color: ${G(t)};
    }

    &:enabled ~ ${ll}:hover::before {
      background-color: ${G({...t,dark:{offset:-100},light:{offset:100}})};
    }

    &:enabled ~ ${ll}:active::before {
      background-color: ${G({...t,dark:{offset:-200},light:{offset:200}})};
    }
  `}};

  ${V};
`,dl=g.forwardRef(({children:e,isCompact:t,...n},r)=>{let i=Mc(),a=_c(),o={$isCompact:i?i.isCompact:t,ref:r,...n,role:`switch`};return a&&(o=a.getInputProps(o)),(0,K.jsxs)(vc.Provider,{value:`toggle`,children:[(0,K.jsx)(ul,{...o}),e]})});dl.displayName=`Toggle`;var fl=B(Fc).attrs({"data-garden-id":`forms.radio_hint`})`
  padding-${e=>e.theme.rtl?`right`:`left`}:
    ${e=>H(`${e.theme.space.base} * 6px`)};

  ${V};
`,pl=B(fl).attrs({"data-garden-id":`forms.checkbox_hint`})`
  ${V};
`,ml=B(Fc).attrs({"data-garden-id":`forms.toggle_hint`})`
  padding-${e=>e.theme.rtl?`right`:`left`}:
    ${e=>H(`${e.theme.space.base} * 12px`)};

  ${V};
`,hl=g.forwardRef((e,t)=>{let{hasHint:n,setHasHint:r,getHintProps:i}=_c()||{},a=yc();(0,g.useEffect)(()=>(!n&&r&&r(!0),()=>{n&&r&&r(!1)}),[n,r]);let o;o=a===`checkbox`?pl:a===`radio`?fl:a===`toggle`?ml:Fc;let s=e;return i&&(s=i(s)),(0,K.jsx)(o,{ref:t,...s})});hl.displayName=`Field.Hint`;var gl=B(Dc).attrs({"data-garden-id":`forms.radio_message`})`
  padding-${e=>e.theme.rtl?`right`:`left`}:
    ${e=>H(`${e.theme.space.base} * 6px`)};

  ${V};
`,_l=B(gl).attrs({"data-garden-id":`forms.checkbox_message`})`
  ${V};
`,vl=B(Dc).attrs({"data-garden-id":`forms.toggle_message`})`
  padding-${e=>e.theme.rtl?`right`:`left`}:
    ${e=>H(`${e.theme.space.base} * 12px`)};

  & ${Tc} {
    ${e=>e.theme.rtl?`right`:`left`}: ${e=>H(`${e.theme.space.base} * 10px - ${e.theme.iconSizes.md}`)};
  }

  ${V};
`,yl=(0,g.forwardRef)((e,t)=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,focusable:`false`,viewBox:`0 0 20 20`,ref:t,...e,children:[(0,K.jsx)(`path`,{fill:`currentColor`,d:`M10 12.166a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-6.333c.46 0 .833.374.833.834v3.75a.833.833 0 0 1-1.666 0v-3.75c0-.46.373-.834.833-.834`}),(0,K.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,d:`M10 1.667A8.333 8.333 0 1 1 1.667 10 8.333 8.333 0 0 1 10 1.667m0 1.666a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334`})]})),bl=(0,g.forwardRef)((e,t)=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,focusable:`false`,viewBox:`0 0 20 20`,ref:t,...e,children:[(0,K.jsx)(`path`,{fill:`currentColor`,d:`M10 12.292a1.041 1.041 0 1 1 0 2.082 1.041 1.041 0 0 1 0-2.082m0-4.775c.46 0 .833.372.833.833v2.495a.833.833 0 0 1-1.667 0V8.35c0-.46.374-.833.834-.833`}),(0,K.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,d:`M7.844 3.738c.963-1.65 3.348-1.65 4.312 0l5.835 10.007c.97 1.664-.23 3.755-2.156 3.755H4.165c-1.926 0-3.126-2.09-2.156-3.755zm2.872.84a.83.83 0 0 0-1.433 0L3.45 14.585a.83.83 0 0 0 .716 1.248h11.67c.6 0 .988-.61.768-1.143l-.052-.105z`})]})),xl=(0,g.forwardRef)((e,t)=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,focusable:`false`,viewBox:`0 0 20 20`,ref:t,...e,children:[(0,K.jsx)(`path`,{fill:`currentColor`,d:`M11.81 7.034a.833.833 0 1 1 1.381.932l-3.646 5.416a.833.833 0 0 1-1.28.124l-2.188-2.188a.834.834 0 0 1 1.179-1.178l1.472 1.471z`}),(0,K.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,d:`M10 1.666a8.334 8.334 0 1 1-.001 16.667A8.334 8.334 0 0 1 10 1.666m0 1.667a6.667 6.667 0 1 0 0 13.335 6.667 6.667 0 0 0 0-13.335`})]})),Sl={error:so(yl),warning:so(bl),success:so(xl)},Cl=({validation:e,children:t,...n})=>{let r=e?Sl[e]:void 0;return(0,K.jsx)(Tc,{"aria-hidden":!1,role:`img`,...n,children:r?(0,K.jsx)(r,{}):t})};Cl.displayName=`Field.MessageIcon`;var wl=g.forwardRef(({validation:e,validationLabel:t,children:n,...r},i)=>{let{hasMessage:a,setHasMessage:o,getMessageProps:s}=_c()||{},c=yc();(0,g.useEffect)(()=>(!a&&o&&o(!0),()=>{a&&o&&o(!1)}),[a,o]);let l;l=c===`checkbox`?_l:c===`radio`?gl:c===`toggle`?vl:Dc;let u={$validation:e,$validationLabel:t,...r};s&&(u=s(u));let d=Pa(wl,u,`$validationLabel`,e,e!==void 0);return(0,K.jsxs)(l,{ref:i,...u,children:[!!e&&(0,K.jsx)(Cl,{validation:e,"aria-label":d}),n]})});wl.displayName=`Field.Message`;var Tl=B((0,g.forwardRef)((e,t)=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:12,height:12,focusable:`false`,viewBox:`0 0 12 12`,ref:t,...e,children:(0,K.jsx)(`circle`,{cx:6,cy:6,r:2,fill:`currentColor`})}))).attrs({"data-garden-id":`forms.radio_svg`})`
  transition: opacity 0.25s ease-in-out;
  opacity: 0;

  ${Oc}:checked ~ ${wc} > & {
    opacity: 1;
  }

  ${V};
`,El=B((0,g.forwardRef)((e,t)=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,ref:t,...e,children:(0,K.jsx)(`circle`,{cx:8,cy:8,r:6,fill:`currentColor`})}))).attrs({"data-garden-id":`forms.toggle_svg`})`
  transition: all 0.15s ease-in-out;

  ${V};
`,Dl=B(so(mo,!0))`
  transition: opacity 0.25s ease-in-out;
  opacity: 0;
  pointer-events: none;

  ${Ac}:checked ~ ${kc} > & {
    opacity: 1;
  }

  ${Ac}:indeterminate ~ ${kc} > & {
    opacity: 0;
  }

  ${V};
`,Ol=B(so((0,g.forwardRef)((e,t)=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,focusable:`false`,viewBox:`0 0 20 20`,ref:t,...e,children:(0,K.jsx)(`path`,{fill:`currentColor`,d:`M14.032 2.5c.44 0 .818 0 1.13.025.33.027.657.087.973.247a2.5 2.5 0 0 1 1.092 1.093c.161.316.22.643.248.973.025.312.025.69.025 1.13v8.064c0 .44 0 .818-.025 1.13-.027.33-.087.657-.248.973a2.5 2.5 0 0 1-1.092 1.092c-.316.161-.644.22-.973.248-.312.025-.69.025-1.13.025H5.968c-.44 0-.818 0-1.13-.025-.33-.027-.657-.087-.973-.248a2.5 2.5 0 0 1-1.093-1.092c-.16-.316-.22-.644-.247-.973-.025-.312-.025-.69-.025-1.13V5.968c0-.44 0-.818.025-1.13.027-.33.087-.657.247-.973a2.5 2.5 0 0 1 1.093-1.093c.316-.16.643-.22.973-.247.312-.025.69-.025 1.13-.025z`})})),!0))`
  transition: opacity 0.25s ease-in-out;
  opacity: 0;
  pointer-events: none;

  ${Ac}:indeterminate ~ ${kc} > & {
    opacity: 1;
  }

  ${V};
`,kl=g.forwardRef(({children:e,isRegular:t,...n},r)=>{let i=_c(),a=Mc(),o=yc(),s=a&&t===void 0?!0:t,c=n;if(i&&(c=i.getLabelProps(c),o===void 0)){let{setIsLabelActive:e,setIsLabelHovered:t}=i;c.onMouseUp=w(n.onMouseUp,()=>{e(!1)}),c.onMouseDown=w(n.onMouseDown,()=>{e(!0)}),c.onMouseEnter=w(n.onMouseEnter,()=>{t(!0)}),c.onMouseLeave=w(n.onMouseLeave,()=>{t(!1)})}return o===`radio`?(0,K.jsxs)(wc,{ref:r,...c,$isRegular:s,children:[(0,K.jsx)(Tl,{}),e]}):o===`checkbox`?(c.onClick=w(c.onClick,e=>{let t=navigator?.userAgent.toLowerCase().indexOf(`firefox`)>-1;if(i&&t&&e.target instanceof Element){let t=e.target.getAttribute(`for`);if(!t)return;let n=document.getElementById(t);n&&n.type===`checkbox`&&(e.shiftKey&&(n.click(),n.checked=!0),n.focus())}}),(0,K.jsxs)(kc,{ref:r,...c,$isRegular:s,children:[(0,K.jsx)(Dl,{}),(0,K.jsx)(Ol,{}),e]})):o===`toggle`?(0,K.jsxs)(ll,{ref:r,...c,$isRegular:s,children:[(0,K.jsx)(El,{}),e]}):(0,K.jsx)(xc,{ref:r,...c,$isRegular:s,children:e})});kl.displayName=`Field.Label`;var Al=g.forwardRef((e,t)=>{let[n,r]=(0,g.useState)(!1),[i,a]=(0,g.useState)(!1),[o,s]=(0,g.useState)(!1),[c,l]=(0,g.useState)(!1),{getInputProps:u,getMessageProps:d,...f}=Qs({idPrefix:e.id,hasHint:n,hasMessage:i}),p=(0,g.useMemo)(()=>({...f,getInputProps:u,getMessageProps:d,isLabelActive:o,setIsLabelActive:s,isLabelHovered:c,setIsLabelHovered:l,hasHint:n,setHasHint:r,hasMessage:i,setHasMessage:a}),[f,u,d,o,c,n,i]);return(0,K.jsx)(gc.Provider,{value:p,children:(0,K.jsx)(Hc,{...e,ref:t})})});Al.displayName=`Field`;var Z=Al;Z.Hint=hl,Z.Label=kl,Z.Message=wl;var jl=(0,g.forwardRef)((e,t)=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,focusable:`false`,viewBox:`0 0 20 20`,ref:t,...e,children:(0,K.jsx)(`path`,{fill:`currentColor`,d:`M13.744 5.077a.834.834 0 0 1 1.179 1.178L11.178 10l3.745 3.744a.834.834 0 0 1-1.179 1.18L10 11.176l-3.744 3.745a.833.833 0 1 1-1.178-1.179L8.821 10 5.078 6.255a.832.832 0 1 1 1.178-1.178L10 8.821z`})})),Ml=(0,g.forwardRef)((e,t)=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,focusable:`false`,viewBox:`0 0 20 20`,ref:t,...e,children:(0,K.jsx)(`path`,{fill:`currentColor`,d:`M15.244 3.577a.834.834 0 0 1 1.179 1.178L11.178 10l5.245 5.244a.834.834 0 0 1-1.179 1.18L10 11.176l-5.244 5.245a.833.833 0 1 1-1.178-1.179L8.821 10 3.578 4.755a.832.832 0 1 1 1.178-1.178L10 8.821z`})}));Kn([`0%{transform:translate(0,5px);}3%{transform:translate(1px,-5px);}6%{transform:translate(3px,-15px);}8%{transform:translate(5px,-18px);}9%{transform:translate(7px,-21px);}11%{transform:translate(8px,-22px);}13%{transform:translate(9px,-23px);}16%{transform:translate(12px,-25px);}18%{transform:translate(13px,-26px);}23%{transform:translate(18px,-26px);}24%{transform:translate(19px,-25px);}28%{transform:translate(22px,-23px);}31%{transform:translate(24px,-21px);}33%{transform:translate(26px,-18px);}34%{transform:translate(28px,-14px);}36%{transform:translate(29px,-12px);}38%{transform:translate(30px,-5px);}39%{transform:translate(31px,5px);}54%{transform:translate(31px,3px);}59%{transform:translate(33px);}61%{transform:translate(43px);}63%{transform:translate(48px);}64%{transform:translate(51px);}66%{transform:translate(53px);}68%{transform:translate(55px);}69%{transform:translate(57px);}76%{transform:translate(60px);}81%{transform:translate(61px);}83%,100%{transform:translate(62px);}`]),Kn([`4%{transform:translate(0);}6%{transform:translate(-1px);}8%{transform:translate(-2px);}9%{transform:translate(-5px);}11%{transform:translate(-7px);}13%{transform:translate(-12px);}14%{transform:translate(-17px);}16%{transform:translate(-19px);}18%{transform:translate(-22px);}19%{transform:translate(-25px);}21%{transform:translate(-26px);}23%{transform:translate(-27px);}24%{transform:translate(-28px);}26%{transform:translate(-29px);}29%{transform:translate(-30px);}33%,89%{transform:translate(-31px);}91%{transform:translate(-31px,1px);}94%{transform:translate(-31px,2px);}98%{transform:translate(-31px,3px);}99%{transform:translate(-31px,4px);}100%{transform:translate(-31px,5px);}`]),Kn([`39%{transform:translate(0);}44%{transform:translate(0,1px);}46%{transform:translate(0,2px);}48%{transform:translate(0,3px);}49%{transform:translate(0,4px);}51%{transform:translate(0,5px);}53%{transform:translate(-1px,-6px);}54%{transform:translate(-2px,-13px);}56%{transform:translate(-3px,-15px);}58%{transform:translate(-5px,-19px);}59%{transform:translate(-7px,-21px);}61%{transform:translate(-8px,-22px);}63%{transform:translate(-9px,-24px);}64%{transform:translate(-11px,-25px);}66%{transform:translate(-12px,-26px);}74%{transform:translate(-19px,-26px);}76%{transform:translate(-20px,-25px);}78%{transform:translate(-22px,-24px);}81%{transform:translate(-24px,-21px);}83%{transform:translate(-26px,-19px);}84%{transform:translate(-28px,-15px);}86%{transform:translate(-29px,-13px);}88%{transform:translate(-30px,-6px);}89%{transform:translate(-31px,5px);}91%{transform:translate(-31px,4px);}93%{transform:translate(-31px,3px);}94%{transform:translate(-31px,2px);}98%{transform:translate(-31px,1px);}100%{transform:translate(-31px);}`]);var Nl=Kn([`0%{visibility:hidden;}1%{visibility:visible;}100%{visibility:visible;}`]),Pl=B.div.attrs({"data-garden-id":`loaders.loading_placeholder`,"data-garden-version":`9.15.8`,role:`progressbar`}).withConfig({displayName:`StyledLoadingPlaceholder`,componentId:`sc-x3bwsx-0`})([`display:inline-block;`,`;`,``],({$width:e=`1em`,$height:t=`0.9em`,$fontSize:n})=>{let[r,i]=si(n),a;return a=i===void 0?n:`${r}${i===``?`px`:i}`,z([`width:`,`;height:`,`;font-size:`,`;`],e,t,a)},V),Fl=B.circle.attrs(e=>({cx:40,cy:40,r:34,fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,strokeWidth:e.$strokeWidthValue,strokeDasharray:`${e.$dasharrayValue} 250`,transform:e.transform})).withConfig({displayName:`StyledSpinnerCircle`,componentId:`sc-o4kd70-0`})([``]),Il=B.svg.attrs(e=>({"data-garden-version":`9.15.8`,xmlns:`http://www.w3.org/2000/svg`,focusable:`false`,viewBox:`0 0 ${e.$width} ${e.$height}`,role:`img`})).withConfig({displayName:`StyledSVG`,componentId:`sc-1xtc3kx-0`})([``,`;`,`;`,`;`,`;`],({$containerWidth:e=`1em`,$containerHeight:t=`0.9em`,$fontSize:n=`inherit`})=>{let[r,i]=si(n),a;return a=i===void 0?n:`${r}${i===``?`px`:i}`,z([`width:`,`;height:`,`;font-size:`,`;`],e,t,a)},({theme:e,$color:t=`inherit`})=>z([`color:`,`;`],Ma({theme:e,value:t})),V,({$delayShow:e})=>{if(e&&e!==0)return z([`animation:`,` 1ms `,`ms linear 1 forwards;visibility:hidden;`],Nl,e)}),Ll=function(e){let{duration:t=1250,delayMS:n=750,loop:r=!0}=e===void 0?{}:e,[i,a]=(0,g.useState)(0),[o,s]=(0,g.useState)(!1);return(0,g.useLayoutEffect)(()=>{let e,i,o,c=!1,l=()=>{c||(e=requestAnimationFrame(u))},u=()=>{a(Date.now()-i),l()},d=()=>{c||(o=setTimeout(()=>{cancelAnimationFrame(e),a(Date.now()-i),r&&d()},t),i=Date.now(),s(!0),l())},f=setTimeout(d,n);return()=>{c=!0,clearTimeout(f),clearTimeout(o),cancelAnimationFrame(e)}},[t,n,r]),{elapsed:Math.min(1,i/t),delayMS:n,delayComplete:o}};O.default.func,O.default.func,O.default.number,O.default.bool,O.default.number;var Rl={0:6,14:5,26:4,36:3,46:2,58:3,70:4,80:5,91:6},zl={0:-90,8:-81,36:-30,41:-18,44:-8,48:0,55:22,63:53,64:62,66:67,68:78,69:90,71:99,73:112,74:129,76:138,78:159,79:180,81:190,83:207,84:221,86:226,88:235,90:243,99:270},Bl={0:0,13:2,26:13,53:86,58:90,63:89,64:88,66:86,68:83,69:81,71:76,73:70,74:62,76:58,78:47,79:37,81:31,83:23,84:16,88:10,89:7,98:1,99:0},Vl=`loaders.spinner`,Hl=100,Ul=(e,t)=>Object.entries(e).reduce((e,n,r,i)=>{let[a,o]=n,[s,c]=i[r+1]||[Hl,i[0][1]],l=parseInt(s,10)-parseInt(a,10),u=t/99*l,d=o;e[a]=o;for(let n=0;n<l;n++)d+=(c-d)*(16.666666666666668/u),u=t/99*(l-n),e[parseInt(a,10)+n+1]=d;return e[s]=c,e},{}),Wl=(0,g.forwardRef)(({size:e=`inherit`,duration:t=1250,color:n=`inherit`,delayMS:r=750,...i},a)=>{let o=Ul(Rl,t),s=Ul(zl,t),c=Ul(Bl,t),{elapsed:l,delayComplete:u}=Ll({duration:t,delayMS:r}),d=(l*100).toFixed(0),f=o[d],p=s[d],m=c[d];return!u&&r!==0?g.createElement(Pl,{$width:`1em`,$height:`1em`,$fontSize:e},`\xA0`):g.createElement(Il,Object.assign({$color:n,$containerHeight:`1em`,$containerWidth:`1em`,$fontSize:e,"data-garden-id":Vl,$height:80,ref:a,$width:80},i),g.createElement(Fl,{$dasharrayValue:m,$strokeWidthValue:f,transform:`rotate(${p}, 40, 40)`}))});Wl.displayName=`Spinner`,Wl.propTypes={size:O.default.any,duration:O.default.number,color:O.default.string,delayMS:O.default.number};var Gl=Wl,Kl=e=>z`
  ${e.fg&&`color: ${e.fg};`}
  ${e.bg&&`background-color: ${e.bg};`}
  ${e.border&&`border-color: ${e.border};`}

  &:hover {
    ${e.hoverFg&&`color: ${e.hoverFg};`}
    ${e.hoverBg&&`background-color: ${e.hoverBg};`}
    ${e.hoverBorder&&`border-color: ${e.hoverBorder};`}
  }

  &:active,
  &[aria-pressed='true'],
  &[aria-pressed='mixed'] {
    ${e.activeFg&&`color: ${e.activeFg};`}
    ${e.activeBg&&`background-color: ${e.activeBg};`}
    ${e.activeBorder&&`border-color: ${e.activeBorder};`}
  }

  &:disabled {
    color: ${G({theme:e.theme,variable:`foreground.disabled`})};
    ${e.disabledBg&&`background-color: ${e.disabledBg};`}
    ${e.disabledBorder&&`border-color: ${e.disabledBorder};`}
  }
`,ql=({theme:e,$isPill:t,$isPrimary:n,$isBasic:r,$isNeutral:i,$isDanger:a,$isLink:o,$size:s})=>{let c={},l=!n&&!r&&!o&&!a&&i!==!1?G({theme:e,variable:`border.default`,light:{offset:100},dark:{offset:-100}}):void 0;o&&a?(c.fg=G({theme:e,variable:`foreground.danger`}),c.hoverFg=G({theme:e,variable:`foreground.danger`,light:{offset:100},dark:{offset:-100}}),c.activeFg=G({theme:e,variable:`foreground.danger`,light:{offset:200},dark:{offset:-200}})):o?(c.fg=G({theme:e,variable:`foreground.primary`}),c.hoverFg=G({theme:e,variable:`foreground.primary`,light:{offset:100},dark:{offset:-100}}),c.activeFg=G({theme:e,variable:`foreground.primary`,light:{offset:200},dark:{offset:-200}})):n&&a?(c.bg=G({theme:e,variable:`background.dangerEmphasis`}),c.fg=G({theme:e,variable:`foreground.onEmphasis`}),c.hoverBg=G({theme:e,variable:`background.dangerEmphasis`,light:{offset:100},dark:{offset:-100}}),c.activeBg=G({theme:e,variable:`background.dangerEmphasis`,light:{offset:200},dark:{offset:-200}}),c.disabledBg=G({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]})):n?(c.bg=G({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),c.fg=G({theme:e,variable:`foreground.onEmphasis`,light:{offset:0},dark:{offset:0}}),c.hoverBg=G({theme:e,hue:`neutralHue`,light:{shade:800},dark:{shade:200}}),c.activeBg=G({theme:e,hue:`neutralHue`,light:{shade:700},dark:{shade:100}}),c.disabledBg=G({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]})):r&&a?(c.fg=G({theme:e,variable:`foreground.danger`}),c.hoverFg=G({theme:e,variable:`foreground.danger`,light:{offset:100},dark:{offset:-100}}),c.hoverBg=G({theme:e,variable:`background.dangerEmphasis`,light:{offset:0},dark:{offset:0},transparency:e.opacity[100]}),c.activeFg=G({theme:e,variable:`foreground.danger`,light:{offset:200},dark:{offset:-200}}),c.activeBg=G({theme:e,variable:`background.dangerEmphasis`,light:{offset:0},dark:{offset:0},transparency:e.opacity[200]}),c.disabledBg=G({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]})):r?(c.fg=G({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),c.hoverFg=G({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),c.hoverBg=G({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]}),c.activeFg=G({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),c.activeBg=G({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[200]}),c.disabledBg=G({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]})):a?(c.fg=G({theme:e,variable:`foreground.danger`}),c.border=G({theme:e,variable:`border.dangerEmphasis`}),c.hoverFg=G({theme:e,variable:`foreground.danger`,light:{offset:100},dark:{offset:-100}}),c.hoverBg=G({theme:e,variable:`background.dangerEmphasis`,light:{offset:0},dark:{offset:0},transparency:e.opacity[100]}),c.hoverBorder=G({theme:e,variable:`border.dangerEmphasis`,light:{offset:100},dark:{offset:-100}}),c.activeFg=G({theme:e,variable:`foreground.danger`,light:{offset:200},dark:{offset:-200}}),c.activeBg=G({theme:e,variable:`background.dangerEmphasis`,light:{offset:0},dark:{offset:0},transparency:e.opacity[200]}),c.activeBorder=G({theme:e,variable:`border.dangerEmphasis`,light:{offset:200},dark:{offset:-200}}),c.disabledBg=G({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]})):(c.fg=G({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),c.border=G({theme:e,hue:`neutralHue`,light:{shade:500},dark:{shade:600}}),c.hoverFg=G({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),c.hoverBg=G({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]}),c.hoverBorder=G({theme:e,hue:`neutralHue`,light:{shade:600},dark:{shade:500}}),c.activeFg=G({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),c.activeBg=G({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[200]}),c.activeBorder=G({theme:e,hue:`neutralHue`,light:{shade:700},dark:{shade:400}}),c.disabledBg=G({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]}),c.disabledBorder=`transparent`),i===!1&&!n&&!o&&!a&&(c.fg=G({theme:e,variable:`foreground.primary`}),c.hoverFg=G({theme:e,variable:`foreground.primary`,light:{offset:100},dark:{offset:-100}}),c.activeFg=G({theme:e,variable:`foreground.primary`,light:{offset:200},dark:{offset:-200}}));let u=e.borderRadii.full;o?u=`0`:t===!1&&(u=e.borderRadii.md);let d=!n&&!o&&!a&&i!==!1,f={theme:e,variable:`foreground.subtle`},p={light:{offset:100},dark:{offset:-100}},m={light:{offset:200},dark:{offset:-200}};return z`
    ${!o&&`font-weight: ${e.fontWeights.semibold};`}
    border-radius: ${u};
    ${Kl({theme:e,...c})}

    ${o&&Ia({theme:e,condition:!1,styles:{borderRadius:e.borderRadii.sm,outlineColor:G({theme:e,variable:`border.primaryEmphasis`}),outlineOffset:e.shadowWidths.sm}})}

    ${l&&z`
      /*
       * Neutral buttons in an InputGroup share the input's resting border.
       * Interactive, pressed, and disabled states retain their button-specific
       * colors.
       */
      [data-garden-id='forms.input_group']
        &:not(:hover):not(:focus-visible):not(:active):not([aria-pressed='true']):not([aria-pressed='mixed']):not(
          :disabled
        ) {
        border-color: ${l};
      }
    `}

    ${d&&z`
      & [data-garden-id='buttons.icon'] {
        color: ${G(f)};
      }

      &:hover [data-garden-id='buttons.icon'],
      &:focus-visible [data-garden-id='buttons.icon'] {
        color: ${G({...f,...p})};
      }

      &:active [data-garden-id='buttons.icon'],
      &[aria-pressed='true'] [data-garden-id='buttons.icon'],
      &[aria-pressed='mixed'] [data-garden-id='buttons.icon'] {
        color: ${G({...f,...m})};
      }

      &:disabled [data-garden-id='buttons.icon'] {
        color: ${G({theme:e,variable:`foreground.disabled`})};
      }
    `}

    && svg {
      width: ${oo(e,s===`small`)};
      height: ${oo(e,s===`small`)};
    }
  `},Jl=({theme:e,$isPill:t,$isPrimary:n,$isBasic:r,$isDanger:i})=>{let a={};return n&&i?(a.bg=G({theme:e,variable:`background.dangerEmphasis`}),a.fg=G({theme:e,variable:`foreground.onEmphasis`}),a.hoverBg=G({theme:e,variable:`background.dangerEmphasis`,light:{offset:100},dark:{offset:-100}}),a.activeBg=G({theme:e,variable:`background.dangerEmphasis`,light:{offset:200},dark:{offset:-200}}),a.disabledBg=G({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]})):n?(a.bg=G({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),a.fg=G({theme:e,variable:`foreground.onEmphasis`,light:{offset:0},dark:{offset:0}}),a.hoverBg=G({theme:e,hue:`neutralHue`,light:{shade:800},dark:{shade:200}}),a.activeBg=G({theme:e,hue:`neutralHue`,light:{shade:700},dark:{shade:100}}),a.disabledBg=G({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]})):i&&!r?(a.fg=G({theme:e,variable:`foreground.danger`}),a.border=G({theme:e,variable:`border.dangerEmphasis`}),a.hoverFg=G({theme:e,variable:`foreground.danger`,light:{offset:100},dark:{offset:-100}}),a.hoverBg=G({theme:e,variable:`background.dangerEmphasis`,light:{offset:0},dark:{offset:0},transparency:e.opacity[100]}),a.hoverBorder=G({theme:e,variable:`border.dangerEmphasis`,light:{offset:100},dark:{offset:-100}}),a.activeFg=G({theme:e,variable:`foreground.danger`,light:{offset:200},dark:{offset:-200}}),a.activeBg=G({theme:e,variable:`background.dangerEmphasis`,light:{offset:0},dark:{offset:0},transparency:e.opacity[200]}),a.activeBorder=G({theme:e,variable:`border.dangerEmphasis`,light:{offset:200},dark:{offset:-200}})):i?(a.fg=G({theme:e,variable:`foreground.danger`}),a.hoverFg=G({theme:e,variable:`foreground.danger`,light:{offset:100},dark:{offset:-100}}),a.hoverBg=G({theme:e,variable:`background.dangerEmphasis`,light:{offset:0},dark:{offset:0},transparency:e.opacity[100]}),a.activeFg=G({theme:e,variable:`foreground.danger`,light:{offset:200},dark:{offset:-200}}),a.activeBg=G({theme:e,variable:`background.dangerEmphasis`,light:{offset:0},dark:{offset:0},transparency:e.opacity[200]})):r?(a.fg=G({theme:e,hue:`neutralHue`,light:{shade:700},dark:{shade:500}}),a.hoverFg=G({theme:e,hue:`neutralHue`,light:{shade:800},dark:{shade:400}}),a.hoverBg=G({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]}),a.activeFg=G({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),a.activeBg=G({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[200]})):(a.fg=G({theme:e,hue:`neutralHue`,light:{shade:700},dark:{shade:500}}),a.border=G({theme:e,hue:`neutralHue`,light:{shade:500},dark:{shade:600}}),a.hoverFg=G({theme:e,hue:`neutralHue`,light:{shade:800},dark:{shade:400}}),a.hoverBg=G({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]}),a.hoverBorder=G({theme:e,hue:`neutralHue`,light:{shade:600},dark:{shade:700}}),a.activeFg=G({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),a.activeBg=G({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[200]}),a.activeBorder=G({theme:e,hue:`neutralHue`,light:{shade:700},dark:{shade:400}})),z`
    border-radius: ${t===!1?e.borderRadii.md:e.borderRadii.full};
    ${Kl({theme:e,...a})}

    && svg {
      width: ${e.space.md};
      height: ${e.space.md};
    }
  `},Yl=e=>({bg:G({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),hoverBg:G({theme:e,hue:`neutralHue`,light:{shade:800},dark:{shade:200}}),activeBg:G({theme:e,hue:`neutralHue`,light:{shade:700},dark:{shade:100}}),disabledBg:G({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[300]})}),Xl=(e,t)=>z`
  && ~ label + ${Fc} {
    margin-top: ${e.space.base*(t?1:2)}px;
  }
`,Zl=({theme:e,$isCompact:t})=>{let{bg:n,hoverBg:r,activeBg:i,disabledBg:a}=Yl(e),o=G({theme:e,hue:`neutralHue`,light:{shade:500},dark:{shade:600}}),s=G({theme:e,variable:`border.disabled`}),c=G({theme:e,variable:`background.primaryEmphasis`,transparency:e.opacity[100]}),l=G({theme:e,variable:`background.primaryEmphasis`,transparency:e.opacity[200]}),u=G({theme:e,variable:`border.primaryEmphasis`});return z`
    ${Xl(e,t)}

    /* Shape */
    && ~ label::before {
      border-radius: ${e.borderRadii.sm};
    }

    /* Unchecked default */
    &&:not(:checked):not(:indeterminate) ~ label::before {
      background-color: transparent;
      border: ${e.borderWidths.sm} solid ${o};
    }

    /* Unchecked hover */
    &&:enabled:not(:checked):not(:indeterminate) ~ label:hover::before {
      background-color: ${c};
      border-color: ${u};
    }

    /* Unchecked active */
    &&:enabled:not(:checked):not(:indeterminate) ~ label:active::before {
      background-color: ${l};
      border-color: ${u};
    }

    /* Unchecked disabled */
    &&:disabled:not(:checked):not(:indeterminate) ~ label::before {
      background-color: transparent;
      border-color: ${s};
    }

    /* Checked / indeterminate default: solid neutral fill */
    &&:checked ~ label::before,
    &&:indeterminate ~ label::before {
      background-color: ${n};
      border: ${e.borderWidths.sm} solid transparent;
    }

    /* Checked / indeterminate hover */
    &&:enabled:checked ~ label:hover::before,
    &&:enabled:indeterminate ~ label:hover::before {
      background-color: ${r};
    }

    /* Checked / indeterminate active */
    &&:enabled:checked ~ label:active::before,
    &&:enabled:indeterminate ~ label:active::before {
      background-color: ${i};
    }

    /* Checked / indeterminate disabled */
    &&:disabled:checked ~ label::before,
    &&:disabled:indeterminate ~ label::before {
      background-color: ${a};
    }

    /* Check / dash icon: white when checked */
    &&:checked ~ label > svg,
    &&:indeterminate ~ label > svg {
      color: ${G({theme:e,variable:`foreground.onEmphasis`})};
    }
  `},Ql=()=>z`
  overflow: hidden;
`,$l=({theme:e,$isCompact:t})=>z`
    ${xc}:not([hidden]) + &&,
    ${Fc} + &&,
    ${Dc} + &&,
    && + ${Fc},
    && + ${Dc} {
      margin-top: ${`${e.space.base*(t?1:2)}px`};
    }
  `,eu=`forms.input_message_icon`,tu=e=>({theme:t,$validation:n})=>{if(!n)return z``;let r=t.rtl?`right`:`left`,i=`${t.space.base*e}px`,a=`${t.space.base*2}px`;return z`
      /* &&& ties Garden's "label + &" display rule and wins on source order */
      &&& {
        display: flex;
        align-items: flex-start;
        padding-${r}: ${i};
      }

      & [data-garden-id='${eu}'] {
        position: static;
        flex-shrink: 0;
        margin-${t.rtl?`left`:`right`}: ${a};
        margin-top: -1px; /* optical alignment, matches Garden */
      }
    `},nu=tu(6),ru=tu(0),iu=tu(6),au=tu(12),ou=({theme:e,$isCompact:t})=>{let{bg:n,hoverBg:r,activeBg:i,disabledBg:a}=Yl(e),o=G({theme:e,hue:`neutralHue`,light:{shade:500},dark:{shade:600}}),s=G({theme:e,variable:`border.disabled`}),c=G({theme:e,variable:`background.primaryEmphasis`,transparency:e.opacity[100]}),l=G({theme:e,variable:`background.primaryEmphasis`,transparency:e.opacity[200]}),u=G({theme:e,variable:`border.primaryEmphasis`});return z`
    ${Xl(e,t)}

    /* Unchecked default */
    &&:not(:checked) ~ label::before {
      background-color: transparent;
      border: ${e.borderWidths.sm} solid ${o};
    }

    /* Unchecked hover */
    &&:enabled:not(:checked) ~ label:hover::before {
      background-color: ${c};
      border-color: ${u};
    }

    /* Unchecked active */
    &&:enabled:not(:checked) ~ label:active::before {
      background-color: ${l};
      border-color: ${u};
    }

    /* Unchecked disabled */
    &&:disabled:not(:checked) ~ label::before {
      background-color: transparent;
      border-color: ${s};
    }

    /* Checked default: solid neutral fill */
    &&:checked ~ label::before {
      background-color: ${n};
      border: ${e.borderWidths.sm} solid transparent;
    }

    /* Checked hover */
    &&:enabled:checked ~ label:hover::before {
      background-color: ${r};
    }

    /* Checked active */
    &&:enabled:checked ~ label:active::before {
      background-color: ${i};
    }

    /* Checked disabled */
    &&:disabled:checked ~ label::before {
      background-color: ${a};
    }
  `},su=({theme:e})=>{let{bg:t,hoverBg:n,activeBg:r}=Yl(e);return z`
    /* Checked default: solid neutral fill (matches Figma's checked state) */
    &:has(:checked) {
      background-color: ${t};
    }

    /* Checked hover */
    &:hover:has(:checked) {
      background-color: ${n};
    }

    /* Checked active: not covered by the Figma spec, inferred for parity
     * with checkbox/radio/toggle's checked:active treatment. */
    &:active:has(:checked) {
      background-color: ${r};
    }
  `},cu=({theme:e,$isCentered:t})=>{if(t)return z`
    margin-top: ${e.space.base*2}px;
  `},lu=({theme:e,$isCompact:t})=>{let{bg:n,hoverBg:r,activeBg:i,disabledBg:a}=Yl(e),o=G({theme:e,hue:`neutralHue`,shade:600}),s=G({theme:e,variable:`border.disabled`}),c=G({theme:e,hue:`primaryHue`,light:{shade:700},dark:{shade:500},transparency:e.opacity[100]}),l=G({theme:e,hue:`primaryHue`,light:{shade:700},dark:{shade:500},transparency:e.opacity[200]}),u=G({theme:e,variable:`border.primaryEmphasis`}),d=G({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]}),f=G({theme:e,variable:`foreground.onEmphasis`});return z`
    ${Xl(e,t)}

    /* Track shape */
    && ~ label::before {
      border-radius: ${e.borderRadii.full};
    }

    /* Unchecked default: border-only, transparent fill */
    &&:not(:checked) ~ label::before {
      background-color: transparent;
      border: ${e.borderWidths.sm} solid ${o};
    }

    /* Unchecked hover */
    &&:enabled:not(:checked) ~ label:hover::before {
      background-color: ${c};
      border-color: ${u};
    }

    /* Unchecked active */
    &&:enabled:not(:checked) ~ label:active::before {
      background-color: ${l};
      border-color: ${u};
    }

    /* Unchecked disabled */
    &&:disabled:not(:checked) ~ label::before {
      background-color: transparent;
      border-color: ${s};
    }

    /* Checked default: solid neutral fill */
    &&:checked ~ label::before {
      background-color: ${n};
      border: ${e.borderWidths.sm} solid transparent;
    }

    /* Checked hover */
    &&:enabled:checked ~ label:hover::before {
      background-color: ${r};
    }

    /* Checked active */
    &&:enabled:checked ~ label:active::before {
      background-color: ${i};
    }

    /* Checked disabled */
    &&:disabled:checked ~ label::before {
      background-color: ${a};
    }

    /* Unchecked thumb default: previews the neutral-emphasis fill */
    &&:not(:checked) ~ label > svg {
      color: ${n};
    }

    /* Unchecked thumb hover */
    &&:enabled:not(:checked) ~ label:hover > svg {
      color: ${r};
    }

    /* Unchecked thumb active */
    &&:enabled:not(:checked) ~ label:active > svg {
      color: ${i};
    }

    /* Unchecked thumb disabled */
    &&:disabled:not(:checked) ~ label > svg {
      color: ${d};
    }

    /* Checked thumb: always on-emphasis (white), regardless of state */
    &&:checked ~ label > svg {
      color: ${f};
    }
  `},uu=({theme:e})=>z`
  border-radius: ${e.borderRadii.sm};
`,du=({theme:e})=>z`
  margin-inline-start: ${e.space.sm};

  &:first-child {
    margin-inline-start: 0;
  }
`,fu=({theme:e})=>z`
  border-radius: ${e.borderRadii.xl};
`,pu=({theme:e})=>z`
  border-radius: ${e.borderRadii.xl};
`,mu=({theme:e})=>z`
  padding-top: ${e.space.xs};
`,hu=({theme:e})=>z`
  padding-top: ${e.space.sm};
`,gu=({theme:e})=>`${e.space.base/2}px`,_u=`> li:not([data-garden-id='dropdowns.menu.separator']) + li:not([data-garden-id='dropdowns.menu.separator'])`,vu=({theme:e,$isActive:t,$type:n})=>{if(n===`group`)return``;let r=t&&n!==`header`;return z`
    border-radius: ${e.borderRadii.sm};

    ${r&&z`
      overflow: hidden;
      box-shadow: none;

      &::before {
        position: absolute;
        box-sizing: border-box;
        top: 0;
        bottom: 0;
        inset-inline-start: 0;
        width: ${e.space.base}px;
        border-inline-end: ${e.borderWidths.sm} solid ${G({theme:e,variable:`background.default`})};
        background-color: ${G({theme:e,variable:`border.primaryEmphasis`})};
        pointer-events: none;
        content: '';
      }
    `}

    &[aria-disabled='true'] {
      &::before {
        display: none;
      }
    }
  `},yu=({theme:e})=>z`
  && {
    padding: ${e.space.xxs};
  }

  ${_u} {
    margin-block-start: ${gu({theme:e})};
  }
`,bu=e=>vu(e),xu=e=>vu(e),Su=({theme:e})=>z`
  margin: ${e.space.xxs} ${e.space.xs};
`,Cu=({theme:e})=>z`
  ${_u} {
    margin-block-start: ${gu({theme:e})};
  }
`,wu=({theme:e,$type:t})=>{switch(t){case`success`:return G({theme:e,hue:`successHue`,light:{shade:200},dark:{shade:900}});case`error`:return G({theme:e,hue:`dangerHue`,light:{shade:200},dark:{shade:900}});case`warning`:return G({theme:e,hue:`warningHue`,light:{shade:200},dark:{shade:900}});case`info`:return G({theme:e,hue:`neutralHue`,light:{shade:200},dark:{shade:900}});default:return G({theme:e,hue:`neutralHue`,light:{shade:200},dark:{shade:900}})}},Tu=({theme:e,$type:t})=>{switch(t){case`success`:return G({theme:e,variable:`foreground.successEmphasis`});case`error`:return G({theme:e,variable:`foreground.dangerEmphasis`});case`warning`:return G({theme:e,variable:`foreground.warningEmphasis`});case`info`:return G({theme:e,variable:`foreground.default`});default:return G({theme:e,variable:`foreground.default`})}},Eu=({theme:e,$type:t})=>z`
  padding: ${e.space.base*4}px ${e.space.base*10}px;
  border-radius: ${e.borderRadii.xl};
  border-color: transparent;
  background-color: ${wu({theme:e,$type:t})};
  color: ${Tu({theme:e,$type:t})};
`,Du=({theme:e})=>z`
  padding: ${e.space.base*4}px ${e.space.base*10}px;
  border-radius: ${e.borderRadii.xl};
  box-shadow: ${e.shadows.lg(`${e.space.base*4}px`,`${e.space.base*6}px`,G({theme:e,variable:`shadow.medium`}))};
`,Ou=({theme:e})=>{let t=G({theme:e,variable:`foreground.subtle`}),n=G({theme:e,variable:`foreground.subtle`,light:{offset:100},dark:{offset:-100}}),r=G({theme:e,variable:`foreground.subtle`,light:{offset:200},dark:{offset:-200}});return z`
    top: ${e.space.base*2}px;
    ${e.rtl?`left`:`right`}: ${e.space.base*2}px;

    color: ${t};

    &:hover {
      color: ${n};
    }

    &:active {
      color: ${r};
    }
  `},ku=({theme:e})=>z`
  ${e.rtl?`right`:`left`}: ${e.space.base*3}px;
  margin-top: 0;
  top: ${e.space.base*4}px;
`,Au=({theme:e})=>z`
  border-radius: ${e.borderRadii.xl};
`,ju=(e,t)=>Ia({theme:e,color:{hue:`neutralHue`,shade:900},styles:t}),Mu=({theme:e})=>z`
  && a {
    border-radius: ${e.borderRadii.md};

    /* Preserve the inherited anchor color while focused, matching Garden */
    ${ju(e,{color:`inherit`})}
  }
`,Nu=({theme:e,isBasic:t,$isBasic:n})=>{let r=t??n;return z`
    ${ql({theme:e,$isPrimary:!r,$isBasic:r})}
    ${ju(e)}
  `},Pu=({theme:e,alertType:t,$alertType:n})=>{let r=t??n??`info`,i=r===`success`||r===`error`,a=G(i?{theme:e,hue:`white`}:{theme:e,hue:`neutralHue`,shade:900}),o=G(i?{theme:e,hue:`white`,transparency:e.opacity[100]}:{theme:e,hue:`neutralHue`,shade:900,transparency:e.opacity[100]}),s=G(i?{theme:e,hue:`white`,transparency:e.opacity[200]}:{theme:e,hue:`neutralHue`,shade:900,transparency:e.opacity[200]});return z`
    border-radius: ${e.borderRadii.full};
    color: ${a};

    &:hover {
      background-color: ${o};
      color: ${a};
    }

    ${ju(e,{color:a})}

    &:active {
      background-color: ${s};
      color: ${a};
    }
  `},Fu=[`primaryHue`,`dangerHue`,`warningHue`,`successHue`,`neutralHue`,`chromeHue`],Iu=e=>!e||e===`grey`||e===`neutralHue`,Lu=(e,t)=>Fu.includes(t)||Object.prototype.hasOwnProperty.call(e.palette??{},t),Ru=({theme:e,$hue:t,$isEmphasis:n})=>{if(Iu(t))return n?{bg:G({theme:e,hue:`neutralHue`,light:{shade:700},dark:{shade:400}}),fg:G({theme:e,variable:`foreground.onEmphasis`})}:{bg:G({theme:e,hue:`neutralHue`,light:{shade:200},dark:{shade:900}}),fg:G({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}})};if(Lu(e,t))return n?{bg:G({theme:e,hue:t,light:{shade:700},dark:{shade:600}}),fg:G({theme:e,variable:`foreground.onEmphasis`})}:{bg:G({theme:e,hue:t,light:{shade:200},dark:{shade:900}}),fg:G({theme:e,hue:t,light:{shade:900},dark:{shade:300}})};let r={...e,colors:{...e.colors,base:`light`}},i={...e,colors:{...e.colors,base:`dark`}},a=G({theme:e,hue:t});return{bg:a,fg:$i(a,G({theme:i,variable:`foreground.onEmphasis`}),G({theme:r,variable:`foreground.onEmphasis`}),!1)}},zu=e=>{let{theme:t}=e,{bg:n,fg:r}=Ru(e),i=t.rtl?`right`:`left`,a=t.rtl?`left`:`right`,o=`${t.space.base}px`;return z`
    background-color: ${n};
    color: ${r};

    &:hover {
      color: ${r};
    }

    /*
     * Avatar→Icon spacing: a ${t.space.base}px gap to the label plus a small
     * leading inset. The full Avatar→Icon swap and the Tag.Icon slot are
     * deferred (see TAG_RESTYLE_HANDOFF.md, "Out of scope").
     */
    & [data-garden-id='tags.avatar'] {
      margin-${i}: -${o};
      margin-${a}: ${o};
    }

    & [data-garden-id='tags.close'] {
      margin-${a}: -${o};
    }
  `},Bu={"buttons.button":ql,"buttons.icon_button":Jl},Vu={"forms.checkbox":Zl,"forms.checkbox_message":nu,"forms.file":Ql,"forms.file_upload":$l,"forms.input_message":ru,"forms.radio":ou,"forms.radio_message":iu,"forms.tile":su,"forms.tile_description":cu,"forms.toggle":lu,"forms.toggle_message":au},Hu={"loaders.skeleton":uu},Uu={"modals.modal":fu,"modals.footer_item":du,"modals.tooltip_dialog":pu,"modals.tooltip_dialog.body":mu,"modals.tooltip_dialog.footer":hu,"modals.tooltip_dialog.footer_item":du,"modals.close":Jl,"modals.drawer_modal.close":Jl,"modals.drawer_modal.footer_item":du,"modals.tooltip_dialog.close":Jl},Wu={"dropdowns.menu":yu,"dropdowns.menu.item":bu,"dropdowns.menu.item_anchor":xu,"dropdowns.menu.separator":Su,"dropdowns.menu.item_group":Cu},Gu={"notifications.alert":Eu,"notifications.well":Au,"notifications.notification":Du,"notifications.close":Ou,"notifications.icon":ku,"notifications.global_alert":Mu,"notifications.global_alert.button":Nu,"notifications.global_alert.close":Pu},Ku={"tags.tag_view":zu},qu={black:`#000`,white:`#ffffff`,product:{support:`#00a656`,explore:`#30aabc`,gather:`#f6c8be`,guide:`#eb4962`,chat:`#f79a3e`,talk:`#efc93d`,sell:`#c38f00`},grey:{100:`#f7f7f7`,200:`#eae9e8`,300:`#dcdcda`,400:`#b7b7b3`,500:`#999b97`,600:`#8b8e89`,700:`#646864`,800:`#404241`,900:`#2f3130`,1e3:`#202121`,1100:`#19191a`,1200:`#0c0c0d`},blue:{100:`#f3f6fb`,200:`#e4eaf6`,300:`#d4ddf0`,400:`#a3b7df`,500:`#7f9bd3`,600:`#698cd3`,700:`#406cc4`,800:`#284173`,900:`#1f335a`,1e3:`#14213b`,1100:`#0c1322`,1200:`#080c16`},red:{100:`#fbf3f3`,200:`#f7e5e6`,300:`#f3d7d9`,400:`#e5a8ab`,500:`#da8286`,600:`#d46f74`,700:`#c63f46`,800:`#792428`,900:`#5f1c20`,1e3:`#3f1315`,1100:`#260b0d`,1200:`#190708`},yellow:{100:`#faf6da`,200:`#f6eba6`,300:`#eedf7a`,400:`#ccb748`,500:`#b09b0f`,600:`#a08d0e`,700:`#7f7004`,800:`#4c4207`,900:`#3b3405`,1e3:`#262203`,1100:`#171402`,1200:`#0e0d01`},green:{100:`#eff9e6`,200:`#ddf0c9`,300:`#c6e8a1`,400:`#91c466`,500:`#6dab2c`,600:`#649c28`,700:`#4b7d04`,800:`#2f4913`,900:`#25390f`,1e3:`#18250a`,1100:`#0e1606`,1200:`#090e04`},purple:{100:`#f7f4fa`,200:`#eee7f3`,300:`#e5daec`,400:`#c6aed7`,500:`#af8ec7`,600:`#a47ebf`,700:`#8d59b1`,800:`#54356a`,900:`#422953`,1e3:`#2b1b36`,1100:`#191020`,1200:`#100a14`},fuschia:{100:`#fbf3f8`,200:`#f7e6f1`,300:`#f2d5e7`,400:`#e3a4cc`,500:`#d77db7`,600:`#d16aac`,700:`#b34496`,800:`#78116c`,900:`#5a0d51`,1e3:`#3f0939`,1100:`#31072c`,1200:`#1b0418`},pink:{100:`#fcf3f4`,200:`#f7e5e8`,300:`#f3d6dc`,400:`#e5a6b4`,500:`#d98193`,600:`#d96b81`,700:`#d62054`,800:`#75263d`,900:`#561d2e`,1e3:`#3c141f`,1100:`#2e0f18`,1200:`#17080c`},crimson:{100:`#fbf3f2`,200:`#f7e7e4`,300:`#f1d7d2`,400:`#e2aaa0`,500:`#d58678`,600:`#cf7464`,700:`#be4938`,800:`#811b12`,900:`#61140d`,1e3:`#440e09`,1100:`#340b07`,1200:`#1c0604`},orange:{100:`#fdf3ed`,200:`#fae7d8`,300:`#f7d7be`,400:`#eda875`,500:`#e58035`,600:`#d57428`,700:`#af5626`,800:`#693317`,900:`#4d2711`,1e3:`#361a0c`,1100:`#291409`,1200:`#150a04`},lemon:{100:`#fff7d4`,200:`#ffea97`,300:`#ffdc4f`,400:`#efab00`,500:`#c79100`,600:`#b68500`,700:`#8f6900`,800:`#563e00`,900:`#3f2e00`,1e3:`#2b2000`,1100:`#221800`,1200:`#110c00`},lime:{100:`#ecfae7`,200:`#d1f3c7`,300:`#b3eda3`,400:`#4fd12b`,500:`#45b025`,600:`#509f2d`,700:`#3d7e19`,800:`#2c491b`,900:`#203614`,1e3:`#16250e`,1100:`#111d0a`,1200:`#090e05`},mint:{100:`#d6ffeb`,200:`#9affce`,300:`#0afe89`,400:`#00d26d`,500:`#01b15c`,600:`#16a260`,700:`#2d7e55`,800:`#1b4b33`,900:`#143726`,1e3:`#0e261a`,1100:`#0b1d14`,1200:`#050e0a`},teal:{100:`#d4fefa`,200:`#88fdf1`,300:`#0bf8e1`,400:`#03cdb8`,500:`#02ad9c`,600:`#2a9d8f`,700:`#367a74`,800:`#254846`,900:`#1b3534`,1e3:`#122423`,1100:`#0e1c1a`,1200:`#070d0d`},azure:{100:`#eff7fe`,200:`#d9ecfc`,300:`#c4e0fa`,400:`#82bcf4`,500:`#4b9fee`,600:`#3191ea`,700:`#2770c3`,800:`#23446b`,900:`#1a3250`,1e3:`#122238`,1100:`#0e1a2a`,1200:`#070d14`},royal:{100:`#f4f5fc`,200:`#e7e9f8`,300:`#d8dcf4`,400:`#acb4e7`,500:`#8a96dd`,600:`#7a88d9`,700:`#4c67d3`,800:`#1833ab`,900:`#122680`,1e3:`#0d1a5a`,1100:`#0a1445`,1200:`#050a25`},kale:{100:`#ecf9f9`,200:`#daeded`,300:`#cbe2e1`,400:`#97bfbf`,500:`#6ba4a5`,600:`#4a9999`,700:`#40787a`,800:`#16494f`,900:`#063940`,1e3:`#03252a`,1100:`#061517`,1200:`#060e0e`}},{product:Ju,...Yu}=qu,Xu={primaryHue:`blue`,dangerHue:`red`,warningHue:`yellow`,successHue:`green`,neutralHue:`grey`,chromeHue:`kale`,variables:{dark:{background:{default:`neutralHue.1100`,raised:`neutralHue.1000`,recessed:`neutralHue.1200`,subtle:`neutralHue.1000`,emphasis:`neutralHue.600`,success:`successHue.1000`,warning:`warningHue.1000`,danger:`dangerHue.1000`,primaryEmphasis:`primaryHue.600`,successEmphasis:`successHue.600`,warningEmphasis:`warningHue.600`,dangerEmphasis:`dangerHue.600`,disabled:`rgba(white, 100)`},border:{default:`neutralHue.800`,emphasis:`neutralHue.600`,subtle:`neutralHue.900`,success:`successHue.900`,warning:`warningHue.900`,danger:`dangerHue.900`,primaryEmphasis:`primaryHue.600`,successEmphasis:`successHue.600`,warningEmphasis:`warningHue.600`,dangerEmphasis:`dangerHue.600`,disabled:`neutralHue.800`},foreground:{default:`neutralHue.300`,subtle:`neutralHue.500`,onEmphasis:`neutralHue.1100`,primary:`primaryHue.600`,success:`successHue.400`,warning:`warningHue.400`,danger:`dangerHue.400`,successEmphasis:`successHue.300`,warningEmphasis:`warningHue.300`,dangerEmphasis:`dangerHue.300`,disabled:`neutralHue.700`},shadow:{small:`rgba(neutralHue.1200, 1100)`,medium:`rgba(neutralHue.1200, 800)`,large:`rgba(neutralHue.1200, 1000)`}},light:{background:{default:`palette.white`,raised:`palette.white`,recessed:`neutralHue.100`,subtle:`neutralHue.100`,emphasis:`neutralHue.700`,success:`successHue.100`,warning:`warningHue.100`,danger:`dangerHue.100`,primaryEmphasis:`primaryHue.700`,successEmphasis:`successHue.700`,warningEmphasis:`warningHue.700`,dangerEmphasis:`dangerHue.700`,disabled:`rgba(neutralHue.700, 100)`},border:{default:`neutralHue.300`,emphasis:`neutralHue.600`,subtle:`neutralHue.200`,success:`successHue.300`,warning:`warningHue.300`,danger:`dangerHue.300`,primaryEmphasis:`primaryHue.700`,successEmphasis:`successHue.700`,warningEmphasis:`warningHue.700`,dangerEmphasis:`dangerHue.700`,disabled:`neutralHue.300`},foreground:{default:`neutralHue.900`,subtle:`neutralHue.700`,onEmphasis:`palette.white`,primary:`primaryHue.700`,success:`successHue.700`,warning:`warningHue.700`,danger:`dangerHue.700`,successEmphasis:`successHue.900`,warningEmphasis:`warningHue.900`,dangerEmphasis:`dangerHue.900`,disabled:`neutralHue.600`},shadow:{small:`rgba(neutralHue.1200, 200)`,medium:`rgba(neutralHue.1200, 200)`,large:`rgba(neutralHue.1200, 200)`}}}},Zu=(e=dr)=>({...e,components:{...e.components,...Bu,...Vu,...Hu,...Wu,...Uu,...Gu,...Ku},borders:{...e.borders},borderRadii:{...e.borderRadii,xs:`2px`,sm:`4px`,md:`8px`,lg:`12px`,xl:`16px`,xxl:`24px`,full:`9999px`},borderStyles:{...e.borderStyles},borderWidths:{...e.borderWidths},breakpoints:{...e.breakpoints},fonts:{...e.fonts},fontSizes:{...e.fontSizes},fontWeights:{...e.fontWeights},iconSizes:{...e.iconSizes},lineHeights:{...e.lineHeights},opacity:{...e.opacity},shadowWidths:{...e.shadowWidths},shadows:{...e.shadows},space:{...e.space},colors:{...e.colors,...Xu,base:e.colors?.base??`light`},palette:{...e.palette,...Yu}}),Qu=Zu(),$u={success:`success`,error:`error`,warning:`warning`,info:`info`},ed=B.p.attrs({"data-garden-id":`notifications.paragraph`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledParagraph`,componentId:`sc-12tmd6p-0`})([`margin:`,`px 0 0;`,`;`],e=>e.theme.space.base*2,V),td=B.div.attrs({"data-garden-id":`notifications.title`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledTitle`,componentId:`sc-xx4jsv-0`})([`margin:0;color:`,`;font-weight:`,`;`,`;`],e=>G({variable:`foreground.default`,theme:e.theme}),e=>e.$isRegular?e.theme.fontWeights.regular:e.theme.fontWeights.semibold,V),nd=B(B.div.attrs({"data-garden-id":`notifications.base_container`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledBase`,componentId:`sc-14syaqw-0`})([`position:relative;border:`,`;border-radius:`,`;padding:`,`;line-height:`,`;font-size:`,`;direction:`,`;`,`;`,``],e=>e.theme.borders.sm,e=>e.theme.borderRadii.md,e=>{let{space:t}=e.theme;return`${`${t.base*5}px`} ${`${t.base*10}px`}`},e=>Na(e.theme.space.base*5,e.theme.fontSizes.md),e=>e.theme.fontSizes.md,e=>e.theme.rtl&&`rtl`,({theme:e,$type:t,$isFloating:n})=>{let{space:r,shadows:i}=e,a,o,s;if(!n&&t&&$u[t])switch(t){case $u.success:a=`background.success`,o=`border.success`,s=`foreground.success`;break;case $u.error:a=`background.danger`,o=`border.danger`,s=`foreground.danger`;break;case $u.warning:a=`background.warning`,o=`border.warning`,s=`foreground.warning`;break;case $u.info:a=`background.subtle`,o=`border.default`,s=`foreground.subtle`}else a=`background.raised`,o=`border.default`,s=`foreground.default`;let c=G({variable:a,theme:e}),l=G({variable:o,theme:e}),u=G({variable:s,theme:e}),d=`${r.base*5}px`,f=`${r.base*7}px`;return z([`border-color:`,`;box-shadow:`,`;background-color:`,`;color:`,`;`],l,n?i.lg(d,f,G({variable:`shadow.large`,theme:e})):void 0,c,u)},V)).attrs({"data-garden-id":`notifications.well`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledWell`,componentId:`sc-a5831c-0`})([``,` `,`;`],({theme:e,$isFloating:t,$isRecessed:n})=>{let r;r=n?`background.recessed`:t?`background.raised`:`background.default`;let i=G({variable:`foreground.subtle`,theme:e});return z([`background-color:`,`;color:`,`;`],G({variable:r,theme:e}),i)},V),rd=g.forwardRef(({isRegular:e,...t},n)=>g.createElement(td,Object.assign({ref:n,$isRegular:e},t)));rd.displayName=`Notification.Title`;var id=g.forwardRef((e,t)=>g.createElement(ed,Object.assign({ref:t},e)));id.displayName=`Notification.Paragraph`;var ad=g.forwardRef(({isFloating:e,isRecessed:t,...n},r)=>g.createElement(nd,Object.assign({ref:r,$isFloating:e,$isRecessed:t},n)));ad.displayName=`Well`,ad.propTypes={isRecessed:O.default.bool,isFloating:O.default.bool};var od=ad;od.Paragraph=id,od.Title=rd;var sd=B.tbody.attrs({"data-garden-id":`tables.body`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledBody`,componentId:`sc-14ud6y-0`})([``,`;`],V),cd=B.caption.attrs({"data-garden-id":`tables.caption`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledCaption`,componentId:`sc-113y327-0`})([`display:table-caption;text-align:`,`;`,`;`],e=>e.theme.rtl?`right`:`left`,V),ld=B.tr.withConfig({displayName:`StyledBaseRow`,componentId:`sc-1t4zqg4-0`})([`display:table-row;transition:background-color 0.1s ease-in-out;`,` `,``],({theme:e})=>z([`border-bottom:`,`;vertical-align:top;box-sizing:border-box;`],e.borders.sm),({theme:e,$isStriped:t})=>{let n=G({variable:`border.subtle`,theme:e}),r=G({variable:`background.subtle`,transparency:e.opacity[100],light:{offset:300},dark:{offset:-600},theme:e});return z([`border-bottom-color:`,`;background-color:`,`;`],n,t&&r)}),ud=e=>e.$size===`large`?`${e.theme.space.base*16}px`:e.$size===`small`?`${e.theme.space.base*8}px`:`${e.theme.space.base*10}px`,dd=B(Js).attrs({"data-garden-id":`tables.overflow_button`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledOverflowButton`,componentId:`sc-1eba2ml-0`})([`margin-top:calc(`,` - 1em);width:100%;min-width:unset;height:`,`;font-size:inherit;`,`;`],e=>H(`${ud(e)} / 2`),`2em`,V),fd=`tables.header_row`,pd=e=>e.$size===`large`?`${e.theme.space.base*18}px`:e.$size===`small`?`${e.theme.space.base*10}px`:`${e.theme.space.base*12}px`,md=B(ld).attrs({"data-garden-id":fd,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledHeaderRow`,componentId:`sc-16ogvdx-0`})([`font-weight:`,`;`,` `,` `,`{opacity:1;}`,`;`],e=>e.theme.fontWeights.semibold,e=>{let t=pd(e);return z([`height:`,`;vertical-align:bottom;`,`{margin-top:0;margin-bottom:calc(`,` - 1em);}`],t,dd,H(`${t} / 2`))},({theme:e})=>z([`border-bottom-color:`,`;`],G({variable:`border.default`,theme:e})),dd,V),hd=`tables.table`,gd=e=>`${e.theme.space.base*5}px`,_d=B.table.attrs({"data-garden-id":hd,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledTable`,componentId:`sc-gje7na-0`})([`display:table;border:none;width:100%;table-layout:fixed;border-collapse:collapse;border-spacing:0;line-height:`,`;color:`,`;font-size:`,`;direction:`,`;`,`;`],e=>gd(e),e=>G({variable:`foreground.default`,theme:e.theme}),e=>e.theme.fontSizes.md,e=>e.theme.rtl&&`rtl`,V),vd=`tables.cell`,yd=z([`overflow:hidden;text-overflow:ellipsis;white-space:nowrap;`]),bd=e=>{let t=`border-box`,n,r=e.width,i;return e.$hasOverflow?(t=`content-box`,r=`2em`,i=`inherit`,n=e.theme.rtl?`0 0 0 ${e.theme.space.base}px`:`0 ${e.theme.space.base}px 0 0`):n=`${H(`(${ud(e)} - ${gd(e)}) / 2`)} ${`${e.theme.space.base*3}px`}`,e.$isMinimum&&(t=`content-box`,r=`1em`),z([`box-sizing:`,`;padding:`,`;width:`,`;height:`,`;`],t,n,r,i)},xd=B.td.attrs({"data-garden-id":vd,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledCell`,componentId:`sc-8hpncx-0`})([`display:table-cell;transition:border-color 0.25s ease-in-out,box-shadow 0.1s ease-in-out;`,`;`,`;`,`;`],e=>bd(e),e=>e.$isTruncated&&yd,V),Sd=`tables.sortable`,Cd=B.div.withConfig({displayName:`StyledSortableButton__StyledBaseIconWrapper`,componentId:`sc-2s1dli-0`})([`display:flex;position:absolute;top:0;`,`:0;align-items:center;justify-content:center;opacity:0;width:`,`;height:100%;color:inherit;fill:inherit;`],e=>e.theme.rtl?`left`:`right`,e=>e.theme.iconSizes.sm),wd=B(Cd).withConfig({displayName:`StyledSortableButton__StyledSortableStrokeIconWrapper`,componentId:`sc-2s1dli-1`})([``]),Td=B(Cd).withConfig({displayName:`StyledSortableButton__StyledSortableFillIconWrapper`,componentId:`sc-2s1dli-2`})([``]),Ed=B.button.attrs({"data-garden-id":Sd,"data-garden-version":`9.15.8`,type:`button`}).withConfig({displayName:`StyledSortableButton`,componentId:`sc-2s1dli-3`})([`position:relative;transition:box-shadow 0.1s ease-in-out;border:none;border-radius:`,`;background-color:transparent;cursor:pointer;padding:0;padding-`,`:`,`;width:`,`;text-decoration:none;color:inherit;font-family:inherit;font-size:inherit;font-weight:`,`;`,`{opacity:`,`;}`,`{opacity:`,`;}&:hover,`,`{text-decoration:none;}`,` `,`;`],e=>e.theme.borderRadii.sm,e=>e.theme.rtl?`left`:`right`,e=>H(`${e.theme.space.base} + ${e.theme.iconSizes.sm}`),e=>e.width,e=>e.theme.fontWeights.semibold,wd,e=>e.$sort===void 0&&1,Td,e=>e.$sort!==void 0&&1,Fa,({theme:e,$sort:t})=>{let n=G({variable:`foreground.subtle`,transparency:e.opacity[200],theme:e}),r=G({variable:`foreground.subtle`,theme:e}),i=G({variable:`foreground.primary`,theme:e}),a=G({variable:`foreground.primary`,theme:e,dark:{offset:-100},transparency:e.opacity[200]}),o=r,s=r;return t===`asc`?(o=r,s=n):t===`desc`&&(o=n,s=r),z([``,`{color:`,`;fill:`,`;}`,`{color:`,`;fill:`,`;}&:hover,`,`{color:`,`;`,`;`,` `,`}`,``],wd,r,r,Td,o,s,Fa,i,t===void 0&&`
        ${Td} {
          opacity: 1;
          color: ${i};
          fill: ${i};
        }

        ${wd} {
          opacity: 0;
        }
      `,t===`asc`&&`
        ${Td} {
          color: ${i};
          fill: ${a};
        }
      `,t===`desc`&&`
        ${Td} {
          color: ${a};
          fill: ${i};
        }
      `,Ia({theme:e}))},V),Dd=`tables.header_cell`,Od=z([``,`{max-width:100%;overflow:hidden;text-overflow:ellipsis;}`],Ed),kd=e=>{let t;return e.$hasOverflow||(t=H(`(${ud(e)} - ${gd(e)}) / 2`)),z([`padding-top:`,`;padding-bottom:`,`;`],t,t)},Ad=B(xd).attrs({as:`th`,"data-garden-id":Dd,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledHeaderCell`,componentId:`sc-fzagoe-0`})([`text-align:`,`;font-weight:inherit;`,` `,` `,`;`],e=>{if(!e.$hasOverflow)return e.theme.rtl?`right`:`left`},e=>kd(e),e=>e.$isTruncated&&Od,V),jd=`tables.head`,Md=({theme:e})=>{let t=G({variable:`border.default`,theme:e});return z([`background-color:`,`;& > `,`:last-child{border-bottom-color:transparent;& > `,`{box-shadow:inset 0 -`,` 0 `,`;}}`],G({variable:`background.default`,theme:e}),md,Ad,e.borderWidths.sm,t)},Nd=()=>z([`position:sticky;top:0;z-index:1;`]),Pd=B.thead.attrs({"data-garden-id":jd,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledHead`,componentId:`sc-spf23a-0`})([``,` `,` `,`;`],e=>e.$isSticky&&Nd(),Md,V),Fd=B(ld).attrs({"data-garden-id":`tables.group_row`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledGroupRow`,componentId:`sc-mpd0r8-0`})([``,` `,` `,`;`],e=>{let t=`${e.theme.space.base*8}px`,n=gd(e);return z([`height:`,`;line-height:`,`;font-size:`,`;`,`{padding:`,` `,`px;}`],t,n,e.theme.fontSizes.sm,xd,H(`(${t} - ${n}) / 2`),e.theme.space.base*3)},({theme:e})=>z([`background-color:`,`;`],G({variable:`background.subtle`,transparency:e.opacity[100],light:{offset:300},dark:{offset:-600},theme:e})),V),Id=B.div.attrs({"data-garden-id":`tables.hidden_cell`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledHiddenCell`,componentId:`sc-1x454xw-0`})([``,` `,`;`],ci(),V),Ld=B(ld).attrs({"data-garden-id":`tables.row`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledRow`,componentId:`sc-ek66ow-0`})([``,` `,` `,`;`],e=>z([`height:`,`;`],ud(e)),({theme:e,$isFocused:t,$isSelected:n,$isHovered:r,$isReadOnly:i})=>{let a=G({variable:`background.primaryEmphasis`,transparency:e.opacity[100],dark:{offset:-100},theme:e}),o=G({variable:`border.primaryEmphasis`,transparency:e.opacity[200],dark:{offset:-100},theme:e}),s=G({variable:`background.primaryEmphasis`,transparency:e.opacity[200],dark:{offset:-100},theme:e}),c=G({variable:`border.primaryEmphasis`,light:{offset:-400},dark:{offset:300},theme:e}),l=G({variable:`background.primaryEmphasis`,transparency:e.opacity[300],dark:{offset:-100},theme:e}),u=G({variable:`border.primaryEmphasis`,theme:e}),d=`inset ${e.rtl?`-`:``}${e.shadowWidths.md} 0 0 0 ${u}`,f,p,m,h;return n?(f=r?l:s,p=c,m=c,h=l):r?(f=a,p=o):i||(m=o,h=a),z([`border-bottom-color:`,`;background-color:`,`;&:hover{border-bottom-color:`,`;background-color:`,`;`,`{opacity:1;}}&:focus{outline:none;}`,`:first-of-type{box-shadow:`,`;&:focus{box-shadow:`,`;}}`],p,f,m,h,dd,xd,t&&d,d)},V),Rd=(0,g.forwardRef)((e,t)=>g.createElement(sd,Object.assign({ref:t},e)));Rd.displayName=`Table.Body`;var zd=(0,g.forwardRef)((e,t)=>g.createElement(cd,Object.assign({ref:t},e)));zd.displayName=`Table.Caption`;var Bd=g.createContext({size:`medium`,isReadOnly:!1}),Vd=()=>(0,g.useContext)(Bd),Hd=g.forwardRef(({hidden:e,isMinimum:t,isTruncated:n,hasOverflow:r,...i},a)=>{let{size:o}=Vd();return g.createElement(xd,Object.assign({ref:a,$size:o,$isMinimum:t,$isTruncated:n,$hasOverflow:r},i),e&&i.children?g.createElement(Id,null,i.children):i.children)});Hd.displayName=`Table.Cell`,Hd.propTypes={isMinimum:O.default.bool,isTruncated:O.default.bool,hasOverflow:O.default.bool,width:O.default.oneOfType([O.default.string,O.default.number])};var Ud=(0,g.forwardRef)((e,t)=>{let{size:n}=Vd();return g.createElement(Fd,Object.assign({ref:t,$size:n},e))});Ud.displayName=`Table.GroupRow`;var Wd=(0,g.forwardRef)(({isSticky:e,...t},n)=>g.createElement(Pd,Object.assign({ref:n,$isSticky:e},t)));Wd.displayName=`Table.Head`;var Gd=(0,g.forwardRef)(({hidden:e,isMinimum:t,isTruncated:n,hasOverflow:r,...i},a)=>{let{size:o}=Vd();return g.createElement(Ad,Object.assign({ref:a,$size:o,$isMinimum:t,$isTruncated:n,$hasOverflow:r},i),e&&i.children?g.createElement(Id,null,i.children):i.children)});Gd.displayName=`Table.HeaderCell`,Gd.propTypes=Hd.propTypes;var Kd=g.forwardRef((e,t)=>{let{size:n}=Vd();return g.createElement(md,Object.assign({ref:t,$size:n},e))});Kd.displayName=`Table.HeaderRow`;var qd;function Jd(){return Jd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jd.apply(null,arguments)}var Yd=function(e){return g.createElement(`svg`,Jd({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),qd||=g.createElement(`path`,{fill:`currentColor`,d:`M9.5 2.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z`}))},Xd=(0,g.forwardRef)((e,t)=>{let{size:n}=Vd();return g.createElement(dd,Object.assign({type:`button`,$size:n,ref:t},e,{focusInset:!0}),g.createElement(Yd,null))});Xd.displayName=`Table.OverflowButton`;var Zd=(0,g.forwardRef)(({onFocus:e,onBlur:t,isSelected:n,isStriped:r,isHovered:i,isFocused:a,...o},s)=>{let[c,l]=(0,g.useState)(!1),{size:u,isReadOnly:d}=Vd(),f=(0,g.useMemo)(()=>a===void 0?!d&&c:a,[a,c,d]),p=(0,g.useMemo)(()=>w(e,()=>{l(!0)}),[e,l]),m=(0,g.useMemo)(()=>w(t,()=>{l(!1)}),[t,l]);return g.createElement(Ld,Object.assign({onFocus:p,onBlur:m,ref:s,$size:u,$isReadOnly:d,$isFocused:f,$isHovered:i,$isStriped:r,$isSelected:n},o,{tabIndex:d?void 0:-1}))});Zd.displayName=`Table.Row`,Zd.propTypes={isStriped:O.default.bool,isFocused:O.default.bool,isHovered:O.default.bool,isSelected:O.default.bool};var Qd;function $d(){return $d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$d.apply(null,arguments)}var ef=function(e){return g.createElement(`svg`,$d({xmlns:`http://www.w3.org/2000/svg`,width:12,height:12,focusable:`false`,viewBox:`0 0 12 12`,"aria-hidden":`true`},e),Qd||=g.createElement(`path`,{fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,d:`M2.5 4L5.6.9c.2-.2.5-.2.7 0L9.5 4m-7 4l3.1 3.1c.2.2.5.2.7 0L9.5 8`}))},tf,nf;function rf(){return rf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rf.apply(null,arguments)}var af=function(e){return g.createElement(`svg`,rf({xmlns:`http://www.w3.org/2000/svg`,width:12,height:12,focusable:`false`,viewBox:`0 0 12 12`,"aria-hidden":`true`},e),tf||=g.createElement(`path`,{fill:`currentColor`,d:`M10 5H2a.5.5 0 01-.46-.31.47.47 0 01.11-.54L5.29.5A1 1 0 016.7.5l3.65 3.65a.49.49 0 01.11.54A.51.51 0 0110 5z`}),nf||=g.createElement(`path`,{d:`M2 7a.5.5 0 00-.46.31.47.47 0 00.11.54L5.3 11.5a1 1 0 001.41 0l3.65-3.65a.49.49 0 00.11-.54A.53.53 0 0010 7z`}))},of=[`small`,`medium`,`large`],sf=[`asc`,`desc`],cf=(0,g.forwardRef)(({sort:e,cellProps:t={},width:n,children:r,...i},a)=>{let{isMinimum:o,isTruncated:s,hasOverflow:c,...l}=t,u=`none`;e===`asc`?u=`ascending`:e===`desc`&&(u=`descending`);let d=e===void 0?ef:af;return g.createElement(Ad,Object.assign({"aria-sort":u,width:n,$isMinimum:o,$isTruncated:s,$hasOverflow:c},l),g.createElement(Ed,Object.assign({$sort:e,ref:a},i),r,g.createElement(wd,null,g.createElement(d,null)),g.createElement(Td,null,g.createElement(af,null))))});cf.displayName=`Table.SortableCell`,cf.propTypes={sort:O.default.oneOf(sf),cellProps:O.default.any,width:O.default.oneOfType([O.default.string,O.default.number])};var lf=g.forwardRef(({isReadOnly:e,size:t=`medium`,...n},r)=>{let i=(0,g.useMemo)(()=>({size:t,isReadOnly:e}),[t,e]);return g.createElement(Bd.Provider,{value:i},g.createElement(_d,Object.assign({ref:r},n)))});lf.displayName=`Table`,lf.propTypes={size:O.default.oneOf(of),isReadOnly:O.default.bool};var uf=lf;uf.Body=Rd,uf.Caption=zd,uf.Cell=Hd,uf.GroupRow=Ud,uf.Head=Wd,uf.HeaderCell=Gd,uf.HeaderRow=Kd,uf.OverflowButton=Xd,uf.Row=Zd,uf.SortableCell=cf;var df=uf;function ff(e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}var pf=B.div.attrs({"data-garden-id":`tabs.tab`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledTab`,componentId:`sc-x2pbow-0`})([`display:`,`;position:relative;transition:color 0.25s ease-in-out;border-bottom:`,`;border-`,`:`,`;cursor:pointer;overflow:hidden;vertical-align:top;user-select:none;text-align:`,`;text-decoration:none;text-overflow:ellipsis;`,`;`,`;&:focus{text-decoration:none;}&::before{transition:box-shadow 0.1s ease-in-out;content:'';}&:focus-visible::before{position:absolute;top:`,`px;right:`,`px;left:`,`px;border-radius:`,`;pointer-events:none;}&:active::before{box-shadow:none;}&[aria-disabled='true']{cursor:default;}`,`;`],e=>e.$isVertical?`block`:`inline-block`,e=>e.$isVertical?void 0:e.theme.borderStyles.solid,e=>e.theme.rtl?`right`:`left`,e=>e.$isVertical?e.theme.borderStyles.solid:void 0,e=>e.$isVertical?e.theme.rtl?`right`:`left`:`center`,({theme:e,$isVertical:t})=>{let n=e.borderWidths.md,r=`calc(100% - ${e.space.base*(t?2:4)}px);`,i,a;if(t)i=`${e.space.base*5}px`,a=`${e.space.base}px ${e.space.base*2}px`;else{let t=e.space.base*2.5;a=`${t}px ${e.space.base*7}px ${t-ii(e.borderWidths.md)-ii(e.borderWidths.sm)}px`}return z([`margin-bottom:`,`;border-width:`,`;padding:`,`;&:focus-visible::before,&[data-garden-focus-visible]::before{height:`,`;}&:last-of-type{margin-bottom:0;}`],i,n,a,r)},({theme:e,$isSelected:t})=>{let n=t?G({theme:e,variable:`border.primaryEmphasis`}):`transparent`,r=G({theme:e,variable:`foreground.primary`}),i=t?r:`inherit`,a=G({theme:e,variable:`foreground.disabled`});return z([`border-color:`,`;color:`,`;&:hover{color:`,`;}`,` &:active{border-color:currentcolor;color:`,`;}&[aria-disabled='true']{border-color:transparent;color:`,`;}`],n,i,r,Ia({theme:e,inset:!0,spacerWidth:null,shadowWidth:`sm`,selector:`&:focus-visible::before`,styles:{color:r}}),r,a)},e=>e.theme.space.base*(e.$isVertical?1:2.5),e=>e.theme.space.base*(e.$isVertical?1:6),e=>e.theme.space.base*(e.$isVertical?1:6),e=>e.theme.borderRadii.md,V),mf=B.div.attrs({"data-garden-id":`tabs.tablist`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledTabList`,componentId:`sc-wa5aaj-0`})([`display:`,`;border-bottom:`,`;vertical-align:`,`;white-space:nowrap;`,`;`,`;`,`;`],e=>e.$isVertical?`table-cell`:`block`,e=>e.$isVertical?`none`:e.theme.borderStyles.solid,e=>e.$isVertical?`top`:void 0,({theme:e,$isVertical:t})=>{let n=t?0:`${e.space.base*5}px`,r=t?void 0:e.borderWidths.sm,i=e.fontSizes.md;return z([`margin-top:0;margin-bottom:`,`;border-bottom-width:`,`;padding:0;line-height:`,`;font-size:`,`;`],n,r,Na(e.space.base*5,i),i)},({theme:e})=>z([`transition:border-color 0.25s ease-in-out;color-scheme:only `,`;border-bottom-color:`,`;color:`,`;`],e=>e.theme.colors.base,G({theme:e,variable:`border.default`}),G({theme:e,variable:`foreground.default`})),V),hf=B.div.attrs({"data-garden-id":`tabs.tabpanel`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledTabPanel`,componentId:`sc-7lhrmp-0`})([`display:block;vertical-align:`,`;color-scheme:only `,`;`,`;&[aria-hidden='true']{display:none;}`,`;`],e=>e.$isVertical&&`top`,e=>e.theme.colors.base,({theme:e,$isVertical:t})=>{let n=t?`${e.space.base*8}px`:void 0;return z([`margin-`,`:`,`;`],e.rtl?`right`:`left`,n)},V),gf=B.div.attrs({"data-garden-id":`tabs.tabs`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledTabs`,componentId:`sc-1qaor65-0`})([`display:`,`;overflow:hidden;direction:`,`;`,`;`],e=>e.$isVertical?`table`:`block`,e=>e.theme.rtl&&`rtl`,V),_f=(0,g.createContext)(void 0),vf=()=>(0,g.useContext)(_f),yf=g.forwardRef(({disabled:e,item:t,...n},r)=>{let i=vf();if(e||!i)return g.createElement(pf,Object.assign({role:`tab`,"aria-disabled":e,ref:r,$isVertical:i?.isVertical},n));let{ref:a,...o}=i.getTabProps({value:t});return g.createElement(pf,Object.assign({$isSelected:t===i.selectedValue,$isVertical:i.isVertical},o,n,{ref:ff([a,r])}))});yf.displayName=`Tabs.Tab`,yf.propTypes={disabled:O.default.bool,item:O.default.any};var bf=g.forwardRef((e,t)=>{let n=vf();if(!n)return g.createElement(mf,Object.assign({ref:t},e));let r=n.getTabListProps();return g.createElement(mf,Object.assign({$isVertical:n.isVertical},r,e,{ref:t}))});bf.displayName=`Tabs.TabList`;var xf=g.forwardRef(({item:e,...t},n)=>{let r=vf();if(!r)return g.createElement(hf,Object.assign({ref:n},t));let i=r.getTabPanelProps({value:e});return g.createElement(hf,Object.assign({"aria-hidden":r.selectedValue!==e,$isVertical:r.isVertical},i,t,{ref:n}))});xf.displayName=`Tabs.TabPanel`,xf.propTypes={item:O.default.any};var Sf=({tabs:e,orientation:t=`horizontal`,idPrefix:n,...r})=>{let i=te(n),a=`${i}__panel`,o=`${i}__tab`,s=(0,g.useMemo)(()=>e.reduce((e,t)=>(!t.disabled&&e.push(t.value),e),[]),[e]),{selectedValue:c,focusedValue:l,getGroupProps:u,getElementProps:d}=J({values:s,direction:t,defaultSelectedValue:s[0],...r}),f=(0,g.useCallback)(({role:e=`tablist`,...n}={})=>({...u(n),role:e===null?void 0:e,"aria-orientation":t,"data-garden-container-id":`containers.tabs`,"data-garden-container-version":`2.0.17`}),[u,t]),p=(0,g.useCallback)(({role:e=`tab`,value:t,...n})=>{let r=s.indexOf(t)===-1,{onClick:i,onKeyDown:c,onFocus:l,onBlur:u,...f}=d({value:t,role:e===null?void 0:e,...n});return{...f,onClick:r?void 0:i,onFocus:r?void 0:l,onKeyDown:r?void 0:c,onBlur:r?void 0:u,id:`${o}:${t}`,"aria-disabled":r||void 0,"aria-controls":`${a}:${t}`}},[d,s,a,o]),m=(0,g.useCallback)(({role:e=`tabpanel`,value:t,...n})=>({role:e===null?void 0:e,id:`${a}:${t}`,hidden:t!==c,"aria-labelledby":`${o}:${t}`,...n}),[c,a,o]);return(0,g.useMemo)(()=>({selectedValue:c,focusedValue:l,getTabListProps:f,getTabProps:p,getTabPanelProps:m}),[c,l,f,p,m])};O.default.func,O.default.func,O.default.arrayOf(O.default.any).isRequired,O.default.bool,O.default.oneOf([`horizontal`,`vertical`]),O.default.string,O.default.any,O.default.any,O.default.func;var Cf=e=>g.Children.toArray(e).reduce((e,t)=>{let n=e;if((0,g.isValidElement)(t)){if(`item`in t.props){let e=t.props;n.push({value:e.item,disabled:e.disabled})}else{let e=Cf(t.props.children);n.push(...e)}}return n},[]),wf=(0,g.forwardRef)(({isVertical:e=!1,children:t,onChange:n,selectedItem:r,...i},a)=>{let o=(0,g.useContext)(Rn)||dr,[s,c]=(0,g.useState)(),l=T(r,s),u=(0,g.useMemo)(()=>Cf(t),[t]),d=Sf({tabs:u,rtl:o.rtl,orientation:e?`vertical`:`horizontal`,selectedValue:l,defaultSelectedValue:u.find(e=>!e.disabled)?.value,onSelect:e=>{n?n(e):c(e)}}),f=(0,g.useMemo)(()=>({isVertical:e,...d}),[e,d]);return g.createElement(_f.Provider,{value:f},g.createElement(gf,Object.assign({$isVertical:e},i,{ref:a}),t))});wf.propTypes={isVertical:O.default.bool,selectedItem:O.default.any,onChange:O.default.func},wf.displayName=`Tabs`;var Tf=wf;Tf.Tab=yf,Tf.TabList=bf,Tf.TabPanel=xf;var Ef=Tf,Df=(0,g.forwardRef)(({isEmphasis:e=!1,isPill:t=!0,...n},r)=>{let i={$isEmphasis:e};return(0,K.jsx)(mc,{ref:r,isPill:t,...n,...i})});Df.displayName=`Tag`;var Q=Df;Q.Avatar=mc.Avatar,Q.Close=mc.Close;var Of=({theme:e=Zu,...t})=>(0,K.jsx)(zn,{theme:typeof e==`function`?t=>e(t??Qu):e,...t}),kf=od,Af=B.footer`
  border-top: ${({theme:e})=>e.borders.sm} solid ${({theme:e})=>e.palette.grey[300]};
  margin-top: 40px;
  padding: 20px 32px;
  display: flex;
  justify-content: center;
  gap: 24px;
  font-size: 13px;
  color: ${({theme:e})=>e.palette.grey[600]};
`;function jf(){let e=new Date().getFullYear();return(0,K.jsxs)(Af,{children:[(0,K.jsx)(Fs,{href:`#`,onClick:e=>e.preventDefault(),children:`Privacy Policy`}),(0,K.jsx)(Fs,{href:`#`,onClick:e=>e.preventDefault(),children:`Zendesk Customer Agreement`}),(0,K.jsxs)(`span`,{children:[`©Zendesk `,e]})]})}var Mf=B.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 56px 32px 24px;
`,Nf=B(Q)`
  margin-bottom: 16px;
`,Pf=B.section`
  max-width: 760px;

  h1 {
    margin: 0;
    font-size: 34px;
    line-height: 42px;
    letter-spacing: -0.03em;
  }

  p {
    color: ${({theme:e})=>e.palette.grey[700]};
    font-size: 16px;
    line-height: 24px;
    margin: 16px 0 0;
  }
`,Ff=B(po)`
  margin-top: 0;
  background: ${({theme:e})=>e.palette.white};
  border: ${({theme:e})=>e.borders.sm} solid ${({theme:e})=>e.palette.grey[300]};
  border-radius: ${({theme:e})=>e.borderRadii.md};
  overflow: hidden;
`,If=B.span`
  display: block;
  font-weight: 400;
  color: ${({theme:e})=>e.palette.grey[700]};
  font-size: 13px;
  line-height: 18px;
  margin-top: 4px;
`,Lf=B.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 16px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`,Rf=B(po)`
  background: ${({theme:e})=>e.palette.white};
  border: ${({theme:e})=>e.borders.sm} solid ${({theme:e})=>e.palette.grey[300]};
  border-radius: ${({theme:e})=>e.borderRadii.md};
  overflow: hidden;

  [data-garden-id='accordions.header'] {
    min-height: 40px;
    padding: 8px 12px;
  }

  [data-garden-id='accordions.button'] {
    font-size: 14px;
    line-height: 20px;
    font-weight: ${({theme:e})=>e.fontWeights.semibold};
  }

  [data-garden-id='accordions.section'] + [data-garden-id='accordions.section'] {
    border-top: 1px solid ${({theme:e})=>e.palette.grey[300]};
  }

  [data-garden-id='accordions.panel'] {
    padding: 0 12px 12px;
  }
`,zf=B.div`
  display: grid;
  gap: 12px;

  h3,
  p {
    margin: 0;
  }

  p {
    color: ${({theme:e})=>e.palette.grey[700]};
    line-height: 22px;
  }
`,Bf=B(kf)`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h3,
  p {
    margin: 0;
  }

  h3 {
    font-size: 16px;
  }

  p {
    color: ${({theme:e})=>e.palette.grey[700]};
    line-height: 22px;
  }
`,Vf=B.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`,Hf=B.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 10px;
  align-items: stretch;
`,Uf=B.div`
  display: grid;
  place-items: center;
  color: ${({theme:e})=>e.palette.grey[600]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
`,Wf=B.div`
  border-left: 3px solid ${({theme:e})=>e.palette.blue[700]};
  padding-left: 12px;

  strong {
    display: block;
    font-size: 28px;
    line-height: 32px;
    letter-spacing: -0.03em;
  }

  span {
    color: ${({theme:e})=>e.palette.grey[700]};
    font-size: 13px;
    line-height: 18px;
  }
`,Gf=B(Wf)`
  padding: 12px;
  border: 1px solid ${({theme:e})=>e.palette.blue[300]};
  border-left: 4px solid ${({theme:e})=>e.palette.blue[700]};
  border-radius: 16px;
  background: ${({theme:e})=>e.palette.blue[100]};
`,Kf=B.div`
  margin-top: auto;
  padding: 14px;
  border: 1px solid ${({theme:e})=>e.palette.green[300]};
  border-radius: 18px;
  background: linear-gradient(135deg, ${({theme:e})=>e.palette.green[100]} 0%, ${({theme:e})=>e.palette.white} 100%);

  strong {
    display: block;
    margin-bottom: 6px;
    color: ${({theme:e})=>e.palette.grey[800]};
  }

  p {
    margin: 0;
    color: ${({theme:e})=>e.palette.grey[700]};
    font-size: 13px;
    line-height: 19px;
  }
`,qf=B.ul`
  margin: 0;
  padding-left: 20px;
  color: ${({theme:e})=>e.palette.grey[700]};
  line-height: 24px;
`,Jf=B.div`
  margin: 44px 0 16px;

  h2 {
    font-size: 20px;
    line-height: 28px;
    margin: 0;
  }

  p {
    color: ${({theme:e})=>e.palette.grey[700]};
    margin: 4px 0 0;
  }
`,Yf={blue:qu.blue[700],royal:qu.royal[600],teal:qu.teal[600],purple:qu.purple[700],grey:qu.grey[700]},Xf=B.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`,Zf=B.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 28px;
  border: ${({theme:e})=>e.borders.sm} solid ${({theme:e})=>e.palette.grey[300]};
  border-top: 4px solid ${({$hue:e})=>Yf[e]};
  border-radius: 22px;
  background: linear-gradient(180deg, ${({theme:e})=>e.palette.white} 0%, ${({theme:e})=>e.palette.grey[100]} 100%);
  box-shadow: 0 18px 44px rgba(47, 57, 65, 0.1);
  cursor: pointer;
  outline: none;
  transition:
    border-color 160ms ease,
    box-shadow 160ms ease,
    transform 160ms ease;

  &::before {
    position: absolute;
    top: 18px;
    right: 18px;
    width: 44px;
    height: 44px;
    border-radius: 16px;
    background: ${({$hue:e})=>Yf[e]}18;
    content: '';
    box-shadow: inset 0 0 0 1px ${({$hue:e})=>Yf[e]}2e;
  }

  &:hover,
  &:focus-visible {
    border-color: ${({$hue:e})=>Yf[e]};
    box-shadow: 0 18px 42px rgba(47, 57, 65, 0.14);
    transform: translateY(-3px);
  }

  &:focus-visible {
    box-shadow:
      0 0 0 3px ${({$hue:e})=>Yf[e]}2e,
      0 18px 42px rgba(47, 57, 65, 0.14);
  }

  h3,
  p {
    margin: 0;
  }

  h3 {
    font-size: 22px;
    line-height: 28px;
  }

  p {
    color: ${({theme:e})=>e.palette.grey[700]};
    line-height: 22px;
  }
`,Qf=B.span`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-height: 44px;
  margin-top: auto;
  padding: 10px 14px;
  border-radius: 999px;
  background: ${({theme:e})=>e.palette.grey[100]};
  color: ${({$hue:e})=>Yf[e]};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};

  &::after {
    content: '→';
  }
`,$f=B.ol`
  display: grid;
  gap: 8px;
  margin: 0;
  padding-left: 20px;
  color: ${({theme:e})=>e.palette.grey[700]};
  line-height: 21px;
`,ep=B.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  align-items: stretch;
  margin-top: 8px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,tp=B.div`
  display: grid;
  gap: 24px;
`,np=B.div`
  display: grid;
  gap: 16px;
`,rp=B.hr`
  display: block;
  width: 100%;
  height: 1px;
  margin: 36px 0;
  border: 0;
  background: ${({theme:e})=>e.palette.grey[300]};
`,ip=B(Zf)`
  display: flex;
  width: 100%;
  min-height: 360px;
  gap: 14px;
  margin: 0;
  padding: 16px;
  border: 0;
  border-radius: 26px;
  background: ${({$accent:e,theme:t})=>e===`copilot`?`linear-gradient(0deg, rgba(232, 214, 245, 0.92) 0%, rgba(247, 244, 250, 0.78) 42%, ${t.palette.white} 100%)`:e===`gray`?`linear-gradient(0deg, rgba(186, 191, 196, 0.95) 0%, rgba(230, 232, 234, 0.82) 42%, ${t.palette.white} 100%)`:`linear-gradient(0deg, rgba(196, 211, 255, 0.92) 0%, rgba(230, 241, 255, 0.72) 42%, ${t.palette.white} 100%)`};
  box-shadow: ${({$disabled:e})=>e?`0 10px 28px rgba(47, 57, 65, 0.08)`:`0 24px 60px rgba(47, 57, 65, 0.14)`};
  opacity: ${({$disabled:e})=>e?.48:1};
  filter: ${({$disabled:e})=>e?`grayscale(0.55)`:`none`};
  cursor: ${({$disabled:e})=>e?`not-allowed`:`pointer`};

  &::before {
    display: none;
  }

  &:hover,
  &:focus-visible {
    box-shadow: ${({$disabled:e})=>e?`0 10px 28px rgba(47, 57, 65, 0.08)`:`0 26px 64px rgba(47, 57, 65, 0.18)`};
    transform: ${({$disabled:e})=>e?`none`:`translateY(-3px)`};
  }

  h3 {
    font-size: 22px;
    line-height: 28px;
  }

  ${Qf} {
    color: ${({theme:e})=>e.palette.grey[900]};
    font-weight: ${({theme:e})=>e.fontWeights.regular};
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.55);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.5),
      0 8px 18px rgba(47, 57, 65, 0.06);
    backdrop-filter: blur(18px) saturate(160%);
    -webkit-backdrop-filter: blur(18px) saturate(160%);
    transition:
      background 160ms ease,
      border-color 160ms ease,
      box-shadow 160ms ease,
      color 160ms ease;
  }

  ${Qf}::after {
    transition: transform 160ms ease;
  }

  &:hover ${Qf},
  &:focus-visible ${Qf} {
    background: ${({$disabled:e})=>e?`rgba(255, 255, 255, 0.1)`:`rgba(255, 255, 255, 0.5)`};
    border-color: ${({$disabled:e})=>e?`rgba(255, 255, 255, 0.55)`:`rgba(255, 255, 255, 0.75)`};
    box-shadow: ${({$disabled:e})=>e?`inset 0 1px 0 rgba(255, 255, 255, 0.5), 0 8px 18px rgba(47, 57, 65, 0.06)`:`inset 0 1px 0 rgba(255, 255, 255, 0.65), 0 10px 22px rgba(47, 57, 65, 0.08)`};
  }

  &:hover ${Qf}::after,
  &:focus-visible ${Qf}::after {
    transform: ${({$disabled:e})=>e?`none`:`rotate(-45deg)`};
  }

  @media (max-width: 760px) {
    width: 100%;
  }
`,ap=B(Q)`
  && {
    align-self: flex-start;
    width: fit-content;
    background: transparent;
    border: 1px solid ${({theme:e,$tone:t})=>t===`copilot`?e.palette.purple[600]:t===`gray`?e.palette.grey[600]:e.palette.teal[600]};
    color: ${({theme:e,$tone:t})=>t===`copilot`?e.palette.purple[700]:t===`gray`?e.palette.grey[700]:e.palette.teal[700]};
  }
`;function op({title:e,children:t}){return(0,K.jsxs)(po.Section,{children:[(0,K.jsx)(po.Header,{children:(0,K.jsx)(po.Label,{children:e})}),(0,K.jsx)(po.Panel,{children:(0,K.jsx)(zf,{children:t})})]})}function sp({onSelect:e}){function t(t,n){(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),e(n))}return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(Mf,{children:[(0,K.jsxs)(Pf,{children:[(0,K.jsx)(Nf,{isEmphasis:!0,hue:`blue`,children:`Product initiative`}),(0,K.jsx)(`h1`,{children:`AI interactivity on the plans page`}),(0,K.jsx)(`p`,{children:`The opportunity: help unsure pricing-page visitors choose the right Zendesk plan faster, increase interaction with the plan-help flow, and lift conversion from pricing page visits to checkout or qualified sales.`})]}),(0,K.jsxs)(Jf,{children:[(0,K.jsx)(`h2`,{children:`Design directions`}),(0,K.jsx)(`p`,{children:`Three ways to add help on the plans page: enhance Zeabot, add a floating Copilot, or open Copilot from the header beside the plan cards.`})]}),(0,K.jsxs)(ep,{children:[(0,K.jsxs)(ip,{$hue:`teal`,role:`button`,tabIndex:0,onClick:()=>e(`z`),onKeyDown:e=>t(e,`z`),children:[(0,K.jsx)(ap,{hue:`teal`,children:`Iteration 1`}),(0,K.jsx)(`h3`,{children:`Zeabot experience`}),(0,K.jsx)(`p`,{children:`Re-enhance the existing Zeabot on the plans page. The current chatbot stays the path for plan help.`}),(0,K.jsxs)($f,{children:[(0,K.jsx)(`li`,{children:`The plan table remains the primary experience.`}),(0,K.jsx)(`li`,{children:`Each previous session is shown as a row before entering the chat.`}),(0,K.jsx)(`li`,{children:`The bot distinguishes confirmed facts, assumptions, and unknowns.`})]}),(0,K.jsx)(Qf,{$hue:`teal`,children:`Open Zeabot design`})]}),(0,K.jsxs)(ip,{$hue:`purple`,$accent:`copilot`,$disabled:!0,"aria-disabled":`true`,role:`button`,tabIndex:-1,children:[(0,K.jsx)(ap,{hue:`purple`,$tone:`copilot`,children:`Iteration 2`}),(0,K.jsx)(`h3`,{children:`Copilot experience for pricing and plans page`}),(0,K.jsx)(`p`,{children:`Keep Zeabot on the page. Add the platform Copilot control that already exists, but is missing from pricing.`}),(0,K.jsxs)($f,{children:[(0,K.jsx)(`li`,{children:`Zeabot stays in place and is not clickable in this iteration.`}),(0,K.jsx)(`li`,{children:`A separate Copilot icon sits on the right, aligned with Zeabot.`}),(0,K.jsx)(`li`,{children:`This is a different experience from enhancing Zeabot.`})]}),(0,K.jsx)(Qf,{$hue:`purple`,children:`Open copilot design`})]}),(0,K.jsxs)(ip,{$hue:`grey`,$accent:`gray`,role:`button`,tabIndex:0,onClick:()=>e(`q`),onKeyDown:e=>t(e,`q`),children:[(0,K.jsx)(ap,{hue:`grey`,$tone:`gray`,children:`Iteration 3`}),(0,K.jsx)(`h3`,{children:`Copilot from the header`}),(0,K.jsx)(`p`,{children:`Start with the full plans page. Open Copilot from the header icon; the panel docks beside the plan cards.`}),(0,K.jsxs)($f,{children:[(0,K.jsx)(`li`,{children:`The Copilot icon sits in the header, next to the Zendesk logo.`}),(0,K.jsx)(`li`,{children:`Clicking it turns the icon active and opens the panel beside the plans.`}),(0,K.jsx)(`li`,{children:`Closing Copilot returns to the full-width plans page.`})]}),(0,K.jsx)(Qf,{$hue:`grey`,children:`Open docked Copilot design`})]})]}),(0,K.jsx)(rp,{}),(0,K.jsx)(tp,{children:(0,K.jsxs)(np,{children:[(0,K.jsxs)(Jf,{style:{margin:0},children:[(0,K.jsx)(`h2`,{children:`The problem`}),(0,K.jsx)(`p`,{children:`Plans page visitors are unsure which plan fits · 4.5% win rate · 20% lift target`})]}),(0,K.jsx)(`p`,{style:{margin:0,color:qu.grey[700]},children:`The plans page is where unsure prospects land when they need help choosing. Today, Zendesk asks them to manually decode plan differences instead of giving them a fast, trustworthy way to narrow the choice.`}),(0,K.jsxs)(Rf,{level:3,isCompact:!0,isExpandable:!0,isCollapsible:!0,defaultExpandedSections:[],children:[(0,K.jsxs)(op,{title:`Core customer problem`,children:[(0,K.jsx)(`p`,{children:`Prospects reaching the plans page are facing these problems:`}),(0,K.jsxs)(qf,{children:[(0,K.jsx)(`li`,{children:`They cannot quickly tell which Zendesk plan is right for their business.`}),(0,K.jsx)(`li`,{children:`Plan differences are hard to scan because feature names do not always map to business outcomes.`}),(0,K.jsx)(`li`,{children:`They need answers to specific questions, such as which plan includes a capability.`}),(0,K.jsx)(`li`,{children:`They want to understand what a feature actually does before trusting the recommendation.`}),(0,K.jsx)(`li`,{children:`They often need a clear “best plan for me” answer instead of another comparison table.`})]}),(0,K.jsxs)(Kf,{children:[(0,K.jsx)(`strong`,{children:`Success metrics to move`}),(0,K.jsx)(`p`,{children:`Increase plan-help interaction above the current ~1.5% chat CTA baseline, improve the 14% pricing-page-to-checkout baseline, and target a 20% conversion lift for visitors to the plans page.`})]})]}),(0,K.jsxs)(op,{title:`Business impact and target`,children:[(0,K.jsxs)(Hf,{children:[(0,K.jsxs)(Wf,{children:[(0,K.jsx)(`strong`,{children:`50%`}),(0,K.jsx)(`span`,{children:`of prospects still pass through the pricing page`})]}),(0,K.jsx)(Uf,{children:`→`}),(0,K.jsxs)(Wf,{children:[(0,K.jsx)(`strong`,{children:`4.5%`}),(0,K.jsx)(`span`,{children:`total win rate for this pricing-page path`})]})]}),(0,K.jsx)(Vf,{children:(0,K.jsxs)(Wf,{children:[(0,K.jsx)(`strong`,{children:`25.5%`}),(0,K.jsx)(`span`,{children:`win rate benchmark from the existing plan recommendation modal`})]})}),(0,K.jsxs)(Gf,{children:[(0,K.jsx)(`strong`,{children:`1.5%`}),(0,K.jsx)(`span`,{children:`baseline interaction with the “Chat with us” CTA. This is the primary behavior the new design should improve.`})]})]})]})]})}),(0,K.jsx)(rp,{}),(0,K.jsxs)(np,{children:[(0,K.jsxs)(Jf,{style:{margin:0},children:[(0,K.jsx)(`h2`,{children:`Design intent`}),(0,K.jsx)(`p`,{children:`Recommend · explain · refine · purchase or sales handoff`})]}),(0,K.jsx)(`p`,{style:{margin:0,color:qu.grey[700]},children:`Each variation tests a different way to make plan selection easier, more explainable, and actionable.`}),(0,K.jsxs)(Rf,{level:3,isCompact:!0,isExpandable:!0,isCollapsible:!0,defaultExpandedSections:[],children:[(0,K.jsx)(op,{title:`What the assistant needs to do`,children:(0,K.jsxs)(qf,{children:[(0,K.jsx)(`li`,{children:`Recommend a starting plan and explain why it fits.`}),(0,K.jsx)(`li`,{children:`Clarify features, use cases, and business outcomes.`}),(0,K.jsx)(`li`,{children:`Let prospects refine guidance as requirements change.`}),(0,K.jsx)(`li`,{children:`Keep purchase and sales-handoff paths visible at every stage.`})]})}),(0,K.jsx)(op,{title:`Outcome to measure`,children:(0,K.jsxs)(qf,{children:[(0,K.jsx)(`li`,{children:`Increase pricing-page-to-interaction rate from the 1.5% baseline.`}),(0,K.jsx)(`li`,{children:`Improve the 14% pricing-page-to-checkout baseline.`}),(0,K.jsx)(`li`,{children:`Target a 20% conversion lift among visitors to the plans page.`})]})})]})]}),(0,K.jsx)(rp,{}),(0,K.jsx)(Ff,{level:2,isExpandable:!0,isCollapsible:!0,defaultExpandedSections:[],children:(0,K.jsxs)(po.Section,{children:[(0,K.jsx)(po.Header,{children:(0,K.jsxs)(po.Label,{children:[`Repo signals used`,(0,K.jsx)(If,{children:`Pricing page · design system · Zenbot and sales handoff references`})]})}),(0,K.jsx)(po.Panel,{children:(0,K.jsxs)(Lf,{children:[(0,K.jsxs)(Bf,{isRecessed:!0,children:[(0,K.jsx)(`h3`,{children:`Primary implementation surface`}),(0,K.jsxs)(`p`,{children:[`Use `,(0,K.jsx)(`strong`,{children:`zendesk/next-marketing-web`}),` as the pricing-page reference. It owns the Next.js pricing route, plan components, pricing provider, and localized pricing mocks.`]})]}),(0,K.jsxs)(Bf,{isRecessed:!0,children:[(0,K.jsx)(`h3`,{children:`Supporting references`}),(0,K.jsxs)(qf,{children:[(0,K.jsxs)(`li`,{children:[(0,K.jsx)(`strong`,{children:`zendesk/ui`}),` for shared component patterns and Zendesk UI behavior.`]}),(0,K.jsxs)(`li`,{children:[(0,K.jsx)(`strong`,{children:`ai-agents-chat-middleware`}),` and Answer Bot repos for Zenbot/handoff behavior.`]}),(0,K.jsxs)(`li`,{children:[(0,K.jsx)(`strong`,{children:`zendesk/billing`}),` only as pricing logic context, not the page design source.`]})]})]})]})})]})}),(0,K.jsx)(rp,{}),(0,K.jsx)(Ff,{level:2,isExpandable:!0,isCollapsible:!0,defaultExpandedSections:[],children:(0,K.jsxs)(po.Section,{children:[(0,K.jsx)(po.Header,{children:(0,K.jsxs)(po.Label,{children:[`Old design iterations`,(0,K.jsx)(If,{children:`Solutions 1 to 5 kept for comparison and review`})]})}),(0,K.jsx)(po.Panel,{children:(0,K.jsxs)(Xf,{children:[(0,K.jsxs)(Zf,{$hue:`blue`,role:`button`,tabIndex:0,onClick:()=>e(`a`),onKeyDown:e=>t(e,`a`),children:[(0,K.jsx)(Q,{isEmphasis:!0,hue:`blue`,children:`Solution 1`}),(0,K.jsx)(`h3`,{children:`AI Plan Advisor`}),(0,K.jsx)(`p`,{children:`Merge the quiz, feature Q&A, confidence score, and recommendation rationale into one guided assistant.`}),(0,K.jsxs)($f,{children:[(0,K.jsx)(`li`,{children:`User enters team size, channels, and must-have capabilities.`}),(0,K.jsx)(`li`,{children:`Advisor returns one best plan, one fallback, and a clear “why this plan” explanation.`}),(0,K.jsx)(`li`,{children:`Feature questions stay inside the same flow so users do not return to manual table review.`})]}),(0,K.jsx)(Qf,{$hue:`blue`,children:`Open AI Plan Advisor`})]}),(0,K.jsxs)(Zf,{$hue:`royal`,role:`button`,tabIndex:0,onClick:()=>e(`d`),onKeyDown:e=>t(e,`d`),children:[(0,K.jsx)(Q,{isEmphasis:!0,hue:`royal`,children:`Solution 2`}),(0,K.jsx)(`h3`,{children:`Personalized Pricing Page`}),(0,K.jsx)(`p`,{children:`Merge role entry points, goal-based comparison, and plan badges so only the most relevant plans compete for attention.`}),(0,K.jsxs)($f,{children:[(0,K.jsx)(`li`,{children:`User chooses a role or outcome before scanning plans.`}),(0,K.jsx)(`li`,{children:`The pricing table highlights the two to three best matches.`}),(0,K.jsx)(`li`,{children:`Contextual cues explain why other plans are too light or too heavy.`})]}),(0,K.jsx)(Qf,{$hue:`royal`,children:`Open Personalized Pricing Page`})]}),(0,K.jsxs)(Zf,{$hue:`teal`,role:`button`,tabIndex:0,onClick:()=>e(`b`),onKeyDown:e=>t(e,`b`),children:[(0,K.jsx)(Q,{isEmphasis:!0,hue:`teal`,children:`Solution 3`}),(0,K.jsx)(`h3`,{children:`Zenbot + Sales Handoff`}),(0,K.jsx)(`p`,{children:`Merge conversational plan help, official AI answers, and a structured sales summary so users never repeat themselves.`}),(0,K.jsxs)($f,{children:[(0,K.jsx)(`li`,{children:`User asks Zenbot which plan or feature fits their need.`}),(0,K.jsx)(`li`,{children:`Zenbot recommends a plan and captures the decision rationale.`}),(0,K.jsx)(`li`,{children:`Sales receives the user’s needs, questions, and recommended plan before joining.`})]}),(0,K.jsx)(Qf,{$hue:`teal`,children:`Open Zenbot handoff`})]}),(0,K.jsxs)(Zf,{$hue:`blue`,role:`button`,tabIndex:0,onClick:()=>e(`g`),onKeyDown:e=>t(e,`g`),children:[(0,K.jsx)(Q,{isEmphasis:!0,hue:`blue`,children:`Solution 4`}),(0,K.jsx)(`h3`,{children:`AI Plan Advisor Overlay`}),(0,K.jsx)(`p`,{children:`Move the chat CTA under the title and use an overlay advisor on top of the plans page.`}),(0,K.jsxs)($f,{children:[(0,K.jsx)(`li`,{children:`User answers company, agent, channel, and capability questions.`}),(0,K.jsx)(`li`,{children:`The pricing page remains visible behind the advisor overlay.`}),(0,K.jsx)(`li`,{children:`The recommendation updates as the user refines the configuration.`})]}),(0,K.jsx)(Qf,{$hue:`blue`,children:`Open Advisor Overlay`})]}),(0,K.jsxs)(Zf,{$hue:`royal`,role:`button`,tabIndex:0,onClick:()=>e(`e`),onKeyDown:e=>t(e,`e`),children:[(0,K.jsx)(Q,{isEmphasis:!0,hue:`royal`,children:`Solution 5`}),(0,K.jsx)(`h3`,{children:`Guided Comparison`}),(0,K.jsx)(`p`,{children:`Keep the pricing page visible while guiding users through a lighter comparison and next-step flow.`}),(0,K.jsxs)($f,{children:[(0,K.jsx)(`li`,{children:`User compares recommended plans without leaving the pricing context.`}),(0,K.jsx)(`li`,{children:`Plan highlights explain why each option fits or falls short.`}),(0,K.jsx)(`li`,{children:`Checkout and sales paths remain visible for follow-through.`})]}),(0,K.jsx)(Qf,{$hue:`royal`,children:`Open Guided Comparison`})]})]})})]})}),(0,K.jsxs)(`p`,{style:{margin:`32px 0 0`,color:`#5c6970`,fontSize:13},children:[`Source:`,` `,(0,K.jsx)(Fs,{href:`https://docs.google.com/document/d/1vxHw9alfbtlWFtbKlpcSPKCE12O4vc5a4WgrILm3m84/edit`,children:`AI interactivity on plans page initiative brief`})]})]}),(0,K.jsx)(jf,{})]})}var cp=(0,g.forwardRef)((e,t)=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,focusable:`false`,viewBox:`0 0 20 20`,ref:t,...e,children:(0,K.jsx)(`path`,{fill:`currentColor`,d:`M9.818 1.666c.368 0 .693.242.798.595.6 1.998 1.377 3.422 2.448 4.493 1.07 1.07 2.496 1.849 4.494 2.448a.833.833 0 0 1 0 1.596c-1.998.6-3.424 1.376-4.494 2.447-1.071 1.07-1.848 2.496-2.448 4.494a.833.833 0 0 1-1.595 0c-.6-1.998-1.377-3.423-2.448-4.494s-2.496-1.848-4.494-2.447a.833.833 0 0 1 0-1.596c1.998-.6 3.423-1.377 4.494-2.448S8.421 4.259 9.021 2.26a.83.83 0 0 1 .797-.595`})})),lp=(0,g.forwardRef)((e,t)=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,focusable:`false`,viewBox:`0 0 20 20`,ref:t,...e,children:(0,K.jsx)(`path`,{fill:`currentColor`,d:`M10 2.5c.46 0 .833.374.833.834v5.833h5.833a.834.834 0 0 1 0 1.667h-5.833v5.833a.834.834 0 0 1-1.667 0v-5.833H3.333a.834.834 0 0 1 0-1.667h5.833V3.334c0-.46.374-.834.834-.834`})})),up=(0,g.forwardRef)((e,t)=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,focusable:`false`,viewBox:`0 0 20 20`,ref:t,...e,children:(0,K.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,d:`M4 10c0-.46.373-.834.833-.834h10.334a.833.833 0 0 1 0 1.667H4.833A.833.833 0 0 1 4 9.999`})})),dp=(0,g.forwardRef)((e,t)=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,focusable:`false`,viewBox:`0 0 20 20`,ref:t,...e,children:(0,K.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,d:`M14.833 3.333c.453 0 .844 0 1.163.025.33.027.658.087.973.247a2.5 2.5 0 0 1 1.092 1.093c.16.315.22.644.248.973.026.32.025.71.025 1.162v6.333c0 .453 0 .843-.025 1.163-.027.33-.088.657-.248.973a2.5 2.5 0 0 1-1.092 1.092c-.316.16-.643.22-.973.248-.32.026-.71.025-1.163.025H5.167c-.453 0-.843 0-1.163-.025-.33-.027-.658-.088-.973-.248a2.5 2.5 0 0 1-1.092-1.092c-.16-.316-.22-.643-.247-.973-.026-.32-.025-.71-.025-1.163V6.833c0-.453 0-.843.025-1.162.027-.33.087-.658.247-.973.24-.47.622-.853 1.092-1.093.315-.16.644-.22.973-.247.32-.026.71-.025 1.163-.025zm-3.25 7.282a2.5 2.5 0 0 1-3.166 0L3.334 6.457v6.709c0 .48 0 .791.02 1.027.018.227.05.31.07.352.08.156.208.284.364.364.041.021.126.053.352.071.236.02.547.02 1.027.02h9.666c.48 0 .791 0 1.027-.02.226-.018.31-.05.352-.07a.84.84 0 0 0 .364-.365c.021-.041.053-.126.072-.352.019-.236.019-.547.019-1.027V6.833l-.002-.376zM5.167 5c-.437 0-.733.002-.96.017l5.266 4.308c.306.25.747.25 1.054 0l5.267-4.308A17 17 0 0 0 14.833 5z`})})),fp=(0,g.forwardRef)((e,t)=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,focusable:`false`,viewBox:`0 0 20 20`,ref:t,...e,children:(0,K.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,d:`M15.835 2.5a2.5 2.5 0 0 1 2.5 2.5v8.333a2.5 2.5 0 0 1-2.5 2.5h-5.603l-3.968 2.382a.834.834 0 0 1-1.262-.715v-1.667h-.834a2.5 2.5 0 0 1-2.5-2.5V5a2.5 2.5 0 0 1 2.5-2.5zM4.168 4.167A.833.833 0 0 0 3.335 5v8.333c0 .46.373.834.833.834h1.667c.46 0 .833.373.833.833v1.028l2.904-1.743.102-.05a.8.8 0 0 1 .328-.068h5.833c.46 0 .833-.374.833-.834V5a.833.833 0 0 0-.833-.833z`})})),pp=(0,g.forwardRef)((e,t)=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,focusable:`false`,viewBox:`0 0 20 20`,ref:t,...e,children:[(0,K.jsx)(`path`,{fill:`currentColor`,d:`M7.604 6.213c.143.006.302.013.453.348.102.228.275.655.413.995.102.251.185.455.207.499.05.1.083.218.016.352l-.028.059c-.05.102-.087.178-.173.277q-.052.06-.104.125c-.07.084-.138.168-.198.228-.1.1-.206.209-.088.41s.521.86 1.12 1.393c.644.575 1.203.817 1.486.94q.083.035.132.06c.201.1.319.083.436-.051.118-.135.503-.587.637-.788s.269-.17.453-.102c.185.067 1.174.554 1.375.655l.111.054c.14.067.234.113.275.18.05.085.05.488-.117.958-.168.47-.99.923-1.359.957l-.107.011c-.341.04-.772.09-2.308-.515-1.892-.746-3.14-2.596-3.395-2.976l-.043-.062-.002-.003c-.11-.146-.82-1.096-.82-2.078 0-.927.456-1.412.666-1.636l.039-.043a.74.74 0 0 1 .537-.251z`}),(0,K.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,d:`M10.07 1.875a8 8 0 0 1 5.697 2.361 8 8 0 0 1 2.357 5.698c-.002 4.439-3.615 8.051-8.055 8.051h-.004a8.05 8.05 0 0 1-3.848-.98l-4.27 1.12 1.143-4.173a8.04 8.04 0 0 1-1.075-4.025c.002-4.44 3.614-8.052 8.054-8.052m.001 1.36c-3.692 0-6.696 3.003-6.697 6.693a6.7 6.7 0 0 0 1.023 3.561l.16.253-.676 2.47 2.533-.664.245.144a6.7 6.7 0 0 0 3.407.934h.003a6.704 6.704 0 0 0 6.19-9.257 6.7 6.7 0 0 0-1.454-2.17 6.65 6.65 0 0 0-4.734-1.964`})]})),mp=(0,g.forwardRef)((e,t)=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,focusable:`false`,viewBox:`0 0 20 20`,ref:t,...e,children:(0,K.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,d:`M6.093 2.5a2.5 2.5 0 0 1 2.395 1.781l.5 1.67a1.67 1.67 0 0 1-.417 1.657l-.217.217c-.268.267-.29.617-.146.844a10.1 10.1 0 0 0 3.124 3.124c.226.143.576.12.844-.147l.216-.217a1.67 1.67 0 0 1 1.658-.417l1.668.5a2.5 2.5 0 0 1 1.782 2.395V15c0 1.349-1.12 2.575-2.6 2.391-6.412-.798-11.493-5.88-12.29-12.292C2.424 3.62 3.65 2.5 5 2.5zM5 4.167c-.491 0-.78.38-.737.726.704 5.656 5.188 10.14 10.843 10.844.347.043.728-.245.728-.737v-1.093a.83.83 0 0 0-.594-.798l-1.67-.5-.216.216c-.738.738-1.937.994-2.913.377a11.7 11.7 0 0 1-3.643-3.643c-.617-.977-.36-2.175.378-2.913l.216-.217-.5-1.668a.83.83 0 0 0-.799-.594z`})})),hp=(0,g.forwardRef)((e,t)=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,focusable:`false`,viewBox:`0 0 20 20`,ref:t,...e,children:(0,K.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,d:`M9.68 1.666a2.5 2.5 0 0 1 2.47 2.885l-.33 2.115h3.233a3.333 3.333 0 0 1 3.302 3.783l-.568 4.167a3.334 3.334 0 0 1-3.303 2.883H3.334a1.666 1.666 0 0 1-1.667-1.666V9.999c0-.92.746-1.666 1.666-1.666h1.985l3.103-6.206.06-.101a.83.83 0 0 1 .686-.36zM3.332 15.833H5V9.999H3.333zm3.334-6.47v6.47h7.817c.833 0 1.54-.616 1.652-1.442l.568-4.166c.136-1-.641-1.892-1.651-1.892h-4.207a.833.833 0 0 1-.822-.962l.479-3.076a.833.833 0 0 0-.822-.962z`})})),gp=(0,g.forwardRef)((e,t)=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,focusable:`false`,viewBox:`0 0 20 20`,ref:t,...e,children:(0,K.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,d:`M15.291 3.387a2.5 2.5 0 0 1 3.042 2.44v8.252a2.5 2.5 0 0 1-1.957 2.442l-6.195 1.376a.8.8 0 0 1-.362 0L3.625 16.52a2.5 2.5 0 0 1-1.958-2.442V5.827a2.5 2.5 0 0 1 3.042-2.44L10 4.563zM4.348 5.014a.834.834 0 0 0-1.015.813v8.252c0 .39.272.73.653.815l5.181 1.15v-9.96zm12.319.813a.834.834 0 0 0-1.015-.813l-4.819 1.07v9.96l5.18-1.15a.835.835 0 0 0 .654-.815z`})})),_p=(0,g.forwardRef)((e,t)=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,focusable:`false`,viewBox:`0 0 20 20`,ref:t,...e,children:(0,K.jsx)(`path`,{fill:`currentColor`,d:`M9.442 16.198H1.75l7.692-9.295zm5.128-3.845a3.86 3.86 0 0 1 3.847 3.845h-7.692a3.857 3.857 0 0 1 3.845-3.846m-3.845.513V3.57h7.692zM9.442 3.57a3.86 3.86 0 0 1-3.846 3.846A3.857 3.857 0 0 1 1.75 3.57z`})})),vp=(0,g.forwardRef)((e,t)=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,focusable:`false`,viewBox:`0 0 20 20`,ref:t,...e,children:(0,K.jsx)(`path`,{fill:`currentColor`,d:`M11.91 2.744a.834.834 0 0 1 1.18 1.178L7.6 9.41a.834.834 0 0 0 0 1.18l5.489 5.488.057.063a.834.834 0 0 1-1.173 1.172l-.063-.057-5.488-5.488a2.5 2.5 0 0 1 0-3.535z`})})),yp=B.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: ${({$compact:e})=>e?`56px`:`84px`};
  padding: ${({$compact:e})=>e?`0 32px`:`10px 32px`};
  background: ${({theme:e})=>e.palette.white};
  border-top: ${({$compact:e,theme:t})=>e?`0`:`4px solid ${t.palette.grey[800]}`};
  border-bottom: 1px solid #d9dee2;

  @media (max-width: 600px) {
    min-height: ${({$compact:e})=>e?`52px`:`64px`};
    padding: 8px 20px;
  }
`,bp=B(Fs)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: 0;
  cursor: pointer;
  color: ${({theme:e})=>e.palette.blue[600]};

  svg {
    width: 12px;
    height: 12px;
  }
`,xp=B.div`
  text-align: center;

  div:first-child {
    font-weight: ${({theme:e})=>e.fontWeights.bold};
  }
`,Sp=B.div`
  font-size: 12px;
  color: ${qu.grey[700]};
`,Cp=B(_p)`
  width: 27px;
  height: 27px;
  color: ${({theme:e})=>e.palette.grey[800]};
`,wp=B.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Tp=Kn`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(180deg);
  }
`,Ep=B.button`
  display: grid;
  width: 32px;
  height: 32px;
  place-items: center;
  padding: 0;
  border: 0;
  border-radius: 8px;
  background: ${({$active:e})=>e?`linear-gradient(135deg, #9256B1 30%, #1F73B7 100%)`:`transparent`};
  color: ${({$active:e})=>e?`#ffffff`:`#885BB3`};
  cursor: pointer;
  transition:
    background 150ms ease-out,
    color 150ms ease-out,
    transform 160ms ease-out;

  svg {
    display: block;
    width: 20px;
    height: 20px;
    transition: transform 200ms ease-out;
    animation: ${({$spin:e})=>e?Tp:`none`} 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
  }

  &:hover,
  &:focus-visible {
    background: ${({$active:e})=>e?`linear-gradient(135deg, #9256B1 30%, #1F73B7 100%)`:`rgba(136, 91, 179, 0.08)`};
    outline: none;
  }

  &:active {
    transform: scale(0.97);
  }
`;function Dp({onBack:e,title:t,subtitle:n,compact:r,copilotActive:i,onCopilotToggle:a}){let[o,s]=(0,g.useState)(!1);return(0,K.jsxs)(yp,{$compact:r,children:[(0,K.jsxs)(bp,{as:`button`,type:`button`,onClick:e,children:[(0,K.jsx)(vp,{"aria-hidden":`true`}),`Back`]}),t&&!r?(0,K.jsxs)(xp,{children:[(0,K.jsx)(`div`,{children:t}),n?(0,K.jsx)(Sp,{children:n}):null]}):(0,K.jsx)(`span`,{}),(0,K.jsxs)(wp,{children:[a?(0,K.jsx)(Ep,{type:`button`,$active:i,$spin:o,"aria-label":i?`Hide Copilot`:`Open Copilot`,"aria-pressed":i,onClick:a,onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:(0,K.jsx)(cp,{"aria-hidden":`true`})}):null,(0,K.jsx)(Cp,{"aria-hidden":`true`})]})]})}var Op=[`https://i.pravatar.cc/96?img=47`,`https://i.pravatar.cc/96?img=48`,`https://i.pravatar.cc/96?img=13`,`https://i.pravatar.cc/96?img=32`,`https://i.pravatar.cc/96?img=45`];function kp({count:e=3,size:t=`small`}){return(0,K.jsx)(`div`,{style:{display:`flex`},children:Op.slice(0,e).map((e,n)=>(0,K.jsx)(bs,{size:t,style:{marginLeft:n===0?0:-12,border:`2px solid #fff`,overflow:`hidden`},children:(0,K.jsx)(`img`,{src:e,alt:``,referrerPolicy:`no-referrer`})},e))})}var Ap=B.div`
  position: relative;
  margin-bottom: ${({$compact:e})=>e?`0`:`24px`};
`,jp=B(Ef)`
  [role='tablist'] {
    padding-right: ${({$flush:e})=>e?`0`:`280px`};
  }

  [role='tabpanel'] {
    display: none;
  }

  @media (max-width: 700px) {
    [role='tablist'] {
      padding-right: 0;
    }
  }
`,Mp=B(Z)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:e})=>e.palette.grey[700]};

  @media (max-width: 700px) {
    position: static;
    height: auto;
    justify-content: flex-end;
    margin-top: 12px;
  }
`;function Np({channel:e,onChannelChange:t,isAnnual:n,onBillingChange:r,showBilling:i=!0,suiteLabel:a=`Multi-channel support`,supportLabel:o=`Email-first support`}){return(0,K.jsxs)(Ap,{$compact:!i,children:[(0,K.jsxs)(jp,{selectedItem:e,onChange:t,$flush:!i,children:[(0,K.jsxs)(Ef.TabList,{"aria-label":`Support type`,children:[(0,K.jsx)(Ef.Tab,{item:`multi`,children:a}),(0,K.jsx)(Ef.Tab,{item:`email`,children:o})]}),(0,K.jsx)(Ef.TabPanel,{item:`multi`}),(0,K.jsx)(Ef.TabPanel,{item:`email`})]}),i?(0,K.jsxs)(Mp,{children:[(0,K.jsx)(`span`,{children:`Monthly`}),(0,K.jsx)(dl,{checked:n,onChange:r,children:(0,K.jsx)(Z.Label,{children:`Annual`})}),(0,K.jsx)(Q,{hue:`lime`,children:`Save 23%`})]}):null]})}var $={team:{id:`team`,name:`Suite Team`,annual:55,monthly:71,blurb:`For teams ready to unify support channels and automate resolutions with AI agents.`,featureHeader:`All Suite plans include:`,features:[{name:`AI agents`,isAi:!0},{name:`Knowledge base`,isAi:!0},{name:`Action builder`,isAi:!0},{name:`Omnichannel routing`},{name:`Messaging with live chat`},{name:`Telephony`}]},growth:{id:`growth`,name:`Suite Growth`,annual:89,monthly:115,blurb:`For teams ready to scale with deeper customization, collaboration, and AI-powered efficiency.`,featureHeader:`Team features, plus:`,features:[{name:`Light agents`},{name:`Service level agreements (SLA)`},{name:`Customer satisfaction ratings (CSAT)`},{name:`Self-service customer portal`},{name:`Business hours`}]},professional:{id:`professional`,name:`Suite Professional`,annual:115,monthly:149,blurb:`For teams optimizing support operations with advanced automation and AI-driven insights.`,featureHeader:`Growth features, plus:`,features:[{name:`App builder`,isAi:!0},{name:`Copilot writing tools`,isAi:!0},{name:`Quick Reports`,isAi:!0},{name:`Skills-based routing`},{name:`IVR phone tree`},{name:`Ticket side conversations`}],isPopular:!0,isTrial:!0},enterprise:{id:`enterprise`,name:`Suite Enterprise`,annual:169,monthly:219,blurb:`Need a solution that scales? **Zendesk Suite Enterprise** delivers personalized experiences safely with change management tools, including sandboxes and enhanced security.`,featureHeader:``,features:[]}},Pp=[`team`,`growth`,`professional`],Fp={"which-ai":{plan:`team`,chipLabel:`Which plan includes AI agents?`,copy:`AI agents, knowledge base, and omnichannel routing are included.`,why:[`You asked which plan includes AI agents.`,`AI agents ship with Suite Team and every plan above it.`,`Confirm coverage in the plan Wells before you buy.`]},"what-ai":{plan:`team`,chipLabel:`What do AI agents enable?`,copy:`AI agents deflect repetitive questions so customers get 24/7 answers without a custom bot.`,why:[`AI agents use your knowledge base to resolve common tickets.`,`They are included from Suite Team upward.`,`Copilot writing tools start at Professional.`]},best:{plan:`professional`,chipLabel:`What's the best plan for me?`,copy:`Professional is your current trial and covers skills-based routing, Copilot, and IVR. Team is enough if you only need AI agents.`,why:[`Your trial is on Suite Professional.`,`Professional adds Copilot, skills-based routing, and IVR.`,`Refine this if budget matters more than those extras.`]},sla:{plan:`growth`,chipLabel:`We need SLAs and CSAT`,copy:`Suite Growth is the first plan with SLAs, CSAT, light agents, and a customer portal.`,why:[`SLAs and CSAT are not on Suite Team.`,`They are included from Suite Growth upward.`,`Skills-based routing requires Professional.`]}},Ip={default:{plan:`team`,need:`AI-powered self-service`,question:`Which plan includes AI agents?`,why:[`You selected 'I need AI-powered self-service.'`,`AI agents are included in Suite Team and above.`,`Confirm feature coverage in the plan comparison before you buy.`]},sla:{plan:`growth`,need:`SLAs and CSAT`,question:`We need SLAs and CSAT`,why:[`SLAs and CSAT are not on Suite Team.`,`They are included from Suite Growth upward.`,`Skills-based routing would require Professional.`]},routing:{plan:`professional`,need:`Skills-based routing`,question:`We also need skills-based routing`,why:[`Skills-based routing is not on Team or Growth.`,`It is included from Suite Professional upward.`,`This also adds Copilot and IVR.`]}},Lp={team:`Suggested because you asked for AI-powered self-service. AI agents, knowledge base, and omnichannel routing are included.`,growth:`Suggested because SLAs and CSAT are required — they start on Suite Growth, not Suite Team.`,professional:`Suggested because your trial is on Professional, which adds skills-based routing, Copilot, and IVR.`,enterprise:``};function Rp(e){let t=e.toLowerCase();return t.includes(`sla`)||t.includes(`csat`)?`sla`:t.includes(`best`)?`best`:t.includes(`enable`)?`what-ai`:`which-ai`}function zp(e){let t=e.toLowerCase();return t.includes(`sla`)||t.includes(`csat`)?`sla`:t.includes(`routing`)||t.includes(`skill`)?`routing`:`default`}var Bp={"self-service":{label:`Improve self-service`,plan:`team`,reason:`AI agents and a knowledge base help customers resolve routine questions around the clock.`,coverage:`AI agents and knowledge base`},"service-levels":{label:`Meet service levels`,plan:`growth`,reason:`SLAs, CSAT, and business hours begin with Suite Growth.`,coverage:`SLAs, CSAT, and business hours`},"scale-routing":{label:`Scale support routing`,plan:`professional`,reason:`Skills-based routing and IVR are included with Suite Professional.`,coverage:`Skills-based routing and IVR`},"agent-productivity":{label:`Improve agent productivity`,plan:`professional`,reason:`Copilot writing tools and Quick Reports help teams work more efficiently.`,coverage:`Copilot writing tools and Quick Reports`}},Vp={team:1,growth:2,professional:3,enterprise:4};function Hp(e){if(e.requiresGovernance||e.agents>100)return{plan:`enterprise`,isCustom:!0,coverage:[`Advanced security and governance`,`Tailored deployment support`],why:[e.requiresGovernance?`Your governance requirements need an Enterprise conversation.`:`Your team size benefits from a tailored Enterprise configuration.`,`Sales can align security, change management, and pricing to your rollout.`]};let t=e.outcomes.length?e.outcomes:[`self-service`];return{plan:t.reduce((e,t)=>Vp[Bp[t].plan]>Vp[e]?Bp[t].plan:e,`team`),isCustom:!1,coverage:t.map(e=>Bp[e].coverage),why:[...t.map(e=>Bp[e].reason),`${e.agents} agents and ${e.channels.length||1} selected support channel${e.channels.length===1?``:`s`} are included in your estimate.`]}}var Up=B.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,Wp=B(kf)`
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 0;
  height: 100%;
  padding: 32px 24px 20px;
  border: 1px solid ${({theme:e})=>e.palette.grey[200]};
  border-radius: 16px;
  background: #fafafa;
  box-shadow: none;
  font-family: ${({theme:e})=>e.fonts.system};
  transition:
    transform 160ms ease,
    box-shadow 160ms ease,
    border-color 160ms ease;

  ${({$accent:e,$tone:t,theme:n})=>e&&`
    border-width: 2px;
    background: ${t===`purple`?`linear-gradient(180deg, #fbf8fd 0%, ${n.palette.purple[100]} 100%)`:t===`green`?`linear-gradient(180deg, #fafafa 0%, ${n.palette.green[100]} 100%)`:`#fafafa`};
  `}

  ${({$accent:e,$tone:t,theme:n})=>e&&`
    border-color: ${t===`purple`?n.palette.purple[400]:t===`green`?n.palette.green[400]:n.palette.blue[600]};
  `}

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(47, 57, 65, 0.1);
  }
`,Gp=B(Q)`
  && {
    position: absolute;
    top: -10px;
    left: 50%;
    max-width: calc(100% - 24px);
    transform: translateX(-50%);
    border-color: transparent;
    border-radius: 5px;
    background: #e4eaf6;
    color: #1f335a;
    font-size: ${({theme:e})=>e.fontSizes.sm};
    font-weight: ${({theme:e})=>e.fontWeights.semibold};
    text-transform: none;
    white-space: nowrap;
  }
`,Kp=B.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
  margin-bottom: 8px;
`,qp=B.div`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  line-height: ${({theme:e})=>e.lineHeights.xl};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.palette.grey[800]};
`,Jp=B.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`,Yp=B.div`
  font-size: ${({theme:e})=>e.fontSizes.xxxl};
  line-height: ${({theme:e})=>e.lineHeights.xxxl};
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.palette.grey[800]};
`,Xp=B.div`
  display: flex;
  flex-direction: column;
  color: ${({theme:e})=>e.palette.grey[800]};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  line-height: 16px;
  font-weight: ${({theme:e})=>e.fontWeights.regular};
`,Zp=B(Q)`
  && {
    align-self: flex-start;
    margin: 12px 0 0;
    background: ${({theme:e})=>e.palette.grey[200]};
    border-color: ${({theme:e})=>e.palette.grey[300]};
    color: ${({theme:e})=>e.palette.grey[800]};
    font-weight: ${({theme:e})=>e.fontWeights.semibold};
  }
`,Qp=B(q)`
  && {
    border-radius: 8px;
    background: ${({theme:e})=>e.palette.grey[900]};
    border-color: ${({theme:e})=>e.palette.grey[900]};
    color: ${({theme:e})=>e.palette.white};
  }

  &&:hover,
  &&:focus {
    background: ${({theme:e})=>e.palette.grey[800]};
    border-color: ${({theme:e})=>e.palette.grey[800]};
    color: ${({theme:e})=>e.palette.white};
  }
`,$p=B.p`
  color: ${({theme:e})=>e.palette.grey[700]};
  font-size: ${({theme:e})=>e.fontSizes.md};
  line-height: ${({theme:e})=>e.lineHeights.md};
  margin: 16px 0 20px;
`,em=B.div`
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.palette.grey[800]};
  margin-bottom: 12px;
`,tm=B.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,nm=B.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: ${({$inspect:e})=>e?`4px 6px`:`1px 0`};
  margin: ${({$inspect:e})=>e?`0 -6px`:`0`};
  border-radius: 6px;
  font-size: ${({theme:e})=>e.fontSizes.md};
  line-height: ${({theme:e})=>e.lineHeights.md};
  color: ${({theme:e})=>e.palette.grey[800]};
  outline: ${({$inspect:e})=>e?`1px dashed rgba(141, 89, 177, 0.55)`:`none`};
  cursor: ${({$inspect:e})=>e?`help`:`default`};

  ${({$inspect:e})=>e?`
    &:hover {
      background: rgba(141, 89, 177, 0.08);
      outline-color: #8D59B1;
    }
  `:``}
`,rm=B.span`
  display: inline-flex;
  align-items: center;
  max-width: 100%;
  border-radius: 6px;
  outline: ${({$inspect:e})=>e?`1px dashed rgba(141, 89, 177, 0.55)`:`none`};
  outline-offset: 4px;
  cursor: ${({$inspect:e})=>e?`help`:`inherit`};

  ${({$inspect:e})=>e?`
    &:hover {
      background: rgba(141, 89, 177, 0.08);
      outline-color: #8D59B1;
    }
  `:``}
`,im=B.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  flex-shrink: 0;
  border: 1.5px solid ${({theme:e})=>e.palette.grey[900]};
  border-radius: 4px;
  padding: 3px 6px;
  background: #fafafa;
  font-size: ${({theme:e})=>e.fontSizes.xs};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  color: ${({theme:e})=>e.palette.grey[800]};

  svg {
    width: 10px;
    height: 10px;
  }
`,am=B(kf)`
  margin-top: 16px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;
  align-items: center;
  padding: 24px 32px;
  border-radius: 12px;
  border-color: ${({theme:e})=>e.palette.grey[300]};
  box-shadow: none;
  font-family: ${({theme:e})=>e.fonts.system};

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,om=B.p`
  margin: 8px 0 0;
  color: ${({theme:e})=>e.palette.grey[700]};
`,sm=B.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;

  @media (max-width: 900px) {
    justify-content: flex-start;
  }
`,cm=B(kf)`
  display: grid;
  grid-template-columns: minmax(230px, 0.72fr) minmax(0, 1fr);
  gap: 16px;
  align-items: center;
  margin-top: 14px;
  padding: 12px 16px;
  border-color: ${({theme:e})=>e.palette.grey[300]};
  border-radius: 16px;
  background: ${({theme:e})=>e.palette.white};
  box-shadow: 0 12px 28px rgba(47, 57, 65, 0.08);

  h3 {
    margin: 3px 0 0;
    color: ${({theme:e})=>e.palette.grey[800]};
    font-size: 15px;
    line-height: 20px;
  }

  p {
    margin: 2px 0 0;
    color: ${({theme:e})=>e.palette.grey[700]};
    font-size: 12px;
    line-height: 17px;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`,lm=B.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;

  button {
    flex: 0 1 156px;
    justify-content: center;
  }
`,um=B(q)`
  min-height: 34px;
  padding-inline: 12px;
  border: 1px solid ${({theme:e})=>e.palette.grey[400]};
  border-radius: 999px;
  background: ${({theme:e})=>e.palette.grey[100]};
  color: ${({theme:e})=>e.palette.grey[800]};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};

  &:hover {
    border-color: ${({theme:e})=>e.palette.blue[600]};
    background: ${({theme:e})=>e.palette.blue[100]};
  }
`,dm=B.p`
  margin: 0 0 6px;
  color: ${({theme:e})=>e.palette.grey[700]};
  font-size: 13px;
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
`;function fm(e){return e.split(/\*\*(.+?)\*\*/g).map((e,t)=>t%2==1?(0,K.jsx)(`strong`,{children:e},t):e)}function pm(e,t,n){let r=(0,g.useRef)();return{onMouseEnter:()=>{!t||!n||(window.clearTimeout(r.current),r.current=window.setTimeout(()=>n(e),450))},onMouseLeave:()=>{window.clearTimeout(r.current)},onClick:i=>{!t||!n||(i.preventDefault(),i.stopPropagation(),window.clearTimeout(r.current),n(e))}}}function mm({feature:e,inspectActive:t,onExplain:n}){let r=pm(e.name,t,n);return(0,K.jsxs)(nm,{$inspect:t,"data-explain":e.name,...r,children:[e.isAi&&(0,K.jsxs)(im,{children:[(0,K.jsx)(cp,{}),`AI`]}),(0,K.jsx)(`span`,{children:e.name})]})}function hm({label:e,inspectActive:t,onExplain:n,children:r}){let i=pm(e,t,n);return t?(0,K.jsx)(rm,{$inspect:!0,"data-explain":e,...i,children:r}):(0,K.jsx)(K.Fragment,{children:r})}function gm(e,t){return t?e.annual:e.monthly}function _m({isAnnual:e,recommendedId:t,recommendedLabel:n=`Recommended`,recommendedTone:r=`blue`,inspectActive:i=!1,onExplain:a,onBuy:o,onEnterpriseHelp:s,onFeatureHelp:c}){return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Up,{children:Pp.map(s=>{let c=$[s],l=s===t,u=l||!!c.isPopular;return(0,K.jsxs)(Wp,{$accent:u,$tone:l?r:`blue`,children:[c.isPopular&&(0,K.jsx)(Gp,{hue:`blue`,children:`Popular with similar businesses`}),(0,K.jsxs)(Kp,{children:[(0,K.jsx)(hm,{label:c.name,inspectActive:i,onExplain:a,children:(0,K.jsx)(qp,{children:c.name})}),l&&(0,K.jsx)(Q,{hue:r,children:n})]}),(0,K.jsxs)(Jp,{children:[(0,K.jsx)(hm,{label:`${c.name} price`,inspectActive:i,onExplain:a,children:(0,K.jsxs)(Yp,{children:[`$`,gm(c,e)]})}),(0,K.jsxs)(Xp,{children:[(0,K.jsx)(`span`,{children:`per agent/month`}),(0,K.jsx)(`span`,{children:e?`Billed annually`:`Billed monthly`})]})]}),(0,K.jsx)(Qp,{isPrimary:!0,isStretched:!0,onClick:()=>i?a?.(c.name):o?.(s),children:`Buy Now`}),c.isTrial&&(0,K.jsx)(Zp,{children:`Your trial`}),(0,K.jsx)($p,{children:c.blurb}),(0,K.jsx)(em,{children:c.featureHeader}),(0,K.jsx)(tm,{children:c.features.map(e=>(0,K.jsx)(mm,{feature:e,inspectActive:i,onExplain:a},e.name))})]},s)})}),c&&(0,K.jsxs)(cm,{"aria-label":`Compare plans by capability`,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(Q,{hue:`grey`,children:`Compare by capability`}),(0,K.jsx)(`h3`,{children:`Have a feature in mind?`}),(0,K.jsx)(`p`,{children:`Get a direct answer, then see the minimum plan that includes it.`})]}),(0,K.jsxs)(lm,{children:[(0,K.jsx)(um,{size:`small`,onClick:()=>c(`Which plan includes AI agents?`),children:`Check AI self-service`}),(0,K.jsx)(um,{size:`small`,onClick:()=>c(`Which plan includes SLAs and CSAT?`),children:`Check SLA & CSAT`}),(0,K.jsx)(um,{size:`small`,onClick:()=>c(`Which plan includes skills-based routing?`),children:`Check routing`})]})]}),(0,K.jsxs)(am,{children:[(0,K.jsxs)(`div`,{children:[s&&(0,K.jsx)(dm,{children:`For complex support operations`}),(0,K.jsx)(hm,{label:$.enterprise.name,inspectActive:i,onExplain:a,children:(0,K.jsx)(qp,{style:{marginBottom:6},children:$.enterprise.name})}),(0,K.jsx)(`p`,{style:{color:`inherit`,maxWidth:640,margin:0},children:fm($.enterprise.blurb)}),(0,K.jsxs)(om,{children:[`$`,gm($.enterprise,e),` per agent/month, `,e?`billed annually`:`billed monthly`]})]}),(0,K.jsxs)(sm,{children:[s&&(0,K.jsx)(q,{isBasic:!0,onClick:s,children:`Build a tailored Enterprise plan`}),(0,K.jsx)(Qp,{onClick:()=>o?.(`enterprise`),children:`Buy Now`})]})]})]})}var vm=B.main`
  max-width: 1080px;
  margin: 0 auto;
  padding: 32px 0 48px;

  @media (max-width: 1120px) {
    padding: 32px 24px 48px;
  }
`,ym=B.div`
  text-align: center;
  padding: 0;

  h1 {
    margin: 0 0 8px;
    color: ${({theme:e})=>e.palette.grey[800]};
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.015em;
  }
`,bm=Kn`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`,xm=`520ms cubic-bezier(0.22, 1, 0.36, 1)`,Sm=B.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 16px 0 24px;
`,Cm=B.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: ${({$isOpen:e})=>e?`1 1 100%`:`0 0 auto`};
  width: ${({$isOpen:e})=>e?`100%`:`max-content`};
  max-width: ${({$isOpen:e})=>e?`100%`:`max-content`};
  min-width: 0;
  margin: 0 auto;
  transition: width ${xm};
`,wm=B.section`
  position: relative;
  display: block;
  width: ${({$isOpen:e})=>e?`100%`:`max-content`};
  max-width: 100%;
  margin: 0 0 0 auto;
  border-radius: ${({$isOpen:e})=>e?`20px`:`9999px`};
  padding: 3px;
  overflow: hidden;
  isolation: isolate;
  background: ${({theme:e})=>e.palette.blue[100]};
  transform: translateZ(0);
  transition:
    width ${xm},
    border-radius ${xm};

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 0;
    width: 420px;
    height: 420px;
    pointer-events: none;
    will-change: transform;
    opacity: ${({$isOpen:e})=>+!e};
    transition: opacity 240ms ease;
    animation: ${bm} 4.5s linear infinite;
    animation-play-state: ${({$isOpen:e})=>e?`paused`:`running`};
  }

  &::before {
    background: conic-gradient(
      from 0deg,
      transparent 0deg,
      transparent 255deg,
      rgba(47, 131, 197, 0.2) 300deg,
      rgba(47, 131, 197, 0.12) 335deg,
      transparent 360deg
    );
  }

  &::after {
    border-radius: 50%;
    background:
      radial-gradient(circle at 50% 5%, rgba(255, 255, 255, 0.9) 0 2px, transparent 2.6px),
      radial-gradient(circle at 50% 12%, rgba(255, 255, 255, 0.55) 0 1.15px, transparent 1.9px);
  }
`,Tm=B.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: ${({$isOpen:e})=>e?`100%`:`max-content`};
  padding: 6px 8px 6px 8px;
  border-radius: ${({$isOpen:e})=>e?`16px 16px 0 0`:`9999px`};
  background: ${({theme:e})=>e.palette.white};
  position: relative;
  z-index: 1;
  transition:
    background 160ms ease-out,
    border-radius ${xm};

  ${({$isOpen:e,theme:t})=>!e&&`
    cursor: pointer;

    &:hover {
      background: ${t.palette.grey[200]};
    }
  `}
`,Em=B(Fs)`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  min-width: 0;
  padding: 0 8px 0 0;
  border: 0;
  background: transparent;
  color: ${({theme:e})=>e.palette.grey[700]};
  font-size: 14px;
  text-decoration: none;
  cursor: ${({$isOpen:e})=>e?`default`:`pointer`};

  &:hover {
    text-decoration: none;
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.palette.blue[600]};
    outline-offset: 3px;
  }
`,Dm=B.div`
  display: grid;
  grid-template-rows: ${({$isOpen:e})=>e?`1fr`:`0fr`};
  position: relative;
  z-index: 1;
  width: ${({$isOpen:e})=>e?`100%`:`0`};
  min-width: 0;
  overflow: hidden;
  transition: grid-template-rows ${xm};

  > div {
    min-height: 0;
    min-width: 0;
    overflow: hidden;
  }
`,Om=B(kf)`
  position: relative;
  margin: 0;
  padding: 24px;
  border: 1px solid ${({theme:e})=>e.palette.blue[300]};
  border-radius: 0 0 22px 22px;
  background: ${({theme:e})=>e.palette.white};
  box-shadow: ${({$isOpen:e})=>e?`0 20px 48px rgba(47, 57, 65, 0.12)`:`none`};
  opacity: ${({$isOpen:e})=>+!!e};
  transform: translateY(${({$isOpen:e})=>e?`0`:`8px`});
  pointer-events: ${({$isOpen:e})=>e?`auto`:`none`};
  transition:
    opacity 280ms ease ${({$isOpen:e})=>e?`90ms`:`0ms`},
    transform 280ms ease ${({$isOpen:e})=>e?`90ms`:`0ms`};

  @media (max-width: 600px) {
    padding: 20px;
  }
`,km=B.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 22px;

  svg {
    flex: 0 0 auto;
    width: 18px;
    height: 18px;
    color: ${({theme:e})=>e.palette.blue[700]};
  }

  h2,
  p {
    margin: 0;
  }

  h2 {
    font-size: 18px;
    line-height: 24px;
  }

  p {
    color: ${({theme:e})=>e.palette.grey[700]};
    font-size: 13px;
  }
`,Am=B.div`
  display: grid;
  gap: 20px;
`,jm=B.ol`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  margin: 2px 0 8px;
  padding: 8px 0 6px;
  list-style: none;

  &::before,
  &::after {
    position: absolute;
    top: 21px;
    left: 13px;
    right: 13px;
    height: 2px;
    border-radius: 999px;
    content: '';
  }

  &::before {
    background: ${({theme:e})=>e.palette.grey[300]};
  }

  &::after {
    right: auto;
    width: ${({$step:e})=>e===1?`0`:e===2?`calc(50% - 13px)`:`calc(100% - 26px)`};
    background: ${({theme:e})=>e.palette.blue[600]};
    transition: width 180ms ease;
  }
`,Mm=B.li`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  min-height: 48px;
  padding: 0 8px;
  color: ${({$active:e,$complete:t,theme:n})=>t||e?n.palette.grey[800]:n.palette.grey[600]};
  font-size: 12px;
  font-weight: ${({$active:e})=>e?700:500};
  text-align: center;
`,Nm=B.span`
  display: inline-grid;
  width: 26px;
  height: 26px;
  place-items: center;
  border: 2px solid
    ${({$active:e,$complete:t,theme:n})=>t||e?n.palette.blue[600]:n.palette.grey[400]};
  border-radius: 50%;
  background: ${({theme:e})=>e.palette.white};
  box-shadow: ${({$active:e})=>e?`0 0 0 4px rgba(31, 115, 183, 0.12)`:`none`};
  color: ${({$active:e,$complete:t,theme:n})=>t||e?n.palette.blue[700]:n.palette.grey[600]};
  font-size: 12px;
  font-weight: ${({theme:e})=>e.fontWeights.bold};
`,Pm=B.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-top: 2px;
`,Fm=B.div`
  display: grid;
  grid-template-columns: minmax(300px, 0.95fr) minmax(320px, 1.05fr);
  gap: 20px;
  align-items: stretch;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`,Im=B.div`
  display: grid;
  gap: 16px;
  min-width: 0;
  align-content: start;
  padding: 18px;
  border: 1px solid #cbe2e1;
  border-radius: 20px;
  background: linear-gradient(180deg, #f2fbfa 0%, ${({theme:e})=>e.palette.white} 58%);
  box-shadow: 0 14px 34px rgba(47, 57, 65, 0.08);
`,Lm=B.section`
  display: grid;
  gap: 14px;
`,Rm=B.div`
  display: grid;
  grid-template-columns: minmax(220px, 0.38fr) minmax(0, 0.62fr);
  gap: 36px;
  align-items: start;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`,zm=B.div`
  display: grid;
  gap: 26px;
`,Bm=B.div`
  h3 {
    margin: 0;
    color: ${({theme:e})=>e.palette.grey[800]};
    font-size: 14px;
    line-height: 20px;
  }

  p {
    margin: 6px 0 0;
    color: ${({theme:e})=>e.palette.grey[700]};
    font-size: 12px;
    line-height: 16px;
  }
`,Vm=B.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.palette.grey[300]};
  border-radius: ${({theme:e})=>e.borderRadii.md};
  background: ${({theme:e})=>e.palette.white};
`,Hm=B.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px 8px;

  svg {
    width: 16px;
    height: 16px;
    color: ${({theme:e})=>e.palette.blue[700]};
  }

  strong {
    font-size: 14px;
    font-weight: ${({theme:e})=>e.fontWeights.semibold};
  }
`,Um=B.div`
  display: grid;
  gap: 8px;
  max-height: 140px;
  padding: 0 16px 8px;
  overflow: auto;
`,Wm=B.div`
  max-width: 92%;
  justify-self: ${({$from:e})=>e===`user`?`end`:`start`};
  padding: 7px 10px;
  border-radius: ${({$from:e})=>e===`user`?`12px 12px 4px 12px`:`12px 12px 12px 4px`};
  background: ${({$from:e,theme:t})=>e===`user`?t.palette.blue[100]:t.palette.white};
  color: ${({theme:e})=>e.palette.grey[800]};
  font-size: 12px;
  line-height: 16px;
`,Gm=B(Q)`
  && {
    background: ${({theme:e})=>e.palette.blue[100]};
    color: ${({theme:e})=>e.palette.blue[800]};
  }
`,Km=B.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px 12px;
  align-items: center;
  margin: 14px 0 4px;
  padding: 10px 12px;
  border-radius: ${({theme:e})=>e.borderRadii.md};
  background: ${({theme:e})=>e.palette.blue[100]};
  color: ${({theme:e})=>e.palette.grey[800]};
  font-size: 13px;

  strong {
    color: ${({theme:e})=>e.palette.blue[800]};
    font-size: 18px;
    letter-spacing: -0.02em;
  }
`,qm=B(kf)`
  && {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 24px;
    border: 1px solid ${({$confirmed:e,theme:t})=>e?t.palette.green[400]:t.palette.grey[300]};
    border-radius: 12px;
    background: ${({theme:e})=>e.palette.white};
    box-shadow: none;
  }

  > [data-garden-id='tags.tag_view'] {
    align-self: flex-start;
    width: fit-content;
    max-width: max-content;
  }

  h3,
  p {
    margin: 0;
  }

  h3 {
    color: ${({theme:e})=>e.palette.grey[800]};
    font-size: 20px;
    line-height: 26px;
  }

  p {
    color: ${({theme:e})=>e.palette.grey[700]};
    font-size: 13px;
    line-height: 19px;
  }
`,Jm=B.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin-top: 12px;

  button {
    width: 100%;
    min-height: 40px;
    padding-inline: 18px;
    white-space: nowrap;
  }
`,Ym=B.div`
  height: 1px;
  margin: 2px 0;
  background: ${({theme:e})=>e.palette.grey[300]};
`,Xm=B.div`
  display: grid;
  gap: 8px;

  h4 {
    margin: 0;
    color: ${({theme:e})=>e.palette.grey[800]};
    font-size: 14px;
    line-height: 20px;
  }
`,Zm=B(kf)`
  && {
    display: flex;
    flex-direction: column;
    padding: 24px;
    border: 1px solid ${({$confirmed:e,theme:t})=>e?t.palette.green[400]:t.palette.blue[300]};
    border-radius: 12px;
    background: ${({$confirmed:e,theme:t})=>e?t.palette.green[100]:t.palette.white};
    box-shadow: none;
  }

  > [data-garden-id='tags.tag_view'] {
    align-self: flex-start;
    width: fit-content;
    max-width: max-content;
  }

  h3 {
    margin: 10px 0 6px;
    font-size: 24px;
    line-height: 30px;
    color: ${({theme:e})=>e.palette.grey[800]};
  }

  p {
    margin: 0;
    color: ${({theme:e})=>e.palette.grey[700]};
    line-height: 20px;
  }
`,Qm=B(q)`
  && {
    margin-top: auto;
    background: ${({theme:e})=>e.palette.grey[800]};
    border-color: ${({theme:e})=>e.palette.grey[800]};
    color: ${({theme:e})=>e.palette.white};
  }

  &&:hover {
    background: ${({theme:e})=>e.palette.grey[700]};
    border-color: ${({theme:e})=>e.palette.grey[700]};
    color: ${({theme:e})=>e.palette.white};
  }
`,$m=B.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-top: 4px;
  padding: 10px 0 2px;
  color: ${({theme:e})=>e.palette.grey[800]};
  font-size: 13px;

  strong {
    font-size: 18px;
    font-variant-numeric: tabular-nums;
    letter-spacing: -0.02em;
    transition: transform 180ms ease;
  }
`,eh=B.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  font-size: 13px;

  span {
    color: ${({theme:e})=>e.palette.grey[700]};
    font-size: 13px;
  }

  strong {
    font-size: 14px;
    font-variant-numeric: tabular-nums;
  }
`,th=B.div`
  margin: 14px 0 8px;
  border-top: ${({theme:e})=>e.borders.sm} solid ${({theme:e})=>e.palette.grey[300]};
  border-bottom: ${({theme:e})=>e.borders.sm} solid ${({theme:e})=>e.palette.grey[300]};
`,nh=B.ul`
  display: grid;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
  color: ${({theme:e})=>e.palette.grey[700]};
  font-size: 13px;

  li::before {
    margin-right: 8px;
    color: ${({theme:e})=>e.palette.green[600]};
    content: '✓';
  }
`,rh=B.ul`
  display: grid;
  gap: 8px;
  margin: 0;
  padding: 0;
  color: ${({theme:e})=>e.palette.grey[700]};
  font-size: 13px;
  line-height: 19px;
  list-style: none;

  li {
    display: flex;
    gap: 8px;
    align-items: flex-start;
  }

  li::before {
    display: grid;
    flex: 0 0 16px;
    width: 16px;
    height: 16px;
    margin-top: 1px;
    border-radius: 4px;
    background: ${({theme:e})=>e.palette.green[100]};
    color: ${({theme:e})=>e.palette.green[700]};
    content: '✓';
    font-size: 11px;
    font-weight: ${({theme:e})=>e.fontWeights.bold};
    line-height: 16px;
    place-items: center;
  }
`,ih=B.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0 16px 8px;
`,ah=B(Zs)`
  && {
    min-height: 32px;
    padding: 4px 10px;
    border-color: transparent;
    border-radius: 999px;
    background: ${({theme:e})=>e.palette.grey[100]};
    color: ${({theme:e})=>e.palette.grey[700]};
    font-size: 11px;
    font-weight: ${({theme:e})=>e.fontWeights.regular};
    line-height: 16px;
  }

  &:hover {
    border-color: ${({theme:e})=>e.palette.blue[300]};
    background: ${({theme:e})=>e.palette.blue[100]};
  }
`,oh=B.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 8px 16px 16px;
  padding: 4px 6px 4px 12px;
  border-radius: ${({theme:e})=>e.borderRadii.md};
  border: 1px solid ${({theme:e})=>e.palette.grey[300]};
  background: ${({theme:e})=>e.palette.white};
`,sh=B(Z)`
  flex: 1;
  min-width: 0;
  margin: 0;
`,ch=B(X)`
  && {
    border: 0;
    background: transparent;
    box-shadow: none;
    min-height: 40px;
    padding: 0;
    color: ${({theme:e})=>e.palette.grey[800]};
    font-size: 14px;
  }

  &&::placeholder {
    color: ${({theme:e})=>e.palette.grey[600]};
  }

  &&:focus,
  &&:hover {
    border: 0;
    background: transparent;
    box-shadow: none;
  }
`,lh=B(q)`
  && {
    flex: 0 0 auto;
    min-width: 52px;
    min-height: 40px;
    padding: 0 16px;
    border: 0;
    border-radius: ${({theme:e})=>e.borderRadii.md};
    background: ${({theme:e})=>e.palette.blue[700]};
    color: ${({theme:e})=>e.palette.white};
    box-shadow:
      0 0 0 3px ${({theme:e})=>e.palette.blue[200]},
      0 8px 18px ${({theme:e})=>e.palette.blue[700]}33;
  }

  &&:hover,
  &&:active,
  &&:focus {
    border: 0;
    background: ${({theme:e})=>e.palette.blue[800]};
    color: ${({theme:e})=>e.palette.white};
  }
`,uh=B(Z)`
  margin: 0;

  label {
    display: block;
    margin-bottom: 8px;
    color: ${({theme:e})=>e.palette.grey[800]};
    font-weight: ${({theme:e})=>e.fontWeights.semibold};
  }
`,dh=B(Y)`
  margin: 0;
  padding: 0;
  border: 0;

  legend {
    margin-bottom: 10px;
    color: ${({theme:e})=>e.palette.grey[800]};
    font-weight: ${({theme:e})=>e.fontWeights.semibold};
  }
`,fh=B(X)`
  && {
    width: 44px;
    max-width: 44px;
    flex: 0 0 44px;
    padding-right: 2px;
    padding-left: 2px;
    text-align: center;
  }
`,ph=B.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  border: 1px solid ${({theme:e})=>e.palette.grey[300]};
  border-radius: ${({theme:e})=>e.borderRadii.md};
  overflow: hidden;
  background: ${({theme:e})=>e.palette.white};

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`,mh=B.div`
  padding: 12px 14px;
  border-right: 1px solid ${({theme:e})=>e.palette.grey[200]};
  border-bottom: 1px solid ${({theme:e})=>e.palette.grey[200]};
  background: ${({$active:e,theme:t})=>e?t.palette.blue[100]:t.palette.white};

  &:nth-child(2n) {
    border-right: 0;
  }

  &:nth-last-child(-n + 2) {
    border-bottom: 0;
  }

  @media (max-width: 560px) {
    border-right: 0;

    &:nth-last-child(-n + 2) {
      border-bottom: 1px solid ${({theme:e})=>e.palette.grey[200]};
    }

    &:last-child {
      border-bottom: 0;
    }
  }
`,hh=B.div`
  display: grid;
  gap: 6px;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid ${({theme:e})=>e.palette.grey[200]};
`,gh=B.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 12px;
`,_h=B(Zs)`
  && {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-height: 42px;
    padding: 9px 14px;
    border: 1px solid ${({theme:e})=>e.palette.grey[300]};
    border-radius: ${({theme:e})=>e.borderRadii.md};
    background: ${({theme:e})=>e.palette.white};
    font-size: 12px;
    font-weight: ${({theme:e})=>e.fontWeights.regular};
    line-height: 16px;
    text-align: left;

    svg {
      flex: 0 0 15px;
      width: 15px;
      height: 15px;
    }
  }

  &&[aria-pressed='true'] {
    border-color: ${({theme:e})=>e.palette.blue[600]};
    background: ${({theme:e})=>e.palette.blue[100]};
    color: ${({theme:e})=>e.palette.blue[800]};
  }
`,vh=B(q)`
  && {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-height: 42px;
    padding: 9px 14px;
    border-color: ${({theme:e})=>e.palette.blue[600]};
    border-radius: ${({theme:e})=>e.borderRadii.md};
    background: ${({theme:e})=>e.palette.white};
    color: ${({theme:e})=>e.palette.blue[700]};
    font-size: 12px;
    font-weight: ${({theme:e})=>e.fontWeights.semibold};

    svg {
      width: 15px;
      height: 15px;
    }
  }

  &&:hover,
  &&:focus {
    background: ${({theme:e})=>e.palette.blue[100]};
    color: ${({theme:e})=>e.palette.blue[800]};
  }
`,yh=B.div`
  position: relative;
  display: inline-flex;
`,bh=B.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  z-index: 2;
  display: grid;
  gap: 8px;
  min-width: 220px;
  padding: 12px;
  border: 1px solid ${({theme:e})=>e.palette.grey[300]};
  border-radius: 14px;
  background: ${({theme:e})=>e.palette.white};
  box-shadow: 0 16px 36px rgba(47, 57, 65, 0.14);

  label {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: ${({theme:e})=>e.palette.grey[800]};
    font-size: 12px;
    line-height: 18px;
  }

  svg {
    width: 15px;
    height: 15px;
  }
`,xh=B.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;

  @media (max-width: 520px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,Sh=B(Zs)`
  && {
    position: relative;
    flex-direction: column;
    justify-content: center;
    gap: 7px;
    min-height: 84px;
    padding: 12px 8px 13px;
    border-radius: ${({theme:e})=>e.borderRadii.md};
    background: ${({theme:e})=>e.palette.white};
    box-shadow: 0 8px 18px rgba(47, 57, 65, 0.08);
    font-size: 12px;
    line-height: 16px;
    text-align: center;
  }

  &&::after {
    position: absolute;
    top: 8px;
    right: 8px;
    display: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${({theme:e})=>e.palette.blue[600]};
    color: ${({theme:e})=>e.palette.white};
    content: '✓';
    font-size: 12px;
    line-height: 18px;
    text-align: center;
  }

  &&[aria-pressed='true'] {
    border-color: ${({theme:e})=>e.palette.blue[600]};
    background: ${({theme:e})=>e.palette.blue[100]};
    color: ${({theme:e})=>e.palette.blue[800]};
    font-weight: ${({theme:e})=>e.fontWeights.semibold};
  }

  &&[aria-pressed='true']::after {
    display: block;
  }
`,Ch=B.span`
  position: relative;
  display: block;
  width: 32px;
  height: 24px;
  color: ${({theme:e})=>e.palette.grey[600]};

  &::before {
    position: absolute;
    top: 0;
    left: ${({$level:e})=>e>1?`4px`:`9px`};
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: currentColor;
    content: '';
  }

  &::after {
    position: absolute;
    bottom: 0;
    left: ${({$level:e})=>e>1?`1px`:`6px`};
    width: 20px;
    height: 11px;
    border-radius: 12px 12px 3px 3px;
    background: currentColor;
    content: '';
  }

  ${({$level:e})=>e>1&&`
    box-shadow: 12px 2px 0 -6px currentColor;
  `}
`,wh=B.span`
  display: inline-grid;
  width: 16px;
  height: 16px;
  margin-left: 6px;
  place-items: center;
  border: 1px solid ${({theme:e})=>e.palette.grey[400]};
  border-radius: 50%;
  color: ${({theme:e})=>e.palette.grey[700]};
  font-size: 11px;
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  cursor: help;
`,Th=B(kf)`
  && {
    padding: 14px 16px;
    border-color: ${({theme:e})=>e.palette.green[400]};
    border-radius: 18px;
    background: ${({theme:e})=>e.palette.green[100]};
    box-shadow: 0 12px 30px rgba(47, 57, 65, 0.08);
  }

  h3,
  p {
    margin: 0;
  }

  h3 {
    font-size: 15px;
    line-height: 21px;
  }

  p {
    margin-top: 4px;
    color: ${({theme:e})=>e.palette.grey[700]};
    font-size: 13px;
    line-height: 19px;
  }
`,Eh=B.p`
  margin: 0;
  color: ${({theme:e})=>e.palette.grey[700]};
  font-size: 12px;
  line-height: 18px;
`,Dh=[`Email`,`Live chat`,`Messaging`,`WhatsApp`,`Voice`,`Social media`,`Help center`],Oh=[`Email`,`Messaging`,`Social media`],kh=Dh.filter(e=>!Oh.includes(e)),Ah=[`0-50`,`51-250`,`250-500`,`500+`],jh=[{id:`ai`,label:`AI`,options:[`AI agents`,`Copilot`,`AI assist`,`AI insights`]},{id:`automation`,label:`Automation`,options:[`Skill-based routing`,`Macros`,`Automations`,`Business rules`]},{id:`reporting`,label:`Reporting`,options:[`Standard reports`,`Custom reports`,`Data exports`]},{id:`security`,label:`Security & governance`,options:[`Role management`,`Audit logs`,`Data residency`,`HIPAA readiness`]}],Mh={"AI agents":`Automate answers for common customer questions using approved knowledge content, helping reduce repetitive tickets.`,Copilot:`Helps human agents draft replies, summarize context, and move faster while keeping the agent in control.`,"AI assist":`Guided AI support for agents and admins, useful when teams want faster resolution without building custom workflows.`,"AI insights":`Surfaces patterns in questions and support volume so teams can understand where automation or content can help.`,"Skill-based routing":`Routes work to the right agent based on capability, language, or topic so customers reach the right person faster.`,Macros:`Reusable responses that help agents handle frequent questions consistently.`,Automations:`Rules that move work forward when time-based or event-based conditions are met.`,"Business rules":`Configurable logic for routing, priority, notifications, and other support operations.`,"Standard reports":`Core reporting views for understanding support volume and team performance.`,"Custom reports":`More flexible reporting for teams that need deeper analysis or tailored dashboards.`,"Data exports":`Exportable data for teams that need offline analysis or downstream reporting.`,"Role management":`Controls who can access settings, data, and actions across the support organization.`,"Audit logs":`Tracks important admin and security events for governance and compliance review.`,"Data residency":`Helps organizations manage where customer data is stored.`,"HIPAA readiness":`Supports healthcare-oriented governance discussions that typically need sales validation.`};function Nh({channel:e}){return e===`Email`?(0,K.jsx)(dp,{"aria-hidden":`true`}):e===`Live chat`||e===`Messaging`?(0,K.jsx)(fp,{"aria-hidden":`true`}):e===`WhatsApp`?(0,K.jsx)(pp,{"aria-hidden":`true`}):e===`Voice`?(0,K.jsx)(mp,{"aria-hidden":`true`}):e===`Social media`?(0,K.jsx)(hp,{"aria-hidden":`true`}):(0,K.jsx)(gp,{"aria-hidden":`true`})}var Ph=B.p`
  text-align: center;
  margin-top: 32px;
  color: ${({theme:e})=>e.palette.grey[700]};
`;function Fh({onBack:e,onCheckout:t}){let[n,r]=(0,g.useState)(`multi`),[i,a]=(0,g.useState)(!0),[o,s]=(0,g.useState)(()=>typeof window<`u`&&new URLSearchParams(window.location.search).get(`assistant`)===`open`),[c,l]=(0,g.useState)(1),[u,d]=(0,g.useState)(`best`),[f,p]=(0,g.useState)(``),[m,h]=(0,g.useState)([]),[_,v]=(0,g.useState)(void 0),[y,b]=(0,g.useState)(`51-250`),[x,S]=(0,g.useState)(``),[C,w]=(0,g.useState)(15),[T,E]=(0,g.useState)([`Email`,`Messaging`,`Social media`]),[ee,te]=(0,g.useState)(!1),[ne,D]=(0,g.useState)({ai:!1,automation:!1,reporting:!1,security:!1}),[O,re]=(0,g.useState)({ai:[],automation:[],reporting:[],security:[]}),ie=Fp[u],k=$[ie.plan],A=i?k.annual:k.monthly,ae=A*C+8*T.length,j=T.filter(e=>kh.includes(e)).length,M={position:`relative`,display:`grid`,gridTemplateColumns:`repeat(3, 1fr)`,gap:0,margin:`2px 0 8px`,padding:`8px 0 6px`,background:`transparent`,listStyle:`none`};function N(e){let t=c>e,n=c===e;return{position:`relative`,zIndex:1,display:`flex`,flexDirection:`column`,alignItems:e===1?`flex-start`:e===3?`flex-end`:`center`,gap:6,minHeight:48,padding:`0 8px`,border:0,borderBottom:0,borderRadius:0,background:`transparent`,color:t||n?`#2f3941`:`#68737d`,fontSize:12,fontWeight:n?700:500,textAlign:e===1?`left`:e===3?`right`:`center`}}function oe(e){let t=c>e,n=c===e;return{display:`inline-grid`,width:26,height:26,placeItems:`center`,borderRadius:`50%`,border:`2px solid ${t||n?`#1f73b7`:`#c2c8cc`}`,background:`#ffffff`,boxShadow:n?`0 0 0 4px rgba(31, 115, 183, 0.12)`:`none`,color:t||n?`#144a75`:`#68737d`,fontSize:12,fontWeight:700}}function P(e,t){let n=Fp[e];d(e),v(n.plan),s(!0),l(3),h(e=>[...e.slice(-2),{user:t??n.chipLabel,bot:n.copy}])}function se(){if(!f.trim())return;let e=f.trim();P(Rp(e),e),p(``)}function ce(e){w(t=>Math.min(20,Math.max(10,t+e)))}function le(e){E(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])}function ue(e){D(t=>{let n=!t[e];return n||re(t=>({...t,[e]:[]})),{...t,[e]:n}})}function de(e,t){re(n=>{let r=n[e].includes(t)?n[e].filter(e=>e!==t):[...n[e],t];return{...n,[e]:r}})}function fe(){let e=jh.flatMap(e=>ne[e.id]?O[e.id]:[]);window.alert(`Connect with sales: ${C} agents, ${T.join(`, `)||`no channels`}, ${e.join(`, `)||`no capabilities`}`)}function pe(e){v(e),t(e)}return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Dp,{onBack:e}),(0,K.jsxs)(vm,{children:[(0,K.jsx)(ym,{children:(0,K.jsx)(`h1`,{children:`AI Plan Advisor`})}),(0,K.jsx)(Sm,{children:(0,K.jsx)(Cm,{$isOpen:o,children:(0,K.jsxs)(wm,{$isOpen:o,children:[(0,K.jsxs)(Tm,{$isOpen:o,onClick:()=>!o&&s(!0),onKeyDown:e=>{!o&&(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),s(!0))},role:o?void 0:`button`,tabIndex:o?void 0:0,"aria-label":o?void 0:`Chat with us to choose a plan`,children:[(0,K.jsxs)(Em,{as:`button`,$isOpen:o,onClick:e=>{e.stopPropagation(),o||s(!0)},"aria-expanded":o,"aria-label":`Chat with us to choose a plan`,children:[(0,K.jsx)(kp,{}),(0,K.jsx)(`span`,{children:`Need help choosing?`}),o?null:(0,K.jsx)(`strong`,{children:`Chat with us`})]}),o?(0,K.jsx)(Xs,{"aria-label":`Dismiss plan assistant`,onClick:e=>{e.stopPropagation(),s(!1)},children:(0,K.jsx)(jl,{})}):null]}),(0,K.jsx)(Dm,{$isOpen:o,children:(0,K.jsx)(`div`,{children:(0,K.jsxs)(Om,{$isOpen:o,"aria-labelledby":`assistant-title`,"aria-hidden":!o,children:[(0,K.jsxs)(km,{children:[(0,K.jsx)(cp,{}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`h2`,{id:`assistant-title`,children:`AI plan assistant`}),(0,K.jsx)(`p`,{children:`Answer a few questions to get a plan recommendation you can buy or send to sales.`})]})]}),(0,K.jsxs)(Am,{children:[(0,K.jsxs)(Im,{children:[(0,K.jsx)(`style`,{children:`
                    @keyframes advisor-step-flow {
                      from { background-position: 0 0; }
                      to { background-position: 12px 0; }
                    }
                  `}),(0,K.jsxs)(jm,{"aria-label":`Plan recommendation steps`,$step:c,style:M,children:[(0,K.jsx)(`span`,{"aria-hidden":`true`,style:{position:`absolute`,top:21,left:13,right:`13px`,height:2,borderRadius:999,background:`#d8dcde`}}),(0,K.jsx)(`span`,{"aria-hidden":`true`,style:{position:`absolute`,top:21,left:13,width:c===1?0:c===2?`calc(50% - 13px)`:`calc(100% - 26px)`,height:2,borderRadius:999,background:`#1f73b7`,transition:`width 180ms ease`}}),(0,K.jsx)(`span`,{"aria-hidden":`true`,style:{display:c===3?`none`:`block`,position:`absolute`,top:21,left:c===1?13:`50%`,width:`calc(50% - 13px)`,height:2,borderRadius:999,backgroundImage:`repeating-linear-gradient(90deg, #1f73b7 0 4px, transparent 4px 10px)`,backgroundSize:`12px 2px`,animation:`advisor-step-flow 900ms linear infinite`}}),[`Your team`,`Capabilities`,`Review`].map((e,t)=>{let n=t+1;return(0,K.jsxs)(Mm,{$active:c===n,$complete:c>n,style:N(n),children:[(0,K.jsx)(Nm,{$active:c===n,$complete:c>n,style:oe(n),children:c>n?`✓`:n}),e]},e)})]}),c===1?(0,K.jsxs)(Rm,{children:[(0,K.jsxs)(Lm,{children:[(0,K.jsxs)(Bm,{children:[(0,K.jsx)(`h3`,{children:`How many employees does your company have?`}),(0,K.jsx)(`p`,{children:`Use a range, or enter a specific number if the buyer already knows it.`})]}),(0,K.jsx)(xh,{children:Ah.map((e,t)=>(0,K.jsxs)(Sh,{isBasic:!0,isPressed:y===e,onClick:()=>b(e),children:[(0,K.jsx)(Ch,{$level:t+1,"aria-hidden":`true`}),(0,K.jsx)(`span`,{children:e})]},e))}),(0,K.jsxs)(Z,{children:[(0,K.jsx)(Z.Label,{children:`Specific company size`}),(0,K.jsx)(X,{placeholder:`Optional`,value:x,onChange:e=>S(e.target.value)})]})]}),(0,K.jsxs)(zm,{children:[(0,K.jsxs)(uh,{children:[(0,K.jsx)(Z.Label,{children:`How many agents are you looking for?`}),(0,K.jsxs)(Zc,{isCompact:!0,children:[(0,K.jsx)(q,{size:`small`,disabled:C<=10,"aria-label":`Decrease agents`,onClick:()=>ce(-1),children:(0,K.jsx)(up,{})}),(0,K.jsx)(fh,{isCompact:!0,readOnly:!0,value:String(C),"aria-label":`Number of agents`}),(0,K.jsx)(q,{size:`small`,disabled:C>=20,"aria-label":`Increase agents`,onClick:()=>ce(1),children:(0,K.jsx)(lp,{})})]})]}),(0,K.jsx)(Lm,{children:(0,K.jsxs)(dh,{isCompact:!0,children:[(0,K.jsx)(Y.Legend,{children:`Which channels do you support?`}),(0,K.jsxs)(gh,{children:[Oh.map(e=>(0,K.jsxs)(_h,{isBasic:!0,isPill:!0,size:`small`,isPressed:T.includes(e),onClick:()=>le(e),children:[(0,K.jsx)(Nh,{channel:e}),e]},e)),(0,K.jsxs)(yh,{children:[(0,K.jsxs)(vh,{size:`small`,isBasic:!0,"aria-expanded":ee,onClick:()=>te(e=>!e),children:[(0,K.jsx)(lp,{}),j>0?`+${j}`:`Add more channels`]}),ee?(0,K.jsx)(bh,{"aria-label":`Additional channels`,children:kh.map(e=>(0,K.jsx)(Z,{children:(0,K.jsx)(Nc,{isCompact:!0,checked:T.includes(e),onChange:()=>le(e),children:(0,K.jsxs)(Z.Label,{children:[(0,K.jsx)(Nh,{channel:e}),e]})})},e))}):null]})]})]})})]})]}):null,c===2?(0,K.jsxs)(Lm,{children:[(0,K.jsxs)(Bm,{children:[(0,K.jsx)(`h3`,{children:`Which capabilities are important?`}),(0,K.jsx)(`p`,{children:`Turn on a group only if it matters for this team.`})]}),(0,K.jsx)(ph,{children:jh.map(e=>(0,K.jsxs)(mh,{$active:ne[e.id],children:[(0,K.jsx)(Z,{children:(0,K.jsx)(dl,{isCompact:!0,checked:ne[e.id],onChange:()=>ue(e.id),children:(0,K.jsx)(Z.Label,{children:e.label})})}),ne[e.id]?(0,K.jsx)(hh,{children:e.options.map(t=>(0,K.jsx)(Z,{children:(0,K.jsx)(Nc,{isCompact:!0,checked:O[e.id].includes(t),onChange:()=>de(e.id,t),children:(0,K.jsxs)(Z.Label,{children:[t,(0,K.jsx)(wh,{role:`img`,"aria-label":`${t} details`,title:Mh[t],children:`i`})]})})},t))}):null]},e.id))})]}):null,c===3?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(Th,{isRecessed:!0,children:[(0,K.jsx)(`h3`,{children:`Your recommendation is ready`}),(0,K.jsx)(`p`,{children:`Review the plan, estimate, and included capabilities before continuing.`})]}),(0,K.jsxs)(Vm,{children:[(0,K.jsxs)(Hm,{children:[(0,K.jsx)(cp,{}),(0,K.jsx)(`strong`,{children:`Ask about the generated plan`})]}),m.length>0?(0,K.jsx)(Um,{children:m.map(e=>(0,K.jsxs)(`div`,{style:{display:`grid`,gap:6},children:[(0,K.jsx)(Wm,{$from:`user`,children:e.user}),(0,K.jsx)(Wm,{$from:`bot`,children:e.bot})]},`${e.user}-${e.bot}`))}):null,(0,K.jsxs)(ih,{children:[(0,K.jsx)(ah,{isBasic:!0,isPill:!0,onClick:()=>P(`best`,`Best for a small team?`),children:`Best for a small team?`}),(0,K.jsx)(ah,{isBasic:!0,isPill:!0,onClick:()=>P(`sla`,`Professional vs Growth`),children:`Professional vs Growth`}),(0,K.jsx)(ah,{isBasic:!0,isPill:!0,onClick:()=>P(`which-ai`,`Includes sandbox?`),children:`Includes sandbox?`})]}),(0,K.jsxs)(oh,{children:[(0,K.jsxs)(sh,{children:[(0,K.jsx)(Z.Label,{hidden:!0,children:`Ask about a plan or feature`}),(0,K.jsx)(ch,{placeholder:`Ask about a plan or feature`,value:f,onChange:e=>p(e.target.value),onKeyDown:e=>e.key===`Enter`&&se()})]}),(0,K.jsx)(lh,{onClick:se,children:`Ask`})]})]})]}):null,c===3?(0,K.jsxs)(Eh,{children:[`Need any other information?`,` `,(0,K.jsx)(Fs,{as:`button`,type:`button`,onClick:fe,children:`Connect with us`})]}):null,(0,K.jsxs)(Pm,{children:[(0,K.jsx)(q,{size:`small`,isBasic:!0,disabled:c===1,onClick:()=>l(e=>e-1),children:`Back`}),c<3?(0,K.jsx)(q,{size:`small`,isPrimary:!0,onClick:()=>l(e=>e+1),children:`Continue`}):(0,K.jsx)(q,{size:`small`,isPrimary:!0,onClick:()=>v(k.id),children:`Confirm recommendation`})]})]}),(0,K.jsxs)(Fm,{children:[(0,K.jsxs)(Zm,{isRecessed:!0,$confirmed:c===3,children:[c===3?(0,K.jsx)(Q,{hue:`green`,isEmphasis:!0,children:`Recommendation complete`}):(0,K.jsx)(Gm,{children:`Recommended plan`}),(0,K.jsx)(`h3`,{children:k.name}),(0,K.jsxs)(`p`,{children:[`$`,A,` per agent/month · billed `,i?`annually`:`monthly`]}),(0,K.jsxs)(Km,{children:[(0,K.jsx)(`strong`,{children:k.id===`enterprise`?`High`:`92%`}),(0,K.jsx)(`span`,{children:k.id===`enterprise`?`Sales-assisted match for governance and scale needs.`:`Match confidence based on selected team size, channels, and capabilities.`})]}),(0,K.jsxs)(th,{children:[(0,K.jsxs)(eh,{children:[(0,K.jsx)(`span`,{children:`How many agents?`}),(0,K.jsx)(`strong`,{children:C})]}),(0,K.jsxs)(eh,{children:[(0,K.jsx)(`span`,{children:`Channels`}),(0,K.jsxs)(`strong`,{children:[T.length,` selected`]})]}),(0,K.jsxs)($m,{children:[(0,K.jsx)(`span`,{children:`Estimated monthly total`}),(0,K.jsxs)(`strong`,{children:[`$`,ae.toLocaleString()]})]})]}),(0,K.jsxs)(nh,{children:[(0,K.jsx)(`li`,{children:`AI agents and automation`}),(0,K.jsx)(`li`,{children:`IVR phone tree`}),(0,K.jsx)(`li`,{children:`Ticket side conversations`})]}),(0,K.jsx)(Qm,{isStretched:!0,onClick:()=>v(k.id),children:`Use this recommendation`}),(0,K.jsx)(Fs,{href:`#all-features`,style:{display:`inline-block`,marginTop:12},children:`See all features`})]}),(0,K.jsxs)(qm,{isRecessed:!0,$confirmed:c===3,children:[(0,K.jsx)(Q,{hue:c===3?`green`:`grey`,isEmphasis:c===3,children:`Customized for you`}),(0,K.jsxs)(`h3`,{children:[`Continue with `,k.name]}),(0,K.jsx)(`p`,{children:`Your team size, channels, and selected capabilities are ready for checkout or sales follow-up.`}),(0,K.jsxs)(th,{children:[(0,K.jsxs)(eh,{children:[(0,K.jsx)(`span`,{children:`Company size`}),(0,K.jsx)(`strong`,{children:x||y})]}),(0,K.jsxs)(eh,{children:[(0,K.jsx)(`span`,{children:`Plan status`}),(0,K.jsx)(`strong`,{children:c===3?`Ready`:`In progress`})]})]}),(0,K.jsx)(Ym,{}),(0,K.jsxs)(Xm,{children:[(0,K.jsx)(`h4`,{children:`Why this plan?`}),(0,K.jsxs)(rh,{children:[ie.why.map(e=>(0,K.jsx)(`li`,{children:e},e)),(0,K.jsx)(`li`,{children:`Relevant features are surfaced first so you can compare with confidence.`})]})]}),(0,K.jsxs)(Jm,{children:[(0,K.jsx)(q,{onClick:()=>window.alert(`Sales receives: ${k.name} recommendation and your plan questions.`),children:`Send configuration to sales`}),(0,K.jsx)(q,{isPrimary:!0,onClick:()=>pe(k.id),children:`Buy now`})]})]})]})]})]})})})]})})}),(0,K.jsx)(Np,{channel:n,onChannelChange:r,isAnnual:i,onBillingChange:()=>a(e=>!e),showBilling:!1}),(0,K.jsx)(_m,{isAnnual:i,recommendedId:_,recommendedLabel:c===3?`AI recommended plan`:`Recommended`,recommendedTone:c===3?`green`:`blue`,onBuy:pe}),(0,K.jsx)(Ph,{children:`Looking for something specific? See the full list of features in each plan.`})]}),(0,K.jsx)(jf,{})]})}var Ih=(0,g.forwardRef)((e,t)=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,focusable:`false`,viewBox:`0 0 20 20`,ref:t,...e,children:(0,K.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,d:`M15 4.167h-2.5a.833.833 0 0 1 0-1.667H15A2.5 2.5 0 0 1 17.5 5v10a2.5 2.5 0 0 1-2.5 2.5h-2.5a.833.833 0 0 1 0-1.667H15c.46 0 .833-.373.833-.833V5A.833.833 0 0 0 15 4.167M8.577 6.494a.833.833 0 0 1 1.179 0l2.917 2.917a.834.834 0 0 1 0 1.178l-2.917 2.917a.833.833 0 0 1-1.179-1.179l1.495-1.494H3.333a.833.833 0 0 1 0-1.666h6.739L8.577 7.673a.833.833 0 0 1 0-1.179`})})),Lh=B.aside`
  position: fixed;
  z-index: 10;
  right: 20px;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  width: min(392px, calc(100vw - 32px));
  height: min(720px, calc(100vh - 40px));
  overflow: hidden;
  border: ${({theme:e})=>e.borders.sm} solid ${({theme:e})=>e.palette.grey[200]};
  border-radius: 28px;
  background: ${({theme:e})=>e.palette.white};
  box-shadow: 0 24px 70px rgba(47, 57, 65, 0.26);

  @media (max-width: 700px) {
    top: auto;
    right: 0;
    bottom: 0;
    width: 100%;
    height: min(720px, 88vh);
    border-radius: 24px 24px 0 0;
  }
`,Rh=B.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 86px;
  padding: 18px 18px;
  background: #11130f;
  color: ${({theme:e})=>e.palette.white};
`,zh=B.div`
  display: flex;
  align-items: center;
  gap: 14px;
  min-height: 92px;
  padding: 22px 28px;
  background: #11130f;
  color: ${({theme:e})=>e.palette.white};

  strong {
    font-size: 18px;
    line-height: 24px;
  }
`,Bh=B.span`
  display: inline-grid;
  width: 34px;
  height: 34px;
  place-items: center;
  color: ${({theme:e})=>e.palette.white};

  svg {
    width: 28px;
    height: 28px;
  }
`,Vh=B.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 0;
  background: ${({theme:e})=>e.palette.white};
`,Hh=B.button`
  display: grid;
  grid-template-columns: 54px minmax(0, 1fr);
  gap: 14px;
  width: 100%;
  padding: 16px 20px;
  border: 0;
  border-bottom: ${({theme:e})=>e.borders.sm} solid ${({theme:e})=>e.palette.grey[200]};
  background: ${({theme:e})=>e.palette.white};
  color: ${({theme:e})=>e.palette.grey[800]};
  font: inherit;
  text-align: left;
  cursor: pointer;

  &:hover {
    background: ${({theme:e})=>e.palette.grey[100]};
  }
`,Uh=B.span`
  display: inline-grid;
  width: 48px;
  height: 48px;
  place-items: center;
  border-radius: ${({theme:e})=>e.borderRadii.md};
  background: ${({theme:e})=>e.palette.grey[300]};
  color: ${({theme:e})=>e.palette.white};

  svg {
    width: 26px;
    height: 26px;
  }
`,Wh=B.div`
  display: flex;
  gap: 10px;
  align-items: baseline;
  min-width: 0;

  strong {
    overflow: hidden;
    color: ${({theme:e})=>e.palette.grey[800]};
    font-size: 15px;
    line-height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span {
    flex: 0 0 auto;
    color: ${({theme:e})=>e.palette.grey[600]};
    font-size: 13px;
  }
`,Gh=B.p`
  display: -webkit-box;
  overflow: hidden;
  margin: 4px 0 0;
  color: ${({theme:e})=>e.palette.grey[800]};
  font-size: 14px;
  line-height: 20px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`,Kh=B.div`
  margin-top: auto;
  padding: 20px 16px 14px;
`,qh=B.button`
  width: 100%;
  min-height: 48px;
  border: 0;
  border-radius: 999px;
  background: #ccff5c;
  color: ${({theme:e})=>e.palette.grey[800]};
  font: inherit;
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  cursor: pointer;
`,Jh=B.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;

  strong {
    overflow: hidden;
    font-size: 18px;
    line-height: 24px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,Yh=B.span`
  display: inline-grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border-radius: 50%;
  background: ${({theme:e})=>e.palette.grey[300]};
  color: #11130f;

  svg {
    width: 18px;
    height: 18px;
  }
`,Xh=B.button`
  display: inline-grid;
  width: 32px;
  height: 32px;
  place-items: center;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: ${({theme:e})=>e.palette.white};
  font: inherit;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`,Zh=B.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 10px;
  min-height: 0;
  background: ${({theme:e})=>e.palette.white};
`,Qh=B.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-end;
`,$h=B.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
  padding: 20px 24px 10px;
`,eg=B.div`
  align-self: ${({$user:e})=>e?`flex-end`:`flex-start`};
  max-width: 86%;
  padding: 10px 14px;
  border-radius: ${({$user:e})=>e?`20px 20px 4px 20px`:`20px 20px 20px 4px`};
  background: ${({$user:e,theme:t})=>e?`#11130f`:t.palette.grey[100]};
  color: ${({$user:e,theme:t})=>e?t.palette.white:t.palette.grey[800]};
  font-size: 15px;
  line-height: 22px;
`,tg=B.div`
  align-self: flex-start;
  margin: 8px 0 -4px;
  color: ${({theme:e})=>e.palette.grey[600]};
  font-size: 13px;
  line-height: 18px;
`,ng=B.div`
  display: contents;
`,rg=B.div`
  align-self: center;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.palette.grey[600]};
  font-size: 13px;
  line-height: 18px;
`,ig=B.div`
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  gap: 12px;
  padding: 16px;
  border: ${({theme:e})=>e.borders.sm} solid ${({theme:e})=>e.palette.blue[200]};
  border-radius: 18px;
  background: linear-gradient(135deg, #ffffff 0%, #f1f8ff 100%);
  box-shadow: 0 12px 30px rgba(31, 115, 183, 0.1);

  span {
    display: inline-grid;
    width: 42px;
    height: 42px;
    place-items: center;
    border-radius: 14px;
    background: #11130f;
    color: ${({theme:e})=>e.palette.white};
    font-size: 20px;
  }

  small {
    display: block;
    margin-bottom: 2px;
    color: ${({theme:e})=>e.palette.blue[700]};
    font-size: 12px;
    font-weight: ${({theme:e})=>e.fontWeights.semibold};
  }

  strong {
    display: block;
    color: ${({theme:e})=>e.palette.grey[800]};
    font-size: 17px;
    line-height: 22px;
  }

  p {
    margin: 6px 0 0;
    color: ${({theme:e})=>e.palette.grey[700]};
    font-size: 13px;
    line-height: 19px;
  }
`,ag=B.div`
  border: ${({theme:e})=>e.borders.sm} solid ${({theme:e})=>e.palette.blue[300]};
  border-radius: ${({theme:e})=>e.borderRadii.md};
  background: ${({theme:e})=>e.palette.white};
  padding: 16px;

  small {
    color: ${({theme:e})=>e.palette.blue[700]};
    font-weight: ${({theme:e})=>e.fontWeights.semibold};
  }

  h3 {
    margin: 6px 0 4px;
    font-size: 18px;
  }

  p {
    margin: 0;
    color: ${({theme:e})=>e.palette.grey[700]};
    line-height: 20px;
  }
`,og=B.div`
  display: grid;
  gap: 8px;
  margin-top: 4px;
`,sg=B.div`
  padding: 8px 22px 8px;

  > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  label {
    color: #11130f;
    font-size: 24px;
    line-height: 1;
  }

  .composer-shell {
    display: flex;
    flex: 1;
    align-items: center;
    gap: 8px;
    min-height: 48px;
    padding: 4px 5px 4px 16px;
    border: 3px solid #11130f;
    border-radius: 999px;
    background: ${({theme:e})=>e.palette.white};
  }

  input {
    border: 0;
    box-shadow: none;
  }
`,cg=B.button`
  min-height: 44px;
  padding: 9px 18px;
  border: 1.5px solid #11130f;
  border-radius: 999px;
  background: ${({$dark:e,theme:t})=>e?`#11130f`:t.palette.white};
  color: ${({$dark:e,theme:t})=>e?t.palette.white:`#11130f`};
  font: inherit;
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
  }
`,lg=B(Xs)`
  border-radius: 999px;
`,ug=B.div`
  padding: 2px 24px 16px;
  color: ${({theme:e})=>e.palette.grey[600]};
  font-size: 12px;
  text-align: center;

  strong {
    color: ${({theme:e})=>e.palette.grey[700]};
    font-weight: ${({theme:e})=>e.fontWeights.semibold};
  }
`,dg=[{text:`Hi, I can help you choose the right Zendesk plan.`},{text:`Where would you like to start?`}],fg=[`Help Center`,`In Product`,`Find the right plan`],pg=[`1-50 employees`,`51-250 employees`,`251-500 employees`,`500+ employees`],mg=[`Messaging + email`,`Voice + IVR`,`SLAs + reporting`,`Security + governance`],hg=[`😡`,`🙁`,`😐`,`🙂`,`😍`],gg=[`Which plan is best for my business?`,`Which plan includes the feature I need?`,`What does this feature mean?`,`How can this feature help my team?`,`I need a custom setup with specific agents and channels.`,`Can you compare the plans for my needs?`];function _g(){return(0,K.jsx)(`svg`,{"aria-hidden":`true`,viewBox:`0 0 32 32`,focusable:`false`,children:(0,K.jsx)(`path`,{fill:`currentColor`,d:`M15.1 14.4H2.7L15.1 2v12.4ZM16.9 17.6h12.4L16.9 30V17.6ZM16.9 14.4C16.9 7.6 22.5 2 29.3 2v12.4H16.9ZM15.1 17.6C15.1 24.4 9.5 30 2.7 30V17.6h12.4Z`})})}function vg({onClose:e,onRecommend:t,onCheckout:n,contextHint:r,initialQuestion:i}){let[a,o]=(0,g.useState)(``),[s,c]=(0,g.useState)(`sessions`),[l,u]=(0,g.useState)(dg),[d,f]=(0,g.useState)(null),[p,m]=(0,g.useState)(`entry`),[h,_]=(0,g.useState)(!1),v=(0,g.useRef)(null),y=(0,g.useMemo)(()=>d?$[d]:null,[d]),b=(0,g.useCallback)(e=>{let n=e.toLowerCase(),r=Rp(e),i=/(custom|enterprise|governance|security|sandbox)/.test(n)?`enterprise`:/(routing|copilot|ivr)/.test(n)?`professional`:r===`sla`?`growth`:r===`best`?`professional`:`team`;u(t=>[...t,{text:e,user:!0},{text:i===`professional`?`Based on the information available, Suite Professional is a strong starting point. It adds Copilot, skills-based routing, and IVR for growing support operations.`:i===`growth`?`Suite Growth is the first plan to include SLAs, CSAT, light agents, and a self-service customer portal.`:i===`enterprise`?`Suite Enterprise is the right starting point for a tailored, governed support operation. It adds advanced security and sandboxing for teams that need a custom rollout.`:`Suite Team includes AI agents, knowledge base, and omnichannel routing. It is a good fit for AI-powered self-service.`}]),f(i),t(i),m(`plan`),o(``)},[t]);function x(e){if(p===`entry`){if(e===`Find the right plan`){_(!0),u(t=>[...t,{text:e,user:!0},{text:`I’ll run a short plan fit assessment. First, what size is your company?`}]),m(`company`);return}u(t=>[...t,{text:e,user:!0},{text:`Got it.`},{text:`How would you rate your experience?`}]),m(`rating`);return}if(p===`company`){u(t=>[...t,{text:e,user:!0},{text:`Got it. Which support need should I optimize the recommendation for?`}]),m(`channels`);return}if(p===`channels`){let n=/security|governance/i.test(e)?`enterprise`:/sla|reporting|voice|ivr/i.test(e)?`professional`:`growth`;u(t=>[...t,{text:e,user:!0},{text:`${$[n].name} is the recommended starting point. It matches your company size, selected support priority, and keeps the next action clear: compare, buy, or send this conversation to sales.`}]),f(n),t(n),m(`plan`);return}if(p===`rating`){u(t=>[...t,{text:e,user:!0},{text:`Thanks for the feedback. Ask a plan question or choose a suggestion below.`}]),m(`plan`);return}b(e)}(0,g.useEffect)(()=>{i&&v.current!==i&&(v.current=i,c(`copilot`),b(i))},[b,i]);function S(){let e=a.trim();e&&b(e)}function C(){u(dg),f(null),m(`entry`),_(!1),o(``),c(`copilot`)}function w(){c(`copilot`)}return(0,K.jsx)(Lh,{"aria-label":`AI plan assistant`,children:s===`sessions`?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(zh,{children:[(0,K.jsx)(Bh,{children:(0,K.jsx)(_g,{})}),(0,K.jsx)(`strong`,{children:`Zendesk`}),(0,K.jsx)(Xh,{"aria-label":`Collapse Zenbot`,onClick:e,style:{marginLeft:`auto`},children:(0,K.jsx)(jl,{})})]}),(0,K.jsxs)(Vh,{children:[(0,K.jsxs)(Hh,{onClick:w,children:[(0,K.jsx)(Uh,{children:(0,K.jsx)(fp,{})}),(0,K.jsxs)(`div`,{children:[(0,K.jsxs)(Wh,{children:[(0,K.jsx)(`strong`,{children:`Started Sep 7 at 1:17 PM`}),(0,K.jsx)(`span`,{children:`3:58 PM`})]}),(0,K.jsx)(Gh,{children:`Zendesk Support AI Agent: I can help you choose the right plan based on company size, channels, AI needs, and governance.`})]})]}),(0,K.jsxs)(Hh,{onClick:w,children:[(0,K.jsx)(Uh,{children:(0,K.jsx)(fp,{})}),(0,K.jsxs)(`div`,{children:[(0,K.jsxs)(Wh,{children:[(0,K.jsx)(`strong`,{children:`Plan recommendation flow`}),(0,K.jsx)(`span`,{children:`Today`})]}),(0,K.jsx)(Gh,{children:`Start a Copilot-guided plan discovery conversation, then send the summary to sales.`})]})]}),(0,K.jsx)(Kh,{children:(0,K.jsx)(qh,{onClick:C,children:`New conversation`})})]}),(0,K.jsxs)(ug,{children:[(0,K.jsx)(`strong`,{children:`Zendesk`}),` Built with Zendesk`]})]}):(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(Rh,{children:[(0,K.jsx)(Xh,{"aria-label":`Back to Zenbot sessions`,onClick:()=>c(`sessions`),children:`‹`}),(0,K.jsxs)(Jh,{children:[(0,K.jsx)(Yh,{children:(0,K.jsx)(fp,{})}),(0,K.jsx)(`strong`,{children:h?`Zendesk Plan Copilot`:`Started Sep 7 at 1:17 PM`})]}),(0,K.jsx)(Xh,{"aria-label":`Start a new chat`,onClick:C,children:`⋮`})]}),(0,K.jsx)(Zh,{children:(0,K.jsxs)($h,{children:[(0,K.jsx)(rg,{children:`1:18 PM`}),h&&(0,K.jsxs)(ig,{children:[(0,K.jsx)(`span`,{children:`✦`}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`small`,{children:`AI plan assessment`}),(0,K.jsx)(`strong`,{children:`Plan Copilot is now guiding this conversation`}),(0,K.jsx)(`p`,{children:`Answer a few quick prompts or type naturally. I’ll recommend a plan and keep the next step ready.`})]})]}),l.map((e,t)=>(0,K.jsxs)(ng,{children:[!e.user&&(t===0||l[t-1]?.user)&&(0,K.jsx)(tg,{children:`Zendesk Support AI Agent`}),(0,K.jsx)(eg,{$user:e.user,children:e.text})]},`${e.text}-${t}`)),(0,K.jsxs)(Qh,{children:[p===`entry`&&fg.map(e=>(0,K.jsx)(cg,{$dark:e===`Find the right plan`,onClick:()=>x(e),children:e},e)),p===`rating`&&hg.map(e=>(0,K.jsx)(cg,{onClick:()=>x(e),children:e},e)),p===`company`&&pg.map(e=>(0,K.jsx)(cg,{onClick:()=>x(e),children:e},e)),p===`channels`&&mg.map(e=>(0,K.jsx)(cg,{onClick:()=>x(e),children:e},e)),p===`rating`&&(0,K.jsx)(cg,{onClick:()=>x(`Not now`),children:`Not now`}),p===`plan`&&gg.slice(0,3).map(e=>(0,K.jsx)(cg,{onClick:()=>x(e),children:e},e))]}),y&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(ag,{children:[(0,K.jsx)(`small`,{children:`Recommended plan`}),(0,K.jsx)(`h3`,{children:y.name}),(0,K.jsxs)(`p`,{children:[`$`,y.annual,` per agent/month, billed annually. `,y.blurb.replace(/\*\*/g,``)]})]}),(0,K.jsxs)(og,{children:[(0,K.jsxs)(q,{isPrimary:!0,isStretched:!0,onClick:()=>{n?n(y.id):t(y.id)},children:[`Continue with `,y.name]}),(0,K.jsx)(q,{isStretched:!0,onClick:()=>t(y.id),children:`Compare plans`}),(0,K.jsx)(q,{isStretched:!0,onClick:()=>window.alert(`A sales specialist will receive this conversation context.`),children:`Talk to sales`})]})]})]})}),(0,K.jsx)(sg,{children:(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`label`,{"aria-hidden":`true`,children:`⌕`}),(0,K.jsxs)(`div`,{className:`composer-shell`,children:[(0,K.jsxs)(Z,{style:{flex:1},children:[(0,K.jsx)(Z.Label,{hidden:!0,children:`Type a message`}),(0,K.jsx)(X,{placeholder:`Type a message`,value:a,onChange:e=>o(e.target.value),onKeyDown:e=>e.key===`Enter`&&S()})]}),(0,K.jsx)(lg,{isPrimary:!0,"aria-label":`Send question`,onClick:S,children:(0,K.jsx)(Ih,{})})]})]})}),(0,K.jsxs)(ug,{children:[(0,K.jsx)(`strong`,{children:`Zendesk`}),` Built with Zendesk`]})]})})}var yg=B.main`
  max-width: 904px;
  margin: 0 auto;
  padding: 0 0 64px;

  @media (max-width: 960px) {
    padding: 0 24px 64px;
  }
`,bg=B.div`
  text-align: center;
  padding: 28px 0 32px;

  h1 {
    margin: 0 0 8px;
    font-size: 20px;
    line-height: 28px;
  }
`,xg=B.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: ${({theme:e})=>e.palette.grey[700]};
  font-size: 14px;
`,Sg=B(kf)`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 20px;
  align-items: center;
  margin-top: 18px;
  border-color: ${({theme:e})=>e.palette.grey[300]};
  border-radius: 22px;
  background: ${({theme:e})=>e.palette.grey[100]};
  box-shadow: 0 18px 44px rgba(47, 57, 65, 0.1);

  h2,
  p {
    margin: 0;
  }

  h2 {
    margin-top: 8px;
    font-size: 18px;
    line-height: 24px;
  }

  p {
    color: ${({theme:e})=>e.palette.grey[700]};
    line-height: 21px;
  }

  ul {
    display: grid;
    gap: 6px;
    margin: 12px 0 0;
    padding-left: 20px;
    color: ${({theme:e})=>e.palette.grey[700]};
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`,Cg=B.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
`,wg=B.span`
  display: inline-flex;
  align-items: center;
  min-height: 22px;
  padding: 2px 8px;
  border: 1px solid ${({theme:e})=>e.palette.grey[200]};
  border-radius: 999px;
  background: ${({theme:e})=>e.palette.grey[100]};
  color: ${({theme:e})=>e.palette.grey[600]};
  font-size: 11px;
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  cursor: default;
`,Tg=B.div`
  padding: 12px;
  border: 1px solid ${({theme:e})=>e.palette.blue[300]};
  border-radius: 10px;
  background: ${({theme:e})=>e.palette.blue[100]};
  color: ${({theme:e})=>e.palette.grey[700]};
  font-size: 13px;
  line-height: 19px;
`,Eg=B.div`
  display: grid;
  gap: 8px;
  min-width: 188px;
`,Dg=B(q)`
  position: fixed;
  right: 24px;
  bottom: 24px;
  display: inline-grid;
  width: 96px;
  height: 96px;
  place-items: center;
  border: 0;
  border-radius: 50%;
  background: #11130f;
  color: ${({theme:e})=>e.palette.white};
  box-shadow: 0 18px 48px rgba(47, 57, 65, 0.22);

  &::before {
    width: 44px;
    height: 26px;
    border-radius: 999px;
    background: ${({theme:e})=>e.palette.white};
    content: '';
  }

  &::after {
    position: absolute;
    bottom: 31px;
    left: 38px;
    width: 0;
    height: 0;
    border-top: 11px solid ${({theme:e})=>e.palette.white};
    border-right: 11px solid transparent;
    content: '';
  }

  svg {
    display: none;
  }

  &:hover,
  &:focus {
    background: #11130f;
    color: ${({theme:e})=>e.palette.white};
    transform: translateY(-2px);
  }
`;function Og({onBack:e,onCheckout:t}){let[n,r]=(0,g.useState)(`multi`),[i,a]=(0,g.useState)(!0),[o,s]=(0,g.useState)(`professional`),c=typeof window<`u`?new URLSearchParams(window.location.search).get(`assistant`):null,l=c===`open`,u=c===`closed`,[d,f]=(0,g.useState)(l),[p,m]=(0,g.useState)(!l&&!u),[h,_]=(0,g.useState)(!1);(0,g.useEffect)(()=>{if(l||u)return;let e=window.setTimeout(()=>{m(!1)},2e3);return()=>window.clearTimeout(e)},[l,u]);function v(e){s(e),t(e)}function y(e){s(e),_(!0)}function b(){f(!0),m(!1)}function x(){let e=$[o],t=`Zendesk plan summary: ${e.name}`,n=[`Hi Zendesk team,`,``,`I used the plan Copilot and would like help reviewing this recommendation.`,``,`Recommended plan: ${e.name}`,`Price: $${i?e.annual:e.monthly} per agent/month, billed ${i?`annually`:`monthly`}`,``,`Captured needs:`,`- AI agents and omnichannel support`,`- SLAs, reporting, and routing guidance`,`- Sales confirmation for governance, rollout timing, and contract needs`,``,`Please follow up with the best next step.`,``,`Thanks,`].join(`
`);window.location.href=`mailto:support@zendesk.com?subject=${encodeURIComponent(t)}&body=${encodeURIComponent(n)}`}return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Dp,{onBack:e}),(0,K.jsxs)(yg,{children:[(0,K.jsxs)(bg,{children:[(0,K.jsx)(`h1`,{children:`Zenbot + Sales Handoff`}),(0,K.jsxs)(xg,{children:[(0,K.jsx)(kp,{}),(0,K.jsx)(`span`,{children:p?`Preparing Zenbot plan guidance…`:h?`Sales context is ready. The user can send it, email it, or continue to checkout.`:`Zenbot can answer the first plan question, then create a sales-ready summary.`})]})]}),(0,K.jsx)(Np,{channel:n,onChannelChange:r,isAnnual:i,onBillingChange:()=>a(e=>!e)}),(0,K.jsx)(_m,{isAnnual:i,recommendedId:o,recommendedLabel:`Recommended from Zenbot`,recommendedTone:h?`green`:`blue`,onBuy:v}),(0,K.jsxs)(Sg,{children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(Q,{hue:h?`green`:`blue`,isEmphasis:!0,children:h?`Sales context ready`:`Sales context empty`}),(0,K.jsx)(`h2`,{children:h?`Sales receives the recommendation context`:`Plan guidance starts in Zenbot`}),h?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`p`,{children:`Zenbot has captured enough context to continue through chat, phone, email, or checkout without making the user repeat their needs.`}),(0,K.jsxs)(`ul`,{children:[(0,K.jsx)(`li`,{children:`Need captured: AI agents, omnichannel support, SLAs, and reporting.`}),(0,K.jsxs)(`li`,{children:[`Recommended plan: `,$[o].name,` with rationale.`]}),(0,K.jsx)(`li`,{children:`Open question: confirm governance, rollout timing, and contract needs.`})]}),(0,K.jsxs)(Cg,{"aria-label":`Available follow-up channels`,children:[(0,K.jsx)(wg,{children:`Chat handoff`}),(0,K.jsx)(wg,{children:`Email summary`}),(0,K.jsx)(wg,{children:`Phone callback`}),(0,K.jsx)(wg,{children:`Checkout`})]})]}):(0,K.jsx)(Tg,{children:`Ask one plan-fit question to create a recommendation, transcript summary, and sales-ready next step.`})]}),(0,K.jsxs)(Eg,{children:[(0,K.jsx)(q,{isPrimary:!0,onClick:b,children:h?`Continue in Zenbot`:`Answer one question`}),(0,K.jsx)(q,{onClick:()=>{if(!h){b();return}window.alert(`Sales receives: ${$[o].name}, selected needs, transcript, and open questions.`)},children:`Send to sales`}),(0,K.jsx)(q,{disabled:!h,onClick:x,children:`Email summary`}),(0,K.jsx)(q,{disabled:!h,onClick:()=>t(o),children:`Continue to checkout`})]})]})]}),(0,K.jsx)(jf,{}),d&&(0,K.jsx)(vg,{contextHint:`Ask Zenbot about features, outcomes, or plan fit. If you need a human, sales receives this context.`,onClose:()=>f(!1),onRecommend:y,onCheckout:t}),!d&&!p&&(0,K.jsx)(Dg,{"aria-label":`Open plan assistant`,onClick:()=>f(!0),children:(0,K.jsx)(fp,{})})]})}var kg=B.main`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 32px 64px;
`,Ag=B.div`
  display: grid;
  grid-template-columns: 300px 1fr 280px;
  gap: 12px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,jg=B(kf)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 22px;
  box-shadow: 0 18px 44px rgba(47, 57, 65, 0.1);
`,Mg=B.p`
  color: ${({theme:e})=>e.palette.grey[700]};
  font-size: 13px;
  margin: 4px 0 0;
`,Ng=B.div`
  font-size: 11px;
  font-weight: 600;
  color: ${({theme:e})=>e.palette.grey[700]};
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,Pg=B.div`
  font-weight: 600;
  margin-top: 2px;
`,Fg=B.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  color: ${({theme:e})=>e.palette.grey[700]};

  li {
    margin: 0 0 8px 16px;
    position: relative;

    &::before {
      content: '•';
      position: absolute;
      left: -16px;
    }
  }
`,Ig=B.div`
  background: ${({theme:e})=>e.palette.grey[100]};
  border: 1px solid ${({theme:e})=>e.palette.grey[300]};
  border-radius: 16px;
  padding: 12px;
  color: ${({theme:e})=>e.palette.grey[700]};
  font-size: 13px;
  box-shadow: 0 12px 30px rgba(47, 57, 65, 0.08);
`;function Lg({onBack:e,onGoToA:t}){let[n,r]=(0,g.useState)(`default`),[i,a]=(0,g.useState)(null),[o,s]=(0,g.useState)(``),c=Ip[n],l=$[c.plan];function u(e){Ip[e].plan!==c.plan&&a(c.plan),r(e)}function d(){let e=o.toLowerCase();e&&(u(zp(e)),s(``))}let f=i&&i!==c.plan;return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Dp,{onBack:e,title:`Plan guidance workspace`,subtitle:`Return to full comparison any time`}),(0,K.jsx)(kg,{children:(0,K.jsxs)(Ag,{children:[(0,K.jsxs)(jg,{children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(kf.Title,{children:`Your requirements`}),(0,K.jsx)(Mg,{children:`Add requirements to keep the recommendation precise.`})]}),(0,K.jsx)(`div`,{children:(0,K.jsx)(Q,{isEmphasis:!0,hue:`blue`,children:`Customer Service`})}),(0,K.jsxs)(kf,{isRecessed:!0,children:[(0,K.jsx)(Ng,{children:`Need`}),(0,K.jsx)(Pg,{children:c.need})]}),(0,K.jsxs)(kf,{isRecessed:!0,children:[(0,K.jsx)(Ng,{children:`Question`}),(0,K.jsx)(Pg,{children:c.question})]}),(0,K.jsxs)(Z,{children:[(0,K.jsx)(Z.Label,{hidden:!0,children:`Add a requirement`}),(0,K.jsx)(X,{placeholder:`We also need skills-based routing`,value:o,onChange:e=>s(e.target.value),onKeyDown:e=>e.key===`Enter`&&d()})]}),(0,K.jsx)(q,{isStretched:!0,onClick:d,children:`+ Add requirement`})]}),(0,K.jsxs)(jg,{children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(kf.Title,{children:`Recommendation`}),(0,K.jsx)(Mg,{children:`Based on your answers`})]}),(0,K.jsxs)(kf,{isRecessed:!0,children:[(0,K.jsx)(`div`,{style:{marginBottom:8},children:(0,K.jsx)(Q,{isEmphasis:!0,hue:`blue`,children:`Recommended`})}),(0,K.jsx)(kf.Title,{style:{fontSize:24},children:l.name}),(0,K.jsxs)(`p`,{style:{margin:`4px 0`},children:[`$`,l.annual,` per agent/month · billed annually`]}),(0,K.jsx)(`p`,{style:{marginBottom:12},children:Lp[l.id]}),(0,K.jsx)(q,{isPrimary:!0,isStretched:!0,onClick:()=>window.alert(`Checkout would open for ${l.name} at $${l.annual}/agent.`),children:`View pricing`})]}),(0,K.jsx)(`div`,{style:{fontWeight:600,marginTop:4},children:`Why this recommendation`}),(0,K.jsx)(Fg,{children:c.why.map(e=>(0,K.jsx)(`li`,{children:e},e))}),f?(0,K.jsxs)(Ig,{children:[`Updated from `,$[i].name,` to `,l.name,` because your latest requirement is not covered on the previous plan.`]}):null]}),(0,K.jsxs)(jg,{children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(kf.Title,{children:`Next steps`}),(0,K.jsx)(Mg,{children:`Review before you buy.`})]}),(0,K.jsx)(q,{isPrimary:!0,isStretched:!0,onClick:()=>window.alert(`Checkout would open for ${l.name} at $${l.annual}/agent.`),children:`Continue to purchase`}),(0,K.jsxs)(kf,{isRecessed:!0,children:[(0,K.jsx)(Ng,{children:`Annual price`}),(0,K.jsxs)(`p`,{style:{marginTop:4},children:[`$`,l.annual,` per agent/month, billed annually.`]})]}),(0,K.jsx)(`div`,{style:{fontWeight:600,marginBottom:0},children:`Other paths`}),(0,K.jsx)(q,{isStretched:!0,onClick:t,children:`Review all plans`}),(0,K.jsx)(q,{isStretched:!0,onClick:()=>window.alert(`Sales handoff includes:\nRecommendation: ${l.name}\nQuestion: ${c.question}`),children:`Contact Sales`}),(0,K.jsx)(Mg,{children:`Sales receives your requirements, questions, and recommendation history.`})]})]})}),(0,K.jsx)(jf,{})]})}var Rg=B.main`
  max-width: 904px;
  margin: 0 auto;
  padding: 0 0 64px;

  @media (max-width: 960px) {
    padding: 0 24px 64px;
  }
`,zg=B.div`
  padding: 28px 0 30px;
  text-align: center;

  h1 {
    margin: 0 0 8px;
    font-size: 20px;
    line-height: 28px;
  }

  p {
    margin: 0;
    color: ${({theme:e})=>e.palette.grey[700]};
    font-size: 14px;
    line-height: 21px;
  }
`,Bg=B.div`
  position: relative;
  width: 100%;
  margin: 0 auto 18px;
`,Vg=B.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
  margin: 0;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`,Hg=B.button`
  position: relative;
  min-width: 0;
  min-height: 66px;
  padding: 12px 16px;
  border: 1px solid ${({$active:e,theme:t})=>e?t.palette.blue[600]:t.palette.grey[300]};
  border-radius: 16px;
  background: ${({$active:e,theme:t})=>e?t.palette.blue[100]:t.palette.white};
  color: ${({theme:e})=>e.palette.grey[800]};
  font: inherit;
  text-align: left;
  cursor: pointer;
  box-shadow: ${({$active:e})=>e?`0 8px 18px rgba(31, 115, 183, 0.12)`:`none`};
  transition:
    border-color 150ms ease,
    background 150ms ease,
    box-shadow 150ms ease,
    transform 150ms ease;

  &::after {
    position: absolute;
    right: 50%;
    bottom: -19px;
    width: 2px;
    height: 18px;
    border-radius: 999px;
    background: ${({$active:e,theme:t})=>e?t.palette.blue[600]:`transparent`};
    content: '';
  }

  strong {
    display: block;
    margin-bottom: 4px;
    font-size: 13px;
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span {
    display: block;
    overflow: hidden;
    color: ${({theme:e})=>e.palette.grey[700]};
    font-size: 11px;
    line-height: 15px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover {
    border-color: ${({theme:e})=>e.palette.blue[600]};
    transform: translateY(-1px);
  }
`,Ug=B(kf)`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 0.46fr);
  gap: 18px;
  align-items: start;
  margin: 0 0 24px;
  border-color: ${({$confirmed:e,theme:t})=>e?t.palette.green[500]:t.palette.blue[300]};
  border-radius: 12px;
  background: ${({theme:e})=>e.palette.white};
  box-shadow: none;

  && {
    padding: 24px;
  }

  h2,
  p {
    margin: 0;
  }

  h2 {
    margin-top: 8px;
    font-size: 20px;
    line-height: 26px;
  }

  p {
    color: ${({theme:e})=>e.palette.grey[700]};
    line-height: 21px;
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`,Wg=B.ul`
  display: grid;
  gap: 7px;
  margin: 14px 0 0;
  padding-left: 18px;
  color: ${({theme:e})=>e.palette.grey[700]};
  list-style: none;

  li {
    position: relative;
    padding-left: 6px;
    font-size: 13px;
    line-height: 19px;
  }

  li::before {
    position: absolute;
    left: -16px;
    top: 2px;
    display: grid;
    width: 14px;
    height: 14px;
    place-items: center;
    border-radius: 50%;
    background: ${({theme:e})=>e.palette.green[600]};
    color: ${({theme:e})=>e.palette.white};
    content: '✓';
    font-size: 10px;
    font-weight: ${({theme:e})=>e.fontWeights.bold};
    line-height: 14px;
  }
`,Gg=B.div`
  display: grid;
  gap: 10px;
`,Kg=B.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 20px;
  align-items: center;
  margin-top: 16px;
  padding: 14px;
  border: 1px solid ${({$confirmed:e,theme:t})=>e?t.palette.green[400]:t.palette.blue[300]};
  border-radius: 12px;
  background: ${({$confirmed:e,theme:t})=>e?t.palette.green[100]:t.palette.blue[100]};
  color: ${({theme:e})=>e.palette.grey[700]};
  font-size: 13px;
  line-height: 19px;

  strong {
    display: block;
    color: ${({theme:e})=>e.palette.grey[800]};
  }
`,qg=B.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
  width: 220px;
  padding-left: 18px;
  border-left: 1px solid ${({theme:e})=>e.palette.grey[300]};

  @media (max-width: 560px) {
    width: 100%;
    padding-left: 0;
    padding-top: 12px;
    border-top: 1px solid ${({theme:e})=>e.palette.grey[300]};
    border-left: 0;
  }
`,Jg=B.div`
  padding-left: 12px;

  & + & {
    border-left: 1px solid ${({theme:e})=>e.palette.grey[300]};
  }

  span {
    display: block;
    color: ${({theme:e})=>e.palette.grey[600]};
    font-size: 11px;
    line-height: 16px;
  }

  strong {
    color: ${({theme:e})=>e.palette.grey[800]};
    font-size: 13px;
    line-height: 18px;
  }
`,Yg=[{id:`self-service`,label:`Reduce ticket volume`,copy:`Start with AI agents, knowledge base, and omnichannel support.`,plan:`team`},{id:`service-levels`,label:`Meet service levels`,copy:`Prioritize SLAs, CSAT, business hours, and customer portal needs.`,plan:`growth`},{id:`scale-routing`,label:`Scale support ops`,copy:`Highlight skills-based routing, IVR, Copilot, and reporting.`,plan:`professional`},{id:`governance`,label:`Enterprise governance`,copy:`Route security, sandboxing, and deployment questions to sales.`,plan:`enterprise`}];function Xg({onBack:e,onCheckout:t}){let[n,r]=(0,g.useState)(`professional`),[i,a]=(0,g.useState)(`scale-routing`),[o,s]=(0,g.useState)(!1),[c,l]=(0,g.useState)(!1),[u,d]=(0,g.useState)(null),f=Yg.find(e=>e.id===i)??Yg[2];function p(e){d(e),s(!0),l(!0)}let m=u?.kind===`tailored`?`Share your agents, channels, or governance needs. I can recommend a starting point or help you prepare a tailored setup.`:`Ask which plan includes a feature, what that feature does, or how it can help your support team.`;return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Dp,{onBack:e}),(0,K.jsxs)(Rg,{children:[(0,K.jsxs)(zg,{children:[(0,K.jsx)(`h1`,{children:`Personalized Pricing Page`}),(0,K.jsx)(`p`,{children:`Choose the support outcome that matters most. Zendesk highlights the plan that best fits that path.`})]}),(0,K.jsx)(Bg,{children:(0,K.jsx)(Vg,{"aria-label":`Personalize pricing by outcome`,children:Yg.map(e=>(0,K.jsxs)(Hg,{$active:i===e.id,"aria-pressed":i===e.id,onClick:()=>{a(e.id),r(e.plan),s(!1)},children:[(0,K.jsx)(`strong`,{children:e.label}),(0,K.jsx)(`span`,{children:e.copy})]},e.id))})}),(0,K.jsxs)(Ug,{$confirmed:o,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(Q,{hue:o?`green`:`blue`,isEmphasis:!0,children:o?`Recommendation confirmed`:`Recommended from your outcome`}),(0,K.jsxs)(`h2`,{children:[$[n].name,` for `,f.label]}),(0,K.jsxs)(`p`,{children:[f.copy,` Start here, then compare or continue when the plan fits.`]}),(0,K.jsx)(Wg,{children:$[n].features.slice(0,3).map(e=>(0,K.jsx)(`li`,{children:e.name},e.name))}),o?(0,K.jsxs)(Kg,{$confirmed:o,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsxs)(`strong`,{children:[$[n].name,` is selected`]}),`This plan is highlighted below and ready for checkout or sales handoff.`]}),(0,K.jsxs)(qg,{children:[(0,K.jsxs)(Jg,{children:[(0,K.jsx)(`span`,{children:`Price`}),(0,K.jsxs)(`strong`,{children:[`$`,$[n].annual,`/agent/mo`]})]}),(0,K.jsxs)(Jg,{children:[(0,K.jsx)(`span`,{children:`Best for`}),(0,K.jsx)(`strong`,{children:f.label})]})]})]}):(0,K.jsxs)(Kg,{$confirmed:o,children:[(0,K.jsxs)(`div`,{children:[(0,K.jsxs)(`strong`,{children:[$[n].name,` matches this outcome`]}),`Review the included capabilities, then highlight this plan in the pricing table.`]}),(0,K.jsxs)(qg,{children:[(0,K.jsxs)(Jg,{children:[(0,K.jsx)(`span`,{children:`Price`}),(0,K.jsxs)(`strong`,{children:[`$`,$[n].annual,`/agent/mo`]})]}),(0,K.jsxs)(Jg,{children:[(0,K.jsx)(`span`,{children:`Billing`}),(0,K.jsx)(`strong`,{children:`Annual`})]})]})]})]}),(0,K.jsxs)(Gg,{children:[(0,K.jsx)(q,{isPrimary:!0,onClick:()=>s(!0),children:`Highlight this plan`}),(0,K.jsx)(q,{onClick:()=>p({kind:`feature`,question:`Can you confirm whether ${$[n].name} fits my needs?`}),children:`Ask why this plan`}),o?(0,K.jsxs)(q,{isStretched:!0,onClick:()=>t(n),children:[`Continue with `,$[n].name]}):null]})]}),(0,K.jsx)(_m,{isAnnual:!0,recommendedId:n,recommendedLabel:o?`Confirmed recommendation`:`Recommended for your needs`,recommendedTone:o?`green`:`blue`,onBuy:t,onEnterpriseHelp:()=>p({kind:`tailored`,question:`I need a custom Enterprise setup with advanced security and governance.`})})]}),(0,K.jsx)(jf,{}),c&&(0,K.jsx)(vg,{contextHint:m,initialQuestion:u?.question,onClose:()=>l(!1),onRecommend:r,onCheckout:t},u?.question)]})}var Zg=B.main`max-width: 1120px; margin: 0 auto; padding: 0 32px 64px;`,Qg=B.section`
  padding: 52px 0 28px;
  h1 { margin: 0; font-size: 34px; letter-spacing: -.03em; }
  p { color: ${({theme:e})=>e.palette.grey[700]}; margin: 12px 0 0; }
`,$g=B.div`
  display: grid; grid-template-columns: minmax(0, 1fr) 380px; gap: 20px; align-items: start;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`,e_=B(kf)`
  position: sticky;
  top: 16px;
  padding: 20px;
  border-radius: 22px;
  box-shadow: 0 18px 44px rgba(47, 57, 65, 0.1);
`,t_=B.div`display: grid; gap: 12px; margin: 20px 0;`,n_=B.div`
  justify-self: ${({$user:e})=>e?`end`:`start`}; max-width: 92%; padding: 12px;
  border-radius: ${({theme:e})=>e.borderRadii.md};
  background: ${({$user:e,theme:t})=>e?t.palette.royal[100]:t.palette.grey[100]};
  font-size: 14px; line-height: 20px;
`,r_=B.div`display: grid; gap: 8px;`,i_=B.button`
  padding: 10px 12px; text-align: left; border: ${({theme:e})=>e.borders.sm} solid ${({theme:e})=>e.palette.grey[300]};
  border-radius: 14px; background: ${({theme:e})=>e.palette.white}; color: inherit; cursor: pointer;
  &:hover { border-color: ${({theme:e})=>e.palette.royal[600]}; background: ${({theme:e})=>e.palette.royal[100]}; }
`,a_=B.div`display: flex; gap: 8px; align-items: end;`,o_=B(kf)`
  margin-top: 20px; padding: 20px;
  border-radius: 22px;
  box-shadow: 0 18px 44px rgba(47, 57, 65, 0.1);
  h2 { margin: 6px 0; font-size: 22px; }
  > p { margin: 0; color: ${({theme:e})=>e.palette.grey[700]}; line-height: 21px; }
`,s_=B.div`
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin: 20px 0;
  @media (max-width: 550px) { grid-template-columns: 1fr; }
`,c_=B.div`
  padding: 16px; border: ${({theme:e})=>e.borders.sm} solid ${({$selected:e,theme:t})=>e?t.palette.royal[600]:t.palette.grey[300]};
  border-radius: 18px; background: ${({$selected:e,theme:t})=>e?t.palette.royal[100]:t.palette.white};
  box-shadow: 0 12px 30px rgba(47, 57, 65, 0.08);
  h3 { margin: 8px 0; font-size: 18px; } p { margin: 0; color: ${({theme:e})=>e.palette.grey[700]}; font-size: 14px; line-height: 20px; }
`,l_=B.ul`padding-left: 18px; margin: 12px 0 0; font-size: 13px; line-height: 21px;`,u_=B.div`display: flex; flex-wrap: wrap; gap: 8px;`,d_=B.div`
  padding: 12px; margin-top: 16px; border-radius: ${({theme:e})=>e.borderRadii.md};
  background: ${({theme:e})=>e.palette.green[100]}; font-size: 14px;
`,f_=[{label:`We need to meet SLAs and measure CSAT`,outcome:`service-levels`,text:`We need to meet SLAs and measure CSAT.`},{label:`We want AI self-service`,outcome:`self-service`,text:`We want to improve AI-powered self-service.`},{label:`We need skills-based routing`,outcome:`scale-routing`,text:`We need skills-based routing as we scale.`},{label:`We want to help agents work faster`,outcome:`agent-productivity`,text:`We want to improve agent productivity.`}];function p_({onBack:e,onCheckout:t}){let[n,r]=(0,g.useState)(`multi`),[i,a]=(0,g.useState)(!0),[o,s]=(0,g.useState)({agents:15,channels:[`Email`,`Messaging`],outcomes:[],requiresGovernance:!1}),[c,l]=(0,g.useState)([]),[u,d]=(0,g.useState)(``),[f,p]=(0,g.useState)(null),m=(0,g.useMemo)(()=>Hp(o),[o]),h=$[m.plan],_=$[m.plan===`team`?`growth`:m.plan===`enterprise`?`professional`:`team`];function v(e){let t={...o,outcomes:[e.outcome]},n=$[Hp(t).plan];s(t),l([{text:e.text,user:!0},{text:`${n.name} is the starting point for that goal. I’ll compare it with the closest lower-cost alternative so you can see the trade-off.`}])}function y(){u.trim()&&(v({...f_.find(e=>u.toLowerCase().includes(`sla`)?e.outcome===`service-levels`:u.toLowerCase().includes(`routing`)?e.outcome===`scale-routing`:e.outcome===`self-service`)??f_[1],text:u}),d(``))}return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Dp,{onBack:e}),(0,K.jsxs)(Zg,{children:[(0,K.jsxs)(Qg,{children:[(0,K.jsx)(`h1`,{children:`Select a plan most suited for you`}),(0,K.jsx)(`p`,{children:`Ask a question, then review an answer you can confidently act on.`})]}),(0,K.jsx)(Np,{channel:n,onChannelChange:r,isAnnual:i,onBillingChange:()=>a(!i)}),(0,K.jsxs)($g,{children:[(0,K.jsxs)(`div`,{children:[(0,K.jsxs)(o_,{children:[(0,K.jsx)(Q,{isEmphasis:!0,hue:`blue`,children:`Recommended fit`}),(0,K.jsx)(`h2`,{children:`Recommended plan vs lower-cost option`}),(0,K.jsx)(`p`,{children:`Compare what you gain before deciding whether to continue, save cost, or talk to sales.`}),(0,K.jsxs)(s_,{children:[(0,K.jsxs)(c_,{children:[(0,K.jsx)(Q,{hue:`grey`,children:`Lower-cost option`}),(0,K.jsx)(`h3`,{children:_.name}),(0,K.jsxs)(`p`,{children:[`$`,i?_.annual:_.monthly,` per agent/month`]}),(0,K.jsx)(l_,{children:_.features.slice(0,3).map(e=>(0,K.jsx)(`li`,{children:e.name},e.name))})]}),(0,K.jsxs)(c_,{$selected:!0,children:[(0,K.jsx)(Q,{isEmphasis:!0,hue:`blue`,children:`Recommended for your needs`}),(0,K.jsx)(`h3`,{children:h.name}),(0,K.jsxs)(`p`,{children:[`$`,i?h.annual:h.monthly,` per agent/month`]}),(0,K.jsx)(l_,{children:m.coverage.map(e=>(0,K.jsx)(`li`,{children:e},e))})]})]}),(0,K.jsxs)(`p`,{children:[(0,K.jsx)(`strong`,{children:`Why pay more?`}),` `,m.why[0]]}),(0,K.jsxs)(u_,{style:{marginTop:20},children:[(0,K.jsx)(q,{isPrimary:!0,onClick:()=>t(m.plan),children:`Continue to purchase`}),(0,K.jsx)(q,{onClick:()=>p(`sales`),children:`Talk to sales`})]}),f&&(0,K.jsx)(d_,{children:f===`purchase`?`Checkout is ready with ${h.name}, ${o.agents} agents, and your billing preference.`:`Sales receives your question, recommended plan, comparison, and selected support goal.`})]}),(0,K.jsx)(_m,{isAnnual:i,recommendedId:m.plan,recommendedLabel:`Matches your goal`,onBuy:t})]}),(0,K.jsxs)(e_,{"aria-label":`Admin Copilot plan guidance`,children:[(0,K.jsx)(Q,{isEmphasis:!0,hue:`royal`,children:`Admin Copilot`}),(0,K.jsx)(`h2`,{style:{margin:`10px 0 4px`},children:`How can I help?`}),(0,K.jsx)(`p`,{style:{margin:0,color:`#5c6970`,fontSize:14},children:`Choose a goal or ask about a plan feature.`}),c.length===0?(0,K.jsx)(r_,{style:{marginTop:18},children:f_.map(e=>(0,K.jsx)(i_,{onClick:()=>v(e),children:e.label},e.outcome))}):(0,K.jsxs)(t_,{children:[c.map((e,t)=>(0,K.jsx)(n_,{$user:e.user,children:e.text},t)),(0,K.jsx)(n_,{children:m.why[0]})]}),(0,K.jsxs)(a_,{children:[(0,K.jsxs)(Z,{style:{flex:1},children:[(0,K.jsx)(Z.Label,{hidden:!0,children:`Ask admin copilot`}),(0,K.jsx)(X,{placeholder:`Ask admin copilot`,value:u,onChange:e=>d(e.target.value),onKeyDown:e=>e.key===`Enter`&&y()})]}),(0,K.jsx)(q,{isPrimary:!0,onClick:y,children:`Ask`})]})]})]})]}),(0,K.jsx)(jf,{})]})}var m_=Kn`
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(16px) scale(0.96);
  }

  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(1);
  }
`,h_=Kn`
  from { opacity: 0; }
  to { opacity: 1; }
`,g_=Kn`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,__=Kn`
  from {
    opacity: 0;
    transform: translateX(42px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`,v_=Kn`
  from {
    opacity: 1;
    transform: translateX(0);
  }

  to {
    opacity: 0;
    transform: translateX(-42px);
  }
`,y_=Kn`
  from {
    opacity: 0;
    transform: translateX(-42px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`,b_=Kn`
  from {
    opacity: 1;
    transform: translateX(0);
  }

  to {
    opacity: 0;
    transform: translateX(42px);
  }
`,x_=B.main`
  max-width: 1080px;
  margin: 0 auto;
  padding: 32px 0 48px;

  @media (max-width: 1120px) {
    padding: 32px 24px 48px;
  }
`,S_=B.section`
  position: relative;
  padding: 0 0 18px;
  text-align: center;

  h1 {
    margin: 0 0 12px;
    color: ${({theme:e})=>e.palette.grey[800]};
    font-size: 22px;
    line-height: 30px;
    letter-spacing: -0.02em;
  }
`,C_=B.span`
  position: relative;
  z-index: 0;
  display: inline-flex;
  isolation: isolate;

  &::before {
    position: absolute;
    inset: -18px -22px;
    z-index: -1;
    border-radius: 999px;
    background: linear-gradient(
      90deg,
      rgba(31, 115, 183, 0.16),
      rgba(188, 235, 0, 0.18),
      rgba(83, 146, 249, 0.14),
      rgba(31, 115, 183, 0.16)
    );
    background-size: 220% 220%;
    filter: blur(16px);
    opacity: 0.72;
    animation: ${g_} 5.5s ease-in-out infinite;
    content: '';
  }
`,w_=B(q)`
  && {
    position: relative;
    z-index: 1;
    min-height: 44px;
    padding-inline: 18px;
    border: 1px solid ${({theme:e})=>e.palette.grey[300]};
    border-radius: 999px;
    background: ${({theme:e})=>e.palette.white};
    color: ${({theme:e})=>e.palette.grey[800]};
    box-shadow: 0 14px 34px rgba(47, 57, 65, 0.1);
    font-weight: ${({theme:e})=>e.fontWeights.semibold};
    overflow: visible;
  }

  &&:hover,
  &&:focus {
    background: ${({theme:e})=>e.palette.grey[100]};
    border-color: ${({theme:e})=>e.palette.blue[400]};
    color: ${({theme:e})=>e.palette.grey[900]};
  }

  svg {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
`,T_=B.div`
  position: fixed;
  inset: 0;
  z-index: 15;
  background: rgba(23, 29, 35, 0.2);
  animation: ${h_} 180ms ease-out;
`,E_=B.div`
  position: fixed;
  top: clamp(20px, 5vh, 48px);
  left: 50%;
  z-index: 20;
  width: min(1080px, calc(100vw - 48px));
  max-height: calc(100dvh - 40px);
  overflow: auto;
  transform: translateX(-50%);
  transform-origin: top center;
  border: 1px solid ${({theme:e})=>e.palette.grey[300]};
  border-radius: 20px;
  background: ${({theme:e})=>e.palette.white};
  box-shadow: 0 28px 80px rgba(47, 57, 65, 0.24);
  animation: ${m_} 240ms cubic-bezier(0.22, 1, 0.36, 1);
  animation-fill-mode: both;

  @media (max-width: 840px) {
    top: 24px;
    width: min(720px, calc(100vw - 32px));
    max-height: calc(100vh - 48px);
  }
`,D_=B.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 24px 14px;
  border-bottom: 1px solid ${({theme:e})=>e.palette.grey[200]};

  h2,
  p {
    margin: 0;
  }

  h2 {
    color: ${({theme:e})=>e.palette.grey[800]};
    font-size: 18px;
    font-weight: ${({theme:e})=>e.fontWeights.semibold};
    line-height: 24px;
    letter-spacing: -0.02em;
  }

  p {
    margin-top: 4px;
    color: ${({theme:e})=>e.palette.grey[700]};
    font-size: 12px;
    line-height: 18px;
  }
`,O_=B(q)`
  && {
    flex: 0 0 auto;
    width: 32px;
    height: 32px;
    min-height: 32px;
    padding: 0;
    border-radius: 50%;
    color: ${({theme:e})=>e.palette.grey[700]};
  }
`,k_=B.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  min-height: 0;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`,A_=B.div`
  display: grid;
  gap: 12px;
  align-content: start;
  padding: 18px 24px 20px;
  border-right: 1px solid ${({theme:e})=>e.palette.grey[200]};
  background: ${({theme:e})=>e.palette.white};
  min-width: 0;

  @media (max-width: 760px) {
    border-right: 0;
    border-bottom: 1px solid ${({theme:e})=>e.palette.grey[200]};
  }
`,j_=B.section`
  display: grid;
  gap: 8px;
`,M_=B.div`
  display: grid;
  grid-template-columns: 28px 1fr;
  gap: 10px;
  align-items: start;
`,N_=B.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${({theme:e})=>e.palette.grey[900]};
  color: ${({theme:e})=>e.palette.white};
  font-size: 12px;
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
`,P_=B.div`
  h3,
  p {
    margin: 0;
  }

  h3 {
    color: ${({theme:e})=>e.palette.grey[800]};
    font-size: 14px;
    font-weight: ${({theme:e})=>e.fontWeights.semibold};
    line-height: 20px;
  }

  p {
    margin-top: 2px;
    color: ${({theme:e})=>e.palette.grey[600]};
    font-size: 12px;
    line-height: 17px;
  }
`,F_=B.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
  padding-left: 38px;
  min-width: 0;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    padding-left: 0;
  }
`,I_=B(Zs)`
  && {
    align-items: center;
    justify-content: flex-start;
    height: auto;
    min-height: 36px;
    padding: 7px 12px;
    border-color: ${({theme:e})=>e.palette.grey[300]};
    border-radius: 10px;
    background: ${({theme:e})=>e.palette.white};
    color: ${({theme:e})=>e.palette.grey[800]};
    font-size: 12px;
    font-weight: ${({theme:e})=>e.fontWeights.regular};
    line-height: 16px;
    text-align: left;
    white-space: normal;
    min-width: 0;
  }

  && > span {
    min-width: 0;
    white-space: normal;
  }

  &&[aria-pressed='true'] {
    border-color: ${({theme:e})=>e.palette.lime[600]};
    background: ${({theme:e})=>e.palette.lime[100]};
    color: ${({theme:e})=>e.palette.grey[900]};
    font-weight: ${({theme:e})=>e.fontWeights.regular};
  }
`,L_=B(F_)`
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`,R_=B(Zs)`
  && {
    align-items: flex-start;
    justify-content: flex-start;
    height: auto;
    min-height: 44px;
    padding: 8px 10px;
    border-color: ${({theme:e})=>e.palette.grey[300]};
    border-radius: 10px;
    background: ${({theme:e})=>e.palette.white};
    color: ${({theme:e})=>e.palette.grey[800]};
    font-size: 12px;
    line-height: 17px;
    text-align: left;
    white-space: normal;
  }

  &&[aria-pressed='true'] {
    border-color: ${({theme:e})=>e.palette.lime[600]};
    background: ${({theme:e})=>e.palette.lime[100]};
    color: ${({theme:e})=>e.palette.grey[900]};
  }
`,z_=B.span`
  display: block;
  color: ${({theme:e})=>e.palette.grey[800]};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
`,B_=B.span`
  display: block;
  margin-top: 2px;
  color: ${({theme:e})=>e.palette.grey[700]};
  font-size: 12px;
  font-weight: ${({theme:e})=>e.fontWeights.regular};
`,V_=B.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 12px;
  align-items: center;
  margin-left: 38px;
  padding: 10px 12px;
  border: 1px solid ${({theme:e})=>e.palette.grey[300]};
  border-radius: 12px;
  background: ${({theme:e})=>e.palette.white};
  min-width: 0;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    margin-left: 0;
  }
`,H_=B.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
`,U_=B(Zs)`
  && {
    min-height: 32px;
    padding-inline: 10px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: ${({theme:e})=>e.fontWeights.regular};
  }

  &&[aria-pressed='true'] {
    border-color: ${({theme:e})=>e.palette.blue[600]};
    background: ${({theme:e})=>e.palette.blue[100]};
    color: ${({theme:e})=>e.palette.blue[800]};
  }
`,W_=B.div`
  display: flex;
  align-items: center;
  gap: 8px;

  input {
    width: 64px;
    text-align: center;
  }
`,G_=B.aside`
  display: grid;
  align-content: center;
  gap: 16px;
  padding: 28px 34px;
  min-width: 0;
  background:
    radial-gradient(circle at 50% 8%, rgba(188, 235, 0, 0.12), transparent 34%),
    ${({theme:e})=>e.palette.grey[900]};
  color: ${({theme:e})=>e.palette.white};
`,K_=B.div`
  text-align: center;

  p {
    margin: 0 0 8px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 13px;
    line-height: 18px;
  }
`,q_=B.div`
  display: grid;
  min-height: 414px;
  place-items: center;
`,J_=B.div`
  display: grid;
  grid-area: 1 / 1;
  gap: 14px;
  width: 100%;
  max-width: 340px;
  margin: 0 auto;
  padding: 24px;
  border: 1px solid rgba(188, 235, 0, 0.32);
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.05));
  box-shadow: 0 22px 48px rgba(0, 0, 0, 0.28);
  pointer-events: ${({$motion:e})=>e.startsWith(`exit`)?`none`:`auto`};
  animation-duration: 720ms;
  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
  animation-fill-mode: both;

  ${({$motion:e})=>e===`enter-forward`&&z`animation-name: ${__};`}
  ${({$motion:e})=>e===`exit-forward`&&z`animation-name: ${v_};`}
  ${({$motion:e})=>e===`enter-back`&&z`animation-name: ${y_};`}
  ${({$motion:e})=>e===`exit-back`&&z`animation-name: ${b_};`}
`,Y_=B.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  h3 {
    margin: 0;
    color: ${({theme:e})=>e.palette.white};
    font-size: 22px;
    font-weight: ${({theme:e})=>e.fontWeights.semibold};
    line-height: 28px;
    letter-spacing: -0.02em;
  }
`,X_=B.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  color: ${({theme:e})=>e.palette.white};
`,Z_=B.span`
  font-size: 38px;
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  line-height: 44px;
  letter-spacing: -0.04em;
`,Q_=B.span`
  color: rgba(255, 255, 255, 0.72);
  font-size: 12px;
  line-height: 16px;
`,$_=B.div`
  display: grid;
  gap: 7px;
`,ev=B.div`
  height: 6px;
  overflow: hidden;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.16);

  &::before {
    display: block;
    width: ${({$score:e})=>e}%;
    height: 100%;
    border-radius: inherit;
    background: ${({theme:e})=>e.palette.lime[400]};
    content: '';
  }
`,tv=B.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.72);
  font-size: 13px;
  line-height: 19px;
`,nv=B.ul`
  display: grid;
  gap: 7px;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    color: rgba(255, 255, 255, 0.82);
    font-size: 13px;
    line-height: 19px;
  }

  li::before {
    margin-right: 8px;
    color: ${({theme:e})=>e.palette.lime[400]};
    content: '✓';
  }
`,rv=B.div`
  display: grid;
  gap: 8px;
`,iv=B(q)`
  && {
    border-color: ${({theme:e})=>e.palette.lime[500]};
    border-radius: 10px;
    background: ${({theme:e})=>e.palette.lime[400]};
    color: ${({theme:e})=>e.palette.grey[900]};
    font-weight: ${({theme:e})=>e.fontWeights.semibold};
  }

  &&:hover,
  &&:focus {
    border-color: ${({theme:e})=>e.palette.lime[600]};
    background: ${({theme:e})=>e.palette.lime[500]};
    color: ${({theme:e})=>e.palette.grey[900]};
  }
`,av=B.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: ${({theme:e})=>e.palette.lime[300]};
  font-size: 12px;
  font-weight: ${({theme:e})=>e.fontWeights.semibold};

  svg {
    width: 14px;
    height: 14px;
  }
`,ov=[`Email`,`Live chat`,`Help center`,`Social media`,`Voice / phone`,`Automated bots`],sv=[{id:`basics`,label:`Basics`,description:`Core tracking and faster replies.`},{id:`flexible`,label:`Flexible growth`,description:`More channels and growing teams.`},{id:`personalized`,label:`Personalized operations`,description:`Custom workflows and routing.`}],cv=[`1-3`,`4-9`,`10-50`,`50+`],lv=[`AI agents`,`SLAs & CSAT`,`Copilot writing tools`,`Skills-based routing`,`IVR phone tree`,`Quick Reports`],uv={id:`support`,name:`Support`,annual:19,monthly:25,blurb:`For small teams that need email ticketing, core workflows, and a simple place to manage support.`,reasons:[`A light support setup is enough when the channel mix is still simple.`,`Start with core ticketing before moving into Suite automation.`,`Add Suite when you need AI agents, messaging, or stronger operations tools.`]},dv=[`support`,`team`,`growth`,`professional`],fv={support:68,team:76,growth:82,professional:90};function pv(e,t,n){n(t.includes(e)?t.filter(t=>t!==e):[...t,e])}function mv(e,t,n,r,i){return n===`50+`||i>50||t===`personalized`||e.includes(`Voice / phone`)||r.includes(`Skills-based routing`)||r.includes(`IVR phone tree`)||r.includes(`Copilot writing tools`)?{plan:`professional`,score:90,reasons:[`Advanced routing, IVR, and Copilot support more complex service operations.`,`Professional gives growing teams deeper automation and reporting controls.`,`${i} agent${i===1?``:`s`} can scale across your selected channels.`]}:t===`flexible`||n===`10-50`||i>9||r.includes(`SLAs & CSAT`)||r.includes(`Quick Reports`)||e.length>=3?{plan:`growth`,score:82,reasons:[`Growth adds SLAs, CSAT, business hours, and a self-service portal.`,`A broader channel mix benefits from stronger tracking and collaboration.`,`${i} agent${i===1?``:`s`} fit a scaling support setup.`]}:e.length>0||r.includes(`AI agents`)||n===`4-9`||i>3?{plan:`team`,score:76,reasons:[`Team includes AI agents, a knowledge base, and omnichannel routing.`,`It covers essential support needs without adding advanced operations features.`,`${i} agent${i===1?``:`s`} can start with the core Suite plan.`]}:{plan:`support`,score:74,reasons:uv.reasons}}function hv(e,t){return t?e.annual:e.monthly}function gv(e){return e===`support`?uv:$[e]}function _v(e,t){return e===`support`?uv.reasons:e===`team`?[`Suite Team adds AI agents, knowledge base, and omnichannel routing.`,`It is a good first Suite plan when your support channels are expanding.`,`${t} agent${t===1?``:`s`} can start with core Suite automation.`]:e===`growth`?[`Suite Growth adds SLAs, CSAT, business hours, and self-service controls.`,`It fits teams adding process and visibility as support demand increases.`,`${t} agent${t===1?``:`s`} can collaborate with stronger tracking.`]:[`Suite Professional adds advanced automation, Copilot, IVR, and skills-based routing.`,`It fits complex teams that need deeper operations and productivity tools.`,`${t} agent${t===1?``:`s`} can scale across more sophisticated workflows.`]}function vv({onBack:e,onCheckout:t}){let[n,r]=(0,g.useState)(`multi`),[i,a]=(0,g.useState)(!0),[o,s]=(0,g.useState)(!1),[c,l]=(0,g.useState)([]),[u,d]=(0,g.useState)(`basics`),[f,p]=(0,g.useState)(`1-3`),[m,h]=(0,g.useState)(1),[_,v]=(0,g.useState)([]),y=(0,g.useMemo)(()=>mv(c,u,f,_,m),[m,c,_,u,f]),[b,x]=(0,g.useState)(y.plan),[S,C]=(0,g.useState)(null),[w,T]=(0,g.useState)(`forward`),E=(0,g.useRef)(null);(0,g.useEffect)(()=>{if(y.plan===b)return;let e=dv.indexOf(b),t=dv.indexOf(y.plan)>=e?`forward`:`back`;E.current&&window.clearTimeout(E.current),T(t),C(b),x(y.plan),E.current=window.setTimeout(()=>C(null),760)},[y.plan,b]),(0,g.useEffect)(()=>()=>{E.current&&window.clearTimeout(E.current)},[]);function ee(e,n){let r=gv(e),a=e===y.plan?y.reasons:_v(e,m),o=e===y.plan?y.score:fv[e];return(0,K.jsxs)(J_,{$motion:n,children:[(0,K.jsxs)(Y_,{children:[(0,K.jsx)(`h3`,{children:r.name.replace(`Suite `,``)}),(0,K.jsxs)(av,{children:[(0,K.jsx)(cp,{}),e===`support`?`Start here`:`AI ready`]})]}),(0,K.jsx)(tv,{children:r.blurb}),(0,K.jsxs)(X_,{children:[(0,K.jsxs)(Z_,{children:[`$`,hv(r,i)]}),(0,K.jsxs)(Q_,{children:[`/agent per month, `,i?`billed annually`:`billed monthly`]})]}),(0,K.jsxs)($_,{children:[(0,K.jsxs)(tv,{children:[`Match strength: `,o,`%`]}),(0,K.jsx)(ev,{$score:o})]}),(0,K.jsx)(nv,{children:a.map(e=>(0,K.jsx)(`li`,{children:e},e))}),(0,K.jsxs)(rv,{children:[(0,K.jsx)(iv,{isPrimary:!0,isStretched:!0,onClick:()=>e===`support`?l([`Email`]):t(e),children:e===`support`?`Add email support`:`Continue with ${r.name}`}),(0,K.jsx)(q,{isBasic:!0,isStretched:!0,onClick:()=>s(!1),children:`Compare all plans`})]})]},`${e}-${n}`)}return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Dp,{onBack:e}),(0,K.jsxs)(x_,{children:[(0,K.jsxs)(S_,{children:[(0,K.jsx)(`h1`,{children:`AI Plan Advisor`}),(0,K.jsx)(C_,{children:(0,K.jsxs)(w_,{onClick:()=>s(!0),"aria-expanded":o,children:[(0,K.jsx)(fp,{}),`Find the best plan for your team`]})})]}),(0,K.jsx)(Np,{channel:n,onChannelChange:r,isAnnual:i,onBillingChange:()=>a(e=>!e),showBilling:!1}),(0,K.jsx)(_m,{isAnnual:i,recommendedId:y.plan===`support`?void 0:y.plan,recommendedLabel:`Best fit from advisor`,recommendedTone:`blue`,onBuy:t}),o?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(T_,{onClick:()=>s(!1)}),(0,K.jsxs)(E_,{role:`dialog`,"aria-modal":`true`,"aria-label":`AI plan advisor`,children:[(0,K.jsxs)(D_,{children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`h2`,{children:`Find the right Suite plan`}),(0,K.jsx)(`p`,{children:`Answer three quick sections. Your recommended plan updates as you choose.`})]}),(0,K.jsx)(O_,{isBasic:!0,"aria-label":`Close plan advisor`,onClick:()=>s(!1),children:`×`})]}),(0,K.jsxs)(k_,{children:[(0,K.jsxs)(A_,{children:[(0,K.jsxs)(j_,{children:[(0,K.jsxs)(M_,{children:[(0,K.jsx)(N_,{children:`1`}),(0,K.jsxs)(P_,{children:[(0,K.jsx)(`h3`,{children:`How do customers reach your support team?`}),(0,K.jsx)(`p`,{children:`Select every channel you support today or plan to add soon.`})]})]}),(0,K.jsx)(F_,{children:ov.map(e=>(0,K.jsx)(I_,{isBasic:!0,isPressed:c.includes(e),onClick:()=>pv(e,c,l),children:e},e))})]}),(0,K.jsxs)(j_,{children:[(0,K.jsxs)(M_,{children:[(0,K.jsx)(N_,{children:`2`}),(0,K.jsxs)(P_,{children:[(0,K.jsx)(`h3`,{children:`What support setup are you planning for?`}),(0,K.jsx)(`p`,{children:`Match the level of process, scale, and customization you need.`})]})]}),(0,K.jsx)(L_,{children:sv.map(e=>(0,K.jsx)(R_,{isBasic:!0,isPressed:u===e.id,onClick:()=>d(e.id),children:(0,K.jsxs)(`span`,{children:[(0,K.jsx)(z_,{children:e.label}),(0,K.jsx)(B_,{children:e.description})]})},e.id))})]}),(0,K.jsxs)(j_,{children:[(0,K.jsxs)(M_,{children:[(0,K.jsx)(N_,{children:`3`}),(0,K.jsxs)(P_,{children:[(0,K.jsx)(`h3`,{children:`Team size and capabilities`}),(0,K.jsx)(`p`,{children:`Add the support seats and features that matter most.`})]})]}),(0,K.jsxs)(V_,{children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(Q,{hue:`grey`,children:`Support team`}),(0,K.jsx)(H_,{children:cv.map(e=>(0,K.jsxs)(U_,{isBasic:!0,isPressed:f===e,onClick:()=>p(e),children:[e,` people`]},e))})]}),(0,K.jsxs)(Z,{children:[(0,K.jsx)(Z.Label,{children:`Agents`}),(0,K.jsxs)(W_,{children:[(0,K.jsx)(q,{size:`small`,onClick:()=>h(e=>Math.max(1,e-1)),children:(0,K.jsx)(up,{})}),(0,K.jsx)(X,{readOnly:!0,value:String(m)}),(0,K.jsx)(q,{size:`small`,onClick:()=>h(e=>e+1),children:(0,K.jsx)(lp,{})})]})]})]}),(0,K.jsx)(F_,{children:lv.map(e=>(0,K.jsx)(I_,{isBasic:!0,isPressed:_.includes(e),onClick:()=>pv(e,_,v),children:e},e))})]})]}),(0,K.jsxs)(G_,{children:[(0,K.jsxs)(K_,{children:[(0,K.jsx)(`p`,{children:`We recommend`}),(0,K.jsx)(Q,{hue:`lime`,isEmphasis:!0,children:`Live recommendation`})]}),(0,K.jsxs)(q_,{children:[S?ee(S,w===`forward`?`exit-forward`:`exit-back`):null,ee(b,S?w===`forward`?`enter-forward`:`enter-back`:`idle`)]})]})]})]})]}):null]}),(0,K.jsx)(jf,{})]})}var yv=(0,g.forwardRef)((e,t)=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,focusable:`false`,viewBox:`0 0 20 20`,ref:t,...e,children:[(0,K.jsx)(`path`,{fill:`currentColor`,d:`M2.5 3.333c.46 0 .833.373.833.833v10c0 .46.374.834.834.834H17.5a.833.833 0 1 1 0 1.666H4.167a2.5 2.5 0 0 1-2.5-2.5v-10c0-.46.373-.833.833-.833`}),(0,K.jsx)(`path`,{fill:`currentColor`,d:`M15.833 5c.46 0 .834.373.834.833v3.333a.834.834 0 0 1-1.667 0V7.845l-2.744 2.744a2.01 2.01 0 0 1-2.845 0 .345.345 0 0 0-.488 0l-2.5 2.5a.834.834 0 0 1-1.179-1.179l2.5-2.5a2.01 2.01 0 0 1 2.845 0 .345.345 0 0 0 .488 0l2.744-2.744H12.5A.833.833 0 1 1 12.5 5z`})]})),bv=(0,g.forwardRef)((e,t)=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,focusable:`false`,viewBox:`0 0 20 20`,ref:t,...e,children:[(0,K.jsx)(`path`,{fill:`currentColor`,d:`M16.667 10a6.667 6.667 0 1 0-13.334 0 6.667 6.667 0 0 0 13.334 0m1.666 0a8.333 8.333 0 1 1-16.666 0 8.333 8.333 0 0 1 16.666 0`}),(0,K.jsx)(`path`,{fill:`currentColor`,d:`M9.167 5.833a.833.833 0 1 1 1.666 0v3.333h2.5a.833.833 0 0 1 0 1.667H10a.833.833 0 0 1-.833-.834z`})]})),xv=(0,g.forwardRef)((e,t)=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,focusable:`false`,viewBox:`0 0 20 20`,ref:t,...e,children:(0,K.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,d:`M14.667 3A2.333 2.333 0 0 1 17 5.333v9.334A2.333 2.333 0 0 1 14.667 17H5.333A2.333 2.333 0 0 1 3 14.667V5.333A2.333 2.333 0 0 1 5.333 3zM4.556 14.667c0 .43.348.777.777.777h3.89v-4.667H4.556zm6.221.777h3.89c.43 0 .777-.348.777-.777v-3.89h-4.667zM5.333 4.556a.78.78 0 0 0-.777.777v3.89h4.667V4.556zm5.444 4.667h4.667v-3.89a.78.78 0 0 0-.777-.777h-3.89z`})})),Sv=(0,g.forwardRef)((e,t)=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,focusable:`false`,viewBox:`0 0 20 20`,ref:t,...e,children:(0,K.jsx)(`path`,{fill:`currentColor`,d:`M10 3.69c1.347-1.07 2.893-1.39 4.307-1.074 1.607.358 2.97 1.518 3.619 3.136 1.336 3.333-.412 8.075-7.518 12.058a.83.83 0 0 1-.816 0C2.486 13.827.738 9.085 2.074 5.752c.65-1.618 2.012-2.778 3.619-3.136C7.107 2.3 8.653 2.62 10 3.689m3.945.553c-1.031-.23-2.257.039-3.352 1.15a.834.834 0 0 1-1.186 0c-1.095-1.111-2.32-1.38-3.352-1.15-1.053.234-1.982 1.005-2.434 2.13-.846 2.11-.076 5.99 6.379 9.748 6.455-3.757 7.225-7.637 6.378-9.748-.45-1.125-1.38-1.896-2.433-2.13`})})),Cv=(0,g.forwardRef)((e,t)=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,focusable:`false`,viewBox:`0 0 20 20`,ref:t,...e,children:(0,K.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,d:`M2.336 4.644c-.467-1.4.983-2.672 2.31-2.026l12.095 5.884c1.25.609 1.25 2.39 0 2.997L4.646 17.383c-1.327.646-2.777-.625-2.31-2.025L4.12 10zM5.6 9.167h1.9a.834.834 0 1 1 0 1.666H5.6l-1.683 5.051L16.01 10 3.917 4.117z`})})),wv=(0,g.forwardRef)((e,t)=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,focusable:`false`,viewBox:`0 0 20 20`,ref:t,...e,children:[(0,K.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,d:`M13.232 4.339a2.5 2.5 0 0 1 3.536 0l.56.56c.975.976.975 2.56 0 3.536l-8 8a2.5 2.5 0 0 1-1.459.713l-2.765.345a.834.834 0 0 1-.931-.93l.347-2.766a2.5 2.5 0 0 1 .712-1.457zm-6.822 9.18a.83.83 0 0 0-.237.485l-.213 1.702 1.703-.212a.83.83 0 0 0 .485-.237l5.882-5.882-1.738-1.738zm9.179-8.001a.833.833 0 0 0-1.178 0l-.941.94 1.738 1.738.941-.94a.834.834 0 0 0 0-1.179z`}),(0,K.jsx)(`path`,{fill:`currentColor`,d:`M5 2c.17 0 .312.128.331.296.087.77.32 1.32.688 1.694.365.372.902.61 1.677.678a.333.333 0 0 1 0 .664c-.763.066-1.312.303-1.686.678-.375.374-.612.923-.678 1.685a.334.334 0 0 1-.664.001c-.069-.775-.306-1.312-.678-1.677-.374-.368-.924-.6-1.694-.688a.334.334 0 0 1-.001-.662c.784-.09 1.322-.323 1.686-.688.365-.364.598-.902.688-1.686A.333.333 0 0 1 5 2`})]})),Tv=(0,g.forwardRef)((e,t)=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,focusable:`false`,viewBox:`0 0 20 20`,ref:t,...e,children:(0,K.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,d:`M9.818 1.666c.368 0 .693.242.798.595.6 1.998 1.377 3.423 2.448 4.494S15.56 8.602 17.557 9.2a.834.834 0 0 1 0 1.597c-1.998.6-3.424 1.376-4.494 2.447-1.071 1.07-1.848 2.496-2.448 4.494a.833.833 0 0 1-1.596 0c-.6-1.998-1.376-3.423-2.447-4.494-1.07-1.07-2.496-1.848-4.494-2.447a.833.833 0 0 1 0-1.597c1.998-.6 3.424-1.375 4.494-2.446C7.644 5.685 8.42 4.259 9.02 2.26a.835.835 0 0 1 .798-.595m0 3.22C9.274 6.073 8.603 7.08 7.751 7.932S5.891 9.456 4.705 10c1.187.544 2.194 1.216 3.046 2.067s1.523 1.859 2.067 3.045c.544-1.186 1.216-2.193 2.068-3.045S13.744 10.544 14.93 10c-1.187-.544-2.193-1.216-3.045-2.067s-1.523-1.86-2.068-3.046`})})),Ev=[{id:`zendesk-pricing`,label:`Zendesk Suite pricing`,url:`https://www.zendesk.com/pricing/`,updatedAt:`2026-09-09`},{id:`zendesk-suite-features`,label:`Zendesk Suite plan features`,url:`https://www.zendesk.com/service/pricing/`,updatedAt:`2026-09-09`},{id:`billing-client-plan-step`,label:`billing-client Suite plan step data`,url:`https://github.com/zendesk/billing-client/tree/main/client/src/ShoppingCart/QuizTrialCart/PlansStep/data`,updatedAt:`2026-09-09`},{id:`billing-client-compare-plans`,label:`billing-client compare plans translations`,url:`https://github.com/zendesk/billing-client/tree/main/config/locales/translations/compare_plans`,updatedAt:`2026-09-09`}],Dv={team:{id:`team`,name:$.team.name,annual:$.team.annual,monthly:$.team.monthly,summary:$.team.blurb,bestFor:[`automating service with AI`,`support across all channels`,`AI agents`,`Help Center`,`messaging`,`voice`],sourceIds:[`zendesk-pricing`,`zendesk-suite-features`,`billing-client-plan-step`]},growth:{id:`growth`,name:$.growth.name,annual:$.growth.annual,monthly:$.growth.monthly,summary:$.growth.blurb,bestFor:[`improving customer experience`,`customer feedback`,`SLAs`,`CSAT`,`light agents`,`business hours`],sourceIds:[`zendesk-pricing`,`zendesk-suite-features`,`billing-client-plan-step`]},professional:{id:`professional`,name:$.professional.name,annual:$.professional.annual,monthly:$.professional.monthly,summary:$.professional.blurb,bestFor:[`optimizing operations`,`AI and Copilot`,`data and reporting`,`skills-based routing`,`IVR`,`workspace customization`],sourceIds:[`zendesk-pricing`,`zendesk-suite-features`,`billing-client-plan-step`]},enterprise:{id:`enterprise`,name:$.enterprise.name,annual:$.enterprise.annual,monthly:$.enterprise.monthly,summary:$.enterprise.blurb,bestFor:[`safe service changes`,`sandbox testing`,`approval workflows`,`custom roles`,`audit logs`,`enterprise governance`],sourceIds:[`zendesk-pricing`,`zendesk-suite-features`,`billing-client-plan-step`]}},Ov=Object.values({"suite-team":{id:`suite-team`,label:`Suite Team`,family:`Suite`,tier:`team`,shortLabel:`AI and support across channels`,bestFor:`Teams that want to automate service with AI and support customers across email, messaging, live chat, voice, and Help Center.`,chooseWhen:`you want AI automation and customer support across all channels in one workspace`,highlights:[`AI agents and Help Center`,`Action Builder`,`Omnichannel routing`,`Messaging, live chat, and voice`]},"suite-growth":{id:`suite-growth`,label:`Suite Growth`,family:`Suite`,tier:`growth`,shortLabel:`Customer feedback and service goals`,bestFor:`Teams that want to improve customer experience with feedback, service goals, business schedules, and internal collaboration.`,chooseWhen:`you want everything in Suite Team plus CSAT, SLAs, business hours, light agents, and a customer portal`,highlights:[`Everything in Suite Team`,`CSAT and SLAs`,`Light agents`,`Customer portal and business hours`]},"suite-professional":{id:`suite-professional`,label:`Suite Professional`,family:`Suite`,tier:`professional`,shortLabel:`AI, data, and customization`,bestFor:`Teams ready to optimize operations with AI, data, intelligent routing, reporting, and workspace customization.`,chooseWhen:`you want everything in Suite Growth plus skills-based routing, IVR, Copilot, advanced reporting, or custom workspaces`,highlights:[`Everything in Suite Growth`,`Skills-based routing and IVR`,`Copilot writing tools`,`Quick Reports, App Builder, and side conversations`]},"suite-enterprise":{id:`suite-enterprise`,label:`Suite Enterprise`,family:`Suite`,tier:`enterprise`,shortLabel:`Safe service change management`,bestFor:`Organizations that need to adapt service safely with controlled testing, approvals, auditing, and custom administration.`,chooseWhen:`you want everything in Suite Professional plus sandbox testing, approval workflows, audit logs, custom roles, or enterprise governance`,highlights:[`Everything in Suite Professional`,`Sandbox testing`,`Approval workflows and audit logs`,`Custom roles and enterprise controls`]},"support-team":{id:`support-team`,label:`Support Team`,family:`Support`,tier:`team`,shortLabel:`Streamlined email support`,bestFor:`Teams that want to get up and running quickly with streamlined email support and essential ticket workflows.`,chooseWhen:`email is your main support channel and you want a straightforward way to manage tickets`,highlights:[`Email support and ticketing`,`Essential ticket routing`,`Prebuilt dashboards`,`Customer conversation history`]},"support-professional":{id:`support-professional`,label:`Support Professional`,family:`Support`,tier:`professional`,shortLabel:`Automated email workflows`,bestFor:`Email-first teams that want easy-to-set-up workflows to automate support and improve team efficiency.`,chooseWhen:`you want everything in Support Team plus SLAs, customer feedback, business hours, and workflow automation`,highlights:[`Everything in Support Team`,`SLAs and business hours`,`Customer satisfaction surveys`,`Workflow automation and eligible AI options`]},"support-enterprise":{id:`support-enterprise`,label:`Support Enterprise`,family:`Support`,tier:`enterprise`,shortLabel:`Scalable, customized email support`,bestFor:`Email-first organizations that want to customize workflows and collaborate across complex support operations.`,chooseWhen:`you want everything in Support Professional plus skills-based routing, custom roles, contextual workspaces, or sandbox controls`,highlights:[`Everything in Support Professional`,`Skills-based routing`,`Custom roles and contextual workspaces`,`Sandbox controls`]}}),kv=[{id:`channels`,label:`Channels`},{id:`ai`,label:`AI`},{id:`goals`,label:`Goals`},{id:`routing`,label:`Routing`}],Av={"suite-team":{audience:`AI and every customer channel`,advantages:[`AI agents`,`Help Center`,`Voice and chat`],capabilities:{channels:`Email, chat, voice, Help Center`,ai:`AI agents`,goals:`Not included`,routing:`Omnichannel`},includes:[`Email`,`Messaging`,`Live chat`,`Voice`,`Help Center`,`AI agents`,`Omnichannel routing`]},"suite-growth":{audience:`Feedback and service goals`,advantages:[`CSAT`,`SLAs`,`Light agents`],capabilities:{channels:`All Suite channels`,ai:`AI agents`,goals:`CSAT and SLAs`,routing:`Omnichannel`},includes:[`Email`,`Messaging`,`Live chat`,`Voice`,`Help Center`,`AI agents`,`CSAT`,`SLAs`,`Light agents`,`Business hours`]},"suite-professional":{audience:`AI, routing, and operations`,advantages:[`Copilot`,`Skills routing`,`IVR`],capabilities:{channels:`All Suite channels`,ai:`Copilot and AI agents`,goals:`CSAT and SLAs`,routing:`Skills and IVR`},includes:[`Email`,`Messaging`,`Live chat`,`Voice`,`Help Center`,`AI agents`,`Copilot`,`CSAT`,`SLAs`,`Skills-based routing`,`IVR`,`Quick Reports`]},"suite-enterprise":{audience:`Safe change management`,advantages:[`Sandbox`,`Approvals`,`Audit logs`],capabilities:{channels:`All Suite channels`,ai:`Copilot and AI agents`,goals:`CSAT and SLAs`,routing:`Skills and IVR`},includes:[`Email`,`Messaging`,`Live chat`,`Voice`,`Help Center`,`AI agents`,`Copilot`,`CSAT`,`SLAs`,`Skills-based routing`,`IVR`,`Sandbox`,`Audit logs`]},"support-team":{audience:`Straightforward email ticketing`,advantages:[`Email tickets`,`Dashboards`,`History`],capabilities:{channels:`Email only`,ai:`Not included`,goals:`Not included`,routing:`Basic email routing`},includes:[`Email`,`Ticketing`,`Dashboards`]},"support-professional":{audience:`Automated email workflows`,advantages:[`SLAs`,`CSAT`,`Automation`],capabilities:{channels:`Email only`,ai:`Eligible AI options`,goals:`SLAs and CSAT`,routing:`Email workflows`},includes:[`Email`,`Ticketing`,`SLAs`,`CSAT`,`Business hours`,`Workflow automation`]},"support-enterprise":{audience:`Custom email operations`,advantages:[`Skills routing`,`Custom roles`,`Sandbox`],capabilities:{channels:`Email only`,ai:`Eligible AI options`,goals:`SLAs and CSAT`,routing:`Skills-based`},includes:[`Email`,`Ticketing`,`SLAs`,`CSAT`,`Skills-based routing`,`Custom roles`,`Sandbox`]}},jv=[{id:`ai-agents`,name:`AI agents`,aliases:[`ai agent`,`ai agents`,`chatbot`,`chat bot`,`chatbots`,`self service`,`self-service`,`automate answers`],summary:`Suite Team includes AI agents that automate service using your approved knowledge.`,definition:`AI agents use your approved knowledge to answer common customer questions automatically across supported channels.`,customerValue:`Customers get help at any time, while your team has more time for requests that need a person.`,firstIncludedPlan:`team`,sourceIds:[`zendesk-suite-features`,`billing-client-plan-step`]},{id:`help-center`,name:`Help Center`,aliases:[`help center`,`knowledge base`,`knowledgebase`,`articles`,`faq`,`self help`],summary:`Suite Team includes Help Center for customer self-service and trusted AI answers.`,definition:`Help Center is a customer-facing space where people can search articles and find answers on their own.`,customerValue:`Customers can solve common questions sooner, and AI agents can answer from the same trusted content.`,firstIncludedPlan:`team`,sourceIds:[`zendesk-suite-features`,`billing-client-plan-step`]},{id:`action-builder`,name:`Action Builder`,aliases:[`action builder`,`actions`,`custom action`],summary:`Suite Team includes Action Builder for guided, automated support actions.`,definition:`Action Builder lets your team create guided actions that complete common support tasks.`,customerValue:`It reduces repetitive work and helps customers complete routine tasks faster.`,firstIncludedPlan:`team`,sourceIds:[`billing-client-plan-step`]},{id:`messaging-live-chat`,name:`Messaging with live chat`,aliases:[`messaging`,`live chat`,`chat`,`web widget`,`in-product`,`in product`,`mobile sdk`,`whatsapp`,`sms`,`social messaging`,`facebook`,`instagram`],summary:`Suite Team includes messaging and live chat as part of support across channels.`,definition:`Messaging and live chat let customers contact your team in real time through web, mobile, or embedded experiences.`,customerValue:`Customers can get help in the moment, with the conversation kept in the same support workspace.`,firstIncludedPlan:`team`,sourceIds:[`billing-client-plan-step`,`billing-client-compare-plans`]},{id:`telephony`,name:`Telephony`,aliases:[`telephony`,`voice`,`phone`,`calls`,`call center`,`callcentre`,`inbound calls`,`phone support`],summary:`Suite Team includes voice support alongside your other customer channels.`,definition:`Voice support brings customer calls into the same workspace as tickets and messages.`,customerValue:`Customers can call when that works best for them, and agents keep the full conversation context together.`,firstIncludedPlan:`team`,sourceIds:[`billing-client-plan-step`,`billing-client-compare-plans`]},{id:`sla`,name:`SLA`,aliases:[`sla`,`slas`,`service level`,`service level agreement`,`service level agreements (sla)`],summary:`Suite Growth includes SLAs for setting and tracking service goals.`,definition:`SLA means service level agreement. It sets a target response or resolution time for a customer request.`,customerValue:`Your team can prioritize work, see which tickets need attention, and keep service commitments visible.`,firstIncludedPlan:`growth`,sourceIds:[`zendesk-suite-features`]},{id:`light-agents`,name:`Light agents`,aliases:[`light agent`,`light agents`,`collaborators`],summary:`Suite Growth includes light agents for internal collaboration.`,definition:`Light agents can view tickets and add private comments without working as full support agents.`,customerValue:`Specialists across your organization can contribute their expertise without needing a full agent license.`,firstIncludedPlan:`growth`,sourceIds:[`billing-client-plan-step`]},{id:`self-service-portal`,name:`Self-service customer portal`,aliases:[`customer portal`,`self-service portal`,`portal`],summary:`Suite Growth includes a customer portal for managing support requests.`,definition:`The customer portal gives customers one place to view requests, check progress, and find help.`,customerValue:`Customers can follow their requests without contacting your team again for an update.`,firstIncludedPlan:`growth`,sourceIds:[`billing-client-plan-step`]},{id:`business-hours`,name:`Business hours`,aliases:[`business hours`,`operating hours`,`schedule`],summary:`Suite Growth includes business hours for accurate schedules and service goals.`,definition:`Business hours define when your support team is available and when service goals apply.`,customerValue:`Customers get clearer expectations, and SLA timing reflects when your team is actually working.`,firstIncludedPlan:`growth`,sourceIds:[`billing-client-plan-step`,`billing-client-compare-plans`]},{id:`csat`,name:`CSAT`,aliases:[`csat`,`customer satisfaction`,`satisfaction rating`,`satisfaction ratings`,`customer satisfaction ratings (csat)`],summary:`Suite Growth includes CSAT surveys for understanding customer feedback.`,definition:`CSAT means customer satisfaction. It is a score customers give after a support interaction.`,customerValue:`You can see where service is working well and where coaching or process changes could improve the customer experience.`,firstIncludedPlan:`growth`,sourceIds:[`zendesk-suite-features`]},{id:`copilot`,name:`Copilot`,aliases:[`copilot`,`copilot writing tool`,`copilot writing tools`,`agent copilot`,`writing tools`,`agent productivity`,`advanced ai`],summary:`Suite Professional includes Copilot writing tools and supports an upgrade to the full Copilot add-on.`,definition:`Copilot assists agents as they work by drafting replies, summarizing context, adjusting tone, and translating content.`,customerValue:`Agents can respond with more context and spend less time on repetitive writing.`,firstIncludedPlan:`professional`,sourceIds:[`zendesk-suite-features`,`billing-client-plan-step`]},{id:`app-builder`,name:`App Builder`,aliases:[`app builder`,`apps`,`custom app`],summary:`Suite Professional includes App Builder for adapting Zendesk to your workflows.`,definition:`App Builder helps your team create app experiences that support its processes.`,customerValue:`Agents can work in a setup shaped around the information and actions they use most.`,firstIncludedPlan:`professional`,sourceIds:[`billing-client-plan-step`]},{id:`advanced-routing`,name:`Advanced routing and IVR`,aliases:[`routing`,`skills based routing`,`skills-based routing`,`ivr`,`phone tree`,`ivr phone tree`],summary:`Suite Professional includes skills-based routing and IVR for directing customers to the right help.`,definition:`Skills-based routing sends requests to agents with the right expertise. IVR uses a phone menu to direct callers before they reach an agent.`,customerValue:`Tickets and calls reach the right person sooner, reducing transfers and wait times.`,firstIncludedPlan:`professional`,sourceIds:[`zendesk-suite-features`,`billing-client-plan-step`,`billing-client-compare-plans`]},{id:`reporting-automation`,name:`Reporting and automation`,aliases:[`reporting`,`quick report`,`quick reports`,`automation`,`workflow`,`analytics`,`dashboards`,`dashboard`,`metrics`,`insights`],summary:`Suite Professional includes advanced reporting and automation for improving support operations.`,definition:`Reporting shows how support is performing. Automation completes actions when tickets or customer conditions match rules you set.`,customerValue:`Your team can find bottlenecks, reduce manual triage, and make decisions using clearer operational data.`,firstIncludedPlan:`professional`,sourceIds:[`zendesk-suite-features`,`billing-client-plan-step`]},{id:`side-conversations`,name:`Ticket side conversations`,aliases:[`side conversation`,`side conversations`,`private conversation`,`ticket side conversation`],summary:`Suite Professional includes side conversations for collaborating without leaving the ticket.`,definition:`Side conversations let agents bring teammates or external partners into a discussion while keeping it linked to the ticket.`,customerValue:`Agents can get the right help while keeping the customer conversation and internal collaboration organized.`,firstIncludedPlan:`professional`,sourceIds:[`billing-client-plan-step`]},{id:`enterprise-controls`,name:`Enterprise controls`,aliases:[`approval workflow`,`approval workflows`,`sandbox`,`sandbox environment`,`audit log`,`audit logs`,`custom agent roles`,`customizable reporting`,`security`,`governance`,`compliance`,`hipaa`,`gdpr`,`sso`,`custom roles`],summary:`Suite Enterprise adds change management and governance tools for complex service operations.`,definition:`Enterprise controls include sandbox testing, approval workflows, custom roles, audit logs, and configurable reporting.`,customerValue:`Your organization can test changes safely, control access, review activity, and roll out updates with confidence.`,firstIncludedPlan:`enterprise`,sourceIds:[`billing-client-plan-step`,`billing-client-compare-plans`]},{id:`email-ticketing`,name:`Email ticketing`,aliases:[`email`,`emails`,`ticketing`,`ticket management`,`inbox`],summary:`Every Suite and Support plan includes email ticketing so customer emails become trackable requests.`,definition:`Email ticketing turns customer emails into tickets your team can assign, prioritize, and resolve in one workspace.`,customerValue:`Nothing is lost in a shared inbox, and every email request has an owner and a history.`,firstIncludedPlan:`team`,sourceIds:[`zendesk-suite-features`,`billing-client-plan-step`]},{id:`omnichannel-routing`,name:`Omnichannel routing`,aliases:[`omnichannel`,`omni channel`,`omnichannel routing`,`all channels`,`across channels`,`unify channels`,`unified support`],summary:`Suite Team includes omnichannel routing so email, messaging, chat, and voice land in one workspace.`,definition:`Omnichannel routing sends customer conversations from every channel into one queue and one agent workspace.`,customerValue:`Agents see the full customer conversation, and customers do not have to repeat themselves when they switch channels.`,firstIncludedPlan:`team`,sourceIds:[`zendesk-suite-features`,`billing-client-plan-step`]}],Mv=[{id:`suite-vs-support`,aliases:[`suite vs support`,`support vs suite`,`support or suite`,`suite or support`,`email only`,`only email`,`just email`,`email-first`,`email first`],title:`Suite versus Support`,answer:`Suite plans bring email, messaging, live chat, voice, and Help Center together in one workspace. Support plans focus on email ticketing. Choose Suite when customers reach you on more than email. Choose Support when email is the main channel and you want a simpler email workspace.`,reason:`Your question is about whether you need every channel or an email-first setup.`,suggestedPlanId:`team`},{id:`small-team`,aliases:[`startup`,`small team`,`small business`,`few agents`,`just starting`,`new team`,`2 agents`,`3 agents`,`5 agents`,`8 person`,`small company`,`person startup`],title:`Small teams and startups`,answer:`Suite Team is the usual starting point for a small team. It includes AI agents, Help Center, messaging, live chat, and voice, so you can support customers without buying a higher tier first.`,reason:`A smaller team usually needs one workspace with AI and core channels before adding SLAs or advanced operations tools.`,suggestedPlanId:`team`},{id:`call-center`,aliases:[`call center`,`callcentre`,`contact center`,`phone team`,`inbound calls`,`phone heavy`,`voice heavy`],title:`Phone and call-center teams`,answer:`Voice is included from Suite Team. If callers need menus, skills-based routing, or IVR, Suite Professional is the better fit. Support plans do not include voice.`,reason:`Phone support is included in Suite, and advanced call routing starts on Suite Professional.`,suggestedPlanId:`professional`},{id:`high-volume`,aliases:[`high volume`,`lots of tickets`,`thousands of tickets`,`busy queue`,`scale support`,`growing fast`,`ticket volume`,`tickets a day`,`too many tickets`,`drowning`,`overwhelmed`],title:`High ticket volume`,answer:`For a busy queue, Suite Professional is usually the better fit because it adds skills-based routing, automation, reporting, and Copilot writing tools. Those tools help a larger volume of requests reach the right person faster.`,reason:`Higher volume is easier to manage with routing, automation, and reporting.`,suggestedPlanId:`professional`},{id:`trial`,aliases:[`trial`,`free trial`,`try before`,`demo account`,`test zendesk`],title:`Trial`,answer:`You can try Zendesk before you buy. The trial commonly includes Suite Professional, so you can test AI, routing, and reporting, then choose a lower plan if you do not need those extras.`,reason:`The trial is a way to confirm the features you will actually use before you purchase.`,suggestedPlanId:`professional`},{id:`annual-vs-monthly`,aliases:[`annual vs monthly`,`monthly vs annual`,`billed annually`,`billed monthly`,`pay monthly`,`pay annually`,`yearly billing`,`save money`],title:`Annual and monthly billing`,answer:`Annual billing is the lower per-agent price. Monthly billing costs more per agent and can be useful when you want flexibility. I can show either price as you compare plans.`,reason:`Annual billing lowers the per-agent price if you are ready to commit for the year.`},{id:`agent-seats`,aliases:[`how many agents`,`agent seats`,`licenses`,`per agent`,`number of agents`,`seat count`,`how many seats`],title:`Agent seats`,answer:`Suite and Support prices are per agent per month. Add a seat for each person who will own and reply to tickets. Light agents, starting on Suite Growth, can comment internally without a full agent seat.`,reason:`Pricing is based on the number of people who will work tickets, not on the number of customers.`,suggestedPlanId:`growth`},{id:`upgrade-later`,aliases:[`upgrade later`,`change plans`,`switch plans`,`downgrade`,`move plans`,`start small`,`grow later`,`what happens if i want to upgrade`],title:`Changing plans later`,answer:`You can start on a lower Suite plan and move up when you need SLAs, routing, Copilot, or enterprise controls. You do not have to buy the highest plan on day one.`,reason:`Plans are designed so you can add capability as the team’s needs grow.`,suggestedPlanId:`team`},{id:`no-free-plan`,aliases:[`free plan`,`free tier`,`is it free`,`free version`,`no cost`],title:`Free plan`,answer:`There is no long-term free Suite plan. You can use a trial to evaluate the product, then choose Suite Team as the lowest paid starting point, or talk with sales if you need a tailored package.`,reason:`The paid plans start at Suite Team; a trial is available if you want to evaluate first.`,suggestedPlanId:`team`},{id:`discounts`,aliases:[`discount`,`discounts`,`nonprofit`,`non-profit`,`non profit`,`charity`,`promo`,`promotion`,`coupon`,`volume discount`,`expensive`,`too expensive`,`why so expensive`],title:`Discounts and special pricing`,answer:`Listed prices are the standard per-agent rates. Sales can confirm nonprofit, volume, or regional pricing. I can still recommend the right plan and show the public price while you decide.`,reason:`Contract terms and special pricing need a sales conversation, while the plan fit can be decided from your requirements.`},{id:`integrations`,aliases:[`salesforce`,`slack`,`jira`,`shopify`,`hubspot`,`integration`,`integrations`,`apps marketplace`,`connect to`],title:`Integrations`,answer:`Zendesk connects to common tools through apps and integrations. Suite Professional adds App Builder when you need the workspace shaped around your process. Sales can confirm a specific integration if you have one in mind.`,reason:`Most teams connect Zendesk to the tools they already use, and App Builder is available from Suite Professional.`,suggestedPlanId:`professional`},{id:`after-hours`,aliases:[`24/7`,`24 7`,`after hours`,`after-hours`,`around the clock`,`nights and weekends`,`always on`],title:`After-hours support`,answer:`AI agents and Help Center, included from Suite Team, can answer common questions when your team is offline. Suite Growth adds business hours so SLAs follow your working schedule.`,reason:`Self-service and AI cover customers outside working hours, while business hours keep service goals accurate.`,suggestedPlanId:`growth`},{id:`implementation`,aliases:[`implementation`,`onboarding`,`set up`,`setup time`,`how long to launch`,`migrate`,`migration`],title:`Setup and onboarding`,answer:`Most teams start by connecting email, adding Help Center articles, and inviting agents. Suite Team is enough for that launch. A more complex rollout with routing, IVR, or sandbox testing is easier on Suite Professional or Suite Enterprise, and sales can help plan it.`,reason:`A simple launch can start on Suite Team; more controlled rollouts benefit from higher-plan tools.`,suggestedPlanId:`team`},{id:`multilingual`,aliases:[`multilingual`,`multi language`,`multiple languages`,`translation`,`translate`,`other languages`,`spanish`,`french`,`german`],title:`Languages`,answer:`Help Center and Copilot writing tools can support teams that work in more than one language. Copilot writing tools start on Suite Professional. Sales can confirm language coverage for your regions.`,reason:`Language support is a mix of Help Center content and agent writing tools.`,suggestedPlanId:`professional`},{id:`compliance`,aliases:[`hipaa`,`gdpr`,`compliant`,`compliance`,`iso`,`soc 2`],title:`Compliance`,answer:`Security and compliance details depend on your contract and region. Suite Enterprise adds sandbox, approval, audit, and role controls for safer change management. Sales can confirm HIPAA, GDPR, or other requirements for your account.`,reason:`Compliance needs a sales conversation, while Enterprise is the plan with the strongest change-control tools.`,suggestedPlanId:`enterprise`},{id:`get-started`,aliases:[`help me get started`,`get started`,`how do i ask`,`how to ask`,`getting started`,`where do i start`,`how should i ask`],title:`Getting started`,answer:`Ask about a plan, a price, or a feature. Try “What does Suite Team include?”, “How much is Suite Professional per agent per month?”, or “Which plan has Copilot?” Share your team size or the channels you use, and I will answer from the live plan catalog.`},{id:`capabilities`,aliases:[`what can you do`,`what do you do`,`how can you help`,`what can i ask`,`your capabilities`],title:`What Copilot can do`,answer:`I can answer PLG questions, explain pricing plans and features, start from this plans page, and connect you with sales or support. Hover a plan, price, or feature after choosing What is this, and I will explain it here. Ask about a trial, a price per agent per month, or a feature such as Help Center or Copilot.`},{id:`plg`,aliases:[`plg`,`product led growth`,`product-led growth`,`self serve`,`self-serve`,`trial conversion`,`convert trial`,`how does the trial work`,`trial to paid`,`ask about plg`],title:`Product-led growth`,answer:`This Copilot is for PLG questions during trial. It can explain why a plan fits, what is included in the trial, how pricing works per agent per month, and what to do next if you want to buy or talk to a person. Ask about your trial, a feature on this page, or the plan that matches how your team works.`},{id:`explain-this-page`,aliases:[`explain this page`,`what is this page`,`where am i`,`plans page`,`this page`,`quick start`,`help me get started`],title:`This plans page`,answer:`You are on the Zendesk Suite plans page. Suite Team, Suite Growth, and Suite Professional are shown with the price per agent per month. Use Help me pick a plan to get a recommendation, ask about a feature or price, or choose What is this to hover any plan or feature and hear it explained here. Talk to sales or support if you need a person.`},{id:`sales-support`,aliases:[`talk to sales or support`,`sales or support`,`contact support`,`talk to support`,`support escalation`,`escalate`,`reach sales`,`reach support`,`talk to a person`],title:`Sales and support`,answer:`I can keep answering plan and feature questions here, or hand you to a person. Choose Contact sales for pricing, contracts, or a tailored quote. Choose Contact support if your trial, billing, or account needs help from Zendesk support. Share what you need, and I will prepare the next step.`},{id:`what-is-this`,aliases:[`what is this`,`what is this?`,`explain on hover`,`inspect`,`pointer`,`hover to explain`],title:`What is this`,answer:`The pointer is on. Hover a plan name, price, or feature on this page, and I will explain it here. Click the same item if you want the answer right away. Turn the pointer off from the Copilot header when you are done.`}],Nv={team:1,growth:2,professional:3,enterprise:4};function Pv(e){return e===`enterprise`?`professional`:e}function Fv(e,t){let n=Dv[e];return t===`annual`?n.annual:n.monthly}function Iv(e){return e.map(e=>Ev.find(t=>t.id===e)?.label).filter(e=>!!e)}var Lv={companySize:`small`,trialPlanId:`professional`,selectedChannels:[`Messaging`,`Email`],billingCadence:`annual`},Rv={team:[`suite team`,`team plan`,`starter plan`],growth:[`suite growth`,`growth plan`,`growth`],professional:[`suite professional`,`professional plan`,`professional`,`pro plan`],enterprise:[`suite enterprise`,`enterprise plan`,`enterprise`]},zv={team:`It automates service with AI and supports customers across email, messaging, live chat, voice, and Help Center.`,growth:`It builds on Suite Team with customer feedback and service tools, including CSAT and SLAs.`,professional:`It optimizes operations with AI, data, routing, reporting, and workspace customizations.`,enterprise:`It helps complex teams adapt service safely with sandbox, approval, audit, and role controls.`},Bv=new Set(`the.a.an.and.or.to.of.in.on.is.it.my.we.our.you.me.i.for.with.that.this.from.your.be.are.was.at.as.by.if.so.do.can.please.tell.show.give.also.just.any.all.more.have.has.get.want.wanted.about.into.over.than.then`.split(`.`));function Vv(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function Hv(e,t){return RegExp(`\\b${Vv(t)}\\b`).test(e)}function Uv(e,t){return t.length<=4?Hv(e,t):e.includes(t)}function Wv(e){return e.toLowerCase().replace(/\bsuits\b/g,`suite`).replace(/\bsuit\b/g,`suite`).replace(/[?,.!'"’]/g,` `).replace(/\s+/g,` `).trim()}function Gv(e){return Wv(e).split(` `).filter(e=>e.length>1&&!Bv.has(e))}function Kv(e,t){if(Math.abs(e.length-t.length)>2)return 99;let n=e.length+1,r=t.length+1,i=Array.from({length:n},(e,t)=>{let n=Array(r);return n[0]=t,n});for(let e=0;e<r;e+=1)i[0][e]=e;for(let a=1;a<n;a+=1)for(let n=1;n<r;n+=1){let r=e[a-1]===t[n-1]?0:1;i[a][n]=Math.min(i[a-1][n]+1,i[a][n-1]+1,i[a-1][n-1]+r)}return i[e.length][t.length]}function qv(e,t,n){if(Uv(e,n))return n.length>=4?8:6;let r=n.split(` `).filter(Boolean);if(!r.length)return 0;let i=r.filter(e=>t.includes(e));return i.length===r.length&&r.length>1?6:i.length===r.length&&n.length>=4||r.filter(e=>t.some(t=>t.length<5||e.length<5?!1:t.startsWith(e)||e.startsWith(t)?!0:Kv(t,e)<=1)).length===r.length&&r.length>1?5:0}function Jv(e,t,n){return n.map(n=>({entry:n,score:Math.max(0,...n.aliases.map(n=>qv(e,t,n)))})).filter(e=>e.score>=4).sort((e,t)=>t.score-e.score)}function Yv(e,t,n){return{id:`${e}-${Math.random().toString(36).slice(2,9)}`,role:e,text:t,digest:n}}function Xv(e){return[...new Set(e.filter(Boolean))].slice(0,6)}function Zv(e,t,n,r,i,a=[]){let o=t.features.slice(0,3).map(e=>e.name),s=t.topics.slice(0,2).map(e=>e.title),c=t.normalized.match(/\b(email|messaging|live chat|voice|help center|whatsapp|phone)\b/gi)??[];return{headline:e,facts:a.filter(e=>e.value),chips:Xv([...o,...s,...c]),price:`$${r} / agent / mo, ${dy(i.billingCadence)}`}}function Qv(e={}){return{...Lv,...e}}function $v(e){let t=Wv(e);return t.split(` `).filter(Boolean).length<=8&&/^(and |what about|how about|why|the |that |this |also |price|cost|cheaper|more|yes|no|ok|and the)\b/.test(t)}function ey(e,t){let n=t.filter(Boolean).at(-1);return!n||!$v(e)?e:`${n} ${e}`}function ty(e){return Jv(Wv(e),Gv(e),jv).map(e=>e.entry)}function ny(e){return Jv(Wv(e),Gv(e),Mv).map(e=>e.entry)}function ry(e){let t=Wv(e);return Object.values(Dv).filter(e=>Rv[e.id].some(e=>t.includes(e))).map(e=>e.id)}function iy(e){let t=Wv(e),n=new Set;Ov.forEach(e=>{t.includes(e.label.toLowerCase())&&n.add(e.id)});let r=t.includes(`support`)&&!t.includes(`suite`)?`Support`:`Suite`;return[t.match(/\bteam\b/)?`team`:null,t.match(/\bgrowth\b/)?`growth`:null,t.match(/\bprofessional\b|\bpro\b/)?`professional`:null,t.match(/\benterprise\b/)?`enterprise`:null].filter(e=>!!e).forEach(e=>{if([...n].some(t=>Ov.find(e=>e.id===t)?.tier===e))return;let t=Ov.filter(t=>t.tier===e),i=t.find(e=>e.family===r)??t.find(e=>e.family===`Suite`)??t[0];i&&n.add(i.id)}),/\b(cheap|cheapest|lowest|starter|least expensive)\b/.test(t)&&n.add(`suite-team`),/\bcopilot\b/.test(t)&&(n.size===1||/\b(compare|versus| vs |cheap|cheapest|lowest)\b/.test(t))&&n.add(`suite-professional`),[...n]}function ay(e,t){return e.reduce((e,t)=>Nv[t]>Nv[e]?t:e,t)}function oy(e,t=[]){let n=ey(e,t);return{query:n,normalized:Wv(n),features:ty(n),topics:ny(n),mentionedPlans:ry(n),comparisonPlans:iy(n)}}function sy(e,t=[]){let n=oy(e,t),r=Wv(e),{features:i,topics:a,comparisonPlans:o}=n,s=/\b(sales|salesperson|talk to (a )?(human|person)|procurement|contact sales|talk to sales|quote|legal review)\b/.test(r),c=a.some(e=>e.id===`sales-support`||e.id===`what-is-this`||e.id===`explain-this-page`||e.id===`plg`),l=/\b(compare|versus| vs |difference between|different between|difference in|differ)\b/.test(r),u=/\b(price|pricing|cost|costs|how much|billing|per month|per agent|expensive)\b/.test(r),d=r.includes(`plan`)&&(r.includes(`good`)||r.includes(`best`)||r.includes(`recommend`)||r.includes(`right`)||r.includes(`for me`))||/\b(recommend|right plan|best plan|which plan should|for my (team|company|startup|business)|we are a|we're a|i am a|i'm a|small business|startup)\b/.test(r),f=/\b(what does|what is|what are|mean|meaning|explain|define|how does|how do)\b/.test(r),p=/\b(which plan|what plan has|what plan includes|includes|included|available in|do you have|does zendesk have|where (can|do) i)\b/.test(r);return s&&!c?`sales_handoff`:l||o.length>=2&&l?`plan_comparison`:u?`pricing`:d&&!f?`plan_recommendation`:f&&i.length>0&&!p?`feature_explanation`:i.length>0||p||a.length>0?`feature_lookup`:d?`plan_recommendation`:f?`feature_explanation`:`feature_lookup`}function cy(e,t,n=[]){let{normalized:r,features:i,topics:a,mentionedPlans:o}=oy(e,n),s=a.find(e=>e.suggestedPlanId)?.suggestedPlanId,c=ay([...o,...i.map(e=>e.firstIncludedPlan),...s?[s]:[]],t.companySize===`small`?`team`:t.trialPlanId);return Hv(r,`enterprise`)||Hv(r,`security`)||Hv(r,`governance`)||Hv(r,`sandbox`)||Hv(r,`audit`)||Hv(r,`hipaa`)||Hv(r,`gdpr`)||r.includes(`approval`)?`enterprise`:Hv(r,`copilot`)||r.includes(`advanced ai`)||Hv(r,`automation`)||Hv(r,`reporting`)||Hv(r,`routing`)||Hv(r,`ivr`)||r.includes(`app builder`)||r.includes(`side conversation`)?`professional`:Hv(r,`sla`)||Hv(r,`csat`)||r.includes(`business hours`)||Hv(r,`portal`)||r.includes(`light agent`)?`growth`:c}function ly(e,t,n,r=[]){let i=Dv[e],a=t.map(e=>e.summary),o=r.map(e=>e.reason).filter(e=>!!e),s=n.companySize===`small`?`It is the first plan that brings your current channels and required features together.`:`It aligns with the capabilities available in your ${Dv[n.trialPlanId].name} trial.`,c=zv[i.id];return[s,...o,...a,c].filter(Boolean).slice(0,3)}function uy(e){return e.length?e.length===1?e[0].name:`${e.slice(0,-1).map(e=>e.name).join(`, `)} and ${e[e.length-1].name}`:`the requirement you described`}function dy(e){return e===`annual`?`billed annually`:`billed monthly`}function fy(e,t){let n=Dv[e],r=Ov.find(t=>t.tier===e&&t.family===`Suite`),i=Fv(e,t.billingCadence);return`${n.name} is $${i} per agent per month, ${dy(t.billingCadence)}. ${r?.bestFor??zv[e]} ${r?`It is a good fit when ${r.chooseWhen}.`:``}`.trim()}function py(e,t,n,r){let i=Dv[e],a=uy(t);return t.length?`${a} is available from ${i.name}. ${t[0].customerValue} ${i.name} is $${n} per agent per month, ${dy(r.billingCadence)}.`:``}function my(e){return e.length?`Here’s ${uy(e)} in plain language.`:``}function hy(e){let t=e[0];if(t)return{title:t.name,meaning:t.definition,customerValue:t.customerValue,startsWithPlan:Dv[t.firstIncludedPlan].name}}function gy(e){let t=iy(e).map(e=>Ov.find(t=>t.id===e));if(t.length<2)return t.length===1?`I found ${t[0].label}, but I need one more plan name to make a useful comparison.`:`Tell me which two plans you want to compare, for example Suite Team versus Suite Professional.`;let n=t.map(e=>e.label);return`Here’s the difference at a glance for ${n.length===2?n.join(` and `):`${n.slice(0,-1).join(`, `)}, and ${n.at(-1)}`}. Check what each plan is strong at, what changes between them, and what you would miss.`}function _y(e){let t=Wv(e),n=[];return/\b(voice|phone|call center|telephony)\b/.test(t)&&n.push(`Voice`),(/\b(messaging|live chat|whatsapp)\b/.test(t)||Hv(t,`chat`))&&n.push(`Messaging`),/\b(help center|knowledge)\b/.test(t)&&n.push(`Help Center`),(Hv(t,`sla`)||t.includes(`service level`))&&n.push(`SLAs`),(Hv(t,`csat`)||Hv(t,`satisfaction`))&&n.push(`CSAT`),Hv(t,`copilot`)&&n.push(`Copilot`),(Hv(t,`routing`)||Hv(t,`ivr`))&&n.push(`Skills-based routing`),(Hv(t,`sandbox`)||Hv(t,`audit`)||Hv(t,`governance`))&&n.push(`Sandbox`),/\b(email only|only email|email-first)\b/.test(t)&&n.push(`Email`),[...new Set(n)]}function vy(e){return[...e].sort((e,t)=>Nv[e.tier]-Nv[t.tier])}function yy(e){if(new Set(e.map(e=>e.family)).size>1)return`Main difference: all channels vs email-only`;let t=vy(e);if(t.length===2){let[e,n]=t,r=Av[n.id].advantages.slice(0,2).join(` and `);return`${n.label} adds ${r} on top of ${e.label}`}return t.map((e,t)=>{let n=Av[e.id].advantages.slice(0,2).join(` and `);return t===0?`${e.label} starts with ${n}`:`${e.label} adds ${n}`}).join(`. `)}function by(e){let t=vy(e),n=e.some(e=>e.family===`Suite`),r=e.some(e=>e.family===`Support`),i=n&&r?` Suite plans bring email, messaging, live chat, voice, and Help Center together. Support plans focus on email ticketing.`:``;return`${t.map(e=>`${e.label} is a good fit when ${e.chooseWhen}.`).join(` `)}${i}`}function xy(e,t=``){let n=e.map(e=>Ov.find(t=>t.id===e)).filter(e=>!!e);if(n.length<2)return;let[r,i]=n,a=n.map(e=>Av[e.id]),o=_y(t),s=kv.map(e=>({label:e.label,values:a.map(t=>t.capabilities[e.id])})).filter(e=>new Set(e.values).size>1),c=n.map((e,t)=>{let r=new Set(n.flatMap((e,n)=>n===t?[]:Av[e.id].includes)),i=new Set(Av[e.id].includes);return{planId:e.id,label:e.label,missing:[...r].filter(e=>!i.has(e)).slice(0,4)}});return{plans:n.map(e=>({planId:e.id,label:e.label,bestFor:e.bestFor,items:e.highlights,audience:Av[e.id].audience,advantages:Av[e.id].advantages})),differences:s,required:o.length?o:r.family===i.family?[`The extras that match how your team works`]:[`The channels your customers use`],gaps:c,headline:yy(n),summary:by(n)}}function Sy(e){return xy(iy(e),e)}function Cy(e,t,n){let r=Pv(n.mentionedPlans[0]??cy(e,t)),i=Dv[r],a=Fv(r,t.billingCadence),o=n.features.length?` ${uy(n.features)} is included from ${Dv[Pv(n.features[0].firstIncludedPlan)].name}.`:``,s=n.topics[0]?` ${n.topics[0].answer}`:``;return`${i.name} is $${a} per agent per month, ${dy(t.billingCadence)}. ${zv[r]}${o}${s} Share the channels and features you need, and I’ll check which plan gives you the best fit.`}function wy(e,t,n,r){let i=Dv[e];return`${r.topics[0]?`${r.topics[0].answer} `:``}${r.features.length?`${uy(r.features)} pointed me to this plan. `:``}Based on what you shared, ${i.name} is a good fit. ${zv[e]} It is $${t} per agent per month, ${dy(n.billingCadence)}. Review why it fits below, then compare plans or contact sales if you need more detail.`}function Ty(e){return/\b(weather|forecast|sports|recipe|movie|capital of|who won|horoscope|stock price)\b/.test(e)}function Ey(e){return/\b(can i|do i|should i|do you|is there|what happens|why|how many|how much|under|budget|only|enough|later|connect|compliant|hipaa|free|expensive|drowning|tickets a day)\b/.test(e)}function Dy(e,t,n,r,i){let a=Wv(e),o=Dv[r],s=[];if(Ty(a)&&!t.features.length&&!t.topics.length)return`I can help with Zendesk plans, features, and pricing, not that topic. Tell me your channels, team size, or a feature you care about, and I’ll give a direct answer.`;if(!t.features.length&&!t.topics.length&&!t.mentionedPlans.length&&t.comparisonPlans.length<2)return/^(help|hi|hello|hey)\b/.test(a)&&a.split(` `).length<=3?`I can help you pick a plan, explain a feature, compare two plans, or check a price. What do you want to do first?`:`You asked about “${e.trim()}”. I don’t have a catalog match for that yet. Share the channels you use, how many agents you have, or a feature name — for example WhatsApp, SLAs, or Copilot — and I’ll answer against the live plan data.`;if(t.topics.length&&s.push(t.topics.slice(0,2).map(e=>e.answer).join(` `)),t.features.length&&!t.topics.length){let e=t.features[0],n=Dv[Pv(e.firstIncludedPlan)];s.push(`${e.name} is available from ${n.name}. ${e.customerValue}`)}if(t.mentionedPlans.length===1&&t.comparisonPlans.length<2&&!t.topics.length&&s.push(fy(t.mentionedPlans[0],n)),/\b(price|cost|under|budget|expensive|how much|per month)\b/.test(a)){let e=Fv(r,`annual`),t=/\bunder\s+\$?(\d+)/.exec(a),c=t?Number(t[1]):void 0,l=c?e<=c?` That is under $${c} per agent per month when billed annually.`:` The annual price is $${e} per agent per month, so it is not under $${c}.`:``;s.push(`${o.name} is $${i} per agent per month, ${dy(n.billingCadence)}.${l}`)}return(/\b(can i|should i|is it enough)\b/.test(a)||/\bdo i need\b/.test(a)&&!/\bhow many\b/.test(a))&&!t.topics.some(e=>e.id===`suite-vs-support`||e.id===`compliance`||e.id===`no-free-plan`)&&(t.features.length||t.topics.length)&&s.unshift(`Yes — ${o.name} covers what you described.`),/\b(do i need suite|need suite|only (do )?email)\b/.test(a)&&t.topics.some(e=>e.id===`suite-vs-support`)&&s.unshift(`If email is your only channel, you do not have to buy Suite. A Support plan can be enough. Choose Suite when customers also use messaging, chat, voice, or Help Center.`),s.filter(Boolean).join(` `)}function Oy(e,t,n,r,i,a){let o=Wv(e);return t===`plan_comparison`?gy(n.query):t===`sales_handoff`?`I can share your priorities, questions, recommended plan, and price with sales so they can continue from here. The current recommendation is ${Dv[i].name}.`:t===`pricing`?Cy(e,r,n):t===`plan_recommendation`?wy(i,a,r,n):t===`feature_explanation`&&n.features.length&&!Ey(o)?my(n.features):t===`feature_lookup`&&n.features.length&&!n.topics.length&&!Ey(o)?py(i,n.features,a,r):Dy(e,n,r,i,a)}function ky(e,t=Lv,n=[]){let r=oy(e,n),i=sy(e,n),a=r.features,o=Pv(cy(e,t,n)),s=Dv[o],c=Fv(o,t.billingCadence),l=Iv([...new Set([...s.sourceIds,...a.flatMap(e=>e.sourceIds)])]),u=ly(o,a,t,r.topics),d=Oy(e,i,r,t,o,c);return{intent:i,messages:[Yv(`bot`,d,Zv(d.split(/(?<=[.!?])\s+/)[0]??d,r,o,c,t,[{label:`Plan`,value:s.name},a[0]?{label:`Helps`,value:a[0].customerValue}:{label:``,value:``},r.topics[0]?{label:`For you`,value:r.topics[0].reason??r.topics[0].title}:{label:``,value:``}]))],recommendation:{planId:o,label:s.name,price:c,cadence:t.billingCadence,reasons:u,unknowns:[`Sales can confirm contract terms, available discounts, and regional pricing.`],sources:l},suggestedActions:[`Compare plans`,`View this plan`,`Contact sales`],showRecommendation:i===`plan_recommendation`&&!Ty(Wv(e)),comparison:i===`plan_comparison`?Sy(r.query):void 0,explanation:i===`feature_explanation`?hy(a):void 0}}function Ay(e=Lv){let t=e.companySize===`small`?`team`:Pv(e.trialPlanId),n=Dv[t],r=Fv(t,e.billingCadence);return{intent:`plan_recommendation`,messages:[Yv(`bot`,`Based on your selected channels and trial activity, ${n.name} is a good starting point. ${zv[t]} It is $${r} per agent per month, ${dy(e.billingCadence)}.`,{headline:`${n.name} is a good starting point`,subtitle:zv[t],facts:[{label:`Next`,value:`Tell me a feature, team size, or budget to refine this.`}],chips:e.selectedChannels.length?e.selectedChannels:[`Email`,`Messaging`],price:`$${r} / agent / mo, ${dy(e.billingCadence)}`})],recommendation:{planId:t,label:n.name,price:r,cadence:e.billingCadence,reasons:ly(t,[],e),unknowns:[`Reporting, routing, governance, and purchasing needs can help refine the recommendation.`],sources:Iv(n.sourceIds)},suggestedActions:[`Explore a feature`,`Compare plans`,`Contact sales`],showRecommendation:!0}}function jy(e,t){let n=e.filter(e=>e.role===`user`).map(e=>e.text);return{recommendedPlanId:t.planId,summary:`Questions discussed: ${n.join(`; `)||`plan fit`}. Recommended plan: ${t.label}.`,reasons:t.reasons,unknowns:t.unknowns}}var My=650;function Ny(e){return new Promise(t=>{window.setTimeout(()=>t(e),My)})}function Py(e){let t=e.toLowerCase().replace(/\bsuits\b/g,`suite`).replace(/\bsuit\b/g,`suite`),n=jv.filter(e=>e.aliases.some(e=>t.includes(e))),r=Object.values(Dv).find(e=>t.includes(e.name.toLowerCase().replace(`suite `,``)));return[...new Set([...r?.sourceIds??[],...n.flatMap(e=>e.sourceIds),`zendesk-pricing`])].map(e=>{let t=Ev.find(t=>t.id===e)??Ev[0],r=n[0];return{label:t.label,url:t.url,excerpt:r?.summary??`Zendesk pricing and plan details support this guidance.`}})}var Fy={async startSession(e={}){return Ny(Ay(Qv(e)))},async sendMessage(e,t={},n=[]){let r=ky(e,Qv(t),n),i=Py(e);return Ny({...r,recommendation:{...r.recommendation,sources:i.map(e=>e.label)}})},async confirmPlan(e){return Ny({confirmedPlanId:e})},async handoff(e,t){return Ny(jy(e,t))}},Iy=(0,g.forwardRef)((e,t)=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,focusable:`false`,viewBox:`0 0 20 20`,ref:t,...e,children:(0,K.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,d:`M17.464 2.535a.833.833 0 0 1 0 1.179L13.68 7.499h2.988a.833.833 0 1 1 0 1.667h-5a.833.833 0 0 1-.834-.833v-5a.833.833 0 0 1 1.667 0V6.32l3.786-3.786a.833.833 0 0 1 1.178 0M2.5 11.666c0-.46.373-.833.833-.833h5c.46 0 .834.373.834.833v5a.833.833 0 1 1-1.667 0v-2.988l-3.786 3.786a.833.833 0 0 1-1.178-1.179L6.32 12.5H3.333a.833.833 0 0 1-.833-.833`})})),Ly=(0,g.forwardRef)((e,t)=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,focusable:`false`,viewBox:`0 0 20 20`,ref:t,...e,children:(0,K.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,d:`M10.833 3.333c0-.46.373-.833.834-.833h5c.46 0 .833.373.833.833v5a.833.833 0 1 1-1.667 0V5.345l-3.577 3.578a.833.833 0 0 1-1.179-1.179l3.578-3.577h-2.988a.833.833 0 0 1-.834-.834m-7.5 7.5c.46 0 .834.373.834.834v2.988l3.577-3.578a.833.833 0 0 1 1.179 1.179l-3.578 3.577h2.988a.833.833 0 0 1 0 1.667h-5a.833.833 0 0 1-.833-.833v-5c0-.46.373-.834.833-.834`})})),Ry=(0,g.forwardRef)((e,t)=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,focusable:`false`,viewBox:`0 0 20 20`,ref:t,...e,children:(0,K.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,d:`M15.835 2.5a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5h-.833v.833a2.5 2.5 0 0 1-2.5 2.5H8.967l-3.56 1.978a.834.834 0 0 1-1.239-.728v-1.25a2.5 2.5 0 0 1-2.5-2.5v-5a2.5 2.5 0 0 1 2.5-2.5h.834V5a2.5 2.5 0 0 1 2.5-2.5zm-11.667 5a.834.834 0 0 0-.833.833v5c0 .46.373.834.833.834h.834c.46 0 .833.373.833.833v.667l2.512-1.396.095-.045a.8.8 0 0 1 .31-.059h3.75c.46 0 .833-.374.833-.834V11.7l-.002-.033.002-.035V8.333a.834.834 0 0 0-.833-.833zm3.334-3.333A.834.834 0 0 0 6.668 5v.833h5.834a2.5 2.5 0 0 1 2.5 2.5v2.5h.833c.46 0 .833-.373.833-.833V5a.833.833 0 0 0-.833-.833z`})})),zy=(0,g.forwardRef)((e,t)=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,focusable:`false`,viewBox:`0 0 20 20`,ref:t,...e,children:(0,K.jsx)(`path`,{fill:`currentColor`,d:`M2.294 4.42C1.828 3.1 3.1 1.827 4.421 2.294l11.276 3.98a1.667 1.667 0 0 1 .624 2.75l-1.393 1.392 2.989 2.988c.65.651.65 1.706 0 2.357l-2.155 2.155c-.651.65-1.706.65-2.357 0l-2.988-2.988-1.393 1.392a1.667 1.667 0 0 1-2.75-.624zm5.552 10.722 1.834-1.834.08-.072a1.04 1.04 0 0 1 1.314 0l.08.072 3.43 3.43 2.154-2.155-3.43-3.43a1.04 1.04 0 0 1 0-1.473l1.834-1.835-11.276-3.98z`})})),By=(0,g.forwardRef)((e,t)=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,focusable:`false`,viewBox:`0 0 20 20`,ref:t,...e,children:[(0,K.jsx)(`path`,{fill:`currentColor`,d:`M8.667 2.976a.833.833 0 0 1 0 1.666H5.5c-.48 0-.79.001-1.026.02-.226.019-.31.05-.352.072a.83.83 0 0 0-.364.363c-.021.041-.052.126-.07.352-.02.236-.021.547-.021 1.027v8c0 .48.001.79.02 1.026.019.226.05.31.07.352.08.157.209.285.365.364.041.021.126.052.352.07.236.02.546.021 1.026.021h8c.48 0 .791-.001 1.027-.02.226-.019.31-.05.352-.07a.84.84 0 0 0 .363-.365c.021-.041.053-.126.071-.352.02-.236.02-.547.02-1.027V11.31a.834.834 0 0 1 1.667 0v3.166c0 .453 0 .844-.025 1.163-.027.33-.087.658-.248.973a2.5 2.5 0 0 1-1.091 1.092c-.315.16-.644.22-.973.248-.32.026-.71.025-1.163.025h-8c-.453 0-.843 0-1.163-.025-.33-.027-.657-.088-.972-.248a2.5 2.5 0 0 1-1.093-1.092c-.16-.315-.22-.644-.247-.973C2 15.318 2 14.928 2 14.475V6.476c0-.453 0-.843.025-1.163.027-.33.087-.658.247-.973a2.5 2.5 0 0 1 1.093-1.091c.315-.16.643-.222.972-.249.32-.026.71-.024 1.163-.024z`}),(0,K.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,d:`M13.565 2.732a2.5 2.5 0 0 1 3.536 0l.143.143c.976.976.976 2.56 0 3.536l-3.821 3.82a.84.84 0 0 1-.59.245h-2.5a.834.834 0 0 1-.833-.833v-2.5c0-.22.088-.434.244-.59zm2.358 1.179a.834.834 0 0 0-1.179 0l-3.577 3.577v1.321h1.321l3.577-3.577a.834.834 0 0 0 0-1.179z`})]})),Vy=Kn`
  0%, 100% { transform: scale(0.8) rotate(-90deg); }
  50% { transform: scale(2.0) rotate(90deg); }
`,Hy=B.div`
  position: absolute;
  bottom: -323px;
  left: -124px;
  right: -138px;
  height: 623px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 0;
`,Uy=B.div`
  flex: none;
  width: 444px;
  height: 444px;
  transform: rotate(-38deg);
`,Wy=B.div`
  width: 100%;
  height: 100%;
  border-radius: 999px;
  opacity: 0.7;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 8px;
  padding: 16px;
  box-sizing: border-box;
  background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 444 444' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%25' width='100%25' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(14.294 -18.273 18.273 14.294 222 222)'><stop stop-color='rgba(246,245,244,1)' offset='0'/><stop stop-color='rgba(246,245,244,0)' offset='1'/></radialGradient></defs></svg>");
`,Gy=B.div`
  position: absolute;
  inset: 0;
  animation: ${Vy} 8s ease-in-out infinite;
  transform-origin: center center;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Ky=B.div`
  flex: 1 0 0;
  height: 100%;
  min-height: 0;
  min-width: 0;
  position: relative;
`,qy=B.div`
  position: absolute;
  inset: -24.28%;
`,Jy=B.div`
  position: absolute;
  inset: 26.6px 121.43px 132.59px 37.76px;
`,Yy=B.div`
  position: absolute;
  inset: -28.1%;
`,Xy=B.div`
  position: absolute;
  bottom: 124.8px;
  left: 82.05px;
  right: 27.77px;
  height: 286.4px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Zy=B.div`
  flex: none;
  width: 360px;
  height: 82px;
  transform: rotate(38deg);
  background-image: linear-gradient(0.63deg, rgb(202, 184, 228) 2.59%, rgba(226, 219, 237, 0) 97.99%);
`,Qy={display:`block`,width:`100%`,height:`100%`};function $y(){return(0,K.jsx)(Hy,{children:(0,K.jsx)(Uy,{children:(0,K.jsxs)(Wy,{children:[(0,K.jsxs)(Gy,{children:[(0,K.jsx)(Ky,{children:(0,K.jsx)(qy,{children:(0,K.jsxs)(`svg`,{style:Qy,fill:`none`,preserveAspectRatio:`none`,viewBox:`0 0 612 612`,children:[(0,K.jsxs)(`defs`,{children:[(0,K.jsxs)(`filter`,{colorInterpolationFilters:`sRGB`,filterUnits:`userSpaceOnUse`,height:`612`,id:`aurora-filter-main`,width:`612`,x:`0`,y:`0`,children:[(0,K.jsx)(`feFlood`,{floodOpacity:`0`,result:`BackgroundImageFix`}),(0,K.jsx)(`feBlend`,{in:`SourceGraphic`,in2:`BackgroundImageFix`,mode:`normal`,result:`shape`}),(0,K.jsx)(`feGaussianBlur`,{result:`effect1_foregroundBlur`,stdDeviation:`50`})]}),(0,K.jsxs)(`linearGradient`,{gradientUnits:`userSpaceOnUse`,id:`aurora-gradient-main`,x1:`430.83`,x2:`414.59`,y1:`146.3`,y2:`411.58`,children:[(0,K.jsx)(`stop`,{stopColor:`#E2DBED`}),(0,K.jsx)(`stop`,{offset:`0.216`,stopColor:`#CDB3E6`}),(0,K.jsx)(`stop`,{offset:`0.88`,stopColor:`#D0DAF3`})]})]}),(0,K.jsxs)(`g`,{filter:`url(#aurora-filter-main)`,children:[(0,K.jsx)(`circle`,{cx:`306`,cy:`306`,fill:`url(#aurora-gradient-main)`,fillOpacity:`0.8`,r:`206`}),(0,K.jsx)(`circle`,{cx:`306`,cy:`306`,r:`205.5`,stroke:`black`,strokeOpacity:`0`})]})]})})}),(0,K.jsx)(Jy,{children:(0,K.jsx)(Yy,{children:(0,K.jsxs)(`svg`,{style:Qy,fill:`none`,preserveAspectRatio:`none`,viewBox:`0 0 445 445`,children:[(0,K.jsx)(`defs`,{children:(0,K.jsxs)(`filter`,{colorInterpolationFilters:`sRGB`,filterUnits:`userSpaceOnUse`,height:`445`,id:`aurora-filter-glow`,width:`445`,x:`0`,y:`0`,children:[(0,K.jsx)(`feFlood`,{floodOpacity:`0`,result:`BackgroundImageFix`}),(0,K.jsx)(`feBlend`,{in:`SourceGraphic`,in2:`BackgroundImageFix`,mode:`normal`,result:`shape`}),(0,K.jsx)(`feGaussianBlur`,{result:`effect1_foregroundBlur`,stdDeviation:`40`})]})}),(0,K.jsx)(`g`,{filter:`url(#aurora-filter-glow)`,children:(0,K.jsx)(`circle`,{cx:`222.5`,cy:`222.5`,fill:`#F6F5F4`,fillOpacity:`0.8`,r:`142.5`})})]})})})]}),(0,K.jsx)(Xy,{children:(0,K.jsx)(Zy,{})})]})})})}var eb=`plans-copilot-conversations`;function tb(e){let t=new Date;return t.setHours(0,0,0,0),t.setDate(t.getDate()-e),t.getTime()}function nb(e){let t=[{label:`Today`,items:[]},{label:`Yesterday`,items:[]},{label:`Last 7 days`,items:[]},{label:`Last 30 days`,items:[]},{label:`Older`,items:[]}],n=[tb(0),tb(1),tb(7),tb(30),0];for(let r of e)r.savedAt>=n[0]?t[0].items.push(r):r.savedAt>=n[1]?t[1].items.push(r):r.savedAt>=n[2]?t[2].items.push(r):r.savedAt>=n[3]?t[3].items.push(r):t[4].items.push(r);return t.filter(e=>e.items.length>0)}function rb(e,t=`New conversation`){let n=e.find(e=>e.role===`user`)?.text?.trim();return n?n.length>48?`${n.slice(0,45)}…`:n:t}function ib(e,t){let n=t.trim().toLowerCase();return n?e.filter(e=>e.title.toLowerCase().includes(n)?!0:e.turns.some(e=>e.text.toLowerCase().includes(n))):e}function ab(){try{let e=window.localStorage.getItem(eb);if(!e)return[];let t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}}function ob(e){try{window.localStorage.setItem(eb,JSON.stringify(e))}catch{}}var sb={ink:`#4B286D`,inkBright:`#8D59B1`,thinking:`#885BB3`,userBubble:`#F3F0F7`,userBubbleText:`#2F3130`,chipBg:`rgba(100, 104, 100, 0.08)`,chipText:`#2F3130`,cardBorder:`#E4D2F2`,cardWash:`#F6F2FA`,washStrong:`#E2DBED`,headerText:`#2F3130`,send:`#8B8E89`,sendIdle:`rgba(100, 104, 100, 0.08)`,accent:`#8D59B1`,accentSoft:`#CDB3E6`,gradient:`linear-gradient(180deg, #ffffff 0%, #ffffff 58%, #E2DBED 100%)`,glow:`0 18px 44px rgba(141, 89, 177, 0.2)`,panelShadow:`0 0 4px rgba(10, 13, 14, 0.16)`},cb=[`Explain this page`,`Help me pick a plan`,`Talk to sales or support`,`What is this?`],lb=Kn`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`,ub=B.div`
  display: contents;
`,db=B.div`
  position: ${({$docked:e})=>e?`absolute`:`fixed`};
  inset: ${({$docked:e})=>e?`0`:`auto`};
  right: ${({$docked:e})=>e?`0`:`24px`};
  bottom: ${({$docked:e})=>e?`0`:`24px`};
  z-index: ${({$docked:e})=>e?1:32};
  display: grid;
  width: ${({$open:e,$docked:t})=>t?`100%`:e?`min(360px, calc(100vw - 40px))`:`64px`};
  height: ${({$open:e,$docked:t})=>t?`100%`:e?`min(752px, calc(100vh - 56px))`:`64px`};
  overflow: ${({$docked:e})=>e?`hidden`:`visible`};
  border: ${({$open:e,$docked:t,theme:n})=>t||e?`0`:`1px solid ${n.palette.purple[300]}`};
  border-radius: ${({$open:e,$docked:t})=>t?`0`:e?`24px`:`50%`};
  background: ${({$open:e,$docked:t})=>t||e?`transparent`:`#ffffff`};
  box-shadow: ${({$open:e,$docked:t})=>t||e?`none`:sb.glow};
  color: ${sb.inkBright};
  cursor: ${({$open:e,$docked:t})=>t||e?`default`:`pointer`};
  transform-origin: bottom right;
  transition: ${({$docked:e})=>e?`none`:`
    width 520ms cubic-bezier(0.22, 1, 0.36, 1),
    height 520ms cubic-bezier(0.22, 1, 0.36, 1),
    border-radius 480ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 420ms ease,
    background 420ms ease,
    border-color 320ms ease`};
`,fb=B.button`
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  border: 0;
  appearance: none;
  background: transparent;
  color: ${sb.inkBright};
  line-height: 0;
  opacity: ${({$visible:e})=>+!!e};
  pointer-events: ${({$visible:e})=>e?`auto`:`none`};
  transform: ${({$visible:e})=>e?`scale(1)`:`scale(0.72)`};
  transition:
    opacity 220ms ease,
    transform 420ms cubic-bezier(0.22, 1, 0.36, 1);
  animation: ${({$spin:e,$visible:t})=>e&&t?lb:`none`} 1.8s cubic-bezier(0.22, 0.61, 0.36, 1) 1 both;

  svg {
    display: block;
    width: 28px;
    height: 28px;
    flex-shrink: 0;
  }
`,pb=B.div`
  position: relative;
  display: grid;
  grid-template-rows: ${({$idle:e,$docked:t})=>e&&t?`auto minmax(0, 1fr) auto`:e?`minmax(0, 1fr)`:`auto minmax(0, 1fr) auto`};
  width: 100%;
  max-width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
  border: 0;
  border-radius: ${({$docked:e})=>e?`0`:`24px`};
  background: #ffffff;
  box-shadow: ${({$visible:e,$docked:t})=>e&&!t?sb.panelShadow:`none`};
  opacity: ${({$visible:e})=>+!!e};
  pointer-events: ${({$visible:e})=>e?`auto`:`none`};
  transform: ${({$visible:e,$docked:t})=>e||t?`translateY(0) scale(1)`:`translateY(12px) scale(0.96)`};
  transform-origin: bottom right;
  transition: ${({$docked:e})=>e?`none`:`
    opacity 240ms ease 80ms,
    transform 480ms cubic-bezier(0.22, 1, 0.36, 1)`};
`,mb=B.header`
  position: ${({$overlay:e})=>e?`absolute`:`relative`};
  top: 0;
  right: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  height: 56px;
  box-sizing: border-box;
  padding: 12px;
  flex-shrink: 0;
  min-width: 0;
  max-width: 100%;
  overflow: hidden;
  gap: 12px;
  background: ${({$overlay:e})=>e?`transparent`:`#ffffff`};
  color: #706f6e;

  svg {
    width: 20px;
    height: 20px;
  }

  > button {
    flex-shrink: 0;
  }
`,hb=B.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1 1 0;
  min-width: 0;
  overflow: hidden;

  button {
    flex-shrink: 0;
  }
`,gb=B.span`
  display: block;
  flex: 1 1 0;
  min-width: 0;
  overflow: hidden;
  color: #313131;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
`,_b=B.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 4px;
`,vb=B.span`
  display: flex;

  svg {
    width: 16px;
    height: 16px;
  }
`,yb=B.button`
  display: grid;
  width: 32px;
  height: 32px;
  place-items: center;
  padding: 0;
  border: 0;
  border-radius: 8px;
  background: ${({$active:e})=>e?`rgba(141, 89, 177, 0.12)`:`transparent`};
  color: ${({$active:e})=>e?`#8D59B1`:`#706f6e`};
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover,
  &:focus-visible {
    background: ${({$active:e})=>e?`rgba(141, 89, 177, 0.18)`:`rgba(100, 104, 100, 0.08)`};
    color: ${({$active:e})=>e?`#7b61c2`:`#2f3130`};
    outline: none;
  }
`,bb=B.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  padding: 0 16px 12px;
`,xb=B.input`
  width: 100%;
  height: 36px;
  margin: 4px 0 8px;
  padding: 0 12px;
  border: 1px solid #d8d8d4;
  border-radius: 999px;
  background: #ffffff;
  color: #2f3130;
  font: inherit;
  font-size: 13px;

  &:focus {
    outline: 2px solid #8d59b1;
    outline-offset: -1px;
    border-color: #8d59b1;
  }
`,Sb=B.div`
  flex: 1;
  min-height: 0;
  overflow: auto;
`,Cb=B.p`
  margin: 16px 4px 6px;
  color: #646864;
  font-size: 12px;
  line-height: 16px;
`,wb=B.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  min-height: 36px;
  padding: 8px 8px 8px 12px;
  border: 0;
  border-radius: 6px;
  background: ${({$active:e})=>e?`rgba(100, 104, 100, 0.16)`:`transparent`};
  color: #2f3130;
  font: inherit;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  cursor: pointer;

  span {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover,
  &:focus-visible {
    background: ${({$active:e})=>e?`rgba(100, 104, 100, 0.16)`:`rgba(100, 104, 100, 0.08)`};
    outline: none;
  }
`,Tb=B.button`
  flex: 0 0 auto;
  display: grid;
  width: 22px;
  height: 22px;
  place-items: center;
  padding: 0;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: #706f6e;
  cursor: pointer;

  svg {
    width: 12px;
    height: 12px;
  }

  &:hover,
  &:focus-visible {
    background: rgba(100, 104, 100, 0.16);
    color: #2f3130;
    outline: none;
  }
`,Eb=B.p`
  margin: 24px 8px;
  color: #706f6e;
  font-size: 13px;
  line-height: 18px;
`,Db=B.div`
  position: relative;
  z-index: 1;
  min-height: 0;
  overflow: ${({$idle:e})=>e?`hidden`:`auto`};
  background: ${({$idle:e})=>e?`transparent`:`#ffffff`};
`,Ob=B.div`
  position: absolute;
  ${({$docked:e})=>e?`
    inset: 0;
    overflow: hidden;
  `:`
    inset: -4px;
    width: calc(100% + 8px);
    height: calc(100% + 8px);
  `}
`,kb=B.div`
  position: absolute;
  inset: 0;
`,Ab=B.div`
  position: absolute;
  right: ${({$docked:e})=>e?`16px`:`24px`};
  bottom: ${({$docked:e})=>e?`0`:`24px`};
  left: ${({$docked:e})=>e?`16px`:`24px`};
  z-index: 4;
  height: 48px;

  label {
    display: block;
    height: 100%;
  }

  span {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
  }

  input {
    width: 100%;
    height: 100%;
    padding: 0 52px 0 20px;
    border: 0;
    background: transparent;
    color: #2f3130;
    font: inherit;
    font-size: 14px;
    outline: none;
  }
`,jb=B.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
`,Mb=B.img`
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: fill;
  pointer-events: none;
  user-select: none;
`,Nb=B.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: ${({$fullscreen:e})=>e?`center`:`stretch`};
  justify-content: ${({$fullscreen:e})=>e?`center`:`flex-start`};
  width: 100%;
  max-width: ${({$fullscreen:e})=>e?`720px`:`none`};
  height: 100%;
  min-height: 0;
  margin: ${({$fullscreen:e})=>e?`0 auto`:`0`};
  padding: ${({$fullscreen:e})=>e?`20px 20px 0`:`8px 20px 0`};
`,Pb=B.div`
  display: grid;
  gap: 4px;
  padding-top: ${({$fullscreen:e})=>e?`0`:`clamp(48px, 10vh, 120px)`};
  color: #313131;
  font-size: 22px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.352px;

  svg {
    display: block;
    width: 20px;
    height: 20px;
    color: #7b61c2;
  }

  p {
    margin: 0;
    width: ${({$fullscreen:e})=>e?`auto`:`256px`};
  }
`,Fb=B.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: ${({$fullscreen:e})=>e?`center`:`flex-start`};
  gap: 8px;
  margin-top: ${({$fullscreen:e})=>e?`32px`:`20px`};
`,Ib=B.button`
  display: inline-flex;
  align-items: center;
  height: 40px;
  padding: 0 14px;
  border: 0;
  border-radius: 20px;
  background: ${({$accent:e})=>e?`linear-gradient(180deg, #F6F2FA 0%, #E2DBED 100%)`:`rgba(100, 104, 100, 0.08)`};
  box-shadow: none;
  color: #2f3130;
  font: inherit;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  white-space: nowrap;
  cursor: pointer;
`,Lb=B.div`
  flex: 1 1 auto;
  min-height: 48px;
`,Rb=B.p`
  margin: 0 4px 12px;
  color: #848f99;
  font-size: 12px;
  line-height: 16px;
  text-align: center;

  strong {
    display: block;
    font-weight: 600;
    color: #706f6e;
  }
`,zb=B.button`
  position: absolute;
  left: ${({$left:e})=>e};
  top: ${({$top:e})=>e};
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({$width:e})=>e};
  height: ${({$height:e})=>e};
  padding: ${({$bare:e})=>e?`0`:`0 14px`};
  border: 0;
  border-radius: 20px;
  background: ${({$bare:e,$accent:t})=>e?`transparent`:t?`linear-gradient(180deg, #F6F2FA 0%, #E2DBED 100%)`:`rgba(246, 245, 244, 0.98)`};
  color: #2f3130;
  font: inherit;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  white-space: nowrap;
  cursor: pointer;
`,Bb=B.div`
  pointer-events: none;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  height: ${({$tall:e})=>e?`62%`:`220px`};
  background: ${({$tall:e})=>e?`
    radial-gradient(ellipse 90% 70% at 28% 100%, rgba(205, 179, 230, 0.55) 0%, rgba(205, 179, 230, 0) 72%),
    radial-gradient(ellipse 100% 80% at 78% 108%, rgba(208, 218, 243, 0.48) 0%, rgba(208, 218, 243, 0) 70%),
    linear-gradient(180deg, rgba(246, 242, 250, 0) 0%, rgba(232, 219, 245, 0.28) 42%, rgba(202, 184, 228, 0.48) 100%)
  `:`
    radial-gradient(circle at 38% 88%, rgba(205, 179, 230, 0.72) 0%, rgba(205, 179, 230, 0) 58%),
    radial-gradient(circle at 64% 100%, rgba(208, 218, 243, 0.62) 0%, rgba(208, 218, 243, 0) 52%),
    linear-gradient(180deg, rgba(202, 184, 228, 0) 18%, rgba(202, 184, 228, 0.55) 100%)
  `};
  mask-image: ${({$tall:e})=>e?`linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.45) 22%, #000 48%, #000 100%)`:`none`};
  -webkit-mask-image: ${({$tall:e})=>e?`linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.45) 22%, #000 48%, #000 100%)`:`none`};
`,Vb=B.div`
  position: ${({$idle:e,$docked:t})=>e&&!t?`absolute`:`relative`};
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
  padding: ${({$idle:e,$docked:t})=>e&&t?`0 16px 12px`:e?`0 20px 24px`:t?`10px 16px 16px`:`10px 16px 18px`};
  background: ${({$idle:e})=>e?`transparent`:`#ffffff`};
`,Hb=B.div`
  position: relative;
  border-radius: 999px;
  padding: ${({$landing:e,$glow:t})=>e?`1.5px`:t?`0`:`1px`};
  border: ${({$glow:e})=>e?`1px solid #b7b7b3`:`0`};
  background: ${({$landing:e,$glow:t,theme:n})=>t?`#ffffff`:e?sb.accent:n.palette.grey[300]};
  box-shadow: ${({$glow:e})=>e?`0px 2px 8px 0px #c5afda, 0px 8px 20px 0px #e2dbed`:`none`};
  transition:
    background 160ms ease,
    border-color 150ms ease-out,
    box-shadow 150ms ease-out,
    padding 160ms ease;

  &:hover {
    border-color: ${({$glow:e})=>e?`#8d59b1`:void 0};
  }

  &:focus-within {
    padding: ${({$glow:e})=>e?`0`:`2px`};
    border-color: ${({$glow:e})=>e?`#8d59b1`:void 0};
    outline: ${({$glow:e})=>e?`2px solid #8d59b1`:`none`};
    outline-offset: ${({$glow:e})=>e?`-1px`:`0`};
    background: ${({$glow:e,$landing:t})=>e?`#ffffff`:`linear-gradient(135deg, ${sb.accent} 0%, ${sb.accentSoft} 52%, ${sb.accent} 100%)`};
    box-shadow: ${({$glow:e})=>e?`0px 2px 8px 0px #c5afda, 0px 8px 20px 0px #e2dbed`:`0 8px 20px rgba(226, 219, 237, 1), 0 2px 8px rgba(197, 175, 218, 1)`};
  }

  [data-garden-id='forms.field'] {
    margin: 0;
  }

  [data-garden-id='forms.textarea']:not([aria-hidden]) {
    display: block;
    width: 100%;
    min-height: 48px;
    max-height: 120px;
    padding: 12px 56px 12px 18px;
    border: 0;
    border-radius: 999px;
    background: ${({theme:e})=>e.palette.white};
    color: ${({theme:e})=>e.palette.grey[900]};
    font: inherit;
    font-size: 14px;
    line-height: 20px;
    box-shadow: none;
  }

  [data-garden-id='forms.textarea']:not([aria-hidden]):focus,
  [data-garden-id='forms.textarea']:not([aria-hidden]):focus-visible {
    border: 0;
    box-shadow: none;
    outline: none;
  }
`,Ub=B.button`
  position: absolute;
  top: 50%;
  right: 6px;
  display: grid;
  width: 32px;
  height: 32px;
  place-items: center;
  border: 0;
  border-radius: 50%;
  background: ${({$busy:e,$ready:t})=>e||t?`#313131`:sb.sendIdle};
  color: ${({$busy:e,$ready:t,theme:n})=>e||t?n.palette.white:sb.send};
  transform: translateY(-50%);
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
  }

  span {
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 2px;
    background: currentColor;
  }

  &:hover,
  &:focus-visible {
    background: ${({$busy:e})=>e?`#313131`:`#49484a`};
    outline: none;
  }
`;function Wb({open:e,spin:t,idle:n,title:r,composer:i,isScanning:a,placeholder:o,children:s,layout:c=`fab`,onOpen:l,onClose:u,onHelpCenter:d,onInProduct:f,onFindPlan:p,onIdlePrompt:m,inspectActive:h=!1,onInspectToggle:g,persistent:_=!1,historyOpen:v=!1,historyQuery:y=``,conversations:b=[],activeConversationId:x=null,copied:S=!1,onHistoryToggle:C,onHistoryQueryChange:w,onSelectConversation:T,onDeleteConversation:E,onNewConversation:ee,onCopyLast:te,onStop:ne,isFullscreen:D=!1,onToggleFullscreen:O,onComposerChange:re,onComposerKeyDown:ie,onSubmit:k}){let A=c===`docked`,ae=nb(ib(b,y));return(0,K.jsx)(zn,{theme:e=>({...e,assistant:sb}),children:(0,K.jsx)(ub,{children:(0,K.jsxs)(db,{$open:e,$spin:t,$docked:A,role:e||A?`dialog`:void 0,"aria-label":e||A?`Plans Copilot`:void 0,children:[A?null:(0,K.jsx)(fb,{type:`button`,$visible:!e,$spin:t,"aria-label":`Open Copilot`,onClick:l,children:(0,K.jsx)(cp,{"aria-hidden":`true`})}),(0,K.jsxs)(pb,{$visible:e||A,$idle:n,$docked:A,children:[n&&!A?null:(0,K.jsxs)(mb,{children:[C?(0,K.jsx)(Xs,{size:`small`,"aria-label":v?`Back to chat`:`Conversations`,"aria-pressed":v,onClick:C,children:v?(0,K.jsx)(vp,{"aria-hidden":`true`}):(0,K.jsx)(Ry,{"aria-hidden":`true`})}):null,(0,K.jsxs)(hb,{children:[(0,K.jsx)(gb,{title:v?`Conversations`:n?void 0:r,children:v?`Conversations`:n?``:r}),!n&&!v?(0,K.jsx)(Xs,{size:`small`,"aria-label":`Conversation options`,tabIndex:-1,children:(0,K.jsx)(ao,{"aria-hidden":`true`})}):null]}),(0,K.jsxs)(_b,{children:[A&&ee?(0,K.jsx)(Xs,{size:`small`,"aria-label":`New conversation`,onClick:ee,children:(0,K.jsx)(By,{"aria-hidden":`true`})}):null,A&&g&&!v&&!D?(0,K.jsx)(yb,{type:`button`,$active:h,"aria-label":h?`Turn off What is this`:`What is this`,"aria-pressed":h,onClick:g,children:(0,K.jsx)(zy,{"aria-hidden":`true`})}):null,n&&!A?null:(0,K.jsx)(Xs,{size:`small`,"aria-label":D?`Exit full screen`:`View in full screen`,"aria-pressed":D,onClick:O,children:(0,K.jsx)(vb,{children:D?(0,K.jsx)(Iy,{"aria-hidden":`true`}):(0,K.jsx)(Ly,{"aria-hidden":`true`})})}),_?null:(0,K.jsx)(Xs,{size:`small`,"aria-label":`Close Copilot`,onClick:u,children:(0,K.jsx)(Ml,{"aria-hidden":`true`})})]})]}),(0,K.jsx)(Db,{$idle:n&&!v,children:v&&A?(0,K.jsxs)(bb,{children:[(0,K.jsx)(xb,{type:`search`,value:y,placeholder:`Search conversations`,onChange:e=>w?.(e.target.value)}),(0,K.jsx)(Sb,{children:ae.length===0?(0,K.jsx)(Eb,{children:b.length===0?`No saved conversations yet. Ask something, and it will show up here.`:`No conversations match that search.`}):ae.map(e=>(0,K.jsxs)(`div`,{children:[(0,K.jsx)(Cb,{children:e.label}),e.items.map(e=>(0,K.jsxs)(wb,{role:`button`,tabIndex:0,$active:e.id===x,onClick:()=>T?.(e.id),onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),T?.(e.id))},children:[(0,K.jsx)(`span`,{children:e.title}),(0,K.jsx)(Tb,{type:`button`,"aria-label":`Delete ${e.title}`,onClick:t=>{t.stopPropagation(),E?.(e.id)},children:(0,K.jsx)(Ml,{"aria-hidden":`true`})})]},e.id))]},e.label))})]}):n&&A?(0,K.jsxs)(Nb,{$fullscreen:D,children:[(0,K.jsxs)(Pb,{$fullscreen:D,children:[(0,K.jsx)(cp,{"aria-hidden":`true`}),(0,K.jsx)(`p`,{children:`How can I help?`})]}),(0,K.jsxs)(Fb,{$fullscreen:D,children:[(m?cb:[]).map(e=>(0,K.jsx)(Ib,{type:`button`,onClick:()=>m?.(e),children:e},e)),m?null:(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Ib,{type:`button`,onClick:d,children:`Help Center`}),(0,K.jsx)(Ib,{type:`button`,onClick:f,children:`In-product`}),(0,K.jsx)(Ib,{type:`button`,$accent:!0,onClick:p,children:`Find my plan`})]})]}),D?null:(0,K.jsx)(Lb,{"aria-hidden":`true`})]}):n?(0,K.jsx)(Ob,{children:(0,K.jsxs)(kb,{children:[(0,K.jsx)(Mb,{src:`/plans-copilot-prototype/copilot-empty-state.svg`,alt:`Copilot`}),(0,K.jsx)(zb,{type:`button`,$bare:!0,"aria-label":`Close Copilot`,$left:`88%`,$top:`2.6%`,$width:`9%`,$height:`4.8%`,onClick:u}),(0,K.jsx)(zb,{type:`button`,$left:`6.5%`,$top:`45.5%`,$width:`31%`,$height:`5.3%`,onClick:d,children:`Help Center`}),(0,K.jsx)(zb,{type:`button`,$left:`39.7%`,$top:`45.5%`,$width:`27.5%`,$height:`5.3%`,onClick:f,children:`In-product`}),(0,K.jsx)(zb,{type:`button`,$accent:!0,$left:`6.5%`,$top:`51.8%`,$width:`29.5%`,$height:`5.3%`,onClick:p,children:`Find my plan`}),(0,K.jsxs)(Ab,{children:[(0,K.jsxs)(`label`,{children:[(0,K.jsx)(`span`,{children:`Ask about plans`}),(0,K.jsx)(`input`,{value:i,placeholder:``,onChange:e=>re(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),k())}})]}),(0,K.jsx)(jb,{type:`button`,"aria-label":`Send message`,onClick:k})]})]})}):s}),v?null:n&&A?(0,K.jsx)($y,{}):n&&!A?null:(0,K.jsx)(Bb,{$tall:!1,"aria-hidden":`true`}),n&&!A||v?null:(0,K.jsxs)(Vb,{$idle:n,$docked:A,children:[n&&A?(0,K.jsxs)(Rb,{children:[(0,K.jsx)(`strong`,{children:`Powered by AI`}),`AI content can be inaccurate or misleading. Review it carefully.`]}):null,(0,K.jsxs)(Hb,{$landing:n&&!A,$glow:A,children:[(0,K.jsxs)(Z,{children:[(0,K.jsx)(Z.Label,{hidden:!0,children:`Ask Copilot about plans`}),(0,K.jsx)(ol,{value:i,minRows:1,maxRows:4,placeholder:n&&!A?``:o,onChange:e=>re(e.target.value),onKeyDown:ie})]}),(0,K.jsx)(Ub,{type:`button`,$busy:a,$ready:!!i.trim()&&!a,"aria-label":a?`Stop generating`:`Send message`,onClick:a&&ne?ne:k,children:a?(0,K.jsx)(`span`,{"aria-hidden":`true`}):(0,K.jsx)(Cv,{"aria-hidden":`true`})})]})]})]})]})})})}function Gb(e){return e.assistant}var Kb=B.main`
  max-width: 1080px;
  margin: 0 auto;
  padding: 32px 24px 64px;
`,qb=B.div`
  display: flex;
  height: calc(100dvh - 56px);
  min-height: calc(100dvh - 56px);
  max-height: calc(100dvh - 56px);
  overflow: hidden;
`,Jb=B.div`
  flex: ${({$hidden:e})=>e?`0 0 0`:`1 1 auto`};
  min-width: 0;
  width: ${({$hidden:e})=>e?`0`:`auto`};
  height: 100%;
  max-height: 100%;
  overflow: ${({$hidden:e})=>e?`hidden`:`auto`};
  opacity: ${({$hidden:e})=>+!e};
  pointer-events: ${({$hidden:e})=>e?`none`:`auto`};
  scrollbar-width: none;
  -ms-overflow-style: none;
  cursor: ${({$inspect:e})=>e?`crosshair`:`auto`};
  transition:
    opacity 300ms cubic-bezier(0.4, 0, 0.2, 1),
    flex-basis 300ms cubic-bezier(0.4, 0, 0.2, 1),
    width 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
`,Yb=B.div`
  position: sticky;
  top: 0;
  z-index: 6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 16px;
  background: #f6f2fa;
  border-bottom: 1px solid #cdb3e6;
  color: #2f3130;
  font-size: 13px;
  line-height: 18px;

  button {
    flex: 0 0 auto;
    padding: 4px 10px;
    border: 0;
    border-radius: 999px;
    background: #ffffff;
    color: #8d59b1;
    font: inherit;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
  }
`,Xb=B.aside`
  position: relative;
  z-index: 8;
  flex: ${({$open:e,$fullscreen:t})=>e?t?`1 1 auto`:`0 0 360px`:`0 0 0`};
  order: ${({$edge:e})=>e===`left`?0:1};
  width: ${({$open:e,$fullscreen:t})=>e?t?`auto`:`360px`:`0`};
  max-width: ${({$open:e,$fullscreen:t})=>e?t?`none`:`360px`:`0`};
  height: 100%;
  min-width: 0;
  min-height: 0;
  margin-left: ${({$open:e,$fullscreen:t,$edge:n})=>e&&(t||n!==`left`)?`8px`:`0`};
  margin-right: ${({$open:e,$fullscreen:t,$edge:n})=>e&&(t||n===`left`)?`8px`:`0`};
  overflow: hidden;
  border-radius: ${({$fullscreen:e,$edge:t})=>e?`24px 24px 0 0`:t===`left`?`0 24px 0 0`:`24px 0 0 0`};
  background: #ffffff;
  pointer-events: ${({$open:e})=>e?`auto`:`none`};
  box-shadow: ${({$open:e})=>e?`0px 0px 4px 0px rgba(10, 13, 14, 0.16)`:`none`};
  transition:
    width 300ms cubic-bezier(0.4, 0, 0.2, 1),
    flex-basis 300ms cubic-bezier(0.4, 0, 0.2, 1),
    max-width 300ms cubic-bezier(0.4, 0, 0.2, 1),
    margin-left 300ms cubic-bezier(0.4, 0, 0.2, 1),
    margin-right 300ms cubic-bezier(0.4, 0, 0.2, 1),
    border-radius 300ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 200ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,Zb=B.div`
  position: absolute;
  inset: 0;
  width: auto;
  height: auto;

  > * {
    height: 100%;
    min-height: 0;
  }
`,Qb=B.section`
  display: grid;
  justify-items: center;
  gap: 8px;
  text-align: center;
  margin-bottom: 28px;

  h1 {
    margin: 0;
    color: ${({theme:e})=>e.palette.grey[800]};
    font-size: 22px;
    line-height: 30px;
  }
`,$b=B.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: ${({theme:e})=>e.palette.grey[800]};
  font-size: 13px;
  line-height: 18px;
`,ex=B.div`
  display: flex;
  align-items: center;
  padding-left: 8px;
`,tx=B.span`
  width: 29px;
  height: 29px;
  margin-left: -9px;
  border: 2px solid ${({theme:e})=>e.palette.white};
  border-radius: 50%;
  background: url(${({$image:e})=>e}) center / cover;
  box-shadow: 0 0 0 1px rgba(47, 57, 65, 0.08);
`,nx=B.button`
  border: 0;
  padding: 0;
  background: transparent;
  color: ${({theme:e})=>e.palette.blue[700]};
  font: inherit;
  text-decoration: underline;
  cursor: pointer;

  &:disabled {
    color: ${({theme:e})=>e.palette.grey[600]};
    cursor: default;
    text-decoration: none;
  }
`,rx=B.button`
  position: fixed;
  left: 24px;
  bottom: 24px;
  z-index: 30;
  display: grid;
  width: 64px;
  height: 64px;
  place-items: center;
  border: 0;
  border-radius: 50%;
  background: #0f120e;
  box-shadow: 0 16px 38px rgba(47, 57, 65, 0.22);
  cursor: ${({$inert:e})=>e?`default`:`pointer`};
  pointer-events: ${({$inert:e})=>e?`none`:`auto`};
  transition:
    box-shadow 180ms ease,
    transform 180ms ease;

  svg {
    color: ${({theme:e})=>e.palette.white};
    fill: currentColor;
  }

  .chat-icon,
  .down-arrow {
    display: grid;
    place-items: center;
  }

  .chat-icon svg {
    width: 40px;
    height: 40px;
  }

  .down-arrow {
    transform: rotate(-90deg);
  }

  .down-arrow svg {
    width: 22px;
    height: 22px;
  }

  &:hover,
  &:focus-visible {
    box-shadow: ${({$inert:e})=>e?`0 16px 38px rgba(47, 57, 65, 0.22)`:`0 18px 42px rgba(47, 57, 65, 0.28)`};
    transform: ${({$inert:e})=>e?`none`:`translateY(-2px)`};
  }
`,ix=B.aside`
  position: fixed;
  left: 24px;
  bottom: 102px;
  z-index: 30;
  width: min(400px, calc(100vw - 48px));
  height: min(710px, calc(100vh - 128px));
  overflow: hidden;
  border-radius: 24px;
  background: ${({theme:e})=>e.palette.white};
  box-shadow: 0 22px 70px rgba(47, 57, 65, 0.26);
  opacity: ${({$open:e})=>+!!e};
  pointer-events: ${({$open:e})=>e?`auto`:`none`};
  transform: translateY(${({$open:e})=>e?`0`:`14px`}) scale(${({$open:e})=>e?1:.96});
  transform-origin: bottom left;
  visibility: ${({$open:e})=>e?`visible`:`hidden`};
  transition:
    opacity 220ms ease,
    transform 220ms cubic-bezier(0.22, 1, 0.36, 1),
    visibility 220ms ease;
`,ax=B.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
  padding: 12px 16px;
  background: #0f120e;
  color: ${({theme:e})=>e.palette.white};

  h2,
  p {
    margin: 0;
  }

  h2 {
    font-size: 14px;
    line-height: 20px;
  }

  p {
    color: rgba(255, 255, 255, 0.72);
    font-size: 12px;
    line-height: 17px;
  }
`,ox=B.div`
  display: flex;
  gap: 12px;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
  }
`,sx=B(q)`
  && {
    width: 32px;
    height: 32px;
    min-height: 32px;
    padding: 0;
    border-color: transparent;
    border-radius: 50%;
    background: transparent;
    color: ${({theme:e})=>e.palette.white};
  }

  svg {
    width: 14px;
    height: 14px;
    stroke: currentColor;
  }
`,cx=B.div`
  display: flex;
  flex-direction: column;
  height: calc(min(710px, 100vh - 128px) - 60px);
  min-height: 0;
  overflow: hidden;
  background: ${({theme:e})=>e.palette.white};
`,lx=B.div`
  display: grid;
  align-content: start;
  flex: 1 1 auto;
  min-height: 0;
  overflow: auto;
`,ux=B.button`
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 12px;
  width: 100%;
  padding: 18px 20px;
  border: 0;
  border-bottom: 1px solid ${({theme:e})=>e.palette.grey[200]};
  background: ${({theme:e})=>e.palette.white};
  color: ${({theme:e})=>e.palette.grey[900]};
  font: inherit;
  text-align: left;
  cursor: pointer;

  &:hover,
  &:focus-visible {
    background: ${({theme:e})=>e.palette.grey[100]};
    outline: none;
  }

  h3,
  p {
    margin: 0;
  }

  h3 {
    font-size: 12px;
    line-height: 18px;
  }

  p {
    margin-top: 4px;
    color: ${({theme:e})=>e.palette.grey[800]};
    font-size: 12px;
    line-height: 18px;
  }
`,dx=B.img.attrs({src:`https://www.gravatar.com/avatar/00000000000000000000000000000000.png?s=200&d=mm`,alt:``})`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: ${({theme:e})=>e.palette.grey[300]};
  object-fit: cover;
`,fx=B.div`
  display: flex;
  gap: 8px;
  align-items: baseline;

  span {
    color: ${({theme:e})=>e.palette.grey[600]};
    font-size: 12px;
  }
`,px=B.div`
  padding: 18px 20px 10px;
`,mx=B(q)`
  && {
    min-height: 42px;
    border: 0;
    border-radius: 999px;
    background: #d7ff5f;
    color: ${({theme:e})=>e.palette.grey[900]};
    font-weight: ${({theme:e})=>e.fontWeights.regular};
  }

  &&:hover,
  &&:focus {
    background: #ccf452;
    color: ${({theme:e})=>e.palette.grey[900]};
  }
`,hx=B.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 20px 24px;
  color: ${({theme:e})=>e.palette.grey[600]};
  font-size: 12px;
  line-height: 16px;

  svg {
    flex: 0 0 auto;
    width: 14px;
    height: 14px;
  }
`,gx=B.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: #0f120e;
  color: ${({theme:e})=>e.palette.white};

  h2 {
    margin: 0;
    font-size: 14px;
    line-height: 20px;
  }
`,_x=B(q)`
  &&& {
    width: 32px;
    height: 32px;
    min-height: 32px;
    padding: 0;
    border: 0;
    border-radius: 0;
    background: transparent;
    color: ${({theme:e})=>e.palette.white};
  }

  svg {
    width: 18px;
    height: 18px;
  }
`,vx=B.div`
  display: grid;
  align-content: start;
  flex: 1 1 auto;
  min-height: 0;
  gap: ${({$bare:e})=>e?`14px`:`10px`};
  overflow: auto;
  padding: ${({$bare:e})=>e?`18px 16px 20px`:`14px 16px`};
`,yx=B.div`
  display: grid;
  gap: 12px;
`,bx=B.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  align-items: center;
  gap: 10px;
  margin: 4px 0;
  color: ${({theme:e})=>e.palette.red[600]};
  font-size: 12px;
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  line-height: 16px;
  text-align: center;

  &::before,
  &::after {
    content: '';
    height: 1px;
    background: currentColor;
  }
`,xx=B.div`
  color: ${({theme:e})=>e.palette.grey[700]};
  font-size: 13px;
  line-height: 18px;
  text-align: center;
`,Sx=B.div`
  margin-left: 62px;
  color: ${({theme:e})=>e.palette.grey[700]};
  font-size: 13px;
  line-height: 18px;
`,Cx=B.div`
  display: grid;
  grid-template-columns: ${({$bare:e})=>e?`minmax(0, 1fr)`:`48px minmax(0, 1fr)`};
  gap: 12px;
  align-items: start;
`,wx=B.div`
  display: grid;
  gap: 2px;
  justify-items: start;
`;B.div`
  margin-top: 8px;
  color: ${({theme:e})=>e.palette.grey[700]};
  font-size: 13px;
  line-height: 18px;
`;var Tx=B.div`
  display: grid;
  gap: 6px;
  max-width: 320px;
  color: ${({theme:e})=>e.palette.grey[800]};
  font-size: 14px;
  line-height: 22px;

  p {
    margin: 0;
  }

  strong {
    color: ${({theme:e})=>e.palette.grey[900]};
    font-weight: ${({theme:e})=>e.fontWeights.semibold};
  }
`,Ex=B.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 8px;
  margin: ${({$bare:e})=>e?`2px 0 8px`:`4px 0 12px 60px`};
`,Dx=B.button`
  min-height: 34px;
  padding: 7px 14px;
  border: 1px solid ${({theme:e})=>e.palette.grey[300]};
  border-radius: 999px;
  background: ${({theme:e})=>e.palette.purple[100]};
  color: ${({theme:e})=>e.palette.grey[800]};
  font: inherit;
  font-size: 13px;
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  cursor: pointer;
`,Ox=B.div`
  max-width: ${({$fromBot:e})=>e?`86%`:`74%`};
  justify-self: ${({$fromBot:e})=>e?`start`:`end`};
  padding: 10px 14px;
  border-radius: 18px;
  background: ${({$fromBot:e,theme:t})=>{let n=Gb(t);return n?e?`transparent`:n.userBubble:e?t.palette.grey[100]:`#0f120e`}};
  color: ${({$fromBot:e,theme:t})=>{let n=Gb(t);return n?e?t.palette.grey[800]:n.userBubbleText:e?t.palette.grey[900]:t.palette.white}};
  font-size: 13px;
  line-height: 19px;
  overflow-wrap: anywhere;
  word-break: break-word;

  strong {
    font-weight: ${({theme:e})=>e.fontWeights.semibold};
  }
`,kx=B(kf)`
  display: grid;
  gap: ${({$bare:e,$preview:t})=>e?`6px`:t?`0`:`20px`};
  width: 100%;
  max-width: 100%;
  justify-self: start;
  overflow: ${({$preview:e})=>e?`hidden`:`visible`};
  padding: ${({$bare:e,$preview:t})=>e?`0`:t?`0 0 12px`:`10px 10px 9px`};
  border: ${({$bare:e,theme:t})=>e?`0`:`1px solid ${t.palette.grey[300]}`};
  border-radius: ${({$bare:e,$preview:t})=>e?`0`:t?`16px`:`12px`};
  background: ${({$bare:e,theme:t})=>e?`transparent`:t.palette.white};
  box-shadow: none;

  && {
    padding: ${({$bare:e,$preview:t})=>e?`0`:t?`0 0 12px`:`10px 10px 9px`};
    border: ${({$bare:e,theme:t})=>e?`0`:`1px solid ${t.palette.grey[300]}`};
    background: ${({$bare:e,theme:t})=>e?`transparent`:t.palette.white};
    box-shadow: none;
  }
`,Ax=B.div`
  display: grid;
  gap: 20px;
  padding: 16px 16px 4px;
`,jx=B.p`
  margin: 0;
  color: ${({theme:e})=>e.palette.grey[900]};
  font-size: 16px;
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  line-height: 24px;
`,Mx=B.p`
  margin: 0;
  color: ${({theme:e})=>e.palette.grey[800]};
  font-size: 13px;
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  line-height: 18px;
`,Nx=B.div`
  display: grid;
  gap: 16px;
`,Px=B.div`
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr);
  column-gap: 16px;
  align-items: start;

  strong {
    padding-top: 2px;
    color: ${({theme:e})=>e.palette.grey[600]};
    font-size: 12px;
    font-weight: ${({theme:e})=>e.fontWeights.semibold};
    line-height: 20px;
  }

  span {
    color: ${({theme:e})=>e.palette.grey[800]};
    font-size: 14px;
    line-height: 22px;
  }
`,Fx=B.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
`,Ix=B.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border: 0;
  border-radius: 999px;
  background: ${({theme:e})=>e.palette.grey[200]};
  color: ${({theme:e})=>e.palette.grey[700]};
  font-size: 13px;
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  line-height: 18px;
  cursor: default;
  pointer-events: none;
  user-select: text;
`,Lx=B.strong`
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
`,Rx=B.span`
  display: inline-flex;
  align-items: center;
  margin: 0 2px;
  padding: 2px 8px;
  border: 0;
  border-radius: 999px;
  background: ${({theme:e})=>e.palette.grey[200]};
  color: ${({theme:e})=>e.palette.grey[700]};
  font-size: 11px;
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  line-height: 16px;
  white-space: nowrap;
  cursor: default;
  pointer-events: none;
`,zx=B.div`
  display: grid;
  gap: ${({$compact:e})=>e?`0`:`12px`};
  justify-self: stretch;
  padding: ${({$compact:e})=>e?`10px 12px`:`14px`};
  border: 1px solid ${({theme:e})=>e.palette.purple[200]};
  border-radius: 16px;
  background: linear-gradient(
    180deg,
    ${({theme:e})=>e.palette.purple[100]} 0%,
    ${({theme:e})=>e.palette.white} 78%
  );
`,Bx=B.strong`
  color: ${({theme:e})=>e.palette.grey[900]};
  font-size: 13px;
  line-height: 18px;
`,Vx=B.div`
  display: grid;
  gap: 10px;
`,Hx=B.div`
  display: grid;
  grid-template-columns: 24px minmax(0, 1fr);
  gap: 9px;
  align-items: center;
  color: ${({$state:e,theme:t})=>e===`pending`?t.palette.grey[600]:t.palette.grey[800]};
  font-size: 11px;
  font-weight: ${({$state:e,theme:t})=>e===`active`?t.fontWeights.semibold:t.fontWeights.regular};
  line-height: 15px;
`,Ux=B.span`
  display: grid;
  width: 18px;
  height: 18px;
  place-items: center;
  justify-self: center;
  border: ${({$state:e,theme:t})=>e===`active`?`0`:e===`done`?`1.5px solid ${Gb(t)?.inkBright??t.palette.green[600]}`:`1.5px solid ${t.palette.grey[300]}`};
  border-radius: 50%;
  background: ${({$state:e,theme:t})=>e===`done`?Gb(t)?.inkBright??t.palette.green[600]:`transparent`};
  color: ${({$state:e,theme:t})=>e===`done`?t.palette.white:t.palette.purple[700]};

  svg {
    width: ${({$state:e})=>e===`active`?`18px`:`12px`};
    height: ${({$state:e})=>e===`active`?`18px`:`12px`};
  }
`,Wx=B.div`
  height: 5px;
  overflow: hidden;
  border-radius: 999px;
  background: ${({theme:e})=>e.palette.grey[200]};

  span {
    display: block;
    height: 100%;
    border-radius: inherit;
    background: ${({theme:e})=>Gb(e)?.inkBright??e.palette.purple[600]};
    transition: width 220ms ease;
  }
`,Gx=B.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${sb.thinking};
  font-size: 13px;
  line-height: 18px;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${sb.thinking};
  }
`,Kx=B.div`
  margin: ${({$flush:e})=>e?`0`:`-12px -12px 8px`};
  padding: 12px 16px;
  border-radius: ${({$flush:e})=>e?`0`:`16px 16px 0 0`};
  background: ${({theme:e})=>e.palette.purple[100]};
  color: ${({theme:e})=>e.palette.grey[700]};
  font-size: 13px;
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  line-height: 18px;
`,qx=B.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`,Jx=B.span`
  padding: 4px 8px;
  border: 1px solid ${({theme:e})=>e.palette.grey[200]};
  border-radius: 999px;
  background: ${({theme:e})=>e.palette.white};
  color: ${({theme:e})=>e.palette.grey[700]};
  font-size: 10px;
  line-height: 13px;
`,Yx=B.div`
  display: grid;
  gap: 8px;
  margin-top: 16px;
`,Xx=B.p`
  margin: 0;
  color: ${({theme:e})=>e.palette.grey[800]};
  font-size: 13px;
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  line-height: 18px;
`,Zx=B.div`
  display: grid;
  gap: 8px;
  overflow: hidden;
  padding: 12px;
  border: 1px solid ${({theme:e})=>Gb(e)?.cardBorder??e.palette.green[300]};
  border-radius: 16px;
  background: ${({theme:e})=>Gb(e)?`linear-gradient(180deg, #ffffff 0%, #ffffff 58%, #F6F2FA 100%)`:e.palette.white};

  h3,
  p {
    margin: 0;
  }

  h3 {
    color: ${({theme:e})=>e.palette.grey[900]};
    font-size: 16px;
    line-height: 21px;
  }

  p {
    color: ${({theme:e})=>e.palette.grey[700]};
    font-size: 11px;
    line-height: 16px;
  }
`,Qx=B.div`
  display: grid;
  gap: 12px;
  padding: 10px;
  border: 1px solid ${({theme:e})=>e.palette.grey[200]};
  border-radius: 14px;
  background: ${({theme:e})=>e.palette.white};
`,$x=B.p`
  margin: 0;
  color: ${({theme:e})=>e.palette.grey[800]};
  font-size: 12px;
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  line-height: 16px;
`,eS=B.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
`,tS=B.div`
  display: grid;
  align-content: start;
  gap: 6px;
  padding: 8px;
  border: 1px solid ${({theme:e})=>e.palette.grey[200]};
  border-radius: 12px;
  background: ${({theme:e})=>e.palette.grey[100]};

  h4 {
    margin: 0;
    color: ${({theme:e})=>e.palette.grey[900]};
    font-size: 12px;
    line-height: 16px;
  }

  p {
    margin: 0;
    color: ${({theme:e})=>e.palette.grey[700]};
    font-size: 10px;
    line-height: 13px;
  }
`,nS=B.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,rS=B.span`
  display: inline-flex;
  padding: 3px 8px;
  border: 0;
  border-radius: 999px;
  background: ${({theme:e})=>e.palette.grey[200]};
  color: ${({theme:e})=>e.palette.grey[700]};
  font-size: 10px;
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  line-height: 14px;
  cursor: default;
  pointer-events: none;
`,iS=B.div`
  display: grid;
  gap: 10px;
  padding: 12px;
  border: 1px solid ${({theme:e})=>e.palette.grey[200]};
  border-radius: 12px;
  background: linear-gradient(
    180deg,
    ${({theme:e})=>Gb(e)?.cardWash??e.palette.grey[100]} 0%,
    ${({theme:e})=>e.palette.white} 86%
  );
`,aS=B.strong`
  color: ${({theme:e})=>e.palette.grey[900]};
  font-size: 10px;
  line-height: 13px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,oS=B(df)`
  && {
    width: 100%;
    table-layout: fixed;
  }

  [data-garden-id='tables.header_cell'],
  [data-garden-id='tables.cell'] {
    padding: 6px 8px;
    font-size: 11px;
    line-height: 14px;
    vertical-align: top;
  }

  [data-garden-id='tables.header_cell'] {
    color: ${({theme:e})=>e.palette.grey[800]};
    font-weight: ${({theme:e})=>e.fontWeights.semibold};
  }

  [data-garden-id='tables.cell'] {
    color: ${({theme:e})=>e.palette.grey[800]};
  }
`,sS=B.span`
  color: ${({theme:e})=>e.palette.grey[600]};
  font-size: 11px;
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  line-height: 14px;
`,cS=B.div`
  display: grid;
  gap: 6px;
`,lS=B.span`
  color: ${({theme:e})=>e.palette.grey[700]};
  font-size: 10px;
  line-height: 13px;

  strong {
    color: ${({theme:e})=>e.palette.grey[900]};
  }
`,uS=B.p`
  margin: 0;
  color: ${({theme:e})=>e.palette.grey[800]};
  font-size: 12px;
  line-height: 18px;
`,dS=B.span`
  margin: 0 7px;
  color: ${({theme:e})=>e.palette.grey[400]};
  font-weight: ${({theme:e})=>e.fontWeights.regular};
`;function fS(e){return e.map((e,t)=>(0,K.jsxs)(`span`,{children:[t>0?(0,K.jsx)(dS,{"aria-hidden":`true`,children:`|`}):null,e]},`${e}-${t}`))}var pS=B.div`
  display: grid;
  gap: 10px;
  padding: 10px;
  border: 1px solid ${({theme:e})=>e.palette.blue[200]};
  border-radius: 14px;
  background: linear-gradient(
    180deg,
    ${({theme:e})=>e.palette.blue[100]} 0%,
    ${({theme:e})=>e.palette.white} 78%
  );
`,mS=B.div`
  display: grid;
  gap: 10px;
  padding: 0;
  border: 0;
  background: transparent;
`,hS=B.p`
  margin: 0;
  color: ${({theme:e})=>e.palette.grey[900]};
  font-size: 14px;
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  line-height: 20px;
`,gS=B.p`
  margin: 0;
  color: ${({theme:e})=>e.palette.grey[700]};
  font-size: 13px;
  line-height: 18px;
`,_S=B.div`
  position: relative;

  [data-garden-id='forms.field'] {
    margin: 0;
    min-width: 0;
  }

  [data-garden-id='forms.input'] {
    padding-right: 52px;
  }
`,vS=B.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,yS=B(Q)`
  && {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    min-width: 0;
    min-height: 24px;
    height: 24px;
    padding: 0 10px 0 8px;
    border: 1px solid ${({theme:e})=>e.palette.grey[300]} !important;
    border-radius: 999px;
    background: ${({theme:e})=>e.palette.purple[100]} !important;
    color: ${({theme:e})=>e.palette.grey[800]} !important;
    font-size: 12px;
    font-weight: ${({theme:e})=>e.fontWeights.regular};
    line-height: 24px;
    cursor: pointer;
    user-select: none;
  }

  svg {
    width: 12px;
    height: 12px;
    flex-shrink: 0;
  }

  &&:hover,
  &&:focus-visible {
    background: ${({theme:e})=>Gb(e)?.washStrong??e.palette.purple[200]} !important;
    outline: none;
    box-shadow: none;
  }
`,bS=B.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 6px;
`,xS=B.button`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 7px;
  align-items: start;
  min-height: 48px;
  padding: 8px;
  border: 1px solid ${({theme:e})=>e.palette.grey[300]};
  border-radius: 12px;
  background: ${({$selected:e,theme:t})=>e?t.palette.purple[200]:t.palette.purple[100]};
  color: ${({theme:e})=>e.palette.grey[800]};
  cursor: pointer;
  text-align: left;

  span {
    font-size: 11px;
    font-weight: ${({theme:e})=>e.fontWeights.semibold};
    line-height: 14px;
  }

  small {
    display: block;
    margin-top: 2px;
    color: ${({theme:e})=>e.palette.grey[600]};
    font-size: 10px;
    font-weight: ${({theme:e})=>e.fontWeights.regular};
    line-height: 13px;
  }
`,SS=B.div`
  display: grid;
  place-items: center;
  width: 14px;
  height: 14px;
  border: 1px solid ${({$selected:e,theme:t})=>e?Gb(t)?.inkBright??t.palette.blue[600]:t.palette.grey[400]};
  border-radius: 4px;
  background: ${({$selected:e,theme:t})=>e?Gb(t)?.inkBright??t.palette.blue[600]:t.palette.white};
  color: ${({theme:e})=>e.palette.white};

  &::after {
    content: '';
    width: 6px;
    height: 3px;
    border-bottom: 1px solid currentColor;
    border-left: 1px solid currentColor;
    opacity: ${({$selected:e})=>+!!e};
    transform: rotate(-45deg) translateY(-1px);
  }
`,CS=B.div`
  display: grid;
  gap: 8px;
  padding: 10px;
  border: 1px solid ${({theme:e})=>e.palette.grey[200]};
  border-radius: 14px;
  background: ${({theme:e})=>e.palette.white};
`,wS=B.h4`
  margin: 0;
  color: ${({theme:e})=>e.palette.grey[900]};
  font-size: 13px;
  line-height: 17px;
`,TS=B.div`
  display: grid;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.palette.grey[200]};
  border-radius: 12px;
`,ES=B.div`
  display: grid;
  grid-template-columns: 86px 1fr;
  gap: 8px;
  padding: 8px 9px;
  background: ${({theme:e})=>e.palette.white};
  color: ${({theme:e})=>e.palette.grey[700]};
  font-size: 11px;
  line-height: 15px;

  & + & {
    border-top: 1px solid ${({theme:e})=>e.palette.grey[200]};
  }

  strong {
    color: ${({theme:e})=>e.palette.grey[900]};
    font-size: 11px;
    line-height: 15px;
  }
`,DS=B.div`
  justify-self: start;
  padding: 4px 10px;
  border-radius: 999px;
  background: ${({theme:e})=>Gb(e)?.inkBright??e.palette.green[700]};
  color: ${({theme:e})=>e.palette.white};
  font-size: 11px;
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  line-height: 14px;
`,OS=B.div`
  display: grid;
  gap: 3px;
  margin-bottom: 8px;
  padding: 8px 10px;
  border: 1px solid ${({theme:e})=>Gb(e)?.cardBorder??e.palette.green[200]};
  border-radius: 12px;
  background: linear-gradient(
    180deg,
    ${({theme:e})=>Gb(e)?.washStrong??e.palette.green[100]} 0%,
    ${({theme:e})=>e.palette.white} 78%
  );
  color: ${({theme:e})=>e.palette.grey[700]};
  font-size: 11px;
  line-height: 15px;

  strong {
    color: ${({theme:e})=>e.palette.grey[900]};
    font-size: 11px;
    line-height: 14px;
  }
`,kS=B.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,AS=B.div`
  display: grid;
  gap: 10px;
  padding: 12px;
  border: 1px solid ${({theme:e})=>e.palette.purple[200]};
  border-radius: 14px;
  background: linear-gradient(
    180deg,
    ${({theme:e})=>e.palette.purple[100]} 0%,
    ${({theme:e})=>e.palette.white} 78%
  );
`,jS=B.h4`
  margin: 0;
  color: ${({theme:e})=>e.palette.grey[900]};
  font-size: 13px;
  line-height: 17px;
`,MS=B.div`
  display: grid;
  gap: 2px;
  padding: 9px 10px;
  border: 1px solid ${({theme:e})=>e.palette.purple[200]};
  border-radius: 12px;
  background: ${({theme:e})=>e.palette.white};
  color: ${({theme:e})=>e.palette.grey[700]};
  font-size: 11px;
  line-height: 15px;

  strong {
    color: ${({theme:e})=>e.palette.grey[900]};
    font-size: 14px;
    line-height: 18px;
  }
`,NS=B.ol`
  display: grid;
  gap: 8px;
  margin: 0;
  padding: 0 4px;
  list-style: none;
`,PS=B.li`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${({$state:e,theme:t})=>e===`pending`?t.palette.grey[600]:t.palette.grey[800]};
  font-size: 11px;
  line-height: 15px;

  &::before {
    content: ${({$state:e})=>e===`done`?`'✓'`:e===`error`?`'!'`:`''`};
    display: grid;
    flex: 0 0 auto;
    width: 15px;
    height: 15px;
    place-items: center;
    border: 1px solid
      ${({$state:e,theme:t})=>e===`done`?Gb(t)?.inkBright??t.palette.green[600]:e===`error`?t.palette.red[500]:e===`active`?Gb(t)?.inkBright??t.palette.blue[500]:t.palette.grey[300]};
    border-radius: 50%;
    background: ${({$state:e,theme:t})=>e===`done`?Gb(t)?.inkBright??t.palette.green[600]:e===`error`?t.palette.red[500]:t.palette.white};
    color: ${({theme:e})=>e.palette.white};
    font-size: 10px;
    font-weight: ${({theme:e})=>e.fontWeights.semibold};
    line-height: 1;
    box-shadow: ${({$state:e,theme:t})=>e===`active`?`inset 0 0 0 4px ${Gb(t)?.chipBg??t.palette.blue[200]}`:`none`};
  }
`;B.details`
  border: 1px solid ${({theme:e})=>e.palette.grey[200]};
  border-radius: 12px;
  background: ${({theme:e})=>e.palette.white};

  summary {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 10px;
    color: ${({theme:e})=>e.palette.grey[800]};
    font-size: 11px;
    font-weight: ${({theme:e})=>e.fontWeights.semibold};
    line-height: 15px;
    cursor: pointer;
    list-style: none;

    &::-webkit-details-marker,
    &::marker {
      display: none;
    }

    svg {
      flex: 0 0 auto;
      width: 12px;
      height: 12px;
      color: ${({theme:e})=>e.palette.grey[600]};
      transition: transform 160ms ease;
    }
  }

  &[open] summary svg {
    transform: rotate(180deg);
  }
`;var FS=B.ul`
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 12px 10px 12px 23px;
  color: ${({theme:e})=>e.palette.grey[700]};
  font-size: 11px;
  line-height: 17px;
`,IS=B.p`
  margin: 0;
  padding: 8px 10px;
  border: 1px solid
    ${({$tone:e,theme:t})=>e===`success`?Gb(t)?.cardBorder??t.palette.green[300]:e===`error`?t.palette.red[300]:Gb(t)?.cardBorder??t.palette.grey[200]};
  border-radius: 10px;
  background: ${({$tone:e,theme:t})=>e===`success`?Gb(t)?.cardWash??t.palette.green[100]:e===`error`?t.palette.red[100]:t.palette.white};
  color: ${({theme:e})=>e.palette.grey[800]};
  font-size: 11px;
  line-height: 15px;

  strong {
    font-weight: ${({theme:e})=>e.fontWeights.semibold};
  }
`,LS=B.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
`,RS=B.input`
  min-height: 30px;
  padding: 4px 10px;
  border: 1px solid ${({$invalid:e,theme:t})=>e?t.palette.red[400]:t.palette.grey[300]};
  border-radius: 999px;
  background: ${({theme:e})=>e.palette.white};
  color: ${({theme:e})=>e.palette.grey[900]};
  font: inherit;
  font-size: 12px;
`,zS=B.textarea`
  display: block;
  width: 100%;
  min-height: 72px;
  padding: 8px 10px;
  border: 1px solid ${({theme:e})=>e.palette.grey[300]};
  border-radius: 12px;
  background: ${({theme:e})=>e.palette.white};
  color: ${({theme:e})=>e.palette.grey[900]};
  font: inherit;
  font-size: 12px;
  line-height: 18px;
  resize: vertical;
`,BS=B.div`
  display: flex;
  justify-content: flex-end;
`,VS=B.div`
  display: grid;
  gap: 8px;
`,HS=B(q)`
  &&& {
    height: 28px;
    min-height: 28px;
    padding: 2px 10px;
    border-radius: 999px;
    font-size: 11px;
    line-height: 14px;
  }
`,US=B.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  width: 100%;
  padding: 0;
`,WS=B(Q)`
  && {
    display: inline-flex;
    flex: 0 0 auto;
    min-width: 0;
    min-height: 32px;
    height: 32px;
    padding: 0 14px;
    border: 1px solid ${({theme:e})=>e.palette.grey[300]} !important;
    border-radius: 999px;
    background: ${({theme:e})=>e.palette.purple[100]} !important;
    color: ${({theme:e})=>e.palette.grey[800]};
    font-size: 13px;
    font-weight: ${({theme:e})=>e.fontWeights.regular};
    line-height: 32px;
    cursor: pointer;
    user-select: none;
  }

  &&:hover,
  &&:focus-visible {
    background: ${({theme:e})=>e.palette.purple[200]} !important;
    color: ${({theme:e})=>e.palette.grey[800]};
    box-shadow: none;
    outline: none;
  }

  &&[aria-disabled='true'] {
    cursor: default;
    opacity: 0.5;
  }
`,GS=B.div`
  display: grid;
  flex: 0 0 auto;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 10px;
  align-items: center;
  padding: 12px 18px 14px;

  [data-garden-id='forms.field'] {
    margin: 0;
    min-width: 0;
  }
`,KS=B.div`
  position: relative;

  [data-garden-id='forms.textarea']:not([aria-hidden]) {
    display: block;
    width: 100%;
    min-height: ${({$expanded:e})=>e?`88px`:`48px`};
    max-height: 132px;
    padding: ${({$expanded:e})=>e?`14px 52px 14px 16px`:`12px 16px`};
    border: 1px solid ${({$expanded:e,theme:t})=>e?`#0f120e`:t.palette.grey[300]};
    border-radius: 28px;
    background: ${({$expanded:e,theme:t})=>e?t.palette.white:t.palette.grey[100]};
    color: ${({theme:e})=>e.palette.grey[900]};
    font: inherit;
    font-size: 14px;
    line-height: 20px;
    box-shadow: none;
    transition: min-height 160ms ease, border-color 120ms ease, padding 160ms ease, background-color 160ms ease;
  }

  [data-garden-id='forms.textarea']:not([aria-hidden]):focus,
  [data-garden-id='forms.textarea']:not([aria-hidden]):focus-visible {
    border-color: #0f120e;
    background: ${({theme:e})=>e.palette.white};
    box-shadow: none;
    outline: none;
  }
`,qS=B.button`
  position: absolute;
  top: 50%;
  right: 8px;
  display: grid;
  width: 36px;
  height: 36px;
  place-items: center;
  border: 0;
  padding: 0;
  background: transparent;
  color: #0f120e;
  transform: translateY(-50%);
  cursor: pointer;

  svg {
    width: 36px;
    height: 36px;
  }

  &:hover {
    color: ${({theme:e})=>e.palette.grey[700]};
  }
`,JS=B.button`
  display: grid;
  width: 32px;
  height: 48px;
  place-items: center;
  border: 0;
  background: transparent;
  color: #0f120e;
  cursor: pointer;

  svg {
    width: 22px;
    height: 22px;
  }
`,YS=3200,XS=1600,ZS={session:{title:`Finding the clearest answer`,steps:[`Reading your question`,`Checking plan and feature details`,`Putting the answer in plain language`]},plan:{title:`Finding your best-fit plan`,steps:[`Reviewing what you need`,`Matching needs to included features`,`Preparing the plan and price`]},feature:{title:`Finding this feature`,steps:[`Finding this feature`]},comparison:{title:`Looking for the available plans`,steps:[`Looking for the available plans`]},compareSelected:{title:`Comparing selected plans`,steps:[`Comparing selected plans`]},sales:{title:`Preparing your sales request`,steps:[`Reviewing what you shared`,`Summarizing your priorities`,`Adding the recommended plan and price`]},delivery:{title:`Sending your request`,steps:[`Sending your request`]}};function QS(e){let t=e.toLowerCase();return t.includes(`compare`)||t.includes(`difference`)||t.includes(` vs `)?/\b(suite|support)\b/.test(t)?`compareSelected`:`comparison`:t.includes(`feature`)||t.includes(`what does`)||t.includes(`includes`)?`feature`:t.includes(`sales`)||t.includes(`handoff`)?`sales`:t.includes(`recommend`)||t.includes(`right plan`)||t.includes(`fit`)?`plan`:`session`}function $S(e=`session`){let t=e===`delivery`||e===`feature`||e===`comparison`||e===`compareSelected`?XS:YS;return new Promise(e=>window.setTimeout(e,t))}var eC={feature:{title:`Help Center plan details`,date:`Sep 8`,prompt:`Which plan includes Help Center?`,plan:`team`,answer:`Help Center is available from Suite Team. Customers can find answers in articles, while AI agents use the same knowledge to resolve common requests.`,confirmed:`Suite Team includes Help Center, AI agents, and support across channels.`,assumed:`Self-service and faster answers are priorities for your team.`,unknown:`Your article volume and language needs can help refine the setup.`},recommend:{title:`Find the right plan`,date:`Sep 8`,prompt:`Help me choose a plan.`,plan:`team`,answer:`Suite Team is a good starting point for automating service with AI and supporting customers across email, messaging, live chat, voice, and Help Center.`,confirmed:`Suite Team includes AI agents, Help Center, messaging, live chat, voice, and omnichannel routing.`,assumed:`Your priority is bringing core support channels and AI into one workspace.`,unknown:`Reporting, routing, and governance needs can help refine the recommendation.`},compare:{title:`Compare Growth and Professional`,date:`Sep 7`,prompt:`What is the difference between Suite Growth and Suite Professional?`,plan:`growth`,answer:`Suite Growth helps improve customer experience with SLAs and CSAT. Suite Professional adds the AI, data, routing, and customization tools needed to optimize operations.`,confirmed:`Suite Growth includes SLAs and CSAT. Suite Professional adds skills-based routing, Copilot, and advanced reporting.`,assumed:`You are weighing customer feedback tools against advanced operational controls.`,unknown:`Your routing, reporting, and customization needs can clarify the better fit.`},sales:{title:`Continue with sales`,date:`Aug 28`,prompt:`Share my plan questions with sales.`,plan:`enterprise`,answer:`I can send sales your priorities, recommended plan, price, requested features, and open questions so they can continue from here.`,confirmed:`Your conversation and plan recommendation will be included.`,assumed:`You may want help with pricing, purchasing, or rollout details.`,unknown:`Sales can confirm contract terms, regional availability, and rollout timing.`}},tC=[`Explore a feature`,`Find my plan`,`Compare plans`,`Contact sales`],nC=[`Help me pick a plan`,`What is this?`,`Talk to sales or support`],rC=[`Contact sales`,`Contact support`,`Help me pick a plan`],iC=[`Compare plans`,`Explore a feature`,`Find my plan`,`What is this?`],aC=[{name:`App Builder`,hue:`orange`,Icon:xv},{name:`Quick reports`,hue:`azure`,Icon:yv},{name:`Copilot writing tools`,hue:`purple`,Icon:wv},{name:`CSAT`,hue:`yellow`,Icon:Sv},{name:`SLA`,hue:`pink`,Icon:bv},{name:`Help Center`,hue:`green`,Icon:gp},{name:`AI agents`,hue:`grey`,Icon:Tv}],oC=`Ankit`;function sC(){let e=new Date().getHours();return e<12?`Good morning`:e<17?`Good afternoon`:`Good evening`}var cC=/\b(?:Suite Professional|Suite Enterprise|Suite Growth|Suite Team|Support Professional|Support Enterprise|Support Team|Help Center|live chat|messaging|voice|email|ZD-\d+)\b|[^\s@]+@[^\s@]+\.[^\s@]+/gi;function lC(e){let t=e.toLowerCase();return t===`email`?`email`:t===`messaging`?`messaging`:t===`live chat`?`chat`:t===`voice`?`voice`:`help`}function uC(e){return/^ZD-\d+$/i.test(e)?`ticket`:e.includes(`@`)?`email`:/^(suite|support)\s/i.test(e)?`plan`:`channel`}function dC(e){let t=e.split(/(?<=[.!?])\s+/).map(e=>e.trim()).filter(Boolean),n=t[0]??e,r=t.slice(2,4),i=[`Also`,`Next`],a=[...e.matchAll(cC)].map(e=>e[0]),o=e.match(/\$\d+(?:\s+per agent[^.]*)?/i);return{headline:n,subtitle:t[1],facts:r.map((e,t)=>({label:i[t]??`Note`,value:e})),chips:[...new Set(a)].slice(0,6),price:o?.[0]}}function fC({text:e,digest:t,preview:n}){let r=t??dC(e),i=r.facts.find(e=>e.label===`Why`&&e.value),a=r.facts.filter(e=>e.label&&e.value&&e.label!==`Why`).slice(0,3),o=r.subtitle??i?.value,s=!!o&&!a.length&&!r.chips.length&&!r.price&&!n,c=(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(jx,{children:pC(r.headline)}),o?(0,K.jsx)(Mx,{children:o}):null,a.length||r.chips.length||r.price?(0,K.jsxs)(Nx,{children:[a.map(e=>(0,K.jsxs)(Px,{children:[(0,K.jsx)(`strong`,{children:e.label}),(0,K.jsx)(`span`,{children:pC(e.value,{channelChips:!1})})]},`${e.label}-${e.value}`)),r.chips.length?(0,K.jsxs)(Px,{children:[(0,K.jsx)(`strong`,{children:`Includes`}),(0,K.jsx)(Fx,{children:r.chips.map(e=>(0,K.jsx)(Ix,{$tone:lC(e),children:e},e))})]}):null,r.price?(0,K.jsxs)(Px,{children:[(0,K.jsx)(`strong`,{children:`Price`}),(0,K.jsx)(`span`,{children:r.price})]}):null]}):null]});return(0,K.jsxs)(kx,{$bare:s,$preview:!!n&&!s,children:[n&&!s?(0,K.jsx)(Kx,{$flush:!0,children:n}):null,n&&!s?(0,K.jsx)(Ax,{children:c}):c]})}function pC(e,t={}){let n=[],r=new RegExp(cC.source,`gi`),i=0,a=r.exec(e),o=0;for(;a;){a.index>i&&n.push(e.slice(i,a.index));let s=a[0],c=uC(s);n.push(c===`channel`&&t.channelChips!==!1?(0,K.jsx)(Rx,{$tone:lC(s),children:s},`highlight-${o}`):(0,K.jsx)(Lx,{children:s},`highlight-${o}`)),o+=1,i=a.index+s.length,a=r.exec(e)}return i<e.length&&n.push(e.slice(i)),n.length?n:e}function mC(e){return{id:`user-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,role:`user`,text:e}}function hC(e,t){return{id:`bot-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,role:`bot`,text:e,digest:t}}function gC(e,t){return e.map((n,r)=>r!==e.length-1||n.role!==`bot`?n:{...n,recommendation:t.showRecommendation?t.recommendation:void 0,comparison:t.comparison,explanation:t.explanation})}function _C(e,t=``){return xy(e,t)??{plans:[],differences:[],required:[],gaps:[],headline:`Choose at least two plans to compare.`,summary:`Choose at least two plans to see who each plan is for and what it includes.`}}function vC({onBack:e,onCheckout:t,variant:n=`zea`}){let r=n===`copilot`||n===`copilotDocked`,i=n===`copilotDocked`,[a,o]=(0,g.useState)(!1),[s,c]=(0,g.useState)(n===`copilotDocked`),[l,u]=(0,g.useState)(!1),[d,f]=(0,g.useState)(!1),p=(0,g.useRef)({label:``,at:0}),m=(0,g.useRef)(!1),h=(0,g.useRef)(!1),[_,v]=(0,g.useState)(!1),[y,b]=(0,g.useState)(``),[x,S]=(0,g.useState)(()=>ab()),[C,w]=(0,g.useState)(null),[T,E]=(0,g.useState)(!1),[ee,te]=(0,g.useState)(`multi`),[ne,D]=(0,g.useState)(!0),[O,re]=(0,g.useState)(!1),[ie,k]=(0,g.useState)(null),[A,ae]=(0,g.useState)(``),[j,M]=(0,g.useState)([]),N=(0,g.useRef)(null),oe=(0,g.useRef)(null),[P,se]=(0,g.useState)(!1),[ce,le]=(0,g.useState)(`session`),[ue,de]=(0,g.useState)(0),[fe,pe]=(0,g.useState)(null),[me,he]=(0,g.useState)(null),[ge,F]=(0,g.useState)(null),[_e,ve]=(0,g.useState)(!1),[ye,be]=(0,g.useState)(!1),[xe,Se]=(0,g.useState)([]),[I,Ce]=(0,g.useState)(null),[we,Te]=(0,g.useState)(null),[Ee,De]=(0,g.useState)(``),[L,Oe]=(0,g.useState)(``),[ke,Ae]=(0,g.useState)(!1),[je,Me]=(0,g.useState)(``),[Ne,Pe]=(0,g.useState)(),Fe=ie?eC[ie]:eC.recommend,Ie=ne?`annual`:`monthly`,Le=fe?.planId??`team`,Re=j.length>0||P||!!(fe||me||ge||ye),ze=ZS[ce],Be=(0,g.useRef)(null),Ve=j.filter(e=>e.role===`user`).length,He=[...j].reverse().find(e=>e.role===`user`)?.id,Ue=j.find(e=>e.id===He)?.text??``,We=I?.ticketNumber&&!I.assignedTo?[]:Ue===`Help me get started`||Ue===`Explain this page`?nC:Ue===`What can you do?`?iC:Ue===`Talk to sales or support`?rC:Ue===`What is this?`?[`Help me pick a plan`,`Explain this page`,`Talk to sales or support`]:tC,Ge=I?.ticketNumber&&!I.assignedTo?`Choose how to continue with sales`:Ue===`Help me get started`||Ue===`Explain this page`?`Start from this page`:Ue===`What is this?`?`Hover a plan or feature, or ask next`:`What do you want to do next`;(0,g.useEffect)(()=>{if(!P)return;let e=window.setInterval(()=>{de(e=>Math.min(e+1,ze.steps.length-1))},1e3);return()=>window.clearInterval(e)},[P,ze.steps.length]),(0,g.useEffect)(()=>{if(!r||i)return;let e=window.setTimeout(()=>o(!0),7e3);return()=>window.clearTimeout(e)},[r,i]),(0,g.useEffect)(()=>{if(!r||!s)return;function e(e){if(e.key===`Escape`){if(d){f(!1);return}if(_){v(!1);return}if(l){u(!1);return}f(!1),c(!1)}}return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[r,s,d,i,_,l]),(0,g.useEffect)(()=>{oe.current?.scrollIntoView({behavior:`smooth`,block:`end`})},[j,P,ue,ye,ke,I]),(0,g.useEffect)(()=>{i&&ob(x)},[x,i]),(0,g.useEffect)(()=>{if(!i)return;if(h.current){h.current=!1;return}if(j.length===0)return;let e={id:C??crypto.randomUUID(),title:rb(j),savedAt:Date.now(),turns:j,recommendation:fe,comparison:me,explanation:ge,salesHandoff:I};if(!C){w(e.id),S(t=>[e,...t.filter(t=>t.id!==e.id)]);return}S(t=>t.some(t=>t.id===e.id)?t.map(t=>t.id===e.id?e:t):[e,...t])},[i,j,fe,me,ge,I,C]);function Ke(e){m.current=!1,le(e),de(0),se(!0)}async function qe(e=`session`){return await $S(e),!m.current}function Je(){m.current=!0,Be.current=null,se(!1),de(0)}function Ye(){se(!1),de(0);let e=Be.current;e&&(Be.current=null,window.setTimeout(()=>{yt(e)},0))}function Xe(e,t=!1){let n=gC(e.messages,e);M(e=>t?n:[...e,...n]),e.recommendation&&pe(e.recommendation),e.comparison&&he(e.comparison),e.explanation&&F(e.explanation),e.showRecommendation&&ve(!0),be(!1),Ae(!1)}function Ze(){c(!0)}function Qe(){c(e=>(e&&(f(!1),v(!1),u(!1)),!e))}function $e(){c(!0),u(e=>{let t=!e;return t&&f(!1),t})}function et(e){return{id:e,title:rb(j),savedAt:Date.now(),turns:j,recommendation:fe,comparison:me,explanation:ge,salesHandoff:I}}function tt(){if(!i||j.length===0)return;let e=et(C??crypto.randomUUID());S(t=>t.some(t=>t.id===e.id)?t.map(t=>t.id===e.id?e:t):[e,...t]),C||w(e.id)}function nt(){k(`recommend`),re(!0),ae(``),M([]),pe(null),he(null),F(null),ve(!1),be(!1),Se([]),Ce(null),Te(null),De(``),Oe(``),Ae(!1),se(!1),Be.current=null,m.current=!0}function rt(){i&&(tt(),h.current=!0,w(null),v(!1),b(``)),nt()}function it(e){let t=[...e.turns].reverse().find(e=>e.role===`bot`);M(e.turns),pe(e.recommendation??t?.recommendation??null),he(e.comparison??t?.comparison??null),F(e.explanation??t?.explanation??null),ve(!!(e.recommendation??t?.recommendation)),Ce(e.salesHandoff?{...e.salesHandoff,recommendedPlanId:e.salesHandoff.recommendedPlanId,assignedTo:e.salesHandoff.assignedTo}:null),Te(e.salesHandoff?.assignedTo??null),ae(``),be(!1),Ae(!1),se(!1),v(!1),c(!0)}function at(e){if(e===C){v(!1);return}tt(),h.current=!0;let t=x.find(t=>t.id===e);t&&(w(e),it(t))}function ot(e){S(t=>t.filter(t=>t.id!==e)),e===C&&(h.current=!0,w(null),nt())}async function st(){let e=[...j].reverse().find(e=>e.role===`bot`&&e.text.trim());if(e)try{await navigator.clipboard.writeText(e.text),E(!0),window.setTimeout(()=>E(!1),1600)}catch{E(!1)}}async function ct(e){k(e),re(!0),ae(``),M([]),pe(null),he(null),F(null),ve(!1),be(!1),Se([]),Ce(null),Te(null),De(``),Ae(!1),Ke(`session`);try{let[e,t]=await Promise.all([Fy.startSession({billingCadence:Ie}),qe()]);if(!t)return;Xe(e,!0)}finally{m.current?(se(!1),de(0)):Ye()}}async function lt(e=`Find my plan`){c(!0),k(`recommend`),re(!0),ae(``),M(t=>[...t,mC(e)]),be(!1),Ae(!1),Ke(`plan`);try{let[e,t]=await Promise.all([Fy.startSession({billingCadence:Ie}),qe()]);if(!t)return;Xe(e)}finally{m.current?(se(!1),de(0)):Ye()}}async function ut(){k(`feature`),re(!0),be(!1),Me(``),M(e=>[...e,mC(`Explore a feature`)]),Ae(!0)}function dt(e){let t=e.trim();t&&(Me(``),yt(`Explain ${t} in plain language. What does it do, how does it help, and which plan includes it?`))}function ft(e){let t=e;if(e===`Explore a feature`){ut();return}if(e===`Compare plans`){ht();return}if(e===`Find my plan`||e===`Show me the right plan`||e===`Help me pick a plan`){lt(e);return}if(e===`Contact sales`||e===`Talk to sales or support`){Ct(e);return}if(e===`Continue with Zeabot`){wt(`zeabot`);return}if(e===`Assign a sales agent`){wt(`agent`);return}if(e===`Continue over email`){wt(`email`);return}if(e===`What is this?`){f(!0),c(!0),yt(e);return}yt(t)}function pt(e){let t=Date.now();p.current.label===e&&t-p.current.at<4e3||(p.current={label:e,at:t},c(!0),yt(`Explain ${e} in plain language. What does it do, how does it help, and which plan includes it?`))}function mt(){f(e=>{let t=!e;return t&&(c(!0),j.length===0&&yt(`What is this?`)),t})}async function ht(){k(`compare`),re(!0),Se([]),Ae(!1),M(e=>[...e,mC(`Compare plans`)]),Ke(`comparison`),await qe(`comparison`)&&(M(e=>[...e,hC(`Choose two or more plans.`,{headline:`Choose two or more plans.`,subtitle:`I’ll show who each plan is for, what it includes, and when it is a good fit.`,facts:[],chips:[]})]),be(!0),Ye())}function gt(e){Se(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])}async function _t(){if(xe.length<2)return;let e=xe.map(e=>Ov.find(t=>t.id===e)?.label).filter(e=>!!e),t=[`Compare ${e.join(` and `)}`,...j.filter(e=>e.role===`user`).map(e=>e.text)].join(` `),n=_C(xe,t);M(t=>[...t,mC(`Compare ${e.join(` and `)}`)]),be(!1),Ke(`compareSelected`),await qe(`compareSelected`)&&(M(e=>[...e,{...hC(`Here’s the difference at a glance: what each plan is strong at, what changes between them, and what you would miss.`),comparison:n}]),he(n),Ye())}function vt(e){let t=e.toLowerCase();return/\b(contact sales|talk to sales|speak (to|with) sales|connect with sales|sales persona|sales person|assign (a )?sales|reach (out to )?sales|continue with zeabot|assign a sales agent|continue over email)\b/.test(t)}async function yt(e){if(vt(e)){if(e===`Continue with Zeabot`){wt(`zeabot`);return}if(e===`Assign a sales agent`){wt(`agent`);return}if(e===`Continue over email`){wt(`email`);return}Ct(e);return}c(!0),k(`recommend`),Ae(!1),M(t=>[...t,mC(e)]);let t=QS(e);Ke(t);try{let[n,r]=await Promise.all([Fy.sendMessage(e,{billingCadence:Ie},j.filter(e=>e.role===`user`).map(e=>e.text).slice(-4)),qe(t)]);if(!r)return;Xe(n)}catch{if(m.current)return;M(e=>[...e,hC(`I could not finish that answer. Ask again, or try a plan, feature, or price question.`)])}finally{m.current?(se(!1),de(0)):Ye()}}function bt(){let e=A.trim();if(e){if(ae(``),P){Be.current=e;return}if(ke){dt(e);return}yt(e)}}function xt(){if(fe)return fe;let e=Ne??`professional`,t=Dv[e];return{planId:e,label:t.name,price:Ie===`annual`?t.annual:t.monthly,cadence:Ie,reasons:[`This is the plan to review with sales from the current trial and this plans page.`],unknowns:[`Sales can confirm contract terms, discounts, and rollout timing.`],sources:[]}}function St(e){let t=j.filter(e=>e.role===`user`).map(e=>e.text);return{recommendedPlanId:e.planId,recommendedPlan:e.label,notes:[],bullets:[`Customer: ${oC}.`,`Current page: Zendesk Suite plans.`,t.length?`Questions discussed: ${t.join(` / `)}.`:`Goal: choose the Zendesk plan that fits this team.`,`Recommended plan: ${e.label} at $${e.price} per agent per month, billed ${e.cadence===`annual`?`annually`:`monthly`}.`,`Why it fits: ${e.reasons[0]}`,`Open for sales: ${e.unknowns[0]}`]}}async function Ct(e=`Contact sales`){if(I?.ticketNumber){c(!0),M(t=>[...t,mC(e),hC(`Sales ticket ${I.ticketNumber} is already open. Add more detail below, continue with Zeabot, assign a sales agent, or continue over email.`)]);return}let t=St(xt());if(c(!0),k(`sales`),Te(null),De(``),Oe(``),M(t=>[...t,mC(e)]),Ke(`delivery`),!await qe(`delivery`))return;let n=`ZD-${Math.floor(1e5+Math.random()*9e5)}`,r=`Sales ticket ${n} is created. Sales has the summary below. Add more detail if it will help, then continue with Zeabot, assign a sales agent, or continue over email.`;Ce({...t,ticketNumber:n,status:r,statusTone:`success`}),M(e=>[...e,hC(r)]),Ye()}async function wt(e){if(!I?.ticketNumber){Ct(`Contact sales`);return}Te(e),De(``);let t={zeabot:`Continue with Zeabot`,agent:`Assign a sales agent`,email:`Continue over email`};if(M(n=>[...n,mC(t[e])]),Ke(`delivery`),!await qe(`delivery`))return;if(e===`zeabot`){let e=`Zeabot will keep helping on ticket ${I.ticketNumber} inside Copilot. Ask about plans, pricing, or features, and sales still has the summary.`;Ce({...I,assignedTo:`zeabot`,status:e,statusTone:`success`}),M(t=>[...t,hC(e)]),Ye();return}if(e===`agent`){let e=`Maya from sales has joined this Copilot thread on ticket ${I.ticketNumber}. Share contract, rollout, or discount questions here and they stay on the ticket.`;Ce({...I,assignedTo:`agent`,status:e,statusTone:`success`}),M(t=>[...t,hC(e)]),Ye();return}let n=`Ticket ${I.ticketNumber} can continue over email. Enter the address that should receive the full summary.`;Ce({...I,assignedTo:`email`,emailSent:!1,status:n,statusTone:`info`}),M(e=>[...e,hC(n)]),Ye()}function Tt(){return I?.assignedTo===`email`&&I.statusTone!==`success`?`active`:I?.assignedTo?`done`:`active`}function Et(){return I?.assignedTo===`zeabot`?`Continue with Zeabot`:I?.assignedTo===`agent`?`Sales agent in Copilot`:I?.assignedTo===`email`?`Continue over email`:`Choose Zeabot, a sales agent, or email`}function Dt(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}async function Ot(){if(!I?.ticketNumber)return;let e=L.trim();if(!e||(M(t=>[...t,mC(e)]),Ke(`delivery`),!await qe(`delivery`)))return;let t=[...I.notes,e],n=`Added to ticket ${I.ticketNumber}. Sales will see this with the rest of the summary.`;Ce({...I,notes:t,status:n,statusTone:`success`}),M(e=>[...e,hC(n)]),Oe(``),Ye()}async function kt(){if(!I||I.assignedTo!==`email`)return;let e=Ee.trim();if(!e)return;if(!Dt(e)){Ce({...I,status:`Enter a complete email address, for example name@company.com.`,statusTone:`error`});return}let t=`Summary for ticket ${I.ticketNumber} sent to ${e}. It includes the questions, recommended plan, price, and extra notes.`;M(t=>[...t,mC(e)]),Ke(`delivery`),await qe(`delivery`)&&(Ce({...I,status:t,statusTone:`success`,emailSent:!0}),M(e=>[...e,hC(t)]),De(``),Ye())}async function At(){let e=await Fy.confirmPlan(Le);Pe(e.confirmedPlanId),re(!1)}function jt(e){e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),bt())}let Mt=(0,K.jsxs)(vx,{ref:N,$bare:r,children:[r?null:(0,K.jsx)(xx,{children:`4:43 PM`}),r?null:(0,K.jsx)(Sx,{children:`Zendesk plan assistant`}),r?null:(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(Cx,{children:[(0,K.jsx)(dx,{"aria-hidden":`true`}),(0,K.jsx)(wx,{children:(0,K.jsxs)(Tx,{children:[(0,K.jsxs)(`p`,{children:[sC(),`, `,(0,K.jsx)(`strong`,{children:oC}),`.`]}),(0,K.jsx)(`p`,{children:`How can I help you today?`})]})})]}),j.length===0&&!P?(0,K.jsxs)(Ex,{children:[(0,K.jsx)(Dx,{type:`button`,onClick:()=>void yt(`Which plan includes Help Center, and how does it help?`),children:`Help Center`}),(0,K.jsx)(Dx,{type:`button`,onClick:()=>void yt(`Which plan includes in-product messaging and the Web Widget?`),children:`In-product`}),(0,K.jsx)(Dx,{$primary:!0,type:`button`,onClick:()=>void lt(),children:`Find my plan`})]}):null]}),!P&&Re&&!r?(0,K.jsxs)(qx,{children:[(0,K.jsx)(Jx,{children:`Current trial`}),(0,K.jsx)(Jx,{children:`Selected channels`}),(0,K.jsx)(Jx,{children:`AI needs`}),(0,K.jsx)(Jx,{children:`Reporting needs`})]}):null,j.map(e=>(0,K.jsxs)(yx,{children:[e.role===`user`&&e.id===He&&Ve>1&&!r?(0,K.jsx)(bx,{children:`New`}):null,e.role===`user`?(0,K.jsx)(Ox,{children:e.text}):(0,K.jsx)(fC,{text:e.text,digest:e.digest,preview:r?`Answer preview`:void 0}),e.explanation?(0,K.jsxs)(CS,{children:[r?(0,K.jsx)(Kx,{children:`Feature preview`}):null,(0,K.jsx)(wS,{children:e.explanation.title}),(0,K.jsxs)(TS,{children:[(0,K.jsxs)(ES,{children:[(0,K.jsx)(`strong`,{children:`What it is`}),(0,K.jsx)(`span`,{children:e.explanation.meaning})]}),(0,K.jsxs)(ES,{children:[(0,K.jsx)(`strong`,{children:`How it helps`}),(0,K.jsx)(`span`,{children:e.explanation.customerValue})]}),(0,K.jsxs)(ES,{children:[(0,K.jsx)(`strong`,{children:`Available from`}),(0,K.jsx)(`span`,{children:e.explanation.startsWithPlan})]})]})]}):null,e.comparison?(0,K.jsxs)(Qx,{children:[r?(0,K.jsx)(Kx,{children:`Plan comparison`}):null,(0,K.jsx)($x,{children:e.comparison.headline}),(0,K.jsx)(eS,{children:e.comparison.plans.map(e=>(0,K.jsxs)(tS,{children:[(0,K.jsx)(`h4`,{children:e.label}),(0,K.jsx)(`p`,{children:e.audience}),(0,K.jsx)(nS,{children:e.advantages.map(e=>(0,K.jsx)(rS,{children:e},e))})]},e.planId))}),e.comparison.differences.length?(0,K.jsxs)(iS,{children:[(0,K.jsx)(aS,{children:`What changes`}),(0,K.jsxs)(oS,{size:`small`,isReadOnly:!0,children:[(0,K.jsx)(df.Head,{children:(0,K.jsxs)(df.HeaderRow,{children:[(0,K.jsx)(df.HeaderCell,{children:` `}),e.comparison.plans.map(e=>(0,K.jsx)(df.HeaderCell,{children:e.label},e.planId))]})}),(0,K.jsx)(df.Body,{children:e.comparison.differences.map(e=>(0,K.jsxs)(df.Row,{children:[(0,K.jsx)(df.Cell,{children:(0,K.jsx)(sS,{children:e.label})}),e.values.map((t,n)=>(0,K.jsx)(df.Cell,{children:t},`${e.label}-${n}`))]},e.label))})]})]}):null,(0,K.jsxs)(iS,{children:[(0,K.jsx)(aS,{children:`For you`}),e.comparison.required.length?(0,K.jsx)(uS,{children:fS(e.comparison.required)}):null,e.comparison.gaps.map(e=>(0,K.jsxs)(cS,{children:[(0,K.jsx)(lS,{children:e.missing.length?(0,K.jsxs)(K.Fragment,{children:[`Missing on `,(0,K.jsx)(`strong`,{children:e.label})]}):(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`strong`,{children:e.label}),` covers the compared extras`]})}),e.missing.length?(0,K.jsx)(uS,{children:fS(e.missing)}):null]},e.planId))]})]}):null,e.recommendation?(0,K.jsxs)(Zx,{children:[r?(0,K.jsx)(Kx,{children:`Plan preview`}):null,(0,K.jsx)(DS,{children:`Recommended from your answers`}),(0,K.jsx)(`h3`,{children:e.recommendation.label}),(0,K.jsxs)(`p`,{children:[`$`,e.recommendation.price,` per agent per month, billed `,e.recommendation.cadence===`annual`?`annually`:`monthly`]}),(0,K.jsxs)(OS,{children:[(0,K.jsx)(`strong`,{children:`Why it fits your needs`}),(0,K.jsx)(`span`,{children:e.recommendation.reasons[0]})]}),(0,K.jsxs)(kS,{children:[(0,K.jsx)(HS,{isPrimary:!0,onClick:At,children:`View this plan`}),(0,K.jsx)(HS,{isBasic:!0,onClick:()=>void Ct(),children:`Contact sales`})]})]}):null]},e.id)),P?r?(0,K.jsx)(Gx,{role:`status`,"aria-live":`polite`,children:ue===0?`Thinking`:`Making progress`}):(0,K.jsxs)(zx,{$compact:ze.steps.length===1,role:`status`,"aria-live":`polite`,"aria-label":ze.title,children:[ze.steps.length>1?(0,K.jsx)(Bx,{children:ze.title}):null,(0,K.jsx)(Vx,{children:ze.steps.map((e,t)=>{let n=t<ue?`done`:t===ue?`active`:`pending`;return(0,K.jsxs)(Hx,{$state:n,children:[(0,K.jsxs)(Ux,{$state:n,children:[n===`done`?(0,K.jsx)(mo,{"aria-hidden":`true`}):null,n===`active`?(0,K.jsx)(Gl,{size:`18`,delayMS:0,color:qu.purple[700],"aria-hidden":`true`}):null]}),(0,K.jsx)(`span`,{children:e})]},e)})}),ze.steps.length>1?(0,K.jsx)(Wx,{"aria-hidden":`true`,children:(0,K.jsx)(`span`,{style:{width:`${(ue+1)/ze.steps.length*100}%`}})}):null]}):null,!P&&ke?(0,K.jsxs)(mS,{children:[(0,K.jsx)(hS,{children:`Which feature do you want to understand?`}),(0,K.jsx)(gS,{children:`Type a name, or choose one of these.`}),(0,K.jsxs)(_S,{children:[(0,K.jsxs)(Z,{children:[(0,K.jsx)(Z.Label,{hidden:!0,children:`Feature name`}),(0,K.jsx)(X,{value:je,placeholder:`App Builder, Quick reports, CSAT`,onChange:e=>Me(e.target.value),onKeyDown:e=>{e.key===`Enter`&&dt(je)}})]}),je.trim()?(0,K.jsx)(qS,{type:`button`,"aria-label":`Explain feature`,onClick:()=>dt(je),children:(0,K.jsx)(Cv,{"aria-hidden":`true`})}):null]}),(0,K.jsx)(vS,{children:aC.map(({name:e,hue:t,Icon:n})=>(0,K.jsxs)(yS,{hue:`grey`,size:`small`,role:`button`,tabIndex:0,onClick:()=>dt(e),onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),dt(e))},children:[(0,K.jsx)(n,{"aria-hidden":`true`}),e]},e))})]}):null,!P&&ye?(0,K.jsxs)(pS,{children:[(0,K.jsx)(bS,{children:Ov.map(e=>{let t=xe.includes(e.id);return(0,K.jsxs)(xS,{$selected:t,type:`button`,onClick:()=>gt(e.id),children:[(0,K.jsx)(SS,{$selected:t}),(0,K.jsxs)(`span`,{children:[e.label,(0,K.jsx)(`small`,{children:e.shortLabel})]})]},e.id)})}),(0,K.jsx)(kS,{children:(0,K.jsx)(HS,{isPrimary:!0,disabled:xe.length<2,onClick:_t,children:`Compare these plans`})})]}):null,!P&&I?(0,K.jsxs)(AS,{children:[(0,K.jsxs)(jS,{children:[`Sales ticket `,I.ticketNumber??`is being created`]}),(0,K.jsxs)(MS,{children:[(0,K.jsx)(`strong`,{children:I.recommendedPlan}),(0,K.jsx)(`span`,{children:`Plan included on the ticket`})]}),(0,K.jsxs)(NS,{"aria-label":`Sales request progress`,children:[(0,K.jsx)(PS,{$state:I.ticketNumber?`done`:`active`,children:`Ticket created`}),(0,K.jsx)(PS,{$state:`done`,children:`Customer summary added`}),(0,K.jsx)(PS,{$state:Tt(),children:Et()})]}),(0,K.jsxs)(FS,{children:[I.bullets.map(e=>(0,K.jsx)(`li`,{children:e},e)),I.notes.map(e=>(0,K.jsxs)(`li`,{children:[`Extra detail: `,e]},e))]}),(0,K.jsxs)(VS,{children:[(0,K.jsx)(jS,{as:`label`,children:`Add more detail for sales`}),(0,K.jsx)(zS,{value:L,placeholder:`Timeline, contract needs, team size, or anything sales should know`,onChange:e=>Oe(e.target.value)}),(0,K.jsx)(BS,{children:(0,K.jsx)(HS,{isPrimary:!0,disabled:!L.trim()||P,onClick:()=>void Ot(),children:`Add to ticket`})})]}),(0,K.jsxs)(kS,{children:[(0,K.jsx)(HS,{isPrimary:I.assignedTo===`zeabot`,isBasic:I.assignedTo!==`zeabot`,onClick:()=>void wt(`zeabot`),children:`Continue with Zeabot`}),(0,K.jsx)(HS,{isPrimary:I.assignedTo===`agent`,isBasic:I.assignedTo!==`agent`,onClick:()=>void wt(`agent`),children:`Assign a sales agent`}),(0,K.jsx)(HS,{isPrimary:I.assignedTo===`email`,isBasic:I.assignedTo!==`email`,onClick:()=>void wt(`email`),children:`Continue over email`})]}),I.assignedTo===`email`&&!I.emailSent?(0,K.jsxs)(LS,{children:[(0,K.jsx)(RS,{$invalid:I.statusTone===`error`,value:Ee,placeholder:`Email address`,onChange:e=>De(e.target.value),onKeyDown:e=>{e.key===`Enter`&&kt()}}),(0,K.jsx)(HS,{isPrimary:!0,disabled:!Ee.trim()||P,onClick:()=>void kt(),children:`Send summary`})]}):null,I.status?(0,K.jsx)(IS,{$tone:I.statusTone,children:pC(I.status)}):null]}):null,(0,K.jsx)(`div`,{ref:oe}),!P&&Re&&We.length?(0,K.jsxs)(Yx,{children:[(0,K.jsx)(Xx,{children:Ge}),(0,K.jsx)(US,{children:We.map(e=>(0,K.jsx)(WS,{as:`button`,type:`button`,hue:`grey`,size:`medium`,"aria-disabled":P,onClick:()=>{P||ft(e)},children:e},e))})]}):null]}),Nt=(0,K.jsxs)(Kb,{children:[(0,K.jsxs)(Qb,{children:[(0,K.jsx)(`h1`,{children:`Select a plan most suited for you`}),(0,K.jsxs)($b,{children:[(0,K.jsxs)(ex,{"aria-hidden":`true`,children:[(0,K.jsx)(tx,{$image:`https://i.pravatar.cc/58?img=32`}),(0,K.jsx)(tx,{$image:`https://i.pravatar.cc/58?img=47`}),(0,K.jsx)(tx,{$image:`https://i.pravatar.cc/58?img=12`})]}),(0,K.jsx)(`span`,{children:i?`Need help choosing?`:`Want help choosing?`}),(0,K.jsx)(nx,{type:`button`,disabled:r&&!i,onClick:i?Ze:r?void 0:rt,children:i?`Chat with us`:`Ask the plan assistant`})]})]}),(0,K.jsx)(Np,{channel:ee,onChannelChange:te,isAnnual:ne,onBillingChange:()=>D(e=>!e),showBilling:!0,suiteLabel:i?`Zendesk Suite plans`:void 0,supportLabel:i?`Support plans`:void 0}),(0,K.jsx)(_m,{isAnnual:ne,recommendedId:Ne,recommendedLabel:`Recommended from your answers`,recommendedTone:r?`purple`:`green`,inspectActive:i&&d,onExplain:i?pt:void 0,onBuy:t}),i?(0,K.jsx)(jf,{}):null]}),Pt=r?(0,K.jsx)(Wb,{layout:i?`docked`:`fab`,open:s,spin:a,idle:j.length===0&&!P,title:He?j.find(e=>e.id===He)?.text??`Plans Copilot`:`Plans Copilot`,composer:A,isScanning:P,placeholder:ke?`Enter a feature, such as CSAT or SLA`:`Ask admin copilot`,onOpen:Ze,onClose:()=>{f(!1),u(!1),c(!1)},onHelpCenter:()=>void yt(`Which plan includes Help Center, and how does it help?`),onInProduct:()=>void yt(`Which plan includes in-product messaging and the Web Widget?`),onFindPlan:()=>void lt(),onIdlePrompt:i?e=>ft(e):void 0,inspectActive:i&&d,onInspectToggle:i?mt:void 0,persistent:!1,historyOpen:i&&_,historyQuery:y,conversations:x,activeConversationId:C,copied:T,onHistoryToggle:i?()=>v(e=>!e):void 0,onHistoryQueryChange:b,onSelectConversation:at,onDeleteConversation:ot,onNewConversation:i?rt:void 0,onCopyLast:i?()=>void st():void 0,onStop:Je,isFullscreen:i&&l,onToggleFullscreen:i?$e:void 0,onComposerChange:ae,onComposerKeyDown:jt,onSubmit:bt,children:j.length===0&&!P?null:Mt}):null;return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Dp,{onBack:e,compact:i,copilotActive:i?s:void 0,onCopilotToggle:i?Qe:void 0,title:i?void 0:r?`Copilot on the plans page`:`Zea plan assistant`,subtitle:i?void 0:r?`Platform Copilot added beside Zeabot`:`Plans, features, and pricing guidance`}),i?(0,K.jsxs)(qb,{children:[(0,K.jsxs)(Jb,{$inspect:d,$hidden:l,children:[d?(0,K.jsxs)(Yb,{children:[(0,K.jsx)(`span`,{children:`Hover a plan, price, or feature. Copilot will explain it.`}),(0,K.jsx)(`button`,{type:`button`,onClick:()=>f(!1),children:`Turn off pointer`})]}):null,Nt]}),(0,K.jsx)(Xb,{$open:s,$fullscreen:l,$edge:`right`,"aria-hidden":!s,children:(0,K.jsx)(Zb,{$edge:`right`,$fullscreen:l,children:Pt})})]}):(0,K.jsxs)(K.Fragment,{children:[Nt,r?null:(0,K.jsx)(ix,{$open:O,"aria-hidden":!O,"aria-label":`Zea plan assistant`,children:ie?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(gx,{children:[(0,K.jsx)(_x,{isBasic:!0,"aria-label":`View previous conversations`,onClick:()=>k(null),children:(0,K.jsx)(vp,{"aria-hidden":`true`})}),(0,K.jsx)(dx,{"aria-hidden":`true`}),(0,K.jsxs)(`h2`,{children:[`Started `,Fe.date]})]}),(0,K.jsxs)(cx,{children:[Mt,(0,K.jsxs)(GS,{$expanded:!!A,children:[(0,K.jsx)(JS,{"aria-label":`Attach file`,type:`button`,disabled:P,children:(0,K.jsx)(`svg`,{"aria-hidden":`true`,xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,focusable:`false`,viewBox:`0 0 16 16`,children:(0,K.jsx)(`path`,{fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,d:`M9.5 4v7.7c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5V3C6.5 1.6 7.6.5 9 .5s2.5 1.1 2.5 2.5v9c0 1.9-1.6 3.5-3.5 3.5S4.5 13.9 4.5 12V4`})})}),(0,K.jsxs)(Z,{children:[(0,K.jsx)(Z.Label,{hidden:!0,children:`Ask about plans, pricing, or features`}),(0,K.jsxs)(KS,{$expanded:!!A,children:[(0,K.jsx)(ol,{value:A,minRows:A.trim()?3:1,maxRows:5,placeholder:ke?`Enter a feature, such as CSAT or SLA`:`Ask about plans, pricing, or features`,onChange:e=>ae(e.target.value),onKeyDown:jt}),A.trim()?(0,K.jsx)(qS,{type:`button`,"aria-label":`Send message`,onClick:bt,children:(0,K.jsx)(Cv,{"aria-hidden":`true`})}):null]})]})]}),(0,K.jsxs)(hx,{children:[(0,K.jsx)(_p,{"aria-hidden":`true`}),` Built with Zendesk`]})]})]}):(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(ax,{children:[(0,K.jsxs)(ox,{children:[(0,K.jsx)(_p,{"aria-hidden":`true`}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`h2`,{children:`Zendesk`}),(0,K.jsx)(`p`,{children:`Plan and pricing assistant`})]})]}),(0,K.jsx)(sx,{isBasic:!0,size:`small`,"aria-label":`Close plan assistant`,onClick:()=>re(!1),children:(0,K.jsx)(jl,{"aria-hidden":`true`})})]}),(0,K.jsxs)(cx,{children:[(0,K.jsx)(lx,{children:Object.keys(eC).slice(0,2).map(e=>(0,K.jsxs)(ux,{onClick:()=>ct(e),children:[(0,K.jsx)(dx,{"aria-hidden":`true`}),(0,K.jsxs)(`div`,{children:[(0,K.jsxs)(fx,{children:[(0,K.jsxs)(`h3`,{children:[`Started `,eC[e].date]}),(0,K.jsx)(`span`,{children:eC[e].date})]}),(0,K.jsxs)(`p`,{children:[`Plan assistant: `,eC[e].title]}),(0,K.jsx)(Q,{children:`Complete`})]})]},e))}),(0,K.jsx)(px,{children:(0,K.jsx)(mx,{isStretched:!0,onClick:rt,children:`Start a new conversation`})}),(0,K.jsxs)(hx,{children:[(0,K.jsx)(_p,{"aria-hidden":`true`}),` Built with Zendesk`]})]})]})}),r&&!i?null:(0,K.jsx)(rx,{type:`button`,$inert:r,disabled:r,"aria-disabled":r,"aria-label":r?`Zeabot`:O?`Close plan assistant`:`Open plan assistant`,onClick:r?void 0:()=>re(e=>!e),children:O?(0,K.jsx)(`span`,{className:`down-arrow`,"aria-hidden":`true`,children:(0,K.jsx)(vp,{})}):(0,K.jsx)(`span`,{className:`chat-icon`,"aria-hidden":`true`,children:(0,K.jsx)(`svg`,{width:`40px`,height:`40px`,viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,focusable:`false`,children:(0,K.jsx)(`path`,{d:`M10,18 L6,22 L6,18 L10,18 Z M17,6 C19.7614237,6 22,8.23857625 22,11 C22,13.7614237 19.7614237,16 17,16 L17,16 L7,16 C4.23857625,16 2,13.7614237 2,11 C2,8.23857625 4.23857625,6 7,6 L7,6 Z`,transform:`translate(12.000000, 14.000000) scale(-1, 1) translate(-12.000000, -14.000000)`})})})}),r?Pt:null,(0,K.jsx)(jf,{})]})]})}var yC=B.main`
  min-height: 100vh;
  background: #fff;
  color: #2f3941;
`,bC=B.header`
  display: grid;
  grid-template-columns: 1fr minmax(420px, 1.2fr) 1fr;
  align-items: center;
  gap: 24px;
  min-height: 94px;
  padding: 0 48px;
  border-bottom: 1px solid #d9dee2;
  @media (max-width: 760px) { grid-template-columns: 1fr; padding: 20px 24px; }
`,xC=B.div`
  color: #17494d;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: -0.04em;
`,SC=B.ol`
  display: flex;
  justify-content: center;
  gap: 46px;
  margin: 0;
  padding: 0;
  list-style: none;
  color: #68737a;
  @media (max-width: 760px) { justify-content: flex-start; gap: 20px; }
`,CC=B.li`
  position: relative;
  display: grid;
  justify-items: center;
  gap: 5px;
  color: ${({$active:e,$done:t})=>e||t?`#2f3941`:`#68737a`};
  font-size: 14px;
  font-weight: ${({$active:e})=>e?700:500};
  &::before {
    display: grid;
    width: 28px;
    height: 28px;
    place-items: center;
    border-radius: 50%;
    background: ${({$active:e,$done:t})=>e?`#5f6b73`:t?`#e8ecee`:`#f0f2f3`};
    color: ${({$active:e})=>e?`#fff`:`#5c6970`};
    content: '${({$done:e})=>e?`✓`:``}';
    font-size: 14px;
  }
`,wC=B.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 430px;
  min-height: calc(100vh - 94px);
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`,TC=B.section`
  max-width: 860px;
  padding: 56px 48px;
  @media (max-width: 600px) { padding: 32px 24px; }
`,EC=B.aside`
  padding: 32px 44px;
  border-left: 1px solid #d9dee2;
  background: #fbfbfb;
  @media (max-width: 900px) { border-top: 1px solid #d9dee2; border-left: 0; }
`,DC=B.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 28px 0 24px;
  border-bottom: 2px solid #d9dee2;
`,OC=B.button`
  padding: 16px;
  border: 0;
  border-bottom: 3px solid ${({$active:e})=>e?`#2f83c5`:`transparent`};
  background: transparent;
  color: ${({$active:e})=>e?`#2f83c5`:`#2f3941`};
  font: inherit;
  font-weight: 600;
  cursor: pointer;
`,kC=B.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`,AC=B.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 13px 0;
  border-bottom: 1px solid #d9dee2;
  color: #68737a;
  strong { color: #2f3941; }
`;function jC({planId:e,onBack:t}){let n=$[e],[r,i]=(0,g.useState)(`monthly`),[a,o]=(0,g.useState)(1),[s,c]=(0,g.useState)(!1),l=r===`annual`?n.annual:n.monthly;return(0,K.jsxs)(yC,{children:[(0,K.jsxs)(bC,{children:[(0,K.jsx)(xC,{children:`zendesk`}),(0,K.jsxs)(SC,{"aria-label":`Checkout progress`,children:[(0,K.jsx)(CC,{$done:!0,children:`Email`}),(0,K.jsx)(CC,{$active:!0,children:`Payment`}),(0,K.jsx)(CC,{children:`Account details`})]}),(0,K.jsx)(`button`,{type:`button`,onClick:t,style:{justifySelf:`end`,border:0,background:`transparent`,color:`#2f83c5`,cursor:`pointer`},children:`← Back to plans`})]}),(0,K.jsxs)(wC,{children:[(0,K.jsxs)(TC,{children:[(0,K.jsx)(`h1`,{children:`Secure checkout`}),(0,K.jsxs)(DC,{children:[(0,K.jsxs)(OC,{$active:!0,children:[`▣`,(0,K.jsx)(`br`,{}),`Credit or debit card`]}),(0,K.jsxs)(OC,{children:[`ℙ`,(0,K.jsx)(`br`,{}),`PayPal`]})]}),(0,K.jsxs)(Z,{children:[(0,K.jsx)(Z.Label,{children:`Card number`}),(0,K.jsx)(X,{placeholder:``})]}),(0,K.jsxs)(kC,{children:[(0,K.jsxs)(Z,{children:[(0,K.jsx)(Z.Label,{children:`Expiration date`}),(0,K.jsx)(X,{placeholder:`Select one`})]}),(0,K.jsxs)(Z,{children:[(0,K.jsx)(Z.Label,{children:`CVV`}),(0,K.jsx)(X,{})]})]}),(0,K.jsxs)(Z,{children:[(0,K.jsx)(Z.Label,{children:`Country or region`}),(0,K.jsx)(X,{value:`India`,readOnly:!0})]}),(0,K.jsx)(Nc,{checked:s,onChange:()=>c(!s),children:`I agree to the Zendesk Customer Agreement, Privacy Policy, and terms and conditions for any applicable add-ons.`}),(0,K.jsx)(q,{isPrimary:!0,isStretched:!0,disabled:!s,onClick:()=>window.alert(`Purchase complete for ${n.name}`),style:{marginTop:22,background:`#111`,borderColor:`#111`},children:`🔒 Complete purchase`})]}),(0,K.jsxs)(EC,{children:[(0,K.jsx)(`h2`,{children:`Summary`}),(0,K.jsxs)(Z,{children:[(0,K.jsx)(Z.Label,{children:`Billing cycle`}),(0,K.jsxs)(`select`,{value:r,onChange:e=>i(e.target.value),style:{width:`100%`,padding:12,border:`1px solid #b8c0c5`,borderRadius:4,font:`inherit`},children:[(0,K.jsx)(`option`,{value:`monthly`,children:`Billed monthly`}),(0,K.jsx)(`option`,{value:`annual`,children:`Billed annually`})]})]}),(0,K.jsx)(`p`,{style:{padding:12,background:`#f3f4f4`,borderRadius:8},children:r===`monthly`?`Monthly term, billed each month`:`Annual term, billed each year`}),(0,K.jsxs)(`h2`,{style:{marginTop:28},children:[n.name,` `,(0,K.jsxs)(`span`,{style:{float:`right`,fontSize:16},children:[`US$`,l]})]}),(0,K.jsxs)(AC,{children:[(0,K.jsx)(`select`,{"aria-label":`Selected plan`,value:e,onChange:()=>void 0,style:{padding:12,border:`1px solid #b8c0c5`,borderRadius:4,font:`inherit`},children:(0,K.jsx)(`option`,{children:n.name.replace(`Suite `,``)})}),(0,K.jsx)(X,{"aria-label":`Agents`,type:`number`,min:`1`,value:a,onChange:e=>o(Math.max(1,Number(e.target.value))),style:{width:80}})]}),(0,K.jsxs)(`p`,{children:[`US$`,l,` per agent/month · `,a,` Agents`]}),(0,K.jsx)(`a`,{href:`#details`,style:{color:`#2f83c5`},children:`View Suite plan details`}),(0,K.jsxs)(AC,{children:[(0,K.jsx)(`span`,{children:`Subtotal`}),(0,K.jsxs)(`strong`,{children:[`US$`,l*a,`/mo`]})]}),(0,K.jsx)(`a`,{href:`#promo`,style:{color:`#2f83c5`},children:`Apply promo code`}),(0,K.jsxs)(AC,{style:{marginTop:16,borderBottom:0},children:[(0,K.jsx)(`strong`,{style:{fontSize:20},children:`Total`}),(0,K.jsxs)(`strong`,{style:{fontSize:20},children:[`US$`,l*a,`/mo`]})]}),(0,K.jsxs)(`p`,{style:{marginTop:-12},children:[`Billed `,r,` · + tax and fees`]})]})]})]})}function MC(){let e=new URLSearchParams(window.location.search).get(`view`);return e===`a`||e===`b`||e===`c`||e===`d`||e===`e`||e===`g`||e===`z`||e===`p`||e===`q`||e===`checkout`?e:`hub`}function NC(){let[e,t]=(0,g.useState)(MC);(0,g.useEffect)(()=>{let e=()=>t(MC());return window.addEventListener(`popstate`,e),()=>window.removeEventListener(`popstate`,e)},[]);function n(e){let n=new URL(window.location.href);e===`hub`?n.searchParams.delete(`view`):n.searchParams.set(`view`,e),window.history.pushState({},``,n),t(e)}function r(e){let n=new URL(window.location.href);n.searchParams.set(`view`,`checkout`),n.searchParams.set(`plan`,e),window.history.pushState({},``,n),t(`checkout`)}if(e===`a`)return(0,K.jsx)(Fh,{onBack:()=>n(`hub`),onCheckout:r});if(e===`b`)return(0,K.jsx)(Og,{onBack:()=>n(`hub`),onCheckout:r});if(e===`c`)return(0,K.jsx)(Lg,{onBack:()=>n(`hub`),onGoToA:()=>n(`a`)});if(e===`d`)return(0,K.jsx)(Xg,{onBack:()=>n(`hub`),onCheckout:r});if(e===`e`)return(0,K.jsx)(p_,{onBack:()=>n(`hub`),onCheckout:r});if(e===`g`)return(0,K.jsx)(vv,{onBack:()=>n(`hub`),onCheckout:r});if(e===`z`)return(0,K.jsx)(vC,{onBack:()=>n(`hub`),onCheckout:r});if(e===`p`)return(0,K.jsx)(vC,{variant:`copilot`,onBack:()=>n(`hub`),onCheckout:r});if(e===`q`)return(0,K.jsx)(vC,{variant:`copilotDocked`,onBack:()=>n(`hub`),onCheckout:r});if(e===`checkout`){let e=new URLSearchParams(window.location.search).get(`plan`);return(0,K.jsx)(jC,{planId:e&&e in $?e:`professional`,onBack:()=>n(`b`)})}return(0,K.jsx)(sp,{onSelect:n})}(0,ie.createRoot)(document.getElementById(`root`)).render((0,K.jsx)(g.StrictMode,{children:(0,K.jsx)(Of,{children:(0,K.jsx)(NC,{})})}));