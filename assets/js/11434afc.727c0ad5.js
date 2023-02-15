"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[420],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={hide_table_of_contents:!0},o="Shadertoy filter",s={unversionedId:"examples/filters-advanced/shadertoy-filter-rendertexture",id:"examples/filters-advanced/shadertoy-filter-rendertexture",title:"Shadertoy filter",description:"",source:"@site/docs/examples/filters-advanced/shadertoy-filter-rendertexture.md",sourceDirName:"examples/filters-advanced",slug:"/examples/filters-advanced/shadertoy-filter-rendertexture",permalink:"/examples/filters-advanced/shadertoy-filter-rendertexture",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/filters-advanced/shadertoy-filter-rendertexture.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"Pixie Shadow",permalink:"/examples/filters-advanced/pixie-shadow-filter"},next:{title:"Outline",permalink:"/examples/plugin-filters/outline"}},l={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"shadertoy-filter"},"Shadertoy filter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\n/**\nPlease note that this is not the most optimal way of doing pure shader generated rendering and should be used when scene is wanted as input texture.\nCheck the mesh version of example for more performant version if you need only shader generated content.\n* */\n\nconst app = new PIXI.Application<HTMLCanvasElement>({ background: '#1099bb', resizeTo: window });\ndocument.body.appendChild(app.view);\n\nPIXI.Assets.load('https://beta.pixijs.com/assets/perlin.jpg').then(onAssetsLoaded);\n\nlet filter = null;\n\nconst text = new PIXI.Text('PixiJS', { fill: 0xFFFFFF, fontSize: 80 });\ntext.anchor.set(0.5, 0.5);\ntext.position.set(app.renderer.screen.width / 2, app.renderer.screen.height / 2);\n\napp.stage.addChild(text);\n\nlet totalTime = 0;\n\n// Fragment shader, in real use this would be much cleaner when loaded from a file/embedded into the application as data resource.\nconst fragment = `//Based on this: https://www.shadertoy.com/view/wtlSWX\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform sampler2D noise;\nuniform float time;\n//Distance function. Just calculates the height (z) from x,y plane with really simple length check. Its not exact as there could be shorter distances.\nvec2 dist(vec3 p)\n{\n  float id = floor(p.x)+floor(p.y);\n  id = mod(id, 2.);\n  float h = texture2D(noise, vec2(p.x, p.y)*0.04).r*5.1;\n  float h2 = texture2D(uSampler, vTextureCoord).r;\n  return vec2(h+h2-p.z,id);\n}\n//Light calculation.\nvec3 calclight(vec3 p, vec3 rd)\n{\n  vec2 eps = vec2( 0., 0.001);\n  vec3 n = normalize( vec3(\n    dist(p+eps.yxx).x - dist(p-eps.yxx).x,\n    dist(p+eps.xyx).x - dist(p-eps.xyx).x,\n    dist(p+eps.xxy).x - dist(p-eps.xxy).x\n  ));\n  \n  vec3 d = vec3( max( 0., dot( -rd ,n)));\n  \n  return d;\n}\n\nvoid main()\n{\n  vec2 uv = vec2(vTextureCoord.x, 1.-vTextureCoord.y);\n  uv *=2.;\n  uv-=1.;\n  \n  vec3 cam = vec3(0.,time -2., -3.);\n  vec3 target = vec3(sin(time)*0.1, time+cos(time)+2., 0. );\n  float fov = 2.2;\n  vec3 forward = normalize( target - cam);\n  vec3 up = normalize(cross( forward, vec3(0., 1.,0.)));\n  vec3 right = normalize( cross( up, forward));\n  vec3 raydir = normalize(vec3( uv.x *up + uv.y * right + fov*forward));\n  \n  //Do the raymarch\n  vec3 col = vec3(0.);\n  float t = 0.;\n  for( int i = 0; i < 100; i++)\n  {\n    vec3 p = t * raydir + cam;\n    vec2 d = dist(p);\n    t+=d.x*0.5;//Jump only half of the distance as height function used is not really the best for heightmaps.\n    if(d.x < 0.001)\n    {\n      vec3 bc = d.y < 0.5 ? vec3(1.0, .8, 0.) :\n                vec3(0.8,0.0, 1.0);\n      col = vec3( 1.) * calclight(p, raydir) * (1. - t/150.) *bc;\n      break;\n    }\n    if(t > 1000.)\n    {\n      break;\n    }\n  }\n  gl_FragColor = vec4(col, 1.);\n}\n`;\n\nfunction onAssetsLoaded(perlin) {\n    // Add perlin noise for filter, make sure it's wrapping and does not have mipmap.\n    perlin.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;\n    perlin.baseTexture.mipmap = false;\n    perlin.width = perlin.height = 200;\n\n    // Build the filter\n    filter = new PIXI.Filter(null, fragment, {\n        time: 0.0,\n        noise: perlin,\n    });\n    app.stage.filterArea = app.renderer.screen;\n    app.stage.filters = [filter];\n\n    // Listen for animate update.\n    app.ticker.add((delta) => {\n        filter.uniforms.time = totalTime;\n        totalTime += delta / 60;\n    });\n}\n")))}d.isMDXComponent=!0}}]);