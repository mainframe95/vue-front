<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <router-Link to="/login">Login </router-Link>
    <router-Link to="/register">Register </router-Link>
    <router-Link to="/">Menu </router-Link>
    <router-Link to="/list-operator">list-operator </router-Link>
    <router-Link to="/list-country">Login </router-Link>
    <a href="#" @click="logout">Logout </a>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      index: 0,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("user");
      this.$router.push('/')
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
