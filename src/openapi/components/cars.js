module.exports = {
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
        model: {
            description: 'Model.',
            type: 'string'
        },
        year: {
            description: 'Year.',
            type: 'integer'
        },
        deleted: {
            type: 'boolean',
            description: 'If the user its deleted from the current APP'
        }
    },
    required: [
        'id',
        'brand',
        'model',
        'year',
        'deleted'
    ]
};
