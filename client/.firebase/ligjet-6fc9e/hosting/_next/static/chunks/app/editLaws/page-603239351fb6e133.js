(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[730],{7947:function(t,a,e){Promise.resolve().then(e.bind(e,190))},3459:function(t,a,e){"use strict";let r=e(2126).Z.create({baseURL:"http://localhost:3006"});a.Z=r},5855:function(t,a,e){"use strict";var r=e(3459);a.Z={createCategory:async t=>{try{return(await r.Z.post("/category/create",t)).data}catch(t){throw t}},getAllCategories:async t=>{try{return(await r.Z.get("/category/getAll",t)).data.data}catch(t){throw t}},getCategoryById:async t=>{try{return r.Z.get("/category/".concat(t))}catch(t){throw t}},getCategoryByPartId:async t=>{try{return await r.Z.get("/category/findBy/".concat(t))}catch(t){throw t}},updateCategory:async(t,a)=>{try{return r.Z.patch("/category/update/".concat(t),a)}catch(t){throw t}},deleteCategory:async t=>{try{return r.Z.delete("/category/delete/".concat(t))}catch(t){throw t}}}},6850:function(t,a,e){"use strict";var r=e(3459);a.Z={createLaw:async t=>{try{return(await r.Z.post("/laws/create",t)).data}catch(t){throw t}},getAllLaws:async t=>{try{return await r.Z.get("/laws/getAll",t)}catch(t){throw t}},getLawById:async t=>{try{return await r.Z.get("/laws/".concat(t))}catch(t){throw t}},getLawByCategoryId:async t=>{try{return(await r.Z.get("/laws/findBy/".concat(t))).data}catch(t){throw t}},updateLaw:async(t,a)=>{try{return await r.Z.patch("/laws/update/".concat(t),a)}catch(t){throw t}},deleteLaw:async t=>{try{return await r.Z.delete("/laws/delete/".concat(t))}catch(t){throw t}}}},1781:function(t,a,e){"use strict";var r=e(3459);a.Z={createPart:async t=>{try{return(await r.Z.post("/parts/create",t)).data}catch(t){throw t}},getAllParts:async t=>{try{return(await r.Z.get("/parts/getAll",t)).data.data}catch(t){throw t}},getPartBtId:async t=>{try{return await r.Z.get("/parts/".concat(t))}catch(t){throw t}},updatePart:async(t,a)=>{try{return await r.Z.patch("/parts/update/".concat(t),a)}catch(t){throw t}},deletePart:async t=>{try{return await r.Z.delete("/parts/delete/".concat(t))}catch(t){throw t}}}},8778:function(t,a,e){"use strict";e.d(a,{Z:function(){return B}});var r=e(7437),n=e(1733),i=e(639),s=e(9504),o=e(2265),l=e(8438),c=e(8379),d=e(8024),x=e(7999),u=e(9806),h=e(335),p=e(3719),g=e(2030),Z=e(2184),m=e(7300),w=e(3726),y=e(3597),j=e(4944),v=e(888),f=e(9216),b=e(6424),C=e(8125),_=e(5481),P=e(6463),S=e(9292),k=e(3594),L=t=>{let{parts:a,handlePartClick:e,categories:n,getLawByCategoryId:i}=t,[s,l]=(0,o.useState)({}),[c,d]=(0,o.useState)(),[u,h]=(0,o.useState)(!0),p=(0,P.useRouter)(),g=t=>{l({}),l(a=>({...a,[t]:!a[t]}))},L=()=>{p.push("/adminAccount")},W=()=>{p.push("/editLaws")},A=()=>{p.push("/adminMenu")};return(0,r.jsxs)(x.Z,{children:[(0,r.jsxs)(m.Z,{onClick:()=>{L()},children:[(0,r.jsx)(w.Z,{children:(0,r.jsx)(j.Z,{})}),(0,r.jsx)(y.Z,{primary:"Dashboard"})]}),(0,r.jsxs)(m.Z,{onClick:()=>A(),children:[(0,r.jsx)(w.Z,{children:(0,r.jsx)(_.Z,{})}),(0,r.jsx)(y.Z,{primary:"Users"})]}),(0,r.jsxs)(m.Z,{onClick:()=>W(),children:[(0,r.jsx)(w.Z,{children:(0,r.jsx)(S.Z,{})}),(0,r.jsx)(y.Z,{primary:"Edit Laws"})]}),(0,r.jsxs)(m.Z,{onClick:()=>{h(!u)},children:[(0,r.jsx)(w.Z,{children:(0,r.jsx)(k.Z,{})}),(0,r.jsx)(y.Z,{primary:"Kushtetuta"}),u?(0,r.jsx)(b.Z,{}):(0,r.jsx)(C.Z,{})]}),(0,r.jsx)(f.Z,{in:u,timeout:500,unmountOnExit:!0,children:a.map(t=>(0,r.jsxs)(x.Z,{children:[(0,r.jsxs)(m.Z,{onClick:()=>{e&&e(t),g(t.part_id)},children:[(0,r.jsx)(w.Z,{children:(0,r.jsx)(j.Z,{})}),(0,r.jsx)(v.Z,{title:t.part_title,arrow:!0,children:(0,r.jsx)(y.Z,{primary:t.part_title,sx:{overflow:"hidden",textOverflow:"ellipsis",maxWidth:"200px"}})}),s[t.part_id]?(0,r.jsx)(b.Z,{}):(0,r.jsx)(C.Z,{})]},t.part_id),(0,r.jsx)(f.Z,{in:s[t.part_id],timeout:500,unmountOnExit:!0,children:null==n?void 0:n.map(t=>(0,r.jsx)(Z.Z,{onClick:()=>{i&&i(t)},component:"div",sx:{pl:4},disablePadding:!0,children:(0,r.jsx)(m.Z,{children:(0,r.jsx)(v.Z,{title:t.category_title,arrow:!0,children:(0,r.jsx)(y.Z,{primary:t.category_title,sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"wrap",maxWidth:"300px"}})})})},t.category_id))})]}))})]})},W=e(1781);let A=(0,d.ZP)(l.ZP,{shouldForwardProp:t=>"open"!==t})(t=>{let{theme:a,open:e}=t;return{"& .MuiDrawer-paper":{position:"absolute",whiteSpace:"nowrap",width:250,transition:a.transitions.create("width",{easing:a.transitions.easing.sharp,duration:a.transitions.duration.enteringScreen}),boxSizing:"border-box",...!e&&{overflowX:"hidden",transition:a.transitions.create("width",{easing:a.transitions.easing.sharp,duration:a.transitions.duration.leavingScreen}),width:a.spacing(7),[a.breakpoints.up("sm")]:{width:a.spacing(9)}}}}}),I=(0,d.ZP)(n.Z,{shouldForwardProp:t=>"open"!==t})(t=>{let{theme:a,open:e}=t;return{zIndex:a.zIndex.drawer+1,transition:a.transitions.create(["width","margin"],{easing:a.transitions.easing.sharp,duration:a.transitions.duration.leavingScreen}),...e&&{marginLeft:250,width:"calc(100% - ".concat(250,"px)"),transition:a.transitions.create(["width","margin"],{easing:a.transitions.easing.sharp,duration:a.transitions.duration.enteringScreen})}}});var B=t=>{let{getLawByCategoryId:a,getAllLaws:e,categories:n,handlePartClick:l}=t,[d,m]=(0,o.useState)(!1),[w,y]=(0,o.useState)(),[j,v]=(0,o.useState)([]),f=async()=>{v(await W.Z.getAllParts(j))},b=()=>{m(!d)},C=()=>{y(JSON.parse(localStorage.getItem("user")))};return(0,o.useEffect)(()=>{C(),f()},[]),(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(I,{position:"absolute",open:d,children:(0,r.jsxs)(u.Z,{sx:{pr:"24px"},children:[(0,r.jsx)(h.Z,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:b,sx:{marginRight:"36px",...d&&{display:"none"}},children:(0,r.jsx)(s.Z,{})}),(0,r.jsxs)(p.Z,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1},children:["Welcome ",null==w?void 0:w.user_name]}),(0,r.jsx)(i.Z,{})]})}),(0,r.jsxs)(A,{variant:"permanent",open:d,children:[(0,r.jsx)(u.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",px:[1]},children:(0,r.jsx)(h.Z,{onClick:b,children:(0,r.jsx)(c.Z,{})})}),(0,r.jsx)(g.Z,{}),(0,r.jsxs)(Z.Z,{component:"nav",children:[(0,r.jsx)(L,{handlePartClick:l,categories:n,getLawByCategoryId:a,getAllLaws:e,parts:j}),(0,r.jsx)(g.Z,{sx:{my:1}})]})]})]})}},1862:function(t,a,e){"use strict";var r=e(7437),n=e(6463);a.default=t=>{let{children:a}=t;return(0,n.useRouter)(),(0,r.jsx)(r.Fragment,{children:a})}},639:function(t,a,e){"use strict";var r=e(7437),n=e(2265),i=e(7999),s=e(6548),o=e(3719),l=e(2118),c=e(6463);let d={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:450,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};a.Z=()=>{let[t,a]=(0,n.useState)(!1),e=(0,c.useRouter)(),x=()=>a(!1),u=()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),e.push("/")};return(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(s.Z,{color:"error",variant:"contained",onClick:()=>a(!0),children:"Logout"}),(0,r.jsx)(l.Z,{open:t,onClose:x,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,r.jsxs)(i.Z,{sx:d,children:[(0,r.jsx)(o.Z,{variant:"h6",sx:{margin:"20px auto",maxWidth:"320px",fontWeight:"bold"},children:"Are you sure you want to logout"}),(0,r.jsxs)(i.Z,{sx:{textAlign:"center"},children:[(0,r.jsx)(s.Z,{variant:"contained",color:"error",sx:{margin:"10px 45px"},onClick:()=>u(),children:"Yes"}),(0,r.jsx)(s.Z,{variant:"outlined",color:"error",sx:{margin:"10px 45px"},onClick:()=>x(),children:"No"})]})]})})]})}},190:function(t,a,e){"use strict";e.r(a),e.d(a,{default:function(){return B}});var r=e(7437),n=e(2265),i=e(124),s=e(7999),o=e(9806),l=e(2197),c=e(5855),d=e(6850),x=e(1781),u=e(1862),h=e(8433),p=e(2988),g=e(3950),Z=e(4839),m=e(6259),w=e(8024),y=e(9281),j=e(4990),v=e(4535),f=e(7542);function b(t){return(0,f.ZP)("MuiCard",t)}(0,v.Z)("MuiCard",["root"]);let C=["className","raised"],_=t=>{let{classes:a}=t;return(0,m.Z)({root:["root"]},b,a)},P=(0,w.ZP)(j.Z,{name:"MuiCard",slot:"Root",overridesResolver:(t,a)=>a.root})(()=>({overflow:"hidden"})),S=n.forwardRef(function(t,a){let e=(0,y.Z)({props:t,name:"MuiCard"}),{className:n,raised:i=!1}=e,s=(0,g.Z)(e,C),o=(0,p.Z)({},e,{raised:i}),l=_(o);return(0,r.jsx)(P,(0,p.Z)({className:(0,Z.Z)(l.root,n),elevation:i?8:void 0,ref:a,ownerState:o},s))});var k=e(3719),L=e(3251),W=e(6548),A=()=>{let[t,a]=(0,n.useState)([]),[e,i]=(0,n.useState)([]),[o,l]=(0,n.useState)([]),[u,p]=(0,n.useState)(),[g,Z]=(0,n.useState)(),[m,w]=(0,n.useState)(),y=async()=>{l((await d.Z.getAllLaws(o)).data)},j=async t=>{i((await c.Z.getCategoryByPartId(t.part_id)).data.data)},v=async()=>{a(await x.Z.getAllParts(t))},f=async()=>{p((await x.Z.createPart(u)).data),v(),console.log("Part Succesfully Added",u)},b=async()=>{let t=await c.Z.createCategory(g);Z(t.data),j(t.data),console.log("Category Succesfully Added",g)},C=async()=>{w((await d.Z.createLaw(m)).data),console.log("Law Succesfully Added",m)};return(0,n.useEffect)(()=>{v(),y()},[]),(0,r.jsx)(h.ZP,{container:!0,spacing:1,children:(0,r.jsx)(h.ZP,{item:!0,xs:12,md:12,lg:13,xl:12,children:(0,r.jsxs)(s.Z,{sx:{p:2,display:"flex",flexDirection:"column",minHeight:240,boxShadow:10,backgroundColor:"white"},children:[(0,r.jsxs)(S,{sx:{margin:"20px"},children:[(0,r.jsx)(s.Z,{sx:{borderBottom:"0.5px #222222 solid",margin:"10px"},children:(0,r.jsx)(k.Z,{sx:{margin:"10px 40px",fontWeight:"bold"},variant:"h5",children:"Fill the forms to add Parts"})}),(0,r.jsxs)(s.Z,{sx:{margin:"20px",display:"flex",alignItems:"center"},children:[(0,r.jsx)(L.Z,{id:"outlined-basic",label:"Part Number",variant:"outlined",value:null==u?void 0:u.part_number,onChange:t=>p(a=>({...a,part_number:t.target.value})),sx:{margin:"0 30px",maxWidth:"400px"}}),(0,r.jsx)(L.Z,{id:"outlined-basic",label:"Part Title",value:null==u?void 0:u.part_title,onChange:t=>p(a=>({...a,part_title:t.target.value})),variant:"outlined",sx:{margin:"0 30px",maxWidth:"400px"}}),(0,r.jsx)(W.Z,{onClick:()=>f(),variant:"contained",sx:{maxWidth:"130px",height:"35px"},children:"Add Part"})]})]}),(0,r.jsxs)(S,{sx:{margin:"20px"},children:[(0,r.jsx)(s.Z,{sx:{borderBottom:"0.5px black solid",margin:"10px"},children:(0,r.jsx)(k.Z,{sx:{margin:"10px 40px",fontWeight:"bold"},variant:"h5",children:"Fill the forms to add Categories"})}),(0,r.jsxs)(s.Z,{sx:{margin:"20px",display:"flex",alignItems:"center"},children:[(0,r.jsx)(L.Z,{id:"outlined-basic",label:"Category Number",variant:"outlined",sx:{margin:"0 30px",maxWidth:"400px"},value:null==g?void 0:g.category_number,onChange:t=>Z(a=>({...a,category_number:t.target.value}))}),(0,r.jsx)(L.Z,{id:"outlined-basic",label:"Category Title",variant:"outlined",sx:{margin:"0 30px",maxWidth:"400px"},value:null==g?void 0:g.category_title,onChange:t=>Z(a=>({...a,category_title:t.target.value}))}),(0,r.jsx)(L.Z,{id:"outlined-basic",label:"Part ID",variant:"outlined",sx:{margin:"0 30px",maxWidth:"400px"},value:null==g?void 0:g.part_id,onChange:t=>Z(a=>({...a,part_id:t.target.value}))}),(0,r.jsx)(W.Z,{variant:"contained",sx:{maxWidth:"130px",height:"35px"},onClick:()=>b(),children:"Add Part"})]})]}),(0,r.jsxs)(S,{sx:{margin:"20px"},children:[(0,r.jsx)(s.Z,{sx:{borderBottom:"0.5px  black solid",margin:"10px",alignItems:"center"},children:(0,r.jsx)(k.Z,{sx:{margin:"10px 40px",fontWeight:"bold"},variant:"h5",children:"Fill the forms to add Laws"})}),(0,r.jsxs)(s.Z,{sx:{margin:"20px",display:"flex",flexWrap:"wrap"},children:[(0,r.jsx)(L.Z,{id:"outlined-basic",label:"Law Name",variant:"outlined",sx:{margin:"0 20px",maxWidth:"400px"},value:null==m?void 0:m.law_name,onChange:t=>w(a=>({...a,law_name:t.target.value}))}),(0,r.jsx)(L.Z,{id:"outlined-basic",label:"Law Description",multiline:!0,maxRows:50,sx:{margin:"0 20px",width:"500px"},value:null==m?void 0:m.law_description,onChange:t=>w(a=>({...a,law_description:t.target.value}))}),(0,r.jsx)(L.Z,{id:"outlined-basic",label:"Category ID",variant:"outlined",sx:{margin:"0 20px",maxWidth:"400px"},value:null==m?void 0:m.category_id,onChange:t=>w(a=>({...a,category_id:t.target.value}))}),(0,r.jsx)(L.Z,{id:"outlined-basic",label:"Written Date",variant:"outlined",sx:{margin:"0 20px",maxWidth:"400px"},value:null==m?void 0:m.written_date,onChange:t=>w(a=>({...a,written_date:t.target.value}))}),(0,r.jsx)(W.Z,{variant:"contained",sx:{maxWidth:"130px",height:"35px"},onClick:()=>C(),children:"Add Part"})]})]})]})})})},I=e(8778),B=()=>{let[t,a]=(0,n.useState)([]),[e,h]=(0,n.useState)([]),[p,g]=(0,n.useState)([]),Z=async()=>{g((await d.Z.getAllLaws(p)).data)},m=async t=>{g((await d.Z.getLawByCategoryId(t.category_id)).data)},w=async t=>{h((await c.Z.getCategoryByPartId(t.part_id)).data.data)},y=async()=>{a(await x.Z.getAllParts(t))};return(0,n.useEffect)(()=>{y(),Z()},[]),(0,r.jsx)(u.default,{children:(0,r.jsxs)(s.Z,{sx:{display:"flex"},children:[(0,r.jsx)(i.ZP,{}),(0,r.jsx)(I.Z,{handlePartClick:w,categories:e,getLawByCategoryId:m,getAllLaws:Z}),(0,r.jsxs)(s.Z,{component:"main",sx:{backgroundColor:t=>"light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[900],flexGrow:1,height:"100vh",overflow:"auto"},children:[(0,r.jsx)(o.Z,{}),(0,r.jsx)(l.Z,{maxWidth:"xl",sx:{mt:5,mb:5},children:(0,r.jsx)(A,{})})]})]})})}},9292:function(t,a,e){"use strict";var r=e(3963);a.Z=void 0;var n=r(e(9118)),i=e(7437);a.Z=(0,n.default)((0,i.jsx)("path",{d:"M22 24H2v-4h20zM13.06 5.19l3.75 3.75L7.75 18H4v-3.75zm4.82 2.68-3.75-3.75 1.83-1.83c.39-.39 1.02-.39 1.41 0l2.34 2.34c.39.39.39 1.02 0 1.41z"}),"BorderColor")},5481:function(t,a,e){"use strict";var r=e(3963);a.Z=void 0;var n=r(e(9118)),i=e(7437);a.Z=(0,n.default)((0,i.jsx)("path",{d:"M11.99 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10m3.61 6.34c1.07 0 1.93.86 1.93 1.93 0 1.07-.86 1.93-1.93 1.93-1.07 0-1.93-.86-1.93-1.93-.01-1.07.86-1.93 1.93-1.93m-6-1.58c1.3 0 2.36 1.06 2.36 2.36 0 1.3-1.06 2.36-2.36 2.36s-2.36-1.06-2.36-2.36c0-1.31 1.05-2.36 2.36-2.36m0 9.13v3.75c-2.4-.75-4.3-2.6-5.14-4.96 1.05-1.12 3.67-1.69 5.14-1.69.53 0 1.2.08 1.9.22-1.64.87-1.9 2.02-1.9 2.68M11.99 20c-.27 0-.53-.01-.79-.04v-4.07c0-1.42 2.94-2.13 4.4-2.13 1.07 0 2.92.39 3.84 1.15-1.17 2.97-4.06 5.09-7.45 5.09"}),"SupervisedUserCircle")}},function(t){t.O(0,[417,666,454,304,123,411,251,971,23,744],function(){return t(t.s=7947)}),_N_E=t.O()}]);