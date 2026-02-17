import type { Question, Subclass } from '../data/quiz-data';

export function calculateScores(
  answers: Record<string, number[]>,
  questions: Question[],
  subclasses: Subclass[]
): { subclass: Subclass; score: number }[] {
  // TODO
  const scores: Record<string, number> = {};
  subclasses.forEach(subclass => {
    scores[subclass.id] = 0;
  });
  questions.forEach(question => {
    const selectedAnswers = answers[question.id] || [];
    selectedAnswers.forEach(selectedAnswer => {
      const weights = question.answers[selectedAnswer].weights;
      Object.entries(weights).forEach(([subclassId, weight]) => {
        scores[subclassId] += weight ?? 0;
      })
    });
  });
  const results = subclasses.map(subclass => ({
    subclass,
    score: scores[subclass.id]
  }))
  return results.sort((a, b) => b.score - a.score);
}