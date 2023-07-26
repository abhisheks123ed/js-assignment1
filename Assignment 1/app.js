//array operation
let fruits = []
//adding following fruits
fruits.push('Apple','Banana','Orange');
//remove first fruit
fruits.splice(0,1);
//add grape at the end
fruits.push('Grape');
// update second fruit with pear
fruits.splice(1,1,'Pear');
console.log(fruits);

//object operation
let person = {}
//adding following properties
person.name = 'John';
person.age = 30;
person.city = 'New York';
//remove age property from the persons object
delete person.age;
//adding new property
person.job='Engineer';
//update city propety
person.city='San Francisco';
console.log(person)

//array of object operations
let cars = []
//adding objects to an array
cars.push({make:'Toyota',model:'Camry',year:2018});
cars.push({make:'Toyota',model:'Camry',year:2018});
cars.push({make:'Toyota',model:'Camry',year:2018});
//remove first array of object
cars.splice(0,1);
//adding new array of object
cars.push({make:'Honda',model:'Civic',year:2020});
//update model property from the second car object
cars[1].model='Accord'
console.log(cars)
