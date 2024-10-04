<script setup>
import { onMounted, reactive, ref } from 'vue'
import { communicationManager } from '@/communicationManager';

import modalEditPreguntes from './modalEditPreguntes.vue';
import modalConfirmacio from './modalConfirmacio.vue';

const preguntes = ref([]);

const modals = reactive({
    editPregunta: {
        show: false,
        pregunta: null
    },
    confirmacio: {
        show: false,
        preguntaId: null
    }
});

function openModalEditPregunta(pregunta) {
    const preguntaCopy = JSON.parse(JSON.stringify(pregunta));
    modals.editPregunta.show = true;
    modals.editPregunta.pregunta = { ...preguntaCopy };
}
function closeModalEditPregunta() {
    modals.editPregunta.show = false;
}
function saveEditedPregunta() {
    // guardar pregunta editada en el array
    const index = preguntes.value.findIndex(p => p.id === modals.editPregunta.pregunta.id);
    preguntes.value[index] = modals.editPregunta.pregunta;

    // guardar update de pregunta en el servidor
    communicationManager.updatePregunta(modals.editPregunta.pregunta);
    
    closeModalEditPregunta();
}

function openModalConfirmacio(preguntaId) {
    modals.confirmacio.show = true;
    modals.confirmacio.preguntaId = preguntaId;
}
function closeModalConfirmacio() {
    modals.confirmacio.show = false;
}
function deletePregunta() {
    // eliminar pregunta del array
    preguntes.value = preguntes.value.filter(p => p.id !== modals.confirmacio.preguntaId);

    // eliminar pregunta del servidor
    communicationManager.deletePregunta(modals.confirmacio.preguntaId);

    closeModalConfirmacio();
}

onMounted(async () => {
    preguntes.value = await communicationManager.getPreguntesAdmin();
});

</script>

<template>
    <main>
        <h1>Preguntes</h1>
        <div>
            <div class="pregunta-controls">
                <button class="add-button">Afegir pregunta</button>

                <!-- buscador -->
                <input type="text" placeholder="Buscar pregunta" class="search-input" />
            </div>
            <div v-for="pregunta in preguntes" :key="'pregunta'+pregunta.id" class="pregunta-card">
                <div>
                    <img :src="pregunta.imatge" alt="imatge pregunta" />
                </div>
                <div class="pregunta-header">
                    <h2>{{ pregunta.pregunta }}</h2>
                </div>
                <div class="respostes-list">
                    <div v-for="resposta in pregunta.respostes" :key="'resposta'+resposta.id+'Pregunta'+pregunta.id" class="resposta-item">
                        <span>{{ resposta.etiqueta }}</span>
                        <svg v-if="resposta.id == pregunta.resposta_correcta" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24" width="24" height="24" class="correct-icon">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 16.2l-3.5-3.5 1.4-1.4 2.1 2.1 5.3-5.3 1.4 1.4z" fill="currentColor" />
                        </svg>
                    </div>
                </div>
                <div class="pregunta-actions">
                    <button @click="openModalEditPregunta(pregunta)" class="edit-button">Editar</button>
                    <button @click="openModalConfirmacio(pregunta.id)" class="delete-button">Eliminar</button>
                </div>
            </div>
        </div>

        <modalEditPreguntes v-if="modals.editPregunta.show" :pregunta="modals.editPregunta.pregunta" @save="saveEditedPregunta" @cancel="closeModalEditPregunta"/>
        <h1>asc1</h1>
        <modalConfirmacio v-if="modals.confirmacio.show" pregunta="Estas segur que vols eliminar la pregunta?" @confirm="deletePregunta" @cancel="closeModalConfirmacio"/>
        <h1>asc</h1>
    </main>
</template>

<style scoped>
main {
    padding: 50px;
    background-color: #131313;
    color: white;
    
}
h1 {
    text-align: center;
    margin-bottom: 24px;
    font-size: 3em;
}
.pregunta-controls{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
}
.add-button {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
    cursor: pointer;
}
.search-input{
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ddd;
    width: 200px;
}

.pregunta-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #000000;
}

.pregunta-header h2 {
    margin: 0;
    font-size: 1.5em;
    color: white;
}

.respostes-list {
    margin-top: 12px;
    color: white;
}

.resposta-item {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
}

.correct-icon {
    margin-left: 8px;
    color: green;
}

.pregunta-actions {
    margin-top: 16px;
    display: flex;
    justify-content: flex-end;
}

.edit-button, .delete-button {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
    cursor: pointer;
    margin-left: 8px;
}

.delete-button {
    background-color: #dc3545;
}

.edit-button:hover,
.delete-button:hover {
    opacity: 0.8;
}
</style>
