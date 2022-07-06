"use strict";(self.webpackChunkresturaunt=self.webpackChunkresturaunt||[]).push([[228],{2750:function(e,t,n){n.d(t,{EB:function(){return C},em:function(){return f}});var a=n(7294),r=n(5520),i=n(686),l=n(5724),o=n(1074),c=n(5731),d=o.default.div.withConfig({displayName:"cart__OrderSummary",componentId:"sc-zl28qs-0"})(["background-color:white;height:153px;width:237px;padding:10px 25px;display:flex;justify-content:center;flex-direction:column;"]),m=o.default.div.withConfig({displayName:"cart__OrderSummaryWrapper",componentId:"sc-zl28qs-1"})(["@media screen and (max-width:540px){place-items:center;display:flex;flex-direction:column;}"]),u=o.default.div.withConfig({displayName:"cart__CheckoutWrapper",componentId:"sc-zl28qs-2"})(["background-color:#E77878;display:flex;align-items:center;flex-direction:column;height:700px;.checkout-button-enabled{background-color:white;cursor:pointer}.checkout-button-disabled{background-color:'';cursor:default;}@media screen and (max-width:540px){height:fit-content;padding-bottom:50px;}"]),s=o.default.div.withConfig({displayName:"cart__Title",componentId:"sc-zl28qs-3"})(["display:flex;font-size:48px;justify-content:center;margin:40px 0px 15px;"]),p=o.default.hr.withConfig({displayName:"cart__Seperator",componentId:"sc-zl28qs-4"})(["height:.5px;width:90%;background-color:black;border:1px black solid;margin-bottom:40px;"]),f=o.default.hr.withConfig({displayName:"cart__SmallSeperator",componentId:"sc-zl28qs-5"})(["height:.5px;width:90%;background-color:black;border:1px black solid;"]),g=o.default.div.withConfig({displayName:"cart__CheckoutProperties",componentId:"sc-zl28qs-6"})(["display:grid;grid-template-columns:1fr 1fr;column-gap:60px;@media screen and (max-width:540px){grid-template-columns:1fr;}"]),h=o.default.div.withConfig({displayName:"cart__CartItems",componentId:"sc-zl28qs-7"})(["width:500px;@media screen and (max-width:540px){width:350px;}"]),x=o.default.div.withConfig({displayName:"cart__CartContent",componentId:"sc-zl28qs-8"})(["display:grid;grid-template-columns:350px 50px 123px;font-size:20px;margin-bottom:15px;padding-bottom:3px;@media screen and (max-width:540px){grid-template-columns:1fr 1fr 1fr;place-items:center;}"]),y=o.default.div.withConfig({displayName:"cart__CartContentLabels",componentId:"sc-zl28qs-9"})(["display:grid;grid-template-columns:350px 60px 115px;font-size:26px;border-bottom:1px solid black;margin-bottom:15px;@media screen and (max-width:540px){grid-template-columns:1fr 1fr 1fr;}"]),b=o.default.div.withConfig({displayName:"cart__CheckoutError",componentId:"sc-zl28qs-10"})(["background-color:white;height:60px;width:237px;padding:10px 25px;text-align:center;font-size:20px;color:red;"]),E=function(e){var t=e.cartItemNames,n=(0,a.useContext)(r.A9),i=n.cart,o=n.setCart,d=l.pG.map((function(e){return e.name}));return a.createElement(a.Fragment,null,a.createElement(y,null,a.createElement("div",null,"Meals"),a.createElement("div",null,"Price"),a.createElement("div",null,"Quantity")),t.map((function(e,t){return a.createElement(x,{key:t},a.createElement("div",{style:{marginRight:"15px"}},e),a.createElement("div",null,"$"+i[e].price),a.createElement(c.lg,{style:{backgroundColor:"white"},updateCart:o,currentProduct:Object.assign({},i[e],{name:e,quantity:i[e].quantity}),singleItem:!!d.includes(e)}))})))},C=function(){var e=(0,a.useContext)(r.A9).cart,t=Object.keys(e).filter((function(t){if(e[t].quantity>0)return e})),n=(0,a.useContext)(i.mN).setCheckoutCart,l=t.map((function(t){return e[t].price*e[t].quantity})).reduce((function(e,t){return e+t}),0),o=t.map((function(t){return e[t].quantity})).reduce((function(e,t){return e+t}),0),x=.065*l,y=(l+x).toFixed(2),C=t.includes("Cake Batter Chocolate Chip Cookies - 15ct")||t.includes("Brownies - 15ct"),w=0===t.length||o<3&&!C;return(0,a.useEffect)((function(){var e=document.getElementById("checkout-button");w?(null==e||e.setAttribute("disabled",""),null==e||e.classList.add("checkout-button-disabled"),null==e||e.classList.remove("checkout-button-enabled")):(null==e||e.removeAttribute("disabled"),null==e||e.classList.remove("checkout-button-disabled"),null==e||e.classList.add("checkout-button-enabled"))}),[w]),a.createElement(u,null,a.createElement(s,null,"Your Cart"),a.createElement(p,null),a.createElement(g,null,a.createElement("div",null,a.createElement(h,null,a.createElement(E,{cartItemNames:t}))),a.createElement(m,null,a.createElement(d,null,a.createElement("div",{style:{alignSelf:"center",marginBottom:"20px"}},"Order Summary"),a.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr",marginLeft:"20px"}},a.createElement("div",null,"Subtotal"),a.createElement("div",null,"$ "+l),a.createElement("div",null,"Shipping"),a.createElement("div",null,"TBD"),a.createElement("div",null,"Tax"),a.createElement("div",null,"$ "+x.toFixed(2))),a.createElement(f,null),a.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",marginLeft:"20px"}},a.createElement("div",null,"Total"),a.createElement("div",null,"$ "+y))),w?a.createElement(b,null,"Please add 3 or more items to your cart"):null,a.createElement(c.qR,{id:"checkout-button",onClick:function(){n(t),w||window.location.replace("/checkout")},style:{width:"130px"}},"Checkout"))))}},837:function(e,t,n){n.d(t,{h:function(){return f},E:function(){return m}});var a=n(7294),r=n(1074),i=n.p+"static/logo-4459d792a998bdbd7c14bba03ebb6d02.jpeg",l=n.p+"static/cart-checkout-dbd7ebf93c663140a22c38d08a3fe789.png",o=r.default.div.withConfig({displayName:"header__HeaderWrapper",componentId:"sc-1cpn4zl-0"})(["display:grid;grid-template-columns:1fr 1fr 1fr;padding:10px 15px 20px;@media screen and (max-width:540px){grid-template-columns:5.5% 89% 5.5%;}"]),c=r.default.img.withConfig({displayName:"header__Logo",componentId:"sc-1cpn4zl-1"})(["@media screen and (max-width:540px){width:250px;}"]),d=r.default.div.withConfig({displayName:"header__MenuWrapper",componentId:"sc-1cpn4zl-2"})(["margin:5px 0 0 20px;display:grid;grid-template-rows:1fr 1fr;row-gap:5px;font-size:24px;@media screen and (max-width:540px){font-size:19px;margin:0;row-gap:0;padding:10px;border:1px solid #E77878;}"]),m=r.default.a.withConfig({displayName:"header__StyleMenuLink",componentId:"sc-1cpn4zl-3"})(["text-decoration:none;font-family:'Dancing Script';color:black;text-decoration:underline 0.15em rgba(0,0,0,0);transition:text-decoration-color 300ms;&:hover{text-decoration-color:#E77878;}"]),u=r.default.img.withConfig({displayName:"header__CartImage",componentId:"sc-1cpn4zl-4"})(["justify-self:flex-end;height:44px;@media screen and (max-width:540px){height:30px;}"]),s=r.default.img.withConfig({displayName:"header__MenuImage",componentId:"sc-1cpn4zl-5"})(["@media screen and (max-width:540px){height:30px;}"]),p=function(){return a.createElement(a.Fragment,null,a.createElement(s,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAfCAYAAACCox+xAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALmSURBVHgB7Zfdi01hFMafmcMZjBkiGR9lUKR8S/kqUUSRXBGKUmrc+A/c+ifcuJcLEZFQwg0XhhAy0cjn+J5hhjnzPLPWbvbM7N1539kzd7Pq1zn77Hevvd719a4DjMtgKeX8Xkdmk/9OBcWklkwgTX7dnbUgS5rJPjdmMoqLdMxznXOzFmR5ZDc5RE6RzaSGvCJ/MDKZ7vpOkwNu1F/yOr0oyyOfyW+/t5hsIttcQQnhoucnka1ko+tSeDrdkKAdHCGP/IFP5CaZg7gwyYhZ5Bp5D8uLp+QomVFUybFAJXmbUbJmbibP1aqSf+QLzJ1K2plkiit6gWz3Kp8ayHGyi6wkP8l1co489k1VYg2RN6aR+WSR77SRPHQje4cYIaOVC0rODTDv6eVXyCU3asStQF5YAXNzByyRFaY1bmQiDal1v8g3X7eaTK32kpAq0K67/QVlWNI2pT6fwxrgQdJC1pIf5DY5Qx7AwlgpaogUqId8hLm+nixwQ3StzruE7CXrXOdVcpncgHmwF6Msyo8dpBXmpQ7/Lr7Cdt7qaxoxhqKEVGkvJ7fIWzdIvCN3yCpYhdVE6O13bYwoTArFBwwcXBNT93v8XnR11CJOkj6hJC2nXt7j38t+r4RIj8TKmOVI6CGWeGIP2U/Ww0r0HjkLyw11XDU85UdyDLxB4AEXYojCpz6hU/gw7DSVUfdhHfMCeeYGqEyXwY4EPaemJq9ltvVYyeus6pghnVUduGpnrSZy9QlYqWpX7eS8G6HETCekvquCVNoXMVDaCttJmMdyJS80STi2k52wjqnflBN3YR2zC8PdretOf1ae1FgoT6mq1J3bfE1wmIoONaMyXEUPNTkSNVxlhUZh2AILy3dXpKHmCeKyP5lplODKnWS4aoN13/b04qwWr/jqhFUpvoTlhDzShThJ/hNpHJA3m2GJrNwJnlmXwmaLhW5UUal3Q1pcd7Ao05XxcmnMX4g8kY6kiuowLgHSB/cKwV/JDRMQAAAAAElFTkSuQmCC"}),a.createElement(d,null,a.createElement(m,{href:"/menu"},"Menu"),a.createElement(m,{href:"/about-me"},"About Me")))},f=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];return a.createElement(o,null,a.createElement("div",{style:{cursor:"pointer",width:"fit-content"},onClick:function(){return n(!t)}},t?a.createElement(p,null):a.createElement(s,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAoCAYAAABnyQNuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACFSURBVHgB7dgxDYVAEITheS8IQQISkICEc0KQgAQcIAEJSEACDmCBhlxCR7FL/i+Z4rLN5prJnQQA4fyyc2Vp5MdomZ+GybI5Srov91cgoZYFgIDyuq0trfzodVXuqciGpa6FvRjuh1ANlt/sapnkxyIA+JYkHozvCF23x4dCJz9mAUBsO2lCUQV4eHacAAAAAElFTkSuQmCC"})),a.createElement("a",{href:"/",style:{justifySelf:"center"}},a.createElement(c,{src:i})),a.createElement("a",{href:"/cart",style:{justifySelf:"flex-end"}},a.createElement(u,{src:l})))}},5731:function(e,t,n){n.d(t,{Nc:function(){return l},lg:function(){return u},qR:function(){return o}});var a=n(7294),r=n(1074),i=r.default.a.withConfig({displayName:"pill-button__StyledPill",componentId:"sc-oxpw4h-0"})(["background-color:rgba(55,69,119,0.23);border-radius:25px;padding:10px 25px;font-size:25px;border-color:rgba(55,69,119,0.23);font-family:'Dancing Script';width:fit-content;justify-content:center;text-decoration:none;color:black;margin-top:25px;text-align:center;"]),l=function(e){var t=e.location,n=e.text,r=e.style;return a.createElement(i,{href:"/"+t,style:r},n)},o=r.default.button.withConfig({displayName:"pill-button__StyledPillButton",componentId:"sc-oxpw4h-1"})(["background-color:rgba(55,69,119,0.23);border-radius:25px;padding:10px 25px;font-size:25px;border:none;font-family:'Dancing Script';width:150px;justify-content:center;text-decoration:none;color:black;margin-top:25px;cursor:pointer;"]),c=r.default.input.withConfig({displayName:"pill-button__StyledInput",componentId:"sc-oxpw4h-2"})(["place-self:center;width:35px;background-color:white;font-family:'Dancing Script';border:none;text-align:center;outline:none;padding:0px;"]),d=r.default.button.withConfig({displayName:"pill-button__ChangeButtons",componentId:"sc-oxpw4h-3"})(["background-color:inherit;border:none;font-size:22px;font-family:'Dancing Script';"]),m=(0,r.default)((function(e){return a.createElement("div",e)})).withConfig({displayName:"pill-button__CounterButtonWrapper",componentId:"sc-oxpw4h-4"})(["display:grid;grid-template-columns:1fr 1fr 1fr;place-items:center;border:1px solid #E77878;margin-left:20px;width:fit-content;height:31px;"]),u=function(e){var t=e.currentProduct,n=e.updateCart,r=e.singleItem,i=e.style,l=function(e){var a=e.currentValue,i=e.addition,l=e.subtraction,o=i?a+(0!==a||r?1:3):l?a-(3!==a||r?1:3):a,c=o<0?0:o;n((function(e){var n;return Object.assign({},e,((n={})[t.name]={quantity:c,price:t.price},n))}))};return a.createElement(m,{style:i},a.createElement(d,{style:{borderRight:"1px solid rgba(55, 69, 119, 0.23)",placeSelf:"center"},onClick:function(){l({currentValue:t.quantity,subtraction:!0})}},"-"),a.createElement(c,{type:"text",readOnly:!0,value:t.quantity,onChange:function(e){l({currentValue:parseInt(e.target.value)})}}),a.createElement(d,{style:{borderLeft:"1px solid rgba(55, 69, 119, 0.23)",placeSelf:"center"},onClick:function(){l({currentValue:t.quantity,addition:!0})}},"+"))}},5724:function(e,t,n){n.d(t,{H:function(){return l},S8:function(){return a},bI:function(){return r},lV:function(){return i},pG:function(){return c},uo:function(){return o}});var a=[{name:"Veggie Stir Fry with Lo Mein or Rice"},{name:"Curry Chickpeas with Rice"},{name:"Black Bean and Rice Bowl"}],r=[{name:"Oven-Roasted Chicken"},{name:"Salmon (5-7 Oz)"},{name:"Pepper Steak"},{name:"Sweet and Sour Meatballs"}],i=[{name:"Chicken Alfredo"},{name:"Chicken Piccata"},{name:"Cheeseburger Pasta"},{name:"Rasta Pasta"}],l=[{name:"Beef Spinach"},{name:"Chicken"},{name:"Veggie"}],o=[{name:"Mashed Potatoes"},{name:"Brussel Sprouts"},{name:"Couscous with Cranberry"},{name:"Mac & Cheese"},{name:"Garlic Butter Green Beans"},{name:"Broccoli"},{name:"Rice"},{name:"Garden Salad"},{name:"Sauteed Spinach"},{name:"Glazed Carrots"}],c=[{name:"Cheesecake Cupcakes - 12ct."},{name:"Fruit Tarts - 12ct."},{name:"Brownies - 15ct"},{name:"Cake Batter Chocolate Chip Cookies - 15ct"}]},4916:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a=n(7294),r=n(837),i=n(1074),l=n(5785),o=n(686),c=n(5520),d=n(2750),m=i.default.form.withConfig({displayName:"checkout__CheckoutForm",componentId:"sc-1judw23-0"})(["display:flex;flex-direction:column;width:300px;@media screen and (max-width:540px){margin-bottom:50px;}"]),u=i.default.div.withConfig({displayName:"checkout__CheckoutContainer",componentId:"sc-1judw23-1"})(["margin-top:50px;display:flex;flex-direction:row;place-content:center;margin-bottom:100px;@media screen and (max-width:540px){flex-direction:column;place-items:center;}"]),s=function(e){return"Delivery - Orlando Only"===e?10:"Priority"===e?16.25:"Priority Express"===e?28.8:0},p=i.default.div.withConfig({displayName:"temporary-checkout-page__OrderSummary",componentId:"sc-ckf1m4-0"})(["background-color:white;height:153px;width:267px;padding:10px 25px;display:flex;justify-content:center;flex-direction:column;place-items:center;@media screen and (max-width:540px){margin-bottom:80px;}"]),f=i.default.input.withConfig({displayName:"temporary-checkout-page__FormInput",componentId:"sc-ckf1m4-1"})(["margin-bottom:20px;"]),g=function(e){""===e.target.value?e.target.style.border="1px solid red":e.target.style.border="1px solid black"},h=function(){var e=(0,a.useContext)(c.A9).cart,t=(0,a.useContext)(o.mN),n=t.checkoutCart,r=t.setCartWithQuantities,i=n.map((function(t){return a.createElement("div",{key:t,style:{margin:"0 5px 5px"}},t," x",e[t].quantity)})),h=(0,a.useState)({firstName:"",surname:"",emailAddress:"",address:""}),x=h[0],y=h[1],b=n.map((function(t){return e[t].price*e[t].quantity})).reduce((function(e,t){return e+t}),0),E=n.includes("Cake Batter Chocolate Chip Cookies - 15ct")||n.includes("Brownies - 15ct"),C=["Pick Up - Orlando Only","Delivery - Orlando Only"].concat((0,l.Z)(E?["Priority","Priority Express"]:[])),w=(0,a.useState)(""),A=w[0],k=w[1],v=(0,a.useState)(!1),S=v[0],I=v[1],_=.065*b,N=b+_,B=(s(A)+N).toFixed(2);r({cartWithQuantities:n.map((function(t){return a.createElement(a.Fragment,null,"`$",t," x$",e[t].quantity,"`")})),total:B,selectedShipping:A,customerInformation:x});var F=function(e){var t,n,a,r,i;e.preventDefault(),t=document.getElementById("first_name"),n=document.getElementById("surname"),a=document.getElementById("email"),r=document.getElementById("home_address"),i=document.getElementById("terms-and-conditions"),t&&n&&a&&r&&i.checked?(I(!1),function(e){e.preventDefault();var t=document.getElementById("modal-checkout-button").getAttribute("data-url"),n=window.top?window.top:window,a=void 0!==n.screenLeft?n.screenLeft:n.screenX,r=void 0!==n.screenTop?n.screenTop:n.screenY,i=n.innerWidth?n.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:window.width,l=n.innerHeight?n.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:window.height,o=.75*l,c=i/n.screen.availWidth,d=(i-500)/2/c+a,m=(l-o)/2/c+r,u=window.open(t,"Square Online Checkout","scrollbars=yes, width="+500/c+", height="+o/c+", top="+m+", left="+d);window.focus&&u.focus()}(e)):I(!0)};return a.createElement(a.Fragment,null,S?a.createElement("div",{style:{marginTop:"40px",color:"red",display:"flex",placeContent:"center"}},"Please fill in the missing information"):null,a.createElement(u,null,a.createElement(m,null,a.createElement("label",{htmlFor:"first_name"},"First Name:"),a.createElement(f,{type:"text",id:"first_name",name:"first_name",onBlur:function(e){return g(e)},onChange:function(e){return y(Object.assign({},x,{firstName:e.target.value}))}}),a.createElement("label",{htmlFor:"surname"},"Last Name:"),a.createElement(f,{type:"text",id:"surname",name:"surname",onBlur:function(e){return g(e)},onChange:function(e){return y(Object.assign({},x,{surname:e.target.value}))}}),a.createElement("label",{htmlFor:"email"},"Email Address:"),a.createElement(f,{type:"text",id:"email",name:"email",onBlur:function(e){return g(e)},onChange:function(e){return y(Object.assign({},x,{emailAddress:e.target.value}))}}),a.createElement("label",{htmlFor:"home_address"},"Home Address:"),a.createElement(f,{type:"text",id:"home_address",name:"home_address",onBlur:function(e){return g(e)},onChange:function(e){return y(Object.assign({},x,{address:e.target.value}))}}),a.createElement("label",{htmlFor:"shipping_options"},"Shipping Options"),a.createElement("select",{id:"shipping_options",onChange:function(e){k(e.target.value)}},C.map((function(e,t){return a.createElement("option",{value:e,key:t},e)}))),a.createElement("div",{style:{marginTop:"20px"}},a.createElement("input",{type:"checkbox",id:"terms-and-conditions",name:"terms-and-conditions"}),a.createElement("label",{htmlFor:"terms-and-conditions"},"I hereby agree to the ",a.createElement("a",{href:"/terms-and-conditions.pdf",target:"_blank"},"terms and conditions.")))),a.createElement(p,{style:{marginTop:"50px"}},a.createElement("p",{style:{color:"red"}},"Final Payment is due one week before order completion"),a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",border:"1px solid black",width:"inherit"}},a.createElement("div",{style:{marginBottom:"20px"}},"Order Summary"),a.createElement("div",{style:{marginBottom:"20px"}},i)),a.createElement("div",{style:{border:"1px solid black",padding:"20px 0",display:"flex",alignItems:"center",flexDirection:"column",width:"inherit"}},a.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr",marginLeft:"20px"}},a.createElement("div",null,"Subtotal"),a.createElement("div",null,"$ "+b),a.createElement("div",{style:{marginRight:"15px"}},"Shipping"),a.createElement("div",null,"$ "+s(A).toFixed(2)),a.createElement("div",null,"Tax"),a.createElement("div",null,"$ "+_.toFixed(2))),a.createElement(d.em,null),a.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",marginLeft:"20px"}},a.createElement("div",null,"Total"),a.createElement("div",null,"$ "+B))),a.createElement("div",null,a.createElement("div",null,a.createElement("div",{style:{overflow:"auto",display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"center",width:"259px",marginTop:"30px",background:"#FFFFFF",fontFamily:"Playfair Display, SQ Market, Helvetica, Arial, sans-serif"}},a.createElement("div",{style:{padding:"20px"}},a.createElement("a",{id:"modal-checkout-button","data-url":"https://square.link/u/Nj8Hk5Zi?src=embd",href:"https://square.link/u/Nj8Hk5Zi?src=embed",onClick:function(e){return F(e)},style:{display:"inline-block",fontSize:"18px",lineHeight:"48px",height:"48px",color:"#ffffff",minWidth:"212px",backgroundColor:"#E77878",textAlign:"center",boxShadow:"0 0 0 1px rgba(0,0,0,.1) inset",borderRadius:"50px"}},"Pay now")),a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Playfair Display"})))))))},x=(0,i.createGlobalStyle)(['body{margin:0;font-family:"Dancing Script";}']),y=function(){return a.createElement(a.Fragment,null,a.createElement(x,null),a.createElement(r.h,null),a.createElement(h,null))}}}]);
//# sourceMappingURL=component---src-pages-checkout-tsx-b7db81fb9e647984c88f.js.map