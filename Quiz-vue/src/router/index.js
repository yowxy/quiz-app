import{ createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    history:createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:'/',
            name:'Quizes',
            component: ()=> import ('../views/Quizez.vue'),
        },
        {
            path:'/quiz/:id',
            name:'quiz',
            component: ()=> import ('../views/Quiz.vue'),
        },
    ],
});

export default router;