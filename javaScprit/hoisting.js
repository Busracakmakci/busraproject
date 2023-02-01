//hoisting


//Başka bir deyişle; Bir değişken, bildirilmeden önce kullanılabilir.

x = 5; // Assign 5 to x
var x; // Declare x


// try {
//     carName = "Saab";
//     let carName = "Volvo";
//   }
//   catch(err) {
//     document.getElementById("demo").innerHTML = err;
//   }     //referenceEror   letBildirilmeden önce bir değişken kullanmak , bir ReferenceError.
  
  
//   carName = "Volvo";
// let carName;    //sonuç ReferenceEror

// carName = "Volvo";
// const carName;    //bu kod çalışmaz. bildirilmeden önce değişken kullanmak const hatasıdır..


//NOTE: Hoisting (birçok geliştirici için) JavaScript'in bilinmeyen veya gözden kaçan bir davranışıdır.