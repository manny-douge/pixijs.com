"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[8346],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=o,f=d["".concat(l,".").concat(u)]||d[u]||h[u]||r;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},42081:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={},i="Text",s={unversionedId:"guides/basics/text",id:"guides/basics/text",title:"Text",description:"Whether it's a high score or a diagram label, text is often the best way to convey information in your projects.  Surprisingly, drawing text to the screen with WebGL is a very complex process - there's no built in support for it at all.  One of the values PixiJS provides is in hiding this complexity to allow you to draw text in diverse styles, fonts and colors with a few lines of code.  In addition, these bits of text are just as much scene objects as sprites - you can tint text, rotate it, alpha-blend it, and otherwise treat it like any other graphical object.",source:"@site/docs/guides/basics/text.md",sourceDirName:"guides/basics",slug:"/guides/basics/text",permalink:"/guides/basics/text",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/guides/basics/text.md",tags:[],version:"current",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"Spritesheets",permalink:"/guides/basics/sprite-sheets"},next:{title:"Assets",permalink:"/guides/basics/assets"}},l={},p=[{value:"There Are Two Kinds of Text",id:"there-are-two-kinds-of-text",level:2},{value:"The Text Object",id:"the-text-object",level:2},{value:"Text Styles",id:"text-styles",level:2},{value:"Loading and Using Fonts",id:"loading-and-using-fonts",level:2},{value:"Caveats and Gotchas",id:"caveats-and-gotchas",level:2},{value:"BitmapText",id:"bitmaptext",level:2},{value:"BitmapFont",id:"bitmapfont",level:2},{value:"Selecting the Right Approach",id:"selecting-the-right-approach",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"text"},"Text"),(0,o.kt)("p",null,"Whether it's a high score or a diagram label, text is often the best way to convey information in your projects.  Surprisingly, drawing text to the screen with WebGL is a very complex process - there's no built in support for it at all.  One of the values PixiJS provides is in hiding this complexity to allow you to draw text in diverse styles, fonts and colors with a few lines of code.  In addition, these bits of text are just as much scene objects as sprites - you can tint text, rotate it, alpha-blend it, and otherwise treat it like any other graphical object."),(0,o.kt)("p",null,"Let's dig into how this works."),(0,o.kt)("h2",{id:"there-are-two-kinds-of-text"},"There Are Two Kinds of Text"),(0,o.kt)("p",null,"Because of the challenges of working with text in WebGL, PixiJS provides two very different solutions.  In this guide, we're going to go over both methods in some detail to help you make the right choice for your project's needs.  Selecting the wrong text type can have a large negative impact on your project's performance and appearance."),(0,o.kt)("h2",{id:"the-text-object"},"The Text Object"),(0,o.kt)("p",null,"In order to draw text to the screen, you use a ",(0,o.kt)("a",{parentName:"p",href:"/api/classes/PIXI.Text.pixi_text"},"Text")," object.  Under the hood, this class draws text to an off-screen buffer using the browser's normal text rendering, then uses that offscreen buffer as the source for drawing the text object.  Effectively what this means is that whenever you create or change text, PixiJS creates a new rasterized image of that text, and then treats it like a sprite.  This approach allows truly rich text display while keeping rendering speed high."),(0,o.kt)("p",null,"So when working with PIXI.Text objects, there are two sets of options - standard display object options like position, rotation, etc that work ",(0,o.kt)("em",{parentName:"p"},"after")," the text is rasterized internally, and text style options that are used ",(0,o.kt)("em",{parentName:"p"},"while")," rasterizing.  Because text once rendered is basically just a sprite, there's no need to review the standard options.  Instead, let's focus on how text is styled."),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"/examples/text"},"text example code"),"."),(0,o.kt)("h2",{id:"text-styles"},"Text Styles"),(0,o.kt)("p",null,"There are a lot of text style options available (see ",(0,o.kt)("a",{parentName:"p",href:"/api/classes/PIXI.TextStyle.pixi_text"},"TextStyle"),"), but they break down into 5 main groups:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Font"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"fontFamily")," to select the webfont to use, ",(0,o.kt)("inlineCode",{parentName:"p"},"fontSize")," to specify the size of the text to draw, along with options for font weight, style and variant."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Appearance"),": Set the color with ",(0,o.kt)("inlineCode",{parentName:"p"},"fill")," or add a ",(0,o.kt)("inlineCode",{parentName:"p"},"stroke")," outline, including options for gradient fills."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Drop-Shadows"),": Set a drop-shadow with ",(0,o.kt)("inlineCode",{parentName:"p"},"dropShadow"),", with a host of related options to specify offset, blur, opacity, etc."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Layout"),": Enable with ",(0,o.kt)("inlineCode",{parentName:"p"},"wordWrap")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"wordWrapWidth"),", and then customize the ",(0,o.kt)("inlineCode",{parentName:"p"},"lineHeight")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"align")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"letterSpacing")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Utilities"),": Add ",(0,o.kt)("inlineCode",{parentName:"p"},"padding")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"trim")," extra space to deal with funky font families if needed."),(0,o.kt)("p",null,"To interactively test out feature of Text Style, ",(0,o.kt)("a",{parentName:"p",href:"https://pixijs.io/pixi-text-style/"},"check out this tool"),"."),(0,o.kt)("h2",{id:"loading-and-using-fonts"},"Loading and Using Fonts"),(0,o.kt)("p",null,"In order for PixiJS to build a PIXI.Text object, you'll need to make sure that the font you want to use is loaded by the browser.  Unfortunately, at the time of writing, the PIXI.Loader system does not support loading font files, so you'll need to use a 3rd party font loader to ensure that any custom web fonts you want to use are pre-loaded.  It's not enough to add an @font-face declaration in your project's CSS because browsers will happily render text using a fallback font while your custom font loads."),(0,o.kt)("p",null,"Any javascript library that can load a web font will work, you just want something that will delay starting your project until the font has been fully loaded by the browser."),(0,o.kt)("p",null,"One such library is ",(0,o.kt)("a",{parentName:"p",href:"https://fontfaceobserver.com"},"FontFaceObserver"),'.  Here\'s a simple example that shows how to use it to ensure the web font "Short Stack" is loaded before your app starts.  First, we need a font-face declaration in CSS:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"@font-face {\n  font-family: Short Stack;\n  src: url(short-stack.woff2) format('woff2'),\n       url(short-stack.woff) format('woff');\n}\n")),(0,o.kt)("p",null,"Now that the browser knows what our font is and how to find the source files, it's time to use the library to load them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Create the loader\nlet font = new FontFaceObserver('Short Stack', {});\n// Start loading the font\nfont.load().then(() => {\n  // Successful load, start up your PixiJS app as usual\n  let app = new PIXI.Application({ width: 640, height: 360 });\n  document.body.appendChild(app.view);\n  // ... etc ...\n\n}, () => {\n  // Failed load, log the error or display a message to the user\n  alert('Unable to load required font!');\n});\n")),(0,o.kt)("h2",{id:"caveats-and-gotchas"},"Caveats and Gotchas"),(0,o.kt)("p",null,"While PixiJS does make working with text easy, there are a few things you need to watch out for.  "),(0,o.kt)("p",null,"First, changing an existing text string requires re-generating the internal render of that text, which is a slow operation that can impact performance if you change many text objects each frame.  If your project requires lots of frequently changing text on the screen at once, consider using a PIXI.BitmapText object (explained below) which uses a fixed bitmap font that doesn't require re-generation when text changes."),(0,o.kt)("p",null,"Second, be careful when scaling text.  Setting a text object's scale to > 1.0 will result in blurry/pixely display, because the text is not re-rendered at the higher resolution needed to look sharp - it's still the same resolution it was when generated.  To deal with this, you can render at a higher initial size and down-scale, instead.  This will use more memory, but will allow your text to always look clear and crisp."),(0,o.kt)("h2",{id:"bitmaptext"},"BitmapText"),(0,o.kt)("p",null,"In addition to the standard PIXI.Text approach to adding text to your project, PixiJS also supports ",(0,o.kt)("em",{parentName:"p"},"bitmap fonts"),".  Bitmap fonts are very different from TrueType or other general purpose fonts, in that they consist of a single image containing pre-rendered versions of every letter you want to use.  When drawing text with a bitmap font, PixiJS doesn't need to render the font glyphs into a temporary buffer - it can simply copy and stamp out each character of a string from the master font image."),(0,o.kt)("p",null,"The primary advantage of this approach is speed - changing text frequently is much cheaper and rendering each additional piece of text is much faster due to the shared source texture."),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"/examples/text/bitmap-text"},"bitmap text example code"),"."),(0,o.kt)("h2",{id:"bitmapfont"},"BitmapFont"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"3rd party solutions"),(0,o.kt)("li",{parentName:"ul"},"BitmapFont.from auto-generation")),(0,o.kt)("h2",{id:"selecting-the-right-approach"},"Selecting the Right Approach"),(0,o.kt)("p",null,"PIXI.Text"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Static text"),(0,o.kt)("li",{parentName:"ul"},"Small number of text objects"),(0,o.kt)("li",{parentName:"ul"},"High fidelity text rendering (kerning e.g.)"),(0,o.kt)("li",{parentName:"ul"},"Text layout (line & letter spacing)")),(0,o.kt)("p",null,"PIXI.BitmapText"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Dynamic text"),(0,o.kt)("li",{parentName:"ul"},"Large number of text objects"),(0,o.kt)("li",{parentName:"ul"},"Lower memory")))}d.isMDXComponent=!0}}]);