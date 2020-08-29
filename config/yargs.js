const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Muestra la tabla', opts)
    .command('crear', 'crea el archivo de la tabla', opts)
    .help()
    .argv;

module.exports = {
    argv
}