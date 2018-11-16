import { Component } from '@angular/core';

@Component({
  selector: 'app-user_name_databinding',
  templateUrl: './user_name_databinding.component.html',
  styleUrls: ['./user_name_databinding.component.css']
})

export class UserNameDatabindingComponent {
  userName: string = '';
  newUserLabel = '';

  enableUserNameButton() {
    if (this.userName == '') {
      return false;
    }

    return true;
  }

  addUser() {
    this.newUserLabel = 'New user added: ' + this.userName;
    this.userName = '';
  }
}
