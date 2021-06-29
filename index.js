const yargs = require('yargs')
const { join } = require('path')

const notes = require('./notes')({ path: join(__dirname, 'files', 'notes.json') });

require('./bootstrap')(['notes'])

yargs.version('1.1.0')

yargs.command({
    middlewares: [],
    command: 'get',
    describe: 'get all notes',
    handler: () => console.table(notes.get())
})

yargs.command({
    builder: {
        id: {
            describe: 'id note',
            demandOption: true,
            type: 'string'
        }
    },
    middlewares: [],
    command: 'getById',
    describe: 'getById',
    handler: (params) => console.table(notes.getById(params))
})

yargs.command({
    builder: {
        content: {
            describe: 'content note',
            demandOption: true,
            type: 'string'
        },
        title: {
            describe: 'title note',
            demandOption: true,
            type: 'string'
        }
    },
    middlewares: [],
    command: 'create',
    describe: 'create',
    handler: notes.create
})

yargs.command({
    builder: {
        id: {
            describe: 'id note',
            demandOption: true,
            type: 'string'
        },
        content: {
            describe: 'content note',
            demandOption: true,
            type: 'string'
        },
        title: {
            describe: 'title note',
            demandOption: true,
            type: 'string'
        }
    },
    middlewares: [],
    command: 'updateById',
    describe: 'updateById',
    handler: notes.updateById
})

yargs.command({
    builder: {
        id: {
            describe: 'id note',
            demandOption: true,
            type: 'string'
        }
    },
    middlewares: [],
    command: 'deleteById',
    describe: 'deleteById',
    handler: notes.deleteById
})

yargs.parse()
