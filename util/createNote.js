export const createNote = (notes, text) => {
    const note = {"id": crypto.randomUUID(), "text": text}
    notes.push(note)
}