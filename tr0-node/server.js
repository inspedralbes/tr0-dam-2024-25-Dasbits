const express = require('express');
const cors = require('cors');
const fs = require('fs');
const filePath = 'data.json';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3000;


// Leer el archivo JSON
function readData() {
    try {

        // Leer el archivo de manera síncrona
        const data = fs.readFileSync(filePath, 'utf8');

        // Convertir el contenido del archivo a un objeto
        return JSON.parse(data);

    } catch (err) {
        console.error('Error leyendo el archivo JSON:', err);
        return {};
    }
}
// Actualizar el archivo JSON
function updateData(data) {
    try {

        // Convertir el objeto a nuevo a JSON
        const jsonString = JSON.stringify(data, null, 2); // `null, 2` es para formatear el JSON con indentación

        // Escribir el archivo modificado de manera síncrona
        fs.writeFileSync(filePath, jsonString, 'utf8');

    } catch (err) {
        console.error('Error manejando el archivo JSON:', err);
    }

}


// GET PREUNTES
app.get('/preguntesAdmin', (req, res) => {
    const data = readData();
    res.json(data);
});

// GET PREGUNTES PARA EL JUEGO
app.get('/preguntes', (req, res) => {
    const data = readData();

    // seleccionamos 10 preguntas aleatorias
    data.preguntes = data.preguntes.sort(() => 0.5 - Math.random()).slice(0, 10);

    // quitamos la respuesta correcta
    data.preguntes.forEach(p => {
        delete p.resposta_correcta;
    });

    res.json(data);
});

//GET PREGRUNTA BY ID
app.get('/pregunta/:id', (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const pregunta = data.preguntes.find(p => p.id === id);
    res.json(pregunta);
});

// POST PREGUNTA
app.post('/pregunta', (req, res) => {
    const data = readData();
    const pregunta = req.body;

    //Asignar un id a la pregunta
    const lastId = data.preguntes.reduce((max, p) => p.id > max ? p.id : max, 0);
    pregunta.id = lastId + 1;

    data.preguntes.push(pregunta);
    updateData(data);

    res.json(data);
});

// PUT PREGUNTA
app.put('/pregunta/:id', (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const pregunta = req.body;
    const index = data.preguntes.findIndex(p => p.id === id);
    if (index !== -1) {
        data.preguntes[index] = pregunta;
        updateData(data);
    }
    res.json(data);
});

// DELETE PREGUNTA
app.delete('/pregunta/:id', (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const index = data.preguntes.findIndex(p => p.id === id);
    if (index !== -1) {
        data.preguntes.splice(index, 1);
        updateData(data);
    }
    res.json(data);
});

// GET RESPUESTAS
app.post('/respostes', (req, res) => {
    const data = readData();
    const userName = req.body.userName;
    const respostes = req.body.answers;

    var dataPuntacions = {
        "questionsInfo": []
    }

    // Calcular puntuación
    respostes.forEach(respuesta => {
        var questionInfo= {
            "questionId": respuesta.questionId,
            "correcta": false
        }
        pregunta = data.preguntes.find(p => p.id === respuesta.questionId);
        if (pregunta.resposta_correcta === respuesta.selectedAnswer) {
            questionInfo.correcta = true;
        }
        dataPuntacions.questionsInfo.push(questionInfo);
        
    });

    res.json(dataPuntacions);
});


app.get('/', (req, res) => {
    res.send('¡Hola Mundo desde Express!');
});
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
