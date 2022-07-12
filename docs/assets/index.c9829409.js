import{r as R,a as N,c as _,b as h,o as c,d as r,e,f as g,g as b,p as x,h as w,F as H,i as W,j as q,k as V,S as E,l as M,t as B,m as z,w as U,n as G,q as K}from"./vendor.0e9570ca.js";const F=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}};F();const u=R({user:{},account:{},page:1}),P=window.location.origin.includes("localhost"),T=P?"http://localhost:3000":"",Y="",J="",Q="";function f(t,a){if(P)console[t](`[${t}] :: ${new Date().toLocaleTimeString()} :: `,...a);else{switch(t){case"log":case"assert":return}console[t](`[${t}] :: ${new Date().toLocaleTimeString()} :: `,...a)}}const v={log(){f("log",arguments)},error(){f("error",arguments)},warn(){f("warn",arguments)},assert(){f("assert",arguments)},trace(){f("trace",arguments)}},y=N.create({baseURL:T,timeout:8e3});class X{switchPage(a){u.page=a}}const Z=new X;var m=(t,a)=>{for(const[s,i]of a)t[s]=i;return t};const ee={name:"App",setup(){return{appState:_(()=>u)}}},ae={class:"computer d-flex justify-content-center"},te={id:"monitor"},se={id:"bezel"},ie={id:"crt",class:"off"},oe=e("div",{class:"scanline"},null,-1),ne={class:"terminal"},le=b('<div class="bg-white d-flex justify-content-start topbar"><div class="row"><div class="col-4 d-flex"><i class="mdi mdi-apple mdi-24px mx-2"></i><p class="fs-3 my-0 pb-0">Home</p></div><div class="col-4"><p class="fs-3 ps-2 my-0 pb-0">Skills</p></div><div class="col-4"><p class="fs-3 my-0 pb-0">About</p></div></div></div>',1),de={class:"row window-row"},ce={class:"col-12"};function re(t,a,s,i,o,n){const l=h("Windows");return c(),r("div",ae,[e("div",te,[e("div",se,[e("div",ie,[oe,e("div",ne,[e("div",null,[le,e("div",de,[e("div",ce,[g(l)])])])])])])])])}var ue=m(ee,[["render",re]]),pe="/WIP-Portfolio/assets/inspire.97f83d7e.png",ve="/WIP-Portfolio/assets/scurvydogs.28836a2e.png",me="/WIP-Portfolio/assets/herbalist.a2d8fbae.png";const fe={setup(){return{}}},k=t=>(x("data-v-41fba9d2"),t=t(),w(),t),_e={class:"container my-5"},he=k(()=>e("div",{class:"row justify-content-center"},[e("div",{class:"col-md-4 mt-5"},[e("h1",null,"Austin Dye"),e("h4",null,"Software Developer"),e("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ratione odio? Vel quaerat adipisci ducimus, vero, accusamus harum animi facilis quod quos similique doloremque et dignissimos optio culpa repellendus voluptate? "),e("div",{class:"btn text-white border btn-success me-4"}," DOWNLOAD RESUME "),e("div",{class:"btn text-white border btn-info"},"CONTACT")]),e("div",{class:"col-md-4 mx-2 mb-5"},[e("div",{class:"border rounded-circle p-3 bg-dark"},[e("img",{class:"rounded-circle w-100 outline shadow-lg",alt:"100x100",src:"https://avatars.githubusercontent.com/u/101369015?v=4","data-holder-rendered":"true"})])])],-1)),ge=k(()=>e("div",{class:"row"},[e("div",{class:"col-md-6"},[e("div",{id:"carouselExampleCaptions",class:"carousel slide","data-bs-ride":"carousel"},[e("div",{class:"carousel-indicators"},[e("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"0",class:"active","aria-current":"true","aria-label":"Slide 1"}),e("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"1","aria-label":"Slide 2"}),e("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"2","aria-label":"Slide 3"})]),e("div",{class:"carousel-inner rounded"},[e("div",{class:"carousel-item active"},[e("h1",{class:"bg-info text-dark"},"Inspire"),e("img",{src:pe,class:"d-block w-100",alt:"..."})]),e("div",{class:"carousel-item"},[e("h1",{class:"bg-info text-dark"},"Scurvy Dogs"),e("img",{src:ve,class:"d-block w-100",alt:"..."})]),e("div",{class:"carousel-item"},[e("h1",{class:"bg-info text-dark"},"Herbalist Simulator"),e("img",{src:me,class:"d-block w-100",alt:"..."})])]),e("button",{class:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"prev"},[e("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),e("span",{class:"visually-hidden"},"Previous")]),e("button",{class:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"next"},[e("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),e("span",{class:"visually-hidden"},"Next")])]),e("div",{class:"card my-5"},[e("h4",{class:"bg-warning text-dark rounded-top ps-2"},"Projects"),e("ul",null,[e("li",null,"HTML 5"),e("li",null,"CSS 3"),e("li",null,"SCSS"),e("li",null,"BootStrap 5"),e("li",null,"JavaScript"),e("li",null,"Vue.js")])])]),e("div",{class:"col-md-6"},[e("div",{class:"card mb-4"},[e("h4",{class:"bg-warning text-dark rounded-top ps-2"},"Front-End"),e("ul",null,[e("li",null,"HTML 5"),e("li",null,"CSS 3"),e("li",null,"SCSS"),e("li",null,"BootStrap 5"),e("li",null,"JavaScript"),e("li",null,"Vue.js")])]),e("div",{class:"card"},[e("h4",{class:"bg-primary rounded-top ps-2"},"Back-End"),e("ul",null,[e("li",null,"Node.js"),e("li",null,"C#"),e("li",null,".NET"),e("li",null,"Restful APIs"),e("li",null,"mySQL"),e("li",null,"MongoDB")])]),e("div",{class:"card my-4"},[e("h4",{class:"bg-danger rounded-top ps-2"},"Other"),e("ul",null,[e("li",null,"MVCS"),e("li",null,"SCRUM"),e("li",null,"Customer Service"),e("li",null,"Professional Communtcation"),e("li",null,"Windows"),e("li",null,"MacOS")])]),e("div",{class:"card my-4"},[e("h4",{class:"bg-info text-dark rounded-top ps-2"},"Software QA"),e("ul",null,[e("li",null,"Jira"),e("li",null,"Bugzilla"),e("li",null,"X-Code"),e("li",null,"ADB"),e("li",null,"Test Writing"),e("li",null,"VR Testing")])])])],-1)),be=k(()=>e("div",{class:"row"},[e("div",{class:"col-md-6"}),e("div",{class:"col-md-6"}),e("div",{class:"col-md-6"}),e("div",{class:"col-md-6"})],-1)),xe=[he,ge,be];function we(t,a,s,i,o,n){return c(),r("div",_e,xe)}var ye=m(fe,[["render",we],["__scopeId","data-v-41fba9d2"]]),ke=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ye});const Se={setup(){return{}}},Ae={class:"containerr"},Ce=b('<div class="cube" data-v-8ce86d8a><div class="face front d-flex justify-contnet-center" data-v-8ce86d8a><img class="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png" data-v-8ce86d8a></div><div class="face back d-flex justify-content-center" data-v-8ce86d8a><img class="img-fluid c-badge" src="https://res.cloudinary.com/practicaldev/image/fetch/s--IMy76vSA--/c_limit,f_auto,fl_progressive,q_80,w_375/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/33/csharp-badge.png" data-v-8ce86d8a></div><div class="face right d-flex justify-content-center" data-v-8ce86d8a><img class="img-fluid badgetd w-90 h-99" src="https://www.nicepng.com/png/detail/142-1423886_html5-css3-js-html-css-javascript.png" data-v-8ce86d8a></div><div class="face left d-flex justify-content-center" data-v-8ce86d8a><img class="img-fluid badget" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" data-v-8ce86d8a></div><div class="face bottom d-flex justify-content-center p-3" data-v-8ce86d8a><img class="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png" data-v-8ce86d8a></div><div class="face top d-flex justify-content-center" data-v-8ce86d8a><img class="img-fluid" src="https://res.cloudinary.com/practicaldev/image/fetch/s--JEjbOLD1--/c_limit,f_auto,fl_progressive,q_80,w_375/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/23/node-sticker.png" data-v-8ce86d8a></div></div>',1),$e=[Ce];function Ee(t,a,s,i,o,n){return c(),r("div",Ae,$e)}var Pe=m(Se,[["render",Ee],["__scopeId","data-v-8ce86d8a"]]),Te=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Pe});const De={setup(){return{}}},je=t=>(x("data-v-4ae0e0f9"),t=t(),w(),t),Ie=je(()=>e("nav",{class:"navbar navbar-expand-lg bg-dark p-0"},[e("div",{class:"container-fluid"},[e("a",{class:"navbar-brand",href:"#"},[e("i",{class:"mdi mdi-github mdi-36px text-white"})]),e("div",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[e("span",{class:"navbar-toggler-icon"},[e("i",{class:"mdi mdi-menu text-white fs-1"})])]),e("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},[e("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0"},[e("li",{class:"nav-item"},[e("form",{class:"d-flex",role:"search"},[e("input",{class:"form-control p-0 mt-2 fs-6",type:"search",placeholder:" Search or jump to.. .","aria-label":"Search"})])]),e("li",{class:"nav-item"},[e("a",{class:"nav-link text-white"},"Pull Requests")]),e("li",{class:"nav-item"},[e("a",{class:"nav-link text-white"},"Issues")]),e("li",{class:"nav-item"},[e("a",{class:"nav-link text-white"},"Marketplace")]),e("li",{class:"nav-item"},[e("a",{class:"nav-link text-white"},"Explore")])]),e("span",null,[e("i",{class:"mdi mdi-bell-outline text-white fs-5 mx-2"}),e("i",{class:"mdi mdi-plus text-white fs-5"},[e("i",{class:"mdi mdi-chevron-down text-white p-0 m-0"})]),e("img",{class:"rounded-circle user-img ms-2",alt:"100x100",src:"https://avatars.githubusercontent.com/u/101369015?v=4","data-holder-rendered":"true"})])])])],-1)),Oe=b('<div class="row p-2 git-font" data-v-4ae0e0f9><div class="col-12" data-v-4ae0e0f9><div class="d-sm none d-md-block d-lg-none" data-v-4ae0e0f9><div class="d-flex" data-v-4ae0e0f9><img class="rounded-circle w-25 h-25" alt="100x100" src="https://avatars.githubusercontent.com/u/101369015?v=4" data-holder-rendered="true" data-v-4ae0e0f9><span class="ms-4" data-v-4ae0e0f9><h5 class="text-start p-0 m-0" data-v-4ae0e0f9>Austin Dye</h5><p class="text-start p-0 m-0" data-v-4ae0e0f9>AustinDye</p></span></div></div></div><div class="col-12 d-flex mb-4 mt-2 profile-nav sticky-top d-none d-md-flex" data-v-4ae0e0f9><div class="container d-flex justify-content-center align-items-baseline overflow-scroll pt-2" data-v-4ae0e0f9><p class="mx-1 p-1 m-0" data-v-4ae0e0f9><i class="mdi mdi-book-open-blank-variant d-none d-md-inline" data-v-4ae0e0f9></i>Overview </p><div class="d-flex" data-v-4ae0e0f9><p class="mx-1 p-1 m-0" data-v-4ae0e0f9><i class="mdi mdi-book p-0 m-0 d-none d-md-inline" data-v-4ae0e0f9></i>Repositories </p></div><p class="bg-dark text-light rounded-pill px-2 py-0" style="min-width:20px;" data-v-4ae0e0f9> 46 </p><p class="mx-1 p-1 m-0" data-v-4ae0e0f9><i class="mdi mdi-application-outline p-0 m-0 d-none d-md-inline" data-v-4ae0e0f9></i>Projects </p><p class="mx-1 p-1 m-0" data-v-4ae0e0f9><i class="mdi mdi-cube-outline p-0 m-0 d-none d-md-inline" data-v-4ae0e0f9></i>Packages </p><p class="mx-1 p-1 m-0" data-v-4ae0e0f9><i class="mdi mdi-star-outline p-0 m-0 d-none d-md-inline" data-v-4ae0e0f9></i>Stars </p></div></div><div class="col-12 d-flex mb-4 mt-2 profile-nav sticky-top d-flex d-md-none" data-v-4ae0e0f9><div class="container d-flex align-items-baseline overflow-scroll pt-2" data-v-4ae0e0f9><p class="mx-1 p-1 m-0" data-v-4ae0e0f9><i class="mdi mdi-book-open-blank-variant d-none d-md-inline" data-v-4ae0e0f9></i>Overview </p><div class="d-flex" data-v-4ae0e0f9><p class="mx-1 p-1 m-0" data-v-4ae0e0f9><i class="mdi mdi-book p-0 m-0 d-none d-md-inline" data-v-4ae0e0f9></i>Repositories </p></div><p class="bg-dark text-light rounded-pill px-2 py-0" style="min-width:20px;" data-v-4ae0e0f9> 46 </p><p class="mx-1 p-1 m-0" data-v-4ae0e0f9><i class="mdi mdi-application-outline p-0 m-0 d-none d-md-inline" data-v-4ae0e0f9></i>Projects </p><p class="mx-1 p-1 m-0" data-v-4ae0e0f9><i class="mdi mdi-cube-outline p-0 m-0 d-none d-md-inline" data-v-4ae0e0f9></i>Packages </p><p class="mx-1 p-1 m-0" data-v-4ae0e0f9><i class="mdi mdi-star-outline p-0 m-0 d-none d-md-inline" data-v-4ae0e0f9></i>Stars </p></div></div><div class="col-lg-3 mb-5 ps-5 d-none d-lg-flex" data-v-4ae0e0f9><div class="position-relative profile-img" data-v-4ae0e0f9><div class="position-absolute" data-v-4ae0e0f9><img class="rounded-circle w-100" alt="100x100" src="https://avatars.githubusercontent.com/u/101369015?v=4" data-holder-rendered="true" data-v-4ae0e0f9></div><div class="profile-text" data-v-4ae0e0f9><h1 class="fs-2 m-0 p-0" data-v-4ae0e0f9>Austin Dye</h1><h5 class="m-0 p-0 mb-4" data-v-4ae0e0f9>AustinDye</h5><span class="d-flex" data-v-4ae0e0f9><p data-v-4ae0e0f9><i class="mdi mdi-account-multiple-outline pe-2" data-v-4ae0e0f9></i><b data-v-4ae0e0f9>1</b> follower </p><div class="mdi mdi-circle-small p-1" data-v-4ae0e0f9></div><p data-v-4ae0e0f9><b data-v-4ae0e0f9>4</b> following</p></span><i class="mdi mdi-link-variant pe-2" data-v-4ae0e0f9></i><a class="" data-v-4ae0e0f9>aupredye@gmail.com</a></div></div></div><div class="col-md-8" data-v-4ae0e0f9><div class="row" data-v-4ae0e0f9><div class="col-md-12 my-2" data-v-4ae0e0f9><div class="info-box card p-3 m-0" data-v-4ae0e0f9><p data-v-4ae0e0f9>AustinDye/README.md</p><h1 data-v-4ae0e0f9>Hi there \u{1F44B} My name is Austin Dye</h1><h4 data-v-4ae0e0f9>Male || He/Him || INTP-T</h4><p data-v-4ae0e0f9> Interested in: QA || Virtual Reality / Augemented Reality Technology || Video Game Development || Web Development </p><h5 class="mt-3 mx-4" data-v-4ae0e0f9>-Links-</h5><ul class="mt-3" data-v-4ae0e0f9><li class="d-flex" data-v-4ae0e0f9><p data-v-4ae0e0f9>CodeWars:</p><a href="https://www.codewars.com/users/AustinDye" data-v-4ae0e0f9>https://www.codewars.com/users/AustinDye</a></li><li class="d-flex" data-v-4ae0e0f9><p data-v-4ae0e0f9>LinkedIn:</p><a href="https://www.linkedin.com/in/austin-dye-03464199/" data-v-4ae0e0f9>https://www.linkedin.com/in/austin-dye-03464199/</a></li><li class="d-flex" data-v-4ae0e0f9><p data-v-4ae0e0f9>Unity Learn:</p><a href="https://learn.unity.com/u/5d5b6908edbc2a002489e7a4?tab=profile" data-v-4ae0e0f9>https://learn.unity.com/u/5d5b6908edbc2a002489e7a4?tab=profile</a></li><li class="d-flex" data-v-4ae0e0f9><p data-v-4ae0e0f9>Portfolio:</p><a href="https://austindye.github.io/WIP-Portfolio/#/" data-v-4ae0e0f9>You are here!</a></li></ul></div></div><h4 data-v-4ae0e0f9>Pinned</h4><div class="col-md-6 my-2" data-v-4ae0e0f9><div class="card p-3" data-v-4ae0e0f9><span class="d-flex justify-content-between" data-v-4ae0e0f9><a class="d-flex" data-v-4ae0e0f9><i class="mdi mdi-book mx-1" data-v-4ae0e0f9></i>checkpoint-3-real </a><p class="public-bool my-1 fs-6" data-v-4ae0e0f9>public</p><i class="mdi mdi-dots-grid" data-v-4ae0e0f9></i></span><h6 class="p-1" data-v-4ae0e0f9><i class="mdi mdi-circle text-info" data-v-4ae0e0f9></i>CSS</h6></div></div><div class="col-md-6 my-2" data-v-4ae0e0f9><div class="card p-3" data-v-4ae0e0f9><span class="d-flex justify-content-between" data-v-4ae0e0f9><a class="d-flex" href="https://github.com/AustinDye/clicker-game" data-v-4ae0e0f9><i class="mdi mdi-book mx-1" data-v-4ae0e0f9></i>clicker-game </a><p class="public-bool my-1 fs-6" data-v-4ae0e0f9>public</p><i class="mdi mdi-dots-grid" data-v-4ae0e0f9></i></span><h6 class="p-1" data-v-4ae0e0f9><i class="mdi mdi-circle text-danger" data-v-4ae0e0f9></i>HTML</h6></div></div><div class="col-md-6 my-2" data-v-4ae0e0f9><div class="card p-3" data-v-4ae0e0f9><span class="d-flex justify-content-between" data-v-4ae0e0f9><a class="d-flex" href="https://github.com/AustinDye/WIP-Portfolio" data-v-4ae0e0f9><i class="mdi mdi-book mx-1" data-v-4ae0e0f9></i>WIP-Portfolio </a><p class="public-bool my-1 fs-6" data-v-4ae0e0f9>public</p><i class="mdi mdi-dots-grid" data-v-4ae0e0f9></i></span><h6 class="p-1" data-v-4ae0e0f9><i class="mdi mdi-circle text-success" data-v-4ae0e0f9></i>Vue</h6></div></div><div class="col-md-6 my-2" data-v-4ae0e0f9><div class="card p-3" data-v-4ae0e0f9><span class="d-flex justify-content-between" data-v-4ae0e0f9><a class="d-flex" href="https://github.com/ZacGamble/Ectogram" data-v-4ae0e0f9><i class="mdi mdi-book mx-1" data-v-4ae0e0f9></i>Ectogram </a><p class="public-bool my-1 fs-6" data-v-4ae0e0f9>public</p><i class="mdi mdi-dots-grid" data-v-4ae0e0f9></i></span><h6 class="p-1" data-v-4ae0e0f9><i class="mdi mdi-circle text-info" data-v-4ae0e0f9></i>CSS</h6></div></div><div class="col-md-6 my-2" data-v-4ae0e0f9><div class="card p-3" data-v-4ae0e0f9><span class="d-flex justify-content-between" data-v-4ae0e0f9><a class="d-flex" href="https://github.com/AustinDye/scurvy-dogs" data-v-4ae0e0f9><i class="mdi mdi-book mx-1" data-v-4ae0e0f9></i>scurvy-dogs </a><p class="public-bool my-1 fs-6" data-v-4ae0e0f9>public</p><i class="mdi mdi-dots-grid" data-v-4ae0e0f9></i></span><h6 class="p-1" data-v-4ae0e0f9><i class="mdi mdi-circle text-info" data-v-4ae0e0f9></i>CSS</h6></div></div><div class="col-md-6 my-2" data-v-4ae0e0f9><div class="card p-3" data-v-4ae0e0f9><span class="d-flex justify-content-between" data-v-4ae0e0f9><a class="d-flex" href="https://github.com/AustinDye/Keepr-BootCamp-Final" data-v-4ae0e0f9><i class="mdi mdi-book mx-1" data-v-4ae0e0f9></i>Keepr-BootCamp-Final </a><p class="public-bool my-1 fs-6" data-v-4ae0e0f9>public</p><i class="mdi mdi-dots-grid" data-v-4ae0e0f9></i></span><h6 class="p-1" data-v-4ae0e0f9><i class="mdi mdi-circle text-primary" data-v-4ae0e0f9></i>C#</h6></div></div></div></div></div>',1);function Le(t,a,s,i,o,n){return c(),r(H,null,[Ie,Oe],64)}var Re=m(De,[["render",Le],["__scopeId","data-v-4ae0e0f9"]]),Ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Re});const He="modulepreload",D={},We="/WIP-Portfolio/",S=function(a,s){return!s||s.length===0?a():Promise.all(s.map(i=>{if(i=`${We}${i}`,i in D)return;D[i]=!0;const o=i.endsWith(".css"),n=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${n}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":He,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((p,$)=>{l.addEventListener("load",p),l.addEventListener("error",$)})})).then(()=>a())};function qe(t){switch(t){case"./pages/AboutPage.vue":return S(()=>import("./AboutPage.268d8aec.js"),["assets/AboutPage.268d8aec.js","assets/vendor.0e9570ca.js"]);case"./pages/AccountPage.vue":return S(()=>import("./AccountPage.d299c0fd.js"),["assets/AccountPage.d299c0fd.js","assets/AccountPage.1d38451d.css","assets/vendor.0e9570ca.js"]);case"./pages/HomePage.vue":return S(()=>import("./HomePage.ef3744b7.js"),["assets/HomePage.ef3744b7.js","assets/HomePage.31323586.css","assets/vendor.0e9570ca.js"]);default:return new Promise(function(a,s){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}function A(t){return()=>qe(`./pages/${t}.vue`)}const Ve=[{path:"/",name:"Home",component:A("HomePage")},{path:"/about",name:"About",component:A("AboutPage")},{path:"/account",name:"Account",component:A("AccountPage"),beforeEnter:V}],j=W({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:q(),routes:Ve});class Me{async getAccount(){try{const a=await y.get("/account");u.account=a.data}catch(a){v.error("HAVE YOU STARTED YOUR SERVER YET???",a)}}}const Be=new Me;class ze{static async confirm(a="Are you sure?",s="You won't be able to revert this!",i="warning",o="Yes, delete it!"){try{return!!(await E.fire({title:a,text:s,icon:i,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:o})).isConfirmed}catch{return!1}}static toast(a="Warning!",s="warning",i="top-end",o=3e3,n=!0){E.fire({title:a,icon:s,position:i,timer:o,timerProgressBar:n,toast:!0,showConfirmButton:!1})}static error(a){var s;if(a.isAxiosError){const{response:i}=a;this.toast(((s=i.data.error)==null?void 0:s.message)||i.data.message,"error")}else this.toast(a.message||a,"error")}static success(a="Success!"){this.toast(a,"success")}}const Ue={connection:"connection",connected:"connected",disconnect:"disconnect",authenticate:"authenticate",authenticated:"authenticated",userConnected:"userConnected",userDisconnected:"userDisconnected",error:"error"};class Ge{constructor(a=!1,s=T){}on(a,s){var i;return(i=this.socket)==null||i.on(a,s.bind(this)),this}onConnected(a){v.log("[SOCKET_CONNECTION]",a),this.connected=!0,this.playback()}onAuthenticated(a){v.log("[SOCKET_AUTHENTICATED]",a),this.authenticated=!0,this.playback()}authenticate(a){var s;(s=this.socket)==null||s.emit(Ue.authenticate,a)}onError(a){v.error("[SOCKET_ERROR]",a)}enqueue(a,s){v.log("[ENQUEING_ACTION]",{action:a,payload:s}),this.queue.push({action:a,payload:s})}playback(){v.log("[SOCKET_PLAYBACK]");const a=[...this.queue];this.queue=[],a.forEach(s=>{this.emit(s.action,s.payload)})}emit(a,s=void 0){if(this.requiresAuth&&!this.authenticated)return this.enqueue(a,s);if(!this.connected)return this.enqueue(a,s);this.socket.emit(a,s)}}class Ke extends Ge{constructor(){super();this.on("error",this.onError)}onError(a){ze.toast(a.message,"error")}}const I=new Ke,d=M({domain:Y,clientId:J,audience:Q,useRefreshTokens:!0,onRedirectCallback:t=>{j.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}});d.on(d.AUTH_EVENTS.AUTHENTICATED,async function(){y.defaults.headers.authorization=d.bearer,y.interceptors.request.use(Fe),u.user=d.user,await Be.getAccount(),I.authenticate(d.bearer)});async function Fe(t){if(!d.isAuthenticated)return t;const a=d.identity.exp*1e3,s=a<Date.now(),i=a<Date.now()+1e3*60*60*12;return s?await d.loginWithPopup():i&&(await d.getTokenSilently(),y.defaults.headers.authorization=d.bearer,I.authenticate(d.bearer)),t}const Ye={setup(){return{user:_(()=>u.user),account:_(()=>u.account),async login(){d.loginWithPopup()},async logout(){d.logout({returnTo:window.location.origin})}}}},O=t=>(x("data-v-f7b5cf20"),t=t(),w(),t),Je={class:"navbar-text"},Qe={key:1,class:"dropdown my-2 my-lg-0"},Xe={class:"dropdown-toggle selectable","data-bs-toggle":"dropdown","aria-expanded":"false",id:"authDropdown"},Ze={key:0},ea=["src"],aa={class:"mx-3 text-success lighten-30"},ta={class:"dropdown-menu p-0 list-group w-100","aria-labelledby":"authDropdown"},sa=O(()=>e("div",{class:"list-group-item list-group-item-action hoverable"}," Manage Account ",-1)),ia=O(()=>e("i",{class:"mdi mdi-logout"},null,-1)),oa=G(" logout "),na=[ia,oa];function la(t,a,s,i,o,n){const l=h("router-link");return c(),r("span",Je,[i.user.isAuthenticated?(c(),r("div",Qe,[e("div",Xe,[i.account.picture?(c(),r("div",Ze,[e("img",{src:i.account.picture,alt:"account photo",height:"40",class:"rounded"},null,8,ea),e("span",aa,B(i.account.name),1)])):z("",!0)]),e("div",ta,[g(l,{to:{name:"Account"}},{default:U(()=>[sa]),_:1}),e("div",{class:"list-group-item list-group-item-action hoverable text-danger",onClick:a[1]||(a[1]=(...p)=>i.logout&&i.logout(...p))},na)])])):(c(),r("button",{key:0,class:"btn selectable text-success lighten-30 text-uppercase my-2 my-lg-0",onClick:a[0]||(a[0]=(...p)=>i.login&&i.login(...p))}," Login "))])}var da=m(Ye,[["render",la],["__scopeId","data-v-f7b5cf20"]]),ca=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:da});const ra={setup(){return{page:_(()=>u.page),switchPage(t){console.log(u.page),Z.switchPage(t)}}}},C=t=>(x("data-v-6d57ec13"),t=t(),w(),t),ua={class:"window",id:"system-window","data-is-open":"data-is-closed"},pa=b('<div class="title-bar" data-v-6d57ec13><button class="close" data-v-6d57ec13><span class="hidden" data-v-6d57ec13>Close</span></button><h1 class="title" data-v-6d57ec13>Austin Dye</h1><button class="resize" data-v-6d57ec13><span class="hidden" data-v-6d57ec13>Resize</span></button></div>',1),va=C(()=>e("span",null,null,-1)),ma=C(()=>e("span",null,"https://github.com/AustinDye",-1)),fa=C(()=>e("span",null,null,-1)),_a=[va,ma,fa],ha={key:0,class:"window_pane p-0"},ga={key:1,class:"window_pane p-0"};function ba(t,a,s,i,o,n){const l=h("GitHub"),p=h("About");return c(),r("div",ua,[pa,e("div",{class:"details-bar",onClick:a[0]||(a[0]=$=>i.switchPage(2))},_a),(i.page=1)?(c(),r("div",ha,[g(l)])):(c(),r("div",ga,[g(p)]))])}var xa=m(ra,[["render",ba],["__scopeId","data-v-6d57ec13"]]),wa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:xa});function ya(t){Object.entries({"./components/About.vue":ke,"./components/Cube.vue":Te,"./components/GitHub.vue":Ne,"./components/Login.vue":ca,"./components/Windows.vue":wa}).forEach(([s,i])=>{const o=i.name||s.substr(s.lastIndexOf("/")+1).replace(/\.\w+$/,"");t.component(o,i.default)})}const L=K(ue);ya(L);L.use(j).mount("#app");export{u as A,m as _};