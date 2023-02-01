// Basic Functions


///ORNEK YAS HESAPLAMA
function yasHesapla (dogumYili) {
    return 2018 - dogumYili
 } 
 let ageAda=yasHesapla(1983);
 
 console.log (ageAda);
 
 
 //ornek
 
 function EmekligeKacYilKaldi(dogumYili, isim) {
     let yas = yasHesapla(dogumYili);
     let emeklilik= 65-yas;
     
     if(emeklilik >0){
     console.log(`${isim} emekli olmana ${emeklilik} yıl kaldı`);
     }else {
       console.log(`Zaten emekli oldunuz`);
     }
 }
 EmekligeKacYilKaldi(2012, `ADA`);
 EmekligeKacYilKaldi(2010, `ASAM`);
 EmekligeKacYilKaldi(1950, `MEHMET`);
 
 
 /* //Function Declarations
  function sum(a,b ) {
     var c =a+b;
     return c;
     }
  console.log(sum(10,20)); */
  
  // Function Expressions   
 /* const sum = function (a,b){   // fonsiyon tanımı değişkenin içerisinde.
    
  if(typeof a === `undefined`) {   // bu şekilde yaparsak NaN çıktısı olmaz
       a=0;
    }
    if(typeof b=== `undefined`){
       b=0;
    }
    var c= a+b;
    return c;
 }
  console.log(sum(10,30)); 
  console.log(sum(10));  // (10,) b ye değer eklemezsek NaN değeri gelir.
  console.log(sum(10,20,30,40)); // değişmez 40 değeri çıkar... */
  
 
 
 //ES6 DEFAULT PARAMETERS 
 //ile gelen bir özellikle a ve b yi 0 tanımlayabiliriz.
 
 /*  const sum = function (a=0,b=0){   
    
    var c= a+b;
    return c;
  }
  
  console.log(sum(10,30)); 
  console.log(sum(10));  
  console.log(sum(10,20,30,40));  */
  
  
  //
  
   const sum = function (a=0,b=0){   
    var c= a+b;
    return c;
 }
 //Girilen bütün parametreleri fonskiyona yazdırır.
    function sumAll() {    
     var total=0;
    for(let i=0;i<arguments.length;i++){
        total+=arguments[i];
 }
             return total;
 }
 
  console.log(sum(10,30)); 
  console.log(sum(10));  
  console.log(sumAll(10,20,30,40)); 
  
  
  