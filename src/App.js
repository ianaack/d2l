// import packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import Introduction from "./pages/Introduction";
import Objectives from "./pages/Objectives";
import LeadershipStyles from "./pages/LeadershipStyles";
import Styles from "./pages/Styles";
import Quiz from "./pages/Quiz";
import Autocratic from "./pages/Autocratic";
import Democratic from "./pages/Democratic";
import FreeRein from "./pages/FreeRein";

function App() {
	return (
		<main style={{ overflow: "hidden" }}>
			<Router>
				<Routes>
					<Route path="/" element={<Introduction />} />
					<Route path="/objectives" element={<Objectives />} />
					<Route path="/leadership-styles" element={<LeadershipStyles />} />
					<Route path="/leadership-styles/styles" element={<Styles />} />
					<Route
						path="/leadership-styles/styles/autocratic"
						element={<Autocratic />}
					/>
					<Route
						path="/leadership-styles/styles/democratic"
						element={<Democratic />}
					/>
					<Route
						path="/leadership-styles/styles/free-rein"
						element={<FreeRein />}
					/>
					<Route path="/quiz" element={<Quiz />} />
				</Routes>
			</Router>
		</main>
	);
}

export default App;
