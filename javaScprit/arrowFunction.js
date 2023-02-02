// Arrow function daha kısa işlev sözdizimi sağlar


let myFunction = (a,b) => a*b;  

// Before Arrow

hello = function () {
    return "hello wolrd!";
}

//BEFORE ARROW
let hello = "";

hello = function() {
  return "Hello World!";
}

//With Arrow function

let hello1 = "";

hello1 = () => {
  return "Hello World!";  // İşlevin yalnızca bir değer döndürecekse return kaldırabilirsin
}

let hello3 = "";

hello3 = (val) => "Hello " + val;                       //parametrede çalışır

