const path = require('path');

module.exports = {
    openapi: '3.0.0',
    info: {
        title: 'patata API',
        version: '1.0.0',
        description: 'Microservice patata API',
    },
    servers: [
        { url: 'http://localhost:3907' }
    ],
    apis: [path.join(__dirname, './src/**/**/*.ts')]
};
