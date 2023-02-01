// FOR DÖNGÜSÜ

// for (değisken; kosul ; attırma-azaltma) {
//     kodlar
// }

// for (let=1; i<10; i++) {
//     console.log(i);
// }


// ÖRNEK: 1 den 10 a kadar yazdıralım

for(let i=1; i<=10; i++) { 
    console.log(i);
}

//ornek

for (let i=1; İ<=10; i++) {
    if(i%2==1) {
        console.log("penguen");

    }else {
        console.log ("koala");
    }
}

//ornek 50 den 1 e kadar yazdır toplayalım

let toplam= 0;
for(let i=50; i>=1; i--){
    toplam=toplam+i;
    console.log (i);
}
console.log("Toplam :", toplam);
