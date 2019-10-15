/*! For license information please see content---docs-pre-rendering-into-static-html-files-283-4ad.dfbc4d87e6927cda66ea.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{129:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return s}));var n=r(0),o=r.n(n),u=o.a.createContext({}),a=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},i=function(e){var t=a(e.components);return o.a.createElement(u.Provider,{value:t},e.children)};var c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,u=e.originalType,i=e.parentName,c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),f=a(r),s=n,p=f[i+"."+s]||f[s]||l[s]||u;return r?o.a.createElement(p,Object.assign({},{ref:t},c,{components:r})):o.a.createElement(p,Object.assign({},{ref:t},c))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var u=r.length,a=new Array(u);a[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,a[1]=i;for(var s=2;s<u;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},130:function(e,t,r){"use strict";e.exports=r(131)},131:function(e,t,r){"use strict";var n=r(132),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,y=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,h=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,b="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t=arguments.length-1,r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);!function(e,t,r,n,o,u,a,i){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,n,o,u,a,i],l=0;(e=Error(t.replace(/%s/g,(function(){return c[l++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",r)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function w(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||g}function j(){}function S(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||g}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&v("85"),this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=w.prototype;var k=S.prototype=new j;k.constructor=S,n(k,w.prototype),k.isPureReactComponent=!0;var _={current:null},x={current:null},P=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var n=void 0,o={},a=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)P.call(t,n)&&!C.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var l=Array(c),f=0;f<c;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:u,type:e,key:a,ref:i,props:o,_owner:x.current}}function $(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var T=/\/+/g,R=[];function M(e,t,r,n){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function N(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function I(e,t,r){return null==e?0:function e(t,r,n,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var c=!1;if(null===t)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case u:case a:c=!0}}if(c)return n(o,t,""===r?"."+L(t,0):r),1;if(c=0,r=""===r?".":r+":",Array.isArray(t))for(var l=0;l<t.length;l++){var f=r+L(i=t[l],l);c+=e(i,f,n,o)}else if(null===t||"object"!=typeof t?f=null:f="function"==typeof(f=b&&t[b]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),l=0;!(i=t.next()).done;)c+=e(i=i.value,f=r+L(i,l++),n,o);else"object"===i&&v("31","[object Object]"===(n=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return c}(e,"",t,r)}function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,n,r,(function(e){return e})):null!=e&&($(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(T,"$&/")+"/")+r)),n.push(e))}function D(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(T,"$&/")+"/"),I(e,q,t=M(t,u,n,o)),N(t)}function F(){var e=_.current;return null===e&&v("321"),e}var U={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return D(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;I(e,A,t=M(null,null,t,r)),N(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return D(e,t,null,(function(e){return e})),t},only:function(e){return $(e)||v("143"),e}},createRef:function(){return{current:null}},Component:w,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:y,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,r){return F().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,r){return F().useReducer(e,t,r)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:i,StrictMode:c,Suspense:d,createElement:E,cloneElement:function(e,t,r){null==e&&v("267",e);var o=void 0,a=n({},e.props),i=e.key,c=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,l=x.current),void 0!==t.key&&(i=""+t.key);var f=void 0;for(o in e.type&&e.type.defaultProps&&(f=e.type.defaultProps),t)P.call(t,o)&&!C.hasOwnProperty(o)&&(a[o]=void 0===t[o]&&void 0!==f?f[o]:t[o])}if(1===(o=arguments.length-2))a.children=r;else if(1<o){f=Array(o);for(var s=0;s<o;s++)f[s]=arguments[s+2];a.children=f}return{$$typeof:u,type:e.type,key:i,ref:c,props:a,_owner:l}},createFactory:function(e){var t=E.bind(null,e);return t.type=e,t},isValidElement:$,version:"16.8.6",unstable_ConcurrentMode:p,unstable_Profiler:l,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:_,ReactCurrentOwner:x,assign:n}},H={default:U},V=H&&U||H;e.exports=V.default||V},132:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,i,c=a(e),l=1;l<arguments.length;l++){for(var f in r=Object(arguments[l]))o.call(r,f)&&(c[f]=r[f]);if(n){i=n(r);for(var s=0;s<i.length;s++)u.call(r,i[s])&&(c[i[s]]=r[i[s]])}}return c}},99:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return f}));r(130);var n=r(129);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a={id:"pre-rendering-into-static-html-files",title:"Pre-Rendering into Static HTML Files",sidebar_label:"Pre-Rendering Static HTML"},i=[],c={rightToc:i},l="wrapper";function f(e){var t=e.components,r=u(e,["components"]);return Object(n.b)(l,o({},c,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"If you’re hosting your ",Object(n.b)("inlineCode",{parentName:"p"},"build")," with a static hosting provider you can use ",Object(n.b)("a",o({parentName:"p"},{href:"https://www.npmjs.com/package/react-snapshot"}),"react-snapshot")," or ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/stereobooster/react-snap"}),"react-snap")," to generate HTML pages for each route, or relative link, in your application. These pages will then seamlessly become active, or “hydrated”, when the JavaScript bundle has loaded."),Object(n.b)("p",null,"There are also opportunities to use this outside of static hosting, to take the pressure off the server when generating and caching routes."),Object(n.b)("p",null,"The primary benefit of pre-rendering is that you get the core content of each page ",Object(n.b)("em",{parentName:"p"},"with")," the HTML payload—regardless of whether or not your JavaScript bundle successfully downloads. It also increases the likelihood that each route of your application will be picked up by search engines."),Object(n.b)("p",null,"You can read more about ",Object(n.b)("a",o({parentName:"p"},{href:"https://medium.com/superhighfives/an-almost-static-stack-6df0a2791319"}),"zero-configuration pre-rendering (also called snapshotting) here"),"."))}f.isMDXComponent=!0}}]);