const Manager = require('../lib/assets/js/Manager.js');

test('create Manager object', () => {
    const manager = new Manager ('Victor', 'vmlujanjr@outlook.com', '123456789012', '9564152269');

    expect(manager.officeNumber).toBe('9564152269');
});

test('get Manager role', () => {
    const manager = new Manager ('Victor', 'vmlujanjr@outlook.com', '123456789012', '9564152269');
    
    expect(manager.getRole()).toBe('Manager');
});