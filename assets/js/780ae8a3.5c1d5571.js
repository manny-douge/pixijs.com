"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[5045],{3905:(e,n,r)=>{r.d(n,{Zo:()=>o,kt:()=>F});var i=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function t(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,i,a=function(e,n){if(null==e)return{};var r,i,a={},t=Object.keys(e);for(i=0;i<t.length;i++)r=t[i],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(i=0;i<t.length;i++)r=t[i],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=i.createContext({}),s=function(e){var n=i.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},o=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},g="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var r=e.components,a=e.mdxType,t=e.originalType,p=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),g=s(r),d=a,F=g["".concat(p,".").concat(d)]||g[d]||h[d]||t;return r?i.createElement(F,l(l({ref:n},o),{},{components:r})):i.createElement(F,l({ref:n},o))}));function F(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var t=r.length,l=new Array(t);l[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[g]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<t;s++)l[s]=r[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},69117:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>t,metadata:()=>c,toc:()=>s});var i=r(87462),a=(r(67294),r(3905));const t={hide_table_of_contents:!0},l="Simple",c={unversionedId:"examples/graphics/simple",id:"examples/graphics/simple",title:"Simple",description:"",source:"@site/docs/examples/graphics/simple.md",sourceDirName:"examples/graphics",slug:"/examples/graphics/simple",permalink:"/examples/graphics/simple",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/graphics/simple.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"Google Webfont",permalink:"/examples/text/webfont"},next:{title:"Advanced",permalink:"/examples/graphics/advanced"}},p={},s=[],o={toc:s};function g(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},o,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"simple"},"Simple"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application<HTMLCanvasElement>({ antialias: true, resizeTo: window });\ndocument.body.appendChild(app.view);\n\nconst graphics = new PIXI.Graphics();\n\n// Rectangle\ngraphics.beginFill(0xDE3249);\ngraphics.drawRect(50, 50, 100, 100);\ngraphics.endFill();\n\n// Rectangle + line style 1\ngraphics.lineStyle(2, 0xFEEB77, 1);\ngraphics.beginFill(0x650A5A);\ngraphics.drawRect(200, 50, 100, 100);\ngraphics.endFill();\n\n// Rectangle + line style 2\ngraphics.lineStyle(10, 0xFFBD01, 1);\ngraphics.beginFill(0xC34288);\ngraphics.drawRect(350, 50, 100, 100);\ngraphics.endFill();\n\n// Rectangle 2\ngraphics.lineStyle(2, 0xFFFFFF, 1);\ngraphics.beginFill(0xAA4F08);\ngraphics.drawRect(530, 50, 140, 100);\ngraphics.endFill();\n\n// Circle\ngraphics.lineStyle(0); // draw a circle, set the lineStyle to zero so the circle doesn't have an outline\ngraphics.beginFill(0xDE3249, 1);\ngraphics.drawCircle(100, 250, 50);\ngraphics.endFill();\n\n// Circle + line style 1\ngraphics.lineStyle(2, 0xFEEB77, 1);\ngraphics.beginFill(0x650A5A, 1);\ngraphics.drawCircle(250, 250, 50);\ngraphics.endFill();\n\n// Circle + line style 2\ngraphics.lineStyle(10, 0xFFBD01, 1);\ngraphics.beginFill(0xC34288, 1);\ngraphics.drawCircle(400, 250, 50);\ngraphics.endFill();\n\n// Ellipse + line style 2\ngraphics.lineStyle(2, 0xFFFFFF, 1);\ngraphics.beginFill(0xAA4F08, 1);\ngraphics.drawEllipse(600, 250, 80, 50);\ngraphics.endFill();\n\n// draw a shape\ngraphics.beginFill(0xFF3300);\ngraphics.lineStyle(4, 0xffd900, 1);\ngraphics.moveTo(50, 350);\ngraphics.lineTo(250, 350);\ngraphics.lineTo(100, 400);\ngraphics.lineTo(50, 350);\ngraphics.closePath();\ngraphics.endFill();\n\n// draw a rounded rectangle\ngraphics.lineStyle(2, 0xFF00FF, 1);\ngraphics.beginFill(0x650A5A, 0.25);\ngraphics.drawRoundedRect(50, 440, 100, 100, 16);\ngraphics.endFill();\n\n// draw star\ngraphics.lineStyle(2, 0xFFFFFF);\ngraphics.beginFill(0x35CC5A, 1);\ngraphics.drawStar(360, 370, 5, 50);\ngraphics.endFill();\n\n// draw star 2\ngraphics.lineStyle(2, 0xFFFFFF);\ngraphics.beginFill(0xFFCC5A, 1);\ngraphics.drawStar(280, 510, 7, 50);\ngraphics.endFill();\n\n// draw star 3\ngraphics.lineStyle(4, 0xFFFFFF);\ngraphics.beginFill(0x55335A, 1);\ngraphics.drawStar(470, 450, 4, 50);\ngraphics.endFill();\n\n// draw polygon\nconst path = [600, 370, 700, 460, 780, 420, 730, 570, 590, 520];\n\ngraphics.lineStyle(0);\ngraphics.beginFill(0x3500FA, 1);\ngraphics.drawPolygon(path);\ngraphics.endFill();\n\napp.stage.addChild(graphics);\n")))}g.isMDXComponent=!0}}]);