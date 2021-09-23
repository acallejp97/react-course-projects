const appRoot = document.getElementById("app");

let visible = true;

const onButtonClick = () => {
  visible = visible ? false : true;
  renderTemplate();
};

const renderTemplate = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onButtonClick}>{visible ? "Show" : "Hide"} details</button>
      <p hidden={visible}>Hey! I am visible now!</p>
    </div>
  );
  ReactDOM.render(template, appRoot);

};

renderTemplate();
