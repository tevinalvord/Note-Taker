const router = require('express').Router();
const { createNotes, validateNotes } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {

    res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if (!validateNotes(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        const note = createNotes(req.body, notes);

        res.json(note);
    }
});

router.delete('/notes/:id', (req, res) => {
    const note = notes.find(c => c.id === parseInt(req.params.id));
    if (!note) res.status(404).send('the note with the given id was not found');

    const index = notes.indexOf(note);
    notes.splice(index, 1);

    res.send(note);
});

module.exports = router;