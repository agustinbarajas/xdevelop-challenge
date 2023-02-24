import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { UserService } from 'src/app/services/user/user.service';
import {
  SignupResponse,
  SignupSuccessResponse,
} from 'src/app/types/request-response.type';
import { createSignupForm } from 'src/app/utils/createSignupForm.helper';
import { Participant } from './../../types/participant.type';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnDestroy {
  private _signupForm: FormGroup;
  private readonly unsubscribe$ = new Subject();

  get personalForm(): FormGroup {
    return this._signupForm.controls['personalForm'] as FormGroup;
  }
  get companyForm(): FormGroup {
    return this._signupForm.controls['companyForm'] as FormGroup;
  }
  get addressForm(): FormGroup {
    return this._signupForm.controls['addressForm'] as FormGroup;
  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly userService: UserService,
    private readonly router: Router
  ) {
    this._signupForm = createSignupForm(this.fb);
  }

  signup() {
    if (this._signupForm.valid) {
      const { personalForm, companyForm, addressForm } = this._signupForm.value;
      const participant: Participant = {
        ...personalForm,
        ...companyForm,
        ...addressForm,
      };

      this.userService
        .signup(participant)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((response: SignupResponse) => {
          if ((response as SignupSuccessResponse)?.usuario) {
            this.router.navigate(['/login'], { replaceUrl: true });
          }
        });
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next(false);
    this.unsubscribe$.complete();
  }
}
