QUnit.test('Testing calculateArea function with several sets of inputs', function (assert) {
    assert.equal(App.sqaure(5), 25, 'Tested with positive number');
    assert.equal(App.square(0), 0, 'Tested with 0');
    assert.equal(App.square(-5), 25, 'Tested with negative number. Any arguments less than 1 will be set to 1.');
    assert.throws(function () { App.calculateArea('a'); }, /The given argument is not a number/, 'Passing in a string correctly raises an Error');
  });
  