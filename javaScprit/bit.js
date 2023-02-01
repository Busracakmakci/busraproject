//   1= 00000001     (8 bit);
//   2= 00000010   
//   3= 00000011
//   R= 00000000



console.log( 1 | 2 ) ;   // Bitwise OR
console.log(1 & 2);       /// Bitwise And

//ORNEK READ, WHİTE, ECECUTE (YAZMA İZNİ VERME)
//  00000100
//  00000110
//  00000111

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission =0;
myPermission = myPermission | writePermission;

let message =
 (myPermission & readPermission) ? `yes` : `no`;
 
 console.log (message);
 

   