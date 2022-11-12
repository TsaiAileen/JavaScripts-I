console.clear();
// console.log('alorermwekf')
// console.log("Aileen");
// code 2
{
//code 1 begin
// let myAge = 18
// console.log(myAge);

// code 2

// code 1 end
}

// code 1 error
// code 2

// let myName = "Aileen"
// console.log(myName);

// {
//   let myAge = 18
//   console.log(myAge);
//   console.log(myName);
// }

// console.log(myName);
// console.log(myAge);

// {   //變量 (可改變的量)
//   let myAge = 18
//   console.log(myAge);
//   myAge = 30
//   console.log(myAge);
//   console.log(myName);
// }

// console.log(myName);
//console.log(myAge);

// var income = 0
// console.log(income);

// {
//   console.clear();
//   let myAge = 18
//   myAge = 30
//   let myName = 'Aileen'
//  //myName = "JY"
//   console.log(myAge);
//   console.log(myName);
// }


{
  let number = 10   // 數字(including decimals)
  let notNumber = NaN    // 並不是一個數字, 0/0=NaN
  let infinity = Infinity    // 無限

  let unknown = undefined
  let empty = null

  let boolTrue = true     // type boolean
  let boolFalse = false
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
  let a = 1   // number
  let c = true   // true or false

  if (a == c) {
    console.log('true');
  }

  else {
    console.log('false');
  }

  let g = 0
  console.log(g == false);
  console.log(g === false);

  console.log(NaN == NaN);
  console.log(NaN === NaN);
}

{
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
    console.log('bad');   // 0 相當於 false
  }

  console.log(NaN == NaN);  // 不一定相等
  console.log(0 / 0);       // NaN
  console.log(1 / 0);       // infinity
}


{      // NaN 0 null =>false
  let statement = false
  if(statement){
    console.log('good ending')
  }

  else {
    console.log('bad ending')
  }
}

{
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
  const array = [4, 5, 6, 'Aileen', true, ['age, 18']]
  array.push()
  array.pop()
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