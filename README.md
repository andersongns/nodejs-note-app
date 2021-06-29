# SNA (Simple Note App)
Aplicação feita em linha de comando utilizando armazenamento de dados em arquivo.

## How to install
1. `npm i`

## How to use

- Consulta todas as notas: `node index get` 
- Consulta notas por id: `node index get --id='string'`  
- Cria uma nova nota `node index create --title='string' --content='string'`  
- Atualiza uma nova por id `node index updateById --id='string' --title='string' --content='string'`  
- Remove uma nota por id `node index deleteById --id='string'`

## How to debug tests
[debugging-in-vs-code](https://jestjs.io/docs/troubleshooting#debugging-in-vs-code)

## dependencies
- [chalk](https://github.com/motdotla/dotenv)
- [uuid](https://github.com/expressjs/express)
- [yargs](https://github.com/helmetjs/helmet)
