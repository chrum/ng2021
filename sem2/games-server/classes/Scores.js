let fs = require('fs');

const DATA_FILE = 'data.json';
class Scores {
    static get instance() {
        if (!this._instance) {
            this._instance = new Scores();
        }

        return this._instance;
    }

    constructor() {
        this.data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    }

    add(game, data) {
        this.data[game].push(data);

        fs.writeFile(DATA_FILE, JSON.stringify(this.data), function(err) {
            if (err) throw err;
        });
    }

    formatted(game) {
        return this.data[game].map(function (row) {
            return {
                name: row.name,
                score: row.score,

            }
        })
    }
}

module.exports = Scores;
