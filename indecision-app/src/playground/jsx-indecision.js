console.log("App.js is running!");
const appRoot = document.getElementById("app");

// JSX - JavaScript XML

//Template
const template = (
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
const user = {
  name: "Asier Callejo",
  age: 24,
  location: "Bilbao, Spain",
};

const templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

// ReactDOM.render(templateTwo, appRoot);

//Challenge
const app = {
  title: "Indecision app",
  subtitle: "Put your life in the hands of a computer",
};

const templateThree = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
  </div>
);

// ReactDOM.render(templateThree, appRoot);

const user2 = {
  name: "Asier Callejo",
  age: 24,
  location: "Bilbao, Spain",
};

function getLocation(location) {
  return location ? <p>Location: {location}</p> : undefined;
}

const templateFour = (
  <div>
    <h1>{user2.name ? user2.name : "Anonymous"}</h1>
    {user2.age && user2.age >= 18 && <p>Age: {user2.age}</p>}
    {getLocation(user2.location)}
  </div>
);

// ReactDOM.render(templateFour, appRoot);

const app2 = {
  title: "Indecision app",
  subtitle: "Put your life in the hands of a computer",
  options: ["One", "Two"],
};

const getValues = (array) => array.map((element, index) => <li key={index}>Item {element}</li>);

const templateFive = (
  <div>
    <h1>{app2.title}</h1>
    {app2.subtitle && <p>{app2.subtitle}</p>}
    <p>{app2.options.length ? "Here are your options" : "No options"}</p>
    {app2.options.length > 0 && (
      <div>
        <ol>{getValues(app2.options)}</ol>
      </div>
    )}
  </div>
);

// ReactDOM.render(templateFive, appRoot);

const app3 = {
  title: "Indecision app",
  subtitle: "Put your life in the hands of a computer",
  options: ["One", "Two"],
};

const getValues2 = (array) => array.map((element, index) => <li key={index}>Item {element}</li>);

const removeAll = () => {
  app3.options = [];
  renderTemplateSix();
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    app3.options.push(option);
    e.target.elements.option.value = "";
    renderTemplateSeven();
  }
};

const renderTemplateSix = () => {
  const templateSix = (
    <div>
      <h1>{app3.title}</h1>
      {app3.subtitle && <p>{app3.subtitle}</p>}
      <p>{app3.options.length ? "Here are your options" : "No options"}</p>
      <p>{app3.options.length}</p>
      <button onClick={removeAll}>Remove All</button>
      {app3.options.length > 0 && <ol>{getValues2(app3.options)}</ol>}
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(templateSix, appRoot);
};

renderTemplateSix();

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app3.options.length);
  const option = app3.options[randomNum];
  alert(option);
};

const onRemoveAll = () => {
  app3.options = [];
  renderTemplateSeven();
};

const renderTemplateSeven = () => {
  const templateSeven = (
    <div>
      <h1>{app3.title}</h1>
      {app3.subtitle && <p>{app3.subtitle}</p>}
      <p>{app3.options.length ? "Here are your options" : "No options"}</p>
      <p>{app3.options.length}</p>
      <button disabled={app3.options.length === 0} onClick={onMakeDecision}>
        What should I do?
      </button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>{getValues2(app3.options)}</ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(templateSeven, appRoot);
};

renderTemplateSeven();
