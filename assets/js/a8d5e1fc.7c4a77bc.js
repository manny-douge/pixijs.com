"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[1847],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(h,i(i({ref:n},l),{},{components:t})):r.createElement(h,i({ref:n},l))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},60465:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={hide_table_of_contents:!0},i="Decals",s={unversionedId:"examples/plugin-heaven/decals",id:"examples/plugin-heaven/decals",title:"Decals",description:"",source:"@site/docs/examples/plugin-heaven/decals.md",sourceDirName:"examples/plugin-heaven",slug:"/examples/plugin-heaven/decals",permalink:"/examples/plugin-heaven/decals",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/plugin-heaven/decals.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"Polygon Packing",permalink:"/examples/plugin-heaven/polygon"},next:{title:"Batching ADD",permalink:"/examples/plugin-heaven/unity-add-blend"}},p={},c=[],l={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"decals"},"Decals"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\n// the plugin is here: https://github.com/gameofbombs/pixi-heaven/tree/master\n\nconst app = new PIXI.Application<HTMLCanvasElement>({ background: '#1099bb', resizeTo: window });\ndocument.body.appendChild(app.view);\n\napp.loader.add('bunny', 'https://beta.pixijs.com/assets/bunny.png');\napp.loader.load(onComplete);\n\nfunction onComplete(loader, resources) {\n    const bunnyTex = resources.bunny.texture;\n    bunnyTex.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;\n\n    const bunny = new PIXI.heaven.SpriteH(bunnyTex);\n    bunny.position.set(100, 100);\n    bunny.scale.set(10);\n\n    const W = bunny.width;\n    const H = bunny.height;\n\n    const maskRT = PIXI.RenderTexture.create(W, H, 1);\n    const blackGraphics = new PIXI.Graphics();\n    blackGraphics.beginFill(0);\n    blackGraphics.drawRect(0, 0, W, H);\n\n    const whiteBunny = new PIXI.heaven.SpriteH(bunnyTex);\n    whiteBunny.scale.set(10);\n    whiteBunny.color.setDark(1.0, 1.0, 1.0);\n    app.renderer.render(blackGraphics, maskRT, false);\n    app.renderer.render(whiteBunny, maskRT, false);\n\n    const decalRT = PIXI.RenderTexture.create({ width: W, height: H, scaleMode: PIXI.SCALE_MODES.NEAREST });\n    const decals = new PIXI.Container();\n    for (let i = 0; i < 100; i++) {\n        const randomBunny = new PIXI.heaven.SpriteH(bunnyTex);\n        randomBunny.position.set(Math.random() * W | 0, Math.random() * H | 0);\n        randomBunny.color.setLight(Math.random(), Math.random(), Math.random());\n        randomBunny.color.setDark(Math.random(), Math.random(), Math.random());\n        decals.addChild(randomBunny);\n    }\n    app.renderer.render(decals, decalRT);\n\n    const maskSprite = new PIXI.heaven.SpriteH(maskRT);\n    const decalSprite = new PIXI.heaven.SpriteH(decalRT);\n\n    maskSprite.position = bunny.position;\n    decalSprite.position = bunny.position;\n    maskSprite.renderable = false;\n    decalSprite.maskSprite = maskSprite;\n    decalSprite.pluginName = 'batchMasked';\n\n    app.stage.addChild(bunny);\n    app.stage.addChild(maskSprite);\n    app.stage.addChild(decalSprite);\n}\n")))}d.isMDXComponent=!0}}]);