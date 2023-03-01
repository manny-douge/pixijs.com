"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[9267],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),o=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),s=o(n),k=r,c=s["".concat(p,".").concat(k)]||s[k]||m[k]||l;return n?a.createElement(c,i(i({ref:e},d),{},{components:n})):a.createElement(c,i({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u[s]="string"==typeof t?t:r,i[1]=u;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},59138:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>u,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={id:"PIXI.PlaneGeometry.pixi_mesh_extras",title:"Class: PIXI.PlaneGeometry",sidebar_label:"PIXI.PlaneGeometry",custom_edit_url:null},i=void 0,u={unversionedId:"api/classes/PIXI.PlaneGeometry.pixi_mesh_extras",id:"api/classes/PIXI.PlaneGeometry.pixi_mesh_extras",title:"Class: PIXI.PlaneGeometry",description:"@pixi/mesh-extras.PlaneGeometry",source:"@site/docs/api/classes/PIXI.PlaneGeometry.pixi_mesh_extras.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.PlaneGeometry.pixi_mesh_extras",permalink:"/api/classes/PIXI.PlaneGeometry.pixi_mesh_extras",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.PlaneGeometry.pixi_mesh_extras",title:"Class: PIXI.PlaneGeometry",sidebar_label:"PIXI.PlaneGeometry",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.ParticleRenderer",permalink:"/api/classes/PIXI.ParticleRenderer.pixi_particle_container"},next:{title:"PIXI.PluginSystem",permalink:"/api/classes/PIXI.PluginSystem.pixi_core"}},p={},o=[{value:"Constructor:",id:"constructor",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Extends",id:"extends",level:2},{value:"Members",id:"members",level:2},{value:"glVertexArrayObjects",id:"glvertexarrayobjects",level:3},{value:"instanceCount",id:"instancecount",level:3},{value:"instanced",id:"instanced",level:3},{value:"refCount",id:"refcount",level:3},{value:"Methods",id:"methods",level:2},{value:"addAttribute",id:"addattribute",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Returns:",id:"returns",level:4},{value:"addIndex",id:"addindex",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Returns:",id:"returns-1",level:4},{value:"clone",id:"clone",level:3},{value:"Returns:",id:"returns-2",level:4},{value:"destroy",id:"destroy",level:3},{value:"dispose",id:"dispose",level:3},{value:"getAttribute",id:"getattribute",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"Returns:",id:"returns-3",level:4},{value:"getBuffer",id:"getbuffer",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"Returns:",id:"returns-4",level:4},{value:"getIndex",id:"getindex",level:3},{value:"Returns:",id:"returns-5",level:4},{value:"getSize",id:"getsize",level:3},{value:"Returns:",id:"returns-6",level:4},{value:"interleave",id:"interleave",level:3},{value:"Returns:",id:"returns-7",level:4}],d={toc:o};function s(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("div",{class:"package-name"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../modules/pixi_mesh_extras"},"@pixi/mesh-extras"),".PlaneGeometry")),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"constructor"},"Constructor:"),(0,r.kt)("h4",null,(0,r.kt)("code",null,"new PIXI.PlaneGeometry(width: number, height: number, segWidth: number, segHeight: number) ")),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"width"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"100")),(0,r.kt)("td",{parentName:"tr",align:null},"The width of the plane.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"height"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"100")),(0,r.kt)("td",{parentName:"tr",align:null},"The height of the plane.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"segWidth"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"10")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of horizontal segments.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"segHeight"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"10")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of vertical segments."))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"extends"},"Extends"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../classes/PIXI.MeshGeometry.pixi_mesh"},"PIXI.MeshGeometry"))),(0,r.kt)("h2",{id:"members"},"Members"),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"glvertexarrayobjects"},"glVertexArrayObjects"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"object")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," A map of renderer IDs to webgl VAOs")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"instancecount"},"instanceCount"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"number")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,r.kt)("code",null,"1")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Number of instances in this geometry, pass it to ",(0,r.kt)("inlineCode",{parentName:"p"},"GeometrySystem.draw()"),".")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"instanced"},"instanced"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Whether the geometry is instanced.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"refcount"},"refCount"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"number")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Count of existing (not destroyed) meshes that reference this geometry.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"addattribute"},"addAttribute"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"(id",":"," string, buffer",":"," PIXI.Buffer ","|"," Array","<","number",">",", size",":"," number, normalized",":"," boolean, type",":"," TYPES, stride",":"," number, start",":"," number, instance",":"," boolean) -",">"," this")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Adds an attribute to the geometry Note",":"," ",(0,r.kt)("inlineCode",{parentName:"p"},"stride")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," should be ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," if you dont know them, not 0!"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"the name of the attribute (matching up to a shader)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"buffer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"PIXI.Buffer ","|"," Array","<","number",">")),(0,r.kt)("td",{parentName:"tr",align:null},"the buffer that holds the data of the attribute . You can also provide an Array and a buffer will be created from it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"the size of the attribute. If you have 2 floats per vertex (eg position x and y) this would be 2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"normalized"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"should the data be normalized.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"TYPES")),(0,r.kt)("td",{parentName:"tr",align:null},"what type of number is the attribute. Check ",(0,r.kt)("a",{parentName:"td",href:"../enums/PIXI.TYPES.pixi_constants"},"PIXI.TYPES")," to see the ones available")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stride"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"How far apart, in bytes, the start of each value is. (used for interleaving data)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"How far into the array to start reading values (used for interleaving data)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"instance"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Instancing flag")))),(0,r.kt)("h4",{id:"returns"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"this")),(0,r.kt)("td",{parentName:"tr",align:null},"* Returns self, useful for chaining."))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"addindex"},"addIndex"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"(buffer",":"," PIXI.Buffer ","|"," Array","<","number",">",") -",">"," Geometry")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Adds an index buffer to the geometry The index buffer contains integers, three for each triangle in the geometry, which reference the various attribute buffers (position, colour, UV coordinates, other UV coordinates, normal, \u2026). There is only ONE index buffer."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"buffer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"PIXI.Buffer ","|"," Array","<","number",">")),(0,r.kt)("td",{parentName:"tr",align:null},"The buffer that holds the data of the index buffer. You can also provide an Array and a buffer will be created from it.")))),(0,r.kt)("h4",{id:"returns-1"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Geometry")),(0,r.kt)("td",{parentName:"tr",align:null},"* Returns self, useful for chaining."))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"clone"},"clone"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"() -",">"," Geometry")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Returns a clone of the geometry."),(0,r.kt)("h4",{id:"returns-2"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Geometry")),(0,r.kt)("td",{parentName:"tr",align:null},"* A new clone of this geometry."))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"destroy"},"destroy"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"() -",">"," void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Destroys the geometry.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"dispose"},"dispose"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"() -",">"," void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Disposes WebGL resources that are connected to this geometry.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"getattribute"},"getAttribute"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"(id",":"," string) -",">"," Attribute")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Returns the requested attribute."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the attribute required")))),(0,r.kt)("h4",{id:"returns-3"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},"* The attribute requested."))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"getbuffer"},"getBuffer"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"(id",":"," string) -",">"," Buffer")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Returns the requested buffer."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the buffer required.")))),(0,r.kt)("h4",{id:"returns-4"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Buffer")),(0,r.kt)("td",{parentName:"tr",align:null},"* The buffer requested."))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"getindex"},"getIndex"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"() -",">"," Buffer")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Returns the index buffer"),(0,r.kt)("h4",{id:"returns-5"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Buffer")),(0,r.kt)("td",{parentName:"tr",align:null},"* The index buffer."))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"getsize"},"getSize"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"() -",">"," number")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," Get the size of the geometries, in vertices."),(0,r.kt)("h4",{id:"returns-6"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null}))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"interleave"},"interleave"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("code",null,"() -",">"," Geometry")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," This function modifies the structure so that all current attributes become interleaved into a single buffer This can be useful if your model remains static as it offers a little performance boost"),(0,r.kt)("h4",{id:"returns-7"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Geometry")),(0,r.kt)("td",{parentName:"tr",align:null},"* Returns self, useful for chaining."))))),(0,r.kt)("hr",null))}s.isMDXComponent=!0}}]);