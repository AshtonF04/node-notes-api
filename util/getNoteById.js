export const getNoteById = (notes, id) => {
    return notes.filter((note) => {
        return note.id === id
    })[0]
}