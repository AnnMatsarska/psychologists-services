"use strict";(self.webpackChunkpsychologists_service=self.webpackChunkpsychologists_service||[]).push([[520],{4520:function(e,t,s){s.r(t),s.d(t,{default:function(){return V}});var n,r="PsychologistList_section__4Tzd+",i="PsychologistList_container__vYWsK",a="PsychologistList_list__+petu",c=s(2791),l=s(4420),o=s(4139),u=s(1413),m=s(2685),h=s(77),p={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},d=new Uint8Array(16);function _(){if(!n&&!(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(d)}for(var f=[],g=0;g<256;++g)f.push((g+256).toString(16).slice(1));function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return f[e[t+0]]+f[e[t+1]]+f[e[t+2]]+f[e[t+3]]+"-"+f[e[t+4]]+f[e[t+5]]+"-"+f[e[t+6]]+f[e[t+7]]+"-"+f[e[t+8]]+f[e[t+9]]+"-"+f[e[t+10]]+f[e[t+11]]+f[e[t+12]]+f[e[t+13]]+f[e[t+14]]+f[e[t+15]]}var v,j,x=function(e,t,s){if(p.randomUUID&&!t&&!e)return p.randomUUID();var n=(e=e||{}).random||(e.rng||_)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){s=s||0;for(var r=0;r<16;++r)t[s+r]=n[r];return t}return y(n)},I="PsychologistItem_item__U1Fce",N="PsychologistItem_imgBorder__3vgHF",b="PsychologistItem_itemImage__gZkdD",P="PsychologistItem_itemTitle__ZheGp",w="PsychologistItem_itemName__mSS6V",L="PsychologistItem_itemMainData__RnyK0",O="PsychologistItem_spanItem__aQFKX",U="PsychologistItem_itemAbout__vke+B",E="PsychologistItem_readMoreBtn__G+5wN",C="PsychologistItem_itemData__G42Ff",k="PsychologistItem_priceSpan__udl7v",F=["title","titleId"];function D(){return D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},D.apply(this,arguments)}function S(e,t){if(null==e)return{};var s,n,r=function(e,t){if(null==e)return{};var s,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}function M(e,t){var s=e.title,n=e.titleId,r=S(e,F);return c.createElement("svg",D({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},r),s?c.createElement("title",{id:n},s):null,v||(v=c.createElement("g",{clipPath:"url(#clip0_33_570)"},c.createElement("path",{d:"M6.20021 4.69703L8 1.28579L9.79979 4.69703C9.95896 4.9987 10.2491 5.20947 10.5851 5.26762L14.3856 5.92519L11.6975 8.69103C11.4598 8.93563 11.3489 9.27666 11.3975 9.61427L11.9465 13.4319L8.48537 11.7301C8.17929 11.5795 7.82071 11.5796 7.51463 11.7301L4.05348 13.4319L4.6025 9.61427C4.65105 9.27666 4.54024 8.93563 4.30252 8.69103L1.6144 5.92519L5.41486 5.26762C5.75095 5.20947 6.04104 4.9987 6.20021 4.69703ZM14.5177 5.78928L14.5175 5.78947L14.5177 5.78928ZM3.8834 13.5155C3.88344 13.5155 3.88349 13.5155 3.88353 13.5155L3.8834 13.5155Z",fill:"#FFC531",stroke:"#FFC531",strokeWidth:1.2}))),j||(j=c.createElement("defs",null,c.createElement("clipPath",{id:"clip0_33_570"},c.createElement("rect",{width:16,height:16,fill:"white"})))))}var R=c.forwardRef(M),Z=(s.p,s(184)),B=function(e){var t=e.psychologist;return(0,Z.jsxs)("li",{className:I,children:[(0,Z.jsx)("div",{className:N,children:(0,Z.jsx)("img",{className:b,src:t.avatar_url,alt:t.name,width:"96px",height:"96px"})}),(0,Z.jsx)("p",{className:P,children:"Psychologist"}),(0,Z.jsx)("p",{className:w,children:t.name}),(0,Z.jsxs)("p",{className:L,children:[(0,Z.jsx)("span",{className:O,children:"Experience: "}),t.experience]}),(0,Z.jsxs)("p",{className:L,children:[(0,Z.jsx)("span",{className:O,children:"License: "}),t.license]}),(0,Z.jsxs)("p",{className:L,children:[(0,Z.jsx)("span",{className:O,children:"Specialization: "}),t.specialization]}),(0,Z.jsxs)("p",{className:L,children:[(0,Z.jsx)("span",{className:O,children:"Initial_consultation: "}),t.initial_consultation]}),(0,Z.jsx)("p",{className:U,children:t.about}),(0,Z.jsx)("button",{className:E,children:"Read More"}),(0,Z.jsx)(R,{}),(0,Z.jsxs)("p",{className:C,children:["Rating: ",t.rating]}),(0,Z.jsxs)("p",{className:C,children:["Price / 1 hour:"," ",(0,Z.jsxs)("span",{className:k,children:[t.price_per_hour,"$"]})]})]})},G=function(){var e=(0,l.I0)(),t=(0,l.v9)(o.ql);return(0,c.useEffect)((function(){e((function(e){var t=(0,m.jM)((0,m.iH)(h.db),(function(t){var s=t.val(),n=(s?Object.values(s)[0]:[]).map((function(e){return(0,u.Z)((0,u.Z)({},e),{},{id:x()})}));e((0,o.GL)(n))}));return function(){t()}}))}),[e]),(0,Z.jsx)("section",{className:r,children:(0,Z.jsx)("div",{className:i,children:(0,Z.jsx)("ul",{className:a,children:t.map((function(e){return(0,Z.jsx)(B,{psychologist:e},e.id)}))})})})},V=function(){return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(G,{})})}}}]);
//# sourceMappingURL=520.f8fa8402.chunk.js.map