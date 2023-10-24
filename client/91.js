"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91],{78083:function(n,e,t){t.d(e,{Z:function(){return g}});var r,i,o,l=t(27378),c=t(17157),a=t(5234),d=t(88922),u=t(12693),m=t(41652),s=t(50669),f=t(3924),h=f.ZP.div(r||(r=(0,s.Z)(["\n  background-color: #fff;\n  min-height: 200px;\n  max-width: 500px;\n  min-width: 440px;\n  padding: 15px 10px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  border-radius: 5px;\n"]))),p=f.ZP.span(i||(i=(0,s.Z)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: ",";\n  cursor: pointer;\n  font-size: 14px;\n  \n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.lightBgColor}),(function(n){return n.theme.primaryTextColor})),x=f.ZP.div(o||(o=(0,s.Z)(["\n  flex-grow: 1;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n"]))),g=function(n){var e=n.itemId,t=n.text,r=n.action,i=n.onClose,o=(0,u.T)(),s=(0,d.$G)().t;return l.createElement(h,null,l.createElement(p,{className:"icon-cross",onClick:i}),l.createElement(a.Z,{align:"center"},s("confirmDelete")),l.createElement(m.Z,{align:"center"},s(t)),l.createElement(x,null,l.createElement(c.Z,{width:"45%",text:s("confirm"),clickHandler:function(){o(r(e)),i()}}),l.createElement(c.Z,{width:"45%",styleType:"reverse",text:s("cancel"),clickHandler:i})))}},74061:function(n,e,t){t.d(e,{Z:function(){return f}});var r,i,o=t(27378),l=t(50669),c=t(3924),a=t(4930),d=c.ZP.div(r||(r=(0,l.Z)(["\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.14);\n  z-index: 50;\n  animation: "," 0.2s linear;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])),a.M),u=c.ZP.div(i||(i=(0,l.Z)(["\n  position: relative;\n  animation: "," 0.1s ease-in;\n"])),a.A),m=t(97534),s=t(91011),f=function(n){var e=n.children,t=n.outsideHandler,r=(0,o.useRef)(null);return(0,o.useEffect)((function(){return(0,s.Yh)(),function(){(0,s.b)()}}),[]),(0,m.O)(r,t||function(){return null}),o.createElement(d,null,o.createElement(u,{ref:r},e||null))}},31678:function(n,e,t){t.d(e,{v:function(){return x}});var r,i,o,l,c=t(65809),a=t(27378),d=t(50669),u=t(3924),m=(0,u.F4)(r||(r=(0,d.Z)(["\n  0% {\n    opacity: 0;\n\t  transform: scale(0.95);\n  }\n\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n"]))),s=u.ZP.div(i||(i=(0,d.Z)(["\n  display: inline-block;\n  position: relative;\n  height: 20px;\n  z-index: ",";\n  width: 20px;\n"])),(function(n){return n.isOpen?"10":"1"})),f=u.ZP.span(o||(o=(0,d.Z)(["\n  line-height: 1;\n  font-size: 22px;\n  z-index: 12;\n  color: ",";\n\n  &:hover {\n    cursor: pointer;\n    transition: all 0.2s;\n    color: ",";\n  }\n"])),(function(n){return n.theme.lightTxtColor}),(function(n){return n.theme.accentColor})),h=u.ZP.div(l||(l=(0,d.Z)(["\n  background-color: #ffffff;\n  position: absolute;\n  right: 50%;\n  bottom: -100%;\n  width: 200px;\n  max-width: 200px;\n  box-shadow: ",";\n  border-radius: 5px;\n  border: 1px solid #efefef;\n  display: ",";\n  animation: "," 0.1s linear;\n"])),(function(n){return n.theme.softShadow}),(function(n){return n.isOpen?"block":"none"}),m),p=t(97534),x=function(n){var e=n.icon,t=n.children,r=(0,a.useRef)(null),i=(0,a.useState)(!1),o=(0,c.Z)(i,2),l=o[0],d=o[1];return(0,p.O)(r,(function(){return d(!1)})),a.createElement(s,{ref:r,isOpen:l},a.createElement(f,{className:e||"icon-more",onClick:function(){l||d(!0)}}),a.createElement(h,{isOpen:l},t))}},4930:function(n,e,t){t.d(e,{A:function(){return a},M:function(){return c}});var r,i,o=t(50669),l=t(3924),c=(0,l.F4)(r||(r=(0,o.Z)(["\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n"]))),a=(0,l.F4)(i||(i=(0,o.Z)(["\n  from {\n    opacity: 0;\n    bottom: -15px;\n  }\n\n  to {\n    opacity: 1;\n    bottom: 0;\n  }\n"])))},91011:function(n,e,t){function r(){var n=function(){var n=document.createElement("div");n.style.cssText="width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(n);var e=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),e}();document.body.style.overflowY="hidden",document.body.style.paddingRight="".concat(n,"px")}function i(){document.body.style.overflowY="scroll",document.body.style.paddingRight="0"}t.d(e,{Yh:function(){return r},b:function(){return i}})},97534:function(n,e,t){t.d(e,{O:function(){return i}});var r=t(27378);function i(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;(0,r.useEffect)((function(){function t(t){var r=t.target;n.current&&!n.current.contains(r)&&e()}return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}),[n,t])}},53091:function(n,e,t){t.r(e),t.d(e,{default:function(){return W}});var r,i,o,l,c,a,d,u,m,s,f,h=t(27378),p=t(5234),x=t(17157),g=t(88922),b=t(12693),E=t(31678),v=t(58177),Z=t(65809),w=t(74061),y=t(78083),k=t(14935),C=t(3972),P=t(42372),T=t(50669),z=t(3924),S=z.ZP.ul(r||(r=(0,T.Z)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n"]))),M=z.ZP.li(i||(i=(0,T.Z)(["\n  text-align: left;\n  padding: 10px 15px;\n  border-bottom: 1px solid ",";\n  cursor: pointer;\n  transition: all 0.1s;\n  user-select: none;\n  \n  &:hover {\n    background-color: ",";\n  }\n  \n  &:last-child {\n    color: ",";\n    \n    &:hover {\n      background-color: ",";\n    }\n  }\n"])),(function(n){return n.theme.borderColor}),(function(n){return n.theme.brightBgColor}),(function(n){return n.theme.dangerColor}),(function(n){var e=n.theme;return"".concat(e.dangerColor,"20")})),O=z.ZP.div(o||(o=(0,T.Z)(["\n  background-color: rgba(0, 0, 0, 0.06);\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n"]))),F=function(n){var e=n.marker,t=(0,h.useState)(!1),r=(0,Z.Z)(t,2),i=r[0],o=r[1],l=(0,b.C)((function(n){return n.memorials.loadingItems})),c=(0,k.s0)(),a=e._id,d=(0,g.$G)().t,u=function(){o(!i)};return h.createElement(h.Fragment,null,i&&h.createElement(w.Z,{outsideHandler:u},h.createElement(y.Z,{itemId:a,action:P.gm,text:d("deleteMemorialMarkerText"),onClose:u})),l.includes(a)&&h.createElement(O,null,h.createElement(C.a,{size:15})),h.createElement(S,null,h.createElement(M,{onClick:function(){c("/mapmem-admin/memorials/edit/".concat(a))}},d("edit")),h.createElement(M,{onClick:u},d("delete"))))},H=(0,z.F4)(l||(l=(0,T.Z)(["\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"]))),B=z.ZP.tr(c||(c=(0,T.Z)(["\n  position: relative;\n  border-bottom: 1px solid ",";\n  width: 100%;\n  animation: "," 0.2s linear;\n  \n  td {\n    height: 60px;\n    padding: 15px 5px;\n    \n    p {\n      margin: 0 10px 0 0;\n    }\n  }\n  \n  td:first-child {\n    width: 20px;\n    padding-left: 10px;\n    text-align: center;\n  }\n  \n  td:nth-child(2) {\n    text-align: center;\n  }\n\n  td:nth-child(3) {\n    p {\n      display: -webkit-box;\n      -webkit-box-orient: vertical;\n      -webkit-line-clamp: 1;\n      overflow: hidden;\n    }\n  }\n\n  td:nth-child(4) {\n    \n    p {\n      display: -webkit-box;\n      -webkit-box-orient: vertical;\n      -webkit-line-clamp: 1;\n      overflow: hidden;\n    }\n  }\n  \n  td:nth-child(8) {\n    text-align: center;\n  }\n"])),(function(n){return n.theme.borderColor}),H),L=function(n){var e=n.memorial,t=e.index,r=e.title,i=e.description,o=e.icon,l=e.lat,c=e.lng,a=e.city;return h.createElement(B,null,h.createElement("td",null,t),h.createElement("td",null,h.createElement("img",{src:"".concat(v.B,"/").concat(o),alt:"icon"})),h.createElement("td",null,h.createElement("p",null,r.uk)),h.createElement("td",null,h.createElement("p",null,i.uk)),h.createElement("td",null,l.toString().slice(0,10)),h.createElement("td",null,c.toString().slice(0,10)),h.createElement("td",null,a),h.createElement("td",null,h.createElement(E.v,null,h.createElement(F,{marker:e}))))},R=t(76017),Y=z.ZP.table(a||(a=(0,T.Z)(["\n  border-collapse: collapse;\n  border-spacing: 0;\n  table-layout: fixed;\n  width: calc(100% - 20px);\n  background-color: #fff;\n  margin: 0 10px 40px;\n  border-radius: 10px;\n  box-shadow: ",";\n"])),(function(n){return n.theme.softShadow})),j=z.ZP.thead(d||(d=(0,T.Z)(["\n  width: 100%;\n  border-radius: 10px;\n  border: 1px solid ",";\n  \n  th {\n    text-align: left;\n    padding: 15px 5px;\n    font-weight: 600;\n    color: ",";\n    font-size: 14px;\n  }\n  \n  th:first-child {\n    width: 5%;\n    padding-left: 10px;\n    text-align: center;\n  }\n\n  th:nth-child(2) {\n    width: 60px;\n  }\n\n  th:nth-child(3) {\n    width: 20%;\n  }\n\n  th:nth-child(4) {\n    width: 30%;\n  }\n\n  th:nth-child(5) {\n    width: 15%;\n  }\n\n  th:nth-child(6) {\n    width: 15%;\n  }\n\n  th:nth-child(7) {\n    width: 5%;\n  }\n\n  th:nth-child(8) {\n    text-align: center;\n  }\n"])),(function(n){return n.theme.semiLightBgColor}),(function(n){return n.theme.primaryTextColor})),A=function(){var n=(0,b.C)(R.M);return h.createElement(Y,null,h.createElement(j,null,h.createElement("tr",null,h.createElement("th",null,"№"),h.createElement("th",null,"Іконка"),h.createElement("th",null,"Назва"),h.createElement("th",null,"Опис"),h.createElement("th",null,"Широта"),h.createElement("th",null,"Довгота"),h.createElement("th",null,"Місто"),h.createElement("th",null,"#"))),h.createElement("tbody",null,n.map((function(n){return h.createElement(L,{key:n._id,memorial:n})}))))},G=z.ZP.div(u||(u=(0,T.Z)(["\n  padding: 10px 20px;\n  background-color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  border-bottom: 1px solid ",";\n"])),(function(n){return n.theme.borderColor})),I=z.ZP.div(m||(m=(0,T.Z)(["\n  display: flex;\n  gap: 15px;\n  align-items: center;\n"]))),N=z.ZP.span(s||(s=(0,T.Z)(["\n  color: ",";\n  cursor: pointer;\n  \n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.lightTxtColor}),(function(n){return n.theme.primaryTextColor})),$=z.ZP.div(f||(f=(0,T.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),W=function(){var n=(0,b.C)((function(n){return n.memorials.isLoading})),e=(0,b.T)(),t=(0,k.s0)(),r=(0,g.$G)().t;return h.createElement("div",null,h.createElement(G,null,h.createElement(I,null,h.createElement(p.Z,null,r("memorials")),h.createElement(N,{className:"icon-refresh",onClick:function(){e((0,P.vS)())}})),h.createElement($,null,h.createElement(x.Z,{clickHandler:function(){t("/mapmem-admin/memorials/add")},text:r("addMemorial")}))),n?h.createElement(C.a,{size:50}):h.createElement(A,null))}},76017:function(n,e,t){t.d(e,{M:function(){return r}});var r=t(21236).P5.getSelectors((function(n){return n.memorials})).selectAll}}]);
//# sourceMappingURL=91.js.map