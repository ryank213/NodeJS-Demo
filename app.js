let people =  [
    {
        "firstname": "John",
        "lastname": "Doe",
        "age": 18
    },
    {
        "firstname": "Grace",
        "lastname": "Doo",
        "age": 16
    },
    {
        "firstname": "Rob",
        "lastname": "Smith",
        "age": 40    
    },
    {
        "firstname": "Chad",
        "lastname": "Powers",
        "age": 25
    },
    {
        "firstname": "Mike",
        "lastname": "Jordan",
        "age": 17
    },
]

let person1 =  {
    "firstname": "John",
    "lastname": "Doe",
    "age": 18
}

let person2 = {
    "firstname": "Bob",
    "lastname": "Ross",
    "age": 27
}

// [J, G, R, C, M]
console.log(people);

// Removes from start of the array 
// [G, R, C, M]
people.shift()
console.log(people);

// Adds to the end of the array
// [G, R, C, M, J]
people.push(person1);
console.log(people);

// Removes from end of the array
// [G, R, C, M]
people.pop();
console.log(people);

// Adds to the start of the array
// [B, G, R, C, M]
people.unshift(person2)
console.log(people);

// Starting at position 3, remove 1 and replace with person1
// [B, G, R, J, M]
people.splice(3, 1, person1);
console.log(people);

// Returns elements of the array after position 2
// [R, J, M]
console.log(people.slice(2));

// Filters array to only include people with age >= 18
const adults = people.filter(person => person.age >= 18);
adults.forEach(person => console.log(person));