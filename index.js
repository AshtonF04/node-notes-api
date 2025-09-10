// Import notes data
import { notes } from './data.js';

// Import util functions
import { sendJSONResponse } from './util/sendJSONResponse.js';
import { getNoteById } from './util/getNoteById.js';

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
        const note = getNoteById(notes, parseInt(id))
        sendJSONResponse(res, 200, note)
    }
    // Create a new note
    else if (req.url === '/notes' && req.method === 'POST'){
        res.end('Creating new note')
    }
    // Update a note
    else if (req.url.startsWith('/notes') && req.method === 'PUT'){
        res.end('Updating existing note')
    }
    // Delete a note
    else if (req.url.startsWith('/notes') && req.method === 'DELETE'){
        res.end('Deleting note')
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