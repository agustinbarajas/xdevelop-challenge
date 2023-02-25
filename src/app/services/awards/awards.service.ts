import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ENDPOINTS } from 'src/app/constants/endpoints.const';
import { ApiService } from 'src/app/services/api/api.service';

@Injectable({
  providedIn: 'root',
})
export class AwardsService {
  constructor(private readonly api: ApiService) {}

  getAboutGoulaAwards(): Observable<any> {
    return this.api.get<any>({ endpoint: ENDPOINTS.GOULA_AWARDS_ABOUT });
  }

  getGoulaAwardsCategories(): Observable<any> {
    return this.api.get<any>({ endpoint: ENDPOINTS.GOULA_AWARDS_CATEGORIES });
  }

  getGoulaAwardsJudges(): Observable<any> {
    return this.api.get<any>({ endpoint: ENDPOINTS.GOULA_AWARDS_JUDGES });
  }
}
