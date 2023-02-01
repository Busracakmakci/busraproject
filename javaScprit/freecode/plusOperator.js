var ourStr= "I come first." + "I come second." ;
console.log(ourStr); // "I come first. I come second"

// += ile birleştirme

var ourStr = " I come first." ;
ourStr += "I come second.";

// 

var ourName ="freeCodeCamp";
var ourStr = "Hello, our name is"+ ourName + ", how are you ?" ;

//only change code below this line

var myName="Beau";
var myStr= "My name is " + myName + " and I am well! ";
console.log(myStr) ;

//DİZELERE DEĞİŞKEN EKLEME

var someAdjective= "worthwhile";
var myStr ="Learning to code is";
myStr += someAdjective;

//DİZENİN UZUNLUĞUNU BUL

var firstNameLenght = 0 ;
var firstName = "Ada";

firstNameLenght = firstName.length;  //karakter uzunluğunu bulmak için

firstLetterOfFirstName = firstName [0];    //indekse göre dizideki sayıyı bulma.

//Dize değişmezliği
var myStr = "Jello Wolrd";
myStr= "H";    // Bunu merhaba dünya olarak değiştirebiliriz ama tek bir harfi değiştiremeyiz..


// son karakteri bilmeseniz bile onu bulabilirsiniz.
var firstName = "Ada";
var lastLetterOfFirstName= firstName[firstName.lenght-1];  // -3 yaparsan sondan 3. 

//WORD BLANKS

function wordBlanks (myNoun, myAdjective, myVerb, myAdverb) {
var result ="";
result += "The" + myAdjective + " " + myNoun + " " + myVerb + " to the store"
return result;
}

console.log (wordBlanks("dog","big", "ran", "quickly"));   // çıktısı: The big dog ran to the store quickly. 


















