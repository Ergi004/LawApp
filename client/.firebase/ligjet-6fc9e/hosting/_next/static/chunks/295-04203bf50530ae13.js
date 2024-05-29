(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[295],{3459:function(t,e,a){"use strict";let r=a(2126).Z.create({baseURL:"http://localhost:3006"});e.Z=r},5855:function(t,e,a){"use strict";var r=a(3459);e.Z={createCategory:async t=>{try{return(await r.Z.post("/category/create",t)).data}catch(t){throw t}},getAllCategories:async t=>{try{return(await r.Z.get("/category/getAll",t)).data.data}catch(t){throw t}},getCategoryById:async t=>{try{return r.Z.get("/category/".concat(t))}catch(t){throw t}},getCategoryByPartId:async t=>{try{return await r.Z.get("/category/findBy/".concat(t))}catch(t){throw t}},updateCategory:async(t,e)=>{try{return r.Z.patch("/category/update/".concat(t),e)}catch(t){throw t}},deleteCategory:async t=>{try{return r.Z.delete("/category/delete/".concat(t))}catch(t){throw t}}}},6850:function(t,e,a){"use strict";var r=a(3459);e.Z={createLaw:async t=>{try{return(await r.Z.post("/laws/create",t)).data}catch(t){throw t}},getAllLaws:async t=>{try{return await r.Z.get("/laws/getAll",t)}catch(t){throw t}},getLawById:async t=>{try{return await r.Z.get("/laws/".concat(t))}catch(t){throw t}},getLawByCategoryId:async t=>{try{return(await r.Z.get("/laws/findBy/".concat(t))).data}catch(t){throw t}},updateLaw:async(t,e)=>{try{return await r.Z.patch("/laws/update/".concat(t),e)}catch(t){throw t}},deleteLaw:async t=>{try{return await r.Z.delete("/laws/delete/".concat(t))}catch(t){throw t}}}},1781:function(t,e,a){"use strict";var r=a(3459);e.Z={createPart:async t=>{try{return(await r.Z.post("/parts/create",t)).data}catch(t){throw t}},getAllParts:async t=>{try{return(await r.Z.get("/parts/getAll",t)).data.data}catch(t){throw t}},getPartBtId:async t=>{try{return await r.Z.get("/parts/".concat(t))}catch(t){throw t}},updatePart:async(t,e)=>{try{return await r.Z.patch("/parts/update/".concat(t),e)}catch(t){throw t}},deletePart:async t=>{try{return await r.Z.delete("/parts/delete/".concat(t))}catch(t){throw t}}}},4959:function(t,e,a){"use strict";a.d(e,{Z:function(){return E}});var r=a(7437),s=a(1733),n=a(639),i=a(9504),o=a(2265),c=a(8438),l=a(8379),d=a(8024),h=a(7999),u=a(9806),x=a(335),p=a(3719),g=a(2030),Z=a(2184),w=a(7300),y=a(3726),m=a(3597),j=a(4944),v=a(888),_=a(9216),f=a(6424),C=a(8125),b=a(3594),k=a(2193),I=a(6246),S=a(6463),L=a(4384),N=a.n(L),P=t=>{let{parts:e,handlePartClick:a,categories:s,getLawByCategoryId:n,getAllLaws:i}=t,[c,l]=(0,o.useState)({}),[d,u]=(0,o.useState)(!1),x=(0,S.useRouter)(),g=()=>{x.push("console")},L=()=>{x.push("account")},P=t=>{l([]),l(e=>({...e,[t]:!e[t]}))};return(0,r.jsxs)(h.Z,{children:[(0,r.jsxs)(w.Z,{onClick:()=>g(),children:[(0,r.jsx)(y.Z,{sx:{minWidth:"40px"},className:N().logosContainer,children:(0,r.jsx)(I.Z,{className:N().titleLogos})}),(0,r.jsx)(m.Z,{primary:(0,r.jsx)(p.Z,{className:N().titles,children:"Paneli Kryesore"})})]}),(0,r.jsxs)(w.Z,{onClick:()=>{i(),L()},children:[(0,r.jsx)(y.Z,{sx:{minWidth:"40px"},children:(0,r.jsx)(k.Z,{className:N().titleLogos})}),(0,r.jsx)(m.Z,{primary:(0,r.jsx)(p.Z,{className:N().titles,children:"Te Gjitha"})})]}),(0,r.jsxs)(w.Z,{onClick:()=>{u(!d)},children:[(0,r.jsx)(y.Z,{sx:{minWidth:"40px"},children:(0,r.jsx)(b.Z,{className:N().titleLogos})}),(0,r.jsx)(m.Z,{primary:(0,r.jsx)(p.Z,{className:N().titles,children:"Kushtetuta"})}),d?(0,r.jsx)(f.Z,{}):(0,r.jsx)(C.Z,{})]}),(0,r.jsx)(_.Z,{in:d,timeout:500,unmountOnExit:!0,children:e.map(t=>(0,r.jsxs)(h.Z,{children:[(0,r.jsxs)(w.Z,{onClick:()=>{a&&a(t),P(t.part_id)},children:[(0,r.jsx)(y.Z,{sx:{minWidth:"34px"},children:(0,r.jsx)(j.Z,{className:N().logos})}),(0,r.jsx)(v.Z,{title:t.part_title,arrow:!0,children:(0,r.jsx)(m.Z,{primary:(0,r.jsx)(p.Z,{className:N().listItemText,children:t.part_title})})}),c[t.part_id]?(0,r.jsx)(f.Z,{}):(0,r.jsx)(C.Z,{})]}),(0,r.jsx)(_.Z,{in:c[t.part_id],timeout:500,unmountOnExit:!0,children:null==s?void 0:s.map(t=>(0,r.jsx)(Z.Z,{onClick:()=>{n&&n(t)},component:"div",disablePadding:!0,children:(0,r.jsx)(w.Z,{sx:{pl:4},children:(0,r.jsx)(v.Z,{title:t.category_title,arrow:!0,children:(0,r.jsx)(m.Z,{primary:(0,r.jsx)(p.Z,{className:N().categories,children:t.category_title})})})})},t.category_id))})]},t.part_id))})]})},B=a(1781),A=a(5855);let z=(0,d.ZP)(c.ZP,{shouldForwardProp:t=>"open"!==t})(t=>{let{theme:e,open:a}=t;return{"& .MuiDrawer-paper":{position:"absolute",whiteSpace:"nowrap",width:220,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),[e.breakpoints.up("sm")]:{width:300},boxSizing:"border-box",...!a&&{overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(6.8),[e.breakpoints.up("sm")]:{width:e.spacing(7)}}}}}),W=(0,d.ZP)(s.Z,{shouldForwardProp:t=>"open"!==t})(t=>{let{theme:e,open:a}=t;return{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),...a&&{marginLeft:300,width:"calc(100% - ".concat(300,"px)"),[e.breakpoints.down("sm")]:{width:"calc(100% - ".concat(220,"px)")},transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})}}});var E=t=>{let{getLawByCategoryId:e,getAllLaws:a}=t,[s,c]=(0,o.useState)(!0),[d,w]=(0,o.useState)([]),[y,m]=(0,o.useState)(),[j,v]=(0,o.useState)([]),_=async()=>{w(await B.Z.getAllParts(d))},f=async t=>{v((await A.Z.getCategoryByPartId(t.part_id)).data.data)},C=()=>{c(!s)},b=()=>{m(JSON.parse(localStorage.getItem("user")))};return(0,o.useEffect)(()=>{b(),_()},[]),(0,r.jsxs)(h.Z,{children:[(0,r.jsx)(W,{position:"absolute",open:s,children:(0,r.jsxs)(u.Z,{sx:{pr:"24px"},children:[(0,r.jsx)(x.Z,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:C,sx:{marginRight:"36px",...s&&{display:"none"}},children:(0,r.jsx)(i.Z,{})}),(0,r.jsxs)(p.Z,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1},children:["Welcome ",null==y?void 0:y.user_name]}),(0,r.jsx)(n.Z,{})]})}),(0,r.jsxs)(z,{variant:"permanent",open:s,children:[(0,r.jsx)(u.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",px:[1]},children:(0,r.jsx)(x.Z,{onClick:C,children:(0,r.jsx)(l.Z,{})})}),(0,r.jsx)(g.Z,{}),(0,r.jsxs)(Z.Z,{component:"nav",children:[(0,r.jsx)(P,{parts:d,handlePartClick:f,categories:j,getLawByCategoryId:e,getAllLaws:a}),(0,r.jsx)(g.Z,{sx:{my:1}})]})]})]})}},639:function(t,e,a){"use strict";var r=a(7437),s=a(2265),n=a(7999),i=a(6548),o=a(3719),c=a(2118),l=a(6463),d=a(3023),h=a(7358),u=a.n(h);let x={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:450,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};e.Z=()=>{let[t,e]=(0,s.useState)(!1),a=(0,l.useRouter)(),h=()=>e(!1),p=()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),a.push("/")};return(0,r.jsxs)(n.Z,{children:[(0,r.jsx)(i.Z,{color:"error",variant:"contained",onClick:()=>e(!0),className:u().logoutBtn,sx:{width:"20px"},children:(0,r.jsx)(d.Z,{className:u().logoutImg})}),(0,r.jsx)(c.Z,{open:t,onClose:h,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,r.jsxs)(n.Z,{sx:x,children:[(0,r.jsx)(o.Z,{variant:"h6",sx:{margin:"20px auto",maxWidth:"320px",fontWeight:"bold"},children:"Are you sure you want to logout"}),(0,r.jsxs)(n.Z,{sx:{textAlign:"center"},children:[(0,r.jsx)(i.Z,{variant:"contained",color:"error",sx:{margin:"10px 45px"},onClick:()=>p(),children:"Yes"}),(0,r.jsx)(i.Z,{variant:"outlined",color:"error",sx:{margin:"10px 45px"},onClick:()=>h(),children:"No"})]})]})})]})}},2193:function(t,e,a){"use strict";var r=a(3963);e.Z=void 0;var s=r(a(9118)),n=a(7437);e.Z=(0,s.default)((0,n.jsx)("path",{d:"M4 10h3v7H4zm6.5 0h3v7h-3zM2 19h20v3H2zm15-9h3v7h-3zm-5-9L2 6v2h20V6z"}),"AccountBalance")},6246:function(t,e,a){"use strict";var r=a(3963);e.Z=void 0;var s=r(a(9118)),n=a(7437);e.Z=(0,s.default)((0,n.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home")},4384:function(t){t.exports={listItemText:"listitems_listItemText__8KOSB",titles:"listitems_titles__7kCFC",categories:"listitems_categories__600zi",logos:"listitems_logos__xUQ4v",titleLogos:"listitems_titleLogos__xUAwk"}},7358:function(t){t.exports={logoutBtn:"logoutmodal_logoutBtn__DtMNe",logoutImg:"logoutmodal_logoutImg__vl_TK"}}}]);