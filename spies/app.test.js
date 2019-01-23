const chai = require('chai');
const spies = require('chai-spies');
const rewire = require('rewire');

chai.use(spies);
const expect = chai.expect;

const app = rewire('./app');

describe('App', () => {
	let db = {
		saveUser: chai.spy(),
	};
	app.__set__('db', db);

	it('should call the spy correctly', () => {
		const spy = chai.spy();
		spy('Alex', 30);
		expect(spy).to.have.been.called.with('Alex', 30);
	});

	describe('#handleSignup', () => {
		it('should call saveUser with user object', () => {
			const email = 'alex@example.com';
			const password = 'examplePass';

			app.handleSignup(email, password);

			expect(db.saveUser).to.have.been.called.with({
				email,
				password
			});
		});

	})
});
