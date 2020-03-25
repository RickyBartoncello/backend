const {Quote} = include('models');

class QuotesController {
    static async fetch(req, res, next) {
        try {
            const quotes = await Quote.find(req.query);
            const total = await Quote.countDocuments();
            console.log(total);
            res.send({
                quotes,
                total: 370,
                limit: process.env.PAGE_SIZE
            });
        } catch(err) {
            next(err);
        }
    }
}

module.exports = QuotesController;
