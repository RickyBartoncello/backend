const head = require('lodash/head');
const isEmpty = require('lodash/isEmpty');

const { Country } = include('models');

class CountriesController {
    static async create(req, res, next) {
        try {
            const result = await Country.insertOne(req.body);
            res.send({
                success: true,
                result
            });
        } catch (err) {
            next(err);
        }
    }
    static async fetch(req, res, next) {
        try {
            console.log(req.query);
            const {
                skip, ...filter
            } = req.query;
            const countries = await Country.find({
                skip,
                filter
            });
            // const [{count}] = await Country.countDocuments();
            res.send({
                countries,
                total: 243,
                limit: parseInt(process.env.PAGE_SIZE)
            });
        } catch (err) {
            next(err);
        }
    }
    static async fetchOne(req, res, next) {
        try {
            const country = await Country.findById(req.params.id);

            if (isEmpty(country)) {
                return res.status(404).send({ code: 'COUNTRY_NOT_FOUND' });

            }

            res.send(head(country));
        } catch (err) {
            next(err);
        }
    }
    static async save(req, res, next) {
        try {
            const result = await Country.updateOne({ id: req.params.id }, req.body);
            res.send({
                success: true,
                result
            });
        } catch (err) {
            next(err);
        }
    }
    static async delete(req, res, next) {
        try {
            const result = await Country.deletedOne(req.params.id);
            res.send({
                success: true,
                result

            });

        } catch (err) {
            next(err);
        }
    }
}
module.exports = CountriesController;
