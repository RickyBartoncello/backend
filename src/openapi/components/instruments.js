module.exports = {
    type: 'object',
    properties: {
        id: {
            description: 'id of Instrument',
            type: 'string',
            format: 'uuid'
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
};
