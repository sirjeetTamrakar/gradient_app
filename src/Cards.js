import React, { useState, useEffect } from "react";
import { Card, Row, Col, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import colors from "./DataG";

const Cards = () => {
	const [random1, setR1] = useState(0);

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

	useEffect(() => {
		const random1 = Math.round(Math.random() * 200);
		setR1(random1);
	}, []);

	return (
		<>
			{alert && (
				<div className='d-flex justify-content-center copy'>Copied!</div>
			)}
			<div className='text-center py-4 mt-4'>
				<h1>Gradients</h1>
			</div>
			<Alert
				variant='info'
				className='d-flex text-center justify-content-center'>
				<small>
					Click on the color to copy gradient.
					<br />
					Click on hex codes to copy individual colors.
				</small>
			</Alert>
			<div className='d-flex justify-content-center'>
				<Row xs={1} sm={2} md={2} lg={3} className='w-100 '>
					{colors
						.slice(random1, 200)
						.splice(1, 12)
						.map(color => (
							<React.Fragment key={color.name}>
								<Col>
									<Card className='card'>
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
			<div className='text-center d-flex justify-content-center mb-4 '>
				<Link
					to='/gradients'
					className='btn btn-danger d-flex p-2 px-4'
					style={{ fontWeight: "900" }}>
					View More<span className='material-icons ml-4'>launch</span>
				</Link>
			</div>
		</>
	);
};

export default Cards;
