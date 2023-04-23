import { Link } from "react-router-dom";

const Introduction = () => {
	return (
		<>
			<section className="container">
				<header className="px-4 py-5 my-5 text-center">
					<h1 className="display-5 fw-bold">
						Leadership Styles and Motivators
					</h1>
					<p className="lead mb-2">
						The course introduces students to some basic fundamentals of
						Leadership
					</p>
				</header>
				<nav className="text-center">
					<Link to="/objectives">
						<button className="btn btn-lg btn-success">
							Start Module<i className="bi bi-arrow-right-circle ms-2"></i>
						</button>
					</Link>
				</nav>
			</section>
		</>
	);
};

export default Introduction;
