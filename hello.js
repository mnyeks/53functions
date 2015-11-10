function helloWorld() {
  return "hello world";
} 

test("make sure that helloWorld returns 'hello world'", function(assert) {
  assert.equal( helloWorld(), "hello world", "I expect the value to be 'helloWorld'");
});


  
