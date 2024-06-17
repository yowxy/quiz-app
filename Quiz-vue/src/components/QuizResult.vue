<script setup>
import { RouterLink } from 'vue-router';
import { defineProps } from 'vue';
const { quizLength, numberOfquestions } = defineProps([
    'quizLength',
    "numberOfquestions",
]);
</script>



<template>
    <section class="Result">
        <p>Score:</p>
        <h1>{{ numberOfquestions }}/{{ quizLength }}</h1>\
        <RouterLink to="/" class="btn-back">Go back</RouterLink>
    </section>
</template>


<style scoped>

.Result {
	text-align: center;
	padding: 100px 0;
}
.btn-back{
   color: black;
}
p {
	font-size: 25px;
}
h1 {
	font-size: 80px;
}
</style>