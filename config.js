if (process.env.NODE_ENV === 'prod') {
    module.exports = {
        corsHosts: [
            'https://just-dance.herokuapp.com',
            'http://just-dance.herokuapp.com',
            'https://just-dance-backend.herokuapp.com',
            'http://just-dance-backend.herokuapp.com',
        ]
    }
} else {
    module.exports = {
        corsHosts: ['http://localhost:3000']
    }
}
