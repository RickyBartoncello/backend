module.exports = {
    '/api/movies': {
        get: {
            security: [],
            summary: 'List Movies',
            responses: {
                200: {
                    description: 'table of movies',
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
                                                title: {type: 'string'},
                                                genres: {type: 'string'},
                                                year: {type: 'integer'}
                                            }
                                        }
                                    },
                                    total: {type: 'integer'},
                                    limit: {type: 'integer'}
                                }
                            }
                        }
                    }
                },
                default: {
                    description: 'Error',
                    content: {'application/json': {schema: {$ref: '#/components/schemas/Error'}}}
                }
            }
        },
        put: {
            security: [],
            summary: 'List Movies',
            responses: {
                200: {
                    description: 'table of movies',
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
                                                title: {type: 'string'},
                                                genres: {type: 'string'},
                                                year: {type: 'integer'}
                                            }
                                        }
                                    },
                                    total: {type: 'integer'},
                                    limit: {type: 'integer'}
                                }
                            }
                        }
                    }
                },
                default: {
                    description: 'Error',
                    content: {'application/json': {schema: {$ref: '#/components/schemas/Error'}}}
                }
            }
        },

        post: {
            security: [],
            summary: 'List Movies',
            responses: {
                200: {
                    description: 'table of movies',
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
                                                title: {type: 'string'},
                                                genres: {type: 'string'},
                                                year: {type: 'integer'}
                                            }
                                        }
                                    },
                                    total: {type: 'integer'},
                                    limit: {type: 'integer'}
                                }
                            }
                        }
                    }
                }
            }
        },
        delete: {
            security: [],
            summary: 'List Movies',
            responses: {
                200: {
                    description: 'table of movies',
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
                                                title: {type: 'string'},
                                                genres: {type: 'string'},
                                                year: {type: 'integer'}
                                            }
                                        }
                                    },
                                    total: {type: 'integer'},
                                    limit: {type: 'integer'}
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
