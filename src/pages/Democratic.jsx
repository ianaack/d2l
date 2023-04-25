import { Link } from "react-router-dom";
import img_02 from "../assets/images/img_02.jpg";

const Democratic = () => {
	return (
		<>
			<img
				src={img_02}
				alt="Democratic Leadership Header"
				className="header-image"
			/>
			<section className="container mb-4">
				<header className="px-2 mt-4 text-center">
					<h1 className="display-5 fw-bold border-2 border-bottom pb-2">
						Democratic Leadership
					</h1>
					<p className="mb-2 fs-5">
						Democratic leadership, also known as participative leadership, is a
						type of leadership style in which members of the group take a more
						participative role in the decision-making process.
					</p>
				</header>
				<article className="card text-center mb-4">
					<div className="card-header text-bg-secondary">
						Characteristics of Democratic Leadership
					</div>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							Group members are encouraged to share ideas and opinions, even
							though the leader retains the final say over decisions.
						</li>
						<li className="list-group-item">
							Members of the group feel more engaged in the process.
						</li>
						<li className="list-group-item">
							Creativity is encouraged and rewarded.
						</li>
					</ul>
				</article>
				<nav className="text-center">
					<Link to="/leadership-styles/styles/autocratic">
						<button className="btn btn-lg btn-warning mx-2">
							<i className="bi bi-arrow-left-circle me-2"></i>Previous
						</button>
					</Link>
					<Link to="/leadership-styles/styles/free-rein">
						<button className="btn btn-lg btn-primary mx-2">
							Next<i className="bi bi-arrow-right-circle ms-2"></i>
						</button>
					</Link>
				</nav>
			</section>
		</>
	);
};

export default Democratic;
