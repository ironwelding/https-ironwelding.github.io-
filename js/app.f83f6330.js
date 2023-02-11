(function(){"use strict";var e={8846:function(e,n,a){var t=a(9242),o=a(3396);function i(e,n){const a=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(a)}var r=a(89);const l={},s=(0,r.Z)(l,[["render",i]]);var c=s,u=a(5431);(0,u.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var g=a(2483),p=a(7139),d=a(4870),f=a.p+"img/logo.fc0a9f55.png",m=a.p+"img/icon-facebook.0151386c.svg",_=a.p+"img/icon-call.25784f12.svg",w=a.p+"img/icon-location.a6e30994.svg",v=a.p+"img/icon-yahoo.e3690168.svg",h=a.p+"img/icon-photos.49a53767.svg",b=a.p+"img/terrace.9b184655.jpg",k=a.p+"img/stairs.ab56e5b4.jpg",y=a.p+"img/ornamental.6b50df94.jpg",x=a.p+"img/fences.9638ab65.jpg";const z={class:"home"},j=(0,o._)("div",{class:"abstract-shape-shadow"},[(0,o._)("div",{class:"abstract-shape"})],-1),O=(0,o._)("section",{class:"logo-container"},[(0,o._)("img",{alt:"Vue logo",src:f,id:"logo"}),(0,o._)("h1",null,"Iron welding")],-1),C={class:"info"},U={class:"info-group"},F=(0,o._)("span",{class:"material-icons"},"schedule",-1),W=(0,o._)("div",{class:"info-group"},[(0,o._)("span",{class:"material-icons"},"phone"),(0,o._)("a",{href:"tel:+40750732132"},[(0,o._)("p",null,"0750 732 123")])],-1),A=(0,o._)("span",{class:"material-icons"},"location_on",-1),N={class:"language-holder"},R=(0,o._)("div",{class:"divider"},null,-1),S={class:"hero-section"},T=(0,o._)("h1",{class:"hero-title"},"IRON WELDING",-1),B={class:"hero-subtitle"},D={class:"gap-1"},H={class:"bold"},M={class:"hero--wedo"},E={class:"flx"},G=(0,o._)("span",{class:"circle"},null,-1),I=(0,o._)("span",{class:"material-icons"},"trending_flat",-1),V=(0,o._)("span",{class:"material-icons"},"trending_flat",-1),L=(0,o._)("span",{class:"material-icons"},"trending_flat",-1),q={class:"flx"},P=(0,o._)("span",{class:"circle"},null,-1),Q=(0,o._)("span",{class:"material-icons"},"trending_flat",-1),J=(0,o._)("span",{class:"material-icons"},"trending_flat",-1),K=(0,o._)("span",{class:"material-icons"},"trending_flat",-1),Z={class:"cards-container"},Y=["src"],$={class:"description"},X={class:"social-media-container"},ee=["href","target"],ne=["src"];var ae={__name:"HomeView",setup(e){let n="RO";localStorage.getItem("lang")&&(n=localStorage.getItem("lang"));const a=()=>"RO"===n,t="https://www.google.com/maps/place/Arm%C4%83tura/@46.7870017,23.5818298,15z/data=!4m16!1m9!3m8!1s0x47490ea53279393b:0x42e40dbc022a794c!2sStrada+G%C4%83rii+19,+Cluj-Napoca+400394,+Romania!3b1!8m2!3d46.7870017!4d23.5905845!10e5!16s%2Fg%2F11c2fx2b4z!3m5!1s0x47490ea57bfc7bff:0xb7da6c68e1ec322b!8m2!3d46.7870017!4d23.5905845!16s%2Fg%2F1tffy8m_",i=(0,d.iH)([{url:"https://www.facebook.com/profile.php?id=100063821432342",icon:m,background:"#9BB9B9",target:"_blank"},{url:"mailto:ironwelding2020@yahoo.com",icon:v,background:"#93B1B0",target:"_self"},{url:"tel:+40750732132",icon:_,background:"#8FABAB",target:"_self"},{url:t,icon:w,background:"#88A3A5",target:"_blank"},{url:"https://photos.google.com/share/AF1QipMJELjODHUCFAjV_l1qde2wbWHTJp6WwnQODWo4uMuKnkC_1wxv8MxjNNkGWZH0hg?key=eDhWMHNJM0FfTmR0QW1RdnRhMWpQVVl1TzVtTlFR",icon:h,background:"#7A9395",target:"_blank"}]),r=(0,d.qj)([{img:b,text:a()?"Terase & copertine":"Terraces & canopies",clasa:"top-left",route:"/category/terraces"},{img:k,text:a()?"Balustrade & scări":"Railings & stairs",clasa:"top-right",route:"/category/stairs"},{img:x,text:a()?"Porți & garduri":"Gates & fences",clasa:"bottom-left",route:"/category/fences"},{img:y,text:a()?"Confecții":"Fabrications",clasa:"bottom-right",route:"/category/confections"}]),l=()=>{window.open(t,"_blanc")},s=e=>{const a=document.querySelectorAll(".lang");a.forEach((e=>{e.classList.remove("active")})),e.target.classList.add("active"),e.target.innerText!==n&&(localStorage.setItem("lang",e.target.innerText),location.reload())};return(e,n)=>{const t=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",z,[j,(0,o._)("nav",null,[O,(0,o._)("div",C,[(0,o._)("section",null,[(0,o._)("div",U,[F,(0,o._)("p",null,(0,p.zw)(a()?"L-V":"M-F")+", 08:00 - 18:00",1)]),W]),(0,o._)("section",null,[(0,o._)("div",{class:"info-group clickable",onClick:l},[A,(0,o._)("p",null,(0,p.zw)(a()?"Strada Gării 19":"19th Gării Street")+", Cluj-Napoca, Romania",1)])])]),(0,o._)("div",N,[(0,o._)("span",{class:(0,p.C_)(["lang",a()?"":"active"]),onClick:s},"EN",2),R,(0,o._)("span",{class:(0,p.C_)(["lang",a()?"active":""]),onClick:s},"RO",2)])]),(0,o._)("div",S,[(0,o._)("section",null,[T,(0,o._)("h3",B,[(0,o._)("span",null,(0,p.zw)(a()?"pentru":"for"),1),(0,o.Uk)(" "+(0,p.zw)(a()?"noi metalul este doar o plastilină, îl modelăm cum vrem":"us the metal is just a plasticine, we model it as we want"),1)])]),(0,o._)("section",D,[(0,o._)("p",null,[(0,o.Uk)((0,p.zw)(a()?"Suntem":"We are")+" ",1),(0,o._)("span",null,(0,p.zw)(a()?"experți":"experts"),1),(0,o.Uk)(" "+(0,p.zw)(a()?"în meșteșugul metalului":"in metal craft"),1)]),(0,o._)("p",null,(0,p.zw)(a()?"Executăm confecții metalice și în străinătate":"We also carry out metal fabrications abroad"),1)]),(0,o._)("section",null,[(0,o._)("p",H,(0,p.zw)(a()?"Ne ocupăm cu:":"We deal with"),1)]),(0,o._)("section",M,[(0,o._)("section",null,[(0,o._)("p",E,[G,(0,o.Uk)(" "+(0,p.zw)(a()?"automatizări porți:":"gate automations"),1)]),(0,o._)("ul",null,[(0,o._)("li",null,[I,(0,o.Uk)(" "+(0,p.zw)(a()?"batante":"swing"),1)]),(0,o._)("li",null,[V,(0,o.Uk)(" "+(0,p.zw)(a()?"culisante":"sliding"),1)]),(0,o._)("li",null,[L,(0,o.Uk)(" "+(0,p.zw)(a()?"autoportante":"autoport"),1)])])]),(0,o._)("section",null,[(0,o._)("p",q,[P,(0,o.Uk)(" "+(0,p.zw)(a()?"sudăm piese din:":"we weld parts from"),1)]),(0,o._)("ul",null,[(0,o._)("li",null,[Q,(0,o.Uk)(" "+(0,p.zw)(a()?"inox":"stainless steel"),1)]),(0,o._)("li",null,[J,(0,o.Uk)(" "+(0,p.zw)(a()?"fier":"iron"),1)]),(0,o._)("li",null,[K,(0,o.Uk)(" "+(0,p.zw)(a()?"aluminiu":"aluminum"),1)])])])])]),(0,o._)("div",Z,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,d.SU)(r),(e=>((0,o.wg)(),(0,o.j4)(t,{key:e.clasa,to:e.route},{default:(0,o.w5)((()=>[(0,o._)("div",{class:(0,p.C_)(["categ-card",e.clasa])},[(0,o._)("img",{src:e.img},null,8,Y),(0,o._)("div",$,(0,p.zw)(e.text),1)],2)])),_:2},1032,["to"])))),128))]),(0,o._)("div",X,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,d.SU)(i),(e=>((0,o.wg)(),(0,o.iD)("a",{href:e.url,key:e.background,target:e.target},[(0,o._)("div",{class:"social-media",style:(0,p.j5)({background:e.background})},[(0,o._)("img",{src:e.icon},null,8,ne)],4)],8,ee)))),128))])])}}};const te=ae;var oe=te;const ie={class:"category-container"};function re(e,n){const a=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",ie,[(0,o._)("section",null,[(0,o._)("h1",null,"Work in progress ( "+(0,p.zw)(e.$route.params.id)+" )",1),(0,o.Wm)(a,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Go back")])),_:1})])])}const le={},se=(0,r.Z)(le,[["render",re],["__scopeId","data-v-64430e8c"]]);var ce=se;const ue=[{path:"/",name:"home",component:oe},{path:"/category/:id",name:"category",component:ce}],ge=(0,g.p7)({history:(0,g.PO)("/"),routes:ue});var pe=ge;(0,t.ri)(c).use(pe).mount("#app")}},n={};function a(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(n,t,o,i){if(!t){var r=1/0;for(u=0;u<e.length;u++){t=e[u][0],o=e[u][1],i=e[u][2];for(var l=!0,s=0;s<t.length;s++)(!1&i||r>=i)&&Object.keys(a.O).every((function(e){return a.O[e](t[s])}))?t.splice(s--,1):(l=!1,i<r&&(r=i));if(l){e.splice(u--,1);var c=o();void 0!==c&&(n=c)}}return n}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[t,o,i]}}(),function(){a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,{a:n}),n}}(),function(){a.d=function(e,n){for(var t in n)a.o(n,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,i,r=t[0],l=t[1],s=t[2],c=0;if(r.some((function(n){return 0!==e[n]}))){for(o in l)a.o(l,o)&&(a.m[o]=l[o]);if(s)var u=s(a)}for(n&&n(t);c<r.length;c++)i=r[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(u)},t=self["webpackChunkironwelding"]=self["webpackChunkironwelding"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=a.O(void 0,[998],(function(){return a(8846)}));t=a.O(t)})();
//# sourceMappingURL=app.f83f6330.js.map