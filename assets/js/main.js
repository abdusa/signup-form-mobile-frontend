var foo = {
  a: "Hello",
  b: function() {
    return this.a;
  }
};

console.log(foo.b());
