export default function Page() {
  // variables
  // using const to store the value
  const a = 6;

  // using let to store the value
  let b = 6;
  b = 10;
  b = 20; // reassigning the value of a

  // Data types
  // String
  const name = "John";

  // Number
  // const age = 30;

  // Boolean
  // const isStudent = true;
  // or false

  // Undefined
  let tee; // not given any value yet

  // Null
  const emptyValue = null;

  // Object
  const person = {
    name: "John",
    age: 30,
    isStudent: true,
  };
  // Array object:
  const cars = ["Saab", "Volvo", "BMW"];

  // Date object:
  const date = new Date("2024-03-06");
  const currentDate = Date(); // gives current live date

  const age = 25;
  const isStudent = false;

  if (age >= 18) {
    if (isStudent) {
      console.log("You are an adult student.");
    } else {
      console.log("You are an adult worker.");
    }
  } else {
    console.log("You are a minor.");
  }

  return (
    <main className="p-6">
      <div>
        <h1>const and let </h1>
        <p>a : {a}</p>
        <p>b : {b}</p>
      </div>

      <div>
        <h1>Data Types</h1>

        <p>String: {name}</p>

        <p>Number: {age}</p>

        <p>Boolean: {String(isStudent)}</p>

        <p>Undefined: {String(tee)}</p>

        <p>Null: {String(emptyValue)}</p>

        <p>Object: {JSON.stringify(person)}</p>

        <p>Array: {JSON.stringify(cars)}</p>

        <p>Date: {date.toDateString()}</p>

        <p>Current Date: {currentDate.toString()}</p>
      </div>
    </main>
  );
}
