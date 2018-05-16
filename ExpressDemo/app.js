var express = require('express')

var app = express() // app is now the engine

var port = 9001

app.set('view engine', 'ejs'); // EJS middleware, telling Express to use EJS view templates

app.get('/', function(req, res){
    res.render('index'); // if I go to localhost:9001, I should see the main index view
});
  
app.get('/:name/:age', function(req, res) {
    let templateVars = {
        name: req.params.name,
        age: req.params.age
    }

    res.render('person', templateVars); // render the "Person" view with the specific data (name, age)
})

app.post('/person', function(req, res) { // express lets us make routes for GET, POST, and other verbs
    // I could grab whatever's being passed in through the "req" object.
    // Let's console.log it to see what's in this object
    console.log(req)

    // ... do something with the data, such as insert in a database

    // send something back, like this nice message
    res.send("Thanks posting!");
})

app.listen(port, function() {
    console.log('Listening at', port)
});