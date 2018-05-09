import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;

  private allTransactions;
  private Transaction;
  private currentId;
  private errorMessage;

  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  constructor(fb: FormBuilder, private router: Router) {
    this.myForm = fb.group({
      username: this.username,
      password: this.password
    });
  };
  ngOnInit() {
  }

  onSubmit(form: FormGroup) {
    if (form.value.username === 'user') {
      this.router.navigate(['User']);
    } else if (form.value.username === 'authority') {
      this.router.navigate(['Authority']);
    }
  }
}
