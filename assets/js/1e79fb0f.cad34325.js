"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[2324],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>h});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),p=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=p(t.components);return n.createElement(m.Provider,{value:e},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,o=u(t,["components","mdxType","originalType","parentName"]),d=p(a),s=r,h=d["".concat(m,".").concat(s)]||d[s]||k[s]||l;return a?n.createElement(h,i(i({ref:e},o),{},{components:a})):n.createElement(h,i({ref:e},o))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var u={};for(var m in e)hasOwnProperty.call(e,m)&&(u[m]=e[m]);u.originalType=t,u[d]="string"==typeof t?t:r,i[1]=u;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},17513:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={id:"PIXI.Matrix.pixi_math",title:"Class: PIXI.Matrix",sidebar_label:"PIXI.Matrix",custom_edit_url:null},i=void 0,u={unversionedId:"api/classes/PIXI.Matrix.pixi_math",id:"api/classes/PIXI.Matrix.pixi_math",title:"Class: PIXI.Matrix",description:"@pixi/math.Matrix",source:"@site/docs/api/classes/PIXI.Matrix.pixi_math.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.Matrix.pixi_math",permalink:"/api/classes/PIXI.Matrix.pixi_math",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.Matrix.pixi_math",title:"Class: PIXI.Matrix",sidebar_label:"PIXI.Matrix",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.MaskSystem",permalink:"/api/classes/PIXI.MaskSystem.pixi_core"},next:{title:"PIXI.Mesh",permalink:"/api/classes/PIXI.Mesh.pixi_mesh"}},m={},p=[{value:"new PIXI.Matrix: <span><code>(a: number, b: number, c: number, d: number, tx: number, ty: number) </code></span>",id:"new-piximatrix-a-number-b-number-c-number-d-number-tx-number-ty-number-",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Members",id:"members",level:2},{value:"IDENTITY: <span><code>Matrix</code></span>",id:"identity-matrix",level:3},{value:"TEMP_MATRIX: <span><code>Matrix</code></span>",id:"temp_matrix-matrix",level:3},{value:"a: <span><code>number</code></span>",id:"a-number",level:3},{value:"b: <span><code>number</code></span>",id:"b-number",level:3},{value:"c: <span><code>number</code></span>",id:"c-number",level:3},{value:"d: <span><code>number</code></span>",id:"d-number",level:3},{value:"tx: <span><code>number</code></span>",id:"tx-number",level:3},{value:"ty: <span><code>number</code></span>",id:"ty-number",level:3},{value:"Methods",id:"methods",level:2},{value:"append: <span><code>(matrix: Matrix) -&gt; this</code></span>",id:"append-matrix-matrix---this",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Returns:",id:"returns",level:4},{value:"apply: <span><code>(pos: IPointData, newPos: PIXI.Point) -&gt; PIXI.Point</code></span>",id:"apply-pos-ipointdata-newpos-pixipoint---pixipoint",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Returns:",id:"returns-1",level:4},{value:"applyInverse: <span><code>(pos: IPointData, newPos: PIXI.Point) -&gt; PIXI.Point</code></span>",id:"applyinverse-pos-ipointdata-newpos-pixipoint---pixipoint",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"Returns:",id:"returns-2",level:4},{value:"clone: <span><code>() -&gt; Matrix</code></span>",id:"clone----matrix",level:3},{value:"Returns:",id:"returns-3",level:4},{value:"copyFrom: <span><code>(matrix: PIXI.Matrix) -&gt; PIXI.Matrix</code></span>",id:"copyfrom-matrix-piximatrix---piximatrix",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"Returns:",id:"returns-4",level:4},{value:"copyTo: <span><code>(matrix: Matrix) -&gt; Matrix</code></span>",id:"copyto-matrix-matrix---matrix",level:3},{value:"Parameters:",id:"parameters-5",level:4},{value:"Returns:",id:"returns-5",level:4},{value:"decompose: <span><code>(transform: Transform) -&gt; Transform</code></span>",id:"decompose-transform-transform---transform",level:3},{value:"Parameters:",id:"parameters-6",level:4},{value:"Returns:",id:"returns-6",level:4},{value:"fromArray: <span><code>(array: number[]) -&gt; void</code></span>",id:"fromarray-array-number---void",level:3},{value:"Parameters:",id:"parameters-7",level:4},{value:"identity: <span><code>() -&gt; this</code></span>",id:"identity----this",level:3},{value:"Returns:",id:"returns-7",level:4},{value:"invert: <span><code>() -&gt; this</code></span>",id:"invert----this",level:3},{value:"Returns:",id:"returns-8",level:4},{value:"prepend: <span><code>(matrix: Matrix) -&gt; this</code></span>",id:"prepend-matrix-matrix---this",level:3},{value:"Parameters:",id:"parameters-8",level:4},{value:"Returns:",id:"returns-9",level:4},{value:"rotate: <span><code>(angle: number) -&gt; this</code></span>",id:"rotate-angle-number---this",level:3},{value:"Parameters:",id:"parameters-9",level:4},{value:"Returns:",id:"returns-10",level:4},{value:"scale: <span><code>(x: number, y: number) -&gt; this</code></span>",id:"scale-x-number-y-number---this",level:3},{value:"Parameters:",id:"parameters-10",level:4},{value:"Returns:",id:"returns-11",level:4},{value:"set: <span><code>(a: number, b: number, c: number, d: number, tx: number, ty: number) -&gt; this</code></span>",id:"set-a-number-b-number-c-number-d-number-tx-number-ty-number---this",level:3},{value:"Parameters:",id:"parameters-11",level:4},{value:"Returns:",id:"returns-12",level:4},{value:"setTransform: <span><code>(x: number, y: number, pivotX: number, pivotY: number, scaleX: number, scaleY: number, rotation: number, skewX: number, skewY: number) -&gt; this</code></span>",id:"settransform-x-number-y-number-pivotx-number-pivoty-number-scalex-number-scaley-number-rotation-number-skewx-number-skewy-number---this",level:3},{value:"Parameters:",id:"parameters-12",level:4},{value:"Returns:",id:"returns-13",level:4},{value:"toArray: <span><code>(transpose: boolean, out: Float32Array) -&gt; Float32Array</code></span>",id:"toarray-transpose-boolean-out-float32array---float32array",level:3},{value:"Parameters:",id:"parameters-13",level:4},{value:"Returns:",id:"returns-14",level:4},{value:"translate: <span><code>(x: number, y: number) -&gt; this</code></span>",id:"translate-x-number-y-number---this",level:3},{value:"Parameters:",id:"parameters-14",level:4},{value:"Returns:",id:"returns-15",level:4}],o={toc:p};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../modules/pixi_math"},"@pixi/math"),".Matrix"),(0,r.kt)("p",null,"The PixiJS Matrix as a class makes it a lot faster.\nHere is a representation of it",":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"| a | c | tx|\n| b | d | ty|\n| 0 | 0 | 1 |\n\n")),(0,r.kt)("p",null,"// TODO: @see"),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"new-piximatrix-a-number-b-number-c-number-d-number-tx-number-ty-number-"},"new PIXI.Matrix: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"(a",":"," number, b",":"," number, c",":"," number, d",":"," number, tx",":"," number, ty",":"," number) "))),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"a"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"1")),(0,r.kt)("td",{parentName:"tr",align:null},"x scale")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"b"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"0")),(0,r.kt)("td",{parentName:"tr",align:null},"y skew")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"c"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"0")),(0,r.kt)("td",{parentName:"tr",align:null},"x skew")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"d"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"1")),(0,r.kt)("td",{parentName:"tr",align:null},"y scale")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tx"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"0")),(0,r.kt)("td",{parentName:"tr",align:null},"x translation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ty"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"0")),(0,r.kt)("td",{parentName:"tr",align:null},"y translation"))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"members"},"Members"),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"identity-matrix"},"IDENTITY: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"Matrix"))),(0,r.kt)("p",null,"A default (identity) matrix")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"temp_matrix-matrix"},"TEMP_MATRIX: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"Matrix"))),(0,r.kt)("p",null,"A temp matrix")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"a-number"},"a: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"1")))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"b-number"},"b: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"0")))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"c-number"},"c: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"0")))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"d-number"},"d: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"1")))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"tx-number"},"tx: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"0")))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"ty-number"},"ty: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"0")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"append-matrix-matrix---this"},"append: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"(matrix",":"," Matrix) -",">"," this"))),(0,r.kt)("p",null,"Appends the given Matrix to this Matrix."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"matrix"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Matrix")),(0,r.kt)("td",{parentName:"tr",align:null},"The matrix to append.")))),(0,r.kt)("h4",{id:"returns"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"this")),(0,r.kt)("td",{parentName:"tr",align:null},"This matrix. Good for chaining method calls."))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"apply-pos-ipointdata-newpos-pixipoint---pixipoint"},"apply: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"(pos",":"," IPointData, newPos",":"," PIXI.Point) -",">"," PIXI.Point"))),(0,r.kt)("p",null,"Get a new position with the current transformation applied. Can be used to go from a child's coordinate space to the world coordinate space. (e.g. rendering)"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pos"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"IPointData")),(0,r.kt)("td",{parentName:"tr",align:null},"The origin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"newPos"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"PIXI.Point")),(0,r.kt)("td",{parentName:"tr",align:null},"The point that the new position is assigned to (allowed to be same as input)")))),(0,r.kt)("h4",{id:"returns-1"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"PIXI.Point")),(0,r.kt)("td",{parentName:"tr",align:null},"The new point, transformed through this matrix"))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"applyinverse-pos-ipointdata-newpos-pixipoint---pixipoint"},"applyInverse: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"(pos",":"," IPointData, newPos",":"," PIXI.Point) -",">"," PIXI.Point"))),(0,r.kt)("p",null,"Get a new position with the inverse of the current transformation applied. Can be used to go from the world coordinate space to a child's coordinate space. (e.g. input)"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pos"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"IPointData")),(0,r.kt)("td",{parentName:"tr",align:null},"The origin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"newPos"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"PIXI.Point")),(0,r.kt)("td",{parentName:"tr",align:null},"The point that the new position is assigned to (allowed to be same as input)")))),(0,r.kt)("h4",{id:"returns-2"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"PIXI.Point")),(0,r.kt)("td",{parentName:"tr",align:null},"The new point, inverse-transformed through this matrix"))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"clone----matrix"},"clone: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"() -",">"," Matrix"))),(0,r.kt)("p",null,"Creates a new Matrix object with the same values as this one."),(0,r.kt)("h4",{id:"returns-3"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Matrix")),(0,r.kt)("td",{parentName:"tr",align:null},"A copy of this matrix. Good for chaining method calls."))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"copyfrom-matrix-piximatrix---piximatrix"},"copyFrom: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"(matrix",":"," PIXI.Matrix) -",">"," PIXI.Matrix"))),(0,r.kt)("p",null,"Changes the values of the matrix to be the same as the ones in given matrix"),(0,r.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"matrix"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"PIXI.Matrix")),(0,r.kt)("td",{parentName:"tr",align:null},"The matrix to copy from.")))),(0,r.kt)("h4",{id:"returns-4"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"PIXI.Matrix")),(0,r.kt)("td",{parentName:"tr",align:null},"this"))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"copyto-matrix-matrix---matrix"},"copyTo: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"(matrix",":"," Matrix) -",">"," Matrix"))),(0,r.kt)("p",null,"Changes the values of the given matrix to be the same as the ones in this matrix"),(0,r.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"matrix"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Matrix")),(0,r.kt)("td",{parentName:"tr",align:null},"The matrix to copy to.")))),(0,r.kt)("h4",{id:"returns-5"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Matrix")),(0,r.kt)("td",{parentName:"tr",align:null},"The matrix given in parameter with its values updated."))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"decompose-transform-transform---transform"},"decompose: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"(transform",":"," Transform) -",">"," Transform"))),(0,r.kt)("p",null,"Decomposes the matrix (x, y, scaleX, scaleY, and rotation) and sets the properties on to a transform."),(0,r.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transform"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Transform")),(0,r.kt)("td",{parentName:"tr",align:null},"The transform to apply the properties to.")))),(0,r.kt)("h4",{id:"returns-6"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Transform")),(0,r.kt)("td",{parentName:"tr",align:null},"The transform with the newly applied properties"))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"fromarray-array-number---void"},"fromArray: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"(array",":"," number[]) -",">"," void"))),(0,r.kt)("p",null,"Creates a Matrix object based on the given array. The Element to Matrix mapping order is as follows",":","\na = array","[0]"," b = array","[1]"," c = array","[3]"," d = array","[4]"," tx = array","[2]"," ty = array","[5]"),(0,r.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number[]")),(0,r.kt)("td",{parentName:"tr",align:null},"The array that the matrix will be populated from."))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"identity----this"},"identity: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"() -",">"," this"))),(0,r.kt)("p",null,"Resets this Matrix to an identity (default) matrix."),(0,r.kt)("h4",{id:"returns-7"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"this")),(0,r.kt)("td",{parentName:"tr",align:null},"This matrix. Good for chaining method calls."))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"invert----this"},"invert: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"() -",">"," this"))),(0,r.kt)("p",null,"Inverts this matrix"),(0,r.kt)("h4",{id:"returns-8"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"this")),(0,r.kt)("td",{parentName:"tr",align:null},"This matrix. Good for chaining method calls."))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"prepend-matrix-matrix---this"},"prepend: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"(matrix",":"," Matrix) -",">"," this"))),(0,r.kt)("p",null,"Prepends the given Matrix to this Matrix."),(0,r.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"matrix"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Matrix")),(0,r.kt)("td",{parentName:"tr",align:null},"The matrix to prepend")))),(0,r.kt)("h4",{id:"returns-9"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"this")),(0,r.kt)("td",{parentName:"tr",align:null},"This matrix. Good for chaining method calls."))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"rotate-angle-number---this"},"rotate: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"(angle",":"," number) -",">"," this"))),(0,r.kt)("p",null,"Applies a rotation transformation to the matrix."),(0,r.kt)("h4",{id:"parameters-9"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"angle"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"The angle in radians.")))),(0,r.kt)("h4",{id:"returns-10"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"this")),(0,r.kt)("td",{parentName:"tr",align:null},"This matrix. Good for chaining method calls."))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"scale-x-number-y-number---this"},"scale: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"(x",":"," number, y",":"," number) -",">"," this"))),(0,r.kt)("p",null,"Applies a scale transformation to the matrix."),(0,r.kt)("h4",{id:"parameters-10"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"The amount to scale horizontally")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"y"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"The amount to scale vertically")))),(0,r.kt)("h4",{id:"returns-11"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"this")),(0,r.kt)("td",{parentName:"tr",align:null},"This matrix. Good for chaining method calls."))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"set-a-number-b-number-c-number-d-number-tx-number-ty-number---this"},"set: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"(a",":"," number, b",":"," number, c",":"," number, d",":"," number, tx",":"," number, ty",":"," number) -",">"," this"))),(0,r.kt)("p",null,"Sets the matrix properties."),(0,r.kt)("h4",{id:"parameters-11"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"a"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Matrix component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"b"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Matrix component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"c"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Matrix component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"d"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Matrix component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tx"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Matrix component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ty"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Matrix component")))),(0,r.kt)("h4",{id:"returns-12"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"this")),(0,r.kt)("td",{parentName:"tr",align:null},"This matrix. Good for chaining method calls."))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"settransform-x-number-y-number-pivotx-number-pivoty-number-scalex-number-scaley-number-rotation-number-skewx-number-skewy-number---this"},"setTransform: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"(x",":"," number, y",":"," number, pivotX",":"," number, pivotY",":"," number, scaleX",":"," number, scaleY",":"," number, rotation",":"," number, skewX",":"," number, skewY",":"," number) -",">"," this"))),(0,r.kt)("p",null,"Sets the matrix based on all the available properties"),(0,r.kt)("h4",{id:"parameters-12"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Position on the x axis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"y"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Position on the y axis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pivotX"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Pivot on the x axis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pivotY"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Pivot on the y axis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scaleX"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Scale on the x axis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scaleY"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Scale on the y axis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rotation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Rotation in radians")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"skewX"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Skew on the x axis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"skewY"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Skew on the y axis")))),(0,r.kt)("h4",{id:"returns-13"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"this")),(0,r.kt)("td",{parentName:"tr",align:null},"This matrix. Good for chaining method calls."))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"toarray-transpose-boolean-out-float32array---float32array"},"toArray: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"(transpose",":"," boolean, out",":"," Float32Array) -",">"," Float32Array"))),(0,r.kt)("p",null,"Creates an array from the current Matrix object."),(0,r.kt)("h4",{id:"parameters-13"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transpose"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether we need to transpose the matrix or not")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"out"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Float32Array")),(0,r.kt)("td",{parentName:"tr",align:null},"If provided the array will be assigned to out")))),(0,r.kt)("h4",{id:"returns-14"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Float32Array")),(0,r.kt)("td",{parentName:"tr",align:null},"The newly created array which contains the matrix"))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"translate-x-number-y-number---this"},"translate: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"(x",":"," number, y",":"," number) -",">"," this"))),(0,r.kt)("p",null,"Translates the matrix on the x and y."),(0,r.kt)("h4",{id:"parameters-14"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"How much to translate x by")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"y"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"How much to translate y by")))),(0,r.kt)("h4",{id:"returns-15"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"this")),(0,r.kt)("td",{parentName:"tr",align:null},"This matrix. Good for chaining method calls."))))),(0,r.kt)("hr",null))}d.isMDXComponent=!0}}]);