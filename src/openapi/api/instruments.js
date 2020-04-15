module.exports = {
    '/api/instruments': {
        get: {
            security: [],
            summary: 'List Instruments',
            responses: {
                200: {
                    description: 'table of instruments',
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
                                                hexcode: {type: 'string'},
                                                family: {type: 'string'},
                                                instrument: {type: 'string'}
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
            summary: 'List Instruments',
            responses: {
                200: {
                    description: 'table of instruments',
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
                                                hexcode: {type: 'string'},
                                                family: {type: 'string'},
                                                instrument: {type: 'string'}
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
            summary: 'List Instruments',
            responses: {
                200: {
                    description: 'table of instruments',
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
                                                hexcode: {type: 'string'},
                                                family: {type: 'string'},
                                                instrument: {type: 'string'}
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
            summary: 'List Instruments',
            responses: {
                200: {
                    description: 'table of instruments',
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
                                                hexcode: {type: 'string'},
                                                family: {type: 'string'},
                                                instrument: {type: 'string'}
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
