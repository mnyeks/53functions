test("make sure that helloWorld returns 'hello world'", function(assert) {
  assert.equal( helloWorld(), "hello world", "I expect the value to be 'helloWorld'");
});

test("make sure that uppercase  is returned as'HELLO and the USERNAME", function(assert) {
  assert.equal( Hello_uppercase("MNYEKS"), "Hello, MNYEKS");
});

test("taking a username as parameter and returns Hello", function(assert) {
 
 assert.equal( hello_joe("Joe"), "Hello!");
 assert.equal( hello_joe("Mnyeks"), "Hello, Mnyeks!");
 assert.equal( hello_joe("Bob"), "Hello!");
 });

test("takes a number as parameter(n) and returns a list of numbers from 1 to n", function(assert) {
 assert.deepEqual(number_list(20),[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
});

test("takes a number as a parameter (n) and returns the sum of numbers from 1 to n", function(assert) {
 assert.deepEqual(sum_numbers(5),15);
});

test("takes a string parameter and returns the length of the supplied parameter", function(assert) {
 assert.equal(length("kenneth"), 7);
});

test("takes a string parameter and returns the supplied parameter in uppercase", function(assert) {
 assert.equal(uppercase("Sharon"),"SHARON");
});

test("takes a string parameter and returns the reversed string parameter", function(assert) {
 assert.equal(reverse("emosewA"),"Awesome");
});

test("takes a number as parameter and returns a list of hello world entries equal to the number supplied", function(assert) {
 assert.deepEqual( hello_list(7), ["hello world", "hello world", "hello world", "hello world", "hello world", "hello world", "hello world"]);
});

test("a list of numbers returns the highest and lowest numbers in the list", function(assert) {
 assert.deepEqual( high_low(20), [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0])
})
