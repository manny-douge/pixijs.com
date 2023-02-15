"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[8372],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,b=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(b,l(l({ref:t},s),{},{components:r})):n.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6672:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={id:"ICubeResourceOptions.pixi_core",title:"Interface: ICubeResourceOptions",sidebar_label:"ICubeResourceOptions",custom_edit_url:null},l=void 0,i={unversionedId:"api/interfaces/ICubeResourceOptions.pixi_core",id:"api/interfaces/ICubeResourceOptions.pixi_core",title:"Interface: ICubeResourceOptions",description:"@pixi/core.ICubeResourceOptions",source:"@site/docs/api/interfaces/ICubeResourceOptions.pixi_core.mdx",sourceDirName:"api/interfaces",slug:"/api/interfaces/ICubeResourceOptions.pixi_core",permalink:"/api/interfaces/ICubeResourceOptions.pixi_core",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ICubeResourceOptions.pixi_core",title:"Interface: ICubeResourceOptions",sidebar_label:"ICubeResourceOptions",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"IArrayBuffer",permalink:"/api/interfaces/IArrayBuffer.pixi_core"},next:{title:"IGraphicsBatchElement",permalink:"/api/interfaces/IGraphicsBatchElement.pixi_graphics"}},u={},p=[{value:"Summary",id:"summary",level:2},{value:"Extends",id:"extends",level:2},{value:"Members",id:"members",level:2},{value:"autoLoad: <span><code>boolean</code></span>",id:"autoload-boolean",level:3},{value:"linkBaseTexture: <span><code>boolean</code></span>",id:"linkbasetexture-boolean",level:3}],s={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/pixi_core"},"@pixi/core"),".ICubeResourceOptions"),(0,a.kt)("p",null,"Constructor options for CubeResource"),(0,a.kt)("p",null,"// TODO: @see"),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Properties"),(0,a.kt)("p",null,(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"autoLoad"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},"Whether to auto-load resources")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkBaseTexture"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},"In case BaseTextures are supplied, whether to copy them or use.")))))),(0,a.kt)("h2",{id:"extends"},"Extends"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../interfaces/PIXI.ISize.pixi_math"},"PIXI.ISize"))),(0,a.kt)("h2",{id:"members"},"Members"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"autoload-boolean"},"autoLoad: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"boolean"))),(0,a.kt)("p",null,"Whether to auto-load resources")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"linkbasetexture-boolean"},"linkBaseTexture: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"boolean"))),(0,a.kt)("p",null,"In case BaseTextures are supplied, whether to copy them or use.")),(0,a.kt)("hr",null))}c.isMDXComponent=!0}}]);