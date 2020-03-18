const {QuotesController} = include('controllers');

module.exports = router => {
    router.get('/', QuotesController.fetch);
    return router;
};
