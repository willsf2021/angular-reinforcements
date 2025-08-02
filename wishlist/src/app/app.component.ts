import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

const filter = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself'),
  ];

  listFilter: any = '0';

  newWishText = '';

  title = 'wishlist';

  get visibleItems(): WishItem[] {
    return this.items.filter(filter[this.listFilter])
  }

  addNewWish() {
    this.items.push(new WishItem(this.newWishText)); // todo: add wish to items arrays
    this.newWishText = ''; // clear the textbox
  }
  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
  }
}
