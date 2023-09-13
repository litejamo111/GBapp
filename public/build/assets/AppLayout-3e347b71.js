import{o as r,e as l,d as P,m as S,$ as D,O as z,n as y,a as t,f as m,t as $,j,M as E,N as R,r as w,R as T,u as a,D as _,E as A,b as s,w as o,V as q,c as h,k as L,L as I,Z as V,i as d,g as i,F as C,h as F,a0 as N}from"./app-d61cfbb0.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";const U={},H={src:"/images/logo-black.png",alt:"application-mark"};function K(c,u){return r(),l("img",H)}const Z=O(U,[["render",K]]),G={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},J={class:"flex items-center justify-between flex-wrap"},Q={class:"w-0 flex-1 flex items-center min-w-0"},W={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},X=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Y=[X],ee={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},te=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"},null,-1),se=[te],re={class:"ml-3 font-medium text-sm text-white truncate"},oe={class:"shrink-0 sm:ml-3"},ne=t("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),ae=[ne],ie={__name:"Banner",setup(c){const u=P(!0),n=S(()=>{var e;return((e=D().props.jetstream.flash)==null?void 0:e.bannerStyle)||"success"}),g=S(()=>{var e;return((e=D().props.jetstream.flash)==null?void 0:e.banner)||""});return z(g,async()=>{u.value=!0}),(e,k)=>(r(),l("div",null,[u.value&&g.value?(r(),l("div",{key:0,class:y({"bg-indigo-500":n.value=="success","bg-red-700":n.value=="danger"})},[t("div",G,[t("div",J,[t("div",Q,[t("span",{class:y(["flex p-2 rounded-lg",{"bg-indigo-600":n.value=="success","bg-red-600":n.value=="danger"}])},[n.value=="success"?(r(),l("svg",W,Y)):m("",!0),n.value=="danger"?(r(),l("svg",ee,se)):m("",!0)],2),t("p",re,$(g.value),1)]),t("div",oe,[t("button",{type:"button",class:y(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":n.value=="success","hover:bg-red-600 focus:bg-red-600":n.value=="danger"}]),"aria-label":"Dismiss",onClick:k[0]||(k[0]=j(f=>u.value=!1,["prevent"]))},ae,2)])])])],2)):m("",!0)]))}},le={class:"relative"},B={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white"]}},setup(c){const u=c;let n=P(!1);const g=f=>{n.value&&f.key==="Escape"&&(n.value=!1)};E(()=>document.addEventListener("keydown",g)),R(()=>document.removeEventListener("keydown",g));const e=S(()=>({48:"w-48"})[u.width.toString()]),k=S(()=>u.align==="left"?"origin-top-left left-0":u.align==="right"?"origin-top-right right-0":"origin-top");return(f,p)=>(r(),l("div",le,[t("div",{onClick:p[0]||(p[0]=M=>T(n)?n.value=!a(n):n=!a(n))},[w(f.$slots,"trigger")]),_(t("div",{class:"fixed inset-0 z-40",onClick:p[1]||(p[1]=M=>T(n)?n.value=!1:n=!1)},null,512),[[A,a(n)]]),s(q,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:o(()=>[_(t("div",{class:y(["absolute z-50 mt-2 rounded-md shadow-lg",[e.value,k.value]]),style:{display:"none"},onClick:p[2]||(p[2]=M=>T(n)?n.value=!1:n=!1)},[t("div",{class:y(["rounded-md ring-1 ring-black ring-opacity-5",c.contentClasses])},[w(f.$slots,"content")],2)],2),[[A,a(n)]])]),_:3})]))}},ue={key:0,type:"submit",class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},de=["href"],b={__name:"DropdownLink",props:{href:String,as:String},setup(c){return(u,n)=>(r(),l("div",null,[c.as=="button"?(r(),l("button",ue,[w(u.$slots,"default")])):c.as=="a"?(r(),l("a",{key:1,href:c.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},[w(u.$slots,"default")],8,de)):(r(),h(a(L),{key:2,href:c.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:o(()=>[w(u.$slots,"default")]),_:3},8,["href"]))]))}},x={__name:"NavLink",props:{href:String,active:Boolean},setup(c){const u=c,n=S(()=>u.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(g,e)=>(r(),h(a(L),{href:c.href,class:y(n.value)},{default:o(()=>[w(g.$slots,"default")]),_:3},8,["href","class"]))}},v={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(c){const u=c,n=S(()=>u.active?"block w-full pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-left text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(g,e)=>(r(),l("div",null,[c.as=="button"?(r(),l("button",{key:0,class:y([n.value,"w-full text-left"])},[w(g.$slots,"default")],2)):(r(),h(a(L),{key:1,href:c.href,class:y(n.value)},{default:o(()=>[w(g.$slots,"default")]),_:3},8,["href","class"]))]))}},ce={class:"min-h-screen bg-gray-100"},he={class:"bg-white border-b border-gray-100"},pe={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},fe={class:"flex justify-between h-16"},me={class:"flex"},ge={class:"shrink-0 flex items-center"},ve={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},_e={class:"relative inline-flex items-center px-1 pt-1 border-b-2 border-transparent"},ye={href:"javascript:void(0)",class:"text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"},be={class:"w-48"},we={class:"hidden sm:flex sm:items-center sm:ml-6"},ke={class:"ml-3 relative"},xe={class:"inline-flex rounded-md"},$e={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"},Ce=t("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"})],-1),Se={class:"w-60"},je=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),Me=t("div",{class:"border-t border-gray-200"},null,-1),Le=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),Te=["onSubmit"],Be={class:"flex items-center"},Pe={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},De=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Ae=[De],Fe={class:"ml-3 relative"},Ne={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},ze=["src","alt"],Ee={key:1,class:"inline-flex rounded-md"},Re={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"},qe=t("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})],-1),Ie=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Administrar cuenta ",-1),Ve=t("div",{class:"border-t border-gray-200"},null,-1),Oe=["onSubmit"],Ue={class:"-mr-2 flex items-center sm:hidden"},He={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Ke={class:"pt-2 pb-3 space-y-1"},Ze={class:"pt-4 pb-1 border-t border-gray-200"},Ge={class:"flex items-center px-4"},Je={key:0,class:"shrink-0 mr-3"},Qe=["src","alt"],We={class:"font-medium text-base text-gray-800"},Xe={class:"font-medium text-sm text-gray-500"},Ye={class:"mt-3 space-y-1"},et=["onSubmit"],tt=t("div",{class:"border-t border-gray-200"},null,-1),st=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Administrar equipo ",-1),rt=t("div",{class:"border-t border-gray-200"},null,-1),ot=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Cambiar de equipo ",-1),nt=["onSubmit"],at={class:"flex items-center"},it={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},lt=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),ut=[lt],dt={key:0,class:"bg-white shadow"},ct={class:"max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8"},ft={__name:"AppLayout",props:{title:String},setup(c){const u=P(!1),n=e=>{N.put(route("current-team.update"),{team_id:e.id},{preserveState:!1})},g=()=>{N.post(route("logout"))};return(e,k)=>{const f=I("permission");return r(),l("div",null,[s(a(V),{title:c.title},null,8,["title"]),s(ie),t("div",ce,[t("nav",he,[t("div",pe,[t("div",fe,[t("div",me,[t("div",ge,[s(a(L),{href:e.route("dashboard")},{default:o(()=>[s(Z,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),t("div",ve,[s(x,{href:e.route("dashboard"),active:e.route().current("dashboard")},{default:o(()=>[s(a(d),{icon:"house",class:"mr-2"}),i(" Dashboard ")]),_:1},8,["href","active"]),s(x,{href:e.route("report.index"),active:e.route().current("report.index")},{default:o(()=>[s(a(d),{icon:"chart-simple",class:"mr-2"}),i(" Reportes ")]),_:1},8,["href","active"]),_((r(),h(x,{href:e.route("roles.index"),active:e.route().current("roles.index")},{default:o(()=>[s(a(d),{icon:"lock",class:"mr-2"}),i(" Roles ")]),_:1},8,["href","active"])),[[f,"role.create|role.edit|role.destroy","any"]]),_((r(),h(x,{href:e.route("permissions.index"),active:e.route().current("permissions.index")},{default:o(()=>[s(a(d),{icon:"user-lock",class:"mr-2"}),i(" Permisos ")]),_:1},8,["href","active"])),[[f,"permission.create|permission.edit|permission.destroy","any"]]),_((r(),h(x,{href:e.route("users.index"),active:e.route().current("users.index")},{default:o(()=>[s(a(d),{icon:"users",class:"mr-2"}),i(" Usuarios ")]),_:1},8,["href","active"])),[[f,"user.create|user.edit|user.destroy","any"]]),_((r(),h(x,{href:e.route("import-report.index"),active:e.route().current("import-report.index")},{default:o(()=>[s(a(d),{icon:"download",class:"mr-2"}),i(" Importar reportes ")]),_:1},8,["href","active"])),[[f,"import-report"]]),_((r(),h(x,{href:e.route("filters.index"),active:e.route().current("filters.index")},{default:o(()=>[s(a(d),{icon:"filter",class:"mr-2"}),i(" Filtros ")]),_:1},8,["href","active"])),[[f,"filter.create|filter.edit|filter.destroy","any"]]),t("div",_e,[s(B,{align:"left",width:"60"},{trigger:o(()=>[t("a",ye,[s(a(d),{icon:"compass-drafting",class:"mr-2"}),i(" Diseño "),s(a(d),{icon:"chevron-down",class:"ml-2"})])]),content:o(()=>[t("div",be,[s(b,{href:e.route("request.index")},{default:o(()=>[s(a(d),{icon:"pen-ruler",class:"mr-2"}),i(" Solicitudes ")]),_:1},8,["href"]),s(b,{href:e.route("priority.index")},{default:o(()=>[s(a(d),{icon:"star",class:"mr-2"}),i(" Prioridades ")]),_:1},8,["href"]),s(b,{href:e.route("state.index")},{default:o(()=>[s(a(d),{icon:"list-ol",class:"mr-2"}),i(" Estados ")]),_:1},8,["href"]),s(b,{href:e.route("time-state.index")},{default:o(()=>[s(a(d),{icon:"clock",class:"mr-2"}),i(" Estados de tiempo ")]),_:1},8,["href"])])]),_:1})])])]),t("div",we,[t("div",ke,[e.$page.props.jetstream.hasTeamFeatures?(r(),h(B,{key:0,align:"right",width:"60"},{trigger:o(()=>[t("span",xe,[t("button",$e,[i($(e.$page.props.auth.user.current_team.name)+" ",1),Ce])])]),content:o(()=>[t("div",Se,[e.$page.props.jetstream.hasTeamFeatures?(r(),l(C,{key:0},[je,s(b,{href:e.route("teams.show",e.$page.props.auth.user.current_team)},{default:o(()=>[i(" Team Settings ")]),_:1},8,["href"]),e.$page.props.jetstream.canCreateTeams?(r(),h(b,{key:0,href:e.route("teams.create")},{default:o(()=>[i(" Create New Team ")]),_:1},8,["href"])):m("",!0),e.$page.props.auth.user.all_teams.length>1?(r(),l(C,{key:1},[Me,Le,(r(!0),l(C,null,F(e.$page.props.auth.user.all_teams,p=>(r(),l("form",{key:p.id,onSubmit:j(M=>n(p),["prevent"])},[s(b,{as:"button"},{default:o(()=>[t("div",Be,[p.id==e.$page.props.auth.user.current_team_id?(r(),l("svg",Pe,Ae)):m("",!0),t("div",null,$(p.name),1)])]),_:2},1024)],40,Te))),128))],64)):m("",!0)],64)):m("",!0)])]),_:1})):m("",!0)]),t("div",Fe,[s(B,{align:"right",width:"48"},{trigger:o(()=>[e.$page.props.jetstream.managesProfilePhotos?(r(),l("button",Ne,[t("img",{class:"h-8 w-8 rounded-full object-cover",src:e.$page.props.auth.user.profile_photo_url,alt:e.$page.props.auth.user.name},null,8,ze)])):(r(),l("span",Ee,[t("button",Re,[i($(e.$page.props.auth.user.name)+" ",1),qe])]))]),content:o(()=>[Ie,s(b,{href:e.route("profile.show")},{default:o(()=>[s(a(d),{icon:"user",class:"mr-2"}),i(" Perfil ")]),_:1},8,["href"]),e.$page.props.jetstream.hasApiFeatures?(r(),h(b,{key:0,href:e.route("api-tokens.index")},{default:o(()=>[s(a(d),{icon:"lock",class:"mr-2"}),i(" API Tokens ")]),_:1},8,["href"])):m("",!0),Ve,t("form",{onSubmit:j(g,["prevent"])},[s(b,{as:"button"},{default:o(()=>[s(a(d),{icon:"right-from-bracket",class:"mr-2"}),i(" Cerrar Sesión ")]),_:1})],40,Oe)]),_:1})])]),t("div",Ue,[t("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",onClick:k[0]||(k[0]=p=>u.value=!u.value)},[(r(),l("svg",He,[t("path",{class:y({hidden:u.value,"inline-flex":!u.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),t("path",{class:y({hidden:!u.value,"inline-flex":u.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),t("div",{class:y([{block:u.value,hidden:!u.value},"sm:hidden"])},[t("div",Ke,[s(v,{href:e.route("dashboard"),active:e.route().current("dashboard")},{default:o(()=>[s(a(d),{icon:"house",class:"mr-2"}),i(" Dashboard ")]),_:1},8,["href","active"]),s(v,{href:e.route("report.index"),active:e.route().current("report.index")},{default:o(()=>[s(a(d),{icon:"chart-simple",class:"mr-2"}),i(" Reportes ")]),_:1},8,["href","active"]),_((r(),h(v,{href:e.route("roles.index"),active:e.route().current("roles.index")},{default:o(()=>[s(a(d),{icon:"lock",class:"mr-2"}),i(" Roles ")]),_:1},8,["href","active"])),[[f,"role.create|role.edit|role.destroy","any"]]),_((r(),h(v,{href:e.route("permissions.index"),active:e.route().current("permissions.index")},{default:o(()=>[s(a(d),{icon:"user-lock",class:"mr-2"}),i(" Permisos ")]),_:1},8,["href","active"])),[[f,"permission.create|permission.edit|permission.destroy","any"]]),_((r(),h(v,{href:e.route("users.index"),active:e.route().current("users.index")},{default:o(()=>[s(a(d),{icon:"users",class:"mr-2"}),i(" Usuarios ")]),_:1},8,["href","active"])),[[f,"user.create|user.edit|user.destroy","any"]]),_((r(),h(v,{href:e.route("import-report.index"),active:e.route().current("import-report.index")},{default:o(()=>[s(a(d),{icon:"download",class:"mr-2"}),i(" Importar reportes ")]),_:1},8,["href","active"])),[[f,"import-report"]]),_((r(),h(v,{href:e.route("filters.index"),active:e.route().current("filters.index")},{default:o(()=>[s(a(d),{icon:"filter",class:"mr-2"}),i(" Filtros ")]),_:1},8,["href","active"])),[[f,"filter.create|filter.edit|filter.destroy","any"]])]),t("div",Ze,[t("div",Ge,[e.$page.props.jetstream.managesProfilePhotos?(r(),l("div",Je,[t("img",{class:"h-10 w-10 rounded-full object-cover",src:e.$page.props.auth.user.profile_photo_url,alt:e.$page.props.auth.user.name},null,8,Qe)])):m("",!0),t("div",null,[t("div",We,$(e.$page.props.auth.user.name),1),t("div",Xe,$(e.$page.props.auth.user.email),1)])]),t("div",Ye,[s(v,{href:e.route("profile.show"),active:e.route().current("profile.show")},{default:o(()=>[i(" Perfil ")]),_:1},8,["href","active"]),e.$page.props.jetstream.hasApiFeatures?(r(),h(v,{key:0,href:e.route("api-tokens.index"),active:e.route().current("api-tokens.index")},{default:o(()=>[i(" API Tokens ")]),_:1},8,["href","active"])):m("",!0),t("form",{method:"POST",onSubmit:j(g,["prevent"])},[s(v,{as:"button"},{default:o(()=>[i(" Cerrar Sesión ")]),_:1})],40,et),e.$page.props.jetstream.hasTeamFeatures?(r(),l(C,{key:1},[tt,st,s(v,{href:e.route("teams.show",e.$page.props.auth.user.current_team),active:e.route().current("teams.show")},{default:o(()=>[i(" Configuración del equipo ")]),_:1},8,["href","active"]),e.$page.props.jetstream.canCreateTeams?(r(),h(v,{key:0,href:e.route("teams.create"),active:e.route().current("teams.create")},{default:o(()=>[i(" Crear nuevo equipo ")]),_:1},8,["href","active"])):m("",!0),e.$page.props.auth.user.all_teams.length>1?(r(),l(C,{key:1},[rt,ot,(r(!0),l(C,null,F(e.$page.props.auth.user.all_teams,p=>(r(),l("form",{key:p.id,onSubmit:j(M=>n(p),["prevent"])},[s(v,{as:"button"},{default:o(()=>[t("div",at,[p.id==e.$page.props.auth.user.current_team_id?(r(),l("svg",it,ut)):m("",!0),t("div",null,$(p.name),1)])]),_:2},1024)],40,nt))),128))],64)):m("",!0)],64)):m("",!0)])])],2)]),e.$slots.header?(r(),l("header",dt,[t("div",ct,[w(e.$slots,"header")])])):m("",!0),t("main",null,[w(e.$slots,"default")])])])}}};export{ft as _};
