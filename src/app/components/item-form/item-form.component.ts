import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from 'src/app/class/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent {
  itemForm!: FormGroup;
  nom: FormControl;
  description: FormControl;
  prix: FormControl;
  stock: FormControl;
  photo: FormControl;



  constructor(private fb: FormBuilder, private router: Router, private itemService: ItemService) {
    this.nom = this.fb.control('', [Validators.required, Validators.minLength(3)]);
    this.description = this.fb.control('', [Validators.required, Validators.minLength(3)]);
    this.photo = this.fb.control('', [Validators.required,]);
    this.stock = this.fb.control('', [Validators.required,]);
    this.prix = this.fb.control('', [Validators.required,]);

    this.itemForm = this.fb.group({
      nom: this.nom,
      description: this.description,
      photo: this.photo,
      prix: this.prix,
      stock: this.stock
    });
  }

  onInit() {

  }

  onSumit(itemForm: FormGroup): void {
    this.itemService.addItem(new Item( itemForm.value.nom, itemForm.value.description, itemForm.value.photo, itemForm.value.stock, itemForm.value.prix ));
    this.router.navigate(['']);
  }

}
