import express from 'express';
const router = express.Router();

// Get all notes
import { getAllNotes, createNote, updateNote, deleteNote, getNote } from '../controllers/notesControllers.js';

router.get('/', getAllNotes);
router.get('/:id', getNote);
router.post('/', createNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);  

export default router;

//