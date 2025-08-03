import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import { EventService } from '../../shared/services/EventService';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css'],
})
export class WishListItemComponent {
  @Input() wish!: WishItem;

  get cssClasses() {
    return {
      'strikeout text-muted': this.wish.isComplete,
    };
  }

  constructor(private events: EventService) {}

  removeWish() {
    this.events.emit('removeWish', this.wish);
  }

  toggleFullfiled() {
    this.wish.isComplete = !this.wish.isComplete;
  }
}
