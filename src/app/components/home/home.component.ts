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

  public items : Item[] = [];
  private item$! : Observable<Item[]>;
  public subscribe! : Subscription |undefined;
  images = [];

  constructor(
    public itemService : ItemService,
    public afDB: Database,
    public afSG: Storage
    ){
      this.getImagesDatabase();
    }

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

  getImagesDatabase() {

    let tmp = this.afDB.app.options.storageBucket?.valueOf
    console.log(tmp);
    

    // this.afDB.list('Images').snapshotChanges(['child_added']).subscribe(images => {
    //   images.forEach(image => {
    //     console.log('Images'+ image.payload.exportVal().name);
        
    //     this.getImagesStorage(image);
    //   });
    // });
  }

  getImagesStorage(image: any) {
    // const imgRef = image.payload.exportVal().ref;
    // this.afSG.ref(imgRef).getDownloadURL().subscribe(imgUrl => {
    //   console.log(imgUrl);
    //   this.images.push({
    //     name: image.payload.exportVal().name,
    //     url: imgUrl
    //   });
    // });
  }

}
