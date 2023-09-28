import { HttpClient } from '@angular/common/http';
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

  constructor(
    private http: HttpClient,
    private accountService: AccountService
  ) {
    console.log('AppComponent constructor called');
  }
  ngOnInit(): void {
    this.getUsers();
    this.setCurrentUser();
  }

  getUsers() {
    this.http.get('https://localhost:5001/api/user').subscribe({
      next: (data) => {
        this.users = data;
        console.log(data);
      },
      error: (error) => {
        console.error('There was an error!', error);
      },

      complete: () => {
        console.log('Done');
      },
    });
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
