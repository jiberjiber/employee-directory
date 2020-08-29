import React from "react";
import "./style.css";

function EmployeeCard(props) {
	return (
		<div className="card">
			<div className="img-container">
				<img alt={props.name} src={props.img} />
			</div>
			<div className="content">
				<ul>
					<li>
						<strong>Name:</strong> {props.name}
					</li>
					<li>
						<strong>Title:</strong> {props.title}
					</li>
					<li>
						<strong>Salary:</strong> {props.salary}
					</li>
				</ul>
			</div>
			<span onClick={() => props.removeEmployee(props.id)} className="remove">
				𝘅
			</span>
		</div>
	);
}

export default EmployeeCard;
