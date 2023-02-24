import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnDestroy {
  hasLogin = false;
  private readonly unsubscribe$ = new Subject();

  constructor(
    private readonly router: Router,
    private readonly userService: UserService
  ) {
    this.userService.hasSession$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((hasLogin: boolean) => {
        this.hasLogin = hasLogin;
      });
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login'], { replaceUrl: true });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(false);
    this.unsubscribe$.complete();
  }
}
