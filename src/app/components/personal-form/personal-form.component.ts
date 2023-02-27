import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { getErrorMessage } from 'src/app/utils/getErrorMessage.helper';
import { parseErrorsToArray } from 'src/app/utils/parseErrorsToArray.helper';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
})
export class PersonalFormComponent {
  @Input() form!: FormGroup;

  readonly getMessage = getErrorMessage;
  readonly getArray = parseErrorsToArray;
}
