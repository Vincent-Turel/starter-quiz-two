import {Component, OnInit} from '@angular/core';
import {Quiz, Theme} from '../../../models/quiz.model';
import {ActivatedRoute} from '@angular/router';
import {QuizService} from '../../../services/quiz.service';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.scss']
})
export class EditQuizComponent implements OnInit {

  quiz: Quiz;

  constructor(private route: ActivatedRoute, private quizService: QuizService) {
    this.quiz = {
      id: 0,
      name: 'default',
      theme: Theme.SeptièmeArt,
      questions: [],
    };
  }

  ngOnInit(): void {
    const quiz = this.quizService.getQuizzesById(+this.route.snapshot.params.id);
    if (quiz === undefined) {
      throw new Error('This id doesn\'t exist : ' + this.route.snapshot.params.id);
    }
    this.quiz = quiz;
  }

}
