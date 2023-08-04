import{T as b,o as i,e as c,b as t,u as s,w as n,F as w,Z as h,t as k,f as d,a,c as x,g as u,k as v,n as y,i as V,j as $}from"./app-633a0e1b.js";import{A as B}from"./AuthenticationCard-ec046d0b.js";import{_ as C}from"./AuthenticationCardLogo-302be81c.js";import{_ as F}from"./Checkbox-f6ad087f.js";import{_ as f}from"./InputError-e117dfaa.js";import{_ as p}from"./InputLabel-85ed99ea.js";import{_ as N}from"./PrimaryButton-aeaef532.js";import{_}from"./TextInput-9f00e42d.js";import"./_plugin-vue_export-helper-c27b6911.js";const S={key:0,class:"mb-4 font-medium text-sm text-green-600"},U=["onSubmit"],q={class:"mt-4"},A={class:"block mt-4"},I={class:"flex items-center"},R=a("span",{class:"ml-2 text-sm text-gray-600"},"Recordar",-1),j={class:"flex items-center justify-end mt-4"},G={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(m){const e=b({username:"",password:"",remember:!1}),g=()=>{e.transform(l=>({...l,remember:e.remember?"on":""})).post(route("login"),{onFinish:()=>e.reset("password")})};return(l,o)=>(i(),c(w,null,[t(s(h),{title:"Iniciar sesión"}),t(B,null,{logo:n(()=>[t(C)]),default:n(()=>[m.status?(i(),c("div",S,k(m.status),1)):d("",!0),a("form",{onSubmit:$(g,["prevent"])},[a("div",null,[t(p,{for:"username",value:"Usuario"}),t(_,{id:"email",modelValue:s(e).username,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).username=r),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),t(f,{class:"mt-2",message:s(e).errors.username},null,8,["message"])]),a("div",q,[t(p,{for:"password",value:"Contraseña"}),t(_,{id:"password",modelValue:s(e).password,"onUpdate:modelValue":o[1]||(o[1]=r=>s(e).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password"},null,8,["modelValue"]),t(f,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),a("div",A,[a("label",I,[t(F,{checked:s(e).remember,"onUpdate:checked":o[2]||(o[2]=r=>s(e).remember=r),name:"remember"},null,8,["checked"]),R])]),a("div",j,[m.canResetPassword?(i(),x(s(v),{key:0,href:l.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:n(()=>[u(" ¿Olvidaste tu contraseña? ")]),_:1},8,["href"])):d("",!0),t(N,{class:y(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:n(()=>[t(s(V),{icon:"right-to-bracket",class:"mr-2"}),u(" Iniciar sesión ")]),_:1},8,["class","disabled"])])],40,U)]),_:1})],64))}};export{G as default};
