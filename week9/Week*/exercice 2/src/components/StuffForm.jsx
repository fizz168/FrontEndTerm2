import React from "react";

export default function StuffForm({ onAdd }) {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0);

  return (
    <form className="stuff-form">
      <p>Stuff name</p>
      <input
        type="search"
        placeholder="Banana"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Stuff price</p>
      <input
        type="search"
        placeholder="15"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />
      <button onClick={(e) => {
        e.preventDefault();
        onAdd(name, price);
      }}>
        Add Stuff
      </button>
    </form>
  );
}