<script setup>
import  { ref, watch } from "vue";

import srcQuiz from "../data/quizes.json";
import QuizCard from "../components/QuizCard.vue";

const quizes = ref(srcQuiz);
const search = ref("");



watch(search, () => {
	quizes.value = srcQuiz.filter((quiz) => {
		return quiz.title.toLowerCase().includes(search.value.toLowerCase());
	});
});


</script>


<template>
  <main>
    <header>
      <h1 id="title">Quiz-vue</h1>
      <input  v-model.trim="search" id="search-input" type="text">
    </header>
    <section id="quiz-container">
      <!-- <div  v-for="quiz in quizes " :key="quiz.id" class="card">
        <img :src="quiz.img" :alt="quiz.title">

        <div class="card-body">
          <h2>{{ quiz.title }}</h2>
          <p>{{ quiz.questions.length }}  Questions</p>
        </div>
      </div> -->
      <QuizCard v-for="quiz in quizes " :key="quiz.id" :quiz="quiz" />
    </section>
  </main>
</template>



<style scoped>

main{
  max-width: 900px;
  margin: 0 auto;
}

header{
  margin-top: 30px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

#title{
  margin-right: 30px;
  font-weight: bold;
  
}

#search-input{
  border: none;
  background-color:rgb(217, 217, 217) ;
  padding: 10px;
  border-radius: 5px;
}

#quiz-container{
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}




</style>

