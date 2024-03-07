export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await res.json();
  const jsonData = JSON.stringify(data, null, 2);
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="w-96">{jsonData}</div>
      {/* <article className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <p className="text-lg font-bold mb-4">User Information</p>
        <div className="mb-4">
          <p className="text-sm">ID: {data.id}</p>
          <p className="text-sm">Username: {data.username}</p>
        </div>
        <section className="mb-4">
          <p className="text-sm font-bold mb-2">Address:</p>
          <p className="text-sm">Street: {data.address.street}</p>
          <p className="text-sm">Suite: {data.address.suite}</p>
          <p className="text-sm">City: {data.address.city}</p>
          <p className="text-sm">Zipcode: {data.address.zipcode}</p>
          <div className="mt-2">
            <p className="text-sm font-bold">Geo:</p>
            <p className="text-sm">Lat: {data.address.geo.lat}</p>
            <p className="text-sm">Lng: {data.address.geo.lng}</p>
          </div>
        </section>
        <div className="mb-4">
          <p className="text-sm">Phone: {data.phone}</p>
          <p className="text-sm">Website: {data.website}</p>
        </div>
        <section>
          <p className="text-sm font-bold mb-2">Company:</p>
          <p className="text-sm">Name: {data.company.name}</p>
          <p className="text-sm">Catch Phrase: {data.company.catchPhrase}</p>
          <p className="text-sm">BS: {data.company.bs}</p>
        </section>
      </article> */}
    </main>
  );
}
