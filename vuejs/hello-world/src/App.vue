<template>
  <div id="app">
    <Header :numTotal="numTotal" :numCorrect="numCorrect" />
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" offset="3">
          <Quiz
            v-if="question.length"
            :currentQuestion="question[index]"
            :next="next"
            :increment="increment"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "./components/Header";
import Quiz from "./components/Quiz";

export default {
  name: "App",
  components: {
    Header,
    Quiz,
  },
  data() {
    return {
      question: [],
      index: 0,
      numTotal: 1,
      numCorrect: 0,
    };
  },
  methods: {
    next: function () {
      this.index++;
    },
    increment: function (isCorrect) {
      if (isCorrect === true) this.numCorrect++;
      this.numTotal++;
    },
  },
  mounted() {
    fetch("https://opentdb.com/api.php?amount=10&category=27", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        this.question = jsonData.results;
      });
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
