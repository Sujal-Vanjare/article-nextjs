export default function Page() {
  return (
    <div className="p-8 w-full h-screen">
      <div className="fixed right-0 h-10 w-20 bg-purple-300 rounded-full ">
        <div className="w-full h-full bg-red-500 text-center flex items-center justify-center ">
          <p>Menu</p>
        </div>
        <div className="absolute top-full w-full h-full bg-green-300 flex items-center justify-center">
          <p>Close</p>
        </div>
      </div>
    </div>
  );
}
