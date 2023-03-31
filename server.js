const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require("path");
app.use(cors());
app.use(express.json());
port = 3020;
app.listen(port, () => {
  console.log(`Escoltan::${port}`);
});


//Aqui comensem amb el exercici 1 i 2
app.post('/Ex1Ex2',(req,res)=>{
  const directoryPath = './UF1_ExamenAaD/Imatges';
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(`Al loro, no hi ha res per llegir!`);
      return;
    }
    for (const file of files) {
      if (path.extname(file) === '.jpg') {
        const readableStream = fs.createReadStream(path.join(directoryPath, file), {highWaterMark: 16384});
        console.log(`${file}`);

        readableStream.on('data', (chunk) => {
          console.log(chunk);
        });
      }
    }
  });
});

//Exercici 4
app.post('/Ex4', (req,res)=>{
 const carpeta = './UF1_ExamenAaD/Documents/Docs1';
 const origen = './UF1_ExamenAaD/Documents/FitxerOrigen.txt';
 const desti = path.join(carpeta,'FixetrDesti.txt');
 if (!fs.existsSync(carpeta)){
   fs.mkdirSync(carpeta);
 }
 const origenFitxer = fs.readFileSync(origen,'utf8');
  if (fs.existsSync(desti)) {
    const destiFitxer = fs.readFileSync(desti,'utf8');
    fs.writeFileSync(desti, destiFitxer + origenFitxer);
  } else {
    fs.writeFileSync(desti, origenFitxer);
  }
});

