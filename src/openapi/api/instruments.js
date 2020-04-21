module.exports = {
    '/api/instruments': {
        get: {
            security: [],
            summary: 'List Instruments',
            parameters: [
                {
                    in: 'query',
                    name: 'hexcode',
                    schema: { type: 'string' },
                    description: 'Hexcode of instrument '
                },
                {
                    in: 'query',
                    name: 'family',
                    schema: { type: 'string' },
                    description: 'Family of instrument '
                }, {
                    in: 'query',
                    name: 'instrument',
                    schema: { type: 'string' },
                    description: 'Instrument'
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
                    description: 'list of instruments',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    instruments: {
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
