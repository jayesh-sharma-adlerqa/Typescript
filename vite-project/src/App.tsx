function App() {
  type User = {
    name: string;
    age: number;
  };

  let person1: User = {
    name: "Alice",
    age: 30,
  };

  let person2: User = {
    name: "Alex",
  };

  let person3: User = {
    name: "Avil",
    age: "25",
  };

  console.log(person1);
  console.log(person2);
  console.log(person3);
  return (
    <>
      <div>hello</div>
      <div>{person1.age}</div>
      <div>{person2.age}</div>
      <div>{person3.age}</div>
      <div>hello</div>
    </>
  );
}

export default App;