import { Link } from "react-router-dom";

const LeadershipStyles = () => {
	return (
		<section className="container">
			<header className="px-2 py-5 my-5 text-center">
				<h1 className="display-5 fw-bold">Leadership Styles</h1>
				<p className="mb-2 fs-5">
					Leadership styles refers to the broad approach adopted by a leader.
					All leaders (at least all those leaders who already have followers)
					have one. If you are already a leader, that includes you. You just
					might not know what it is yet. But your followers do! Style is often
					based on a leader's own beliefs, personality, experiences, working
					environment and their assessment of the situation at the time.
				</p>
			</header>
			<nav className="text-center">
				<Link to="/objectives">
					<button className="btn btn-lg btn-warning mx-2">
						<i className="bi bi-arrow-left-circle me-2"></i>Previous
					</button>
				</Link>
				<Link to="/leadership-styles/styles">
					<button className="btn btn-lg btn-primary mx-2">
						Next<i className="bi bi-arrow-right-circle ms-2"></i>
					</button>
				</Link>
			</nav>
		</section>
	);
};

export default LeadershipStyles;
