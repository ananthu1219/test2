const students = [
  { name: "Arjun", age: 20, passed: true },
  { name: "Meera", age: 17, passed: false },
  { name: "Rahul", age: 18, passed: true },
  { name: "Divya", age: 16, passed: false }
];
students.forEach(i=>{
  console.log(`${i.name} has ${i.passed ? "passed✅":"failed❌"}`);
});
