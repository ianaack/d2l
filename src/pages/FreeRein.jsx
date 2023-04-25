import { Link } from "react-router-dom";
import img_03 from "../assets/images/img_03.jpg";

const FreeRein = () => {
	return (
		<>
			<img
				src={img_03}
				alt="Free-Rein Leadership Header"
				className="header-image"
			/>
			<section className="container mb-4">
				<header className="px-2 mt-4 text-center">
					<h1 className="display-5 fw-bold border-2 border-bottom pb-2">
						Free-Rein Leadership
					</h1>
					<p className="mb-2 fs-5">
						Free-rein leadership, also called Laissez-Faire, is a type of
						leadership style in which leaders are hands-off and allow group
						members to make the decisions. Mangers set objectives and employees
						are free to do whatever is appropriate to accomplish those
						objectives.
					</p>
				</header>
				<article className="card text-center mb-4">
					<div className="card-header text-bg-secondary">
						Characteristics of Free-Rein Leadership
					</div>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							Group members are encouraged to make decisions and take actions on
							their own.
						</li>
						<li className="list-group-item">
							Leaders believe in the abilities of their team members and allow
							them to operate with minimal supervision.
						</li>
						<li className="list-group-item">
							Leaders provide minimal direction and allows their team members to
							work independently.
						</li>
					</ul>
				</article>
				<nav className="text-center">
					<Link to="/leadership-styles/styles/democratic">
						<button className="btn btn-lg btn-warning mx-2">
							<i className="bi bi-arrow-left-circle me-2"></i>Previous
						</button>
					</Link>
					<Link to="/quiz">
						<button className="btn btn-lg btn-primary mx-2">
							Next<i className="bi bi-arrow-right-circle ms-2"></i>
						</button>
					</Link>
				</nav>
			</section>
		</>
	);
};

export default FreeRein;
