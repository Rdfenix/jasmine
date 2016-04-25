describe('Some feature', function() {
	describe('#Some Function', function() {
		it('Should return true when called', function() {
			// ambos verificam se a condição é verdadeira.
			//expect(someFunction()).toEqual(true);
			expect(someFunction()).toBeTruthy();
		});
		it('return the array of names', function() {
			// Verifica se contem a informação passada
			expect(anotherFunction()).toContain("Rudnei");
		});
	});
});

describe('User', function() {
	it('Should ensure that the user is 21 or loder', function() {
		// verficica se no objeto passado contem o valor acima de 20
		expect(User.getAge()).toBeGreaterThan(20);
	});
});