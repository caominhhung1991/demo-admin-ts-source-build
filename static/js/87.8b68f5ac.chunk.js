(this["webpackJsonpreact-antd-admin"]=this["webpackJsonpreact-antd-admin"]||[]).push([[87],{931:function(a,n,e){"use strict";e.r(n);var t=e(3),c=e.n(t),i=e(8),o=e(14),r=e(10),d=e(35),u=e(0),l=e.n(u),s=e(48),b=e(400),h=e(198),O=e(30),j=e(257),p=e(101),f=e(401),v=e(9),g=e(256),m=e(365),S=e(416),y=e(37),I=e(17),w=O.d.salaryModal,x=function(a){var n,e,t=Object(g.a)({Instance:m.a,onPending:S.h,addSelectedId:S.a}),o=Object(s.b)(),d=Object(s.c)((function(a){return a.form})),u=d.modal,b=d.datas,O=Object(s.c)((function(a){return a.account})).accountData,j=null===O||void 0===O||null===(n=O.paths)||void 0===n||null===(e=n.salary)||void 0===e?void 0:e.edit,f=l.a.useMemo((function(){var a;return!!(null===u||void 0===u||null===(a=u[w])||void 0===a?void 0:a.open)}),[u[w]]);function x(){return(x=Object(i.a)(c.a.mark((function a(n,e,i){var d,u,l;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(j){a.next=2;break}return a.abrupt("return",Object(y.h)());case 2:return!0,d=new m.a(e),u=d.getTongLuongThang(),l=Object(r.a)(Object(r.a)({id:n.id},e),{},{tongLuongThang:u}),a.next=8,o(t.onUpdateAsync({currentData:n,validatedValues:l}));case 8:a.sent&&o(h.a({modalId:w}));case 10:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return Object(I.b)(v.MyModal,{form:!0,title:"DanhSachLuong",visible:f,onClose:function(){o(h.a({modalId:w}))},onOkModal:function(a,n,e){return x.apply(this,arguments)},formOptions:Object(v.getFormItemFields)(p.a.getInputFields()),formProps:{labelCol:{span:8},wrapperCol:{span:16}},width:700,modalId:w,datas:b,initData:(new m.a).initData})},T=e(199),N=e(67),D=O.d.salaryModal;n.default=function(){var a,n,e=Object(s.b)(),t=Object(s.c)((function(a){return a.salary})),c=t.tabsData,i=t.loading,u=t.salaries,O=t.pageSize,v=t.xemTatCaNhanSu,w=Object(s.c)((function(a){return{chucVus:a.chucVu.chucVus,nhanSus:a.nhanSu.nhanSus}})).nhanSus,k=Object(g.a)({Instance:m.a,onPending:S.h,addSelectedId:S.a}),C=Object(s.c)((function(a){return a.account})).accountData,M=null===C||void 0===C||null===(a=C.paths)||void 0===a||null===(n=a.salary)||void 0===n?void 0:n.edit;var L=l.a.useMemo((function(){return w&&u?(console.log(w,"nhanSus"),Object.entries(w).filter((function(a){var n=Object(d.a)(a,2);n[0];return n[1].trangThaiNhanSuId!==N.c.quit.id||v})).reduce((function(a,n){var e=Object(d.a)(n,2),t=e[0],c=e[1],i=(null===u||void 0===u?void 0:u[t])||{},l=new m.a(i).getTongLuongThang();return Object(r.a)(Object(r.a)({},a),{},Object(o.a)({},t,Object(r.a)(Object(r.a)(Object(r.a)({},c),i),{},{tongLuongThang:l})))}),{})):{}}),[w,u,v]);return Object(I.c)("div",{className:"salary-page",css:j.a,children:[Object(I.b)(b.b,{className:"tabs",options:c,activeKey:"all",onTabClick:function(a){if("add"===a){if(!M)return Object(y.h)();var n=new m.a;e(h.c({modalId:D,data:n.initData}))}else"taiExcel"===a?e(Object(T.b)({tableId:D,constants:p.a,fileSheet:"salarySheet",fileName:"salaryName"})):"xemTatCaNhanSu"===a&&e(Object(S.i)(!v))}}),false,Object(I.b)("div",{className:"tabs-main",style:{marginTop:"10px"},children:Object(I.b)("div",{className:"aside-main",children:Object(I.b)(f.a,{isEdit:M,scroll:{x:900},constants:p.a,pageSize:O,actions:k,datas:L,loading:i,modalId:D,isSelection:!0,pagination:!0,expandable:{expandedRowRender:function(a){return Object(I.b)("div",{children:a.id})},expandRowByClick:!1}})})}),Object(I.b)(x,{})]})}}}]);