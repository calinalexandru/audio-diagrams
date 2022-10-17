(()=>{"use strict";var a={3242(a,b,c){c.d(b,{Z:()=>i});var d=c(3303),e=c.n(d),f=c(7185),g=c.n(f),h=g()(e());h.push([a.id,"body {\n  margin: 0;\n  padding: 0;\n  font-family: Montserrat, sans-serif;\n  font-size: 12px;\n}\n\n@keyframes borderFlow {\n  0% {\n    border-color: #333;\n  }\n  50% {\n    border-color: #555;\n  }\n  100% {\n    border-color: #333;\n  }\n}\n",""]);let i=h},2440(a,b,c){var d,e=c(5017),f=c(7535),g=c(633),h=c(8989),i=c(9543),j=c(7508);function k(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function l(a){var b,c,e=(0,j.Ye)(function(){return null==a?d:d.isolate(a)},[a]),f=(b=(0,j.eJ)(e.value),c=2,function(a){if(Array.isArray(a))return a}(b)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(b,c)||function a(b,c){if(b){if("string"==typeof b)return k(b,c);var d=Object.prototype.toString.call(b).slice(8,-1);if("Object"===d&&b.constructor&&(d=b.constructor.name),"Map"===d||"Set"===d)return Array.from(d);if("Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return k(b,c)}}(b,c)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),g=f[0],h=f[1],i=(0,j.I4)(function(a){e.update(a)},[e]);return(0,j.d4)(function(){var a=e.subscribe({next:h});return function(){return a.unsubscribe()}},[e]),[g,i]}function m(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function n(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){m(a,b,c[b])})}return a}var o={OSCILLATOR:"oscillator",DELAY:"delay",PAN:"pan",GAIN:"gain",INPUT:"input",OUTPUT:"output"},p={OSCILLATOR:{POSITION:{x:100,y:500,width:"100px",height:"50px"},NODE:{type:o.OSCILLATOR,properties:{type:"sine",frequency:440,detune:0,duration:0}}},GAIN:{POSITION:{x:500,y:200,width:"100px",height:"50px"},NODE:{type:o.GAIN,properties:{gain:0}}},DELAY:{POSITION:{x:400,y:500,width:"100px",height:"50px"},NODE:{type:o.DELAY,properties:{delay:0}}},PAN:{POSITION:{x:200,y:700,width:"100px",height:"50px"},NODE:{type:o.PAN,properties:{pan:0}}},OUTPUT:{NODE:{type:o.OUTPUT,properties:{}},POSITION:{x:740,y:500}}},q=[n({},p.OUTPUT.NODE)],r=[n({},p.OUTPUT.POSITION)],s=c(2233),t=c(5743),u=c(9065),v=c(2141),w=c(2781);function x(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}var y=function(a,b){return a.pipe((0,u.k)({op:s.D7,path:["connecting"]}),(0,v.M)(b),(0,w.U)(function(a){var b,c,d=(c=2,function(a){if(Array.isArray(a))return a}(b=a)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(b,c)||function a(b,c){if(b){if("string"==typeof b)return x(b,c);var d=Object.prototype.toString.call(b).slice(8,-1);if("Object"===d&&b.constructor&&(d=b.constructor.name),"Map"===d||"Set"===d)return Array.from(d);if("Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return x(b,c)}}(b,c)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),e=(d[0],d[1]);return function(a){var b,c,d,f,g=null===(b=e.connecting)|| void 0===b?void 0:null===(c=b[0])|| void 0===c?void 0:c.direction,h=null===(d=e.connecting)|| void 0===d?void 0:null===(f=d[1])|| void 0===f?void 0:f.direction;e.connecting.length>=2?(new Set(e.connecting.map(function(a){return a.index})).size<=1?a.connecting=[]:"output"===g&&"input"===h?a.wires.push({from:e.connecting[0].index,to:e.connecting[1].index}):"input"===g&&"output"===h&&a.wires.push({from:e.connecting[1].index,to:e.connecting[0].index}),a.connecting=[]):a.wires=e.wires}}))};let z=(0,t.l)(y);var A,B,C=(0,f.N)();A={nodes:q,wires:[],connecting:[],positions:r},B=[C],d=(0,i.U)(A,B),(0,g.j)(h.D),C.run(z);var D=c(9624),E=c.n(D),F=c(6808),G=c.n(F),H=c(6892),I=c.n(H),J=c(6359),K=c.n(J),L=c(2716),M=c.n(L),N=c(3242),O={};O.setAttributes=K(),O.insert=I().bind(null,"head"),O.domAPI=G(),O.insertStyleElement=M(),E()(N.Z,O),N.Z&&N.Z.locals&&N.Z.locals;var P=c(6522),Q=c(2811),R=c(9172),S=c(5420);function T(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function U(a,b){if(a){if("string"==typeof a)return T(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return T(a,b)}}function V(){var a,b,c=(a=l(),b=2,function(a){if(Array.isArray(a))return a}(a)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(a,b)||U(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),d=c[0],e=c[1],f=(0,j.I4)(function(a,b){e(function(c){c.positions[a]=b})},[e]),g=(0,j.I4)(function(a,b,c){e(function(d){d.positions[a].x=b,d.positions[a].y=c})},[e]),h=(0,j.I4)(function(a){e(function(b){var c;b.positions.splice(a,1),b.nodes.splice(a,1),((function(a){if(Array.isArray(a))return T(a)})(c=new Set(d.wires.map(function(b,c){return!![b.from,b.to].includes(a)&&c})))||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(c)||U(c)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach(function(a){Number.isNaN||b.wires.splice(a,1)})})},[e,d.wires]);return{remove:h,setPosition:f,setXY:g}}function W(a){var b=a.elRef,c=a.dragRef,d=a.xVarName,e=void 0===d?"--x":d,f=a.yVarName,g=void 0===f?"--y":f,h=a.position,i=a.index,k=a.nodes,l=V(),m=l.setPosition,n=l.setXY;(0,j.d4)(function(){var a={},d=a.x,f=a.y,j=a.pos,k=void 0===j?{}:j;if(b.current&&c.current){var l,o=getComputedStyle(b.current)||{},p=o.width,q=void 0===p?"30px":p,r=o.height,s=void 0===r?"20px":r;d=(l=h).x,f=l.y,b.current.style.setProperty(e,"".concat(d,"px")),b.current.style.setProperty(g,"".concat(f,"px")),k={x:d,y:f,width:q,height:s},m(i,k);var t=(0,P.R)(c.current,"mousedown").pipe((0,Q.w)(function(){return(0,P.R)(document,"mousemove").pipe((0,R.b)(function(a){d=a.clientX-Number(q.replace("px",""))/2,f=a.clientY-Number(s.replace("px",""))/2,n(i,d,f),b.current.style.setProperty(e,"".concat(d,"px")),b.current.style.setProperty(g,"".concat(f,"px"))}),(0,S.R)((0,P.R)(document,"mouseup")))})).subscribe(function(){return null});return function(){t.unsubscribe()}}},[null==c?void 0:c.current,null==b?void 0:b.current,k,i])}var X=c(67);function Y(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function Z(){var a=Y(["\n  position: relative;\n  width: 70px;\n  border: 0;\n  margin: 2px 0;\n  padding: 2px;\n  outline: none;\n"]);return Z=function(){return a},a}function $(){var a=Y(["\n  position: relative;\n  height: 20px;\n  margin: 10px 0;\n"]);return $=function(){return a},a}function _(){var a=Y(["\n  position: absolute;\n  top: -11px;\n  font-size: 10px;\n  text-shadow: 1px 1px #060606;\n  color: #fff;\n"]);return _=function(){return a},a}function aa(){var a=Y(["\n  text-shadow: 1px 1px #060606;\n  color: #fff;\n"]);return aa=function(){return a},a}var ab=X.Z.input(Z()),ac=X.Z.div($()),ad=X.Z.div(_()),ae=X.Z.span(aa());function af(a){var b=a.label,c=a.units,d=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["label","units"]);return(0,e.h)(ac,null,b&&(0,e.h)(ad,null,b),(0,e.h)(ab,Object.assign({},d)),"\xa0",c&&(0,e.h)(ae,null,c))}var ag=c(402);function ah(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function ai(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function aj(){var a=ai(["\n  background: #353535b0;\n  border-style: solid;\n  border-width: 2px;\n  cursor: grab;\n  border-radius: 15px;\n  box-sizing: border-box;\n  flex-flow: row;\n  display: flex;\n  position: absolute;\n  width: 180px;\n  height: 100px;\n  z-index: 100;\n\n  &:active {\n    cursor: grabbing;\n  }\n"]);return aj=function(){return a},a}function ak(){var a=ai(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 10%;\n"]);return ak=function(){return a},a}function al(){var a=ai(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 10%;\n"]);return al=function(){return a},a}function am(){var a=ai(["\n  box-sizing: border-box;\n  padding: 8px;\n  display: flex;\n  flex-flow: column;\n  width: 80%;\n"]);return am=function(){return a},a}function an(){var a=ai(["\n  box-sizing: border-box;\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n  margin-bottom: 4px;\n"]);return an=function(){return a},a}function ao(){var a=ai(["\n  box-sizing: border-box;\n"]);return ao=function(){return a},a}function ap(){var a=ai(["\n  background: unset;\n  height: 90%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n  opacity: 0.7;\n  border: none;\n  border-right: ",";\n  border-left: ",";\n  color: #fff;\n  font-size: 20px;\n\n  &:hover {\n    opacity: 0.3;\n  }\n"]);return ap=function(){return a},a}function aq(){var a=ai(["\n  text-transform: uppercase;\n  color: #fff;\n  text-shadow: 1px 1px black;\n  margin: 0;\n  padding: 0;\n"]);return aq=function(){return a},a}var ar=X.Z.div(aj()),as=X.Z.div(ak()),at=X.Z.div(al()),au=X.Z.div(am()),av=X.Z.div(an()),aw=X.Z.div(ao()),ax=X.Z.button(ap(),function(a){return a.right&&"1px solid #333"},function(a){return a.left&&"1px solid #333"}),ay=X.Z.h3(aq());function az(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var aA="--x",aB="--y",aC=(0,ag.forwardRef)(function(a,b){var c,d,f,g,h,i,k=a.index,m=a.dragRef,n=a.color,o=a.style,p=a.children,q=a.name,r=a.canRemove,s=a.canOutput,t=void 0===s||s,u=a.canInput,v=void 0===u||u,w=(g=((f=(c=l(),d=2,function(a){if(Array.isArray(a))return a}(c)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(c,d)||function a(b,c){if(b){if("string"==typeof b)return ah(b,c);var d=Object.prototype.toString.call(b).slice(8,-1);if("Object"===d&&b.constructor&&(d=b.constructor.name),"Map"===d||"Set"===d)return Array.from(d);if("Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return ah(b,c)}}(c,d)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))[0],f[1]),h=(0,j.I4)(function(a){var b=a.from,c=a.to;g(function(a){a.wires.push({from:b,to:c})})},[g]),i=(0,j.I4)(function(a,b){g(function(c){c.connecting.push({index:a,direction:b})})},[g]),{addToConnecting:i,addToWiring:h}).addToConnecting,x=V().remove;return(0,e.h)(ar,{style:function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){az(a,b,c[b])})}return a}({top:"var(".concat(aB,")"),left:"var(".concat(aA,")"),borderColor:n},o),ref:b},v&&(0,e.h)(as,null,(0,e.h)(ax,{right:!0,onClick:function(){w(k,"input")}},"I")),(0,e.h)(au,{style:{width:v&&t?"80%":"90%"},ref:m},(0,e.h)(av,null,(0,e.h)(ay,null,q),(void 0===r||r)&&(0,e.h)("div",null,(0,e.h)("button",{onClick:function(){x(k)}},"X"))),(0,e.h)(aw,null,p)),t&&(0,e.h)(at,null,(0,e.h)(ax,{left:!0,onClick:function(){w(k,"output")}},"O")))});let aD=aC;function aE(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function aF(a){var b,c,d=a.index,f=(0,j.sO)(),g=(0,j.sO)(),h=(b=l(),c=2,function(a){if(Array.isArray(a))return a}(b)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(b,c)||function a(b,c){if(b){if("string"==typeof b)return aE(b,c);var d=Object.prototype.toString.call(b).slice(8,-1);if("Object"===d&&b.constructor&&(d=b.constructor.name),"Map"===d||"Set"===d)return Array.from(d);if("Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return aE(b,c)}}(b,c)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=h[0],k=h[1];W({elRef:f,dragRef:g,position:i.positions[d],index:d,nodes:i.nodes});var m=function(a){k(function(b){b.nodes[d].properties.delay=a})};return(0,e.h)(aD,{ref:f,dragRef:g,color:"cadetblue",index:d,name:"Delay"},(0,e.h)("div",null,(0,e.h)(af,{type:"number",value:i.nodes[d].properties.delay,step:"0.1",max:"179",min:"0",units:"s",onChange:function(a){m(a.target.value)}})))}function aG(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function aH(a){var b,c,d=a.index,f=(0,j.sO)(),g=(0,j.sO)(),h=(b=l(),c=2,function(a){if(Array.isArray(a))return a}(b)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(b,c)||function a(b,c){if(b){if("string"==typeof b)return aG(b,c);var d=Object.prototype.toString.call(b).slice(8,-1);if("Object"===d&&b.constructor&&(d=b.constructor.name),"Map"===d||"Set"===d)return Array.from(d);if("Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return aG(b,c)}}(b,c)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=h[0],k=h[1];W({elRef:f,dragRef:g,position:i.positions[d],index:d,nodes:i.nodes});var m=function(a){k(function(b){b.nodes[d].properties.gain=a})};return(0,e.h)(aD,{ref:f,dragRef:g,color:"purple",index:d,name:"Gain"},(0,e.h)("div",null,(0,e.h)(af,{type:"number",value:i.nodes[d].properties.gain,step:"0.1",onChange:function(a){m(a.target.value)}})))}function aI(){var a,b,c=(a=["\n  font-family: inherit;\n  border: 0;\n  background: #ccc;\n  height: 40px;\n  width: auto;\n  cursor: pointer;\n  margin: 0 5px;\n\n  &:hover {\n    background: #fff;\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return aI=function(){return c},c}let aJ=X.Z.button(aI());function aK(){var a,b,c=(a=["\n  position: relative;\n  width: 70px;\n  border: 0;\n  margin: 2px 0;\n  padding: 2px;\n  outline: none;\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return aK=function(){return c},c}let aL=X.Z.select(aK());function aM(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function aN(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(a,b)||aO(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function aO(a,b){if(a){if("string"==typeof a)return aM(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return aM(a,b)}}function aP(a){var b=a.index,c=(0,j.sO)(),d=(0,j.sO)(),f=aN(l(),2),g=f[0],h=f[1],i=aN((0,j.eJ)(!1),2),k=i[0],m=i[1];W({elRef:c,dragRef:d,position:g.positions[b],index:b,nodes:g.nodes});var n=function(a){h(function(c){c.nodes[b].properties.type=a})},o=function(a){h(function(c){c.nodes[b].properties.frequency=a})},p=function(a){h(function(c){c.nodes[b].properties.detune=a})},q=function(a){h(function(c){c.nodes[b].properties.duration=a})},r=(0,j.I4)(function(a){a.preventDefault(),m(!k)},[k]),s=(0,e.h)(aJ,{style:{height:"auto",width:"20px"},onClick:r},k?"-":"+");return(0,e.h)(aD,{ref:c,dragRef:d,index:b,color:"orange",canInput:!1,name:"Oscillator",style:{height:k?"auto":""}},(0,e.h)("div",{style:{display:"flex",justifyContent:"space-between",flexFlow:"column"}},(0,e.h)(af,{type:"number",label:"Frequency",units:"㎐",value:g.nodes[b].properties.frequency,onChange:function(a){a.preventDefault(),o(Number(a.target.value))}}),!k&&s,k&&(0,e.h)(e.HY,null,(0,e.h)(af,{type:"number",label:"Detune",value:g.nodes[b].properties.detune,onChange:function(a){a.preventDefault(),p(a.target.value)}}),(0,e.h)(af,{type:"number",label:"Duration",value:g.nodes[b].properties.duration,onChange:function(a){a.preventDefault(),q(a.target.value)}}),(0,e.h)(aL,{onChange:function(a){a.preventDefault(),n(a.target.value)}},(0,e.h)("option",{value:"sine"},"Sine"),(0,e.h)("option",{value:"square"},"Square"),(0,e.h)("option",{value:"sawtooth"},"Sawtooth"),(0,e.h)("option",{value:"triangle"},"Triangle")),k&&s)))}function aQ(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function aR(a){var b,c,d=a.index,f=(0,j.sO)(),g=(0,j.sO)(),h=(b=l(),c=1,function(a){if(Array.isArray(a))return a}(b)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(b,c)||function a(b,c){if(b){if("string"==typeof b)return aQ(b,c);var d=Object.prototype.toString.call(b).slice(8,-1);if("Object"===d&&b.constructor&&(d=b.constructor.name),"Map"===d||"Set"===d)return Array.from(d);if("Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return aQ(b,c)}}(b,c)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];return W({elRef:f,dragRef:g,position:h.positions[d],index:d,nodes:h.nodes}),(0,e.h)(aD,{index:d,dragRef:g,ref:f,color:"green",canRemove:!1,name:"Output",canOutput:!1})}function aS(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function aT(a){var b,c,d=a.index,f=(0,j.sO)(),g=(0,j.sO)(),h=(b=l(),c=2,function(a){if(Array.isArray(a))return a}(b)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(b,c)||function a(b,c){if(b){if("string"==typeof b)return aS(b,c);var d=Object.prototype.toString.call(b).slice(8,-1);if("Object"===d&&b.constructor&&(d=b.constructor.name),"Map"===d||"Set"===d)return Array.from(d);if("Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return aS(b,c)}}(b,c)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=h[0],k=h[1];W({elRef:f,dragRef:g,position:i.positions[d],index:d,nodes:i.nodes});var m=function(a){k(function(b){b.nodes[d].properties.pan=a})};return(0,e.h)(aD,{ref:f,dragRef:g,color:"chocolate",index:d,name:"Panner"},(0,e.h)("div",null,(0,e.h)(af,{type:"number",value:i.nodes[d].properties.pan,step:"0.1",max:"1",min:"-1",onChange:function(a){m(a.target.value)}})))}function aU(){var a,b,c=(a=["\n  height: 1px;\n  border-top: 6px solid brown;\n  position: absolute;\n  z-index: 10;\n  transform-origin: left center;\n\n  &:after {\n    content: '';\n    right: 8px;\n    height: 15px;\n    width: 15px;\n    border: solid #fff;\n    border-width: 0 4px 4px 0;\n    position: absolute;\n    margin-top: -13px;\n    margin-left: -6px;\n    transform: rotate(-45deg);\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return aU=function(){return c},c}var aV=X.Z.div(aU()),aW=5;function aX(a){var b=a.from,c=a.to,d=a.onClick;c.height.replace("px","");var f=Number(b.height.replace("px","")),g=b.x+Number(b.width.replace("px","")),h=c.x-g,i="".concat(g,"px"),j="".concat(b.y+f/2,"px"),k=b.y-c.y,l=h,m=Math.sqrt(Math.pow(k,2)+Math.pow(l,2)),n=-(180*Math.atan2(k,l)/Math.PI*1),o="".concat(m+aW,"px");return(0,e.h)(aV,{onClick:d,style:{width:o,left:i,top:j,transform:"rotate(".concat(n,"deg)")}},"\xa0")}function aY(){var a,b,c=(a=["\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  background-image: radial-gradient(#212121 10%, transparent 1%);\n  background-color: #000;\n  background-position: 0 0, 50px 50px;\n  background-size: 15px 15px;\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return aY=function(){return c},c}var aZ=X.Z.div(aY());function a$(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function a_(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function a0(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){a_(a,b,c[b])})}return a}(0,e.sY)((0,e.h)(function(){var a,b,c,d,f,g=(a=l(),b=2,function(a){if(Array.isArray(a))return a}(a)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(a,b)||function a(b,c){if(b){if("string"==typeof b)return a$(b,c);var d=Object.prototype.toString.call(b).slice(8,-1);if("Object"===d&&b.constructor&&(d=b.constructor.name),"Map"===d||"Set"===d)return Array.from(d);if("Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return a$(b,c)}}(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),h=g[0],i=h.nodes,k=void 0===i?[]:i,m=h.wires,n=void 0===m?[]:m,q=h.connecting,r=void 0===q?[]:q,s=h.positions,t=void 0===s?[]:s,u=g[1];d=(c={nodes:k,wires:n}).nodes,f=c.wires,(0,j.d4)(function(){var a=new(window.AudioContext||window.webkitAudioContext),b=d.map(function(b){if(b.type===o.OSCILLATOR){var c=a.createOscillator();return c.type=b.properties.type,c.detune.setValueAtTime(b.properties.detune,a.currentTime),c.frequency.setValueAtTime(b.properties.frequency,a.currentTime),c.start(),b.properties.duration&&c.stop(a.currentTime+Number(b.properties.duration)),c}if(b.type===o.GAIN){var d=a.createGain();return d.gain.value=b.properties.gain,d}if(b.type===o.DELAY){var e=a.createDelay(179);return e.delayTime.setValueAtTime(b.properties.delay,a.currentTime),e}if(b.type!==o.PAN)return a.destination;var f=a.createStereoPanner();return f.pan.setValueAtTime(b.properties.pan,a.currentTime),f});return f.forEach(function(a){try{b[a.from].connect(b[a.to])}catch(c){}}),function(){b.forEach(function(a){var b;null==a||null===(b=a.disconnect)|| void 0===b||b.call(a)})}},[d,f]);var v=function(){u(function(a){a.nodes=[a.nodes.find(function(a){return a.type===o.OUTPUT}),],a.wires=[],a.connecting=[],a.positions=[t[0]]})},w=function(){u(function(a){a.connecting=[]})},x=function(){u(function(a){a.wires=[],a.connecting=[]})},y=function(){u(function(a){a.nodes.push(a0({},p.OSCILLATOR.NODE)),a.positions.push(a0({},p.OSCILLATOR.POSITION))})},z=function(){u(function(a){a.nodes.push(a0({},p.GAIN.NODE)),a.positions.push(a0({},p.GAIN.POSITION))})},A=function(){u(function(a){a.nodes.push(a0({},p.DELAY.NODE)),a.positions.push(a0({},p.DELAY.POSITION))})},B=function(){u(function(a){a.nodes.push(a0({},p.PAN.NODE)),a.positions.push(a0({},p.PAN.POSITION))})},C=function(a){u(function(b){b.wires.splice(a,1)})},D=k.findIndex(function(a){return a.type===o.OUTPUT});return(0,e.h)(aZ,null,(0,e.h)("div",{style:{position:"absolute",right:0}},(0,e.h)(aJ,{onClick:v},"Remove all audio nodes"),(0,e.h)(aJ,{onClick:w,style:{background:r.length?"antiquewhite":"#ccc"}},"Cancel connection"),(0,e.h)(aJ,{onClick:x},"Clear all wires")),(0,e.h)(aJ,{onClick:y},"Add Oscillator"),(0,e.h)(aJ,{onClick:z},"Add Gain"),(0,e.h)(aJ,{onClick:A},"Add Delay"),(0,e.h)(aJ,{onClick:B},"Add Panner"),k.map(function(a,b){return a.type===o.OSCILLATOR&&(0,e.h)(aP,{index:b})||a.type===o.GAIN&&(0,e.h)(aH,{index:b})||a.type===o.PAN&&(0,e.h)(aT,{index:b})||a.type===o.DELAY&&(0,e.h)(aF,{index:b})}),(0,e.h)(aR,{index:D}),n.map(function(a,b){var c=a.from,d=a.to,f=null==t?void 0:t[d],g=null==t?void 0:t[c];return f&&g&&(0,e.h)(aX,{onClick:function(){C(b)},from:g,to:f})}))},null),document.body)}},b={};function c(d){var e=b[d];if(void 0!==e)return e.exports;var f=b[d]={id:d,exports:{}};return a[d](f,f.exports,c),f.exports}c.m=a,(()=>{var a=[];c.O=(b,d,e,f)=>{if(d){f=f||0;for(var g=a.length;g>0&&a[g-1][2]>f;g--)a[g]=a[g-1];a[g]=[d,e,f];return}for(var h=1/0,g=0;g<a.length;g++){for(var[d,e,f]=a[g],i=!0,j=0;j<d.length;j++)h>=f&&Object.keys(c.O).every(a=>c.O[a](d[j]))?d.splice(j--,1):(i=!1,f<h&&(h=f));if(i){a.splice(g--,1);var k=e();void 0!==k&&(b=k)}}return b}})(),c.n=a=>{var b=a&&a.__esModule?()=>a.default:()=>a;return c.d(b,{a:b}),b},c.d=(a,b)=>{for(var d in b)c.o(b,d)&&!c.o(a,d)&&Object.defineProperty(a,d,{enumerable:!0,get:b[d]})},c.o=(a,b)=>Object.prototype.hasOwnProperty.call(a,b),c.r=a=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},(()=>{var a={179:0};c.O.j=b=>0===a[b];var b=(b,d)=>{var e,f,[g,h,i]=d,j=0;if(g.some(b=>0!==a[b])){for(e in h)c.o(h,e)&&(c.m[e]=h[e]);if(i)var k=i(c)}for(b&&b(d);j<g.length;j++)f=g[j],c.o(a,f)&&a[f]&&a[f][0](),a[f]=0;return c.O(k)},d=self.webpackChunkaudio_node_dragger=self.webpackChunkaudio_node_dragger||[];d.forEach(b.bind(null,0)),d.push=b.bind(null,d.push.bind(d))})(),c.nc=void 0;var d=c.O(void 0,[459],()=>c(2440));d=c.O(d)})()