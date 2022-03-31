"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[23],{31284:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(68870),i=t(39504),a=t(20890),l=t(3992),s=t(37503),o=t(25617),c=t(42320),u=t(31148),d=t(80184);function h(e){var n=e.setKey,t=e.setNumKey,h=(0,c.Z)(u.y.get(n),[n]);if(!h)return null;var f=h.setEffectDesc(t),x=h.setEffectDocument(t);return(0,d.jsxs)(r.Z,{display:"flex",flexDirection:"column",gap:1,children:[(0,d.jsx)(l.Z,{children:(0,d.jsx)(i.Z,{children:(0,d.jsxs)(a.Z,{children:[(0,d.jsxs)(o.Z,{color:"success",children:[t,"-Set"]})," ",f]})})}),x?(0,d.jsx)(s.Z,{sections:x}):null]})}},36944:function(e,n,t){t.d(n,{Z:function(){return k},d:function(){return R}});var r,i,a,l,s=t(1413),o=t(30168),c=t(45987),u=t(63204),d=t(49670),h=t(23786),f=t(57064),x=t(20890),Z=t(94721),v=t(72791),p=t(22020),m=t(947),j=t(3997),g=t(42320),y=t(33890),b=t(2380),C=t(80184),P=["value","onChange","unSelectText","unSelectIcon","inventory","noUnselect","filter"];function k(e){var n,t=e.value,k=e.onChange,w=e.unSelectText,D=e.unSelectIcon,S=e.inventory,I=void 0!==S&&S,_=e.noUnselect,E=void 0!==_&&_,A=e.filter,O=void 0===A?function(){return!0}:A,M=(0,c.Z)(e,P),V=(0,p.$)("ui").t,z=(0,v.useContext)(j.t).database,K=(0,g.Z)(m.ZP.getAll,[]),L=(0,g.Z)(m.ZP.get(t),[t]),N=z._getCharKeys().filter((function(e){return(null===K||void 0===K?void 0:K[e])&&O(K[e],e)})).sort();return(0,C.jsxs)(y.Z,(0,s.Z)((0,s.Z)({},M),{},{title:null!==(n=null===L||void 0===L?void 0:L.name)&&void 0!==n?n:I?V(r||(r=(0,o.Z)(["inventory"]))):null!==w&&void 0!==w?w:V(i||(i=(0,o.Z)(["unselect"]))),color:t?"success":"primary",startIcon:null!==L&&void 0!==L&&L.thumbImg?(0,C.jsx)(b.Z,{src:L.thumbImgSide}):I?(0,C.jsx)(u.Z,{}):null!==D&&void 0!==D?D:(0,C.jsx)(d.Z,{}),children:[!E&&(I?(0,C.jsxs)(h.Z,{onClick:function(){return k("")},selected:""===t,disabled:""===t,children:[(0,C.jsx)(f.Z,{children:(0,C.jsx)(u.Z,{})}),(0,C.jsx)(x.Z,{variant:"inherit",noWrap:!0,children:V(a||(a=(0,o.Z)(["inventory"])))})]}):(0,C.jsxs)(h.Z,{onClick:function(){return k("")},selected:""===t,disabled:""===t,children:[(0,C.jsx)(f.Z,{children:(0,C.jsx)(d.Z,{})}),(0,C.jsx)(x.Z,{variant:"inherit",noWrap:!0,children:V(l||(l=(0,o.Z)(["unselect"])))})]})),!E&&(0,C.jsx)(Z.Z,{},"div"),!!K&&R(K,N,k,t)]}))}function R(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return n.map((function(n){var i,a;return(0,C.jsxs)(h.Z,{onClick:function(){return t(n)},selected:r===n,disabled:r===n,children:[(0,C.jsx)(f.Z,{children:(0,C.jsx)(b.Z,{src:null===(i=e[n])||void 0===i?void 0:i.thumbImgSide})}),(0,C.jsx)(x.Z,{variant:"inherit",noWrap:!0,children:null===e||void 0===e||null===(a=e[n])||void 0===a?void 0:a.name})]},n)}))}},71946:function(e,n,t){t.d(n,{Z:function(){return j}});var r=t(29439),i=t(78593),a=t(9585),l=t(94721),s=t(39504),o=t(52791),c=t(72791),u=t(3992),d=t(14763),h=t(55942),f=t(2693),x=t(8430),Z=t(78661),v=t(42320),p=t(60393),m=t(80184);function j(){var e=(0,c.useContext)(f.R).data,n=(0,x.U)(e);return(0,m.jsx)(o.Z,{sx:{mr:-1,mb:-1},children:(0,m.jsx)(i.ZP,{columns:{xs:1,sm:2,md:3},spacing:1,children:n.map((function(e){var n=(0,r.Z)(e,2),t=n[0],i=n[1];return(0,m.jsx)(g,{displayNs:i,sectionKey:t},t)}))})})}function g(e){var n=e.displayNs,t=e.sectionKey,i=(0,c.useContext)(f.R),o=i.data,j=i.oldData,g=(0,v.Z)((0,x.f)(o,t),[o,t]),y=(0,c.useMemo)((function(){return(0,p.xh)(n,(function(e,n){return(0,Z.UF)(["display",t,n])}))}),[n,t]);if(!g||Object.values(n).every((function(e){return e.isEmpty})))return null;var b=g.title,C=g.icon,P=g.action;return(0,m.jsxs)(u.Z,{children:[(0,m.jsx)(a.Z,{avatar:C&&(0,m.jsx)(h.Z,{size:2,sx:{m:-1},src:C}),title:b,action:P,titleTypographyProps:{variant:"subtitle1"}}),(0,m.jsx)(l.Z,{}),(0,m.jsx)(s.Z,{children:Object.entries(n).map((function(e){var n=(0,r.Z)(e,2),t=n[0],i=n[1];return(0,m.jsx)(d.JW,{node:i,oldValue:j?j.get(y[t]).value:void 0},t)}))})]})}},2380:function(e,n,t){var r=(0,t(93457).Z)("img")((function(e){var n=e.theme;return{display:"inline-block",width:"auto",height:"2.3em",lineHeight:1,verticalAlign:"text-bottom",marginTop:n.spacing(-3),marginLeft:n.spacing(-1.25),marginRight:n.spacing(-1),marginBottom:n.spacing(-1)}}));n.Z=r},10600:function(e,n,t){t.d(n,{CC:function(){return Z},ZP:function(){return v}});var r=t(29439),i=t(1413),a=t(45987),l=t(66934),s=t(28e3),o=t(24518),c=t(72791),u=t(80184),d=["children","disableRipple","disableFocusRipple","disableTouchRipple"],h=["value","onChange","disabled","float"],f=(0,l.ZP)(s.ZP)((function(e){var n=e.theme;return{backgroundColor:n.palette.primary.main,transition:"all 0.5s ease","&:hover":{backgroundColor:n.palette.primary.dark},"&.Mui-focused":{backgroundColor:n.palette.primary.dark},"&.Mui-disabled":{backgroundColor:n.palette.primary.dark}}})),x=(0,l.ZP)(o.Z)((function(e){return{backgroundColor:e.theme.palette.primary.main,padding:0,overflow:"hidden",div:{width:"100%",height:"100%"}}}));function Z(e){var n=e.children,t=(e.disableRipple,e.disableFocusRipple,e.disableTouchRipple,(0,a.Z)(e,d));return(0,u.jsx)(x,(0,i.Z)((0,i.Z)({disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0},t),{},{children:n}))}function v(e){var n=e.value,t=void 0===n?0:n,l=e.onChange,s=e.disabled,o=void 0!==s&&s,d=e.float,x=void 0!==d&&d,Z=(0,a.Z)(e,h),v=(0,c.useState)(t),p=(0,r.Z)(v,2),m=p[0],j=p[1],g=(0,c.useState)(!1),y=(0,r.Z)(g,2),b=y[0],C=y[1],P=(0,c.useMemo)((function(){return x?parseFloat:parseInt}),[x]),k=(0,c.useCallback)((function(){l(m),C(!1)}),[l,m,C]),R=(0,c.useCallback)((function(){C(!0)}),[C]);(0,c.useEffect)((function(){return j(t)}),[t,j]);var w=(0,c.useCallback)((function(e){return j(P(e.target.value)||0)}),[j,P]),D=(0,c.useCallback)((function(e){return"Enter"===e.key&&k()}),[k]);return(0,u.jsx)(f,(0,i.Z)({value:b&&!m?"":m,"aria-label":"custom-input",type:"number",inputProps:{step:x?.1:1},onChange:w,onBlur:k,onFocus:R,disabled:o,onKeyDown:D},Z))}},37503:function(e,n,t){t.d(n,{Z:function(){return P}});var r=t(68870),i=t(39504),a=t(9585),l=t(94721),s=t(15021),o=t(72791),c=t(2693),u=t(60393),d=t(29439),h=t(72247),f=t(9912),x=t(24518),Z=t(23786),v=t(33890),p=t(25617),m=t(80184);function j(e){var n=e.conditional,t=e.conditionalValue,r=e.disabled,i=void 0!==r&&r,a=(0,o.useContext)(c.R),s=a.character,j=a.characterDispatch,g=(0,o.useCallback)((function(e){var t=(0,u.I8)(s.conditional);(0,u.SR)(t,n.path,e),j({conditional:t})}),[n,s,j]);if(1===Object.keys(n.states).length){var y=(0,d.Z)(Object.entries(n.states)[0],2),b=y[0],C=y[1],P=C.name&&(0,m.jsx)(p.Z,{color:"success",children:C.name});return(0,m.jsxs)(x.Z,{fullWidth:!0,size:"small",onClick:function(){return g(t?void 0:b)},disabled:i,startIcon:t?(0,m.jsx)(h.Z,{}):(0,m.jsx)(f.Z,{}),children:[n.name," ",P]})}var k=t?n.states[t]:void 0,R=(null===k||void 0===k?void 0:k.name)&&(0,m.jsx)(p.Z,{color:k?"success":"secondary",children:k?k.name:"Not Active"});return(0,m.jsxs)(v.Z,{fullWidth:!0,size:"small",title:(0,m.jsxs)("span",{children:[n.name," ",R]}),disabled:i,children:[(0,m.jsx)(Z.Z,{onClick:function(){return g()},selected:!k,disabled:!k,children:(0,m.jsx)("span",{children:"Not Active"})}),(0,m.jsx)(l.Z,{}),Object.entries(n.states).map((function(e){var n=(0,d.Z)(e,2),r=n[0],i=n[1];return(0,m.jsx)(Z.Z,{onClick:function(){return g(r)},selected:t===r,disabled:t===r,children:i.name},r)}))]})}var g=t(78661),y=t(3992),b=t(14763);function C(e){var n,t,d=e.conditional,h=e.hideHeader,f=void 0!==h&&h,x=e.hideDesc,Z=void 0!==x&&x,v=e.fieldContext,p=(0,o.useContext)(c.R).data;if(!(!d.canShow||!!(v?p.get((0,g.aT)(d.canShow,{target:v.data.data[0]})).value:p.get(d.canShow).value)))return null;var C=p.get(d.value).value,P=!Z&&(0,u.mY)(d.description,p),k=null!==(n=d.header)&&void 0!==n?n:{},R=k.icon,w=k.title,D=k.action;R=(0,u.mY)(R,p);var S=C&&(null===(t=d.states[C])||void 0===t?void 0:t.fields);return(0,m.jsxs)(y.Z,{children:[!f&&d.header&&(0,m.jsx)(a.Z,{avatar:R,title:w,action:D,titleTypographyProps:{variant:"subtitle2"}}),!f&&d.header&&(0,m.jsx)(l.Z,{}),!!d.name&&(0,m.jsxs)(i.Z,{children:[P&&(0,m.jsx)(r.Z,{mb:1,children:P}),(0,m.jsx)(j,{conditional:d,conditionalValue:C})]}),S&&(0,m.jsx)(b.lD,{sx:{m:0},children:S.map((function(e,n){return(0,m.jsx)(b.ZP,{field:e,fieldContext:v,component:s.ZP},n)}))})]})}function P(e){var n=e.sections,t=e.teamBuffOnly,d=(0,o.useContext)(c.R).data,h=null===n||void 0===n?void 0:n.map((function(e,n){var o,c,h,f;if(e.canShow&&!e.canShow(d))return null;if(t&&!e.teamBuff&&(null===(o=e.conditional)||void 0===o||!o.teamBuff))return null;var x=(0,u.mY)(e.text,d),Z=(0,u.mY)(e.fieldsDescription,d),v=null!==(c=e.fields)&&void 0!==c?c:[],p=null!==(h=e.fieldsHeader)&&void 0!==h?h:{},j=p.icon,g=p.title,P=p.action;return j=(0,u.mY)(j,d),(0,m.jsxs)(r.Z,{display:"flex",flexDirection:"column",gap:1,children:[!t&&x&&(0,m.jsx)("div",{children:x}),(!t||e.teamBuff)&&(0,m.jsxs)(y.Z,{children:[t&&x&&(0,m.jsx)(i.Z,{children:x}),e.fieldsHeader&&(0,m.jsx)(a.Z,{avatar:j,title:g,action:P,titleTypographyProps:{variant:"subtitle2"}}),e.fieldsHeader&&(0,m.jsx)(l.Z,{}),t&&Z&&(0,m.jsx)(i.Z,{children:Z}),v.length>0&&(0,m.jsx)(b.lD,{children:null===v||void 0===v||null===(f=v.map)||void 0===f?void 0:f.call(v,(function(e,n){return(0,m.jsx)(b.ZP,{field:e,component:s.ZP},n)}))})]}),!!e.conditional&&(!t||e.conditional.teamBuff)&&(0,m.jsx)(C,{conditional:e.conditional,hideDesc:!t})]},"section"+n)})).filter((function(e){return e}));return h.length?(0,m.jsx)(r.Z,{display:"flex",flexDirection:"column",gap:1,children:h}):null}},66887:function(e,n,t){t.d(n,{d3:function(){return k},Q2:function(){return R},$r:function(){return w}});var r=t(1413),i=t(29439),a=t(53174),l=t(54483),s=t(37355),o=t(39504),c=t(61889),u=t(81918),d=t(20890),h=t(56125),f=t(24518),x=t(72791),Z=t(94023),v=t(2693),p=t(26138),m=t(44297),j=t(24351),g=t(71310),y=t(91702),b=t(91732),C=t(75545),P=t(80184);function k(){var e=(0,x.useContext)(v.R).data,n=(0,x.useState)(!1),t=(0,i.Z)(n,2),r=t[0],a=t[1],l=(0,x.useCallback)((function(){return a(!r)}),[a,r]),f=e.get(p.ri.enemy.level),Z=e.get(p.ri.enemy.defRed),y=e.get(p.ri.enemy.defIgn);return(0,P.jsxs)(g.Z,{children:[(0,P.jsx)(o.Z,{children:(0,P.jsxs)(c.ZP,{container:!0,children:[(0,P.jsx)(c.ZP,{item:!0,flexGrow:1,alignItems:"center",children:(0,P.jsxs)(c.ZP,{container:!0,spacing:1,children:[(0,P.jsx)(c.ZP,{item:!0,children:(0,P.jsx)(u.Z,{size:"small",color:"success",label:(0,P.jsxs)("span",{children:[m.ZP.get(f.key)," ",(0,P.jsx)("strong",{children:f.value})]})})}),j.Kj.map((function(e){return(0,P.jsx)(c.ZP,{item:!0,children:(0,P.jsx)(d.Z,{children:(0,P.jsx)(R,{element:e})},e)},e)})),(0,P.jsx)(c.ZP,{item:!0,children:(0,P.jsxs)(d.Z,{children:["DEF Reduction ",(0,m.EC)(Z.value,Z.unit)]})}),(0,P.jsx)(c.ZP,{item:!0,children:(0,P.jsxs)(d.Z,{children:["DEF Ignore ",(0,m.EC)(y.value,y.unit)]})})]})}),(0,P.jsx)(c.ZP,{item:!0,children:(0,P.jsx)(b.Z,{expand:r,onClick:l,"aria-expanded":r,"aria-label":"show more",size:"small",sx:{p:0},children:(0,P.jsx)(s.Z,{})})})]})}),(0,P.jsx)(h.Z,{in:r,timeout:"auto",unmountOnExit:!0,children:(0,P.jsx)(o.Z,{sx:{pt:0},children:(0,P.jsx)(w,{})})})]})}function R(e){var n=e.element,t=(0,x.useContext)(v.R).data.get(p.ri.enemy["".concat(n,"_res_")]),r=!isFinite(t.value)?(0,P.jsxs)("span",{children:[C.h[n]," IMMUNE"]}):(0,P.jsxs)("span",{children:[C.h[n],"RES ",(0,P.jsx)("strong",{children:(0,m.EC)(t.value,t.unit)})]});return(0,P.jsx)(y.Z,{color:n,children:r})}function w(e){var n,t,i,s=e.bsProps,o=void 0===s?{xs:12,md:6}:s,u=(0,x.useContext)(v.R),d=u.data,h=u.character.enemyOverride,g=u.characterDispatch,b=null!==(n=h.enemyLevel)&&void 0!==n?n:d.get(p.ri.lvl).value,C=null!==(t=h.enemyDefIgn_)&&void 0!==t?t:0,k=null!==(i=h.enemyDefRed_)&&void 0!==i?i:0;return(0,P.jsxs)(c.ZP,{container:!0,spacing:1,children:[(0,P.jsx)(c.ZP,(0,r.Z)((0,r.Z)({item:!0},o),{},{children:(0,P.jsx)(f.Z,{fullWidth:!0,sx:{height:"100%"},size:"small",component:"a",color:"warning",href:"https://genshin-impact.fandom.com/wiki/Resistance#Base_Enemy_Resistances",target:"_blank",rel:"noreferrer",children:"To get the specific resistance values of enemies, please visit the wiki."})})),(0,P.jsx)(c.ZP,(0,r.Z)((0,r.Z)({item:!0},o),{},{children:(0,P.jsx)(Z.Z,{sx:{bgcolor:function(e){return e.palette.contentLight.main},width:"100%"},name:(0,P.jsx)("b",{children:m.ZP.get("enemyLevel")}),value:b,placeholder:m.ZP.getStr("enemyLevel"),defaultValue:d.get(p.ri.lvl).value,onValueChange:function(e){return g({type:"enemyOverride",statKey:"enemyLevel",value:e})},onReset:function(){return g({type:"enemyOverride",statKey:"enemyLevel",value:void 0})}})})),j.Kj.map((function(e){var n="".concat(e,"_enemyRes_"),t=h[n],i=t===Number.MAX_VALUE;return(0,P.jsx)(c.ZP,(0,r.Z)((0,r.Z)({item:!0},o),{},{children:(0,P.jsx)(Z.Z,{sx:{bgcolor:function(e){return e.palette.contentLight.main},width:"100%"},name:(0,P.jsx)(y.Z,{color:e,children:(0,P.jsx)("b",{children:m.ZP.get(n)})}),value:t?i?1/0:t:10,placeholder:i?"Immune ":m.ZP.getStr(n),defaultValue:10,onValueChange:function(e){return g({type:"enemyOverride",statKey:n,value:e})},disabled:i,percent:!0,children:(0,P.jsxs)(f.Z,{color:e,onClick:function(){return g({type:"enemyOverride",statKey:n,value:i?10:Number.MAX_VALUE})},children:[(0,P.jsx)(l.G,{icon:i?a.a3n:a.pL1,className:"fa-fw"})," Immunity"]})})}),e)})),(0,P.jsx)(c.ZP,(0,r.Z)((0,r.Z)({item:!0},o),{},{children:(0,P.jsx)(Z.Z,{sx:{bgcolor:function(e){return e.palette.contentLight.main},width:"100%"},name:(0,P.jsx)("b",{children:m.ZP.get("enemyDefIgn_")}),value:C,placeholder:m.ZP.getStr("enemyDefIgn_"),defaultValue:0,onValueChange:function(e){return g({type:"enemyOverride",statKey:"enemyDefIgn_",value:e})},percent:!0})})),(0,P.jsx)(c.ZP,(0,r.Z)((0,r.Z)({item:!0},o),{},{children:(0,P.jsx)(Z.Z,{sx:{bgcolor:function(e){return e.palette.contentLight.main},width:"100%"},name:(0,P.jsx)("b",{children:m.ZP.get("enemyDefRed_")}),value:k,placeholder:m.ZP.getStr("enemyDefRed_"),defaultValue:0,onValueChange:function(e){return g({type:"enemyOverride",statKey:"enemyDefRed_",value:e})},percent:!0})})),(0,P.jsx)(c.ZP,{item:!0,xs:12,children:(0,P.jsx)("small",{children:"Note: Genshin Impact halves resistance shred values below 0%. For the sake of calculations enter the RAW value and GO will do the rest. (e.g. 10% - 20% = -10%)"})})]})}},91732:function(e,n,t){var r=t(1413),i=t(45987),a=t(66934),l=t(13400),s=t(80184),o=["expand"],c=(0,a.ZP)((function(e){e.expand;var n=(0,i.Z)(e,o);return(0,s.jsx)(l.Z,(0,r.Z)({},n))}))((function(e){var n=e.theme;return{transform:e.expand?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:n.transitions.create("transform",{duration:n.transitions.duration.shortest})}}));n.Z=c},32490:function(e,n,t){t.d(n,{pg:function(){return j},oX:function(){return g},Hn:function(){return y},yb:function(){return b}});var r=t(1413),i=t(29439),a=t(23786),l=t(90388),s=t(39504),o=t(61889),c=t(72791),u=t(2693),d=t(26138),h=t(71310),f=t(91702),x=t(33890),Z=t(91839),v=t(75545),p=t(80184),m={"":(0,p.jsx)("span",{children:"No External Infusion"}),pyro:(0,p.jsxs)("span",{children:[v.h.pyro," Pyro Infusion"]}),cryo:(0,p.jsxs)("span",{children:[v.h.cryo," Cryo Infusion"]})};function j(e){var n=(0,c.useContext)(u.R),t=n.characterSheet,l=n.character.infusionAura,s=n.characterDispatch;return null!==t&&void 0!==t&&t.isMelee()?(0,p.jsx)(x.Z,(0,r.Z)((0,r.Z)({title:m[l],color:l||"secondary"},e),{},{children:Object.entries(m).map((function(e){var n=(0,i.Z)(e,2),t=n[0],r=n[1];return(0,p.jsx)(a.Z,{sx:t?{color:"".concat(t,".main")}:void 0,selected:t===l,disabled:t===l,onClick:function(){return s({infusionAura:t})},children:r},t)}))})):null}function g(e){var n=(0,c.useContext)(u.R),t=n.data,i=n.character,a=i.reactionMode,s=i.infusionAura,o=n.characterDispatch,h=t.get(d.ri.charEle).value;return["pyro","hydro","cryo"].includes(h)||["pyro","hydro","cryo"].includes(s)?(0,p.jsxs)(Z.Z,(0,r.Z)((0,r.Z)({exclusive:!0,baseColor:"secondary",value:a,onChange:function(e,n){return o({reactionMode:n})}},e),{},{children:[(0,p.jsx)(l.Z,{value:"",children:"No Reactions"}),("pyro"===h||"pyro"===s)&&(0,p.jsx)(l.Z,{value:"pyro_vaporize",children:(0,p.jsxs)(f.Z,{color:"vaporize",children:["Vaporize(Pyro)",v.Z.hydro,"+",v.Z.pyro]})}),("pyro"===h||"pyro"===s)&&(0,p.jsx)(l.Z,{value:"pyro_melt",children:(0,p.jsxs)(f.Z,{color:"melt",children:["Melt(Pyro) ",v.Z.cryo,"+",v.Z.pyro]})}),("hydro"===h||"hydro"===s)&&(0,p.jsx)(l.Z,{value:"hydro_vaporize",children:(0,p.jsxs)(f.Z,{color:"vaporize",children:["Vaporize(Hydro) ",v.Z.pyro,"+",v.Z.hydro]})}),("cryo"===h||"cryo"===s)&&(0,p.jsx)(l.Z,{value:"cryo_melt",children:(0,p.jsxs)(f.Z,{color:"melt",children:["Melt(Cryo) ",v.Z.pyro,"+",v.Z.cryo]})})]})):null}function y(e){var n=(0,c.useContext)(u.R),t=n.character.hitMode,i=n.characterDispatch;return(0,p.jsxs)(Z.Z,(0,r.Z)((0,r.Z)({exclusive:!0,baseColor:"secondary",value:t,onChange:function(e,n){return i({hitMode:n})}},e),{},{children:[(0,p.jsx)(l.Z,{value:"avgHit",children:"Avg. DMG"}),(0,p.jsx)(l.Z,{value:"hit",children:"Non Crit DMG"}),(0,p.jsx)(l.Z,{value:"critHit",children:"Crit Hit DMG"})]}))}function b(){return(0,p.jsx)(h.Z,{children:(0,p.jsx)(s.Z,{children:(0,p.jsxs)(o.ZP,{container:!0,spacing:1,children:[(0,p.jsx)(o.ZP,{item:!0,children:(0,p.jsx)(y,{size:"small"})}),(0,p.jsx)(o.ZP,{item:!0,children:(0,p.jsx)(j,{})}),(0,p.jsx)(o.ZP,{item:!0,children:(0,p.jsx)(g,{size:"small"})})]})})})}},92443:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(1413),i=t(45987),a=t(66934),l=t(24518),s=t(80184),o=["children","disabled"],c=(0,a.ZP)(l.Z)((function(e){var n=e.theme;return{"&.Mui-disabled":{backgroundColor:n.palette.primary.dark,color:n.palette.text.secondary}}}));function u(e){var n=e.children,t=(e.disabled,(0,i.Z)(e,o));return(0,s.jsx)(c,(0,r.Z)((0,r.Z)({},t),{},{disabled:!0,children:n}))}},8430:function(e,n,t){t.d(n,{f:function(){return g},U:function(){return b}});var r=t(93433),i=t(29439),a=t(15861),l=t(1413),s=t(87757),o=t.n(s),c=t(20890),u=t(26138),d=t(31148),h=t(947),f=t(91702),x=t(25617),Z=t(60393),v=t(66218),p=t(80184),m={title:(0,p.jsx)(f.Z,{color:"warning",children:"ERROR"})},j=(0,l.Z)({normal:"Normal Atk.",charged:"Charged Atk.",plunging:"Plunging Atk.",skill:"Ele. Skill",burst:"Ele. Burst",passive:"Passive",passive1:"1st Asc. Pass.",passive2:"4th Asc. Pass.",passive3:"Util. Pass."},Object.fromEntries((0,Z.w6)(1,6).map((function(e){return["constellation".concat(e),"Const. ".concat(e)]}))));function g(e,n){return y.apply(this,arguments)}function y(){return(y=(0,a.Z)(o().mark((function e(n,t){var r,a,l,s,f,Z,g,y,b,C,P,k,R;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",m);case 2:if("basic"!==t){e.next=6;break}return e.abrupt("return",{title:"Basic Stats"});case 6:if("reaction"!==t){e.next=10;break}return e.abrupt("return",{title:"Transformative Reactions"});case 10:if(!t.includes(":")){e.next=31;break}if(r=t.split(":"),a=(0,i.Z)(r,2),l=a[0],s=a[1],"artifact"!==l){e.next=21;break}return e.next=15,d.y.get(s);case 15:if(f=e.sent){e.next=18;break}return e.abrupt("return",m);case 18:return e.abrupt("return",{title:f.name,icon:f.defIconSrc});case 21:if("weapon"!==l){e.next=29;break}return e.next=24,v.ZP.get(s);case 24:if(Z=e.sent){e.next=27;break}return e.abrupt("return",m);case 27:return g=n.get(u.qH.weapon.asc).value,e.abrupt("return",{title:Z.name,icon:g<2?Z.img:Z.imgAwaken});case 29:e.next=44;break;case 31:if(y=n.get(u.qH.charKey).value,b=n.get(u.qH.charEle).value,y&&b){e.next=35;break}return e.abrupt("return",m);case 35:return e.next=37,h.ZP.get(y);case 37:if(C=e.sent,P=["normal","charged","plunging"].includes(t)?"auto":t,k=null===C||void 0===C?void 0:C.getTalentOfKey(P,b)){e.next=42;break}return e.abrupt("return",m);case 42:return R=j[t],e.abrupt("return",{icon:k.img,title:k.name,action:R?(0,p.jsx)(x.Z,{children:(0,p.jsx)(c.Z,{variant:"subtitle2",children:R})}):void 0});case 44:return e.abrupt("return",m);case 45:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){var n=e.getDisplay(),t=Object.entries(n),a=t.filter((function(e){return"basic"===(0,i.Z)(e,1)[0]})),l=t.filter((function(e){return"reaction"===(0,i.Z)(e,1)[0]})),s=t.filter((function(e){return(0,i.Z)(e,1)[0].startsWith("weapon")})),o=t.filter((function(e){return(0,i.Z)(e,1)[0].startsWith("artifact")})),c=t.filter((function(e){var n=(0,i.Z)(e,1)[0];return"basic"!==n&&"reaction"!==n&&!n.startsWith("weapon")&&!n.startsWith("artifact")}));return[].concat((0,r.Z)(a),(0,r.Z)(c),(0,r.Z)(s),(0,r.Z)(o),(0,r.Z)(l))}},94023:function(e,n,t){t.d(n,{Z:function(){return x}});var r=t(1413),i=t(45987),a=t(49670),l=t(66934),s=t(2199),o=t(24518),c=t(10600),u=t(92443),d=t(80184),h=["name","children","value","placeholder","defaultValue","onValueChange","percent","disabled","onReset"],f=(0,l.ZP)(s.Z)({display:"flex"});function x(e){var n=e.name,t=e.children,l=e.value,s=e.placeholder,x=e.defaultValue,Z=void 0===x?0:x,v=e.onValueChange,p=e.percent,m=void 0!==p&&p,j=e.disabled,g=void 0!==j&&j,y=e.onReset,b=(0,i.Z)(e,h);return(0,d.jsxs)(f,(0,r.Z)((0,r.Z)({},b),{},{children:[t,(0,d.jsx)(u.Z,{sx:{whiteSpace:"nowrap"},children:n}),(0,d.jsx)(c.CC,{sx:{flexBasis:30,flexGrow:1},children:(0,d.jsx)(c.ZP,{sx:{px:1},inputProps:{sx:{textAlign:"right"}},float:m,placeholder:s,value:l,onChange:v,disabled:g,endAdornment:m?"%":void 0})}),(0,d.jsx)(o.Z,{onClick:function(){return y?y():v(Z)},disabled:g||l===Z,children:(0,d.jsx)(a.Z,{})})]}))}}}]);
//# sourceMappingURL=23.2102f07f.chunk.js.map