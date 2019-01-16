import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') dataForm: NgForm;
  subscriptionOptions = ['Basic', 'Advanced', 'Pro'];
  subscriptionDefault = 'Advanced';
  data = {
    email: '',
    subscription: '',
    password: ''
  };
  submitted = false;

  onSubmit() {
    this.submitted = true;

    this.data.email = this.dataForm.form.value.email;
    this.data.subscription = this.dataForm.form.value.subscription;
    this.data.password = this.dataForm.form.value.password;

    this.dataForm.reset();
  }
}
