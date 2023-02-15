"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[3882],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,y=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68404:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={id:"PIXI.ExtensionFormatLoose.pixi_extensions",title:"Interface: PIXI.ExtensionFormatLoose",sidebar_label:"PIXI.ExtensionFormatLoose",custom_edit_url:null},o=void 0,l={unversionedId:"api/interfaces/PIXI.ExtensionFormatLoose.pixi_extensions",id:"api/interfaces/PIXI.ExtensionFormatLoose.pixi_extensions",title:"Interface: PIXI.ExtensionFormatLoose",description:"@pixi/extensions.ExtensionFormatLoose",source:"@site/docs/api/interfaces/PIXI.ExtensionFormatLoose.pixi_extensions.mdx",sourceDirName:"api/interfaces",slug:"/api/interfaces/PIXI.ExtensionFormatLoose.pixi_extensions",permalink:"/api/interfaces/PIXI.ExtensionFormatLoose.pixi_extensions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.ExtensionFormatLoose.pixi_extensions",title:"Interface: PIXI.ExtensionFormatLoose",sidebar_label:"PIXI.ExtensionFormatLoose",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.ExtensionFormat",permalink:"/api/interfaces/PIXI.ExtensionFormat.pixi_extensions"},next:{title:"PIXI.FederatedEventTarget",permalink:"/api/interfaces/PIXI.FederatedEventTarget.pixi_events"}},s={},p=[{value:"Summary",id:"summary",level:2},{value:"Members",id:"members",level:2},{value:"name: <span><code>string</code></span>",id:"name-string",level:3},{value:"priority: <span><code>number</code></span>",id:"priority-number",level:3},{value:"ref: <span><code>any</code></span>",id:"ref-any",level:3},{value:"type: <span><code>ExtensionType | ExtensionType[]</code></span>",id:"type-extensiontype--extensiontype",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/pixi_extensions"},"@pixi/extensions"),".ExtensionFormatLoose"),(0,a.kt)("p",null,"Format when registering an extension. Generally, the extension should have these values as ",(0,a.kt)("inlineCode",{parentName:"p"},"extension")," static property, but you can override name or type by providing an object."),(0,a.kt)("p",null,"// TODO: @see"),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Properties"),(0,a.kt)("p",null,(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. Some plugins provide an API name/property, such as Renderer plugins")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"priority"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional, used for sorting the plugins in a particular order")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ref"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"any")),(0,a.kt)("td",{parentName:"tr",align:null},"Reference to the plugin object/class")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"type"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"ExtensionType ","|"," ExtensionType[]")),(0,a.kt)("td",{parentName:"tr",align:null},"The extension type, can be multiple types")))))),(0,a.kt)("h2",{id:"members"},"Members"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"name-string"},"name: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"string"))),(0,a.kt)("p",null,"Optional. Some plugins provide an API name/property, such as Renderer plugins")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"priority-number"},"priority: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("p",null,"Optional, used for sorting the plugins in a particular order")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"ref-any"},"ref: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"any"))),(0,a.kt)("p",null,"Reference to the plugin object/class")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"type-extensiontype--extensiontype"},"type: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"ExtensionType ","|"," ExtensionType[]"))),(0,a.kt)("p",null,"The extension type, can be multiple types")),(0,a.kt)("hr",null))}c.isMDXComponent=!0}}]);