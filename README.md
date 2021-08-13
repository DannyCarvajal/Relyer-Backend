# Relyer-Backend
## Endpoints
### Test
#### Questions
/api/questions

GET /api/questions

```
{
    "data":[{
        "question": "¿Pregunta 1?",
        "type": "0"
    },
    {
        "question": "¿Pregunta 2?",
        "type": "1"
    },
    {
        "question": "¿Pregunta 2?",
        "type": "2"
    }]

}
```

POST /api/questions

```
{
    "question": "¿Pregunta 1?",
    "type": "0"
}

```

DELETE /api/questions/?id=


PUT /api/questions/?id=
```
{
    "question": "¿Pregunta 1?",
    "type": "0"
}

```

#### QuestionsEn
/api/questionsen

GET /api/questionsen

```
{
    "data":[{
        "question": "¿Pregunta 1?",
        "type": "0"
    },
    {
        "question": "¿Pregunta 2?",
        "type": "1"
    },
    {
        "question": "¿Pregunta 2?",
        "type": "2"
    }]

}
```

POST /api/questionsen

```
{
    "question": "¿Pregunta 1?",
    "type": "0"
}

```

DELETE /api/questionsen/?id=


PUT /api/questionsen/?id=
```
{
    "question": "¿Pregunta 1?",
    "type": "0"
}

```

#### Answers
/api/answers

GET /api/answers

```
{
    "data":[{
        "answer": "¿Pregunta 1?",
        "value": "15",
        "questionId": "58966542bhgyj58"
    }]
}

```
GET /api/answers/?id=

```
{
    "data":[{
        "answer": "¿Pregunta 1?",
        "value": "15",
        "questionId": "58966542bhgyj58"
    }]
}

```


POST /api/answers

```
{
    "answer": "¿Pregunta 1?",
    "value": "0",
    "questionId": "58966542bhgyj58"
}

```

DELETE /api/answers/?id=

PUT /api/answers/?id=
```
{
    "answer": "¿Pregunta 1?",
    "value": "0",
    "questionId": "58966542bhgyj58"
}

```

#### AnswersEn
/api/answersen

GET /api/answersen

```
{
    "data":[{
        "answer": "¿Pregunta 1?",
        "value": "15",
        "questionId": "58966542bhgyj58"
    }]
}

```
GET /api/answersen/?id=

```
{
    "data":[{
        "answer": "¿Pregunta 1?",
        "value": "15",
        "questionId": "58966542bhgyj58"
    }]
}

```


POST /api/answersen

```
{
    "answer": "¿Pregunta 1?",
    "value": "0",
    "questionId": "58966542bhgyj58"
}

```

DELETE /api/answersen/?id=

PUT /api/answersen/?id=
```
{
    "answer": "¿Pregunta 1?",
    "value": "0",
    "questionId": "58966542bhgyj58"
}

```

#### Results
/api/results

GET /api/results

```
{
    "data":[{
        "questionsId": ["¿Pregunta 1?", "¿Pregunta 2?", "¿Pregunta 3?"],
        "answers": {"Respuesta1", "Respuesta2", "Respuesta3"},
        "totalScore": 70,
        "usuarioId": "5"
    }]
}

```
GET /api/results/?id=

```
{
    "data":[{
        "questionsId": ["¿Pregunta 1?", "¿Pregunta 2?", "¿Pregunta 3?"],
        "answers": {"Respuesta1", "Respuesta2", "Respuesta3"},
        "totalScore": 70,
        "usuarioId": "5"
    }]
}

```

POST /api/results

```
{
    "questionsId": ["¿Pregunta 1?", "¿Pregunta 2?", "¿Pregunta 3?"],
    "answers": {"Respuesta1", "Respuesta2", "Respuesta3"},
    "totalScore": 70,
    "usuarioId": "5"
}

```

POST /api/results/en/

```
{
    "questionsId": ["¿Question 1?", "¿Question 2?", "¿Question 3?"],
    "answers": {"answer1", "answer2", "answer2"},
    "totalScore": 70,
    "usuarioId": "5"
}

```

DELETE /api/results/?id=

PUT /api/results/?id=
```
{
    "questionsId": ["¿Question 1?", "¿Question 2?", "¿Question 3?"],
    "answers": {"answer1", "answer2", "answer2"},
    "totalScore": 70,
    "usuarioId": "5"
}

```

### Panel admin
/api/admin

POST /api/admin/

GET /api/admin/usuarios/

```
{
    "data":[{
        "nombre": "Daniel",
        "correo": "correo@mail.com",
        "password": "*************"
        "location": "Bogota",
        "position": "ENTREPRENEUR",
        "Rol": "USER_ROLE",
        "estado": false
    }]
}

```

PUT /api/admin/usuarios/?id=
```
{
    "estado": false,
    "nombre": "Daniel",
    "correo": "correo@mail.com",
    "location": "Bogota",
    "position": "ENTREPRENEUR",
    "Rol": "USER_ROLE"
}

```

DELETE /api/admin/usuarios/?id=

GET /api/admin/expertos/

```
{
    "data":[{
        "nombre": "Daniel",
        "category": "TI"
        "correo": "correo@mail.com",
        "phoneNumber": "56587452"
        "company": "Protalento",
        "experience": "10 años",
        "estado": false
    }]
}

```

PUT /api/admin/expertos/?id=
```
{
    "estado": false,
    "nombre": "Daniel",
    "category": "TI"
    "correo": "correo@mail.com",
    "phoneNumber": "56587452"
    "company": "Protalento",
    "experience": "10 años"
    
}

```
DELETE /api/admin/expertos/?id=

GET /api/admin/tools/

```
{
    "data":[{
        "estado": true,
        "nombre": "Herramienta1"
        "category": "TI",
        "description": "Herramientas"
    }]
}

```

PUT /api/admin/tools/?id=
```
{
    "estado": true,
    "nombre": "Herramienta1"
    "category": "TI",
    "description": "Herramientas"
    
}

```

DELETE /api/admin/tools/?id=
