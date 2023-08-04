import{T as m,d as c,o as d,e as u,b as s,u as e,w as r,F as p,Z as f,a as o,n as _,i as w,g,j as b}from"./app-633a0e1b.js";import{A as h}from"./AuthenticationCard-ec046d0b.js";import{_ as v}from"./AuthenticationCardLogo-302be81c.js";import{_ as x}from"./InputError-e117dfaa.js";import{_ as C}from"./InputLabel-85ed99ea.js";import{_ as V}from"./PrimaryButton-aeaef532.js";import{_ as k}from"./TextInput-9f00e42d.js";import"./_plugin-vue_export-helper-c27b6911.js";const y=o("div",{class:"mb-4 text-sm text-gray-600"}," Esta es un área segura de la aplicación. Por favor, confirme su contraseña antes de continuar. ",-1),$=["onSubmit"],A={class:"flex justify-end mt-4"},z={__name:"ConfirmPassword",setup(F){const a=m({password:""}),t=c(null),i=()=>{a.post(route("password.confirm"),{onFinish:()=>{a.reset(),t.value.focus()}})};return(B,n)=>(d(),u(p,null,[s(e(f),{title:"Secure Area"}),s(h,null,{logo:r(()=>[s(v)]),default:r(()=>[y,o("form",{onSubmit:b(i,["prevent"])},[o("div",null,[s(C,{for:"password",value:"Contraseña"}),s(k,{id:"password",ref_key:"passwordInput",ref:t,modelValue:e(a).password,"onUpdate:modelValue":n[0]||(n[0]=l=>e(a).password=l),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),s(x,{class:"mt-2",message:e(a).errors.password},null,8,["message"])]),o("div",A,[s(V,{class:_(["ml-4",{"opacity-25":e(a).processing}]),disabled:e(a).processing},{default:r(()=>[s(e(w),{icon:"circle-check",class:"mr-2"}),g(" Confirmar ")]),_:1},8,["class","disabled"])])],40,$)]),_:1})],64))}};export{z as default};
