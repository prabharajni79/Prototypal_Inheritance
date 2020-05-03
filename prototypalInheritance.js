# Prototypal_Inheritance
 document.write("Prototypal Inheritance in Javascript<br>Mobile Method object value of a: ");
    //console.log(x);
    function mobile() { this.a=30;  };
              mobile.prototype.z= 40;
              var m=new mobile();
    function Samsung(){ mobile.call(this); this.b=20; }

document.write(m.a); //30
document.write("<br>Mobile object prototype value m. Z= ");//40
document.write(m.z);
//var s=new Samsung();
Samsung._proto=Object.create(mobile.prototype);
var s=new Samsung();
document.write("<br>Samsung object value  a: ");
document.write(s.a); //30
document.write("<br>");
document.write("Samsung object value  b: ");
document.write(s.b);//20
document.write("<br>Samsumg object accessed prototype of mobile object = ");
document.write(Samsung._proto.z);  //40

document.write("<br> samsung object a assigned new value a : ");

s.a=10;
document.write(s.a); //10
document.write("<br> Mobile object value NOT changed a :");
document.write(m.a);//10

Samsung.prototype.constructor=new Samsung();
Samsung.prototype.z=90;
document.write("<br> Samsung object prototype inheritance manipulated value : ");
document.write(s.z);//90
document.write("<br>");
