import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'myApp';
  users: any;

  constructor(private http: HttpClient) {
    console.log('AppComponent constructor called');
  }
  ngOnInit(): void {
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
}
