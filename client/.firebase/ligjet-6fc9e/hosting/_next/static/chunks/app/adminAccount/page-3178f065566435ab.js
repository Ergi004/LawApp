(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[739],{5064:function(e,t,a){Promise.resolve().then(a.bind(a,3215)),Promise.resolve().then(a.bind(a,1862)),Promise.resolve().then(a.bind(a,5218))},5855:function(e,t,a){"use strict";var r=a(3459);t.Z={createCategory:async e=>{try{return(await r.Z.post("/category/create",e)).data}catch(e){throw e}},getAllCategories:async e=>{try{return(await r.Z.get("/category/getAll",e)).data.data}catch(e){throw e}},getCategoryById:async e=>{try{return r.Z.get("/category/".concat(e))}catch(e){throw e}},getCategoryByPartId:async e=>{try{return await r.Z.get("/category/findBy/".concat(e))}catch(e){throw e}},updateCategory:async(e,t)=>{try{return r.Z.patch("/category/update/".concat(e),t)}catch(e){throw e}},deleteCategory:async e=>{try{return r.Z.delete("/category/delete/".concat(e))}catch(e){throw e}}}},6850:function(e,t,a){"use strict";var r=a(3459);t.Z={createLaw:async e=>{try{return(await r.Z.post("/laws/create",e)).data}catch(e){throw e}},getAllLaws:async e=>{try{return await r.Z.get("/laws/getAll",e)}catch(e){throw e}},getLawById:async e=>{try{return await r.Z.get("/laws/".concat(e))}catch(e){throw e}},getLawByCategoryId:async e=>{try{return(await r.Z.get("/laws/findBy/".concat(e))).data}catch(e){throw e}},updateLaw:async(e,t)=>{try{return await r.Z.patch("/laws/update/".concat(e),t)}catch(e){throw e}},deleteLaw:async e=>{try{return await r.Z.delete("/laws/delete/".concat(e))}catch(e){throw e}}}},3215:function(e,t,a){"use strict";var r=a(7437),s=a(2265),n=a(124),i=a(7999),c=a(9806),l=a(2197),o=a(6850),d=a(5855),h=a(1781),p=a(4849),u=a(8778);t.default=()=>{let[e,t]=(0,s.useState)([]),[a,w]=(0,s.useState)([]),[g,m]=(0,s.useState)([]),[x,y]=(0,s.useState)([]),[j,Z]=(0,s.useState)([]),_=async e=>{y((await d.Z.getCategoryByPartId(e.part_id)).data.data)},v=async()=>{m(await h.Z.getAllParts(g))},b=async()=>{y(await d.Z.getAllCategories(j))},L=async()=>{let a=await o.Z.getAllLaws(e);t(a.data),w(a.data)},f=async e=>{t((await o.Z.getLawByCategoryId(e.category_id)).data)};return(0,s.useEffect)(()=>{L(),b(),v()},[]),(0,r.jsxs)(i.Z,{sx:{display:"flex",width:"100%"},children:[(0,r.jsx)(n.ZP,{}),(0,r.jsx)(u.Z,{getLawByCategoryId:f,getAllLaws:L,handlePartClick:_,categories:x}),(0,r.jsxs)(i.Z,{component:"main",sx:{backgroundColor:e=>"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900],flexGrow:1,height:"100vh",overflow:"auto"},children:[(0,r.jsx)(c.Z,{}),(0,r.jsx)(l.Z,{maxWidth:"lg",sx:{mt:4,mb:4},children:(0,r.jsx)(p.Z,{laws:e,parts:g,allCategories:j,myLaws:a,setLaws:t})})]})]})}},4849:function(e,t,a){"use strict";a.d(t,{Z:function(){return v}});var r=a(7437),s=a(8433),n=a(7999),i=a(4990),c=a(3719),l=a(2265),o=a(8024),d=a(6605),h=a(2305),p=a(7699),u=a(5245),w=a.n(u);let g=(0,o.ZP)(d.ZP)(e=>{let{theme:t}=e;return{color:"inherit","& .MuiInputBase-input":{padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),maxWidth:"100%",[t.breakpoints.up("xs")]:{width:"37ch"}}}}),m=(0,o.ZP)("div")(e=>{let{theme:t}=e;return{position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:(0,h.Fq)(t.palette.common.white,.15),"&:hover":{backgroundColor:(0,h.Fq)(t.palette.common.white,.25)},width:"100%",[t.breakpoints.down("sm")]:{marginLeft:t.spacing(6),marginBottom:t.spacing(2),width:"200px",height:"40px"}}}),x=(0,o.ZP)("div")(e=>{let{theme:t}=e;return{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}});var y=e=>{let{myLaws:t,setLaws:a}=e,[s,n]=(0,l.useState)({name:""});return(0,r.jsxs)(m,{sx:{border:"1px #DDDDDD solid",backgroundColor:"white",maxWidth:"70%",boxShadow:5,margin:"0 auto 20px"},children:[(0,r.jsx)(x,{children:(0,r.jsx)(p.Z,{className:w().searchImg})}),(0,r.jsx)(g,{placeholder:"Search…",inputProps:{"aria-label":"search"},sx:{height:"60px"},className:w().searchText,value:s.value,onChange:e=>{let r=e.target.value;a(t.filter(e=>e.law_name.toLowerCase().includes(r.toLowerCase())||e.law_description.toLowerCase().includes(r.toLowerCase())))}})]})},j=a(6504),Z=a(8458),_=a.n(Z),v=e=>{let{laws:t,myLaws:a,setLaws:l}=e;return(0,r.jsx)(s.ZP,{container:!0,spacing:3,children:(0,r.jsxs)(s.ZP,{sx:{padding:"10px 0px 0 30px"},xs:12,md:12,lg:13,children:[(0,r.jsx)(n.Z,{sx:{alignItems:"center"},children:(0,r.jsx)(y,{myLaws:a,setLaws:l})}),(0,r.jsxs)(i.Z,{sx:{p:2,display:"flex",flexDirection:"column",minHeight:240,boxShadow:10},className:_().paper,children:[(0,r.jsxs)(n.Z,{className:_().container,children:[(0,r.jsx)(j.Z,{className:_().imageListItem,children:(0,r.jsx)("img",{src:"/logo.png",alt:"Logo"})}),(0,r.jsx)(c.Z,{variant:"h3",className:_().header,children:"KUSHTETUTA E REPUBLIK\xcbS S\xcb SHQIP\xcbRIS\xcb"}),(0,r.jsx)(c.Z,{variant:"h3",className:_().subheader,children:"(Ndryshuar me ligjet: nr. 9675, dat\xeb 13.1.2007; nr. 9904, dat\xeb 21.4.2008; nr. 88/2012, dat\xeb 18.9.2012; nr. 137/2015, dat\xeb 17.12.2015; nr. 76/2016, dat\xeb 22.7.2016; nr. 115/2020,dat\xeb 30.7.2020; nr. 16/2022, dat\xeb 10.2.2022)"})]}),(0,r.jsxs)(c.Z,{variant:"h3",className:_().content,children:["Ne, Populli i Shqip\xebris\xeb, krenar\xeb dhe t\xeb vet\xebdijsh\xebm p\xebr historin\xeb ton\xeb, me p\xebrgjegj\xebsi p\xebr t\xeb ardhmen,",(0,r.jsx)("br",{})," me besim te Zoti dhe/ose te vlera t\xeb tjera universale, me vendosm\xebrin\xeb p\xebr t\xeb nd\xebrtuar nj\xeb shtet t\xeb s\xeb drejt\xebs, demokratik e social,",(0,r.jsx)("br",{})," p\xebr t\xeb garantuar t\xeb drejtat dhe lirit\xeb themelore t\xeb njeriut, me frym\xebn e toleranc\xebs dhe t\xeb bashk\xebjetes\xebs fetare, me zotimin p\xebr mbrojtjen e dinjitetit dhe t\xeb personalitetit njer\xebzor,",(0,r.jsx)("br",{})," si dhe p\xebr prosperitetin e t\xeb gjith\xeb kombit, p\xebr paqen, mir\xebqenien, kultur\xebn dhe solidaritetin shoq\xebror,",(0,r.jsx)("br",{}),"me aspirat\xebn shekullore t\xeb popullit shqiptar p\xebr identitetin dhe bashkimin komb\xebtar, me bindjen e thell\xeb se drejt\xebsia,",(0,r.jsx)("br",{})," paqja, harmonia dhe bashk\xebpunimi nd\xebrmjet kombeve jan\xeb nd\xebr vlerat m\xeb t\xeb larta t\xeb njer\xebzimit"]}),(0,r.jsx)(c.Z,{className:_().decision,children:"VENDOSIM KETE KUSHTETUTE:"}),t.map(e=>(0,r.jsxs)(n.Z,{className:_().lawBox,children:[(0,r.jsx)(c.Z,{className:_().lawName,variant:"h5",children:e.law_name}),(0,r.jsx)(c.Z,{variant:"h6",className:_().lawDescription,children:e.law_description})]},e.law_id))]})]})})}},9292:function(e,t,a){"use strict";var r=a(3963);t.Z=void 0;var s=r(a(9118)),n=a(7437);t.Z=(0,s.default)((0,n.jsx)("path",{d:"M22 24H2v-4h20zM13.06 5.19l3.75 3.75L7.75 18H4v-3.75zm4.82 2.68-3.75-3.75 1.83-1.83c.39-.39 1.02-.39 1.41 0l2.34 2.34c.39.39.39 1.02 0 1.41z"}),"BorderColor")},5481:function(e,t,a){"use strict";var r=a(3963);t.Z=void 0;var s=r(a(9118)),n=a(7437);t.Z=(0,s.default)((0,n.jsx)("path",{d:"M11.99 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10m3.61 6.34c1.07 0 1.93.86 1.93 1.93 0 1.07-.86 1.93-1.93 1.93-1.07 0-1.93-.86-1.93-1.93-.01-1.07.86-1.93 1.93-1.93m-6-1.58c1.3 0 2.36 1.06 2.36 2.36 0 1.3-1.06 2.36-2.36 2.36s-2.36-1.06-2.36-2.36c0-1.31 1.05-2.36 2.36-2.36m0 9.13v3.75c-2.4-.75-4.3-2.6-5.14-4.96 1.05-1.12 3.67-1.69 5.14-1.69.53 0 1.2.08 1.9.22-1.64.87-1.9 2.02-1.9 2.68M11.99 20c-.27 0-.53-.01-.79-.04v-4.07c0-1.42 2.94-2.13 4.4-2.13 1.07 0 2.92.39 3.84 1.15-1.17 2.97-4.06 5.09-7.45 5.09"}),"SupervisedUserCircle")},8458:function(e){e.exports={container:"allLaws_container__J7t_Z",imageListItem:"allLaws_imageListItem__xS0ku",header:"allLaws_header__o9vyc",subheader:"allLaws_subheader__Esceo",content:"allLaws_content__BX7eL",decision:"allLaws_decision__i7D0l",lawBox:"allLaws_lawBox__ECnL5",lawName:"allLaws_lawName__x7iiw",lawDescription:"allLaws_lawDescription__oER8Y",paper:"allLaws_paper__PN0A9"}},5245:function(e){e.exports={searchImg:"searchbar_searchImg__kV_0d",searchText:"searchbar_searchText__3gVq4"}}},function(e){e.O(0,[133,417,666,454,304,123,29,242,403,971,23,744],function(){return e(e.s=5064)}),_N_E=e.O()}]);