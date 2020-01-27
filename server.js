const express = require('express');

const app = express();

//api test
app.get('/',(req,res)=> res.send('API up and running'));

//set up environment variable and optional local port 
const PORT = process.env.PORT || 1111

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
