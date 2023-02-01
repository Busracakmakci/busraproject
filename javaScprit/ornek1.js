let dizi1= ["2","5","7","8"];


function stringToNumber(list) {
    let newList=[]
    list.forEach(item=>  {
       let numberItem=Number(item)
       newList.push(numberItem)
    });
    return newList;
  }

let dizi2=stringToNumber(dizi1)
console.log(dizi2);