module.exports = {
    schemas: {
        Car: {
            type: 'object',
            properties: {
                id: {
                    description: 'id of car',
                    type: 'string',
                    format: 'uuid'
                },
                brand: {
                    description: 'Brand.',
                    type: 'string'
                },
                code: {
                    description: 'Code.',
                    type: 'string'
                },
                year: {
                    description: 'Year.',
                    type: 'string'
                },
                deleted: {
                    type: 'boolean',
                    description: 'If the car its deleted from the current APP'
                }
            },
            required: [
                'id',
                'brand',
                'model',
                'year',
                'deleted'
            ]
        },
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
                    allOf: [{$ref: '#/components/schemas/User'}],
                    type: 'object',
                    required: [
                        'roles'
                    ],
                    properties: {
                        role: {
                            type: 'array',
                            items: {type: 'string'}
                        },
                        attributes: {type: 'object'}
                    }
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
                message: {type: 'string'}
            }
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
