import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../class/item.model';

const initialList: Item[] = [
  new Item("Sac 1", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "../../../assets/sac1.jpg", 10),
  new Item("Sac 2", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "../../../assets/sac2.jpg", 20),
  new Item("Sac 3", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "../../../assets/sac3.jpg", 30)
];


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  public items: Item[];
  private item: BehaviorSubject<Item[]>;
  private readonly item$: Observable<Item[]>;
  public prom!: Promise<string>;


  constructor() {
    this.items = [];
    this.item = new BehaviorSubject<Item[]>(this.items);
    this.item$ = this.item.asObservable();
    this.prom = new Promise<string>((resolve) => {
      setTimeout(() => {
        this.items = initialList;
        this.emiter(this.items);
        resolve('fini');
      }, 1000)
    })
  }

  emiter(items: Item[] = this.items): void {
    this.item.next(Object.assign([], items))
  }

  addItem(item: Item): void {
    this.items.push(item);
    this.emiter(this.items);
  }
}
