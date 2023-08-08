<template>
    <div>
    <div class="InterViewForm">
  
        <form @submit.prevent="submitInterview" class="interview-form">
           <h3 class="applicant">SCHEDULE INTERVIEW FOR <br>{{ $store.state.selectedCadidate.job_seeker_name }}</h3>
        <label for="applicant_id" class="form-label">Applicant ID:</label>
        <input type="text" id="applicant_id" v-model="$store.state.selectedCadidate.job_seeker_email" class="form-input" required>
  
        <label for="interview_date" class="form-label">Interview Date:</label>
        <input type="date" id="interview_date" v-model="interviewDate" class="form-input" required>
  
        <label for="interview_time" class="form-label">Interview Time:</label>
        <input type="time" id="interview_time" v-model="interviewTime" class="form-input" required>
  
        <label for="location" class="form-label">Location:</label>
        <input type="text" id="location" v-model="location" class="form-input" required>
  
        <label for="interviewers" class="form-label">Interviewers:</label>
        <input type="text" id="interviewers" v-model="interviewers" class="form-input" required>
  
        <label for="additional_info" class="form-label">Additional Information:</label>
        <textarea id="additional_info" v-model="additionalInfo" class="form-textarea"></textarea>
  
        <button type="submit" class="form-button">Schedule Interview</button>
      </form>
    
    
    </div>
   
    </div>
  </template>
  
  <script>
import axios from 'axios';
import Swal from 'sweetalert2';
export default {
  data() {
    return {
      applicantId: '',
      interviewDate: '',
      interviewTime: '',
      location: '',
      interviewers: '',
      additionalInfo: ''
    };
  },
  methods: {
    callAlert(message)
        {
            Swal.fire({
  icon: "success",
  title:"success",
  text: message,
  showConfirmButton: false,
  timer: 2000
});
        },
    submitInterview() {
        let userId=this.$store.state.selectedCadidate.job_seeker_email
      const interviewData = {
        applicant_id: userId,
        interview_date: this.interviewDate,
        interview_time: this.interviewTime,
        location: this.location,
        interviewers: this.interviewers,
        additional_info: this.additionalInfo
      };

      // Send the interview data to the server
      // using your preferred HTTP library (e.g., Axios)
       axios.post('/interviews', interviewData)
         .then(response => {
          this.callAlert("Interview for "+ userId+ "set successfully")
   
         })
         .catch(error => {
      //     // Handle the error
         });

  
    }
  }
};
</script>
  <style lang="css" scoped>
  .applicant
  {
    color: white;
    text-align: center;
    width: 100%;
  }
  form
  {
    background-color: var(--main-theme);
    padding: 10px;
    border-radius: .5rem;
  }
  .interview-form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 400px;
    margin: 0 auto;
  }
  
  .form-label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: var(--text-color-light);
  }
  
  .form-input {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
.form-textarea {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .form-button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .form-button:hover {
    background-color: #0056b3;
  }
  </style>
  