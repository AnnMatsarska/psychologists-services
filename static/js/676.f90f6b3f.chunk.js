"use strict";(self.webpackChunkpsychologists_service=self.webpackChunkpsychologists_service||[]).push([[676],{9431:function(e,t,n){n.d(t,{r:function(){return c}});var r,i=n(2791),o=["title","titleId"];function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function a(e,t){var n=e.title,a=e.titleId,c=l(e,o);return i.createElement("svg",s({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},c),n?i.createElement("title",{id:a},n):null,r||(r=i.createElement("path",{d:"M5 7.5L10 12.5L15 7.5",stroke:"#FBFBFB",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var c=i.forwardRef(a);n.p},6184:function(e,t,n){n.d(t,{w:function(){return f}});var r=n(2791),i="Filter_filterLabel__+pnW-",o=n(9439),s=n(9431),l="Dropdown_dropdown__QEFz6",a="Dropdown_dropBtn__HrH0-",c="Dropdown_list__T+o5-",m="Dropdown_rotatedIcon__RK9oK",u=n(184),d=function(e){var t=e.defaultOption,n=e.onSelect,i=e.children,d=(0,r.useState)(!1),p=(0,o.Z)(d,2),h=p[0],f=p[1],_=(0,r.useState)(t),v=(0,o.Z)(_,2),x=v[0],j=v[1],y=(0,r.useRef)(null),g=function(e){y.current&&!y.current.contains(e.target)&&f(!1)};return(0,r.useEffect)((function(){var e=function(e){"Escape"===e.code&&f(!1)};return window.addEventListener("keydown",e),document.addEventListener("mousedown",g),function(){document.removeEventListener("mousedown",g),window.removeEventListener("keydown",e)}}),[]),(0,r.useEffect)((function(){j(t)}),[t]),(0,u.jsxs)("div",{className:l,ref:y,children:[(0,u.jsxs)("button",{className:a,onClick:function(){return f(!h)},children:[x,(0,u.jsx)(s.r,{className:h?m:null})]}),h&&(0,u.jsx)("ul",{className:c,children:r.Children.map(i,(function(e){return(0,u.jsx)("li",{onClick:function(){return t=e.props.value,j(t),f(!1),void n(t);var t},children:e},e.props.value)}))})]})},p=n(4420),h=n(4139),f=function(){var e=(0,p.I0)();return(0,u.jsxs)("div",{children:[(0,u.jsx)("label",{className:i,children:"Filters"}),(0,u.jsx)(d,{defaultOption:"Show all",onSelect:function(t){e((0,h.Tv)(t))},children:["A to Z","Z to A","Less than 10$","Greater than 10$","Popular","Not popular","Show all"].map((function(e){return(0,u.jsx)("span",{value:e,children:e},e)}))})]})}},8110:function(e,t,n){n.d(t,{E:function(){return Ze}});var r,i=n(9439),o="PsychologistItem_item__U1Fce",s="PsychologistItem_imgBorder__3vgHF",l="PsychologistItem_itemImage__gZkdD",a="PsychologistItem_itemTitle__ZheGp",c="PsychologistItem_itemName__mSS6V",m="PsychologistItem_itemMainData__RnyK0",u="PsychologistItem_spanItem__aQFKX",d="PsychologistItem_infoWrapper__RV86m",p="PsychologistItem_itemAbout__vke+B",h="PsychologistItem_readMoreBtn__G+5wN",f="PsychologistItem_itemData__G42Ff",_="PsychologistItem_priceSpan__udl7v",v="PsychologistItem_endWrapper__AwVNQ",x="PsychologistItem_btnHeart__q-OhP",j=n(2791),y="ItemMoreInfo_list__3Ufex",g="ItemMoreInfo_reviewBox__W8Cf6",w="ItemMoreInfo_reviewerLetterName__uk2JC",b="ItemMoreInfo_reviewer__OkI38",N="ItemMoreInfo_rating__V8uqR",I="ItemMoreInfo_comment__Bp2bl",C="ItemMoreInfo_reviewNameRateBox__8NWCA",O="ItemMoreInfo_reviewRate__-ErQ9",L="ItemMoreInfo_appointmentButton__YWq-d",k={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},E=new Uint8Array(16);function P(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(E)}for(var F=[],S=0;S<256;++S)F.push((S+256).toString(16).slice(1));function A(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return F[e[t+0]]+F[e[t+1]]+F[e[t+2]]+F[e[t+3]]+"-"+F[e[t+4]]+F[e[t+5]]+"-"+F[e[t+6]]+F[e[t+7]]+"-"+F[e[t+8]]+F[e[t+9]]+"-"+F[e[t+10]]+F[e[t+11]]+F[e[t+12]]+F[e[t+13]]+F[e[t+14]]+F[e[t+15]]}var Z,B,M=function(e,t,n){if(k.randomUUID&&!t&&!e)return k.randomUUID();var r=(e=e||{}).random||(e.rng||P)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var i=0;i<16;++i)t[n+i]=r[i];return t}return A(r)},R=["title","titleId"];function U(){return U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(this,arguments)}function W(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function D(e,t){var n=e.title,r=e.titleId,i=W(e,R);return j.createElement("svg",U({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?j.createElement("title",{id:r},n):null,Z||(Z=j.createElement("g",{clipPath:"url(#clip0_33_570)"},j.createElement("path",{d:"M6.20021 4.69703L8 1.28579L9.79979 4.69703C9.95896 4.9987 10.2491 5.20947 10.5851 5.26762L14.3856 5.92519L11.6975 8.69103C11.4598 8.93563 11.3489 9.27666 11.3975 9.61427L11.9465 13.4319L8.48537 11.7301C8.17929 11.5795 7.82071 11.5796 7.51463 11.7301L4.05348 13.4319L4.6025 9.61427C4.65105 9.27666 4.54024 8.93563 4.30252 8.69103L1.6144 5.92519L5.41486 5.26762C5.75095 5.20947 6.04104 4.9987 6.20021 4.69703ZM14.5177 5.78928L14.5175 5.78947L14.5177 5.78928ZM3.8834 13.5155C3.88344 13.5155 3.88349 13.5155 3.88353 13.5155L3.8834 13.5155Z",fill:"#FFC531",stroke:"#FFC531",strokeWidth:1.2}))),B||(B=j.createElement("defs",null,j.createElement("clipPath",{id:"clip0_33_570"},j.createElement("rect",{width:16,height:16,fill:"white"})))))}var V,q,T=j.forwardRef(D),Q=(n.p,n(5437)),G="AppointmentForm_formTitle__Rtebs",Y="AppointmentForm_formText__NQtht",$="AppointmentForm_itemText__Cla3N",H="AppointmentForm_formItemName__9f1nU",K="AppointmentForm_formWrapper__0qmVW",z="AppointmentForm_wrapper__t1jqJ",J="AppointmentForm_input__tcipe",X="AppointmentForm_errormessage__ldCQr",ee="AppointmentForm_inputWrapper__rLc48",te="AppointmentForm_inputError__G5VCn",ne="AppointmentForm_buttonForm__gUMK3",re="AppointmentForm_timeDropdownHeader__f8mY3",ie="AppointmentForm_timeDropdown__qNFA9",oe="AppointmentForm_timeDropdownList__hLy46",se="AppointmentForm_timeOption__TbwF-",le="AppointmentForm_time__1yrBQ",ae=n(5705),ce=n(8007),me=["title","titleId"];function ue(){return ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ue.apply(this,arguments)}function de(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function pe(e,t){var n=e.title,r=e.titleId,i=de(e,me);return j.createElement("svg",ue({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?j.createElement("title",{id:r},n):null,V||(V=j.createElement("g",{clipPath:"url(#clip0_33_527)"},j.createElement("path",{d:"M9.99996 18.3333C14.6023 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6023 1.66667 9.99996 1.66667C5.39759 1.66667 1.66663 5.39763 1.66663 10C1.66663 14.6024 5.39759 18.3333 9.99996 18.3333Z",stroke:"#191A15",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),j.createElement("path",{d:"M10 5V10L13.3333 11.6667",stroke:"#191A15",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}))),q||(q=j.createElement("defs",null,j.createElement("clipPath",{id:"clip0_33_527"},j.createElement("rect",{width:20,height:20,fill:"white"})))))}var he,fe=j.forwardRef(pe),_e=(n.p,n(184)),ve=function(e){var t=e.field,n=e.form,r=(0,j.useState)(!1),o=(0,i.Z)(r,2),s=o[0],l=o[1],a=(0,j.useState)(""),c=(0,i.Z)(a,2),m=c[0],u=c[1],d=Array.from({length:48},(function(e,t){var n=Math.floor(t/2),r=t%2===0?"00":"30";return"".concat(String(n).padStart(2,"0"),":").concat(r)})),p=function(e){var t=e.split(":"),n=(0,i.Z)(t,2);return{hours:n[0],minutes:n[1]}};return(0,_e.jsxs)(_e.Fragment,{children:[(0,_e.jsxs)("div",{className:re,onClick:function(){return l(!s)},type:"button",children:[m?(0,_e.jsxs)("div",{children:[(0,_e.jsx)("span",{className:le,children:p(m).hours}),":",(0,_e.jsx)("span",{className:le,children:p(m).minutes})]}):(0,_e.jsx)("span",{children:"00 : 00"}),(0,_e.jsx)(fe,{})]}),s&&(0,_e.jsx)(_e.Fragment,{children:(0,_e.jsxs)("div",{className:ie,children:[(0,_e.jsx)("p",{style:{marginBottom:"16px"},children:"Meeting time"}),(0,_e.jsx)("ul",{className:oe,children:d.map((function(e){return(0,_e.jsxs)("li",{className:se,onClick:function(){return function(e){u(e),n.setFieldValue(t.name,e),l(!1)}(e)},children:[(0,_e.jsx)("span",{className:le,children:p(e).hours}),":",(0,_e.jsx)("span",{className:le,children:p(e).minutes})]},e)}))})]})})]})},xe=n(2564),je=(n(5462),function(e){var t=e.psychologist,n=e.onClose,r=ce.Ry({name:ce.Z_().required(),number:ce.Z_().matches(/^\+380\d{9}$/,"Phone number is not valid").required(),time:ce.Z_().required(),email:ce.Z_().email("Invalid email").required(),comment:ce.Z_().required()});return(0,_e.jsxs)("div",{style:{width:"472px"},children:[(0,_e.jsx)("h3",{className:G,children:"Make an appointment with a psychologists"}),(0,_e.jsx)("p",{className:Y,children:"You are on the verge of changing your life for the better. Fill out the short form below to book your personal appointment with a professional psychologist. We guarantee confidentiality and respect for your privacy."}),(0,_e.jsxs)("div",{style:{display:"flex",gap:"14px",marginBottom:"40px"},children:[(0,_e.jsx)("img",{src:t.avatar_url,alt:t.name,width:"44px",height:"44px",style:{borderRadius:"15px"}}),(0,_e.jsxs)("div",{children:[(0,_e.jsx)("p",{className:$,children:"Your psychologists"}),(0,_e.jsx)("p",{className:H,children:t.name})]})]}),(0,_e.jsx)(ae.J9,{initialValues:{name:"",number:"",time:"",email:"",comment:""},validationSchema:r,onSubmit:function(){xe.Am.success("Appointment with psychologist confirmed!"),n()},children:function(e){var t=e.errors,n=e.touched;return(0,_e.jsxs)(ae.l0,{children:[(0,_e.jsxs)("div",{className:K,children:[(0,_e.jsxs)("div",{className:z,children:[(0,_e.jsx)("div",{className:"".concat(ee," ").concat(t.name&&n.name?te:""),children:(0,_e.jsx)(ae.gN,{id:"name",type:"name",name:"name",placeholder:"Name",className:J})}),(0,_e.jsx)(ae.Bc,{name:"name",component:"div",className:X})]}),(0,_e.jsxs)("div",{style:{display:"flex",gap:"8px"},children:[(0,_e.jsxs)("div",{className:z,style:{width:"232px"},children:[(0,_e.jsx)("div",{className:"".concat(ee," ").concat(t.number&&n.number?te:""),children:(0,_e.jsx)(ae.gN,{id:"number",type:"tel",name:"number",placeholder:"+380",className:J})}),(0,_e.jsx)(ae.Bc,{name:"number",component:"div",className:X})]}),(0,_e.jsxs)("div",{className:z,style:{width:"232px"},children:[(0,_e.jsx)("div",{className:"".concat(ee," ").concat(t.time&&n.time?te:""),children:(0,_e.jsx)(ae.gN,{name:"time",children:function(e){var t=e.field,n=e.form;return(0,_e.jsx)(ve,{field:t,form:n})}})}),(0,_e.jsx)(ae.Bc,{name:"time",component:"div",className:X})]})]}),(0,_e.jsxs)("div",{className:z,children:[(0,_e.jsx)("div",{className:"".concat(ee," ").concat(t.email&&n.email?te:""),children:(0,_e.jsx)(ae.gN,{id:"email",type:"email",name:"email",placeholder:"Email",className:J})}),(0,_e.jsx)(ae.Bc,{name:"email",component:"div",className:X})]}),(0,_e.jsxs)("div",{className:z,children:[(0,_e.jsx)("div",{style:{height:"116px"},className:"".concat(ee," ").concat(t.email&&n.email?te:""),children:(0,_e.jsx)(ae.gN,{id:"comment",type:"text",name:"comment",placeholder:"Comment",className:J})}),(0,_e.jsx)(ae.Bc,{name:"comment",component:"div",className:X})]})]}),(0,_e.jsx)("button",{type:"submit",className:ne,children:"Send"})]})}})]})}),ye=function(e){var t=e.psychologist,n=t.reviews,r=(0,j.useState)(!1),o=(0,i.Z)(r,2),s=o[0],l=o[1],a=function(){l(!1),document.body.classList.remove("body-scroll-lock")};return(0,_e.jsxs)("div",{children:[(0,_e.jsx)("ul",{className:y,children:n.map((function(e){return(0,_e.jsxs)("li",{children:[(0,_e.jsxs)("div",{className:g,children:[(0,_e.jsx)("p",{className:w,children:e.reviewer[0]}),(0,_e.jsxs)("div",{className:C,children:[(0,_e.jsx)("p",{className:b,children:e.reviewer}),(0,_e.jsxs)("div",{className:O,children:[(0,_e.jsx)(T,{}),(0,_e.jsx)("p",{className:N,children:e.rating.toFixed(1)})]})]})]}),(0,_e.jsx)("p",{className:I,children:e.comment})]},M())}))}),(0,_e.jsx)("button",{type:"button",className:L,onClick:function(){l(!0),document.body.classList.add("body-scroll-lock")},children:"Make an appointment"}),s&&(0,_e.jsx)(Q.Z,{onClose:a,children:(0,_e.jsx)(je,{psychologist:t,onClose:a})})]})},ge=["title","titleId"];function we(){return we=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},we.apply(this,arguments)}function be(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Ne(e,t){var n=e.title,r=e.titleId,i=be(e,ge);return j.createElement("svg",we({width:26,height:26,viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?j.createElement("title",{id:r},n):null,he||(he=j.createElement("path",{d:"M22.5766 4.99416C22.0233 4.44058 21.3663 4.00144 20.6433 3.70184C19.9202 3.40223 19.1452 3.24802 18.3625 3.24802C17.5798 3.24802 16.8047 3.40223 16.0817 3.70184C15.3586 4.00144 14.7016 4.44058 14.1483 4.99416L13 6.14249L11.8516 4.99416C10.734 3.87649 9.21809 3.2486 7.63747 3.2486C6.05685 3.2486 4.54097 3.87649 3.4233 4.99416C2.30563 6.11183 1.67773 7.62771 1.67773 9.20833C1.67773 10.7889 2.30563 12.3048 3.4233 13.4225L4.57163 14.5708L13 22.9992L21.4283 14.5708L22.5766 13.4225C23.1302 12.8692 23.5693 12.2122 23.869 11.4891C24.1686 10.766 24.3228 9.99102 24.3228 9.20833C24.3228 8.42563 24.1686 7.65061 23.869 6.92753C23.5693 6.20445 23.1302 5.54748 22.5766 4.99416Z",stroke:"#191A15",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var Ie,Ce=j.forwardRef(Ne),Oe=(n.p,["title","titleId"]);function Le(){return Le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Le.apply(this,arguments)}function ke(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Ee(e,t){var n=e.title,r=e.titleId,i=ke(e,Oe);return j.createElement("svg",Le({width:26,height:26,viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?j.createElement("title",{id:r},n):null,Ie||(Ie=j.createElement("path",{d:"M22.5766 4.99417C22.0233 4.44059 21.3663 4.00145 20.6433 3.70184C19.9202 3.40223 19.1452 3.24802 18.3625 3.24802C17.5798 3.24802 16.8047 3.40223 16.0817 3.70184C15.3586 4.00145 14.7016 4.44059 14.1483 4.99417L13 6.1425L11.8516 4.99417C10.734 3.8765 9.21809 3.2486 7.63747 3.2486C6.05685 3.2486 4.54097 3.8765 3.4233 4.99417C2.30563 6.11183 1.67773 7.62772 1.67773 9.20833C1.67773 10.789 2.30563 12.3048 3.4233 13.4225L4.57163 14.5708L13 22.9992L21.4283 14.5708L22.5766 13.4225C23.1302 12.8692 23.5693 12.2122 23.869 11.4891C24.1686 10.7661 24.3228 9.99103 24.3228 9.20833C24.3228 8.42564 24.1686 7.65061 23.869 6.92753C23.5693 6.20445 23.1302 5.54749 22.5766 4.99417Z",fill:"#54BE96",stroke:"#54BE96",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var Pe=j.forwardRef(Ee),Fe=(n.p,n(4420)),Se=n(156),Ae=n(3541),Ze=function(e){var t=e.psychologist,n=(0,Fe.I0)(),r=(0,j.useState)(!1),y=(0,i.Z)(r,2),g=y[0],w=y[1],b=(0,j.useState)(!1),N=(0,i.Z)(b,2),I=N[0],C=N[1],O=(0,Fe.v9)(Se.Tc),L=(0,Fe.v9)(Ae.dy),k=t.id,E=O.find((function(e){return e.id===k}));(0,j.useEffect)((function(){w(!!E)}),[n,E]);return(0,_e.jsxs)("li",{className:o,children:[(0,_e.jsxs)("div",{style:{display:"flex",gap:"24px"},children:[(0,_e.jsx)("div",{className:s,children:(0,_e.jsx)("img",{className:l,src:t.avatar_url,alt:t.name,width:"96px",height:"96px"})}),(0,_e.jsxs)("div",{style:{marginLeft:"144px"},children:[(0,_e.jsx)("p",{className:a,children:"Psychologist"}),(0,_e.jsx)("p",{className:c,children:t.name}),(0,_e.jsxs)("div",{className:d,children:[(0,_e.jsxs)("p",{className:m,children:[(0,_e.jsx)("span",{className:u,children:"Experience: "}),t.experience]}),(0,_e.jsxs)("p",{className:m,children:[(0,_e.jsx)("span",{className:u,children:"License: "}),t.license]}),(0,_e.jsxs)("p",{className:m,children:[(0,_e.jsx)("span",{className:u,children:"Specialization: "}),t.specialization]}),(0,_e.jsxs)("p",{className:m,children:[(0,_e.jsx)("span",{className:u,children:"Initial_consultation: "}),t.initial_consultation]})]}),(0,_e.jsx)("p",{className:p,children:t.about}),I?null:(0,_e.jsx)("button",{className:h,onClick:function(){C(!I)},children:"Read More"}),I&&(0,_e.jsx)(ye,{psychologist:t})]})]}),(0,_e.jsxs)("div",{className:v,children:[(0,_e.jsx)(T,{}),(0,_e.jsxs)("div",{style:{display:"flex"},children:[(0,_e.jsxs)("p",{className:f,children:["Rating: ",t.rating]}),(0,_e.jsxs)("p",{className:f,children:["Price / 1 hour:"," ",(0,_e.jsxs)("span",{className:_,children:[t.price_per_hour,"$"]})]})]})]}),(0,_e.jsx)("button",{className:x,type:"button",onClick:function(){L.currentUser?n(E?(0,Se.wz)(k):(0,Se.jX)(t)):xe.Am.warning("You must be registered to add to favorites!")},children:g?(0,_e.jsx)(Pe,{}):(0,_e.jsx)(Ce,{})})]})}},6881:function(e,t,n){n.d(t,{t:function(){return a}});var r=n(9439),i=n(2791),o="ScrollUp_scrollUp__4kCWi",s=n(9431),l=n(184),a=function(){var e=(0,i.useState)(!1),t=(0,r.Z)(e,2),n=t[0],a=t[1];(0,i.useEffect)((function(){var e=function(){a(window.scrollY>1200)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]);return(0,l.jsx)("div",{children:n&&(0,l.jsx)("div",{className:o,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:(0,l.jsx)(s.r,{})})})}},7015:function(e,t,n){n.d(t,{R:function(){return r}});var r=function(e,t){switch(t){case"A to Z":return e.slice().sort((function(e,t){return e.name.localeCompare(t.name)}));case"Z to A":return e.slice().sort((function(e,t){return t.name.localeCompare(e.name)}));case"Less than 10$":return e.filter((function(e){return e.price_per_hour<10}));case"Greater than 10$":return e.filter((function(e){return e.price_per_hour>10}));case"Popular":return e.slice().sort((function(e,t){return t.rating-e.rating}));case"Not popular":return e.slice().sort((function(e,t){return e.rating-t.rating}));default:return e}}}}]);
//# sourceMappingURL=676.f90f6b3f.chunk.js.map