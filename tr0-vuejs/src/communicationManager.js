const preguntes = [
    {
        "id": 1,
        "pregunta": "Quina marca de cotxes utilitza el lema 'Ultimate Driving Machine'?",
        "respostes": [
            {
                "id": 1,
                "etiqueta": "BMW"
            },
            {
                "id": 2,
                "etiqueta": "Mercedes-Benz"
            },
            {
                "id": 3,
                "etiqueta": "Audi"
            },
            {
                "id": 4,
                "etiqueta": "Lexus"
            }
        ],
        "resposta_correcta": 1,
        "imatge": "https://exemple.com/bmw.jpg"
    },
    {
        "id": 2,
        "pregunta": "Quin és el límit de velocitat en una zona escolar?",
        "respostes": [
            {
                "id": 1,
                "etiqueta": "30 km/h"
            },
            {
                "id": 2,
                "etiqueta": "40 km/h"
            },
            {
                "id": 3,
                "etiqueta": "50 km/h"
            },
            {
                "id": 4,
                "etiqueta": "60 km/h"
            }
        ],
        "resposta_correcta": 1,
        "imatge": "https://exemple.com/zona_escolar.jpg"
    },
    {
        "id": 3,
        "pregunta": "Què significa un senyal de trànsit amb un triangle vermell i un signe d'exclamació?",
        "respostes": [
            {
                "id": 1,
                "etiqueta": "Prohibit estacionar"
            },
            {
                "id": 2,
                "etiqueta": "Perill"
            },
            {
                "id": 3,
                "etiqueta": "Stop"
            },
            {
                "id": 4,
                "etiqueta": "Cediu el pas"
            }
        ],
        "resposta_correcta": 2,
        "imatge": "https://exemple.com/perill.jpg"
    },
    {
        "id": 4,
        "pregunta": "Quina és la distància mínima de seguretat entre vehicles en una carretera?",
        "respostes": [
            {
                "id": 1,
                "etiqueta": "10 metres"
            },
            {
                "id": 2,
                "etiqueta": "20 metres"
            },
            {
                "id": 3,
                "etiqueta": "50 metres"
            },
            {
                "id": 4,
                "etiqueta": "100 metres"
            }
        ],
        "resposta_correcta": 3,
        "imatge": "https://exemple.com/distancia.jpg"
    },
    {
        "id": 5,
        "pregunta": "Què significa un senyal de trànsit amb un cercle vermell i una línia diagonal?",
        "respostes": [
            {
                "id": 1,
                "etiqueta": "Prohibit estacionar"
            },
            {
                "id": 2,
                "etiqueta": "Prohibit el pas"
            },
            {
                "id": 3,
                "etiqueta": "Prohibit girar a l'esquerra"
            },
            {
                "id": 4,
                "etiqueta": "Prohibit girar a la dreta"
            }
        ],
        "resposta_correcta": 2,
        "imatge": "https://exemple.com/prohibit.jpg"
    },
    {
        "id": 6,
        "pregunta": "Què significa un senyal de trànsit amb un cercle blau i una fletxa blanca cap a la dreta?",
        "respostes": [
            {
                "id": 1,
                "etiqueta": "Girar a la dreta obligatori"
            },
            {
                "id": 2,
                "etiqueta": "Girar a l'esquerra obligatori"
            },
            {
                "id": 3,
                "etiqueta": "Prohibit girar a la dreta"
            },
            {
                "id": 4,
                "etiqueta": "Prohibit girar a l'esquerra"
            }
        ],
        "resposta_correcta": 1,
        "imatge": "https://exemple.com/girar_dreta.jpg"
    },
    {
        "id": 7,
        "pregunta": "Quina és la velocitat màxima permesa en una autopista?",
        "respostes": [
            {
                "id": 1,
                "etiqueta": "100 km/h"
            },
            {
                "id": 2,
                "etiqueta": "110 km/h"
            },
            {
                "id": 3,
                "etiqueta": "120 km/h"
            },
            {
                "id": 4,
                "etiqueta": "130 km/h"
            }
        ],
        "resposta_correcta": 3,
        "imatge": "https://exemple.com/autopista.jpg"
    },
    {
        "id": 8,
        "pregunta": "Què significa un senyal de trànsit amb un cercle vermell i un número dins?",
        "respostes": [
            {
                "id": 1,
                "etiqueta": "Límit de velocitat"
            },
            {
                "id": 2,
                "etiqueta": "Prohibit estacionar"
            },
            {
                "id": 3,
                "etiqueta": "Prohibit el pas"
            },
            {
                "id": 4,
                "etiqueta": "Cediu el pas"
            }
        ],
        "resposta_correcta": 1,
        "imatge": "https://exemple.com/limit_velocitat.jpg"
    },
    {
        "id": 9,
        "pregunta": "Què significa un senyal de trànsit amb un triangle vermell i una fletxa cap amunt i una cap avall?",
        "respostes": [
            {
                "id": 1,
                "etiqueta": "Prohibit avançar"
            },
            {
                "id": 2,
                "etiqueta": "Cediu el pas"
            },
            {
                "id": 3,
                "etiqueta": "Prioritat de pas"
            },
            {
                "id": 4,
                "etiqueta": "Perill"
            }
        ],
        "resposta_correcta": 3,
        "imatge": "https://exemple.com/prioritat.jpg"
    },
    {
        "id": 10,
        "pregunta": "Què significa un senyal de trànsit amb un cercle blau i una fletxa blanca cap amunt?",
        "respostes": [
            {
                "id": 1,
                "etiqueta": "Prohibit girar a l'esquerra"
            },
            {
                "id": 2,
                "etiqueta": "Prohibit girar a la dreta"
            },
            {
                "id": 3,
                "etiqueta": "Direcció obligatòria recta"
            },
            {
                "id": 4,
                "etiqueta": "Prohibit estacionar"
            }
        ],
        "resposta_correcta": 3,
        "imatge": "https://exemple.com/direccio_recta.jpg"
    },
    {
        "id": 11,
        "pregunta": "Què significa un senyal de trànsit amb un cercle vermell i una bicicleta dins?",
        "respostes": [
            {
                "id": 1,
                "etiqueta": "Prohibit el pas de bicicletes"
            },
            {
                "id": 2,
                "etiqueta": "Prohibit estacionar bicicletes"
            },
            {
                "id": 3,
                "etiqueta": "Carril bici"
            },
            {
                "id": 4,
                "etiqueta": "Zona de bicicletes"
            }
        ],
        "resposta_correcta": 1,
        "imatge": "https://exemple.com/prohibit_bicicletes.jpg"
    }
]


async function getPreguntesAdmin() {
    return preguntes;
}

async function updatePregunta(pregunta) {
    console.log('updatePregunta', pregunta);
}

async function deletePregunta(id) {
    console.log('deletePregunta', id);
}

const communicationManager = {
    getPreguntesAdmin,
    updatePregunta,
    deletePregunta
}

export { communicationManager }