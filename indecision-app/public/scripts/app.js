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

var user2 = {
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
    user2.name ? user2.name : "Anonymous"
  ),
  user2.age && user2.age >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user2.age
  ),
  getLocation(user2.location)
);

// ReactDOM.render(templateFour, appRoot);

var app2 = {
  title: "Indecision app",
  subtitle: "Put your life in the hands of a computer",
  options: ["One", "Two"]
};

var getValues = function getValues(array) {
  return array.map(function (element, index) {
    return React.createElement(
      "li",
      { key: index },
      "Item ",
      element
    );
  });
};

var templateFive = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app2.title
  ),
  app2.subtitle && React.createElement(
    "p",
    null,
    app2.subtitle
  ),
  React.createElement(
    "p",
    null,
    app2.options.length ? "Here are your options" : "No options"
  ),
  app2.options.length > 0 && React.createElement(
    "div",
    null,
    React.createElement(
      "ol",
      null,
      getValues(app2.options)
    )
  )
);

// ReactDOM.render(templateFive, appRoot);

var app3 = {
  title: "Indecision app",
  subtitle: "Put your life in the hands of a computer",
  options: ["One", "Two"]
};

var getValues2 = function getValues2(array) {
  return array.map(function (element, index) {
    return React.createElement(
      "li",
      { key: index },
      "Item ",
      element
    );
  });
};

var removeAll = function removeAll() {
  app3.options = [];
  renderTemplateSix();
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app3.options.push(option);
    e.target.elements.option.value = "";
    renderTemplateSix();
  }
};

var renderTemplateSix = function renderTemplateSix() {
  var templateSix = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app3.title
    ),
    app3.subtitle && React.createElement(
      "p",
      null,
      app3.subtitle
    ),
    React.createElement(
      "p",
      null,
      app3.options.length ? "Here are your options" : "No options"
    ),
    React.createElement(
      "p",
      null,
      app3.options.length
    ),
    React.createElement(
      "button",
      { onClick: removeAll },
      "Remove All"
    ),
    app3.options.length > 0 && React.createElement(
      "ol",
      null,
      getValues2(app3.options)
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );

  ReactDOM.render(templateSix, appRoot);
};
renderTemplateSix();
