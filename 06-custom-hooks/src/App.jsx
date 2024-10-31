import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Order from "./Order";
import PizzaOfTheDay from "./PizzaOfTheDay";

const App = () => {
  return (
    <StrictMode>
      <div>
        <Order />
        <PizzaOfTheDay />
      </div>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
