"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[226],{485:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(9946).A)("PaintbrushVertical",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v4",key:"qmzblu"}],["path",{d:"M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z",key:"ycvu00"}],["path",{d:"M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1",key:"iw4wnp"}]])},901:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let n=r(8229)._(r(2115)).default.createContext(null)},1193:(e,t)=>{function r(e){var t;let{config:r,src:n,width:i,quality:a}=e,o=a||(null==(t=r.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return r.path+"?url="+encodeURIComponent(n)+"&w="+i+"&q="+o+(n.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},1432:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(9946).A)("Ticket",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]])},1469:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return u},getImageProps:function(){return l}});let n=r(8229),i=r(8883),a=r(3063),o=n._(r(1193));function l(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let u=a.Image},2464:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});let n=r(8229)._(r(2115)).default.createContext({})},2996:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(9946).A)("Contact",[["path",{d:"M16 2v2",key:"scm5qe"}],["path",{d:"M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",key:"1waht3"}],["path",{d:"M8 2v2",key:"pbkmx"}],["circle",{cx:"12",cy:"11",r:"3",key:"itu57m"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",key:"12vinp"}]])},3063:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return _}});let n=r(8229),i=r(6966),a=r(5155),o=i._(r(2115)),l=n._(r(7650)),u=n._(r(5564)),d=r(8883),s=r(5840),c=r(6752);r(3230);let f=r(901),p=n._(r(1193)),h=r(6654),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,r,n,i,a,o){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function y(e){return o.use?{fetchPriority:e}:{fetchpriority:e}}let v=(0,o.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:l,width:u,decoding:d,className:s,style:c,fetchPriority:f,placeholder:p,loading:m,unoptimized:v,fill:b,onLoadRef:_,onLoadingCompleteRef:w,setBlurComplete:x,setShowAltText:k,sizesInput:j,onLoad:M,onError:C,...O}=e,P=(0,o.useCallback)(e=>{e&&(C&&(e.src=e.src),e.complete&&g(e,p,_,w,x,v,j))},[r,p,_,w,x,C,v,j]),S=(0,h.useMergedRef)(t,P);return(0,a.jsx)("img",{...O,...y(f),loading:m,width:u,height:l,decoding:d,"data-nimg":b?"fill":"1",className:s,style:c,sizes:i,srcSet:n,src:r,ref:S,onLoad:e=>{g(e.currentTarget,p,_,w,x,v,j)},onError:e=>{k(!0),"empty"!==p&&x(!0),C&&C(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...y(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,n),null):(0,a.jsx)(u.default,{children:(0,a.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let _=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(f.RouterContext),n=(0,o.useContext)(c.ImageConfigContext),i=(0,o.useMemo)(()=>{var e;let t=m||n||s.imageConfigDefault,r=[...t.deviceSizes,...t.imageSizes].sort((e,t)=>e-t),i=t.deviceSizes.sort((e,t)=>e-t),a=null==(e=t.qualities)?void 0:e.sort((e,t)=>e-t);return{...t,allSizes:r,deviceSizes:i,qualities:a}},[n]),{onLoad:l,onLoadingComplete:u}=e,h=(0,o.useRef)(l);(0,o.useEffect)(()=>{h.current=l},[l]);let g=(0,o.useRef)(u);(0,o.useEffect)(()=>{g.current=u},[u]);let[y,_]=(0,o.useState)(!1),[w,x]=(0,o.useState)(!1),{props:k,meta:j}=(0,d.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:y,showAltText:w});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(v,{...k,unoptimized:j.unoptimized,placeholder:j.placeholder,fill:j.fill,onLoadRef:h,onLoadingCompleteRef:g,setBlurComplete:_,setShowAltText:x,sizesInput:e.sizes,ref:t}),j.priority?(0,a.jsx)(b,{isAppRouter:!r,imgAttributes:k}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3227:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(9946).A)("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]])},5029:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let n=r(2115),i=n.useLayoutEffect,a=n.useEffect;function o(e){let{headManager:t,reduceComponentsToState:r}=e;function o(){if(t&&t.mountedInstances){let i=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(i,e))}}return i(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),i(()=>(t&&(t._pendingUpdate=o),()=>{t&&(t._pendingUpdate=o)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},5100:(e,t)=>{function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:a,objectFit:o}=e,l=n?40*n:t,u=i?40*i:r,d=l&&u?"viewBox='0 0 "+l+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+a+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},5196:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(9946).A)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},5339:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(9946).A)("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]])},5564:(e,t,r)=>{var n=r(9509);Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},defaultHead:function(){return f}});let i=r(8229),a=r(6966),o=r(5155),l=a._(r(2115)),u=i._(r(5029)),d=r(2464),s=r(2830),c=r(7544);function f(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(3230);let h=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(f(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let a=!0,o=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){o=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?a=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?a=!1:t.add(i.type);break;case"meta":for(let e=0,t=h.length;e<t;e++){let t=h[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?a=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!o)&&r.has(e)?a=!1:(r.add(e),n[t]=r)}}}}return a}}()).reverse().map((e,t)=>{let i=e.key||t;if(n.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,l.default.cloneElement(e,t)}return l.default.cloneElement(e,{key:i})})}let g=function(e){let{children:t}=e,r=(0,l.useContext)(d.AmpStateContext),n=(0,l.useContext)(s.HeadManagerContext);return(0,o.jsx)(u.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,c.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5840:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:void 0,unoptimized:!1}},6654:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return i}});let n=r(2115);function i(e,t){let r=(0,n.useRef)(null),i=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(r.current=a(e,n)),t&&(i.current=a(t,n))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6752:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return a}});let n=r(8229)._(r(2115)),i=r(5840),a=n.default.createContext(i.imageConfigDefault)},6766:(e,t,r)=>{r.d(t,{default:()=>i.a});var n=r(1469),i=r.n(n)},7544:(e,t)=>{function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},8883:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(3230);let n=r(5100),i=r(5840);function a(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r,l;let u,d,s,{src:c,sizes:f,unoptimized:p=!1,priority:h=!1,loading:m,className:g,quality:y,width:v,height:b,fill:_=!1,style:w,overrideSrc:x,onLoad:k,onLoadingComplete:j,placeholder:M="empty",blurDataURL:C,fetchPriority:O,decoding:P="async",layout:S,objectFit:E,objectPosition:A,lazyBoundary:z,lazyRoot:R,...I}=e,{imgConf:N,showAltText:D,blurComplete:L,defaultLoader:T}=t,q=N||i.imageConfigDefault;if("allSizes"in q)u=q;else{let e=[...q.deviceSizes,...q.imageSizes].sort((e,t)=>e-t),t=q.deviceSizes.sort((e,t)=>e-t),n=null==(r=q.qualities)?void 0:r.sort((e,t)=>e-t);u={...q,allSizes:e,deviceSizes:t,qualities:n}}if(void 0===T)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let U=I.loader||T;delete I.loader,delete I.srcSet;let V="__next_img_default"in U;if(V){if("custom"===u.loader)throw Object.defineProperty(Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=U;U=t=>{let{config:r,...n}=t;return e(n)}}if(S){"fill"===S&&(_=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[S];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[S];t&&!f&&(f=t)}let B="",F=o(v),W=o(b);if((l=c)&&"object"==typeof l&&(a(l)||void 0!==l.src)){let e=a(c)?c.default:c;if(!e.src)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!e.height||!e.width)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(d=e.blurWidth,s=e.blurHeight,C=C||e.blurDataURL,B=e.src,!_){if(F||W){if(F&&!W){let t=F/e.width;W=Math.round(e.height*t)}else if(!F&&W){let t=W/e.height;F=Math.round(e.width*t)}}else F=e.width,W=e.height}}let G=!h&&("lazy"===m||void 0===m);(!(c="string"==typeof c?c:B)||c.startsWith("data:")||c.startsWith("blob:"))&&(p=!0,G=!1),u.unoptimized&&(p=!0),V&&!u.dangerouslyAllowSVG&&c.split("?",1)[0].endsWith(".svg")&&(p=!0);let H=o(y),X=Object.assign(_?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:A}:{},D?{}:{color:"transparent"},w),$=L||"empty"===M?null:"blur"===M?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:F,heightInt:W,blurWidth:d,blurHeight:s,blurDataURL:C||"",objectFit:X.objectFit})+'")':'url("'+M+'")',Z=$?{backgroundSize:X.objectFit||"cover",backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:$}:{},J=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:a,sizes:o,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:d}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,o),s=u.length-1;return{sizes:o||"w"!==d?o:"100vw",srcSet:u.map((e,n)=>l({config:t,src:r,quality:a,width:e})+" "+("w"===d?e:n+1)+d).join(", "),src:l({config:t,src:r,quality:a,width:u[s]})}}({config:u,src:c,unoptimized:p,width:F,quality:H,sizes:f,loader:U});return{props:{...I,loading:G?"lazy":m,fetchPriority:O,width:F,height:W,decoding:P,className:g,style:{...X,...Z},sizes:J.sizes,srcSet:J.srcSet,src:x||J.src},meta:{unoptimized:p,priority:h,placeholder:M,fill:_}}}},9074:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(9946).A)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]])},9803:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(9946).A)("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]])},9869:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(9946).A)("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]])},9946:(e,t,r)=>{r.d(t,{A:()=>u});var n=r(2115);let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:i=24,strokeWidth:l=2,absoluteStrokeWidth:u,className:d="",children:s,iconNode:c,...f}=e;return(0,n.createElement)("svg",{ref:t,...o,width:i,height:i,stroke:r,strokeWidth:u?24*Number(l)/Number(i):l,className:a("lucide",d),...f},[...c.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(s)?s:[s]])}),u=(e,t)=>{let r=(0,n.forwardRef)((r,o)=>{let{className:u,...d}=r;return(0,n.createElement)(l,{ref:o,iconNode:t,className:a("lucide-".concat(i(e)),u),...d})});return r.displayName="".concat(e),r}}}]);