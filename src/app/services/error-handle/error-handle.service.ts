import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandleService {
  constructor(private readonly snackBar: MatSnackBar) {}

  handle(error: HttpErrorResponse) {
    let errorMessage: string;
    if (error?.error instanceof ErrorEvent) {
      errorMessage = '¡Ocurrió un error!';
    } else {
      errorMessage = error?.error?.message;
    }
    this.snackBar.open(errorMessage, 'Cerrar');
  }
}
