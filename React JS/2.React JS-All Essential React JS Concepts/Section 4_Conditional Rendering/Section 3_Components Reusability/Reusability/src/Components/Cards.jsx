import React from "react";

const Cards = () => {
  const data = [
    {
      name: "Mahiya Ve",
      description: "The name of the card that will be displayed",
    },
    {
      name: "Junoon",
      description: "The name of the card that will be displayed",
    },
  ];
  return (
    <div className="w-full h-screen bg-zinc-300 flex flex-col gap-10 items-center justify-center">
      {data.map((item, index) => (
        <div key={index} className="w-60 px-3 py-2 bg-zinc-100 rounded-md">
          <h3 className="font-semibold text-xl">{item.name}</h3>
          <p className="text-xs mt-2">
            {item.description}
          </p>
          <button onClick={()=>{alert("hey");}} className="px-2 py-1 bg-blue-400 rounded text-xs font-semibold mt-3 text-zinc-100">
            Download Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
