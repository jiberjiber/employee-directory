import React from "react";
import "./style.css";

function Filter(props) {
	return (
		<div className="col-md-4 text-center">
			<form onSubmit={props.handleFormSubmit}>
				<div className="form-group">
					<input
						onChange={props.handleInputChange}
						value={props.value}
						name="name"
						type="text"
						placeholder="Employee's First Name (Case Sensitive)"
						id="name"
						className="form-control"
					/>
					<button type="submit" className="btn btn-primary m-2">
						Search by Name
					</button>
				</div>
			</form>
		</div>
	);
}

export default Filter;
