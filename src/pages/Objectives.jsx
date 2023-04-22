import { Link } from "react-router-dom";

const Objectives = () => {
	return (
		<div className="container">
			<div className="px-2 py-5 my-5 text-center">
				<h1 className="display-5 fw-bold">Learning Objectives</h1>
				<p className="lead mb-2">
					By the end of this module, you should be able to:
				</p>
				<div className="d-flex justify-content-center flex-wrap">
					<div className="card m-2 col-lg-3 col-md-6 col-sm-12">
						<div className="lead fw-bold card-body">
							Describe the three different leadership styles
						</div>
					</div>
				</div>
			</div>
			<div className="text-center">
				<Link to="/leadership-styles">
					<button className="btn btn-primary">Next Slide</button>
				</Link>
			</div>
		</div>
	);
};

export default Objectives;
