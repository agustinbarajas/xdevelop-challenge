import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnDestroy {
  showProgressBar = false;
  private readonly unsubscribe$ = new Subject();

  constructor(private readonly api: ApiService) {
    this.api.hasRequestLoading$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((hasRequestLoading) => {
        this.showProgressBar = hasRequestLoading;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(false);
    this.unsubscribe$.complete();
  }
}
