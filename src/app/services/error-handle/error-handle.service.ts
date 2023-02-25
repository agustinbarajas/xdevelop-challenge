import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { ApiService } from 'src/app/services/api/api.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandleService {
  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly api: ApiService
  ) {}

  handle(error: HttpErrorResponse) {
    let errorMessage: string;
    if (error?.error instanceof ErrorEvent) {
      errorMessage = '¡Ocurrió un error!';
    } else {
      errorMessage = error?.error?.message;
    }
    this.snackBar.open(errorMessage, 'Cerrar');
    this.api.hasRequestLoading$.next(false);
  }
}
