
//calling the express we installed
const express = require('express')

//call express in the app function
const app = express()

const bodyParser = require('body-parser')

const db = require('./queries')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// const {MongoClient} = require('mongodb');

//setting up view engine for html code
app.set('view engine', 'ejs')

//use the middleware created
// app.use(logger)



//routes are .get .post .delete .update
//creating a basic get request
app.get('/', (req, res) => {
   //to show success in the server
    //console.log("Here")
   

    //send, render, download, json
    //to the client
    //res.send("Hi")

    //you can test with HTML status code
    // res.sendStatus(200)

    // res.json is a good use
    // res.json({message: "Success"})

    //make downloads available with .download
    //files for client to downlaod 
    //res.download('server.js')
    
    //render html file with .render
    // this {} makes var usable in the views/index file
    // res.render('home')
    res.json({ info: 'Node.js, Express, and Postgres API' })
})

//keeping the artist.js here
// setting up shorthand for router
// const artistRouter = require('./routes/artist')
// const venRouter = require('./routes/venue')


//linking the route to a particular path
//to make it always '/user'
// app.use('/routes/artist', artistRouter)
// app.use('/routes/venue', venRouter)

// using express static; a middleware
// targeting html files in public folder
// app.use(express.static("public"))

//creating a middleware
// function logger(req, res, next){
//     console.log(req.originalUrl)
//     next()
// }



// Setting up CRUD functions in a REST API
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(3000)
//so the app which is the server is listening on port 3000 for different request
