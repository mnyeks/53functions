function helloWorld() {
  return "hello world";
} 

test("make sure that helloWorld returns 'hello world'", function(assert) {
  assert.equal( helloWorld(), "hello world", "I expect the value to be 'helloWorld'");
});

function Hello_uppercase(mnyeks) {
  return "Hello, " + mnyeks;
}

test("make sure that uppercase  is returned as'HELLO and the USERNAME", function(assert) {
  assert.equal(Hello_uppercase("MNYEKS"), "Hello, MNYEKS");
});
  
