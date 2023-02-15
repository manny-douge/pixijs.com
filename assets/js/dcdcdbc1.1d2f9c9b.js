"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[4691],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),g=a,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||i;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},24716:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={id:"PIXI.IAdapter.pixi_settings",title:"Interface: PIXI.IAdapter",sidebar_label:"PIXI.IAdapter",custom_edit_url:null},l=void 0,o={unversionedId:"api/interfaces/PIXI.IAdapter.pixi_settings",id:"api/interfaces/PIXI.IAdapter.pixi_settings",title:"Interface: PIXI.IAdapter",description:"@pixi/settings.IAdapter",source:"@site/docs/api/interfaces/PIXI.IAdapter.pixi_settings.mdx",sourceDirName:"api/interfaces",slug:"/api/interfaces/PIXI.IAdapter.pixi_settings",permalink:"/api/interfaces/PIXI.IAdapter.pixi_settings",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.IAdapter.pixi_settings",title:"Interface: PIXI.IAdapter",sidebar_label:"PIXI.IAdapter",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.FormatDetectionParser",permalink:"/api/interfaces/PIXI.FormatDetectionParser.pixi_assets"},next:{title:"PIXI.IApplicationOptions",permalink:"/api/interfaces/PIXI.IApplicationOptions.pixi_app"}},s={},p=[{value:"Summary",id:"summary",level:2},{value:"Members",id:"members",level:2},{value:"createCanvas: <span><code>(width: number, height: number) =&gt; ICanvas</code></span>",id:"createcanvas-width-number-height-number--icanvas",level:3},{value:"getBaseUrl: <span><code>() =&gt; string</code></span>",id:"getbaseurl---string",level:3},{value:"getCanvasRenderingContext2D: <span><code>() =&gt; { prototype : ICanvasRenderingContext2D }</code></span>",id:"getcanvasrenderingcontext2d----prototype--icanvasrenderingcontext2d-",level:3},{value:"getNavigator: <span><code>() =&gt; { userAgent : string }</code></span>",id:"getnavigator----useragent--string-",level:3},{value:"getWebGLRenderingContext: <span><code>() =&gt; typeof WebGLRenderingContext</code></span>",id:"getwebglrenderingcontext---typeof-webglrenderingcontext",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/pixi_settings"},"@pixi/settings"),".IAdapter"),(0,a.kt)("p",null,"This interface describes all the DOM dependent calls that Pixi makes throughout its codebase. Implementations of this interface can be used to make sure Pixi will work in any environment, such as browser, Web Workers, and Node.js."),(0,a.kt)("p",null,"// TODO: @see"),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Properties"),(0,a.kt)("p",null,(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"createCanvas"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"(width",":"," number, height",":"," number) =",">"," ICanvas")),(0,a.kt)("td",{parentName:"tr",align:null},"Returns a canvas object that can be used to create a webgl context.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"getBaseUrl"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"() =",">"," string")),(0,a.kt)("td",{parentName:"tr",align:null},"Returns the current base URL For browser environments this is either the document.baseURI or window.location.href")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"getCanvasRenderingContext2D"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"() =",">"," ","{"," prototype ",":"," ICanvasRenderingContext2D ","}")),(0,a.kt)("td",{parentName:"tr",align:null},"Returns a 2D rendering context.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"getNavigator"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"() =",">"," ","{"," userAgent ",":"," string ","}")),(0,a.kt)("td",{parentName:"tr",align:null},"Returns a partial implementation of the browsers window.navigator")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"getWebGLRenderingContext"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"() =",">"," typeof WebGLRenderingContext")),(0,a.kt)("td",{parentName:"tr",align:null},"Returns a WebGL rendering context.")))))),(0,a.kt)("h2",{id:"members"},"Members"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"createcanvas-width-number-height-number--icanvas"},"createCanvas: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"(width",":"," number, height",":"," number) =",">"," ICanvas"))),(0,a.kt)("p",null,"Returns a canvas object that can be used to create a webgl context.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"getbaseurl---string"},"getBaseUrl: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"() =",">"," string"))),(0,a.kt)("p",null,"Returns the current base URL For browser environments this is either the document.baseURI or window.location.href")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"getcanvasrenderingcontext2d----prototype--icanvasrenderingcontext2d-"},"getCanvasRenderingContext2D: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"() =",">"," ","{"," prototype ",":"," ICanvasRenderingContext2D ","}"))),(0,a.kt)("p",null,"Returns a 2D rendering context.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"getnavigator----useragent--string-"},"getNavigator: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"() =",">"," ","{"," userAgent ",":"," string ","}"))),(0,a.kt)("p",null,"Returns a partial implementation of the browsers window.navigator")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"getwebglrenderingcontext---typeof-webglrenderingcontext"},"getWebGLRenderingContext: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"() =",">"," typeof WebGLRenderingContext"))),(0,a.kt)("p",null,"Returns a WebGL rendering context.")),(0,a.kt)("hr",null))}c.isMDXComponent=!0}}]);