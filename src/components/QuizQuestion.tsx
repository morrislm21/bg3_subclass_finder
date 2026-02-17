import type { Question } from '../data/quiz-data';
import styles from './QuizQuestion.module.css';

interface QuizQuestionProps {
  question: Question;
  selectedAnswers: number[];
  onSelectAnswer: (index: number) => void;
}

export function QuizQuestion({ question, selectedAnswers, onSelectAnswer }: QuizQuestionProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.questionText}>
        {question.text}
      </h2>
      
      <div className={styles.answersContainer}>
        {question.answers.map((answer, index) => {
          const isSelected = selectedAnswers.includes(index);
          
          return (
            <button
              key={index}
              onClick={() => onSelectAnswer(index)}
              className={`${styles.answerButton} ${isSelected ? styles.answerButtonSelected : ''}`}
            >
              {answer.text}
            </button>
          );
        })}
      </div>
    </div>
  );
}