// Import notes data
import { notes } from './data.js';

// Import util functions
import { sendJSONResponse } from './util/sendJSONResponse.js';
import { getNoteById } from './util/getNoteById.js';
import { createNote } from './util/createNote.js';
import { updateNote } from './util/updateNote.js';
import { deleteNote } from './util/deleteNote.js';

// Setup PORT
const PORT = 3000;

// Import the http module
import http from 'http';

// Create a server using http module
const server = http.createServer((req, res) => {
    // Get all notes
    if (req.url === '/notes' && req.method === 'GET'){
        sendJSONResponse(res, 200, notes)
    }
    // Get Single Note
    else if (req.url.startsWith('/notes') && req.method === 'GET'){
        const id = req.url.split(':').pop()
        const note = getNoteById(notes, id)
        sendJSONResponse(res, 200, note)
    }
    // Create a new note
    else if (req.url === '/notes' && req.method === 'POST'){
        // Get the request body as the data stream arrives in chunks and append to the requestBody string
        let requestBody = '';
        req.on('data', (chunk) => {
            requestBody += chunk;
        });

        // When the request body is fully received, parse it as JSON and create a new note
        req.on('end', () => {
            try {
                const newNoteText = JSON.parse(requestBody).text;
                const note = createNote(notes, newNoteText);
                sendJSONResponse(res, 201, note);
            } catch (error) {
                sendJSONResponse(res, 400, {'Error': 'Invalid request body.', 'message': error.message})
            }
        });
    }
    // Update a note
    else if (req.url.startsWith('/notes') && req.method === 'PUT'){
        // Get the note id from the url
        const id = req.url.split(':').pop()

        // Get the request body as the data stream arrives in chunks and append to the requestBody string
        let requestBody = '';
        req.on('data', (chunk) => {
            requestBody += chunk;
        });
        // When the request body is fully received, parse it as JSON and update the note
        req.on('end', () => {
            try {
                const updatedNoteText = JSON.parse(requestBody).text;
                const note = updateNote(notes, id, updatedNoteText);
                sendJSONResponse(res, 200, note);
            } catch (error) {
                sendJSONResponse(res, 400, {'Error': 'Invalid request body.', 'message': error.message})
            }
        });
    }
    // Delete a note
    else if (req.url.startsWith('/notes') && req.method === 'DELETE'){
        try{
            // Get the note id from the url
            const id = req.url.split(':').pop()
            const note = deleteNote(notes, id);
            sendJSONResponse(res, 200, note);
        } catch (error) {
            sendJSONResponse(res, 400, {'Error': 'Invalid request body.', 'message': error.message})
        }

    }
    // Error, endpoint not found
    else {
        sendJSONResponse(res, 404, {'Error': 'API endpoint not found.'})
    }
});

// Start server on port 3000
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});