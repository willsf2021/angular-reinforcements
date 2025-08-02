import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  // @ = Decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('To Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself'),
  ];

  listFilter: string = '0';

  newWishText = '';

  title = 'wishlist';

  visibleItems: WishItem[] = this.items;

  filterChanged(value: any) {
    switch (value) {
      case '0':
        this.visibleItems = this.items;
        break;
      case '1':
        this.visibleItems = this.items.filter(
          (item) => !item.isComplete
        );
        break;
      case '2':
        this.visibleItems = this.items.filter(
          (item) => item.isComplete
        );
        break;
    }
  }

  addNewWish() {
    this.items.push(new WishItem(this.newWishText)); // todo: add wish to items arrays
    this.newWishText = ''; // clear the textbox
  }
  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
