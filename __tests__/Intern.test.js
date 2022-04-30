// =============
//   Import...
// =============
const Intern = require('../lib/assets/js/Intern.js');

// ============
//   Tests...
// ============
test('creates an intern\'s object', () => {
    const intern = new Intern('Southern Methodist University');

    // get intern information
/*     expect(intern.name).toBe('Victor');
    expect(intern.email).toBe('vmlujanjr@outlook.com'); */
    expect(intern.school).toBe('Southern Methodist University');
/*     expect(intern.id).toEqual(expect.any(Number)); */

});

test('get Intern\'s school name', () => {
    const intern = new Intern('Southern Methodist University');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

/* test('get Intern\'s role', () => {
    const intern = new Intern('Southern Methodist University');

    expect(intern.getRole()).toEqual(expect.stringContaining(intern.role.toString()));
}); */


/* test('creates an id for the intern\'s object', () => {
    const intern = new Intern('Victor', 'vmlujanjr@outlook.com', 'Southern Methodist University');



    expect(intern.getId()).toBeGreaterThanOrEqual(6);
    expect(intern.getId()).toBeLessThanOrEqual(12);

}); */