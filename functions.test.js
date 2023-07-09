const functions = require('./functions');
// toBe
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
}); 
// not 
test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
}); 


// should be null
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
}); 

// toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
}); 

// toEqual
test('User should be Brad Traversy object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Brad',
        lastName: 'Traversy' 
    });
}); 

// Less than and greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
}); 

// Regex
test('There is no I in team', () => { 
    expect('team').not.toMatch(/I/);
});

// Arrays 
test('Admin should be in username', () => { 
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
})
