const head = require('lodash/head');
const isEmpty = require('lodash/isEmpty');

const {Movie} = include('models');

class MoviesController {
    static async create(req, res, next) {
        try {
            const result = await Movie.insertOne(req.body);
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
            const {
                skip, ...filter
            } = req.query;
            const movies = await Movie.find({
                skip,
                filter
            });
            // const [{count}] = await Country.countDocuments();
            res.send({
                movies,
                total: 120,
                limit: parseInt(process.env.PAGE_SIZE)
            });
        } catch(err) {
            next(err);
        }
    }
    static async fetchOne(req, res, next){
        try{
            const movie = await Movie.findById(req.params.id);

            if(isEmpty(movie)){
                return res.status(404).send({code: 'movie_NOT_FOUND'});

            }

            res.send(head(movie));
        }catch(err){
            next(err);
        }
    }
    static async save(req, res, next) {
        try {
            const result = await Movie.updateOne({id: req.params.id}, req.body);
            res.send({
                success: true,
                result
            });
        } catch (err) {
            next(err);
        }
    }
    static async delete(req, res, next){
        try{
            const result = await Movie.deletedOne(req.params.id);
            res.send({
                success: true,
                result

            });

        } catch(err){
            next(err);
        }
    }
}

module.exports = MoviesController;
