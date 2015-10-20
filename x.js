module.exports = function f() {
	goto: x;
	console.log('do not enter');
	z:
	console.log(3);
	return 4;
	y:
	console.log(2);
	goto: z;
	x:
	console.log(1);
	goto: y;
};
