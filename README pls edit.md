### This is a crash course on ExpressJS
Date: May 6, 2022
Time: 11:00 pm
Source: Youtube

# Terminal
npm init -y
to install a package

npm i express
to install express library

npm i --save-dev nodemon
to restart the server auto whenever we make changes

# IDE
"devStart": "nodemon server.js"

package.json/script
to link the nodemon server.js


server.js
contains all our server code

call express
connect app

index in view folder
use ejs as view engine
use app.render to call index in server.js

we need view engine for the views
so we install ejs

# Terminal
npm i ejs

# vs code
install ejs extension too

test with app.listen


too many routes cannot start in the server.js
so we create a router in separate file
we use router. not app. as the keyword
connect router in server.js
Test

const express = require('express') to link all router to.

# create middle ware for params
use it as app.use()

# middleware for logger in server
use it as app.use()

code in server.js works from top to bottom
so middleware for the functions that needs it or at the top

# another middleware
express.static("targetfolder")
use it in server.js
to render static html files for the client

# create public folder
for the static files (HTMl CSS JavaScript)

# parsing JSON or form
______________________--------_________________________

# creare route and export
# use route module in server.js
# use route to href in ejs files

# npm i pg

# CRUD and API
Now with just these two files,
server.js
queries.js

we have a server, database, and API all set up. You can start up the server by hitting server.js again.