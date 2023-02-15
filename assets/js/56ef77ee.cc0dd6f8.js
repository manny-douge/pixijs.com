"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[4490],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>x});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),m=a,x=l["".concat(c,".").concat(m)]||l[m]||d[m]||o;return n?r.createElement(x,i(i({ref:t},u),{},{components:n})):r.createElement(x,i({ref:t},u))}));function x(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={hide_table_of_contents:!0},i="Render Texture Basic",s={unversionedId:"examples/textures/render-texture-basic",id:"examples/textures/render-texture-basic",title:"Render Texture Basic",description:"",source:"@site/docs/examples/textures/render-texture-basic.md",sourceDirName:"examples/textures",slug:"/examples/textures/render-texture-basic",permalink:"/examples/textures/render-texture-basic",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/textures/render-texture-basic.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"Texture Rotate",permalink:"/examples/textures/texture-rotate"},next:{title:"Render Texture Advanced",permalink:"/examples/textures/render-texture-advanced"}},c={},p=[],u={toc:p};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"render-texture-basic"},"Render Texture Basic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application<HTMLCanvasElement>({ background: '#1099bb', resizeTo: window });\ndocument.body.appendChild(app.view);\n\nconst container = new PIXI.Container();\napp.stage.addChild(container);\n\nconst texture = PIXI.Texture.from('https://beta.pixijs.com/assets/bunny.png');\n\nfor (let i = 0; i < 25; i++) {\n    const bunny = new PIXI.Sprite(texture);\n    bunny.x = (i % 5) * 30;\n    bunny.y = Math.floor(i / 5) * 30;\n    bunny.rotation = Math.random() * (Math.PI * 2);\n    container.addChild(bunny);\n}\n\nconst brt = new PIXI.BaseRenderTexture(300, 300, PIXI.SCALE_MODES.LINEAR, 1);\nconst rt = new PIXI.RenderTexture(brt);\n\nconst sprite = new PIXI.Sprite(rt);\n\nsprite.x = 450;\nsprite.y = 60;\napp.stage.addChild(sprite);\n\n/*\n * All the bunnies are added to the container with the addChild method\n * when you do this, all the bunnies become children of the container, and when a container moves,\n * so do all its children.\n * This gives you a lot of flexibility and makes it easier to position elements on the screen\n */\ncontainer.x = 100;\ncontainer.y = 60;\n\napp.ticker.add(() => {\n    app.renderer.render(container, rt);\n});\n")))}l.isMDXComponent=!0}}]);