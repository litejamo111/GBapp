import{u as V,r as I,a as L}from"./i18n-validators-930275f1.js";import{_ as q}from"./AppLayout-1a549d56.js";import{_ as N}from"./PrimaryButton-de7ee4e2.js";import{k as A,I as i,L as R,o as a,c as m,w as s,a as t,D as v,b as n,g as p,e as u,h as b,F as w,f as C,t as l,n as S}from"./app-1a102481.js";import{_ as T}from"./DangerButton-21c3ee21.js";import{_ as z}from"./SecondaryButton-514aa4b6.js";import{_ as P}from"./InputLabel-c163595e.js";import{a as F}from"./DialogModal-0678395e.js";import{_ as O}from"./TextInput-468b09ad.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";const U={components:{TextInput:O,DialogModal:F,InputLabel:P,SecondaryButton:z,DangerButton:T,Link:A,PrimaryButton:N,AppLayout:q},props:{states:Array},setup(){return{v$:V()}},validations(){return{modal:{form:{id:{requiredIf:I(this.modal.editMode)},name:{required:L}}}}},data(){return{table:{data:this.states},modal:{open:!1,editMode:!1,form:{id:"",name:""}}}},methods:{closeModal(){this.modal={open:!1,editMode:!1,form:{id:"",name:""}}},edit(e){this.modal={open:!0,editMode:!0,form:{id:e.id,name:e.name}}},store(){this.v$.modal.form.$touch(),this.v$.modal.form.$invalid?this.$swal({icon:"error",title:"ERROR",text:"Verifica que toda la información este correctamente diligenciada"}):axios.post(route("state.store"),this.modal.form).then(e=>{this.closeModal(),this.table.data=e.data}).catch(e=>{this.$swal({icon:"error",title:"Error",text:e.response.data})})},update(){this.v$.modal.form.$touch(),this.v$.modal.form.$invalid?this.$swal({icon:"error",title:"ERROR",text:"Verifica que toda la información este correctamente diligenciada"}):axios.put(route("state.update",this.modal.form.id),this.modal.form).then(e=>{this.closeModal(),this.table.data=e.data}).catch(e=>{this.$swal({icon:"error",title:"Error",text:e.response.data})})},destroy(e){this.$swal({icon:"question",title:"¿Eliminar registro?",text:"¡Esta acción no es reversible!",showCancelButton:!0,confirmButtonText:"¡Si, Eliminar!"}).then(d=>{d.isConfirmed&&axios.delete(route("state.destroy",e)).then(f=>{this.table.data=f.data}).catch(f=>{this.$swal({icon:"error",title:"Error",text:f.response.data})})})}}},j={class:"flex flex-row"},H=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Diseño - Estados ",-1),J={class:"py-12"},K={class:"max-w-8xl mx-6 sm:px-6 lg:px-8"},Q={class:"overflow-x-auto sm:-mx-6 lg:-mx-8"},W={class:"py-2 align-middle inline-block min-w-full"},X={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},Y={class:"min-w-full divide-y divide-gray-200"},Z=t("thead",{class:"bg-gray-50"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Nombre "),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Creado el "),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Creado por "),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Actualizado el "),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Actualizado por "),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"})])],-1),tt={class:"bg-white divide-y divide-gray-200"},et={class:"px-6 py-4 text-left text-sm font-medium"},ot={class:"px-6 py-4 text-left text-sm font-medium"},at={class:"px-6 py-4 text-left text-sm font-medium"},st={class:"px-6 py-4 text-left text-sm font-medium"},rt={class:"px-6 py-4 text-left text-sm font-medium"},it={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},nt={class:"mt-4"},lt={key:0,class:"mt-1"};function dt(e,d,f,_,r,c){const x=i("font-awesome-icon"),h=i("PrimaryButton"),k=i("SecondaryButton"),$=i("DangerButton"),B=i("InputLabel"),M=i("TextInput"),D=i("DialogModal"),E=i("AppLayout"),y=R("permission");return a(),m(E,{title:"Diseño - Estados"},{header:s(()=>[t("div",j,[H,v((a(),m(h,{type:"button",class:"ml-auto",onClick:d[0]||(d[0]=o=>r.modal.open=!0)},{default:s(()=>[n(x,{icon:"plus",class:"mr-2"}),p(" Nuevo ")]),_:1})),[[y,"design.state.create"]])])]),default:s(()=>[t("div",J,[t("div",K,[t("div",Q,[t("div",W,[t("div",X,[t("table",Y,[Z,t("tbody",tt,[r.table.data.length>0?(a(!0),u(w,{key:0},b(r.table.data,o=>(a(),u("tr",null,[t("td",et,l(o.name),1),t("td",ot,l(o.created_at),1),t("td",at,l(o.created_by.name),1),t("td",st,l(o.updated_at),1),t("td",rt,l(o.updated_by.name),1),t("td",it,[v((a(),m(k,{class:"mr-2",onClick:g=>c.edit(o)},{default:s(()=>[n(x,{icon:["far","pen-to-square"]})]),_:2},1032,["onClick"])),[[y,"report.edit"]]),v((a(),m($,{onClick:g=>c.destroy(o.id)},{default:s(()=>[n(x,{icon:["far","trash-can"]})]),_:2},1032,["onClick"])),[[y,"report.destroy"]])])]))),256)):C("",!0)])])])])])])]),n(D,{show:r.modal.open,onClose:c.closeModal},{title:s(()=>[p(l(r.modal.editMode?"Editar":"Crear"),1)]),content:s(()=>[t("div",nt,[n(B,{value:"Nombre"}),n(M,{modelValue:r.modal.form.name,"onUpdate:modelValue":d[1]||(d[1]=o=>r.modal.form.name=o),type:"text",class:S(["mt-1 block w-full",{"border-red-500":_.v$.modal.form.name.$error}]),required:"",autocomplete:"Nombre"},null,8,["modelValue","class"]),_.v$.modal.form.name.$error?(a(),u("ul",lt,[(a(!0),u(w,null,b(_.v$.modal.form.name.$errors,(o,g)=>(a(),u("li",{class:"text-red-500",key:g},l(o.$message),1))),128))])):C("",!0)])]),footer:s(()=>[n(k,{onClick:c.closeModal},{default:s(()=>[p(" Cancelar ")]),_:1},8,["onClick"]),r.modal.editMode?(a(),m(h,{key:0,class:"ml-3",onClick:c.update},{default:s(()=>[p(" Actualizar ")]),_:1},8,["onClick"])):(a(),m(h,{key:1,class:"ml-3",onClick:c.store},{default:s(()=>[p(" Guardar ")]),_:1},8,["onClick"]))]),_:1},8,["show","onClose"])]),_:1})}const vt=G(U,[["render",dt]]);export{vt as default};
