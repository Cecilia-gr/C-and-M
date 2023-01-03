import { Component, Input } from '@angular/core';
import { Item } from 'src/app/class/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() item!: Item;


  constructor(private itemService: ItemService) { }

}
