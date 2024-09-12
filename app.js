const express = require('express')
const app = express()


const hbs = require('hbs')

hbs.registerPartials(__dirname + '/views/partials')
///COntenido estaticos
app.set('view engine', 'hbs');

app.use(express.static('public'))

app.get('/generic',  (req, res) => {
  res.sendFile(__dirname + '/public/generic.html')
})

app.get('/',  (req, res) => {
  res.render('home', {
    nombre: 'Uriel',
    titulo: 'GIAN CARLa'
  })
})


app.get('/elements',  (req, res) => {
  res.render('elements', {
    nombre: 'Uriel',
    titulo: 'GIAN CARLa'
  })
})
app.get('/generic',  (req, res) => {
  res.render('generic', {
    nombre: 'Uriel',
    titulo: 'GIAN CARLa'
  })
})
app.get('/elements',  (req, res) => {
  res.sendFile(__dirname + '/public/elements.html')
})

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html')
  })

app.listen(3000)