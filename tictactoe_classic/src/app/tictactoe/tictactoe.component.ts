import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tictactoe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TicTacToeComponent {
  // Game board array
  squares: (string | null)[] = Array(9).fill(null);
  // Current player (X starts)
  currentPlayer: 'X' | 'O' = 'X';
  // Winner of the game
  winner: string | null = null;
  // Game state
  gameEnded = false;

  // Make a move in the selected square
  makeMove(idx: number): void {
    // Return if square is already filled or game has ended
    if (this.squares[idx] || this.gameEnded) {
      return;
    }

    // Place the current player's mark
    this.squares[idx] = this.currentPlayer;

    // Check for winner
    if (this.calculateWinner()) {
      this.winner = this.currentPlayer;
      this.gameEnded = true;
      return;
    }

    // Check for draw
    if (this.squares.every(square => square !== null)) {
      this.winner = 'draw';
      this.gameEnded = true;
      return;
    }

    // Switch players
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }

  // Reset the game
  newGame(): void {
    this.squares = Array(9).fill(null);
    this.currentPlayer = 'X';
    this.winner = null;
    this.gameEnded = false;
  }

  // Calculate winner based on winning combinations
  private calculateWinner(): boolean {
    const winningCombos = [
      [0, 1, 2], // Top row
      [3, 4, 5], // Middle row
      [6, 7, 8], // Bottom row
      [0, 3, 6], // Left column
      [1, 4, 7], // Middle column
      [2, 5, 8], // Right column
      [0, 4, 8], // Diagonal top-left to bottom-right
      [2, 4, 6]  // Diagonal top-right to bottom-left
    ];

    return winningCombos.some(combo => {
      const [a, b, c] = combo;
      return (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      );
    });
  }
}
