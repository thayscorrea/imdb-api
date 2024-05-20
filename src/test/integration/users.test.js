const request = require('supertest');
const url = 'http://localhost:8000/'

describe('GET /users', function () {
    it('should return all users', function () {
        request(url)
            .get('users')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
    });
});

describe('GET /user/id', function () {
    it('should return user match for id = 1', function () {
        request(url)
            .get('user/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                const data = response.body[0]
                expect(data).toHaveProperty('userID');
            });
    });

    it('should return null, because no user match with id = 5256', function () {
        request(url)
            .get('user/5256')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toEqual([]);
            });
    });
});

describe('POST /user', function () {
    it('should register a new user', function () {
        request(url)
            .post('user')
            .send({
                name: 'Teste API',
                email: 'teste-api@gmail.com',
                password: 'Teste@1234',
                type: 0
            })
            .set('Accept', 'application/json')
            .expect(200)
            .then(response => {
                expect(response.body).toHaveProperty('message');
            });
    });
});

describe('PUT /user', function () {
    it('should edit new user', async function () {
        let newUser = await request(url)
            .get('user')
            .send({
                email: 'teste-api@gmail.com'
            })
            .set('Accept', 'application/json');

        newUser = newUser.body[0]

        request(url)
            .put('user/' + newUser.userID)
            .send({
                name: 'Teste API 2',
                email: newUser.email,
                type: 0
            })
            .set('Accept', 'application/json')
            .expect(200)
            .then(response => {
                expect(response.body).toHaveProperty('message');
            });
    });
});

describe('POST /user/delete/:id', function () {
    it('should delete user match for id = 7', async function () {
        let newUser = await request(url)
            .get('user')
            .send({
                email: 'teste-api@gmail.com'
            })
            .set('Accept', 'application/json');

        newUser = newUser.body[0]

        request(url)
            .post('user/delete/' + newUser.userID)
            .set('Accept', 'application/json')
            .expect(200)
            .then(response => {
                expect(response.body).toHaveProperty('message');
            });
    });
});