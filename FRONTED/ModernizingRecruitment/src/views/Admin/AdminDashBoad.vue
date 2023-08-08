<script setup>
import AddJob from '../../components/AddJob.vue';
import AdminPopMenu from '../../components/AdminPopMenu.vue';
// import DeleteBook from '../components/DeleteBook.vue';
// import ModifyBooks from '../components/ModifyBooks.vue'
import ScheduleInterView from '../../components/ScheduleInterView.vue';
import AdminHomeDashboard from '../../components/AdminHomeDashboard.vue'
import ApplicactComponent from '../../components/ApplicactComponents.vue';
// import StudentsComponents from '../components/StudentsComponents.vue';
// </script>
<template>
    <div class="adminPopManageWrapper">
    <div class="menuWrapper">
    <div class="menutoggle">
        <span @click="callPop()" id="autoClick">
         <span class="material-icons" style="color:var(--color-white);font-size: 1.5rem;">more_vert</span>
         <!-- <i class="fas fa-ellipsis-v"></i> -->
        </span>
        </div>
        <div class="adminManagePop">
        <AdminPopMenu @whichPage="callPage"/>

        </div>
    </div>
    <div class="ManagemCards">
    <StudentsComponents class="students" @fromStudent="callPage"/>
    <ApplicactComponent class="applicants"/>
    <AdminHomeDashboard class="adminDashboard" @fromadmin="callPage"/>
    <AddJob class="postjob"/>
    <DeleteBook class="modifyBook" @modifyForm="callPage"/>
    <ScheduleInterView class="interviewSchedule" :book="modifyBookDetails" />
    </div>
    </div>
</template>

<script>
import $ from 'jquery'
import axios from 'axios';

export default {
        data() {
        return {
            modifyBookDetails: {},
            }
    },
    methods: {
        callPop()
        {
        $('#menuPop').slideToggle();

        },
        callPage(value,array)
        {
            if (array != null)
            {
                 this.modifyBookDetails = array;
            }
           
            let classArrary = ['postjob', 'modifyBook','interviewSchedule','adminDashboard','applicants','students'];
            for (let i = 0; i<classArrary.length; i++)
            {
                let closeClass = classArrary[i];
                $(`.${closeClass}`).slideUp();
            }

            $(`.${value}`).slideDown();

         
            
        }
       

            
    },
   
        created() {
            axios.get("/admin/auth/")
            .then((res)=>{
                

            })
            .catch((err)=>{
                this.$router.push({ name: "admin-login" });

            })
            
            
        },
        
    }
</script>

<style lang="css" scoped>

/* class list */
.postjob, .modifyBook, .applicants,.interviewSchedule,.students
{
    display: none;
}
.menuWrapper
{
    position: fixed;
    right: 0;
    z-index: 1;
    
}

.menutoggle
{
    display: flex;
    flex-direction: row-reverse;
    padding-right: 20px;
    padding-top: 1.2rem;
}
.adminManagePop
{
    position: relative;
    display: flex;
    justify-content: center;
    background-color: yellow;
    width: 100%;

}

#menuPop
{
    position: absolute;
    right: 0;
    z-index: 2;
}
.adminPopManageWrapper
{
    width: 100%;
    min-height: 100vh;
    position: relative;
    background-color: var(--color-navy);
    padding: 10px;
    padding-top:15px;
}
@media (max-width: 500px)
{
    .adminPopManageWrapper
    {
        padding-top: 30px;
    }

}

</style>