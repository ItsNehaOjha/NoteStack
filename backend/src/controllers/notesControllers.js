import Note from '../models/Note.js';
export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.error('Error fetching notes:', error);
    res.status(500).json({ 
      message: 'Failed to fetch notes',
      error: error.message 
    });
  }
}

export async function createNote(req, res) {
    try {
        const { title, content } = req.body;
        const newNote = new Note({ title, content });
        await newNote.save(); 
        res.status(201).json({ message: 'Note created', note: { title, content } });            
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }  
}

export async function updateNote(req, res) {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        // Find note by ID and update
        const updatedNote = await Note.findByIdAndUpdate(id, { title, content }, {
            new: true  // to return the updated document+ newly created fields like updatedAt if any 
        });
        if (!updatedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json({ message: 'Note updated', note: updatedNote });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

export async function deleteNote(req, res) {
    try {
        const { id } = req.params;
        // Find note by ID and delete
        const deletedNote = await Note.findByIdAndDelete(id);
        if (!deletedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json({ message: 'Note deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}
export async function getNote(req, res) {
    try {
        const { id } = req.params;
        const note = await Note.findById(id);
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}