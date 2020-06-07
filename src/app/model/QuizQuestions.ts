import { Option } from './Option';

export interface QuizQuestions {
  questionId: number;
  questionText: string;
  options: Option[];
  answer: string;
  explanation: string;
  selectedOption: string;
}
