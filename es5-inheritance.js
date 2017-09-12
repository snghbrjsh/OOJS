function Parent(opts){
	this.p1 = opts.p1,
	this.p2 = opts.p2;
}
Parent.prototype.m1 = function(){
	console.log('m1 from Parent');
}

function Child(opts){
	this.c1 = opts.c1;
	Object.getPrototypeOf(Child.prototype).constructor.call(this, opts);
}
Child.prototype = Object.create(Parent.prototype, {
	constructor:{
		value: Child,
		writable: false,
		configurable: false,
		enumerable: false
	}
});
Child.prototype.m1 = function(){
	Object.getPrototypeOf(Child.prototype).m1();
	console.log('m1 from Child');
}

function GrandChild(opts){
	this.gc1 = opts.gc1;
	Object.getPrototypeOf(GrandChild.prototype).constructor.call(this, opts);
}
GrandChild.prototype = Object.create(Child.prototype, {
	constructor: {
		value: GrandChild,
		writable: false,
		configurable: false,
		enumerable: false
	}
});
GrandChild.prototype.m1 = function(){
	Object.getPrototypeOf(GrandChild.prototype).m1();
	console.log('m1 from GrandChild');
}
GrandChild.mx = function(){
	console.log('static Function of GrandChild');
}

var grandChild = new GrandChild({gc1: 'GrandChild', c1: 'Child', p1: 'Parent1', p2: 'Parent2'});
grandChild.m1();
GrandChild.mx();