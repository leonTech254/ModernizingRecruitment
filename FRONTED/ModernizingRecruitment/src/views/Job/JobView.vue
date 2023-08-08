<template>
  <div>
  <ApplyJobComponent/>
    <div class="jobsWrapper">
      <titleComponent title="VENOMA PRIMARY JOB VACANCIES" />
      <div class="cardContainer">
        <div class="job-card" v-for="(job, index) in allJobs" :key="index">
            <div>
          <div class="job-card-header" @click="toggleExpand">
            <h6 class="job-title">{{ job.job_title }}</h6>
            <p class="job-date">{{ job.date_added }}</p>
          </div>
          <div class="job-card-body">
            <img
              class="job-image"
              :src="'https://resources.leonteqsecurity.com/Images/' + job.image"
              alt="Job Image"
            />
            <p class="job-description">{{ job.job_description }}</p>
            <p class="job-location">Location: {{ job.job_location }}</p>
            <div class="button"><button class="btn" @click=ApplyThis(job.job_title)>Apply</button></div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import titleComponent from "./../../components/titleComponent.vue";
import ApplyJobComponent from '../../components/ApplyJobComponent.vue'
import axios from "axios";

export default {
  components: {
    titleComponent,
    ApplyJobComponent
  },
  data() {
    return {
      allJobs: [],
      
    };
  },
  methods: {
    jobs()
    {
      axios.get("/jobs/")
      .then((res)=>{
        let jobs=res.data;
        jobs.forEach(job => {
          job["image"]="JobImage.png"
          
        });
        this.allJobs=res.data
      })
      .catch((err)=>{

      })
    },
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    },
    ApplyThis(value)
    {
        this.$store.state.jobtitle=value
        this.$store.state.applicationForm=true;
        

    }
  },
  created()
  {
    this.jobs();
  }
};
</script>

<style scoped>
.cardContainer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 5px;
  padding-top: 20px;
  gap: 0.2rem;
}

.jobsWrapper {
  padding-top: 10px;
}

.job-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 5px;
  width: 100%;
  overflow: hidden;
  transition: height 0.3s ease;
}

.job-card.expanded {
  height: auto;
}

.job-card-header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

.job-title {
  font-size: 15px;
  margin: 0;
  text-transform: uppercase;
  color: var(--main-theme);
}

.job-date {
  font-size: 16px;
  margin: 0;
}

.job-card-body {
  margin-top: 16px;
  overflow: hidden;
  transition: height 0.3s ease;
}

.job-card.expanded .job-card-body {
  height: auto;
}

.job-image {
  width: 100%;
  height: auto;
  margin-bottom: 16px;
}

.job-description {
  margin: 0;
  color: var(--text-color-red);
  font-style: italic;
  text-align: center;
}

.job-location {
  margin-top: 8px;
}

.job-card-footer {
  margin-top: 16px;
}

.job-schedule {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.job-schedule-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}

.job-registration {
  margin-top: 16px;
}

.btn {
  width: 100%;
  padding: 10px;
  background: none;
  border: none;
  background-color: green;
  cursor: pointer;
}

.btn:active {
  transform: scale(0.9);
}

/* =========================RESPONSIVENESS=================================== */
@media (max-width: 700px) {
  .cardContainer {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .cardContainer {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
