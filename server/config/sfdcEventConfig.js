const websocketService = require ('../services/websocketService');

module.exports = [
    {
        eventName: "AccountChangeEvent",
        eventFxn: (message) => {
            console.log('message: ' + JSON.stringify(message));
            // websocketService.broadcast(JSON.stringify(message));
        }
    },
    {
        eventName: "Async_Call__e",
        eventFxn: (message) => {
            console.log('message: ' + JSON.stringify(message));
            // websocketService.broadcast(JSON.stringify(message));
        }
    }
];


