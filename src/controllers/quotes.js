const {Quote} = include('models');

class QuotesController {
    static async fetch(req, res, next) {
        try {
            const Quotes = await Quote.find(req.query);

            res.send(Quotes);
        } catch(err) {
            next(err);
        }
    }
}

module.exports = QuotesController;
