<template>
  <div class="col-md-12">
    <h3>Login</h3>
    <div class="card">
      <div>
        <input
          v-model="username"
          placeholder="username"
          type="text"
          name="username"
        />
      </div>
      <div>
        <input
          v-model="password"
          placeholder="password"
          type="text"
          name="username"
        />
      </div>
      <button class="btn btn-primary" @click="handleLogin">Login</button>
    </div>
  </div>
</template>

<script>
import { postlogin } from "../services/Login.service";
export default {
  name: "Login",
  data() {
    return {
      username: "junior",
      password: "junior",
    };
  },
  created() {},
  methods: {
    handleLogin() {
      postlogin({ username: this.username, password: this.password })
        .then((res) => {
          console.log("res", res.data);
          localStorage.setItem("user", JSON.stringify(res.data));
        })
        .catch((err) => {
          console.log("error", err);
        });
    },
  },
};
</script>
