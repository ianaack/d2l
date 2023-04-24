import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MultipleChoiceQuestions } from "./components/MultipleChoiceQuestions";
import { SelectAllQuestions } from "./components/SelectAllQuestions";

const Quiz = () => {
	// State variables for quiz
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [selectedOptions, setSelectedOptions] = useState([]);
	const [isSelectionCorrect, setIsSelectionCorrect] = useState(false);

	// Component variables
	const questions = MultipleChoiceQuestions.length + SelectAllQuestions.length;
	const currentSelectAll =
		SelectAllQuestions[currentQuestion - MultipleChoiceQuestions.length];
	const currentMultipleChoice = MultipleChoiceQuestions[currentQuestion];

	// handleClick function for multiple choice questions
	const handleClick = (isCorrect, answerID) => {
		// Remove disabled attribute from the next question button, allowing a user to move on with the quiz
		const nextQuestionBtn = document.getElementById("nextQuestionBtn");
		nextQuestionBtn.classList.remove("hidden");

		// Get all the answer elements
		const answerElements = document.querySelectorAll(".answer");

		// Loop through all the answer elements and disable them if they are not the clicked answer
		answerElements.forEach((element) => {
			if (element.id !== `answer${answerID}`) {
				element.setAttribute("disabled", true);
			}
		});

		// Get the clicked answer element by its ID
		const answerElement = document.getElementById(`answer${answerID}`);

		// if the clicked answer is correct, change the btn colour from blue to green and increase the score by 1
		// otherwise replace the btn colour from blue to red
		if (isCorrect) {
			answerElement.classList.replace("btn-primary", "btn-success");
			setScore(score + 1);
		} else {
			answerElement.classList.replace("btn-primary", "btn-danger");
		}
	};

	// handleClick function for select all questions
	const handleSelectAllClick = () => {
		compareAnswers();
		// if all correct options are selected, increase score by 1
		if (isSelectionCorrect) {
			setScore(score + 1);
		}
	};

	// handle selection of checkboxes for select all that apply questions
	const handleCheckboxChange = (e) => {
		const { value, checked } = e.target;
		if (checked) {
			setSelectedOptions([...selectedOptions, value]);
		} else {
			setSelectedOptions(selectedOptions.filter((e) => e !== value));
		}
	};

	// this function calls the next question if there is one, or shows the final score if not
	const callNextQuestion = () => {
		console.log(`Element was clicked.`);
		const nextQuestionBtn = document.getElementById("nextQuestionBtn");
		nextQuestionBtn.classList.add("hidden");
		//  if there are more questions in the array, call the next question object
		//  else show final score
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions) {
			setCurrentQuestion(nextQuestion);
			setSelectedOptions([]);
		} else {
			setShowScore(true);
		}
	};

	// this function compares the answers given to the correct answers provided by the question component
	const compareAnswers = () => {
		const correctAnswers = currentSelectAll.correctAnswers;

		// if the arrays are not equal in length, setIsSelectionCorrect to false and break out the compareAnswers function.
		if (selectedOptions.length !== correctAnswers.length) {
			setIsSelectionCorrect(false);
			return;
		}

		// compare each option in the 2 arrays, if every element in selectedOptions is present in correctAnswers, the compareSelection will be true, otherwise it will be assigned false
		const compareSelection = selectedOptions.every((option) =>
			correctAnswers.includes(option)
		);

		// pass the value of compareSelection (true or false) to setIsSelectionCorrect
		setIsSelectionCorrect(compareSelection);
	};

	// allow a user to reload the quiz page in order to retake the quiz
	const reload = () => {
		window.location.reload();
	};

	return (
		// within the same div element, either render the question based on the array.length, or render the final score
		<section className="container">
			{showScore ? (
				<header className="py-5 mt-4">
					{/* Display final score */}
					<div className="display-4">
						Your score is {((score / questions) * 100).toFixed(0)}%!
					</div>
					<nav className="">
						{/* Button to retake quiz */}
						<button
							className="btn btn-lg btn-secondary mt-4 mx-2"
							onClick={reload}
						>
							Retake Quiz
						</button>
						{/* Button to exit quiz */}
						<Link to="/">
							<button className="btn btn-lg btn-success mt-4 mx-2">
								Exit Quiz
							</button>
						</Link>
					</nav>
				</header>
			) : (
				<article className="py-5 mt-4">
					<header className="text-center">
						{/* Display question # out of # */}
						<h1>
							Question {currentQuestion + 1}/{questions}
						</h1>
						{/* Display the questionText of either the MultipleChoiceQuestions or SelectAllQuestions */}
						<p>
							{currentQuestion < MultipleChoiceQuestions.length
								? currentMultipleChoice.questionText
								: currentSelectAll.questionText}
						</p>
					</header>

					<fieldset className="d-flex flex-column m-auto col-lg-6 col-md-8 col-sm-12">
						{/* Render the appropriate answerOptions, and appropriate logic from above, if the question displayed is a MultipleChoiceQuestion or a SelectAllQuestion */}
						{currentQuestion < MultipleChoiceQuestions.length
							? currentMultipleChoice.answerOptions.map((item) => (
									<button
										key={item.answerText}
										id={"answer" + item.id}
										onClick={() => handleClick(item.isCorrect, item.id)}
										className="btn btn-lg btn-primary m-2 answer"
									>
										{item.answerText}
									</button>
							  ))
							: currentSelectAll.answerOptions.map((item) => (
									<div
										className="form-check form-control-lg"
										key={item.answerText}
									>
										<label
											className="form-check-label"
											htmlFor={item.answerText}
										>
											<input
												id={item.answerText}
												name={item.answerText}
												type="checkbox"
												className="form-check-input  mb-2"
												value={item.answerText}
												onChange={handleCheckboxChange}
											/>
											{item.answerText}
										</label>
									</div>
							  ))}
					</fieldset>

					{/* Render a skip question button if the currentQuestion is a MultipleChoiceQuestion or render a submit button if the currentQuestion is a SelectAllQuestion */}
					<nav className="text-center">
						{currentQuestion < MultipleChoiceQuestions.length ? (
							<button
								id="nextQuestionBtn"
								onClick={callNextQuestion}
								className="btn btn-sm btn-primary mt-4 hidden"
							>
								Next Question<i className="bi bi-arrow-right-circle ms-2"></i>
							</button>
						) : (
							<button
								onClick={handleSelectAllClick}
								className="btn btn-success mt-4"
							>
								Submit Answer
							</button>
						)}
					</nav>
				</article>
			)}
		</section>
	);
};

export default Quiz;
