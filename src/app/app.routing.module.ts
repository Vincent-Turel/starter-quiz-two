import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {QuizListComponent} from './quizzes/quiz-list/quiz-list.component';
import {EditQuizComponent} from './quizzes/edit-quiz/edit-quiz.component';
import {UserListComponent} from './users/user-list/user-list.component';

const routes: Routes = [
  { path: 'quiz-list', component: QuizListComponent},
  { path: 'edit-user/:id', redirectTo: 'log-in'},
  { path: 'log-in', component: UserListComponent},
  { path: 'edit-quiz', component: EditQuizComponent},
  { path: 'edit-quiz/:id', component: EditQuizComponent},
  { path: '**', component: QuizListComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
