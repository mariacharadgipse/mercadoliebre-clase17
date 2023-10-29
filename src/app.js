const express =require('express');
const app= express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'home.html'))
    //res.send('funciona')
});


app.get('*', (req, res)=>{
    res.send(`
    <div style="display:flex; flex-direction:column; align-items:center">
    <h1>Esta pagina no existe</h1>
    <img style="width:50%" src="/img/not-found.webp" alt="error-404">
    </div>  
    `)
  })
  

const port=3000
app.listen(port, ()=>console.log(`Servidor corriendo http://localhost:${port}`));
