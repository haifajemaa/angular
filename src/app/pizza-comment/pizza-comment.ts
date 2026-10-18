import { Component, input, output } from '@angular/core';
import { Comment } from '../comment';
import { DatePipe } from '@angular/common';

@Component({
  imports: [DatePipe],
  selector: 'hai-pizza-comment',
  styleUrl: './pizza-comment.css',
  templateUrl: './pizza-comment.html',
})
export class PizzaComment {
  comment = input.required<Comment>();
  comm = output<number>();

  onenvoye(id: number) {
    this.comm.emit(id);
  }
}