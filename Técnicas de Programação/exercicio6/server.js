const express = require('express')
const server = express()
const data = []

server.use(express.urlencoded({ extended: true}))

//Mostrar
server.get('/pet', (req, res) =>{
    let pets = ''
    for(pet of data){
        pets += `(ID: ${pet.id}, 
            Nome: ${pet.nomePet}, 
            Raça: ${pet.raca}, 
            Idade: ${pet.idade}, 
            Status: ${pet.status}) 
            `
    }
    res.send(`${pets}`)
})

//Criar
server.post('/pet', (req, res)=>{
    let id = 1
    const {
        raca,
        idade,
        nomePet,
        status
    } = req.body

    let petId = data.length
    
    if( petId >= id ){
        id = petId + 1
    }

    data.push(
        {   
            id,
            raca,
            idade,
            nomePet,
            status
        }
    ) 

    return res.send(`Criado pet`)
})

//Alterar
server.get('/pet/:nome', (req,res)=>{

    let loc = req.params.nome
    let show = ''

    for(pet of data){
        if(pet.nomePet == loc){
            show = pet
        }
    }
    
    res.send(`Localizado: ${show.id} ${show.nomePet}`)
})

server.put('/pet', (req, res)=>{

    let { id } = req.body

    data.forEach( pet =>{
        if(pet.id == id){
            pet.raca = req.body.raca,
            pet.idade = req.body.idade,
            pet.nomePet = req.body.nomePet
        }
    })

    res.send(`feito alteração PUT no ${id}`)
})

//Inativar
server.delete('/pet', (req, res)=>{

    let { id } = req.body

    data.forEach( pet =>{
        if(pet.id == id){
            pet.status = req.body.status
        }
    })

    res.send(`feito alteração PUT no ${id}`)
})

server.listen(8000, function(){
    console.log('Rodando Server')
})