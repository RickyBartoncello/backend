module.exports = {
    '/api/movies': {
        get: {
            security: [],
            summary: 'List Movie',
            parameters: [
                {
                    in: 'query',
                    name: 'title',
                    schema: { type: 'string' },
                    description: 'Title of movie '
                }, {
                    in: 'query',
                    name: 'genres',
                    schema: {type: 'string'},
                    description: 'Genres of movie'
                }, {
                    in: 'query',
                    name: 'year',
                    schema: {type: 'integer'},
                    description: 'Year of movie'
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
                    description: 'list of movies',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    movies: {
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
