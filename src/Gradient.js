import React, { useState, useEffect } from "react";
import colors from "./DataG";
import { Carousel, OverlayTrigger, Tooltip } from "react-bootstrap";
import Functions from "./Functions";

const Gradient = () => {
	const [value, setValue] = useState("To Right");
	const [alert, setAlert] = useState(false);
	const [c, setC] = useState(true);
	const [d, setD] = useState(true);
	const [deg, setDeg] = useState(0);
	const [c1, setC1] = useState("#c13e3e".toUpperCase());
	const [c2, setC2] = useState("#563dd1".toUpperCase());
	const [code, setCode] = useState("");
	const [random1, setR1] = useState(0);
	const [random2, setR2] = useState(0);

	useEffect(() => {
		const random1 = Math.round(Math.random() * 150);
		const random2 = Math.round(150 + Math.random() * 150);
		setR1(random1);
		setR2(random2);
	}, []);

	const copy = color => {
		setAlert(true);
		navigator.clipboard.writeText(color);
	};

	const randomize = () => {
		const randomColor1 =
			"#" + Math.floor(Math.random() * 16777215).toString(16);
		const randomColor2 =
			"#" + Math.floor(Math.random() * 16777215).toString(16);
		setC1(randomColor1.toUpperCase());
		setC2(randomColor2.toUpperCase());
	};

	const co1 = e => {
		setC1(e.target.value.toUpperCase());
	};
	const co2 = e => {
		setC2(e.target.value.toUpperCase());
	};
	const co3 = e => {
		setC2(e.target.value.toUpperCase());
	};
	const co4 = e => {
		setC1(e.target.value.toUpperCase());
	};
	useEffect(
		() => {
			const timeout = setTimeout(
				() => {
					setAlert(false);
				},
				[800]
			);

			return () => clearTimeout(timeout);
		},
		[alert]
	);
	return (
		<>
			<h1 className='text-center mt-4 pt-4'>Custom Gradients</h1>
			<div className=' d-flex justify-content-center'>
				<Functions
					value={value}
					setValue={setValue}
					deg={deg}
					setDeg={setDeg}
					code={code}
					setCode={setCode}
				/>
				<OverlayTrigger
					placement='bottom'
					overlay={<Tooltip>Swipe For More!</Tooltip>}>
					<span
						className='material-icons align-self-center'
						style={{ cursor: "pointer" }}>
						info
					</span>
				</OverlayTrigger>
			</div>
			<Carousel touch={false} interval={1000000} nextLabel='' prevLabel=''>
				{colors.slice(random1, random2).map(color =>
					c ? (
						<Carousel.Item
							key={color.name}
							style={{
								background: `linear-gradient(${
									deg.length > 1 ? `${deg}deg` : value
								}, ${color.colors[0]}, ${color.colors[1]})`,
								minHeight: "80vh"
							}}>
							<div className='colorbox' title='Copy'>
								<div
									style={{
										backgroundColor: color.colors[0],
										border: "1px solid white"
									}}
									className='color'
									onClick={() => copy(color.colors[0])}
								/>
								<div onClick={() => copy(color.colors[0])}>
									{color.colors[0]}
								</div>
								<span
									className='material-icons p-2'
									style={{ cursor: "pointer" }}
									onClick={() => setC(!c)}
									title='Swap'>
									swap_horiz
								</span>
								<div
									style={{
										backgroundColor: color.colors[1],
										border: "1px solid white"
									}}
									onClick={() => copy(color.colors[1])}
									className='color'
								/>
								<div onClick={() => copy(color.colors[1])}>
									{color.colors[1]}
								</div>
								<span
									className='material-icons btn btn-primary car'
									title='Copy CSS'
									onClick={() => {
										setAlert(true);
										navigator.clipboard.writeText(
											`background:linear-gradient(${
												deg.length > 1 ? `${deg}deg` : value
											}, ${color.colors[0]}, ${color.colors[1]});`
										);
									}}>
									code
								</span>
							</div>
							{alert && <p>Copied To Clipboard</p>}
						</Carousel.Item>
					) : (
						<Carousel.Item
							key={color.name}
							style={{
								background: `linear-gradient(${
									deg.length > 1 ? `${deg}deg` : value
								}, ${color.colors[1]}, ${color.colors[0]})`,
								minHeight: "80vh"
							}}>
							<div className='colorbox' title='Copy'>
								<div
									onClick={() => copy(color.colors[1])}
									style={{
										backgroundColor: color.color2,
										border: "1px solid white"
									}}
									className='color'
								/>
								<div onClick={() => copy(color.colors[1])}>
									{color.colors[1]}
								</div>
								<span
									className='material-icons p-2'
									style={{ cursor: "pointer" }}
									onClick={() => setC(!c)}
									title='Swap'>
									swap_horiz
								</span>
								<div
									onClick={() => copy(color.colors[0])}
									style={{
										backgroundColor: color.colors[0],
										border: "1px solid white"
									}}
									className='color'
								/>
								<div onClick={() => copy(color.colors[0])}>
									{color.colors[0]}
								</div>
								<span
									className='material-icons btn btn-primary car'
									title='Copy CSS'
									onClick={() => {
										setAlert(true);
										navigator.clipboard.writeText(
											`background:linear-gradient(${
												deg.length > 1 ? `${deg}deg` : value
											}, ${color.colors[1]}, ${color.colors[0]});`
										);
									}}>
									code
								</span>
							</div>
							{alert && <p>Copied To Clipboard</p>}
						</Carousel.Item>
					)
				)}
			</Carousel>
			<h1 className='text-center mt-4 pt-4'>Create Your Own Gradient</h1>
			<div className='d-flex justify-content-center'>
				<Functions
					value={value}
					setValue={setValue}
					deg={deg}
					setDeg={setDeg}
					code={code}
					setCode={setCode}
				/>
				<span
					className='material-icons but align-self-center'
					title='Randomize'
					onClick={randomize}>
					shuffle
				</span>
			</div>
			{d ? (
				<div
					style={{
						background: `linear-gradient(${
							deg.length > 1 ? `${deg}deg` : value
						}, ${c1}, ${c2})`,
						minHeight: "80vh"
					}}>
					<div className='colorbox' title='Copy'>
						<input
							type='color'
							value={c1}
							title='Choose your color'
							onChange={co1}
							className='color'
						/>
						<div onClick={() => copy(c1)}>{c1}</div>
						<span
							className='material-icons p-2'
							style={{ cursor: "pointer" }}
							onClick={() => setD(false)}
							title='Swap'>
							swap_horiz
						</span>
						<input
							type='color'
							value={c2}
							title='Choose your color'
							onChange={co2}
							className='color'
						/>
						<div onClick={() => copy(c2)}>{c2}</div>
						<span
							className='material-icons btn btn-primary car'
							title='Copy CSS'
							onClick={() => {
								setAlert(true);
								navigator.clipboard.writeText(
									`background:linear-gradient(${
										deg.length > 1 ? `${deg}deg` : value
									}, ${c1}, ${c2});`
								);
							}}>
							code
						</span>
					</div>
					{alert && <p>Copied To Clipboard</p>}
				</div>
			) : (
				<div
					style={{
						background: `linear-gradient(${
							deg.length > 1 ? `${deg}deg` : value
						}, ${c2}, ${c1})`,
						minHeight: "80vh"
					}}>
					<div className='colorbox' title='Copy'>
						<input
							type='color'
							value={c2}
							title='Choose your color'
							onChange={co3}
							className='color'
						/>
						<div onClick={() => copy(c2)}>{c2}</div>{" "}
						<span
							className='material-icons p-2'
							style={{ cursor: "pointer" }}
							onClick={() => setD(true)}
							title='Swap'>
							swap_horiz
						</span>
						<input
							type='color'
							value={c1}
							title='Choose your color'
							onChange={co4}
							className='color'
						/>
						<div onClick={() => copy(c1)}>{c1}</div>
						<span
							className='material-icons btn btn-primary car'
							title='Copy CSS'
							onClick={() => {
								setAlert(true);
								navigator.clipboard.writeText(
									`background:linear-gradient(${
										deg.length > 1 ? `${deg}deg` : value
									}, ${c2}, ${c1});`
								);
							}}>
							code
						</span>
					</div>
					{alert && <p>Copied To Clipboard</p>}
				</div>
			)}
		</>
	);
};

export default Gradient;
