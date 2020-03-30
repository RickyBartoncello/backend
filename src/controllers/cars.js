const head = require('lodash/head');
const isEmpty = require('lodash/isEmpty');

const {Car} = include('models');

class CarsController {
    static async create(req, res, next) {
        try {
            const result = await Car.insertOne(req.body);
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
            const cars = await Car.find(req.query);
            const total = await Car.countDocuments();
            res.send({
                cars,
                total: 100,
                limit: process.env.PAGE_SIZE
            });
        } catch(err) {
            next(err);
        }
    }
    static async fetchOne(req, res, next){
        try{
            const car = await Car.findById(req.params.id);

            if(isEmpty(car)){
                return res.status(404).send({code: 'CAR_NOT_FOUND'});

            }

            res.send(head(car));
        }catch(err){
            next(err);
        }
    }
    static async save(req, res, next) {
        try {
            const result = await Car.updateOne({id: req.params.id}, req.body);
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
            const result = await Car.deletedOne({id: req.params.id});
            res.send({
                success: true,
                result

            });

        } catch(err){
            next(err);
        }
    }
}

module.exports = CarsController;
