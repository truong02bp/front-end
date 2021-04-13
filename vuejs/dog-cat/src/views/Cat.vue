<template>
  <b-table striped hover :items="cats">
    <template v-slot:cell(name)="data">
      <!-- `data.value` is the value after formatted by the Formatter -->
      <router-link :to="`/pet/cats/${data.index}`">{{ data.value }}</router-link>
    </template>
  </b-table>
</template>

<script>
// @ is an alias to /src
export default {
  computed: {
    cats() {
      return this.$store.state.cats
    }
  }
};
</script>
