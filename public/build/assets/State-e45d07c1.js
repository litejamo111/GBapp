import{u as V,r as I,a as L}from"./i18n-validators-046e9475.js";import{_ as q}from"./AppLayout-9162b7fb.js";import{_ as N}from"./PrimaryButton-ea2b215e.js";import{_ as A,k as R,I as i,L as S,o as s,c as m,w as a,D as v,b as n,f as p,a as t,e as u,g as b,t as l,F as w,h as C,n as T}from"./app-d7ce2ef0.js";import{_ as z}from"./DangerButton-7bff7d0d.js";import{_ as P}from"./SecondaryButton-628632fd.js";import{_ as F}from"./InputLabel-ee3a976e.js";import{a as O}from"./DialogModal-2bb32cbd.js";import{_ as G}from"./TextInput-61997283.js";const U={components:{TextInput:G,DialogModal:O,InputLabel:F,SecondaryButton:P,DangerButton:z,Link:R,PrimaryButton:N,AppLayout:q},props:{states:Array},setup(){return{v$:V()}},validations(){return{modal:{form:{id:{requiredIf:I(this.modal.editMode)},name:{required:L}}}}},data(){return{table:{data:this.states},modal:{open:!1,editMode:!1,form:{id:"",name:""}}}},methods:{closeModal(){this.modal={open:!1,editMode:!1,form:{id:"",name:""}}},edit(e){this.modal={open:!0,editMode:!0,form:{id:e.id,name:e.name}}},store(){this.v$.modal.form.$touch(),this.v$.modal.form.$invalid?this.$swal({icon:"error",title:"ERROR",text:"Verifica que toda la información este correctamente diligenciada"}):axios.post(route("state.store"),this.modal.form).then(e=>{this.closeModal(),this.table.data=e.data}).catch(e=>{this.$swal({icon:"error",title:"Error",text:e.response.data})})},update(){this.v$.modal.form.$touch(),this.v$.modal.form.$invalid?this.$swal({icon:"error",title:"ERROR",text:"Verifica que toda la información este correctamente diligenciada"}):axios.put(route("state.update",this.modal.form.id),this.modal.form).then(e=>{this.closeModal(),this.table.data=e.data}).catch(e=>{this.$swal({icon:"error",title:"Error",text:e.response.data})})},destroy(e){this.$swal({icon:"question",title:"¿Eliminar registro?",text:"¡Esta acción no es reversible!",showCancelButton:!0,confirmButtonText:"¡Si, Eliminar!"}).then(d=>{d.isConfirmed&&axios.delete(route("state.destroy",e)).then(f=>{this.table.data=f.data}).catch(f=>{this.$swal({icon:"error",title:"Error",text:f.response.data})})})}}},j=t("div",{class:"flex flex-row"},[t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Diseño - Estados ")],-1),H={class:"py-12"},J={class:"max-w-8xl mx-6 sm:px-6 lg:px-8"},K={class:"overflow-x-auto sm:-mx-6 lg:-mx-8"},Q={class:"py-2 align-middle inline-block min-w-full"},W={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},X={class:"min-w-full divide-y divide-gray-200"},Y=t("thead",{class:"bg-gray-50"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Nombre "),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Creado el "),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Creado por "),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Actualizado el "),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Actualizado por "),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"})])],-1),Z={class:"bg-white divide-y divide-gray-200"},tt={class:"px-6 py-4 text-left text-sm font-medium"},et={class:"px-6 py-4 text-left text-sm font-medium"},ot={class:"px-6 py-4 text-left text-sm font-medium"},at={class:"px-6 py-4 text-left text-sm font-medium"},st={class:"px-6 py-4 text-left text-sm font-medium"},rt={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},it={class:"mt-4"},nt={key:0,class:"mt-1"};function lt(e,d,f,_,r,c){const x=i("font-awesome-icon"),h=i("PrimaryButton"),k=i("SecondaryButton"),$=i("DangerButton"),B=i("InputLabel"),M=i("TextInput"),D=i("DialogModal"),E=i("AppLayout"),y=S("permission");return s(),m(E,{title:"Diseño - Estados"},{header:a(()=>[j]),actions:a(()=>[v((s(),m(h,{type:"button",class:"ml-auto",onClick:d[0]||(d[0]=o=>r.modal.open=!0)},{default:a(()=>[n(x,{icon:"plus",class:"mr-2"}),p(" Nuevo ")]),_:1})),[[y,"design.state.create"]])]),default:a(()=>[t("div",H,[t("div",J,[t("div",K,[t("div",Q,[t("div",W,[t("table",X,[Y,t("tbody",Z,[r.table.data.length>0?(s(!0),u(w,{key:0},b(r.table.data,o=>(s(),u("tr",null,[t("td",tt,l(o.name),1),t("td",et,l(o.created_at),1),t("td",ot,l(o.created_by.name),1),t("td",at,l(o.updated_at),1),t("td",st,l(o.updated_by.name),1),t("td",rt,[v((s(),m(k,{class:"mr-2",onClick:g=>c.edit(o)},{default:a(()=>[n(x,{icon:["far","pen-to-square"]})]),_:2},1032,["onClick"])),[[y,"report.edit"]]),v((s(),m($,{onClick:g=>c.destroy(o.id)},{default:a(()=>[n(x,{icon:["far","trash-can"]})]),_:2},1032,["onClick"])),[[y,"report.destroy"]])])]))),256)):C("",!0)])])])])])])]),n(D,{show:r.modal.open,onClose:c.closeModal},{title:a(()=>[p(l(r.modal.editMode?"Editar":"Crear"),1)]),content:a(()=>[t("div",it,[n(B,{value:"Nombre"}),n(M,{modelValue:r.modal.form.name,"onUpdate:modelValue":d[1]||(d[1]=o=>r.modal.form.name=o),type:"text",class:T(["mt-1 block w-full",{"border-red-500":_.v$.modal.form.name.$error}]),required:"",autocomplete:"Nombre"},null,8,["modelValue","class"]),_.v$.modal.form.name.$error?(s(),u("ul",nt,[(s(!0),u(w,null,b(_.v$.modal.form.name.$errors,(o,g)=>(s(),u("li",{class:"text-red-500",key:g},l(o.$message),1))),128))])):C("",!0)])]),footer:a(()=>[n(k,{onClick:c.closeModal},{default:a(()=>[p(" Cancelar ")]),_:1},8,["onClick"]),r.modal.editMode?(s(),m(h,{key:0,class:"ml-3",onClick:c.update},{default:a(()=>[p(" Actualizar ")]),_:1},8,["onClick"])):(s(),m(h,{key:1,class:"ml-3",onClick:c.store},{default:a(()=>[p(" Guardar ")]),_:1},8,["onClick"]))]),_:1},8,["show","onClose"])]),_:1})}const yt=A(U,[["render",lt]]);export{yt as default};
