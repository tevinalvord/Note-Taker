const router = require('express').Router();

const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results;
    }
    res.json(results);
});

router.get('/api/notes', (req, res) => {
    const result = notes;
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

router.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();

    res.json(notes);
});

module.exports = router;