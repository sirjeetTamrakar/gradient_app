import React, { useState, useEffect } from "react";
import { Card, Row, Col, Alert } from "react-bootstrap";
import colors from "./DataG";

const AllGradients = () => {
	const [alert, setAlert] = useState(false);

	const copy = color => {
		setAlert(true);
		navigator.clipboard.writeText(color);
	};

	useEffect(
		() => {
			const timeout = setTimeout(
				() => {
					setAlert(false);
				},
				[900]
			);

			return () => clearTimeout(timeout);
		},
		[alert]
	);

	return (
		<>
			{alert && (
				<div className='d-flex justify-content-center copy'>Copied!</div>
			)}
			<div className='text-center pt-4 mt-4'>
				<h1>Gradients</h1>
			</div>
			<Alert variant='info' className='d-flex text-center flex-column my-4'>
				<small>
					Click on the color to copy gradient.
					<br />
					Click on hex codes to copy individual colors.
				</small>
				<h1>{colors.length} Gradients</h1>
			</Alert>
			<div className='d-flex justify-content-center'>
				<Row xs={1} sm={2} md={2} lg={3} className='w-100 '>
					{colors.map(color => (
						<React.Fragment key={color.name}>
							<Col>
								<Card className='card' key={color.colors[0]}>
									{color.colors.length < 3 ? (
										<div
											style={{
												width: "100%",
												border: "1px solid white",
												borderRadius: "1%",
												height: "5rem",
												cursor: "pointer",
												background: `linear-gradient(to right, ${
													color.colors[0]
												}, ${color.colors[1]})`
											}}
											onClick={() => {
												setAlert(true);
												navigator.clipboard.writeText(
													`background:linear-gradient(To Right, ${
														color.colors[0]
													}, ${color.colors[1]});`
												);
											}}
										/>
									) : (
										<div
											style={{
												width: "100%",
												border: "1px solid white",
												borderRadius: "1%",
												cursor: "pointer",
												height: "5rem",
												background: `linear-gradient(to right, ${
													color.colors[0]
												}, ${color.colors[1]}, ${color.colors[2]})`
											}}
											onClick={() => {
												setAlert(true);
												navigator.clipboard.writeText(
													`background:linear-gradient(To Right, ${
														color.colors[0]
													}, ${color.colors[1]}, ${color.colors[2]});`
												);
											}}
										/>
									)}

									<Card.Body>
										{color.colors.length < 3 ? (
											<Card.Title
												title='Copy'
												style={{ cursor: "pointer" }}
												className='grid'>
												<div onClick={() => copy(color.colors[0])}>
													{color.colors[0].toUpperCase()}
												</div>
												<div onClick={() => copy(color.colors[1])}>
													{color.colors[1].toUpperCase()}
												</div>
											</Card.Title>
										) : (
											<Card.Title
												title='Copy'
												style={{ cursor: "pointer" }}
												className='grid'>
												<div onClick={() => copy(color.colors[0])}>
													{color.colors[0].toUpperCase()}
												</div>
												<div onClick={() => copy(color.colors[1])}>
													{color.colors[1].toUpperCase()}
												</div>
												<div onClick={() => copy(color.colors[2])}>
													{color.colors[2]?.toUpperCase()}
												</div>
											</Card.Title>
										)}
									</Card.Body>
								</Card>
							</Col>
						</React.Fragment>
					))}
				</Row>
			</div>
		</>
	);
};

export default AllGradients;
