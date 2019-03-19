(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-702f6566","chunk-f72b1efa","chunk-d6b24d42","chunk-2d0ac01b","chunk-2d0d6b42"],{1864:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-form-select",{ref:"dimensionSelect",attrs:{id:"dimensionSelect",disabled:e.is_disabled,size:e.display_size,options:e.filteredItems},on:{change:function(t){return e.onChange(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})},r=[],o=(n("6762"),n("2fdb"),n("bc3a")),l=n.n(o),a=n("61da"),s={name:"dimension-select",props:{dimension:{type:String},dimensionUrl:{type:String,default:function(){return""}},existing:{type:Array,default:function(){return[]}},environment:{type:String,default:function(){return""}},includeall:{type:Boolean,default:function(){return!1}},initial:{type:String,default:function(){return""}},display_size:{type:String,default:function(){return"md"}},is_disabled:{type:Boolean,default:function(){return!1}}},data:function(){return{items:[],selected:this.initial}},computed:{filteredItems:function(){var e=this;return this.items.length>0?this.items.filter(function(t){if(!e.existing.includes(t))return t}):[]}},watch:{dimension:"updateSelector",dimensionUrl:"updateSelector",existing:"updateSelector",environment:"updateSelector",initial:"updateSelector"},methods:{onChange:function(e){this.$emit("dimension-select-change",e)},updateSelector:function(){var e=this;if((void 0!=this.dimension||""!=this.dimensionUrl)&&""!=this.$store.state.session){var t=this.dimensionUrl;0==this.dimensionUrl.length&&(t="/api/dimensions/table/"+this.dimension,""!=this.environment&&(t+="/environment/"+this.environment));var n=this;l.a.get(t,{baseURL:this.$store.state.url,params:{session_id:this.$store.state.session}}).then(function(t){n.items=t.data,n.items=n.items.length>0?n.items.filter(function(e){if(!n.existing.includes(e))return e}):[],1==n.items.length&&n.$emit("dimension-select-change",n.items[0]),n.includeall&&("dfd_filter"==n.dimension?n.items.unshift("None"):"persona_characteristic"==n.dimension?n.items.unshift("All"):n.items.unshift("all")),e.selected=e.initial}).catch(function(e){a["a"].$emit("operation-failure","Error updating selector:"+e)})}}},mounted:function(){void 0==this.dimension&&""==this.dimensionUrl||this.updateSelector()}},c=s,u=n("2877"),d=Object(u["a"])(c,i,r,!1,null,null,null);t["default"]=d.exports},"2fdb":function(e,t,n){"use strict";var i=n("5ca1"),r=n("d2c8"),o="includes";i(i.P+i.F*n("5147")(o),"String",{includes:function(e){return!!~r(this,e,o).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},5147:function(e,t,n){var i=n("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[i]=!1,!"/./"[e](t)}catch(r){}}return!0}},"584a":function(e,t){var n=e.exports={version:"2.6.5"};"number"==typeof __e&&(__e=n)},6762:function(e,t,n){"use strict";var i=n("5ca1"),r=n("c366")(!0);i(i.P,"Array",{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"683a":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"requirementmodel"},[n("requirement-modal",{ref:"reqDialog",attrs:{requirement:this.theSelectedObject}}),n("b-card",{attrs:{"no-body":""}},[n("b-container",{attrs:{fluid:""}},[n("b-row",[n("b-col",[n("b-form-group",{attrs:{label:"Environment","label-for":"requirementModelEnvironment","label-cols":4}},[n("dimension-select",{ref:"requirementModelEnvironment",attrs:{id:"requirementModelEnvironment",dimension:"environment"},on:{"dimension-select-change":e.environmentSelected}})],1)],1),""!=e.theEnvironmentName?n("b-col",[n("b-form-group",{attrs:{label:"Requirement","label-for":"requirementModelRequirement","label-cols":3}},[n("dimension-select",{ref:"requirementModelRequirement",attrs:{id:"requirementModelRequirement",dimension:"requirement",initial:"all",includeall:""},on:{"dimension-select-change":e.requirementSelected}})],1)],1):e._e()],1)],1)],1),""!=e.theEnvironmentName?n("graphical-model",{attrs:{api:e.requirementModelURI},on:{"graphical-model-url":e.nodeClicked}}):e._e()],1)},r=[],o=n("bc3a"),l=n.n(o),a=n("e342"),s=n("1864"),c=n("744c"),u=n("61da"),d={computed:{requirementModelURI:function(){return"/api/requirements/model/environment/"+this.theEnvironmentName+"/requirement/"+this.theRequirementName}},data:function(){return{theEnvironmentName:"",theRequirementName:"all",theSelectedObject:null}},components:{DimensionSelect:s["default"],GraphicalModel:a["default"],RequirementModal:c["default"]},methods:{nodeClicked:function(e){var t=this,n=e.slice(5).substring(0,e.slice(5).indexOf("/"));-1!=["requirements"].indexOf(n)&&l.a.get(e,{baseURL:this.$store.state.url,params:{session_id:this.$store.state.session}}).then(function(e){t.theSelectedObject=e.data,t.$refs.reqDialog.show()}).catch(function(e){u["a"].$emit("operation-failure",e)})},environmentSelected:function(e){this.theEnvironmentName=e,void 0!=this.$refs.requirementsModelRequirement&&(this.theRequirementName="all",this.$refs.requirementModelRequirement.selected=this.theRequirementName)},requirementSelected:function(e){this.theRequirementName=e}}},m=d,f=n("2877"),h=Object(f["a"])(m,i,r,!1,null,null,null);t["default"]=h.exports},"744c":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{ref:"reqDialog",attrs:{"ok-only":"",title:e.dialogTitle}},[void 0!=e.objt?n("b-container",[n("b-form-group",{attrs:{label:"Description","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theDescription"}},[n("b-form-textarea",{attrs:{id:"theDescription",type:"text",rows:2,"max-rows":4,readonly:""},model:{value:e.objt.theDescription,callback:function(t){e.$set(e.objt,"theDescription",t)},expression:"objt.theDescription"}})],1),n("b-form-group",{attrs:{label:"Priority","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"thePriority"}},[n("b-form-input",{attrs:{readonly:"",id:"thePriority"},model:{value:e.objt.thePriority,callback:function(t){e.$set(e.objt,"thePriority",t)},expression:"objt.thePriority"}})],1),n("b-form-group",{attrs:{label:"Type","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theType"}},[n("b-form-input",{attrs:{readonly:"",id:"theType"},model:{value:e.objt.theType,callback:function(t){e.$set(e.objt,"theType",t)},expression:"objt.theType"}})],1),n("b-form-group",{attrs:{label:"Originator","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theOriginator"}},[n("b-form-input",{attrs:{readonly:"",id:"theOriginator"},model:{value:e.objt.theOriginator,callback:function(t){e.$set(e.objt,"theOriginator",t)},expression:"objt.theOriginator"}})],1),n("b-form-group",{attrs:{label:"Rationale","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theRationale"}},[n("b-form-textarea",{attrs:{id:"theRationale",type:"text",rows:2,"max-rows":4,readonly:""},model:{value:e.objt.theRationale,callback:function(t){e.$set(e.objt,"theRationale",t)},expression:"objt.theRationale"}})],1),n("b-form-group",{attrs:{label:"Fit Criterion","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theFitCriterion"}},[n("b-form-textarea",{attrs:{id:"theFitCriterion",type:"text",rows:2,"max-rows":4,readonly:""},model:{value:e.objt.theFitCriterion,callback:function(t){e.$set(e.objt,"theFitCriterion",t)},expression:"objt.theFitCriterion"}})],1)],1):e._e()],1)},r=[],o={name:"requirement-modal",props:{requirement:Object},data:function(){return{objt:this.requirement}},watch:{requirement:"updateData"},computed:{dialogTitle:function(){return(void 0!=this.objt?this.objt.theName:"")+" Requirement"}},methods:{show:function(){this.$refs.reqDialog.show()},updateData:function(){this.objt=this.requirement}}},l=o,a=n("2877"),s=Object(a["a"])(l,i,r,!1,null,null,null);t["default"]=s.exports},aae3:function(e,t,n){var i=n("d3f4"),r=n("2d95"),o=n("2b4c")("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==r(e))}},c0f0:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"requirementmodelview"},[n("b-breadcrumb",{attrs:{items:e.bcItems}}),n("requirement-model")],1)},r=[],o=n("683a"),l={computed:{bcItems:function(){return[{text:"Home",to:{name:"home"}},{text:"Requirement Model",to:{name:"requirementmodel"}}]}},components:{RequirementModel:o["default"]}},a=l,s=n("2877"),c=Object(s["a"])(a,i,r,!1,null,null,null);t["default"]=c.exports},d2c8:function(e,t,n){var i=n("aae3"),r=n("be13");e.exports=function(e,t,n){if(i(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(e))}}}]);
//# sourceMappingURL=chunk-702f6566.9fc74611.js.map