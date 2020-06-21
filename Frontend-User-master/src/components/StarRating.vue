<template>
  <section>
    <b-rate icon-pack="fa" :value="rate" @change="$emit('update', $event)"></b-rate>
  </section>
</template>

<script>
export default {
  name: "StarRating",
  props: {
    value: {
      type: Number
    }
  },
  methods: {
    // success() {
    //   this.$buefy.toast.open({
    //     message: "Thanks for you Rate!",
    //     type: "is-success"
    //   });
    // }
  },
  data() {
    return {
      rate: 0
    };
  }
};
</script>