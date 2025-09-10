import { getNoteById } from './getNoteById.js'

export const updateNote = (notes, id, text) => {
    try {
        const note = getNoteById(notes, id)
        note.text = text
        return note
    } catch (error) {
        console.log(error)
        throw new Error('Note not found')
    }
}