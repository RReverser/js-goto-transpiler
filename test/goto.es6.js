var assert = require("assert");

describe("functions with gotos", function() {
  it("should jump between labels and return result", function() {
    var arr;
    function f() {
      arr = [];
      goto: x;
      arr.push('do not enter');
      z:
      arr.push(3);
      return 4;
      y:
      arr.push(2);
      goto: z;
      x:
      arr.push(1);
      goto: y;
    }
    f();
    assert.deepEqual(arr, [1, 2, 3]);
  });
});
