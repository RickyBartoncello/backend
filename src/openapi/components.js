module.exports = {
    schemas: {
        Profile: {
            type: 'object',
            properties: {
                token: {
                    type: 'string',
                    nullable: true
                },
                success: {
                    type: 'boolean',
                    nullable: true
                },
                user: {
                    allOf: [{ $ref: '#/components/schemas/User' }],
                    type: 'object',
                    required: [
                        'roles'
                    ],
                    properties: {
                        role: {
                            type: 'array',
                            items: { type: 'string' }
                        },
                        attributes: { type: 'object' }
                    }
                }
            }
        },
        User: {
            type: 'object',
            properties: {}
        },
        Car: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    format: 'uuid',
                    nullable: true
                },
                brand: {
                    description: 'Brand.',
                    type: 'string'
                },
                model: {
                    description: 'Model.',
                    type: 'string'
                },
                year: {
                    description: 'Year.',
                    type: 'integer'
                }
            }
        },
        Country: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    format: 'uuid',
                    nullable: true
                },
                name: {
                    description: 'Name.',
                    type: 'string'
                },
                code: {
                    description: 'Code.',
                    type: 'string'
                }
            }
        },
        Instrument: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    format: 'uuid',
                    nullable: true
                },
                hexcode: {
                    description: 'Hexcode.',
                    type: 'string'
                },
                family: {
                    description: 'Family.',
                    type: 'string'
                },
                instrument: {
                    description: 'Instrument.',
                    type: 'string'
                },
                deleted: {
                    type: 'boolean',
                    description: 'If the user its deleted from the current APP'
                }
            },
            required: [
                'id',
                'hexcode',
                'family',
                'instrument',
                'deleted'
            ]
        },
        Movie: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    format: 'uuid',
                    nullable: true
                },
                title: {
                    description: 'Title.',
                    type: 'string'
                },
                genres: {
                    description: 'Genres.',
                    type: 'string'
                },
                year: {
                    description: 'Year.',
                    type: 'integer'
                }
            }
        },
        Error: {
            type: 'object',
            required: [
                'code',
                'message'
            ],
            properties: {
                code: {
                    type: 'integer',
                    format: 'int32'
                },
                message: { type: 'string' }
            }
        }
    },
    parameters: {
        Path: {
            name: 'id',
            in: 'query',
            required: true,
            schema: {
                type: 'string',
                format: 'uuid'
            },
            description: 'ID'
        }
    },
    securitySchemes: {
        bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT'
        }
    }
};
