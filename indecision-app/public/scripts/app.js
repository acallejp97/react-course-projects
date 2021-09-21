"use strict";

console.log("App.js is running!");
var appRoot = document.getElementById("app");

// JSX - JavaScript XML

//Template
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Indecision app"
  ),
  React.createElement(
    "p",
    null,
    "This is some info"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    )
  )
);

// ReactDOM.render(template, appRoot);

//Dinamic template
var user = {
  name: "Asier Callejo",
  age: 24,
  location: "Bilbao, Spain"
};

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    user.location
  )
);

// ReactDOM.render(templateTwo, appRoot);

//Challenge
var app = {
  title: "Indecision app",
  subtitle: "Put your life in the hands of a computer"
};

var templateThree = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subtitle
  )
);

// ReactDOM.render(templateThree, appRoot);

var user = {
  name: "Asier Callejo",
  age: 24,
  location: "Bilbao, Spain"
};

function getLocation(location) {
  return location ? React.createElement(
    "p",
    null,
    "Location: ",
    location
  ) : undefined;
}

var templateFour = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : "Anonymous"
  ),
  user.age && user.age >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);

// ReactDOM.render(templateFour, appRoot);

var app = {
  title: "Indecision app",
  subtitle: "Put your life in the hands of a computer",
  options: ["One", "Two"]
};

function getValues(array) {
  var returnable = [];
  for (var index = 0; index < array.length; index++) {
    var element = React.createElement(
      "li",
      null,
      "Item ",
      array[index]
    );
    returnable.push(element);
  }
  return returnable;
}

var templateFive = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "p",
    null,
    app.options.length ? "Here are your options" : "No options"
  ),
  app.options.length > 0 && React.createElement(
    "div",
    null,
    React.createElement(
      "ol",
      null,
      getValues(app.options)
    )
  )
);

ReactDOM.render(templateFive, appRoot);
