import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  //@Input() usersFromHomeComponent: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {}

  register(): void {
    console.log(this.model);
    this.accountService.register(this.model).subscribe({
      next: (_) => {
        this.cancel();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  cancel(): void {
    this.cancelRegister.emit(false);
  }
}