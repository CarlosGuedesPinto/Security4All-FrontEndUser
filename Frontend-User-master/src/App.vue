<template>
  <div id="app">
    <NavBar></NavBar>

    <router-view />

    <Footer></Footer>
  </div>
</template>

<script>
// Components
import axios from "axios";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  components: {
    NavBar,
    Footer
  },
  data() {
    return {
      currentRoute: ""
    };
  },
  mounted() {
    this.currentRoute = this.$router.currentRoute.name;
  },
  beforeMount() {
    let token = localStorage.getItem("token");
    if (token) {
        axios.defaults.headers.common['x-access-token'] = token
    }

  },
};
</script>

<style lang="scss">
@import "./assets/main.scss";
</style>
