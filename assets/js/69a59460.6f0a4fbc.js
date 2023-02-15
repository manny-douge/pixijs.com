"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[9732],{3905:(e,t,l)=>{l.d(t,{Zo:()=>d,kt:()=>k});var n=l(67294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},d=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(l),m=r,k=p["".concat(u,".").concat(m)]||p[m]||c[m]||a;return l?n.createElement(k,i(i({ref:t},d),{},{components:l})):n.createElement(k,i({ref:t},d))}));function k(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,i=new Array(a);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<a;s++)i[s]=l[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},29169:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=l(87462),r=(l(67294),l(3905));const a={id:"PIXI.NoiseFilter.pixi_filter_noise",title:"Class: PIXI.NoiseFilter",sidebar_label:"PIXI.NoiseFilter",custom_edit_url:null},i=void 0,o={unversionedId:"api/classes/PIXI.NoiseFilter.pixi_filter_noise",id:"api/classes/PIXI.NoiseFilter.pixi_filter_noise",title:"Class: PIXI.NoiseFilter",description:"@pixi/filter-noise.NoiseFilter",source:"@site/docs/api/classes/PIXI.NoiseFilter.pixi_filter_noise.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.NoiseFilter.pixi_filter_noise",permalink:"/api/classes/PIXI.NoiseFilter.pixi_filter_noise",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.NoiseFilter.pixi_filter_noise",title:"Class: PIXI.NoiseFilter",sidebar_label:"PIXI.NoiseFilter",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.NineSlicePlane",permalink:"/api/classes/PIXI.NineSlicePlane.pixi_mesh_extras"},next:{title:"PIXI.ObjectRenderer",permalink:"/api/classes/PIXI.ObjectRenderer.pixi_core"}},u={},s=[{value:"new PIXI.NoiseFilter: <span><code>(noise: number, seed: number) </code></span>",id:"new-pixinoisefilter-noise-number-seed-number-",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Extends",id:"extends",level:2},{value:"Members",id:"members",level:2},{value:"autoFit: <span><code>boolean</code></span>",id:"autofit-boolean",level:3},{value:"blendMode: <span><code>BLEND_MODES</code></span>",id:"blendmode-blend_modes",level:3},{value:"enabled: <span><code>boolean</code></span>",id:"enabled-boolean",level:3},{value:"legacy: <span><code>boolean</code></span>",id:"legacy-boolean",level:3},{value:"multisample: <span><code>MSAA_QUALITY</code></span>",id:"multisample-msaa_quality",level:3},{value:"noise: <span><code>number</code></span>",id:"noise-number",level:3},{value:"padding: <span><code>number</code></span>",id:"padding-number",level:3},{value:"program: <span><code>Program</code></span>",id:"program-program",level:3},{value:"resolution: <span><code>number</code></span>",id:"resolution-number",level:3},{value:"seed: <span><code>number</code></span>",id:"seed-number",level:3},{value:"state: <span><code>State</code></span>",id:"state-state",level:3},{value:"uniforms: <span><code>Dict&lt;any&gt;</code></span>",id:"uniforms-dictany",level:3},{value:"Methods",id:"methods",level:2},{value:"apply: <span><code>(filterManager: PIXI.FilterSystem, input: PIXI.RenderTexture, output: PIXI.RenderTexture, clearMode: PIXI.CLEAR_MODES, _currentState: object) -&gt; void</code></span>",id:"apply-filtermanager-pixifiltersystem-input-pixirendertexture-output-pixirendertexture-clearmode-pixiclear_modes-_currentstate-object---void",level:3},{value:"Parameters:",id:"parameters-1",level:4}],d={toc:s};function p(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../modules/pixi_filter_noise"},"@pixi/filter-noise"),".NoiseFilter"),(0,r.kt)("p",null,"A Noise effect filter.\noriginal filter",":"," https",":","//github.com/evanw/glfx.js/blob/master/src/filters/adjust/noise.js"),(0,r.kt)("p",null,"// TODO: @see"),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"new-pixinoisefilter-noise-number-seed-number-"},"new PIXI.NoiseFilter: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"(noise",":"," number, seed",":"," number) "))),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"noise"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"0.5")),(0,r.kt)("td",{parentName:"tr",align:null},"The noise intensity, should be a normalized value in the range ","[0, 1]",".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"seed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null)),(0,r.kt)("td",{parentName:"tr",align:null},"A random seed for the noise generation. Default is ",(0,r.kt)("inlineCode",{parentName:"td"},"Math.random()"),"."))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"extends"},"Extends"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../classes/PIXI.Filter.pixi_core"},"PIXI.Filter"))),(0,r.kt)("h2",{id:"members"},"Members"),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"autofit-boolean"},"autoFit: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"boolean"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"true"))),(0,r.kt)("p",null,"If enabled, PixiJS will fit the filter area into boundaries for better performance. Switch it off if it does not work for specific shader.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"blendmode-blend_modes"},"blendMode: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"BLEND_MODES"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"PIXI.BLEND_MODES.NORMAL"))),(0,r.kt)("p",null,"Sets the blend mode of the filter.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"enabled-boolean"},"enabled: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"boolean"))),(0,r.kt)("p",null,"If enabled is true the filter is applied, if false it will not.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"legacy-boolean"},"legacy: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"boolean"))),(0,r.kt)("p",null,"Legacy filters use position and uvs from attributes (set by filter system)")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"multisample-msaa_quality"},"multisample: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"MSAA_QUALITY"))),(0,r.kt)("p",null,"The samples override of the filter instance.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"noise-number"},"noise: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"0.5"))),(0,r.kt)("p",null,"The amount of noise to apply, this value should be in the range (0, 1].")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"padding-number"},"padding: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("p",null,"The padding of the filter. Some filters require extra space to breath such as a blur. Increasing this will add extra width and height to the bounds of the object that the filter is applied to.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"program-program"},"program: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"Program"))),(0,r.kt)("p",null,"Program that the shader uses.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"resolution-number"},"resolution: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("p",null,"The resolution of the filter. Setting this to be lower will lower the quality but increase the performance of the filter.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"seed-number"},"seed: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("p",null,"A seed value to apply to the random noise generation. ",(0,r.kt)("inlineCode",{parentName:"p"},"Math.random()")," is a good value to use.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"state-state"},"state: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"State"))),(0,r.kt)("p",null,"The WebGL state the filter requires to render.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"uniforms-dictany"},"uniforms: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"Dict","<","any",">"))),(0,r.kt)("p",null,"Shader uniform values, shortcut for ",(0,r.kt)("inlineCode",{parentName:"p"},"uniformGroup.uniforms"),".")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"apply-filtermanager-pixifiltersystem-input-pixirendertexture-output-pixirendertexture-clearmode-pixiclear_modes-_currentstate-object---void"},"apply: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"(filterManager",":"," PIXI.FilterSystem, input",":"," PIXI.RenderTexture, output",":"," PIXI.RenderTexture, clearMode",":"," PIXI.CLEAR_MODES, _currentState",":"," object) -",">"," void"))),(0,r.kt)("p",null,"Applies the filter"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filterManager"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"PIXI.FilterSystem")),(0,r.kt)("td",{parentName:"tr",align:null},"The renderer to retrieve the filter from")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"PIXI.RenderTexture")),(0,r.kt)("td",{parentName:"tr",align:null},"The input render target.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"PIXI.RenderTexture")),(0,r.kt)("td",{parentName:"tr",align:null},"The target to output to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clearMode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"PIXI.CLEAR_MODES")),(0,r.kt)("td",{parentName:"tr",align:null},"Should the output be cleared before rendering to it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_currentState"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"It's current state of filter. There are some useful properties in the currentState ",":"," target, filters, sourceFrame, destinationFrame, renderTarget, resolution"))))),(0,r.kt)("hr",null))}p.isMDXComponent=!0}}]);