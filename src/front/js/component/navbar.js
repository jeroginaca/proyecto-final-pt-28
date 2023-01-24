import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate()

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					{
						store.token
							? <button className="btn btn-danger" onClick={() => {
								actions.logout()
								navigate("/landing")
							}
							}>Logout</button>
							: <Link to="/login">
								<span className="btn btn-success">Login</span>
							</Link>
					}

					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>


				</div>
			</div>
		</nav>
	);
};
