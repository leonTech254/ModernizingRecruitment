<template>
    <div>
      <div class="cardContainer">
        <div class="cardHeader">
          <h2>Add Job</h2>
        </div>
        <div class="inputs">
          <input type="text" name="" placeholder="Job Title" v-model="jobTitle">
          <input type="text" name="" placeholder="Job Location" v-model="jobLocation">
          <textarea name="" rows="5" placeholder="Job Description" v-model="jobDescription"></textarea>
          <button class="btn" @click="addJob()">Add Job</button>
        </div>
      </div>
    </div>
  </template>
  <script>
  import axios from 'axios';
  import Swal from 'sweetalert2';
  export default {
    data() {
      return {
        jobTitle: null,
        jobLocation: null,
        jobDescription: null
      };
    },
    methods: {
      addJob() {
        const data = {
          jobTitle: this.jobTitle,
          jobLocation: this.jobLocation,
          jobDescription: this.jobDescription
        };
  
        axios.post("/jobs/add", data)
          .then(() => {
            this.showAlert();
          })
          .catch((err) => {
            console.error(err);
          });
      },
      showAlert() {
        Swal.fire({
          title: "Job Added Successfully",
          html: `
            <div>
              <ul>
                <li><b>Job Title:</b> ${this.jobTitle}</li>
                <li><b>Job Location:</b> ${this.jobLocation}</li>
                <li><b>Job Description:</b> ${this.jobDescription}</li>
              </ul>
            </div>
          `,
          icon: 'success',
          confirmButtonText: 'OK',
          background: 'black',
          color: 'white'
        });
      }
    }
  };
  </script>
  
  <style lang="css" scoped>
  .cardHeader {
    height: 3.5rem;
    text-transform: uppercase;
    background-color: var(--text-color-red);
    font-weight: bold;
    border-radius: .5rem .5rem 0 0;
    display: flex;
    align-items: center;
    padding: 0 1rem;
  }
  
  .cardHeader h2 {
    font-weight: bold;
    color: white;
    margin: 0;
  }
  
  .cardContainer {
    width: 30rem;
    background-color: var(--main-theme);
    border-radius: .5rem;
    margin: auto;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .inputs {
    padding: 1rem;
  }
  
  .inputs input,
  .inputs textarea {
    display: block;
    border: 1px solid var(--text-color-red);
    
    border-radius: .25rem;
    outline: none;
    padding: .75rem;
    width: 100%;
    margin-bottom: 1rem;
    background: transparent;
    color: #ccc;
  }
*::placeholder
{
    color: #ccc;
}
  .inputs textarea {
    resize: vertical;
  }
  
  .btn {
    color: white;
    background-color: var(--text-color-red);
    border: none;
    border-radius: .25rem;
    padding: .75rem 1rem;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
  }
  
  /* mobile view */
  @media (max-width: 500px) {
    .cardContainer {
      width: 95%;
    }
  }
  </style>
  