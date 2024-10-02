<script setup>
import { onMounted, reactive, ref } from 'vue'
import { communicationManager } from '@/communicationManager';


const preguntes = ref([]);

onMounted(async () => {
    preguntes.value = await communicationManager.getPreguntesAdmin();
    console.log(preguntes.value);
});
</script>

<template>
    <h1>sadasd</h1>
    <li v-for="pregunta in preguntes" :key="pregunta.id">
        {{ pregunta.pregunta }}
    </li>
</template>

<style scoped></style>
