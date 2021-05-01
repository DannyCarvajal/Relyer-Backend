
# Relyer backend

## Endpoints
### Users

/api/users

GET /api/users
```
{
    "data":[{
        "name": "Aleja Henao",
        "username": "Alejascout",
        "category":"entrepreneur",
        "thumbnail": "https://source.unsplash.com/40x40/?aleja",
        "email":"alejahenaoes@hotmail.com"
    }]

}


```
GET /api/users/:id


```

{
    "data":{
        "name": "Aleja Henao",
        "username": "Alejascout",
        "category":"entrepreneur",
        "thumbnail": "https://source.unsplash.com/40x40/?aleja",
        "email":"alejahenaoes@hotmail.com"
    },

    "message": "life is good"


}

```


POST /api/users

```

    {
        "name": "Aleja Henao",
        "username": "Alejascout",
        "category":"entrepreneur",
        "thumbnail": "https://source.unsplash.com/40x40/?aleja",
        "email":"alejahenaoes@hotmail.com"
    }

```




PATCH /api/users



POST /api/tests



1. User registration (POST) => Respond(200) 