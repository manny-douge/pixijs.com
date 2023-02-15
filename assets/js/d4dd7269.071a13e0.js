"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[8666],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>f});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(n),m=o,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||a;return n?t.createElement(f,i(i({ref:r},u),{},{components:n})):t.createElement(f,i({ref:r},u))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p[s]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60234:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var t=n(87462),o=(n(67294),n(3905));const a={hide_table_of_contents:!0},i="Backdrop pixelate",p={unversionedId:"examples/plugin-picture/pixelate",id:"examples/plugin-picture/pixelate",title:"Backdrop pixelate",description:"",source:"@site/docs/examples/plugin-picture/pixelate.md",sourceDirName:"examples/plugin-picture",slug:"/examples/plugin-picture/pixelate",permalink:"/examples/plugin-picture/pixelate",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/plugin-picture/pixelate.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"Backdrop displacement",permalink:"/examples/plugin-picture/displacement"},next:{title:"Mask blur",permalink:"/examples/plugin-picture/mask-blur"}},l={},c=[],u={toc:c};function s(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"backdrop-pixelate"},"Backdrop pixelate"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\n/**\n Based on discussion: http://www.html5gamedevs.com/topic/42199-how-to-make-pixelatefilter-take-effects-in-a-specific-area-of-a-pixisprite/\n\n How to modify PixelateFilter\n\n 1. put PixelateFilter in the example\n\n 2. add backdropSampler, that'll be our background, and take color from it , not from the uSampler\n\n 3. take only alpha channel of uSampler, without pixelation , multiply result by it\n\n 4. in renderer constructor manually specify two uniforms - backdropSampler, and size. pixi-picture doesn't work if we dont specify it manually :(\n\n 5. put a fullscreen filter on stage. pixi-picture requires that background is rendered inside a framebuffer, i mean Filter or RenderTexture, otherwise \"copySubTexImage2D\" wont work.\n */\n\nconst app = new PIXI.Application<HTMLCanvasElement>({ resizeTo: window });\ndocument.body.appendChild(app.view);\n\nconst fragment = `\nvarying vec2 vTextureCoord;\n\nuniform vec2 size;\nuniform sampler2D uSampler, backdropSampler;\nuniform vec2 backdropSampler_flipY;\nuniform highp vec4 inputSize;\nuniform highp vec4 outputFrame;\n\nvec2 mapCoord( vec2 coord )\n{\n    return coord * inputSize.xy + outputFrame.xy;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    return (coord - outputFrame.xy) * inputSize.zw;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n    return floor( coord / size ) * size;\n}\n\nvoid main(void)\n{\n    vec2 coord = mapCoord(vTextureCoord);\n    coord = pixelate(coord, size);\n    coord = unmapCoord(coord);\n    // required to take backdrop from screen without extra drawcall\n    coord.y = coord.y * backdropSampler_flipY.y + backdropSampler_flipY.x;\n\n    vec4 color = texture2D(backdropSampler, coord);\n    vec4 multiplier = texture2D(uSampler, vTextureCoord);\n\n    gl_FragColor = color * multiplier.a;\n}`;\n\nclass PixelateFilter extends PIXI.Filter {\n    constructor(size = 10) {\n        super(undefined, fragment, {\n            backdropSampler: PIXI.Texture.WHITE.baseTexture,\n            uBackdrop_flipY: new Float32Array(2),\n            size: new Float32Array(2),\n        });\n        this.size = size;\n        this.backdropUniformName = 'backdropSampler';\n    }\n\n    get size() {\n        return this.uniforms.size;\n    }\n\n    set size(value) {\n        if (typeof value === 'number') {\n            value = [value, value];\n        }\n        this.uniforms.size = value;\n    }\n}\n\napp.loader.baseUrl = 'https://pixijs.io/examples//examples/assets';\n\napp.loader.add('bg_rotate.jpg').add('flowerTop.png').load(complete);\n\nfunction complete() {\n// create a new background sprite\n    const background = new PIXI.Sprite(app.loader.resources['bg_rotate.jpg'].texture);\n    background.width = 800;\n    background.height = 600;\n    app.stage.addChild(background);\n\n    const dude = new PIXI.Sprite(app.loader.resources['flowerTop.png'].texture);\n    dude.position.set(100);\n    dude.filters = [new PixelateFilter()];\n    app.stage.addChild(dude);\n}\n")))}s.isMDXComponent=!0}}]);