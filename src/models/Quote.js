const createModel = include('helpers/modelCreate');

const name = 'Quote';
const tableName = 'quote';

const selectableProps = [
    'id',
    'text',
    'author',
    'createdAt',
    'updatedAt',
    'deletedAt',
    '__v'
];

class QuoteModel extends createModel {
    constructor(props) {
        super({
            ...props,
            name,
            tableName,
            selectableProps
        });
    }
}

module.exports = knex => new QuoteModel({knex});
