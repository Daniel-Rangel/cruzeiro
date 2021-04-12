const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')


app.use(express.urlencoded({extended:true}))

app.get('/usuario', (req, res) => {
    let id = req.query.id;
    let nome = req.query.nome;
    let sobrenome = req.query.sobrenome;

    if(id<0){
        res.status(404).send(`Id Inválido ${id}`);
    }else{
        res.status(200).send(`MÉTODO GET (Query) - /USUARIO: Nome ${nome} Sobrenome ${sobrenome} `);
    }

})

app.get("/usuario/:id/:nome/:sobrenome", (req,res)=>{
    console.log(req);
    let id = req.params.id;
    let nome = req.params.nome;
    let sobrenome = req.params.sobrenome;
    res.status(200).send(`MÉTODO GET (PARAMS) - /USUARIO: Nome ${nome} Sobrenome ${sobrenome} `);
})

app.get('/usuario/form', (req , res)=>{
    console.log(req);
    res.status(200).send("MÉTODO GET (BODY)- /USUARIO ");
})

app.listen(PORT, function () {
    console.log(`"projeto iniciado na porta ${PORT}`);
})