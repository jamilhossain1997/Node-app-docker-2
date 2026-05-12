const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
   res.send('Hello World');
});  

app.get('/about',(req,res)=>{
    res.send('About Us');
});

app.get('/home',(req,res)=>{
    res.send('Home Page welcome to our website');
});

app.get('/contact',(req,res)=>{
    res.send('Contact Us');
});

app.get('/services',(req,res)=>{
    res.send('Our Services');
});

app.get('/products',(req,res)=>{
    res.send('Our Products');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

