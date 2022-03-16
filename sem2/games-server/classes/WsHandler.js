class WsHandler {
    constructor(io) {
        this._names = new WeakMap();
        this._clients = [];
        this._history = [];

        io.on('connection', (client) => {
           this._onConnection(client);
        });
    }

    _onConnection(client) {
        this._clients.push(client);
        client.emit('history', this._history);

        client.on('disconnect', () => {
            const idx = this._clients.indexOf(client);
            if (idx > -1) {
                this._clients.splice(idx, 1);
            }
        });


        client.on('msg', (msg) => {
            this._broadcastMessage(client, msg);
        });

        client.on('name', (name) => {
            this._names.set(client, name);
        });
    }



    _onDisconnect() {

    }

    _broadcastMessage(from, msg) {
        const data = {
            name: this._names.get(from) || '???',
            msg
        };
        this._history.push(data);
        this._clients.forEach((client) => {
            if (client !== from) {
                client.emit('msg', data);
            }
        });
    }
}

module.exports = WsHandler;
