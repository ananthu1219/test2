const students = [
  { name: "Arjun", age: 20, passed: true },
  { name: "Meera", age: 17, passed: false },
  { name: "Rahul", age: 19, passed: true },
  { name: "Anjali", age: 18, passed: false },
  { name: "Kiran", age: 21, passed: true }
];
const message = students.map(({name, age}) => {
  return `${name} is ${age} years old.`;
});

message.forEach(msg => console.log(msg));
