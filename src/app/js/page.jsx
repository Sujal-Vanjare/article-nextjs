export default function Page() {
  const bigNumber = 9007199254740991n;
  console.log(bigNumber);
  // not working

  return (
    <div>
      <h1>{bigNumber}</h1>
      asd
    </div>
  );
}
