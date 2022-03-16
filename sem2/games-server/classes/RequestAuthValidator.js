class RequestAuthValidator {
    constructor(request) {
        this.token = request.headers['auth-token'] || request.body['auth-token'];
    }

    validate() {
        return this.token && this.token.length === 4 && isNaN(this.token) === false;
    }

    getToken() {
        return this.token;
    }
}

module.exports = RequestAuthValidator
