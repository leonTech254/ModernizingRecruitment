import{_ as p,i as c,o as u,c as m,a as s,j as d,v as l,w as _,p as h,g as f}from"./index-2ceb0d9d.js";import{S as g}from"./sweetalert2.all-3f0dc487.js";const w={data(){return{username:"",password:""}},methods:{callAlert(o){g.fire({icon:"error",title:"error",text:o,showConfirmButton:!1,timer:2e3})},login(){const o={username:this.username,password:this.password};c.post("login/",o).then(e=>{console.log("Login successful");let a=e.data.token;this.$store.commit("setToken",a),this.$router.push({name:"dashboardAdmin"})}).catch(e=>{this.callAlert(e.response.data.message)})}}},n=o=>(h("data-v-1b5e7cd6"),o=o(),f(),o),v={class:"login-container"},b=n(()=>s("h2",null,"Login",-1)),x={class:"form-group"},y=n(()=>s("label",{for:"username"},"Username",-1)),k={class:"form-group"},A=n(()=>s("label",{for:"password"},"Password",-1));function L(o,e,a,S,r,i){return u(),m("div",v,[b,s("form",null,[s("div",x,[y,d(s("input",{type:"text",id:"username","onUpdate:modelValue":e[0]||(e[0]=t=>r.username=t),placeholder:"Enter your username"},null,512),[[l,r.username]])]),s("div",k,[A,d(s("input",{type:"password",id:"password","onUpdate:modelValue":e[1]||(e[1]=t=>r.password=t),placeholder:"Enter your password"},null,512),[[l,r.password]])]),s("button",{type:"submit",onClick:e[2]||(e[2]=_((...t)=>i.login&&i.login(...t),["prevent"]))},"Login")])])}const E=p(w,[["render",L],["__scopeId","data-v-1b5e7cd6"]]);export{E as default};