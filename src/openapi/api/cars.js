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
                }, {
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
                                items: { $ref: '#/components/schemas/Car' }
                            }
                        }
                    }
                },
                default: {
                    description: 'Error',
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } }
                }
            }
        },
        post: {
            security: [],
            requestBody: {
                description: 'New Car',
                required: true,
                content: { 'application/ json': { schema: { $ref: '#/components/schemas/Car' } } }
            },
            responses: {
                200: {
                    description: 'list of cars',
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
    },
    '/api/cars/{id]': {
        get: {
            security: [],
            summary: 'List Cars for ID',
            parameters: [{$ref: '#/components/parameters/Path'}],
            responses: {
                200: {
                    description: 'Car for ID',
                    content: {
                        'application/json': {
                            type: 'object',
                            properties: {}
                        }
                    }
                },
                default: {
                    description: 'Error',
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } }
                }
            }
        },
        put: {
            security: [],
            parameters: [{$ref: '#/components/parameters/Path'}],
            requestBody: {
                description: 'Optional description',
                required: true,
                content: { 'application/ json': { schema: { $ref: '#/components/schemas/Car' } } }
            },
            responses: {
                200: {
                    description: 'list of cars',
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
        },
        delete: {
            security: [],
            parameters: [
                {
                    in: 'path',
                    name: 'id',
                    schema: {
                        type: 'string',
                        format: 'uuid'
                    },
                    required: true,
                    description: 'ID de la Persona solicitada'
                }
            ],
            responses: {
                200: {
                    description: 'list of cars',
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
