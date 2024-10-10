const urlServer = "http://localhost:3000";

async function getPreguntesAdmin() {
    const data = await fetch(urlServer + '/preguntesAdmin');
    const dataPreguntes = await data.json();
    return dataPreguntes.preguntes;
}

async function getPreguntaAdmin(id) {
    const data = await fetch(urlServer + '/pregunta/'+id);
    const dataPregunta = await data.json();
    return dataPregunta.pregunta;
}

async function addPregunta(pregunta) {

    const data = await fetch(urlServer + '/pregunta', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pregunta)
    });
    const dataPreguntes = await data.json();
    return dataPreguntes.preguntes;
}

async function updatePregunta(pregunta) {
    const data = await fetch(urlServer + '/pregunta/'+pregunta.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pregunta)
    });
    const dataPreguntes = await data.json();
    return dataPreguntes.preguntes;
}

async function deletePregunta(id) {
    const data = await fetch(urlServer + '/pregunta/'+id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const dataPreguntes = await data.json();
    return dataPreguntes.preguntes;
}

const communicationManager = {
    getPreguntesAdmin,
    getPreguntaAdmin,
    addPregunta,
    updatePregunta,
    deletePregunta
}

export { communicationManager }