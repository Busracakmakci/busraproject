//KOŞUL YAPILARI
//if(koşul){  else{}
// İF ELSE: İKİ SEÇENEĞİN OLDUĞU YERLERDE KULLANILIR.
// İF ELSE İF ELSE: 2 DEN FAZLA SEÇENEĞİN OLDUĞU YERDE KULLANILIR.
// İF İF İF: HER BİR KOŞULU AYRI AYRI DEĞERLENDİRMEK İÇİN KULLANILIR.


//ORNEK NOT ORTALAMASI HESAPLAMA

let ort = (90+60)/2;

if(ort>=90){
    console.log("AA");
}
else if (ort>=85 && ort<90){ 
    console.log("BA");
}
else if (ort<85 && ort>=75) {
    console.log ("CB");
}
else if (ort<75 && ort>=65) {
    console.log ("DC");
}
else if (ort<65 && ort>=60) {
    console.log ("DD");
}
else if (ort<60 && ort>=50) {
    console.log("DF");
}
else if (ort<50) {
    console.log("FF");
}

//ÇOKLU İF YAPILARI

// ad: boş geçilemez
// Tckn :11 karakterden oluşsun

// function kontrolET (ad, tckn) {
//     if(ad!="") {
//         if(tckn.length==11) {
//             console.log ("isim ve tckn problemsiz girildi")
//         } else {
//             console.log ("lütfen tckn 11 karakter giriniz")

//         }else {
//             console.log("lütfen giriniz")
//         }
//     }
// }
//NOT: else ; if koşulu sağlanmadığında son olarak çalışır.

// ÇOKLU İF YAPISI ÖRNEĞİ
    //   function kontrolEt(ad, tckn) {
    //     if (ad==""){
    //         console.log("Lütfen isim alanını boş bırakmayın");
    //         return;
    //     }
    //     if(tckn.length!=11) {
    //         console.log("lütfen tc 11 karakter girin");
    //         return;
    //     }
    //          console.log("isim ve tckn problemsiz girildi");
    //   }




  

