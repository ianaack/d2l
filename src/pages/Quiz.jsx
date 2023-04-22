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

	// handleClick function for multiple choice questions
	const handleClick = (isCorrect) => {
		// if option is correct, increase score by 1
		if (isCorrect) {
			setScore(score + 1);
		}

		//  if there are more questions in the array, call the next question object
		//  else show final score
		const nextQuestion = currentQuestion + 1;
		if (
			nextQuestion <
			MultipleChoiceQuestions.length + SelectAllQuestions.length
		) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	// handleClick function for select all questions
	const handleSelectAllClick = () => {
		// by default all options are true
		let isCorrect = true;
		// check if all correct options are selected
		const currentQuestionObject = SelectAllQuestions[currentQuestion];
		// if currentQuestionObject is undefined, the forEach loop will not execute, and the isCorrect value will remain true
		if (currentQuestionObject) {
			currentQuestionObject.answerOptions.forEach((item) => {
				// compare the answer item to the state array and if neither match, set isCorrect to false
				if (item.isCorrect && !selectedOptions.includes(item.answerText)) {
					isCorrect = false;
				} else if (
					!item.isCorrect &&
					selectedOptions.includes(item.answerText)
				) {
					isCorrect = false;
				}
			});
		}

		// if all correct options are selected, increase score by 1
		if (isCorrect) {
			setScore(score + 1);
		}

		//  if there are more questions in the array, call the next question object
		//  else show final score
		const nextQuestion = currentQuestion + 1;
		if (
			nextQuestion <
			MultipleChoiceQuestions.length + SelectAllQuestions.length
		) {
			setCurrentQuestion(nextQuestion);
			setSelectedOptions([]);
		} else {
			setShowScore(true);
		}
	};

	// handle selection of checkboxes for select all that apply questions
	const handleCheckboxChange = (e) => {
		const value = e.target.value;
		if (selectedOptions.includes(value)) {
			setSelectedOptions(selectedOptions.filter((option) => option !== value));
		} else {
			setSelectedOptions([...selectedOptions, value]);
		}
	};

	return (
		// within the same div element, either render the question based on the array.length, or render the final score
		<div className="container text-center">
			{showScore ? (
				<div className="py-5 mt-4">
					{/* Display final score */}
					<div className="display-4">
						Your score is {score} out of{" "}
						{MultipleChoiceQuestions.length + SelectAllQuestions.length}
					</div>
					{/* Button to exit quiz */}
					<div className="">
						<Link to="/">
							<button className="btn btn-lg btn-success mt-4">Exit Quiz</button>
						</Link>
					</div>
				</div>
			) : (
				<div className="mt-4">
					<div className="">
						{/* Display question # out of # */}
						<h1>
							Question {currentQuestion + 1}/
							{MultipleChoiceQuestions.length + SelectAllQuestions.length}
						</h1>
						{/* Display the questionText of either the MultipleChoiceQuestions or SelectAllQuestions */}
						<p>
							{currentQuestion < MultipleChoiceQuestions.length
								? MultipleChoiceQuestions[currentQuestion].questionText
								: SelectAllQuestions[
										currentQuestion - MultipleChoiceQuestions.length
								  ].questionText}
						</p>
					</div>

					<div className="">
						{/* Render the appropriate answerOptions, and appropriate logic from above, if the question displayed is a MultipleChoiceQuestion or a SelectAllQuestion */}
						{currentQuestion < MultipleChoiceQuestions.length
							? MultipleChoiceQuestions[currentQuestion].answerOptions.map(
									(item) => (
										<button
											key={item.answerText}
											onClick={() => handleClick(item.isCorrect)}
											className="btn btn-lg btn-primary m-2"
										>
											{item.answerText}
										</button>
									)
							  )
							: SelectAllQuestions[
									currentQuestion - MultipleChoiceQuestions.length
							  ].answerOptions.map((item) => (
									<div className="form-check" key={item.answerText}>
										<label className="form-check-label">
											<input
												type="checkbox"
												className="form-check-input mb-2"
												value={item.answerText}
												onChange={handleCheckboxChange}
											/>
											{item.answerText}
										</label>
									</div>
							  ))}
					</div>

					{/* Render a skip question button if the currentQuestion is a MultipleChoiceQuestion or render a submit button if the currentQuestion is a SelectAllQuestion */}
					<div className="">
						{currentQuestion < MultipleChoiceQuestions.length ? (
							<button
								onClick={() => handleClick(false)}
								className="btn btn-sm btn-danger mt-4"
							>
								Skip Question
								<i className="bi bi-arrow-right-circle ms-2"></i>
							</button>
						) : (
							<button
								onClick={handleSelectAllClick}
								className="btn btn-success mt-4"
							>
								Submit Answer
							</button>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default Quiz;
