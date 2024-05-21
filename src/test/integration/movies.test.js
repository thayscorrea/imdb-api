const request = require('supertest');
const url = 'http://localhost:8000/'

let movieID = 0

describe('POST /movie', function () {
    it('should register a new movie', function () {
        request(url)
            .post('movie')
            .send({
                name: 'Filme teste',
                year: 2022,
                time: '01:55:00',
                sinopse: 'Sinopse do filme teste',
                image: 'url',
                genres: [1, 2, 3],
                directors: 'Diretores do filme teste',
                actors: 'Atores do filme teste'
            })
            .set('Accept', 'application/json')
            .expect(200)
            .then(response => {
                expect(response.body).toHaveProperty('message');
                movieID = response.body.movieID
            });
    });
});

describe('GET /movies', function () {
    it('should return all movies', function () {
        request(url)
            .get('movies')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
    });
});

describe('GET /movie/id', function () {
    it('should return movie match for id = 1', function () {
        request(url)
            .get('movie/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                const data = response.body[0]
                expect(data).toHaveProperty('movieID');
            });
    });

    it('should return null, because no movie match with id = 5256', function () {
        request(url)
            .get('movie/5256')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toEqual([]);
            });
    });
});

describe('PUT /movie/id', function () {
    it('should edit new movie', async function () {
        request(url)
            .put('movie/' + movieID)
            .send({
                name: 'Filme teste API 2',
                year: 2022,
                time: '01:55:00',
                sinopse: 'Sinopse do filme teste',
                image: 'url',
                genres: [1, 2, 3],
                directors: 'Diretores do filme teste',
                actors: 'Atores do filme teste'
            })
            .set('Accept', 'application/json')
            .expect(200)
            .then(response => {
                expect(response.body).toHaveProperty('message');
            });
    });
});

describe('POST /movie/delete/:id', function () {
    it('should delete a new movie', async function () {
        request(url)
            .post('movie/delete/' + movieID)
            .set('Accept', 'application/json')
            .expect(200)
            .then(response => {
                expect(response.body).toHaveProperty('message');
            });
    });
});