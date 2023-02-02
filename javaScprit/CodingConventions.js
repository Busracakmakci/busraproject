//camelCase   hyp-hens        under_scores
firstName = "John";
//Operatörlerin etrafına ( = + - * / ) ve virgüllerden sonra daima boşluk koyun:

let x = y + z;
const myArray = ["volvo", "saab", "fiat"];

//Kod bloklarının girintisi için her zaman 2 boşluk kullanın:

function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);  //basit bir ifadeyi her zaman noktalı virgülle bitirin.
  }

  /*Karmaşık (bileşik) ifadeler için genel kurallar:

Açılış parantezini ilk satırın sonuna koyun.
Açma parantezinden önce bir boşluk kullanın.
Kapatma parantezini başında boşluk olmadan yeni bir satıra koyun.
Karmaşık bir ifadeyi noktalı virgülle bitirmeyin.*/


for (let i = 0; i < 8; i++) {
    x += i;
  }
//
  if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  //nesne kuralları
//   Açılış köşeli parantezini nesne adıyla aynı satıra yerleştirin.
// Her özellik ve değeri arasında iki nokta üst üste artı bir boşluk kullanın.
// Sayısal değerlerin etrafında değil, dize değerlerinin etrafında tırnak işaretleri kullanın.
// Son özellik-değer çiftinden sonra virgül eklemeyin.
// Kapatma parantezini, başında boşluk olmadan yeni bir satıra yerleştirin.
// Bir nesne tanımını her zaman noktalı virgülle bitirin.
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
const person2= {firstName:"Busra", lastName:"cak", age:18, eyeColor:"brown"}; //tek satır bu şekilde yazılabilir

// Satır Uzunluğu < 80
//"Düzensiz" HTML stilleri kullanmanın bir sonucu olarak, JavaScript hatalarına neden olabilir.
// const a = getElementById("Demo")

// const a = getElementById("demo")
// küçük harf dosya adları kullanın.