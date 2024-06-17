<script setup>
import QuizHeader from '@/components/QuizHeader.vue';
import QuizContent from '@/components/QuizContent.vue';
import QuizResult from '@/components/QuizResult.vue';
import { useRoute } from 'vue-router'
import quizes from '../data/quizes.json';
import { computed, ref} from 'vue';

const route = useRoute();
const quizid = parseInt(route.params.id);
const quis = quizes.find((q)=> q.id === quizid);
const numberOfquestions = ref(0);
const ShowResult = ref(false);

// console.log(quis.questions[0]);

const currentQuestionsIndex = ref(0);
// di sarankan menggunakan computed karena tidak akan mengeksekusi callback 
const questionPage = computed(()=>{
    return `${currentQuestionsIndex.value + 1} / ${quis.questions.length}`;
});

const Barpercentage = computed(()=>{
    return `${((currentQuestionsIndex.value + 1) / quis.questions.length) * 100}%`;
});
function onSelectoption (option){
    if(option.correct){
        numberOfquestions.value++;
    }

    if(currentQuestionsIndex.value === quis.questions.length -1){
        ShowResult.value = true;
        return;
    }


    currentQuestionsIndex.value++;
};
// const questionPage = ref(
    // `${currentQuestionsIndex.value + 1} / ${quis.questions.length}`
// );

// mengambil data berasal luar dari state cocok menggunkan watch

// watch(() => currentQuestionsIndex.value,() => {
//     questionPage.value = `${currentQuestionsIndex.value + 1} / ${quis.questions.length}`;
// });

</script>

<template>
    <QuizHeader :questionPage="questionPage" :Barpercentage="Barpercentage" />
    <QuizContent  v-if="!ShowResult"    :question ="quis.questions[currentQuestionsIndex]" @SelectOption="onSelectoption"/>

    <QuizResult 
    v-else
    :quizLength ="quis.questions.length"
    :numberOfquestions ="numberOfquestions"
    />
   
</template>

<style scoped>



</style> 