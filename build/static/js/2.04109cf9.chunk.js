webpackJsonp([2],{191:function(e,r,n){"use strict";function t(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function o(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!==typeof r&&"function"!==typeof r?e:r}function i(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var a=n(0),s=n.n(a),c=n(7),u=n(202),p=n(13),d=n(59),l=n(12),b=n(58),f=function(){function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}}(),A=function(e){function r(){return t(this,r),o(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return i(r,e),f(r,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=s.a.createElement(b.a,null);return this.props.loading||(e=s.a.createElement("div",null,this.props.orders.map(function(e){return s.a.createElement(u.a,{key:e.id,ingredients:e.ingredients,price:e.price})}))),e}}]),r}(a.Component),x=function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},m=function(e){return{onFetchOrders:function(r,n){return e(l.d(r,n))}}};r.default=Object(c.b)(x,m)(Object(d.a)(A,p.a))},202:function(e,r,n){"use strict";var t=n(0),o=n.n(t),i=n(203),a=n.n(i),s=function(e){var r=[];for(var n in e.ingredients)r.push({name:n,amount:e.ingredients[n]});var t=r.map(function(e){return o.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,")")});return o.a.createElement("div",{className:a.a.Order},o.a.createElement("p",null,"Ingredients: ",t),o.a.createElement("p",null,"Price: ",o.a.createElement("strong",null,"USD ",Number.parseFloat(e.price).toFixed(2))))};r.a=s},203:function(e,r,n){var t=n(204);"string"===typeof t&&(t=[[e.i,t,""]]);var o={};o.transform=void 0;n(189)(t,o);t.locals&&(e.exports=t.locals)},204:function(e,r,n){r=e.exports=n(188)(!0),r.push([e.i,".Order__Order__W-Npf{width:80%;border:1px solid #eee;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;padding:10px;margin:10px auto;-webkit-box-sizing:border-box;box-sizing:border-box}","",{version:3,sources:["C:/Users/adibu/Desktop/react-complete-guide/burger-builder/src/components/Order/Order.css"],names:[],mappings:"AAAA,qBACI,UAAW,AACX,sBAAuB,AACvB,kCAAmC,AAC3B,0BAA2B,AACnC,aAAc,AACd,iBAAkB,AAClB,8BAA+B,AACvB,qBAAuB,CAClC",file:"Order.css",sourcesContent:[".Order {\n    width: 80%;\n    border: 1px solid #eee;\n    -webkit-box-shadow: 0 2px 3px #ccc;\n            box-shadow: 0 2px 3px #ccc;\n    padding: 10px;\n    margin: 10px auto;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}"],sourceRoot:""}]),r.locals={Order:"Order__Order__W-Npf"}}});
//# sourceMappingURL=2.04109cf9.chunk.js.map