"use strict";(self.webpackChunkpsychologists_service=self.webpackChunkpsychologists_service||[]).push([[526],{9431:function(e,t,n){n.d(t,{r:function(){return c}});var r,i=n(2791),s=["title","titleId"];function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function l(e,t){var n=e.title,l=e.titleId,c=a(e,s);return i.createElement("svg",o({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":l},c),n?i.createElement("title",{id:l},n):null,r||(r=i.createElement("path",{d:"M5 7.5L10 12.5L15 7.5",stroke:"#FBFBFB",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var c=i.forwardRef(l);n.p},6184:function(e,t,n){n.d(t,{w:function(){return f}});var r=n(2791),i="Filter_filterLabel__+pnW-",s=n(9439),o=n(9431),a="Dropdown_dropdown__QEFz6",l="Dropdown_dropBtn__HrH0-",c="Dropdown_list__T+o5-",m="Dropdown_rotatedIcon__RK9oK",d=n(184),u=function(e){var t=e.defaultOption,n=e.onSelect,i=e.children,u=(0,r.useState)(!1),p=(0,s.Z)(u,2),h=p[0],f=p[1],v=(0,r.useState)(t),_=(0,s.Z)(v,2),x=_[0],j=_[1],y=(0,r.useRef)(null),g=function(e){y.current&&!y.current.contains(e.target)&&f(!1)};return(0,r.useEffect)((function(){var e=function(e){"Escape"===e.code&&f(!1)};return window.addEventListener("keydown",e),document.addEventListener("mousedown",g),function(){document.removeEventListener("mousedown",g),window.removeEventListener("keydown",e)}}),[]),(0,r.useEffect)((function(){j(t)}),[t]),(0,d.jsxs)("div",{className:a,ref:y,children:[(0,d.jsxs)("button",{className:l,onClick:function(){return f(!h)},children:[x,(0,d.jsx)(o.r,{className:h?m:null})]}),h&&(0,d.jsx)("ul",{className:c,children:r.Children.map(i,(function(e){return(0,d.jsx)("li",{onClick:function(){return t=e.props.value,j(t),f(!1),void n(t);var t},children:e},e.props.value)}))})]})},p=n(4420),h=n(4139),f=function(){var e=(0,p.I0)();return(0,d.jsxs)("div",{children:[(0,d.jsx)("label",{className:i,children:"Filters"}),(0,d.jsxs)(u,{defaultOption:"Show all",onSelect:function(t){e((0,h.Tv)(t))},children:[(0,d.jsx)("span",{value:"A to Z",children:"A to Z"}),(0,d.jsx)("span",{value:"Z to A",children:"Z to A"}),(0,d.jsx)("span",{value:"Less than 10$",children:"Less than 10$"}),(0,d.jsx)("span",{value:"Greater than 10$",children:"Greater than 10$"}),(0,d.jsx)("span",{value:"Popular",children:"Popular"}),(0,d.jsx)("span",{value:"Not popular",children:"Not popular"}),(0,d.jsx)("span",{value:"Show all",children:"Show all"})]})]})}},4165:function(e,t,n){n.d(t,{E:function(){return we}});var r,i=n(9439),s="PsychologistItem_item__U1Fce",o="PsychologistItem_imgBorder__3vgHF",a="PsychologistItem_itemImage__gZkdD",l="PsychologistItem_itemTitle__ZheGp",c="PsychologistItem_itemName__mSS6V",m="PsychologistItem_itemMainData__RnyK0",d="PsychologistItem_spanItem__aQFKX",u="PsychologistItem_infoWrapper__RV86m",p="PsychologistItem_itemAbout__vke+B",h="PsychologistItem_readMoreBtn__G+5wN",f="PsychologistItem_itemData__G42Ff",v="PsychologistItem_priceSpan__udl7v",_="PsychologistItem_endWrapper__AwVNQ",x="PsychologistItem_btnHeart__q-OhP",j=n(2791),y="ItemMoreInfo_list__3Ufex",g="ItemMoreInfo_reviewBox__W8Cf6",w="ItemMoreInfo_reviewerLetterName__uk2JC",b="ItemMoreInfo_reviewer__OkI38",N="ItemMoreInfo_rating__V8uqR",I="ItemMoreInfo_comment__Bp2bl",C="ItemMoreInfo_reviewNameRateBox__8NWCA",L="ItemMoreInfo_reviewRate__-ErQ9",O="ItemMoreInfo_appointmentButton__YWq-d",k={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},E=new Uint8Array(16);function P(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(E)}for(var S=[],F=0;F<256;++F)S.push((F+256).toString(16).slice(1));function A(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return S[e[t+0]]+S[e[t+1]]+S[e[t+2]]+S[e[t+3]]+"-"+S[e[t+4]]+S[e[t+5]]+"-"+S[e[t+6]]+S[e[t+7]]+"-"+S[e[t+8]]+S[e[t+9]]+"-"+S[e[t+10]]+S[e[t+11]]+S[e[t+12]]+S[e[t+13]]+S[e[t+14]]+S[e[t+15]]}var Z,B,M=function(e,t,n){if(k.randomUUID&&!t&&!e)return k.randomUUID();var r=(e=e||{}).random||(e.rng||P)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var i=0;i<16;++i)t[n+i]=r[i];return t}return A(r)},R=["title","titleId"];function U(){return U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(this,arguments)}function W(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function D(e,t){var n=e.title,r=e.titleId,i=W(e,R);return j.createElement("svg",U({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?j.createElement("title",{id:r},n):null,Z||(Z=j.createElement("g",{clipPath:"url(#clip0_33_570)"},j.createElement("path",{d:"M6.20021 4.69703L8 1.28579L9.79979 4.69703C9.95896 4.9987 10.2491 5.20947 10.5851 5.26762L14.3856 5.92519L11.6975 8.69103C11.4598 8.93563 11.3489 9.27666 11.3975 9.61427L11.9465 13.4319L8.48537 11.7301C8.17929 11.5795 7.82071 11.5796 7.51463 11.7301L4.05348 13.4319L4.6025 9.61427C4.65105 9.27666 4.54024 8.93563 4.30252 8.69103L1.6144 5.92519L5.41486 5.26762C5.75095 5.20947 6.04104 4.9987 6.20021 4.69703ZM14.5177 5.78928L14.5175 5.78947L14.5177 5.78928ZM3.8834 13.5155C3.88344 13.5155 3.88349 13.5155 3.88353 13.5155L3.8834 13.5155Z",fill:"#FFC531",stroke:"#FFC531",strokeWidth:1.2}))),B||(B=j.createElement("defs",null,j.createElement("clipPath",{id:"clip0_33_570"},j.createElement("rect",{width:16,height:16,fill:"white"})))))}var q,V=j.forwardRef(D),T=(n.p,n(5437)),$="AppointmentForm_formTitle__Rtebs",G="AppointmentForm_formText__NQtht",Q="AppointmentForm_itemText__Cla3N",K="AppointmentForm_formItemName__9f1nU",Y="AppointmentForm_formWrapper__0qmVW",z="AppointmentForm_wrapper__t1jqJ",H="AppointmentForm_input__tcipe",J="AppointmentForm_errormessage__ldCQr",X="AppointmentForm_inputWrapper__rLc48",ee="AppointmentForm_inputError__G5VCn",te="AppointmentForm_buttonForm__gUMK3",ne=n(5705),re=n(8007),ie=n(2564),se=(n(5462),n(184)),oe=function(e){var t=e.psychologist,n=e.onClose,r=re.Ry({name:re.Z_().required(),number:re.Z_().matches(/^\+380\d{9}$/,"Phone number is not valid").required(),time:re.Z_().required(),email:re.Z_().email("Invalid email").required(),comment:re.Z_().required()});return(0,se.jsxs)("div",{style:{width:"472px"},children:[(0,se.jsx)("h3",{className:$,children:"Make an appointment with a psychologists"}),(0,se.jsx)("p",{className:G,children:"You are on the verge of changing your life for the better. Fill out the short form below to book your personal appointment with a professional psychologist. We guarantee confidentiality and respect for your privacy."}),(0,se.jsxs)("div",{style:{display:"flex",gap:"14px",marginBottom:"40px"},children:[(0,se.jsx)("img",{src:t.avatar_url,alt:t.name,width:"44px",height:"44px",style:{borderRadius:"15px"}}),(0,se.jsxs)("div",{children:[(0,se.jsx)("p",{className:Q,children:"Your psychologists"}),(0,se.jsx)("p",{className:K,children:t.name})]})]}),(0,se.jsx)(ne.J9,{initialValues:{name:"",number:"",time:"",email:"",comment:""},validationSchema:r,onSubmit:function(){ie.Am.success("Appointment with psychologist confirmed!"),n()},children:function(e){var t=e.errors,n=e.touched;return(0,se.jsxs)(ne.l0,{children:[(0,se.jsxs)("div",{className:Y,children:[(0,se.jsxs)("div",{className:z,children:[(0,se.jsx)("div",{className:"".concat(X," ").concat(t.name&&n.name?ee:""),children:(0,se.jsx)(ne.gN,{id:"name",type:"name",name:"name",placeholder:"Name",className:H})}),(0,se.jsx)(ne.Bc,{name:"name",component:"div",className:J})]}),(0,se.jsxs)("div",{style:{display:"flex",gap:"8px"},children:[(0,se.jsxs)("div",{className:z,style:{width:"232px"},children:[(0,se.jsx)("div",{className:"".concat(X," ").concat(t.number&&n.number?ee:""),children:(0,se.jsx)(ne.gN,{id:"number",type:"tel",name:"number",placeholder:"+380",className:H})}),(0,se.jsx)(ne.Bc,{name:"number",component:"div",className:J})]}),(0,se.jsxs)("div",{className:z,style:{width:"232px"},children:[(0,se.jsx)("div",{className:"".concat(X," ").concat(t.number&&n.number?ee:""),children:(0,se.jsx)(ne.gN,{id:"time",name:"time",type:"time",className:H})}),(0,se.jsx)(ne.Bc,{name:"time",component:"div",className:J})]})]}),(0,se.jsxs)("div",{className:z,children:[(0,se.jsx)("div",{className:"".concat(X," ").concat(t.email&&n.email?ee:""),children:(0,se.jsx)(ne.gN,{id:"email",type:"email",name:"email",placeholder:"Email",className:H})}),(0,se.jsx)(ne.Bc,{name:"email",component:"div",className:J})]}),(0,se.jsxs)("div",{className:z,children:[(0,se.jsx)("div",{style:{height:"116px"},className:"".concat(X," ").concat(t.email&&n.email?ee:""),children:(0,se.jsx)(ne.gN,{id:"comment",type:"text",name:"comment",placeholder:"Comment",className:H})}),(0,se.jsx)(ne.Bc,{name:"comment",component:"div",className:J})]})]}),(0,se.jsx)("button",{type:"submit",className:te,children:"Send"})]})}})]})},ae=function(e){var t=e.psychologist,n=t.reviews,r=(0,j.useState)(!1),s=(0,i.Z)(r,2),o=s[0],a=s[1],l=function(){a(!1),document.body.classList.remove("body-scroll-lock")};return(0,se.jsxs)("div",{children:[(0,se.jsx)("ul",{className:y,children:n.map((function(e){return(0,se.jsxs)("li",{children:[(0,se.jsxs)("div",{className:g,children:[(0,se.jsx)("p",{className:w,children:e.reviewer[0]}),(0,se.jsxs)("div",{className:C,children:[(0,se.jsx)("p",{className:b,children:e.reviewer}),(0,se.jsxs)("div",{className:L,children:[(0,se.jsx)(V,{}),(0,se.jsx)("p",{className:N,children:e.rating.toFixed(1)})]})]})]}),(0,se.jsx)("p",{className:I,children:e.comment})]},M())}))}),(0,se.jsx)("button",{type:"button",className:O,onClick:function(){a(!0),document.body.classList.add("body-scroll-lock")},children:"Make an appointment"}),o&&(0,se.jsx)(T.Z,{onClose:l,children:(0,se.jsx)(oe,{psychologist:t,onClose:l})})]})},le=["title","titleId"];function ce(){return ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ce.apply(this,arguments)}function me(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function de(e,t){var n=e.title,r=e.titleId,i=me(e,le);return j.createElement("svg",ce({width:26,height:26,viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?j.createElement("title",{id:r},n):null,q||(q=j.createElement("path",{d:"M22.5766 4.99416C22.0233 4.44058 21.3663 4.00144 20.6433 3.70184C19.9202 3.40223 19.1452 3.24802 18.3625 3.24802C17.5798 3.24802 16.8047 3.40223 16.0817 3.70184C15.3586 4.00144 14.7016 4.44058 14.1483 4.99416L13 6.14249L11.8516 4.99416C10.734 3.87649 9.21809 3.2486 7.63747 3.2486C6.05685 3.2486 4.54097 3.87649 3.4233 4.99416C2.30563 6.11183 1.67773 7.62771 1.67773 9.20833C1.67773 10.7889 2.30563 12.3048 3.4233 13.4225L4.57163 14.5708L13 22.9992L21.4283 14.5708L22.5766 13.4225C23.1302 12.8692 23.5693 12.2122 23.869 11.4891C24.1686 10.766 24.3228 9.99102 24.3228 9.20833C24.3228 8.42563 24.1686 7.65061 23.869 6.92753C23.5693 6.20445 23.1302 5.54748 22.5766 4.99416Z",stroke:"#191A15",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var ue,pe=j.forwardRef(de),he=(n.p,["title","titleId"]);function fe(){return fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fe.apply(this,arguments)}function ve(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function _e(e,t){var n=e.title,r=e.titleId,i=ve(e,he);return j.createElement("svg",fe({width:26,height:26,viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?j.createElement("title",{id:r},n):null,ue||(ue=j.createElement("path",{d:"M22.5766 4.99417C22.0233 4.44059 21.3663 4.00145 20.6433 3.70184C19.9202 3.40223 19.1452 3.24802 18.3625 3.24802C17.5798 3.24802 16.8047 3.40223 16.0817 3.70184C15.3586 4.00145 14.7016 4.44059 14.1483 4.99417L13 6.1425L11.8516 4.99417C10.734 3.8765 9.21809 3.2486 7.63747 3.2486C6.05685 3.2486 4.54097 3.8765 3.4233 4.99417C2.30563 6.11183 1.67773 7.62772 1.67773 9.20833C1.67773 10.789 2.30563 12.3048 3.4233 13.4225L4.57163 14.5708L13 22.9992L21.4283 14.5708L22.5766 13.4225C23.1302 12.8692 23.5693 12.2122 23.869 11.4891C24.1686 10.7661 24.3228 9.99103 24.3228 9.20833C24.3228 8.42564 24.1686 7.65061 23.869 6.92753C23.5693 6.20445 23.1302 5.54749 22.5766 4.99417Z",fill:"#54BE96",stroke:"#54BE96",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var xe=j.forwardRef(_e),je=(n.p,n(4420)),ye=n(156),ge=n(3541),we=function(e){var t=e.psychologist,n=(0,je.I0)(),r=(0,j.useState)(!1),y=(0,i.Z)(r,2),g=y[0],w=y[1],b=(0,j.useState)(!1),N=(0,i.Z)(b,2),I=N[0],C=N[1],L=(0,je.v9)(ye.Tc),O=(0,je.v9)(ge.dy),k=t.id,E=L.find((function(e){return e.id===k}));(0,j.useEffect)((function(){w(!!E)}),[n,E]);return(0,se.jsxs)("li",{className:s,children:[(0,se.jsxs)("div",{style:{display:"flex",gap:"24px"},children:[(0,se.jsx)("div",{className:o,children:(0,se.jsx)("img",{className:a,src:t.avatar_url,alt:t.name,width:"96px",height:"96px"})}),(0,se.jsxs)("div",{style:{marginLeft:"144px"},children:[(0,se.jsx)("p",{className:l,children:"Psychologist"}),(0,se.jsx)("p",{className:c,children:t.name}),(0,se.jsxs)("div",{className:u,children:[(0,se.jsxs)("p",{className:m,children:[(0,se.jsx)("span",{className:d,children:"Experience: "}),t.experience]}),(0,se.jsxs)("p",{className:m,children:[(0,se.jsx)("span",{className:d,children:"License: "}),t.license]}),(0,se.jsxs)("p",{className:m,children:[(0,se.jsx)("span",{className:d,children:"Specialization: "}),t.specialization]}),(0,se.jsxs)("p",{className:m,children:[(0,se.jsx)("span",{className:d,children:"Initial_consultation: "}),t.initial_consultation]})]}),(0,se.jsx)("p",{className:p,children:t.about}),I?null:(0,se.jsx)("button",{className:h,onClick:function(){C(!I)},children:"Read More"}),I&&(0,se.jsx)(ae,{psychologist:t})]})]}),(0,se.jsxs)("div",{className:_,children:[(0,se.jsx)(V,{}),(0,se.jsxs)("div",{style:{display:"flex"},children:[(0,se.jsxs)("p",{className:f,children:["Rating: ",t.rating]}),(0,se.jsxs)("p",{className:f,children:["Price / 1 hour:"," ",(0,se.jsxs)("span",{className:v,children:[t.price_per_hour,"$"]})]})]})]}),(0,se.jsx)("button",{className:x,type:"button",onClick:function(){O.currentUser?n(E?(0,ye.wz)(k):(0,ye.jX)(t)):ie.Am.warning("You must be registered to add to favorites!")},children:g?(0,se.jsx)(xe,{}):(0,se.jsx)(pe,{})})]})}},6881:function(e,t,n){n.d(t,{t:function(){return l}});var r=n(9439),i=n(2791),s="ScrollUp_scrollUp__4kCWi",o=n(9431),a=n(184),l=function(){var e=(0,i.useState)(!1),t=(0,r.Z)(e,2),n=t[0],l=t[1];(0,i.useEffect)((function(){var e=function(){l(window.scrollY>1200)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]);return(0,a.jsx)("div",{children:n&&(0,a.jsx)("div",{className:s,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:(0,a.jsx)(o.r,{})})})}},7015:function(e,t,n){n.d(t,{R:function(){return r}});var r=function(e,t){switch(t){case"A to Z":return e.slice().sort((function(e,t){return e.name.localeCompare(t.name)}));case"Z to A":return e.slice().sort((function(e,t){return t.name.localeCompare(e.name)}));case"Less than 10$":return e.filter((function(e){return e.price_per_hour<10}));case"Greater than 10$":return e.filter((function(e){return e.price_per_hour>10}));case"Popular":return e.slice().sort((function(e,t){return t.rating-e.rating}));case"Not popular":return e.slice().sort((function(e,t){return e.rating-t.rating}));default:return e}}}}]);
//# sourceMappingURL=526.b61d3883.chunk.js.map