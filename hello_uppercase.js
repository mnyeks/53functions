function Hello_uppercase(mnyeks) {
  return "Hello, " + mnyeks;
}

test("make sure that uppercase  is returned as'HELLO and the USERNAME", function(assert) {
  assert.equal(Hello_uppercase("MNYEKS"), "Hello, MNYEKS");
});
  
