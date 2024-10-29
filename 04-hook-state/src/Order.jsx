import React, { useState } from "react";
import Pizza from "./Pizza";

const Order = () => {
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  return (
    <div className="order">
      <h2>Create an Order</h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select
              onChange={(e) => setPizzaType(e.target.value)}
              name="pizza-type"
              value={pizzaType}
            >
              <option value="pepperoni">Pepperoni</option>
              <option value="hawaiian">Hawaiian</option>
              <option value="veggie">Meat Lovers</option>
            </select>
          </div>
          <div>
            <span>
              <label htmlFor="pizza-size">Size</label>
              <input
                checked={pizzaSize === "M"}
                onChange={(e) => setPizzaSize(e.target.value)}
                type="radio"
                id="pizza-s"
                name="pizza-size"
                value="S"
              />
              <label htmlFor="pizza-s">Small</label>
            </span>
            <span>
              <input
                checked={pizzaSize === "M"}
                onChange={(e) => setPizzaSize(e.target.value)}
                type="radio"
                name="pizza-size"
                value="M"
                id="pizza-m"
              />
              <label htmlFor="pizza-m">Medium</label>
            </span>
            <span>
              <input
                checked={pizzaSize === "L"}
                onChange={(e) => setPizzaSize(e.target.value)}
                type="radio"
                name="pizza-size"
                value="L"
                id="pizza-l"
              />
              <label htmlFor="pizza-l">Large</label>
            </span>
          </div>
        </div>
        <div className="order-pizza">
          <Pizza
            name="Pepperoni"
            description="Mozzarella Cheese, Pepperoni"
            image="/public/pizzas/pepperoni.webp"
          />
          <p>$13.37</p>
        </div>
      </form>
    </div>
  );
};

export default Order;
