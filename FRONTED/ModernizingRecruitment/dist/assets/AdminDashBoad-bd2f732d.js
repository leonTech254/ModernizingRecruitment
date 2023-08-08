import{_ as h,j as f,o as l,c as a,a as e,k as c,v as _,p as b,h as v,F as k,f as I,w as A,g as D,e as m,r as g,d as u,$}from"./index-a87ab6ab.js";import{S as y}from"./sweetalert2.all-d49f775f.js";const C={data(){return{jobTitle:null,jobLocation:null,jobDescription:null}},methods:{addJob(){const t={jobTitle:this.jobTitle,jobLocation:this.jobLocation,jobDescription:this.jobDescription};f.post("/jobs/add",t).then(()=>{this.showAlert()}).catch(o=>{console.error(o)})},showAlert(){y.fire({title:"Job Added Successfully",html:`
            <div>
              <ul>
                <li><b>Job Title:</b> ${this.jobTitle}</li>
                <li><b>Job Location:</b> ${this.jobLocation}</li>
                <li><b>Job Description:</b> ${this.jobDescription}</li>
              </ul>
            </div>
          `,icon:"success",confirmButtonText:"OK",background:"black",color:"white"})}}},S=t=>(b("data-v-fb9d0905"),t=t(),v(),t),T={class:"cardContainer"},x=S(()=>e("div",{class:"cardHeader"},[e("h2",null,"Add Job")],-1)),B={class:"inputs"};function J(t,o,i,r,n,d){return l(),a("div",null,[e("div",T,[x,e("div",B,[c(e("input",{type:"text",name:"",placeholder:"Job Title","onUpdate:modelValue":o[0]||(o[0]=s=>n.jobTitle=s)},null,512),[[_,n.jobTitle]]),c(e("input",{type:"text",name:"",placeholder:"Job Location","onUpdate:modelValue":o[1]||(o[1]=s=>n.jobLocation=s)},null,512),[[_,n.jobLocation]]),c(e("textarea",{name:"",rows:"5",placeholder:"Job Description","onUpdate:modelValue":o[2]||(o[2]=s=>n.jobDescription=s)},null,512),[[_,n.jobDescription]]),e("button",{class:"btn",onClick:o[3]||(o[3]=s=>d.addJob())},"Add Job")])])])}const P=h(C,[["render",J],["__scopeId","data-v-fb9d0905"]]);const V={data(){return{menuRoute:[{name:"Dashboard",class:"adminDashboard"}]}}},L=t=>(b("data-v-67daecfe"),t=t(),v(),t),M={class:"card-menu"},U=["onClick"],F=L(()=>e("div",{class:"menu-Item"},[e("span",{class:"material-icons"},"fast_rewind")],-1)),E=[F];function H(t,o,i,r,n,d){return l(),a("div",null,[e("div",M,[e("ul",null,[(l(!0),a(k,null,I(n.menuRoute,(s,w)=>(l(),a("li",{key:w},[e("span",{class:"item-wrapper",onClick:j=>t.$emit("whichPage",s.class)},E,8,U)]))),128))])])])}const N=h(V,[["render",H],["__scopeId","data-v-67daecfe"]]);const W={data(){return{applicantId:"",interviewDate:"",interviewTime:"",location:"",interviewers:"",additionalInfo:""}},methods:{callAlert(t){y.fire({icon:"success",title:"success",text:t,showConfirmButton:!1,timer:2e3})},submitInterview(){let t=this.$store.state.selectedCadidate.job_seeker_email;const o={applicant_id:t,interview_date:this.interviewDate,interview_time:this.interviewTime,location:this.location,interviewers:this.interviewers,additional_info:this.additionalInfo};f.post("/interviews",o).then(i=>{this.callAlert("Interview for "+t+"set successfully")}).catch(i=>{})}}},p=t=>(b("data-v-4f06edb0"),t=t(),v(),t),q={class:"InterViewForm"},R={class:"applicant"},O=p(()=>e("br",null,null,-1)),z=p(()=>e("label",{for:"applicant_id",class:"form-label"},"Applicant ID:",-1)),K=p(()=>e("label",{for:"interview_date",class:"form-label"},"Interview Date:",-1)),G=p(()=>e("label",{for:"interview_time",class:"form-label"},"Interview Time:",-1)),Q=p(()=>e("label",{for:"location",class:"form-label"},"Location:",-1)),X=p(()=>e("label",{for:"interviewers",class:"form-label"},"Interviewers:",-1)),Y=p(()=>e("label",{for:"additional_info",class:"form-label"},"Additional Information:",-1)),Z=p(()=>e("button",{type:"submit",class:"form-button"},"Schedule Interview",-1));function ee(t,o,i,r,n,d){return l(),a("div",null,[e("div",q,[e("form",{onSubmit:o[6]||(o[6]=A((...s)=>d.submitInterview&&d.submitInterview(...s),["prevent"])),class:"interview-form"},[e("h3",R,[D("SCHEDULE INTERVIEW FOR "),O,D(m(t.$store.state.selectedCadidate.job_seeker_name),1)]),z,c(e("input",{type:"text",id:"applicant_id","onUpdate:modelValue":o[0]||(o[0]=s=>t.$store.state.selectedCadidate.job_seeker_email=s),class:"form-input",required:""},null,512),[[_,t.$store.state.selectedCadidate.job_seeker_email]]),K,c(e("input",{type:"date",id:"interview_date","onUpdate:modelValue":o[1]||(o[1]=s=>n.interviewDate=s),class:"form-input",required:""},null,512),[[_,n.interviewDate]]),G,c(e("input",{type:"time",id:"interview_time","onUpdate:modelValue":o[2]||(o[2]=s=>n.interviewTime=s),class:"form-input",required:""},null,512),[[_,n.interviewTime]]),Q,c(e("input",{type:"text",id:"location","onUpdate:modelValue":o[3]||(o[3]=s=>n.location=s),class:"form-input",required:""},null,512),[[_,n.location]]),X,c(e("input",{type:"text",id:"interviewers","onUpdate:modelValue":o[4]||(o[4]=s=>n.interviewers=s),class:"form-input",required:""},null,512),[[_,n.interviewers]]),Y,c(e("textarea",{id:"additional_info","onUpdate:modelValue":o[5]||(o[5]=s=>n.additionalInfo=s),class:"form-textarea"},null,512),[[_,n.additionalInfo]]),Z],32)])])}const te=h(W,[["render",ee],["__scopeId","data-v-4f06edb0"]]);const oe={data(){return{cards:[{title:"Posted Jobs",icon:"school",class:"students"},{title:"postjob",icon:"work",class:"postjob"},{title:"Applicants",icon:"approval",class:"applicants"},{title:"schudele interview",icon:"schedule",class:"interviewSchedule"}]}}},se={class:"cardwrapper"},ne=["onClick"],ie={style:{"font-size":"4rem"},class:"material-icons"},le={class:"cardTitles"},ae=["innerHTML"];function re(t,o,i,r,n,d){return l(),a("div",null,[e("div",se,[(l(!0),a(k,null,I(n.cards,(s,w)=>(l(),a("div",{class:"card",onClick:j=>t.$emit("fromadmin",s.class)},[e("span",ie,m(s.icon),1),e("div",le,[e("span",{innerHTML:s.title},null,8,ae)])],8,ne))),256))])])}const de=h(oe,[["render",re],["__scopeId","data-v-0167ba28"]]);const ce={data(){return{applications:[]}},methods:{callAlert(t,o){y.fire({icon:t,title:t,text:o,showConfirmButton:!1,timer:2e3})},fetchApplications(){f.get("/applications").then(t=>{this.applications=t.data}).catch(t=>{console.error(t)})},approveApplication(t){f.post("/approve_application",t).then(o=>{this.$store.state.selectedCadidate=t,this.callAlert("success",` approved application for ${t.job_seeker_name}`)}).catch(o=>{this.callAlert("error"," approval failed please try again")})}},created(){this.fetchApplications()}},_e=t=>(b("data-v-402fdcff"),t=t(),v(),t),pe={class:"tableWrapper"},ue={class:"application-table"},me=_e(()=>e("thead",null,[e("tr",null,[e("th",null,"ID"),e("th",null,"Job Seeker Name"),e("th",null,"Job Seeker Email"),e("th",null,"Job Posting Name"),e("th",null,"Action")])],-1)),he={colspan:"2",class:"btnContainer"},fe=["onClick"],be=["onClick"];function ve(t,o,i,r,n,d){return l(),a("div",null,[e("div",pe,[e("table",ue,[me,e("tbody",null,[(l(!0),a(k,null,I(n.applications,s=>(l(),a("tr",{key:s.id},[e("td",null,m(s.id),1),e("td",null,m(s.job_seeker_name),1),e("td",null,m(s.job_seeker_email),1),e("td",null,m(s.job_posting_name),1),e("td",he,[e("button",{onClick:w=>d.approveApplication(s)},"Approve",8,fe),e("button",{class:"viewBtn",onClick:w=>t.resume(s)},"resume",8,be)])]))),128))])])])])}const we=h(ce,[["render",ve],["__scopeId","data-v-402fdcff"]]);const $e=t=>(b("data-v-f1a45f8c"),t=t(),v(),t),ke={class:"adminPopManageWrapper"},Ie={class:"menuWrapper"},ye={class:"menutoggle"},De=$e(()=>e("span",{class:"material-icons",style:{color:"var(--color-white)","font-size":"1.5rem"}},"more_vert",-1)),ge=[De],je={class:"adminManagePop"},Ae={class:"ManagemCards"},Ce={data(){return{modifyBookDetails:{}}},methods:{callPop(){$("#menuPop").slideToggle()},callPage(t,o){o!=null&&(this.modifyBookDetails=o);let i=["postjob","modifyBook","interviewSchedule","adminDashboard","applicants","students"];for(let r=0;r<i.length;r++){let n=i[r];$(`.${n}`).slideUp()}$(`.${t}`).slideDown()}},created(){f.get("/admin/auth/").then(t=>{}).catch(t=>{this.$router.push({name:"admin-login"})})}},Se=Object.assign(Ce,{__name:"AdminDashBoad",setup(t){return(o,i)=>{const r=g("StudentsComponents"),n=g("DeleteBook");return l(),a("div",ke,[e("div",Ie,[e("div",ye,[e("span",{onClick:i[0]||(i[0]=d=>o.callPop()),id:"autoClick"},ge)]),e("div",je,[u(N,{onWhichPage:o.callPage},null,8,["onWhichPage"])])]),e("div",Ae,[u(r,{class:"students",onFromStudent:o.callPage},null,8,["onFromStudent"]),u(we,{class:"applicants"}),u(de,{class:"adminDashboard",onFromadmin:o.callPage},null,8,["onFromadmin"]),u(P,{class:"postjob"}),u(n,{class:"modifyBook",onModifyForm:o.callPage},null,8,["onModifyForm"]),u(te,{class:"interviewSchedule",book:o.modifyBookDetails},null,8,["book"])])])}}}),Be=h(Se,[["__scopeId","data-v-f1a45f8c"]]);export{Be as default};
