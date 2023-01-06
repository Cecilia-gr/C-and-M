import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../class/user.model';

const initialList : User[] = [
  new User("m.dubois@mail.com","test" ,"Marie", "Dubois", "1, Av de Frane" , "75013", "Paris", "france", "06 00 00 00 00", "admin" ),
  new User("m.jeanne@mail.com","test" ,"Marie", "Jeanne")

];

const url = "https://databasecm-d26a6-default-rtdb.europe-west1.firebasedatabase.app/";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users : User[];
  private _user: BehaviorSubject<User[]>;
  private readonly user$: Observable<User[]>;
  public prom!: Promise<string>;


  constructor( public http:HttpClient) {
    this.users = [];
    this._user = new BehaviorSubject<User[]>(this.users);
    this.user$ = this._user.asObservable();
    this.prom = new Promise<string>((resolve) => {
      setTimeout(() => {
        this.users = initialList;
        this.emiter(this.users);
        resolve('fini');
      }, 1000)
    })
   }

   emiter(users: User[] = this.users): void {
    this._user.next(Object.assign([], users))
  }

  addUser(user: User) :void{
    this.users.push(user);
    this.emiter(this.users);

    this.save();
  }

  save () {
    console.log(this.users);
    this.http.put( url +'/users.json', this.users)
    .subscribe();
  }

  load () {
    this.http.get(url+'/users.json')
    .subscribe((response : any) => {
      this._user.next(Object.assign(this.users, response))
    });

  }

  getUsers(): Observable<User[]> {
    return this.user$;
  }



}
