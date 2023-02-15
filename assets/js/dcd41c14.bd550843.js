"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[8123],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=l.createContext({}),p=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=p(e.components);return l.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(n),k=r,d=c["".concat(o,".").concat(k)]||c[k]||m[k]||a;return n?l.createElement(d,u(u({ref:t},s),{},{components:n})):l.createElement(d,u({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,u=new Array(a);u[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:r,u[1]=i;for(var p=2;p<a;p++)u[p]=n[p];return l.createElement.apply(null,u)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},67559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var l=n(87462),r=(n(67294),n(3905));const a={id:"PIXI.groupD8.pixi_math",title:"Namespace: PIXI.groupD8",sidebar_label:"PIXI.groupD8",custom_edit_url:null},u=void 0,i={unversionedId:"api/namespaces/PIXI.groupD8.pixi_math",id:"api/namespaces/PIXI.groupD8.pixi_math",title:"Namespace: PIXI.groupD8",description:"@pixi/math.groupD8",source:"@site/docs/api/namespaces/PIXI.groupD8.pixi_math.mdx",sourceDirName:"api/namespaces",slug:"/api/namespaces/PIXI.groupD8.pixi_math",permalink:"/api/namespaces/PIXI.groupD8.pixi_math",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.groupD8.pixi_math",title:"Namespace: PIXI.groupD8",sidebar_label:"PIXI.groupD8",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.graphicsUtils",permalink:"/api/namespaces/PIXI.graphicsUtils.pixi_graphics"},next:{title:"PIXI",permalink:"/api/namespaces/PIXI.pixi_core"}},o={},p=[{value:"Members",id:"members",level:2},{value:"E: <span><code>number</code></span>",id:"e-number",level:3},{value:"MAIN_DIAGONAL: <span><code>number</code></span>",id:"main_diagonal-number",level:3},{value:"MIRROR_HORIZONTAL: <span><code>number</code></span>",id:"mirror_horizontal-number",level:3},{value:"MIRROR_VERTICAL: <span><code>number</code></span>",id:"mirror_vertical-number",level:3},{value:"N: <span><code>number</code></span>",id:"n-number",level:3},{value:"NE: <span><code>number</code></span>",id:"ne-number",level:3},{value:"NW: <span><code>number</code></span>",id:"nw-number",level:3},{value:"REVERSE_DIAGONAL: <span><code>number</code></span>",id:"reverse_diagonal-number",level:3},{value:"S: <span><code>number</code></span>",id:"s-number",level:3},{value:"SE: <span><code>number</code></span>",id:"se-number",level:3},{value:"SW: <span><code>number</code></span>",id:"sw-number",level:3},{value:"W: <span><code>number</code></span>",id:"w-number",level:3}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../modules/pixi_math"},"@pixi/math"),".groupD8"),(0,r.kt)("p",null,"Implements the dihedral group D8, which is similar to ",(0,r.kt)("a",{parentName:"p",href:"http://mathworld.wolfram.com/DihedralGroupD4.html"},"group D4"),"; D8 is the same but with diagonals, and it is used for texture rotations."),(0,r.kt)("p",null,"The directions the U- and V- axes after rotation of an angle of ",(0,r.kt)("inlineCode",{parentName:"p"},"a: GD8Constant")," are the vectors ",(0,r.kt)("inlineCode",{parentName:"p"},"(uX(a), uY(a))"),"and ",(0,r.kt)("inlineCode",{parentName:"p"},"(vX(a), vY(a))"),". These aren't necessarily unit vectors."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Origin",":"),"This is the small part of gameofbombs.com portal system. It works."),(0,r.kt)("p",null,"// TODO: @see"),(0,r.kt)("h2",{id:"members"},"Members"),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"e-number"},"E: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"0"))),(0,r.kt)("p",null,"|"," Rotation ","|"," Direction ","|","\n","|"," -------- ","|"," --------- ","|","\n","|"," 0\xb0       ","|"," East      ","|")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"main_diagonal-number"},"MAIN_DIAGONAL: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"10"))),(0,r.kt)("p",null,"Reflection about the main diagonal.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"mirror_horizontal-number"},"MIRROR_HORIZONTAL: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"12"))),(0,r.kt)("p",null,"Reflection about X-axis.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"mirror_vertical-number"},"MIRROR_VERTICAL: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"8"))),(0,r.kt)("p",null,"Reflection about Y-axis.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"n-number"},"N: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"6"))),(0,r.kt)("p",null,"|"," Rotation    ","|"," Direction ","|","\n","|"," ----------- ","|"," --------- ","|","\n","|"," ","-","90\xb0/270\xb0\u21bb ","|"," North     ","|")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"ne-number"},"NE: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"7"))),(0,r.kt)("p",null,"|"," Rotation    ","|"," Direction ","|","\n","|"," ----------- ","|"," --------- ","|","\n","|"," ","-","45\xb0/315\xb0\u21bb ","|"," Northeast ","|")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"nw-number"},"NW: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"5"))),(0,r.kt)("p",null,"|"," Rotation     ","|"," Direction ","|","\n","|"," ------------ ","|"," --------- ","|","\n","|"," ","-","135\xb0/225\xb0\u21bb ","|"," Northwest ","|")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"reverse_diagonal-number"},"REVERSE_DIAGONAL: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"14"))),(0,r.kt)("p",null,"Reflection about reverse diagonal.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"s-number"},"S: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"2"))),(0,r.kt)("p",null,"|"," Rotation ","|"," Direction ","|","\n","|"," -------- ","|"," --------- ","|","\n","|"," 90\xb0\u21bb     ","|"," South     ","|")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"se-number"},"SE: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"1"))),(0,r.kt)("p",null,"|"," Rotation ","|"," Direction ","|","\n","|"," -------- ","|"," --------- ","|","\n","|"," 45\xb0\u21bb     ","|"," Southeast ","|")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"sw-number"},"SW: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"3"))),(0,r.kt)("p",null,"|"," Rotation ","|"," Direction ","|","\n","|"," -------- ","|"," --------- ","|","\n","|"," 135\xb0\u21bb    ","|"," Southwest ","|")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"w-number"},"W: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"4"))),(0,r.kt)("p",null,"|"," Rotation ","|"," Direction ","|","\n","|"," -------- ","|"," --------- ","|","\n","|"," 180\xb0     ","|"," West      ","|")),(0,r.kt)("hr",null))}c.isMDXComponent=!0}}]);