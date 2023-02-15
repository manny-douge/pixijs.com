"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[3879],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),o=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),m=o(r),s=a,k=m["".concat(p,".").concat(s)]||m[s]||c[s]||l;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=s;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[m]="string"==typeof e?e:a,i[1]=d;for(var o=2;o<l;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},84005:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var n=r(87462),a=(r(67294),r(3905));const l={id:"PIXI.IRenderableObject.pixi_core",title:"Interface: PIXI.IRenderableObject",sidebar_label:"PIXI.IRenderableObject",custom_edit_url:null},i=void 0,d={unversionedId:"api/interfaces/PIXI.IRenderableObject.pixi_core",id:"api/interfaces/PIXI.IRenderableObject.pixi_core",title:"Interface: PIXI.IRenderableObject",description:"@pixi/core.IRenderableObject",source:"@site/docs/api/interfaces/PIXI.IRenderableObject.pixi_core.mdx",sourceDirName:"api/interfaces",slug:"/api/interfaces/PIXI.IRenderableObject.pixi_core",permalink:"/api/interfaces/PIXI.IRenderableObject.pixi_core",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.IRenderableObject.pixi_core",title:"Interface: PIXI.IRenderableObject",sidebar_label:"PIXI.IRenderableObject",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.IRenderableContainer",permalink:"/api/interfaces/PIXI.IRenderableContainer.pixi_core"},next:{title:"PIXI.IRenderer",permalink:"/api/interfaces/PIXI.IRenderer.pixi_core"}},p={},o=[{value:"Summary",id:"summary",level:2},{value:"Extends",id:"extends",level:2},{value:"Members",id:"members",level:2},{value:"parent: <span><code>IRenderableContainer</code></span>",id:"parent-irenderablecontainer",level:3},{value:"transform: <span><code>Transform</code></span>",id:"transform-transform",level:3},{value:"Methods",id:"methods",level:2},{value:"disableTempParent: <span><code>(parent: IRenderableContainer) -&gt; void</code></span>",id:"disabletempparent-parent-irenderablecontainer---void",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"enableTempParent: <span><code>() -&gt; IRenderableContainer</code></span>",id:"enabletempparent----irenderablecontainer",level:3},{value:"Returns:",id:"returns",level:4},{value:"render: <span><code>(renderer: IRenderer) -&gt; void</code></span>",id:"render-renderer-irenderer---void",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"updateTransform: <span><code>() -&gt; void</code></span>",id:"updatetransform----void",level:3}],u={toc:o};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/pixi_core"},"@pixi/core"),".IRenderableObject"),(0,a.kt)("p",null,"Interface for DisplayObject to interface with Renderer. The minimum APIs needed to implement a renderable object."),(0,a.kt)("p",null,"// TODO: @see"),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Properties"),(0,a.kt)("p",null,(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"parent"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"IRenderableContainer")),(0,a.kt)("td",{parentName:"tr",align:null},"Object must have a parent container")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"transform"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"Transform")),(0,a.kt)("td",{parentName:"tr",align:null},"Object must have a transform")))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Methods"),(0,a.kt)("p",null,(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Params"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"disableTempParent"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"(parent",":"," IRenderableContainer) ")),(0,a.kt)("td",{parentName:"tr",align:null},"After method for transform updates")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"enableTempParent"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"() ")),(0,a.kt)("td",{parentName:"tr",align:null},"Before method for transform updates")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"render"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"(renderer",":"," IRenderer) ")),(0,a.kt)("td",{parentName:"tr",align:null},"Render object directly")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"updateTransform"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"() ")),(0,a.kt)("td",{parentName:"tr",align:null},"Update the transforms")))))),(0,a.kt)("h2",{id:"extends"},"Extends"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GlobalMixins.IRenderableObject")),(0,a.kt)("h2",{id:"members"},"Members"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"parent-irenderablecontainer"},"parent: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"IRenderableContainer"))),(0,a.kt)("p",null,"Object must have a parent container")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"transform-transform"},"transform: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"Transform"))),(0,a.kt)("p",null,"Object must have a transform")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"disabletempparent-parent-irenderablecontainer---void"},"disableTempParent: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"(parent",":"," IRenderableContainer) -",">"," void"))),(0,a.kt)("p",null,"After method for transform updates"),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"parent"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"IRenderableContainer")),(0,a.kt)("td",{parentName:"tr",align:null}))))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"enabletempparent----irenderablecontainer"},"enableTempParent: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"() -",">"," IRenderableContainer"))),(0,a.kt)("p",null,"Before method for transform updates"),(0,a.kt)("h4",{id:"returns"},"Returns:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"IRenderableContainer")),(0,a.kt)("td",{parentName:"tr",align:null}))))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"render-renderer-irenderer---void"},"render: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"(renderer",":"," IRenderer) -",">"," void"))),(0,a.kt)("p",null,"Render object directly"),(0,a.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"renderer"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"IRenderer")),(0,a.kt)("td",{parentName:"tr",align:null}))))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"updatetransform----void"},"updateTransform: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"() -",">"," void"))),(0,a.kt)("p",null,"Update the transforms")),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);