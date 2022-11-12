// {
//   var income = 0
// 	console.log(income);
// }

// console.log(income);

{
  console.clear();
  let myAge = 18
  myAge = 30
  const myName = 'Aileen'
  //myName = "JY"
  console.log(myAge);
  console.log(myName);
}

{
  console.clear();
    let number = 10   // 數字(including decimals)
    let notNumber = NaN    // 並不是一個數字(但強行要印出一個數字就會返回 NaN), 0=NaN
    let infinity = Infinity    // 無限
  
    let unknown = undefined
    let empty = null
  
    let boolTrue = true     // type boolean
    let boolFalse = false
}

{
  console.clear();
  let string_1 = 'Aileen'   // string
  let string_2 = "JY"
  let string_3 = `${string_1} ${string_2}`
  console.log(string_3);
}

{
  console.clear();
  let number = 10
  console.log(number == 10);     // 左右兩邊內容相等即可
  console.log(number === 10);    // 左右兩邊除了內容要相同 佔用空間和運算方式也要相同
  let bool = true

  console.log(number === bool);
  console.log(bool === number);

  if(0){
    console.log('good');
  }
  else {
    console.log('bad'); 
  }

  console.log(NaN == NaN);
  console.log(0 / 0);
  console.log(1 / 0);
}

{  // NaN, 0, null, undefined, ' '(空字符串) => false
  console.clear();
  let statement = false
  if(statement){
    console.log('good ending')
  }

  else {
    console.log('bad ending')
  }
}

{
console.clear();
  let string_1 = 'Aileen " " \' \\ '   // string
  let string_2 = "JY ' ' \" "
  let string_3 = `${string_1} ${string_2}`
  console.log(string_1);
  console.log(string_2);
  const name = "JY"

  console.log("My name is " + name);
  console.log("My name is", name, "Age: ");
  console.log(`My name is ${name} Age: `);
}

{
  console.clear();
  console.log(typeof 1, 1);
  console.log(typeof "1", "1");

  console.log(1 + "3", typeof (1 + "3"));
  console.log("3"+ 1 , typeof ("3" + 1));
  console.log(""+ 1 , typeof ("" + 1));

  console.log(+"3", typeof (+"3"));
  console.log(1 + + "3", typeof (1 + + "3"));

  console.log(+"3A", typeof (+"3A"));
}

{
  console.clear();
  console.log(1 + 3 - "2");
  console.log("234" - 56);
  console.log("234" - '34');
  console.log(1234 / "3");
  console.log(1234 * "3");
  console.log("1234" / 3);
  console.log("1234" * 3);
  console.log("1234" * "3");
  console.log("1234" / "3");
  console.log("1234" / 0);
  console.log(1234 / 0);
}

{
  console.clear();
  console.log("3 +1.001:", 3 + 1.001);
  console.log("3* 1000 +1.001 * 1000) / 1000:", (3 * 1000 + 1.001 * 1000) / 1000);
}

{
  console.clear();
  const array = [4, 5, 6, 'Aileen', true, ['age', 18]]

  console.log(array);
  console.log(array[0]);
  console.log(array[1]);
  console.log(array[2]);
  console.log(array[3]);
  console.log(array[4]);
  console.log(array[5]);

  const object = {
    name: "Aileen",
    age: 18
  }

  const object2 = {
    "name": "Aileen",
    "age": 18
  }

  const object3 = {
    0: "Aileen",
    1: 18
  }

  console.log(object);
  console.log(object2);
  console.log(object3);
}

{
  console.clear();
  const array = [4, 5, 6, 'Aileen', true, ['age, 18']]
  array[4] = 10
  console.log(array);
  array[6] = 1001
  array[600] = 1001
  console.log(array);
  console.log(array.length);

  const array_1 = [1, 2, 3]
  const array_2 = new Array(100)
  console.log(array_1.length);
  console.log(array_2.length);

  array_2.length = 0
  console.log(array_2);
  array_1.length = 2
  console.log(array_1);
  array_1.length = 3
  console.log(array_1);

  array_1[0] = undefined
  console.log(array_1);
}

{
  console.clear();
  const person = {
    name: "Aileen",
    age: 18,
    1: 10086,
    2: 10010
  }



  console.log(person.name);
  console.log(person.age);
  console.log(["name"]);
  console.log(["age"]);
  console.log([1]);
  console.log([2]);

 // person.age = person.age + 3
  person.age += 3
  console.log(person);
}

{
  console.clear();
  let a =1
  let b = a
  console.log(`a:${a}, b:${b}`);
  b = 2
  console.log(`a:${a}, b:${b}`);

  const person = {
    name: "Aileen",
    age: 18
  }

  const newPerson = person
  console.log(person, newPerson);

  newPerson.age = 30
  console.log(person, newPerson);
}

{
  console.clear();
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.push("Kiwi","Lemon","Pineapple")
  console.log(fruits);
}

{
  console.clear();
  const sites = ['Google', 'Yahoo', 'Safari', 'Chrome', 'Firefox'];
 
  console.log(sites.pop());
  // 輸出结果為: "Firefox"
  
  console.log(sites);
  // 輸出结果為: ['Google', 'Yahoo', 'Safari', 'Chrome']
  
  sites.pop();
  
  console.log(sites);
  //  輸出结果為: ['Google', 'Yahoo', 'Safari']
}