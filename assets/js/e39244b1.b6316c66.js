"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[9918],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),d=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,k=p["".concat(o,".").concat(m)]||p[m]||c[m]||s;return a?r.createElement(k,l(l({ref:t},u),{},{components:a})):r.createElement(k,l({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<s;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},91170:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const s={id:"PIXI.BasisParser.pixi_basis",title:"Class: PIXI.BasisParser",sidebar_label:"PIXI.BasisParser",custom_edit_url:null},l=void 0,i={unversionedId:"api/classes/PIXI.BasisParser.pixi_basis",id:"api/classes/PIXI.BasisParser.pixi_basis",title:"Class: PIXI.BasisParser",description:"@pixi/basis.BasisParser",source:"@site/docs/api/classes/PIXI.BasisParser.pixi_basis.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.BasisParser.pixi_basis",permalink:"/api/classes/PIXI.BasisParser.pixi_basis",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.BasisParser.pixi_basis",title:"Class: PIXI.BasisParser",sidebar_label:"PIXI.BasisParser",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.BaseTexture",permalink:"/api/classes/PIXI.BaseTexture.pixi_core"},next:{title:"PIXI.BatchDrawCall",permalink:"/api/classes/PIXI.BatchDrawCall.pixi_core"}},o={},d=[{value:"new PIXI.BasisParser: <span><code>() </code></span>",id:"new-pixibasisparser--",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Members",id:"members",level:2},{value:"bindingURL: <span><code>string</code></span>",id:"bindingurl-string",level:3},{value:"onTranscoderInitialized: <span><code>unknown</code></span>",id:"ontranscoderinitialized-unknown",level:3},{value:"workerURL: <span><code>string</code></span>",id:"workerurl-string",level:3},{value:"onMessage: <span><code>unknown</code></span>",id:"onmessage-unknown",level:3},{value:"Methods",id:"methods",level:2},{value:"loadTranscoder: <span><code>(jsURL: string, wasmURL: string) -&gt; Promise&lt;void, void&gt;</code></span>",id:"loadtranscoder-jsurl-string-wasmurl-string---promisevoid-void",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Returns:",id:"returns",level:4},{value:"setTranscoder: <span><code>(jsSource: string, wasmSource: ArrayBuffer) -&gt; void</code></span>",id:"settranscoder-jssource-string-wasmsource-arraybuffer---void",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"initAsync: <span><code>() -&gt; Promise&lt;void&gt;</code></span>",id:"initasync----promisevoid",level:3},{value:"Returns:",id:"returns-1",level:4},{value:"transcodeAsync: <span><code>(basisData: Uint8Array, rgbaFormat: BASIS_FORMATS, rgbFormat: BASIS_FORMATS) -&gt; Promise&lt;ITranscodeResponse&gt;</code></span>",id:"transcodeasync-basisdata-uint8array-rgbaformat-basis_formats-rgbformat-basis_formats---promiseitranscoderesponse",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"Returns:",id:"returns-2",level:4}],u={toc:d};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../modules/pixi_basis"},"@pixi/basis"),".BasisParser"),(0,n.kt)("p",null,"Loader plugin for handling BASIS supercompressed texture files.\nTo use this loader, you must bind the basis_universal WebAssembly transcoder. There are two ways of doing this",":"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Adding a ","<","script",">"," tag to your HTML page to the transcoder bundle in this package, and serving the WASM binary from the same location.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'\x3c!-- Copy ./node_modules/@pixi/basis/assets/basis_.wasm into your assets directory\n    as well, so it is served from the same folder as the JavaScript! --\x3e\n<script src="./node_modules/@pixi/basis/assets/basis_transcoder.js"><\/script>\n\n')),(0,n.kt)("p",null,"NOTE",":"," ",(0,n.kt)("inlineCode",{parentName:"p"},"basis_transcoder.js")," expects the WebAssembly binary to be named ",(0,n.kt)("inlineCode",{parentName:"p"},"basis_transcoder.wasm"),". NOTE-2",":"," This method supports transcoding on the main-thread. Only use this if you have 1 or 2 ","*",".basis files."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Loading the transcoder source from a URL.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"// Use this if you to use the default CDN url for @pixi/basis\nBasisParser.loadTranscoder();\n\n// Use this if you want to serve the transcoder on your own\nBasisParser.loadTranscoder('./basis_transcoder.js', './basis_transcoder.wasm');\n\n")),(0,n.kt)("p",null,"NOTE",":"," This can only be used with web-workers."),(0,n.kt)("p",null,"// TODO: @see"),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"new-pixibasisparser--"},"new PIXI.BasisParser: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"() "))),(0,n.kt)("p",null,"Loader plugin for handling BASIS supercompressed texture files."),(0,n.kt)("h4",{id:"parameters"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"members"},"Members"),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"bindingurl-string"},"bindingURL: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"string"))),(0,n.kt)("p",null,"URL for the script containing the basis_universal library.")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"ontranscoderinitialized-unknown"},"onTranscoderInitialized: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"unknown"))),(0,n.kt)("p",null,"a promise that when reslved means the transcoder is ready to be used")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"workerurl-string"},"workerURL: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"string"))),(0,n.kt)("p",null,"Generated URL for the transcoder worker script.")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"onmessage-unknown"},"onMessage: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"unknown"))),(0,n.kt)("p",null,"Handles responses from the web-worker")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"loadtranscoder-jsurl-string-wasmurl-string---promisevoid-void"},"loadTranscoder: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"(jsURL",":"," string, wasmURL",":"," string) -",">"," Promise","<","[void, void]",">"))),(0,n.kt)("p",null,"Loads the transcoder source code"),(0,n.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"jsURL"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"string")),(0,n.kt)("td",{parentName:"tr",align:null},"URL to the javascript basis transcoder")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"wasmURL"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"string")),(0,n.kt)("td",{parentName:"tr",align:null},"URL to the wasm basis transcoder")))),(0,n.kt)("h4",{id:"returns"},"Returns:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Promise","<","[void, void]",">")),(0,n.kt)("td",{parentName:"tr",align:null},"A promise that resolves when both the js and wasm transcoders have been loaded."))))),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"settranscoder-jssource-string-wasmsource-arraybuffer---void"},"setTranscoder: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"(jsSource",":"," string, wasmSource",":"," ArrayBuffer) -",">"," void"))),(0,n.kt)("p",null,"Set the transcoder source code directly"),(0,n.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"jsSource"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"string")),(0,n.kt)("td",{parentName:"tr",align:null},"source for the javascript basis transcoder")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"wasmSource"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"ArrayBuffer")),(0,n.kt)("td",{parentName:"tr",align:null},"source for the wasm basis transcoder"))))),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"initasync----promisevoid"},"initAsync: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"() -",">"," Promise","<","void",">"))),(0,n.kt)("h4",{id:"returns-1"},"Returns:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Promise","<","void",">")),(0,n.kt)("td",{parentName:"tr",align:null},"a promise that is resolved when the web-worker is initialized"))))),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"transcodeasync-basisdata-uint8array-rgbaformat-basis_formats-rgbformat-basis_formats---promiseitranscoderesponse"},"transcodeAsync: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"(basisData",":"," Uint8Array, rgbaFormat",":"," BASIS_FORMATS, rgbFormat",":"," BASIS_FORMATS) -",">"," Promise","<","ITranscodeResponse",">"))),(0,n.kt)("p",null,"Creates a promise that will resolve when the transcoding of a ","*",".basis file is complete."),(0,n.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"basisData"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Uint8Array")),(0,n.kt)("td",{parentName:"tr",align:null},"*",".basis file contents")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rgbaFormat"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"BASIS_FORMATS")),(0,n.kt)("td",{parentName:"tr",align:null},"transcoding format for RGBA files")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rgbFormat"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"BASIS_FORMATS")),(0,n.kt)("td",{parentName:"tr",align:null},"transcoding format for RGB files")))),(0,n.kt)("h4",{id:"returns-2"},"Returns:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Promise","<","ITranscodeResponse",">")),(0,n.kt)("td",{parentName:"tr",align:null},"a promise that is resolved with the transcoding response of the web-worker"))))),(0,n.kt)("hr",null))}p.isMDXComponent=!0}}]);