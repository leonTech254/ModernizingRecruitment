<template>
  <div class="login-container">
    <h2>Admin Login</h2>
    <form>
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          v-model="username"
          placeholder="Enter your username"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Enter your password"
        />
      </div>
      <button type="submit" @click.prevent="login">Login</button>
    </form>
  </div>
</template>
<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    callAlert(message)
        {
            Swal.fire({
  icon: "error",
  title:"error",
  text: message,
  showConfirmButton: false,
  timer: 2000
});
        },
    login() {
      // this.$store.dispatch("removeToken");
      const data = {
        username: this.username,
        password: this.password,
      };

      axios
        .post('login/', data)
        .then((response) => {
          console.log('Login successful');
          let token=response.data.token
          this.$store.commit("setToken", token);
          this.$router.push({ name: "dashboardAdmin" });
        })
        .catch((error) => {
          this.callAlert(error.response.data.message)
        });
    },
  },
};
</script>

<style lang="css" scoped>
.login-container {
  width: 20rem;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--main-theme);
  border-radius: 5px;
  margin-top: 20px;
}

h2 {
  text-align: center;
  color: var(--text-color-light);
  text-transform: uppercase;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  color: var(--text-color-light);
  text-transform: uppercase;
}

input[type="text"],
input[type="password"] {
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  padding: 10px;
  background-color: var(--text-color-red);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 650ms;
  text-transform: uppercase;
  font-weight: bold;
}

button:hover {
  background-color: var(--main-theme);
  border: 1px solid var(--text-color-red);
}

@media (max-width: 500px) {
  .login-container {
    width: 90%;
  }
}
</style>
