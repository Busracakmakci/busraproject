//Date Kullanımı


//let tarih= new Date (1999,08,07,10,40,50); //girdiniz tarihi  yazar.
//console.log(typeof tarih);

//let tarih = new Date();
//console.log(tarih);


//console.log(typeof tarih.toString());   //tarih objedir.tarihi stringe çevir ve tipine bak..


//GET METOTLARI DEĞERİ ALMAK İÇİN KULLANILIR

//console.log(tarih.getFullYear());
//console.log(tarih.getDate());     //ayın kaçıncı gününü veriyor
//console.log(tarih.getDay());      //haftanın gününü veriyor
//console.log(tarih.getHours());
//console.log(tarih.getMilliseconds());
//console.log(tarih.getMinutes());
//console.log(tarih.getMount()+1);    //Aylar sıfırdan başlar... veya +1 ekleyebilirsin.
//console.log(tarih.getSeconds));
//console.log(tarih.toLocaleDateString());     //Yıl/ay/gün
//console.log(tarih.toLocaleTimeString());      //saat/dk/saniye
//console.log(tarih.toLocaleString());          // Yıl/ay/gün +  saat/dk/saniye


//SET METOTLARI YENİ DEĞER VERMEK İÇİN KULLANILIR.

//console.log(tarih);
//tarih.setDate(24);
//tarih.setHours(15);
//tarih.setMount(11),
//tarih.setMinutes(50);

//tarih.setHours(tarih.getHourse()+2); // Mevcut saate 2 saat ekleyebilirsin..
//console.log(tarih);

var thisDate= new Date ();
thisDate.setFullYear(2000,3,4);
var today =new Date();
if(today>thisDate)
{
    console.log("Doğum günü geçmiş");

}
else {
    console.log("doğum gününe daha çok var");
}

//ornek

     
var a =new Date(1995);
var b =new Date(2023);
var zamanFark=math.abs (a.getTime()-b.getTime()); // math.abs mutlaak değer gibi düşün.
console.log(zamanFark);