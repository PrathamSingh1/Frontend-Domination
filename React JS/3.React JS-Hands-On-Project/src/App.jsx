import React from "react";

const App = () => {
  return (
    <div className="h-screen w-screen">
      <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
        <a className="py-3 px-5 border rounded border-blue-200 text-blue-300" href="/create">Add new Product</a>
        <hr className="my-3 w-[80%]" />
        <h1 className="text-2xl mb-3 w-[80%]">Category Filter</h1>
        <ul className="bg-red-100 w-[80%]">
          <li>cat 1</li>
          <li>cat 2</li>
          <li>cat 3</li>
          <li>cat hello</li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
