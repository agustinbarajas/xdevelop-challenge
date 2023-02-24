import { ValidationErrors } from '@angular/forms';

export const parseErrorsToArray = (
  errors: ValidationErrors | null | undefined
) => {
  return !errors ? [] : Object.keys(errors);
};
