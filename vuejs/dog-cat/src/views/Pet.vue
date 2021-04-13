<template>
  <div>
    <p>{{ animal.name }}</p>
    <p>{{ animal.breed }}</p>
    <p>{{ animal.gender }}</p>
    <p>{{ animal.age }}</p>
    <p>{{ animal.color }}</p>

  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      animal: {}
    };
  },
  computed: {
    ...mapState(["cats", "dogs"])
  },
  mounted() {
    const animal = this[this.$route.params.species][this.$route.params.id];
    this.animal = animal;
  }
};
</script>
<style></style>
