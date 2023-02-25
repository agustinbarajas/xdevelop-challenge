import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly unsubscribe$ = new Subject();

  constructor(
    private readonly router: Router,
    private readonly userService: UserService
  ) {
    this.userService.hasSession$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((hasLogin) => {
        if (hasLogin) {
          this.router.navigate(['/']);
        }
      });
  }

  ngOnInit() {
    const hasLogin = this.userService.hasLogin();
    this.userService.hasSession$.next(hasLogin);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(false);
    this.unsubscribe$.complete();
  }
}
