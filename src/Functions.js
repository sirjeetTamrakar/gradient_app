import React from "react";
import { Dropdown, DropdownButton, Form } from "react-bootstrap";

const Functions = ({ value, setValue, deg, setDeg }) => {
	const direction = [
		"To Right",
		"To Left",
		"To Right Top",
		"To Left Top",
		"To Right Bottom",
		"To Left Bottom"
	];
	const handleSelect = e => {
		setValue(e);
		setDeg(0);
	};
	return (
		<div className='d-flex justify-content-center p-4'>
			<DropdownButton
				variant='danger'
				className='d-flex justify-content-center mr-4 '
				title={value}
				onSelect={handleSelect}>
				{direction.map(d => (
					<Dropdown.Item key={d} style={{ fontWeight: "100" }} eventKey={d}>
						{d}
					</Dropdown.Item>
				))}
			</DropdownButton>
			<Form.Control
				autoComplete='off'
				type='text'
				style={{ width: "60px", height: "40px", marginLeft: "1rem" }}
				value={deg}
				onChange={e => setDeg(e.target.value)}
			/>
			<sup style={{ fontSize: "1.2rem", marginTop: ".5rem" }}>&deg;</sup>
		</div>
	);
};

export default Functions;
