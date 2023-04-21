// import packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import Introduction from "./pages/Introduction";
import LeadershipStyles from "./pages/LeadershipStyles";
import Styles from "./pages/Styles";
import Quiz from "./pages/Quiz";

// import components

function App() {
	return (
		<main style={{ overflow: "hidden" }}>
			<Router>
				<Routes>
					<Route path="/" element={<Introduction />} />
					<Route path="/leadership-styles" element={<LeadershipStyles />} />
					<Route path="/leadership-styles/styles" element={<Styles />} />
					<Route path="/quiz" element={<Quiz />} />
				</Routes>
			</Router>
		</main>
	);
}

export default App;
