// call express
const express = require('express');

// start
const app = express(); 

// use the express
app.use(
    express.urlencoded({
        extended: true
    })
);

// converte para json
app.use(express.json());

// routes

app.post('/createproduct',(req,res) => {
    const name = req.body.name;
    const price = req.body.price;

    console.log(name);
    console.log(price);

    if(!name){
        res.status(422).json({message: 'O campo nome é obrigatório'});
        return;
    }

    // response
    res.status(201).json({message: `O produto ${name} foi criado com sucesso!!`});
});

app.get('/',(req,res) => {
    res.status(200).json({messsage: 'primeira rota criada com sucesso!'});
});

// port
app.listen(3000)