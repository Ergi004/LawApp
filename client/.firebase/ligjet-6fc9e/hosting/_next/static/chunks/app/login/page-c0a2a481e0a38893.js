(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{3677:function(e,t,a){Promise.resolve().then(a.bind(a,5207))},9951:function(e,t,a){"use strict";var r=a(3459);t.Z={register:async e=>{try{return(await r.Z.post("/users/register",e)).data}catch(e){throw e}},login:async e=>{try{let t=await r.Z.post("/users/login",e);return console.log(t.data),t.data}catch(e){throw e}},updateUser:async(e,t)=>{try{return(await r.Z.patch("/lawApp/users/update/".concat(t),{updateUser:e})).data}catch(e){throw e}},deleteUser:async e=>{try{return(await r.Z.delete("/users/delete/".concat(e))).data}catch(e){throw e}},getAllUsers:async e=>{try{return(await r.Z.get("/users/getAll",e)).data}catch(e){throw e}},getUserById:async e=>{try{return(await r.Z.get("/users/".concat(e))).data}catch(e){throw e}}}},3459:function(e,t,a){"use strict";let r=a(2126).Z.create({baseURL:"http://localhost:3006"});t.Z=r},5207:function(e,t,a){"use strict";a.r(t);var r=a(7437),s=a(2265),n=a(9875),o=a(6548),i=a(124),l=a(3251),c=a(4908),d=a(5786),u=a(1665),h=a(8433),m=a(7999),p=a(9618),x=a(511),Z=a(2197),w=a(4050),g=a(5865),f=a(9951),y=a(6463),j=a(2126);t.default=()=>{let e=(0,y.useRouter)(),[t,a]=(0,s.useState)({email:"",password:""}),b=async a=>{a.preventDefault();try{let a=await f.Z.login(t),r=a.token,s=JSON.stringify(a.user);window.localStorage.setItem("user",s),window.localStorage.setItem("token",r),j.Z.defaults.headers.common.Authorization="Bearer ".concat(r);let n=a.user.role;return"Admin"===n?e.push("/adminAccount"):e.push("/account"),a}catch(e){console.error("login failed:")}},v=(0,w.Z)();return(0,r.jsx)(g.Z,{theme:v,children:(0,r.jsxs)(Z.Z,{component:"main",maxWidth:"sm",children:[(0,r.jsx)(i.ZP,{}),(0,r.jsxs)(m.Z,{sx:{marginTop:"200px",display:"flex",flexDirection:"column",alignItems:"center",boxShadow:6,padding:"50px"},children:[(0,r.jsx)(n.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,r.jsx)(p.Z,{})}),(0,r.jsx)(x.Z,{component:"h1",variant:"h5",children:"Login"}),(0,r.jsxs)(m.Z,{component:"form",noValidate:!0,onSubmit:b,sx:{mt:3},children:[(0,r.jsxs)(h.ZP,{container:!0,spacing:2,children:[(0,r.jsx)(h.ZP,{item:!0,xs:12,children:(0,r.jsx)(l.Z,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:t.email,onChange:e=>a(t=>({...t,email:e.target.value}))})}),(0,r.jsx)(h.ZP,{item:!0,xs:12,children:(0,r.jsx)(l.Z,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password",value:t.password,onChange:e=>a(t=>({...t,password:e.target.value}))})}),(0,r.jsx)(h.ZP,{item:!0,xs:12,children:(0,r.jsx)(c.Z,{control:(0,r.jsx)(d.Z,{value:"allowExtraEmails",color:"primary"}),label:"Remember me"})})]}),(0,r.jsx)(o.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Login"}),(0,r.jsx)(h.ZP,{container:!0,justifyContent:"flex-end",children:(0,r.jsx)(h.ZP,{item:!0,children:(0,r.jsx)(u.Z,{href:"/signup",children:"Don't have an account? Sign up"})})})]})]})]})})}}},function(e){e.O(0,[333,107,674,251,214,971,23,744],function(){return e(e.s=3677)}),_N_E=e.O()}]);