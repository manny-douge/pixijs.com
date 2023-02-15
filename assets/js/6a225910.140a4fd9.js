"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[9103],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},77296:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const i={hide_table_of_contents:!0},o="Trail",l={unversionedId:"examples/plugin-layers/trail",id:"examples/plugin-layers/trail",title:"Trail",description:"",source:"@site/docs/examples/plugin-layers/trail.md",sourceDirName:"examples/plugin-layers",slug:"/examples/plugin-layers/trail",permalink:"/examples/plugin-layers/trail",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/plugin-layers/trail.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"Drag, Sort, Light",permalink:"/examples/plugin-layers/normals-drag"},next:{title:"Blend Modes",permalink:"/examples/plugin-picture/blend-modes"}},s={},p=[],u={toc:p};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"trail"},"Trail"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application<HTMLCanvasElement>({ background: '#1099bb', resizeTo: window });\ndocument.body.appendChild(app.view);\n\napp.stage = new PIXI.layers.Stage();\n\nconst layer = new PIXI.layers.Layer();\nlayer.useRenderTexture = true;\n// this flag is required, or you'll get\n// \"glDrawElements: Source and destination textures of the draw are the same.\"\nlayer.useDoubleBuffer = true;\n\nconst trailSprite = new PIXI.Sprite(layer.getRenderTexture());\ntrailSprite.alpha = 0.6;\n\nlayer.addChild(trailSprite);\n\napp.stage.addChild(layer);\nconst showLayer = new PIXI.Sprite(layer.getRenderTexture());\napp.stage.addChild(showLayer);\n\nconst bunnyTex = PIXI.Texture.from('https://beta.pixijs.com/assets/bunny.png');\nconst bunnies = [];\nfor (let i = 0; i < 5; i++) {\n    bunnies[i] = new PIXI.Container();\n    bunnies[i].position.set(app.screen.width / 2, app.screen.height / 2);\n    bunnies[i].rotation = (i / 5) * (Math.PI * 2);\n    bunnies[i].pivot.set(0, -200);\n\n    const sprite = new PIXI.Sprite(bunnyTex);\n    bunnies[i].addChild(sprite);\n    sprite.anchor.set(0.5);\n    sprite.scale.set(2 + Math.random());\n\n    layer.addChild(bunnies[i]);\n}\n\n// Listen for animate update\napp.ticker.add((delta) => {\n    // just for fun, let's rotate mr rabbit a little\n    // delta is 1 if running at 100% performance\n    // creates frame-independent transformation\n    for (let i = 0; i < bunnies.length; i++) {\n        bunnies[i].rotation += 0.05 * delta;\n        bunnies[i].children[0].rotation += 0.1 * delta;\n    }\n});\n")))}c.isMDXComponent=!0}}]);