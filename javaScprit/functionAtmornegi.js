 // Demo : Functions
 
 //ATM ÖRNEĞİ
 
 var hesapA = {
    ad: `Sena Turam`,
    hesapNo :`12345678`,
    bakiye : 2000,
    ekHesap : 1000
}
var hesapB={
     ad: `Emel Turan`,
     hesapNo : `12345679`,
     bakiye : 3000,
     ekHesap : 2000
}

function paraCek(hesap, miktar){
       console.log(`Merhaba ${hesap.ad}`);
       if(hesap.bakiye >= miktar) {
                hesap.bakiye=hesap.bakiye-miktar;
                 console.log(`paranızı alabilirsiniz`);     
       }else {
           var toplam = hesap.bakiye+hesap.ekHesap;
           
           if (toplam>=miktar) {
              if(confirm(`ek hesabınızı kullanmak ister misiniz`))
              {
              console.log (`paranızı alabilirsiniz`);
              var bakiye= hesap.bakiye;
              var ekhesap = miktar-bakiye;
              hesap.bakiye =0;
              hesap.ekhesap=hesap.ekhesap-ekhesap;
              }else {
                   console.log(`${hesap.hesapNo} nolu hesabınızda
                   ${miktar} bulunmamktadır.`);
              }
           }else {
                console.log(`Üzgünüz bakiye yetersiz`);
           }
       }
}
paraCek(hesapA,2000);
paraCek(hesapB,1000);