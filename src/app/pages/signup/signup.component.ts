import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { createSignupForm } from 'src/app/utils/createSignupForm.helper';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  private _signupForm: FormGroup;

  get personalForm(): FormGroup {
    return this._signupForm.controls['personalForm'] as FormGroup;
  }
  get companyForm(): FormGroup {
    return this._signupForm.controls['companyForm'] as FormGroup;
  }
  get addressForm(): FormGroup {
    return this._signupForm.controls['addressForm'] as FormGroup;
  }

  constructor(private readonly fb: FormBuilder) {
    this._signupForm = createSignupForm(this.fb);
  }

  signup() {
    if (this._signupForm.valid) {
      // TODO: Service integration for signup
    }
  }
}
