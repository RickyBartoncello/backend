module.exports = {
    type: 'object',
    properties: {
        id: {
            description: 'id of movie',
            type: 'string',
            format: 'uuid'
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
        },
        deleted: {
            type: 'boolean',
            description: 'If the user its deleted from the current APP'
        }
    },
    required: [
        'id',
        'title',
        'genres',
        'year',
        'deleted'
    ]
};
