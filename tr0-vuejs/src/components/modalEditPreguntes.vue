<script>

</script>

<template>
    <div class="modal-edit-preguntes">
        <h2>Editar Pregunta</h2>
        <div>
            <label for="texto">Texto de la pregunta:</label>
            <input type="text" v-model="pregunta.texto" id="texto" />
        </div>
        <div>
            <label for="respuestas">Respuestas:</label>
            <div v-for="(respuesta, index) in pregunta.respuestas" :key="index">
                <input type="text" v-model="pregunta.respuestas[index]" />
            </div>
        </div>
        <div>
            <label for="respuesta_correcta">Respuesta Correcta:</label>
            <input type="text" v-model="pregunta.respuesta_correcta" id="respuesta_correcta" />
        </div>
        <button @click="guardarPregunta">Guardar</button>
    </div>
</template>

<style scoped>

</style>