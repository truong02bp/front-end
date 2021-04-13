<template>
  <div>
    <b-jumbotron>
      <template v-slot:lead>
        {{ currentQuestion.question }}
      </template>

      <hr class="my-4" />
      <b-list-group
        v-for="(answer, index) in shuffleArray"
        :key="index"
        @click="selectAnswer(index)"
        :class="answerClass(index)"
      >
        <b-list-group-item>{{ index + 1 }}. {{ answer }}</b-list-group-item>
      </b-list-group>

      <b-button
        variant="primary"
        href="#"
        @click="submitAnswer"
        :disabled="answered || selectedAnswer === null"
        >Submit</b-button
      >
      <b-button variant="success" href="#" @click.prevent="next">Next</b-button>
    </b-jumbotron>
  </div>
</template>
<script>
export default {
  props: {
    currentQuestion: Object,
    next: Function,
    increment: Function,
  },
  data() {
    return {
      selectedAnswer: null,
      shuffleArray: [],
      correctIndex: null,
      answered : false
    };
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        this.selectedAnswer = null;
        this.shuffleArray = this.shuffle();
        this.correctIndex = this.shuffleArray.indexOf(
          this.currentQuestion.correct_answer
        );
        this.answered = false;
      },
    },
  },
  methods: {
    selectAnswer(index) {
      this.selectedAnswer = index;
    },
    submitAnswer() {
      let isCorrect = false;
      if (this.selectedAnswer === this.correctIndex) isCorrect = true;
      this.answered = true;
      this.selectedAnswer = null;
      this.increment(isCorrect);
    },
    answerClass(index){
      let result = '';
      if (this.selectedAnswer === index)
        result = 'selected';
      if (this.answered && index === this.correctIndex)
        result = 'correct';
      if (this.answered && index !== this.correctIndex)
        result = 'incorrect';
      return result;  
    }
    ,
    shuffle() {
      let answers = [...this.currentQuestion.incorrect_answers];
      answers.push(this.currentQuestion.correct_answer);
      let array = answers;
      const length = array == null ? 0 : array.length;
      if (!length) return {};
      let index = 0;
      const lastIndex = length - 1;
      const result = array;
      while (index < length) {
        let rand = index + Math.floor(Math.random() * (lastIndex - index+1));
        let value = result[rand];
        result[rand] = result[index];
        result[index] = value;
        index++;
      }
      return result;
    },
  },
  computed: {
    answers() {
      let answers = [...this.currentQuestion.incorrect_answers];
      answers.push(this.currentQuestion.correct_answer);
      return answers;
    },
  },
};
</script>

<style>
.list-group {
  margin-bottom: 15px;
}
.list-group-item:hover {
  cursor: pointer;
  background: pink;
}
.btn {
  margin: 0;
  margin-left: 25px;
}
.selected {
  color: blue;
  background: blue;
}
.correct {
  color: green;
}
.incorrect {
  color: red;
}
</style>