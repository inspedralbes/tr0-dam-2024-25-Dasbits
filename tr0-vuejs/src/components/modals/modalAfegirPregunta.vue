<script setup>
import { ref } from 'vue';

const newPregunta = ref({
    id: null,
    pregunta: '',
    respostes: [
        { etiqueta: '', id: 1 },
        { etiqueta: '', id: 2 },
        { etiqueta: '', id: 3 },
        { etiqueta: '', id: 4 }
    ],
    resposta_correcta: 1,
    imatge: ''
});

</script>

<template>
    <div class="modal-edit-preguntes">
        <div class="modal-content">
            <h2>Editar Pregunta</h2>
            <div class="form-group">
                <label for="imatge">Imatge:</label>
                <input type="text" v-model="newPregunta.imatge" />
            </div>
            <div class="form-group">
                <label for="texto">Texto de la pregunta:</label>
                <input type="text" v-model="newPregunta.pregunta"/>
            </div>
            <div class="form-group">
                <label for="respostes">Respostes:</label>
                <div v-for="(respuesta, index) in newPregunta.respostes" :key="index + 'editantResposta'"
                    class="respuesta-item">
                    <input type="text" v-model="newPregunta.respostes[index].etiqueta" />
                </div>
            </div>
            <div class="form-group">
                <label for="respuesta_correcta">Respuesta Correcta:</label>
                <select v-model="newPregunta.resposta_correcta" id="respuesta_correcta">
                    <option v-for="(respuesta, index) in newPregunta.respostes"
                        :key="index + 'editantRespostaCorrecta'" :value="respuesta.id">
                        {{ respuesta.etiqueta }}
                    </option>
                </select>
            </div>
            <div class="modal-btns-editPreg">
                <!-- <button class="btn-save" @click="$emit('save')">Guardar</button> -->
                <button class="btn-save" @click="$emit('save', newPregunta)">Guardar</button>
                <button class="btn-cancel" @click="$emit('cancel')">Cancelar</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal-edit-preguntes {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    color: black;
}

.modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 400px;
    max-width: 90%;
}

h2 {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 24px;
    text-align: center;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

.form-group input[type="text"],
.form-group select {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.respuesta-item {
    margin-bottom: 10px;
}

.modal-btns-editPreg {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    gap: 20px;
}

.btn-save {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    text-align: center;
}

.btn-save:hover {
    background-color: #0056b3;
}

.btn-cancel {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #dc3545;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    text-align: center;
}
.btn-cancel:hover {
    background-color: #a71d2a;
}

</style>