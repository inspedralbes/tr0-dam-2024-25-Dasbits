<script setup>
import { onMounted, computed, reactive, ref } from 'vue'
import { communicationManager } from '@/communicationManager';

import modalEditPreguntes from './modals/modalEditPreguntes.vue';
import modalConfirmacio from './modals/modalConfirmacio.vue';
import modalAfegirPregunta from './modals/modalAfegirPregunta.vue';

const data = ref(null);
const preguntes = ref([]);
const searchQuery = ref('');

const modals = reactive({
    addPregunta: {
        show: false
    },
    editPregunta: {
        show: false,
        pregunta: null
    },
    confirmacio: {
        show: false,
        preguntaId: null
    }
});

function openModalAddPregunta() {
    modals.addPregunta.show = true;
}

function closeModalAddPregunta() {
    modals.addPregunta.show = false;
}

async function saveNewPregunta(newPregunta) {
    preguntes.value = await communicationManager.addPregunta(newPregunta);
    closeModalAddPregunta();
}
async function saveEditedPregunta() {
    preguntes.value = await communicationManager.updatePregunta(modals.editPregunta.pregunta);
    closeModalEditPregunta();
}
async function deletePregunta() {
    preguntes.value = await communicationManager.deletePregunta(modals.confirmacio.preguntaId);
    closeModalConfirmacio();
}

function openModalEditPregunta(pregunta) {
    const preguntaCopy = JSON.parse(JSON.stringify(pregunta));
    modals.editPregunta.show = true;
    modals.editPregunta.pregunta = { ...preguntaCopy };
}
function closeModalEditPregunta() {
    modals.editPregunta.show = false;
}
function openModalConfirmacio(preguntaId) {
    modals.confirmacio.show = true;
    modals.confirmacio.preguntaId = preguntaId;
}
function closeModalConfirmacio() {
    modals.confirmacio.show = false;
}

onMounted(async () => {
    preguntes.value = await communicationManager.getPreguntesAdmin();
});

// Computed para filtrar las preguntas basadas en el término de búsqueda
const filteredPreguntes = computed(() => {
  // Si el campo de búsqueda está vacío, devolvemos todas las preguntas
  if (!searchQuery.value.trim()) {
    return preguntes.value;
  }

  // Filtramos las preguntas si hay un término de búsqueda
  return preguntes.value.filter(pregunta =>
    pregunta.pregunta.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

</script>

<template>
    <div class="llistat-preg">
        <h1>Preguntes</h1>
        <div>
            <div class="pregunta-controls">
                <button @click="openModalAddPregunta" class="add-button">Afegir pregunta</button>

                <!-- buscador -->
                <input type="text" v-model="searchQuery" placeholder="Buscar pregunta" class="search-input" />
            </div>
            <div v-for="pregunta in filteredPreguntes" :key="'pregunta'+pregunta.id" class="pregunta-card">
                <div>
                    <img :src="pregunta.imatge" alt="imatge pregunta" />
                    <h2>{{ pregunta.imatge }}</h2>
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
        <modalConfirmacio v-if="modals.confirmacio.show" pregunta="Estas segur que vols eliminar la pregunta?" @confirm="deletePregunta" @cancel="closeModalConfirmacio"/>
        <modalAfegirPregunta v-if="modals.addPregunta.show" @save="saveNewPregunta" @cancel="closeModalAddPregunta"/>
    </div>
</template>

<style scoped>
.llistat-preg {
    margin-left: 50px;
    margin-right: 50px;
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
