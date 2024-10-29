const Pizza = (props) => {
    return React.createElement(
        "div", 
        {},[
            React.createElement("h1", {}, props.name ? props.name : 'Hello World'),
            React.createElement("p", {}, props.description ? props.description : 'This is an empty object description'),
        ]
    );
}

const App = () => {
    return React.createElement(
        "div", 
        {},[
            React.createElement("h1", {}, "Padre Gino's"),
            React.createElement(Pizza, {
                name: "The Hawaiian Pizza",
                description: "Sliced Ham, Pineapple, Mozzarella Cheese"
            }),
            React.createElement(Pizza, {
                name: "Americano Pizza",
                description: "French Fries and Hot Dogs"
            }),
            React.createElement(Pizza, {
                name: "The Big Meat Pizza",
                description: "Bacon, Pepperoni, Italian Sausage, Chorizo Sausage",
            }),
            React.createElement(Pizza),
        ]);
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));