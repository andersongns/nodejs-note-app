const fs = require('fs');
const logger = require('./logger')
const { v4: uuid } = require('uuid')


module.exports = ({ path }) => {
    const fileSync = (content) => {
        try {
            logger.success('File Sync!')
            fs.writeFileSync(path, JSON.stringify(content))
        } catch (error) {
            logger.error('Error to file sync!')
        }
    }

    const get = () => {
        const dataBuffer = fs.readFileSync(path)
        const stringJson = dataBuffer.toString()
        return JSON.parse(stringJson)
    };

    const getById = ({ id }) => {
        return get().filter(note => note.id === id)
    };

    const create = ({ title, content }) => {
        let notes = get()
        const note = {
            id: uuid(),
            title,
            content,
            created_at: new Date()
        }
        notes.push(note)
        fileSync(notes)
    };

    const updateById = ({ id, title, content }) => {
        const notes = get().map(note => {
            if(note.id === id) {
                note.title = title
                note.content = content
                note.updated_at = new Date()
            }
            return note
        })
        fileSync(notes)
    };

    const deleteById = ({ id }) => {
        const notes = get().filter(note => note.id !== id)
        fileSync(notes)
    };

    return {
        get,
        getById,
        create,
        updateById,
        deleteById,
    }
}