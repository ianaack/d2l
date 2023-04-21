import { Link } from "react-router-dom";

const Introduction = () => {
	return (
		<div>
			<h1>Leadership Styles and Motivators</h1>
			<p>
				The course introduces students to some basic fundamentals of Leadership
			</p>
			<h2>Learning Objectives</h2>
			<p>By the end of this module, you should be able to:</p>
			<ul>
				<li>Describe the three different leadership styles</li>
			</ul>
			<Link to="/leadership-styles">
				<button className="btn btn-primary">Next Slide</button>
			</Link>
		</div>
	);
};

export default Introduction;
