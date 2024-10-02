<script setup>
import { ref } from 'vue'
import { communicationManager } from './communicationManager';
import EditPreguntes from './components/editPreguntes.vue';


</script>

<template>
  <header>
    <h1>tr0-dam</h1>
  </header>
  <main>
    <EditPreguntes/>
  </main>
</template>

<style scoped>
  header {
    background-color: #333;
    color: white;
    padding: 10px;
    text-align: center;
  }

</style>
