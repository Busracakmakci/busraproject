function ourResuableFunction() {
    console.log ("Heyya , World")

}

ourResuableFunction();


//arguments

function ourFunctionWithArgs (a,b) {
    console.log(a-b);

}
ourFunctionWithArgs(10,5);    // output 5.
function ourFunctionWithArgs (a,b) {
    console.log(a+b);
}
ourFunctionWithArgs (10, 5) //15

//GLOBAL SCOPE
 var myGlobal = 10;

 function fun() {
    oopsGlobal = 5;     // değişken koymadık ancak global olarak algılar.
 }

 function fun2()
{
    var output ="";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal ;
    }
    console.log (output);
}


// LOCAL SCOPE AND FUNCTIONS
function myLocalScope() {
    var myVar = 5 ;          // sadece fonksiyon içerisinde tanımladık. Local scope
    console.log (myVar);

}
   myLocalScope();

   console.log(myVar);     // fonksiyon dışında erişmeye çalıştığımız için hata verir. 



//GLOBAL VS LOCAL SCOPE FUNCTION
//HEM YEREL HEM DE GLOBAL DEĞİŞKENLERE SAHİP OLMAK MÜMKÜN..

var outerWear ="T-shirt" ;    

function myOutfit () {
    var outerWear = "sweater"        //YEREL DEĞİŞKEN
    return outerWear;              // GLOBAL DEĞİŞKENE GÖRE ÖNCELİKLİDİR
}
console.log (myOutfit());    // output: "sweater"
console.log (outerWear);     //output: "T-shirt"

