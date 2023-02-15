"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[1583],{3905:(e,t,l)=>{l.d(t,{Zo:()=>p,kt:()=>m});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(l),c=a,m=d["".concat(u,".").concat(c)]||d[c]||k[c]||r;return l?n.createElement(m,i(i({ref:t},p),{},{components:l})):n.createElement(m,i({ref:t},p))}));function m(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,i=new Array(r);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<r;s++)i[s]=l[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},93345:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=l(87462),a=(l(67294),l(3905));const r={id:"PIXI.TextStyle.pixi_text",title:"Class: PIXI.TextStyle",sidebar_label:"PIXI.TextStyle",custom_edit_url:null},i=void 0,o={unversionedId:"api/classes/PIXI.TextStyle.pixi_text",id:"api/classes/PIXI.TextStyle.pixi_text",title:"Class: PIXI.TextStyle",description:"@pixi/text.TextStyle",source:"@site/docs/api/classes/PIXI.TextStyle.pixi_text.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.TextStyle.pixi_text",permalink:"/api/classes/PIXI.TextStyle.pixi_text",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.TextStyle.pixi_text",title:"Class: PIXI.TextStyle",sidebar_label:"PIXI.TextStyle",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.TextMetrics",permalink:"/api/classes/PIXI.TextMetrics.pixi_text"},next:{title:"PIXI.Texture",permalink:"/api/classes/PIXI.Texture.pixi_core"}},u={},s=[{value:"new PIXI.TextStyle: <span><code>(style: Partial&lt;ITextStyle&gt;) </code></span>",id:"new-pixitextstyle-style-partialitextstyle-",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Members",id:"members",level:2},{value:"defaultStyle: <span><code>PIXI.ITextStyle</code></span>",id:"defaultstyle-pixiitextstyle",level:3},{value:"align: <span><code>&#39;left&#39; | &#39;center&#39; | &#39;right&#39; | &#39;justify&#39;</code></span>",id:"align-left--center--right--justify",level:3},{value:"breakWords: <span><code>boolean</code></span>",id:"breakwords-boolean",level:3},{value:"dropShadow: <span><code>boolean</code></span>",id:"dropshadow-boolean",level:3},{value:"dropShadowAlpha: <span><code>number</code></span>",id:"dropshadowalpha-number",level:3},{value:"dropShadowAngle: <span><code>number</code></span>",id:"dropshadowangle-number",level:3},{value:"dropShadowBlur: <span><code>number</code></span>",id:"dropshadowblur-number",level:3},{value:"dropShadowColor: <span><code>string | number</code></span>",id:"dropshadowcolor-string--number",level:3},{value:"dropShadowDistance: <span><code>number</code></span>",id:"dropshadowdistance-number",level:3},{value:"fill: <span><code>string | Array&lt;string&gt; | number | Array&lt;number&gt; | CanvasGradient | CanvasPattern</code></span>",id:"fill-string--arraystring--number--arraynumber--canvasgradient--canvaspattern",level:3},{value:"fillGradientStops: <span><code>Array&lt;number&gt;</code></span>",id:"fillgradientstops-arraynumber",level:3},{value:"fillGradientType: <span><code>PIXI.TEXT_GRADIENT</code></span>",id:"fillgradienttype-pixitext_gradient",level:3},{value:"fontFamily: <span><code>string | Array&lt;string&gt;</code></span>",id:"fontfamily-string--arraystring",level:3},{value:"fontSize: <span><code>number | string</code></span>",id:"fontsize-number--string",level:3},{value:"fontStyle: <span><code>&#39;normal&#39; | &#39;italic&#39; | &#39;oblique&#39;</code></span>",id:"fontstyle-normal--italic--oblique",level:3},{value:"fontVariant: <span><code>&#39;normal&#39; | &#39;small-caps&#39;</code></span>",id:"fontvariant-normal--small-caps",level:3},{value:"fontWeight: <span><code>&#39;normal&#39; | &#39;bold&#39; | &#39;bolder&#39; | &#39;lighter&#39; | &#39;100&#39; | &#39;200&#39; | &#39;300&#39; | &#39;400&#39; | &#39;500&#39; | &#39;600&#39; | &#39;700&#39; | &#39;800&#39; | &#39;900&#39;</code></span>",id:"fontweight-normal--bold--bolder--lighter--100--200--300--400--500--600--700--800--900",level:3},{value:"leading: <span><code>number</code></span>",id:"leading-number",level:3},{value:"letterSpacing: <span><code>number</code></span>",id:"letterspacing-number",level:3},{value:"lineHeight: <span><code>number</code></span>",id:"lineheight-number",level:3},{value:"lineJoin: <span><code>&#39;miter&#39; | &#39;round&#39; | &#39;bevel&#39;</code></span>",id:"linejoin-miter--round--bevel",level:3},{value:"miterLimit: <span><code>number</code></span>",id:"miterlimit-number",level:3},{value:"padding: <span><code>number</code></span>",id:"padding-number",level:3},{value:"stroke: <span><code>string | number</code></span>",id:"stroke-string--number",level:3},{value:"strokeThickness: <span><code>number</code></span>",id:"strokethickness-number",level:3},{value:"textBaseline: <span><code>&#39;alphabetic&#39; | &#39;top&#39; | &#39;hanging&#39; | &#39;middle&#39; | &#39;ideographic&#39; | &#39;bottom&#39;</code></span>",id:"textbaseline-alphabetic--top--hanging--middle--ideographic--bottom",level:3},{value:"trim: <span><code>boolean</code></span>",id:"trim-boolean",level:3},{value:"whiteSpace: <span><code>&#39;normal&#39; | &#39;pre&#39; | &#39;pre-line&#39;</code></span>",id:"whitespace-normal--pre--pre-line",level:3},{value:"wordWrap: <span><code>boolean</code></span>",id:"wordwrap-boolean",level:3},{value:"wordWrapWidth: <span><code>number</code></span>",id:"wordwrapwidth-number",level:3},{value:"align: <span><code>&#39;left&#39; | &#39;center&#39; | &#39;right&#39; | &#39;justify&#39;</code></span>",id:"align-left--center--right--justify-1",level:3},{value:"breakWords: <span><code>boolean</code></span>",id:"breakwords-boolean-1",level:3},{value:"dropShadow: <span><code>boolean</code></span>",id:"dropshadow-boolean-1",level:3},{value:"dropShadowAlpha: <span><code>number</code></span>",id:"dropshadowalpha-number-1",level:3},{value:"dropShadowAngle: <span><code>number</code></span>",id:"dropshadowangle-number-1",level:3},{value:"dropShadowBlur: <span><code>number</code></span>",id:"dropshadowblur-number-1",level:3},{value:"dropShadowColor: <span><code>number | string</code></span>",id:"dropshadowcolor-number--string",level:3},{value:"dropShadowDistance: <span><code>number</code></span>",id:"dropshadowdistance-number-1",level:3},{value:"fill: <span><code>string | Array&lt;string&gt; | number | Array&lt;number&gt; | CanvasGradient | CanvasPattern</code></span>",id:"fill-string--arraystring--number--arraynumber--canvasgradient--canvaspattern-1",level:3},{value:"fillGradientStops: <span><code>number[]</code></span>",id:"fillgradientstops-number",level:3},{value:"fillGradientType: <span><code>PIXI.TEXT_GRADIENT</code></span>",id:"fillgradienttype-pixitext_gradient-1",level:3},{value:"fontFamily: <span><code>string | string[]</code></span>",id:"fontfamily-string--string",level:3},{value:"fontSize: <span><code>number | string</code></span>",id:"fontsize-number--string-1",level:3},{value:"fontStyle: <span><code>&#39;normal&#39; | &#39;italic&#39; | &#39;oblique&#39;</code></span>",id:"fontstyle-normal--italic--oblique-1",level:3},{value:"fontVariant: <span><code>&#39;normal&#39; | &#39;small-caps&#39;</code></span>",id:"fontvariant-normal--small-caps-1",level:3},{value:"fontWeight: <span><code>&#39;normal&#39; | &#39;bold&#39; | &#39;bolder&#39; | &#39;lighter&#39; | &#39;100&#39; | &#39;200&#39; | &#39;300&#39; | &#39;400&#39; | &#39;500&#39; | &#39;600&#39; | &#39;700&#39; | &#39;800&#39; | &#39;900&#39;</code></span>",id:"fontweight-normal--bold--bolder--lighter--100--200--300--400--500--600--700--800--900-1",level:3},{value:"leading: <span><code>number</code></span>",id:"leading-number-1",level:3},{value:"letterSpacing: <span><code>number</code></span>",id:"letterspacing-number-1",level:3},{value:"lineHeight: <span><code>number</code></span>",id:"lineheight-number-1",level:3},{value:"lineJoin: <span><code>&#39;miter&#39; | &#39;round&#39; | &#39;bevel&#39;</code></span>",id:"linejoin-miter--round--bevel-1",level:3},{value:"miterLimit: <span><code>number</code></span>",id:"miterlimit-number-1",level:3},{value:"padding: <span><code>number</code></span>",id:"padding-number-1",level:3},{value:"stroke: <span><code>string | number</code></span>",id:"stroke-string--number-1",level:3},{value:"strokeThickness: <span><code>number</code></span>",id:"strokethickness-number-1",level:3},{value:"textBaseline: <span><code>&#39;alphabetic&#39; | &#39;top&#39; | &#39;hanging&#39; | &#39;middle&#39; | &#39;ideographic&#39; | &#39;bottom&#39;</code></span>",id:"textbaseline-alphabetic--top--hanging--middle--ideographic--bottom-1",level:3},{value:"trim: <span><code>boolean</code></span>",id:"trim-boolean-1",level:3},{value:"whiteSpace: <span><code>&#39;normal&#39; | &#39;pre&#39; | &#39;pre-line&#39;</code></span>",id:"whitespace-normal--pre--pre-line-1",level:3},{value:"wordWrap: <span><code>boolean</code></span>",id:"wordwrap-boolean-1",level:3},{value:"wordWrapWidth: <span><code>number</code></span>",id:"wordwrapwidth-number-1",level:3},{value:"Methods",id:"methods",level:2},{value:"clone: <span><code>() -&gt; TextStyle</code></span>",id:"clone----textstyle",level:3},{value:"Returns:",id:"returns",level:4},{value:"reset: <span><code>() -&gt; void</code></span>",id:"reset----void",level:3},{value:"toFontString: <span><code>() -&gt; string</code></span>",id:"tofontstring----string",level:3},{value:"Returns:",id:"returns-1",level:4}],p={toc:s};function d(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/pixi_text"},"@pixi/text"),".TextStyle"),(0,a.kt)("p",null,"A TextStyle Object contains information to decorate a Text objects.\nAn instance can be shared between multiple Text objects; then changing the style will update all text objects using it."),(0,a.kt)("p",null,"A tool can be used to generate a text style ",(0,a.kt)("a",{parentName:"p",href:"https://pixijs.io/pixi-text-style"},"here"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { TextStyle } from 'pixi.js';\nconst style = new TextStyle({\n  fontFamily: ['Helvetica', 'Arial', 'sans-serif'],\n  fontSize: 36,\n});\n")),(0,a.kt)("p",null,"// TODO: @see"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"new-pixitextstyle-style-partialitextstyle-"},"new PIXI.TextStyle: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"(style",":"," Partial","<","ITextStyle",">",") "))),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"style"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"Partial","<","ITextStyle",">")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:null},"TextStyle properties to be set on the text. See ",(0,a.kt)("a",{parentName:"td",href:"../classes/PIXI.TextStyle.pixi_text#defaultStyle"},"PIXI.TextStyle.defaultStyle")," for the default values."))))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"members"},"Members"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"defaultstyle-pixiitextstyle"},"defaultStyle: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"PIXI.ITextStyle"))),(0,a.kt)("p",null,"Default style options used for all TextStyle instances.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"align-left--center--right--justify"},"align: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"'left' ","|"," 'center' ","|"," 'right' ","|"," 'justify'"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,'"left"'))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.TextStyle.pixi_text#align"},"PIXI.TextStyle.align"))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"breakwords-boolean"},"breakWords: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"boolean"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,"false"))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.TextStyle.pixi_text#breakWords"},"PIXI.TextStyle.breakWords"))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"dropshadow-boolean"},"dropShadow: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"boolean"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,"false"))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.TextStyle.pixi_text#dropShadow"},"PIXI.TextStyle.dropShadow"))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"dropshadowalpha-number"},"dropShadowAlpha: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,"1"))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.TextStyle.pixi_text#dropShadowAlpha"},"PIXI.TextStyle.dropShadowAlpha"))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"dropshadowangle-number"},"dropShadowAngle: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,"Math.PI / 6"))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.TextStyle.pixi_text#dropShadowAngle"},"PIXI.TextStyle.dropShadowAngle"))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"dropshadowblur-number"},"dropShadowBlur: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,"0"))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.TextStyle.pixi_text#dropShadowBlur"},"PIXI.TextStyle.dropShadowBlur"))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"dropshadowcolor-string--number"},"dropShadowColor: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"string ","|"," number"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,'"black"'))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.TextStyle.pixi_text#dropShadowColor"},"PIXI.TextStyle.dropShadowColor"))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"dropshadowdistance-number"},"dropShadowDistance: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,"5"))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.TextStyle.pixi_text#dropShadowDistance"},"PIXI.TextStyle.dropShadowDistance"))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"fill-string--arraystring--number--arraynumber--canvasgradient--canvaspattern"},"fill: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"string ","|"," Array","<","string",">"," ","|"," number ","|"," Array","<","number",">"," ","|"," CanvasGradient ","|"," CanvasPattern"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,'"black"'))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.TextStyle.pixi_text#fill"},"PIXI.TextStyle.fill"))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"fillgradientstops-arraynumber"},"fillGradientStops: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"Array","<","number",">"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,"[]"))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.TextStyle.pixi_text#fillGradientStops"},"PIXI.TextStyle.fillGradientStops"))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"fillgradienttype-pixitext_gradient"},"fillGradientType: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"PIXI.TEXT_GRADIENT"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,"PIXI.TEXT_GRADIENT.LINEAR_VERTICAL"))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.TextStyle.pixi_text#fillGradientType"},"PIXI.TextStyle.fillGradientType"))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"fontfamily-string--arraystring"},"fontFamily: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"string ","|"," Array","<","string",">"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,'"Arial"'))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.TextStyle.pixi_text#fontFamily"},"PIXI.TextStyle.fontFamily"))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"fontsize-number--string"},"fontSize: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number ","|"," string"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,"26"))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.TextStyle.pixi_text#fontSize"},"PIXI.TextStyle.fontSize"))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"fontstyle-normal--italic--oblique"},"fontStyle: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"'normal' ","|"," 'italic' ","|"," 'oblique'"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,'"normal"'))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.TextStyle.pixi_text#fontStyle"},"PIXI.TextStyle.fontStyle"))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"fontvariant-normal--small-caps"},"fontVariant: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"'normal' ","|"," 'small-caps'"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,'"normal"'))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.TextStyle.pixi_text#fontVariant"},"PIXI.TextStyle.fontVariant"))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"fontweight-normal--bold--bolder--lighter--100--200--300--400--500--600--700--800--900"},"fontWeight: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"'normal' ","|"," 'bold' ","|"," 'bolder' ","|"," 'lighter' ","|"," '100' ","|"," '200' ","|"," '300' ","|"," '400' ","|"," '500' ","|"," '600' ","|"," '700' ","|"," '800' ","|"," '900'"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,'"normal"'))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.TextStyle.pixi_text#fontWeight"},"PIXI.TextStyle.fontWeight"))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"leading-number"},"leading: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,"0"))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.TextStyle.pixi_text#leading"},"PIXI.TextStyle.leading"))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"letterspacing-number"},"letterSpacing: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,"0"))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.TextStyle.pixi_text#letterSpacing"},"PIXI.TextStyle.letterSpacing"))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"lineheight-number"},"lineHeight: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,"0"))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.TextStyle.pixi_text#lineHeight"},"PIXI.TextStyle.lineHeight"))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"linejoin-miter--round--bevel"},"lineJoin: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"'miter' ","|"," 'round' ","|"," 'bevel'"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,'"miter"'))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.TextStyle.pixi_text#lineJoin"},"PIXI.TextStyle.lineJoin"))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"miterlimit-number"},"miterLimit: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,"10"))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.TextStyle.pixi_text#miterLimit"},"PIXI.TextStyle.miterLimit"))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"padding-number"},"padding: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,"0"))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.TextStyle.pixi_text#padding"},"PIXI.TextStyle.padding"))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"stroke-string--number"},"stroke: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"string ","|"," number"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,'"black"'))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.TextStyle.pixi_text#stroke"},"PIXI.TextStyle.stroke"))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"strokethickness-number"},"strokeThickness: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,"0"))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.TextStyle.pixi_text#strokeThickness"},"PIXI.TextStyle.strokeThickness"))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"textbaseline-alphabetic--top--hanging--middle--ideographic--bottom"},"textBaseline: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"'alphabetic' ","|"," 'top' ","|"," 'hanging' ","|"," 'middle' ","|"," 'ideographic' ","|"," 'bottom'"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,'"alphabetic"'))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.TextStyle.pixi_text#textBaseline"},"PIXI.TextStyle.textBaseline"))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"trim-boolean"},"trim: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"boolean"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,"false"))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.TextStyle.pixi_text#trim"},"PIXI.TextStyle.trim"))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"whitespace-normal--pre--pre-line"},"whiteSpace: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"'normal' ","|"," 'pre' ","|"," 'pre-line'"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,'"pre"'))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.TextStyle.pixi_text#whiteSpace"},"PIXI.TextStyle.whiteSpace"))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"wordwrap-boolean"},"wordWrap: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"boolean"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,"false"))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.TextStyle.pixi_text#wordWrap"},"PIXI.TextStyle.wordWrap"))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"wordwrapwidth-number"},"wordWrapWidth: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,"100"))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.TextStyle.pixi_text#wordWrapWidth"},"PIXI.TextStyle.wordWrapWidth"))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"align-left--center--right--justify-1"},"align: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"'left' ","|"," 'center' ","|"," 'right' ","|"," 'justify'"))),(0,a.kt)("p",null,"Alignment for multiline text, does not affect single line text.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"breakwords-boolean-1"},"breakWords: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"boolean"))),(0,a.kt)("p",null,"Indicates if lines can be wrapped within words, it needs wordWrap to be set to true.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"dropshadow-boolean-1"},"dropShadow: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"boolean"))),(0,a.kt)("p",null,"Set a drop shadow for the text.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"dropshadowalpha-number-1"},"dropShadowAlpha: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("p",null,"Set alpha for the drop shadow.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"dropshadowangle-number-1"},"dropShadowAngle: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("p",null,"Set a angle of the drop shadow.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"dropshadowblur-number-1"},"dropShadowBlur: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("p",null,"Set a shadow blur radius.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"dropshadowcolor-number--string"},"dropShadowColor: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number ","|"," string"))),(0,a.kt)("p",null,"A fill style to be used on the dropshadow e.g., 'red', '#00FF00'.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"dropshadowdistance-number-1"},"dropShadowDistance: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("p",null,"Set a distance of the drop shadow.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"fill-string--arraystring--number--arraynumber--canvasgradient--canvaspattern-1"},"fill: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"string ","|"," Array","<","string",">"," ","|"," number ","|"," Array","<","number",">"," ","|"," CanvasGradient ","|"," CanvasPattern"))),(0,a.kt)("p",null,"A canvas fillstyle that will be used on the text e.g., 'red', '#00FF00'.\nCan be an array to create a gradient e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"['#000000','#FFFFFF']"),(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle"},"MDN"))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"fillgradientstops-number"},"fillGradientStops: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number[]"))),(0,a.kt)("p",null,"If fill is an array of colours to create a gradient, this array can set the stop points (numbers between 0 and 1) for the color, overriding the default behaviour of evenly spacing them.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"fillgradienttype-pixitext_gradient-1"},"fillGradientType: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"PIXI.TEXT_GRADIENT"))),(0,a.kt)("p",null,"If fill is an array of colours to create a gradient, this can change the type/direction of the gradient.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"fontfamily-string--string"},"fontFamily: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"string ","|"," string[]"))),(0,a.kt)("p",null,"The font family, can be a single font name, or a list of names where the first is the preferred font.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"fontsize-number--string-1"},"fontSize: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number ","|"," string"))),(0,a.kt)("p",null,"The font size (as a number it converts to px, but as a string, equivalents are '26px','20pt','160%' or '1.6em')")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"fontstyle-normal--italic--oblique-1"},"fontStyle: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"'normal' ","|"," 'italic' ","|"," 'oblique'"))),(0,a.kt)("p",null,"The font style.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"fontvariant-normal--small-caps-1"},"fontVariant: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"'normal' ","|"," 'small-caps'"))),(0,a.kt)("p",null,"The font variant.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"fontweight-normal--bold--bolder--lighter--100--200--300--400--500--600--700--800--900-1"},"fontWeight: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"'normal' ","|"," 'bold' ","|"," 'bolder' ","|"," 'lighter' ","|"," '100' ","|"," '200' ","|"," '300' ","|"," '400' ","|"," '500' ","|"," '600' ","|"," '700' ","|"," '800' ","|"," '900'"))),(0,a.kt)("p",null,"The font weight.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"leading-number-1"},"leading: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("p",null,"The space between lines.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"letterspacing-number-1"},"letterSpacing: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("p",null,"The amount of spacing between letters, default is 0.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"lineheight-number-1"},"lineHeight: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("p",null,"The line height, a number that represents the vertical space that a letter uses.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"linejoin-miter--round--bevel-1"},"lineJoin: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"'miter' ","|"," 'round' ","|"," 'bevel'"))),(0,a.kt)("p",null,"The lineJoin property sets the type of corner created, it can resolve spiked text issues. Default is 'miter' (creates a sharp corner).")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"miterlimit-number-1"},"miterLimit: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("p",null,"The miter limit to use when using the 'miter' lineJoin mode.\nThis can reduce or increase the spikiness of rendered text.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"padding-number-1"},"padding: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("p",null,"Occasionally some fonts are cropped. Adding some padding will prevent this from happening by adding padding to all sides of the text.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"stroke-string--number-1"},"stroke: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"string ","|"," number"))),(0,a.kt)("p",null,"A canvas fillstyle that will be used on the text stroke, e.g., 'blue', '#FCFF00'")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"strokethickness-number-1"},"strokeThickness: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,"0"))),(0,a.kt)("p",null,"A number that represents the thickness of the stroke.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"textbaseline-alphabetic--top--hanging--middle--ideographic--bottom-1"},"textBaseline: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"'alphabetic' ","|"," 'top' ","|"," 'hanging' ","|"," 'middle' ","|"," 'ideographic' ","|"," 'bottom'"))),(0,a.kt)("p",null,"The baseline of the text that is rendered.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"trim-boolean-1"},"trim: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"boolean"))),(0,a.kt)("p",null,"Trim transparent borders.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"whitespace-normal--pre--pre-line-1"},"whiteSpace: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"'normal' ","|"," 'pre' ","|"," 'pre-line'"))),(0,a.kt)("p",null,"How newlines and spaces should be handled. Default is 'pre' (preserve, preserve)."),(0,a.kt)("p",null,"|"," value      ","|"," New lines ","|"," Spaces   ","|","\n","|"," ---------- ","|"," --------- ","|"," -------- ","|","\n","|"," 'normal'   ","|"," Collapse  ","|"," Collapse ","|","\n","|"," 'pre'      ","|"," Preserve  ","|"," Preserve ","|","\n","|"," 'pre-line' ","|"," Preserve  ","|"," Collapse ","|")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"wordwrap-boolean-1"},"wordWrap: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"boolean"))),(0,a.kt)("p",null,"Indicates if word wrap should be used.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"wordwrapwidth-number-1"},"wordWrapWidth: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("p",null,"The width at which text will wrap, it needs wordWrap to be set to true.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"clone----textstyle"},"clone: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"() -",">"," TextStyle"))),(0,a.kt)("p",null,"Creates a new TextStyle object with the same values as this one. Note that the only the properties of the object are cloned."),(0,a.kt)("h4",{id:"returns"},"Returns:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"TextStyle")),(0,a.kt)("td",{parentName:"tr",align:null},"New cloned TextStyle object"))))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"reset----void"},"reset: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"() -",">"," void"))),(0,a.kt)("p",null,"Resets all properties to the defaults specified in TextStyle.prototype._default")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"tofontstring----string"},"toFontString: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"() -",">"," string"))),(0,a.kt)("p",null,"Generates a font style string to use for ",(0,a.kt)("inlineCode",{parentName:"p"},"TextMetrics.measureFont()"),"."),(0,a.kt)("h4",{id:"returns-1"},"Returns:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Font style string, for passing to ",(0,a.kt)("inlineCode",{parentName:"td"},"TextMetrics.measureFont()")))))),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);