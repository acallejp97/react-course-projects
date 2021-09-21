console.log("App.js is running!");
var appRoot = document.getElementById("app");

// JSX - JavaScript XML

//Template
var template = (
  <div>
    <h1>Indecision app</h1>
    <p>This is some info</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

// ReactDOM.render(template, appRoot);

//Dinamic template
var user = {
  name: "Asier Callejo",
  age: 24,
  location: "Bilbao, Spain",
};

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

// ReactDOM.render(templateTwo, appRoot);

//Challenge
var app = {
  title: "Indecision app",
  subtitle: "Put your life in the hands of a computer",
};

var templateThree = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
  </div>
);

// ReactDOM.render(templateThree, appRoot);

var user = {
  name: "Asier Callejo",
  age: 24,
  location: "Bilbao, Spain",
};

function getLocation(location) {
  return location ? <p>Location: {location}</p> : undefined;
}

var templateFour = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

// ReactDOM.render(templateFour, appRoot);

var app = {
  title: "Indecision app",
  subtitle: "Put your life in the hands of a computer",
  options: ["One", "Two"],
};

function getValues(array) {
  var returnable = [];
  for (let index = 0; index < array.length; index++) {
    var element = <li>Item {array[index]}</li>;
    returnable.push(element);
  }
  return returnable;
}

var templateFive = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length ? "Here are your options" : "No options"}</p>
    {app.options.length > 0 && (
      <div>
        <ol>{getValues(app.options)}</ol>
      </div>
    )}
  </div>
);

ReactDOM.render(templateFive, appRoot);
