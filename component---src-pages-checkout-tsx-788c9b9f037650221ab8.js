"use strict";(self.webpackChunkresturaunt=self.webpackChunkresturaunt||[]).push([[228],{4916:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(7294),i=n(1966),l=n(2982),a=n(686),o=n(5520),c=n(3294),m=i.default.form.withConfig({displayName:"checkout__CheckoutForm",componentId:"sc-1judw23-0"})(["display:flex;flex-direction:column;width:300px;@media screen and (max-width:540px){margin-bottom:50px;}"]),d=i.default.div.withConfig({displayName:"checkout__CheckoutContainer",componentId:"sc-1judw23-1"})(["margin-top:50px;display:flex;flex-direction:row;place-content:center;margin-bottom:100px;min-height:400px;@media screen and (max-width:540px){flex-direction:column;place-items:center;}"]),s=function(e){return"Delivery - Orlando Only"===e?10:"Priority"===e?16.25:"Priority Express"===e?28.8:0},u=i.default.div.withConfig({displayName:"temporary-checkout-page__OrderSummary",componentId:"sc-ckf1m4-0"})(["background-color:white;width:267px;padding:10px 25px;display:flex;justify-content:center;flex-direction:column;place-items:center;@media screen and (max-width:540px){margin-bottom:80px;}"]),p=i.default.input.withConfig({displayName:"temporary-checkout-page__FormInput",componentId:"sc-ckf1m4-1"})(["margin-bottom:20px;"]),f=function(e){""===e.target.value?e.target.style.border="1px solid red":e.target.style.border="1px solid black"},h=function(){var e=(0,r.useContext)(o.A9).cart,t=(0,r.useContext)(a.mN),n=t.checkoutCart,i=t.setCartWithQuantities,h=n.map((function(t){return r.createElement("div",{key:t,style:{margin:"0 5px 5px"}},t," x",e[t].quantity)})),g=(0,r.useState)({firstName:"",surname:"",emailAddress:"",address:""}),y=g[0],x=g[1],E=n.map((function(t){return e[t].price*e[t].quantity})).reduce((function(e,t){return e+t}),0),b=n.includes("Cake Batter Chocolate Chip Cookies - 15ct")||n.includes("Brownies - 15ct"),v=["Pick Up - Orlando Only","Delivery - Orlando Only"].concat((0,l.Z)(b?["Priority","Priority Express"]:[])),w=(0,r.useState)(""),k=w[0],C=w[1],F=(0,r.useState)(!1),_=F[0],I=F[1],B=.065*E,O=E+B,S=(s(k)+O).toFixed(2);i({cartWithQuantities:n.map((function(t){return r.createElement(r.Fragment,null,"`$",t," x$",e[t].quantity,"`")})),total:S,selectedShipping:k,customerInformation:y});var N=function(e){var t,n,r,i,l;e.preventDefault(),t=document.getElementById("first_name"),n=document.getElementById("surname"),r=document.getElementById("email"),i=document.getElementById("home_address"),l=document.getElementById("terms-and-conditions"),t&&n&&r&&i&&l.checked?(I(!1),function(e){e.preventDefault();var t=document.getElementById("modal-checkout-button").getAttribute("data-url"),n=window.top?window.top:window,r=void 0!==n.screenLeft?n.screenLeft:n.screenX,i=void 0!==n.screenTop?n.screenTop:n.screenY,l=n.innerWidth?n.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:window.width,a=n.innerHeight?n.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:window.height,o=.75*a,c=l/n.screen.availWidth,m=(l-500)/2/c+r,d=(a-o)/2/c+i,s=window.open(t,"Square Online Checkout","scrollbars=yes, width="+500/c+", height="+o/c+", top="+d+", left="+m);window.focus&&s.focus()}(e)):I(!0)};return r.createElement(r.Fragment,null,_?r.createElement("div",{style:{marginTop:"40px",color:"red",display:"flex",placeContent:"center"}},"Please fill in the missing information"):null,r.createElement(d,null,r.createElement(m,null,r.createElement("label",{htmlFor:"first_name"},"First Name:"),r.createElement(p,{type:"text",id:"first_name",name:"first_name",onBlur:function(e){return f(e)},onChange:function(e){return x(Object.assign({},y,{firstName:e.target.value}))}}),r.createElement("label",{htmlFor:"surname"},"Last Name:"),r.createElement(p,{type:"text",id:"surname",name:"surname",onBlur:function(e){return f(e)},onChange:function(e){return x(Object.assign({},y,{surname:e.target.value}))}}),r.createElement("label",{htmlFor:"email"},"Email Address:"),r.createElement(p,{type:"text",id:"email",name:"email",onBlur:function(e){return f(e)},onChange:function(e){return x(Object.assign({},y,{emailAddress:e.target.value}))}}),r.createElement("label",{htmlFor:"home_address"},"Home Address:"),r.createElement(p,{type:"text",id:"home_address",name:"home_address",onBlur:function(e){return f(e)},onChange:function(e){return x(Object.assign({},y,{address:e.target.value}))}}),r.createElement("label",{htmlFor:"shipping_options"},"Shipping Options"),r.createElement("select",{id:"shipping_options",onChange:function(e){C(e.target.value)}},v.map((function(e,t){return r.createElement("option",{value:e,key:t},e)}))),r.createElement("div",{style:{marginTop:"20px"}},r.createElement("input",{type:"checkbox",id:"terms-and-conditions",name:"terms-and-conditions"}),r.createElement("label",{htmlFor:"terms-and-conditions"},"I hereby agree to the ",r.createElement("a",{href:"/terms-and-conditions.pdf",target:"_blank"},"terms and conditions.")))),r.createElement(u,null,r.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",border:"1px solid black",width:"inherit"}},r.createElement("div",{style:{marginBottom:"20px"}},"Order Summary"),r.createElement("div",{style:{marginBottom:"20px"}},h)),r.createElement("div",{style:{border:"1px solid black",padding:"20px 0",display:"flex",alignItems:"center",flexDirection:"column",width:"inherit"}},r.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr",marginLeft:"20px"}},r.createElement("div",null,"Subtotal"),r.createElement("div",null,"$ "+E),r.createElement("div",{style:{marginRight:"15px"}},"Shipping"),r.createElement("div",null,"$ "+s(k).toFixed(2)),r.createElement("div",null,"Tax"),r.createElement("div",null,"$ "+B.toFixed(2))),r.createElement(c.em,null),r.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",marginLeft:"20px"}},r.createElement("div",null,"Total"),r.createElement("div",null,"$ "+S))),r.createElement("div",null,r.createElement("p",{style:{color:"red"}},"Final Payment is due one week before order completion"),r.createElement("div",null,r.createElement("div",{style:{overflow:"auto",display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"center",width:"259px",background:"#FFFFFF",fontFamily:"Playfair Display, SQ Market, Helvetica, Arial, sans-serif"}},r.createElement("div",{style:{padding:"20px"}},r.createElement("a",{id:"modal-checkout-button","data-url":"https://square.link/u/Nj8Hk5Zi?src=embd",href:"https://square.link/u/Nj8Hk5Zi?src=embed",onClick:function(e){return N(e)},style:{display:"inline-block",fontSize:"18px",lineHeight:"48px",height:"48px",color:"#ffffff",minWidth:"212px",backgroundColor:"#c4e2e8",textAlign:"center",boxShadow:"0 0 0 1px rgba(0,0,0,.1) inset",borderRadius:"50px"}},"Pay now")),r.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Playfair Display"})))))))},g=n(2002),y=(0,i.createGlobalStyle)(['body{margin:0;font-family:"Libre Caslon Display";}']),x=function(){return r.createElement(r.Fragment,null,r.createElement(y,null),r.createElement(g.J,{header:!0}),r.createElement(h,null))}}}]);
//# sourceMappingURL=component---src-pages-checkout-tsx-788c9b9f037650221ab8.js.map