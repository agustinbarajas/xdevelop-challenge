import { Component } from '@angular/core';

import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  hasLogin = false;

  constructor(private readonly userService: UserService) {
    this.userService.hasSession$.subscribe((hasLogin: boolean) => {
      this.hasLogin = hasLogin;
    });
  }
}
