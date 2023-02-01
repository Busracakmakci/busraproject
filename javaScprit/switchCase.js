// SWİTCH CASE
//İF ELSE ALTERNATİFİ

// switch(deger) {
//     case 1;
//             kodlar
//     break;
//     case 2:
//            kodlar
//      break; 
    //     default:
    //     kodlar
    //    break; }      

    
    // ÖRNEK:

    let sayi=prompt("Lütfen 1 ile 3 arasında sayi giriniz");
    switch(sayi){
        case "1" :          //eşitliğin her 2 tarafı da aynı tipte olsun.
        console.log("Girilen sayi 1 dir");
        break;
        case "2":
            console.log ("girilen sayi 2 dir");
        break;
        case " 3":
        console.log ("Girilen sayi 3 tür")   
        break;
        default:
            console.log ("Girilen sayı 1 ile 5 arasında olmalıdır!");
    }

// ORNEK ATM UYGULAMASI   ---KOD HATALI ÇALIŞMIYOR ----

let metin ="1-Bakiye Görüntüleme" +yeniSatir
+"2-Para Çekme" + yeniSatir
+"3-Para Yatırma" + yeniSatir
+ "4-Çıkış" + yeniSatir
+"Lütfen bir değer seçiniz";

let secim =prompt (metin);
switch (secim) {
    case "1":
        alert("bakiyeniz:" + bakiye);
 
        break;
    case "2":
        let cekilecekTutar= Number (prompt ("çekmek istediğiniz tutarı giriniz:"));
        if(cekilecekTutar<bakiye) {

        }else {
            alert ("bakiyenizden fazla çekemezsiniz"+yeniSatir+ "bakiye:" + "+bakiye"+ "" + "Cekilecek tutar:" +cekilecekTutar);
        }    
        break;
    case "3" :
        let yatirilacakTutar = Nuöber (prompt("yatırılacak tutarı giriniz: "));
        bakiye= bakiye + yatirilacakTutar;
        alert ("güncel bakiyeniz" + bakiye);
        break;
    case "4":
          console.log("sistemden çıkış yapılmıştır..");
          break;      

    default:
        console.log ("lütfen 1-4 arasında değer giriniz");
        break;
}

