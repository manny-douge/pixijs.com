"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[3179],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=a.createContext({}),s=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(r),c=l,m=p["".concat(o,".").concat(c)]||p[c]||k[c]||n;return r?a.createElement(m,u(u({ref:t},d),{},{components:r})):a.createElement(m,u({ref:t},d))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,u=new Array(n);u[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:l,u[1]=i;for(var s=2;s<n;s++)u[s]=r[s];return a.createElement.apply(null,u)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},30203:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var a=r(87462),l=(r(67294),r(3905));const n={id:"PIXI.CubeResource.pixi_core",title:"Class: PIXI.CubeResource",sidebar_label:"PIXI.CubeResource",custom_edit_url:null},u=void 0,i={unversionedId:"api/classes/PIXI.CubeResource.pixi_core",id:"api/classes/PIXI.CubeResource.pixi_core",title:"Class: PIXI.CubeResource",description:"@pixi/core.CubeResource",source:"@site/docs/api/classes/PIXI.CubeResource.pixi_core.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.CubeResource.pixi_core",permalink:"/api/classes/PIXI.CubeResource.pixi_core",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.CubeResource.pixi_core",title:"Class: PIXI.CubeResource",sidebar_label:"PIXI.CubeResource",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.CountLimiter",permalink:"/api/classes/PIXI.CountLimiter.pixi_prepare"},next:{title:"PIXI.DepthResource",permalink:"/api/classes/PIXI.DepthResource.pixi_core"}},o={},s=[{value:"new PIXI.CubeResource: <span><code>(source: Array&lt;string | PIXI.Resource&gt;, options: ICubeResourceOptions) </code></span>",id:"new-pixicuberesource-source-arraystring--pixiresource-options-icuberesourceoptions-",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Extends",id:"extends",level:2},{value:"Members",id:"members",level:2},{value:"SIDES: <span><code>number</code></span>",id:"sides-number",level:3},{value:"baseTexture: <span><code>BaseTexture</code></span>",id:"basetexture-basetexture",level:3},{value:"destroyed: <span><code>boolean</code></span>",id:"destroyed-boolean",level:3},{value:"height: <span><code>number</code></span>",id:"height-number",level:3},{value:"internal: <span><code>boolean</code></span>",id:"internal-boolean",level:3},{value:"itemDirtyIds: <span><code>Array&lt;number&gt;</code></span>",id:"itemdirtyids-arraynumber",level:3},{value:"items: <span><code>Array&lt;BaseTexture&gt;</code></span>",id:"items-arraybasetexture",level:3},{value:"length: <span><code>number</code></span>",id:"length-number",level:3},{value:"src: <span><code>string</code></span>",id:"src-string",level:3},{value:"valid: <span><code>boolean</code></span>",id:"valid-boolean",level:3},{value:"width: <span><code>number</code></span>",id:"width-number",level:3},{value:"_height: <span><code>number</code></span>",id:"_height-number",level:3},{value:"_width: <span><code>number</code></span>",id:"_width-number",level:3},{value:"linkBaseTexture: <span><code>boolean</code></span>",id:"linkbasetexture-boolean",level:3},{value:"Methods",id:"methods",level:2},{value:"test: <span><code>(source: unknown) -&gt; boolean</code></span>",id:"test-source-unknown---boolean",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Returns:",id:"returns",level:4},{value:"addBaseTextureAt: <span><code>(baseTexture: BaseTexture, index: number) -&gt; this</code></span>",id:"addbasetextureat-basetexture-basetexture-index-number---this",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Returns:",id:"returns-1",level:4},{value:"addResourceAt: <span><code>(resource: Resource, index: number) -&gt; this</code></span>",id:"addresourceat-resource-resource-index-number---this",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"Returns:",id:"returns-2",level:4},{value:"bind: <span><code>(baseTexture: BaseTexture) -&gt; void</code></span>",id:"bind-basetexture-basetexture---void",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"destroy: <span><code>() -&gt; void</code></span>",id:"destroy----void",level:3},{value:"dispose: <span><code>() -&gt; void</code></span>",id:"dispose----void",level:3},{value:"load: <span><code>() -&gt; Promise&lt;this&gt;</code></span>",id:"load----promisethis",level:3},{value:"Returns:",id:"returns-3",level:4},{value:"resize: <span><code>(width: number, height: number) -&gt; void</code></span>",id:"resize-width-number-height-number---void",level:3},{value:"Parameters:",id:"parameters-5",level:4},{value:"style: <span><code>(_renderer: Renderer, _baseTexture: BaseTexture, _glTexture: GLTexture) -&gt; boolean</code></span>",id:"style-_renderer-renderer-_basetexture-basetexture-_gltexture-gltexture---boolean",level:3},{value:"Parameters:",id:"parameters-6",level:4},{value:"Returns:",id:"returns-4",level:4},{value:"unbind: <span><code>(baseTexture: BaseTexture) -&gt; void</code></span>",id:"unbind-basetexture-basetexture---void",level:3},{value:"Parameters:",id:"parameters-7",level:4},{value:"update: <span><code>() -&gt; void</code></span>",id:"update----void",level:3},{value:"upload: <span><code>(renderer: Renderer, _baseTexture: BaseTexture, glTexture: GLTexture) -&gt; boolean</code></span>",id:"upload-renderer-renderer-_basetexture-basetexture-gltexture-gltexture---boolean",level:3},{value:"Parameters:",id:"parameters-8",level:4},{value:"Returns:",id:"returns-5",level:4},{value:"initFromArray: <span><code>(resources: Array&lt;any&gt;, options: IAutoDetectOptions) -&gt; void</code></span>",id:"initfromarray-resources-arrayany-options-iautodetectoptions---void",level:3},{value:"Parameters:",id:"parameters-9",level:4}],d={toc:s};function p(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../modules/pixi_core"},"@pixi/core"),".CubeResource"),(0,l.kt)("p",null,"Resource for a CubeTexture which contains six resources."),(0,l.kt)("p",null,"// TODO: @see"),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"new-pixicuberesource-source-arraystring--pixiresource-options-icuberesourceoptions-"},"new PIXI.CubeResource: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(source",":"," Array","<","string ","|"," PIXI.Resource",">",", options",":"," ICubeResourceOptions) "))),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Array","<","string ","|"," PIXI.Resource",">")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null)),(0,l.kt)("td",{parentName:"tr",align:null},"Collection of URLs or resources to use as the sides of the cube.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"ICubeResourceOptions")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null)),(0,l.kt)("td",{parentName:"tr",align:null},"ImageResource options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options.width"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null)),(0,l.kt)("td",{parentName:"tr",align:null},"Width of resource")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options.height"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null)),(0,l.kt)("td",{parentName:"tr",align:null},"Height of resource")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options.autoLoad"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"true")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to auto-load resources")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options.linkBaseTexture"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"true")),(0,l.kt)("td",{parentName:"tr",align:null},"In case BaseTextures are supplied, whether to copy them or use"))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"extends"},"Extends"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../classes/PIXI.AbstractMultiResource.pixi_core"},"PIXI.AbstractMultiResource"))),(0,l.kt)("h2",{id:"members"},"Members"),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"sides-number"},"SIDES: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"number"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,l.kt)("code",null,"6"))),(0,l.kt)("p",null,"Number of texture sides to store for CubeResources.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"basetexture-basetexture"},"baseTexture: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"BaseTexture"))),(0,l.kt)("p",null,"Bound baseTexture, there can only be one.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"destroyed-boolean"},"destroyed: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"boolean"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,l.kt)("code",null,"false"))),(0,l.kt)("p",null,"If resource has been destroyed.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"height-number"},"height: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"number"))),(0,l.kt)("p",null,"The height of the resource.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"internal-boolean"},"internal: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"boolean"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"true")," if resource is created by BaseTexture useful for doing cleanup with BaseTexture destroy and not cleaning up resources that were created externally.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"itemdirtyids-arraynumber"},"itemDirtyIds: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"Array","<","number",">"))),(0,l.kt)("p",null,"Dirty IDs for each part.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"items-arraybasetexture"},"items: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"Array","<","BaseTexture",">"))),(0,l.kt)("p",null,"Collection of partial baseTextures that correspond to resources.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"length-number"},"length: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"number"))),(0,l.kt)("p",null,"Number of elements in array.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"src-string"},"src: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"string"))),(0,l.kt)("p",null,"The url of the resource")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"valid-boolean"},"valid: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"boolean"))),(0,l.kt)("p",null,"Has been validated")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"width-number"},"width: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"number"))),(0,l.kt)("p",null,"The width of the resource.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"_height-number"},"_height: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"number"))),(0,l.kt)("p",null,"Internal height of the resource.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"_width-number"},"_width: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"number"))),(0,l.kt)("p",null,"Internal width of the resource.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"linkbasetexture-boolean"},"linkBaseTexture: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"boolean"))),(0,l.kt)("p",null,"In case BaseTextures are supplied, whether to use same resource or bind baseTexture itself.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"test-source-unknown---boolean"},"test: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(source",":"," unknown) -",">"," boolean"))),(0,l.kt)("p",null,"Used to auto-detect the type of resource."),(0,l.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"unknown")),(0,l.kt)("td",{parentName:"tr",align:null},"The source object")))),(0,l.kt)("h4",{id:"returns"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")," if source is an array of 6 elements"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"addbasetextureat-basetexture-basetexture-index-number---this"},"addBaseTextureAt: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(baseTexture",":"," BaseTexture, index",":"," number) -",">"," this"))),(0,l.kt)("p",null,"Set a baseTexture by ID"),(0,l.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"baseTexture"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"BaseTexture")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"index"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Zero-based index of resource to set")))),(0,l.kt)("h4",{id:"returns-1"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"this")),(0,l.kt)("td",{parentName:"tr",align:null},"* Instance for chaining"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"addresourceat-resource-resource-index-number---this"},"addResourceAt: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(resource",":"," Resource, index",":"," number) -",">"," this"))),(0,l.kt)("p",null,"Set a resource by ID"),(0,l.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resource"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Resource")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"index"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Zero-based index of resource to set")))),(0,l.kt)("h4",{id:"returns-2"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"this")),(0,l.kt)("td",{parentName:"tr",align:null},"* Instance for chaining"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"bind-basetexture-basetexture---void"},"bind: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(baseTexture",":"," BaseTexture) -",">"," void"))),(0,l.kt)("p",null,"Add binding."),(0,l.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"baseTexture"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"BaseTexture")),(0,l.kt)("td",{parentName:"tr",align:null},"parent base texture"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"destroy----void"},"destroy: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"() -",">"," void"))),(0,l.kt)("p",null,"Call when destroying resource, unbind any BaseTexture object before calling this method, as reference counts are maintained internally.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"dispose----void"},"dispose: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"() -",">"," void"))),(0,l.kt)("p",null,"Destroy this BaseImageResource.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"load----promisethis"},"load: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"() -",">"," Promise","<","this",">"))),(0,l.kt)("p",null,"Load all the resources simultaneously"),(0,l.kt)("h4",{id:"returns-3"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Promise","<","this",">")),(0,l.kt)("td",{parentName:"tr",align:null},"* When load is resolved"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"resize-width-number-height-number---void"},"resize: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(width",":"," number, height",":"," number) -",">"," void"))),(0,l.kt)("p",null,"Trigger a resize event"),(0,l.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"width"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"X dimension")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Y dimension"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"style-_renderer-renderer-_basetexture-basetexture-_gltexture-gltexture---boolean"},"style: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(_renderer",":"," Renderer, _baseTexture",":"," BaseTexture, _glTexture",":"," GLTexture) -",">"," boolean"))),(0,l.kt)("p",null,"Set the style, optional to override"),(0,l.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_renderer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Renderer")),(0,l.kt)("td",{parentName:"tr",align:null},"yeah, renderer!")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_baseTexture"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"BaseTexture")),(0,l.kt)("td",{parentName:"tr",align:null},"the texture")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_glTexture"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"GLTexture")),(0,l.kt)("td",{parentName:"tr",align:null},"texture instance for this webgl context")))),(0,l.kt)("h4",{id:"returns-4"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"* ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," is success"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"unbind-basetexture-basetexture---void"},"unbind: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(baseTexture",":"," BaseTexture) -",">"," void"))),(0,l.kt)("p",null,"Unset the parent base texture."),(0,l.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"baseTexture"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"BaseTexture")),(0,l.kt)("td",{parentName:"tr",align:null}))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"update----void"},"update: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"() -",">"," void"))),(0,l.kt)("p",null,"Has been updated trigger event.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"upload-renderer-renderer-_basetexture-basetexture-gltexture-gltexture---boolean"},"upload: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(renderer",":"," Renderer, _baseTexture",":"," BaseTexture, glTexture",":"," GLTexture) -",">"," boolean"))),(0,l.kt)("p",null,"Upload the resource"),(0,l.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"renderer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Renderer")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_baseTexture"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"BaseTexture")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"glTexture"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"GLTexture")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"returns-5"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"true is success"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"initfromarray-resources-arrayany-options-iautodetectoptions---void"},"initFromArray: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(resources",":"," Array","<","any",">",", options",":"," IAutoDetectOptions) -",">"," void"))),(0,l.kt)("p",null,"Used from ArrayResource and CubeResource constructors."),(0,l.kt)("h4",{id:"parameters-9"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resources"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Array","<","any",">")),(0,l.kt)("td",{parentName:"tr",align:null},"Can be resources, image elements, canvas, etc. , length should be same as constructor length")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"IAutoDetectOptions")),(0,l.kt)("td",{parentName:"tr",align:null},"Detect options for resources"))))),(0,l.kt)("hr",null))}p.isMDXComponent=!0}}]);