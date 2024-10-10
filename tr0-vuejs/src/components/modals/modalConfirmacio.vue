<script setup>
const props = defineProps({
    pregunta: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div class="modal-overlay-confirm">
        <div class="modal-confirm">
            <h2>{{ pregunta }}</h2>
            <div class="modal-confirm-buttons">
                <button @click="$emit('confirm')">Confirmar</button>
                <button @click="$emit('cancel')">Cancelar</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal-overlay-confirm {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-confirm {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    width: 100%;
    text-align: center;
}

.modal-confirm h2 {
    color:black;
    margin-bottom: 20px;
    font-size: 1.5em;
}

.modal-confirm-buttons {
    display: flex;
    justify-content: space-around;
}

.modal-confirm-buttons button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    transition: background 0.3s;
}

.modal-confirm-buttons button:first-child {
    background: #4CAF50;
    color: white;
}

.modal-confirm-buttons button:first-child:hover {
    background: #3d8f41;
}

.modal-confirm-buttons button:last-child {
    background: #f44336;
    color: white;
}

.modal-confirm-buttons button:last-child:hover {
    background: #c52e2c;
}
</style>