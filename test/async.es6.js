/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

describe("async functions and await expressions", function() {
  var assert = require("assert");

  describe("wrapGenerator", function() {
    it("should be defined globally", function() {
      var global = Function("return this")();
      assert.ok("wrapGenerator" in global);
      assert.strictEqual(global.wrapGenerator, wrapGenerator);
    });

    it("should be a function", function() {
      assert.strictEqual(typeof wrapGenerator, "function");
    });
  });

  describe("Promise", function() {
    it("should be defined globally", function() {
      var global = Function("return this")();
      assert.ok("Promise" in global);
      assert.strictEqual(global.Promise, Promise);
    });

    it("should be a function", function() {
      assert.strictEqual(typeof Promise, "function");
    });
  });
});
