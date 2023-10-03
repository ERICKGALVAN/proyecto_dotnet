import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  registerMode = false;
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
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

  cancelRegisterMode(event: boolean): void {
    this.registerMode = event;
  }
}
