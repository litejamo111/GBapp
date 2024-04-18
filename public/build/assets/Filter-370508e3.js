import{_ as D}from"./AppLayout-9162b7fb.js";import{_ as w}from"./PrimaryButton-ea2b215e.js";import{_ as v}from"./TextInput-61997283.js";import{p as A,a2 as L,I as U,L as W,o,c as f,w as n,D as q,b as l,u as a,i as B,f as x,a as d,t as p,n as $,e as i,F as b,g as h,h as k}from"./app-d7ce2ef0.js";import{_ as E}from"./CustomButton-06c2a46d.js";import{_ as I}from"./SecondaryButton-628632fd.js";import{_ as y}from"./InputLabel-ee3a976e.js";import{a as z}from"./DialogModal-2bb32cbd.js";import{r as G,a as V,u as K}from"./i18n-validators-046e9475.js";const P=d("div",{class:"flex flex-row"},[d("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Filtros ")],-1),j={class:"py-10"},H={class:"max-w-8xl sm:px-4 lg:px-6"},J={class:"text-center flex flex-row"},Q={class:"mt-4"},X={key:0,class:"mt-1"},Y={class:"mt-4"},Z={key:0,class:"mt-1"},ee={class:"mt-4"},te={key:0,class:"mt-1"},oe={class:"mt-4"},re={key:0,class:"mt-1"},ae={class:"mt-4"},se={key:0,class:"mt-1"},ve={__name:"Filter",props:{filters:{type:Array,default:[]}},setup(S){const u=A({data:S.filters,columns:["actions","name","table","column","operator","values","created_at"],options:{headings:{actions:"",name:"NOMBRE",table:"TABLA",column:"COLUMNA",operator:"OPERADOR",values:"VALOR",created_at:"CREADO EL"},clientSorting:!1,uniqueKey:"id",sortable:["name","table","column","operator"]}}),e=A({open:!1,editMode:!1,title:"",form:{id:"",name:"",table:"",column:"",operator:"",values:""}}),T=A({form:{id:{requiredIf:G(e.editMode)},name:{required:V},table:{required:V},column:{required:V},operator:{required:V},values:{required:V}}}),r=K(T,L(e)),F=()=>{e.open=!0,e.title="Crear Filtro"},M=s=>{e.open=!0,e.editMode=!0,e.title="Editar Filtro",e.form={id:s.id,name:s.name,group_id:s.group_id,report_id:s.report_id,dataset_id:s.dataset_id}},C=()=>{e.open=!1,e.editMode=!1,e.title="",e.form={id:"",name:"",group_id:"",report_id:"",dataset_id:""},r.value.form.$reset()},N=()=>{r.value.form.$touch(),r.value.form.$invalid?Swal.fire({icon:"error",title:"¡Whoops!",text:"Verifica que toda la información este correctamente diligenciada",confirmButtonText:"Aceptar"}):axios.post(route("report.filter.store"),e.form).then(s=>{C(),u.data=s.data}).catch(s=>{Swal.fire({icon:"error",title:"¡Whoops!",text:s.response.data,confirmButtonText:"Aceptar"})})},O=()=>{r.value.form.$touch(),r.value.form.$invalid?Swal.fire({icon:"error",title:"¡Whoops!",text:"Verifica que toda la información este correctamente diligenciada",confirmButtonText:"Aceptar"}):axios.put(route("report.filter.update",e.form.id),e.form).then(s=>{C(),u.data=s.data}).catch(s=>{Swal.fire({icon:"error",title:"¡Whoops!",text:s.response.data,confirmButtonText:"Aceptar"})})},R=s=>{Swal.fire({icon:"question",title:"¿Eliminar Reporte?",text:"¡Esta acción no es reversible!",showCancelButton:!0,confirmButtonText:"¡Si, Eliminar!"}).then(m=>{m.isConfirmed&&axios.delete(route("report.filter.destroy",s)).then(_=>{u.data=_.data}).catch(_=>{Swal.fire({icon:"error",title:"¡Whoops!",text:_.response.data,confirmButtonText:"Aceptar"})})})};return(s,m)=>{const _=U("v-client-table"),g=W("permission");return o(),f(D,{title:"Filtros"},{header:n(()=>[P]),actions:n(()=>[q((o(),f(w,{type:"button",class:"ml-auto",onClick:F},{default:n(()=>[l(a(B),{icon:"plus",class:"mr-2"}),x(" Crear ")]),_:1})),[[g,"report.filter.store"]])]),default:n(()=>[d("div",j,[d("div",H,[l(_,{columns:u.columns,data:u.data,options:u.options,class:"overflow-y-auto"},{actions:n(({row:t})=>[d("div",J,[q((o(),f(E,{class:"mr-2",onClick:c=>M(t)},{default:n(()=>[l(a(B),{icon:["far","pen-to-square"]})]),_:2},1032,["onClick"])),[[g,"report.filter.update"]]),q((o(),f(E,{onClick:c=>R(t.id)},{default:n(()=>[l(a(B),{icon:["far","trash-can"]})]),_:2},1032,["onClick"])),[[g,"report.filter.destroy"]])])]),_:1},8,["columns","data","options"])])]),l(z,{show:e.open,onClose:C},{title:n(()=>[x(p(e.title),1)]),content:n(()=>[d("div",Q,[l(y,{value:"Nombre"}),l(v,{modelValue:e.form.name,"onUpdate:modelValue":m[0]||(m[0]=t=>e.form.name=t),type:"text",class:$(["mt-1 block w-full",{"border-red-500":a(r).form.name.$error}]),required:""},null,8,["modelValue","class"]),a(r).form.name.$error?(o(),i("ul",X,[(o(!0),i(b,null,h(a(r).form.name.$errors,(t,c)=>(o(),i("li",{class:"text-red-500",key:c},p(t.$message),1))),128))])):k("",!0)]),d("div",Y,[l(y,{value:"Tabla"}),l(v,{modelValue:e.form.table,"onUpdate:modelValue":m[1]||(m[1]=t=>e.form.table=t),type:"text",class:$(["mt-1 block w-full",{"border-red-500":a(r).form.table.$error}]),required:""},null,8,["modelValue","class"]),a(r).form.table.$error?(o(),i("ul",Z,[(o(!0),i(b,null,h(a(r).form.table.$errors,(t,c)=>(o(),i("li",{class:"text-red-500",key:c},p(t.$message),1))),128))])):k("",!0)]),d("div",ee,[l(y,{value:"Columna"}),l(v,{modelValue:e.form.column,"onUpdate:modelValue":m[2]||(m[2]=t=>e.form.column=t),type:"text",class:$(["mt-1 block w-full",{"border-red-500":a(r).form.column.$error}]),required:""},null,8,["modelValue","class"]),a(r).form.column.$error?(o(),i("ul",te,[(o(!0),i(b,null,h(a(r).form.column.$errors,(t,c)=>(o(),i("li",{class:"text-red-500",key:c},p(t.$message),1))),128))])):k("",!0)]),d("div",oe,[l(y,{value:"Operador"}),l(v,{modelValue:e.form.operator,"onUpdate:modelValue":m[3]||(m[3]=t=>e.form.operator=t),type:"text",class:$(["mt-1 block w-full",{"border-red-500":a(r).form.operator.$error}]),required:""},null,8,["modelValue","class"]),a(r).form.operator.$error?(o(),i("ul",re,[(o(!0),i(b,null,h(a(r).form.operator.$errors,(t,c)=>(o(),i("li",{class:"text-red-500",key:c},p(t.$message),1))),128))])):k("",!0)]),d("div",ae,[l(y,{value:"Valor"}),l(v,{modelValue:e.form.values,"onUpdate:modelValue":m[4]||(m[4]=t=>e.form.values=t),type:"text",class:$(["mt-1 block w-full",{"border-red-500":a(r).form.values.$error}]),required:""},null,8,["modelValue","class"]),a(r).form.values.$error?(o(),i("ul",se,[(o(!0),i(b,null,h(a(r).form.values.$errors,(t,c)=>(o(),i("li",{class:"text-red-500",key:c},p(t.$message),1))),128))])):k("",!0)])]),footer:n(()=>[l(I,{onClick:C},{default:n(()=>[x(" Cancelar ")]),_:1}),e.editMode?(o(),f(w,{key:0,class:"ml-3",onClick:O},{default:n(()=>[x(" Actualizar ")]),_:1})):(o(),f(w,{key:1,class:"ml-3",onClick:N},{default:n(()=>[x(" Guardar ")]),_:1}))]),_:1},8,["show"])]),_:1})}}};export{ve as default};
