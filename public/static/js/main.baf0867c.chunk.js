(this["webpackJsonpget-scripts"]=this["webpackJsonpget-scripts"]||[]).push([[0],{22:function(t){t.exports=JSON.parse('["Great job! You\u2019re 2 classes away from achieving your 10th class batch for Pilates. Keep going! Check out what we have here for you! ","We hope you enjoyed this class as much as we did. Be the first one to say something!","This is your 10th class at AORA, time to celebrate! Whohohoooo","Keep pushing it as hou have and you will soon reach your goal to gain 3kg of pure muscle. ","If you keep training like this you will very shortly reach your goal and match your target weight of 69kg"]')},40:function(t,e,n){},63:function(t,e,n){},64:function(t,e,n){},65:function(t,e,n){},66:function(t,e){e.onlyUnique=function(t,e,n){return n.indexOf(t)===e}},67:function(t,e,n){},68:function(t,e,n){"use strict";n.r(e);var s=n(0),a=n(1),r=n.n(a),c=n(33),o=n.n(c),i=n(8),u=n(2),l=n(3),h=n(5),d=n(4),j=(n(40),n(6)),p=n(13),m=n(10),f=n.n(m),b=new(function(){function t(){Object(u.a)(this,t),this.auth=f.a.create({baseURL:"https://aora-social.herokuapp.com",withCredentials:!0})}return Object(l.a)(t,[{key:"signup",value:function(t,e){return this.auth.post("/auth/signup",{username:t,password:e}).then((function(t){return t.data}))}},{key:"login",value:function(t,e){return this.auth.post("/auth/login",{username:t,password:e}).then((function(t){return t.data}))}},{key:"logout",value:function(){return this.auth.post("/auth/logout").then((function(t){return t.data}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(t){return t.data}))}}]),t}()),O=r.a.createContext(),g=O.Consumer,x=O.Provider,v=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={isLoggedIn:!1,isLoading:!0,user:null},t.signup=function(e,n){b.signup(e,n).then((function(e){return t.setState({isLoggedIn:!0,user:e})})).catch((function(e){t.setState({isLoggedIn:!1,user:null})}))},t.login=function(e,n){b.login(e,n).then((function(e){return t.setState({isLoggedIn:!0,user:e})})).catch((function(e){t.setState({isLoggedIn:!1,user:null})}))},t.logout=function(){b.logout().then((function(){return t.setState({isLoggedIn:!1,user:null})})).catch((function(t){return console.log(t)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;b.me().then((function(e){return t.setState({isLoggedIn:!0,user:e,isLoading:!1})})).catch((function(e){return t.setState({isLoggedIn:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var t=this.state,e=t.isLoggedIn,n=t.isLoading,a=t.user,r=this.signup,c=this.login,o=this.logout;return n?Object(s.jsx)("p",{children:"Loading"}):Object(s.jsx)(x,{value:{isLoggedIn:e,isLoading:n,user:a,signup:r,login:c,logout:o},children:this.props.children})}}]),n}(r.a.Component),y=function(t){return function(e){Object(h.a)(a,e);var n=Object(d.a)(a);function a(){return Object(u.a)(this,a),n.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(s.jsx)(g,{children:function(n){var a=n.isLoggedIn,r=n.isLoading,c=n.user,o=n.signup,i=n.login,u=n.logout;return Object(s.jsx)(t,Object(p.a)(Object(p.a)({},e.props),{},{isLoggedIn:a,isLoading:r,user:c,signup:o,login:i,logout:u}))}})}}]),a}(r.a.Component)},C=y(function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.user,n=t.logout,a=t.isLoggedIn;return e&&console.log("user.username, isLoggedIn :>> ",e.username,a),e&&Object(s.jsxs)("nav",{className:"navbar",children:[Object(s.jsx)(i.b,{to:"/classes",children:Object(s.jsx)("h4",{children:"Classes"})}),Object(s.jsx)("h4",{onClick:n,children:"Logout"})]})}}]),n}(a.Component));var S=function(){return setTimeout((function(){window.location.href="/login"}),2e3),Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:"Splash Page"})})},T=n(15),k=y(function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={username:"",password:""},t.handleFormSubmit=function(e){e.preventDefault();var n=t.state,s=n.username,a=n.password;t.props.signup(s,a)},t.handleChange=function(e){var n=e.target,s=n.name,a=n.value;t.setState(Object(T.a)({},s,a))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.username,n=t.password;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Sign Up"}),Object(s.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(s.jsx)("label",{children:"Username:"}),Object(s.jsx)("input",{type:"text",name:"username",value:e,onChange:this.handleChange}),Object(s.jsx)("label",{children:"Password:"}),Object(s.jsx)("input",{type:"password",name:"password",value:n,onChange:this.handleChange}),Object(s.jsx)("input",{type:"submit",value:"Signup"})]}),Object(s.jsx)("p",{children:"Already have account?"}),Object(s.jsx)(i.b,{to:"/login",children:" Login"})]})}}]),n}(a.Component)),w=y(function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={username:"",password:""},t.handleFormSubmit=function(e){e.preventDefault();var n=t.state,s=n.username,a=n.password;t.props.login(s,a)},t.handleChange=function(e){var n=e.target,s=n.name,a=n.value;t.setState(Object(T.a)({},s,a))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.username,n=t.password;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Login"}),Object(s.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(s.jsx)("label",{children:"Username:"}),Object(s.jsx)("input",{type:"text",name:"username",value:e,onChange:this.handleChange}),Object(s.jsx)("label",{children:"Password:"}),Object(s.jsx)("input",{type:"password",name:"password",value:n,onChange:this.handleChange}),Object(s.jsx)("input",{type:"submit",value:"Login"})]}),Object(s.jsxs)(i.b,{to:"/signup",children:[Object(s.jsx)("p",{className:"navbar-button",children:"Sign Up"})," "]})]})}}]),n}(a.Component)),A=n(18),I=(n(63),n(64),function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={expanded:!1,selectedValue:""},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"selector",children:Object(s.jsxs)("button",{onClick:function(){return t.setState({expanded:!t.state.expanded})},children:[this.props.text," ",this.state.selectedValue]})}),!0===this.state.expanded?this.props.arr.map((function(e){return Object(s.jsx)("div",{className:"filterItem",onClick:function(){t.setState({expanded:!1}),t.setState({selectedValue:e}),t.props.filterResults(e)},children:e},e)})):null]})}},{key:"componentDidMount",value:function(){this.setState({selectedValue:this.props.filterValue})}}]),n}(a.Component)),L=(n(65),function(t){return Object(s.jsx)("div",{className:"button-pink-fixed",children:Object(s.jsx)("button",{onClick:function(){t.handleClick()},children:t.text})})}),F=n(66).onlyUnique,M=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={classesArr:[],classesArrFloor:[],filterToolIsOn:!1,classTypesArr:[],instructorsArr:[],durationsArr:[],filter:{classType:"",instructor:"",duration:""},activeFilterCount:0},t.fillStateArrays=function(){var e=t.state.classesArr.map((function(t){return t.classType})).filter(F);t.setState((function(t){return{classTypesArr:[].concat(Object(A.a)(t.classTypesArr||[]),[e,"none"]).flat()}}));var n=t.state.classesArr.map((function(t){return t.instructor.username})).filter(F);t.setState((function(t){return{instructorsArr:[].concat(Object(A.a)(t.instructorsArr||[]),[n,"none"]).flat()}}));var s=t.state.classesArr.map((function(t){return t.duration})).filter(F);t.setState((function(t){return{durationsArr:[].concat(Object(A.a)(t.durationsArr||[]),[s,"none"]).flat()}}))},t.updateFilter1=function(e){var n=Object(p.a)({},t.state.filter);n.classType=e,t.setState({filter:n},t.filterResults)},t.updateFilter2=function(e){var n=Object(p.a)({},t.state.filter);n.instructor=e,t.setState({filter:n},t.filterResults)},t.updateFilter3=function(e){var n=Object(p.a)({},t.state.filter);n.duration=e,t.setState({filter:n},t.filterResults)},t.filterResults=function(){console.log("this.state.filter :>> ",t.state.filter);var e=Object(A.a)(t.state.classesArrFloor),n=0;console.log("activeFilterCount :>> ",n),""!==t.state.filter.classType&&"none"!==t.state.filter.classType&&(n++,e=e.filter((function(e){return e.classType===t.state.filter.classType}))),""!==t.state.filter.instructor&&"none"!==t.state.filter.instructor&&(n++,e=e.filter((function(e){return e.instructor.username===t.state.filter.instructor}))),""!==t.state.filter.duration&&"none"!==t.state.filter.duration&&(n++,e=e.filter((function(e){return e.duration===t.state.filter.duration}))),t.setState({classesArr:e,activeFilterCount:n})},t.closeFilterTool=function(){t.setState({filterToolIsOn:!1})},t.addZeroBefore=function(t){return(t<10?"0":"")+t},t.humanizeDay=function(t){switch(t){case 0:return"Sunday";case 1:return"Monday";case 2:return"Tuesday";case 3:return"Wednesday";case 4:return"Thursday";case 5:return"Friday";case 6:return"Saturday";default:return"XXX"}},t.humanizeDayMini=function(t){switch(t){case 0:return"Sun";case 1:return"Mon";case 2:return"Tue";case 3:return"Wed";case 4:return"Thu";case 5:return"Fri";case 6:return"Sat";default:return"XXX"}},t.humanizeMonth=function(t){switch(t){case 0:return"Jan.";case 1:return"Feb.";case 2:return"Mar.";case 3:return"Apr.";case 4:return"May.";case 5:return"Jun.";case 6:return"Jul.";case 7:return"Ago.";case 8:return"Sep.";case 9:return"Oct.";case 10:return"Nov.";case 11:return"Dec.";default:return"XXX"}},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(s.jsxs)("div",{children:[this.state.filterToolIsOn&&Object(s.jsxs)("div",{className:"filter-tool",children:[Object(s.jsx)("h2",{children:"Filter results"}),Object(s.jsx)("div",{className:"close-x",onClick:function(){var e=Object(p.a)({},t.state.filter);e.classType="",e.instructor="",e.duration="",t.setState({classesArr:t.state.classesArrFloor,filter:e,activeFilterCount:0}),t.closeFilterTool()},children:"X"}),Object(s.jsx)(I,{arr:this.state.classTypesArr,filterResults:this.updateFilter1,text:"Class type",filterValue:this.state.filter.classType}),Object(s.jsx)(I,{arr:this.state.instructorsArr,filterResults:this.updateFilter2,text:"Instructor",filterValue:this.state.filter.classType}),Object(s.jsx)(I,{arr:this.state.durationsArr,filterResults:this.updateFilter3,text:"Duration",filterValue:this.state.filter.classType}),Object(s.jsx)(L,{text:"See ".concat(this.state.classesArr.length," results"),handleClick:this.closeFilterTool})]}),Object(s.jsx)("div",{className:"button-filter",children:Object(s.jsxs)("button",{onClick:function(){return t.setState({filterToolIsOn:!0})},children:["Filter (",this.state.activeFilterCount,")"]})}),this.state.classesArr.map((function(e){return Object(s.jsx)(i.b,{to:"/classes/".concat(e._id),children:Object(s.jsxs)("div",{className:"oneClass",children:[Object(s.jsxs)("h3",{children:[t.addZeroBefore(new Date(e.scheduled).getHours()),":",t.addZeroBefore(new Date(e.scheduled).getMinutes())," ","| ",e.classType]}),Object(s.jsxs)("p",{children:[e.instructor.username," | ",e.duration," min"," "]})]})},e._id)}))]})}},{key:"componentDidMount",value:function(){var t=this;f.a.get("".concat("https://aora-social.herokuapp.com","/api/classes")).then((function(e){t.setState({classesArr:e.data}),t.setState({classesArrFloor:e.data}),t.fillStateArrays()})).catch((function(t){return console.log(t)}))}}]),n}(a.Component),D=y(M),B=y(function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Private Route"}),Object(s.jsxs)("h2",{children:["Welcome ",this.props.user&&this.props.user.username]}),Object(s.jsx)(M,{})]})}}]),n}(a.Component)),N=n(22),_=(n(67),y(function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={classType:"",instructorName:"",duration:"",scheduled:"",targetedMessage:"",comments:[],commentTimeDiffs:[],commentToolIsOn:!1,commentBody:"",commentId:"",crudMode:""},t.getClassDetails=function(){var e=t.props.match.params.class_id;f.a.get("".concat("https://aora-social.herokuapp.com","/api/classes/").concat(e)).then((function(e){var n=e.data,s=n.classType,a=n.duration,r=n.scheduled,c=n.instructor.username,o=n.comments.reverse();t.setState({classType:s,instructorName:c,duration:a,scheduled:r,comments:o}),t.fillCommentTimeDiffs()})).catch((function(t){return console.log(t)}))},t.msToTime=function(t){var e=Math.floor(t/6e4%60),n=Math.floor(t/36e5%24),s=Math.floor(t/864e5),a="";return 0===s&&0===n&&0===e?a="just now":(0!==s?s+="d ":s="",0!==n?n+="h ":n="",0!==e?e+="m ":e="",a="".concat(s).concat(n).concat(e)),a},t.fillCommentTimeDiffs=function(){var e=t.state.comments.map((function(e){var n=new Date-new Date(e.updated_at);return t.msToTime(n)}));t.setState({commentTimeDiffs:e})},t.loadTargetedMessage=function(){var e=Math.floor(Math.random()*Math.floor(N.length)),n=N[e];t.setState({targetedMessage:n})},t.handleChange=function(e){var n=e.target,s=n.name,a=n.value;t.setState(Object(T.a)({},s,a))},t.handleFormSubmit=function(e){e.preventDefault();var n=t.state.commentBody,s=t.props.match.params.class_id;"C"===t.state.crudMode&&f.a.post("".concat("https://aora-social.herokuapp.com","/api/comments"),{commentBody:n,classId:s},{withCredentials:!0}).then((function(){t.getClassDetails(),t.setState({commentBody:"",commentToolIsOn:!1})})).catch((function(t){return console.log(t)})),"U"===t.state.crudMode&&f.a.put("".concat("https://aora-social.herokuapp.com","/api/comments/").concat(t.state.commentId),{commentBody:n},{withCredentials:!0}).then((function(){t.getClassDetails(),t.setState({commentBody:"",commentToolIsOn:!1})})).catch((function(t){return console.log(t)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(s.jsxs)("div",{children:[Object(s.jsx)(i.b,{className:"close-x",to:"/classes",children:"X"}),this.state.commentToolIsOn&&Object(s.jsxs)("div",{className:"comment-tool",children:[Object(s.jsx)("p",{children:"Comment here"}),Object(s.jsx)("div",{className:"close-x",onClick:function(){t.setState({commentToolIsOn:!1}),console.log(t.state.crudMode)},children:"X"}),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"profile-pic"}),Object(s.jsxs)("form",{children:[Object(s.jsx)("textarea",{className:"text-area",type:"text",placeholder:"Post your comment here",name:"commentBody",value:this.state.commentBody,onChange:this.handleChange}),Object(s.jsx)("button",{onClick:this.handleFormSubmit,children:"Post comment"})]})]})]}),Object(s.jsxs)("p",{children:[this.state.classType," "]}),Object(s.jsxs)("p",{children:[this.state.instructorName," "]}),Object(s.jsxs)("p",{children:[this.state.duration," "]}),Object(s.jsxs)("p",{children:[this.state.scheduled," "]}),Object(s.jsxs)("p",{children:[this.state.targetedMessage," "]}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),this.state.comments.map((function(e,n){return Object(s.jsxs)("div",{children:[Object(s.jsxs)(i.b,{to:"/comment/".concat(e._id),children:[Object(s.jsxs)("p",{children:[e.author.username," | ",t.state.commentTimeDiffs[n]]}),Object(s.jsx)("p",{children:e.commentBody}),Object(s.jsx)("p",{children:"view x replies"}),Object(s.jsx)("br",{})]}),t.props.user._id===e.author._id?Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{onClick:function(){t.setState({crudMode:"U",commentBody:e.commentBody,commentId:e._id,commentToolIsOn:!0})},children:Object(s.jsx)("img",{src:"/img/edit.svg",alt:"edit"})}),Object(s.jsx)("button",{onClick:function(){f.a.delete("".concat("https://aora-social.herokuapp.com","/api/comments/").concat(e._id),{withCredentials:!0}).then((function(){t.getClassDetails()})).catch((function(t){return console.log(t)}))},children:Object(s.jsx)("img",{src:"/img/delete.svg",alt:"delete"})})]}):null]},e._id)})),Object(s.jsx)(L,{text:"Add comment",handleClick:function(){t.setState({crudMode:"C",commentBody:"",commentToolIsOn:!0})}})]})}},{key:"componentDidMount",value:function(){this.getClassDetails(),this.loadTargetedMessage()}}]),n}(a.Component))),R=y(function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={classType:"",instructor:"",duration:"",scheduled:"",message:""},t.handleFormSubmit=function(e){e.preventDefault();var n=t.state,s=n.classType,a=n.instructor,r=n.duration,c=n.scheduled,o=n.message;f.a.post("".concat("https://aora-social.herokuapp.com","/api/classes"),{classType:s,instructor:a,duration:r,scheduled:c,message:o},{withCredentials:!0}).then((function(){t.setState({classType:"",instructor:"",duration:"",scheduled:""})})).catch((function(t){return console.log(t)}))},t.handleChange=function(e){var n=e.target,s=n.name,a=n.value;t.setState(Object(T.a)({},s,a))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsxs)("form",{children:[Object(s.jsx)("input",{type:"text",placeholder:"class type",name:"classType",value:this.state.classType,onChange:this.handleChange}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{name:"instructor",placeholder:"instructor",value:this.state.instructor,onChange:this.handleChange}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{name:"duration",placeholder:"duration",value:this.state.duration,onChange:this.handleChange}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{name:"scheduled",placeholder:"date object",value:this.state.scheduled,onChange:this.handleChange}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{children:[Object(s.jsx)("br",{}),Object(s.jsx)("button",{onClick:this.handleFormSubmit,children:"SUBMIT"})]})]})})}}]),n}(a.Component)),X=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={commentBody:"",author:"",replies:[],updated_at:"",replyToolIsOn:!1},t.getCommentDetails=function(){var e=t.props.match.params.comment_id;f.a.get("".concat("https://aora-social.herokuapp.com","/api/comments/").concat(e)).then((function(e){var n=e.data,s=n.commentBody,a=n.author,r=n.updated_at,c=n.replies.reverse();t.setState({commentBody:s,author:a,replies:c,updated_at:r}),t.fillCommentTimeDiffs()})).catch((function(t){return console.log(t)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(s.jsxs)("div",{children:[this.state.commentBody,Object(s.jsx)(L,{text:"Reply",handelClick:function(){t.setState({replyToolIsOpen:!0})}})]})}},{key:"componentDidMount",value:function(){this.getCommentDetails()}}]),n}(a.Component);var U=y((function(t){var e=t.isLoggedIn,n=t.isLoading,a=t.component,r=t.exact,c=t.path;return n?"Loading":Object(s.jsx)(j.b,{exact:r,path:c,render:function(t){return e?Object(s.jsx)(j.a,{to:"/classes"}):e?void 0:Object(s.jsx)(a,Object(p.a)({},t))}})}));var P=y((function(t){var e=t.isLoggedIn,n=t.isLoading,a=t.component,r=t.exact,c=t.path;return n?"Loading":Object(s.jsx)(j.b,{exact:r,path:c,render:function(t){return e?e?Object(s.jsx)(a,Object(p.a)({},t)):void 0:Object(s.jsx)(j.a,{to:"/login"})}})})),V=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(C,{}),Object(s.jsxs)(j.d,{children:[Object(s.jsx)(j.b,{exact:!0,path:"/",component:S}),Object(s.jsx)(U,{exact:!0,path:"/signup",component:k}),Object(s.jsx)(U,{exact:!0,path:"/login",component:w}),Object(s.jsx)(P,{exact:!0,path:"/private",component:B}),Object(s.jsx)(P,{exact:!0,path:"/CMS",component:R}),Object(s.jsx)(P,{exact:!0,path:"/classes",component:D}),Object(s.jsx)(P,{exact:!0,path:"/classes/:class_id",component:_}),Object(s.jsx)(P,{exact:!0,path:"/comment/:comment_id",component:X})]})]})}}]),n}(a.Component);o.a.render(Object(s.jsx)(i.a,{children:Object(s.jsx)(v,{children:Object(s.jsx)(V,{})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.baf0867c.chunk.js.map