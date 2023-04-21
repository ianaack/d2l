import { Link } from "react-router-dom";

const Styles = () => {
	return (
		<div>
			<h1>Autocratic, Democratic, and Free-Rein Leadership</h1>
			<p>
				Three common leadership styles that we all naturally gravitate to are:
			</p>
			<div>
				<h2>AUTOCRATIC</h2>
				<p>
					Autocratic leadership, also known as authoritarian leadership, is a
					leadership style characterized by individual control over all
					decisions and little input from group members. Autocratic leaders
					typically make choices based on their ideas and judgments and rarely
					accept advice from followers. Autocratic leadership involves absolute,
					authoritarian control over a group.
				</p>
				<h3>Characteristics of Autocratic Leadership</h3>
				<ul>
					<li>Little or no input from group members</li>
					<li>Leaders make the decisions</li>
					<li>Group leaders dictate all the work methods and processes</li>
					<li>
						Group members are rarely trusted with decisions or important tasks
					</li>
				</ul>
			</div>
			<div>
				<h2>DEMOCRATIC</h2>
				<p>
					Democratic leadership, also known as participative leadership, is a
					type of leadership style in which members of the group take a more
					participative role in the decision-making process.
				</p>
				<h3>Characteristics of Democratic Leadership</h3>
				<ul>
					<li>
						Group members are encouraged to share ideas and opinions, even
						though the leader retains the final say over decisions.
					</li>
					<li>Members of the group feel more engaged in the process</li>
					<li>Creativity is encouraged and rewarded</li>
				</ul>
			</div>
			<div>
				<h2>FREE-REIN</h2>
				<p>
					Free-rein leadership, also called Laissez-Faire, is a type of
					leadership style in which leaders are hands-off and allow group
					members to make the decisions. Mangers set objectives and employees
					are free to do whatever is appropriate to accomplish those objectives.
				</p>
			</div>
			<div>
				<h4>Be Selective in your Leadership Style</h4>
				<p>
					Managing employees are not a 'one size fits all' approach. You will
					need to use all three leadership styles here on a daily basis.
					Consider which is your natural leadership style, and which you feel
					you need to work on.
				</p>
			</div>
			<div className="">
				<Link to="/leadership-styles">
					<button className="btn btn-warning">Previous Slide</button>
				</Link>
				<Link to="/quiz">
					<button className="btn btn-primary">Next Slide</button>
				</Link>
			</div>
		</div>
	);
};

export default Styles;
