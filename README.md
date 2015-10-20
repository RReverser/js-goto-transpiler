regenerator
===========

This is a fork of [Facebook's regenerator](https://github.com/facebook/regenerator) which, in addition to original features, adds support for `goto` direct jumps inside of a function to JavaScript.

Example
-------

Sample code:

```javascript
function f() {
    goto: x;
    console.log("do not enter");
    z:
    console.log(3);
    return 4;
    y:
    console.log(2);
    goto: z;
    x:
    console.log(1);
    goto: y;
}

console.log("Let's do some evil!");
console.log('Result:', f());
```

Console output:

```
Let's do some evil!
1
2
3
Result: 4
```

Documentation
-------------

Read more about regenerator configuration and usage: https://github.com/facebook/regenerator

Read more on why I could ever want to create such an evil thing: https://rreverser.com/gotos-in-javascript-now-its-real/
