const express = require('express');
const bodyParser = require('body-parser');
let todoList = require('./todoList');

const app = express();
app.use(bodyParser.json());

app.get('/getList', (req, res) => {
  res.status(200).send(todoList)
  
})

app.delete('/todoList/:id', (req, res)=>{
  const {id} = req.params
  console.log(req.params)
  todoList.splice(id, 1)
  res.status(200).send(todoList)
})

app.post('/addItem', (req, res) =>{
  console.log(todoList)
  const item = req.body
  todoList.push(item.item)
  res.status(200).send(todoList)
  
})

app.post('/yourName', (req, res) => {
  const { string } = req.body
  const newString = string
  res.status(200).send(newString)
})

app.listen(3010, console.log('Docked at 3010'));