import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { getErrorMessage } from 'src/app/utils/getErrorMessage.helper';
import { parseErrorsToArray } from 'src/app/utils/parseErrorsToArray.helper';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
})
export class CompanyFormComponent {
  @Input() form!: FormGroup;

  readonly getMessage = getErrorMessage;
  readonly getArray = parseErrorsToArray;
}
