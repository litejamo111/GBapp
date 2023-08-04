import{T as p,m as g,o as a,e as c,b as e,u as o,w as t,F as _,Z as h,f as v,a as i,n as x,i as b,g as s,k as l,j as y}from"./app-633a0e1b.js";import{A as k}from"./AuthenticationCard-ec046d0b.js";import{_ as w}from"./AuthenticationCardLogo-302be81c.js";import{_ as S}from"./PrimaryButton-aeaef532.js";import"./_plugin-vue_export-helper-c27b6911.js";const V=i("div",{class:"mb-4 text-sm text-gray-600"}," Antes de continuar, ¿podría verificar su dirección de correo electrónico haciendo clic en el enlace que le acabamos de enviar? Si no recibiste el correo electrónico, con gusto te enviaremos otro. ",-1),C={key:0,class:"mb-4 font-medium text-sm text-green-600"},A=["onSubmit"],E={class:"mt-4 flex items-center justify-between"},$={__name:"VerifyEmail",props:{status:String},setup(u){const d=u,r=p({}),f=()=>{r.post(route("verification.send"))},m=g(()=>d.status==="verification-link-sent");return(n,N)=>(a(),c(_,null,[e(o(h),{title:"Verificación de Email"}),e(k,null,{logo:t(()=>[e(w)]),default:t(()=>[V,m.value?(a(),c("div",C," Se ha enviado un nuevo enlace de verificación a la dirección de correo electrónico que proporcionó en la configuración de su perfil. ")):v("",!0),i("form",{onSubmit:y(f,["prevent"])},[i("div",E,[e(S,{class:x({"opacity-25":o(r).processing}),disabled:o(r).processing},{default:t(()=>[e(o(b),{icon:"circle-check",class:"mr-2"}),s(" Reenviar correo electrónico de verificación ")]),_:1},8,["class","disabled"]),i("div",null,[e(o(l),{href:n.route("profile.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:t(()=>[s(" Editar perfil")]),_:1},8,["href"]),e(o(l),{href:n.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-2"},{default:t(()=>[s(" Cerrar sesión ")]),_:1},8,["href"])])])],40,A)]),_:1})],64))}};export{$ as default};
