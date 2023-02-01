//This: anahtar sözcük bir nesneyi ifade eder.
//thisbir değişken değildir. Bu bir anahtar kelimedir. değerini değiştiremezsiniz.

const person4 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  //Tek başına kullanıldığında , global nesneyithis ifade eder .

//Çünkü thisglobal kapsamda çalışıyor.
let x = this;

<button onclick="this.style.display='none'">Click to Remove Me!</button> //html ögesini ifade eder.

//Aşağıdaki örnek, bağımsız değişken olarak kişi1.fullName ile kişi2'yi çağırır; bu , 
//fullName, kişi1'in bir yöntemi olsa bile, kişi2'ye atıfta bulunur:

const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = {
    firstName:"John",
    lastName: "Doe",
  }
  
  // Return "John Doe":
  person1.fullName.call(person2);

 // Yöntem ile bind(), bir nesne başka bir nesneden bir yöntem ödünç alabilir.  
 
   const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person.fullName.bind(member);



  //oncelik
  /*
  Precedence	Object
1	           bind()
2	           apply() and call()
3	           Object method
4	           Global scope       */