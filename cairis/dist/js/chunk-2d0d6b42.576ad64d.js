(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6b42"],{"744c":function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-modal",{ref:"reqDialog",attrs:{"ok-only":"",title:t.dialogTitle}},[void 0!=t.objt?o("b-container",[o("b-form-group",{attrs:{label:"Description","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theDescription"}},[o("b-form-textarea",{attrs:{id:"theDescription",type:"text",rows:2,"max-rows":4,readonly:""},model:{value:t.objt.theDescription,callback:function(e){t.$set(t.objt,"theDescription",e)},expression:"objt.theDescription"}})],1),o("b-form-group",{attrs:{label:"Priority","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"thePriority"}},[o("b-form-input",{attrs:{readonly:"",id:"thePriority"},model:{value:t.objt.thePriority,callback:function(e){t.$set(t.objt,"thePriority",e)},expression:"objt.thePriority"}})],1),o("b-form-group",{attrs:{label:"Type","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theType"}},[o("b-form-input",{attrs:{readonly:"",id:"theType"},model:{value:t.objt.theType,callback:function(e){t.$set(t.objt,"theType",e)},expression:"objt.theType"}})],1),o("b-form-group",{attrs:{label:"Originator","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theOriginator"}},[o("b-form-input",{attrs:{readonly:"",id:"theOriginator"},model:{value:t.objt.theOriginator,callback:function(e){t.$set(t.objt,"theOriginator",e)},expression:"objt.theOriginator"}})],1),o("b-form-group",{attrs:{label:"Rationale","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theRationale"}},[o("b-form-textarea",{attrs:{id:"theRationale",type:"text",rows:2,"max-rows":4,readonly:""},model:{value:t.objt.theRationale,callback:function(e){t.$set(t.objt,"theRationale",e)},expression:"objt.theRationale"}})],1),o("b-form-group",{attrs:{label:"Fit Criterion","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theFitCriterion"}},[o("b-form-textarea",{attrs:{id:"theFitCriterion",type:"text",rows:2,"max-rows":4,readonly:""},model:{value:t.objt.theFitCriterion,callback:function(e){t.$set(t.objt,"theFitCriterion",e)},expression:"objt.theFitCriterion"}})],1)],1):t._e()],1)},l=[],a={name:"requirement-modal",props:{requirement:Object},data:function(){return{objt:this.requirement}},watch:{requirement:"updateData"},computed:{dialogTitle:function(){return(void 0!=this.objt?this.objt.theName:"")+" Requirement"}},methods:{show:function(){this.$refs.reqDialog.show()},updateData:function(){this.objt=this.requirement}}},i=a,n=o("2877"),s=Object(n["a"])(i,r,l,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d0d6b42.576ad64d.js.map