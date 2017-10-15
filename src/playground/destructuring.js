/*
* ARRAY
* */

const address = ['1299 S Juniper Street', 'Jaipur', 'Rajasthan',302021];

const [, city, state, zip] = address;

console.log(`You are at ${city}, ${state}, ${zip}`);

/*
* OBJECT
* */
const person = {
  name : 'Andrew',
  age : 26,
  location : {
      city : 'Philadelphia',
      temp : 92,
    }
};

const {name = 'Anonymous', age} = person;
const {city, temp : temperature} = person.location;

// const name = person.name;
// const age = person.age;

console.log(`${name} is ${age}`);
console.log(`It's ${temperature} in ${city}`);
