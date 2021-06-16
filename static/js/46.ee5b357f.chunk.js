(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[46],{2756:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(4),i=a(31),r=a(30),c=a(2633),o=a(375),s=a(598),l=a(2730),j=a(39),d=a(0);function u(e){var t=e.links,a=e.action,u=e.heading,b=e.moreLink,O=void 0===b?[]:b,x=e.sx,h=Object(i.a)(e,["links","action","heading","moreLink","sx"]);return Object(d.jsxs)(c.a,{sx:x,mb:5,spacing:2,children:[Object(d.jsxs)(c.a,{direction:"row",alignItems:"center",children:[Object(d.jsxs)(o.a,{sx:{flexGrow:1},children:[Object(d.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:u}),Object(d.jsx)(j.c,Object(n.a)({links:t},h))]}),a&&Object(d.jsx)(o.a,{sx:{flexShrink:0},children:a})]}),Object(r.isString)(O)?Object(d.jsx)(l.a,{href:O,target:"_blank",variant:"body2",children:O}):O.map((function(e){return Object(d.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},2759:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return j}));var n=a(4),i=a(598),r=a(2750),c=a(2768),o=a(375),s=a(0);function l(e){var t=e.title;return Object(s.jsx)(i.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function j(e){var t=e.title,a=e.sx,i=e.children;return Object(s.jsxs)(r.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(s.jsx)(c.a,{title:t}),Object(s.jsx)(o.a,{sx:Object(n.a)({p:3,minHeight:180},a),children:i})]})}},2768:function(e,t,a){"use strict";var n=a(6),i=a(7),r=a(2),c=a(1),o=(a(12),a(11)),s=a(2686),l=a(598),j=a(14),d=a(8),u=a(2627),b=a(2687);function O(e){return Object(u.a)("MuiCardHeader",e)}var x=Object(b.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),h=a(0),p=Object(d.a)("div",{},{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(r.a)((a={},Object(n.a)(a,"& .".concat(x.title),t.title),Object(n.a)(a,"& .".concat(x.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),m=Object(d.a)("div",{},{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),f=Object(d.a)("div",{},{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),v=Object(d.a)("div",{},{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),g=c.forwardRef((function(e,t){var a=Object(j.a)({props:e,name:"MuiCardHeader"}),n=a.action,c=a.avatar,d=a.className,u=a.component,b=void 0===u?"div":u,x=a.disableTypography,g=void 0!==x&&x,y=a.subheader,C=a.subheaderTypographyProps,k=a.title,M=a.titleTypographyProps,S=Object(i.a)(a,["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),T=Object(r.a)({},a,{component:b,disableTypography:g}),w=function(e){var t=e.classes;return Object(s.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},O,t)}(T),D=k;null==D||D.type===l.a||g||(D=Object(h.jsx)(l.a,Object(r.a)({variant:c?"body2":"h5",className:w.title,component:"span",display:"block"},M,{children:D})));var P=y;return null==P||P.type===l.a||g||(P=Object(h.jsx)(l.a,Object(r.a)({variant:c?"body2":"body1",className:w.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:P}))),Object(h.jsxs)(p,Object(r.a)({className:Object(o.a)(w.root,d),as:b,ref:t,styleProps:T},S,{children:[c&&Object(h.jsx)(m,{className:w.avatar,styleProps:T,children:c}),Object(h.jsxs)(v,{className:w.content,styleProps:T,children:[D,P]}),n&&Object(h.jsx)(f,{className:w.action,styleProps:T,children:n})]}))}));t.a=g},2923:function(e,t,a){"use strict";var n=a(7),i=a(2),r=a(1),c=(a(12),a(11)),o=a(2686),s=a(8),l=a(14),j=a(2627),d=a(2687);function u(e){return Object(j.a)("MuiDialogActions",e)}Object(d.a)("MuiDialogActions",["root","spacing"]);var b=a(0),O=Object(s.a)("div",{},{name:"MuiDialogActions",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return Object(i.a)({},t.root,!a.disableSpacing&&t.spacing)}})((function(e){var t=e.styleProps;return Object(i.a)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),x=r.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiDialogActions"}),r=a.className,s=a.disableSpacing,j=void 0!==s&&s,d=Object(n.a)(a,["className","disableSpacing"]),x=Object(i.a)({},a,{disableSpacing:j}),h=function(e){var t=e.classes,a={root:["root",!e.disableSpacing&&"spacing"]};return Object(o.a)(a,u,t)}(x);return Object(b.jsx)(O,Object(i.a)({className:Object(c.a)(h.root,r),styleProps:x,ref:t},d))}));t.a=x},3036:function(e,t,a){"use strict";var n=a(601),i=a(600);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;i(a(1));var r=n(a(604)),c=a(0),o=(0,r.default)((0,c.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=o},3048:function(e,t,a){"use strict";var n=a(7),i=a(2),r=a(1),c=(a(12),a(11)),o=a(2686),s=a(104),l=a(8),j=a(14),d=a(2627),u=a(2687);function b(e){return Object(d.a)("MuiListItemAvatar",e)}Object(u.a)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var O=a(0),x=Object(l.a)("div",{},{name:"MuiListItemAvatar",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return Object(i.a)({},t.root,"flex-start"===a.alignItems&&t.alignItemsFlexStart)}})((function(e){var t=e.styleProps;return Object(i.a)({minWidth:56,flexShrink:0},"flex-start"===t.alignItems&&{marginTop:8})})),h=r.forwardRef((function(e,t){var a=Object(j.a)({props:e,name:"MuiListItemAvatar"}),l=a.className,d=Object(n.a)(a,["className"]),u=r.useContext(s.a),h=Object(i.a)({},a,{alignItems:u.alignItems}),p=function(e){var t=e.alignItems,a=e.classes,n={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return Object(o.a)(n,b,a)}(h);return Object(O.jsx)(x,Object(i.a)({className:Object(c.a)(p.root,l),styleProps:h,ref:t},d))}));t.a=h},3109:function(e,t,a){"use strict";var n=a(2),i=a(7),r=a(1),c=(a(12),a(11)),o=a(2686),s=a(598),l=a(8),j=a(14),d=a(2627),u=a(2687);function b(e){return Object(d.a)("MuiDialogTitle",e)}Object(u.a)("MuiDialogTitle",["root"]);var O=a(0),x=Object(l.a)("div",{},{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{margin:0,padding:"16px 24px",flex:"0 0 auto"}})),h=r.forwardRef((function(e,t){var a=Object(j.a)({props:e,name:"MuiDialogTitle"}),r=a.children,l=a.className,d=a.disableTypography,u=void 0!==d&&d,h=Object(i.a)(a,["children","className","disableTypography"]),p=Object(n.a)({},a,{disableTypography:u}),m=function(e){var t=e.classes;return Object(o.a)({root:["root"]},b,t)}(p);return Object(O.jsx)(x,Object(n.a)({className:Object(c.a)(m.root,l),styleProps:p,ref:t},h,{children:u?r:Object(O.jsx)(s.a,{component:"h2",variant:"h6",children:r})}))}));t.a=h},3111:function(e,t,a){"use strict";var n=a(7),i=a(2),r=a(1),c=(a(12),a(11)),o=a(2686),s=a(8),l=a(14),j=a(2627),d=a(2687);function u(e){return Object(j.a)("MuiDialogContent",e)}Object(d.a)("MuiDialogContent",["root","dividers"]);var b=a(0),O=Object(s.a)("div",{},{name:"MuiDialogContent",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return Object(i.a)({},t.root,a.dividers&&t.dividers)}})((function(e){var t=e.theme,a=e.styleProps;return Object(i.a)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-of-type":{paddingTop:20}},a.dividers&&{padding:"16px 24px",borderTop:"1px solid ".concat(t.palette.divider),borderBottom:"1px solid ".concat(t.palette.divider)})})),x=r.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiDialogContent"}),r=a.className,s=a.dividers,j=void 0!==s&&s,d=Object(n.a)(a,["className","dividers"]),x=Object(i.a)({},a,{dividers:j}),h=function(e){var t=e.classes,a={root:["root",e.dividers&&"dividers"]};return Object(o.a)(a,u,t)}(x);return Object(b.jsx)(O,Object(i.a)({className:Object(c.a)(h.root,r),styleProps:x,ref:t},d))}));t.a=x},4432:function(e,t,a){"use strict";var n=a(601),i=a(600);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;i(a(1));var r=n(a(604)),c=a(0),o=(0,r.default)((0,c.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");t.default=o},4433:function(e,t,a){"use strict";var n=a(601),i=a(600);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;i(a(1));var r=n(a(604)),c=a(0),o=(0,r.default)((0,c.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.default=o},4491:function(e,t,a){"use strict";var n=a(7),i=a(2),r=a(1),c=(a(12),a(2686)),o=a(8),s=a(14),l=a(598),j=a(2627),d=a(2687);function u(e){return Object(j.a)("MuiDialogContentText",e)}Object(d.a)("MuiDialogContentText",["root"]);var b=a(0),O=Object(o.a)(l.a,{shouldForwardProp:function(e){return Object(o.b)(e)||"classes"===e}},{name:"MuiDialogContentText",slot:"Root",overridesResolver:function(e,t){return t.root}})({marginBottom:12}),x=r.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiDialogContentText"}),r=Object(n.a)(a,["children"]),o=function(e){var t=e.classes,a=Object(c.a)({root:["root"]},u,t);return Object(i.a)({},t,a)}(r);return Object(b.jsx)(O,Object(i.a)({component:"p",variant:"body1",color:"text.secondary",ref:t,styleProps:r},a,{classes:o}))}));t.a=x},4583:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return re}));var n=a(8),i=a(375),r=a(2739),c=a(2719),o=a(20),s=a(378),l=a(2756),j=a(17),d=a(1),u=a(2732),b=a(3109),O=a(3111),x=a(4491),h=a(2743),p=a(2923),m=a(297),f=a(39),v=a(0);function g(){var e=Object(d.useState)(!1),t=Object(j.a)(e,2),a=t[0],n=t[1],i=function(){n(!1)};return Object(v.jsxs)("div",{children:[Object(v.jsx)(f.d,{variant:"outlined",color:"warning",onClick:function(){n(!0)},children:"Form Dialogs"}),Object(v.jsxs)(u.a,{open:a,onClose:i,children:[Object(v.jsx)(b.a,{children:"Subscribe"}),Object(v.jsxs)(O.a,{children:[Object(v.jsx)(x.a,{children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),Object(v.jsx)(h.a,{autoFocus:!0,fullWidth:!0,type:"email",margin:"dense",variant:"outlined",label:"Email Address"})]}),Object(v.jsxs)(p.a,{children:[Object(v.jsx)(m.a,{onClick:i,color:"inherit",children:"Cancel"}),Object(v.jsx)(m.a,{onClick:i,variant:"contained",children:"Subscribe"})]})]})]})}function y(){var e=Object(d.useState)(!1),t=Object(j.a)(e,2),a=t[0],n=t[1],i=function(){n(!1)};return Object(v.jsxs)("div",{children:[Object(v.jsx)(f.d,{color:"info",variant:"outlined",onClick:function(){n(!0)},children:"Open alert dialog"}),Object(v.jsxs)(u.a,{open:a,onClose:i,children:[Object(v.jsx)(b.a,{children:"Use Google's location service?"}),Object(v.jsx)(O.a,{children:Object(v.jsx)(x.a,{id:"alert-dialog-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),Object(v.jsxs)(p.a,{children:[Object(v.jsx)(m.a,{onClick:i,children:"Disagree"}),Object(v.jsx)(m.a,{onClick:i,autoFocus:!0,children:"Agree"})]})]})]})}var C=a(19);function k(){var e=Object(d.useState)(!1),t=Object(j.a)(e,2),a=t[0],n=t[1],i=Object(d.useState)("paper"),r=Object(j.a)(i,2),c=r[0],o=r[1],s=function(e){return function(){n(!0),o(e)}},l=function(){n(!1)},h=Object(d.useRef)(null);return Object(d.useEffect)((function(){if(a){var e=h.current;null!==e&&e.focus()}}),[a]),Object(v.jsxs)("div",{children:[Object(v.jsx)(m.a,{variant:"outlined",onClick:s("paper"),sx:{mr:2},children:"scroll=paper"}),Object(v.jsx)(m.a,{variant:"outlined",onClick:s("body"),children:"scroll=body"}),Object(v.jsxs)(u.a,{open:a,onClose:l,scroll:c,children:[Object(v.jsx)(b.a,{sx:{pb:2},children:"Subscribe"}),Object(v.jsx)(O.a,{dividers:"paper"===c,children:Object(v.jsx)(x.a,{id:"scroll-dialog-description",ref:h,tabIndex:-1,children:Object(C.a)(new Array(50)).map((function(){return"Cras mattis consectetur purus sit amet fermentum.\nCras justo odio, dapibus ac facilisis in, egestas eget quam.\nMorbi leo risus, porta ac consectetur ac, vestibulum at eros.\nPraesent commodo cursus magna, vel scelerisque nisl consectetur et."})).join("\n")})}),Object(v.jsxs)(p.a,{children:[Object(v.jsx)(m.a,{onClick:l,children:"Cancel"}),Object(v.jsx)(m.a,{variant:"contained",onClick:l,children:"Subscribe"})]})]})]})}var M=a(3036),S=a.n(M),T=a(4432),w=a.n(T),D=a(598),P=a(2727),R=a(372),N=a(3048),A=a(2717),I=a(2725),F=["username@gmail.com","user02@gmail.com"];function W(){var e=Object(d.useState)(!1),t=Object(j.a)(e,2),a=t[0],n=t[1],r=Object(d.useState)(F[1]),c=Object(j.a)(r,2),o=c[0],s=c[1],l=function(e){n(!1),s(e)};return Object(v.jsxs)(i.a,{sx:{textAlign:"center"},children:[Object(v.jsxs)(D.a,{variant:"subtitle1",component:"div",children:["Selected: ",o]}),Object(v.jsx)("br",{}),Object(v.jsx)(m.a,{variant:"outlined",onClick:function(){n(!0)},children:"Open simple dialog"}),Object(v.jsxs)(u.a,{open:a,onClose:function(){return l(o)},children:[Object(v.jsx)(b.a,{id:"simple-dialog-title",children:"Set backup account"}),Object(v.jsxs)(P.a,{children:[F.map((function(e){return Object(v.jsxs)(R.b,{button:!0,onClick:function(){return l(e)},children:[Object(v.jsx)(N.a,{children:Object(v.jsx)(A.a,{sx:{color:"info.main",backgroundColor:"info.lighter"},children:Object(v.jsx)(w.a,{})})}),Object(v.jsx)(I.a,{primary:e})]},e)})),Object(v.jsxs)(R.b,{autoFocus:!0,button:!0,onClick:function(){return l("addAccount")},children:[Object(v.jsx)(N.a,{children:Object(v.jsx)(A.a,{children:Object(v.jsx)(S.a,{})})}),Object(v.jsx)(I.a,{primary:"Add account"})]})]})]})]})}var L=a(2746),H=a(2713),_=a(2709),G=a(2742),B=a(2749),z=a(2729);function U(){var e=Object(d.useState)(!1),t=Object(j.a)(e,2),a=t[0],n=t[1],r=Object(d.useState)(!0),c=Object(j.a)(r,2),o=c[0],s=c[1],l=Object(d.useState)("sm"),h=Object(j.a)(l,2),f=h[0],g=h[1],y=function(){n(!1)};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(m.a,{variant:"outlined",onClick:function(){n(!0)},children:"Max Width Dialog"}),Object(v.jsxs)(u.a,{open:a,maxWidth:f,onClose:y,fullWidth:o,children:[Object(v.jsx)(b.a,{children:"Optional sizes"}),Object(v.jsxs)(O.a,{children:[Object(v.jsx)(x.a,{children:"You can set my maximum width and whether to adapt or not."}),Object(v.jsxs)(i.a,{component:"form",noValidate:!0,sx:{margin:"auto",display:"flex",width:"fit-content",flexDirection:"column"},children:[Object(v.jsxs)(L.a,{sx:{mt:2,minWidth:120},children:[Object(v.jsx)(H.a,{htmlFor:"max-width",children:"maxWidth"}),Object(v.jsxs)(_.a,{autoFocus:!0,value:f,onChange:function(e){g(e.target.value)},inputProps:{name:"max-width",id:"max-width"},children:[Object(v.jsx)(G.a,{value:!1,children:"false"}),Object(v.jsx)(G.a,{value:"xs",children:"xs"}),Object(v.jsx)(G.a,{value:"sm",children:"sm"}),Object(v.jsx)(G.a,{value:"md",children:"md"}),Object(v.jsx)(G.a,{value:"lg",children:"lg"}),Object(v.jsx)(G.a,{value:"xl",children:"xl"})]})]}),Object(v.jsx)(B.a,{control:Object(v.jsx)(z.a,{checked:o,onChange:function(e){s(e.target.checked)}}),label:"Full width",sx:{mt:1}})]})]}),Object(v.jsx)(p.a,{children:Object(v.jsx)(m.a,{onClick:y,variant:"contained",children:"Close"})})]})]})}var q=a(4),E=a(4433),J=a.n(E),V=a(2693),Y=a(2737),K=a(2738),Q=a(2728),X=a(2639),Z=Object(d.forwardRef)((function(e,t){return Object(v.jsx)(V.a,Object(q.a)({direction:"up",ref:t},e))}));function $(){var e=Object(d.useState)(!1),t=Object(j.a)(e,2),a=t[0],n=t[1],i=function(){n(!1)};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(f.d,{variant:"outlined",color:"error",onClick:function(){n(!0)},children:"Full Screen Dialogs"}),Object(v.jsxs)(u.a,{fullScreen:!0,open:a,onClose:i,TransitionComponent:Z,children:[Object(v.jsx)(Y.a,{position:"relative",children:Object(v.jsxs)(K.a,{children:[Object(v.jsx)(Q.a,{color:"inherit",edge:"start",onClick:i,children:Object(v.jsx)(J.a,{})}),Object(v.jsx)(D.a,{variant:"h6",sx:{flex:1,ml:2},children:"Sound"}),Object(v.jsx)(m.a,{autoFocus:!0,color:"inherit",onClick:i,children:"Save"})]})}),Object(v.jsxs)(P.a,{children:[Object(v.jsx)(R.b,{button:!0,children:Object(v.jsx)(I.a,{primary:"Phone ringtone",secondary:"Titania"})}),Object(v.jsx)(X.a,{}),Object(v.jsx)(R.b,{button:!0,children:Object(v.jsx)(I.a,{primary:"Default notification ringtone",secondary:"Tethys"})})]})]})]})}var ee=Object(d.forwardRef)((function(e,t){return Object(v.jsx)(V.a,Object(q.a)({direction:"up",ref:t},e))}));function te(){var e=Object(d.useState)(!1),t=Object(j.a)(e,2),a=t[0],n=t[1],i=function(){n(!1)};return Object(v.jsxs)("div",{children:[Object(v.jsx)(f.d,{variant:"outlined",color:"success",onClick:function(){n(!0)},children:"Transitions Dialogs"}),Object(v.jsxs)(u.a,{open:a,TransitionComponent:ee,keepMounted:!0,onClose:i,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(v.jsx)(b.a,{id:"alert-dialog-slide-title",children:"Use Google's location service?"}),Object(v.jsx)(O.a,{children:Object(v.jsx)(x.a,{id:"alert-dialog-slide-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),Object(v.jsxs)(p.a,{children:[Object(v.jsx)(m.a,{color:"inherit",onClick:i,children:"Disagree"}),Object(v.jsx)(m.a,{variant:"contained",onClick:i,children:"Agree"})]})]})]})}var ae=a(2759),ne={display:"flex",alignItems:"center",justifyContent:"center"},ie=Object(n.a)(s.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function re(){return Object(v.jsxs)(ie,{title:"Components: Dialog | Minimal-UI",children:[Object(v.jsx)(i.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(v.jsx)(r.a,{maxWidth:"lg",children:Object(v.jsx)(l.a,{heading:"Dialog",links:[{name:"Components",href:o.d.components},{name:"Dialog"}],moreLink:"https://next.material-ui.com/components/dialogs"})})}),Object(v.jsx)(r.a,{maxWidth:"lg",children:Object(v.jsxs)(c.a,{container:!0,spacing:3,children:[Object(v.jsx)(c.a,{item:!0,xs:12,md:4,children:Object(v.jsx)(ae.a,{title:"Simple",sx:ne,children:Object(v.jsx)(W,{})})}),Object(v.jsx)(c.a,{item:!0,xs:12,md:4,children:Object(v.jsx)(ae.a,{title:"Alerts",sx:ne,children:Object(v.jsx)(y,{})})}),Object(v.jsx)(c.a,{item:!0,xs:12,md:4,children:Object(v.jsx)(ae.a,{title:"Transitions",sx:ne,children:Object(v.jsx)(te,{})})}),Object(v.jsx)(c.a,{item:!0,xs:12,md:4,children:Object(v.jsx)(ae.a,{title:"Form",sx:ne,children:Object(v.jsx)(g,{})})}),Object(v.jsx)(c.a,{item:!0,xs:12,md:4,children:Object(v.jsx)(ae.a,{title:"Full Screen",sx:ne,children:Object(v.jsx)($,{})})}),Object(v.jsx)(c.a,{item:!0,xs:12,md:4,children:Object(v.jsx)(ae.a,{title:"Max Width Dialog",sx:ne,children:Object(v.jsx)(U,{})})}),Object(v.jsx)(c.a,{item:!0,xs:12,md:4,children:Object(v.jsx)(ae.a,{title:"Scrolling Content Dialogs",sx:ne,children:Object(v.jsx)(k,{})})})]})})]})}}}]);
//# sourceMappingURL=46.ee5b357f.chunk.js.map