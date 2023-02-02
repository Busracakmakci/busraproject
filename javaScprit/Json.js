//JSon verileri depolamak ve taşımak için kullanılan bir formattır. 
//Java SCript Object Notation
//* JSON sözdizimi, JavaScript nesne gösterimi sözdiziminden türetilmiştir, ancak JSON biçimi yalnızca metindir.
/* KURALLAR
  Veriler ad/değer çiftlerindedir
Veriler virgülle ayrılır
Kaşlı ayraçlar nesneleri tutar
Köşeli parantezler dizileri tutaR */

//ORN.
"employees":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
  ]


  //JSON.parse() BİR DİZİYİ JS NESNESİNE DÖNÜŞTÜRMEK İÇİN

  let text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

const obj = JSON.parse(text);
document.getElementById("demo").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;