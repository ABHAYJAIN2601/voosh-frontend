(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{161:function(e,t,s){},162:function(e,t,s){},171:function(e,t,s){},175:function(e,t){},177:function(e,t){},211:function(e,t){},213:function(e,t){},214:function(e,t){},219:function(e,t){},221:function(e,t){},241:function(e,t){},257:function(e,t){},260:function(e,t){},302:function(e,t,s){},303:function(e,t,s){},304:function(e,t,s){},305:function(e,t,s){},306:function(e,t,s){},307:function(e,t,s){},310:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),n=s(147),i=s.n(n),o=(s(161),s(162),s(10)),r=s(31);const l="LOGIN_USER",d="SET_CURRENT_USER",j="ADD_TASK",p="EDIT_TASK",b="DELETE_TASK",u="LOGOUT_USER",h="GET_TASK_BY_ID",O="UPDATE_USER",g="GET_TASKS",m="GET_USER_BY_ID",x="POP_UP_MESSAGE",v={isLoggedIn:!!localStorage.getItem("token"),userDetails:{},taskData:{},taskLoading:!0,tasksLoading:!0,tasks:[],popMessage:""};var k=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return{...e,userDetails:t.payload,isLoggedIn:!0};case l:return{...e,isLoggedIn:t.isLoggedIn};case x:return{...e,popMessage:t.payload};case d:return localStorage.setItem("user",t.payload),{...e,userDetails:{...t.payload.user},isLoggedIn:!0};case u:return{...e,isLoggedIn:!1};case h:const s=e.tasks.find((e=>e.id==t.payload));return{...e,taskData:s,taskLoading:!1};case g:return{...e,tasks:t.payload,tasksLoading:!1};case O:return{...e,userDetails:{...e.userDetails,...t.payload}};case j:return{...e,tasks:[t.payload,...e.tasks]};case p:return{...e,tasks:e.tasks.map((e=>e.id===t.payload.id?t.payload.task:e))};case b:return{...e,tasks:e.tasks.filter((e=>e.id!==t.payload))};default:return e}},f=s(151),y=s(150);var T=Object(r.createStore)(k,Object(y.composeWithDevTools)(Object(r.applyMiddleware)(f.a))),D=s(13),I=s(4),w=s(316);var N=e=>{e?w.a.defaults.headers.common.Authorization=`Bearer ${e}`:delete w.a.defaults.headers.common.Authorization};const S=()=>function(e){var t;localStorage.removeItem("token"),e((t={user:{},token:{}},function(e){e({type:d,payload:t})})),e({type:u}),window.location.href="/"},E=(e,t)=>function(s){var a={url:"http://54.152.123.170:3000/v1/task/"+e,method:"PATCH",headers:{"content-type":"application/json"},data:t};Object(w.a)(a).then((t=>{s({type:p,payload:{id:e,task:t.data}}),s({type:x,payload:"Task Updated!!"}),window.location.href="/"})).catch((e=>{console.log(e)}))},L=e=>function(t){var s={url:"http://54.152.123.170:3000/v1/users/"+e,method:"GET",headers:{"content-type":"application/json"}};Object(w.a)(s).then((e=>{t({type:m,payload:e.data})})).catch((e=>{console.log(e)}))};s(171);var U=s(30),C=s(1);var A=Object(o.connect)(null,(e=>({loginUser:(t,s)=>e(((e,t)=>function(s){var a={url:"http://54.152.123.170:3000/v1/auth/login",method:"POST",data:{email:e,password:t},headers:{"content-type":"application/json"}};Object(w.a)(a).then((e=>{const t=e.data.tokens.access.token;localStorage.setItem("token",t),N(t),console.log(e.data.user,t),e.data.user&&(s(L(e.data.user.id)),s({type:l,isLoggedIn:!0}))})).catch((e=>{console.log(e)}))})(t,s))})))((function(e){const t=Object(I.q)(),[s,c]=Object(a.useState)(""),[n,i]=Object(a.useState)("");return Object(U.c)({onSuccess:e=>{console.log(e)},onError:()=>{console.log("Login Failed")}}),Object(C.jsxs)("div",{children:[Object(C.jsx)(U.a,{onSuccess:e=>{console.log(e)},onError:()=>{console.log("Login Failed")},useOneTap:!0}),Object(C.jsx)("div",{class:"container",children:Object(C.jsx)("div",{class:"login-body",children:Object(C.jsxs)("div",{class:"row align-items-center justify-content-center",children:[Object(C.jsx)("div",{class:"col-md-5",children:Object(C.jsx)("div",{class:"login-img",children:Object(C.jsx)("img",{src:"imgs/login.jpg",alt:"",class:"img-fluid"})})}),Object(C.jsx)("div",{class:"col-md-12",children:Object(C.jsxs)("div",{class:"login-form",children:[Object(C.jsx)("h3",{children:"SIGN IN"}),Object(C.jsxs)("form",{action:"",children:[Object(C.jsx)("div",{class:"mail-input",children:Object(C.jsxs)("div",{class:"input-group flex-nowrap",children:[Object(C.jsx)("span",{class:"input-group-text",id:"addon-wrapping",children:Object(C.jsx)("i",{class:"fa-solid fa-envelope"})}),Object(C.jsx)("input",{id:"signInEmail",type:"text",class:"form-control",placeholder:"Username",value:s,onChange:e=>c(e.target.value),"aria-label":"Username","aria-describedby":"addon-wrapping"})]})}),Object(C.jsx)("div",{class:"password-input",children:Object(C.jsxs)("div",{class:"input-group flex-nowrap",children:[Object(C.jsx)("span",{class:"input-group-text",id:"addon-wrapping",children:Object(C.jsx)("i",{class:"fa-solid fa-lock"})}),Object(C.jsx)("input",{id:"signInPassword",type:"password",placeholder:"Password",value:n,onChange:e=>i(e.target.value),class:"form-control","aria-label":"Username","aria-describedby":"addon-wrapping"})]})}),Object(C.jsx)("p",{id:"loginError",class:"alert text-danger d-none",children:"Your email or password is wrong or cant be empty"}),Object(C.jsx)("a",{id:"signInBtn",class:"submit d-block m-auto mb-5 ",onClick:()=>{s&&n?(console.log(e),localStorage.setItem("isLoggedIn",!0),localStorage.setItem("username",s),e.loginUser(s,n),t("/")):alert("Invalid Credentials")},children:"Login"})]}),Object(C.jsx)(D.b,{to:"/signup",children:"Do not have an account ? Sign Up"})]})})]})})})]})})),P=s(91),_=s.n(P);var M=Object(o.connect)(null,(e=>({signupUser:(t,s,a)=>e(((e,t,s)=>function(a){var c={url:"http://54.152.123.170:3000/v1/auth/register",method:"POST",data:{email:e,password:t,name:s},headers:{"content-type":"application/json"}};Object(w.a)(c).then((e=>{200===e.data.status.code&&a({type:l,isLoggedIn:!0}),window.location.href="/"})).catch((e=>{console.log(e)}))})(t,s,a))})))((e=>{const[t,s]=Object(a.useState)({}),c=e=>{s({...t,[e.target.name]:e.target.value})};return Object(C.jsx)("div",{children:Object(C.jsx)("div",{class:"container",children:Object(C.jsx)("div",{class:"login-body",children:Object(C.jsxs)("div",{class:"row align-items-center justify-content-center",children:[Object(C.jsx)("div",{class:"col-md-5",children:Object(C.jsx)("div",{class:"login-img",children:Object(C.jsx)("img",{src:"imgs/login.jpg",alt:"",class:"img-fluid"})})}),Object(C.jsx)("div",{class:"col-md-12",children:Object(C.jsxs)("div",{class:"login-form",children:[Object(C.jsx)("h3",{children:"SIGN UP"}),Object(C.jsxs)("form",{action:"",children:[Object(C.jsx)("div",{class:"mail-input",children:Object(C.jsxs)("div",{class:"input-group flex-nowrap",children:[Object(C.jsx)("span",{class:"input-group-text",id:"addon-wrapping",children:Object(C.jsx)("i",{class:"fa-solid fa-envelope"})}),Object(C.jsx)("input",{id:"signInEmail",type:"text",class:"form-control",placeholder:"Email",name:"email",onChange:c,"aria-label":"Email","aria-describedby":"addon-wrapping"})]})}),Object(C.jsx)("div",{class:"mail-input",children:Object(C.jsxs)("div",{class:"input-group flex-nowrap",children:[Object(C.jsx)("span",{class:"input-group-text",id:"addon-wrapping",children:Object(C.jsx)("i",{class:"fa-solid fa-envelope"})}),Object(C.jsx)("input",{id:"signInEmail",type:"text",class:"form-control",placeholder:"Name",name:"name",onChange:c,"aria-label":"Name","aria-describedby":"addon-wrapping"})]})}),Object(C.jsx)("div",{class:"password-input",children:Object(C.jsxs)("div",{class:"input-group flex-nowrap",children:[Object(C.jsx)("span",{class:"input-group-text",id:"addon-wrapping",children:Object(C.jsx)("i",{class:"fa-solid fa-lock"})}),Object(C.jsx)("input",{id:"signInPassword",type:"password",name:"password",placeholder:"Password",onChange:c,class:"form-control","aria-label":"Username","aria-describedby":"addon-wrapping"})]})}),Object(C.jsx)("p",{id:"loginError",class:"alert text-danger d-none",children:"Your email or password is wrong or cant be empty"}),Object(C.jsx)("a",{id:"signInBtn",class:"submit d-block m-auto mb-5 ",onClick:()=>{console.log(t),e.signupUser(t.email,t.password,t.name)},children:"SignUp"})]})]})})]})})})})}));s(302);var B=Object(o.connect)((e=>({userName:e.userDetails.name,userAvatar:e.userDetails.avatar,isLoggedIn:e.isLoggedIn})),(e=>({logoutUser:()=>e(S())})))((e=>Object(C.jsx)("nav",{className:"navbar",children:Object(C.jsxs)("div",{className:"navbar-container",children:[Object(C.jsx)("div",{className:"logo",children:Object(C.jsx)("a",{href:"#",children:"Taskly \u2728"})}),Object(C.jsx)("div",{children:Object(C.jsxs)("ul",{className:"nav-links",children:[Object(C.jsx)("li",{children:Object(C.jsx)(D.b,{to:"/",children:"Home"})}),Object(C.jsx)("li",{children:Object(C.jsx)(D.b,{to:"/my-profile",children:"My Profile"})}),Object(C.jsx)("li",{children:Object(C.jsx)(D.b,{to:"/add-task",children:"Add Task"})}),Object(C.jsx)("li",{children:Object(C.jsx)("img",{className:"navbar-profile",src:`http://54.152.123.170:3000/${e.userAvatar?e.userAvatar:"1"}.png`,alt:"user-profile"})}),Object(C.jsx)("li",{children:Object(C.jsx)(D.b,{children:e.userName?e.userName:"Sign In"})}),Object(C.jsx)("li",{className:"logout-btn",children:Object(C.jsx)(D.b,{onClick:()=>e.logoutUser(),children:"Log Out"})})]})})]})})));s(303);var G=Object(o.connect)((e=>({user:e.userDetails})),(e=>({updateUser:(t,s)=>e(((e,t)=>function(s){var a={url:"http://54.152.123.170:3000/v1/users/"+e,method:"PATCH",headers:{"content-type":"application/json"},data:t};Object(w.a)(a).then((e=>{s({type:O,payload:e.data}),s({type:x,payload:"Profile Updated!!"})})).catch((e=>{console.log(e)}))})(t,s))})))((e=>{const[t,s]=Object(a.useState)({}),[c,n]=Object(a.useState)(1);Object(a.useEffect)((()=>{s({...e.user,avatar:e.user.avatar||1})}),[e.user]);const i=e=>{n(e)};return Object(C.jsxs)("div",{className:"profile-wrapper",children:[Object(C.jsx)("h1",{children:"User Profile"}),Object(C.jsx)("div",{className:"tab-container",children:Object(C.jsxs)("div",{className:"tab-header",children:[Object(C.jsx)("div",{className:"tab-item "+(1===c?"active":""),onClick:()=>i(1),children:"Profile"},1),Object(C.jsx)("div",{className:"tab-item "+(2===c?"active":""),onClick:()=>i(2),children:"My Task"},2),Object(C.jsx)("div",{className:"tab-item "+(3===c?"active":""),onClick:()=>i(3),children:"Drafts"},3)]})}),1===c&&Object(C.jsxs)("div",{className:"profile-tab",children:[Object(C.jsx)("img",{src:`http://54.152.123.170:3000/${e.user.avatar}.png`,alt:"profile",className:"author-avatar"}),Object(C.jsx)("p",{children:e.user.name}),Object(C.jsx)("p",{children:e.user.email}),Object(C.jsxs)("div",{className:"avatar-selector",children:[Object(C.jsx)("p",{children:"Select an Avatar:"}),Object(C.jsx)("div",{className:"avatar-options",children:[...Array(9)].map(((e,a)=>{const c=a+1;return Object(C.jsx)("img",{src:`http://54.152.123.170:3000/${c}.png`,alt:`avatar-${c}`,className:"avatar-option "+(t.avatar===c?"selected":""),onClick:()=>{return e=c,void s({...t,avatar:e});var e}},c)}))})]}),Object(C.jsx)("button",{className:"task-topic",onClick:()=>e.updateUser(e.user.id,{avatar:t.avatar}),children:"Update"})]}),2===c&&Object(C.jsx)("div",{children:"Tasks content here..."}),3===c&&Object(C.jsx)("div",{children:"Drafts content here..."})]})}));var R=e=>{let{children:t}=e;const s=Object(o.useSelector)((e=>e));let a=Object(I.o)();return s.isLoggedIn?t:Object(C.jsx)(I.a,{to:"/login",state:{from:a},replace:!0})};s(304);var K=Object(o.connect)((e=>({tasks:e.tasks,user:e.userDetails,taskLoading:e.taskLoading,taskData:e.taskData})),(e=>({addTask:t=>e((e=>function(t){var s={url:"http://54.152.123.170:3000/v1/task",method:"POST",data:e,headers:{"content-type":"application/json"}};Object(w.a)(s).then((e=>{t({type:j,payload:e.data}),t({type:x,payload:"Task Added!!"}),window.location.href="/"})).catch((e=>{console.log(e),t({type:x,payload:e.response.data.message})}))})(t)),getTaskById:t=>e((e=>function(t){var s={url:`http://54.152.123.170:3000/v1/task/${e}`,method:"GET",headers:{"content-type":"application/json"}};Object(w.a)(s).then((e=>{})).catch((e=>{console.log(e)})),t({type:h,payload:e})})(t)),editTask:(t,s)=>e(E(t,s))})))((e=>{const{id:t}=Object(I.s)(),[s,c]=Object(a.useState)(!1),[n,i]=Object(a.useState)({}),o=e=>{i({...n,[e.target.name]:e.target.value})};Object(a.useEffect)((()=>(t?e.getTaskById(t):i({title:"",description:"",user_id:e.user.id,status:"To Do",dueDate:"",priority:"Medium"}),!e.taskLoading&&t&&i(e.taskData),()=>{i({})})),[e.taskLoading,t]);return Object(C.jsx)("div",{className:"add-task-container",children:Object(C.jsxs)("div",{className:"add-task-form",children:[Object(C.jsx)("h1",{children:"Add Task"}),Object(C.jsx)("input",{type:"text",name:"title",placeholder:"Task Title",value:n.title,onChange:o}),Object(C.jsx)("input",{type:"text",name:"description",placeholder:"Task Description",value:n.description,onChange:o}),Object(C.jsxs)("select",{name:"status",value:n.status,onChange:o,children:[Object(C.jsx)("option",{value:"To Do",children:"To Do"}),Object(C.jsx)("option",{value:"In Progress",children:"In Progress"}),Object(C.jsx)("option",{value:"Done",children:"Done"})]}),Object(C.jsx)("input",{type:"date",name:"dueDate",placeholder:"Due Date",value:n.dueDate,onChange:o}),Object(C.jsxs)("select",{name:"priority",value:n.priority,onChange:o,children:[Object(C.jsx)("option",{value:"Low",children:"Low"}),Object(C.jsx)("option",{value:"Medium",children:"Medium"}),Object(C.jsx)("option",{value:"High",children:"High"})]}),Object(C.jsx)("div",{className:"modal",style:{display:s?"block":"none"}}),t?Object(C.jsx)("div",{children:Object(C.jsx)("button",{className:"btn-primary",onClick:()=>(()=>{const s={title:n.title,description:n.description,status:n.status,dueDate:n.dueDate,priority:n.priority,id:n.id};e.editTask(t,s)})(),children:"Edit Task"})}):Object(C.jsx)("button",{className:"btn-primary",onClick:()=>(()=>{const t={title:n.title,description:n.description,status:n.status,dueDate:n.dueDate,priority:n.priority};e.addTask(t)})(),children:"Add Task"})]})})})),F=(s(305),s(318)),$=s(317);s(306);const{connect:H}=s(10);var Y=H((e=>({user:e.userDetails})),(e=>({deleteTask:t=>e((e=>function(t){var s={url:"http://54.152.123.170:3000/v1/task/"+e,method:"DELETE",headers:{"content-type":"application/json"}};Object(w.a)(s).then((s=>{t({type:b,payload:e})})).catch((e=>{console.log(e)}))})(t))})))((e=>{const[{isDragging:t},s]=Object($.a)((()=>({type:"TASK",item:{id:e.task.id},collect:e=>({isDragging:e.isDragging()})})));return Object(C.jsxs)("div",{ref:s,className:"task-card",style:{opacity:t?.5:1},children:[Object(C.jsx)("h3",{className:"task-card-title",children:e.task.title}),Object(C.jsx)("p",{className:"task-card-description",children:e.task.description}),Object(C.jsxs)("p",{className:"task-card-created",children:["Due Date: ",e.task.dueDate.split("T")[0]]}),Object(C.jsxs)("p",{className:"task-card-created",children:["Created At: ",e.task.createdAt]}),Object(C.jsxs)("div",{className:"task-card-actions",children:[Object(C.jsx)("button",{className:"task-card-btn",onClick:()=>{return t=e.task.id,void e.deleteTask(t);var t},children:"Delete"}),Object(C.jsxs)("button",{className:"task-card-btn",children:[" ",Object(C.jsx)(D.b,{to:"/edit-task/"+e.task.id,children:"Edit"})]})]})]})}));s(307);var q=e=>{let{status:t,tasks:s,moveTask:a}=e;const[{isOver:c},n]=Object(F.a)((()=>({accept:"TASK",drop:e=>a(e.id,t),collect:e=>({isOver:e.isOver()})})));return Object(C.jsxs)("div",{ref:n,className:"task-column "+(c?"is-over":""),children:[Object(C.jsx)("h2",{className:"task-column-title",children:t.toUpperCase()}),Object(C.jsx)("div",{className:"task-column-content",children:s.map((e=>Object(C.jsx)(Y,{task:e},e.id)))})]})},z=s(315),J=s(153);var W=Object(o.connect)((e=>({tasks:e.tasks})),(e=>({getTasks:()=>e((function(e){Object(w.a)({url:"http://54.152.123.170:3000/v1/task",method:"GET",headers:{"content-type":"application/json"}}).then((t=>{e({type:g,payload:t.data.results})})).catch((e=>{console.log(e)}))})),editTask:(t,s)=>e(E(t,s))})))((e=>{Object(a.useEffect)((()=>{e.getTasks()}),[]);const t=(t,s)=>{e.editTask(t,{status:s})};return Object(C.jsx)("div",{className:"task-board-container",children:Object(C.jsx)(z.a,{backend:J.a,children:Object(C.jsx)("div",{className:"task-board",children:["To Do","In Progress","Done"].map((s=>Object(C.jsx)(q,{status:s,tasks:e.tasks.filter((e=>e.status===s)),moveTask:t},s)))})})})})),Q=s(94);s(308);var V=Object(o.connect)((e=>({isLoggedIn:e.isLoggedIn,user:e.userDetails,popMessage:e.popMessage})),(e=>({getUserById:t=>e(L(t)),setPopMessage:t=>e((e=>function(t){t({type:x,payload:e})})(t))})))((function(e){Object(a.useEffect)((()=>{e.popMessage&&(Object(Q.b)(e.popMessage),e.setPopMessage(""))}),[e.popMessage]);const t=Object(I.q)();return Object(a.useEffect)((()=>{!function(){const t=localStorage.getItem("token");t&&(console.log(_.a.decode(t,"thisisasamplesecret")),e.getUserById(_.a.decode(t,"thisisasamplesecret").sub),N(t))}(),e.isLoggedIn?t("/"):t("/login")}),[e.isLoggedIn]),Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)(Q.a,{}),Object(C.jsx)(B,{}),Object(C.jsxs)(I.d,{children:[Object(C.jsx)(I.b,{path:"/signup",element:Object(C.jsx)(M,{})}),Object(C.jsx)(I.b,{path:"/login",element:Object(C.jsx)(A,{})}),Object(C.jsx)(I.b,{path:"/",element:Object(C.jsx)(R,{children:Object(C.jsx)(W,{})})}),Object(C.jsx)(I.b,{path:"/add-task",element:Object(C.jsx)(R,{children:Object(C.jsx)(K,{})})}),Object(C.jsx)(I.b,{path:"/edit-task/:id",element:Object(C.jsx)(R,{children:Object(C.jsx)(K,{})})}),Object(C.jsx)(I.b,{path:"/my-profile",element:Object(C.jsx)(R,{children:Object(C.jsx)(G,{})})})]})]})}));s(309);var X=function(){return Object(C.jsx)(o.Provider,{store:T,children:Object(C.jsx)(D.a,{children:Object(C.jsx)(U.b,{clientId:"<your_client_id>",children:Object(C.jsx)("div",{className:"App",children:Object(C.jsx)(V,{})})})})})};var Z=e=>{e&&e instanceof Function&&s.e(3).then(s.bind(null,319)).then((t=>{let{getCLS:s,getFID:a,getFCP:c,getLCP:n,getTTFB:i}=t;s(e),a(e),c(e),n(e),i(e)}))};i.a.createRoot(document.getElementById("root")).render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(X,{})})),Z()}},[[310,1,2]]]);
//# sourceMappingURL=main.2087a0ab.chunk.js.map