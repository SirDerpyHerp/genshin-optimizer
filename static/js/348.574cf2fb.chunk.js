"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[348],{31038:function(e,n,t){t.d(n,{Z:function(){return P}});var r=t(1413),i=t(93433),o=t(45987),a=t(53174),s=t(54483),l=t(63204),u=t(14361),c=t(13967),d=t(47047),p=t(14868),f=t(20890),h=t(68870),x=t(72791),v=t(22020),Z=t(947),g=t(56928),m=t(42320),y=t(24351),j=t(50921),w=t(46956),b=t(610),k=t(68244),C=t(2380),I=t(80184),T=["value","onChange","defaultText","defaultIcon","placeholderText","labelText","showDefault","showInventory","showEquipped","filter","disable"];function P(e){var n=e.value,t=e.onChange,P=e.defaultText,W=void 0===P?"":P,S=e.defaultIcon,E=void 0===S?"":S,_=e.placeholderText,A=void 0===_?"":_,M=e.labelText,N=void 0===M?"":M,D=e.showDefault,G=void 0!==D&&D,L=e.showInventory,q=void 0!==L&&L,z=e.showEquipped,R=void 0!==z&&z,O=e.filter,F=void 0===O?function(){return!0}:O,H=e.disable,V=void 0===H?function(){return!1}:H,X=(0,o.Z)(e,T),B=(0,v.$)(["ui","artifact"].concat((0,i.Z)(y.IV.map((function(e){return"char_".concat(e,"_gen")}))))).t,K=(0,c.Z)(),$=(0,x.useContext)(g.t).database,J=(0,m.Z)(Z.Z.getAll,[]),U=(0,x.useMemo)((function(){return J&&(0,j.zU)($,J)}),[$,J]),Q=$._getCharKeys().filter((function(e){return(null===J||void 0===J?void 0:J[e])&&F(J[e],e)})).sort(),Y=(0,x.useCallback)((function(e){switch(e){case"Equipped":return B("artifact:filterLocation.currentlyEquipped");case"Inventory":return B("artifact:filterLocation.inventory");case"":return W;default:return B("char_".concat(e,"_gen:name"))}}),[W,B]),ee=(0,x.useCallback)((function(e){var n;switch(e){case"Equipped":return(0,I.jsx)(s.G,{icon:a.caW});case"Inventory":return(0,I.jsx)(l.Z,{});case"":return E;default:return(0,I.jsx)(C.Z,{src:null===(n=J[e])||void 0===n?void 0:n.thumbImgSide,sx:{pr:1}})}}),[E,J]),ne=(0,x.useMemo)((function(){return U&&function(e,n,t,r,o,a){if(!n)return[];var s=[];r&&s.push({value:"",label:t("")});o&&s.push({value:"Inventory",label:t("Inventory")});a&&s.push({value:"Equipped",label:t("Equipped")});var l=e.filter((0,w.C)({element:(0,i.Z)(y.N),weaponType:(0,i.Z)(y.yd),favorite:"yes",name:""},n)).map((function(e){return{value:e,label:t(e)}})),u=e.filter((0,w.C)({element:(0,i.Z)(y.N),weaponType:(0,i.Z)(y.yd),favorite:"no",name:""},n)).map((function(e){return{value:e,label:t(e)}}));return s.concat(l).concat(u)}(Q,U,Y,G,q,R)}),[U,Q,G,q,R,Y]);return J&&ne?(0,I.jsx)(p.Z,(0,r.Z)({autoHighlight:!0,options:ne,clearIcon:n?void 0:"",getOptionLabel:function(e){return e.label},onChange:function(e,n,r){return("change"!==e.type||"clear"!==r)&&t(n?n.value:"")},isOptionEqualToValue:function(e,n){return e.value===n.value},getOptionDisabled:function(e){return V(e.value)},value:{value:n,label:Y(n)},renderInput:function(e){return(0,I.jsx)(k.Z,(0,r.Z)((0,r.Z)({},e),{},{label:N,placeholder:A,startAdornment:ee(n),hasValue:!!n}))},renderOption:function(e,t){var r,i="Equipped"!==t.value&&"Inventory"!==t.value&&""!==t.value&&(null===(r=$._getChar(t.value))||void 0===r?void 0:r.favorite);return(0,I.jsx)(b.Z,{value:t.value?t.value:"default",image:ee(t.value),text:(0,I.jsx)(x.Suspense,{fallback:(0,I.jsx)(d.Z,{variant:"text",width:100}),children:(0,I.jsx)(f.Z,{variant:"inherit",noWrap:!0,children:Y(t.value)})}),theme:K,isSelected:n===t.value,addlElement:(0,I.jsxs)(I.Fragment,{children:[i&&(0,I.jsx)(h.Z,{display:"flex",flexGrow:1}),i&&(0,I.jsx)(u.Z,{sx:{ml:1,mr:-.5}})]}),props:e},t.value?t.value:"default")}},X)):(0,I.jsx)(d.Z,{height:50})}},40020:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(63204),i=t(20890),o=t(22020),a=t(947),s=t(42320),l=t(80184);function u(e){var n=e.location,t=(0,o.$)("ui").t,u=(0,s.Z)(a.Z.get(null!==n&&void 0!==n?n:""),[n]);return(0,l.jsx)(i.Z,{component:"span",children:null!==u&&void 0!==u&&u.name?u.nameWIthIcon:(0,l.jsxs)("span",{children:[(0,l.jsx)(r.Z,{sx:{verticalAlign:"text-bottom"}})," ",t("inventory")]})})}},2380:function(e,n,t){var r=(0,t(93457).Z)("img")((function(e){var n=e.theme;return{display:"inline-block",width:"auto",height:"2.3em",lineHeight:1,verticalAlign:"text-bottom",marginTop:n.spacing(-3),marginLeft:n.spacing(-1.25),marginRight:n.spacing(-1),marginBottom:n.spacing(-1)}}));n.Z=r},610:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(1413),i=t(23786),o=t(57064),a=t(49900),s=t(80184);function l(e){var n=e.value,t=e.image,l=void 0===t?"":t,u=e.text,c=e.theme,d=e.isSelected,p=e.addlElement,f=e.props;return(0,s.jsxs)(i.Z,(0,r.Z)((0,r.Z)({value:n},f),{},{children:[(0,s.jsx)(o.Z,{children:l}),(0,s.jsx)(a.Z,{primaryTypographyProps:{style:{fontWeight:d?c.typography.fontWeightMedium:c.typography.fontWeightRegular}},children:u}),p&&p]}),n)}},68244:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(1413),i=t(45987),o=t(13967),a=t(58165),s=t(80184),l=["hasValue","startAdornment","flattenCorners","InputProps","sx"];function u(e){var n=e.hasValue,t=e.startAdornment,u=e.flattenCorners,c=void 0!==u&&u,d=e.InputProps,p=e.sx,f=(0,i.Z)(e,l),h=(0,o.Z)();return(0,s.jsx)(a.Z,(0,r.Z)((0,r.Z)({},f),{},{variant:"filled",color:n?"success":"primary",hiddenLabel:!f.label,type:"search",InputProps:(0,r.Z)((0,r.Z)({},d),{},{startAdornment:t}),InputLabelProps:{style:{color:h.palette.text.primary}},sx:(0,r.Z)((0,r.Z)({},p),{},{"& .MuiFilledInput-root":{backgroundColor:n?h.palette.success.main:h.palette.primary.main,borderRadius:c?0:1,paddingTop:f.label?void 0:0,paddingBottom:0},"& .MuiFilledInput-root.Mui-focused":{backgroundColor:n?h.palette.success.light:h.palette.primary.light},"& .MuiFilledInput-root:hover":{backgroundColor:n?h.palette.success.dark:h.palette.primary.dark},"& .MuiFilledInput-root:before":{border:"none"},"& .MuiFilledInput-root.Mui-disabled:before":{border:"none"},"& .MuiFilledInput-root:after":{border:"none"},"& .MuiFilledInput-root:hover:not(.Mui-disabled):before":{border:"none"},"& input[type=search]::-ms-clear":{display:"none",width:0,height:0},"& input[type=search]::-ms-reveal":{display:"none",width:0,height:0},"& input[type=search]::-webkit-search-decoration":{display:"none"},"& input[type=search]::-webkit-search-cancel-button":{display:"none"},"& input[type=search]::-webkit-search-results-button":{display:"none"},"& input[type=search]::-webkit-search-results-decoration":{display:"none"}})}))}},73578:function(e,n,t){t.d(n,{Z:function(){return x}});var r=t(1413),i=t(45987),o=t(93433),a=t(90388),s=t(2191),l=t(24351),u=t(75308),c=t(55942),d=t(91839),p=t(80184),f=["value","onChange"],h=(0,u.X)((0,o.Z)(l.yd));function x(e){var n=e.value,t=e.onChange,o=(0,i.Z)(e,f);return(0,p.jsx)(d.Z,(0,r.Z)((0,r.Z)({exclusive:!0,value:n},o),{},{children:l.yd.map((function(e){var r;return(0,p.jsx)(a.Z,{value:e,onClick:function(){return t(h(n,e))},children:(0,p.jsx)(c.Z,{src:null===(r=s.Z.weaponTypes)||void 0===r?void 0:r[e],size:2})},e)}))}))}},44361:function(e,n,t){t.d(n,{Z:function(){return k}});var r=t(93433),i=t(29439),o=t(39504),a=t(61889),s=t(94721),l=t(66647),u=t(68870),c=t(20890),d=t(72791),p=t(2191),f=t(42320),h=t(24351),x=t(66218),v=t(3992),Z=t(71310),g=t(68198),m=t(55942),y=t(9321),j=t(10157),w=t(73578),b=t(80184);function k(e){var n=e.show,t=e.onHide,k=e.onSelect,C=e.filter,I=void 0===C?function(){return!0}:C,T=e.weaponFilter,P=(0,f.Z)(x.Z.getAll,[]),W=(0,d.useState)(T?[T]:(0,r.Z)(h.yd)),S=(0,i.Z)(W,2),E=S[0],_=S[1];(0,d.useEffect)((function(){return T&&_([T])}),[T]);var A=P?(0,r.Z)(new Set(h.fG)).filter((function(e){return I(P[e])})).filter((function(e){var n;return E.includes(null===P||void 0===P||null===(n=P[e])||void 0===n?void 0:n.weaponType)})).sort((function(e,n){var t,r,i,o;return(null!==(t=null===P||void 0===P||null===(r=P[n])||void 0===r?void 0:r.rarity)&&void 0!==t?t:0)-(null!==(i=null===P||void 0===P||null===(o=P[e])||void 0===o?void 0:o.rarity)&&void 0!==i?i:0)})):[];return P?(0,b.jsx)(y.Z,{open:n,onClose:t,children:(0,b.jsxs)(v.Z,{children:[(0,b.jsx)(o.Z,{sx:{py:1},children:(0,b.jsxs)(a.ZP,{container:!0,children:[(0,b.jsx)(a.ZP,{item:!0,flexGrow:1,children:(0,b.jsx)(w.Z,{value:E,onChange:_,disabled:!!T,size:"small"})}),(0,b.jsx)(a.ZP,{item:!0,children:(0,b.jsx)(g.Z,{onClick:t})})]})}),(0,b.jsx)(s.Z,{}),(0,b.jsx)(o.Z,{children:(0,b.jsx)(a.ZP,{container:!0,spacing:1,children:A.map((function(e){var n,r=P[e];return(0,b.jsx)(a.ZP,{item:!0,lg:3,md:4,children:(0,b.jsx)(Z.Z,{sx:{height:"100%"},children:(0,b.jsxs)(l.Z,{onClick:function(){t(),k(e)},sx:{display:"flex"},children:[(0,b.jsx)(u.Z,{component:"img",src:r.img,sx:{width:100,height:"auto"},className:" grad-".concat(r.rarity,"star")}),(0,b.jsxs)(u.Z,{sx:{flexGrow:1,px:1},children:[(0,b.jsx)(c.Z,{variant:"subtitle1",children:r.name}),(0,b.jsxs)(c.Z,{children:[(0,b.jsx)(m.Z,{src:null===(n=p.Z.weaponTypes)||void 0===n?void 0:n[r.weaponType]})," ",(0,b.jsx)(j.t,{stars:r.rarity,colored:!0})]})]})]})})},e)}))})}),(0,b.jsx)(s.Z,{}),(0,b.jsx)(o.Z,{sx:{py:1},children:(0,b.jsx)(g.Z,{large:!0,onClick:t})})]})}):null}},66218:function(e,n,t){t.d(n,{X:function(){return h},Z:function(){return f}});var r=t(29439),i=t(15671),o=t(43144),a=t(55942),s=t(25617),l=t(66624),u=t(26138),c=t(2139),d=t(80184),p=t.e(460).then(t.bind(t,72953)).then((function(e){return e.default})),f=function(){function e(n,t,r,o){var a=this;(0,i.Z)(this,e),this.key=void 0,this.sheet=void 0,this.data=void 0,this.rarity=void 0,this.weaponType=void 0,this.tr=function(e){return(0,d.jsx)(l.v,{ns:"weapon_".concat(a.key,"_gen"),key18:e})},this.passiveDescription=function(e){return a.hasRefinement?a.tr("passiveDescription.".concat(e)):""},this.rarity=r.rarity,this.weaponType=r.weaponType,this.key=n,this.sheet=t,this.data=o}return(0,o.Z)(e,[{key:"name",get:function(){return this.tr("name")}},{key:"hasRefinement",get:function(){return this.rarity>2}},{key:"passiveName",get:function(){return this.hasRefinement?this.tr("passiveName"):""}},{key:"description",get:function(){return this.tr("description")}},{key:"img",get:function(){return this.sheet.icon}},{key:"imgAwaken",get:function(){return this.sheet.iconAwaken}},{key:"document",get:function(){return this.sheet.document}},{key:"milestoneLevels",get:function(){return this.hasRefinement?c.D4:c.Xu}},{key:"ambiguousLevel",value:function(e){return this.hasRefinement?(0,c.ek)(e):(0,c.nB)(e)}}],[{key:"getAll",get:function(){return p}}]),e}();f.get=function(e){return e?p.then((function(n){return n[e]})):void 0},f.getWeaponsOfType=function(e,n){return Object.fromEntries(Object.entries(e).filter((function(e){var t=(0,r.Z)(e,2);t[0];return t[1].weaponType===n})))},f.getLevelString=function(e){return"".concat(e.level,"/").concat(c.SJ[e.ascension])};var h=function(e,n,t,r){var i=function(n){return(0,d.jsx)(l.v,{ns:"weapon_".concat(e,"_gen"),key18:n})};return{title:i("passiveName"),icon:function(e){return(0,d.jsx)(a.Z,{size:2,sx:{m:-1},src:e.get(u.qH.weapon.asc).value<2?n:t})},action:r&&(0,d.jsx)(s.Z,{color:"success",children:r}),description:function(e){return i("passiveDescription.".concat(e.get(u.qH.weapon.refineIndex).value))}}}},90543:function(e,n,t){t.d(n,{Z:function(){return L}});var r,i=t(30168),o=t(53174),a=t(54483),s=t(40117),l=t(62002),u=t(63204),c=t(66647),d=t(68870),p=t(47047),f=t(13400),h=t(20890),x=t(39504),v=t(2199),Z=t(40165),g=t(24518),m=t(72791),y=t(22020),j=t(2191),w=t(71310),b=t(31038),k=t(40020),C=t(20005),I=t(55942),T=t(10157),P=t(75545),W=t(2139),S=t(66218),E=t(56928),_=t(26138),A=t(73036),M=t(79406),N=t(42320),D=t(74480),G=t(80184);function L(e){var n,t=e.weaponId,L=e.onClick,q=e.onEdit,z=e.onDelete,R=e.canEquip,O=void 0!==R&&R,F=e.extraButtons,H=(0,y.$)(["page_weapon","ui"]).t,V=(0,m.useContext)(E.t).database,X=(0,D.Z)(t),B=(0,N.Z)(null!==X&&void 0!==X&&X.key?S.Z.get(X.key):void 0,[null===X||void 0===X?void 0:X.key]),K=(0,m.useCallback)((function(e){return e.weaponTypeKey===(null===B||void 0===B?void 0:B.weaponType)}),[B]),$=(0,m.useCallback)((function(e){return(0,G.jsx)(c.Z,{onClick:function(){return null===L||void 0===L?void 0:L(t)},children:e})}),[L,t]),J=(0,m.useCallback)((function(e){return(0,G.jsx)(d.Z,{children:e})}),[]),U=(0,m.useCallback)((function(e){return V.setWeaponLocation(t,e)}),[V,t]),Q=(0,m.useMemo)((function(){return B&&X&&(0,A.mP)([B.data,(0,A.v0)(X)])}),[B,X]);if(!X||!B||!Q)return null;var Y=X.level,ee=X.ascension,ne=X.refinement,te=X.id,re=X.location,ie=void 0===re?"":re,oe=X.lock,ae=Q.get(_.ri.weapon.type).value,se=[_.ri.weapon.main,_.ri.weapon.sub,_.ri.weapon.sub2].map((function(e){return Q.get(e)})),le=ee<2?null===B||void 0===B?void 0:B.img:null===B||void 0===B?void 0:B.imgAwaken;return(0,G.jsx)(m.Suspense,{fallback:(0,G.jsx)(p.Z,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:300}}),children:(0,G.jsxs)(w.Z,{sx:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[(0,G.jsxs)(C.Z,{condition:!!L,wrapper:$,falseWrapper:J,children:[(0,G.jsxs)(d.Z,{className:"grad-".concat(B.rarity,"star"),sx:{position:"relative",pt:2,px:2},children:[!L&&(0,G.jsx)(f.Z,{color:"primary",onClick:function(){return V.updateWeapon({lock:!oe},te)},sx:{position:"absolute",right:0,bottom:0,zIndex:2},children:oe?(0,G.jsx)(s.Z,{}):(0,G.jsx)(l.Z,{})}),(0,G.jsxs)(d.Z,{sx:{position:"relative",zIndex:1},children:[(0,G.jsxs)(d.Z,{component:"div",sx:{display:"flex",alignItems:"center",gap:1,mb:1},children:[(0,G.jsx)(I.Z,{sx:{fontSize:"1.5em"},src:null===(n=j.Z.weaponTypes)||void 0===n?void 0:n[ae]}),(0,G.jsx)(h.Z,{noWrap:!0,sx:{textAlign:"center",backgroundColor:"rgba(100,100,100,0.35)",borderRadius:"1em",px:1},children:(0,G.jsx)("strong",{children:B.name})})]}),(0,G.jsxs)(h.Z,{component:"span",variant:"h5",children:["Lv. ",Y]}),(0,G.jsxs)(h.Z,{component:"span",variant:"h5",color:"text.secondary",children:["/",W.SJ[ee]]}),(0,G.jsxs)(h.Z,{variant:"h6",children:["Refinement ",(0,G.jsx)("strong",{children:ne})]}),(0,G.jsx)(h.Z,{children:(0,G.jsx)(T.t,{stars:B.rarity,colored:!0})})]}),(0,G.jsx)(d.Z,{sx:{height:"100%",position:"absolute",right:0,top:0},children:(0,G.jsx)(d.Z,{component:"img",src:null!==le&&void 0!==le?le:"",width:"auto",height:"100%",sx:{float:"right"}})})]}),(0,G.jsx)(x.Z,{children:se.map((function(e){if(!e.info.key)return null;var n=(0,M.EC)(e.value,e.unit,e.unit?void 0:0);return(0,G.jsxs)(d.Z,{sx:{display:"flex"},children:[(0,G.jsxs)(h.Z,{flexGrow:1,children:[P.Z[e.info.key]," ",M.ZP.get(e.info.key)]}),(0,G.jsx)(h.Z,{children:n})]},e.info.key)}))})]}),(0,G.jsxs)(d.Z,{sx:{p:1,display:"flex",gap:1,justifyContent:"space-between",alignItems:"center"},children:[O?(0,G.jsx)(b.Z,{size:"small",sx:{flexGrow:1},disable:function(e){return""===e},showDefault:!0,defaultIcon:(0,G.jsx)(u.Z,{}),defaultText:H("ui:inventory"),value:ie,onChange:U,filter:K,disableClearable:!0}):(0,G.jsx)(k.Z,{location:ie}),(0,G.jsxs)(v.Z,{children:[!!q&&(0,G.jsx)(Z.Z,{title:(0,G.jsx)(h.Z,{children:H(r||(r=(0,i.Z)(["page_weapon:edit"])))}),placement:"top",arrow:!0,children:(0,G.jsx)(g.Z,{color:"info",onClick:function(){return q(te)},children:(0,G.jsx)(a.G,{icon:o.Xcf,className:"fa-fw"})})}),!!z&&(0,G.jsx)(g.Z,{color:"error",onClick:function(){return z(te)},disabled:!!ie||oe,children:(0,G.jsx)(a.G,{icon:o.I7k,className:"fa-fw"})}),F]})]})]})})}},70348:function(e,n,t){t.r(n),t.d(n,{default:function(){return V}});var r=t(74165),i=t(15861),o=t(29439),a=t(93433),s=t(53174),l=t(54483),u=t(68870),c=t(61889),d=t(90388),p=t(57246),f=t(47047),h=t(39504),x=t(20890),v=t(24518),Z=t(30178),g=t(72791),m=t(10757),y=t(22020),j=t(76899),w=t(3992),b=t(91839),k=t(59215),C=t(10157),I=t(73578),T=t(44361),P=t(66218),W=t(56928),S=t(17278),E=t(68544),_=t(70645),A=t(42320),M=t(24351),N=t(46956),D=t(60393),G=t(66045),L=t(11400),q=t(90543),z=t(80184),R=(0,g.lazy)((function(){return Promise.all([t.e(913),t.e(476)]).then(t.bind(t,74476))})),O={xs:1,sm:2,md:3,lg:3,xl:4},F={xs:9,sm:11,md:23,lg:23,xl:23},H=function(){return{editWeaponId:"",sortType:G.Ol[0],ascending:!1,rarity:(0,a.Z)(M.wC),weaponType:(0,a.Z)(M.yd)}};function V(){var e=(0,y.$)(["page_weapon","ui"]).t,n=(0,g.useContext)(W.t).database,t=(0,S.Z)("WeaponDisplay",H),a=(0,o.Z)(t,2),j=a[0],V=a[1],B=(0,g.useState)(!1),K=(0,o.Z)(B,2),$=K[0],J=K[1],U=(0,E.Z)(),Q=(0,o.Z)(U,2),Y=Q[0],ee=Q[1],ne=(0,g.useRef)(null),te=(0,g.useState)(0),re=(0,o.Z)(te,2),ie=re[0],oe=re[1];(0,g.useEffect)((function(){return m.ZP.send({hitType:"pageview",page:"/weapon"}),n.followAnyWeapon(ee)}),[ee,n]);var ae=(0,_.Z)(),se=F[ae],le=(0,A.Z)(P.Z.getAll,[]),ue=(0,g.useCallback)(function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var i,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n._getWeapon(t)){e.next=3;break}return e.abrupt("return");case 3:if(o=Z.ZP.t("weapon_".concat(i.key,"_gen:name")),window.confirm("Are you sure you want to remove ".concat(o,"?"))){e.next=6;break}return e.abrupt("return");case 6:n.removeWeapon(t),j.editWeaponId===t&&V({editWeaponId:""});case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[j.editWeaponId,V,n]),ce=(0,g.useCallback)((function(e){V({editWeaponId:e})}),[V]),de=(0,g.useCallback)((function(e){ce(n.createWeapon((0,L.x)(e)))}),[n,ce]),pe=j.sortType,fe=j.ascending,he=j.weaponType,xe=j.rarity,ve=(0,g.useMemo)((function(){return le&&(0,G.Sn)(le)}),[le]),Ze=(0,g.useMemo)((function(){return le&&(0,G.Xg)(le)}),[le]),ge=(0,g.useMemo)((function(){var e=n._getWeapons(),t=e.length;if(!ve||!Ze)return{weaponIdList:[],totalWeaponNum:t};var r=e.filter((0,N.C)({weaponType:he,rarity:xe},Ze)).sort((0,N.e)(pe,fe,ve)).map((function(e){return e.id}));return Y&&{weaponIdList:r,totalWeaponNum:t}}),[Y,n,ve,Ze,pe,fe,xe,he]),me=ge.weaponIdList,ye=ge.totalWeaponNum,je=(0,g.useMemo)((function(){var e=Math.ceil(me.length/se),n=(0,D.uZ)(ie,0,e-1);return{weaponIdsToShow:me.slice(n*se,(n+1)*se),numPages:e,currentPageIndex:n}}),[me,ie,se]),we=je.weaponIdsToShow,be=je.numPages,ke=je.currentPageIndex,Ce=me.length!==ye?"".concat(me.length,"/").concat(ye):"".concat(ye),Ie=(0,g.useCallback)((function(e,n){var t;null===(t=ne.current)||void 0===t||t.scrollIntoView({behavior:"smooth"}),oe(n-1)}),[oe,ne]),Te=(0,g.useCallback)((function(){return V({editWeaponId:""})}),[V]),Pe=j.editWeaponId;return(0,g.useEffect)((function(){Pe&&(n._getWeapon(Pe)||Te())}),[n,Pe,Te]),(0,z.jsxs)(u.Z,{my:1,display:"flex",flexDirection:"column",gap:1,children:[(0,z.jsx)(g.Suspense,{fallback:!1,children:(0,z.jsx)(R,{weaponId:Pe,footer:!0,onClose:Te})}),(0,z.jsxs)(w.Z,{ref:ne,sx:{p:2,pb:1},children:[(0,z.jsxs)(c.ZP,{container:!0,spacing:1,sx:{mb:1},children:[(0,z.jsx)(c.ZP,{item:!0,children:(0,z.jsx)(I.Z,{sx:{height:"100%"},onChange:function(e){return V({weaponType:e})},value:he,size:"small"})}),(0,z.jsx)(c.ZP,{item:!0,flexGrow:1,children:(0,z.jsx)(b.Z,{sx:{height:"100%"},onChange:function(e,n){return V({rarity:n})},value:xe,size:"small",children:M.wC.map((function(e){return(0,z.jsx)(d.Z,{value:e,children:(0,z.jsxs)(u.Z,{display:"flex",gap:1,children:[(0,z.jsx)("strong",{children:e}),(0,z.jsx)(C.t,{stars:1})]})},e)}))})}),(0,z.jsx)(c.ZP,{item:!0,children:(0,z.jsx)(k.Z,{sx:{height:"100%"},sortKeys:G.Ol,value:pe,onChange:function(e){return V({sortType:e})},ascending:fe,onChangeAsc:function(e){return V({ascending:e})}})})]}),(0,z.jsxs)(c.ZP,{container:!0,alignItems:"flex-end",children:[(0,z.jsx)(c.ZP,{item:!0,flexGrow:1,children:(0,z.jsx)(p.Z,{count:be,page:ke+1,onChange:Ie})}),(0,z.jsx)(c.ZP,{item:!0,children:(0,z.jsx)(X,{numShowing:we.length,total:Ce,t:e})})]})]}),(0,z.jsx)(g.Suspense,{fallback:(0,z.jsx)(f.Z,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:500}}),children:(0,z.jsxs)(c.ZP,{container:!0,spacing:1,columns:O,children:[(0,z.jsx)(c.ZP,{item:!0,xs:1,children:(0,z.jsxs)(w.Z,{sx:{height:"100%",width:"100%",minHeight:300,display:"flex",flexDirection:"column"},children:[(0,z.jsx)(h.Z,{children:(0,z.jsx)(x.Z,{sx:{textAlign:"center"},children:"Add New Weapon"})}),(0,z.jsx)(T.Z,{show:$,onHide:function(){return J(!1)},onSelect:de}),(0,z.jsx)(u.Z,{sx:{flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center"},children:(0,z.jsx)(v.Z,{onClick:function(){return J(!0)},color:"info",sx:{borderRadius:"1em"},children:(0,z.jsx)(x.Z,{variant:"h1",children:(0,z.jsx)(l.G,{icon:s.r8p,className:"fa-fw"})})})})]})}),we.map((function(e){return(0,z.jsx)(c.ZP,{item:!0,xs:1,children:(0,z.jsx)(q.Z,{weaponId:e,onDelete:ue,onEdit:ce,canEquip:!0})},e)}))]})}),be>1&&(0,z.jsx)(w.Z,{children:(0,z.jsx)(h.Z,{children:(0,z.jsxs)(c.ZP,{container:!0,alignItems:"flex-end",children:[(0,z.jsx)(c.ZP,{item:!0,flexGrow:1,children:(0,z.jsx)(p.Z,{count:be,page:ke+1,onChange:Ie})}),(0,z.jsx)(c.ZP,{item:!0,children:(0,z.jsx)(X,{numShowing:we.length,total:Ce,t:e})})]})})})]})}function X(e){var n=e.numShowing,t=e.total,r=e.t;return(0,z.jsx)(x.Z,{color:"text.secondary",children:(0,z.jsxs)(j.c,{t:r,i18nKey:"showingNum",count:n,value:t,children:["Showing ",(0,z.jsx)("b",{children:{count:n}})," out of ",{value:t}," Weapons"]})})}},74480:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(29439),i=t(72791),o=t(56928);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=(0,i.useContext)(o.t),t=n.database,a=(0,i.useState)(t._getWeapon(e)),s=(0,r.Z)(a,2),l=s[0],u=s[1];return(0,i.useEffect)((function(){return u(t._getWeapon(e))}),[t,e]),(0,i.useEffect)((function(){return e?t.followWeapon(e,u):void 0}),[e,u,t]),l}},75308:function(e,n,t){t.d(n,{X:function(){return o}});var r=t(93433),i=t(60393);function o(e){return function(n,t){var o=n.length;return o===e.length?[t]:1===o&&n[0]===t?(0,r.Z)(e):(0,r.Z)(new Set((0,i.nh)(n,t)))}}},66045:function(e,n,t){t.d(n,{Ol:function(){return r},Sn:function(){return i},Xg:function(){return o}});var r=["level","rarity"];function i(e){return{level:{getValue:function(e){var n;return null!==(n=e.level)&&void 0!==n?n:0},tieBreaker:"rarity"},rarity:{getValue:function(n){var t;return null===e||void 0===e||null===(t=e[n.key])||void 0===t?void 0:t.rarity},tieBreaker:"level"}}}function o(e){return{rarity:function(n,t){var r;return t.includes(null===e||void 0===e||null===(r=e[n.key])||void 0===r?void 0:r.rarity)},weaponType:function(n,t){var r;return t.includes(null===e||void 0===e||null===(r=e[n.key])||void 0===r?void 0:r.weaponType)}}}},15861:function(e,n,t){function r(e,n,t,r,i,o,a){try{var s=e[o](a),l=s.value}catch(u){return void t(u)}s.done?n(l):Promise.resolve(l).then(r,i)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(i,o){var a=e.apply(n,t);function s(e){r(a,i,o,s,l,"next",e)}function l(e){r(a,i,o,s,l,"throw",e)}s(void 0)}))}}t.d(n,{Z:function(){return i}})}}]);
//# sourceMappingURL=348.574cf2fb.chunk.js.map