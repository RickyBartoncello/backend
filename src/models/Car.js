const createModel = include('helpers/modelCreate');

const name = 'Car';
const tableName = 'car';

const selectableProps = [
    'id',
    'brand',
    'model',
    'year',
    'deleted',
    'createdAt',
    'updatedAt',
    'deletedAt',
    '__v'
];

class CarModel extends createModel {
    constructor(props) {
        super({
            ...props,
            name,
            tableName,
            selectableProps
        });
    }
}

module.exports = knex => new CarModel({knex});
