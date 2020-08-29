import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Title from "./components/Title";
import Filter from "./components/Filter";
import employees from "./employees.json";
import "./App.css";

class App extends Component {
	state = {
		employees,
		filter: "",
		name: "",
		result: [],
	};

	removeEmployee = (id) => {
		const employees = this.state.employees.filter(
			(employee) => employee.id !== id
		);

		this.setState({ employees });
	};

	handleInputChange = (event) => {
		this.setState({ name: event.target.value });
	};

	handleFormSubmit = (event) => {
		event.preventDefault();

		this.filterEmployees(this.state.name);
	};

	filterEmployees = (term) => {
		console.log(term);
		const response = this.state.employees.filter(
			(employee) => employee.name.first === term
		);

		this.setState({ result: response });
	};

	showAll = () => {
		this.setState({ result: this.state.employees });
	};

	clearAll = () => {
		this.setState({ result: [] });
	};

	render() {
		return (
			<div className="container">
				<div className="row d-flex justify-content-center p-2">
					<Title>Employee Directory</Title>
					<button className="btn btn-success m-2" onClick={this.showAll}>
						Show all
					</button>
					<button className="btn btn-danger m-2" onClick={this.clearAll}>
						Clear all
					</button>
				</div>
				<div className="row d-flex justify-content-center">
					<Filter
						value={this.state.name}
						handleInputChange={this.handleInputChange}
						handleSelectChange={this.handleSelectChange}
						handleFormSubmit={this.handleFormSubmit}
						showAll={this.showAll}
					/>
				</div>

				<div className="row">
					{[...this.state.result].map((item) => (
						<EmployeeCard
							img={item.picture.large}
							firstName={item.name.first}
							lastName={item.name.last}
							email={item.email}
							phone={item.phone}
							key={item.login.salt + item.id.name}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default App;
