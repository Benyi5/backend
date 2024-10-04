//--Helló Express üzenetet küldd vissza kérésre
// npm install express (a terminálba)
const express = require('express');
const app = express();
const port = 3000;
// JSON adatok fogadásához szükséges middleware
app.use(express.json());
var pizzak = [];

app.get('/', (req, res) =>{ // require + response -- Require: Kérés összes jellemzője --/-- Response: amit vissza kapunk
    res.send("Helló Express");// vissza küldöm és lezárom a kapcsolatot
});
// node .\helloExpress.js

app.get("/futar", (req, res) => {
    res.send(`A futár adatai: név: Józsi, kor: 32, foglalkozás: futár`)
});

app.get("/pizza", (req, res) => {
    // -- az összes pizza adatait vissza küldi
    if (pizzak.length > 0) {
        res.json(pizzak);
    }
    else{
        res.send("Nincs pizza az adatbázisban");
    }
    
})

app.post("/pizza", (req, res) => {
    let ujPizza = req.body;
    pizzak.push(ujPizza);
    res.send(`Az új pizza adatai: név:${ujPizza.nev} , ár:${ujPizza.ar} `)
})

app.listen(port, () => {
    console.log(`az alkalmazás a http://localhost:${port} címen elérhető`);
});