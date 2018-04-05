const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 9000;


//Handlebars Middleware

app.engine('handlebars', exphbs({
    defaultLayout:'main'
}));
  
app.set('view engine','handlebars');

app.listen(PORT,()=>{
    console.log("account bot POC started");
});

app.get('/',(req,res)=>{
  res.render("index");
});

app.get('/signup',(req,res)=>{
    res.render("signup");
});