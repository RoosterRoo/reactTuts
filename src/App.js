const Pet = props => {
    return React.createElement("div", {}, [
        React.createElement("h1",{}, props.name),
        React.createElement("h2",{}, props.animal),
        React.createElement("h2",{}, props.breed)
    ])
}



const App = () => {
    return React.createElement(
        "div",
        {},
        [React.createElement("h1",{},"Adopt me"),
        React.createElement(Pet, {name: "Scooby", animal: "Dog", breed: "Doberman"}),
        React.createElement(Pet, {name: "Mickey", animal: "Mouse", breed: "Black Mouse"}),
        React.createElement(Pet, {name: "Bugs", animal: "Bunny", breed: "Grey Rabbit"})    
    ])
}
ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
)