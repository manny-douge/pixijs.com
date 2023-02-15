"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[74],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=l.createContext({}),p=function(e){var t=l.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return l.createElement(i.Provider,{value:t},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),k=p(a),d=n,m=k["".concat(i,".").concat(d)]||k[d]||c[d]||r;return a?l.createElement(m,o(o({ref:t},u),{},{components:a})):l.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[k]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},75163:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var l=a(87462),n=(a(67294),a(3905));const r={id:"PIXI.MaskData.pixi_core",title:"Class: PIXI.MaskData",sidebar_label:"PIXI.MaskData",custom_edit_url:null},o=void 0,s={unversionedId:"api/classes/PIXI.MaskData.pixi_core",id:"api/classes/PIXI.MaskData.pixi_core",title:"Class: PIXI.MaskData",description:"@pixi/core.MaskData",source:"@site/docs/api/classes/PIXI.MaskData.pixi_core.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.MaskData.pixi_core",permalink:"/api/classes/PIXI.MaskData.pixi_core",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.MaskData.pixi_core",title:"Class: PIXI.MaskData",sidebar_label:"PIXI.MaskData",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.LineStyle",permalink:"/api/classes/PIXI.LineStyle.pixi_graphics"},next:{title:"PIXI.MaskSystem",permalink:"/api/classes/PIXI.MaskSystem.pixi_core"}},i={},p=[{value:"new PIXI.MaskData: <span><code>(maskObject: PIXI.DisplayObject) </code></span>",id:"new-piximaskdata-maskobject-pixidisplayobject-",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Members",id:"members",level:2},{value:"autoDetect: <span><code>boolean</code></span>",id:"autodetect-boolean",level:3},{value:"colorMask: <span><code>COLOR_MASK_BITS</code></span>",id:"colormask-color_mask_bits",level:3},{value:"enabled: <span><code>boolean</code></span>",id:"enabled-boolean",level:3},{value:"filter: <span><code>ISpriteMaskFilter</code></span>",id:"filter-ispritemaskfilter",level:3},{value:"isMaskData: <span><code>boolean</code></span>",id:"ismaskdata-boolean",level:3},{value:"maskObject: <span><code>PIXI.DisplayObject</code></span>",id:"maskobject-pixidisplayobject",level:3},{value:"multisample: <span><code>MSAA_QUALITY</code></span>",id:"multisample-msaa_quality",level:3},{value:"pooled: <span><code>boolean</code></span>",id:"pooled-boolean",level:3},{value:"resolution: <span><code>number</code></span>",id:"resolution-number",level:3},{value:"type: <span><code>MASK_TYPES</code></span>",id:"type-mask_types",level:3},{value:"Methods",id:"methods",level:2},{value:"copyCountersOrReset: <span><code>(maskAbove: MaskData) -&gt; void</code></span>",id:"copycountersorreset-maskabove-maskdata---void",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"reset: <span><code>() -&gt; void</code></span>",id:"reset----void",level:3}],u={toc:p};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../modules/pixi_core"},"@pixi/core"),".MaskData"),(0,n.kt)("p",null,"Component for masked elements.\nHolds mask mode and temporary data about current mask."),(0,n.kt)("p",null,"// TODO: @see"),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"new-piximaskdata-maskobject-pixidisplayobject-"},"new PIXI.MaskData: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"(maskObject",":"," PIXI.DisplayObject) "))),(0,n.kt)("p",null,"Create MaskData"),(0,n.kt)("h4",{id:"parameters"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"maskObject"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"PIXI.DisplayObject")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"null")),(0,n.kt)("td",{parentName:"tr",align:null},"object that describes the mask"))))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"members"},"Members"),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"autodetect-boolean"},"autoDetect: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"boolean"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,n.kt)("code",null,"true"))),(0,n.kt)("p",null,"Whether we know the mask type beforehand")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"colormask-color_mask_bits"},"colorMask: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"COLOR_MASK_BITS"))),(0,n.kt)("p",null,"Color mask.")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"enabled-boolean"},"enabled: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"boolean"))),(0,n.kt)("p",null,"If enabled is true the mask is applied, if false it will not.")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"filter-ispritemaskfilter"},"filter: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"ISpriteMaskFilter"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,n.kt)("code",null,"null"))),(0,n.kt)("p",null,"The sprite mask filter. If set to ",(0,n.kt)("inlineCode",{parentName:"p"},"null"),", the default sprite mask filter is used.")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"ismaskdata-boolean"},"isMaskData: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"boolean"))),(0,n.kt)("p",null,"Indicator of the type (always true for ",(0,n.kt)("a",{parentName:"p",href:"../classes/PIXI.MaskData.pixi_core"},"PIXI.MaskData")," objects)")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"maskobject-pixidisplayobject"},"maskObject: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"PIXI.DisplayObject"))),(0,n.kt)("p",null,"Which element we use to mask")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"multisample-msaa_quality"},"multisample: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"MSAA_QUALITY"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,n.kt)("code",null,"PIXI.Filter.defaultMultisample"))),(0,n.kt)("p",null,"Number of samples of the sprite mask filter. If set to ",(0,n.kt)("inlineCode",{parentName:"p"},"null"),", the sample count of the current render target is used.")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"pooled-boolean"},"pooled: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"boolean"))),(0,n.kt)("p",null,"Whether it belongs to MaskSystem pool")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"resolution-number"},"resolution: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"number"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,n.kt)("code",null,"null"))),(0,n.kt)("p",null,"Resolution of the sprite mask filter. If set to ",(0,n.kt)("inlineCode",{parentName:"p"},"null")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"0"),", the resolution of the current render target is used.")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"type-mask_types"},"type: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"MASK_TYPES"))),(0,n.kt)("p",null,"Mask type")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"copycountersorreset-maskabove-maskdata---void"},"copyCountersOrReset: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"(maskAbove",":"," MaskData) -",">"," void"))),(0,n.kt)("p",null,"Copies counters from maskData above, called from pushMask()."),(0,n.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"maskAbove"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"MaskData")),(0,n.kt)("td",{parentName:"tr",align:null}))))),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"reset----void"},"reset: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"() -",">"," void"))),(0,n.kt)("p",null,"Resets the mask data after popMask().")),(0,n.kt)("hr",null))}k.isMDXComponent=!0}}]);