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
 assert.equal( number_list("Mnyeks"),n );
});
