import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';
import { IUser } from './_models/iuser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'myApp';
  users: any;

  constructor(private accountService: AccountService) {
    console.log('AppComponent constructor called');
  }
  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) {
      return;
    }
    const user: IUser = JSON.parse(localStorage.getItem('user')!);

    this.accountService.setCurrentUser(user);
  }
}
