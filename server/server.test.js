const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('Server', () => {
	describe('GET /', () => {
		it('should return "Hello world" response', (done) => {
			request(app)
				.get('/')
				.expect(200)
				.expect('Hello world')
				.end(done);
		});
	});

	describe('GET /users', () => {
		it('should return list of users', (done) => {
			request(app)
				.get('/users')
				.expect(200)
				.expect((res) => {
					expect(res.body).toEqual(expect.arrayContaining([{
						name: 'Alex',
						age: 30,
					}]));
				})
				.end(done);
		});
	});
})

