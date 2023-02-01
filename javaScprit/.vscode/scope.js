/// scope 

/*   
    1- Block scope
    2.function scope
    3- Global scope
    */


    // Bir { } bloğu içinde bildirilen değişkenlere bloğun dışından erişilemez:  let ve const.
    // Anahtar kelime ile bildirilen değişkenler var blok kapsamına sahip OLAMAZ. erişebilir;  var


    /*
    local scope
    Bir JavaScript işlevi içinde bildirilen değişkenler, işlev için YEREL hale gelir .
    Lokal değişkenler sadece kendi fonksiyonları içinde tanındıkları için aynı isme sahip değişkenler farklı 
    fonksiyonlarda kullanılabilir.

     Yerel değişkenler, bir işlev başladığında oluşturulur ve işlev tamamlandığında silinir.  



     */

     /* 
     function scope
     Her işlev yeni bir kapsam oluşturur.
     Bir fonksiyon içinde tanımlanan değişkenlere fonksiyon dışından erişilemez (görünmez).
     */


     /*
     global variables scope
     Bir işlevin dışında bildirilen bir değişken, GLOBAL olur .
     Bir web sayfasındaki tüm komut dosyaları ve işlevler ona erişebilir. */

     /*  otomatik GLOBAL SCOPE
     Bildirilmemiş bir değişkene bir değer atarsanız, otomatik olarak GLOBAL değişkeni olur.
     All modern browsers support running JavaScript in "Strict Mode".  */

   /* HTML VARIABLES
      Anahtar sözcükle tanımlanan genel değişkenler var, pencere nesnesine aittir:
      Anahtar sözcükle tanımlanan genel değişkenler let, pencere nesnesine ait değildir:

    */


      //NOTE::
      //Niyet etmedikçe global değişkenler OLUŞTURMAYIN.

     // Genel değişkenleriniz (veya işlevleriniz), pencere değişkenlerinin (veya işlevlerinin) üzerine yazabilir.
     // Pencere nesnesi dahil herhangi bir işlev, genel değişkenlerinizin ve işlevlerinizin üzerine yazabilir. 
     /*Bir JavaScript değişkeninin ömrü, bildirildiği andan itibaren başlar.

Fonksiyon (yerel) değişkenleri, fonksiyon tamamlandığında silinir.

Bir web tarayıcısında, tarayıcı penceresini (veya sekmesini) kapattığınızda genel değişkenler silinir. */