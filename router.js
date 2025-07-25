const express = require('express');
const { getUser } = require('./common');

const router = express.Router();

// GET /students/getuser  → delegates to common.getUser
router.get('/getuser', getUser);

// you can add more endpoints here, e.g.
// router.post('/add', addUser);
// router.delete('/:id', deleteUser);

module.exports = router;