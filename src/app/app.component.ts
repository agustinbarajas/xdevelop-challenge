import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private readonly userService: UserService) {}

  ngOnInit() {
    const hasLogin = this.userService.hasLogin();
    this.userService.hasSession$.next(hasLogin);
  }
}
