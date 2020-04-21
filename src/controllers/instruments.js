const head = require('lodash/head');
const isEmpty = require('lodash/isEmpty');

const {Instrument} = include('models');

class InstrumentsController {
    static async create(req, res, next) {
        try {
            const result = await Instrument.insertOne(req.body);
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
            const instruments = await Instrument.find(
                skip,
                filter
            );
            //const [{count}] = await Instrument.countDocuments();
            res.send({
                instruments,
                total: 150,
                limit: parseInt(process.env.PAGE_SIZE)
            });
        } catch(err) {
            next(err);
        }
    }
    static async fetchOne(req, res, next){
        try{
            const instrument = await Instrument.findById(req.params.id);

            if(isEmpty(instrument)){
                return res.status(404).send({code: 'INTRUMENT_NOT_FOUND'});

            }

            res.send(head(instrument));
        }catch(err){
            next(err);
        }
    }
    static async save(req, res, next) {
        try {
            const result = await Instrument.updateOne({id: req.params.id}, req.body);
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
            const result = await Instrument.deletedOne(req.params.id);
            res.send({
                success: true,
                result

            });

        } catch(err){
            next(err);
        }
    }
}

module.exports = InstrumentsController;
