(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-726df28e"],{"02f4":function(e,t,n){var o=n("4588"),i=n("be13");e.exports=function(e){return function(t,n){var r,s,a=String(i(t)),l=o(n),c=a.length;return l<0||l>=c?e?"":void 0:(r=a.charCodeAt(l),r<55296||r>56319||l+1===c||(s=a.charCodeAt(l+1))<56320||s>57343?e?a.charAt(l):r:e?a.slice(l,l+2):s-56320+(r-55296<<10)+65536)}}},"0390":function(e,t,n){"use strict";var o=n("02f4")(!0);e.exports=function(e,t,n){return t+(n?o(e,t).length:1)}},"0bfb":function(e,t,n){"use strict";var o=n("cb7c");e.exports=function(){var e=o(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"18e9":function(e,t,n){"use strict";t["a"]={computed:{environmentNames:function(){return this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.map(function(e){return e.theEnvironmentName}):[]},environmentName:function(){return this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties[this.envPropIndex].theEnvironmentName:""}},methods:{addEnvironmentProperty:function(e){this.objt.theEnvironmentProperties.push(e),this.envPropIndex=this.objt.theEnvironmentProperties.length-1},deleteEnvironment:function(e){this.objt.theEnvironmentProperties=this.objt.theEnvironmentProperties.filter(function(t){return t.theEnvironmentName!=e})},addEnvironment:function(e){e.preventDefault(),this.$refs.environmentDialog.show()}}}},"214f":function(e,t,n){"use strict";n("b0c5");var o=n("2aba"),i=n("32e9"),r=n("79e5"),s=n("be13"),a=n("2b4c"),l=n("520a"),c=a("species"),h=!r(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),b=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();e.exports=function(e,t,n){var u=a(e),m=!r(function(){var t={};return t[u]=function(){return 7},7!=""[e](t)}),f=m?!r(function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[c]=function(){return n}),n[u](""),!t}):void 0;if(!m||!f||"replace"===e&&!h||"split"===e&&!b){var d=/./[u],p=n(s,u,""[e],function(e,t,n,o,i){return t.exec===l?m&&!i?{done:!0,value:d.call(t,n,o)}:{done:!0,value:e.call(n,t,o)}:{done:!1}}),v=p[0],g=p[1];o(String.prototype,e,v),i(RegExp.prototype,u,2==t?function(e,t){return g.call(e,this,t)}:function(e){return g.call(e,this)})}}},"28a5":function(e,t,n){"use strict";var o=n("aae3"),i=n("cb7c"),r=n("ebd6"),s=n("0390"),a=n("9def"),l=n("5f1b"),c=n("520a"),h=n("79e5"),b=Math.min,u=[].push,m="split",f="length",d="lastIndex",p=4294967295,v=!h(function(){RegExp(p,"y")});n("214f")("split",2,function(e,t,n,h){var g;return g="c"=="abbc"[m](/(b)*/)[1]||4!="test"[m](/(?:)/,-1)[f]||2!="ab"[m](/(?:ab)*/)[f]||4!="."[m](/(.?)(.?)/)[f]||"."[m](/()()/)[f]>1||""[m](/.?/)[f]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!o(e))return n.call(i,e,t);var r,s,a,l=[],h=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),b=0,m=void 0===t?p:t>>>0,v=new RegExp(e.source,h+"g");while(r=c.call(v,i)){if(s=v[d],s>b&&(l.push(i.slice(b,r.index)),r[f]>1&&r.index<i[f]&&u.apply(l,r.slice(1)),a=r[0][f],b=s,l[f]>=m))break;v[d]===r.index&&v[d]++}return b===i[f]?!a&&v.test("")||l.push(""):l.push(i.slice(b)),l[f]>m?l.slice(0,m):l}:"0"[m](void 0,0)[f]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,o){var i=e(this),r=void 0==n?void 0:n[t];return void 0!==r?r.call(n,i,o):g.call(String(i),n,o)},function(e,t){var o=h(g,e,this,t,g!==n);if(o.done)return o.value;var c=i(e),u=String(this),m=r(c,RegExp),f=c.unicode,d=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(v?"y":"g"),x=new m(v?c:"^(?:"+c.source+")",d),y=void 0===t?p:t>>>0;if(0===y)return[];if(0===u.length)return null===l(x,u)?[u]:[];var P=0,E=0,j=[];while(E<u.length){x.lastIndex=v?E:0;var R,w=l(x,v?u:u.slice(E));if(null===w||(R=b(a(x.lastIndex+(v?0:E)),u.length))===P)E=s(u,E,f);else{if(j.push(u.slice(P,E)),j.length===y)return j;for(var O=1;O<=w.length-1;O++)if(j.push(w[O]),j.length===y)return j;E=P=R}}return j.push(u.slice(P)),j}]})},"520a":function(e,t,n){"use strict";var o=n("0bfb"),i=RegExp.prototype.exec,r=String.prototype.replace,s=i,a="lastIndex",l=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e[a]||0!==t[a]}(),c=void 0!==/()??/.exec("")[1],h=l||c;h&&(s=function(e){var t,n,s,h,b=this;return c&&(n=new RegExp("^"+b.source+"$(?!\\s)",o.call(b))),l&&(t=b[a]),s=i.call(b,e),l&&s&&(b[a]=b.global?s.index+s[0].length:t),c&&s&&s.length>1&&r.call(s[0],n,function(){for(h=1;h<arguments.length-2;h++)void 0===arguments[h]&&(s[h]=void 0)}),s}),e.exports=s},"5f1b":function(e,t,n){"use strict";var o=n("23c6"),i=RegExp.prototype.exec;e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var r=n.call(e,t);if("object"!==typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==o(e))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},"94cc":function(e,t,n){"use strict";var o=n("bc3a"),i=n.n(o),r=n("61da");t["a"]={methods:{commitObject:function(e,t,n,o){var s=this;"Update"==this.commitLabel?i.a.put(e,{session_id:this.$store.state.session,object:this.objt}).then(function(e){r["a"].$emit("operation-success",e.data.message),void 0!=o?s.$router.push({name:n,params:{dimension:o}}):s.$router.push({name:n})}).catch(function(e){r["a"].$emit("operation-failure",e)}):i.a.post(t,{session_id:this.$store.state.session,object:this.objt}).then(function(e){r["a"].$emit("operation-success",e.data.message),void 0!=o?s.$router.push({name:n,params:{dimension:o}}):s.$router.push({name:n})}).catch(function(e){r["a"].$emit("operation-failure",e)})}}}},aae3:function(e,t,n){var o=n("d3f4"),i=n("2d95"),r=n("2b4c")("match");e.exports=function(e){var t;return o(e)&&(void 0!==(t=e[r])?!!t:"RegExp"==i(e))}},b0c5:function(e,t,n){"use strict";var o=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:o!==/./.exec},{exec:o})},fc60:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"obstacle"},[e.objt.theEnvironmentProperties?n("dimension-modal",{ref:"environmentDialog",attrs:{dimension:"environment",existing:e.environmentNames},on:{"dimension-modal-update":e.addObstacleEnvironmentProperty}}):e._e(),e.objt.theEnvironmentProperties.length?n("dimension-modal",{ref:"assetDialog",attrs:{dimension:"asset",environment:e.environmentName,existing:e.concernNames},on:{"dimension-modal-update":e.addObstacleConcern}}):e._e(),e.objt.theEnvironmentProperties.length?n("kaos-refinement-modal",{ref:"obstacleRefinementDialog",attrs:{goalAssociation:e.selectedAssociation,refinementType:"Goal"},on:{"kaos-refinement-update":e.updateObstacleRefinement}}):e._e(),e.objt.theEnvironmentProperties.length?n("kaos-refinement-modal",{ref:"subObstacleRefinementDialog",attrs:{goalAssociation:e.selectedAssociation,refinementType:"Sub-Goal"},on:{"kaos-refinement-update":e.updateSubObstacleRefinement}}):e._e(),e.errors.length?n("p",[n("b",[e._v("Please correct the following error(s):")]),n("ul",e._l(e.errors,function(t){return n("li",{key:t},[e._v(e._s(t))])}),0)]):e._e(),n("b-form",[n("b-card",{attrs:{"bg-variant":"light",no:"",body:""}},[n("b-row",[n("b-col",{attrs:{md:"6"}},[n("b-form-group",{attrs:{label:"Obstacle","label-class":"font-weight-bold text-md-left","label-for":"theObstacleInput"}},[n("b-form-input",{attrs:{id:"theObstacleInput",type:"text",required:""},model:{value:e.objt.theName,callback:function(t){e.$set(e.objt,"theName",t)},expression:"objt.theName"}})],1)],1),n("b-col",{attrs:{md:"3"}},[n("b-form-group",{attrs:{label:"Originator","label-class":"font-weight-bold text-md-left","label-for":"theOriginator"}},[n("b-form-input",{attrs:{id:"theOriginatorInput",type:"text",required:""},model:{value:e.objt.theOriginator,callback:function(t){e.$set(e.objt,"theOriginator",t)},expression:"objt.theOriginator"}})],1)],1),n("b-col",{attrs:{md:"3"}},[n("b-form-group",{attrs:{label:"Tags","label-class":"font-weight-bold text-md-left","label-for":"theTagsInput"}},[n("b-form-input",{attrs:{id:"theTagsInput",type:"text"},model:{value:e.objt.theTags,callback:function(t){e.$set(e.objt,"theTags",t)},expression:"objt.theTags"}})],1)],1)],1)],1),n("b-card",{staticClass:"text-left",attrs:{header:"Environments","no-body":""}},[n("template",{slot:"header"},[n("font-awesome-icon",{style:{color:"green"},attrs:{icon:"plus"},on:{click:function(t){return t.stopPropagation(),e.addEnvironment(t)}}}),e._v(" Environment\n        ")],1),n("b-row",[n("b-col",{attrs:{md:"12"}},[n("b-tabs",{attrs:{pills:""},model:{value:e.envPropIndex,callback:function(t){e.envPropIndex=t},expression:"envPropIndex"}},e._l(e.objt.theEnvironmentProperties,function(t){return n("b-tab",{key:t.theEnvironmentName,attrs:{title:t.theName}},[n("template",{slot:"title"},[n("font-awesome-icon",{style:{color:"red"},attrs:{icon:"minus"},on:{click:function(n){return e.deleteEnvironment(t.theEnvironmentName)}}}),e._v("  "+e._s(t.theEnvironmentName)+"\n                ")],1)],2)}),1)],1)],1),n("b-row",{directives:[{name:"show",rawName:"v-show",value:this.objt.theEnvironmentProperties.length,expression:"this.objt.theEnvironmentProperties.length"}]},[n("b-col",{attrs:{md:"12"}},[n("b-card",{attrs:{"no-body":"","bg-variant":"light"}},[n("b-tabs",{attrs:{tab:""}},[n("b-tab",{attrs:{title:"Definition",active:""}},[n("b-container",{attrs:{fluid:""}},[n("b-row",[n("b-col",{attrs:{md:"12"}},[n("b-form-group",{attrs:{label:"Category","label-class":"font-weight-bold text-md-left","label-cols":"1","label-for":"theCategorySelect"}},[n("b-form-select",{staticClass:"mb-3",attrs:{id:"theCategorySelect",options:e.obstacleCategories,required:""},model:{value:e.category,callback:function(t){e.category=t},expression:"category"}})],1)],1)],1),n("b-row",[n("b-col",{attrs:{md:"12"}},[n("b-form-group",{attrs:{label:"Definition","label-class":"font-weight-bold text-md-left","label-for":"theDefinitionInput"}},[n("b-form-textarea",{attrs:{id:"theDefinition",type:"text",rows:"2","max-rows":"4",required:""},model:{value:e.definition,callback:function(t){e.definition=t},expression:"definition"}})],1)],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("b-form-group",{attrs:{label:"Probability","label-class":"font-weight-bold text-md-left","label-cols":"3","label-for":"theProbabilityInput"}},[n("b-form-input",{attrs:{id:"theProbabilityInput",type:"number",required:""},model:{value:e.probability,callback:function(t){e.probability=t},expression:"probability"}})],1)],1),n("b-col",{attrs:{md:"6"}},[n("b-form-group",{attrs:{label:"Reason","label-class":"font-weight-bold text-md-left","label-cols":"2","label-for":"theReasonInput"}},[n("b-form-input",{attrs:{id:"theReasonInput",type:"text",required:""},model:{value:e.rationale,callback:function(t){e.rationale=t},expression:"rationale"}})],1)],1)],1),n("b-row",[n("b-col",{attrs:{md:"12"}},[n("b-table",{attrs:{striped:"",bordered:"",small:"",hover:"",items:e.concerns,fields:e.concernTableFields},scopedSlots:e._u([{key:"HEAD_concernactions",fn:function(t){return[n("font-awesome-icon",{style:{color:"green"},attrs:{icon:"plus"},on:{click:function(t){return t.stopPropagation(),e.addConcern(t)}}})]}},{key:"concernactions",fn:function(t){return[n("font-awesome-icon",{style:{color:"red"},attrs:{icon:"minus"},on:{click:function(n){return n.stopPropagation(),e.deleteConcern(t.item)}}})]}}])})],1)],1)],1)],1),n("b-tab",{attrs:{title:"Obstacles"}},[n("b-container",{attrs:{fluid:""}},[n("b-row",[n("b-col",{attrs:{md:"12"}},[n("b-table",{attrs:{striped:"",bordered:"",small:"",hover:"",items:e.goalRefinements,fields:e.goalRefinementTableFields},on:{"row-clicked":e.viewObstacleRefinement},scopedSlots:e._u([{key:"HEAD_obstaclerefinementactions",fn:function(t){return[n("font-awesome-icon",{style:{color:"green"},attrs:{icon:"plus"},on:{click:function(t){return t.stopPropagation(),e.addObstacleRefinement(t)}}})]}},{key:"obstaclerefinementactions",fn:function(t){return[n("font-awesome-icon",{style:{color:"red"},attrs:{icon:"minus"},on:{click:function(n){return n.stopPropagation(),e.deleteObstacleRefinement(t.item)}}})]}}])})],1)],1)],1)],1),n("b-tab",{attrs:{title:"Sub-Obstacles"}},[n("b-container",{attrs:{fluid:""}},[n("b-row",[n("b-col",{attrs:{md:"12"}},[n("b-table",{attrs:{striped:"",bordered:"",small:"",hover:"",items:e.subGoalRefinements,fields:e.subGoalRefinementTableFields},on:{"row-clicked":e.viewSubObstacleRefinement},scopedSlots:e._u([{key:"HEAD_subobstaclerefinementactions",fn:function(t){return[n("font-awesome-icon",{style:{color:"green"},attrs:{icon:"plus"},on:{click:function(t){return t.stopPropagation(),e.addSubObstacleRefinement(t)}}})]}},{key:"subobstaclerefinementactions",fn:function(t){return[n("font-awesome-icon",{style:{color:"red"},attrs:{icon:"minus"},on:{click:function(n){return n.stopPropagation(),e.deleteSubObstacleRefinement(t.item)}}})]}}])})],1)],1)],1)],1)],1)],1)],1)],1)],2),n("b-container",{attrs:{fluid:""}},[n("b-form-row",[n("b-col",{attrs:{md:"4","offset-md":"5"}},[n("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:e.onCommit}},[e._v(e._s(e.commitLabel))]),n("b-button",{attrs:{type:"submit",variant:"secondary"},on:{click:e.onCancel}},[e._v("Cancel")])],1)],1)],1)],1)],1)},i=[],r=n("f499"),s=n.n(r),a=(n("28a5"),n("94cc")),l=n("18e9"),c={props:{object:Object,label:String},watch:{object:"setObject"},components:{KaosRefinementModal:function(){return n.e("chunk-2d0d6f2e").then(n.bind(null,"7571"))}},mixins:[a["a"],l["a"]],computed:{concernNames:function(){return this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties[this.envPropIndex].theConcerns:[]},concerns:function(){return this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties[this.envPropIndex].theConcerns.map(function(e){return{name:e}}):[]},category:{get:function(){return this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties[this.envPropIndex].theCategory:""},set:function(e){this.objt.theEnvironmentProperties[this.envPropIndex].theCategory=e}},definition:{get:function(){return this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties[this.envPropIndex].theDefinition:""},set:function(e){this.objt.theEnvironmentProperties[this.envPropIndex].theDefinition=e}},probability:{get:function(){return this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties[this.envPropIndex].theProbability:0},set:function(e){this.objt.theEnvironmentProperties[this.envPropIndex].theProbability=e}},rationale:{get:function(){return this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties[this.envPropIndex].theProbabilityRationale:""},set:function(e){this.objt.theEnvironmentProperties[this.envPropIndex].theProbabilityRationale=e}},goalRefinements:function(){return this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties[this.envPropIndex].theGoalRefinements:[]},subGoalRefinements:function(){return this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties[this.envPropIndex].theSubGoalRefinements:[]}},data:function(){return{errors:[],objt:this.object,envPropIndex:0,commitLabel:this.label,concernTableFields:{concernactions:{label:""},name:{label:"Concern"}},goalRefinementTableFields:{obstaclerefinementactions:{label:""},theEndType:{label:"Type"},theEndName:{label:"Goal"},theRefType:{label:"Refinement"},isAlternate:{label:"Alternate"},theRationale:{label:"Rationale"}},subGoalRefinementTableFields:{subobstaclerefinementactions:{label:""},theEndType:{label:"Type"},theEndName:{label:"Sub-Goal"},theRefType:{label:"Refinement"},isAlternate:{label:"Alternate"},theRationale:{label:"Rationale"}},selectedAssociation:{environment:"",update:!1,association:{theEndName:"",theEndType:"",theRefType:"and",isAlternate:"No",theRationale:""}},obstacleCategories:["Confidentiality Threat","Integrity Threat","Availability Threat","Accountability Threat","Anonymity Threat","Pseudonymity Threat","Unlinkability Threat","Unobservability Threat","Threat","Vulnerability","Duration","Frequency","Demands","Goal Support"]}},methods:{setObject:function(){this.objt=this.object,this.commitLabel=this.label},onCommit:function(e){e.preventDefault(),this.checkForm()&&(""!=this.objt.theTags&&(this.objt.theTags=this.objt.theTags.split(",").map(function(e){return e.trim()})),this.$emit("object-commit",this.objt))},onCancel:function(e){e.preventDefault(),this.$router.push({name:"objectsview",params:{dimension:"obstacle"}})},addObstacleEnvironmentProperty:function(e){this.addEnvironmentProperty({theEnvironmentName:e,theDefinition:"",theCategory:"Threat",theGoalRefinements:[],theSubGoalRefinements:[],theConcerns:[],theProbability:0,theProbabilityRationale:""})},viewObstacleRefinement:function(e,t){this.selectedAssociation["index"]=t,this.selectedAssociation["association"]=JSON.parse(s()(e)),this.selectedAssociation["environment"]=this.objt.theEnvironmentProperties[this.envPropIndex].theEnvironmentName,this.selectedAssociation["update"]=!0,this.$refs.obstacleRefinementDialog.show()},addObstacleRefinement:function(){this.selectedAssociation["association"]={theEndName:"",theEndType:"",theRefType:"and",isAlternate:"No",theRationale:""},this.selectedAssociation["environment"]=this.objt.theEnvironmentProperties[this.envPropIndex].theEnvironmentName,this.selectedAssociation["update"]=!1,this.$refs.obstacleRefinementDialog.show()},deleteObstacleRefinement:function(e){this.objt.theEnvironmentProperties[this.envPropIndex].theGoalRefinements.splice(e,1)},viewSubObstacleRefinement:function(e,t){this.selectedAssociation["index"]=t,this.selectedAssociation["association"]=JSON.parse(s()(e)),this.selectedAssociation["environment"]=this.objt.theEnvironmentProperties[this.envPropIndex].theEnvironmentName,this.selectedAssociation["update"]=!0,this.$refs.subObstacleRefinementDialog.show()},addSubObstacleRefinement:function(){this.selectedAssociation["association"]={theEndName:"",theEndType:"",theRefType:"and",isAlternate:"No",theRationale:""},this.selectedAssociation["update"]=!1,this.$refs.subObstacleRefinementDialog.show()},updateObstacleRefinement:function(e){e.update?this.$set(this.objt.theEnvironmentProperties[this.envPropIndex].theGoalRefinements,e.index,e.association):this.objt.theEnvironmentProperties[this.envPropIndex].theGoalRefinements.push(e.association)},updateSubObstacleRefinement:function(e){e.update?this.$set(this.objt.theEnvironmentProperties[this.envPropIndex].theSubGoalRefinements,e.index,e.association):this.objt.theEnvironmentProperties[this.envPropIndex].theSubGoalRefinements.push(e.association)},deleteSubObstacleRefinement:function(e){this.objt.theEnvironmentProperties[this.envPropIndex].theSubGoalRefinements.splice(e,1)},addConcern:function(){this.showAssetDialog=!0,this.$refs.assetDialog.show()},addObstacleConcern:function(e){this.objt.theEnvironmentProperties[this.envPropIndex].theConcerns.push(e)},deleteConcern:function(e){this.objt.theEnvironmentProperties[this.envPropIndex].theConcerns.splice(e,1)},checkForm:function(){return this.errors=[],0==this.objt.theName.length&&this.errors.push("Obstacle name is required"),0==this.objt.theOriginator.length&&this.errors.push("Originator is required"),0==this.objt.theEnvironmentProperties.length&&this.errors.push("No environment properties have been defined"),!this.errors.length}}},h=c,b=n("2877"),u=Object(b["a"])(h,o,i,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-726df28e.ee0e25c3.js.map