require('dotenv').config();
require('./src/global');

const {
    Country, Car, Movie, Instrument
} = include('/models');
const countries = require('./db/seeds/countries.json');
const cars = require('./db/seeds/cars.json');
const movies = require('./db/seeds/movies.json');
const instruments = require('./db/seeds/instruments.json');
//const quotes = require('./db/seeds/quotes.json');

(async () => {
    for (let it = 0; it < 4; it++) {
        let Model;
        let data;
        switch(it) {
            case 0:
                Model = Country;
                data = countries;
                break;
            case 1:
                Model = Car;
                data = cars;
                break;
            case 2:
                Model = Movie;
                data = movies;
                break;
            case 3:
                Model = Instrument;
                data = instruments;
                break;
            /*case 4:
                model = Quote;
                data = quotes;
                break;*/
        }

        for (const rowToInsert of data) {
            await Model.insertOne(rowToInsert);
        }
    }
})();
