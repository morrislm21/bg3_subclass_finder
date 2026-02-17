import styles from './Intro.module.css';

interface IntroProps {
  onStart: () => void;
}

export function Intro({ onStart }: IntroProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Baldur's Gate 3</h1>
      <h2 className={styles.subtitle}>Subclass Quiz</h2>
      <p className={styles.description}>
        Answer the questions below to find your perfect subclass. 
        Choose honestly — there are no wrong answers!
      </p>
      <button className={styles.startButton} onClick={onStart}>
        Begin Your Adventure
      </button>
    </div>
  );
}