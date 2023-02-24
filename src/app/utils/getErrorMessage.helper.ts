import { ERROR_MESSAGES } from '../constants/forms.const';

export const getErrorMessage = (errorCode: string) => {
  return ERROR_MESSAGES[errorCode];
};
