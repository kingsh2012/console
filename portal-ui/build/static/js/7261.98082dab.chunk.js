"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[7261],{82461:function(e,n,t){t.d(n,{Z:function(){return C}});var i=t(23430),a=t(18489),r=t(50390),o=t(38342),c=t.n(o),s=t(25594),l=t(14602),d=t(94187),m=t(95467),u=t(46529),x=t(94258),p=t(86509),h=t(4285),f=t(72462),Z=t(97538),v=t(82981),j=t(62559),C=(0,h.Z)((function(e){return(0,p.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},f.YI),f.Hr),{},{valueString:{maxWidth:350,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",marginTop:2},fileInputField:{margin:"13px 0","@media (max-width: 900px)":{flexFlow:"column"}}},f.bV),{},{inputLabel:(0,a.Z)((0,a.Z)({},f.YI.inputLabel),{},{fontWeight:"normal"}),textBoxContainer:(0,a.Z)((0,a.Z)({},f.YI.textBoxContainer),{},{maxWidth:"100%",border:"1px solid #eaeaea",paddingLeft:"15px"})}))}))((function(e){var n=e.label,t=e.classes,a=e.onChange,o=e.id,p=e.name,h=e.disabled,f=void 0!==h&&h,C=e.tooltip,b=void 0===C?"":C,g=e.required,k=e.error,y=void 0===k?"":k,N=e.accept,w=void 0===N?"":N,B=e.value,P=void 0===B?"":B,F=(0,r.useState)(!1),I=(0,i.Z)(F,2),S=I[0],A=I[1];return(0,j.jsx)(r.Fragment,{children:(0,j.jsxs)(s.ZP,{item:!0,xs:12,className:"".concat(t.fileInputField," ").concat(t.fieldBottom," ").concat(t.fieldContainer," ").concat(""!==y?t.errorInField:""),children:[""!==n&&(0,j.jsxs)(l.Z,{htmlFor:o,className:"".concat(""!==y?t.fieldLabelError:""," ").concat(t.inputLabel),children:[(0,j.jsxs)("span",{children:[n,g?"*":""]}),""!==b&&(0,j.jsx)("div",{className:t.tooltipContainer,children:(0,j.jsx)(d.Z,{title:b,placement:"top-start",children:(0,j.jsx)("div",{className:t.tooltip,children:(0,j.jsx)(Z.Z,{})})})})]}),S||""===P?(0,j.jsxs)("div",{className:t.textBoxContainer,children:[(0,j.jsx)("input",{type:"file",name:p,onChange:function(e){var n=c()(e,"target.files[0].name","");!function(e,n){var t=e.target.files[0],i=new FileReader;i.readAsDataURL(t),i.onload=function(){var e=i.result;if(e){var t=e.toString().split("base64,");2===t.length&&n(t[1])}}}(e,(function(e){a(e,n)}))},accept:w,required:g,disabled:f,className:t.fileInputField}),""!==P&&(0,j.jsx)(m.Z,{color:"primary","aria-label":"upload picture",component:"span",onClick:function(){A(!1)},disableRipple:!1,disableFocusRipple:!1,size:"small",children:(0,j.jsx)(x.Z,{})}),""!==y&&(0,j.jsx)(v.Z,{errorMessage:y})]}):(0,j.jsxs)("div",{className:t.fileReselect,children:[(0,j.jsx)("div",{className:t.valueString,children:P}),(0,j.jsx)(m.Z,{color:"primary","aria-label":"upload picture",component:"span",onClick:function(){A(!0)},disableRipple:!1,disableFocusRipple:!1,size:"small",children:(0,j.jsx)(u.Z,{})})]})]})})}))},92440:function(e,n,t){var i=t(36222),a=t(18489),r=t(50390),o=t(86509),c=t(4285),s=t(49056),l=t(14602),d=t(94187),m=t(35477),u=t(25594),x=t(72462),p=t(97538),h=t(44977),f=t(62559),Z=(0,c.Z)((function(e){return{root:{width:50,height:24,padding:0,margin:0},switchBase:{padding:1,"&$checked":{transform:"translateX(24px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#4CCB92",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#4CCB92",border:"6px solid #fff"}},thumb:{width:22,height:22,backgroundColor:"#FAFAFA",border:"2px solid #FFFFFF",marginLeft:1},track:{borderRadius:12,backgroundColor:"#E2E2E2",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{},switchContainer:{display:"flex",alignItems:"center",justifyContent:"flex-end"}}}))(s.Z);n.Z=(0,c.Z)((function(e){return(0,o.Z)((0,a.Z)((0,a.Z)({divContainer:{marginBottom:20},indicatorLabelOn:{fontWeight:"bold",color:"#081C42 !important"},indicatorLabel:{fontSize:12,color:"#E2E2E2",margin:"0 8px 0 10px"},fieldDescription:{marginTop:4,color:"#999999"},tooltip:{fontSize:16}},x.OR),x.YI))}))((function(e){var n=e.label,t=void 0===n?"":n,a=e.onChange,o=e.value,c=e.id,s=e.name,x=e.checked,v=void 0!==x&&x,j=e.disabled,C=void 0!==j&&j,b=e.switchOnly,g=void 0!==b&&b,k=e.tooltip,y=void 0===k?"":k,N=e.description,w=void 0===N?"":N,B=e.classes,P=e.indicatorLabels,F=(0,f.jsxs)(r.Fragment,{children:[!g&&(0,f.jsx)("span",{className:(0,h.Z)(B.indicatorLabel,(0,i.Z)({},B.indicatorLabelOn,!v)),children:P&&P.length>1?P[1]:"OFF"}),(0,f.jsx)(Z,{checked:v,onChange:a,color:"primary",name:s,inputProps:{"aria-label":"primary checkbox"},disabled:C,disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0,value:o}),!g&&(0,f.jsx)("span",{className:(0,h.Z)(B.indicatorLabel,(0,i.Z)({},B.indicatorLabelOn,v)),children:P?P[0]:"ON"})]});return g?F:(0,f.jsx)("div",{className:B.divContainer,children:(0,f.jsxs)(u.ZP,{container:!0,alignItems:"center",children:[(0,f.jsx)(u.ZP,{item:!0,xs:!0,children:(0,f.jsxs)(u.ZP,{container:!0,children:[(0,f.jsx)(u.ZP,{item:!0,xs:12,sm:4,md:3,children:""!==t&&(0,f.jsxs)(l.Z,{htmlFor:c,className:B.inputLabel,children:[(0,f.jsx)("span",{children:t}),""!==y&&(0,f.jsx)("div",{className:B.tooltipContainer,children:(0,f.jsx)(d.Z,{title:y,placement:"top-start",children:(0,f.jsx)("div",{className:B.tooltip,children:(0,f.jsx)(p.Z,{})})})})]})}),(0,f.jsx)(u.ZP,{item:!0,xs:12,sm:!0,textAlign:"left",children:""!==w&&(0,f.jsx)(m.Z,{component:"p",className:B.fieldDescription,children:w})})]})}),(0,f.jsx)(u.ZP,{item:!0,xs:12,sm:2,textAlign:"right",className:B.switchContainer,children:F})]})})}))},60656:function(e,n,t){var i=t(18489),a=t(50390),r=t(84402),o=t(78426),c=t(93085),s=t(7887),l=t(66946),d=t(14476),m=t(95467),u=t(21278),x=t(86509),p=t(4285),h=t(72462),f=t(62559);n.Z=(0,p.Z)((function(e){return(0,x.Z)((0,i.Z)({},h.Qw))}))((function(e){var n=e.isOpen,t=void 0!==n&&n,x=e.onClose,p=e.onCancel,h=e.onConfirm,Z=e.classes,v=void 0===Z?{}:Z,j=e.title,C=void 0===j?"":j,b=e.isLoading,g=e.confirmationContent,k=e.cancelText,y=void 0===k?"Cancel":k,N=e.confirmText,w=void 0===N?"Confirm":N,B=e.confirmButtonProps,P=void 0===B?{}:B,F=e.cancelButtonProps,I=void 0===F?{}:F,S=e.titleIcon,A=void 0===S?null:S;return(0,f.jsxs)(r.Z,{open:t,onClose:function(e,n){"backdropClick"!==n&&x()},className:v.root,sx:{"& .MuiPaper-root":{padding:"1rem 2rem 2rem 1rem"}},children:[(0,f.jsxs)(o.Z,{className:v.title,children:[(0,f.jsxs)("div",{className:v.titleText,children:[A," ",C]}),(0,f.jsx)("div",{className:v.closeContainer,children:(0,f.jsx)(m.Z,{"aria-label":"close",className:v.closeButton,onClick:x,disableRipple:!0,size:"small",children:(0,f.jsx)(u.Z,{})})})]}),(0,f.jsx)(c.Z,{className:v.content,children:g}),(0,f.jsxs)(s.Z,{className:v.actions,children:[(0,f.jsx)(l.Z,(0,i.Z)((0,i.Z)({className:v.cancelButton,onClick:p||x,disabled:b,type:"button"},I),{},{variant:"outlined",color:"primary",children:y})),(0,f.jsx)(d.Z,(0,i.Z)((0,i.Z)({className:v.confirmButton,type:"button",onClick:h,loading:b,disabled:b,variant:"outlined",color:"secondary",loadingPosition:"start",startIcon:(0,f.jsx)(a.Fragment,{}),autoFocus:!0},P),{},{children:w}))]})]})}))},67261:function(e,n,t){t.r(n);var i=t(36222),a=t(35531),r=t(23430),o=t(18489),c=t(86509),s=t(4285),l=t(72462),d=t(46981),m=t(25594),u=t(63020),x=t(50390),p=t(87248),h=t.n(p),f=t(92440),Z=t(23473),v=t(18201),j=t(35477),C=t(66946),b=t(82461),g=t(30324),k=t(44149),y=t(34424),N=t(46864),w=t(60656),B=t(11387),P=t(62559),F={setErrorSnackMessage:k.Ih,setTenantDetailsLoad:N.V2},I=(0,y.$j)((function(e){return{loadingTenant:e.tenants.tenantDetails.loadingTenant,selectedTenant:e.tenants.tenantDetails.currentTenant,tenant:e.tenants.tenantDetails.tenantInfo}}),F);n.default=(0,s.Z)((function(e){return(0,c.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},l.oZ),l.bK),{},{loaderAlign:{textAlign:"center"},title:{marginTop:35},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},paperContainer:{padding:"15px 15px 15px 50px"},certificateInfo:{height:"auto",margin:5},fileItem:{marginRight:10,display:"flex","& div label":{minWidth:50},"@media (max-width: 900px)":{flexFlow:"column"}},certInputRow:{display:"flex",alignItems:"center",borderBottom:"1px solid #eaeaea",marginBottom:10},caCertsRow:{borderBottom:"1px solid #eaeaea",display:"flex",alignItems:"center",marginBottom:10}},(0,l.Bz)(e.spacing(4))))}))(I((function(e){var n=e.classes,t=e.tenant,c=e.loadingTenant,s=e.setErrorSnackMessage,l=(e.setTenantDetailsLoad,(0,x.useState)(!1)),p=(0,r.Z)(l,2),k=p[0],y=p[1],N=(0,x.useState)(!1),F=(0,r.Z)(N,2),I=F[0],S=F[1],A=(0,x.useState)(!1),T=(0,r.Z)(A,2),R=T[0],L=T[1],D=(0,x.useState)(!1),O=(0,r.Z)(D,2),E=O[0],M=O[1],Y=(0,x.useState)([]),_=(0,r.Z)(Y,2),z=_[0],W=_[1],$=(0,x.useState)([]),K=(0,r.Z)($,2),V=K[0],q=K[1],G=(0,x.useState)([]),H=(0,r.Z)(G,2),Q=H[0],U=H[1],X=(0,x.useState)([]),J=(0,r.Z)(X,2),ee=J[0],ne=J[1],te=(0,x.useState)([]),ie=(0,r.Z)(te,2),ae=ie[0],re=ie[1],oe=(0,x.useCallback)((function(){g.Z.invoke("GET","/api/v1/namespaces/".concat(null===t||void 0===t?void 0:t.namespace,"/tenants/").concat(null===t||void 0===t?void 0:t.name,"/security")).then((function(e){L(e.autoCert),(e.customCertificates.minio||e.customCertificates.minioCAs)&&M(!0),ne(e.customCertificates.minio||[]),re(e.customCertificates.minioCAs||[])})).catch((function(e){s(e)}))}),[t,s]);(0,x.useEffect)((function(){t&&oe()}),[t,oe]);var ce=function(e){W([].concat((0,a.Z)(z),[e.name]));var n=ee.filter((function(n){return n.name!==e.name})),t=ae.filter((function(n){return n.name!==e.name}));ne(n),re(t)},se=function(e,n,t,a,r){var c=V,s=function(){};switch(e){case"minio":c=V,s=q;break;case"minioCAs":c=Q,s=U}s(c.map((function(e){var c;return e.id===n?(0,o.Z)((0,o.Z)({},e),{},(c={},(0,i.Z)(c,t,a),(0,i.Z)(c,"encoded_".concat(t),r),c)):e})))},le=function(e,n){var t=V,i=function(){};switch(e){case"minio":t=V,i=q;break;case"minioCAs":t=Q,i=U}t.length>1&&i(t.filter((function(e){return e.id!==n})))},de=function(e){var n=V,t=function(){};switch(e){case"minio":n=V,t=q;break;case"minioCAs":n=Q,t=U}t([].concat((0,a.Z)(n),[{id:Date.now().toString(),key:"",cert:"",encoded_key:"",encoded_cert:""}]))};return(0,P.jsxs)(x.Fragment,{children:[(0,P.jsx)(w.Z,{title:"Save and Restart",confirmText:"Restart",cancelText:"Cancel",titleIcon:(0,P.jsx)(B.Ej,{}),isLoading:k,onClose:function(){return S(!1)},isOpen:I,onConfirm:function(){y(!0);var e={autoCert:R,customCertificates:{}};e.customCertificates=E?{secretsToBeDeleted:z,minio:V.map((function(e){return{crt:e.encoded_cert,key:e.encoded_key}})).filter((function(e){return e.crt&&e.key})),minioCAs:Q.map((function(e){return e.encoded_cert})).filter((function(e){return e}))}:{secretsToBeDeleted:[].concat((0,a.Z)(ee.map((function(e){return e.name}))),(0,a.Z)(ae.map((function(e){return e.name})))),minio:[],minioCAs:[]},g.Z.invoke("POST","/api/v1/namespaces/".concat(null===t||void 0===t?void 0:t.namespace,"/tenants/").concat(null===t||void 0===t?void 0:t.name,"/security"),e).then((function(){y(!1),S(!1),q([{cert:"",encoded_cert:"",encoded_key:"",id:Date.now().toString(),key:""}]),U([{cert:"",encoded_cert:"",encoded_key:"",id:Date.now().toString(),key:""}]),oe()})).catch((function(e){s(e),y(!1)}))},confirmationContent:(0,P.jsx)(Z.Z,{children:"Are you sure you want to save the changes and restart the service?"})}),c?(0,P.jsx)(d.Z,{className:n.paperContainer,children:(0,P.jsx)("div",{className:n.loaderAlign,children:(0,P.jsx)(v.Z,{})})}):(0,P.jsxs)(x.Fragment,{children:[(0,P.jsx)("h1",{className:n.sectionTitle,children:"Security"}),(0,P.jsxs)(d.Z,{className:n.paperContainer,children:[(0,P.jsxs)(m.ZP,{item:!0,xs:12,className:n.title,children:[(0,P.jsx)(f.Z,{value:"enableAutoCert",id:"enableAutoCert",name:"enableAutoCert",checked:R,onChange:function(e){var n=e.target.checked;L(n)},label:"TLS",description:"The internode certificates will be generated and managed by MinIO Operator"}),(0,P.jsx)(f.Z,{value:"enableCustomCerts",id:"enableCustomCerts",name:"enableCustomCerts",checked:E,onChange:function(e){var n=e.target.checked;M(n)},label:"Custom Certificates"})]}),E&&(0,P.jsxs)(m.ZP,{container:!0,children:[(0,P.jsx)(m.ZP,{container:!0,item:!0,xs:12,children:(0,P.jsx)("h4",{children:"MinIO Certificates"})}),(0,P.jsx)(m.ZP,{container:!0,item:!0,xs:12,children:ee.map((function(e){return(0,P.jsx)(u.Z,{variant:"outlined",color:"primary",className:n.certificateInfo,label:(0,P.jsxs)("div",{children:[(0,P.jsx)(j.Z,{variant:"subtitle1",display:"block",gutterBottom:!0,children:e.name}),(0,P.jsx)(j.Z,{className:n.italic,variant:"caption",display:"block",gutterBottom:!0,children:e.domains&&e.domains.map((function(e){return(0,P.jsx)("div",{children:e})}))}),(0,P.jsx)(j.Z,{className:n.bold,variant:"overline",gutterBottom:!0,children:"Expiry:\xa0"}),(0,P.jsx)(j.Z,{variant:"caption",gutterBottom:!0,children:(0,P.jsx)(h(),{format:"YYYY-MM-DD",children:e.expiry})})]}),onDelete:function(){return ce(e)}},e.name)}))}),(0,P.jsx)(m.ZP,{container:!0,item:!0,xs:12,children:V.map((function(e){return(0,P.jsxs)(m.ZP,{item:!0,xs:12,className:n.certInputRow,children:[(0,P.jsxs)(m.ZP,{item:!0,xs:9,className:n.fileItem,children:[(0,P.jsx)(m.ZP,{item:!0,xs:6,children:(0,P.jsx)(b.Z,{onChange:function(n,t){return se("minio",e.id,"cert",t,n)},accept:".cer,.crt,.cert,.pem",id:"tlsCert",name:"tlsCert",label:"Cert",value:e.cert})}),(0,P.jsx)(m.ZP,{item:!0,xs:6,className:n.spacerLeft,children:(0,P.jsx)(b.Z,{onChange:function(n,t){return se("minio",e.id,"key",t,n)},accept:".key,.pem",id:"tlsKey",name:"tlsKey",label:"Key",value:e.key})})]}),(0,P.jsx)(m.ZP,{item:!0,md:2,xs:1,children:(0,P.jsx)(C.Z,{variant:"outlined",color:"secondary",onClick:function(){return le("minio",e.id)},children:"Remove"})})]},e.id)}))}),(0,P.jsx)(m.ZP,{container:!0,item:!0,xs:12,children:(0,P.jsx)(C.Z,{variant:"outlined",color:"primary",endIcon:(0,P.jsx)(B.dt,{}),onClick:function(){return de("minio")},children:"Add Certificate"})}),(0,P.jsx)(m.ZP,{container:!0,item:!0,xs:12,children:(0,P.jsx)("h4",{children:"MinIO CA Certificates"})}),(0,P.jsx)(m.ZP,{container:!0,item:!0,xs:12,children:ae.map((function(e){return(0,P.jsx)(u.Z,{variant:"outlined",color:"primary",className:n.certificateInfo,label:(0,P.jsxs)("div",{children:[(0,P.jsx)(j.Z,{variant:"subtitle1",display:"block",gutterBottom:!0,children:e.name}),(0,P.jsx)(j.Z,{className:n.italic,variant:"caption",display:"block",gutterBottom:!0,children:e.domains&&e.domains.map((function(e){return(0,P.jsx)("div",{children:e})}))}),(0,P.jsx)(j.Z,{className:n.bold,variant:"overline",gutterBottom:!0,children:"Expiry:\xa0"}),(0,P.jsx)(j.Z,{variant:"caption",gutterBottom:!0,children:(0,P.jsx)(h(),{format:"YYYY-MM-DD",children:e.expiry})})]}),onDelete:function(){return ce(e)}},e.name)}))}),(0,P.jsx)(m.ZP,{container:!0,item:!0,xs:12,children:Q.map((function(e){return(0,P.jsxs)(m.ZP,{item:!0,xs:12,className:n.caCertsRow,children:[(0,P.jsx)(m.ZP,{item:!0,xs:9,className:n.fileItem,children:(0,P.jsx)(b.Z,{onChange:function(n,t){return se("minioCAs",e.id,"cert",t,n)},accept:".cer,.crt,.cert,.pem",id:"tlsCert",name:"tlsCert",label:"Cert",value:e.cert})}),(0,P.jsx)(m.ZP,{item:!0,xs:1,children:(0,P.jsx)(C.Z,{variant:"outlined",color:"secondary",onClick:function(){return le("minioCAs",e.id)},children:"Remove"})})]},e.id)}))}),(0,P.jsx)(m.ZP,{container:!0,item:!0,xs:12,children:(0,P.jsx)(C.Z,{variant:"outlined",color:"primary",endIcon:(0,P.jsx)(B.dt,{}),onClick:function(){return de("minioCAs")},children:"Add CA Certificate"})})]}),(0,P.jsx)(m.ZP,{item:!0,xs:12,className:n.buttonContainer,children:(0,P.jsx)(C.Z,{type:"submit",variant:"contained",color:"primary",disabled:I||k,onClick:function(){return S(!0)},children:"Save"})})]})]})]})})))},82981:function(e,n,t){var i=t(50390),a=t(35477),r=t(86509),o=t(4285),c=t(62559);n.Z=(0,o.Z)((function(e){var n;return(0,r.Z)({errorBlock:{color:(null===(n=e.palette)||void 0===n?void 0:n.error.main)||"#C83B51"}})}))((function(e){var n=e.classes,t=e.errorMessage,r=e.withBreak,o=void 0===r||r;return(0,c.jsxs)(i.Fragment,{children:[o&&(0,c.jsx)("br",{}),(0,c.jsx)(a.Z,{component:"p",variant:"body1",className:n.errorBlock,children:t})]})}))}}]);
//# sourceMappingURL=7261.98082dab.chunk.js.map