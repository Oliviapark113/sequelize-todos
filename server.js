const express = require('express')
const db = require('./models')
const routes = require('./routes/api-routes.js')

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(routes)


  db.sequelize.sync().then(()=>{

    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
    
    })