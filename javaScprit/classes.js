//CLASSES   : Javascript sınıfı bir nesne değildir. nesneler için şablondur.

class Car {                             //"car" adlı bir sınıf oluşturur.
    constructor(name, year) {        //sınıfın 2 başlangıc özelliği vardır "ad" ve "yıl".
      this.name = name;              
      this.year = year;
    }
  }

  const myCar = new Car("Ford", 2014);    //yeni nesneler oluşturmak için kullanabilirsiniz
  

  //Parametreleri Class yöntemlerine gönderebilirsiniz:
  class Car1 {
    constructor(name, year) {
      this.name = name;
    this.year = year;
    }
    age(x) {
      return x - this.year;
    }
  }
  
  let date = new Date();
   let year = date.getFullYear();
  
  let myCar1 = new Car1("Ford", 2014);
  document.getElementById("demo").innerHTML=
   "My car is " + myCar.age(year) + " years old.";