const fs = require('fs')

let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        let res = base * i
        console.log(`${base}*${i} = ${res}\n`)
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('El valor para la base No es un numero')
            return;
        }
        let data = ''
        for (let i = 1; i <= limite; i++) {
            let res = base * i
            data += `${base}*${i} = ${res}\n`
        }
        fs.writeFile(`tablas/Tabla-${base}-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`Tabla-${base}-${limite}.txt`)
                //console.log('The file Tabla.txt has been saved!');
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}