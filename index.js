// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
//   console.log(req)
// })

// app.listen(3000)

const express = require('express')
const app = express()
app.set('view engine','ejs')
app.get('/', function (req, res) {
  res.render("index")
 
})
app.get('/saloni', function (req, res) {
    res.render("saloni")
   
  })

// app.get('/:username',function(req,res){
//     res.send(`${req.params.username} is my name `)
// })

app.get('/books/:author',function(req,res) {
    res.render("index" ,{name:`${req.params.author}`})
})


app.listen(3000)