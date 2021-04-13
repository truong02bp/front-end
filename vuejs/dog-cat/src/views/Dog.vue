<template>
  <b-table striped hover :items="dogs">
    <template v-slot:cell(name)="data">
      <!-- `data.value` is the value after formatted by the Formatter -->
      <router-link :to="`/pet/dogs/${data.index}`">{{ data.value }}</router-link>
    </template>
  </b-table>
</template>

<script>
// @ is an alias to /src
import dogs from "../data/dogs";
export default {
  data() {
    return {
      dogs: dogs
    };
  }
};
</script>
