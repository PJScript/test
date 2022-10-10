const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')
const { v4 } = require('uuid')
const mysql = require("mysql2");
require('dotenv').config()

const con = mysql.createConnection({
	host: process.env.HOST,
	port: process.env.PORT,
	user: process.env.ACCOUNT,
	password: process.env.PASSWORD,
	database: process.env.DATABASE_NAME
});



con.connect(err => {
	if (err) console.log("MySQL 연결 실패 : ", err);
	console.log("MySQL Connected!!!");
})
app.use(express.static('public'))
app.use(cors({
  origin:"*"
}))
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json()); 
app.use(express.urlencoded( {extended : false } ));

app.get('/', (req,res) => {
  // res.redirect("/group")
  res.sendFile(__dirname + '/public/home.html');

})

// app.get('/group', (req,res) => {
//   res.sendFile(__dirname + '/public/home.html');
// })

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




app.post(`/join`, (req,res) => {
  console.log(req.body)
  res.json("join")
})


app.post('/makegroup', (req,res) => {
  const {vote_limit_time,nickname_limit_time,group_name} = req.body
  const vote_date = new Date()
  console.log(vote_date,"voteData")
  vote_date.setHours(vote_date.getHours() + Number(vote_limit_time) )
  const joined_date = new Date()
  console.log(joined_date,"joinedDate")
  joined_date.setHours(joined_date.getHours() + Number(nickname_limit_time))


  
  const sql = {name:group_name,vote_limit:vote_date,join_limit:joined_date}
  con.query(`INSERT INTO rooms set ?`,sql, (err,rows) => {
    console.log(err,"err")
    console.log(rows,"rows")
  })
  console.log(req.body,"makegroup")
  res.json("make group")
})

app.post('/addnickname', (req,res) => {
  res.json("add nickname")
})

app.post('/vote', (req,res) => {
  
})


app.post('/login', (req,res) => {
  console.log(req.body,"login")
  res.json("login")
})

app.post('/')

app.listen(8080,() => {
  console.log("on")
})