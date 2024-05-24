(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[739],{5064:function(t,e,a){Promise.resolve().then(a.bind(a,3215)),Promise.resolve().then(a.bind(a,1862)),Promise.resolve().then(a.bind(a,5218))},3459:function(t,e,a){"use strict";let r=a(2126).Z.create({baseURL:"http://localhost:3006"});e.Z=r},5855:function(t,e,a){"use strict";var r=a(3459);e.Z={createCategory:async t=>{try{return(await r.Z.post("/category/create",t)).data}catch(t){throw t}},getAllCategories:async t=>{try{return(await r.Z.get("/category/getAll",t)).data.data}catch(t){throw t}},getCategoryById:async t=>{try{return r.Z.get("/category/".concat(t))}catch(t){throw t}},getCategoryByPartId:async t=>{try{return await r.Z.get("/category/findBy/".concat(t))}catch(t){throw t}},updateCategory:async(t,e)=>{try{return r.Z.patch("/category/update/".concat(t),e)}catch(t){throw t}},deleteCategory:async t=>{try{return r.Z.delete("/category/delete/".concat(t))}catch(t){throw t}}}},6850:function(t,e,a){"use strict";var r=a(3459);e.Z={createLaw:async t=>{try{return(await r.Z.post("/laws/create",t)).data}catch(t){throw t}},getAllLaws:async t=>{try{return await r.Z.get("/laws/getAll",t)}catch(t){throw t}},getLawById:async t=>{try{return await r.Z.get("/laws/".concat(t))}catch(t){throw t}},getLawByCategoryId:async t=>{try{return(await r.Z.get("/laws/findBy/".concat(t))).data}catch(t){throw t}},updateLaw:async(t,e)=>{try{return await r.Z.patch("/laws/update/".concat(t),e)}catch(t){throw t}},deleteLaw:async t=>{try{return await r.Z.delete("/laws/delete/".concat(t))}catch(t){throw t}}}},1781:function(t,e,a){"use strict";var r=a(3459);e.Z={createPart:async t=>{try{return(await r.Z.post("/parts/create",t)).data}catch(t){throw t}},getAllParts:async t=>{try{return(await r.Z.get("/parts/getAll",t)).data.data}catch(t){throw t}},getPartBtId:async t=>{try{return await r.Z.get("/parts/".concat(t))}catch(t){throw t}},updatePart:async(t,e)=>{try{return await r.Z.patch("/parts/update/".concat(t),e)}catch(t){throw t}},deletePart:async t=>{try{return await r.Z.delete("/parts/delete/".concat(t))}catch(t){throw t}}}},3215:function(t,e,a){"use strict";var r=a(7437),n=a(2265),s=a(124),i=a(7999),o=a(9806),l=a(2197),c=a(6850),d=a(5855),h=a(1781),u=a(4849),p=a(8778);e.default=()=>{let[t,e]=(0,n.useState)([]),[a,x]=(0,n.useState)([]),[w,g]=(0,n.useState)([]),[m,Z]=(0,n.useState)([]),[j,y]=(0,n.useState)([]),v=async t=>{Z((await d.Z.getCategoryByPartId(t.part_id)).data.data)},b=async()=>{g(await h.Z.getAllParts(w))},_=async()=>{Z(await d.Z.getAllCategories(j))},f=async()=>{let a=await c.Z.getAllLaws(t);e(a.data),x(a.data)},L=async t=>{e((await c.Z.getLawByCategoryId(t.category_id)).data)};return(0,n.useEffect)(()=>{f(),_(),b()},[]),(0,r.jsxs)(i.Z,{sx:{display:"flex",width:"100%"},children:[(0,r.jsx)(s.ZP,{}),(0,r.jsx)(p.Z,{getLawByCategoryId:L,getAllLaws:f,handlePartClick:v,categories:m}),(0,r.jsxs)(i.Z,{component:"main",sx:{backgroundColor:t=>"light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[900],flexGrow:1,height:"100vh",overflow:"auto"},children:[(0,r.jsx)(o.Z,{}),(0,r.jsx)(l.Z,{maxWidth:"lg",sx:{mt:4,mb:4},children:(0,r.jsx)(u.Z,{laws:t,parts:w,allCategories:j,myLaws:a,setLaws:e})})]})]})}},8778:function(t,e,a){"use strict";a.d(e,{Z:function(){return B}});var r=a(7437),n=a(1733),s=a(639),i=a(9504),o=a(2265),l=a(8438),c=a(8379),d=a(8024),h=a(7999),u=a(9806),p=a(335),x=a(3719),w=a(2030),g=a(2184),m=a(7300),Z=a(3726),j=a(3597),y=a(4944),v=a(888),b=a(9216),_=a(6424),f=a(8125),L=a(5481),C=a(6463),k=a(9292),S=a(3594),P=t=>{let{parts:e,handlePartClick:a,categories:n,getLawByCategoryId:s}=t,[i,l]=(0,o.useState)({}),[c,d]=(0,o.useState)(),[u,p]=(0,o.useState)(!0),x=(0,C.useRouter)(),w=t=>{l({}),l(e=>({...e,[t]:!e[t]}))},P=()=>{x.push("/adminAccount")},I=()=>{x.push("/editLaws")},N=()=>{x.push("/adminMenu")};return(0,r.jsxs)(h.Z,{children:[(0,r.jsxs)(m.Z,{onClick:()=>{P()},children:[(0,r.jsx)(Z.Z,{children:(0,r.jsx)(y.Z,{})}),(0,r.jsx)(j.Z,{primary:"Dashboard"})]}),(0,r.jsxs)(m.Z,{onClick:()=>N(),children:[(0,r.jsx)(Z.Z,{children:(0,r.jsx)(L.Z,{})}),(0,r.jsx)(j.Z,{primary:"Users"})]}),(0,r.jsxs)(m.Z,{onClick:()=>I(),children:[(0,r.jsx)(Z.Z,{children:(0,r.jsx)(k.Z,{})}),(0,r.jsx)(j.Z,{primary:"Edit Laws"})]}),(0,r.jsxs)(m.Z,{onClick:()=>{p(!u)},children:[(0,r.jsx)(Z.Z,{children:(0,r.jsx)(S.Z,{})}),(0,r.jsx)(j.Z,{primary:"Kushtetuta"}),u?(0,r.jsx)(_.Z,{}):(0,r.jsx)(f.Z,{})]}),(0,r.jsx)(b.Z,{in:u,timeout:500,unmountOnExit:!0,children:e.map(t=>(0,r.jsxs)(h.Z,{children:[(0,r.jsxs)(m.Z,{onClick:()=>{a&&a(t),w(t.part_id)},children:[(0,r.jsx)(Z.Z,{children:(0,r.jsx)(y.Z,{})}),(0,r.jsx)(v.Z,{title:t.part_title,arrow:!0,children:(0,r.jsx)(j.Z,{primary:t.part_title,sx:{overflow:"hidden",textOverflow:"ellipsis",maxWidth:"200px"}})}),i[t.part_id]?(0,r.jsx)(_.Z,{}):(0,r.jsx)(f.Z,{})]},t.part_id),(0,r.jsx)(b.Z,{in:i[t.part_id],timeout:500,unmountOnExit:!0,children:null==n?void 0:n.map(t=>(0,r.jsx)(g.Z,{onClick:()=>{s&&s(t)},component:"div",sx:{pl:4},disablePadding:!0,children:(0,r.jsx)(m.Z,{children:(0,r.jsx)(v.Z,{title:t.category_title,arrow:!0,children:(0,r.jsx)(j.Z,{primary:t.category_title,sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"wrap",maxWidth:"300px"}})})})},t.category_id))})]}))})]})},I=a(1781);let N=(0,d.ZP)(l.ZP,{shouldForwardProp:t=>"open"!==t})(t=>{let{theme:e,open:a}=t;return{"& .MuiDrawer-paper":{position:"absolute",whiteSpace:"nowrap",width:250,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),boxSizing:"border-box",...!a&&{overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7),[e.breakpoints.up("sm")]:{width:e.spacing(9)}}}}}),E=(0,d.ZP)(n.Z,{shouldForwardProp:t=>"open"!==t})(t=>{let{theme:e,open:a}=t;return{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),...a&&{marginLeft:250,width:"calc(100% - ".concat(250,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})}}});var B=t=>{let{getLawByCategoryId:e,getAllLaws:a,categories:n,handlePartClick:l}=t,[d,m]=(0,o.useState)(!1),[Z,j]=(0,o.useState)(),[y,v]=(0,o.useState)([]),b=async()=>{v(await I.Z.getAllParts(y))},_=()=>{m(!d)},f=()=>{j(JSON.parse(localStorage.getItem("user")))};return(0,o.useEffect)(()=>{f(),b()},[]),(0,r.jsxs)(h.Z,{children:[(0,r.jsx)(E,{position:"absolute",open:d,children:(0,r.jsxs)(u.Z,{sx:{pr:"24px"},children:[(0,r.jsx)(p.Z,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:_,sx:{marginRight:"36px",...d&&{display:"none"}},children:(0,r.jsx)(i.Z,{})}),(0,r.jsxs)(x.Z,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1},children:["Welcome ",null==Z?void 0:Z.user_name]}),(0,r.jsx)(s.Z,{})]})}),(0,r.jsxs)(N,{variant:"permanent",open:d,children:[(0,r.jsx)(u.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",px:[1]},children:(0,r.jsx)(p.Z,{onClick:_,children:(0,r.jsx)(c.Z,{})})}),(0,r.jsx)(w.Z,{}),(0,r.jsxs)(g.Z,{component:"nav",children:[(0,r.jsx)(P,{handlePartClick:l,categories:n,getLawByCategoryId:e,getAllLaws:a,parts:y}),(0,r.jsx)(w.Z,{sx:{my:1}})]})]})]})}},4849:function(t,e,a){"use strict";a.d(e,{Z:function(){return b}});var r=a(7437),n=a(8433),s=a(7999),i=a(4990),o=a(3719),l=a(2265),c=a(8024),d=a(6605),h=a(2305),u=a(7699),p=a(5245),x=a.n(p);let w=(0,c.ZP)(d.ZP)(t=>{let{theme:e}=t;return{color:"inherit","& .MuiInputBase-input":{padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),")"),transition:e.transitions.create("width"),maxWidth:"100%",[e.breakpoints.up("md")]:{width:"37ch"}}}}),g=(0,c.ZP)("div")(t=>{let{theme:e}=t;return{position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:(0,h.Fq)(e.palette.common.white,.15),"&:hover":{backgroundColor:(0,h.Fq)(e.palette.common.white,.25)},width:"100%",[e.breakpoints.down("sm")]:{marginLeft:e.spacing(8),width:"200px",height:"40px"}}}),m=(0,c.ZP)("div")(t=>{let{theme:e}=t;return{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}});var Z=t=>{let{myLaws:e,setLaws:a}=t,[n,s]=(0,l.useState)({name:""});return(0,r.jsxs)(g,{sx:{border:"1px #DDDDDD solid",backgroundColor:"white",maxWidth:"400px",boxShadow:5},children:[(0,r.jsx)(m,{children:(0,r.jsx)(u.Z,{})}),(0,r.jsx)(w,{placeholder:"Search…",inputProps:{"aria-label":"search"},sx:{height:"60px"},className:x().searchText,value:n.value,onChange:t=>{console.log(e);let r=t.target.value;a(e.filter(t=>t.law_name.toLowerCase().includes(r.toLowerCase())||t.law_description.toLowerCase().includes(r.toLowerCase())))}})]})},j=a(6504),y=a(8458),v=a.n(y),b=t=>{let{laws:e,myLaws:a,setLaws:l}=t;return(0,r.jsx)(n.ZP,{container:!0,spacing:3,children:(0,r.jsxs)(n.ZP,{item:!0,xs:12,md:12,lg:13,children:[(0,r.jsx)(s.Z,{sx:{alignItems:"center",margin:"0 0 30px 0"},children:(0,r.jsx)(Z,{myLaws:a,setLaws:l})}),(0,r.jsxs)(i.Z,{sx:{p:2,display:"flex",flexDirection:"column",minHeight:240,boxShadow:10},className:v().paper,children:[(0,r.jsxs)(s.Z,{className:v().container,children:[(0,r.jsx)(j.Z,{className:v().imageListItem,children:(0,r.jsx)("img",{src:"/logo.png",alt:"Logo"})}),(0,r.jsx)(o.Z,{variant:"h3",className:v().header,children:"KUSHTETUTA E REPUBLIK\xcbS S\xcb SHQIP\xcbRIS\xcb"}),(0,r.jsx)(o.Z,{variant:"h3",className:v().subheader,children:"(Ndryshuar me ligjet: nr. 9675, dat\xeb 13.1.2007; nr. 9904, dat\xeb 21.4.2008; nr. 88/2012, dat\xeb 18.9.2012; nr. 137/2015, dat\xeb 17.12.2015; nr. 76/2016, dat\xeb 22.7.2016; nr. 115/2020,dat\xeb 30.7.2020; nr. 16/2022, dat\xeb 10.2.2022)"})]}),(0,r.jsxs)(o.Z,{variant:"h3",className:v().content,children:["Ne, Populli i Shqip\xebris\xeb, krenar\xeb dhe t\xeb vet\xebdijsh\xebm p\xebr historin\xeb ton\xeb, me p\xebrgjegj\xebsi p\xebr t\xeb ardhmen,",(0,r.jsx)("br",{})," me besim te Zoti dhe/ose te vlera t\xeb tjera universale, me vendosm\xebrin\xeb p\xebr t\xeb nd\xebrtuar nj\xeb shtet t\xeb s\xeb drejt\xebs, demokratik e social,",(0,r.jsx)("br",{})," p\xebr t\xeb garantuar t\xeb drejtat dhe lirit\xeb themelore t\xeb njeriut, me frym\xebn e toleranc\xebs dhe t\xeb bashk\xebjetes\xebs fetare, me zotimin p\xebr mbrojtjen e dinjitetit dhe t\xeb personalitetit njer\xebzor,",(0,r.jsx)("br",{})," si dhe p\xebr prosperitetin e t\xeb gjith\xeb kombit, p\xebr paqen, mir\xebqenien, kultur\xebn dhe solidaritetin shoq\xebror,",(0,r.jsx)("br",{}),"me aspirat\xebn shekullore t\xeb popullit shqiptar p\xebr identitetin dhe bashkimin komb\xebtar, me bindjen e thell\xeb se drejt\xebsia,",(0,r.jsx)("br",{})," paqja, harmonia dhe bashk\xebpunimi nd\xebrmjet kombeve jan\xeb nd\xebr vlerat m\xeb t\xeb larta t\xeb njer\xebzimit"]}),(0,r.jsx)(o.Z,{className:v().decision,children:"VENDOSIM KETE KUSHTETUTE:"}),e.map(t=>(0,r.jsxs)(s.Z,{className:v().lawBox,children:[(0,r.jsx)(o.Z,{className:v().lawName,variant:"h5",children:t.law_name}),(0,r.jsx)(o.Z,{variant:"h6",className:v().lawDescription,children:t.law_description})]},t.law_id))]})]})})}},1862:function(t,e,a){"use strict";var r=a(7437),n=a(6463);e.default=t=>{let{children:e}=t;return(0,n.useRouter)(),(0,r.jsx)(r.Fragment,{children:e})}},639:function(t,e,a){"use strict";var r=a(7437),n=a(2265),s=a(7999),i=a(6548),o=a(3719),l=a(2118),c=a(6463);let d={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:450,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};e.Z=()=>{let[t,e]=(0,n.useState)(!1),a=(0,c.useRouter)(),h=()=>e(!1),u=()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),a.push("/")};return(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(i.Z,{color:"error",variant:"contained",onClick:()=>e(!0),children:"Logout"}),(0,r.jsx)(l.Z,{open:t,onClose:h,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,r.jsxs)(s.Z,{sx:d,children:[(0,r.jsx)(o.Z,{variant:"h6",sx:{margin:"20px auto",maxWidth:"320px",fontWeight:"bold"},children:"Are you sure you want to logout"}),(0,r.jsxs)(s.Z,{sx:{textAlign:"center"},children:[(0,r.jsx)(i.Z,{variant:"contained",color:"error",sx:{margin:"10px 45px"},onClick:()=>u(),children:"Yes"}),(0,r.jsx)(i.Z,{variant:"outlined",color:"error",sx:{margin:"10px 45px"},onClick:()=>h(),children:"No"})]})]})})]})}},9292:function(t,e,a){"use strict";var r=a(3963);e.Z=void 0;var n=r(a(9118)),s=a(7437);e.Z=(0,n.default)((0,s.jsx)("path",{d:"M22 24H2v-4h20zM13.06 5.19l3.75 3.75L7.75 18H4v-3.75zm4.82 2.68-3.75-3.75 1.83-1.83c.39-.39 1.02-.39 1.41 0l2.34 2.34c.39.39.39 1.02 0 1.41z"}),"BorderColor")},5481:function(t,e,a){"use strict";var r=a(3963);e.Z=void 0;var n=r(a(9118)),s=a(7437);e.Z=(0,n.default)((0,s.jsx)("path",{d:"M11.99 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10m3.61 6.34c1.07 0 1.93.86 1.93 1.93 0 1.07-.86 1.93-1.93 1.93-1.07 0-1.93-.86-1.93-1.93-.01-1.07.86-1.93 1.93-1.93m-6-1.58c1.3 0 2.36 1.06 2.36 2.36 0 1.3-1.06 2.36-2.36 2.36s-2.36-1.06-2.36-2.36c0-1.31 1.05-2.36 2.36-2.36m0 9.13v3.75c-2.4-.75-4.3-2.6-5.14-4.96 1.05-1.12 3.67-1.69 5.14-1.69.53 0 1.2.08 1.9.22-1.64.87-1.9 2.02-1.9 2.68M11.99 20c-.27 0-.53-.01-.79-.04v-4.07c0-1.42 2.94-2.13 4.4-2.13 1.07 0 2.92.39 3.84 1.15-1.17 2.97-4.06 5.09-7.45 5.09"}),"SupervisedUserCircle")},8458:function(t){t.exports={container:"allLaws_container__J7t_Z",imageListItem:"allLaws_imageListItem__xS0ku",header:"allLaws_header__o9vyc",subheader:"allLaws_subheader__Esceo",content:"allLaws_content__BX7eL",decision:"allLaws_decision__i7D0l",lawBox:"allLaws_lawBox__ECnL5",lawName:"allLaws_lawName__x7iiw",lawDescription:"allLaws_lawDescription__oER8Y",paper:"allLaws_paper__PN0A9"}},5245:function(t){t.exports={searchText:"searchbar_searchText__3gVq4"}}},function(t){t.O(0,[762,417,666,454,304,123,411,242,971,23,744],function(){return t(t.s=5064)}),_N_E=t.O()}]);