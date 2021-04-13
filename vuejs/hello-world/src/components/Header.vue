<template>
  <div>
    <b-nav tabs>
      <b-nav-item disabled>Fancy quiz app</b-nav-item>
      <b-nav-item disabled>Total : {{numTotal}}/10</b-nav-item>
      <b-nav-item disabled>Correct : {{numCorrect}}</b-nav-item>
    </b-nav>
  </div>
</template>`

<script>
export default {
  props : {
    numCorrect : Number,
    numTotal : Number
  }
}
</script>

<style>

</style>
