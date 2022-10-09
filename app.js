const express = require('express')
const path = require('path')
const app = express()


app.use(express.static('http://ec2-3-34-142-19.ap-northeast-2.compute.amazonaws.com:8080/public'))


app.get('/', (req,res) => {
  res.redirect("/group")
})

app.get('/group', (req,res) => {
  res.sendFile(__dirname + '/public/home.html');
})

app.get('/make' , (req,res) => {
  res.sendFile(__dirname + '/public/make.html')
})

app.get('/done', (req,res) => {
  res.sendFile(__dirname + '/public/done.html')
})

app.get('/addnickname', (req,res) => {
  res.sendFile(__dirname + "/public/addnickname.html")
})

app.get('/login', (req,res) => {
  res.sendFile(__dirname + "/public/login.html")
})

app.get('/join', (req,res) => {
  res.sendFile(__dirname + "/public/join.html")
})
app.get('/vote', (req,res) => {
  res.sendFile(__dirname + "/public/vote.html")
})

app.get('/success', (req,res) => {
  res.sendFile(__dirname + "/public/success.html")
})

app.get('/result', (req,res) => {
  res.sendFile(__dirname + "/public/result.html")
})

app.get('/nicknamedone' , (req,res) => {
  res.sendFile(__dirname + "/public/addnicknamedone.html")
})
app.listen(8080,() => {
  console.log("on")
})