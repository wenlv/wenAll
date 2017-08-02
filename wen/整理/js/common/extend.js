function extend(subClass,superClass){
	var F=function(){};
	F.prototype=superClass.prototype;
	subClass.prototype=new F();
	subClass.prototype.constructor=subClass;
	subClass.superclass=superClass.prototype;
	if(superClass.prototype.constructor==Object.prototype.constructor){
		superClass.prototype.constructor=superClass;
	}
};
//=========================使用举例==================================
//function Animal(name){
//	this.name=name;\
//	this.type="animal";
//}
//
//Animal.prototype={
//	say:function(){
//		alert("i am an"+this.type+",my name is"+this.name);
//	}
//}
//
//function Bird(name){
//	this.constructor.superclass.constructor.apply(this,arguments);
//	this.type="bird";
//}
//extend(Bird,Animal);
//Bird.prototype.fly=function(){
//	alert("i am flying");
//}
//var  canary=new Bird("xiaocui");
//canary.say(); // i am bird,my name is xiaocui
//canary.fly();  //i am flying
//==========================================================