import { Link } from "react-router-dom";

const LeadershipStyles = () => {
	return (
		<div>
			<h1>Leadership Styles</h1>
			<p>
				Leadership styles refers to the broad approach adopted by a leader. All
				leaders (at least all those leaders who already have followers) have
				one. If you are already a leader, that includes you. You just might not
				know what it is yet. But your followers do! Style is often based on a
				leader's own beliefs, personality, experiences, working environment and
				their assessment of the situation at the time.
			</p>
			<div className="">
				<Link to="/">
					<button className="btn btn-warning">Previous Slide</button>
				</Link>
				<Link to="/leadership-styles/styles">
					<button className="btn btn-primary">Next Slide</button>
				</Link>
			</div>
		</div>
	);
};

export default LeadershipStyles;
