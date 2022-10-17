(()=>{"use strict";var a={3242(a,b,c){c.d(b,{Z:()=>i});var d=c(3303),e=c.n(d),f=c(7185),g=c.n(f),h=g()(e());h.push([a.id,"body {\n  margin: 0;\n  padding: 0;\n  font-family: Montserrat, sans-serif;\n}\n\n@keyframes borderFlow {\n  0% {\n    border-color: #333;\n  }\n  50% {\n    border-color: #555;\n  }\n  100% {\n    border-color: #333;\n  }\n}\n",""]);let i=h},2074(a,b,c){var d,e=c(5017),f=c(7535),g=c(633),h=c(8989),i=c(9543),j=c(7508);function k(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function l(a){var b,c,e=(0,j.Ye)(function(){return null==a?d:d.isolate(a)},[a]),f=(b=(0,j.eJ)(e.value),c=2,function(a){if(Array.isArray(a))return a}(b)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(b,c)||function a(b,c){if(b){if("string"==typeof b)return k(b,c);var d=Object.prototype.toString.call(b).slice(8,-1);if("Object"===d&&b.constructor&&(d=b.constructor.name),"Map"===d||"Set"===d)return Array.from(d);if("Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return k(b,c)}}(b,c)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),g=f[0],h=f[1],i=(0,j.I4)(function(a){e.update(a)},[e]);return(0,j.d4)(function(){var a=e.subscribe({next:h});return function(){return a.unsubscribe()}},[e]),[g,i]}function m(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function n(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){m(a,b,c[b])})}return a}var o={OSCILLATOR:"oscillator",DELAY:"delay",PAN:"pan",GAIN:"gain",INPUT:"input",OUTPUT:"output"},p={OSCILLATOR:{POSITION:{x:100,y:500,width:"100px",height:"50px"},NODE:{type:o.OSCILLATOR,properties:{type:"sine",frequency:440,detune:0}}},GAIN:{POSITION:{x:500,y:200,width:"100px",height:"50px"},NODE:{type:o.GAIN,properties:{gain:0}}},DELAY:{POSITION:{x:400,y:500,width:"100px",height:"50px"},NODE:{type:o.DELAY,properties:{delay:0}}},PAN:{POSITION:{x:200,y:700,width:"100px",height:"50px"},NODE:{type:o.PAN,properties:{pan:0}}},OUTPUT:{NODE:{type:o.OUTPUT,properties:{}},POSITION:{x:740,y:500}}},q=[n({},p.OUTPUT.NODE)],r=[n({},p.OUTPUT.POSITION)],s=c(2233),t=c(5743),u=c(9065),v=c(2141),w=c(2781);function x(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}var y=function(a,b){return a.pipe((0,u.k)({op:s.D7,path:["connecting"]}),(0,v.M)(b),(0,w.U)(function(a){var b,c,d=(c=2,function(a){if(Array.isArray(a))return a}(b=a)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(b,c)||function a(b,c){if(b){if("string"==typeof b)return x(b,c);var d=Object.prototype.toString.call(b).slice(8,-1);if("Object"===d&&b.constructor&&(d=b.constructor.name),"Map"===d||"Set"===d)return Array.from(d);if("Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return x(b,c)}}(b,c)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),e=(d[0],d[1]);return function(a){var b,c,d,f,g=null===(b=e.connecting)|| void 0===b?void 0:null===(c=b[0])|| void 0===c?void 0:c.direction,h=null===(d=e.connecting)|| void 0===d?void 0:null===(f=d[1])|| void 0===f?void 0:f.direction;e.connecting.length>=2?(new Set(e.connecting.map(function(a){return a.index})).size<=1?a.connecting=[]:"output"===g&&"input"===h?a.wires.push({from:e.connecting[0].index,to:e.connecting[1].index}):"input"===g&&"output"===h&&a.wires.push({from:e.connecting[1].index,to:e.connecting[0].index}),a.connecting=[]):a.wires=e.wires}}))};let z=(0,t.l)(y);var A,B,C=(0,f.N)();A={nodes:q,wires:[],connecting:[],positions:r},B=[C],d=(0,i.U)(A,B),(0,g.j)(h.D),C.run(z);var D=c(9624),E=c.n(D),F=c(6808),G=c.n(F),H=c(6892),I=c.n(H),J=c(6359),K=c.n(J),L=c(2716),M=c.n(L),N=c(3242),O={};O.setAttributes=K(),O.insert=I().bind(null,"head"),O.domAPI=G(),O.insertStyleElement=M(),E()(N.Z,O),N.Z&&N.Z.locals&&N.Z.locals;var P=c(6522),Q=c(2811),R=c(9172),S=c(5420);function T(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function U(a,b){if(a){if("string"==typeof a)return T(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return T(a,b)}}function V(){var a,b,c=(a=l(),b=2,function(a){if(Array.isArray(a))return a}(a)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(a,b)||U(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),d=c[0],e=c[1],f=(0,j.I4)(function(a,b){e(function(c){c.positions[a]=b})},[e]),g=(0,j.I4)(function(a,b,c){e(function(d){d.positions[a].x=b,d.positions[a].y=c})},[e]),h=(0,j.I4)(function(a){e(function(b){var c;b.positions.splice(a,1),b.nodes.splice(a,1),((function(a){if(Array.isArray(a))return T(a)})(c=new Set(d.wires.map(function(b,c){return!![b.from,b.to].includes(a)&&c})))||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(c)||U(c)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach(function(a){Number.isNaN||b.wires.splice(a,1)})})},[e,d.wires]);return{remove:h,setPosition:f,setXY:g}}function W(a){var b=a.elRef,c=a.xVarName,d=void 0===c?"--x":c,e=a.yVarName,f=void 0===e?"--y":e,g=a.position,h=a.index,i=a.nodes,k=V(),l=k.setPosition,m=k.setXY;(0,j.d4)(function(){var a={},c=a.x,e=a.y,i=a.pos,j=void 0===i?{}:i;if(b.current){var k,n=getComputedStyle(b.current)||{},o=n.width,p=void 0===o?"30px":o,q=n.height,r=void 0===q?"20px":q;c=(k=g).x,e=k.y,b.current.style.setProperty(d,"".concat(c,"px")),b.current.style.setProperty(f,"".concat(e,"px")),j={x:c,y:e,width:p,height:r},l(h,j);var s=(0,P.R)(b.current,"mousedown").pipe((0,Q.w)(function(){return(0,P.R)(document,"mousemove").pipe((0,R.b)(function(a){c=a.clientX-Number(p.replace("px",""))/2,e=a.clientY-Number(r.replace("px",""))/2,m(h,c,e),b.current.style.setProperty(d,"".concat(c,"px")),b.current.style.setProperty(f,"".concat(e,"px"))}),(0,S.R)((0,P.R)(document,"mouseup")))})).subscribe(function(){return null});return function(){s.unsubscribe()}}},[null==b?void 0:b.current,i,h])}var X=c(402);function Y(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}var Z=c(67);function $(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function _(){var a=$(["\n  cursor: grab;\n  border-radius: 15px;\n  box-sizing: border-box;\n  flex-flow: row;\n  display: flex;\n  position: absolute;\n  width: 250px;\n  height: 100px;\n  z-index: 100;\n\n  &:active {\n    cursor: grabbing;\n  }\n"]);return _=function(){return a},a}function aa(){var a=$(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 10%;\n"]);return aa=function(){return a},a}function ab(){var a=$(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 10%;\n"]);return ab=function(){return a},a}function ac(){var a=$(["\n  box-sizing: border-box;\n  padding: 8px;\n  display: flex;\n  flex-flow: column;\n  width: 80%;\n"]);return ac=function(){return a},a}function ad(){var a=$(["\n  height: 90%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n  opacity: 0.7;\n  border: none;\n\n  &:hover {\n    opacity: 0.3;\n  }\n"]);return ad=function(){return a},a}function ae(){var a=$(["\n  margin: 0;\n  padding: 0;\n"]);return ae=function(){return a},a}var af=Z.Z.div(_()),ag=Z.Z.div(aa()),ah=Z.Z.div(ab()),ai=Z.Z.div(ac()),aj=Z.Z.button(ad()),ak=Z.Z.h3(ae());function al(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var am="--x",an="--y",ao=(0,X.forwardRef)(function(a,b){var c,d,f,g,h,i,k=a.index,m=a.style,n=a.children,o=a.name,p=a.canRemove,q=(g=((f=(c=l(),d=2,function(a){if(Array.isArray(a))return a}(c)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(c,d)||function a(b,c){if(b){if("string"==typeof b)return Y(b,c);var d=Object.prototype.toString.call(b).slice(8,-1);if("Object"===d&&b.constructor&&(d=b.constructor.name),"Map"===d||"Set"===d)return Array.from(d);if("Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return Y(b,c)}}(c,d)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))[0],f[1]),h=(0,j.I4)(function(a){var b=a.from,c=a.to;g(function(a){a.wires.push({from:b,to:c})})},[g]),i=(0,j.I4)(function(a,b){g(function(c){c.connecting.push({index:a,direction:b})})},[g]),{addToConnecting:i,addToWiring:h}).addToConnecting,r=V().remove;return(0,e.h)(af,{ref:b,style:function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){al(a,b,c[b])})}return a}({top:"var(".concat(an,")"),left:"var(".concat(am,")")},m)},(0,e.h)(ag,null,(0,e.h)(aj,{onClick:function(){q(k,"input")}},"I")),(0,e.h)(ai,null,(void 0===p||p)&&(0,e.h)("div",null,(0,e.h)("button",{onClick:function(){r(k)}},"Remove")),(0,e.h)(ak,null,o," # ",k),n),(0,e.h)(ah,null,(0,e.h)(aj,{onClick:function(){q(k,"output")}},"O")))});let ap=ao;function aq(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function ar(a){var b,c,d=a.index,f=(0,j.sO)();(0,j.sO)();var g=(b=l(),c=2,function(a){if(Array.isArray(a))return a}(b)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(b,c)||function a(b,c){if(b){if("string"==typeof b)return aq(b,c);var d=Object.prototype.toString.call(b).slice(8,-1);if("Object"===d&&b.constructor&&(d=b.constructor.name),"Map"===d||"Set"===d)return Array.from(d);if("Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return aq(b,c)}}(b,c)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),h=g[0],i=g[1];W({elRef:f,position:h.positions[d],index:d,nodes:h.nodes});var k=function(a){i(function(b){b.nodes[d].properties.delay=a})};return(0,e.h)(ap,{ref:f,style:{background:"cadetblue"},index:d,name:"Delay"},(0,e.h)("div",null,"Value:"," ",(0,e.h)("input",{style:{width:"50px"},type:"number",value:h.nodes[d].properties.delay,step:"0.1",max:"1",min:"0",onChange:function(a){k(a.target.value)}})))}function as(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function at(a){var b,c,d=a.index,f=(0,j.sO)();(0,j.sO)();var g=(b=l(),c=2,function(a){if(Array.isArray(a))return a}(b)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(b,c)||function a(b,c){if(b){if("string"==typeof b)return as(b,c);var d=Object.prototype.toString.call(b).slice(8,-1);if("Object"===d&&b.constructor&&(d=b.constructor.name),"Map"===d||"Set"===d)return Array.from(d);if("Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return as(b,c)}}(b,c)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),h=g[0],i=g[1];W({elRef:f,position:h.positions[d],index:d,nodes:h.nodes});var k=function(a){i(function(b){b.nodes[d].properties.gain=a})};return(0,e.h)(ap,{ref:f,style:{background:"purple"},index:d,name:"Gain"},(0,e.h)("div",null,"Value:"," ",(0,e.h)("input",{style:{width:"50px"},type:"number",value:h.nodes[d].properties.gain,step:"0.1",onChange:function(a){k(a.target.value)}})))}function au(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function av(a){var b,c,d=a.index,f=(0,j.sO)();(0,j.sO)();var g=(b=l(),c=2,function(a){if(Array.isArray(a))return a}(b)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(b,c)||function a(b,c){if(b){if("string"==typeof b)return au(b,c);var d=Object.prototype.toString.call(b).slice(8,-1);if("Object"===d&&b.constructor&&(d=b.constructor.name),"Map"===d||"Set"===d)return Array.from(d);if("Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return au(b,c)}}(b,c)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),h=g[0],i=g[1];W({elRef:f,position:h.positions[d],index:d,nodes:h.nodes});var k=function(a){i(function(b){b.nodes[d].properties.type=a})},m=function(a){i(function(b){b.nodes[d].properties.frequency=a})},n=function(a){i(function(b){b.nodes[d].properties.detune=a})};return(0,e.h)(ap,{ref:f,index:d,style:{background:"orange"},name:"Oscillator"},(0,e.h)("div",null,"Freq:"," ",(0,e.h)("input",{style:{width:"50px"},type:"number",value:h.nodes[d].properties.frequency,onChange:function(a){m(Number(a.target.value))}})),(0,e.h)("div",null,"Detune:"," ",(0,e.h)("input",{type:"number",style:{width:"50px"},value:h.nodes[d].properties.detune,onChange:function(a){n(a.target.value)}})),(0,e.h)("div",{style:{display:"none"}},(0,e.h)("label",null,(0,e.h)("input",{type:"radio",value:"sine",id:"sine",name:"type",onClick:function(){k("sine")}}),"Sine"),(0,e.h)("label",null,(0,e.h)("input",{type:"radio",value:"square",id:"square",name:"type",onClick:function(){k("square")}}),"Square"),(0,e.h)("label",null,(0,e.h)("input",{type:"radio",value:"sawtooth",id:"sawtooth",name:"type",onClick:function(){k("sawtooth")}}),"Sawtooth"),(0,e.h)("label",null,(0,e.h)("input",{type:"radio",value:"triangle",id:"triangle",name:"type",onClick:function(){k("triangle")}}),"Triangle")))}function aw(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function ax(a){var b,c,d=a.index,f=(0,j.sO)(),g=(0,j.sO)(),h=(b=l(),c=1,function(a){if(Array.isArray(a))return a}(b)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(b,c)||function a(b,c){if(b){if("string"==typeof b)return aw(b,c);var d=Object.prototype.toString.call(b).slice(8,-1);if("Object"===d&&b.constructor&&(d=b.constructor.name),"Map"===d||"Set"===d)return Array.from(d);if("Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return aw(b,c)}}(b,c)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];return W({elRef:f,buttonRef:g,position:h.positions[d],index:d,nodes:h.nodes}),(0,e.h)(ap,{index:d,ref:f,style:{background:"green"},buttonRef:g,canRemove:!1,name:"Output"})}function ay(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function az(a){var b,c,d=a.index,f=(0,j.sO)();(0,j.sO)();var g=(b=l(),c=2,function(a){if(Array.isArray(a))return a}(b)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(b,c)||function a(b,c){if(b){if("string"==typeof b)return ay(b,c);var d=Object.prototype.toString.call(b).slice(8,-1);if("Object"===d&&b.constructor&&(d=b.constructor.name),"Map"===d||"Set"===d)return Array.from(d);if("Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return ay(b,c)}}(b,c)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),h=g[0],i=g[1];W({elRef:f,position:h.positions[d],index:d,nodes:h.nodes});var k=function(a){i(function(b){b.nodes[d].properties.pan=a})};return(0,e.h)(ap,{ref:f,style:{background:"chocolate"},index:d,name:"Pan"},(0,e.h)("div",null,"Value:"," ",(0,e.h)("input",{style:{width:"50px"},type:"number",value:h.nodes[d].properties.pan,step:"0.1",max:"1",min:"-1",onChange:function(a){k(a.target.value)}})))}function aA(){var a,b,c=(a=["\n  font-family: inherit;\n  border: 0;\n  background: #ccc;\n  height: 40px;\n  width: auto;\n  cursor: pointer;\n  margin: 0 5px;\n\n  &:hover {\n    background: #fff;\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return aA=function(){return c},c}let aB=Z.Z.button(aA());var aC=5;function aD(a){var b=a.from,c=a.to,d=a.onClick;c.height.replace("px","");var f=Number(b.height.replace("px","")),g=b.x+Number(b.width.replace("px","")),h=c.x-g,i="".concat(g,"px"),j="".concat(b.y+f/2,"px"),k=b.y-c.y,l=h,m=Math.sqrt(Math.pow(k,2)+Math.pow(l,2)),n=-(180*Math.atan2(k,l)/Math.PI*1),o="".concat(m+aC,"px");return(0,e.h)("div",{onClick:d,style:{width:o,left:i,top:j,height:"1px",borderTop:"6px solid #333",position:"absolute",zIndex:10,transformOrigin:"left center",transform:"rotate(".concat(n,"deg)"),animation:"borderFlow 3s ease-in-out infinite"}},"\xa0")}function aE(){var a,b,c=(a=["\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  background-image: radial-gradient(#212121 20%, transparent 20%),\n    radial-gradient(#fafafa 20%, transparent 20%);\n  background-color: #e53935;\n  background-position: 0 0, 50px 50px;\n  background-size: 10px 10px;\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return aE=function(){return c},c}var aF=Z.Z.div(aE());function aG(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function aH(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function aI(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){aH(a,b,c[b])})}return a}(0,e.sY)((0,e.h)(function(){var a,b,c,d,f,g=(a=l(),b=2,function(a){if(Array.isArray(a))return a}(a)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(a,b)||function a(b,c){if(b){if("string"==typeof b)return aG(b,c);var d=Object.prototype.toString.call(b).slice(8,-1);if("Object"===d&&b.constructor&&(d=b.constructor.name),"Map"===d||"Set"===d)return Array.from(d);if("Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return aG(b,c)}}(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),h=g[0],i=h.nodes,k=void 0===i?[]:i,m=h.wires,n=void 0===m?[]:m,q=h.connecting,r=void 0===q?[]:q,s=h.positions,t=void 0===s?[]:s,u=g[1];d=(c={nodes:k,wires:n}).nodes,f=c.wires,(0,j.d4)(function(){var a=new(window.AudioContext||window.webkitAudioContext),b=d.map(function(b){if(b.type===o.OSCILLATOR){var c=a.createOscillator();return c.type=b.properties.type,c.detune.setValueAtTime(b.properties.detune,a.currentTime),c.frequency.setValueAtTime(b.properties.frequency,a.currentTime),c.start(),c}if(b.type===o.GAIN){var d=a.createGain();return d.gain.value=b.properties.gain,d}if(b.type===o.DELAY){var e=a.createDelay();return e.delayTime.setValueAtTime(b.properties.delay,a.currentTime),e}if(b.type!==o.PAN)return a.destination;var f=a.createStereoPanner();return f.pan.setValueAtTime(b.properties.pan,a.currentTime),f});return f.forEach(function(a){try{b[a.from].connect(b[a.to])}catch(c){}}),function(){b.forEach(function(a){var b;null==a||null===(b=a.disconnect)|| void 0===b||b.call(a)})}},[d,f]);var v=function(){u(function(a){a.nodes=[a.nodes.find(function(a){return a.type===o.OUTPUT}),],a.wires=[],a.connecting=[],a.positions=[t[0]]})},w=function(){u(function(a){a.connecting=[]})},x=function(){u(function(a){a.wires=[],a.connecting=[]})},y=function(){u(function(a){a.nodes.push(aI({},p.OSCILLATOR.NODE)),a.positions.push(aI({},p.OSCILLATOR.POSITION))})},z=function(){u(function(a){a.nodes.push(aI({},p.GAIN.NODE)),a.positions.push(aI({},p.GAIN.POSITION))})},A=function(){u(function(a){a.nodes.push(aI({},p.DELAY.NODE)),a.positions.push(aI({},p.DELAY.POSITION))})},B=function(){u(function(a){a.nodes.push(aI({},p.PAN.NODE)),a.positions.push(aI({},p.PAN.POSITION))})},C=function(a){u(function(b){b.wires.splice(a,1)})},D=k.findIndex(function(a){return a.type===o.OUTPUT});return(0,e.h)(aF,null,(0,e.h)("div",{style:{position:"absolute",right:0}},(0,e.h)(aB,{onClick:v},"Remove all audio nodes"),(0,e.h)(aB,{onClick:w,style:{background:r.length?"antiquewhite":"#ccc"}},"Cancel connection"),(0,e.h)(aB,{onClick:x},"Clear all wires")),(0,e.h)(aB,{onClick:y},"Add Oscillator"),(0,e.h)(aB,{onClick:z},"Add Gain"),(0,e.h)(aB,{onClick:A},"Add Delay"),(0,e.h)(aB,{onClick:B},"Add Panner"),k.map(function(a,b){return a.type===o.OSCILLATOR&&(0,e.h)(av,{index:b})||a.type===o.GAIN&&(0,e.h)(at,{index:b})||a.type===o.PAN&&(0,e.h)(az,{index:b})||a.type===o.DELAY&&(0,e.h)(ar,{index:b})}),(0,e.h)(ax,{index:D}),n.map(function(a,b){var c=a.from,d=a.to,f=null==t?void 0:t[d],g=null==t?void 0:t[c];return f&&g&&(0,e.h)(aD,{onClick:function(){C(b)},from:g,to:f})}))},null),document.body)}},b={};function c(d){var e=b[d];if(void 0!==e)return e.exports;var f=b[d]={id:d,exports:{}};return a[d](f,f.exports,c),f.exports}c.m=a,(()=>{var a=[];c.O=(b,d,e,f)=>{if(d){f=f||0;for(var g=a.length;g>0&&a[g-1][2]>f;g--)a[g]=a[g-1];a[g]=[d,e,f];return}for(var h=1/0,g=0;g<a.length;g++){for(var[d,e,f]=a[g],i=!0,j=0;j<d.length;j++)h>=f&&Object.keys(c.O).every(a=>c.O[a](d[j]))?d.splice(j--,1):(i=!1,f<h&&(h=f));if(i){a.splice(g--,1);var k=e();void 0!==k&&(b=k)}}return b}})(),c.n=a=>{var b=a&&a.__esModule?()=>a.default:()=>a;return c.d(b,{a:b}),b},c.d=(a,b)=>{for(var d in b)c.o(b,d)&&!c.o(a,d)&&Object.defineProperty(a,d,{enumerable:!0,get:b[d]})},c.o=(a,b)=>Object.prototype.hasOwnProperty.call(a,b),c.r=a=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},(()=>{var a={179:0};c.O.j=b=>0===a[b];var b=(b,d)=>{var e,f,[g,h,i]=d,j=0;if(g.some(b=>0!==a[b])){for(e in h)c.o(h,e)&&(c.m[e]=h[e]);if(i)var k=i(c)}for(b&&b(d);j<g.length;j++)f=g[j],c.o(a,f)&&a[f]&&a[f][0](),a[f]=0;return c.O(k)},d=self.webpackChunkaudio_node_dragger=self.webpackChunkaudio_node_dragger||[];d.forEach(b.bind(null,0)),d.push=b.bind(null,d.push.bind(d))})(),c.nc=void 0;var d=c.O(void 0,[459],()=>c(2074));d=c.O(d)})()