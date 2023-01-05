import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Item } from 'src/app/class/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public items : Item[] = [];
  private item$! : Observable<Item[]>;
  public subscribe! : Subscription |undefined;


  constructor(public itemService : ItemService){}

  ngOnInit() {
    this.item$ = this.itemService.getItems();
    this.getItems();
    this.itemService.load();

  }

  getItems(): void {
    this.subscribe = this.item$.subscribe(items =>{this.items = items});
  }

  ngOnDestroy() :void {
    this.subscribe?.unsubscribe();
  }

  trackByFunction
  (index: number, item: any): string {
  return item.id;
  }

  // test (){
  //   this.item$ = this.itemService.getItems();
  //   this.getItems();
  //   this.itemService.load();

  // }

}
