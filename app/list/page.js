"use client";
import { useState } from "react";

export default function List() {
  let products = ["Tomatoes", "Pasta", "Coconut"];
  let [count, setCount] = useState([0, 0, 0]);

  return (
    <div>
      <h4>Products</h4>
      {products.map((product, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} alt={product} className="food-img" />
            <h4>{product} $40</h4>
            <button
              onClick={() => {
                let copy = [...count];
                copy[i]--;

                setCount(copy);
              }}
            >
              -
            </button>
            <span>{count[i]}</span>
            <button
              onClick={() => {
                let copy = [...count];
                copy[i]++;

                setCount(copy);
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}
