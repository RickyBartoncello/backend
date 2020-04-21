module.exports = {
    '/api/cars': {
        get: {
            security: [],
            summary: 'List Cars',
            parameters: [
                {
                    in: 'query',
                    name: 'brand',
                    schema: { type: 'string' },
                    description: 'Brand of car '
                }, {
                    in: 'query',
                    name: 'model',
                    schema: { type: 'string' },
                    description: 'Model of car'
                },
                {
                    in: 'query',
                    name: 'year',
                    schema: { type: 'integer' },
                    description: 'Year of car'
                }, {
                    in: 'query',
                    name: 'skip',
                    schema: {
                        type: 'integer',
                        default: 0
                    },
                    description: 'Numeric ID of user to get'
                }
            ],
            responses: {
                200: {
                    description: 'list of cars',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    cars: {
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
