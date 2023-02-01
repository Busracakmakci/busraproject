
//DOĞUM GÜNÜ HESAPLAMA


var ay = prompt("Doğum Ayınızı giriniz.");
var gun = Number(prompt ("Doğum Gününüzü Giriniz."));

 if((ay=="Şubat" && gun>18 )||(ay=="Mart" && gun<21))
 {
alert ("Balık") 
 }
 else if((ay=="Mart" && gun>20)||(ay=="Nisan" && gun<21))
 {
 alert ("Koç")
  }
 else if((ay=="Nisan" && gun>20)||(ay=="Mayıs" && gun<22))
{
alert ("Boğa")
}
 
 else if((ay=="Mayıs" && gun>21)||(ay=="Haziran" && gun<22))
 
 {
 alert ("İkizler") 
 }
 
 else if((ay=="Haziran" && gun>21)||(ay=="Temmuz" && gun<24))
 {
 alert ("Yengeç") 
 }
 else if((ay=="Temmuz" && gun>23)||(ay=="Agustos" && gun<24))
 {
 alert ("Aslan") 
 }
 else if((ay=="Agustos" && gun>23)||(ay=="Eylül"&& gun<24))
 {
 alert ("Başak") 
 }
 else if((ay=="Eylül" && gun>23)||(ay=="Ekim" && gun<24))
{
alert ("Terazi") 
}
 
 else if((ay=="Ekim" && gun>23)||(ay=="Kasım" && gun<23))
 {
alert ("Akrep")  
 }
 
 else if((ay=="Kasım" && gun>22)||(ay=="Aralık" && gun<23))
 {alert ("Yay") }
 
 else if((ay=="Aralık" && gun>22)||(ay=="Ocak" && gun<21))
 {alert ("Oğlak") }