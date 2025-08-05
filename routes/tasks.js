const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/api/tasks', (req, res) => {
  const sql = 'SELECT id, title, deadline AS start FROM tasks';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'DB error' });
    }
    res.json(results); // FullCalendarが読み込める形式
  });
});

module.exports = router;
