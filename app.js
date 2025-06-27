/*
Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.
Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
Creiamo poi una rotta /api/posts che restituisca un oggetto json con la lista dei post.
Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
Testare su postman
*/

import express from "express";
import fs from "fs";

const app = express(); // avvio il server e lo salvo dentro app
const port = 3000; // imposto la porta

app.use(express.static("public")); // rende visibile la cartella public


app.get("/" , (req, res) => {
    res.send("Server del mio blog")
})

app.get("/api/posts", (req, res) =>{
    const dataJson = fs.readFileSync("data.json")
    const outputData = JSON.parse(dataJson);

    let postCounter = outputData.length;

    const respData = {
        data: outputData,
        counter: postCounter,
        succes: true
    }
    res.json(respData)
})

app.listen(port, ()=>{
    "Server Avviato"
})