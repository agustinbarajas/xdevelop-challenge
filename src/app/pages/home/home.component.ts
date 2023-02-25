import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import { AwardsService } from 'src/app/services/awards/awards.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  about$!: Observable<any>;
  categories$!: Observable<any>;
  judges$!: Observable<any>;

  constructor(
    private readonly sanitizer: DomSanitizer,
    private readonly awardsService: AwardsService
  ) {
    this.about$ = this.awardsService.getAboutGoulaAwards();
    this.categories$ = this.awardsService.getGoulaAwardsCategories();
    this.judges$ = this.awardsService.getGoulaAwardsJudges();
  }

  sanitizeHtml(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
