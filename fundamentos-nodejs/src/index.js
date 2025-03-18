const express = require('express');

const app = express();

app.use(express.json());

/* 
    *GET Buscar uma informação no servidor
    *POST Inserir uma informação no servidor 
    *PUT Alterar uma informação no servidor
    *PATH Alterar uma informação especifica
    *DELETE Deletar uma informação no servidor 
*/

/**
 * Tipos de parametros
 * Routes Params => Identificar um recurso para editar/deletar/buscar
 * Query Params => Paginação/Filtro
 * Body Params => Os Objetos Inseridos/Alterados
 */


app.get("/courses", (request,response)=> {
    const queryParam = request.query;
    console.log(queryParam);
    return response.json(["Curso 1","Curso 2","Curso 3"])
})

app.post("/courses", (request,response)=> {
    const body = request.body;
    console.log(body); 
    return response.json(["Curso 1","Curso 2","Curso 3","Curso 4"])
})

app.put("/courses/:id", (request,response)=> {
    const routParam = request.params;
    console.log(routParam);
    return response.json(["Curso 6","Curso 2","Curso 3","Curso 4"])
})

app.patch("/courses/:id", (request,response)=> {
    return response.json(["Curso 6","Curso 2","Curso 3","Curso 4"])
})

app.delete("/courses/:id", (request,response)=> {
    return response.json(["Curso 6","Curso 2","Curso 4"])
})


app.listen(6969);