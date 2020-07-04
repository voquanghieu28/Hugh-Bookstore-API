const express = require("express")
const bodyParser = require("body-parser")
const path = require('path')
const routes = require('./routes')
const baseURL = require('./utils/getBaseURL')

const PORT = 3000
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.use('/', routes)


//Make videos and images folder public
app.use('/images', express.static(path.join(__dirname, 'data', 'images'  )));
app.use('/videos', express.static(path.join(__dirname, 'data', 'videos'  )));

app.get("/", (req, res) => {
    res.json({
        title       : "WELCOME TO HUGH's BOOKSTORE API",
        developer   : "Hieu Vo"
    })
})

app.use((req, res) => {
    console.log(baseURL(req))
    res.status(404).send({Error : 'Invalid request!!!'})
})

app.listen(PORT, () =>   console.log(`SERVER IS RUNNING ON PORT ${PORT}`))