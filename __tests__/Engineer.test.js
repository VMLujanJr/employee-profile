// =============
//   Import...
// =============
const Engineer = require('../lib/assets/js/Engineer.js');

// ============
//   Tests...
// ============
test('create an Engineer object', () => {
    const engineer = new Engineer ('Victor', 'vmlujanjr@outlook.com', '123456789012', 'VMLujanJr');

    expect(engineer.github).toBe('VMLujanJr');
});

test('get Engineer github', () => {
    const engineer = new Engineer ('Victor', 'vmlujanjr@outlook.com', '123456789012', 'VMLujanJr');
    
    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test('get Engineer role', () => {
    const engineer = new Engineer ('Victor', 'vmlujanjr@outlook.com', '123456789012', 'VMLujanJr');

    expect(engineer.getRole()).toBe('Engineer');
});