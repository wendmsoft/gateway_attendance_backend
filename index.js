const express = require("express");
const config = require("./config/config");
const connection=require("./database/db")

const app = express();

//Cors is a mechanism that allows restricted resources to be requested from another domain outside the domain.
const cors = require("cors");
 
 
 //body-parser, parse incoming request bodies in a middleware before your handlers, available under the req.body.property
 var bodyParser = require("body-parser");
 app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));//middleware for parsing bodies from URL

app.use(cors());

//all apis entry point, this is the entry for all requests
require("./functions/routes")(app);

app.listen(config.port, () => {
	console.log(`Server started on port ${config.port}`);
});
