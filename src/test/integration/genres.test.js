const request = require('supertest');
const url = 'http://localhost:8000/'

describe('POST /genre', function () {
    it('should register a new genre', function () {
        request(url)
            .post('genre')
            .send({
                name: 'Gênero teste'
            })
            .set('Accept', 'application/json')
            .expect(200)
            .then(response => {
                expect(response.body.message).toEqual("Gênero inserido com sucesso!");
            });
    });
});

describe('GET /genres', function () {
    it('should return all genres', function () {
        request(url)
            .get('genres')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
    });
});