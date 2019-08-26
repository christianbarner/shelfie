require('dotenv').config()
const axios = require('axios')
const express = require('express')
const controller = require('./controller')
const massive = require('massive')

const app = express ()

const {SERVER_PORT, CONNECTION_STRING} = process.env


massive(CONNECTION_STRING)
    .then(dbInstance =>{
        app.set('db', dbInstance)
    })
    .catch(err => console.log(err))


app.use(express.json())

//Endpoints

app.post('/api/product', controller.create)
app.get('/api/inventory', controller.getAll)



app.listen(SERVER_PORT, () =>{
    console.log(`server ${SERVER_PORT} is lit `)
})