const appRoot = document.getElementById("app");

class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visibility: true,
		};
	}

	handleToggleVisibility() {
		this.setState((prevState) => {
			return {
				visibility: !prevState.visibility,
			};
		});
	}

	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button
					onClick={() => {
						this.handleToggleVisibility();
					}}>
					{this.state.visibility ? "Show" : "Hide"} details
				</button>
				<p hidden={this.state.visibility}>Hey! I am visible now!</p>
			</div>
		);
	}
}
ReactDOM.render(<VisibilityToggle />, appRoot);

// let visible = true;

// const onButtonClick = () => {
//   visible = visible ? false : true;
//   renderTemplate();
// };

// const renderTemplate = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={onButtonClick}>{visible ? "Show" : "Hide"} details</button>
//       <p hidden={visible}>Hey! I am visible now!</p>
//     </div>
//   );
//   ReactDOM.render(template, appRoot);

// };

// renderTemplate();
