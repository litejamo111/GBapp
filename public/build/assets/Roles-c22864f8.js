import{_ as q}from"./AppLayout-09551333.js";import{_ as I}from"./PrimaryButton-aeaef532.js";import{_ as L}from"./SecondaryButton-736c1d10.js";import{a as A}from"./DialogModal-605fa433.js";import{_ as N}from"./TextInput-9f00e42d.js";import{_ as O}from"./InputError-e117dfaa.js";import{u as P,r as S,a as $,m as T}from"./index-9291433a.js";import{_ as z}from"./InputLabel-85ed99ea.js";import{_ as F}from"./Checkbox-f6ad087f.js";import{_ as U}from"./DangerButton-e9ba40a2.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";import{p as n,q as j,o as t,c as u,w as r,a as e,s as k,b as l,g as h,e as a,h as x,F as y,t as m,n as H,f as R}from"./app-633a0e1b.js";const J={setup(){return{v$:P()}},components:{DangerButton:U,Checkbox:F,InputLabel:z,InputError:O,TextInput:N,PrimaryButton:I,SecondaryButton:L,AppLayout:q,DialogModal:A},props:{roles:Array,permissions:Array},validations(){return{modal:{form:{id:{requiredIf:S(this.modal.editMode)},name:{required:$},permissions:{required:$,minLength:T(1)}}}}},data(){return{records:this.roles,modal:{title:"",editMode:!1,open:!1,form:{id:"",name:"",permissions:[]}}}},methods:{create(){this.modal.open=!0,this.modal.title="Crear Rol"},edit(s){this.modal={title:"Editar Rol",editMode:!0,open:!0,form:{id:s.id,name:s.name,permissions:s.permissions.map(c=>c.name)}}},store(){this.v$.modal.form.$touch(),this.v$.modal.form.$invalid?this.$swal({icon:"error",title:"ERROR",text:"Verifica que toda la información este correctamente diligenciada"}):axios.post(route("roles.store"),this.modal.form).then(s=>{this.closeModal(),this.records=s.data}).catch(s=>{this.$swal({icon:"error",title:"ERROR",text:s.response.data})})},update(){this.v$.modal.form.$touch(),this.v$.modal.form.$invalid?this.$swal({icon:"error",title:"ERROR",text:"Verifica que toda la información este correctamente diligenciada"}):axios.put(route("roles.update",this.modal.form.id),this.modal.form).then(s=>{this.closeModal(),this.records=s.data}).catch(s=>{this.$swal({icon:"error",title:"ERROR",text:s.response.data})})},destroy(s){this.$swal({icon:"question",title:"¿Eliminar Rol?",text:"¡Esta acción no es reversible!",showCancelButton:!0,confirmButtonText:"¡Si, Eliminar!"}).then(c=>{c.isConfirmed&&axios.delete(route("roles.destroy",s)).then(_=>{this.records=_.data}).catch(_=>{this.$swal({icon:"error",title:"ERROR",text:_.response.data})})})},closeModal(){this.modal={title:"",editMode:!1,open:!1,form:{id:"",name:"",permissions:[]}},this.v$.modal.form.$reset()}}},K={class:"flex flex-row"},Q=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Roles ",-1),W={class:"py-12"},X={class:"max-w-8xl mx-6 sm:px-6 lg:px-8"},Y={class:"overflow-x-auto sm:-mx-6 lg:-mx-8"},Z={class:"py-2 align-middle inline-block min-w-full"},ee={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},te={class:"min-w-full divide-y divide-gray-200"},oe=e("thead",{class:"bg-gray-50"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Nombre "),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Permisos asociados "),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Creado el "),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Actualizado el "),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"})])],-1),se={class:"bg-white divide-y divide-gray-200"},ae={class:"px-6 py-4 whitespace-nowrap text-left text-sm font-medium"},re={class:"px-6 py-4 whitespace-nowrap text-left text-sm font-medium"},ie={class:"text-xs font-semibold inline-block py-1 px-2 rounded text-indigo-600 bg-indigo-200 uppercase last:mr-0 mr-1"},ne={class:"px-6 py-4 whitespace-nowrap text-left text-sm font-medium"},le={class:"px-6 py-4 whitespace-nowrap text-left text-sm font-medium"},ce={class:"px-6 py-4 whitespace-nowrap text-center text-sm font-medium"},de={class:"mt-4"},me={key:0,class:"mt-1"},pe={class:"mt-4"},ue={class:"grid grid-cols-3 gap-5 mt-2"},_e={class:"flex items-center"},fe={class:"ml-2"},he={key:0,class:"mt-1"};function xe(s,c,_,f,d,p){const g=n("font-awesome-icon"),v=n("PrimaryButton"),b=n("SecondaryButton"),B=n("DangerButton"),C=n("InputLabel"),M=n("TextInput"),E=n("Checkbox"),D=n("DialogModal"),V=n("AppLayout"),w=j("permission");return t(),u(V,{title:"Roles"},{header:r(()=>[e("div",K,[Q,k((t(),u(v,{type:"button",class:"ml-auto",onClick:p.create},{default:r(()=>[l(g,{icon:"plus",class:"mr-2"}),h(" Crear ")]),_:1},8,["onClick"])),[[w,"role.create"]])])]),default:r(()=>[e("div",W,[e("div",X,[e("div",Y,[e("div",Z,[e("div",ee,[e("table",te,[oe,e("tbody",se,[(t(!0),a(y,null,x(d.records,o=>(t(),a("tr",null,[e("td",ae,m(o.name),1),e("td",re,[(t(!0),a(y,null,x(o.permissions,(i,ye)=>(t(),a("span",ie,m(i.name),1))),256))]),e("td",ne,m(o.created_at),1),e("td",le,m(o.updated_at),1),e("td",ce,[k((t(),u(b,{class:"mr-2",onClick:i=>p.edit(o)},{default:r(()=>[l(g,{icon:["far","pen-to-square"]})]),_:2},1032,["onClick"])),[[w,"role.edit"]]),k((t(),u(B,{onClick:i=>p.destroy(o.id)},{default:r(()=>[l(g,{icon:["far","trash-can"]})]),_:2},1032,["onClick"])),[[w,"role.destroy"]])])]))),256))])])])])])])]),l(D,{show:d.modal.open,onClose:p.closeModal},{title:r(()=>[h(m(d.modal.title),1)]),content:r(()=>[e("div",de,[l(C,{value:"Nombre"}),l(M,{modelValue:d.modal.form.name,"onUpdate:modelValue":c[0]||(c[0]=o=>d.modal.form.name=o),type:"text",class:H(["mt-1 block w-full",{"border-red-500":f.v$.modal.form.name.$error}]),required:"",autocomplete:"Nombre"},null,8,["modelValue","class"]),f.v$.modal.form.name.$error?(t(),a("ul",me,[(t(!0),a(y,null,x(f.v$.modal.form.name.$errors,(o,i)=>(t(),a("li",{class:"text-red-500",key:i},m(o.$message),1))),128))])):R("",!0)]),e("div",pe,[l(C,{value:"Permisos Disponibles"}),e("div",ue,[(t(!0),a(y,null,x(_.permissions,o=>(t(),a("div",_e,[l(E,{checked:d.modal.form.permissions,"onUpdate:checked":c[1]||(c[1]=i=>d.modal.form.permissions=i),value:o.name},null,8,["checked","value"]),e("div",fe,m(o.name),1)]))),256))]),f.v$.modal.form.permissions.$error?(t(),a("ul",he,[(t(!0),a(y,null,x(f.v$.modal.form.permissions.$errors,(o,i)=>(t(),a("li",{class:"text-red-500",key:i},m(o.$message),1))),128))])):R("",!0)])]),footer:r(()=>[l(b,{onClick:p.closeModal},{default:r(()=>[h(" Cancelar ")]),_:1},8,["onClick"]),d.modal.editMode?(t(),u(v,{key:0,class:"ml-3",onClick:p.update},{default:r(()=>[h(" Actualizar ")]),_:1},8,["onClick"])):(t(),u(v,{key:1,class:"ml-3",onClick:p.store},{default:r(()=>[h(" Guardar ")]),_:1},8,["onClick"]))]),_:1},8,["show","onClose"])]),_:1})}const Ve=G(J,[["render",xe]]);export{Ve as default};
