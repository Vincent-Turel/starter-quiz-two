import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { QUIZ_LIST } from '../mocks/quiz-list.mock';
import {Question} from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

   /**
    * The list of quiz.
    * The list is retrieved from the mock.
    */
  private quizzes: Quiz[] = QUIZ_LIST;

  private url = 'https://api.myjson.com/bins/silu2';

  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizzes);

  constructor(private http: HttpClient) {
  }

  addQuiz(quiz: Quiz): void {
    quiz.id = this.quizzes[this.quizzes.length - 1].id + 1;
    this.quizzes.push(quiz);
    this.quizzes$.next(this.quizzes);
    // You need here to update the list of quiz and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
  }

  deleteQuiz(quiz: Quiz): void {
    this.quizzes.splice(this.quizzes.indexOf(quiz), 1);
    this.quizzes$.next(this.quizzes);
  }

  getQuizzes(): void {
    this.http.get<Quiz[]>(this.url)
      .subscribe(
      (quiz) => {
      this.quizzes = quiz;
      this.quizzes$.next(this.quizzes);
      console.log('got data !');
    },
        (error) => console.log('Failed to load quizzes : ', error));
  }

  getQuizzesById(id: number): Quiz | undefined {
    return this.quizzes.find(quiz => quiz.id === id);
  }

  addQuestion(id: number, question: Question): void {
    this.quizzes.find(quiz => quiz.id === id).questions.push(question);
  }
}
