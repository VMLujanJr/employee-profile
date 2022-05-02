// =============
//   Import...
// =============
const Intern = require('../lib/assets/js/Intern.js');

// ============
//   Tests...
// ============
test('creates an intern\'s object', () => {
    // create a new Intern instance
    const intern = new Intern('Southern Methodist University');

    // get intern information
    expect(intern.school).toBe('Southern Methodist University');

});

test('get Intern\'s school name', () => {
// create a new Intern instance
const intern = new Intern('Southern Methodist University');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('get Intern\'s role', () => {
// create a new Intern instance
const intern = new Intern('Southern Methodist University');

    expect(intern.getRole()).toBe('Intern');
});