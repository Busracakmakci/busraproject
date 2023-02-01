//ERRORS

/*
try :   denemek için bir kod bloğu tanımlar
catch : herhangi bir hatayı işlemek için kod bloğu tanımlar.   
finally : sonuçtan bağımsıx olarak çalıştırılacak bir kod bloğunu tamınlar.
throw : özel bir hatayı tanımlar

*/

//ornk
// try {
//     Block of code to try
//   }
//   catch(err) {
//     Block of code to handle errors
//   }
//   finally {
//     Block of code to be executed regardless of the try / catch result
//   }


try {
    alerdft("Welcome guest!");  // try hatalar için  test edilecek bir kod bloğunu tanımlamanıza izin verir.
  }
  catch (err) {         // catch de try bloğunda bir hata oluşursa 
    console.log(err);  
  }


  // JavaScript will throw an exception (throw an error).
 

  /*
  Error Name	Description
EvalError	An error has occurred in the eval() function
RangeError	A number "out of range" has occurred
ReferenceError	An illegal reference has occurred
SyntaxError	A syntax error has occurred
TypeError	A type error has occurred
URIError	An error in encodeURI() has occurred

*/