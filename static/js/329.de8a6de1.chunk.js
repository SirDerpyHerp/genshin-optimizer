"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[329],{2693:function(e,n,i){i.d(n,{R:function(){return t}});var t=(0,i(72791).createContext)({})},90329:function(e,n,i){i.r(n),i.d(n,{default:function(){return U}});var t=i(93433),s=i(29439),r=i(40117),o=i(62002),c=i(97719),l=i(39504),a=i(61889),d=i(2199),u=i(24518),x=i(23786),Z=i(94721),h=i(68870),j=i(20890),p=i(9585),v=i(15021),m=i(72791),f=i(9350),g=i(3992),y=i(71310),P=i(36944),k=i(68198),w=(i(91702),i(10600)),C=i(37503),b=i(33890),S=i(14763),L=i(55942),W=i(9321),T=i(25617),I=i(10157),R=i(44361),A=i(947),J=i(2139),K=i(66218),z=i(3997),H=i(2693),M=i(26138),N=i(87234),D=i(42320),E=i(74480),G=i(60393),_=i(22776),F=i(80184);function U(e){var n,i=e.weaponId,c=e.footer,f=void 0!==c&&c,L=e.onClose,W=(0,m.useContext)(H.R).data,_=(0,m.useContext)(z.t).database,U=(0,E.Z)(i),O=null!==U&&void 0!==U?U:{},X=O.key,q=void 0===X?"":X,Q=O.level,V=void 0===Q?0:Q,Y=O.refinement,$=void 0===Y?0:Y,ee=O.ascension,ne=void 0===ee?0:ee,ie=O.lock,te=O.location,se=void 0===te?"":te,re=O.id,oe=(0,D.Z)(K.ZP.get(q),[q]),ce=null===oe||void 0===oe?void 0:oe.weaponType,le=(0,m.useCallback)((function(e){_.updateWeapon(e,i)}),[i,_]),ae=(0,m.useCallback)((function(e){e=(0,G.uZ)(e,1,90);var n=J.SJ.findIndex((function(n){return e<=n}));le({level:e,ascension:n})}),[le]),de=(0,m.useCallback)((function(){var e=J.SJ.findIndex((function(e){return 90!==V&&V===e}));le(ne===e?{ascension:ne+1}:{ascension:e})}),[le,ne,V]),ue=(0,D.Z)(se?A.ZP.get(se):void 0,[se]),xe=ue?function(e){return e.weaponType===ue.weaponTypeKey}:void 0,Ze=ue&&ue.weaponTypeKey,he=(0,m.useCallback)((function(e){return re&&_.setWeaponLocation(re,e)}),[_,re]),je=(0,m.useCallback)((function(e){return e.weaponTypeKey===(null===oe||void 0===oe?void 0:oe.weaponType)}),[oe]),pe=(0,m.useState)(!1),ve=(0,s.Z)(pe,2),me=ve[0],fe=ve[1],ge=ne<2?null===oe||void 0===oe?void 0:oe.img:null===oe||void 0===oe?void 0:oe.imgAwaken;(0,m.useEffect)((function(){if(oe&&le&&oe.key===(null===U||void 0===U?void 0:U.key)&&oe.rarity<=2&&(V>70||ne>4)){var e=(0,s.Z)(J.Xu[0],2),n=e[0],i=e[1];le({level:n,ascension:i})}}),[oe,U,le,V,ne]);var ye=(0,m.useMemo)((function(){return oe&&U&&(0,N.mP)([oe.data,(0,N.v0)(U)])}),[oe,U]);return(0,F.jsxs)(y.Z,{children:[(0,F.jsx)(l.Z,{sx:{py:1},children:(0,F.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,F.jsx)(a.ZP,{item:!0,flexGrow:1,children:(0,F.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,F.jsxs)(a.ZP,{item:!0,children:[(0,F.jsx)(R.Z,{show:me,onHide:function(){return fe(!1)},onSelect:function(e){return le({key:e})},filter:xe,weaponFilter:Ze}),(0,F.jsxs)(d.Z,{children:[(0,F.jsx)(u.Z,{onClick:function(){return fe(!0)},children:null!==(n=null===oe||void 0===oe?void 0:oe.name)&&void 0!==n?n:"Select a Weapon"}),(null===oe||void 0===oe?void 0:oe.hasRefinement)&&(0,F.jsxs)(b.Z,{title:"Refinement ".concat($),children:[(0,F.jsx)(x.Z,{children:"Select Weapon Refinement"}),(0,F.jsx)(Z.Z,{}),(0,t.Z)(Array(5).keys()).map((function(e){return(0,F.jsx)(x.Z,{onClick:function(){return le({refinement:e+1})},selected:$===e+1,disabled:$===e+1,children:"Refinement ".concat(e+1)},e)}))]})]})]}),(0,F.jsx)(a.ZP,{item:!0,children:(0,F.jsxs)(d.Z,{sx:{bgcolor:function(e){return e.palette.contentLight.main}},children:[(0,F.jsx)(w.CC,{children:(0,F.jsx)(w.ZP,{onChange:ae,value:V,startAdornment:"Lvl. ",inputProps:{min:1,max:90,sx:{textAlign:"center"}},sx:{width:"100%",height:"100%",pl:2}})}),oe&&(0,F.jsx)(u.Z,{sx:{pl:1},disabled:!oe.ambiguousLevel(V),onClick:de,children:(0,F.jsxs)("strong",{children:["/ ",J.SJ[ne]]})}),oe&&(0,F.jsx)(b.Z,{title:"Select Level",children:oe.milestoneLevels.map((function(e){var n=(0,s.Z)(e,2),i=n[0],t=n[1],r=i===J.SJ[t]?"Lv. ".concat(i):"Lv. ".concat(i,"/").concat(J.SJ[t]),o=i===V&&t===ne;return(0,F.jsx)(x.Z,{selected:o,disabled:o,onClick:function(){return le({level:i,ascension:t})},children:r},"".concat(i,"/").concat(t))}))})]})}),(0,F.jsx)(a.ZP,{item:!0,children:(0,F.jsx)(u.Z,{color:"error",onClick:function(){return re&&_.updateWeapon({lock:!ie},re)},startIcon:ie?(0,F.jsx)(r.Z,{}):(0,F.jsx)(o.Z,{}),children:ie?"Locked":"Unlocked"})})]})}),!!L&&(0,F.jsx)(a.ZP,{item:!0,children:(0,F.jsx)(k.Z,{onClick:L})}),(0,F.jsx)(a.ZP,{item:!0,children:(0,F.jsx)(B,{weaponTypeKey:ce,onChangeId:function(e){return _.setWeaponLocation(e,W.get(M.ri.charKey).value)}})})]})}),(0,F.jsx)(Z.Z,{}),(0,F.jsx)(l.Z,{children:oe&&ye&&(0,F.jsxs)(a.ZP,{container:!0,spacing:1.5,children:[(0,F.jsx)(a.ZP,{item:!0,xs:12,sm:3,children:(0,F.jsxs)(a.ZP,{container:!0,spacing:1.5,children:[(0,F.jsx)(a.ZP,{item:!0,xs:6,sm:12,children:(0,F.jsx)(h.Z,{component:"img",src:ge,className:"grad-".concat(oe.rarity,"star"),sx:{maxWidth:256,width:"100%",height:"auto",borderRadius:1}})}),(0,F.jsx)(a.ZP,{item:!0,xs:6,sm:12,children:(0,F.jsx)(j.Z,{children:(0,F.jsx)("small",{children:oe.description})})})]})}),(0,F.jsxs)(a.ZP,{item:!0,xs:12,sm:9,children:[(0,F.jsxs)(j.Z,{variant:"h6",children:[!1,oe.name," Lv. ",U&&K.ZP.getLevelString(U)," ",oe.rarity>2&&(0,F.jsxs)(T.Z,{color:"info",children:["Refinement ",$]})]}),(0,F.jsx)(j.Z,{children:(0,F.jsx)(I.t,{stars:oe.rarity})}),(0,F.jsx)(j.Z,{variant:"subtitle1",children:oe.passiveName}),(0,F.jsx)(j.Z,{gutterBottom:!0,children:oe.passiveName&&oe.passiveDescription(ye.get(M.ri.weapon.refineIndex).value)}),(0,F.jsxs)(h.Z,{display:"flex",flexDirection:"column",gap:1,children:[(0,F.jsxs)(g.Z,{children:[(0,F.jsx)(p.Z,{title:"Main Stats",titleTypographyProps:{variant:"subtitle2"}}),(0,F.jsx)(Z.Z,{}),(0,F.jsx)(S.lD,{children:[M.ri.weapon.main,M.ri.weapon.sub,M.ri.weapon.sub2].map((function(e,n){var i=ye.get(e);return i.isEmpty||!i.value?null:(0,F.jsx)(S.JW,{node:i,component:v.ZP},i.key)}))})]}),W&&oe.document&&(0,F.jsx)(C.Z,{sections:oe.document})]})]})]})}),f&&re&&(0,F.jsx)(l.Z,{sx:{py:1},children:(0,F.jsxs)(a.ZP,{container:!0,children:[(0,F.jsx)(a.ZP,{item:!0,flexGrow:1,children:(0,F.jsx)(P.Z,{noUnselect:!0,inventory:!0,value:se,onChange:he,filter:je})}),!!L&&(0,F.jsx)(a.ZP,{item:!0,children:(0,F.jsx)(k.Z,{large:!0,onClick:L})})]})})]})}function B(e){var n=e.onChangeId,i=e.weaponTypeKey,t=(0,m.useContext)(z.t).database,r=(0,m.useState)(!1),o=(0,s.Z)(r,2),d=o[0],x=o[1],h=function(){return x(!1)},p=function(e){n(e),h()},v=(0,D.Z)(K.ZP.getAll,[]),y=t.weapons.keys.filter((function(e){var n,s=t._getWeapon(e);return!!s&&(!i||i===(null===v||void 0===v||null===(n=v[s.key])||void 0===n?void 0:n.weaponType))}));return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(u.Z,{color:"info",onClick:function(){return x(!0)},startIcon:(0,F.jsx)(c.Z,{}),children:"SWAP WEAPON"}),(0,F.jsx)(W.Z,{open:d,onClose:h,children:(0,F.jsxs)(g.Z,{children:[(0,F.jsx)(l.Z,{sx:{py:1},children:(0,F.jsxs)(a.ZP,{container:!0,children:[(0,F.jsx)(a.ZP,{item:!0,flexGrow:1,children:(0,F.jsxs)(j.Z,{variant:"h6",children:[i?(0,F.jsx)(L.Z,{src:f.Z.weaponTypes[i]}):null," Swap Weapon"]})}),(0,F.jsx)(a.ZP,{item:!0,children:(0,F.jsx)(k.Z,{onClick:h})})]})}),(0,F.jsx)(Z.Z,{}),(0,F.jsx)(l.Z,{children:(0,F.jsx)(a.ZP,{container:!0,spacing:1,children:y.map((function(e){return(0,F.jsx)(a.ZP,{item:!0,xs:6,sm:6,md:4,lg:3,children:(0,F.jsx)(_.Z,{weaponId:e,onClick:p})},e)}))})})]})})]})}},97719:function(e,n,i){var t=i(76189),s=i(80184);n.Z=(0,t.Z)((0,s.jsx)("path",{d:"M6.99 11 3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"}),"SwapHoriz")}}]);
//# sourceMappingURL=329.de8a6de1.chunk.js.map