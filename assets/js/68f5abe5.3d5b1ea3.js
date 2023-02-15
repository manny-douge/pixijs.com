"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[8506],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),l=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(n),u=a,g=h["".concat(p,".").concat(u)]||h[u]||d[u]||r;return n?i.createElement(g,o(o({ref:t},c),{},{components:n})):i.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[h]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42994:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(87462),a=(n(67294),n(3905));const r={},o="Sprites",s={unversionedId:"guides/basics/sprites",id:"guides/basics/sprites",title:"Sprites",description:"Sprites are the simplest and most common renderable object in PixiJS.  They represent a single image to be displayed on the screen.  Each Sprite contains a Texture to be drawn, along with all the transformation and display state required to function in the scene graph.",source:"@site/docs/guides/basics/sprites.md",sourceDirName:"guides/basics",slug:"/guides/basics/sprites",permalink:"/guides/basics/sprites",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/guides/basics/sprites.md",tags:[],version:"current",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"Scene Graph",permalink:"/guides/basics/scene-graph"},next:{title:"Spritesheets",permalink:"/guides/basics/sprite-sheets"}},p={},l=[{value:"Creating Sprites",id:"creating-sprites",level:2},{value:"Using Sprites",id:"using-sprites",level:2},{value:"Alpha, Tint and Blend Modes",id:"alpha-tint-and-blend-modes",level:2},{value:"Scale vs Width &amp; Height",id:"scale-vs-width--height",level:2},{value:"Pivot vs Anchor",id:"pivot-vs-anchor",level:2}],c={toc:l};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sprites"},"Sprites"),(0,a.kt)("p",null,"Sprites are the simplest and most common renderable object in PixiJS.  They represent a single image to be displayed on the screen.  Each ",(0,a.kt)("a",{parentName:"p",href:"/api/classes/PIXI.Sprite.pixi_sprite"},"Sprite")," contains a ",(0,a.kt)("a",{parentName:"p",href:"/api/classes/PIXI.Texture.pixi_core"},"Texture")," to be drawn, along with all the transformation and display state required to function in the scene graph."),(0,a.kt)("h2",{id:"creating-sprites"},"Creating Sprites"),(0,a.kt)("p",null,"To create a Sprite, all you need is a Texture (check out the Texture guide).  Load a PNG's URL using the PIXI.Loader class, then call ",(0,a.kt)("inlineCode",{parentName:"p"},"PIXI.Sprite.from(url)")," and you're all set.  As a convenience during prototyping, you can pass a non-loaded URL to ",(0,a.kt)("inlineCode",{parentName:"p"},"from()"),' and PixiJS will handle it, but your sprite will "pop in" after it loads if you don\'t pre-load your textures.'),(0,a.kt)("p",null,"Check out the ",(0,a.kt)("a",{parentName:"p",href:"/examples/sprite/basic"},"sprite example code"),"."),(0,a.kt)("h2",{id:"using-sprites"},"Using Sprites"),(0,a.kt)("p",null,"In our ","[DisplayObject guide]","{@link basics/display-object}, we learned about the DisplayObject class and the various properties it defines.  Since Sprite objects are also display objects, you can move a sprite, rotate it, and update any other display property."),(0,a.kt)("h2",{id:"alpha-tint-and-blend-modes"},"Alpha, Tint and Blend Modes"),(0,a.kt)("p",null,"Alpha is a standard display object property.  You can use it to fade sprites into the scene by animating each sprite's alpha from 0.0 to 1.0 over a period of time."),(0,a.kt)("p",null,"Tinting allows you multiply the color value of every pixel by a single color.  For example, if you had a dungeon game, you might show a character's poison status by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"obj.tint = 0x00FF00"),", which would give a green tint to the character."),(0,a.kt)("p",null,"Blend modes change how pixel colors are added to the screen when rendering.  The three main modes are ",(0,a.kt)("strong",{parentName:"p"},"add"),", which adds each pixel's RGB channels to whatever is under your sprite (useful for glows and lighting), ",(0,a.kt)("strong",{parentName:"p"},"multiply")," which works like ",(0,a.kt)("inlineCode",{parentName:"p"},"tint"),", but on a per-pixel basis, and ",(0,a.kt)("strong",{parentName:"p"},"screen"),", which overlays the pixels, brightening whatever is underneath them."),(0,a.kt)("h2",{id:"scale-vs-width--height"},"Scale vs Width & Height"),(0,a.kt)("p",null,"One common area of confusion when working with sprites lies in scaling and dimensions.  The PIXI.DisplayObject class allows you to set the x and y scale for any object.  Sprites, being DisplayObjects, also support scaling.  In addition, however, Sprites support explicit ",(0,a.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"height")," attributes that can be used to achieve the same effect, but are in pixels instead of a percentage.  This works because a Sprite object owns a Texture, which has an explicit width and height.  When you set a Sprite's width, internally PixiJS converts that width into a percentage of the underlying texture's width and updates the object's x-scale.  So width and height are really just convenience methods for changing scale, based on pixel dimensions rather than percentages."),(0,a.kt)("h2",{id:"pivot-vs-anchor"},"Pivot vs Anchor"),(0,a.kt)("p",null,"If you add a sprite to your stage and rotate it, it will by default rotate around the top-left corner of the image.  In some cases, this is what you want.  In many cases, however, what you want is for the sprite to rotate around the center of the image it contains, or around an arbitrary point."),(0,a.kt)("p",null,"There are two ways to achieve this: ",(0,a.kt)("em",{parentName:"p"},"pivots")," and ",(0,a.kt)("em",{parentName:"p"},"anchors")),(0,a.kt)("p",null,"An object's ",(0,a.kt)("strong",{parentName:"p"},"pivot")," is an offset, expressed in pixels, from the top-left corner of the Sprite.  It defaults to (0, 0).  If you have a Sprite whose texture is 100px x 50px, and want to set the pivot point to the center of the image, you'd set your pivot to (50, 25) - half the width, and half the height.  Note that pivots can be set ",(0,a.kt)("em",{parentName:"p"},"outside")," of the image, meaning the pivot may be less than zero or greater than the width/height.  This can be useful in setting up complex animation hierarchies, for example.  Every DisplayObject has a pivot."),(0,a.kt)("p",null,"An ",(0,a.kt)("strong",{parentName:"p"},"anchor"),", in contrast, is only available for Sprites.  Anchors are specified in percentages, from 0.0 to 1.0, in each dimension.  To rotate around the center point of a texture using anchors, you'd set your Sprite's anchor to (0.5, 0.5) - 50% in width and height.  While less common, anchors can also be outside the standard 0.0 - 1.0 range."),(0,a.kt)("p",null,"The nice thing about anchors is that they are resolution and dimension agnostic.  If you set your Sprite to be anchored in the middle then later change the size of the texture, your object will still rotate correctly.  If you had instead set a pivot using pixel-based calculations, changing the texture size would require changing your pivot point."),(0,a.kt)("p",null,"So, generally speaking, you'll want to use anchors when working with Sprites."),(0,a.kt)("p",null,"One final note: unlike CSS, where setting the transform-origin of the image doesn't move it, in PixiJS setting an anchor or pivot ",(0,a.kt)("em",{parentName:"p"},"will")," move your object on the screen.  In other words, setting an anchor or pivot affects not just the rotation origin, but also the position of the sprite relative to its parent."))}h.isMDXComponent=!0}}]);