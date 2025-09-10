import { getNoteById } from './getNoteById.js'

export const deleteNote = (notes, id) => {
    try {
        const deletedNote = getNoteById(notes, id)
        if (!deletedNote) {
            throw new Error('Note not found')
        }
        const indexToRemove = notes.findIndex((note) => note.id === id)
        if (indexToRemove !== -1) {
            notes.splice(indexToRemove, 1)
        }
        return deletedNote
    } catch (error) {
        throw new Error(error.message || String(error))
    }
}