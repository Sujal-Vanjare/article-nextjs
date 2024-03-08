export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await res.json();
  const jsonData = JSON.stringify(data, null, 2);
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="w-96">{jsonData}</div>
    </main>
  );
}
