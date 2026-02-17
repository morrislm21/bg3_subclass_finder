import { useState } from 'react';
import type { Question } from '../data/quiz-data';

export function useQuizState(questions: Question[]) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // Map of questionId -> array of selected answer indices
  const [answers, setAnswers] = useState<Record<string, number[]>>({});

  // TODO: Add functions here
  const selectAnswer = (answerIndex: number) => {
    const questionId = questions[currentQuestionIndex].id;
    const question = questions[currentQuestionIndex];
    const currentSelections = answers[questionId] || [];

    if (question.type === 'single') {
      // Single select: replace with just this answer
      setAnswers({
        ...answers,
        [questionId]: [answerIndex]
      });
    } else {
      // Multi select: toggle on/off
      if (currentSelections.includes(answerIndex)) {
        // Deselect it
        setAnswers({
          ...answers,
          [questionId]: currentSelections.filter(i => i !== answerIndex)
        });
        return;
      }
      
      // Check if we've hit maxSelections
      const maxSelections = question.maxSelections || 3;
      if (currentSelections.length >= maxSelections) {
        // Can't add more, do nothing (or show a message)
        return;
      }
      
      // Add the answer
      setAnswers({
        ...answers,
        [questionId]: [...currentSelections, answerIndex]
      });
    }
  };

  const goToNext = () => {
    setCurrentQuestionIndex(prev => prev + 1);
  };

    const goToPrevious = () => {
    setCurrentQuestionIndex(prev => prev - 1);
  };

  const canProceed = () => {
    const questionId = questions[currentQuestionIndex].id;
    const currentSelections = answers[questionId] || [];
    return currentSelections.length > 0;
  };

  const isComplete = () => {
    return currentQuestionIndex >= questions.length;
  };
  
  return {
    currentQuestionIndex,
    currentQuestion: questions[currentQuestionIndex],
    answers,
    selectAnswer,
    goToNext,
    goToPrevious,
    canProceed,
    isComplete,
  };
}