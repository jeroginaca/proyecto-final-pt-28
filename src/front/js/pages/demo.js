import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate()
	useEffect(() => {
		if (!store.token) {
			navigate("/login")
		}
	}, [store.token])

	return (
		<div className="container">
			<ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<Link to={"/single/" + index}>
								<span>Link to: {item.title}</span>
							</Link>
							{// Conditional render example
								// Check to see if the background is orange, if so, display the message
								item.background === "orange" ? (
									<p style={{ color: item.initial }}>
										Check store/flux.js scroll to the actions to see the code
									</p>
								) : null}
							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
								Change Color
							</button>

						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>

			<button onClick={(e) => actions.private()}>Prueba Privada</button>
		</div>
	);
};
