"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[2400],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,h=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},11051:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={id:"PIXI.Spritesheet.pixi_spritesheet",title:"Class: PIXI.Spritesheet",sidebar_label:"PIXI.Spritesheet",custom_edit_url:null},i=void 0,s={unversionedId:"api/classes/PIXI.Spritesheet.pixi_spritesheet",id:"api/classes/PIXI.Spritesheet.pixi_spritesheet",title:"Class: PIXI.Spritesheet",description:"@pixi/spritesheet.Spritesheet",source:"@site/docs/api/classes/PIXI.Spritesheet.pixi_spritesheet.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.Spritesheet.pixi_spritesheet",permalink:"/api/classes/PIXI.Spritesheet.pixi_spritesheet",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.Spritesheet.pixi_spritesheet",title:"Class: PIXI.Spritesheet",sidebar_label:"PIXI.Spritesheet",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.SpriteMaskFilter",permalink:"/api/classes/PIXI.SpriteMaskFilter.pixi_core"},next:{title:"PIXI.StartupSystem",permalink:"/api/classes/PIXI.StartupSystem.pixi_core"}},o={},p=[{value:"new PIXI.Spritesheet: <span><code>(texture: BaseTexture | Texture, data: object, resolutionFilename: string) </code></span>",id:"new-pixispritesheet-texture-basetexture--texture-data-object-resolutionfilename-string-",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Members",id:"members",level:2},{value:"BATCH_SIZE: <span><code>number</code></span>",id:"batch_size-number",level:3},{value:"animations: <span><code>utils.Dict&lt;Texture[]&gt;</code></span>",id:"animations-utilsdicttexture",level:3},{value:"baseTexture: <span><code>BaseTexture</code></span>",id:"basetexture-basetexture",level:3},{value:"data: <span><code>object</code></span>",id:"data-object",level:3},{value:"linkedSheets: <span><code>Spritesheet[]</code></span>",id:"linkedsheets-spritesheet",level:3},{value:"resolution: <span><code>number</code></span>",id:"resolution-number",level:3},{value:"textures: <span><code>utils.Dict&lt;Texture&gt;</code></span>",id:"textures-utilsdicttexture",level:3},{value:"Methods",id:"methods",level:2},{value:"destroy: <span><code>(destroyBase: boolean) -&gt; void</code></span>",id:"destroy-destroybase-boolean---void",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"parse: <span><code>() -&gt; Promise&lt;utils.Dict&lt;Texture&gt;&gt;</code></span>",id:"parse----promiseutilsdicttexture",level:3},{value:"Returns:",id:"returns",level:4}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/pixi_spritesheet"},"@pixi/spritesheet"),".Spritesheet"),(0,a.kt)("p",null,"Utility class for maintaining reference to a collection of Textures on a single Spritesheet."),(0,a.kt)("p",null,"To access a sprite sheet from your code you may pass its JSON data file to Pixi's loader",":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import { Assets } from 'pixi.js';\n\nconst sheet = await Assets.load('images/spritesheet.json');\n\n")),(0,a.kt)("p",null,"Alternately, you may circumvent the loader by instantiating the Spritesheet directly",":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import { Spritesheet } from 'pixi.js';\n\nconst sheet = new Spritesheet(texture, spritesheetData);\nawait sheet.parse();\nconsole.log('Spritesheet ready to use!');\n\n")),(0,a.kt)("p",null,"With the ",(0,a.kt)("inlineCode",{parentName:"p"},"sheet.textures")," you can create Sprite objects, and ",(0,a.kt)("inlineCode",{parentName:"p"},"sheet.animations")," can be used to create an AnimatedSprite."),(0,a.kt)("p",null,"Here's an example of a sprite sheet JSON data file",":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "frames": {\n        "enemy1.png":\n        {\n            "frame": {"x":103,"y":1,"w":32,"h":32},\n            "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},\n            "sourceSize": {"w":32,"h":32},\n            "anchor": {"x":16,"y":16}\n        },\n        "enemy2.png":\n        {\n            "frame": {"x":103,"y":35,"w":32,"h":32},\n            "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},\n            "sourceSize": {"w":32,"h":32},\n            "anchor": {"x":16,"y":16}\n        },\n        "button.png":\n        {\n            "frame": {"x":1,"y":1,"w":100,"h":100},\n            "spriteSourceSize": {"x":0,"y":0,"w":100,"h":100},\n            "sourceSize": {"w":100,"h":100},\n            "anchor": {"x":0,"y":0},\n            "borders": {"left":35,"top":35,"right":35,"bottom":35}\n        }\n    },\n\n    "animations": {\n        "enemy": ["enemy1.png","enemy2.png"]\n    },\n\n    "meta": {\n        "image": "sheet.png",\n        "format": "RGBA8888",\n        "size": {"w":136,"h":102},\n        "scale": "1"\n    }\n}\n\n')),(0,a.kt)("p",null,"Sprite sheets can be packed using tools like ",(0,a.kt)("a",{parentName:"p",href:"https://codeandweb.com/texturepacker"},"TexturePacker"),", ",(0,a.kt)("a",{parentName:"p",href:"https://renderhjs.net/shoebox/"},"Shoebox")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/krzysztof-o/spritesheet.js"},"Spritesheet.js"),". Default anchor points (see ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.Texture.pixi_core#defaultAnchor"},"PIXI.Texture#defaultAnchor"),"), default 9-slice borders (see ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.Texture.pixi_core#defaultBorders"},"PIXI.Texture#defaultBorders"),") and grouping of animation sprites are currently only supported by TexturePacker."),(0,a.kt)("p",null,"// TODO: @see"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"new-pixispritesheet-texture-basetexture--texture-data-object-resolutionfilename-string-"},"new PIXI.Spritesheet: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"(texture",":"," BaseTexture ","|"," Texture, data",":"," object, resolutionFilename",":"," string) "))),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"texture"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"BaseTexture ","|"," Texture")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:null},"Reference to the source BaseTexture object.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"data"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"object")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:null},"Spritesheet image data.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"resolutionFilename"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"undefined")),(0,a.kt)("td",{parentName:"tr",align:null},"The filename to consider when determining the resolution of the spritesheet. If not provided, the imageUrl will be used on the BaseTexture."))))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"members"},"Members"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"batch_size-number"},"BATCH_SIZE: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,a.kt)("code",null,"1000"))),(0,a.kt)("p",null,"The maximum number of Textures to build per process.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"animations-utilsdicttexture"},"animations: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"utils.Dict","<","Texture[]",">"))),(0,a.kt)("p",null,"A map containing the textures for each animation. Can be used to create an ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.AnimatedSprite.pixi_sprite_animated"},"AnimatedSprite"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"}," import { AnimatedSprite } from 'pixi.js';\n\n new AnimatedSprite(sheet.animations['anim_name']);\n"))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"basetexture-basetexture"},"baseTexture: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"BaseTexture"))),(0,a.kt)("p",null,"Reference to ths source texture.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"data-object"},"data: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"object"))),(0,a.kt)("p",null,"Reference to the original JSON data.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"linkedsheets-spritesheet"},"linkedSheets: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"Spritesheet[]"))),(0,a.kt)("p",null,"For multi-packed spritesheets, this contains a reference to all the other spritesheets it depends on.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"resolution-number"},"resolution: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"number"))),(0,a.kt)("p",null,"The resolution of the spritesheet.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"textures-utilsdicttexture"},"textures: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"utils.Dict","<","Texture",">"))),(0,a.kt)("p",null,"A map containing all textures of the sprite sheet. Can be used to create a ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.Sprite.pixi_sprite"},"Sprite"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"}," import { Sprite } from 'pixi.js';\n\n new Sprite(sheet.textures['image.png']);\n"))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"destroy-destroybase-boolean---void"},"destroy: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"(destroyBase",":"," boolean) -",">"," void"))),(0,a.kt)("p",null,"Destroy Spritesheet and don't use after this."),(0,a.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"destroyBase"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},"Whether to destroy the base texture as well"))))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"parse----promiseutilsdicttexture"},"parse: ",(0,a.kt)("span",null,(0,a.kt)("code",null,"() -",">"," Promise","<","utils.Dict","<","Texture",">",">"))),(0,a.kt)("p",null,"Parser spritesheet from loaded data. This is done asynchronously to prevent creating too many Texture within a single process."),(0,a.kt)("h4",{id:"returns"},"Returns:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"Promise","<","utils.Dict","<","Texture",">",">")),(0,a.kt)("td",{parentName:"tr",align:null}))))),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);