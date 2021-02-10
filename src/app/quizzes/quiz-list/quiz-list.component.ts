import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../models/quiz.model';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {

  public quizList: Quiz[] = [];

  constructor(public quizService: QuizService) {
    this.quizService.quizzes$.subscribe((quiz) => this.quizList = quiz);
  }

  ngOnInit(): void {
  }

  quizSelected(selected: boolean): void {
    console.log('event for selection received from child:', selected);
  }

  deleteQuiz(quiz: Quiz): void {
    console.log('event for suppresion received from child', quiz);
    this.quizService.deleteQuiz(quiz);
  }
}
