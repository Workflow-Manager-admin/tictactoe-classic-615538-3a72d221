import { Component } from '@angular/core';
import { TicTacToeComponent } from './tictactoe/tictactoe.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TicTacToeComponent],
  template: '<app-tictactoe></app-tictactoe>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
