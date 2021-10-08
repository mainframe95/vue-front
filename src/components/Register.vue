<template>
  <div class="col-md-12">
    <h3>Register</h3>
    <p class="text-danger" v-if="error !== ''">{{ error }}</p>
    <p class="text-success" v-if="success !== ''">{{ success }}</p>
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
        <input v-model="email" placeholder="email" type="text" name="email" />
      </div>
      <div>
        <input
          v-model="password"
          placeholder="password"
          type="text"
          name="username"
        />
      </div>
      <button class="btn btn-primary" @click="handleRegister">Login</button>
    </div>
  </div>
</template>

<script>
import { postRegister } from "../services/Login.service";
export default {
  name: "Register",
  data() {
    return {
      username: "junior",
      email: "junior@gmil.tg",
      password: "junior",
      error: "",
      success: "",
    };
  },
  methods: {
    handleRegister() {
      postRegister({
        username: this.username,
        password: this.password,
        email: this.email,
      })
        .then((res) => {
          console.log("res", res.data);
          this.success = "success";
          this.error = "";
        })
        .catch((err) => {
          this.success = "";
          console.log("error", err.response);
          this.error = `${err.response.data.statusCode} - ${err.response.data.message}`;
        });
      console.log("login", this.username, this.password);
    },
  },
};
</script>
