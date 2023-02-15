"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[6342],{91262:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(67294),o=t(72389);function r(e){let{children:n,fallback:t}=e;return(0,o.Z)()?a.createElement(a.Fragment,null,n?.()):t??null}},25784:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(67294),o=t(92949),r=t(52695),s=t(19604);const l={spWrapper:"spWrapper_XZV1",spLayout:"spLayout_lAOU",editorWrapper:"editorWrapper_YBAz",previewWrapper:"previewWrapper_AZey",sandpackLoadingOverlay:"sandpackLoadingOverlay_nYYO",loadingPulse:"loadingPulse_IxQv",tutorial:"tutorial_bUbR",showOutput:"showOutput_G2Cm",fullscreen:"fullscreen_QlZ5",example:"example_nyOC"},i="7.0.5",p="inmemory://model/";function c(){const e=(0,a.useRef)(null),{code:n,updateCode:t}=(0,r.m4)(),{sandpack:c}=(0,r.X3)();(0,a.useEffect)((()=>{const n=()=>{null!=e.current&&e.current.layout({})};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}}),[]);const{colorMode:u}=(0,o.I)();return a.createElement("div",{className:l.editorWrapper},a.createElement(s.ZP,{defaultLanguage:"typescript",value:n,key:c.activeFile,defaultValue:n,defaultPath:`${p}/src/index.ts`,onChange:e=>{t(e??"")},options:{lineNumbers:"off",padding:{top:24},minimap:{enabled:!1},fontSize:14,scrollBeyondLastLine:!1,scrollbar:{alwaysConsumeMouseWheel:!1}},beforeMount:async function(e){e.languages.typescript.typescriptDefaults.setCompilerOptions({...e.languages.typescript.typescriptDefaults.getCompilerOptions(),moduleResolution:2});const n=await fetch(`https://prod-packager-packages.codesandbox.io/v1/typings/pixi.js/${i}.json`),t=await n.json();for(const a in t.files){const n=t.files[a].module.code;e.languages.typescript.typescriptDefaults.addExtraLib(n,`${p}node_modules${a}`)}},onMount:n=>{e.current=n},theme:"dark"===u?"vs-dark":"light"}))}function u(e){const{code:n}=(0,r.m4)(),{sandpack:t}=(0,r.X3)(),[o,s]=(0,a.useState)(!1);(0,a.useEffect)((()=>{if(null!=e.onCodeChanged)return e.onCodeChanged(n),()=>{null!=e.onCodeChanged&&e.onCodeChanged(void 0)}}));return a.createElement(r.sp,{className:`${l[e.mode]} ${o?l.showOutput:""}`},a.createElement(c,null),a.createElement("div",{className:l.previewWrapper},a.createElement(r.Gj,{showOpenInCodeSandbox:!1,className:l.sandpackPreview}),null==t.bundlerState&&a.createElement("div",{className:l.sandpackLoadingOverlay})),a.createElement("button",{onClick:()=>{s(!o)}},o?"Show Code":"Show Output"))}function d(e){const n=e.mode??"example";(0,a.useEffect)((()=>{const e=document.querySelector("main .container");if("example"===n&&null!=e)return e.style.maxWidth="100%",()=>{e.style.maxWidth=""}}));const{colorMode:t}=(0,o.I)();return a.createElement(r.oT,{template:"vanilla-ts",theme:t,files:{"/src/index.ts":e.code},customSetup:{dependencies:{"pixi.js":i}},options:{classes:{"sp-wrapper":l.spWrapper,"sp-layout":l.spLayout},externalResources:["https://beta.pixijs.com/playground.css"]}},a.createElement(u,{mode:n,onCodeChanged:e.onCodeChanged}))}},34281:(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});var a=t(67294),o=t(334),r=t(91262),s=t(25784);const l="wrapper_vN_r";function i(){return a.createElement(o.Z,{title:"Playground",noFooter:!0,wrapperClassName:l},a.createElement(r.Z,null,(()=>{const e=function(){if(""!==location.hash)try{return JSON.parse(atob(location.hash.substring(1)))}catch{}}()?.code??"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application<HTMLCanvasElement>({ background: '#1099bb', resizeTo: window });\ndocument.body.appendChild(app.view);\n\n// create a new Sprite from an image path\nconst bunny = PIXI.Sprite.from('https://beta.pixijs.com/assets/bunny.png');\n\n// center the sprite's anchor point\nbunny.anchor.set(0.5);\n\n// move the sprite to the center of the screen\nbunny.x = app.screen.width / 2;\nbunny.y = app.screen.height / 2;\n\napp.stage.addChild(bunny);\n\n// Listen for animate update\napp.ticker.add((delta) => {\n    // just for fun, let's rotate mr rabbit a little\n    // delta is 1 if running at 100% performance\n    // creates frame-independent transformation\n    bunny.rotation += 0.1 * delta;\n});";return a.createElement(s.Z,{mode:"fullscreen",code:e,onCodeChanged:function(e){null!=e?function(e){const n=JSON.stringify(e);history.replaceState(null,"","#"+btoa(n))}({code:e}):history.replaceState(null,"",location.pathname+location.search)}})})))}}}]);