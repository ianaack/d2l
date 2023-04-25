import { Link } from "react-router-dom";

const Objectives = () => {
	return (
		<section className="container mb-4">
			<header className="px-2 py-5 my-5 text-center">
				<h1 className="display-5 fw-bold">Learning Objectives</h1>
				<p className="mb-2 fs-5">
					By the end of this module, you should be able to:
				</p>
				<article className="d-flex justify-content-center flex-wrap">
					<ul className="list-group m-2 col-md-6 col-sm-12">
						<li className="lead list-group-item fw-bold ">
							Describe the three different leadership styles
						</li>
					</ul>
				</article>
			</header>
			<nav className="text-center">
				<Link to="/">
					<button className="btn btn-lg btn-warning mx-2">
						<i className="bi bi-arrow-left-circle me-2"></i>Previous
					</button>
				</Link>
				<Link to="/leadership-styles">
					<button className="btn btn-lg btn-primary mx-2">
						Next<i className="bi bi-arrow-right-circle ms-2"></i>
					</button>
				</Link>
			</nav>
		</section>
	);
};

export default Objectives;
