(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[447],{8106:function(e,r,t){Promise.resolve().then(t.bind(t,1213)),Promise.resolve().then(t.t.bind(t,6771,23)),Promise.resolve().then(t.bind(t,5218)),Promise.resolve().then(t.bind(t,2591))},1213:function(e,r,t){"use strict";var n=t(7437),s=t(7999),o=t(2197),i=t(3719);t(2265);var a=t(4050),m=t(9380),l=t(5387),u=t.n(l);r.default=()=>{let e=(0,a.Z)();return e=(0,m.Z)(e),(0,n.jsx)(s.Z,{children:(0,n.jsx)(s.Z,{sx:{alignItems:"center",display:"flex",flexDirection:"column",justifyItems:"center",padding:3,backgroundColor:"#222831",color:"#F6F5F2"},children:(0,n.jsx)(o.Z,{children:(0,n.jsxs)(s.Z,{sx:{display:"flex",flexWrap:"wrap"},children:[(0,n.jsx)(s.Z,{className:u().headerContainer,children:(0,n.jsx)(i.Z,{component:"h2",className:u().header,children:"WHAT WE OFFER"})}),(0,n.jsxs)(s.Z,{className:u().contentContainer,children:[(0,n.jsxs)(s.Z,{sx:{maxWidth:"400px",display:"flex"},children:[(0,n.jsx)(s.Z,{sx:{margin:"40px 0 0 0"},children:(0,n.jsx)("img",{className:u().img,src:"/sun-logo.png"})}),(0,n.jsxs)(s.Z,{sx:{margin:"10px 20px 0"},children:[(0,n.jsx)(i.Z,{variant:"h6",component:"h3",className:u().featuresTitles,children:"Lorem Ipsum"}),(0,n.jsx)(i.Z,{className:u().featuresText,children:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"})]})]}),(0,n.jsxs)(s.Z,{sx:{maxWidth:"400px",display:"flex"},children:[(0,n.jsx)(s.Z,{sx:{margin:"70px 0 0 0"},children:(0,n.jsx)("img",{className:u().img,src:"/sun-logo.png"})}),(0,n.jsxs)(s.Z,{sx:{margin:"20px 20px 0 "},children:[(0,n.jsx)(i.Z,{variant:"h6",component:"h3",className:u().featuresTitles,children:"Lorem Ipsum"}),(0,n.jsx)(i.Z,{className:u().featuresText,children:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"})]})]}),(0,n.jsxs)(s.Z,{sx:{maxWidth:"400px",display:"flex"},children:[(0,n.jsx)(s.Z,{sx:{margin:"70px 0 0 0"},children:(0,n.jsx)("img",{className:u().img,src:"/sun-logo.png"})}),(0,n.jsxs)(s.Z,{sx:{margin:"20px 20px 0"},children:[(0,n.jsx)(i.Z,{variant:"h6",component:"h3",className:u().featuresTitles,children:"Lorem Ipsum"}),(0,n.jsx)(i.Z,{className:u().featuresText,children:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"})]})]})]})]})})})})}},5218:function(e,r,t){"use strict";t.r(r),t.d(r,{boxClasses:function(){return s.Z},default:function(){return n.Z}});var n=t(7999),s=t(7126)},2591:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return n.Z},getTypographyUtilityClass:function(){return s.f},typographyClasses:function(){return s.Z}});var n=t(3719),s=t(8958)},9380:function(e,r,t){"use strict";t.d(r,{Z:function(){return a}});var n=t(2988),s=t(2414);function o(e){return String(parseFloat(e)).length===String(e).length}function i(e){return parseFloat(e)}function a(e){var r;let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{breakpoints:a=["sm","md","lg"],disableAlign:m=!1,factor:l=2,variants:u=["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]}=t,c=(0,n.Z)({},e);c.typography=(0,n.Z)({},c.typography);let p=c.typography,h=(r=p.htmlFontSize,(e,t)=>{let n=String(e).match(/[\d.\-+]*\s*(.*)/)[1]||"";if(n===t)return e;let s=i(e);"px"!==n&&("em"===n?s=i(e)*i(r):"rem"===n&&(s=i(e)*i(r)));let o=s;if("px"!==t){if("em"===t)o=s/i(r);else{if("rem"!==t)return e;o=s/i(r)}}return parseFloat(o.toFixed(5))+t}),x=a.map(e=>c.breakpoints.values[e]);return u.forEach(e=>{let r=p[e],t=parseFloat(h(r.fontSize,"rem"));if(t<=1)return;let{lineHeight:i}=r;if(!o(i)&&!m)throw Error((0,s.Z)(6));o(i)||(i=parseFloat(h(i,"rem"))/parseFloat(t));let a=null;m||(a=e=>(function(e){let{size:r,grid:t}=e,n=r-r%t,s=n+t;return r-n<s-r?n:s})({size:e,grid:function(e){let{lineHeight:r,pixels:t,htmlFontSize:n}=e;return t/(r*n)}({pixels:4,lineHeight:i,htmlFontSize:p.htmlFontSize})})),p[e]=(0,n.Z)({},r,function(e){let{cssProperty:r,min:t,max:n,unit:s="rem",breakpoints:o=[600,900,1200],transform:i=null}=e,a={[r]:"".concat(t).concat(s)},m=(n-t)/o[o.length-1];return o.forEach(e=>{let n=t+m*e;null!==i&&(n=i(n)),a["@media (min-width:".concat(e,"px)")]={[r]:"".concat(Math.round(1e4*n)/1e4).concat(s)}}),a}({cssProperty:"fontSize",min:1+(t-1)/l,max:t,unit:"rem",breakpoints:x,transform:a}))}),c}},5387:function(e){e.exports={img:"featureSection_img__tAYFw",headerContainer:"featureSection_headerContainer__OLEk0",contentContainer:"featureSection_contentContainer__RGkmr",header:"featureSection_header__Xa1_W",featuresTitles:"featureSection_featuresTitles__GFPPA",featuresText:"featureSection_featuresText__xY_2C"}},6771:function(e){e.exports={img:"hero_img__X9sZo",hero:"hero_hero__g9_mG","text-container":"hero_text-container__JKHhr"}}},function(e){e.O(0,[462,417,971,23,744],function(){return e(e.s=8106)}),_N_E=e.O()}]);