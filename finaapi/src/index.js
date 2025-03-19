const express = require('express');
const {v4: uuidv4} = require("uuid");

const app = express();

app.use(express.json());
const custumers = [];

/**
 * cpf - string
 * name - string
 * id - uuid
 * statement - []
 */ 



app.post("/account",(request,response) => {
    const {cpf, name} = request.body;   
    const id = uuidv4();

    const custumerAlreadyExists = custumers.some((custumers) => custumers.cpf === cpf);

    if(custumerAlreadyExists){
        return response.status(400).json({error : "Cpf já utilizado para cadastro"})
    }

    custumers.push({
        cpf,
        name,
        id,
        statement : []
    });

    console.log(custumers);

    return response.status(201).send();
});

app.get("/statement/:cpf", (request,response) =>{
    const cpf = request.params;

    const customer = custumers.find((customer) => customer.cpf === cpf);
    return response.json(custumers);
})

app.listen(6969);