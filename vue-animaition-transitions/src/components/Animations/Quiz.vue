<template>
  <div class="container">
    <h2 v-text="title"></h2>
    <div class="row">
      <div class="custon-width">
        <transition name="quizAnimation" mode="out-in">
          <component @changeMode="changeMode" :is="mode"></component>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Question from "./Question.vue";
import AnswerSuccess from "./AnswerSuccess.vue";
import AnswerError from "./AnswerError.vue";

export default {
  data() {
    return {
      title: "Quiz",
      mode: "app-question"
    };
  },
  components: {
    "app-question": Question,
    AnswerError,
    AnswerSuccess
  },
  methods: {
    changeMode(mode) {
      if (mode == undefined) this.mode = "app-question";
      else this.mode = mode;
    }
  }
};
</script>

<style scoped>
.quizAnimation-leave-active {
  animation: quizAnimation-out 1.5s;
}
.quizAnimation-enter-active {
  animation: quizAnimation-in 1.5s;
}
@keyframes quizAnimation-out {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(90deg);
  }
}

@keyframes quizAnimation-in {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}

.custon-width {
  max-width: 500px;
  margin: 0 auto;
}
</style>