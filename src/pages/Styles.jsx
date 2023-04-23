import { Link } from "react-router-dom";

const Styles = () => {
	return (
		<section className="container">
			<header className="px-2 mt-4 text-center">
				<h1 className="display-5 fw-bold border-2 border-bottom pb-2">
					Autocratic, Democratic,
					<br /> and Free-Rein Leadership
				</h1>
				<p className="lead">
					Three common leadership styles that we all naturally gravitate to are:
				</p>
			</header>
			<article className="text-center mx-auto my-4 col-sm-12 col-md-6 col-lg-3">
				<ul className="list-group ">
					<li className="list-group-item fw-bold">AUTOCRATIC</li>
					<li className="list-group-item fw-bold">DEMOCRATIC</li>
					<li className="list-group-item fw-bold">FREE-REIN</li>
				</ul>
			</article>
			<article className="text-center mb-4">
				<p className="">
					<strong>Be Selective in your Leadership Style</strong>
				</p>
				<p className="">
					<small>
						Managing employees are not a 'one size fits all' approach. You will
						need to use all three leadership styles here on a daily basis.
						Consider which is your natural leadership style, and which you feel
						you need to work on.
					</small>
				</p>
			</article>
			<nav className="text-center">
				<Link to="/leadership-styles">
					<button className="btn btn-lg btn-warning mx-2">
						<i className="bi bi-arrow-left-circle me-2"></i>Previous
					</button>
				</Link>
				<Link to="/leadership-styles/styles/autocratic">
					<button className="btn btn-lg btn-primary mx-2">
						Next<i className="bi bi-arrow-right-circle ms-2"></i>
					</button>
				</Link>
			</nav>
		</section>
	);
};

export default Styles;
