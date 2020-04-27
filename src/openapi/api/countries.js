module.exports = {
    '/api/countries': {
        get: {
            security: [],
            summary: 'List Countries',
            parameters: [
                {
                    in: 'query',
                    name: 'name',
                    schema: { type: 'string' },
                    description: 'Name of country '
                }, {
                    in: 'query',
                    name: 'code',
                    schema: {
                        type: 'string',
                        pattern: '^[A-Z]{2}$'
                    },
                    description: 'Code of country'
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
                    description: 'list of countries',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    countries: {
                                        type: 'array',
                                        items: { $ref: '#/components/schemas/Country' }
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
    },
    '/api/countries/{id}': {
        put: {
            security: [],
            summary: 'List Countries',
            parameters: [
                {
                    in: 'path',
                    name: 'id',
                    schema: {
                        type: 'string',
                        format: 'uuid'
                    },
                    description: 'Name of country '
                }
            ],
            requestBody: {
                content: { 'application/json': { schema: { $ref: '#/components/schemas/Country' } } },
                required: true
            },
            responses: {
                200: {
                    description: 'list of countries',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {}

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
