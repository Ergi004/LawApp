(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[952],{4943:function(e,t,s){Promise.resolve().then(s.bind(s,195)),Promise.resolve().then(s.bind(s,1862)),Promise.resolve().then(s.bind(s,5218))},9951:function(e,t,s){"use strict";var r=s(3459);t.Z={register:async e=>{try{return(await r.Z.post("/users/register",e)).data}catch(e){throw e}},login:async e=>{try{console.log(e);let t=await r.Z.post("/users/login",e);return console.log(t.data),t.data}catch(e){throw e}},updateUser:async(e,t)=>{try{return(await r.Z.patch("/lawApp/users/update/".concat(t),{updateUser:e})).data}catch(e){throw e}},deleteUser:async e=>{try{return(await r.Z.delete("/users/delete/".concat(e))).data}catch(e){throw e}},getAllUsers:async e=>{try{return(await r.Z.get("/users/getAll",e)).data}catch(e){throw e}},getUserById:async e=>{try{return(await r.Z.get("/users/".concat(e))).data}catch(e){throw e}}}},195:function(e,t,s){"use strict";s.d(t,{default:function(){return b}});var r=s(7437),n=s(2265),i=s(124),a=s(7999),l=s(9806),c=s(3719),d=s(2197),o=s(8433),x=s(8778),h=s(9951),Z=s(2674),u=s(6645),j=s(4691),g=s(7116),p=s(6351),w=s(8884),f=s(7300),m=s(7622),y=()=>{let[e,t]=(0,n.useState)([]),s=async()=>{t(await h.Z.getAllUsers(e))},i=async s=>{await h.Z.deleteUser(s),t(e.filter(e=>e.id!==s))};return(0,n.useEffect)(()=>{s()},[]),(0,r.jsx)(Z.Z,{sx:{minHeight:440},children:(0,r.jsxs)(u.Z,{sx:{width:"100%"},children:[(0,r.jsx)(j.Z,{children:(0,r.jsxs)(g.Z,{children:[(0,r.jsx)(p.Z,{sx:{fontSize:"20px"},align:"center",children:"ID"}),(0,r.jsx)(p.Z,{sx:{fontSize:"20px"},align:"center",children:"First Name"}),(0,r.jsx)(p.Z,{sx:{fontSize:"20px"},align:"center",children:"Last Name"}),(0,r.jsx)(p.Z,{sx:{fontSize:"20px"},align:"center",children:"Email"}),(0,r.jsx)(p.Z,{sx:{fontSize:"20px"},align:"center",children:"Password"})]})}),(0,r.jsx)(w.Z,{children:e.map(e=>(0,r.jsxs)(g.Z,{children:[(0,r.jsx)(p.Z,{sx:{fontSize:"20px"},children:(0,r.jsx)(c.Z,{children:e.id})}),(0,r.jsx)(p.Z,{children:(0,r.jsx)(c.Z,{children:e.user_name})}),(0,r.jsx)(p.Z,{children:(0,r.jsx)(c.Z,{children:e.last_name})}),(0,r.jsx)(p.Z,{children:(0,r.jsx)(c.Z,{children:e.email})}),(0,r.jsx)(p.Z,{children:(0,r.jsx)(c.Z,{children:e.password})}),(0,r.jsx)(p.Z,{children:(0,r.jsx)(f.Z,{onClick:()=>i(e.id),children:(0,r.jsx)(m.Z,{color:"error"})})})]},e.id))})]})})},b=()=>(0,r.jsxs)(a.Z,{sx:{display:"flex",width:"100%"},children:[(0,r.jsx)(i.ZP,{}),(0,r.jsx)(x.Z,{getAllLaws:void 0}),(0,r.jsxs)(a.Z,{component:"main",sx:{backgroundColor:e=>"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900],flexGrow:1,height:"100vh",overflow:"auto"},children:[(0,r.jsx)(l.Z,{}),(0,r.jsx)(d.Z,{maxWidth:"xl",sx:{mt:5,mb:5},children:(0,r.jsx)(o.ZP,{container:!0,spacing:1,children:(0,r.jsx)(o.ZP,{item:!0,xs:12,md:12,lg:12,xl:12,children:(0,r.jsxs)(a.Z,{sx:{p:2,display:"flex",flexDirection:"column",minHeight:240,boxShadow:10,backgroundColor:"white"},children:[(0,r.jsx)(c.Z,{variant:"h4",sx:{fontWeight:"bold",margin:"10px 30px",borderBottom:"1px black solid",paddingLeft:"15px"},children:"All Users"}),(0,r.jsx)(y,{})]})})})})]})]})}},function(e){e.O(0,[133,417,666,454,304,29,951,403,971,23,744],function(){return e(e.s=4943)}),_N_E=e.O()}]);