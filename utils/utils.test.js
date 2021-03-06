const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
	describe('#add', () => {
		it('should add two numbers', () => {
			const result = utils.add(3, 2);

			expect(result).toEqual(5);
		});
	});

	describe('#asyncAdd', () => {
		('should async add two numbers', (done) => {
			utils.asyncAdd(4, 3, (sum) => {
				expect(sum).toEqual(7);
				one();
			});
		});
	});

	describe('#square', () => {
		it('should square value of a number', () => {
			const result = utils.square(3);

			expect(result).toEqual(9);
		});
	});

	describe('#asyncSquare', () => {
		it('should async square value of a number', (done) => {
			utils.asyncSquare(3, (square) => {
				expect(square).toEqual(9);
				done();
			});
		});
	});

	describe('#setName', () => {
		it('should contain firstName and lastName', () => {
			const user = {
				age: 30,
				city: 'Lviv',
			};

			const result = utils.setName(user, 'Kamilius Hutsul');

			expect(result).toEqual(
				expect.objectContaining({
					firstName: 'Kamilius',
					lastName: 'Hutsul',
				}),
			);
		});
	});
});
