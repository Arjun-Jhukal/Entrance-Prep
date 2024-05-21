export type Subject = "Physics" | "Chemistry" | "Biology" | "Mathematics" | "English";

export interface QuestionProps {
  subject?: string;
  question: string;
  haveMultipleAnswer: boolean;
  submittedAnswer?: string[];
  actualAnswer: string[];
  isMcq: boolean;
  options?: string[];
}
