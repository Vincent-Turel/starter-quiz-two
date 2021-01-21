import {Quiz, Theme} from '../models/quiz.model';
import {Question} from '../models/question.model';

export const QUESTION_ACTOR: Question = {
    label: 'Jean Gabin a joué dans...',
    answers: [
        {
            value: 'Les tuches II',
            isCorrect: false,
        },
        {
            value: 'La grande illusion',
            isCorrect: true,
        }
    ]
};

export const QUESTION_SPORT: Question = {
  label: 'Therry Henry a joué lors de la finale de la coupe du monde 2006 ?',
  answers: [
    {
      value: 'Vrai',
      isCorrect: true,
    },
    {
      value: 'Faux',
      isCorrect: false,
    }
  ]
};

export const QUIZ_LIST: Quiz[] = [
    {
        name: 'Les Acteurs', // What's happening if I change this value..?
        theme: Theme.SeptièmeArt,
        questions: [QUESTION_ACTOR],
        creationDate: new Date(),
    },
    {
        name: 'Le Football',
        theme: Theme.Sports,
        questions: [QUESTION_SPORT],
    }
];
