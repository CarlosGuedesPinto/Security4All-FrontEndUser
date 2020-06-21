<template>
  <nav class="navbar adjustNav is-fixed-top">
    <ShopCart v-show="isModalVisible" @close="closeModal"></ShopCart>
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item logo">
          <img src="../assets/img/1.png" width="161" height="28" @click="goTo('/')" />
        </a>
        <!-- BURGER -->
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarContent"
          @click="isOpen = !isOpen"
          v-bind:class="{'is-active': isOpen}"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarContent" class="navbar-menu" v-bind:class="{'is-active': isOpen}">
        <div id="navbarCenter" class="navbar-end">
          <router-link to="/security" class="navbar-item sectionLink has-text-white">Security</router-link>

          <router-link to="/catalog" class="navbar-item sectionLink has-text-white">Catalog</router-link>
          <!--  -->
          <div class="navbar-item is-hidden-mobile">
            <a class="navbar-link has-text-white" @click="showModal">
              <i class="fas fa-cart-plus" style="margin-right:5px"></i>
            </a>
          </div>

          <!--  -->

          <!-- Dropdown desktop/tablet-->
          <div class="navbar-item has-dropdown is-hoverable is-hidden-mobile" v-if="userId != 0">
            <!-- v-if="user" -->
            <a class="navbar-link has-text-white">
              <i class="fas fa-user-circle is-white" style="margin-right:5px"></i>
              {{userName}}
            </a>

            <div class="navbar-dropdown isSecondaryBGColor">
              <a class="navbar-item" v-if="userId != 0">
                <router-link tag="span" :to="{ name: 'profile', params: { _id: userId } }">Profile</router-link>
              </a>

              <a class="navbar-item" v-if="userId != 0">
                <router-link tag="span" :to="{name: 'achievements'}">Achievements</router-link>
              </a>

              <a class="navbar-item">Settings</a>
              <a class="navbar-item" v-if="userId != 0">
                <router-link tag="span" :to="{name: 'homeManager'}">Home Manager</router-link>
              </a>
              <a class="navbar-item" v-if="userId != 0">
                <router-link tag="span" :to="{name: 'ranking'}">Ranking</router-link>
              </a>
              <hr class="navbar-divider" />
              <a class="navbar-item" v-if="userId != 0" v-on:click="signOut()">Sign out</a>
            </div>
          </div>
          <!-- Mobile dropdown -->
          <a class="navbar-item sectionLink has-text-white is-hidden-tablet"></a>
          <a class="navbar-item sectionLink has-text-white is-hidden-tablet" v-if="userId != 0">
            <router-link tag="span" :to="{name: 'achievements'}">Achievements</router-link>
          </a>
          <a class="navbar-item sectionLink has-text-white is-hidden-tablet">Settings</a>
          <a class="navbar-item sectionLink has-text-white is-hidden-tablet" v-if="userId != 0">
            <router-link tag="span" :to="{ name: 'profile', params: { _id: userId } }">Profile</router-link>
          </a>

          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-info is-hidden-tablet" v-if="userId != 0">
                <span class="icon">
                  <i class="fas fa-home"></i>
                </span>
                <span>Home Manager</span>
              </a>
              <a class="button is-warning is-outlined is-hidden-tablet" @click="showModal" >
                <span class="icon">
                  <i class="fas fa-cart-plus"></i>
                </span>
                <span>Cart</span>
              </a>
              <a
                class="button buttonBorderDanger is-hidden-tablet"
                v-if="userId != 0"
                v-on:click="signOut()"
              >
                <span class="icon">
                  <i class="fas fa-sign-out-alt"></i>
                </span>
                <span>Sign Out</span>
              </a>

              <a class="button buttonBorderPrimary" v-if="userId == 0">
                <span class="icon is-hidden-tablet">
                  <i class="fas fa-sign-in-alt"></i>
                </span>
                <span>
                  <router-link tag="span" :to="{name: 'login'}">Log In</router-link>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
import ShopCart from "../components/Shopcart";
import { GetUserById } from "../API/apiProfile";
export default {
  name: "Navbar1",
  components: {
    ShopCart
  },
  data() {
    return {
      isOpen: false,
      userLogged: "",
      isModalVisible: false,
      userId: 0,
      userName: ""
    };
  },
  async mounted() {
    this.userId = JSON.parse(localStorage.getItem("user")).idUser;
    this.userName = JSON.parse(localStorage.getItem("user")).name;
    /*eslint-disable*/
    console.log(this.userId);
    var self = this;
    await GetUserById(this.userId).then(response => {
      self.userLogged = response.data.data[0];
      /*eslint-disable*/
      console.log(self.userLogged);
    });
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    signOut() {
      //this.$store.dispatch("log_out");
      this.$router.push({ name: "login" });
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      axios.defaults.headers.common["x-access-token"] = "";
      this.userLogged = "";
      this.userId = 0;
    },
    goTo(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss" scoped>
.sectionLink {
  padding-left: 20px !important;
  padding-right: 20px !important;
}

#navbarContent {
  position: relative;
}
.adjustNav {
  width: 100vx;
}
</style>