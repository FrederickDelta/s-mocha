const { it } = require("mocha");

// const assert = require("assert");
const assert = require("chai").assert;
const sayHello = require("../app").sayHello;
const add = require("../app").add;

describe("App", () => {
  describe("sayHello()", () => {
    it("sayHello should return hello", () => {
      assert.equal(sayHello(), "hello");
    });
    it("sayHello should return type string", () => {
      assert.typeOf(sayHello(), "string");
    });
  });
  describe("add()", () => {
    it("1 + 1 = 2", () => {
      assert.equal(add(1, 1), 2);
    });
    it("2 + 2 > 3", () => {
      assert.isAbove(add(2, 2), 3);
    });
    it("add should return type number", () => {
      assert.typeOf(add(1, 1), "number");
    });
  });
});
