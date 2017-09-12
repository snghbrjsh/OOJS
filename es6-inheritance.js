class Parent {
	constructor(opts){
		this.p1 = opts.p1,
		this.p2 = opts.p2;
	}
	m1() {
		console.log('m1 from Parent');
	}
}

class Child extends Parent{
	constructor(opts){
		super(opts);
		this.c1 = opts.c1;
	}

	m1(){
		super.m1();
		console.log('m1 from Child');
	}
}

class GrandChild extends Child{
	constructor(opts){
		super(opts);
		this.gc1 = opts.gc1;
	}
	m1(){
		super.m1();
		console.log('m1 from GrandChild');
	}

	static mx() {
		console.log('static Function of GrandChild');
	}
}

var grandChild = new GrandChild({gc1: 'GrandChild', c1: 'Child', p1: 'Parent1', p2: 'Parent2'});

grandChild.m1();