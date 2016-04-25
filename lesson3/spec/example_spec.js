describe('Some feature', function() {
	describe('#Some Function', function() {
		it('Should return true when called', function() {
			//expect(someFunction()).toEqual(true);
			expect(someFunction()).toBeTruthy();
		});
		it('return the array of names', function() {
			expect(anotherFunction()).toContain("Rudnei");
		});
	});
});