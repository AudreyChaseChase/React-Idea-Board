(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,n){e.exports=n(61)},53:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"loadIdeas",function(){return _}),n.d(a,"getNewIdeaData",function(){return A}),n.d(a,"updateIdea",function(){return x}),n.d(a,"deleteIdea",function(){return k});var r=n(0),i=n.n(r),c=n(34),u=n.n(c),o=n(12),s=n(13),l=n(17),d=n(14),p=n(18),f=n(3),h=n.n(f),v=n(8),m=n(24),b=n(32),y=n(9),E=n(36),O=n.n(E),j="IDEAS_STORE",w=500;function I(){try{return JSON.parse(window.localStorage.getItem(j)||"[]")}catch(e){return[]}}function D(e){try{window.localStorage.setItem(j,JSON.stringify(e))}catch(t){}}function _(){return g.apply(this,arguments)}function g(){return(g=Object(v.a)(h.a.mark(function e(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e){var t=I();setTimeout(function(){e({data:t})},w)}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function A(){return S.apply(this,arguments)}function S(){return(S=Object(v.a)(h.a.mark(function e(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e){setTimeout(function(){var t=I(),n={id:O()(),created_date:(new Date).toISOString()};t.push(n),D(t),e({data:n})},w)}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function x(e){return N.apply(this,arguments)}function N(){return(N=Object(v.a)(h.a.mark(function e(t){var n,a,r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,a=t.title,r=t.body,e.abrupt("return",new Promise(function(e,t){var i=I(),c=i.find(function(e){return e.id===n});c?(c.title=a,c.body=r,D(i),setTimeout(function(){e({})},w)):t({response:{status:400}})}));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function k(e){return C.apply(this,arguments)}function C(){return(C=Object(v.a)(h.a.mark(function e(t){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e){D(I().filter(function(e){return e.id!==t})),setTimeout(function(){e({data:{}})},w)}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}var B=a,L="LOAD_IDEAS",T="LOAD_IDEAS_SUCCESS",U="LOAD_IDEAS_FAILURE",F="ADD_IDEA",P="ADD_IDEA_SUCCESS",R="ADD_IDEA_FAILURE",J="UPDATE_IDEA",H="UPDATE_IDEA_SUCCESS",M="UPDATE_IDEA_FAILURE",G="DELETE_IDEA",V="DELETE_IDEA_SUCCESS",W="DELETE_IDEA_FAILURE",Y="CHANGE_SORT_BY",q={data:[],isLoading:!1,sortBy:"createdDate"};var z="SHOW_NOTIFICATION",K="HIDE_NOTIFICATION",Q={notification:null};n(53),n(54);var X=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={count:0},n.onChange=function(){n.setState({count:n.textarea.value.length})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.maxLength-this.state.count,n=t<this.props.threshold;return i.a.createElement("div",null,i.a.createElement("textarea",Object.assign({},this.props.textAreaProps,{maxLength:this.props.maxLength,onChange:this.onChange,ref:function(t){return e.textarea=t},onBlur:function(){return e.props.onBlur(e.textarea.value)}})),n&&i.a.createElement("div",{className:"textarea__counter"},t," chars remaining"))}}]),t}(i.a.Component);X.defaultProps={onBlur:function(){},threshold:15};n(55);var Z=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){""===this.titleField.value&&this.titleField.focus()}},{key:"handleBlur",value:function(e){var t=e.body,n=e.title;this.props.onBlur({title:n,body:t})}},{key:"render",value:function(){var e=this,t=this.props,n=t.idea,a=n.createdDate,r=n.body,c=n.title,u=t.onDelete,o=new Date(a).toString().replace(/ GMT.*/g,"");return i.a.createElement("div",{className:"idea-tile"},i.a.createElement("button",{className:"idea-tile__delete-btn",onClick:u},i.a.createElement("i",{className:"fa fa-times","aria-hidden":"true"})),i.a.createElement("textarea",{className:"idea-tile__title",defaultValue:c,ref:function(t){return e.titleField=t},placeholder:"Add title...",onBlur:function(){return e.handleBlur({body:r,title:e.titleField.value})},rows:"2"}),i.a.createElement(X,{textAreaProps:{className:"idea-tile__description",defaultValue:r,placeholder:"Add description...",rows:4},onBlur:function(t){return e.handleBlur({title:c,body:t})},maxLength:140}),i.a.createElement("div",{className:"idea-tile__date"},o))}}]),t}(i.a.Component);n(56);function $(){return i.a.createElement("div",{className:"loader-ellipsis"},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null))}n(57);var ee=n(78),te=n(80),ne=n(79),ae=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.loadIdeas,e.next=3,t();case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"onIdeaBlur",value:function(){var e=Object(v.a)(h.a.mark(function e(t){var n,a,r,i,c,u;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.body,a=t.title,r=t.id,i=this.props,c=i.updateIdea,u=i.showNotification,e.next=4,c({body:n,title:a,id:r});case 4:u("Changes have been successfully saved.");case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"renderSortOptions",value:function(){var e=this.props,t=e.sortBy,n=e.changeSortBy,a=e.addIdea;return i.a.createElement("div",{className:"idea-menu"},i.a.createElement("button",{className:"idea-add",onClick:a},"New Idea"),i.a.createElement("form",{className:"idea-sort",autoComplete:"off"},i.a.createElement(ee.a,null,i.a.createElement(te.a,null,"Sort by"),i.a.createElement(ne.a,{value:t,className:"idea-sort__input",onChange:function(e){return n(e.target.value)}},i.a.createElement("option",{value:"createdDate"},"Created date"),i.a.createElement("option",{value:"title"},"Title")))))}},{key:"renderList",value:function(){var e=this,t=this.props,n=t.ideas,a=t.deleteIdea;return i.a.createElement("div",{className:"idea-list"},n.map(function(t){return i.a.createElement(Z,{key:t.id,idea:t,onBlur:function(n){var a=n.body,r=n.title;return e.onIdeaBlur({id:t.id,body:a,title:r})},onDelete:function(){return a(t.id)}})}))}},{key:"render",value:function(){return this.props.isLoading?i.a.createElement($,null):i.a.createElement("div",{className:"idea-container"},this.renderSortOptions(),this.renderList())}}]),t}(i.a.Component),re={loadIdeas:function(){return function(){var e=Object(v.a)(h.a.mark(function e(t){var n,a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:L}),e.prev=1,e.next=4,B.loadIdeas();case 4:return n=e.sent,a=n.data,e.abrupt("return",t({type:T,payload:a.map(function(e){return{id:e.id,title:e.title,body:e.body,createdDate:e.created_date}})}));case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",t({type:U,payload:e.t0}));case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}()},addIdea:function(){return function(){var e=Object(v.a)(h.a.mark(function e(t){var n,a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:F}),e.prev=1,e.next=4,B.getNewIdeaData();case 4:return n=e.sent,a=n.data,e.abrupt("return",t({type:P,payload:{id:a.id,createdDate:a.created_date}}));case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",t({type:R,payload:e.t0}));case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}()},updateIdea:function(e){var t=e.id,n=e.body,a=e.title;return function(){var e=Object(v.a)(h.a.mark(function e(r){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:J}),e.prev=1,e.next=4,B.updateIdea({id:t,body:n,title:a});case 4:return e.abrupt("return",r({type:H,idea:{id:t,body:n,title:a}}));case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",r({type:M,payload:e.t0}));case 10:case"end":return e.stop()}},e,null,[[1,7]])}));return function(t){return e.apply(this,arguments)}}()},deleteIdea:function(e){return function(){var t=Object(v.a)(h.a.mark(function t(n){return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:G}),t.prev=1,t.next=4,B.deleteIdea(e);case 4:return t.abrupt("return",n({type:V,id:e}));case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",n({type:W,payload:t.t0}));case 10:case"end":return t.stop()}},t,null,[[1,7]])}));return function(e){return t.apply(this,arguments)}}()},showNotification:function(e){return function(t){t({type:z,notification:e}),setTimeout(function(){t({type:K})},1500)}},changeSortBy:function(e){return{type:Y,sortBy:e}}};function ie(e,t){return"createdDate"===t?e.sort(function(e,t){return new Date(e.createdDate)-new Date(t.createdDate)}):"title"===t?e.sort(function(e,t){return e.title.localeCompare(t.title)}):e}var ce=Object(m.b)(function(e){var t=e.ideas,n=t.data,a=t.isLoading,r=t.sortBy;return{ideas:ie(n,r),isLoading:a,sortBy:r}},re)(ae);n(58);var ue=Object(m.b)(function(e){return{notification:e.notification.notification}})(function(e){var t=e.notification;return t?i.a.createElement("div",{className:"notification"},t):null}),oe=(n(59),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("header",{className:"header"},i.a.createElement("span",{role:"img","aria-label":"idea"})," ","Idea Board"),i.a.createElement(ce,null),i.a.createElement(ue,null))}}]),t}(r.Component)),se=(n(60),n(20)),le=n(37),de=Object(se.c)({ideas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(y.a)({},e,{isLoading:!0});case T:return Object(y.a)({},e,{data:t.payload,isLoading:!1});case U:return Object(y.a)({},e,{isLoading:!1});case P:var n=Object(y.a)({},t.payload,{title:"",body:""});return Object(y.a)({},e,{data:[].concat(Object(b.a)(e.data),[n])});case H:var a=Object(b.a)(e.data),r=a.find(function(e){return e.id===t.idea.id});return r.title=t.idea.title,r.body=t.idea.body,Object(y.a)({},e,{data:a});case V:return Object(y.a)({},e,{data:e.data.filter(function(e){return e.id!==t.id})});case Y:return Object(y.a)({},e,{sortBy:t.sortBy});default:return e}},notification:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object(y.a)({},e,{notification:t.notification});case K:return Object(y.a)({},e,{notification:null});default:return e}}});u.a.render(i.a.createElement(m.a,{store:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(se.d)(de,e,Object(se.a)(le.a))}()},i.a.createElement(oe,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.a29a3e27.chunk.js.map