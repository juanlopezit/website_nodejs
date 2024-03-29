const express = require('express');
const app = express();
const path = require('path');

// settings
app.set('port', 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// routes

app.use(require('./routes/index'));

// static files

app.use(express.static(path.join(__dirname, 'public')))

// listening the server
app.listen(app.get('port'), () => {
    console.log("Server running on port", app.get('port'));
});

