<script setup>
import { useRouter } from 'vue-router';
import { defineProps } from 'vue';

const  { quiz }  = defineProps(["quiz"])
const router = useRouter();
// console.log(quiz);

function gotoQuiz(){
  router.push({ 
    name:'quiz', 
    params: { id:quiz.id }
  });
}

</script>



<template>

<div class="card" @click="gotoQuiz">
        <img :src="quiz.img" :alt="quiz.title">

        <div class="card-body">
          <h2>{{ quiz.title }}</h2>
          <p>{{ quiz.questions.length }} Questions</p>
        </div>
      </div>


</template>


<style scoped>


.card{
  width: 270px;
  margin-right: 30px;
  margin-left: 30px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 0 5px rgb(0,0,0,0.1);
}

.card img{
  width: 100%;
  height: 250px;
  margin: 0;
  object-fit: cover;

}


 .card-body{
  padding:0 15px;
 } 

 .card-body h2{
  font-weight: bold;

 }


</style>