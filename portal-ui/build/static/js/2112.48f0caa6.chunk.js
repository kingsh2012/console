"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[2112],{32112:function(e,n,t){t.r(n);var a=t(29439),r=t(72791),o=t(51691),s=t(21435),c=t(61889),i=t(60364),l=t(42649),u=t(9505),p=t(2148),f=t(92388),d=t(80184),m=(0,i.$j)(null,{setErrorSnackMessage:l.Ih});n.default=m((function(e){var n=e.deleteOpen,t=e.selectedPVC,i=e.closeDeleteModalAndRefresh,l=e.setErrorSnackMessage,m=(0,r.useState)(""),C=(0,a.Z)(m,2),h=C[0],x=C[1],j=(0,u.Z)((function(){return i(!0)}),(function(e){return l(e)})),v=(0,a.Z)(j,2),P=v[0],Z=v[1];return(0,d.jsx)(p.Z,{title:"Delete PVC",confirmText:"Delete",isOpen:n,titleIcon:(0,d.jsx)(f.Nv,{}),isLoading:P,onConfirm:function(){h===t.name?Z("DELETE","/api/v1/namespaces/".concat(t.namespace,"/tenants/").concat(t.tenant,"/pvc/").concat(t.name)):l({errorMessage:"PVC name is incorrect",detailedError:""})},onClose:function(){return i(!1)},confirmButtonProps:{disabled:h!==t.name||P},confirmationContent:(0,d.jsxs)(o.Z,{children:["To continue please type ",(0,d.jsx)("b",{children:t.name})," in the box.",(0,d.jsx)(c.ZP,{item:!0,xs:12,children:(0,d.jsx)(s.Z,{id:"retype-PVC",name:"retype-PVC",onChange:function(e){x(e.target.value)},label:"",value:h})})]})})}))}}]);
//# sourceMappingURL=2112.48f0caa6.chunk.js.map