import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  userForm!: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  adresse: FormControl;
  cp: FormControl;
  ville: FormControl;
  pays: FormControl;
  telephone: FormControl;
  password: FormControl;



  constructor(private fb: FormBuilder, private router: Router, private userservice: UserService) {
    this.firstName = this.fb.control('', [Validators.required, Validators.minLength(3)]);
    this.lastName = this.fb.control('', [Validators.required, Validators.minLength(3)]);
    this.email = this.fb.control('', [Validators.required, Validators.email]);
    this.adresse = this.fb.control('', [Validators.required,]);
    this.cp = this.fb.control('', [Validators.required,]);
    this.ville = this.fb.control('', [Validators.required,]);
    this.pays = this.fb.control('', [Validators.required,]);
    this.telephone = this.fb.control('', [Validators.required,]);
    this.password = this.fb.control('', [Validators.required, Validators.minLength(3)]);


    this.userForm = this.fb.group({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      adresse: this.adresse,
      cp: this.cp,
      ville: this.ville,
      pays: this.pays,
      telephone: this.telephone,
      password: this.password

    });
  }

  onInit() {

  }

  onSumit(userForm: FormGroup): void {
    this.userservice.addUser(new User(userForm.value.email, userForm.value.password, userForm.value.firstName, userForm.value.lastName, userForm.value.adresse, userForm.value.cp, userForm.value.ville, userForm.value.pays, userForm.value.telephone));
    this.router.navigate(['user-list']);
  }

}
