import { QuizQuestion } from './components/QuizQuestion';
import { useQuizState } from './hooks/use-quiz-state';
import { questions } from './data/quiz-questions';
import styles from './App.module.css';
import { Results } from './components/Results';
import { subclasses } from './data/quiz-data';
import { useState } from 'react';
import { Intro } from './components/Intro';

function App() {
  const [started, setStarted] = useState(false);

  const {
    currentQuestion,
    answers,
    selectAnswer,
    goToNext,
    goToPrevious,
    canProceed,
    isComplete,
    currentQuestionIndex,
  } = useQuizState(questions);

  if (!started) {
    return (
      <div className={styles.pageWrapper}>
        <Intro onStart={() => setStarted(true)} />
      </div>
    );
  }

  if (isComplete()) {
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.contentWrapper}>
          <Results
            answers={answers}
            questions={questions}
            subclasses={subclasses}
          />
        </div>
      </div>
    );
  }

  const currentAnswers = answers[currentQuestion.id] || [];

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.titleScript}>Baldur's Gate 3</h1>
        <h2 className={styles.titleSerif}>Subclass Quiz</h2>
        <p className={styles.questionCounter}>
          Question {currentQuestionIndex + 1} of {questions.length}
        </p>
        <QuizQuestion
          question={currentQuestion}
          selectedAnswers={currentAnswers}
          onSelectAnswer={selectAnswer}
        />
        <div className={styles.navigationWrapper}>
          <button
            onClick={goToPrevious}
            disabled={currentQuestionIndex === 0}
            className={styles.buttonPrevious}
          >
            Previous
          </button>
          <button
            onClick={goToNext}
            disabled={!canProceed()}
            className={styles.buttonNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;