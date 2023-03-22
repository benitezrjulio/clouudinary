const express = require('express');
const {getCharacter} = require("./character.controller");
const router = express.Router();


router.get('/', getCharacter)



module.exports = router;