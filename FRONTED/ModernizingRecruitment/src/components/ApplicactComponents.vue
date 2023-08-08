<script setup>


</script>
<template>
  <div>
    <div class="tableWrapper">
      <table class="application-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Job Seeker Name</th>
            <th>Job Seeker Email</th>
            <th>Job Posting Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="application in applications" :key="application.id">
            <td>{{ application.id }}</td>
            <td>{{ application.job_seeker_name }}</td>
            <td>{{ application.job_seeker_email }}</td>
            <td>{{ application.job_posting_name }}</td>
            <td colspan="2" class="btnContainer">
              <button @click="approveApplication(application)">Approve</button>
              <button class="viewBtn" @click="resume(application)">resume</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      applications: [],
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
    fetchApplications() {
      axios
        .get("/applications")
        .then((res) => {
          this.applications = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    approveApplication(application) {
      axios
        .post("/approve_application", application)
        .then((res) => {
            this.$store.state.selectedCadidate=application;
            this.callAlert("success",` approved application for ${application.job_seeker_name}`);

        })
        .catch((err) => {
            this.callAlert("error",` approval failed please try again`);
        });
    },
  },
  created() {
    this.fetchApplications();
  },
};
</script>
<style></style>
<style lang="css" scoped>
.tableWrapper {
  width: 98%;
  overflow: scroll;
  margin: auto;
  color: var(--text-color-light);
}
.application-table {
  width: 100%;
  border-collapse: collapse;
}

.application-table th,
.application-table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
  text-align: center;
  cursor: pointer;
}

.application-table th {
  background-color: var(--text-color-red);
  font-weight: bold;
  text-transform: uppercase;
}

.application-table tbody tr:hover {
  background-color: #ebebeb;
  color: var(--text-color-dark);
}

.application-table button {
  padding: 9px 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 0.2rem;
}

.application-table button:hover {
  background-color: var(--color-navy);
}
.application-table .viewBtn {
  background-color: var(--main-theme);
}

.btnContainer {
  display: flex;
  justify-content: space-around;
}
</style>
