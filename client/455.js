(self.webpackChunk=self.webpackChunk||[]).push([[455],{94312:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Q});var o=n(27378),i=n(79295),r=n(48895),a=n(5234),l=n(75012),s=n(88922),u=n(17157),c=n(13539),d=n(62188),h=n(19887),p=n(75133),g=n(12693);const v={TITLE_MIN:5,TITLE_MAX:120,DESCRIPTION_MIN:30,DESCRIPTION_MAX:400,ADDRESS_MIN:10,ADDRESS_MAX:150,LAT_LNG_MIN:-90,LAT_LNG_MAX:90};var m=n(22501),f=n(30298);const y=["jewBlue.svg","memorialBlue.svg","memorialOrange.svg","cemeteryOrange.svg"],{t:b}=m.default;function w(e,t){const n={};return""===e?(n[t]=b("requiredField"),n):e.length<v.TITLE_MIN?(n[t]=b("atLeast",{value:v.TITLE_MIN}),n):e.length>v.TITLE_MAX?(n[t]=b("lessThan",{value:v.TITLE_MAX}),n):n}function x(e,t){const n={};return""===e?(n[t]=b("requiredField"),n):e.length<v.DESCRIPTION_MIN?(n[t]=b("atLeast",{value:v.DESCRIPTION_MIN}),n):e.length>v.DESCRIPTION_MAX?(n[t]=b("lessThan",{value:v.DESCRIPTION_MAX}),n):n}function k(e,t){const n={};return""===e?(n[t]=b("requiredField"),n):e.length<v.ADDRESS_MIN?(n[t]=b("atLeast",{value:v.ADDRESS_MIN}),n):e.length>v.ADDRESS_MAX?(n[t]=b("lessThan",{value:v.ADDRESS_MAX}),n):n}function E(e,t){const n={};return""===e||f.eN.test(e)||(n[t]=b("incorrectLink")),n}function M(e,t){const n={};if(!e)return n[t]=b("requiredField"),n;const o=parseFloat(e);return f.AK.test(e)?o>v.LAT_LNG_MAX?(n[t]=b("lessThanNumber",{value:v.LAT_LNG_MAX}),n):o<v.LAT_LNG_MIN?(n[t]=b("atLeastNumber",{value:v.LAT_LNG_MIN}),n):n:(n[t]=b("onlyNumbers"),n)}function I(e){const t={},n=w(e.title.uk,"uk"),o=w(e.title.en,"en"),i=x(e.description.uk,"uk"),r=x(e.description.en,"en"),a=k(e.address.uk,"uk"),l=k(e.address.en,"en"),s=E(e.link,"link"),u=E(e.photo_source,"photo_source"),c=M(e.lat,"lat"),d=M(e.lng,"lng"),h=function(e){const t={};return e?(y.includes(e)||(t.icon=b("somethingWentWrong")),t):(t.icon=b("requiredField"),t)}(e.icon);return(Object.values(o).length>0||Object.values(n).length>0)&&(t.title={...o,...n}),(Object.values(r).length>0||Object.values(i).length>0)&&(t.description={...r,...i}),(Object.values(l).length>0||Object.values(a).length>0)&&(t.address={...l,...a}),{...t,...c,...d,...u,...s,...h}}var _,O,C,S,T,P=n(58177),D=n(33683),L=n(51714),R=n(3972),Z=n(14935),j=n(42372),A=n(99647),N=n(21236),U=n(38775),V=n(28799),F=n(95399),z=n(50669),B=n(3924);const X=B.ZP.div(_||(_=(0,z.Z)(["\n  padding: 20px 40px;\n  width: 100%;\n"]))),G=B.ZP.div(O||(O=(0,z.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n"]))),H=B.ZP.div(C||(C=(0,z.Z)(["\n  background-color: ",";\n  padding: 15px;\n  border-radius: 5px;\n  box-shadow: 0 0 5px rgba(85, 85, 85, 0.1);\n  margin-bottom: 20px;\n"])),(e=>{let{theme:t}=e;return t.componentBg})),q=B.ZP.div(S||(S=(0,z.Z)(["\n  width: 50px;\n  height: 50px;\n"]))),Y=B.ZP.div(T||(T=(0,z.Z)(["\n  width: 500px;\n  height: 200px;\n"]))),W={title:{uk:"",en:""},description:{uk:"",en:""},address:{uk:"",en:""},icon:"memorialBlue.svg",lat:"",lng:"",link:"",city_id:"",type_id:"",photo:null,photo_source:"",errors:{},touched:{}},$={isOpen:!1,photo:null,photoBlob:null,width:500,height:200,border:60,saveFunc:()=>null,photoName:"firstPhoto"},Q=()=>{var e,t,n,m,f,b,w,x,k,E,M,_,O,C,S,T,z,B,Q,J,K,ee,te,ne,oe,ie,re,ae,le,se,ue,ce,de,he,pe,ge,ve,me,fe,ye,be,we,xe,ke,Ee,Me,Ie,_e,Oe,Ce,Se,Te,Pe,De,Le,Re,Ze,je,Ae,Ne,Ue,Ve,Fe,ze,Be,Xe,Ge,He,qe,Ye;const{id:We}=(0,Z.UO)(),[$e,Qe]=(0,o.useState)(W),[Je,Ke]=(0,o.useState)(!1),[et,tt]=(0,o.useState)($),[nt,ot]=(0,o.useState)(null),[it,rt]=(0,o.useState)(!1),at=(0,g.C)((e=>e.memorials.currentMemorial)),lt=(0,g.C)(V.o),st=(0,o.useMemo)((()=>lt.map((e=>e.name.uk))),[]),ut=(0,g.C)(U.E),ct=(0,o.useMemo)((()=>ut.map((e=>e.name.uk))),[]),dt=(0,Z.s0)(),ht=(0,g.T)(),{t:pt}=(0,s.$G)();(0,o.useEffect)((()=>{if(We)return rt(!0),ht((0,j.JA)(We)).unwrap().catch(A.D).finally((()=>{rt(!1)})),()=>{ht((0,N.iY)())}}),[]),(0,o.useEffect)((()=>{at&&Qe(Object.assign(W,at))}),[at]);const gt=(0,o.useCallback)((e=>{Qe((t=>({...t,photo:e,touched:{...t.touched,photo:!0}}))),ot(URL.createObjectURL(e)),We&&Ke(!0)}),[]),vt=(0,o.useCallback)((e=>{if(e.target&&e.target.files&&e.target.files[0]){const t=e.target.files[0],n=URL.createObjectURL(t);return tt((e=>({...e,photo:t,photoName:"".concat((0,h.Z)(),"_").concat(Date.now()),photoBlob:n,isOpen:!0,saveFunc:gt}))),!0}return!1}),[]),mt=(0,o.useCallback)((()=>{Qe((e=>({...e,photo:null,touched:{...e.touched,photo:!0}}))),ot(null)}),[]),ft=(0,o.useCallback)((e=>{const{name:t,value:n}=e.target,o=e.target.dataset.language;Qe((e=>{const i={...e,touched:{...e.touched,[t]:!o||{...e.touched[t],[o]:!0}},[t]:o?{...e[t],[o]:n}:n};return{...i,errors:I(i)}}))}),[]),yt=(0,o.useCallback)((e=>{const t=lt.find((t=>t.name.uk===e));Qe((e=>{const n={...e,touched:{...e.touched,type_id:!0},type_id:null==t?void 0:t._id};return{...n,errors:I(n)}}))}),[]),bt=(0,o.useCallback)((e=>{const t=ut.find((t=>t.name.uk===e));Qe((e=>{const n={...e,touched:{...e.touched,city:!0},city_id:null==t?void 0:t._id};return{...n,errors:I(n)}}))}),[]),wt=(0,o.useCallback)((e=>{Qe((t=>{const n={...t,touched:{...t.touched,icon:!0},icon:e};return{...n,errors:I(n)}}))}),[]);return o.createElement(X,null,et.isOpen?o.createElement(c.Z,{state:et,setState:tt}):null,o.createElement(G,null,o.createElement(a.Z,{margin:"0",fz:30},pt(We?"editMemorial":"addMemorial")),o.createElement(u.Z,{text:pt("send"),clickHandler:()=>{if(0===Object.keys($e.errors).length&&Object.keys($e.touched).length>0){const e=(0,D.Q)($e);rt(!0),We?(ht((0,N.bQ)(We)),ht((0,j.BU)({values:e,id:We})).unwrap().then((()=>dt("/mapmem-admin/memorials"))).catch(A.D).finally((()=>{rt(!1),ht((0,N.bQ)(We))}))):ht((0,j.xm)(e)).unwrap().then((()=>dt("/mapmem-admin/memorials"))).catch(A.D).finally((()=>{rt(!1)}))}else(0,L.v)(pt("checkDataError"),"error")},isLoading:it,disabled:!1})),it?o.createElement(R.a,null):o.createElement(o.Fragment,null,o.createElement(H,null,o.createElement(a.Z,{margin:"5px 0 15px"},"".concat(pt("photo")," (").concat(pt("optional"),")")),o.createElement(Y,null,o.createElement(d.Z,{id:"photo",onChange:vt,name:"photo",value:We&&!Je&&$e.photo?"".concat(F._n,"/file/download/photo?id=").concat($e.photo):nt,margin:"0 0 20px"})),o.createElement(r.Z,{show:(null===(e=$e.touched)||void 0===e?void 0:e.photo)&&!(null===(t=$e.errors)||void 0===t||!t.photo),margin:"5px 0 5px"},null===(n=$e.errors)||void 0===n?void 0:n.photo),o.createElement(u.Z,{margin:"15px 0 0",text:pt("deletePhoto"),clickHandler:mt,disabled:null===$e.photo}),o.createElement(i.Z,{id:"link",name:"photo_source",width:"100%",value:$e.photo_source,margin:"10px 0 5px",onChange:ft,label:"".concat(pt("source")," (").concat(pt("optional"),")"),placeholder:pt("source"),isValid:(null===(m=$e.touched)||void 0===m?void 0:m.photo_source)&&!(null!==(f=$e.errors)&&void 0!==f&&f.photo_source),fz:16,height:"30px",padding:"10px"}),o.createElement(r.Z,{show:(null===(b=$e.touched)||void 0===b?void 0:b.photo_source)&&!(null===(w=$e.errors)||void 0===w||!w.photo_source),margin:"5px 0 5px"},null===(x=$e.errors)||void 0===x?void 0:x.photo_source)),o.createElement(H,null,o.createElement(a.Z,{margin:"5px 0 15px"},pt("memorialTitle")),o.createElement(i.Z,{locale:"uk",id:"nameUk",name:"title",width:"100%",value:$e.title.uk,margin:"0 0 5px",onChange:ft,label:"".concat(pt("ukrainian")),placeholder:"".concat(pt("ukrainian")),isValid:(null===(k=$e.touched)||void 0===k||null===(k=k.title)||void 0===k?void 0:k.uk)&&!(null!==(E=$e.errors)&&void 0!==E&&null!==(E=E.title)&&void 0!==E&&E.uk),fz:16,height:"30px",padding:"10px",min:v.TITLE_MIN}),o.createElement(r.Z,{show:(null===(M=$e.touched)||void 0===M||null===(M=M.title)||void 0===M?void 0:M.uk)&&!(null===(_=$e.errors)||void 0===_||null===(_=_.title)||void 0===_||!_.uk),margin:"5px 0 5px"},null===(O=$e.errors)||void 0===O||null===(O=O.title)||void 0===O?void 0:O.uk),o.createElement(i.Z,{locale:"en",id:"nameEn",name:"title",width:"100%",value:$e.title.en,margin:"0 0 5px",onChange:ft,label:"".concat(pt("english")),placeholder:"".concat(pt("english")),isValid:(null===(C=$e.touched)||void 0===C||null===(C=C.title)||void 0===C?void 0:C.en)&&!(null!==(S=$e.errors)&&void 0!==S&&null!==(S=S.title)&&void 0!==S&&S.en),fz:16,height:"30px",padding:"10px",min:v.TITLE_MIN}),o.createElement(r.Z,{show:(null===(T=$e.touched)||void 0===T||null===(T=T.title)||void 0===T?void 0:T.en)&&!(null===(z=$e.errors)||void 0===z||null===(z=z.title)||void 0===z||!z.en),margin:"5px 0 5px"},null===(B=$e.errors)||void 0===B||null===(B=B.title)||void 0===B?void 0:B.en)),o.createElement(H,null,o.createElement(a.Z,{margin:"5px 0 15px"},pt("icon")),o.createElement(q,null,o.createElement("img",{src:"".concat(P.B,"/").concat($e.icon),alt:$e.icon})),o.createElement(p.Z,{selected:$e.icon,name:"typeSelect",id:"typeSelect",isValid:(null===(Q=$e.touched)||void 0===Q?void 0:Q.type_id)&&!(null!==(J=$e.errors)&&void 0!==J&&J.type_id),onChange:wt,placeholder:pt("icon"),valueArr:y,isNotDeletable:!0}),o.createElement(r.Z,{show:(null===(K=$e.touched)||void 0===K?void 0:K.type_id)&&!(null===(ee=$e.errors)||void 0===ee||!ee.type_id),margin:"5px 0 5px"},null===(te=$e.errors)||void 0===te?void 0:te.type_id)),o.createElement(H,null,o.createElement(a.Z,{margin:"5px 0 15px"},pt("coords")),o.createElement(i.Z,{id:"lat",name:"lat",width:"100%",value:$e.lat,margin:"0 0 5px",onChange:ft,label:"".concat(pt("lat")),placeholder:"".concat(pt("lat")),isValid:(null===(ne=$e.touched)||void 0===ne?void 0:ne.lat)&&!(null!==(oe=$e.errors)&&void 0!==oe&&oe.lat),fz:16,height:"30px",padding:"10px"}),o.createElement(r.Z,{show:(null===(ie=$e.touched)||void 0===ie?void 0:ie.lat)&&!(null===(re=$e.errors)||void 0===re||!re.lat),margin:"5px 0 5px"},null===(ae=$e.errors)||void 0===ae?void 0:ae.lat),o.createElement(i.Z,{id:"lng",name:"lng",width:"100%",value:$e.lng,margin:"0 0 5px",onChange:ft,label:"".concat(pt("lng")),placeholder:"".concat(pt("lng")),isValid:(null===(le=$e.touched)||void 0===le?void 0:le.lng)&&!(null!==(se=$e.errors)&&void 0!==se&&se.lng),fz:16,height:"30px",padding:"10px"}),o.createElement(r.Z,{show:(null===(ue=$e.touched)||void 0===ue?void 0:ue.lng)&&!(null===(ce=$e.errors)||void 0===ce||!ce.lng),margin:"5px 0 5px"},null===(de=$e.errors)||void 0===de?void 0:de.lng)),o.createElement(H,null,o.createElement(a.Z,{margin:"5px 0 15px"},"".concat(pt("memorialType")," (").concat(pt("optional"),")")),o.createElement(p.Z,{selected:null===(he=lt.find((e=>e._id===$e.type_id)))||void 0===he?void 0:he.name.uk,name:"typeSelect",id:"typeSelect",isValid:(null===(pe=$e.touched)||void 0===pe?void 0:pe.type_id)&&!(null!==(ge=$e.errors)&&void 0!==ge&&ge.type_id),onChange:yt,placeholder:pt("publicationType"),valueArr:st}),o.createElement(r.Z,{show:(null===(ve=$e.touched)||void 0===ve?void 0:ve.type_id)&&!(null===(me=$e.errors)||void 0===me||!me.type_id),margin:"5px 0 5px"},null===(fe=$e.errors)||void 0===fe?void 0:fe.type_id)),o.createElement(H,null,o.createElement(a.Z,{margin:"5px 0 15px"},"".concat(pt("city")," (").concat(pt("optional"),")")),o.createElement(p.Z,{selected:null===(ye=ut.find((e=>e._id===$e.city_id)))||void 0===ye?void 0:ye.name.uk,name:"city_id",id:"typeSelect",isValid:(null===(be=$e.touched)||void 0===be?void 0:be.city_id)&&!(null!==(we=$e.errors)&&void 0!==we&&we.city_id),onChange:bt,placeholder:pt("city"),valueArr:ct}),o.createElement(r.Z,{show:(null===(xe=$e.touched)||void 0===xe?void 0:xe.city_id)&&!(null===(ke=$e.errors)||void 0===ke||!ke.city_id),margin:"5px 0 5px"},null===(Ee=$e.errors)||void 0===Ee?void 0:Ee.city_id)),o.createElement(H,null,o.createElement(a.Z,{margin:"5px 0 15px"},pt("smallDescription")),o.createElement(l.Z,{locale:"uk",value:$e.description.uk,onChange:ft,name:"description",id:"descriptionUk",height:"200px",margin:"0",padding:"10px",fz:16,placeholder:"".concat(pt("ukrainian")),label:"".concat(pt("ukrainian")),isValid:(null===(Me=$e.touched)||void 0===Me||null===(Me=Me.description)||void 0===Me?void 0:Me.uk)&&!(null!==(Ie=$e.errors)&&void 0!==Ie&&null!==(Ie=Ie.description)&&void 0!==Ie&&Ie.uk),max:1500}),o.createElement(r.Z,{show:(null===(_e=$e.touched)||void 0===_e||null===(_e=_e.description)||void 0===_e?void 0:_e.uk)&&!(null===(Oe=$e.errors)||void 0===Oe||null===(Oe=Oe.description)||void 0===Oe||!Oe.uk),margin:"5px 0 5px"},null===(Ce=$e.errors)||void 0===Ce||null===(Ce=Ce.description)||void 0===Ce?void 0:Ce.uk),o.createElement(l.Z,{locale:"en",value:$e.description.en,onChange:ft,name:"description",id:"descriptionEn",height:"200px",margin:"0",padding:"10px",fz:16,placeholder:"".concat(pt("english")),label:"".concat(pt("english")),isValid:(null===(Se=$e.touched)||void 0===Se||null===(Se=Se.description)||void 0===Se?void 0:Se.en)&&!(null!==(Te=$e.errors)&&void 0!==Te&&null!==(Te=Te.description)&&void 0!==Te&&Te.en),max:1500}),o.createElement(r.Z,{show:(null===(Pe=$e.touched)||void 0===Pe||null===(Pe=Pe.description)||void 0===Pe?void 0:Pe.en)&&!(null===(De=$e.errors)||void 0===De||null===(De=De.description)||void 0===De||!De.en),margin:"5px 0 5px"},null===(Le=$e.errors)||void 0===Le||null===(Le=Le.description)||void 0===Le?void 0:Le.en)),o.createElement(H,null,o.createElement(a.Z,{margin:"5px 0 15px"},pt("address")),o.createElement(i.Z,{locale:"uk",id:"addressUk",name:"address",width:"100%",value:$e.address.uk,margin:"0 0 5px",onChange:ft,label:"".concat(pt("ukrainian")),placeholder:"".concat(pt("ukrainian")),isValid:(null===(Re=$e.touched)||void 0===Re||null===(Re=Re.address)||void 0===Re?void 0:Re.uk)&&!(null!==(Ze=$e.errors)&&void 0!==Ze&&null!==(Ze=Ze.address)&&void 0!==Ze&&Ze.uk),fz:16,height:"30px",padding:"10px",min:v.TITLE_MIN}),o.createElement(r.Z,{show:(null===(je=$e.touched)||void 0===je||null===(je=je.address)||void 0===je?void 0:je.uk)&&!(null===(Ae=$e.errors)||void 0===Ae||null===(Ae=Ae.address)||void 0===Ae||!Ae.uk),margin:"5px 0 5px"},null===(Ne=$e.errors)||void 0===Ne||null===(Ne=Ne.address)||void 0===Ne?void 0:Ne.uk),o.createElement(i.Z,{locale:"en",id:"addressEn",name:"address",width:"100%",value:$e.address.en,margin:"0 0 5px",onChange:ft,label:"".concat(pt("english")),placeholder:"".concat(pt("english")),isValid:(null===(Ue=$e.touched)||void 0===Ue||null===(Ue=Ue.address)||void 0===Ue?void 0:Ue.en)&&!(null!==(Ve=$e.errors)&&void 0!==Ve&&null!==(Ve=Ve.address)&&void 0!==Ve&&Ve.en),fz:16,height:"30px",padding:"10px",min:v.TITLE_MIN}),o.createElement(r.Z,{show:(null===(Fe=$e.touched)||void 0===Fe||null===(Fe=Fe.title)||void 0===Fe?void 0:Fe.en)&&!(null===(ze=$e.errors)||void 0===ze||null===(ze=ze.title)||void 0===ze||!ze.en),margin:"5px 0 5px"},null===(Be=$e.errors)||void 0===Be||null===(Be=Be.title)||void 0===Be?void 0:Be.en)),o.createElement(H,null,o.createElement(a.Z,{margin:"5px 0 15px"},pt("readMore")),o.createElement(i.Z,{id:"readMore",name:"link",width:"100%",value:$e.link,margin:"0 0 5px",onChange:ft,placeholder:"".concat(pt("readMore")),isValid:(null===(Xe=$e.touched)||void 0===Xe?void 0:Xe.link)&&!(null!==(Ge=$e.errors)&&void 0!==Ge&&Ge.link),fz:16,height:"30px",padding:"10px"}),o.createElement(r.Z,{show:(null===(He=$e.touched)||void 0===He?void 0:He.link)&&!(null===(qe=$e.errors)||void 0===qe||!qe.link),margin:"5px 0 5px"},null===(Ye=$e.errors)||void 0===Ye?void 0:Ye.link))))}},38775:(e,t,n)=>{"use strict";n.d(t,{E:()=>i});var o=n(7715);const{selectAll:i}=o.q9.getSelectors((e=>e.cities))},28799:(e,t,n)=>{"use strict";n.d(t,{o:()=>i});var o=n(39202);const{selectAll:i}=o.GL.getSelectors((e=>e.memorialTypes))},58772:(e,t,n)=>{"use strict";var o=n(90331);function i(){}function r(){}r.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,r,a){if(a!==o){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:i};return n.PropTypes=n,n}},23615:(e,t,n)=>{e.exports=n(58772)()},90331:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},78462:function(e,t,n){e.exports=function(e,t){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=n(e),i=n(t);function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function s(e,t){var n,o=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)),o}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,i=!1,r=void 0;try{for(var a,l=e[Symbol.iterator]();!(o=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{o||null==l.return||l.return()}finally{if(i)throw r}}return n}}(e,t)||g(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function m(e,t){return new Promise((function(n,o){var i,r=new Image;r.onload=function(){return n(r)},r.onerror=o,0==(null!==(i=e)&&!!i.match(/^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i))&&t&&(r.crossOrigin=t),r.src=e}))}var f,y=!("undefined"==typeof window||"undefined"==typeof navigator||!("ontouchstart"in window||0<navigator.msMaxTouchPoints)),b="undefined"!=typeof File,w={touch:{react:{down:"onTouchStart",mouseDown:"onMouseDown",drag:"onTouchMove",move:"onTouchMove",mouseMove:"onMouseMove",up:"onTouchEnd",mouseUp:"onMouseUp"},native:{down:"touchstart",mouseDown:"mousedown",drag:"touchmove",move:"touchmove",mouseMove:"mousemove",up:"touchend",mouseUp:"mouseup"}},desktop:{react:{down:"onMouseDown",drag:"onDragOver",move:"onMouseMove",up:"onMouseUp"},native:{down:"mousedown",drag:"dragStart",move:"mousemove",up:"mouseup"}}},x=y?w.touch:w.desktop,k="undefined"!=typeof window&&window.devicePixelRatio?window.devicePixelRatio:1,E={x:.5,y:.5},M=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(o,i.default.Component);var e,t,n=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o,i=c(e);return!(o=t?(n=c(this).constructor,Reflect.construct(i,arguments,n)):i.apply(this,arguments))||"object"!=typeof o&&"function"!=typeof o?h(this):o}}(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),a(h(t=n.call(this,e)),"state",{drag:!1,my:null,mx:null,image:E}),a(h(t),"handleImageReady",(function(e){var n=t.getInitialSize(e.width,e.height);n.resource=e,n.x=.5,n.y=.5,n.backgroundColor=t.props.backgroundColor,t.setState({drag:!1,image:n},t.props.onImageReady),t.props.onLoadSuccess(n)})),a(h(t),"clearImage",(function(){t.canvas.getContext("2d").clearRect(0,0,t.canvas.width,t.canvas.height),t.setState({image:E})})),a(h(t),"handleMouseDown",(function(e){(e=e||window.event).preventDefault(),t.setState({drag:!0,mx:null,my:null})})),a(h(t),"handleMouseUp",(function(){t.state.drag&&(t.setState({drag:!1}),t.props.onMouseUp())})),a(h(t),"handleMouseMove",(function(e){var n,o,i,r,a,l,s,c,d,h,p,g,v,m,f,y;e=e||window.event,!1!==t.state.drag&&(e.preventDefault(),i={mx:n=e.targetTouches?e.targetTouches[0].pageX:e.clientX,my:o=e.targetTouches?e.targetTouches[0].pageY:e.clientY},y=t.props.rotate,y=(y%=360)<0?y+360:y,t.state.mx&&t.state.my&&(r=t.state.mx-n,a=t.state.my-o,l=t.state.image.width*t.props.scale,s=t.state.image.height*t.props.scale,d=(c=t.getCroppingRect()).x,h=c.y,d*=l,h*=s,p=function(e){return e*(Math.PI/180)},g=Math.cos(p(y)),m=h+-r*(v=Math.sin(p(y)))+a*g,f={x:(d+r*g+a*v)/l+1/t.props.scale*t.getXScale()/2,y:m/s+1/t.props.scale*t.getYScale()/2},t.props.onPositionChange(f),i.image=u(u({},t.state.image),f)),t.setState(i),t.props.onMouseMove(e))})),a(h(t),"setCanvas",(function(e){t.canvas=e})),t.canvas=null,t}return e=o,(t=[{key:"componentDidMount",value:function(){this.props.disableHiDPIScaling&&(k=1);var e,t,n=this.canvas.getContext("2d");this.props.image&&this.loadImage(this.props.image),this.paint(n),document&&(e=!!function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){e=!1}return e}()&&{passive:!1},t=x.native,document.addEventListener(t.move,this.handleMouseMove,e),document.addEventListener(t.up,this.handleMouseUp,e),y&&(document.addEventListener(t.mouseMove,this.handleMouseMove,e),document.addEventListener(t.mouseUp,this.handleMouseUp,e)))}},{key:"componentDidUpdate",value:function(e,t){this.props.image&&this.props.image!==e.image||this.props.width!==e.width||this.props.height!==e.height||this.props.backgroundColor!==e.backgroundColor?this.loadImage(this.props.image):this.props.image||t.image===E||this.clearImage();var n=this.canvas.getContext("2d");n.clearRect(0,0,this.canvas.width,this.canvas.height),this.paint(n),this.paintImage(n,this.state.image,this.props.border),e.image===this.props.image&&e.width===this.props.width&&e.height===this.props.height&&e.position===this.props.position&&e.scale===this.props.scale&&e.rotate===this.props.rotate&&t.my===this.state.my&&t.mx===this.state.mx&&t.image.x===this.state.image.x&&t.image.y===this.state.image.y&&t.backgroundColor===this.state.backgroundColor||this.props.onImageChange()}},{key:"componentWillUnmount",value:function(){var e;document&&(e=x.native,document.removeEventListener(e.move,this.handleMouseMove,!1),document.removeEventListener(e.up,this.handleMouseUp,!1),y&&(document.removeEventListener(e.mouseMove,this.handleMouseMove,!1),document.removeEventListener(e.mouseUp,this.handleMouseUp,!1)))}},{key:"isVertical",value:function(){return!this.props.disableCanvasRotation&&this.props.rotate%180!=0}},{key:"getBorders",value:function(e){var t=0<arguments.length&&void 0!==e?e:this.props.border;return Array.isArray(t)?t:[t,t]}},{key:"getDimensions",value:function(){var e=this.props,t=e.width,n=e.height,o=e.rotate,i=e.border,r={},a=p(this.getBorders(i),2),l=a[0],s=a[1],u=t,c=n;return this.isVertical()?(r.width=c,r.height=u):(r.width=u,r.height=c),r.width+=2*l,r.height+=2*s,{canvas:r,rotate:o,width:t,height:n,border:i}}},{key:"getImage",value:function(){var e=this.getCroppingRect(),t=this.state.image;e.x*=t.resource.width,e.y*=t.resource.height,e.width*=t.resource.width,e.height*=t.resource.height;var n=document.createElement("canvas");this.isVertical()?(n.width=e.height,n.height=e.width):(n.width=e.width,n.height=e.height);var o=n.getContext("2d");return o.translate(n.width/2,n.height/2),o.rotate(this.props.rotate*Math.PI/180),o.translate(-n.width/2,-n.height/2),this.isVertical()&&o.translate((n.width-n.height)/2,(n.height-n.width)/2),t.backgroundColor&&(o.fillStyle=t.backgroundColor,o.fillRect(-e.x,-e.y,t.resource.width,t.resource.height)),o.drawImage(t.resource,-e.x,-e.y),n}},{key:"getImageScaledToCanvas",value:function(){var e=this.getDimensions(),t=e.width,n=e.height,o=document.createElement("canvas");return this.isVertical()?(o.width=n,o.height=t):(o.width=t,o.height=n),this.paintImage(o.getContext("2d"),this.state.image,0,1),o}},{key:"getXScale",value:function(){var e=this.props.width/this.props.height,t=this.state.image.width/this.state.image.height;return Math.min(1,e/t)}},{key:"getYScale",value:function(){var e=this.props.height/this.props.width,t=this.state.image.height/this.state.image.width;return Math.min(1,e/t)}},{key:"getCroppingRect",value:function(){var e=this.props.position||{x:this.state.image.x,y:this.state.image.y},t=1/this.props.scale*this.getXScale(),n=1/this.props.scale*this.getYScale(),o={x:e.x-t/2,y:e.y-n/2,width:t,height:n},i=0,r=1-o.width,a=0,l=1-o.height;return(this.props.disableBoundaryChecks||1<t||1<n)&&(i=-o.width,a=-o.height,l=r=1),u(u({},o),{},{x:Math.max(i,Math.min(o.x,r)),y:Math.max(a,Math.min(o.y,l))})}},{key:"loadImage",value:function(e){var t;b&&e instanceof File?this.loadingImage=(t=e,new Promise((function(e,n){var o=new FileReader;o.onload=function(t){try{var o=m(t.target.result);e(o)}catch(t){n(t)}},o.readAsDataURL(t)})).then(this.handleImageReady).catch(this.props.onLoadFailure)):"string"==typeof e&&(this.loadingImage=m(e,this.props.crossOrigin).then(this.handleImageReady).catch(this.props.onLoadFailure))}},{key:"getInitialSize",value:function(e,t){var n,o,i=this.getDimensions();return t/e<i.height/i.width?o=e*((n=this.getDimensions().height)/t):n=t*((o=this.getDimensions().width)/e),{height:n,width:o}}},{key:"paintImage",value:function(e,t,n,o){var i,r=3<arguments.length&&void 0!==o?o:k;t.resource&&(i=this.calculatePosition(t,n),e.save(),e.translate(e.canvas.width/2,e.canvas.height/2),e.rotate(this.props.rotate*Math.PI/180),e.translate(-e.canvas.width/2,-e.canvas.height/2),this.isVertical()&&e.translate((e.canvas.width-e.canvas.height)/2,(e.canvas.height-e.canvas.width)/2),e.scale(r,r),e.globalCompositeOperation="destination-over",e.drawImage(t.resource,i.x,i.y,i.width,i.height),t.backgroundColor&&(e.fillStyle=t.backgroundColor,e.fillRect(i.x,i.y,i.width,i.height)),e.restore())}},{key:"calculatePosition",value:function(e,t){e=e||this.state.image;var n=p(this.getBorders(t),2),o=n[0],i=n[1],r=this.getCroppingRect(),a=e.width*this.props.scale,l=e.height*this.props.scale,s=-r.x*a,u=-r.y*l;return this.isVertical()?(s+=i,u+=o):(s+=o,u+=i),{x:s,y:u,height:l,width:a}}},{key:"paint",value:function(e){e.save(),e.scale(k,k),e.translate(0,0),e.fillStyle="rgba("+this.props.color.slice(0,4).join(",")+")";var t,n,o,i,r,a,l,s,u=this.props.borderRadius,c=this.getDimensions(),d=p(this.getBorders(c.border),2),h=d[0],g=d[1],v=c.canvas.height,m=c.canvas.width;u=Math.max(u,0),u=Math.min(u,m/2-h,v/2-g),e.beginPath(),t=e,i=m-2*(n=h),r=v-2*(o=g),0===(a=u)?t.rect(n,o,i,r):(l=i-a,s=r-a,t.translate(n,o),t.arc(a,a,a,Math.PI,1.5*Math.PI),t.lineTo(l,0),t.arc(l,a,a,1.5*Math.PI,2*Math.PI),t.lineTo(i,s),t.arc(l,s,a,2*Math.PI,.5*Math.PI),t.lineTo(a,r),t.arc(a,s,a,.5*Math.PI,Math.PI),t.translate(-n,-o)),e.rect(m,0,-m,v),e.fill("evenodd"),e.restore()}},{key:"render",value:function(){var e=this.props,t=(e.scale,e.rotate,e.image,e.border,e.borderRadius,e.width,e.height,e.position,e.color,e.backgroundColor,e.style),n=(e.crossOrigin,e.onLoadFailure,e.onLoadSuccess,e.onImageReady,e.onImageChange,e.onMouseUp,e.onMouseMove,e.onPositionChange,e.disableBoundaryChecks,e.disableHiDPIScaling,e.disableCanvasRotation,function(e,t){if(null==e)return{};var n,o=function(e,t){if(null==e)return{};for(var n,o={},i=Object.keys(e),r=0;r<i.length;r++)n=i[r],0<=t.indexOf(n)||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols)for(var i=Object.getOwnPropertySymbols(e),r=0;r<i.length;r++)n=i[r],0<=t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n]);return o}(e,["scale","rotate","image","border","borderRadius","width","height","position","color","backgroundColor","style","crossOrigin","onLoadFailure","onLoadSuccess","onImageReady","onImageChange","onMouseUp","onMouseMove","onPositionChange","disableBoundaryChecks","disableHiDPIScaling","disableCanvasRotation"])),o=this.getDimensions(),r={width:o.canvas.width,height:o.canvas.height,cursor:this.state.drag?"grabbing":"grab",touchAction:"none"},a={width:o.canvas.width*k,height:o.canvas.height*k,style:u(u({},r),t)};return a[x.react.down]=this.handleMouseDown,y&&(a[x.react.mouseDown]=this.handleMouseDown),i.default.createElement("canvas",l({ref:this.setCanvas},a,n))}}])&&r(e.prototype,t),o}();return a(M,"propTypes",{scale:o.default.number,rotate:o.default.number,image:o.default.oneOfType([o.default.string].concat(function(e){if(Array.isArray(e))return v(e)}(f=b?[o.default.instanceOf(File)]:[])||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(f)||g(f)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),border:o.default.oneOfType([o.default.number,o.default.arrayOf(o.default.number)]),borderRadius:o.default.number,width:o.default.number,height:o.default.number,position:o.default.shape({x:o.default.number,y:o.default.number}),color:o.default.arrayOf(o.default.number),backgroundColor:o.default.string,crossOrigin:o.default.oneOf(["","anonymous","use-credentials"]),onLoadFailure:o.default.func,onLoadSuccess:o.default.func,onImageReady:o.default.func,onImageChange:o.default.func,onMouseUp:o.default.func,onMouseMove:o.default.func,onPositionChange:o.default.func,disableBoundaryChecks:o.default.bool,disableHiDPIScaling:o.default.bool,disableCanvasRotation:o.default.bool}),a(M,"defaultProps",{scale:1,rotate:0,border:25,borderRadius:0,width:200,height:200,color:[0,0,0,.5],onLoadFailure:function(){},onLoadSuccess:function(){},onImageReady:function(){},onImageChange:function(){},onMouseUp:function(){},onMouseMove:function(){},onPositionChange:function(){},disableBoundaryChecks:!1,disableHiDPIScaling:!1,disableCanvasRotation:!0}),M}(n(23615),n(27378))}}]);
//# sourceMappingURL=455.js.map