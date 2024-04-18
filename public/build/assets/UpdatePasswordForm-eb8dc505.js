import{d as i,T as f,o as w,c as g,w as e,f as n,a as l,b as r,u as a,n as V}from"./app-d7ce2ef0.js";import{_ as v}from"./ActionMessage-0db83abe.js";import{_ as y}from"./FormSection-779481be.js";import{_ as d}from"./InputError-7e479215.js";import{_ as p}from"./InputLabel-ee3a976e.js";import{_ as b}from"./PrimaryButton-ea2b215e.js";import{_ as u}from"./TextInput-61997283.js";import"./SectionTitle-30d86500.js";const k={class:"col-span-6 sm:col-span-4"},C={class:"col-span-6 sm:col-span-4"},$={class:"col-span-6 sm:col-span-4"},T={__name:"UpdatePasswordForm",setup(P){const c=i(null),m=i(null),s=f({current_password:"",password:"",password_confirmation:""}),_=()=>{s.put(route("user-password.update"),{errorBag:"updatePassword",preserveScroll:!0,onSuccess:()=>s.reset(),onError:()=>{s.errors.password&&(s.reset("password","password_confirmation"),c.value.focus()),s.errors.current_password&&(s.reset("current_password"),m.value.focus())}})};return(x,o)=>(w(),g(y,{onSubmitted:_},{title:e(()=>[n(" Actualiza contraseña ")]),description:e(()=>[n(" Asegúrese de que su cuenta esté usando una contraseña larga y aleatoria para mantenerse seguro. ")]),form:e(()=>[l("div",k,[r(p,{for:"current_password",value:"Contraseña Actual"}),r(u,{id:"current_password",ref_key:"currentPasswordInput",ref:m,modelValue:a(s).current_password,"onUpdate:modelValue":o[0]||(o[0]=t=>a(s).current_password=t),type:"password",class:"mt-1 block w-full",autocomplete:"current-password"},null,8,["modelValue"]),r(d,{message:a(s).errors.current_password,class:"mt-2"},null,8,["message"])]),l("div",C,[r(p,{for:"password",value:"Nueva Contraseña"}),r(u,{id:"password",ref_key:"passwordInput",ref:c,modelValue:a(s).password,"onUpdate:modelValue":o[1]||(o[1]=t=>a(s).password=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),r(d,{message:a(s).errors.password,class:"mt-2"},null,8,["message"])]),l("div",$,[r(p,{for:"password_confirmation",value:"Confirmar Contraseña"}),r(u,{id:"password_confirmation",modelValue:a(s).password_confirmation,"onUpdate:modelValue":o[2]||(o[2]=t=>a(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),r(d,{message:a(s).errors.password_confirmation,class:"mt-2"},null,8,["message"])])]),actions:e(()=>[r(v,{on:a(s).recentlySuccessful,class:"mr-3"},{default:e(()=>[n(" Guardado. ")]),_:1},8,["on"]),r(b,{class:V({"opacity-25":a(s).processing}),disabled:a(s).processing},{default:e(()=>[n(" Guardar ")]),_:1},8,["class","disabled"])]),_:1}))}};export{T as default};
