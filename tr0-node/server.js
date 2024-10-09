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

        console.log('Archivo JSON actualizado correctamente');

    } catch (err) {
        console.error('Error manejando el archivo JSON:', err);
    }

}


// GET PREUNTES
app.get('/preguntes', (req, res) => {
    const data = readData();
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


app.get('/', (req, res) => {
    res.send('¡Hola Mundo desde Express!');
});
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
