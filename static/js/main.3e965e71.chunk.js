(this["webpackJsonpreact-assignment-final"]=this["webpackJsonpreact-assignment-final"]||[]).push([[0],{31:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),s=n(18),i=n.n(s);n(25),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(11),o=n(14),j=n(4),u=n(8),d=n(2);function b(e){var t=e.value,n=e.onChange,r=e.readOnly,a=void 0!==r&&r;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{disabled:a||t<=1,className:"btn btn-primary",onClick:function(){return n(t-1)},children:"-"}),Object(c.jsxs)("button",{type:"button",disabled:a,className:"btn btn-default",children:["Quantity ",t]}),t<1?null:Object(c.jsx)("button",{disabled:a,className:"btn btn-primary",onClick:function(){return n(t+1)},children:"+"})]})}function O(e){e.value;var t=e.onClick,n=e.readOnly,r=void 0!==n&&n,a=e.classNameExtra,s=void 0===a?"":a,i=e.text;return Object(c.jsxs)("button",{className:"btn "+s,type:"button",onClick:t,disabled:r,children:[" ",i," "]})}function h(e){var t=e.value,n=e.onChange,r=e.readOnly,a=void 0!==r&&r;return Object(c.jsxs)(c.Fragment,{children:[t<=0?null:Object(c.jsx)(b,{min:1,value:t,onChange:function(e){return n(e)},readOnly:a}),t>0?null:Object(c.jsx)(O,{classNameExtra:"btn-success",onClick:function(){return n(t+1)},readOnly:a,text:"Add To Cart"}),t<=0?null:Object(c.jsx)(O,{classNameExtra:"btn-danger",onClick:function(){return n(0)},readOnly:a,text:"Remove from Cart"})]})}function m(e){var t=e.product,n=e.itemsInCart,r=e.onUpdateCart,a=e.readOnly,s=void 0!==a&&a,i=t.id,l=t.image,o=t.title,j=t.price,d=t.description;return Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"row",children:[" ",Object(c.jsx)("h3",{children:Object(c.jsx)(u.b,{to:"/".concat(i),children:o})})," "]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col col-sm-4",children:Object(c.jsx)("img",{className:"img-fluid",src:l,alt:"not available"})}),Object(c.jsxs)("div",{className:"col col-sm-8",children:[Object(c.jsxs)("div",{className:"row",children:[d," "]}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("br",{})}),Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("h3",{children:["$ ",j]})}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("br",{})}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("br",{}),Object(c.jsx)(h,{value:n,onChange:function(e){return r(i,e)},readOnly:s})]}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("br",{})})]})]})]})}function x(e){var t=e.value,n=e.onChange,r=e.readOnly,a=void 0!==r&&r;return Object(c.jsxs)("h4",{children:[Object(c.jsx)("span",{onClick:function(){return a?null:n(t-1)},children:" - "}),t,Object(c.jsx)("span",{onClick:function(){return a?null:n(t+1)},children:" + "}),Object(c.jsx)("span",{onClick:function(){return a?null:n(0)},children:" (x) "})]})}function f(e){var t=e.value,n=e.onChange,r=e.readOnly,a=void 0!==r&&r;return Object(c.jsx)(x,{value:t,onChange:function(e){return n(e)},readOnly:a})}function v(e){var t=e.product,n=e.itemsInCart,r=e.onUpdateCart,a=e.readOnly,s=void 0!==a&&a,i=t.id,l=t.image,o=t.title,j=t.price;return Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col col-sm-1",children:Object(c.jsx)("img",{className:"img-fluid",src:l,alt:"not available"})}),Object(c.jsx)("div",{className:"col col-sm-7",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)(u.b,{to:"/".concat(i),children:o})})}),Object(c.jsx)("div",{className:"col col-sm-3",children:Object(c.jsx)(f,{value:n,onChange:function(e){return r(i,e)},readOnly:s})}),Object(c.jsx)("div",{className:"col col-sm-1",children:Object(c.jsx)("h4",{children:j})})]})}function p(e){var t=e.products,n=e.cart,r=e.onUpdateCart,a=e.view,s=void 0===a?"normal":a,i=e.readOnly,l="normal"===s?m:v;return t.map((function(e){var t=e.id in n?n[e.id]:0,a="product-"+e.id;return Object(c.jsxs)("div",{children:[" ",l({key:a,itemsInCart:t,onUpdateCart:r,readOnly:i,product:e,cart:n})," "]},a)}))}function g(e){var t=e.label,n=e.name,r=e.value,a=e.onChange,s=e.isValid,i=e.helpText;return Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsxs)("label",{htmlFor:n,children:[t,": ",s?"Ok":i," "]}),Object(c.jsx)("input",{className:"form-control",id:n,name:n,value:r,onChange:function(e){return a(e.target.value.trim())}}),Object(c.jsx)("br",{})]})}function C(e){var t=e.billingAmount,n=e.onSuccess,a=e.onCancel,s=Object(r.useState)(!1),i=Object(j.a)(s,2),l=i[0],o=i[1],u=Object(r.useState)(""),d=Object(j.a)(u,2),b=d[0],O=d[1],h=Object(r.useState)(""),m=Object(j.a)(h,2),x=m[0],f=m[1],v=Object(r.useState)(""),p=Object(j.a)(v,2),C=p[0],N=p[1],S=Object(r.useState)(""),y=Object(j.a)(S,2),w=y[0],k=y[1],E=Object(r.useState)(!1),P=Object(j.a)(E,2),I=P[0],T=P[1],U=Object(r.useState)(!1),A=Object(j.a)(U,2),F=A[0],$=A[1],V=Object(r.useState)(!1),z=Object(j.a)(V,2),J=z[0],Z=z[1],B=Object(r.useState)(!1),D=Object(j.a)(B,2),G=D[0],L=D[1],M=Object(r.useState)(!1),W=Object(j.a)(M,2),H=W[0],Q=W[1];Object(r.useEffect)((function(){$(/^[A-Za-z]+\s[A-Za-z]+$/.test(String(b)))}),[b]),Object(r.useEffect)((function(){Z(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(x).toLowerCase()))}),[x]),Object(r.useEffect)((function(){L(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(String(C)))}),[C]),Object(r.useEffect)((function(){Q(/^\d{16}$/.test(String(w)))}),[w]),Object(r.useEffect)((function(){o(F&&J&&G&&H)}),[F,J,G,H]),Object(r.useEffect)((function(){if(I){var e=setTimeout((function(){return n()}),2e3);return function(){return clearTimeout(e)}}}),[I,n]);return I?Object(c.jsx)("h1",{children:"Payment successful"}):Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),T(!0)},children:[Object(c.jsx)("h2",{children:"Billing Form"}),Object(c.jsx)(g,{label:"Name",name:"name",value:b,onChange:O,isValid:F,helpText:"Please enter your name"}),Object(c.jsx)(g,{label:"Email",name:"email",value:x,onChange:f,isValid:J,helpText:"Please enter your email"}),Object(c.jsx)(g,{label:"Phone",name:"phone",value:C,onChange:N,isValid:G,helpText:"Please enter 10 digit phone number"}),Object(c.jsx)(g,{label:"Credit Card Number",name:"creditCardNumber",value:w,onChange:k,isValid:H,helpText:"Please enter 16 digit Number"}),Object(c.jsxs)("label",{children:[" Total Amount : ",t," "]}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"submit",value:"Submit",disabled:!l}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{className:"btn btn-danger",onClick:function(e){e.preventDefault(),a()},children:"Cancel"})]})}function N(e){var t=e.products,n=e.cart,a=e.onUpdateCart,s=t.filter((function(e){return e.id in n&&n[e.id]>0})),i=Object(r.useState)("notStarted"),l=Object(j.a)(i,2),o=l[0],u=l[1],b=Object(d.f)(),O=s.reduce((function(e,t){return Math.round(100*(n[t.id]*t.price+e+Number.EPSILON))/100}),0);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"Cart"}),s.length<=0?Object(c.jsx)(c.Fragment,{children:" Your Cart Is Empty "}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(p,{products:s,onUpdateCart:a,cart:n,view:"cart",readOnly:"inProgress"===o}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("br",{})}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col col-sm-11",children:Object(c.jsx)("h4",{children:"Total Amount : "})}),Object(c.jsx)("div",{className:"col col-sm-1",children:Object(c.jsx)("h4",{children:O})})]}),"notStarted"===o?Object(c.jsx)("button",{onClick:function(){return u("inProgress")},children:" Checkout "}):"inProgress"===o?Object(c.jsx)(C,{onSuccess:function(){a("*",0),b.push("/")},billingAmount:O,onCancel:function(){return u("notStarted")}}):null]})]})}function S(e){var t=e.products,n=e.cart,a=e.routeProps,s=e.onUpdateCart,i=e.setProducts;Object(r.useEffect)((function(){fetch("https://fakestoreapi.com/products").then((function(e){return e.json()})).then((function(e){e?i(e):console.log(e)}),(function(e){console.log(String("Got Error response : "+e))})).catch((function(e){return console.log(String("Got Error : "+e))}))}),[t,i]);var l=a?a.match.params.selectedProductId:null,o=l?t.filter((function(e){return String(e.id)===String(l)})):t;return Object(c.jsx)(p,{products:o,onUpdateCart:s,cart:n})}function y(e){var t=Object(r.useState)([]),n=Object(j.a)(t,2),a=n[0],s=n[1],i=Object(r.useState)((function(){var e=window.localStorage.getItem("cart");return e?JSON.parse(e):{}})),b=Object(j.a)(i,2),O=b[0],h=b[1];Object(r.useEffect)((function(){return window.localStorage.setItem("cart",JSON.stringify(O))}),[O]);var m=function(e,t){return h("*"===e?[]:Object(o.a)(Object(o.a)({},O),{},Object(l.a)({},e,t)))},x=Object.values(O).filter((function(e){return e>0})).length;return Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)(u.a,{children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col col-sm-8",children:Object(c.jsx)("h3",{children:Object(c.jsx)(u.b,{to:"/",children:"Home"})})}),Object(c.jsx)("div",{className:"col col-sm-4",children:Object(c.jsxs)("h3",{children:[Object(c.jsx)(u.b,{to:"/cart",children:"Cart "})," ",x<=0?null:Object(c.jsxs)("span",{className:"badge badge-dark",children:[" ",x," "]})," "]})})]}),Object(c.jsxs)(d.c,{children:[Object(c.jsx)(d.a,{path:"/cart",children:Object(c.jsx)(N,{products:a,cart:O,onUpdateCart:m})}),Object(c.jsx)(d.a,{path:"/:selectedProductId?",render:function(e){return Object(c.jsx)(S,{products:a,routeProps:e,cart:O,onUpdateCart:m,setProducts:s})}})]})]})})}i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.3e965e71.chunk.js.map