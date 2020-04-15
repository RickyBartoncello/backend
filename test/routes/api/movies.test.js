const {
    request,
    Sinon
} = require('..');

const {Movie} = include('models');

describe('api/movies', () => {
    // Descripcion de lo que estamos haciendo
    let modelFunction;
    let modelFunction2;
    let mockResult;

    beforeEach(() => {
        // se ejecuta antes de cada it << iteracion
        mockResult = [
            {
                id: '00000000-0000-0000-0000-000000000000',
                brand: 'fake-brand'
            },
            {
                id: '00000000-0000-0000-0000-000000000001',
                brand: 'fake-brand-2'
            }
        ];
        modelFunction = Sinon.stub(Movie, 'find').returns(Promise.resolve(mockResult));
        modelFunction2 = Sinon.stub(Movie, 'countDocuments').returns(Promise.resolve([{count: 120}]));
    });

    afterEach(() => {
        // se ejecuta dsp de cada it << iteracion
        Movie.find.restore();
        Movie.countDocuments.restore();
    });

    // Lo bueno
    // Lo Malo
    // Y Lo Prohibido -- Roles | <<<  >>>
    it('movies response', done => {
        request
            .get('/api/movies')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            /**
             *  Esto es tu body que se envia para post / put
                .send(JSON.stringify({
                    username: 'fake-user',
                    password: 'fake-password'
                }))
             */
            .expect(200)
            .end((err, res) => {
                const result = modelFunction.calledWith();
                const result2 = modelFunction2.calledWith();

                res.body.should.have.property('movies').which.is.an.Array();
                res.body.should.have.property('total').which.is.a.Number();
                res.body.should.have.property('limit').which.is.a.Number();
                res.body.movies.should.be.deepEqual(mockResult);
                console.log(result, result2);
                done();
            });
    });

});
