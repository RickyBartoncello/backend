const {MoviesController} = include('controllers');

module.exports = router => {
    router.route('/')
        .get(MoviesController.fetch)
        .post(MoviesController.create);
    router.route('/:id')
        .put(MoviesController.save)
        .delete(MoviesController.delete)
        .get(MoviesController.fetchOne);
    return router;
};
