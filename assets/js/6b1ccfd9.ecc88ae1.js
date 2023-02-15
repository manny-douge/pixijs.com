"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[409],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(t),h=o,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||a;return t?r.createElement(m,s(s({ref:n},d),{},{components:t})):r.createElement(m,s({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=h;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},44634:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const a={hide_table_of_contents:!0},s="Nested Boundary",i={unversionedId:"examples/events/nested-boundary-with-projection",id:"examples/events/nested-boundary-with-projection",title:"Nested Boundary",description:"",source:"@site/docs/examples/events/nested-boundary-with-projection.md",sourceDirName:"examples/events",slug:"/examples/events/nested-boundary-with-projection",permalink:"/examples/events/nested-boundary-with-projection",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/events/nested-boundary-with-projection.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"Hit-Testing (spatial hash)",permalink:"/examples/events/hit-testing-with-spatial-hash"},next:{title:"Logger",permalink:"/examples/events/logger"}},c={},l=[],d={toc:l};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nested-boundary"},"Nested Boundary"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\n// This example shows how you can setup a nested boundary to propagate events\n// into a disjoint scene graph. Here, a camera is used to project an different\n// world onto the canvas.\n\nconst app = new PIXI.Application<HTMLCanvasElement>({\ndocument.body.appendChild(app.view);\n    antialias: true,\n    background: '#1099bb',\n});\n\n// A projector renders it's content using projection. The transforms in\n// the contents scene graph don't change if you move the camera. To achieve\n// this, the content is not added as a \"child\" to the projector; however, this\n// means events won't propagate into the content by default.\n//\n// To solve this, we nest our own EventBoundary, and connect it using\n// addEventListener!\nclass Projector extends PIXI.DisplayObject {\n    constructor() {\n        super();\n\n        // The content root to be rendered by this camera.\n        this.content = new PIXI.Container();\n\n        // Temporary matrix to store the original projection transform.\n        this.originalTransform = new PIXI.Matrix();\n\n        // The event boundary that'll map events downstream into the content\n        // scene.\n        this.boundary = new PIXI.EventBoundary(this.content);\n\n        // Override copyMouseData to apply inverse worldTransform on\n        // global coords\n        this.boundary.copyMouseData = (from, to) => {\n            // Apply default implementation first\n            PIXI.EventBoundary.prototype.copyMouseData.call(this.boundary, from, to);\n\n            // Then bring global coords into content's world\n            this.worldTransform.applyInverse(to.global, to.global);\n            // TODO: Remove after https://github.com/pixijs/pixi.js/pull/7381\n            // is merged!\n            to.target = this.boundary.hitTest(to.global.x, to.global.y);\n        };\n\n        // Propagate these events down into the content's scene graph!\n        [\n            'pointerdown',\n            'pointerup',\n            'pointermove',\n            'pointerover',\n            'pointerout',\n            'wheel',\n        ].forEach((event) => {\n            this.addEventListener(event, (e) => this.boundary.mapEvent(e));\n        });\n\n        this.interactive = true;\n    }\n\n    // Pass through cursor\n    get cursor() {\n        return this.boundary.cursor;\n    }\n\n    // eslint-disable-next-line class-methods-use-this\n    set cursor(value) {\n        throw new Error('The camera\\'s cursor is derived from its content!');\n    }\n\n    // Pass through calculateBounds\n    calculateBounds() {\n        const contentBounds = this.content.getBounds();\n\n        this._bounds.addFrameMatrix(\n            this.worldTransform,\n            contentBounds.x,\n            contentBounds.y,\n            contentBounds.width,\n            contentBounds.height,\n        );\n    }\n\n    // Pass through containsPoint\n    containsPoint(point) {\n        return !!this.boundary.hitTest(point.x, point.y);\n    }\n\n    // Render content with projection\n    render(renderer) {\n        renderer.batch.flush();\n\n        const projectionSystem = renderer.projection;\n        const renderTextureSystem = renderer.renderTexture;\n\n        projectionSystem.transform = projectionSystem.transform\n            || new PIXI.Matrix();\n        projectionSystem.transform.copyTo(this.originalTransform);\n        projectionSystem.transform.append(this.worldTransform);\n        projectionSystem.update(null, null, 1, !renderTextureSystem.current);\n\n        this.content.render(renderer);\n\n        renderer.batch.flush();\n\n        projectionSystem.transform.copyFrom(this.originalTransform);\n        projectionSystem.update(null, null, 1, !renderTextureSystem.current);\n    }\n\n    // updateTransform also updates content's transform\n    updateTransform() {\n        super.updateTransform();\n\n        this.content.enableTempParent();\n        this.content.updateTransform();\n        this.content.disableTempParent(null);\n    }\n}\n\n// The projector\nconst projector = app.stage.addChild(new Projector());\n\n// Add coordinate axes!\nprojector.content.addChild(\n    new PIXI.Graphics()\n        .lineStyle({ color: 0, alpha: 0.2, width: 2 })\n        .moveTo(0, -300)\n        .lineTo(0, 600)\n        .moveTo(-100, 0)\n        .lineTo(700, 0),\n);\n\n// Construct the star Graphics\nconst stars = [1, 2, 3].map((i) => new PIXI.Graphics()\n    .beginFill(0xffffff, 0.75)\n    .drawStar(0, 0, 18 / i, 100 * i / 2));\n\n// Place the stars\nstars[0].x = 0;\nstars[1].x = 200;\nstars[2].x = 500;\n\n// Add stars to the projector\nprojector.content.addChild(...stars);\n\n// Make projection x+100, y+300\nprojector.x = 100;\nprojector.y = 300;\nprojector.content.hitArea = new PIXI.Rectangle(-100, -300, app.screen.width, app.screen.height);\n// Make hit-area cover the whole screen so we can capture\n// pointermove everywhere!\nprojector.hitArea = projector.content.hitArea;\nprojector.content.interactive = true;\n\n// Make stars interactive & add wheel handlers\nstars.forEach((star) => {\n    // Make star interactive\n    star.interactive = true;\n\n    // Set initial cursor\n    star.cursor = 'zoom-in';\n\n    // Add wheel rotation feedback\n    star.addEventListener('wheel', (e) => {\n        const scroll = Math.sign(e.deltaY) * Math.min(15, Math.abs(e.deltaY));\n\n        star.rotation += scroll / 100;\n    });\n\n    // Add click zoom-in/zoom-out handler\n    star.addEventListener('click', (e) => {\n        if (star.scale.x === 1) {\n            star.scale.set(1.33);\n            star.cursor = 'zoom-out';\n        } else {\n            star.scale.set(1);\n            star.cursor = 'zoom-in';\n        }\n    });\n});\n\nPIXI.BitmapFont.from('coordinates', {\n    fontFamily: 'Roboto',\n    fontSize: 16,\n    fill: '#272d37',\n}, { chars: ['Global:() Screen-.,', ['0', '9']] });\n\nconst coordinates = new PIXI.BitmapText('Global: (0, 0)\\nScreen: (0, 0)', {\n    fontName: 'coordinates',\n});\ncoordinates.x = 110;\ncoordinates.y = 550;\n\napp.stage.addChild(coordinates);\n\nprojector.content.addEventListener('pointermove', (e) => {\n    const global = `(${e.global.x | 0}, ${e.global.y | 0})`;\n    const screen = `(${e.screen.x | 0}, ${e.screen.y | 0})`;\n    coordinates.text = `Global: ${global}\\nScreen: ${screen}`;\n});\n\nconst description = new PIXI.Text(\n    'The (0, 0) world coordinates for the content is located at the center of the first star!'\n    + '\\n  * Mouse wheel over stars to rotate them'\n    + '\\n  * Click to zoom in or out', {\n        fontSize: 16,\n        fontFamily: 'Roboto',\n        fill: '#272d37',\n    },\n);\n\ndescription.position.set(110, 12);\n\napp.stage.addChild(description);\n")))}p.isMDXComponent=!0}}]);