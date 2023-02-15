"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[5107],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=o,f=c["".concat(d,".").concat(m)]||c[m]||u[m]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},97738:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const i={hide_table_of_contents:!0},a="Blend Modes",l={unversionedId:"examples/plugin-picture/blend-modes",id:"examples/plugin-picture/blend-modes",title:"Blend Modes",description:"",source:"@site/docs/examples/plugin-picture/blend-modes.md",sourceDirName:"examples/plugin-picture",slug:"/examples/plugin-picture/blend-modes",permalink:"/examples/plugin-picture/blend-modes",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/plugin-picture/blend-modes.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"Trail",permalink:"/examples/plugin-layers/trail"},next:{title:"Dissolve",permalink:"/examples/plugin-picture/dissolve"}},d={},s=[],p={toc:s};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"blend-modes"},"Blend Modes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application<HTMLCanvasElement>({\ndocument.body.appendChild(app.view);\n    autoStart: false,\n    backgroundAlpha: 0,\n});\nconst { stage, renderer } = app;\n\n\nconst SUPPORTED_BLEND_MODES = [\n    'NORMAL',\n    'ADD',\n    'SUBTRACT',\n    'MULTIPLY',\n    'XOR',\n    'SRC_IN',\n    'SRC_OUT',\n    'SRC_ATOP',\n    'DST_OVER',\n    'DST_IN',\n    'DST_OUT',\n    'DST_ATOP',\n    'SCREEN',\n    'OVERLAY',\n    'SOFT_LIGHT',\n    'HARD_LIGHT',\n];\n\nconst BLEND_MODES = SUPPORTED_BLEND_MODES.map((modeName) => [modeName, PIXI.BLEND_MODES[modeName]]);\nconst R = 36;\nconst COLOR_DESTINATION = 0xe91e63;\nconst TEXTURE_DESTINATION = PIXI.RenderTexture.create({ width: 2 * R, height: 2 * R, resolution: renderer.resolution });\nconst COLOR_SOURCE = 0x2196f3;\nconst TEXTURE_SOURCE = PIXI.RenderTexture.create({ width: 2 * R, height: 2 * R, resolution: renderer.resolution });\n\nTEXTURE_DESTINATION.baseTexture.framebuffer.multisample = PIXI.MSAA_QUALITY.HIGH;\n\nrenderer.render(\n    new PIXI.Graphics()\n        .beginFill(COLOR_DESTINATION, 1)\n        .drawCircle(R, R, R)\n        .endFill(),\n    {\n        renderTexture: TEXTURE_DESTINATION,\n    },\n);\nif (renderer.framebuffer) {\n    renderer.framebuffer.blit();\n}\n\nrenderer.render(\n    new PIXI.Graphics()\n        .beginFill(COLOR_SOURCE, 0.8)\n        .drawRect(0, 0, 2 * R, 2 * R),\n    {\n        renderTexture: TEXTURE_SOURCE,\n    },\n);\n\nfor (let i = 0, blendModeIndex = 0; i < BLEND_MODES.length; i++) {\n    const [blendModeName, blendMode] = BLEND_MODES[i];\n    const item = new PIXI.Container();\n    const destination = item.addChild(new PIXI.picture.Sprite(TEXTURE_DESTINATION));\n    const source = item.addChild(new PIXI.picture.Sprite(TEXTURE_SOURCE));\n    const label = item.addChild(new PIXI.Text(blendModeName, {\n        fill: 0xffffff,\n        fontSize: 12,\n    }));\n\n    destination.position.set(-R, -R);\n    source.position.set(-2 * R, 0);\n    label.position.set(-2 * R, -1.5 * R);\n\n    // Set blend-mode!\n    source.blendMode = blendMode;\n\n    const index = blendModeIndex++;\n    const xIndex = Math.floor(index / 4);\n    const yIndex = (index % 4);\n\n    item.x = (3 + 6 * xIndex) * R;\n    item.y = (2 + yIndex * 4) * R;\n\n    stage.addChild(item);\n}\n\napp.render();\n")))}c.isMDXComponent=!0}}]);