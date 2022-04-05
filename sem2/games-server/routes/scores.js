let express = require('express');
let router = express.Router();
let Scores = require('../classes/Scores');
let RequestAuthValidator = require('../classes/RequestAuthValidator');

const availableGames = ['tetris', 'snake'];

function scoresPage(req, res, next, game) {
    const isAdmin = req.query.auth && req.query.auth === 'chrystian';
    const responseType = req.get('accept');

    if (responseType && responseType.toLowerCase() === 'application/json') {
        if (!game || availableGames.indexOf(game) === -1) {
            res.status(422);
            res.send({
                error: 'bad data',
                message: 'Missing game info'
            });
        }

        res.send(Scores.instance.formatted(game));

    } else {
        res.render('scores', {
            game: game,
            data: Scores.instance.data[game],
            admin: isAdmin
        });
    }
}

router.get('/', function (req, res, next) {
    return scoresPage(req, res, next, 'tetris');
});
router.get('/tetris', function (req, res, next) {
    return scoresPage(req, res, next, 'tetris');
});
router.get('/snake', function (req, res, next) {
    return scoresPage(req, res, next, 'snake');
});

router.post('/', function (req, res, next) {
    const validator = new RequestAuthValidator(req);

    if (!validator.validate()) {
        res.status(403);
        return res.send({
            error: 'auth',
            message: 'Unauthorized request'
        });

    } else if (
        !req.body.name || !req.body.score === undefined ||
        !req.body.game === undefined || availableGames.indexOf(req.body.game) === -1
    ) {
        res.status(422);
        res.send({
            error: 'bad data',
            message: 'Incomplete set of data received'
        });

    } else if (!req.body.score) {
        res.status(422);
        res.send({
            error: 'bad data',
            message: 'Try again with better score ;)'
        });

    } else {
        Scores.instance.add(req.body.game, {
            name: req.body.name,
            score: req.body.score,
            key: validator.getToken()
        });
        res.send(Scores.instance.formatted(req.body.game));
    }
});

module.exports = router;
