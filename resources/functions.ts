export default {
    hello: {
        handler: 'handler.hello',
        events: [
            {
                http: {
                    method: 'get',
                    path: 'hello',
                }
            }
        ]
    },
}
