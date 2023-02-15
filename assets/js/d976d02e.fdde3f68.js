"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[9906],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var d=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);n&&(d=d.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,d)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,d,r=function(e,n){if(null==e)return{};var t,d,r={},o=Object.keys(e);for(d=0;d<o.length;d++)t=o[d],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(d=0;d<o.length;d++)t=o[d],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=d.createContext({}),s=function(e){var n=d.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return d.createElement(u.Provider,{value:n},e.children)},c="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return d.createElement(d.Fragment,{},n)}},m=d.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(t),m=r,h=c["".concat(u,".").concat(m)]||c[m]||l[m]||o;return t?d.createElement(h,a(a({ref:n},p),{},{components:t})):d.createElement(h,a({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[c]="string"==typeof e?e:r,a[1]=i;for(var s=2;s<o;s++)a[s]=t[s];return d.createElement.apply(null,a)}return d.createElement.apply(null,t)}m.displayName="MDXCreateElement"},61641:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var d=t(87462),r=(t(67294),t(3905));const o={hide_table_of_contents:!0},a="More blend modes",i={unversionedId:"examples/plugin-picture/overlay",id:"examples/plugin-picture/overlay",title:"More blend modes",description:"",source:"@site/docs/examples/plugin-picture/overlay.md",sourceDirName:"examples/plugin-picture",slug:"/examples/plugin-picture/overlay",permalink:"/examples/plugin-picture/overlay",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/plugin-picture/overlay.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"Dissolve",permalink:"/examples/plugin-picture/dissolve"},next:{title:"Backdrop displacement",permalink:"/examples/plugin-picture/displacement"}},u={},s=[],p={toc:s};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,d.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"more-blend-modes"},"More blend modes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\n// This is demo of pixi-picture.js, https://github.com/pixijs/pixi-picture\n// Plugin automatically assigns a filter for every sprite that has special blendModes\n\nconst app = new PIXI.Application<HTMLCanvasElement>({ resizeTo: window });\ndocument.body.appendChild(app.view);\n\n// create a new background sprite\nconst background = PIXI.Sprite.from('https://beta.pixijs.com/assets/bg_rotate.jpg');\nbackground.width = 800;\nbackground.height = 600;\napp.stage.addChild(background);\n\n// create an array to store a reference to the dudes\nconst dudeArray = [];\n\nconst totaldudes = 20;\nconst texture = PIXI.Texture.from('https://beta.pixijs.com/assets/flowerTop.png');\n\nfor (let i = 0; i < totaldudes; i++) {\n    // create a new Sprite that uses the image name that we just generated as its source\n    const dude = new PIXI.picture.Sprite(texture);\n\n    dude.anchor.set(0.5);\n\n    // set a random scale for the dude\n    dude.scale.set(0.8 + Math.random() * 0.3);\n\n    // finally let's set the dude to be at a random position...\n    dude.x = Math.floor(Math.random() * app.screen.width);\n    dude.y = Math.floor(Math.random() * app.screen.height);\n\n    // The important bit of this example, this is how you change the default blend mode of the sprite\n    const num = Math.random() * 3 | 0;\n    if (num === 0) {\n        dude.blendMode = PIXI.BLEND_MODES.HARD_LIGHT;\n    } else if (num === 1) {\n        dude.blendMode = PIXI.BLEND_MODES.SOFT_LIGHT;\n    } else if (num === 2) {\n        dude.blendMode = PIXI.BLEND_MODES.OVERLAY;\n    }\n\n    // create some extra properties that will control movement\n    dude.direction = Math.random() * Math.PI * 2;\n\n    // this number will be used to modify the direction of the dude over time\n    dude.turningSpeed = Math.random() - 0.8;\n\n    // create a random speed for the dude between 0 - 2\n    dude.speed = 2 + Math.random() * 2;\n\n    // finally we push the dude into the dudeArray so it it can be easily accessed later\n    dudeArray.push(dude);\n\n    app.stage.addChild(dude);\n}\n\n// create a bounding box box for the little dudes\nconst dudeBoundsPadding = 100;\n\nconst dudeBounds = new PIXI.Rectangle(\n    -dudeBoundsPadding,\n    -dudeBoundsPadding,\n    app.screen.width + dudeBoundsPadding * 2,\n    app.screen.height + dudeBoundsPadding * 2,\n);\n\napp.ticker.add(() => {\n    // iterate through the dudes and update the positions\n    for (let i = 0; i < dudeArray.length; i++) {\n        const dude = dudeArray[i];\n        dude.direction += dude.turningSpeed * 0.01;\n        dude.x += Math.sin(dude.direction) * dude.speed;\n        dude.y += Math.cos(dude.direction) * dude.speed;\n        dude.rotation = -dude.direction - Math.PI / 2;\n\n        // wrap the dudes by testing their bounds...\n        if (dude.x < dudeBounds.x) {\n            dude.x += dudeBounds.width;\n        } else if (dude.x > dudeBounds.x + dudeBounds.width) {\n            dude.x -= dudeBounds.width;\n        }\n\n        if (dude.y < dudeBounds.y) {\n            dude.y += dudeBounds.height;\n        } else if (dude.y > dudeBounds.y + dudeBounds.height) {\n            dude.y -= dudeBounds.height;\n        }\n    }\n});\n")))}c.isMDXComponent=!0}}]);