"use strict";(self.webpackChunkresturaunt=self.webpackChunkresturaunt||[]).push([[325],{5731:function(e,t,n){n.d(t,{Nc:function(){return o},lg:function(){return p},qR:function(){return c}});var a=n(7294),r=n(1074),i=r.default.a.withConfig({displayName:"pill-button__StyledPill",componentId:"sc-oxpw4h-0"})(["background-color:rgba(55,69,119,0.23);border-radius:25px;padding:10px 25px;font-size:25px;border-color:rgba(55,69,119,0.23);font-family:'Dancing Script';width:fit-content;justify-content:center;text-decoration:none;color:black;margin-top:25px;text-align:center;"]),o=function(e){var t=e.location,n=e.text,r=e.style;return a.createElement(i,{href:"/"+t,style:r},n)},c=r.default.button.withConfig({displayName:"pill-button__StyledPillButton",componentId:"sc-oxpw4h-1"})(["background-color:rgba(55,69,119,0.23);border-radius:25px;padding:10px 25px;font-size:25px;border:none;font-family:'Dancing Script';width:150px;justify-content:center;text-decoration:none;color:black;margin-top:25px;cursor:pointer;"]),l=r.default.input.withConfig({displayName:"pill-button__StyledInput",componentId:"sc-oxpw4h-2"})(["place-self:center;width:35px;background-color:white;font-family:'Dancing Script';border:none;text-align:center;outline:none;padding:0px;"]),d=r.default.button.withConfig({displayName:"pill-button__ChangeButtons",componentId:"sc-oxpw4h-3"})(["background-color:inherit;border:none;font-size:22px;font-family:'Dancing Script';"]),s=(0,r.default)((function(e){return a.createElement("div",e)})).withConfig({displayName:"pill-button__CounterButtonWrapper",componentId:"sc-oxpw4h-4"})(["display:grid;grid-template-columns:33% 33% 33%;place-items:center;border:1px solid #c4e2e8;margin-left:20px;width:fit-content;height:31px;"]),p=function(e){var t=e.currentProduct,n=e.updateCart,r=e.singleItem,i=e.style,o=function(e){var a=e.currentValue,i=e.addition,o=e.subtraction,c=i?a+(0!==a||r?1:3):o?a-(3!==a||r?1:3):a,l=c<0?0:c;n((function(e){var n;return Object.assign({},e,((n={})[t.name]=Object.assign({},e[t.name],{quantity:l,price:t.price}),n))}))};return a.createElement(s,{style:i},a.createElement(d,{style:{borderRight:"1px solid rgba(55, 69, 119, 0.23)",placeSelf:"center"},onClick:function(){o({currentValue:t.quantity,subtraction:!0})}},"-"),a.createElement(l,{type:"text",readOnly:!0,value:t.quantity,onChange:function(e){o({currentValue:parseInt(e.target.value)})}}),a.createElement(d,{style:{borderLeft:"1px solid rgba(55, 69, 119, 0.23)",placeSelf:"center"},onClick:function(){o({currentValue:t.quantity,addition:!0})}},"+"))}},2618:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(7294),r=n(1074),i=n.p+"static/logo-4459d792a998bdbd7c14bba03ebb6d02.jpeg",o=n.p+"static/cart-checkout-dbd7ebf93c663140a22c38d08a3fe789.png",c=r.default.div.withConfig({displayName:"header__HeaderWrapper",componentId:"sc-1cpn4zl-0"})(["display:grid;grid-template-columns:1fr 1fr 1fr;padding:10px 15px 20px;@media screen and (max-width:540px){grid-template-columns:5.5% 89% 5.5%;}"]),l=r.default.img.withConfig({displayName:"header__Logo",componentId:"sc-1cpn4zl-1"})(["@media screen and (max-width:540px){width:250px;}"]),d=r.default.div.withConfig({displayName:"header__MenuWrapper",componentId:"sc-1cpn4zl-2"})(["margin:5px 0 0 20px;display:grid;grid-template-rows:1fr 1fr;row-gap:5px;font-size:24px;@media screen and (max-width:540px){font-size:19px;margin:0;row-gap:0;padding:10px;border:1px solid #E77878;}"]),s=r.default.a.withConfig({displayName:"header__StyleMenuLink",componentId:"sc-1cpn4zl-3"})(["text-decoration:none;font-family:'Dancing Script';color:black;text-decoration:underline 0.15em rgba(0,0,0,0);transition:text-decoration-color 300ms;&:hover{text-decoration-color:#E77878;}"]),p=r.default.img.withConfig({displayName:"header__CartImage",componentId:"sc-1cpn4zl-4"})(["justify-self:flex-end;height:44px;@media screen and (max-width:540px){height:30px;}"]),u=r.default.img.withConfig({displayName:"header__MenuImage",componentId:"sc-1cpn4zl-5"})(["@media screen and (max-width:540px){height:30px;}"]),m=function(){return a.createElement(a.Fragment,null,a.createElement(u,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAfCAYAAACCox+xAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALmSURBVHgB7Zfdi01hFMafmcMZjBkiGR9lUKR8S/kqUUSRXBGKUmrc+A/c+ifcuJcLEZFQwg0XhhAy0cjn+J5hhjnzPLPWbvbM7N1539kzd7Pq1zn77Hevvd719a4DjMtgKeX8Xkdmk/9OBcWklkwgTX7dnbUgS5rJPjdmMoqLdMxznXOzFmR5ZDc5RE6RzaSGvCJ/MDKZ7vpOkwNu1F/yOr0oyyOfyW+/t5hsIttcQQnhoucnka1ko+tSeDrdkKAdHCGP/IFP5CaZg7gwyYhZ5Bp5D8uLp+QomVFUybFAJXmbUbJmbibP1aqSf+QLzJ1K2plkiit6gWz3Kp8ayHGyi6wkP8l1co489k1VYg2RN6aR+WSR77SRPHQje4cYIaOVC0rODTDv6eVXyCU3asStQF5YAXNzByyRFaY1bmQiDal1v8g3X7eaTK32kpAq0K67/QVlWNI2pT6fwxrgQdJC1pIf5DY5Qx7AwlgpaogUqId8hLm+nixwQ3StzruE7CXrXOdVcpncgHmwF6Msyo8dpBXmpQ7/Lr7Cdt7qaxoxhqKEVGkvJ7fIWzdIvCN3yCpYhdVE6O13bYwoTArFBwwcXBNT93v8XnR11CJOkj6hJC2nXt7j38t+r4RIj8TKmOVI6CGWeGIP2U/Ww0r0HjkLyw11XDU85UdyDLxB4AEXYojCpz6hU/gw7DSVUfdhHfMCeeYGqEyXwY4EPaemJq9ltvVYyeus6pghnVUduGpnrSZy9QlYqWpX7eS8G6HETCekvquCVNoXMVDaCttJmMdyJS80STi2k52wjqnflBN3YR2zC8PdretOf1ae1FgoT6mq1J3bfE1wmIoONaMyXEUPNTkSNVxlhUZh2AILy3dXpKHmCeKyP5lplODKnWS4aoN13/b04qwWr/jqhFUpvoTlhDzShThJ/hNpHJA3m2GJrNwJnlmXwmaLhW5UUal3Q1pcd7Ao05XxcmnMX4g8kY6kiuowLgHSB/cKwV/JDRMQAAAAAElFTkSuQmCC"}),a.createElement(d,null,a.createElement(s,{href:"/menu"},"Menu"),a.createElement(s,{href:"/about-me"},"About Me")))},f=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];return a.createElement(c,null,a.createElement("div",{style:{cursor:"pointer",width:"fit-content"},onClick:function(){return n(!t)}},t?a.createElement(m,null):a.createElement(u,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAoCAYAAABnyQNuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACFSURBVHgB7dgxDYVAEITheS8IQQISkICEc0KQgAQcIAEJSEACDmCBhlxCR7FL/i+Z4rLN5prJnQQA4fyyc2Vp5MdomZ+GybI5Srov91cgoZYFgIDyuq0trfzodVXuqciGpa6FvRjuh1ANlt/sapnkxyIA+JYkHozvCF23x4dCJz9mAUBsO2lCUQV4eHacAAAAAElFTkSuQmCC"})),a.createElement("a",{href:"/",style:{justifySelf:"center"}},a.createElement(l,{src:i})),a.createElement("a",{href:"/cart",style:{justifySelf:"flex-end"}},a.createElement(p,{src:o})))},g=n.p+"static/thank-you-7fbc789cef66f989ea11a166f47a8b4c.png",h=n(5731),A=n(5520),y=n(6239),x={_origin:"https://api.emailjs.com"},b=function(e,t,n){if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};function w(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function C(e,t,n){return t&&w(e.prototype,t),n&&w(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var v=C((function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.status=t.status,this.text=t.responseText})),k=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(a,r){var i=new XMLHttpRequest;i.addEventListener("load",(function(e){var t=e.target,n=new v(t);200===n.status||"OK"===n.text?a(n):r(n)})),i.addEventListener("error",(function(e){var t=e.target;r(new v(t))})),i.open("POST",x._origin+e,!0),Object.keys(n).forEach((function(e){i.setRequestHeader(e,n[e])})),i.send(t)}))},E=function(e,t,n,a){var r=a||x._userID;b(r,e,t);var i={lib_version:"3.2.0",user_id:r,service_id:e,template_id:t,template_params:n};return k("/api/v1.0/email/send",JSON.stringify(i),{"Content-type":"application/json"})},I=(0,r.createGlobalStyle)(['body{margin:0;font-family:"Libre Caslon Display";}']),S=r.default.img.withConfig({displayName:"confirmation__ThankYou",componentId:"sc-1dkydjb-0"})(["width:500px;@media screen and (max-width:540px){width:300px}"]),_=r.default.div.withConfig({displayName:"confirmation__MessageWrapper",componentId:"sc-1dkydjb-1"})(["display:grid;grid-template-columns:1fr;grid-templatte-rows:1fr 1fr 1fr 1fr;row-gap:20px;place-items:center;text-align:center;margin-bottom:160px;"]),N=r.default.div.withConfig({displayName:"confirmation__CopyDiv",componentId:"sc-1dkydjb-2"})(["font-size:22px"]),Q=I,j=function(){var e=(0,a.useContext)(A.A9).setCart,t=(0,a.useContext)(A.mN),n=t.quantities,r=t.setCheckoutCart,i=t.setCartWithQuantities,o=n.cartWithQuantities,c=n.total,l=n.selectedShipping,d=n.customerInformation;return(0,a.useEffect)((function(){"https://square.link/u/Nj8Hk5Zi?src=embed"===document.referrer&&(function(e){var t=e.customerInformation,n=e.cartWithQuantities,a=t.firstName+" "+t.surname,r=t.emailAddress;E("service_vzhglwp","template_ycy5pid",{to_name:a,message:n,to_email:r},"user_nY97bkcJucuzmbFNnsTFY")}({customerInformation:d,cartWithQuantities:o}),function(e){var t=e.customerInformation,n=e.cartWithQuantities,a=e.total,r=e.selectedShipping,i=t.firstName+" "+t.surname,o=t.address,c=t.emailAddress;E("service_vzhglwp","template_5x0wcwe",{to_name:i,order:n,shipping:r||"pick up",address:o,to_email:c,total:"$ "+a},"user_nY97bkcJucuzmbFNnsTFY")}({customerInformation:d,cartWithQuantities:o,total:c,selectedShipping:l})),e(y.R),r([]),i(A.$l)}),[]),a.createElement(a.Fragment,null,a.createElement(Q,null),a.createElement(f,null),a.createElement("div",{style:{display:"flex",justifyContent:"center"}},a.createElement(S,{src:g})),a.createElement(_,null,a.createElement(N,null,"Thanks for your order!"),a.createElement(N,null,"You will be recieving an confirmation email soon. Be sure to check your spam folder."),a.createElement(N,null,"The delivery fee is $10 but can vary based on distance."),a.createElement(N,null,"If you dont recieve a confirmation with in the next hour, feel free to reach out to us at cherickseats@gmail.com"),a.createElement(h.Nc,{style:{backgroundColor:"#E77878"},location:"",text:"Return Home"})))}}}]);
//# sourceMappingURL=component---src-pages-confirmation-tsx-1e33a8893e7da2797b8e.js.map