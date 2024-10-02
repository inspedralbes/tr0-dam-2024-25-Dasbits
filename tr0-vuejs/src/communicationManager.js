
async function getPreguntes() {
    const response = await fetch('./preguntes.json');
    const preguntes = await response.json();
    return preguntes;
}

const communicationManager = {
    getPreguntes
}

export { communicationManager }