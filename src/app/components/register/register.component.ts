import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm!: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  verifPassword: FormControl;




  constructor(private fb: FormBuilder, private router: Router, private userservice: UserService) {
    this.firstName = this.fb.control('', [Validators.required, Validators.minLength(3)]);
    this.lastName = this.fb.control('', [Validators.required, Validators.minLength(3)]);
    this.email = this.fb.control('', [Validators.required, Validators.email]);
    this.password = this.fb.control('', [Validators.required, Validators.minLength(3)]);
    this.verifPassword = this.fb.control('', [Validators.required, Validators.minLength(3)]);



    this.registerForm = this.fb.group({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      verifPassword: this.verifPassword


    });
  }

  onInit() {

  }

  onSumit(registerForm: FormGroup): void {
    let newUser = new User();
    newUser.firstName = registerForm.value.firstName;
    newUser.lastName = registerForm.value.lastName;
    newUser.email = registerForm.value.email;
    newUser.password = registerForm.value.password

    this.userservice.addUser(newUser);
    this.router.navigate(['user-list']);
  }


}
