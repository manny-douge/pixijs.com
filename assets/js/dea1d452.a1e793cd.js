"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[9763],{3905:(e,t,l)=>{l.d(t,{Zo:()=>s,kt:()=>k});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var p=n.createContext({}),o=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},s=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=o(l),c=a,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||r;return l?n.createElement(k,i(i({ref:t},s),{},{components:l})):n.createElement(k,i({ref:t},s))}));function k(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,i=new Array(r);i[0]=c;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[d]="string"==typeof e?e:a,i[1]=u;for(var o=2;o<r;o++)i[o]=l[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},3956:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>u,toc:()=>o});var n=l(87462),a=(l(67294),l(3905));const r={id:"PIXI.Ellipse.pixi_math",title:"Class: PIXI.Ellipse",sidebar_label:"PIXI.Ellipse",custom_edit_url:null},i=void 0,u={unversionedId:"api/classes/PIXI.Ellipse.pixi_math",id:"api/classes/PIXI.Ellipse.pixi_math",title:"Class: PIXI.Ellipse",description:"@pixi/math.Ellipse",source:"@site/docs/api/classes/PIXI.Ellipse.pixi_math.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.Ellipse.pixi_math",permalink:"/api/classes/PIXI.Ellipse.pixi_math",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.Ellipse.pixi_math",title:"Class: PIXI.Ellipse",sidebar_label:"PIXI.Ellipse",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.DisplayObject",permalink:"/api/classes/PIXI.DisplayObject.pixi_display"},next:{title:"PIXI.EventBoundary",permalink:"/api/classes/PIXI.EventBoundary.pixi_events"}},p={},o=[{value:"new PIXI.Ellipse: <span><code>(x: number, y: number, halfWidth: number, halfHeight: number) </code></span>",id:"new-pixiellipse-x-number-y-number-halfwidth-number-halfheight-number-",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Members",id:"members",level:2},{value:"height: <span><code>number</code></span>",id:"height-number",level:3},{value:"type: <span><code>SHAPES.ELIP</code></span>",id:"type-shapeselip",level:3},{value:"width: <span><code>number</code></span>",id:"width-number",level:3},{value:"x: <span><code>number</code></span>",id:"x-number",level:3},{value:"y: <span><code>number</code></span>",id:"y-number",level:3},{value:"Methods",id:"methods",level:2},{value:"clone: <span><code>() -&gt; PIXI.Ellipse</code></span>",id:"clone----pixiellipse",level:3},{value:"Returns:",id:"returns",level:4},{value:"contains: <span><code>(x: number, y: number) -&gt; boolean</code></span>",id:"contains-x-number-y-number---boolean",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Returns:",id:"returns-1",level:4},{value:"getBounds: <span><code>() -&gt; Rectangle</code></span>",id:"getbounds----rectangle",level:3},{value:"Returns:",id:"returns-2",level:4}],s={toc:o};function d(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/pixi_math"},"@pixi/math"),".Ellipse"),(0,a.kt)("p",null,"The Ellipse object is used to help draw graphics and can also be used to specify a hit area for displayObjects."),(0,a.kt)("p",null,"// TODO: @see"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"new-pixiellipse-x-number-y-number-halfwidth-number-halfheight-number-"},"new PIXI.Ellipse: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"(x",":"," number, y",":"," number, halfWidth",":"," number, halfHeight",":"," number) "))),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"0")),(0,a.kt)("td",{parentName:"tr",align:null},"The X coordinate of the center of this ellipse")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"y"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"0")),(0,a.kt)("td",{parentName:"tr",align:null},"The Y coordinate of the center of this ellipse")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"halfWidth"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"0")),(0,a.kt)("td",{parentName:"tr",align:null},"The half width of this ellipse")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"halfHeight"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"0")),(0,a.kt)("td",{parentName:"tr",align:null},"The half height of this ellipse"))))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"members"},"Members"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"height-number"},"height: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,"0")))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"type-shapeselip"},"type: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"SHAPES.ELIP"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,"PIXI.SHAPES.ELIP"))),(0,a.kt)("p",null,"The type of the object, mainly used to avoid ",(0,a.kt)("inlineCode",{parentName:"p"},"instanceof")," checks")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"width-number"},"width: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,"0")))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"x-number"},"x: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,"0")))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"y-number"},"y: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,"0")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"clone----pixiellipse"},"clone: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"() -",">"," PIXI.Ellipse"))),(0,a.kt)("p",null,"Creates a clone of this Ellipse instance"),(0,a.kt)("h4",{id:"returns"},"Returns:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"PIXI.Ellipse")),(0,a.kt)("td",{parentName:"tr",align:null},"A copy of the ellipse"))))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"contains-x-number-y-number---boolean"},"contains: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"(x",":"," number, y",":"," number) -",">"," boolean"))),(0,a.kt)("p",null,"Checks whether the x and y coordinates given are contained within this ellipse"),(0,a.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"The X coordinate of the point to test")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"y"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"The Y coordinate of the point to test")))),(0,a.kt)("h4",{id:"returns-1"},"Returns:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},"Whether the x/y coords are within this ellipse"))))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"getbounds----rectangle"},"getBounds: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"() -",">"," Rectangle"))),(0,a.kt)("p",null,"Returns the framing rectangle of the ellipse as a Rectangle object"),(0,a.kt)("h4",{id:"returns-2"},"Returns:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"Rectangle")),(0,a.kt)("td",{parentName:"tr",align:null},"The framing rectangle"))))),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);