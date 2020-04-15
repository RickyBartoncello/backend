const cars = require('./cars');
const countries = require('./countries');
const instruments = require('./instruments');
const movies = require('./movies');

module.exports = {
    ...cars,
    ...countries,
    ...instruments,
    ...movies
};
