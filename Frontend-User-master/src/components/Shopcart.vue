<template>
  <div>
    <div class="box box-desktop is-hidden-mobile">
      <button class="delete" aria-label="close" @click="$emit('close')"></button>
      <span v-if="!hasSensor()">No sensors in your cart :/</span>
      <span v-if="hasSensor()">
        <i class="fas fa-shopping-cart"></i>
        Your Shopping Cart
      </span>
      <div v-for="(sensor, index) in getSensorsInCart" :key="index" class="box-item">
        <img :src="sensor.image" alt class="item-thumb" />
        <h3 class="item-name">{{ sensor.name }}</h3>
        <span class="item-amount">Choose quantity in checkout</span>
        <span class="item-price">€{{ sensor.price }}, 00</span>
      </div>
      <div class="cart-info" v-if="hasSensor()">
        <span>
          Total:
          <bold>€{{ totalPrice() }},00</bold>
        </span>
        <router-link to="/checkout">
          <router-link to="/checkout" class="button is-info is-small">Checkout</router-link>
        </router-link>
      </div>
    </div>

    <div class="box box-mobile is-hidden-tablet">
      <button class="delete" aria-label="close" @click="$emit('close')"></button>
      <span v-if="!hasSensor()">No sensors in your cart :/</span>
      <span v-if="hasSensor()">
        <i class="fas fa-shopping-cart"></i>
        Your Shopping Cart
      </span>
      <div v-for="(sensor, index) in getSensorsInCart" :key="index" class="box-item">
        <img :src="sensor.image" alt class="item-thumb" />
        <h3 class="item-name">{{ sensor.name }}</h3>
        <span class="item-amount">Choose quantity in checkout</span>
        <span class="item-price">€{{ sensor.price }}, 00</span>
      </div>
      <div class="cart-info" v-if="hasSensor()">
        <span>
          Total:
          <bold>€{{ totalPrice() }},00</bold>
        </span>
        <router-link to="/checkout">
          <router-link to="/checkout" class="button is-info is-small">Checkout</router-link>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "shopcart",
  data() {
    return {
      items: [
        {
          id: 1,
          image: "./img/motion_sensor.png",
          name: "Motion Sensor",
          price: 10.0,
          amount: "1"
        }
      ]
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    hasSensor() {
      return this.getSensorsInCart.length > 0;
    },
    totalPrice() {
      return this.getSensorsInCart.reduce(
        (current, next) => current + next.price,
        0
      );
    },
    showCart() {
      // this.showOrHiddenCart();
    }
  },
  computed: {
    ...mapGetters(["getSensorsInCart"])
  }
};
</script>

<style lang="scss" scoped>
.box-desktop {
  width: 400px;
  height: auto;
  background-color: #e7e7e7;
  box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
  border-radius: 5px;
  box-sizing: border-box;
  position: absolute !important;
  z-index: 1;
  // padding: ;
  top: 80px;
  right: 150px;
}

.box-mobile {
  width: 400px;
  height: auto;
  background-color: #e7e7e7;
  box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
  border-radius: 5px;
  box-sizing: border-box;
  position: absolute !important;
  z-index: 5;
  // padding: ;
  top: 200px;
  left: 20px;
  max-width: 80%;
}

// .box:after {
//   content: "";
//   width: 30px;
//   height: 30px;
//   transform: rotate(45deg);
//   background: inherit;
//   position: absolute;
//   top: -15px;
//   right: 15px;
// }

.box-item {
  width: 100%;
  height: 130px;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 3px;
  padding: 0 0.5em;
  margin-top: 0.6em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}

.item-thumb {
  width: 6rem;
  max-height: 1500px !important;
  height: 6rem;
  grid-column: 1/2;
  grid-row: 1/4;
  align-self: center;
}

.item-name {
  font-weight: bold !important;
  grid-column: 2/4;
  grid-row: 2/4;
  font-weight: normal;
  padding-left: 10px;
}

.item-amount {
  grid-column: 2/3;
  grid-row: 3/4;
  color: rgb(23, 33, 90);
  font-size: 12px;
  float: right;
  font-size: 10px;
  padding-left: 10px;
}

.item-price {
  grid-column: 4/4;
  grid-row: 3/4;
  padding-right: 10px;
}

.item-remove {
  width: 9%;
  border: none;
}

button {
  grid-column: 4/4;
  grid-row: 1/4;
  margin-left: 40px;
}

.cart-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.delete {
  display: block;
  float: right;
  margin-top: 5px;
  margin-bottom: 10px;
}
</style>