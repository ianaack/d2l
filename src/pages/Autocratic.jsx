import { Link } from "react-router-dom";
import img_01 from "../assets/images/img_01.jpg";

const Autocratic = () => {
	return (
		<>
			<img
				src={img_01}
				alt="Autocratic Leadership Header"
				className="header-image"
			/>
			<section className="container">
				<header className="px-2 mt-4 text-center">
					<h1 className="display-5 fw-bold border-2 border-bottom pb-2">
						Autocratic Leadership
					</h1>
					<p className="mb-2 fs-5">
						Autocratic leadership, also known as authoritarian leadership, is a
						leadership style characterized by individual control over all
						decisions and little input from group members. Autocratic leaders
						typically make choices based on their ideas and judgments and rarely
						accept advice from followers. Autocratic leadership involves
						absolute, authoritarian control over a group.
					</p>
				</header>
				<article className="card text-center mb-4">
					<div className="card-header text-bg-secondary">
						Characteristics of Autocratic Leadership
					</div>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							Little or no input from group members
						</li>
						<li className="list-group-item">Leaders make the decisions</li>
						<li className="list-group-item">
							Group leaders dictate all the work methods and processes
						</li>
						<li className="list-group-item">
							Group members are rarely trusted with decisions or important tasks
						</li>
					</ul>
				</article>
				<nav className="text-center">
					<Link to="/leadership-styles/styles">
						<button className="btn btn-lg btn-warning mx-2">
							<i className="bi bi-arrow-left-circle me-2"></i>Previous
						</button>
					</Link>
					<Link to="/leadership-styles/styles/democratic">
						<button className="btn btn-lg btn-primary mx-2">
							Next<i className="bi bi-arrow-right-circle ms-2"></i>
						</button>
					</Link>
				</nav>
			</section>
		</>
	);
};

export default Autocratic;
