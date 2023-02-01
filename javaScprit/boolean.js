//  Boolean Veri Türü 

//0 ve 1 

let isActive=false; // 0
isActive= true; // 1
console.log(isActive)

let userName;
let isUserName= Boolean (userName)
console.log(isUserName)


Boolean("11")  //true
Boolean("0")   //true


userName="user"
console.log ("user Name")

// 0, -0 null false NaN undefined ("")  ->
Boolean (0)   //false
Boolean (-0)   //false
Boolean  (-0.1)   //false
Boolean ("")   //false
Boolean(x)     //false
Boolean(NaN)    //false
Boolean(false)   //false


//let x = 10 / "Hallo";
//Boolean(x);                //false   

//Boolean ("javascript")   //true
//var x;


Boolean (userName.legth >0 ) //true   (if yapısının ilk koşul kısmı gibi kullanımı) 
Boolean (0==0)    //true

let x = false;
let y = new Boolean(false);
// typeof x returns boolean
// typeof y returns object



