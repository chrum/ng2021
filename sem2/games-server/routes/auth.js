let express = require('express');
let router = express.Router();
let RequestAuthValidator = require('../classes/RequestAuthValidator');

function CheckAuthToken(req, res, next) {
    const result = {
        success: false
    };
    const validator = new RequestAuthValidator(req);
    if (validator.validate()) {
        result.success = true;
    }

    res.status(200);
    res.send(result);
}

router.get('/', CheckAuthToken);
router.post('/', CheckAuthToken);

module.exports = router;
