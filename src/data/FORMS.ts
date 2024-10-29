interface Question {
  questionId: string;
  question: string;
}

interface Form {
  title: string;
  icon: JSX.Element;
  description: string;
  questions: Question[];
  answers?: string[];
}


export const FORMS = [

]
