<template>
    <div class="ApplyFormWrapper" v-if="$store.state.applicationForm">
        <div class="applyForm">
            <title2Component title="APPLICATION FORM"/>
            <div class="jobtitle">{{ $store.state.jobtitle }}</div>
            <span class="material-icons cancelForm" @click="cancelForm">cancel</span>
            <form @submit.prevent="submitForm" enctype="multipart/form-data">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="formData.name" required>
                <br><br>
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="formData.email" required>
                <br><br>
                <label for="resume">Resume:</label>
                <div class="fileInputWrapper">
                    <input type="file" id="resume" class="fileInput" @change="handleFileChange" required>
                    <span class="fileName">{{ formData.resume ? formData.resume.name : 'Choose file' }}</span>
                </div>
                <br><br>
                <label for="coverLetter">Cover Letter:</label>
                <textarea id="coverLetter" v-model="formData.coverLetter" required></textarea>
                <br><br>
                <button type="submit">Submit Application</button>
            </form>
        </div>
    </div>
</template>
<script>
import title2Component from './title2Component.vue';
import Swal from 'sweetalert2';
import axios from 'axios';
export default {
    components:{
        title2Component
    },
    data() {
        return {
            formData: {
                name: '',
                email: '',
                resume: null,
                coverLetter: '',
                Alertmessage:"",
                AlertType:"error"
            }
        };
    },
    methods: {
        callAlert(type,message)
        {
            Swal.fire({
  icon: type,
  title:type,
  text: message,
  showConfirmButton: false,
  timer: 2000
});
        },
        handleFileChange(event) {
            this.formData.resume = event.target.files[0];
        },
        cancelForm()
        {
            this.$store.state.applicationForm=false;
        },
        submitForm() {
           
            const formData = new FormData();
            formData.append("Jobtitle",this.$store.state.jobtitle);
            formData.append('name', this.formData.name);
            formData.append('email', this.formData.email);
            formData.append('resume', this.formData.resume);
            formData.append('coverLetter', this.formData.coverLetter);
            
          
            axios.post('/applications', formData,{  headers: {
    'Content-Type': 'multipart/form-data'
  }})
                .then(response => {
                    console.log(response.data); 
                    
                    this.callAlert("success",response.data.message);
                })
                .catch(error => {
                    this.callAlert("error","error submitting the application")
                });
        }
    }
}
</script>

<style lang="css" scoped>
.ApplyFormWrapper {
    position: fixed;
    z-index: 5;
    height: 100vh;
    width: 100vw;
    top: 0;
    background-color: var(--opacity-black);
}

.applyForm {
    min-height: 25rem;
    width: 25rem;
    margin: auto;
    margin-top: 10px;
    position:relative;
    background-color: var(--main-theme);
    border: 1px solid var(--text-color-red);
}

.applyForm form {
    padding: 20px;
}

.applyForm label {
    display: block;
    margin-bottom: 10px;
    color: var(--text-color-light);
    font-weight: bold;
}

.applyForm input[type="text"],
.applyForm input[type="email"],
.applyForm textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    color: var(--text-color-dark);
    background-color: var(--text-color-light);
    border: none;
    
}

.applyForm button[type="submit"] {
    padding: 10px 20px;
    background-color: var(--text-color-red);
    color: white;
    border: none;
    cursor: pointer;
}


.fileInputWrapper {
    position: relative;
    display: inline-block;
}

.fileInput {
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
}

.fileName {
    background-color: var(--text-color-dark);
    padding: 8px 12px;
    display: inline-block;
    cursor: pointer;
    border-radius: 4px;
}

.fileName:hover {
    background-color: #e1e1e1;
}

.cancelForm
{
    color: red !important;
    font-size: xx-large;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
}

.jobtitle
{
    color: var(--text-color-light);
    font-weight: bold;
    text-align: center;
    text-decoration: underline;
}
@media (max-width:700px)
{
.applyForm
    {
        width: 95%;

    }
}

</style>
