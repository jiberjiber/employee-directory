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
						<strong>First Name:</strong> {props.firstName}
					</li>
					<li>
						<strong>Last Name:</strong> {props.lastName}
					</li>
					<li>
						<strong>Email:</strong> {props.email}
					</li>
					<li>
						<strong>Phone:</strong> {props.phone}
					</li>
				</ul>
			</div>
		</div>
	);
}

export default EmployeeCard;
