const express = require('express');
const app = express();
cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');

app.use(cors());

app.get('/',(req,res ) => {
   res.send('Drogon is running')
} );
app.get('/categories',(req,res)=>{
    res.send(categories);
})

app.listen(port,() => {
    console.log(`Drogon API is running on port :${port}`)
})
