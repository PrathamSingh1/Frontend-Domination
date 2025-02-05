import React from "react";

const App = () => {
  return (
    <div className="h-screen w-screen bg-red-100">
      <nav className="w-[15%] h-full bg-zinc-100">
        <a href="/create">Add new Product</a>
        <h1>Category</h1>
        <ul>
          <li>cat 1</li>
          <li>cat 1</li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
