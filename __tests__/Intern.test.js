// =============
//   Import...
// =============
const Intern = require('../lib/assets/js/Intern.js');

// ============
//   Tests...
// ============
test('creates an intern\'s object', () => {
    const intern = new Intern('Victor', 'vmlujanjr@outlook.com', '123456789012', 'Southern Methodist University');

    // get intern information
    expect(intern.school).toBe('Southern Methodist University');
});

test('get Intern\'s school name', () => {
    const intern = new Intern('Victor', 'vmlujanjr@outlook.com', '123456789012', 'Southern Methodist University');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('get Intern\'s role', () => {
    const intern = new Intern('Victor', 'vmlujanjr@outlook.com', '123456789012', 'Southern Methodist University');

    expect(intern.getRole()).toBe('Intern');
});