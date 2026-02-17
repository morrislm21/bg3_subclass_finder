import type { Question, Subclass } from "../data/quiz-data";
import { calculateScores } from "../utils/calculate-scores";
import styles from './Results.module.css';

interface ResultsProps {
  answers: Record<string, number[]>;
  questions: Question[];
  subclasses: Subclass[];
}

export function Results({answers, questions, subclasses}: ResultsProps) {
  const results = calculateScores(answers, questions, subclasses);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Results</h1>
      <p className={styles.subtitle}>Ranked by compatibility</p>
      <ul className={styles.grid}>
        {results.map((result, index) => (
          <li
            key={result.subclass.id}
            className={index < 5 ? styles[`rank${index + 1}`] : styles.card}
          >
            <span className={styles.rank}>#{index + 1}</span>
            <span className={styles.subclassName}>
              {result.subclass.class}: {result.subclass.name}
            </span>
            <span className={styles.score}>{result.score} pts</span>
          </li>
        ))}
      </ul>
    </div>
  );
}