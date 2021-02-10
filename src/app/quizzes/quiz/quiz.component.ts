import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quiz } from '../../../models/quiz.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  @Input()
  quiz: Quiz;

  @Output()
  quizSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  quizSupressed: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  deleteQuiz(): void {
    this.quizSupressed.emit(this.quiz);
  }

  selectQuiz(): void {
    this.quizSelected.emit(true);
  }

  editQuiz(): void {
    this.router.navigate(['edit-quiz/' + this.quiz.id]);
  }
}
