//Strict mod, "usestrict" eklenerek bildirilir.

"use strict";
myFunction();

function myFunction() {
  y = 3.14;   // This will cause an error (y is not defined)
}

//Sıkı mod, "güvenli" JavaScript yazmayı kolaylaştırır.
//Örnek olarak, normal JavaScript'te bir değişken adının yanlış yazılması yeni bir genel değişken oluşturur. 
//Katı modda bu, yanlışlıkla global bir değişken oluşturmayı imkansız hale getiren bir hata verir.
/*Katı modda, yazılamaz bir özelliğe, 
yalnızca alıcıya yönelik bir özelliğe, var olmayan bir özelliğe, 
var olmayan bir değişkene veya var olmayan bir nesneye yapılan herhangi bir atama hata verir. */

"use strict";
let eval = 3.14;   // This will cause an error 

//eval, arguments, delete değişken olarak kullanılamaz. get only kullanılamaz.
//açıklamaya with izin verilmez.
//

"use strict";
function myFunction() {
  alert(this);
}
myFunction();    //this undefined döner.