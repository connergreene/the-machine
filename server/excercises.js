const db = require('../db') //this is required
const Exercise = require('../db/models/exercise');

const router = require('express').Router()

router.get('/', function(req, res, next) {
    Exercise.findAll({})
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

router.get('/:id', function(req, res, next) {
    Exercise.findOne({
            where:{id:req.params.id},
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

module.exports = router
