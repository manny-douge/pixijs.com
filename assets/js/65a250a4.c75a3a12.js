"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[9516],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(r),c=a,f=p["".concat(l,".").concat(c)]||p[c]||d[c]||i;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},40941:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={id:"PIXI.FormatDetectionParser.pixi_assets",title:"Interface: PIXI.FormatDetectionParser",sidebar_label:"PIXI.FormatDetectionParser",custom_edit_url:null},o=void 0,s={unversionedId:"api/interfaces/PIXI.FormatDetectionParser.pixi_assets",id:"api/interfaces/PIXI.FormatDetectionParser.pixi_assets",title:"Interface: PIXI.FormatDetectionParser",description:"@pixi/assets.FormatDetectionParser",source:"@site/docs/api/interfaces/PIXI.FormatDetectionParser.pixi_assets.mdx",sourceDirName:"api/interfaces",slug:"/api/interfaces/PIXI.FormatDetectionParser.pixi_assets",permalink:"/api/interfaces/PIXI.FormatDetectionParser.pixi_assets",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.FormatDetectionParser.pixi_assets",title:"Interface: PIXI.FormatDetectionParser",sidebar_label:"PIXI.FormatDetectionParser",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.FederatedEventTarget",permalink:"/api/interfaces/PIXI.FederatedEventTarget.pixi_events"},next:{title:"PIXI.IAdapter",permalink:"/api/interfaces/PIXI.IAdapter.pixi_settings"}},l={},u=[{value:"Summary",id:"summary",level:2},{value:"Members",id:"members",level:2},{value:"add: <span><code>(formats: string[]) =&gt; Promise&lt;string[]&gt;</code></span>",id:"add-formats-string--promisestring",level:3},{value:"extension: <span><code>ExtensionMetadata</code></span>",id:"extension-extensionmetadata",level:3},{value:"remove: <span><code>(formats: string[]) =&gt; Promise&lt;string[]&gt;</code></span>",id:"remove-formats-string--promisestring",level:3},{value:"test: <span><code>() =&gt; Promise&lt;boolean&gt;</code></span>",id:"test---promiseboolean",level:3}],m={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/pixi_assets"},"@pixi/assets"),".FormatDetectionParser"),(0,a.kt)("p",null,"Format detection is useful for detecting feature support on the current platform."),(0,a.kt)("p",null,"// TODO: @see"),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Properties"),(0,a.kt)("p",null,(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"add"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"(formats",":"," string[]) =",">"," Promise","<","string[]",">")),(0,a.kt)("td",{parentName:"tr",align:null},"Add formats (file extensions) to the existing list of formats. Return an new array with added formats, do not mutate the formats argument.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"extension"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"ExtensionMetadata")),(0,a.kt)("td",{parentName:"tr",align:null},"Should be ExtensionType.DetectionParser")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"remove"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"(formats",":"," string[]) =",">"," Promise","<","string[]",">")),(0,a.kt)("td",{parentName:"tr",align:null},"Remove formats (file extensions) from the list of supported formats. This is used when uninstalling this DetectionParser. Return an new array with filtered formats, do not mutate the formats argument.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"test"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"() =",">"," Promise","<","boolean",">")),(0,a.kt)("td",{parentName:"tr",align:null},"Browser/platform feature detection supported if return true")))))),(0,a.kt)("h2",{id:"members"},"Members"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"add-formats-string--promisestring"},"add: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"(formats",":"," string[]) =",">"," Promise","<","string[]",">"))),(0,a.kt)("p",null,"Add formats (file extensions) to the existing list of formats. Return an new array with added formats, do not mutate the formats argument.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"extension-extensionmetadata"},"extension: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"ExtensionMetadata"))),(0,a.kt)("p",null,"Should be ExtensionType.DetectionParser")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"remove-formats-string--promisestring"},"remove: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"(formats",":"," string[]) =",">"," Promise","<","string[]",">"))),(0,a.kt)("p",null,"Remove formats (file extensions) from the list of supported formats. This is used when uninstalling this DetectionParser. Return an new array with filtered formats, do not mutate the formats argument.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"test---promiseboolean"},"test: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"() =",">"," Promise","<","boolean",">"))),(0,a.kt)("p",null,"Browser/platform feature detection supported if return true")),(0,a.kt)("hr",null))}p.isMDXComponent=!0}}]);