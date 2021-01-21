import { Question } from './question.model';

export enum Theme {
  SeptièmeArt = '7ème Art',
  Sports = 'Sports'
}

export interface Quiz {
    name: string;
    theme?: Theme;
    questions: Question[];
    creationDate?: Date;
}
