<script setup>
import { defineProps } from 'vue';
const { questionPage,Barpercentage } =defineProps(['questionPage','Barpercentage']);

</script>




<template>
      <header>
        <h4>Questions {{ questionPage }}</h4>
        <div class="bar">
            <div class="bar-progres" :style="{ width:Barpercentage }"></div>
        </div>
    </header>
</template>


<style scoped>

    
header{
    margin-top: 20px;
}

header h4 {
    font-size: 30px;
}

.bar{
    width: 100%;
    height: 50px;
    border: 3px solid  brown;
}

.bar-progres{
    height: 100%;
    width: 0%;
    background-color: burlywood;
}

</style>