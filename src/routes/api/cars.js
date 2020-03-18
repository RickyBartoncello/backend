const {
    CarController, StatesController
} = include('controllers');

module.exports = router => {
    router.get('/', CarController.fetch, StatesController.fetch);
    return router;
};
