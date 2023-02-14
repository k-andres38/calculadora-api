import express from "express";

export const app = express();

export const suma=(a,b)=>{
    return a+b;
}

export const resta=(a,b)=>{
    return a-b;
}
export const multiplicacion=(a,b)=>{
    return a*b;
}
export const division=(a,b)=>{
    return a/b;
}



app.get('/', inicio);
function inicio (req, res)
{
   res.sendFile("/home/coextarde/Documentos/CARLOSN/Backend/api-calculadora/view/calc.html");
   
}


app.get('/suma/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = suma(a, b);
    res.json({ resultado: resultado });
  });
  app.get('/resta/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = resta(a, b);
    res.json({ resultado: resultado });
  });
  app.get('/multiplicacion/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = multiplicacion(a, b);
    res.json({ resultado: resultado });
  });
  app.get('/division/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = division(a, b);
    res.json({ resultado: resultado });
  });

  const port = 3000;
app.listen(port, () => {
  console.log(`La aplicación está escuchando en el puerto ${port}.`);
});