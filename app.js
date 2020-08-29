//Requires
const fs = require('fs')
    //const fs = require('express') //Paquetes que no son nativos de node
    //const fs = require('./path') //Archivos que nosotros creamos

let base = 2
let data = ''

for (let i = 1; i <= 10; i++) {
    let res = base * i
    data += `${base}*${i} = ${res}\n`
}

fs.writeFile('Tabla.txt', data, (err) => {
    if (err) throw err;
    console.log('The file Tabla.txt has been saved!');
});