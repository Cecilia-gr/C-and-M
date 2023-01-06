import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Item } from 'src/app/class/item.model';
import { ItemService } from 'src/app/services/item.service';
// import { AngularFireDatabase } from '@angular/fire/compat/database';
// import { AngularFireStorage } from '@angular/fire/compat/storage';
import { provideDatabase,getDatabase, Database } from '@angular/fire/database';
import { provideStorage,getStorage, Storage } from '@angular/fire/storage';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
