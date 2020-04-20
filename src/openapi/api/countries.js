module.exports = {
    '/api/countries': {
        get: {
            security: [],
            summary: 'List Countries',
            parameters: [
                {
                    in: 'query',
                    name: 'code',
                    schema: {
                        type: 'string',
                        pattern: '^[A-Z]{2}$'
                    },
                    description: 'Numeric ID of user to get'
                }
            ],
            responses: {
                200: {
                    description: 'list of countries',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        id: {
                                            type: 'string',
                                            format: 'uuid'
                                        },
                                        name: { type: 'string' }
                                    }
                                }
                            }
                        }
                    }
                },
                default: {
                    description: 'Error',
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } }
                }
            }
        }
    }
};
