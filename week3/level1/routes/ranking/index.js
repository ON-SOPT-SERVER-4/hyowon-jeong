const express = require('express');
const router = express.Router();

router.get('/popular', (req, res) => {
    res.status(200).send("랭킹/인기많은순");
});

router.get('/bestreply', (req, res) => {
    res.status(200).send("랭킹/댓글많은순");
});

router.get('/age', (req, res) => {
    res.status(200).send("랭킹/연령별");
});

module.exports = router;