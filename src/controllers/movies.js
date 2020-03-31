const {Movie} = include('models');

class MoviesController {
    static async fetch(req, res, next) {
        try {
            const movies = await Movie.find(req.query);
            const total = await Movie.countDocuments();
            console.log(total);
            res.send({
                movies,
                total: 100,
                limit: process.env.PAGE_SIZE
            });
        } catch(err) {
            next(err);
        }
    }
}

module.exports = MoviesController;
